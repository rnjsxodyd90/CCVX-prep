// Uploads build/items.json into the Firestore EMULATOR via the Admin SDK
// (bypasses rules, no credentials needed in emulator mode). The production
// upload path is an owner decision at go-live (Hard rule 4).
import fs from 'node:fs';
import path from 'node:path';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';

process.env.FIRESTORE_EMULATOR_HOST ??= '127.0.0.1:8080';
const app = initializeApp({ projectId: 'demo-ccvx' });
const db = getFirestore(app);

const items = JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname, '../build/items.json'), 'utf8'));
// Batches of 40: the gRPC message limit is 4 MB; 187 items are about 5.3 MB,
// so 40 items per commit stay near 1 MB.
let done = 0;
for (let i = 0; i < items.length; i += 40) {
  const batch = db.batch();
  for (const it of items.slice(i, i + 40)) batch.set(db.collection('items').doc(it.id), it);
  await batch.commit();
  done += Math.min(40, items.length - i);
}
console.log(`uploaded ${done} items to the Firestore emulator (${process.env.FIRESTORE_EMULATOR_HOST}, project demo-ccvx)`);
process.exit(0);
