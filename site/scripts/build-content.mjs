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
import { SUBJECTS, EXAM_SOURCE } from './content-config.mjs';
import { ACCESS_MONTHS, BUNDLES, activePrices, launchBadge, lookupKeyFor } from './pricing-config.mjs';

const ACTIVE = activePrices(); // launch until the owner flips regular prices on

const ALLOWED_BASENAME = /^README\.md$|^notes\.md$|^practice\.md$|^mock-exam-\d+(-marking-scheme)?\.md$/;
const ALLOWED_PAST_EXAMS = /(^|\/)past-exams\/[a-z0-9-]+\.md$/i;
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
    if (!ALLOWED_BASENAME.test(base) && !ALLOWED_PAST_EXAMS.test(norm)) throw new Error(`allow-list violation: ${norm}`);
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
  // Mermaid guard: mermaid code blocks never render raw in the product.
  // The one calculation scheme lives in chem-c02; it is replaced by an
  // ORIGINAL flat drawing of the standard mole-ratio scheme (not copied from
  // any source). Any other mermaid block is dropped with a warning until the
  // teacher draws an original SVG for it (PLAN.md image rule).
  const CALC_SCHEME_SVG = `<figure class="calcscheme" role="img" aria-label="Every conversion between volume, mass, amount of substance, number of particles, gas volume and concentration runs through the amount of substance n.">
<svg viewBox="0 0 680 250" width="680" height="250" xmlns="http://www.w3.org/2000/svg" font-family="Albert Sans, sans-serif">
  <defs><style>
    .bx { fill: #efefef; } .bx-acc { fill: #b11226; }
    .t { fill: #0a0a0a; font-size: 15px; font-weight: 500; }
    .ta { fill: #ffffff; font-size: 15px; font-weight: 600; }
    .ln { stroke: #efefef; stroke-width: 2; }
    .lb { fill: #b11226; font-size: 13px; font-weight: 600; }
  </style></defs>
  <rect class="bx" x="20" y="92" width="128" height="66"/>
  <text class="t" x="84" y="120" text-anchor="middle">volume</text>
  <text class="t" x="84" y="140" text-anchor="middle">solid / liquid</text>
  <rect class="bx" x="205" y="92" width="100" height="66"/>
  <text class="t" x="255" y="133" text-anchor="middle">mass m</text>
  <rect class="bx-acc" x="362" y="92" width="126" height="66"/>
  <text class="ta" x="425" y="120" text-anchor="middle">amount n</text>
  <text class="ta" x="425" y="140" text-anchor="middle">in mol</text>
  <rect class="bx" x="545" y="92" width="115" height="66"/>
  <text class="t" x="602" y="120" text-anchor="middle">number of</text>
  <text class="t" x="602" y="140" text-anchor="middle">particles N</text>
  <rect class="bx" x="360" y="18" width="130" height="56"/>
  <text class="t" x="425" y="41" text-anchor="middle">gas volume</text>
  <rect class="bx" x="360" y="176" width="130" height="56"/>
  <text class="t" x="425" y="199" text-anchor="middle">solution</text>
  <text class="t" x="425" y="219" text-anchor="middle">volume × c(X)</text>
  <path class="ln" d="M148 125 H205 M176 112 l12 13 -12 13 M181 125 h-0.5"/>
  <path class="ln" d="M305 125 H362 M332 112 l12 13 -12 13 M338 125 h-0.5"/>
  <path class="ln" d="M488 125 H545 M516 112 l12 13 -12 13 M522 125 h-0.5"/>
  <path class="ln" d="M470 74 V92 M483 79 l-13 8 0.7 13"/>
  <path class="ln" d="M425 158 V176"/>
  <text class="lb" x="176" y="102" text-anchor="middle">× ρ</text>
  <text class="lb" x="176" y="160" text-anchor="middle">÷ ρ</text>
  <text class="lb" x="333" y="102" text-anchor="middle">÷ M</text>
  <text class="lb" x="333" y="160" text-anchor="middle">× M</text>
  <text class="lb" x="516" y="102" text-anchor="middle">× N<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text class="lb" x="516" y="160" text-anchor="middle">÷ N<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text class="lb" x="500" y="66" text-anchor="middle">÷ V<tspan baseline-shift="sub" font-size="10">m</tspan> / × V<tspan baseline-shift="sub" font-size="10">m</tspan></text>
  <text class="lb" x="500" y="212" text-anchor="middle">× c / ÷ c</text>
</svg></figure>`;
  const MERMAID_REPLACEMENTS = { 'chem-c02': CALC_SCHEME_SVG };
  const mermaidGuard = (html, ctx) => html.replace(/<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g, () => {
    if (MERMAID_REPLACEMENTS[ctx]) return MERMAID_REPLACEMENTS[ctx];
    warnings.push(`[${ctx}] mermaid block dropped (text-first v1); teacher draws an original SVG instead`);
    return '';
  });

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
    return mermaidGuard(sanitize(marked.parse(text, { renderer: r, gfm: true }).trim()), ctx);
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

  // Walkthroughs (Phase 5): CCVX-<subject>/past-exams/<slug>.md.
  // Header fields: official / year / paper / answers (URLs of the official
  // documents). Per question: "## Question N (official paper)" with the
  // labelled lines ask / subdomain / binas / points / mistakes, then a
  // "solution:" block in markdown. Question ids are <itemId>-qNN ascending.
  function parseWalkthrough(mdText, itemId) {
    const head = {};
    let rest = mdText.replace(/^<!--[\s\S]*?-->/, '');
    for (const key of ['official', 'year', 'paper', 'answers']) {
      const m = rest.match(new RegExp(`^${key}:\\s*(.+)$`, 'im'));
      if (m) { head[key] = m[1].trim(); rest = rest.replace(m[0], ''); }
    }
    for (const key of ['official', 'year', 'paper', 'answers']) {
      if (!head[key]) throw new Error(`[${itemId}] walkthrough header missing: ${key}`);
    }
    if (!/^\d{4}$/.test(head.year)) throw new Error(`[${itemId}] bad year: ${head.year}`);
    for (const k of ['paper', 'answers']) if (!/^https?:\/\//.test(head[k])) throw new Error(`[${itemId}] ${k} must be a URL`);
    const title = (rest.match(/^#\s+(.+)$/m)?.[1] || head.official).trim();
    const parts = rest.split(/^##\s+Question\s+(\d+)\s*\(official paper\)\s*$/m);
    const introHtml = md(parts[0].replace(/^#\s+.*$/m, '').trim() || '_No intro._', itemId);
    const questions = [];
    for (let i = 1; i < parts.length; i += 2) {
      const idx = Number(parts[i]);
      if (idx !== (i + 1) / 2) throw new Error(`[${itemId}] questions must be numbered 1, 2, 3... in order (found ${idx})`);
      const body = parts[i + 1];
      const q = { id: `${itemId}-q${String(idx).padStart(2, '0')}`, index: idx };
      const fields = {};
      const lines = body.split('\n');
      let solStart = -1;
      lines.forEach((ln, li) => {
        const kv = ln.match(/^(ask|subdomain|binas|points|mistakes):\s*(.+)$/);
        if (kv) fields[kv[1]] = kv[2].trim();
        if (/^solution:\s*$/.test(ln.trim())) solStart = li;
      });
      for (const f of ['ask', 'subdomain', 'binas', 'points', 'mistakes']) {
        if (!fields[f]) throw new Error(`[${itemId}] question ${idx}: missing field "${f}"`);
      }
      if (solStart === -1) throw new Error(`[${itemId}] question ${idx}: missing "solution:" block`);
      q.askHtml = md(fields.ask, itemId);
      q.subdomainId = fields.subdomain;
      q.binas = fields.binas;
      q.points = parseInt(fields.points, 10);
      if (!Number.isInteger(q.points) || q.points <= 0) throw new Error(`[${itemId}] question ${idx}: bad points`);
      q.mistakesHtml = md(fields.mistakes, itemId);
      q.solutionHtml = md(lines.slice(solStart + 1).join('\n'), itemId);
      if (!q.solutionHtml) throw new Error(`[${itemId}] question ${idx}: empty solution`);
      questions.push(q);
    }
    if (!questions.length) throw new Error(`[${itemId}] walkthrough without questions`);
    return { head, title, introHtml, questions };
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

    // Walkthroughs (Phase 5): repo past-exams/*.md, or the temporary
    // site/sample-content fallback until the teachers deliver.
    {
      const peDir = path.join(subjDir, 'past-exams');
      let peFiles = [];
      let peBaseRel = path.join(subj.dir, 'past-exams');
      let tempPe = false;
      if (fs.existsSync(peDir)) {
        peFiles = fs.readdirSync(peDir).filter((f) => /^[a-z0-9-]+\.md$/i.test(f) && !EXCLUDED_NAME.test(f)).sort();
      }
      if (!peFiles.length) {
        const tempDir = path.join(siteRoot, 'sample-content/past-exams');
        const mine = fs.existsSync(tempDir) ? fs.readdirSync(tempDir).filter((f) => f.startsWith(`${subj.id}-`) && f.endsWith('.md')).sort() : [];
        if (mine.length) {
          peFiles = mine;
          peBaseRel = 'sample-content/past-exams';
          tempPe = true;
        }
      }
      let wi = 0;
      for (const f of peFiles) {
        const rel = path.join(peBaseRel, f);
        const slug = f.replace(/\.md$/i, '');
        const id = slug.startsWith(`${subj.id}-`) ? slug : `${subj.id}-${slug}`;
        let raw;
        if (tempPe) {
          sourcesRead.push(rel);
          raw = fs.readFileSync(path.join(siteRoot, rel), 'utf8');
          warnings.push(`[${id}] TEMPORARY sample walkthrough from site/sample-content (replace when the teacher delivers)`);
        } else {
          raw = readAllowed(rel);
        }
        const wt = parseWalkthrough(raw, id);
        items.push({
          id, subject: subj.id, kind: 'walkthrough',
          title: wt.title,
          domain: 'past-exams', domainName: 'Past exams',
          order: 900 + (wi += 1),
          free: false, grantKeys: [subj.id],
          data: {
            officialTitle: wt.head.official,
            year: wt.head.year,
            paperUrl: wt.head.paper,
            answersUrl: wt.head.answers,
            introHtml: wt.introHtml,
            questions: wt.questions,
          },
        });
      }
    }
  }

  // Walkthrough subdomain references must exist.
  for (const it of items.filter((i) => i.kind === 'walkthrough')) {
    const subs = new Set(items.filter((i) => i.subject === it.subject && i.kind === 'subdomain').map((i) => i.id));
    for (const q of it.data.questions) {
      if (!subs.has(q.subdomainId)) throw new Error(`[${it.id}] ${q.id}: unknown subdomain "${q.subdomainId}" for subject ${it.subject}`);
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
    pricing: {
      offer: ACTIVE.launch ? 'launch' : 'regular',
      badge: launchBadge(),
      launchEnd: ACTIVE.launchEnd ? ACTIVE.launchEnd.toISOString().slice(0, 10) : null,
      pricePerSubject: ACTIVE.prices.subject,
      bundles: BUNDLES.map((b) => {
        const price = ACTIVE.prices[b.id];
        return { count: b.count, id: b.id, priceEur: price, perSubject: Math.round((price / b.count) * 100) / 100 };
      }),
      vatIncluded: true,
      accessMonths: ACCESS_MONTHS,
    },
    subjects: SUBJECTS.map((s) => {
      const its = items.filter((i) => i.subject === s.id);
      const subs = its.filter((i) => i.kind === 'subdomain').sort((a, b) => a.order - b.order);
      const mocks = its.filter((i) => i.kind === 'mock');
      return {
        id: s.id, name: s.name,
        priceEur: ACTIVE.prices.subject, vatIncluded: true, accessMonths: ACCESS_MONTHS,
        lookupKey: s.lookupKey,
        ready: subs.length > 0,
        exams: s.exams, registrationDeadline: s.registrationDeadline, examSource: EXAM_SOURCE,
        domains: [...new Map(subs.map((i) => [i.domain, i.domainName])).entries()].map(([id, name]) => ({ id, name })),
        subdomains: subs.map((i) => ({ id: i.id, title: i.title, domain: i.domain, questions: i.data.questions.length, free: i.free })),
        mocks: mocks.map((i) => ({ id: i.id, title: i.title, questions: i.data.questions.length, minutes: i.data.durationMinutes })),
        walkthroughs: its.filter((i) => i.kind === 'walkthrough').map((i) => ({ id: i.id, title: i.title, officialTitle: i.data.officialTitle, year: i.data.year, questions: i.data.questions.length })),
        counts: {
          subdomains: subs.length,
          questions: subs.reduce((t, i) => t + i.data.questions.length, 0),
          mocks: mocks.length,
          walkthroughs: its.filter((i) => i.kind === 'walkthrough').length,
        },
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
      // owner-confirmed sample unit: the COMPLETE subdomain, all questions
      questions: it.data.questions,
    }, null, 2));
  }

  fs.writeFileSync(path.join(OUT_BUILD, 'items.json'), JSON.stringify(items, null, 2));
  fs.writeFileSync(path.join(OUT_BUILD, 'sources.json'), JSON.stringify(sources.map((s) => s.split(path.sep).join('/')).sort(), null, 2));
  fs.mkdirSync(path.join(SITE, 'functions'), { recursive: true });
  fs.writeFileSync(path.join(SITE, 'functions/config.generated.json'), JSON.stringify({
    subjects: SUBJECTS.map((s) => ({ id: s.id, lookupKey: s.lookupKey, priceEur: ACTIVE.prices.subject, accessMonths: ACCESS_MONTHS })),
    bundles: BUNDLES.map((b) => ({ id: b.id, count: b.count, lookupKey: lookupKeyFor(b.id), priceEur: ACTIVE.prices[b.id] })),
    priceForCount: { 1: ACTIVE.prices.subject, 2: ACTIVE.prices.bundle2, 3: ACTIVE.prices.bundle3, 5: ACTIVE.prices.bundle5 },
  }, null, 2));

  for (const w of warnings) console.warn('warn:', w);
  console.log(`built ${items.length} items, ${items.filter((i) => i.free).length} free; catalog subjects: ` +
    catalog.subjects.map((s) => `${s.id}(${s.counts.subdomains} sub, ${s.counts.questions} q, ${s.counts.mocks} mock)`).join(' '));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
