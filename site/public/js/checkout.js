// Checkout: pick subjects (1, 2, 3 or all 5), see the exact total, sign in,
// confirm the withdrawal waiver, pay with Stripe Checkout (test mode locally).
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
const PRICES = { 1: 79, 2: 139, 3: 189, 5: 279 };
const eur = (n) => `€ ${n}`;

let user = null;
// purchasable subjects from the catalog (others show "in preparation")
let purchasable = new Set(['chem']);
try {
  const cat = await (await fetch('/content/catalog.json')).json();
  purchasable = new Set(cat.subjects.filter((s) => s.ready && s.counts.questions > 0).map((s) => s.id));
} catch { /* fallback: chem only */ }

const picker = $('#picker');
picker.innerHTML = SUBJECTS.map(([id, name]) => {
  const ok = purchasable.has(id);
  return `<label class="pick ${ok ? '' : 'pick--off'}" data-id="${id}">
    <input type="checkbox" name="subject" value="${id}" ${ok ? '' : 'disabled'}>
    <span class="pick-name">${name}</span>
    <span class="pick-meta">${ok ? '€ 79' : 'in preparation'}</span>
  </label>`;
}).join('\n');

const totalEl = $('#total');
const noteEl = $('#note');
const payBtn = $('#payBtn');
const waiverEl = $('#waiver');
const chosen = new Set(new URLSearchParams(location.search).getAll('subject').filter((s) => purchasable.has(s)));
if (!chosen.size && purchasable.size) chosen.add([...purchasable][0]);

function sync() {
  $$('#picker input').forEach((i) => { i.checked = chosen.has(i.value); });
  const n = chosen.size;
  let price = PRICES[n];
  noteEl.textContent = '';
  if (n === 4) {
    noteEl.innerHTML = `Four subjects cost 4 × € 79 = € 316 as singles. All five costs € 279. <a href="#" id="take5">Take all 5 instead</a>.`;
    const t = $('#take5');
    if (t) t.onclick = (e) => { e.preventDefault(); purchasable.forEach((id) => chosen.add(id)); sync(); };
    price = null;
  }
  totalEl.textContent = n ? (price === null ? 'no bundle for 4' : `${eur(price)} · launch price`) : 'choose your subjects';
  payBtn.disabled = !n || price === null || !waiverEl.checked || !user;
  payBtn.textContent = !user ? 'Sign in to continue' : (price === null ? 'Choose a different set' : `Pay ${eur(price)} with Stripe`);
}
picker.addEventListener('change', (ev) => {
  const id = ev.target.value;
  ev.target.checked ? chosen.add(id) : chosen.delete(id);
  sync();
});
waiverEl.addEventListener('change', sync);

function renderAuth() {
  const box = $('#authbox');
  if (user) {
    box.innerHTML = `<p class="ok">Signed in as <strong>${user.email || 'user'}</strong>. <a href="account.html">Your library</a></p>`;
  } else {
    box.innerHTML = `
      <p>Sign in first: your purchase needs an account to land in.</p>
      <div class="authrow">
        <button class="btn btn--light" data-g type="button">Continue with Google</button>
        <form data-e class="acc-row"><input type="email" name="email" required placeholder="you@example.com" autocomplete="email" aria-label="Email for a sign-in link"><button class="btn btn--light" type="submit">Email me a link</button></form>
      </div>
      <p class="smallnote" data-n hidden>Link sent. In this local run it also appears in the Firebase emulator log.</p>`;
    $('[data-g]', box).onclick = () => googleLogin();
    $('[data-e]', box).onsubmit = async (ev) => {
      ev.preventDefault();
      await emailLinkLogin(new FormData(ev.target).get('email'));
      $('[data-n]', box).hidden = false;
    };
  }
  sync();
}

payBtn.addEventListener('click', async () => {
  payBtn.disabled = true;
  payBtn.textContent = 'Preparing your Stripe checkout…';
  try {
    const { data } = await callable('createCheckout')({ subjects: [...chosen], waiverAccepted: true });
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
