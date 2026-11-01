// Builds the website content from the CCVX subject folders.
//
// Copyright guard (Hard rule 1): this script works from an ALLOW LIST, not a
// block list. It only ever reads README.md, notes.md, practice.md and
// mock-exam-*.md. Everything else (exercises.md, spec.*.md, source/, img/,
// syllabus/, ccvx1-*, cvte24-*) can never reach the output. build/sources.json
// records every file that was read, so validate-content.mjs can prove it.
//
// Temporary: when a subdomain has no practice.md yet (teachers still writing),
// site/sample-content/<itemId>/practice.md is used as a stand-in and the
// sample file is logged. Delete the stand-in when the real content lands.
//
// Outputs:
//   site/public/content/catalog.json          public; titles and counts only
//   site/public/content/sample-<subject>.json public; the free sample item
//   site/build/items.json                     private; uploaded to Firestore
//   site/build/sources.json                   proof of the allow list
//   site/functions/config.generated.json      subject ids + Stripe lookup keys
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { SUBJECTS, PRICE_EUR, ACCESS_MONTHS, EXAM_SOURCE } from './content-config.mjs';

const SITE = path.resolve(import.meta.dirname, '..');
const REPO = path.resolve(SITE, '..');
const OUT_PUBLIC = path.join(SITE, 'public/content');
const OUT_BUILD = path.join(SITE, 'build');
fs.mkdirSync(OUT_PUBLIC, { recursive: true });
fs.mkdirSync(OUT_BUILD, { recursive: true });

const MD = /\.md$/i;
const ALLOWED_BASENAME = /^README\.md$|^notes\.md$|^practice\.md$|^mock-exam-\d+(-marking-scheme)?\.md$/;
const EXCLUDED_SEGMENT = new Set(['source', 'img', 'syllabus']);
const EXCLUDED_NAME = /^ccvx1-|^cvte24-/i;
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
  return fs.readFileSync(path.join(REPO, rel), 'utf8');
}
function tryReadAllowed(rel, fallbackRel) {
  try { return { md: readAllowed(rel), temp: false }; }
  catch (e) {
    if (e.code !== 'ENOENT') throw e;
    if (fallbackRel && fs.existsSync(path.join(SITE, fallbackRel))) {
      sourcesRead.push(fallbackRel);
      return { md: fs.readFileSync(path.join(SITE, fallbackRel), 'utf8'), temp: true };
    }
    return null;
  }
}

