// Checkout: pick exactly one subject, see the exact total, sign in,
// confirm the withdrawal waiver, pay with Stripe Checkout (test mode locally).
// One purchase sells one subject (owner update, 12 Nov 2026: bundles off).
import { onUser, googleLogin, emailLinkLogin, completeEmailLinkLogin, callable } from './firebase-app.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const SUBJECTS = [
  ['phys', 'Physics'],
  ['chem', 'Chemistry'],
  ['bio', 'Biology'],
  ['matha', 'Mathematics A'],
  ['mathb', 'Mathematics B'],
];
const PRICE_FALLBACK_EUR = 129;
const eur = (n) => `€ ${n}`;
if (['localhost', '127.0.0.1'].includes(location.hostname)) {
  for (const el of document.querySelectorAll('.co-testnote')) el.hidden = false;
}

let user = null;
// purchasable subjects and the shown price come from the catalog
let purchasable = new Set(['chem']);
let pricePerSubject = PRICE_FALLBACK_EUR;
try {
  const cat = await (await fetch('/content/catalog.json')).json();
  purchasable = new Set(cat.subjects.filter((s) => s.ready && s.counts.questions > 0).map((s) => s.id));
  pricePerSubject = Number(cat?.pricing?.pricePerSubject) || PRICE_FALLBACK_EUR;
} catch { /* fallback: chem only, fallback price */ }

const picker = $('#picker');
picker.innerHTML = SUBJECTS.map(([id, name]) => {
  const ok = purchasable.has(id);
  return `<label class="pick ${ok ? '' : 'pick--off'}" data-mv data-id="${id}">
    <input type="radio" name="subject" value="${id}" ${ok ? '' : 'disabled'}>
    <span class="pick-name">${name}</span>
    <span class="pick-meta">${ok ? eur(pricePerSubject) : 'in preparation'}</span>
  </label>`;
}).join('\n');

const totalEl = $('#total');
const noteEl = $('#note');
const payBtn = $('#payBtn');
const waiverEl = $('#waiver');
const chosen = new Set(new URLSearchParams(location.search).getAll('subject').filter((s) => purchasable.has(s)).slice(0, 1));
if (!chosen.size && purchasable.size) chosen.add([...purchasable][0]);

function sync() {
  $$('#picker input').forEach((i) => { i.checked = chosen.has(i.value); });
  const n = chosen.size;
  noteEl.textContent = '';
  totalEl.textContent = n ? eur(pricePerSubject) : 'choose one subject';
  payBtn.disabled = !n || !waiverEl.checked || !user;
  payBtn.textContent = !user ? 'Sign in to continue' : `Pay ${eur(pricePerSubject)} with Stripe`;
  $('#err').textContent = $('#err').textContent; // keep, hidden when empty by CSS
}
picker.addEventListener('change', (ev) => {
  if (ev.target.checked) { chosen.clear(); chosen.add(ev.target.value); }
  sync();
});
waiverEl.addEventListener('change', sync);

function renderAuth() {
  const box = $('#authbox');
  const pay = $('#payBtn');
  if (user) {
    box.innerHTML = `<p class="ok">Signed in as <strong>${user.email || 'user'}</strong>. <a href="account.html">Your library</a></p>`;
    pay.hidden = false;
  } else {
    box.innerHTML = `
      <p>Sign in first: your purchase needs an account to land in.</p>
      <div class="authrow">
        <button class="btn btn--light" data-g data-mv type="button">Continue with Google</button>
        <form data-mv data-e class="acc-row"><input type="email" name="email" required placeholder="you@example.com" autocomplete="email" aria-label="Email for a sign-in link"><button class="btn btn--light" type="submit">Email me a link</button></form>
      </div>
      <p class="smallnote" data-n hidden>Link sent. In this local run it also appears in the Firebase emulator log.</p>`;
    $('[data-g]', box).onclick = () => googleLogin();
    $('[data-e]', box).onsubmit = async (ev) => {
      ev.preventDefault();
      await emailLinkLogin(new FormData(ev.target).get('email'));
      $('[data-n]', box).hidden = false;
    };
    // when signed out the sign-in controls ARE the panel action; no dead button
    pay.hidden = true;
  }
  renderAuth.called = true;
  sync();
}

payBtn.addEventListener('click', async () => {
  payBtn.disabled = true;
  payBtn.textContent = 'Preparing your Stripe checkout…';
  try {
    const { data } = await callable('createCheckout')({ subjects: [...chosen], waiverAccepted: waiverEl.checked === true });
    location.href = data.url;
  } catch (e) {
    console.error(e);
    $('#err').textContent = e.message || 'Something went wrong preparing your checkout.';
    payBtn.disabled = false;
    sync();
  }
});

await completeEmailLinkLogin().catch(() => {});
onUser((u) => { user = u; renderAuth(); });
sync();
