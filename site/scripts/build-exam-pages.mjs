// Generates the free "Past & sample exams" marketing pages (Phase 5), one
// per subject, from the curated, link-checked table in exam-links.data.mjs.
// Links to official sources only; exam content is never stored or quoted.
// Output: public/physics-exams.html, chemistry-exams.html, biology-exams.html,
// math-a-exams.html, math-b-exams.html.
import fs from 'node:fs';
import path from 'node:path';
import { SUBJECTS } from './content-config.mjs';
import { EXAM_LINKS, SUBJECT_PAGES, SUBJECT_EXAM_PAGES } from './exam-links.data.mjs';
import { launchBadge } from './pricing-config.mjs';

const SITE = path.resolve(import.meta.dirname, '..');
const OUT = path.join(SITE, 'public');
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const badge = launchBadge() || '';

const topicNames = (subjectId, catalogSubjects) => {
  const subs = catalogSubjects.find((s) => s.id === subjectId)?.subdomains || [];
  return (id) => subs.find((s) => s.id === id)?.title || id;
};

function table(rows, kindLabel, topicNamesFn) {
  const tr = rows.map((e) => `      <tr>
        <td class="yr">${e.year ?? 'sample'}</td>
        <td>${esc(e.label)}</td>
        <td class="lang">${esc(e.lang)}</td>
        <td class="topics">${e.topics.length ? e.topics.map(topicNamesFn).map(esc).join(', ') : 'spans the full syllabus'}</td>
        <td class="src">${esc(e.source)}</td>
        <td><a href="${e.paper}" target="_blank" rel="noopener">Exam paper (PDF)</a><a href="${e.answers}" target="_blank" rel="noopener">${e.lang.includes('Dutch)') || e.lang === 'Dutch' ? 'Answers' : 'Answers'}</a></td>
      </tr>`).join('\n');
  return `<table class="x-table">
    <caption>${kindLabel}. Links go to the official source and open in a new tab.</caption>
    <thead><tr><th scope="col">Year</th><th scope="col">Exam</th><th scope="col">Language</th><th scope="col">Topics</th><th scope="col">Source</th><th scope="col">Links</th></tr></thead>
    <tbody>
${tr}
    </tbody>
  </table>`;
}

const catalog = JSON.parse(fs.readFileSync(path.join(OUT, 'content/catalog.json'), 'utf8'));
let built = 0;
for (const subj of SUBJECTS) {
  const data = EXAM_LINKS[subj.id];
  if (!data) continue;
  const names = topicNames(subj.id, catalog.subjects);
  const pageFile = SUBJECT_EXAM_PAGES[subj.id];
  const rows = [...data.ccvx, ...data.cvte];
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Past and sample exams, free: ${esc(subj.name)} CCVX prep | CCVX Ultimate Prep</title>
<meta name="description" content="Every official free exam for CCVX ${esc(subj.name)} in one table: the CCVX sample exams in English and the Dutch vwo exams with marking schemes. Links to the official sources only.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/site.css">
<link rel="stylesheet" href="css/exams.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M4 28V8l5-4h14l5 4v20z' fill='%23b11226'/></svg>">
</head>
<body>
<header class="topbar">
  <a class="toplink toplink--left" href="${SUBJECT_PAGES[subj.id]}">← ${esc(subj.name)}</a>
  <a class="wordmark" href="/">CCVX Ultimate Prep</a>
  <a class="toplink" href="account.html">Sign in</a>
</header>
<main>
<section class="x-hero">
  <h1>Past and sample exams: ${esc(subj.name)}</h1>
  <p class="lead">Every official free exam that matters for the CCVX ${esc(subj.name)} exam, in one table: the CCVX's own sample exams in English first, then the newest Dutch vwo exams, which cover the same vwo-level material. We link to the official sources; we never copy or rehost exam content.</p>
  ${badge ? `<p class="offer-strip" data-launch-badge>${esc(badge)}</p>` : ''}
  <div class="x-tip tab" data-mv>Sit every exam timed: 180 minutes, BINAS beside you (chemistry, biology and physics), pen and paper, no pausing. That is the closest practice to the real sitting.</div>
</section>
<section class="x-sec" data-mv>
  <h2>CCVX sample exams</h2>
  <p>Set by the CCVX itself, in the real exam format. These are the single best measure of the level you need.</p>
  ${table(data.ccvx, 'CCVX sample exams', names)}
</section>
<section class="x-sec" data-mv>
  <h2>Dutch vwo exams, newest first</h2>
  <p>The CCVX syllabus is the Dutch vwo syllabus. The national vwo exams from the last years are the biggest pool of real, marked exam questions. In Dutch, but the content is the same.</p>
  ${table(data.cvte, 'CvTE vwo exams on examenblad.nl', names)}
  <p class="x-note">About the topics column: "spans the full syllabus" means the exam covers the subject broadly; see the syllabus map on the <a href="${SUBJECT_PAGES[subj.id]}">${esc(subj.name)} page</a>. Want step-by-step walkthroughs of the most important questions, in English? Those live in the course itself — see the free sample on the subject page.</p>
</section>
</main>
<footer class="site-footer">
  <div class="blockmark" aria-hidden="true" data-mv></div>
  <div class="cols">
    <nav aria-label="Subjects">
      <h3>Subjects</h3>
      <a href="physics.html">Physics</a>
      <a href="chemistry.html">Chemistry</a>
      <a href="biology.html">Biology</a>
      <a href="math-a.html">Mathematics A</a>
      <a href="math-b.html">Mathematics B</a>
    </nav>
    <nav aria-label="Prepare">
      <h3>Prepare</h3>
      <a href="${SUBJECT_PAGES[subj.id]}#sample">Free sample</a>
      <a href="index.html#pricing">Pricing</a>
      <a href="index.html#exam-dates">Exam dates</a>
      <a href="${pageFile}">Past exams</a>
    </nav>
    <nav aria-label="Legal">
      <h3>Legal</h3>
      <a href="terms.html">Terms</a>
      <a href="privacy.html">Privacy</a>
      <a href="refund.html">Refund policy</a>
    </nav>
    <div class="seller">
      <p>Sura Steel · KvK 98957015<br>
      Jan Krosstraat 172<br>
      2571 DD ’s-Gravenhage</p>
    </div>
  </div>
  <p class="legal-line"><span>Independent study material. Not affiliated with or endorsed by the CCVX or any university.</span><span>© 2026 Sura Steel · ccvxultimateprep.com</span></p>
</footer>
<script src="js/motion.js" type="module"></script>
<script src="js/chrome.js" type="module"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(OUT, pageFile), html);
  built++;
  console.log(`built public/${pageFile} (${rows.length} rows)`);
}
console.log(`exam pages built: ${built}`);
