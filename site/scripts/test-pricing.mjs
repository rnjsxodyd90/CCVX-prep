// Tests for the launch-offer price logic (owner updates, 1 Nov 2026):
// the automatic switch at LAUNCH_END and the bundle mapping.
import assert from 'node:assert/strict';
import { LAUNCH_PRICES, activePrices, launchBadge, launchEnd, bundleFor } from './pricing-config.mjs';

const START = '2026-11-15';
const REGULAR = { subject: 99, bundle2: 179, bundle3: 269, bundle5: 449 };
const ALL = ['phys', 'chem', 'bio', 'matha', 'mathb'];
let n = 0;

// The window: end = start + 1 month
assert.equal(launchEnd(START).toISOString().slice(0, 10), '2026-12-15'); n++;
// No launch date set: launch prices, no end date
assert.deepEqual(activePrices(new Date('2026-11-20')).prices, LAUNCH_PRICES); n++;
assert.equal(activePrices(new Date('2026-11-20')).launchEnd, null); n++;
// Inside the window: launch prices
assert.equal(activePrices(new Date('2026-11-20'), START, REGULAR).prices.subject, 79); n++;
// After the window, regular prices set: regular prices
const after = activePrices(new Date('2026-12-20'), START, REGULAR);
assert.equal(after.prices.subject, 99); n++;
assert.equal(after.prices.bundle5, 449); n++;
assert.equal(after.launch, false); n++;
// After the window WITHOUT regular prices: stay on launch prices (safe default)
assert.equal(activePrices(new Date('2026-12-20'), START, null).prices.subject, 79); n++;

// Badge text
assert.equal(launchBadge(new Date('2026-11-20')),
  'Launch offer: EUR 79 per subject for the first month after launch.'); n++;
assert.equal(launchBadge(new Date('2026-11-20'), START),
  'Launch offer: EUR 79 per subject for the first month after launch. Ends 15 December 2026.'); n++;
assert.equal(launchBadge(new Date('2026-11-20'), START, REGULAR),
  'Launch offer: EUR 79 per subject for the first month after launch. Ends 15 December 2026. Then EUR 99 per subject.'); n++;
assert.equal(launchBadge(new Date('2026-12-20'), START, REGULAR), null); n++;
assert.ok(!launchBadge(new Date('2026-11-20'), START).includes('Then EUR'), 'no then-price until regulars are set'); n++;

// Bundle mapping (checkout totals): 1, 2, 3, 5 valid; 4 and dupes invalid
const m = bundleFor;
assert.deepEqual([m(['chem'], ALL).lookupKey, m(['chem'], ALL).priceEur], ['cup_chem_once', 79]); n++;
assert.deepEqual([m(['chem', 'bio'], ALL).lookupKey, m(['chem', 'bio'], ALL).priceEur], ['cup_bundle2_once', 139]); n++;
assert.deepEqual([m(['phys', 'chem', 'bio'], ALL).lookupKey, m(['phys', 'chem', 'bio'], ALL).priceEur], ['cup_bundle3_once', 189]); n++;
assert.deepEqual([m(ALL, ALL).lookupKey, m(ALL, ALL).priceEur], ['cup_bundle5_once', 279]); n++;
assert.equal(m(['a', 'b', 'c', 'd'], ALL), null, '4 subjects: no pinned price'); n++;
assert.equal(m(['chem', 'chem'], ALL), null, 'duplicates rejected'); n++;
assert.equal(m([], ALL), null); n++;
assert.equal(m(['chem', 'chem2'], ALL), null, 'unknown subject rejected'); n++;

console.log(`OK: ${n} pricing checks passed (window switch, badge text, bundle mapping).`);
