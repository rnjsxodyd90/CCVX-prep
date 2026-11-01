# CCVX Ultimate Prep — website v1 plan

Status: Phase 2 running as an Orca team (section 10). Owner decisions in this section are fixed; do not change them.

Fixed product decisions:

- Brand: CCVX Ultimate Prep. Domain for copy: ccvxultimateprep.com. Not bought. Do not buy.
- Language: English only.
- Subjects: Chemistry, Biology, Mathematics A, Mathematics B, Physics (owner update 3, 1 Nov 2026; one subject card and page, EUR 129).
- Price: EUR 129 per subject, one-off, VAT included. 12 months access.
- Seller: Sura Steel (eenmanszaak), KvK 98957015, Jan Krosstraat 172, 2571 DD 's-Gravenhage. In footer and terms.
- Not affiliated: every page footer and the landing page carry "Independent study material. Not affiliated with or endorsed by the CCVX or any university."
- Nothing in this run touches production: no Firebase project, no live Stripe, no deploy, no domain, no visibility change, no push to main.

## 1. Stack

Static HTML, CSS and plain JavaScript on Firebase Hosting. No framework, no bundler, no build step for the site itself. Backend:

- Firebase Hosting (public/).
- Firebase Auth: email link and Google sign-in.
- Firestore: content items and entitlements, locked by security rules.
- One functions codebase (Node 22) with two functions: a callable createCheckout and an HTTP stripeWebhook.

Why this stack: it is the smallest version that meets the rules, and the owner already runs the same pattern in production for Inburgering Mate (/Users/taea/Documents/inburgering/inburgering_app/website: firebase.json, firestore.rules with entitlement-gated items, functions with Stripe Checkout, scripts/build-content.mjs and upload-content.mjs). We copy that pattern, not its content.

Everything in this run uses the Firebase Emulator Suite and Stripe test mode.

## 2. Copyright: what may enter the paid product

Hard rule 1 governs the whole build. The repo is a public study repo and holds exam-derived material. None of it enters the paid product or the public site.

Build inputs, per subject subdomain folder (for example CCVX-chemistry/C-chemical-processes-and-conservation-laws/C02-chemical-calculations/):

| File | Use |
|---|---|
| README.md | yes: outcomes, as the topic list |
| notes.md | yes: the owner's own English notes, after upgrade (section 4) |
| practice.md | yes: new file, original questions (section 4) |
| exercises.md | no: holds past exam questions and official answers |
| spec.nl.md, spec.en.md | no: CvTE syllabus text and its translation |
| source/ | no: Stercollectie copies and translations |
| img/ | no: unknown provenance, owner decision is do not ship; see images below |
| syllabus/, PLAN.md, any ccvx1-* or cvte24-* file | no |

build-content.mjs uses an allow list (README.md, notes.md, practice.md), not a block list. Anything not on the allow list never reaches the output. The validator checks this (section 6).

Audit duties:

- exercises.md files: only C02 has one. Its items come from CCVX example exams and CvTE exams, so it is excluded from the build. Original questions in practice.md replace the skills it tested. Result recorded in the report.
- notes.md files: remove references to exam exercises (they point at excluded files) and replace them with inline worked examples or references to practice questions. Keep spec and Binas citations.
- Images (owner decision, fixed): the biology img/ folders hold diagrams of unknown provenance. Do not ship them. v1 is text-first. build-content.mjs never reads img/ (allow list), and the 13 excluded files (B01: 3, B02: 4, C02: 5, E01: 1) are listed in the Phase 4 report. Notes tasks in T2.12 and later strip the image references from the four notes that use them (B01, B02, C02-self-organization-of-organisms, E01). Where a diagram is genuinely needed, the content task draws a new original SVG.
- The site links to the free official CCVX example exams on ccvx.nl instead of hosting any exam content.

## 3. Page list

