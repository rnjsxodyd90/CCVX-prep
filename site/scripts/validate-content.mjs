// Validates the built content (site/build/items.json + catalog + sources).
// Fails on:
//  - any question without a question, answer and solution, or empty fields;
//  - duplicate ids anywhere;
//  - any source file outside the allow list (Hard rule 1 proof);
//  - any paid item text leaking into site/public/ (Hard rule 5);
//  - catalog counts that do not match the built items.
import fs from 'node:fs';
import path from 'node:path';

const SITE = path.resolve(import.meta.dirname, '..');
const build = (f) => JSON.parse(fs.readFileSync(path.join(SITE, 'build', f), 'utf8'));
const items = build('items.json');
const sources = build('sources.json');
const catalog = JSON.parse(fs.readFileSync(path.join(SITE, 'public/content/catalog.json'), 'utf8'));

let errors = [];
const fail = (m) => errors.push(m);

// 1. Questions and fields
const seen = new Set();
for (const it of items) {
  if (seen.has(it.id)) fail(`duplicate item id ${it.id}`);
  seen.add(it.id);
  if (!it.title?.trim()) fail(`${it.id}: empty title`);
  if (!Array.isArray(it.grantKeys) || !it.grantKeys.length) fail(`${it.id}: no grantKeys`);
  if (it.kind === 'subdomain') {
    if (!it.data.outcomesHtml?.trim()) fail(`${it.id}: empty outcomesHtml`);
    if (!it.data.notesHtml?.trim()) fail(`${it.id}: empty notesHtml`);
  }
  const qids = new Set();
  for (const q of it.data.questions || []) {
    if (qids.has(q.id)) fail(`${it.id}: duplicate question id ${q.id}`);
    qids.add(q.id);
    if (!/^([a-z]+)-([a-z0-9]+)-q\d+$/.test(q.id) && !/^[a-z]+-mock\d+-q\d+$/.test(q.id)) fail(`${it.id}: bad question id shape ${q.id}`);
    if (!q.questionHtml?.trim()) fail(`${q.id}: empty question`);
    if (!q.answerHtml?.trim()) fail(`${q.id}: empty answer`);
    if (!q.solutionHtml?.trim()) fail(`${q.id}: empty solution`);
    if (!Number.isInteger(q.points) || q.points <= 0) fail(`${q.id}: bad points`);
    if (!['easy', 'medium', 'hard'].includes(q.difficulty)) fail(`${q.id}: bad difficulty`);
  }
  if (it.kind === 'mock' && !it.data.durationMinutes) fail(`${it.id}: mock without durationMinutes`);
}

// 2. Allow list proof over the recorded sources
const ALLOWED = /(^|\/)README\.md$|(^|\/)notes\.md$|(^|\/)practice\.md$|(^|\/)mock-exam-\d+(-marking-scheme)?\.md$/;
for (const s of sources) {
  const inRepo = !s.startsWith('sample-content/');
  if (!ALLOWED.test(s)) fail(`source not on allow list: ${s}`);
  if (/(^|\/)(source|img|syllabus)(\/|$)/.test(s) && inRepo) fail(`source in excluded folder: ${s}`);
  if (/(^|\/)ccvx1-|(^|\/)cvte24-/i.test(s)) fail(`source with excluded name: ${s}`);
}

// 3. Paid content must not leak into public/
const strip = (html = '') => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const publicFiles = [];
const walk = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : publicFiles.push(p); } };
walk(path.join(SITE, 'public'));
const publicText = publicFiles.map((p) => fs.readFileSync(p, 'utf8')).join('\n');
for (const it of items.filter((i) => !i.free)) {
  const probe = (t, label) => {
    const s = strip(t).slice(0, 100);
    if (s.length >= 40 && publicText.includes(s)) fail(`${it.id} ${label} leaks into public/: "${s.slice(0, 60)}..."`);
  };
  probe(it.data.notesHtml, 'notes');
  for (const q of it.data.questions || []) { probe(q.questionHtml, q.id); probe(q.answerHtml, q.id + '/answer'); probe(q.solutionHtml, q.id + '/solution'); }
}
// 3b. The free sample file must match the free item, question for question.
for (const p of publicFiles.filter((p) => /sample-[a-z]+\.json$/.test(p))) {
  const sample = JSON.parse(fs.readFileSync(p, 'utf8'));
  const src = items.find((i) => i.id === sample.itemId);
  if (!src) { fail(`sample file ${path.basename(p)}: unknown item ${sample.itemId}`); continue; }
  if (!src.free) fail(`sample file ${path.basename(p)}: item ${sample.itemId} is not marked free`);
  const n = sample.questions?.length || 0;
  if (n !== 3 && (src.data.questions?.length || 0) >= 3) fail(`sample ${sample.itemId}: expected 3 questions, found ${n}`);
  for (let i = 0; i < n; i++) if (sample.questions[i].id !== src.data.questions[i].id) fail(`sample ${sample.itemId}: question ${i} mismatch`);
}

// 4. Catalog counts match built content
for (const cs of catalog.subjects) {
  const subs = items.filter((i) => i.subject === cs.id && i.kind === 'subdomain');
  const mocks = items.filter((i) => i.subject === cs.id && i.kind === 'mock');
  const q = subs.reduce((t, i) => t + i.data.questions.length, 0);
  if (cs.counts.subdomains !== subs.length) fail(`catalog ${cs.id}: subdomain count ${cs.counts.subdomains} != ${subs.length}`);
  if (cs.counts.questions !== q) fail(`catalog ${cs.id}: question count ${cs.counts.questions} != ${q}`);
  if (cs.counts.mocks !== mocks.length) fail(`catalog ${cs.id}: mock count ${cs.counts.mocks} != ${mocks.length}`);
  for (const c of cs.subdomains) {
    const it = items.find((i) => i.id === c.id);
    if (!it) fail(`catalog lists missing item ${c.id}`);
    else if (it.data.questions.length !== c.questions) fail(`catalog ${c.id}: question count mismatch`);
  }
}

if (errors.length) {
  for (const e of errors) console.error('FAIL:', e);
  console.error(`${errors.length} problem(s)`);
  process.exit(1);
}
const qTotal = items.reduce((t, i) => t + (i.data.questions?.length || 0), 0);
console.log(`OK: ${items.length} items, ${qTotal} questions, ${sources.length} sources read, all checks passed.`);
