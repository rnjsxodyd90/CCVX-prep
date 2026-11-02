// Generates the legal pages (terms, privacy, refund) with the seller details
// from the brief. Static informational pages; no personal or paid content.
import fs from 'node:fs';
import path from 'node:path';

const SITE = path.resolve(import.meta.dirname, '..');
const OUT = path.join(SITE, 'public');

const SELLER = "Sura Steel (eenmanszaak), KvK 98957015, Jan Krosstraat 172, 2571 DD 's-Gravenhage, the Netherlands";

const shell = (title, desc, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} | CCVX Ultimate Prep</title>
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/site.css">
<style>
.legal-main { padding: 10vh var(--margin) 0; }
.legal-wrap { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 2fr); gap: clamp(24px, 5vw, 72px); align-items: start; }
.legal-main h1 { max-width: 18ch; }
.legal-rail { position: sticky; top: 96px; display: grid; gap: 10px; }
.legal-rail .railcard { background: var(--surface-2); padding: 20px 22px; }
.legal-rail .railcard h2 { font-size: 1.05rem !important; margin: 0 0 8px !important; }
.legal-rail p { font-size: 0.95rem; margin: 0; color: var(--muted); }
.legal-rail .railpic { padding: 0; }
.legal-rail .railpics { display: grid; gap: 8px; padding: 14px; }
.legal-rail .railpic > figure { margin: 0; }
.legal-rail .railpic img { width: 100%; height: 118px; object-fit: cover; display: block; filter: grayscale(1); }

@media (max-width: 900px) { .legal-wrap { grid-template-columns: 1fr; } .legal-rail { position: static; } }
.legal-main h1 { font-size: clamp(2.6rem, 5vw, 4.72rem); }
.legal-main h2 { font-size: 1.3rem; margin-top: 6vh; }
.legal-main article { min-width: 0; }
.legal-main p, .legal-main li { max-width: 68ch; overflow-wrap: break-word; }
.legal-main li { margin-bottom: 0.4em; }
.legal-main ul { padding-left: 1.2em; }
.legal-main .who { background: var(--surface-2); padding: 18px 22px; }
</style>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M4 28V8l5-4h14l5 4v20z' fill='%23b11226'/></svg>">
</head>
<body>
<header class="topbar">
  <a class="toplink toplink--left" href="/">← Back to the site</a>
  <a class="wordmark" href="/">CCVX Ultimate Prep</a>
  <a class="toplink" href="account.html">Sign in</a>
</header>
<main class="legal-main"><div class="legal-wrap"><article>${body}</article><aside class="legal-rail">
  <div class="railcard"><h2>Seller</h2><p>${SELLER}</p></div>
  <div class="railcard"><h2>Prices</h2><p>Launch price: EUR 79 per subject; bundles any 2 EUR 139, any 3 EUR 189, all 5 EUR 279. One-off, VAT included, 12 months access.</p></div>
  <div class="railcard railpics" data-mv>
  <figure class="railpic"><img src="assets/educatoriumcollegezaal.jpg" alt="A lecture hall in the Educatorium, Utrecht University, where the CCVX exams take place." width="1920" height="1440" loading="lazy" decoding="async"></figure>
  <figure class="railpic"><img src="assets/woman-teaching-geometry.jpg" alt="A teacher with set square and dividers, from a 14th-century manuscript." width="1039" height="1148" loading="lazy" decoding="async"></figure>
  <figure class="railpic"><img src="assets/commercial-chemical-laboratory-of-the-mid-18th.jpg" alt="An 18th-century commercial chemical laboratory, from a contemporary line engraving." width="1920" height="1098" loading="lazy" decoding="async"></figure>
  <figure class="railpic"><img src="assets/birmingham-proton-synchrotron-11.jpg" alt="The Birmingham proton synchrotron in 1947." width="1920" height="1152" loading="lazy" decoding="async"></figure>
  </div>
</aside></div></main>
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
      <a href="chemistry.html#sample">Free sample</a>
      <a href="index.html#pricing">Pricing</a>
      <a href="index.html#exam-dates">Exam dates</a>
      <a href="chemistry-exams.html">Past exams</a>
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
  <p class="credits">Pictures on this page: “EducatoriumCollegezaal”, “Woman teaching geometry”, “Commercial chemical laboratory of the mid 18th Century” (CC BY 4.0), “Birmingham proton synchrotron 11” — all public domain except where noted, via Wikimedia Commons.</p>
