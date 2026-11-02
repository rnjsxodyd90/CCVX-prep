// Self-check for the content pipeline (runs without emulators):
//  pin 1: question ids must be <itemid>-qNN ascending -> wrong ids must throw;
//  pin 2: a single-level math folder at the subject root becomes a subdomain;
//  pin 3: stored HTML is sanitized (script/iframe/object/embed/form stripped);
//  rule 1: excluded files (exercises.md, source/, img/, ccvx1-*) are never read.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { buildItems } from './build-content.mjs';

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ccvx-build-'));
const site = path.join(tmp, 'site');
const repo = path.join(tmp, 'repo');
const mkdir = (p, f) => { fs.mkdirSync(p, { recursive: true }); };
const w = (rel, txt) => { const p = path.join(repo, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, txt); };

const BAIT = 'BAIT_NEVER_SHIP_THIS';

// Pin 2 fixture: single-level math B
w('CCVX-math-B/B01-functions/README.md', '# B1 — Functions\n\n## Learning outcomes\n\n1. The candidate can work with functions and graphs.\n');
w('CCVX-math-B/B01-functions/notes.md', '# Notes\n<script>alert(1)</script>\n\nThe derivative of x² is 2x. <iframe src="https://evil"></iframe>\n');
w('CCVX-math-B/B01-functions/practice.md', `# B1 — practice

### mathb-b01-q01 | points 2 | outcome B1.1 | difficulty easy
#### Question
Given f(x) = x² + 3, calculate f(4).
#### Answer
19
#### Solution
1. f(4) = 4² + 3 = 16 + 3 = 19.

### mathb-b01-q02 | points 2 | outcome B1.1 | difficulty medium
#### Question
Given f(x) = 2x + 5 and f(a) = 21, calculate a.
#### Answer
8
#### Solution
1. 2a + 5 = 21, so 2a = 16 and a = 8.
`);
// Bait files that must never be read
w('CCVX-math-B/B01-functions/exercises.md', BAIT + ' exam questions');
w('CCVX-math-B/B01-functions/ccvx1-past-exam.md', BAIT);
w('CCVX-math-B/B01-functions/source/text.md', BAIT);
w('CCVX-math-B/B01-functions/img/fig.png', BAIT);

let passed = 0;
{
  const { items, sources } = buildItems(repo, site);
  const it = items.find((i) => i.id === 'mathb-b01');
  assert.ok(it, 'mathb-b01 built from a single-level folder');
  assert.equal(it.domain, 'B', 'domain is the code first letter');
  assert.deepEqual(it.data.questions.map((q) => q.id), ['mathb-b01-q01', 'mathb-b01-q02'], 'ascending ids pass');
  assert.ok(!/script|iframe|object|embed|form/i.test(it.data.notesHtml), 'sanitized notes html');
  assert.ok(it.data.notesHtml.includes('The derivative'), 'content kept');
  const blob = JSON.stringify(items) + JSON.stringify(sources);
  assert.ok(!blob.includes(BAIT), 'excluded files never read');
  assert.ok(!sources.some((s) => /exercises|ccvx1-|source|img/.test(s)), 'sources list is clean');
  passed++;
}

// Pin 1 fixture: non-ascending ids must throw
w('CCVX-math-B/B01-functions/practice.md', `# B1 — practice

### mathb-b01-q02 | points 2 | outcome B1.1 | difficulty easy
#### Question
Out of order.
#### Answer
0
#### Solution
1. Nope.
`);
assert.throws(() => buildItems(repo, site), /expected exactly "mathb-b01-q01"/, 'non-ascending id rejected');
passed++;

// Walkthrough ingestion: valid file parses; bad subdomain id must throw.
// Restore the good math practice first (block 2 left a bad one on purpose).
w('CCVX-math-B/B01-functions/practice.md', `# B1 — practice

### mathb-b01-q01 | points 2 | outcome B1.1 | difficulty easy
#### Question
Given f(x) = x² + 3, calculate f(4).
#### Answer
19
#### Solution
1. f(4) = 4² + 3 = 16 + 3 = 19.
`);
w('CCVX-chemistry/C-chemical-processes-and-conservation-laws/C02-chemical-calculations/README.md', '# C2 — Chemical Calculations\n\n## Learning outcomes\n\n1. The candidate can calculate.\n');
w('CCVX-chemistry/C-chemical-processes-and-conservation-laws/C02-chemical-calculations/notes.md', '# Notes\n\npH = −log [H3O+].');
w('CCVX-chemistry/past-exams/sample-one.md', `official: CCVX example exam Chemistry 1
year: 2023
paper: https://www.ccvx.nl/a.pdf
answers: https://www.ccvx.nl/b.pdf

## Question 1 (official paper)
ask: Find the concentration of a weak acid from the equivalence volume.
subdomain: chem-c02
binas: tables 7, 49
points: 4
mistakes: Reading the jump at the wrong height.
solution:
1. n(OH−) = c × V at equivalence.
`);
{
  const { items } = buildItems(repo, site);
  const wt = items.find((i) => i.kind === 'walkthrough');
  assert.ok(wt, 'walkthrough built');
  assert.equal(wt.data.questions[0].id, 'chem-sample-one-q01', 'walkthrough question id');
  assert.equal(wt.data.questions[0].subdomainId, 'chem-c02');
  passed++;
}
// unknown subdomain must throw
w('CCVX-chemistry/past-exams/sample-one.md', `official: X
year: 2023
paper: https://www.ccvx.nl/a.pdf
answers: https://www.ccvx.nl/b.pdf

## Question 1 (official paper)
ask: Something.
subdomain: chem-z99
binas: table 7
points: 2
mistakes: None.
solution:
1. X.
`);
assert.throws(() => buildItems(repo, site), /cannot place subdomain "chem-z99"/, 'bad walkthrough subdomain rejected');
passed++;

fs.rmSync(tmp, { recursive: true, force: true });
console.log(`OK: ${passed + 5} build checks passed (single-level subjects, id gate, sanitizer, exclude proof).`);
