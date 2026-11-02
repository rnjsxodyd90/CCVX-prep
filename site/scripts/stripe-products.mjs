// Creates (idempotently) the CCVX Ultimate Prep products + launch prices in
// STRIPE TEST MODE ONLY, keyed by lookup_key. Live products are an owner
// decision (Hard rule 4) — run this only with an sk_test_ key.
// usage: STRIPE_KEY_FILE=/path/to/key node scripts/stripe-products.mjs
import fs from 'node:fs';
import { LAUNCH_PRICES, BUNDLES, lookupKeyFor } from './pricing-config.mjs';
import { SUBJECTS } from './content-config.mjs';

const keyFile = process.env.STRIPE_KEY_FILE;
if (!keyFile) { console.error('usage: STRIPE_KEY_FILE=/path/to/key node scripts/stripe-products.mjs  (TEST mode key only)'); process.exit(1); }
const key = fs.readFileSync(keyFile, 'utf8').trim();
if (!key.startsWith('sk_test_')) { console.error('REFUSED: not a TEST mode key. Live actions are an owner decision (Hard rule 4).'); process.exit(1); }

const api = async (method, path, params) => {
  const res = await fetch('https://api.stripe.com/v1/' + path, {
    method,
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/x-www-form-urlencoded' },
    body: params ? new URLSearchParams(params) : undefined,
  });
  const j = await res.json();
  if (j.error) throw new Error(path + ': ' + j.error.message);
  return j;
};

const rows = [
  ...SUBJECTS.map((s) => ({ id: s.id, name: `CCVX Ultimate Prep – ${s.name}`, desc: `All notes, practice questions with solutions and mock exams for CCVX ${s.name}. 12 months access, VAT included.`, cents: LAUNCH_PRICES.subject * 100, lookupKey: lookupKeyFor(s.id) })),
  ...BUNDLES.map((b) => ({ id: b.id, name: `CCVX Ultimate Prep – any ${b.count} subjects`, desc: `${b.count === 5 ? 'All 5' : `Any ${b.count}`} subjects of CCVX Ultimate Prep. 12 months access, VAT included.`, cents: LAUNCH_PRICES[b.id] * 100, lookupKey: lookupKeyFor(b.id) })),
];

const existing = await api('GET', 'prices?limit=100&active=true&' + rows.map((r) => `lookup_keys[]=${r.lookupKey}`).join('&'));
const have = new Set(existing.data.map((p) => p.lookup_key));
for (const r of rows) {
  if (have.has(r.lookupKey)) { console.log('exists ', r.lookupKey); continue; }
  const prod = await api('POST', 'products', { name: r.name, description: r.desc, 'metadata[item]': r.id, tax_code: 'txcd_10000000' });
  await api('POST', 'prices', { product: prod.id, currency: 'eur', unit_amount: String(r.cents), lookup_key: r.lookupKey, 'metadata[item]': r.id, tax_behavior: 'inclusive' });
  console.log('created', r.lookupKey, (r.cents / 100).toFixed(2), 'EUR');
}
console.log('done: launch prices (test mode).');
