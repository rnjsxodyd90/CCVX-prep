// Shared chrome for every public page: block wordmark in the footer,
// launch-offer badge from the built catalog, small helpers.
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Block wordmark in the footer (decorative; the readable name is in the top bar).
(() => {
  const el = $('.blockmark');
  if (!el) return;
  const word = 'CCVX ULTIMATE PREP';
  let i = 0;
  for (const ch of word) {
    const s = document.createElement('span');
    if (ch === ' ') { s.className = 'is-space'; s.innerHTML = '&nbsp;'; }
    else { s.textContent = ch; if (++i % 6 === 3) s.classList.add('is-accent'); }
    el.appendChild(s);
  }
})();

// The launch-offer badge text comes from the ONE pricing config at build
// time (catalog.pricing.badge). Fills #launchBadgeHero and [data-launch-badge].
export async function loadCatalog() {
  const res = await fetch('/content/catalog.json');
  if (!res.ok) throw new Error('catalog missing');
  return res.json();
}
(async () => {
  try {
    const cat = await loadCatalog();
    if (cat.pricing?.badge) {
      for (const el of $$('#launchBadgeHero, [data-launch-badge]')) el.textContent = cat.pricing.badge;
    }
    document.body.dataset.catalogReady = '1';
  } catch { /* badges keep their baked-in text */ }
})();