| Page | File | Contents |
|---|---|---|
| Landing | public/index.html | hero with the promise, 4 subject offer cards at EUR 129, approach in 4 steps (explanation, practice, feedback, strategy), what is inside each subject with counts from the built content, exam dates 2026/2027 from ccvx.nl with source link, FAQ, not-affiliated note, footer |
| Subject | public/chemistry.html, biology.html, math-a.html, math-b.html | syllabus map (domains and subdomains from catalog), free sample (first subdomain's notes and 3 questions with solutions), what you get, exam date and registration deadline, link to official CCVX samples, buy button |
| Checkout | public/checkout.html | sign-in (email link or Google), subject choice, withdrawal-waiver checkbox, then Stripe Checkout test mode |
| Account | public/account.html | purchased subjects (the library), purchase state, sign-out |
| Reader | public/learn.html plus app JS | notes per subdomain, practice with show-solution, timed mock mode (3 hours, question list, submit, marking scheme after submit) |
| Legal | public/terms.html, privacy.html, refund.html | terms with seller details, privacy, refund/withdrawal policy for digital content: the consumer waives the 14-day withdrawal right when access starts, with the checkout checkbox |

Every page footer: seller legal line, not-affiliated line, ccvxultimateprep.com, links to legal pages.

Design: the taste skill run decides direction, palette and type (Phase 3, task T3.1). Original imagery only.

## 4. Content standard (accuracy before volume)

Every subject folder reaches the C02 standard:

- notes.md: clear English notes per outcome, self-contained, each point citing its source (CCVX/CvTE syllabus, Binas by table name, or a practice question). Worked examples inline. Chemistry and biology use BINAS conventions (5th edition or later; English edition allowed). Facts that cannot be sourced are marked "unverified" and listed in the report.
- practice.md: 8 to 15 original questions per subdomain, each with a worked solution and a checked answer. No copied or closely translated exam items. BINAS conventions where data is needed; values quoted match BINAS.

Question counts by folder type (from the repo's own PLAN.md guidance, which the owner wrote):

- Content domains (chemistry 0, B, C, D, E, F, G; biology 0, B, C, D, E, F): 8 to 15 questions.
- Skills domains A05 and up (tested in writing inside content questions): 4 to 8 shorter questions.
- A01 to A04 (not testable in writing, per the repo PLAN): notes only, no questions. Recorded in the report for the owner to veto.

practice.md format (strict, machine-parsed):

```
# <subdomain> — practice

Intro sentence (optional).

### <id> | points <n> | outcome <code> | difficulty easy|medium|hard
#### Question
<text>
#### Answer
<final answer, with unit>
#### Solution
1. <step>
2. <step>
```

Ids: `<subject>-<subdomain>-q01`, for example chem-c02-q01. Mock question ids: `<subject>-mock1-q01`.

Mock exams: 2 per subject. 3 hours, CCVX style: open questions with partial credit, BINAS allowed, contexts in English but original. Each mock has a marking scheme with points per step. Mock files live at the subject root, for example CCVX-chemistry/mock-exam-1.md and mock-exam-1-marking-scheme.md, and use the same question format.

## 5. Data model

Firestore:

- items/{itemId}: one doc per subdomain or mock per subject.
  - itemId: chem-c02, chem-mock1, bio-b03, mathb-d01.
  - Fields: subject, kind (subdomain | mock), title, domain, order, free (boolean), grantKeys (array, one subject id), data.
  - data for a subdomain: { notesHtml, questions: [{ id, points, outcome, difficulty, questionHtml, answerHtml, solutionHtml }] }.
  - data for a mock: { introHtml, durationMinutes, questions: [...], markingSchemeHtml }.
  - One doc per subdomain keeps docs far below the 1 MB Firestore limit; a whole subject is about 1.5 to 2.5 MB.
- entitlements/{uid}: { grants: [subject ids], activeUntil, stripeCustomerId, updatedAt }. Read by the owner of the doc. Written only by the webhook (Admin SDK). grants is a union: a new purchase adds a subject, never removes others. activeUntil = purchase time + 12 months.
- subjects config lives in the static catalog, not in Firestore (price never changes at runtime; see stripe config below).

Public static files (no paid content, Hard rule 5):

- public/content/catalog.json: per subject: name, price, exam dates with source link, registration deadline, subdomain list (id, title, domain), counts (subdomains, questions, mocks), sample item id.
- public/content/sample-<subject>.json: the free sample only: first subdomain's notes and 3 questions with solutions, marked free.

Security rules (firestore.rules):

- items/{id}: allow get if resource.data.free == true or the caller's entitlements doc has an activeUntil in the future and grantKeys in the doc's grants. allow list, write: if false.
- entitlements/{uid}: allow get if request.auth.uid == uid. No client writes.

## 6. Content pipeline

Scripts in site/scripts/:

- build-content.mjs: reads the subject folders with the allow list, converts markdown to HTML at build time (headings, lists, tables, emphasis, links, code; no runtime markdown parser), emits public/content/catalog.json, public/content/sample-*.json and site/build/items.json. It fails on any parse error or empty field.
- upload-content.mjs: writes build/items.json into the emulator Firestore via the REST API at FIRESTORE_EMULATOR_HOST. No tokens needed in this run. The production upload path is an owner decision at go-live.
- validate-content.mjs: checks, over the built items and catalog:
  - every question has a solution and an answer; ids unique across the whole build; no empty fields;
  - no excluded input may appear: the script proves the build read only the allow list (it records every source file it read);
  - no paid item text appears in any public/ file (the sample is checked against its declared scope);
  - counts in the catalog match the built content.
- grant.mjs: emulator helper: grant a subject to a test uid, for testing the reader without Stripe.

Pipeline order: content tasks commit markdown; build; validate; upload; test the reader. CI not needed in v1; the validator is the gate.

## 7. Payment flow (Stripe Checkout, test mode)

1. Visitor picks a subject, signs in on checkout.html (email link or Google), ticks the withdrawal-waiver checkbox ("I understand that access starts immediately and I waive my 14-day withdrawal right").
2. The page calls the callable function createCheckout with { subject }.
3. createCheckout: looks up the Stripe price by lookup key cup_<subject>_once in test mode, creates or reuses a Stripe customer for the uid, creates a Checkout Session (mode payment, EUR 129, VAT-inclusive price, metadata uid and subject, success_url account page), returns the session URL.
4. Test checkout with the Stripe test card.
5. stripeWebhook on checkout.session.completed: checks the event id for idempotency, writes the grant into entitlements/{uid} (union, activeUntil +12 months).
6. account.html shows the subject; the reader unlocks through the rules.

Local webhook delivery: stripe listen forwards to the functions emulator. Test prices are created in test mode by site/scripts/stripe-products.mjs (test-mode products are allowed; live products are an owner decision).

## 8. Task list

Workflow for every task: coder (Kimi K3) implements in its own worktree and commits; the reviewer (GLM-5.3) reviews the change (accuracy, BINAS, copyright, rules); the coordinator merges into this branch and commits. Content batches are small: 3 to 7 folders per task.

### Phase 2: content

- T2.1 site/scripts/build-content.mjs, validate-content.mjs, upload-content.mjs, grant.mjs; worked first on the current C02 sample content plus a temporary practice.md for C02.
- Chemistry notes upgrades and practice, in repo PLAN order:
  - T2.2 CH batch 1: 0-basic-knowledge (5 folders), B01, A08 (significant figures and calculator rules feed every calculation).
  - T2.3 CH batch 2: C02, C01.
  - T2.4 CH batch 3: B02, B03, B04.
  - T2.5 CH batch 4: C04, C05, C06.
  - T2.6 CH batch 5: D01, D03, E01, E02, G01.
  - T2.7 CH batch 6: C03, F01, F02, F03, G02, G03.
  - T2.8 CH batch 7: school-exam subdomains: C07 to C10, D02, D04, E03, E04, E05, F04, F05, G04, G05.
  - T2.9 CH batch 8: A05 to A15 (A01 to A04 notes only).
  - T2.10 CH mock exam 1 with marking scheme.
  - T2.11 CH mock exam 2 with marking scheme.
  - Chemistry review gate: full re-run of build + validate + reviewer pass on the whole subject.
- Biology, same standard:
  - T2.12 BIO batch 1: 0-basic-knowledge (2), B01, B02, B03.
  - T2.13 BIO batch 2: B04, B05, B06, B07, B08.
  - T2.14 BIO batch 3: C01, C02, C03, D01, D02.
  - T2.15 BIO batch 4: D03, D04, D05, E01, E02, E03.
  - T2.16 BIO batch 5: F01, F02, F03, F04.
  - T2.17 BIO batch 6: A01 to A16 (notes for all; questions where testable in writing).
  - T2.18 BIO mock 1; T2.19 BIO mock 2.
  - Biology review gate as chemistry.
- Mathematics, only after chemistry and biology pass review:
  - T2.20 fetch the official CCVX leerstof PDFs for wiskunde A and wiskunde B, list the subdomains, create CCVX-math-A/ and CCVX-math-B/ skeletons (one folder per subdomain: README with outcomes, notes, practice).
  - T2.21+ math batches (about 4 to 6 per subject, sized when the PDFs are read) and 2 mocks per subject.

### Phase 3: website

- T3.1 taste run (coordinator): draw directions, choose one, record the idea and the copy deck; copy passes the humanizer skill.
- T3.2 site skeleton: firebase.json, emulator config, firestore.rules, shared CSS tokens from the direction sheet, footer and nav on every page.
- T3.3 landing page from the copy deck, catalog-driven counts.
- T3.4 four subject pages with free samples.
- T3.5 auth + account.html.
- T3.6 checkout.html + functions (createCheckout, stripeWebhook) + stripe-products.mjs (test mode) + end-to-end test in emulators.
- T3.7 reader app: catalog navigation, notes, practice with show-solution, timed mock mode.
- T3.8 legal pages: terms, privacy, refund/withdrawal.
- T3.9 taste gate: lint 0 FAIL, inspect at 1440, 768 and 390 with 0 FAIL, look rounds, motion layer, then screenshots at 1440 and 390 of the landing page, one subject page and one reader page into /Users/taea/Documents/ccvx-ultimate-prep/orca-briefs/shots/.

### Phase 4: report

- T4.1 /Users/taea/Documents/ccvx-ultimate-prep/orca-briefs/site-v1-REPORT.md: what was built, counts per subject, copyright audit result (with the list of the 13 excluded biology img/ files), test results, local run instructions (emulators + Stripe test), screenshots, open OWNER DECISION items, Token Factory spend.

## 9. Owner decisions needed (Hard rule 4)

The run stops and prints an OWNER DECISION line before any of these:

- Firebase project creation and any real (non-emulator) Firebase use.
- Live Stripe products and prices at EUR 129.
- Buying or connecting the domain ccvxultimateprep.com.
- Deploying to production, changing repo visibility, pushing to main.

## 10. Team orchestration (owner update, 1 Nov 2026)

This job runs as an Orca team; the subagent workflow in section 8 is replaced.

Workers (OpenCode, model nebius/moonshotai/Kimi-K3): chem-teacher in worktree ccvx-chem (edits only CCVX-chemistry/), bio-teacher in ccvx-bio (CCVX-biology/), math-teacher in ccvx-math (CCVX-math-A/ and CCVX-math-B/), phys-teacher in ccvx-phys (CCVX-physics/, owner update 3; from the official CCVX natuurkunde leerstof PDF https://www.ccvx.nl/Leerstof%20natuurkunde.pdf, respecting the "wijziging leerstof van natuurkunde" notice on the CCVX registration page; next sitting 24 Nov 2026, then about 21 Apr 2027), web-dev in ccvx-web (site/). Reviewers are read-only and report-only: chem-reviewer, bio-reviewer, math-reviewer, phys-reviewer, web-reviewer.

Flow: a teacher commits a batch and prints BATCH READY: <scope> on its terminal. The coordinator starts the matching reviewer, relays findings back with orca terminal send, and merges the batch into rnjsxodyd90/ccvx-site-v1 only after the reviewer passes. No one pushes to main. Token Factory spend per worker goes into the Phase 4 report.

### Content contract, pinned for every worker (the pipeline in ccvx-web is the gate)

- Per subdomain folder the build reads only three files: README.md (outcomes, topic list), notes.md (notes with inline worked examples; citations to the official syllabus and BINAS as plain text), practice.md. No other file names: worked examples do not get their own file, and the name exercises.md is reserved for pre-existing exam-derived files that never ship.
- practice.md blocks, strict: a header `### <itemid>-qNN | points <n> | outcome <code> | difficulty easy|medium|hard`, then the sections `#### Question`, `#### Answer`, `#### Solution` in that order, all non-empty.
- Ids: itemid = <subject>-<code>; subject is chem, bio, matha, mathb or phys; code is the folder name up to the first dash, lowercased (C02-chemical-calculations -> chem-c02; 03-atomic-structure -> chem-03; B01-algebraic-skills -> mathb-b01). Question ids are <itemid>-qNN in ascending order (chem-c02-q01, chem-c02-q02, ...). The build fails on any other id.
- Mock exams at the subject root: mock-exam-1.md and mock-exam-1-marking-scheme.md. Question ids <subject>-mock1-qNN. 180 minutes, CCVX style, marking scheme with points per step.
- Math subjects have no domain level: CCVX-math-B/B01-... and CCVX-math-A/... sit directly at the subject root. The pipeline treats such a folder as a subdomain whose domain is the first letter of its code.
- Text-first v1: no image syntax and no image files in built content. Original diagrams are inline <svg> blocks in notes.md; their .svg source files may live in a figures/ folder, never in img/. The 13 old biology img/ files are excluded from the build and listed in the Phase 4 report.
- Links in content are http(s) only; links to repo files flatten to plain text in the build.

### T2.1 disposition

An earlier pipeline built outside the team (branch site-v1/t2.1-pipeline) duplicated ccvx-web's pipeline and is abandoned; it is not merged. Its review produced one blocking content finding and a few technical findings, all folded into the worker briefs: BINAS conventions are M(H2O) = 18.02 g/mol from table 98, or 18.016 from table 99 atomic masses (O = 16.00, H = 1.008); IUPAC O = 15.999 is never used; 90.08 g has four significant figures; firestore rules keep get gated and list/write denied (ccvx-web already does); the leak scan walks every file under public/ (ccvx-web already does); stored HTML must strip script, iframe, object, embed and form tags; the grant tool validates subject ids.
