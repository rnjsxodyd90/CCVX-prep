// Stripe webhook core, separated from index.js so it can be unit-tested with
// an injected Stripe client and the Firestore emulator.
// Ordering rule: Stripe reads (listLineItems) and all validation happen FIRST.
// The processedStripeEvents marker and the grants are written in ONE Firestore
// transaction, so a retry after any failure can never find the marker without
// the grants (the old "customer paid, locked out" defect).
const admin = require('firebase-admin');
const config = require('./config.generated.json');

const SUBJECTS = Object.fromEntries(config.subjects.map((s) => [s.id, s]));
const BUNDLES = Object.fromEntries((config.bundles || []).map((b) => [b.count, b]));
const MONTH_MS = 30.44 * 24 * 3600 * 1000;

// Maps a chosen subject set to the expected Stripe lookup key (mirrors pricing).
function offerFor(subjects) {
  const unique = [...new Set(subjects)];
  if (!unique.length || unique.length > 5) return null;
  if (unique.length !== subjects.length) return null;
  if (unique.some((s) => !SUBJECTS[s])) return null;
  if (unique.length === 1) {
    const s = SUBJECTS[unique[0]];
    return { kind: 'subject', subject: unique[0], lookupKey: s.lookupKey, count: 1 };
  }
  const b = BUNDLES[unique.length];
  if (!b) return null;
  return { kind: 'bundle', subject: null, lookupKey: b.lookupKey, count: unique.length };
}

// ONE transaction: marker check + grants + marker. Never splits them.
async function grantOnce(db, eventId, uid, subjects) {
  const markerRef = db.collection('processedStripeEvents').doc(eventId);
  const entRef = db.collection('entitlements').doc(uid);
  return db.runTransaction(async (t) => {
    const marker = await t.get(markerRef);
    if (marker.exists) return { skipped: true };
    const ent = await t.get(entRef);
    const data = ent.exists ? ent.data() : {};
    const grants = new Set(data.grants || []);
    subjects.forEach((s) => grants.add(s));
    const until = Math.max(Date.now() + 12 * MONTH_MS, data.activeUntil?.toMillis?.() || 0);
    t.set(entRef, {
      grants: [...grants].sort(),
      activeUntil: admin.firestore.Timestamp.fromMillis(until),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    t.create(markerRef, { uid, subjects, at: admin.firestore.FieldValue.serverTimestamp() });
    return { skipped: false, grants: [...grants].sort(), activeUntil: until };
  });
}

// Throws on any failure BEFORE anything is marked: Stripe retries safely.
async function processCheckoutCompleted(db, stripe, event) {
  const s = event.data.object;
  const subjects = String(s.metadata?.subjects || '').split(',').filter(Boolean);
  const offer = offerFor(subjects);
  if (!s.metadata?.uid) throw new Error(`session metadata unusable: uid missing (${event.id})`);
  if (!offer) throw new Error(`session metadata unusable: subjects ${subjects.join(',') || '(empty)'} (${event.id})`);
  // Validate the price actually paid against the bundle the metadata claims.
  const lines = await stripe.checkout.sessions.listLineItems(s.id, { limit: 5 });
  const paidKey = lines.data[0]?.price?.lookup_key;
  if (paidKey !== offer.lookupKey) {
    // Terminal, not retryable: acknowledge without a grant, log for ops.
    console.error('webhook: price/metadata mismatch, no grant written', { eventId: event.id, subjects, paidKey, expected: offer.lookupKey });
    return { skipped: true, reason: 'price-mismatch' };
  }
  return grantOnce(db, event.id, s.metadata.uid, subjects);
}

module.exports = { offerFor, grantOnce, processCheckoutCompleted, SUBJECTS };
