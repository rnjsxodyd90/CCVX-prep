// Generates the five subject pages from the built catalog + public samples.
// The page carries its data baked in (public information only), so it works
// without login and without fetches. Output: public/physics.html,
// chemistry.html, biology.html, math-a.html, math-b.html.
import fs from 'node:fs';
import path from 'node:path';
import { SUBJECTS } from './content-config.mjs';
import { SUBJECT_EXAM_PAGES } from './exam-links.data.mjs';
import { launchBadge } from './pricing-config.mjs';

const SITE = path.resolve(import.meta.dirname, '..');
const OUT = path.join(SITE, 'public');
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const badge = launchBadge() || '';
const PAGES = { phys: 'physics.html', chem: 'chemistry.html', bio: 'biology.html', matha: 'math-a.html', mathb: 'math-b.html' };
const BINAS_NOTE = { phys: 'BINAS is allowed in the physics exam.', chem: 'BINAS is allowed in the chemistry exam.', bio: 'BINAS is allowed in the biology exam.' };

const catalog = JSON.parse(fs.readFileSync(path.join(OUT, 'content/catalog.json'), 'utf8'));

for (const subj of SUBJECTS) {
  const cat = catalog.subjects.find((s) => s.id === subj.id);
  const sampleFile = path.join(OUT, `content/sample-${subj.id}.json`);
  const sample = fs.existsSync(sampleFile) ? JSON.parse(fs.readFileSync(sampleFile, 'utf8')) : null;
  const examsFile = SUBJECT_EXAM_PAGES[subj.id];
  const purchasable = cat.counts.subdomains > 0 && cat.counts.questions > 0;

  const domainsBlock = cat.domains.map((d) => {
    const subs = cat.subdomains.filter((s) => s.domain === d.id);
    const chips = subs.map((s) => {
      const free = s.free ? ' <span class="sp-free">free sample</span>' : '';
      const q = s.questions ? `${s.questions} questions` : 'notes';
      return `<li><a href="learn.html#${s.id}" class="sp-chip">${esc(s.title)}<span class="sp-meta">${q}${free}</span></a></li>`;
    }).join('\n');
    return `<section class="sp-domain" data-mv><h3>${d.id} · ${esc(d.name)}</h3><ul class="sp-map">${chips}</ul></section>`;
  }).join('\n');

  const ready = cat.ready;
  const heroBits = ready
    ? `<p class="sp-sub">CCVX entrance exam · ${esc(cat.exams[0].label)} · Utrecht, 13:30–16:30${cat.registrationDeadline ? ` · register by ${esc(cat.registrationDeadline)}` : ''}</p>`
    : `<p class="sp-sub">CCVX entrance exam · ${esc(cat.exams[0].label)} · Utrecht, 13:30–16:30${cat.registrationDeadline ? ` · register by ${esc(cat.registrationDeadline)}` : ''}</p><p class="sp-soon">In preparation: the course is being written right now. The exam dates are set; the content is next.</p>`;

  const counts = ready
    ? `<div class="sp-counts" aria-label="What you get">
        <p><strong>${cat.counts.subdomains}</strong> subdomains of notes</p>
        <p><strong>${cat.counts.questions}</strong> practice questions with solutions${subj.id === 'chem' && cat.counts.questions === 8 ? ' <span class="sp-meta">more every week</span>' : ''}</p>
        <p><strong>${cat.counts.mocks || '2'}</strong> full three-hour mock exams${cat.counts.mocks ? '' : ' <span class="sp-meta">in the making</span>'}</p>
        <p><strong>${cat.counts.walkthroughs || '1'}</strong> past-exam walkthrough${(cat.counts.walkthroughs || 1) === 1 ? '' : 's'}${cat.counts.walkthroughs ? '' : ' <span class="sp-meta">in the making</span>'}</p>
      </div>`
    : '';

  const buyContent = ready && purchasable
    ? `<h2>Get ${esc(subj.name)}</h2>
        <p class="sp-price">€ 79 <span class="sp-priceper">per subject, once · VAT included · 12 months access · launch price</span></p>
        <p class="sp-bundles">Bundles: any 2 subjects € 139 · any 3 € 189 · all 5 € 279.</p>
        <a class="btn" href="checkout.html?subject=${subj.id}">Buy ${esc(subj.name)}</a>`
    : ready
      ? `<h2>Get ${esc(subj.name)}</h2><p class="sp-soon" id="buy">Practice questions and mock exams are being written before this subject goes on sale. The free sample on this page already works.</p>`
      : `<h2>The sitting of ${esc(cat.exams[0].label.split(' ').slice(0, -1).join(' '))}</h2>
         <p class="sp-soon">The exams are on the calendar; the course is being written. Start with the official sample exams while the subdomains land.</p>
         <a class="btn btn--light" href="${examsFile}">Official past exams</a>`;
  const CLIP = ['chem', 'bio'].includes(subj.id)
    ? `<figure class="sp-clip" data-mv><video src="assets/stock-lab-footage.webm" poster="assets/stock-lab-footage-poster.jpg" width="854" height="480" muted loop playsinline autoplay preload="metadata" aria-label="Short clip of technicians working in a laboratory."></video></figure>`
    : '';
  const buy = `<section class="sp-buy tab" ${ready && purchasable ? 'id="buy"' : ''} data-mv>
      <div class="sp-buy-text" data-mv>${buyContent}</div>
      <figure class="sp-buy-pic" data-mv><img src="assets/educatoriumcollegezaal.jpg" alt="The Educatorium on De Uithof in Utrecht, the CCVX exam location." width="1920" height="1440" loading="lazy" decoding="async" style="object-position: 50% 80%"></figure>
    </section>`;

  const SAMPLE_EXTRA = {
    chem: `<figure class="sp-sample-pic" data-mv><img src="assets/commercial-chemical-laboratory-of-the-mid-18th.jpg" alt="An 18th-century commercial chemical laboratory, from a contemporary line engraving." width="1920" height="1098" loading="lazy" decoding="async" style="object-position: 50% 60%"></figure>`,
    bio: `<figure class="sp-sample-pic" data-mv><img src="assets/educatoriumcollegezaal.jpg" alt="A lecture hall in the Educatorium, Utrecht University, where the biology exam takes place." width="1920" height="1440" loading="lazy" decoding="async" style="object-position: 50% 30%"></figure>`,
  }[subj.id] || '';
  const sampleBlock = sample
    ? `<section class="sp-sample" id="sample" aria-label="Free sample" data-mv>
        <h2>Free sample: ${esc(sample.title)}</h2>
        <p class="sp-sampleintro">This complete subdomain is free, no account needed: its full notes and all its practice questions with worked solutions. It is exactly what the course looks like.</p>
        <script type="application/json" id="sampleData">${JSON.stringify(sample).replace(/</g, '\\u003c')}</script>
        <div class="sp-samplegrid">
          ${SAMPLE_EXTRA}
          <div class="sp-samplebody content" id="sampleBody"><p>Loading the sample…</p></div>
        </div>
      </section>`
    : '';

  const PICTURE = {
    phys: { src: 'assets/educatoriumcollegezaal.jpg', alt: 'A lecture hall in the Educatorium, Utrecht University, where the physics exam takes place.', pos: '70%' },
    chem: { src: 'assets/a-large-chemical-laboratory-filled-with-distilling.jpg', alt: 'Engraving of an 18th-century chemical laboratory full of glass distilling apparatus.', pos: '40%' },
    bio: { src: 'assets/a-grammar-of-botany-plate-iii-bhl23256050.jpg', alt: 'A botanical plate from an 1821 grammar of botany.', pos: '50%' },
    matha: { src: 'assets/woman-teaching-geometry.jpg', alt: 'A teacher with set square and dividers, from a 14th-century manuscript.', pos: '50%' },
    mathb: { src: 'assets/woman-teaching-geometry.jpg', alt: 'A teacher with set square and dividers, from a 14th-century manuscript.', pos: '50%' },
  }[subj.id];

  const PIC_CREDITS = {
    phys: '“EducatoriumCollegezaal” (public domain), “Birmingham proton synchrotron 11” (public domain), “Light projection apparatus” (NLM, no known copyright restrictions)',
    chem: '“A large chemical laboratory filled with distilling apparatus” (CC BY 4.0), “Commercial chemical laboratory of the mid 18th Century” (CC BY 4.0), “EducatoriumCollegezaal” (public domain), “Stock lab footage” by CDC (public domain)',
    bio: '“A grammar of botany (Plate III)” by Smith, James Edward (public domain), “EducatoriumCollegezaal” (public domain), “Stock lab footage” by CDC (public domain)',
    matha: '“Woman teaching geometry”, attributed to the Meliacin Master (public domain), “The First Six Books of the Elements of Euclid” by Oliver Byrne (public domain), “EducatoriumCollegezaal” (public domain)',
    mathb: '“Woman teaching geometry”, attributed to the Meliacin Master (public domain), “The First Six Books of the Elements of Euclid” by Oliver Byrne (public domain), “EducatoriumCollegezaal” (public domain)',
  }[subj.id];
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(subj.name)} CCVX prep: notes, practice, mock exams | CCVX Ultimate Prep</title>
<meta name="description" content="${esc(subj.name)} CCVX exam preparation in English: notes per syllabus outcome, original practice questions with full solutions, timed mock exams with marking schemes. EUR 79 launch price, 12 months access.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/site.css">
<link rel="stylesheet" href="css/subject.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M4 28V8l5-4h14l5 4v20z' fill='%23b11226'/></svg>">
</head>
<body data-subject="${subj.id}">
<header class="topbar">
  <a class="toplink toplink--left" href="/">← All subjects</a>
  <a class="wordmark" href="/">CCVX Ultimate Prep</a>
  <a class="toplink" href="account.html">Sign in</a>
