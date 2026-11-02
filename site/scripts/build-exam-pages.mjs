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
        <td class="yr">${e.year ?? 'CCVX'}</td>
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

const XHERO = {
  phys: [{ src: 'assets/birmingham-proton-synchrotron-11.jpg', alt: 'The Birmingham proton synchrotron in 1947.', pos: '50%' }, { src: 'assets/light-projection-apparatus-8609416267.jpg', alt: "Optical projection apparatus from Zahn's Oculus, 1685.", pos: '30%' }],
  chem: [{ src: 'assets/a-large-chemical-laboratory-filled-with-distilling.jpg', alt: 'An 18th-century chemical laboratory full of glass apparatus, from an engraving.', pos: '40%' }, { src: 'assets/commercial-chemical-laboratory-of-the-mid-18th.jpg', alt: 'An 18th-century commercial chemical laboratory, from a contemporary line engraving.', pos: '60%' }],
  bio: [{ src: 'assets/a-grammar-of-botany-plate-iii-bhl23256050.jpg', alt: 'A botanical plate from an 1821 grammar of botany.', pos: '50%' }, { src: 'assets/educatoriumcollegezaal.jpg', alt: 'A lecture hall in the Educatorium, Utrecht University, the CCVX exam location.', pos: '30%' }],
  matha: [{ src: 'assets/woman-teaching-geometry.jpg', alt: 'A teacher with set square and dividers, from a 14th-century manuscript.', pos: '50%' }, { src: 'assets/the-first-six-books-of-the-elements.jpg', alt: "Coloured diagrams from Byrne's edition of Euclid's Elements, 1847.", pos: '50%' }],
  mathb: [{ src: 'assets/woman-teaching-geometry.jpg', alt: 'A teacher with set square and dividers, from a 14th-century manuscript.', pos: '50%' }, { src: 'assets/the-first-six-books-of-the-elements.jpg', alt: "Coloured diagrams from Byrne's edition of Euclid's Elements, 1847.", pos: '50%' }],
};
const XCITS = {
  phys: '“Birmingham proton synchrotron 11” (public domain), “Light projection apparatus” (NLM, no known copyright restrictions), “EducatoriumCollegezaal” (public domain)',
  chem: '“A large chemical laboratory filled with distilling apparatus” (CC BY 4.0), “Commercial chemical laboratory of the mid 18th Century” (CC BY 4.0), “EducatoriumCollegezaal” (public domain), “Stock lab footage” by CDC (public domain)',
  bio: '“A grammar of botany (Plate III)” by Smith, James Edward (public domain), “EducatoriumCollegezaal” (public domain), “Stock lab footage” by CDC (public domain)',
  matha: '“Woman teaching geometry”, attributed to the Meliacin Master (public domain), “The First Six Books of the Elements of Euclid” by Oliver Byrne (public domain), “EducatoriumCollegezaal” (public domain)',
  mathb: '“Woman teaching geometry”, attributed to the Meliacin Master (public domain), “The First Six Books of the Elements of Euclid” by Oliver Byrne (public domain), “EducatoriumCollegezaal” (public domain)',
};
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
<title>Past and sample exams: ${esc(subj.name)} CCVX prep | CCVX Ultimate Prep</title>
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
<section class="x-hero x-herogrid">
  <div data-mv>
  <h1 data-mv>Past exams: ${esc(subj.name)}</h1>
  <p class="lead" data-mv>Every official free exam that matters for the CCVX ${esc(subj.name)} exam, in one table: the CCVX's own sample exams in English first, then the newest Dutch vwo exams, which cover the same vwo-level material. We link to the official sources; we never copy or rehost exam content.</p>
  ${badge ? `<p class="offer-strip" data-launch-badge>${esc(badge)}</p>` : ''}
  <p><a class="btn" href="${SUBJECT_PAGES[subj.id]}#sample">Try the free ${esc(subj.name)} sample</a></p>
  <div class="x-tip tab" data-mv>Sit every exam timed: 180 minutes, BINAS beside you (chemistry, biology and physics), pen and paper, no pausing. That is the closest practice to the real sitting.</div>
  </div>
  <div class="x-heropics">
    <figure class="x-heropic tab" data-mv><img src="${XHERO[subj.id][0].src}" alt="${esc(XHERO[subj.id][0].alt)}" width="1920" height="1440" loading="lazy" decoding="async" style="object-position: 50% ${XHERO[subj.id][0].pos}"></figure>
    <figure class="x-heropic x-heropic2 tab" data-mv><img src="${XHERO[subj.id][1].src}" alt="${esc(XHERO[subj.id][1].alt)}" width="1920" height="1440" loading="lazy" decoding="async" style="object-position: 50% ${XHERO[subj.id][1].pos}"></figure>
  </div>
</section>
<section class="x-sec" data-mv>
  <h2>CCVX sample exams</h2>
  <p>Set by the CCVX itself, in the real exam format. These are the single best measure of the level you need.</p>
  ${table(data.ccvx, 'CCVX sample exams', names)}
  <div class="x-med" data-mv>
    ${['chem', 'bio'].includes(subj.id)
      ? `<figure class="x-clip"><video src="assets/stock-lab-footage.webm" poster="assets/stock-lab-footage-poster.jpg" width="854" height="480" muted loop playsinline autoplay preload="metadata" aria-label="Short clip of technicians working in a laboratory."></video></figure>`
      : `<figure class="x-clip"><img src="${XHERO[subj.id][0].src}" alt="${esc(XHERO[subj.id][0].alt)}" width="1920" height="1440" loading="lazy" decoding="async" style="object-position: 50% 80%"></figure>`}
    <figure class="x-clip"><img src="assets/educatoriumcollegezaal.jpg" alt="A lecture hall in the Educatorium, Utrecht University, the CCVX exam location." width="1920" height="1440" loading="lazy" decoding="async" style="object-position: 50% 80%"></figure>
    <p class="x-note">Do these first, timed. Then use them as the yardstick for every practice block in the course.</p>
  </div>
</section>
<section class="x-sec" data-mv>
  <h2>Dutch vwo exams, newest first</h2>
  <p>The CCVX syllabus is the Dutch vwo syllabus. The national vwo exams from the last years are the biggest pool of real, marked exam questions. In Dutch, but the content is the same.</p>
  ${table(data.cvte, 'CvTE vwo exams on examenblad.nl', names)}
  <p class="x-note">About the topics column: "spans the full syllabus" means the exam covers the subject broadly; see the syllabus map on the <a href="${SUBJECT_PAGES[subj.id]}">${esc(subj.name)} page</a>. Want step-by-step walkthroughs of the most important questions, in English? Those live in the course itself, see the free sample on the subject page.</p>
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
  <p class="legal-line"><span>Independent study material. Not affiliated with or endorsed by the CCVX or any university.</span><span>© 2026 Sura Steel · ccvxultimateprep.com</span></p>  <p class="credits">Pictures on this page: ${XCITS[subj.id]}, via Wikimedia Commons.</p>
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
