// The study reader: notes, practice with show-solution, timed mock mode,
// past-exam walkthroughs. Paid items arrive only when the Firestore rules
// allow them (purchase grant); free sample items read without one.
import { onUser, logout, googleLogin, emailLinkLogin, completeEmailLinkLogin, getEntitlements } from './firebase-app.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { db } from './firebase-app.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const SUBJECTS = { phys: 'Physics', chem: 'Chemistry', bio: 'Biology', matha: 'Mathematics A', mathb: 'Mathematics B' };

let user = null;
let ent = null;
let catalog = null;
let item = null;

const after = () => ent?.activeUntil?.toDate?.() > new Date();
const granted = (keys) => item?.free || (after() && (keys || []).some((k) => (ent?.grants || []).includes(k)));

async function loadCatalog() { catalog = await (await fetch('/content/catalog.json')).json(); }

function renderLogin() {
  $('#app').innerHTML = `
    <div class="lr-loginwrap">
      <div class="lr-pitch">
        <h1>The study reader</h1>
        <p>Your library opened: notes per outcome, practice questions with worked solutions, timed mock exams and past-exam walkthroughs, one subject at a time.</p>
        <p>The complete sample subdomains are free on the subject pages: no account needed.</p>
      </div>
      <div class="lr-login tab" data-mv>
        <h2>Sign in</h2>
        <div class="acc-actions">
          <button class="btn" data-g>Continue with Google</button>
          <form data-e class="acc-row"><input type="email" name="email" required placeholder="you@example.com" autocomplete="email" aria-label="Email for a sign-in link"><button class="btn btn--light" type="submit">Email me a link</button></form>
        </div>
        <p class="smallnote" data-n hidden>Link sent. In this local run it also appears in the Firebase emulator log.</p>
      </div>
    </div>`;
  $('[data-g]').onclick = () => googleLogin();
  $('[data-e]').onsubmit = async (ev) => { ev.preventDefault(); await emailLinkLogin(new FormData(ev.target).get('email')); $('[data-n]').hidden = false; };
}

function subjectOfRoute() {
  const h = location.hash.slice(1) || new URLSearchParams(location.search).get('subject') || 'chem';
  return SUBJECTS[h] ? h : (catalog.subjects.find((s) => s.subdomains.some((d) => d.id === h) || s.mocks.some((m) => m.id === h) || s.walkthroughs.some((w) => w.id === h))?.id || h.split('-')[0]);
}
function itemIdOfRoute() { const h = location.hash.slice(1); return h.includes('-') ? h : null; }

function renderShell() {
  const sid = subjectOfRoute();
  const cs = catalog.subjects.find((s) => s.id === sid);
  const ownedSubs = new Set(after() ? (ent?.grants || []) : []);
  const tabs = catalog.subjects.map((s) => {
    const owned = ownedSubs.has(s.id) || s.subdomains.some((d) => d.free);
    return `<a class="lr-tab ${s.id === sid ? 'on' : ''} ${owned ? '' : 'lock'}" href="learn.html#${s.id}" title="${esc(s.name)}${owned ? '' : ' (not in your library)'}">${esc(s.name)}</a>`;
  }).join('');
  const list = [
    ...cs.subdomains.map((d) => ({ id: d.id, title: d.title, kind: 'subdomain', free: d.free, q: d.questions })),
    ...cs.walkthroughs.map((w) => ({ id: w.id, title: w.title, kind: 'walkthrough', free: false, q: w.questions })),
    ...cs.mocks.map((m) => ({ id: m.id, title: m.title, kind: 'mock', free: false, q: m.questions })),
  ];
  const owned = ownedSubs.has(sid);
  const rows = list.map((it) => {
    const locked = !it.free && !owned;
    return `<a class="lr-row ${it.id === itemIdOfRoute() ? 'on' : ''} ${locked ? 'lock' : ''}" href="learn.html#${it.id}">
      <span class="lr-title">${esc(it.title)}</span>
      <span class="lr-meta">${it.kind === 'mock' ? 'mock · 180 min' : it.kind === 'walkthrough' ? 'walkthrough' : it.free ? 'free sample' : `${it.q} questions`}${locked ? ' · members' : ''}</span>
    </a>`;
  }).join('');
  $('#app').innerHTML = `
    <nav class="lr-tabs">${tabs}<a class="lr-home" href="account.html">Library</a></nav>
    <div class="lr-cols">
      <aside class="lr-side">${rows}</aside>
      <section class="lr-main" id="main"><p class="lr-wait">Loading…</p></section>
    </div>`;
}

