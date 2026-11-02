# RUN NOTES — web-dev worker (site/), 2 Nov 2026

For the coordinator's Phase 4 report (site-v1-REPORT.md). Scope: `site/` only, per the task spec.

## What is built (all on branch rnjsxodyd90/ccvx-web, never pushed to main, never deployed)

Content pipeline and site, fully local (Firebase Emulator Suite + Stripe TEST mode):

- **Pipeline**: `site/scripts/build-content.mjs` — Hard-rule-1 allow-list only (README.md outcomes, notes.md, practice.md, mock-exam-*(−marking-scheme).md, past-exams/*.md walkthroughs). Skips exercises.md, spec.*, source/, img/ (incl. the 13 biology img files), syllabus/, ccvx1-*/cvte24-*. Emits `public/content/catalog.json`, `public/content/sample-*.json` (per subject the owner-chosen complete free sample subdomain), `build/items.json`, `build/sources.json` (proof of what was read), `functions/config.generated.json`.
- **Pins applied** (coordinator contract): question ids enforced exactly `<itemid>-qNN` ascending; single-level subjects (math/physics folders at subject root → subdomain, domain = code's first letter); stored HTML sanitized at build time (script/iframe/object/embed/form stripped); money and legal copy from ONE config `site/scripts/pricing-config.mjs` (LAUNCH_START, LAUNCH_END=start+1mo, launch prices 79/139/189/279, REGULAR_PRICES placeholder; badge text without a "then EUR X" until regulars are set; no crossed-out was-price anywhere); coordinator's get-gated/list+write-denied rules split and recursive public leak scan kept.
- **Backend**: `firebase.json` (hosting on 5002 — macOS holds 5000), `firestore.rules` (items get-if-free-or-grant, entitlements self-read, everything else denied), Cloud Functions `createCheckout` (subject set {1,2,3,5} → single/bundle Stripe price by lookup key `cup_<subject>_once` / `cup_bundle{2,3,5}_once`; waiver checkbox required) and `stripeWebhook` (idempotent; validates paid price vs metadata count; one grant per subject, union, activeUntil ≥ now+12mo; stores stripeCustomerId). Test-mode products script: `scripts/stripe-products.mjs` (refuses non-test keys).
- **Pages**: landing (one-motif dossier direction, launch-offer badge, pricing with the three bundles, 4-step approach, inside-counts, official 2026/2027 exam dates from ccvx.nl with source link, FAQ, not-affiliated note in footer), 5 subject pages (hero with exam facts, complete free sample subdomain with show-solution, syllabus map with counts, buy block, per-page picture credits), 5 "Past & sample exams" pages (CCVX samples first, then vwo exams 2023–2025 from examenblad.nl, all 84 links verified by `scripts/check-exam-links.mjs` on 1 Nov 2026), checkout (picker with live totals incl. no-bundle-for-4 nudge, waiver checkbox, test card note), account (Google + email-link sign-in, library with grants), reader `learn.html` (notes, practice with show-solution, timed 3-hour mock mode with marking scheme after finish, walkthroughs), legal pages (terms, privacy, refund-with-waiver).
- **Study content used**: only what exists in the repo subjects today; math A/B and physics folders don't exist yet → pages show "in preparation" honestly. Temporary fixtures in `site/sample-content/` (clearly marked, to be deleted when teachers deliver): chem-c02 practice.md (8 original questions), chem-ccvx-sample-1.md walkthrough (2 questions).

## Test results

- `npm run test:build` — 9 checks: single-level subjects, id gate rejects wrong ids, sanitizer, excluded-file proof, walkthrough parse + bad-subdomain rejection. PASS.
- `npm run test:rules` — 18 checks on the real rules in the Firestore emulator: anonymous reads only free; grants work per subject; no client writes; no list. PASS.
- `npm run test:pricing` — 21 checks: launch window logic (inside/after LAUNCH_END, missing regulars fallback), badge text forms, bundle mapping (1/2/3/5 ok, 4/dupes/unknown rejected). PASS.
- `npm run check:links` — 84/84 official exam links HTTP 200 on 1 Nov 2026.
- `npm run build` + `validate` — 95 items (53 chem + 41 bio subdomains, 1 walkthrough), 2 free (chem-c02, bio-b01), 283 sources all on the allow-list, leak scan clean. PASS.
- **Taste gate** (tasteskill lint + inspect at 1440/768/390, 2 Nov 2026): **0 FAIL on all 19 routes**: /, 5 subject pages, 5 exam pages, 3 legal pages (page rules), checkout/account/learn (app rules). WARNs remaining are defended per item in `site/DESIGN.md` (Final taste report addendum). Direction: one-motif (seed 836147353, dossier tab motif), app style editorial-greeting (seed 788670149) for the reader.
- End-to-end proven in emulators: Google sign-in → library shows entitlements after `scripts/grant.mjs`; free items read without grant; paid items paywalled until grant (walkthrough verified too); checkout callable rejects unauthenticated calls; UI totals correct for 1/2/3 subjects and the 4-subject nudge.

## How to run locally

    cd site
    npm install && (cd functions && npm install)
    npm run build                 # content → catalog + items + all static pages
    npm run emulators             # auth/firestore/functions/hosting on 9099/8080/5001/5002 (import/export .emulator-data)
    node scripts/upload-content.mjs   # 95 items into the Firestore emulator
    open http://localhost:5002/

Stripe test mode: `firebase functions:secrets:set` equivalent locally = `site/functions/.env` (see `.env.example`) with `STRIPE_SECRET_KEY` (sk_test) and `STRIPE_WEBHOOK_SECRET`. Create the test prices with `STRIPE_KEY_FILE=/path/to/sk_test_key npm run stripe:products`. Test card: 4242 4242 4242 4242.

## Screenshots (in /Users/taea/Documents/ccvx-ultimate-prep/orca-briefs/shots/)

landing-1440.png, landing-390.png, subject-chemistry-1440.png, subject-chemistry-390.png, reader-chem-c02-1440.png, reader-chem-c02-390.png.

## Open OWNER DECISION items (nothing production touched, Hard rule 4)

1. **Stripe test secret key** for the local Stripe flow end-to-end: put `sk_test_…` in `site/functions/.env` (template there), run `node scripts/stripe-products.mjs`, and test a purchase. Live products at 79/139/189/279 are a later decision.
2. **LAUNCH_START and REGULAR_PRICES** in `site/scripts/pricing-config.mjs` before go-live (the badge then prints the end date; the switch is tested).
3. **Firebase project** creation (hosting/auth/firestore/functions europe-west1).
4. **Domain** ccvxultimateprep.com (do not buy here).
5. **Deploy** to production and repo visibility; pushing to `main` never.
6. **Math A free-sample subdomain**: coordinator+math-teacher to name it (config `sampleItem` in content-config.mjs); physics sample = physics teacher's first finished subdomain.

## Notes for other workers

- chem-c02 notes still reference excluded files in prose ("exercises.md", spec files) — pipeline strips the LINKS; the TEACHER's notes upgrade removes the references from source text (PLAN §2).
- Walkthrough format for teachers: `CCVX-<subject>/past-exams/<slug>.md` with header lines `official/year/paper/answers`, then `## Question N (official paper)` blocks with labelled lines `ask/subdomain/binas/points/mistakes` and a `solution:` markdown block. Question numbering must be 1,2,3… in order; subdomain ids must exist.
- font: the taste draw re-rolls type/palette per run even inside a pinned direction; `site/.taste-skill/direction.json` is hand-stabilized to the original deal (Albert Sans, black and crimson, seed 836147353). Do not re-run draw.mjs inside site/ without checking the json afterwards.
- Token Factory spend: not visible from this worker; the coordinator aggregates.
