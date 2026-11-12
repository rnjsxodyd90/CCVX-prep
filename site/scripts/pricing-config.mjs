// ONE config file for all money decisions (owner updates, 12 Nov 2026).
//
// Active prices: EUR 129 per subject, one-off, VAT included, 12 months
// access. Bundles are disabled since 12 Nov 2026, pending owner prices:
// BUNDLES = [] removes them from every page and from the checkout. To
// re-enable bundles later, fill BUNDLES and the bundle prices here only.
// The owner sets LAUNCH_START and REGULAR_PRICES before go-live; after
// LAUNCH_END (= LAUNCH_START + 1 month) activePrices() returns the regular
// prices, and stripe-products.mjs written for the regular prices replaces the
// test prices (one config change + one script run = the switch).
//
// Never show a crossed-out was-price (EU price-indication rule).
export const LAUNCH_START = null; // e.g. '2026-11-15' — owner sets it before go-live
export const REGULAR_PRICES = null; // { subject: 149 } — owner sets it; add bundle ids when bundles return

export const LAUNCH_PRICES = Object.freeze({ subject: 129 });
export const ACCESS_MONTHS = 12;

// Bundles are off (owner update 12 Nov 2026). Keep the machinery: a filled
// BUNDLES list plus bundle prices above re-enables them by config only.
export const BUNDLES = Object.freeze([]);
export const lookupKeyFor = (subjectOrBundleId) => `cup_${subjectOrBundleId}_once`;

export function launchEnd(start = LAUNCH_START) {
  if (!start) return null;
  const d = new Date(`${start}T12:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + 1);
  return d;
}

// What the site and Stripe charge at `now`.
//  - no LAUNCH_START or no REGULAR_PRICES yet: launch prices stay on (safe default);
//  - start set, before the end: launch prices;
//  - end passed and regular prices set: regular prices.
export function activePrices(now = new Date(), start = LAUNCH_START, regular = REGULAR_PRICES) {
  const end = launchEnd(start);
  const launchLive = !start || !end || now < end;
  const prices = (launchLive || !regular) ? LAUNCH_PRICES : regular;
  return { prices, launch: launchLive, launchEnd: end };
}

// The launch-offer badge text. No badge without a real launch window:
// LAUNCH_START unset -> null. Truthful by construction: no LAUNCH_START ->
// no fake date; no regular prices -> no "then EUR X" text.
export function launchBadge(now = new Date(), start = LAUNCH_START, regular = REGULAR_PRICES) {
  if (!start) return null;
  const end = launchEnd(start);
  const fmt = (d) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  if (start && end && now >= end) return null;
  let s = `Launch offer: EUR ${LAUNCH_PRICES.subject} per subject for the first month after launch.`;
  if (end) s += ` Ends ${fmt(end)}.`;
  if (end && regular) s += ` Then EUR ${regular.subject} per subject.`;
  return s;
}

// Maps a chosen set of subjects to the price the checkout must charge.
// Returns { kind: 'subject'|'bundle', id, count, priceEur, lookupKey } or null when invalid.
export function bundleFor(subjects, catalogSubjects, prices = LAUNCH_PRICES) {
  const valid = new Set(catalogSubjects);
  const unique = [...new Set(subjects)];
  if (!unique.length || unique.length > 5 || unique.some((s) => !valid.has(s))) return null;
  if (unique.length !== subjects.length) return null;
  const n = unique.length;
  if (n === 1) return { kind: 'subject', id: unique[0], count: 1, priceEur: prices.subject, lookupKey: lookupKeyFor(unique[0]) };
  const b = BUNDLES.find((x) => x.count === n);
  if (!b) return null;
  return { kind: 'bundle', id: b.id, count: n, priceEur: prices[b.id], lookupKey: lookupKeyFor(b.id) };
}