function renderPaywall(it) {
  $('#main').innerHTML = `
    <div class="lr-paywall tab">
      <h2>${SUBJECTS[it.subject]} is not in your library yet</h2>
      <p>This ${it.kind === 'mock' ? 'mock exam' : it.kind === 'walkthrough' ? 'walkthrough' : 'subdomain'} is part of the paid course. One payment of EUR 79 (launch price) adds the whole subject, VAT included, for 12 months. Bundles: any 2 subjects EUR 139, any 3 EUR 189, all 5 EUR 279.</p>
      <p>The subdomain <strong>${(catalog.subjects.find((s) => s.id === it.subject)?.sampleItemId) || ''}</strong> is the free sample: full notes and all practice questions, no account needed on the subject page.</p>
      <a class="btn" href="checkout.html?subject=${it.subject}">Buy ${SUBJECTS[it.subject]}</a>
      <p class="smallnote"><a href="${it.subject === 'phys' ? 'physics' : it.subject === 'chem' ? 'chemistry' : it.subject === 'bio' ? 'biology' : it.subject === 'matha' ? 'math-a' : 'math-b'}.html#sample">Open the free sample</a></p>
    </div>`;
}

function qCard(q, i, { solution = true, marks = false } = {}) {
  return `<article class="lr-q" id="${q.id}">
    <header><span>Question ${i + 1}</span><span class="lr-qmeta">${q.points} ${q.points === 1 ? 'point' : 'points'}${q.difficulty ? ' · ' + q.difficulty : ''}${q.outcome ? ' · ' + q.outcome : ''}</span></header>
    <div class="content">${q.questionHtml}</div>
    ${marks ? `<textarea class="lr-ans" rows="4" placeholder="Your working, like on paper." aria-label="Your working for question ${i + 1}"></textarea>` : ''}
    ${solution ? `<details><summary>Show the worked answer<span class="plus"></span></summary><div class="lr-sol">${q.solutionHtml}<p class="lr-ansline">Answer: ${q.answerHtml}</p></div></details>` : ''}
  </article>`;
}

function renderSubdomain(it) {
  $('#main').innerHTML = `
    <header class="lr-itemhead">
      <h1>${esc(it.title)}</h1>
      ${it.free ? '<p class="lr-free tab">Free sample · this complete subdomain is public</p>' : ''}
    </header>
    <div class="lr-notes content"><h2>Notes</h2>${it.data.notesHtml.replace(/^<h1>(.*?)<\/h1>/, '<h3>$1</h3>')}</div>
    <div class="lr-outcomes content"><h2>Syllabus outcomes</h2>${it.data.outcomesHtml}</div>
    <h2>Practice (${it.data.questions.length})</h2>
    ${it.data.questions.length ? it.data.questions.map((q, i) => qCard(q, i)).join('') : '<p class="smallnote">Practice questions for this subdomain are being written.</p>'}`;
}

