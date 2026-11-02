// CCVX Ultimate Prep: Stripe Checkout (test mode) + webhook.
// Launch pricing: EUR 79 per subject; bundles any 2 = 139, any 3 = 189,
// all 5 = 279. One payment per subject set; the webhook writes one grant per
// chosen subject into entitlements/{uid}. See site/PLAN.md §7 and
// site/scripts/pricing-config.mjs (the ONE money config).
const { onCall, onRequest, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret, defineString } = require('firebase-functions/params');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');
const Stripe = require('stripe');
const config = require('./config.generated.json');

admin.initializeApp();
setGlobalOptions({ region: 'europe-west1', maxInstances: 5 });
const db = admin.firestore();

const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');
const STRIPE_WEBHOOK_SECRET = defineSecret('STRIPE_WEBHOOK_SECRET');
const SITE_URL = defineString('SITE_URL', { default: 'http://localhost:5002' });

const SUBJECTS = Object.fromEntries(config.subjects.map((s) => [s.id, s]));
const BUNDLES = Object.fromEntries((config.bundles || []).map((b) => [b.count, b]));
const stripeClient = () => new Stripe(STRIPE_SECRET_KEY.value());
const MONTH_MS = 30.44 * 24 * 3600 * 1000;

// Maps the chosen subjects to the expected Stripe price. Mirrors
// scripts/pricing-config.mjs bundleFor() against the generated config.
function offerFor(subjects) {
  const unique = [...new Set(subjects)];
  if (!unique.length || unique.length > 5) return null;
  if (unique.length !== subjects.length) return null;
  if (unique.some((s) => !SUBJECTS[s])) return null;
  const n = unique.length;
  if (n === 1) {
    const s = SUBJECTS[unique[0]];
    return { kind: 'subject', subject: unique[0], lookupKey: s.lookupKey, priceEur: s.priceEur, count: 1 };
  }
  const b = BUNDLES[n];
  if (!b) return null; // 4 subjects has no bundle price: pay as singles or take all 5
  return { kind: 'bundle', subject: null, lookupKey: b.lookupKey, priceEur: b.priceEur, count: n };
}

async function customerFor(stripe, uid, email) {
  const ref = db.collection('entitlements').doc(uid);
  const snap = await ref.get();
  const existing = snap.exists ? snap.data().stripeCustomerId : null;
  if (existing) return existing;
  const c = await stripe.customers.create({ email, metadata: { uid } });
  await ref.set({
    stripeCustomerId: c.id,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });
  return c.id;
}

// data: { subjects: ['chem'], waiverAccepted: true }  (1, 2, 3 or 5 subjects)
exports.createCheckout = onCall({ secrets: [STRIPE_SECRET_KEY] }, async (req) => {
  if (!req.auth) throw new HttpsError('unauthenticated', 'Log in first.');
  const subjects = Array.isArray(req.data?.subjects) ? req.data.subjects.map(String) : [];
  const offer = offerFor(subjects);
  if (!offer) {
    throw new HttpsError('invalid-argument', 'Choose 1, 2, 3 or all 5 different subjects.');
  }
  if (req.data?.waiverAccepted !== true) {
    throw new HttpsError('failed-precondition', 'You must accept that access starts immediately and the 14-day withdrawal right no longer applies.');
  }
  const stripe = stripeClient();
  const prices = await stripe.prices.list({ lookup_keys: [offer.lookupKey], active: true, limit: 1 });
  if (!prices.data.length) throw new HttpsError('failed-precondition', 'Price not configured. Run scripts/stripe-products.mjs in TEST mode first.');
  const customer = await customerFor(stripe, req.auth.uid, req.auth.token.email || '');
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer,
    line_items: [{ price: prices.data[0].id, quantity: 1 }],
    metadata: { uid: req.auth.uid, subjects: subjects.join(','), count: subjects.length, waiverAcceptedAt: new Date().toISOString() },
    locale: 'en',
    success_url: `${SITE_URL.value()}/account.html?paid=1`,
    cancel_url: `${SITE_URL.value()}/checkout.html`,
  });
  return { url: session.url };
});

async function writeGrants(uid, subjects) {
  const ref = db.collection('entitlements').doc(uid);
  await db.runTransaction(async (t) => {
    const snap = await t.get(ref);
    const data = snap.exists ? snap.data() : {};
    const grants = new Set(data.grants || []);
    subjects.forEach((s) => grants.add(s));
    // Never shorten anyone's access: 12 more months from now, or keep the
    // later date the user already has.
    const until = Math.max(Date.now() + 12 * MONTH_MS, data.activeUntil?.toMillis?.() || 0);
    t.set(ref, {
      grants: [...grants].sort(),
      activeUntil: admin.firestore.Timestamp.fromMillis(until),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
  });
}

exports.stripeWebhook = onRequest({ secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET] }, async (req, res) => {
  let event;
  try {
    event = Stripe.webhooks.constructEvent(req.rawBody, req.headers['stripe-signature'], STRIPE_WEBHOOK_SECRET.value());
  } catch (e) {
    res.status(400).send('bad signature');
    return;
  }
  try {
    if (event.type === 'checkout.session.completed') {
      const s = event.data.object;
      // Idempotency: Stripe delivers events at least once.
      const processedRef = db.collection('processedStripeEvents').doc(event.id);
      const fresh = await db.runTransaction(async (t) => {
        const snap = await t.get(processedRef);
        if (snap.exists) return false;
        t.create(processedRef, { type: event.type, at: admin.firestore.FieldValue.serverTimestamp() });
        return true;
      });
      if (fresh) {
        const subjects = String(s.metadata?.subjects || '').split(',').filter(Boolean);
        const offer = offerFor(subjects);
        // Validate that the price actually paid matches the bundle the
        // metadata claims, so a forged session cannot unlock the wrong grant.
        if (offer && s.metadata?.uid) {
          const stripe = stripeClient();
          const lines = await stripe.checkout.sessions.listLineItems(s.id, { limit: 5 });
          const paidKey = lines.data[0]?.price?.lookup_key;
          if (paidKey === offer.lookupKey) {
            await writeGrants(s.metadata.uid, subjects);
          } else {
            console.error('stripeWebhook: price/metadata mismatch, no grant written', { subjects, paidKey, expected: offer.lookupKey });
          }
        } else {
          console.error('stripeWebhook: unusable session metadata, no grant written', { subjects, uid: s.metadata?.uid });
        }
      }
    }
    res.json({ received: true });
  } catch (e) {
    console.error('stripeWebhook failed', e);
    res.status(500).send('webhook failed');
  }
});
