// Tests for the price logic (owner updates, 12 Nov 2026):
// EUR 129 per subject, bundles off, no badge without a real launch window,
// the launch-window switch, and the single-subject mapping.
import assert from 'node:assert/strict';
import { LAUNCH_PRICES, BUNDLES, activePrices, launchBadge, launchEnd, bundleFor } from './pricing-config.mjs';

const START = '2026-11-15';
const REGULAR = { subject: 149 };
const ALL = ['phys', 'chem', 'bio', 'matha', 'mathb'];
let n = 0;

// The active price: EUR 129 per subject, bundles disabled
assert.equal(LAUNCH_PRICES.subject, 129); n++;
assert.deepEqual([...BUNDLES], []); n++;

// The window machinery stays: end = start + 1 month
assert.equal(launchEnd(START).toISOString().slice(0, 10), '2026-12-15'); n++;
// No launch date set: current prices, no end date
assert.deepEqual(activePrices(new Date('2026-11-20')).prices, LAUNCH_PRICES); n++;
assert.equal(activePrices(new Date('2026-11-20')).launchEnd, null); n++;
// Inside the window: current prices
assert.equal(activePrices(new Date('2026-11-20'), START, REGULAR).prices.subject, 129); n++;
// After the window, regular prices set: regular prices
const after = activePrices(new Date('2026-12-20'), START, REGULAR);
assert.equal(after.prices.subject, 149); n++;
assert.equal(after.launch, false); n++;
// After the window WITHOUT regular prices: stay on current prices (safe default)
assert.equal(activePrices(new Date('2026-12-20'), START, null).prices.subject, 129); n++;

// Badge: null without a launch start; renders only with a set start
assert.equal(launchBadge(new Date('2026-11-20')), null, 'no badge while LAUNCH_START is unset'); n++;
assert.equal(launchBadge(new Date('2026-11-20'), START),
  'Launch offer: EUR 129 per subject for the first month after launch. Ends 15 December 2026.'); n++;
assert.equal(launchBadge(new Date('2026-11-20'), START, REGULAR),
  'Launch offer: EUR 129 per subject for the first month after launch. Ends 15 December 2026. Then EUR 149 per subject.'); n++;
assert.equal(launchBadge(new Date('2026-12-20'), START, REGULAR), null); n++;
assert.ok(!launchBadge(new Date('2026-11-20'), START).includes('Then EUR'), 'no then-price until regulars are set'); n++;

// Subject mapping (checkout total): exactly 1 subject while bundles are off
const m = bundleFor;
assert.deepEqual([m(['chem'], ALL).lookupKey, m(['chem'], ALL).priceEur], ['cup_chem_once', 129]); n++;
assert.equal(m(['chem', 'bio'], ALL), null, '2 subjects rejected while bundles are off'); n++;
assert.equal(m(['phys', 'chem', 'bio'], ALL), null, '3 subjects rejected while bundles are off'); n++;
assert.equal(m(ALL, ALL), null, '5 subjects rejected while bundles are off'); n++;
assert.equal(m(['a', 'b', 'c', 'd'], ALL), null, '4 subjects rejected'); n++;
assert.equal(m(['chem', 'chem'], ALL), null, 'duplicates rejected'); n++;
assert.equal(m([], ALL), null, 'empty rejected'); n++;
assert.equal(m(['chem', 'chem2'], ALL), null, 'unknown subject rejected'); n++;

console.log(`OK: ${n} pricing checks passed (EUR 129 subject, bundles off, badge needs a set start, window switch).`);
