// Webhook tests against the Firestore emulator, with an injected Stripe client.
//   npx firebase emulators:exec --only firestore --project demo-ccvx 'node scripts/test-webhook.mjs'
// Covers: grant on success; idempotent replay; nothing marked on pre-marker
// failure; the retry-after-500 path (the old customer-locked-out defect);
// price/metadata mismatch; offerFor edge cases.
import { createRequire } from 'node:module';
import path from 'node:path';

// Use the functions directory's own firebase-admin copy, so Firestore types
// (Timestamp) match the webhook's package instance exactly.
const require = createRequire(import.meta.url);
const admin = require(path.resolve(import.meta.dirname, '../functions/node_modules/firebase-admin'));
process.env.FIRESTORE_EMULATOR_HOST ??= '127.0.0.1:8080';
const app = admin.initializeApp({ projectId: 'demo-ccvx' });
const db = admin.firestore();
const { offerFor, processCheckoutCompleted } = require('../functions/webhook-core.js');

let n = 0;
const ok = (label, cond) => { n++; if (!cond) { console.error('FAIL:', label); process.exit(1); } console.log(`ok ${n}: ${label}`); };

const stripeOk = (lookupKey) => ({
  checkout: { sessions: { listLineItems: async () => ({ data: [{ price: { lookup_key: lookupKey } }] }) } },
});
const stripeFail = () => ({
  checkout: { sessions: { listLineItems: async () => { throw new Error('stripe 500 transient'); } } },
});
const event = (id, uid, subjects) => ({ id, type: 'checkout.session.completed', data: { object: { id: `cs_${id}`, metadata: { uid, subjects: subjects.join(','), waiverAcceptedAt: '' } } } });

// offerFor mapping (server side of the bundle math)
ok('2 subjects → bundle2 key', offerFor(['chem', 'bio']).lookupKey === 'cup_bundle2_once');
ok('5 subjects → bundle5 key', offerFor(['phys', 'chem', 'bio', 'matha', 'mathb']).lookupKey === 'cup_bundle5_once');
ok('4 subjects → null (operator picks 5 or drops one)', offerFor(['a', 'b', 'c', 'd']) === null);
ok('duplicates → null', offerFor(['chem', 'chem']) === null);
ok('unknown subject → null', offerFor(['nope']) === null);

// happy path: single subject grant
let r = await processCheckoutCompleted(db, stripeOk('cup_chem_once'), event('e1', 'u-pay', ['chem']));
ok('grant written for the buyer', r.skipped === false && r.grants.includes('chem'));
let ent = (await db.collection('entitlements').doc('u-pay').get()).data();
ok('activeUntil is about +12 months', ent.activeUntil.toDate() > new Date(Date.now() + 300 * 864e5));
ok('marker written with the grants', (await db.collection('processedStripeEvents').doc('e1').get()).exists);

// replay: at-least-once delivery must not double-write or shorten access
r = await processCheckoutCompleted(db, stripeOk('cup_chem_once'), event('e1', 'u-pay', ['chem']));
ok('replay after success is skipped, nothing changes', r.skipped === true);

// union: a bundle on top of the single adds both subjects
r = await processCheckoutCompleted(db, stripeOk('cup_bundle2_once'), event('e2', 'u-pay', ['chem', 'bio']));
ent = (await db.collection('entitlements').doc('u-pay').get()).data();
ok('bundle purchase unions grants (chem kept, bio added)', r.skipped === false && ent.grants.join(',') === 'bio,chem');

// THE DEFECT SCENARIO: Stripe/list fails, then the retry succeeds
try { await processCheckoutCompleted(db, stripeFail(), event('e3', 'u-late', ['bio'])); } catch (e) { /* expected 500 */ }
ok('after a 500 nothing was marked...', !(await db.collection('processedStripeEvents').doc('e3').get()).exists);
ok('...and no grant exists yet', !(await db.collection('entitlements').doc('u-late').get()).exists);
r = await processCheckoutCompleted(db, stripeOk('cup_bundle2_once'), event('e3', 'u-late', ['bio']));
ok('mismatched retry is NOT granted (paid key != metadata bundle)', r.skipped === true);
ok('still no marker after the mismatch', !(await db.collection('processedStripeEvents').doc('e3').get()).exists);
r = await processCheckoutCompleted(db, stripeOk('cup_bio_once'), event('e3', 'u-late', ['bio']));
ok('retry with the matching price grants the customer', r.skipped === false && r.grants.includes('bio'));
ok('marker written only now', (await db.collection('processedStripeEvents').doc('e3').get()).exists);

// unusable metadata → throws (Stripe retries until a human fixes the session)
let threw = false;
try { await processCheckoutCompleted(db, stripeOk('cup_chem_once'), event('e4', '', ['chem'])); } catch (e) { threw = true; }
ok('missing uid throws instead of silently marking', threw && !(await db.collection('processedStripeEvents').doc('e4').get()).exists);

console.log(`\nALL ${n} WEBHOOK CHECKS PASSED`);
process.exit(0);