</footer>
<script src="js/motion.js" type="module"></script>
<script src="js/chrome.js" type="module"></script>
</body>
</html>
`;

const terms = shell('Terms of use', 'Terms of use for CCVX Ultimate Prep, the paid English study material for the CCVX entrance exams, sold by Sura Steel, The Hague.', `
  <h1>Terms of use</h1>
  <p>These terms govern your use of CCVX Ultimate Prep. They were last updated on 1 November 2026.</p>
  <h2>Who we are</h2>
  <p class="who">CCVX Ultimate Prep is a product of ${SELLER}. Contact us by post at that address.</p>
  <h2>What you buy</h2>
  <p>CCVX Ultimate Prep is digital study material in English for the CCVX entrance exams: notes per syllabus outcome, original practice questions with worked solutions, mock exams with marking schemes, and walkthroughs of official past exams. One purchase covers one subject or one bundle of subjects for 12 months of access, as a one-off payment, VAT included. The current prices are on the pricing page; a launch price applies for the first month after launch.</p>
  <h2>Independent material</h2>
  <p>CCVX Ultimate Prep is independent study material. It is not affiliated with or endorsed by the CCVX (Centrale Commissies Voortentamen) or any university. The CCVX's own sample exams and dates stay on ccvx.nl; we link to them and never copy them.</p>
  <h2>Your account</h2>
  <p>You need an account to use the reader. Sign-in is by Google or an email link. You are responsible for what happens under your account and for keeping sign-in emails to yourself.</p>
  <h2>Payment</h2>
  <p>Payment runs through Stripe. Your access starts as soon as Stripe confirms the payment. If a payment fails or is reversed, the related access ends.</p>
  <h2>Fair use of the material</h2>
  <p>The content is yours to study with, not to share: do not copy, republish, resell or hand on your account. We may end access for abuse, with a proportional refund where the law requires one.</p>
  <h2>No exam guarantee</h2>
  <p>We prepare you honestly and carefully: original questions, checked answers, BINAS conventions. We cannot guarantee that you will pass: that also depends on you and on the CCVX.</p>
  <h2>Liability</h2>
  <p>We work with care, but if the site or content has a fault, we repair it. If we are liable under Dutch law, our liability is limited to the amount you paid us in the twelve months before the event. Nothing in these terms limits rights you have as a consumer under mandatory Dutch or EU law.</p>
  <h2>Law and disputes</h2>
  <p>Dutch law applies. Disputes go to the competent court in The Hague, unless mandatory law gives you another court.</p>
`);

const privacy = shell('Privacy', 'Which personal data CCVX Ultimate Prep processes, why, and for how long. Short and plain.', `
  <h1>Privacy</h1>
  <p>Short version: we keep your email address and your purchases so you can sign in and read your subjects. We do not run advertisements and we do not sell data.</p>
  <h2>What we store</h2>
  <ul>
    <li>Your email address and sign-in method, in Firebase Authentication (Google). Purpose: your account.</li>
    <li>Your purchases: which subjects you bought, and until when, in Firestore (Google). Purpose: giving you access.</li>
    <li>Your Stripe customer id, linked to your account, in Firestore. Purpose: connecting payments to access.</li>
    <li>Payment details themselves (card numbers and the like) never reach us; they live at Stripe only.</li>
  </ul>
  <h2>What we do not store</h2>
  <p>We do not store your practice answers, typed work in the reader, or usage profiles for advertising. Timed mock runs stay in your browser.</p>
  <h2>Processors</h2>
  <p>Google (Firebase) hosts the site, accounts and purchase records. Stripe (Stripe Payments Europe) processes payments and handles VAT invoices. Neither may use your data for their own purposes beyond running their service.</p>
  <h2>Retention</h2>
  <p>Account and purchase records stay while you have an account and as long as tax law requires (7 years for sales records in the Netherlands). You may ask for a copy or deletion at any time by writing to us at our address.</p>
  <h2>Cookies</h2>
  <p>Only functional storage for sign-in and preferences. No tracking cookies, no analytics cookies, so no cookie banner.</p>
  <h2>Your rights</h2>
  <p>You have the right to see, correct, export or delete your data, and to complain to the Autoriteit Persoonsgegevens.</p>
`);

const refund = shell('Refund and withdrawal policy', 'Refund and withdrawal policy for digital content: what the 14-day withdrawal right means when access starts immediately, and what happens if something is broken.', `
  <h1>Refund and withdrawal policy</h1>
  <p><a class="btn" href="account.html">Your library and purchases</a></p>
  <h2>The 14-day rule, honestly explained</h2>
  <p>EU consumer law normally gives you 14 days to withdraw from an online purchase. For digital content that you use right away, the law lets the seller ask you to waive that right before delivery starts. That is what the checkout checkbox does:</p>
  <p class="who">"I understand that access starts immediately after payment, and I waive my 14-day withdrawal right, as the law allows for digital content that starts right away."</p>
  <p>Once you confirm that checkbox and pay, you cannot cancel simply because you changed your mind, because delivery has fully started.</p>
  <h2>What stays protected</h2>
  <ul>
    <li>Before you confirm the waiver: you have the full 14-day withdrawal right, and you keep it if you do not buy.</li>
    <li>If the content is faulty: you are entitled to a repair, a workable replacement, or a proportional refund, and to a full refund when repair or replacement is impossible. Faulty means, for example, unreadable pages, missing marking schemes for content that should have them, or access that does not work.</li>
    <li>If we misdescribe the product, normal consumer law applies in full.</li>
  </ul>
  <h2>How to ask</h2>
  <p>Write to us at our address (Sura Steel, Jan Krosstraat 172, 2571 DD 's-Gravenhage) with your account email and the payment date. We answer within two working days. Approved refunds go back through Stripe to the original payment method.</p>
  <h2>Complaints</h2>
  <p>If we cannot solve a complaint together, you can bring it to the Dutch consumer dispute system; we will tell you how in our answer.</p>
`);

const mv = (html) => html.replace(/<h1>/, '<h1 data-mv>').replace(/<h2>/g, '<h2 data-mv>').replace(/class="who">/g, 'class="who" data-mv>');
fs.writeFileSync(path.join(OUT, 'terms.html'), mv(terms));
fs.writeFileSync(path.join(OUT, 'privacy.html'), mv(privacy));
fs.writeFileSync(path.join(OUT, 'refund.html'), mv(refund));
console.log('legal pages built: terms.html, privacy.html, refund.html (with motion tags)');
process.exit(0);
fs.writeFileSync(path.join(OUT, 'terms.html'), terms);
fs.writeFileSync(path.join(OUT, 'privacy.html'), privacy);
fs.writeFileSync(path.join(OUT, 'refund.html'), refund);
console.log('legal pages built: terms.html, privacy.html, refund.html');
