// Builds the website content from the CCVX subject folders.
//
// Copyright guard (Hard rule 1): this script works from an ALLOW LIST, not a
// block list. It only ever reads README.md, notes.md, practice.md and
// mock-exam-*.md. Everything else (exercises.md, spec.*.md, source/, img/,
// syllabus/, ccvx1-*, cvte24-*) can never reach the output. build/sources.json
// records every file that was read, so validate-content.mjs can prove it.
//
// Coordinator contract pins:
//  1. Question ids must be exactly <itemid>-qNN, ascending from q01.
//  2. Single-level subjects (math A/B): a folder with notes.md directly at the
//     subject root is a subdomain; its domain is the first letter of its code.
//  3. Stored HTML is sanitized at build time: no script/iframe/object/embed/form.
//
// Temporary: when a subdomain has no practice.md yet (teachers still writing),
// site/sample-content/<itemId>/practice.md is used as a stand-in and logged.
//
// Outputs (main()): public/content/catalog.json, sample-<subject>.json,
// build/items.json, build/sources.json, functions/config.generated.json.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { marked } from 'marked';
import { SUBJECTS, PRICE_EUR, ACCESS_MONTHS, EXAM_SOURCE } from './content-config.mjs';

const ALLOWED_BASENAME = /^README\.md$|^notes\.md$|^practice\.md$|^mock-exam-\d+(-marking-scheme)?\.md$/;
const EXCLUDED_SEGMENT = new Set(['source', 'img', 'syllabus']);
const EXCLUDED_NAME = /^ccvx1-|^cvte24-/i;

