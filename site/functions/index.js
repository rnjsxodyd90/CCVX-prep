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

const { offerFor } = require('./webhook-core');
const stripeClient = () => new Stripe(STRIPE_SECRET_KEY.value());

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


const { processCheckoutCompleted } = require('./webhook-core');

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
      await processCheckoutCompleted(db, stripeClient(), event);
    }
    res.json({ received: true });
  } catch (e) {
    // Retryable: nothing was marked, Stripe will deliver the event again.
    console.error('stripeWebhook failed', e);
    res.status(500).send('webhook failed');
  }
});
