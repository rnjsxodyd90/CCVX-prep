// Security-rules test for the paid-content guarantee (Hard rule 5).
// Runs against the Firestore emulator with the real firestore.rules:
//   npx firebase emulators:exec --only firestore --project demo-ccvx 'node scripts/test-rules.mjs'
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import fs from 'node:fs';

const rules = fs.readFileSync(new URL('../firestore.rules', import.meta.url), 'utf8');
const testEnv = await initializeTestEnvironment({ projectId: 'demo-ccvx', firestore: { rules } });

// Fixture written with rules disabled (server side in real life).
await testEnv.withSecurityRulesDisabled(async (ctx) => {
  const db = ctx.firestore();
  await setDoc(doc(db, 'items', 'chem-c02'), { subject: 'chem', free: true, grantKeys: ['chem'], data: { notesHtml: 'free sample' } });
  await setDoc(doc(db, 'items', 'chem-c05'), { subject: 'chem', free: false, grantKeys: ['chem'], data: { notesHtml: 'paid chem secret' } });
  await setDoc(doc(db, 'items', 'bio-b01'), { subject: 'bio', free: false, grantKeys: ['bio'], data: { notesHtml: 'paid bio secret' } });
  await setDoc(doc(db, 'items', 'chem-ccvx-sample-1'), { subject: 'chem', kind: 'walkthrough', free: false, grantKeys: ['chem'], data: { introHtml: 'paid walkthrough secret' } });
  await setDoc(doc(db, 'entitlements', 'u-granted'), { grants: ['chem'], activeUntil: new Date(Date.now() + 864e5) });
  await setDoc(doc(db, 'entitlements', 'u-expired'), { grants: ['chem'], activeUntil: new Date(Date.now() - 864e5) });
});

const db = (uid) => (uid ? testEnv.authenticatedContext(uid) : testEnv.unauthenticatedContext()).firestore();
let n = 0;
const check = async (label, promise, expect) => {
  n++;
  try { await expect(promise); console.log(`ok ${n}: ${label}`); }
  catch (e) { console.error(`FAIL ${n}: ${label}`); throw e; }
};

// An anonymous visitor: free sample only.
await check('anonymous can read the free item', getDoc(doc(db(), 'items', 'chem-c02')), assertSucceeds);
await check('anonymous cannot read a paid item', getDoc(doc(db(), 'items', 'chem-c05')), assertFails);
await check('anonymous cannot read entitlements', getDoc(doc(db(), 'entitlements', 'u-granted')), assertFails);

// Signed in, no purchase.
await check('signed-in user can read the free item', getDoc(doc(db('u-none'), 'items', 'chem-c02')), assertSucceeds);
await check('signed-in user without grant cannot read a paid item', getDoc(doc(db('u-none'), 'items', 'chem-c05')), assertFails);
await check('user can read their own (missing) entitlements doc', getDoc(doc(db('u-none'), 'entitlements', 'u-none')), assertSucceeds);
await check("user cannot read someone else's entitlements", getDoc(doc(db('u-none'), 'entitlements', 'u-granted')), assertFails);
await check('client cannot write items', setDoc(doc(db('u-granted'), 'items', 'chem-c05'), { free: true }), assertFails);
await check('client cannot write their own entitlements', setDoc(doc(db('u-none'), 'entitlements', 'u-none'), { grants: ['chem'] }), assertFails);
await check('client cannot delete/write via update', setDoc(doc(db('u-granted'), 'entitlements', 'u-granted'), { grants: ['chem', 'bio'] }, { merge: true }), assertFails);

// Signed in with a chemistry grant.
await check('granted user can read their subject', getDoc(doc(db('u-granted'), 'items', 'chem-c05')), assertSucceeds);
await check('granted user cannot read another subject', getDoc(doc(db('u-granted'), 'items', 'bio-b01')), assertFails);
await check('granted user can read their walkthroughs', getDoc(doc(db('u-granted'), 'items', 'chem-ccvx-sample-1')), assertSucceeds);
await check('user without grant cannot read walkthroughs', getDoc(doc(db('u-none'), 'items', 'chem-ccvx-sample-1')), assertFails);
await check('granted user can read their entitlements', getDoc(doc(db('u-granted'), 'entitlements', 'u-granted')), assertSucceeds);

// Expired grant.
await check('expired grant cannot read paid content', getDoc(doc(db('u-expired'), 'items', 'chem-c05')), assertFails);

// No way to list the whole paid collection.
await check('list on items is denied even for granted users', getDocs(collection(db('u-granted'), 'items')), assertFails);
await check('list on entitlements is denied', getDocs(collection(db('u-granted'), 'entitlements')), assertFails);

await testEnv.cleanup();
console.log(`\nALL ${n} RULE CHECKS PASSED`);