// Pin 3: stored-HTML sanitizer (script/iframe/object/embed/form out, pairs and strays).
export function sanitize(html) {
  return html
    .replace(/<(script|iframe|object|embed|form)\b[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<(script|iframe|object|embed|form)\b[^>]*\/?>/gi, '')
    .replace(/<\/(script|iframe|object|embed|form)\s*>/gi, '');
}

export function buildItems(repoRoot, siteRoot) {
  const sourcesRead = [];
  const warnings = [];

  function readAllowed(rel) {
    const norm = rel.split(path.sep).join('/');
    const parts = norm.split('/');
    const base = parts.at(-1);
    if (!ALLOWED_BASENAME.test(base)) throw new Error(`allow-list violation: ${norm}`);
    if (parts.some((p) => EXCLUDED_SEGMENT.has(p))) throw new Error(`excluded folder: ${norm}`);
    if (EXCLUDED_NAME.test(base)) throw new Error(`excluded name: ${norm}`);
    sourcesRead.push(norm);
    return fs.readFileSync(path.join(repoRoot, rel), 'utf8');
  }
  function tryPractice(rel, itemId) {
    try { return { md: readAllowed(rel), temp: false }; }
    catch (e) {
      if (e.code !== 'ENOENT') throw e;
      const fallback = `sample-content/${itemId}/practice.md`;
      if (fs.existsSync(path.join(siteRoot, fallback))) {
        sourcesRead.push(fallback);
        return { md: fs.readFileSync(path.join(siteRoot, fallback), 'utf8'), temp: true };
      }
      return null;
    }
  }

  // Markdown -> HTML: links to non-shipped files become plain text, images are
  // dropped (text-first v1), and the result is sanitized (pin 3).
  const EXCLUDED_HREF = /(^|\/)exercises\.md$|(^|\/)spec\.[a-z-]*\.md$|\/source\/|\/img\//i;
  const md = (text, ctx) => {
    const r = new marked.Renderer();
    r.link = function ({ href, text: t }) {
      if (!href) return t;
      if (/^https?:\/\//.test(href)) return `<a href="${href}" target="_blank" rel="noopener">${t}</a>`;
      warnings.push(`[${ctx}] link to non-shipped file removed: ${href}`);
      return t;
    };
    r.image = function ({ href }) {
      warnings.push(`[${ctx}] image dropped (text-first v1): ${href}`);
      return '';
    };
    return sanitize(marked.parse(text, { renderer: r, gfm: true }).trim());
  };

  const titleOf = (readmeMd) => {
    const m = readmeMd.match(/^#\s+(.+)$/m);
    if (!m) throw new Error('README without # title');
    return m[1].replace(/—/g, '–').trim();
  };
  const outcomesHtml = (readmeMd, ctx) => {
    const m = readmeMd.match(/^##\s+Learning outcomes[\s\S]*$/im);
    const body = m ? m[0].replace(/^##\s+Learning outcomes[^\n]*\n/i, '').split(/^##\s/m)[0]
      : readmeMd.split(/^##\s+Study material/m)[0];
    return md(body, ctx);
  };

  // Strict practice.md format (site/PLAN.md §4) + pin 1: the i-th question of
  // an item must be exactly <itemid>-qNN (NN = i, zero-padded).
  function parseQuestions(practiceMd, itemId) {
    const ctx = itemId;
    const blocks = practiceMd.split(/^###\s+/m).slice(1);
    return blocks.map((b, i) => {
      const nl = b.indexOf('\n');
      const head = b.slice(0, nl);
      const id = head.split('|')[0].trim();
      const expected = `${itemId}-q${String(i + 1).padStart(2, '0')}`;
      if (id !== expected) {
        throw new Error(`[${ctx}] question ${i + 1} has id "${id}", expected exactly "${expected}" (ids are <itemid>-qNN, ascending)`);
      }
      const parts = Object.fromEntries(head.split('|').slice(1).map((p) => {
        const kv = p.trim().match(/^(\w+)\s+(.+)$/);
        if (!kv) throw new Error(`[${ctx}] bad header field: ${p.trim()}`);
        return [kv[1], kv[2].trim()];
      }));
      const get = (name) => {
        const re = new RegExp(`^####\\s+${name}\\s*$`, 'im');
        const mm = b.match(re);
        if (!mm) return '';
        const rest = b.slice(mm.index + mm[0].length);
        const next = rest.search(/^####\s/m);
        return md(next === -1 ? rest : rest.slice(0, next), `${ctx} ${id}/${name}`);
      };
      const q = {
        id,
        points: parseInt(parts.points, 10),
        outcome: parts.outcome || '',
        difficulty: parts.difficulty || '',
        questionHtml: get('Question'),
        answerHtml: get('Answer'),
        solutionHtml: get('Solution'),
      };
      if (!Number.isInteger(q.points) || q.points <= 0) throw new Error(`[${ctx}] ${id}: bad points`);
      if (!['easy', 'medium', 'hard'].includes(q.difficulty)) throw new Error(`[${ctx}] ${id}: bad difficulty`);
      if (!q.questionHtml || !q.answerHtml || !q.solutionHtml) throw new Error(`[${ctx}] ${id}: missing Question/Answer/Solution`);
      return q;
    });
  }

  const humanise = (dirName) => dirName.replace(/^[A-Z0]-/, '').replace(/-/g, ' ').replace(/\b\w/g, (c, i) => (i === 0 ? c.toUpperCase() : c));
  const has = (p) => fs.existsSync(p) && fs.statSync(p).isFile();
  const dirsIn = (p) => fs.readdirSync(p).filter((d) => {
    const full = path.join(p, d);
    return fs.statSync(full).isDirectory() && !EXCLUDED_SEGMENT.has(d) && !EXCLUDED_NAME.test(d);
  });

  const items = [];
  for (const subj of SUBJECTS) {
    const subjDir = path.join(repoRoot, subj.dir);
    if (!fs.existsSync(subjDir)) { warnings.push(`[${subj.id}] folder ${subj.dir} does not exist yet: subject listed as in preparation`); continue; }
    let order = 0;

    const addSubdomain = (domainDir, subDirRel, displayDir) => {
      const rel = (f) => path.join(subDirRel, f);
      if (!has(path.join(repoRoot, rel('README.md'))) || !has(path.join(repoRoot, rel('notes.md')))) {
        warnings.push(`[${subj.id}] ${displayDir}: skipped (README.md or notes.md missing)`);
        return;
      }
      const code = displayDir.split('-')[0].toLowerCase();
      const id = `${subj.id}-${code}`;
      const readme = readAllowed(rel('README.md'));
      const notes = readAllowed(rel('notes.md'));
      const prac = tryPractice(rel('practice.md'), id);
      if (prac?.temp) warnings.push(`[${id}] TEMPORARY sample practice.md from site/sample-content (replace when the teacher delivers)`);
      items.push({
        id, subject: subj.id, kind: 'subdomain',
        title: titleOf(readme),
        domain: domainDir.id,
        domainName: domainDir.name,
        order: order += 1,
        free: id === subj.sampleItem,
        grantKeys: [subj.id],
        data: {
          outcomesHtml: outcomesHtml(readme, id),
          notesHtml: md(notes, id),
          questions: prac ? parseQuestions(prac.md, id) : [],
        },
      });
    };

    for (const entry of dirsIn(subjDir)) {
      const entryPath = path.join(subjDir, entry);
      // Pin 2: a folder with notes.md directly at the subject root is a
      // single-level subdomain (math A/B); its domain is its code's first letter.
      if (has(path.join(entryPath, 'notes.md'))) {
        const code = entry.split('-')[0].toLowerCase();
        addSubdomain({ id: code[0].toUpperCase(), name: `Domain ${code[0].toUpperCase()}` }, path.join(subj.dir, entry), entry);
        continue;
      }
      const domain = { id: entry.split('-')[0], name: humanise(entry) };
      for (const sub of dirsIn(entryPath)) {
        addSubdomain(domain, path.join(subj.dir, entry, sub), sub);
      }
    }

    // Mock exams at the subject root: mock-exam-1.md + mock-exam-1-marking-scheme.md
    for (const f of fs.readdirSync(subjDir).filter((f) => /^mock-exam-\d+\.md$/.test(f))) {
      const n = f.match(/\d+/)[0];
      const id = `${subj.id}-mock${n}`;
      const scheme = tryPractice(path.join(subj.dir, `mock-exam-${n}-marking-scheme.md`), id);
      const mockMd = readAllowed(path.join(subj.dir, f));
      items.push({
        id, subject: subj.id, kind: 'mock',
        title: `${subj.name} mock exam ${n}`,
        domain: 'mock', domainName: 'Mock exams',
        order: 1000 + Number(n),
        free: false, grantKeys: [subj.id],
        data: {
          introHtml: md(mockMd.split(/^###\s/m)[0], id),
          durationMinutes: 180,
          questions: parseQuestions(mockMd, id),
          markingSchemeHtml: scheme ? md(scheme.md, id) : '',
        },
      });
    }
  }

  const ids = new Set();
  for (const it of items) {
    if (ids.has(it.id)) throw new Error(`duplicate item id: ${it.id}`);
    ids.add(it.id);
  }
  return { items, sources: sourcesRead, warnings };
}

export function buildCatalog(items) {
  return {
    generated: new Date().toISOString(),
    subjects: SUBJECTS.map((s) => {
      const its = items.filter((i) => i.subject === s.id);
      const subs = its.filter((i) => i.kind === 'subdomain').sort((a, b) => a.order - b.order);
      const mocks = its.filter((i) => i.kind === 'mock');
      return {
        id: s.id, name: s.name,
        priceEur: PRICE_EUR, vatIncluded: true, accessMonths: ACCESS_MONTHS,
        lookupKey: s.lookupKey,
        ready: subs.length > 0,
        exams: s.exams, registrationDeadline: s.registrationDeadline, examSource: EXAM_SOURCE,
        domains: [...new Map(subs.map((i) => [i.domain, i.domainName])).entries()].map(([id, name]) => ({ id, name })),
        subdomains: subs.map((i) => ({ id: i.id, title: i.title, domain: i.domain, questions: i.data.questions.length, free: i.free })),
        mocks: mocks.map((i) => ({ id: i.id, title: i.title, questions: i.data.questions.length, minutes: i.data.durationMinutes })),
        counts: { subdomains: subs.length, questions: subs.reduce((t, i) => t + i.data.questions.length, 0), mocks: mocks.length },
        sampleItemId: s.sampleItem,
      };
    }),
  };
}

function main() {
  const SITE = path.resolve(import.meta.dirname, '..');
  const REPO = process.env.CCVX_REPO || path.resolve(SITE, '..');
  const OUT_PUBLIC = path.join(SITE, 'public/content');
  const OUT_BUILD = path.join(SITE, 'build');
  fs.mkdirSync(OUT_PUBLIC, { recursive: true });
  fs.mkdirSync(OUT_BUILD, { recursive: true });

  const { items, sources, warnings } = buildItems(REPO, SITE);
  const catalog = buildCatalog(items);
  fs.writeFileSync(path.join(OUT_PUBLIC, 'catalog.json'), JSON.stringify(catalog, null, 2));

  for (const s of catalog.subjects) {
    if (!s.sampleItemId) continue;
    const it = items.find((i) => i.id === s.sampleItemId && i.free);
    if (!it) { warnings.push(`[${s.id}] no free sample item yet`); continue; }
    fs.writeFileSync(path.join(OUT_PUBLIC, `sample-${s.id}.json`), JSON.stringify({
      subject: s.id, itemId: it.id, title: it.title,
      outcomesHtml: it.data.outcomesHtml, notesHtml: it.data.notesHtml,
      questions: it.data.questions.slice(0, 3),
    }, null, 2));
  }

  fs.writeFileSync(path.join(OUT_BUILD, 'items.json'), JSON.stringify(items, null, 2));
  fs.writeFileSync(path.join(OUT_BUILD, 'sources.json'), JSON.stringify(sources.map((s) => s.split(path.sep).join('/')).sort(), null, 2));
  fs.mkdirSync(path.join(SITE, 'functions'), { recursive: true });
  fs.writeFileSync(path.join(SITE, 'functions/config.generated.json'), JSON.stringify({
    subjects: SUBJECTS.map((s) => ({ id: s.id, lookupKey: s.lookupKey, priceEur: PRICE_EUR, accessMonths: ACCESS_MONTHS })),
  }, null, 2));

  for (const w of warnings) console.warn('warn:', w);
  console.log(`built ${items.length} items, ${items.filter((i) => i.free).length} free; catalog subjects: ` +
    catalog.subjects.map((s) => `${s.id}(${s.counts.subdomains} sub, ${s.counts.questions} q, ${s.counts.mocks} mock)`).join(' '));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
