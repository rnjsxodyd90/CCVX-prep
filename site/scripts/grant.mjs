// Emulator helper: grant (or revoke) a subject to a test uid, for testing the
// reader and the security rules without going through Stripe.
// usage: node scripts/grant.mjs <uid> chem|bio|matha|mathb [days]   (default 365)
//        node scripts/grant.mjs <uid> revoke
//        FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 node scripts/grant.mjs test-uid chem
const HOST = process.env.FIRESTORE_EMULATOR_HOST || '127.0.0.1:8080';
const PROJECT = 'demo-ccvx';
const [uid, subject, days = '365'] = process.argv.slice(2);

if (!uid || !subject) {
  console.error('usage: node scripts/grant.mjs <uid> chem|bio|matha|mathb [days] | <uid> revoke');
  process.exit(1);
}
const url = `http://${HOST}/v1/projects/${PROJECT}/databases/(default)/documents/entitlements/${encodeURIComponent(uid)}`;
if (subject === 'revoke') {
  const r = await fetch(url, { method: 'DELETE' });
  console.log('revoke', r.status);
  process.exit(r.ok ? 0 : 1);
}
const until = new Date(Date.now() + Number(days) * 864e5);
// Read-merge: a new subject never removes existing grants (union semantics).
const cur = await fetch(url).then((r) => (r.ok ? r.json() : null));
const have = cur?.fields?.grants?.arrayValue?.values?.map((v) => v.stringValue) || [];
const grants = [...new Set([...have, subject])].sort();
const body = { fields: {
  grants: { arrayValue: { values: grants.map((g) => ({ stringValue: g })) } },
  activeUntil: { timestampValue: until.toISOString() },
  updatedAt: { timestampValue: new Date().toISOString() },
} };
const r = await fetch(url, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ fields: body.fields }) });
console.log(r.ok ? `granted ${subject} to ${uid} until ${until.toISOString().slice(0, 10)} (grants: ${grants.join(', ')})` : `grant failed: ${r.status} ${await r.text()}`);
process.exit(r.ok ? 0 : 1);