let timer = null;
function renderMock(it) {
  $('#main').innerHTML = `
    <header class="lr-itemhead"><h1>${esc(it.title)}</h1><p class="smallnote">Open questions, partial credit, BINAS allowed. Three hours, like the real sitting.</p></header>
    <div class="lr-mockintro content">${it.data.introHtml}</div>
    <div class="lr-mockbar tab">
      <p class="lr-clock" id="clock">3:00:00</p>
      <button class="btn" id="startMock">Start the timed run</button>
    </div>
    <div id="mockQs" hidden>
      ${it.data.questions.map((q, i) => qCard(q, i, { solution: false, marks: true })).join('')}
      <button class="btn" id="finishMock">Finish and show the marking scheme</button>
    </div>
    <div id="mockScheme" hidden>
      <h2>Marking scheme</h2>
      <div class="content">${it.data.markingSchemeHtml || '<p>Being written.</p>'}</div>
      ${it.data.questions.map((q, i) => qCard(q, i)).join('')}
    </div>`;
  $('#startMock').onclick = () => {
    $('#mockQs').hidden = false;
    $('#startMock').disabled = true;
    const end = Date.now() + it.data.durationMinutes * 60000;
    sessionStorage.setItem(`mock-end-${it.id}`, String(end));
    tick(end);
    timer = setInterval(() => tick(end), 1000);
  };
  const resume = Number(sessionStorage.getItem(`mock-end-${it.id}`) || 0);
  if (resume > Date.now()) { $('#mockQs').hidden = false; $('#startMock').disabled = true; tick(resume); timer = setInterval(() => tick(resume), 1000); }
  $('#finishMock').onclick = () => {
    clearInterval(timer);
    sessionStorage.removeItem(`mock-end-${it.id}`);
    $('#mockScheme').hidden = false;
    $('#clock').textContent = 'Finished';
  };
  function tick(end) {
    const left = Math.max(0, end - Date.now());
    const h = Math.floor(left / 3600000), m = Math.floor(left / 60000) % 60, s = Math.floor(left / 1000) % 60;
    $('#clock').textContent = `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (!left) { clearInterval(timer); $('#clock').textContent = 'Time is up'; $('#mockScheme').hidden = false; }
  }
}

function renderWalkthrough(it) {
  const links = [
    it.data.paperUrl ? `<a href="${it.data.paperUrl}" target="_blank" rel="noopener">exam (${it.data.year})</a>` : '',
    it.data.answersUrl ? `<a href="${it.data.answersUrl}" target="_blank" rel="noopener">official answers</a>` : '',
  ].filter(Boolean).join(' · ');
  $('#main').innerHTML = `
    <header class="lr-itemhead">
      <h1>${esc(it.data.officialTitle)}</h1>
      <p class="smallnote">${links ? `Official paper: ${links}. ` : ''}The asks are paraphrased; the solutions, binas hints and mistakes notes are ours.</p>
    </header>
    <div class="content lr-wtintro">${it.data.introHtml}</div>
    ${it.data.questions.map((q) => `
      <article class="lr-q" id="${q.id}">
        <header>
          <span>Question ${esc(q.paperRef || q.index)} of the official paper${q.mc ? ' · mc' : ''}</span>
          <span class="lr-qmeta">${q.title ? esc(q.title) + ' · ' : ''}${q.points} points${q.binas ? ' · BINAS: ' + esc(q.binas) : ''}</span>
        </header>
        <p class="lr-ask">${q.askHtml}</p>
        <details><summary>The walkthrough<span class="plus"></span></summary>
          <div class="lr-sol">${q.solutionHtml}</div>
          ${q.answerHtml ? `<p class="lr-ansline">Answer: ${q.answerHtml}</p>` : ''}
          ${q.mistakesHtml ? `<p class="lr-mistake"><strong>Where marks leak away:</strong> ${q.mistakesHtml}</p>` : ''}
        </details>
      </article>`).join('')}`;
}

async function renderItem(id) {
  if (!id) { $('#main').innerHTML = '<p class="lr-wait">Pick a subdomain on the left.</p>'; return; }
  let snap;
  try { snap = await getDoc(doc(db, 'items', id)); }
  catch (e) { renderPaywall({ id, subject: id.split('-')[0], kind: id.includes('mock') ? 'mock' : id.includes('ccvx') || id.includes('pe') || id.includes('sample') ? 'walkthrough' : 'subdomain' }); return; }
  if (!snap.exists()) { $('#main').innerHTML = '<p class="lr-wait">This item is not here yet. It arrives with the next content batch.</p>'; return; }
  item = { id, ...snap.data() };
  if (!granted(item.grantKeys)) return renderPaywall(item);
  if (item.kind === 'mock') renderMock(item);
  else if (item.kind === 'walkthrough') renderWalkthrough(item);
  else renderSubdomain(item);
  if (location.hash.slice(1) !== item.id) history.replaceState(null, '', `learn.html#${item.id}`);
}

await completeEmailLinkLogin().catch(() => {});
onUser(async (u) => {
  user = u;
  if (!user) { renderLogin(); return; }
  ent = await getEntitlements(user.uid).catch(() => null);
  await loadCatalog();
  renderShell();
  await renderItem(itemIdOfRoute());
});
window.addEventListener('hashchange', async () => { if (user && catalog) { renderShell(); await renderItem(itemIdOfRoute()); } });
