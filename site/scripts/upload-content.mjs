// Uploads build/items.json into the Firestore EMULATOR via its REST API.
// The emulator accepts requests without credentials; the production upload
// path is an owner decision at go-live (Hard rule 4).
// usage: FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 node scripts/upload-content.mjs [project=demo-ccvx]
import fs from 'node:fs';
import path from 'node:path';

const HOST = process.env.FIRESTORE_EMULATOR_HOST || '127.0.0.1:8080';
const PROJECT = process.argv[2] || 'demo-ccvx';
const items = JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname, '../build/items.json'), 'utf8'));

function val(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === 'string') return { stringValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(val) } };
  return { mapValue: { fields: Object.fromEntries(Object.entries(v).map(([k, x]) => [k, val(x)])) } };
}

const base = `http://${HOST}/v1/projects/${PROJECT}/databases/(default)/documents`;
let done = 0;
for (let i = 0; i < items.length; i += 100) {
  const batch = items.slice(i, i + 100);
  const body = { writes: batch.map((it) => ({ update: { name: `projects/${PROJECT}/databases/(default)/documents/items/${it.id}`, fields: val(it).mapValue.fields } })) };
  const res = await fetch(`${base}:commit`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  if (!res.ok) { console.error('batch failed at', i, res.status, (await res.text()).slice(0, 400)); process.exit(1); }
  done += batch.length;
}
console.log(`uploaded ${done} items to Firestore emulator at ${HOST} (project ${PROJECT})`);