</header>
<main>
<section class="sp-hero tab">
  <div class="sp-hero-inner">
    <div class="sp-hero-text" data-mv>
      <h1>${esc(subj.name)}</h1>
      ${heroBits}
      ${BINAS_NOTE[subj.id] ? `<p class="sp-binas">${BINAS_NOTE[subj.id]}</p>` : ''}
      ${badge ? `<p class="offer-strip" data-launch-badge>${esc(badge)}</p>` : ''}
      ${counts}
      <p class="sp-actions">${ready && purchasable
        ? `<a class="btn btn--light" href="checkout.html?subject=${subj.id}">Buy ${esc(subj.name)} · € 79</a>`
        : ready
          ? `<a class="btn btn--light" href="#sample">Try the free sample</a>`
          : `<a class="btn btn--light" href="${examsFile}">Start with the official past exams</a>`}
        <a class="sp-more" href="${examsFile}">Official past exams →</a></p>
    </div>
    <figure class="sp-hero-pic tab" data-mv><img src="${PICTURE.src}" alt="${esc(PICTURE.alt)}" width="1920" height="1440" style="object-position: 50% ${PICTURE.pos}" decoding="async"></figure>
  </div>
</section>

${sampleBlock}

<section class="sp-syllabus" id="syllabus" data-mv>
  <h2>The syllabus map</h2>
  ${ready ? `<p>Every domain and subdomain of the CCVX ${esc(subj.name)} syllabus. The free sample subdomain is marked.</p>
  ${domainsBlock}` : `<div class="sp-facts" data-mv>
    <figure class="mark-tile sp-factimg" data-mv><img src="${subj.id === 'phys' ? 'assets/birmingham-proton-synchrotron-11.jpg' : 'assets/the-first-six-books-of-the-elements.jpg'}" alt="${subj.id === 'phys' ? 'The Birmingham proton synchrotron in 1947, the physics of particle acceleration.' : "Coloured diagrams from Byrne's edition of Euclid's Elements, 1847."}" width="1920" height="1152" loading="lazy" decoding="async"></figure>
    <div class="mark-tile"><p class="big">${esc(cat.exams[0].label)}</p><p class="fact">next sitting, 13:30–16:30, Utrecht</p></div>
    ${subj.id === 'phys' ? '' : '<figure class="mark-tile sp-factimg" data-mv><img src="assets/educatoriumcollegezaal.jpg" alt="The Educatorium, Utrecht University, where Dutch university entrance exams take place." width="1920" height="1152" loading="lazy" decoding="async"></figure>'}
    <div class="mark-tile"><p class="big">3 hours</p><p class="fact">open questions, partial credit, official sample exams free on ccvx.nl</p></div>
    <div class="mark-tile"><p class="big">€ 98</p><p class="fact">exam fee per sitting, paid to the CCVX at registration</p></div>
    <div class="mark-tile"><p class="big">${(cat.exams[1] || { label: 'Around April 2027' }).label.replace('Around ', '~')}</p><p class="fact">and ${(cat.exams[2] || { label: 'July 2027' }).label.toLowerCase()}: two more rounds</p></div>
  </div>
  <p>The syllabus map appears as soon as the first subdomains are written. The material follows the official CCVX syllabus exactly.</p>`}
