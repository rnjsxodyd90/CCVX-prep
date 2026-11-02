// Account page: sign in (Google or email link), then your library.
import { onUser, logout, googleLogin, emailLinkLogin, completeEmailLinkLogin, getEntitlements } from './firebase-app.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const view = $('#accView');

const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const NAMES = { phys: 'Physics', chem: 'Chemistry', bio: 'Biology', matha: 'Mathematics A', mathb: 'Mathematics B' };

function renderLogin() {
  view.innerHTML = `
    <div class="acc-card tab" data-mv>
      <h1>Sign in to your library</h1>
      <p>The fastest way in is Google. Or get a sign-in link by email: no password needed.</p>
      <div class="acc-actions">
        <button class="btn" data-google>Continue with Google</button>
        <form data-email class="acc-emailform">
          <label for="email">Email sign-in link</label>
          <div class="acc-row">
            <input type="email" id="email" name="email" required placeholder="you@example.com" autocomplete="email">
            <button class="btn btn--light" type="submit">Send the link</button>
          </div>
          <p class="acc-note" data-note hidden>Link sent. In this local run it also appears in the Firebase emulator log.</p>
        </form>
      </div>
    </div>`;
  $('[data-google]', view).addEventListener('click', async () => {
    try { await googleLogin(); } catch (e) { console.warn(e); }
  });
  $('[data-email]', view).addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const email = new FormData(ev.target).get('email');
    await emailLinkLogin(email).catch((e) => alert(e.message));
    $('[data-note]', view).hidden = false;
  });
}

async function renderLibrary(user) {
  const ent = await getEntitlements(user.uid).catch(() => null);
  const grants = new Set(ent?.grants || []);
  const until = ent?.activeUntil?.toDate ? ent.activeUntil.toDate() : null;
  const active = until && until > new Date();
  const tiles = Object.entries(NAMES).map(([id, name]) => {
    if (active && grants.has(id)) {
      return `<a class="lib-tile lib-owned tab" href="learn.html#${id}">
        <span class="lib-name">${esc(name)}</span>
        <span class="lib-state">in your library · until ${until.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        <span class="lib-go">Open the reader →</span>
      </a>`;
    }
    return `<div class="lib-tile tab">
      <span class="lib-name">${esc(name)}</span>
      <span class="lib-state">not in your library</span>
      <a class="lib-buy" href="checkout.html?subject=${id}">EUR 79 · launch price</a>
    </div>`;
  }).join('\n');
  view.innerHTML = `
    <div data-mv>
      <h1>Your library</h1>
      <p class="acc-who">Signed in as ${esc(user.email || 'user')}. ${active ? `Your access runs to ${until.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.` : ''}</p>
      <div class="lib-grid">${tiles}</div>
      <p class="acc-footnote">Buying a subject adds it to this library. Bundles appear here as one tile per subject.</p>
      <p><button class="btn btn--light" data-out>Sign out</button></p>
    </div>`;
  $('[data-out]', view).addEventListener('click', () => logout().then(() => location.reload()));
}

view.innerHTML = '<p class="acc-wait">Loading…</p>';
const fromEmailLink = await completeEmailLinkLogin().catch(() => false);
if (fromEmailLink) console.log('signed in with email link');
onUser((user) => (user ? renderLibrary(user) : renderLogin()));
