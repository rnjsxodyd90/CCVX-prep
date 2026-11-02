// Verifies every curated official exam link resolves (HTTP 200) and prints
// the check date. Run after editing exam-links.data.mjs and before go-live.
import { EXAM_LINKS } from './exam-links.data.mjs';

const rows = Object.entries(EXAM_LINKS).flatMap(([subject, s]) =>
  [...s.ccvx, ...s.cvte].flatMap((e) => [
    { subject, label: e.label, url: e.paper, kind: 'paper' },
    { subject, label: e.label, url: e.answers, kind: 'answers' },
  ]));

let bad = 0, done = 0;
const results = [];
const CHECK = async (r) => {
  const head = { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(20000) };
  try {
    let res = await fetch(r.url, head);
    if (res.status === 405 || res.status === 403) {
      res = await fetch(r.url, { method: 'GET', headers: { range: 'bytes=0-64' }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
    }
    r.status = res.status;
    if (!res.ok) { bad++; }
  } catch (e) {
    r.status = 'ERR ' + String(e.message || e).slice(0, 60);
    bad++;
  }
  done++;
  results.push(r);
};
for (let i = 0; i < rows.length; i += 6) await Promise.all(rows.slice(i, i + 6).map(CHECK));

for (const r of results) console.log(`${r.status === 200 ? ' ok ' : 'FAIL'} ${r.status} ${r.subject}/${r.kind} ${r.label} ${r.url}`);
console.log(`\nchecked ${done} links on ${new Date().toISOString().slice(0, 10)}: ${done - bad} ok, ${bad} failed`);
process.exit(bad ? 1 : 0);