</section>

${buy}

<section class="sp-links" data-mv>
  <h2>Official resources</h2>
  ${!ready ? `<figure class="sp-linkpic" data-mv><img src="${subj.id === 'phys' ? 'assets/light-projection-apparatus-8609416267.jpg' : 'assets/woman-teaching-geometry.jpg'}" alt="${subj.id === 'phys' ? 'Optical projection apparatus from Zahn\'s Oculus, 1685.' : 'A teacher with set square and dividers, from a 14th-century manuscript.'}" width="1920" height="2837" loading="lazy" decoding="async"></figure>` : ''}
  <ul class="sp-official" data-mv>
    <li><a href="${examsFile}">Past and sample exams: ${esc(subj.name)}</a>, every official free exam, with the tip to time yourself for 180 minutes</li>
    <li><a href="${esc(cat.examSource)}" target="_blank" rel="noopener">CCVX: dates, registration and sample exams (${esc(new URL(cat.examSource).hostname)})</a></li>
    ${CLIP}
    <li><a href="${SUBJECTS_EXAMS_OVERVIEW()}" target="_blank" rel="noopener">The CCVX's own preparation advice</a></li>
  </ul>
</section>

</main>
<script type="application/json" id="catalogSlice">${JSON.stringify({ subject: subj.id, counts: cat.counts, pricing: catalog.pricing }).replace(/</g, '\\u003c')}</script>
<script src="js/motion.js" type="module"></script>
<script src="js/chrome.js" type="module"></script>
<script src="js/subject.js" type="module"></script>
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
      <a href="#sample">Free sample</a>
      <a href="index.html#pricing">Pricing</a>
      <a href="index.html#exam-dates">Exam dates</a>
      <a href="${examsFile}">Past exams</a>
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
  <p class="credits">Pictures on this page: ${PIC_CREDITS}, via Wikimedia Commons.</p>
</footer>
</body>
</html>
`;
  fs.writeFileSync(path.join(OUT, PAGES[subj.id]), html);
  console.log(`built public/${PAGES[subj.id]} (${ready ? 'ready' : 'in preparation'}, purchasable=${purchasable}, sample=${!!sample})`);
}

function SUBJECTS_EXAMS_OVERVIEW() { return 'https://www.ccvx.nl/Voorbereidingsmogelijkheden%20-%20EN.html'; }
