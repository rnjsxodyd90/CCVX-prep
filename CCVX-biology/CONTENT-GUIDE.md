# Content guide for contributors (CCVX-biology), v2

How every subdomain folder is brought to the complete standard for CCVX Ultimate Prep. Follow this guide exactly. The finished model is `B-self-regulation/B01-protein-synthesis/` — read it first.

## Pipeline contract (site build)

The site pipeline builds ONLY these files per subdomain folder: `README.md`, `notes.md`, `practice.md`. Everything else (including this guide) stays in the repo but never ships.

## What each subdomain folder contains when done

1. `README.md` — the CCVX outcomes (unchanged), plus a Study material list linking `notes.md` and `practice.md`.
2. `notes.md` — clear English explanations of every outcome, with worked examples where a calculation or method occurs. Status line: "Status: reviewed against the CCVX syllabus (21 September 2017) and standard VWO biology; not yet checked against an open source text or exam question." Text-first: if a diagram is genuinely needed, inline it as a **raw `<svg>` element directly in notes.md** (markdown image syntax `![...](...)` is dropped by the build). Keep the editable `.svg` source in a folder named `figures/` next to `notes.md` if you want it editable later. Never use `img/`; the old `img/*.png|jpg` files stay unexplained and excluded from the build (do not extend, do not reference).
3. `practice.md` — 10 original practice questions' worth of items (total 65–85 points) in the strict block format below.

## Strict block format for practice.md

One short top matter (`# <code> — <title>: practice questions` + 1–3 intro lines), then a sequence of blocks, one per scored item, ids ascending per file:

```
### <itemid>-qNN | points <n> | outcome <code> | difficulty easy|medium|hard
#### Question
<1–6 lines: context if needed + the question itself, CCVX style>

#### Answer
<the short answer the student should reach — self-contained, 1–3 sentences>

#### Solution
<full worked solution: reasoning, intermediate steps, for calculations the numbers>
*Marking:* • <one point element> (1) • <another> (1)
```

Rules:
- itemids: bio-01 (0-basic-knowledge/01-chemistry), bio-02 (02-physics), bio-b01..bio-b08, bio-c01..bio-c03, bio-d01..bio-d05, bio-e01..bio-e03, bio-f01..bio-f04. NN is two digits, ascending from q01 with no gaps.
- points = the item's own points (1–4 typical; the *Marking* bullets sum exactly to it).
- outcome = the CCVX code, e.g. `B1.1.3` (spec B1.1, outcome 3). For the two basic-knowledge folders use a short topic slug such as `mol-mass`, `ph`, `half-life`.
- All three fields (`#### Question`, `#### Answer`, `#### Solution`) are present and non-empty, in that order. `#### Answer` is the bare answer; `#### Solution` the worked derivation + marking scheme.
- Mix per subdomain: at least 2 items with a calculation or quantitative data handling; at least 2 explain/argue items; where natural a small markdown data table in the question. Everything the student needs is given in the question (data, table excerpts of BINAS); knowing the method is part of the test.
- Exam verbs: give, name, describe, explain, argue, calculate, show that, assess, predict.

## Accuracy rules (accuracy before volume)

- Every biological claim must be standard, verifiable VWO-level biology.
- Redo every calculation: percentages, powers, probability, molar quantities, Hardy–Weinberg, energy budgets, concentrations. The solution must show the working and the result that follows from the data in the question.
- Data in a question must be internally consistent and realistic.
- BINAS conventions: name tables, don't number them.

## Copyright (hard rule)

- Never copy or closely paraphrase CCVX or CvTE exam questions, their figures, data tables or contexts. All contexts and data are invented but realistic.
- Diagrams only as original SVG (white background, sans-serif labels, pastel fills, slate strokes, `<title>` element), inlined in notes.md per above.

## Scope and git

- Work only inside your assigned folder(s). Do not git commit, branch, push or create worktrees; the teacher reviews and commits each batch.
- End your report with: files written, note fixes, every calculation re-verified with its result, outcome coverage map (item ids → outcomes).
