// CCVX Ultimate Prep: Stripe Checkout (test mode) + webhook.
// One-off EUR 129 per subject, VAT included, 12 months access.
// The webhook writes the purchase grant into entitlements/{uid}; the
// Firestore security rules then let the reader in. See site/PLAN.md §7.
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
const SITE_URL = defineString('SITE_URL', { default: 'http://localhost:5000' });

const SUBJECTS = Object.fromEntries(config.subjects.map((s) => [s.id, s]));
const stripeClient = () => new Stripe(STRIPE_SECRET_KEY.value());
const MONTH_MONTH_MS = 30.44 * 24 * 3600 * 1000;

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

// data: { subject: 'chem'|'bio'|'matha'|'mathb', waiverAccepted: true }
exports.createCheckout = onCall({ secrets: [STRIPE_SECRET_KEY] }, async (req) => {
  if (!req.auth) throw new HttpsError('unauthenticated', 'Log in first.');
  const subject = String(req.data?.subject || '');
  const subj = SUBJECTS[subject];
  if (!subj) throw new HttpsError('invalid-argument', 'Unknown subject.');
  if (req.data?.waiverAccepted !== true) {
    throw new HttpsError('failed-precondition', 'You must accept that access starts immediately and the 14-day withdrawal right no longer applies.');
  }
  const stripe = stripeClient();
  const prices = await stripe.prices.list({ lookup_keys: [subj.lookupKey], active: true, limit: 1 });
  if (!prices.data.length) throw new HttpsError('failed-precondition', 'Price not configured. Run scripts/stripe-products.mjs in TEST mode first.');
  const customer = await customerFor(stripe, req.auth.uid, req.auth.token.email || '');
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer,
    line_items: [{ price: prices.data[0].id, quantity: 1 }],
    metadata: { uid: req.auth.uid, subject, waiverAcceptedAt: new Date().toISOString() },
    locale: 'en',
    success_url: `${SITE_URL.value()}/account.html?paid=1&subject=${subject}`,
    cancel_url: `${SITE_URL.value()}/checkout.html?subject=${subject}`,
  });
  return { url: session.url };
});

async function writeGrant(uid, subject) {
  const ref = db.collection('entitlements').doc(uid);
  await db.runTransaction(async (t) => {
    const snap = await t.get(ref);
    const data = snap.exists ? snap.data() : {};
    const grants = new Set(data.grants || []);
    grants.add(subject);
    // Never shorten anyone's access: 12 more months from now, or keep the
    // later date the user already has.
    const until = Math.max(Date.now() + 12 * MONTH_MONTH_MS, data.activeUntil?.toMillis?.() || 0);
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
      if (fresh && s.metadata?.uid && SUBJECTS[s.metadata.subject]) {
        await writeGrant(s.metadata.uid, s.metadata.subject);
      }
    }
    res.json({ received: true });
  } catch (e) {
    console.error('stripeWebhook failed', e);
    res.status(500).send('webhook failed');
  }
});
