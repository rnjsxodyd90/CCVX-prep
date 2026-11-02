// Emulator helper: grant (or revoke) a subject to a test uid, for testing the
// reader and the security rules without going through Stripe.
// usage: node scripts/grant.mjs <uid> chem|bio|matha|mathb|phys [days]   (default 365)
//        node scripts/grant.mjs <uid> revoke
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';

process.env.FIRESTORE_EMULATOR_HOST ??= '127.0.0.1:8080';
const app = initializeApp({ projectId: 'demo-ccvx' });
const db = getFirestore(app);

const [uid, subject, days = '365'] = process.argv.slice(2);
if (!uid || !subject) {
  console.error('usage: node scripts/grant.mjs <uid> phys|chem|bio|matha|mathb [days] | <uid> revoke');
  process.exit(1);
}
const ref = db.collection('entitlements').doc(uid);
if (subject === 'revoke') {
  await ref.delete().catch(() => {});
  console.log('revoked', uid);
  process.exit(0);
}
const snap = await ref.get();
const grants = new Set(snap.exists ? (snap.data().grants || []) : []);
grants.add(subject);
const until = Timestamp.fromDate(new Date(Date.now() + Number(days) * 864e5));
await ref.set({
  grants: [...grants].sort(),
  activeUntil: until,
  updatedAt: FieldValue.serverTimestamp(),
}, { merge: true });
console.log(`granted ${subject} to ${uid} until ${until.toDate().toISOString().slice(0, 10)} (grants: ${[...grants].sort().join(', ')})`);
process.exit(0);