// Markdown -> HTML with links to excluded files reduced to plain text.
const EXCLUDED_HREF = /(^|\/)exercises\.md$|(^|\/)spec\.[a-z-]*\.md$|\/source\/|\/img\/|^sources?\//i;
const md = (text, ctx) => {
  const r = new marked.Renderer();
  r.link = function ({ href, text: t }) {
    if (!href) return this.parser.parseInline ? t : t;
    if (/^https?:\/\//.test(href)) return `<a href="${href}" target="_blank" rel="noopener">${t}</a>`;
    if (EXCLUDED_HREF.test(href) || EXCLUDED_NAME.test(href) || href.endsWith('.md')) {
      warnings.push(`[${ctx}] link to non-shipped file removed: ${href}`);
      return t;
    }
    return t;
  };
  r.image = function ({ href, text: t }) {
    warnings.push(`[${ctx}] image dropped (text-first v1): ${href}`);
    return '';
  };
  return marked.parse(text, { renderer: r, gfm: true }).trim();
};

function titleOf(readmeMd) {
  const m = readmeMd.match(/^#\s+(.+)$/m);
  if (!m) throw new Error('README without # title');
  return m[1].replace(/—/g, '–').trim();
}
function outcomesHtml(readmeMd, ctx) {
  const m = readmeMd.match(/^##\s+Learning outcomes[\s\S]*$/im);
  const body = m ? m[0].replace(/^##\s+Learning outcomes[^\n]*\n/i, '').split(/^##\s/m)[0]
    : readmeMd.split(/^##\s+Study material/m)[0];
  return md(body, ctx);
}

// Strict practice.md format (see site/PLAN.md §4):
// ### <id> | points <n> | outcome <code> | difficulty easy|medium|hard
// #### Question / #### Answer / #### Solution
function parseQuestions(practiceMd, ctx) {
  const blocks = practiceMd.split(/^###\s+/m).slice(1);
  const questions = [];
  for (const b of blocks) {
    const nl = b.indexOf('\n');
    const head = b.slice(0, nl);
    const parts = Object.fromEntries(head.split('|').slice(1).map((p) => {
      const kv = p.trim().match(/^(\w+)\s+(.+)$/);
      if (!kv) throw new Error(`[${ctx}] bad header field: ${p.trim()}`);
      return [kv[1], kv[2].trim()];
    }));
    const id = head.split('|')[0].trim();
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
    if (!q.id || !Number.isInteger(q.points) || q.points <= 0) throw new Error(`[${ctx}] bad id/points in: ${head}`);
    if (!['easy', 'medium', 'hard'].includes(q.difficulty)) throw new Error(`[${ctx}] ${id}: bad difficulty`);
    if (!q.questionHtml || !q.answerHtml || !q.solutionHtml) throw new Error(`[${ctx}] ${id}: missing Question/Answer/Solution`);
    questions.push(q);
  }
  return questions;
}

const humanise = (dirName) => dirName.replace(/^[A-Z0]-/, '').replace(/-/g, ' ').replace(/\b\w/g, (c, i) => i === 0 ? c.toUpperCase() : c);

const items = [];
for (const subj of SUBJECTS) {
  const subjDir = path.join(REPO, subj.dir);
  if (!fs.existsSync(subjDir)) { warnings.push(`[${subj.id}] folder ${subj.dir} does not exist yet: subject listed as in preparation`); continue; }
  let order = 0;
  for (const domainDir of fs.readdirSync(subjDir).filter((d) => {
    const p = path.join(subjDir, d);
    return fs.statSync(p).isDirectory() && !EXCLUDED_SEGMENT.has(d) && !EXCLUDED_NAME.test(d) && /^[A-Z0]-/.test(d);
  })) {
    for (const subDir of fs.readdirSync(path.join(subjDir, domainDir)).filter((d) => fs.statSync(path.join(subjDir, domainDir, d)).isDirectory())) {
      const rel = (f) => path.join(subj.dir, domainDir, subDir, f);
      if (!fs.existsSync(path.join(REPO, rel('README.md'))) || !fs.existsSync(path.join(REPO, rel('notes.md')))) {
        warnings.push(`[${subj.id}] ${subDir}: skipped (README.md or notes.md missing)`);
        continue;
      }
      const code = subDir.split('-')[0].toLowerCase();
      const id = `${subj.id}-${code}`;
      const ctx = id;
      const readme = readAllowed(rel('README.md'));
      const notes = readAllowed(rel('notes.md'));
      const pracFallback = `sample-content/${id}/practice.md`;
      const prac = tryReadAllowed(rel('practice.md'), pracFallback);
      if (prac?.temp) warnings.push(`[${ctx}] TEMPORARY sample practice.md from site/sample-content (replace when the teacher delivers)`);
      items.push({
        id, subject: subj.id, kind: 'subdomain',
        title: titleOf(readme),
        domain: domainDir.split('-')[0],
        domainName: humanise(domainDir),
        order: order += 1,
        free: id === subj.sampleItem,
        grantKeys: [subj.id],
        data: {
          outcomesHtml: outcomesHtml(readme, ctx),
          notesHtml: md(notes, ctx),
          questions: prac ? parseQuestions(prac.md, ctx) : [],
        },
      });
    }
  }
  // Mock exams at the subject root: mock-exam-1.md + mock-exam-1-marking-scheme.md
  for (const f of fs.readdirSync(subjDir).filter((f) => /^mock-exam-\d+\.md$/.test(f))) {
    const n = f.match(/\d+/)[0];
    const ctx = `${subj.id}-mock${n}`;
    const schemeFile = `mock-exam-${n}-marking-scheme.md`;
    const intro = readAllowed(path.join(subj.dir, f));
    const scheme = tryReadAllowed(path.join(subj.dir, schemeFile));
    const introText = md(intro.split(/^###\s/m)[0], ctx);
    items.push({
      id: ctx, subject: subj.id, kind: 'mock',
      title: `${subj.name} mock exam ${n}`,
      domain: 'mock', domainName: 'Mock exams',
      order: 1000 + Number(n),
      free: false, grantKeys: [subj.id],
      data: {
        introHtml: introText,
        durationMinutes: 180,
        questions: parseQuestions(intro, ctx),
        markingSchemeHtml: scheme ? md(scheme.md, ctx) : '',
      },
    });
  }
}

const ids = new Set();
for (const it of items) {
  if (ids.has(it.id)) throw new Error(`duplicate item id: ${it.id}`);
  ids.add(it.id);
}

// Public catalog: titles and counts only, never notes or questions.
const catalogSubjects = SUBJECTS.map((s) => {
  const its = items.filter((i) => i.subject === s.id);
  const subs = its.filter((i) => i.kind === 'subdomain');
  const mocks = its.filter((i) => i.kind === 'mock');
  return {
    id: s.id, name: s.name,
    priceEur: PRICE_EUR, vatIncluded: true, accessMonths: ACCESS_MONTHS,
    lookupKey: s.lookupKey,
    ready: subs.length > 0,
    exams: s.exams, registrationDeadline: s.registrationDeadline, examSource: EXAM_SOURCE,
    domains: [...new Map(subs.map((i) => [i.domain, i.domainName])).entries()].map(([id, name]) => ({ id, name })),
    subdomains: subs.sort((a, b) => a.order - b.order).map((i) => ({ id: i.id, title: i.title, domain: i.domain, questions: i.data.questions.length, free: i.free })),
    mocks: mocks.map((i) => ({ id: i.id, title: i.title, questions: i.data.questions.length, minutes: i.data.durationMinutes })),
    counts: { subdomains: subs.length, questions: subs.reduce((t, i) => t + i.data.questions.length, 0), mocks: mocks.length },
    sampleItemId: s.sampleItem,
  };
});
fs.writeFileSync(path.join(OUT_PUBLIC, 'catalog.json'), JSON.stringify({ generated: new Date().toISOString(), subjects: catalogSubjects }, null, 2));

for (const s of catalogSubjects) {
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
fs.writeFileSync(path.join(OUT_BUILD, 'sources.json'), JSON.stringify(sourcesRead.map((s) => s.split(path.sep).join('/')).sort(), null, 2));
fs.mkdirSync(path.join(SITE, 'functions'), { recursive: true });
fs.writeFileSync(path.join(SITE, 'functions/config.generated.json'), JSON.stringify({
  subjects: SUBJECTS.map((s) => ({ id: s.id, lookupKey: s.lookupKey, priceEur: PRICE_EUR, accessMonths: ACCESS_MONTHS })),
}, null, 2));

for (const w of warnings) console.warn('warn:', w);
console.log(`built ${items.length} items, ${items.filter((i) => i.free).length} free; catalog subjects: ` +
  catalogSubjects.map((s) => `${s.id}(${s.counts.subdomains} sub, ${s.counts.questions} q, ${s.counts.mocks} mock)`).join(' '));
