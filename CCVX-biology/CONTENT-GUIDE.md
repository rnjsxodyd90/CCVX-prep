# Content guide for contributors (CCVX-biology)

How every subdomain folder is brought to the complete standard for CCVX Ultimate Prep. Follow this guide exactly when you draft or review content here. The finished model is `B-self-regulation/B01-protein-synthesis/` — read it first.

## What each subdomain folder contains when done

1. `README.md` — the CCVX outcomes (unchanged, from the syllabus PDF), plus a Study material list that links the files below.
2. `notes.md` — clear English explanations of every outcome, with worked examples where a calculation or method occurs. Status line: "Status: reviewed against the CCVX syllabus (21 September 2017) and standard VWO biology; not yet checked against an open source text or exam question. Diagrams are original SVGs." (Drop the last sentence if the folder has no diagrams.)
3. `exercises.md` — 10 original practice questions (allowed range 8–15) with full worked answers and marking points.
4. `img/` — only original SVG diagrams, and only where a diagram is genuinely needed (text-first). No PNG/JPG files: those had unknown provenance.

## Format of exercises.md (exactly like B01)

- Header: `# <code> — <title>: practice questions`, then one intro paragraph: the questions are original work in CCVX style; in the real exam BINAS (5th edition or later) is allowed; where the genetic code or another BINAS table is needed, a small excerpt is given with the question. Then a `Covered:` line naming the sub-specifications and their outcome numbers.
- `## Questions`: each question is `### Question N — <short context title> (<spec and outcome(s) covered>)`; a realistic 2–8 line context (health, food production, sustainability, sport, safety, research); sub-parts **Na.** **Nb.** with point values, e.g. `(3 points)`. Open questions only — the CCVX exam has no multiple choice.
- `## Answers`: a worked answer per part in full sentences with the reasoning visible, then a marking line `*Marking:* • point-earning element (1) • ...` whose numbers add up to the part's points.
- Total per subdomain: about 65–85 points. Mix: at least 2 questions with a calculation or quantitative data handling, at least 2 explanation/argument questions, and where natural a small data table to interpret (markdown table inside the question). Everything the student needs is given in the question itself (data, formulas are not given — knowing the method is part of the test).
- Exam verbs: "give", "name", "describe", "explain", "argue", "calculate", "show that", "assess", "predict" — "explain/argue" demand reasoning, "calculate/show" demand visible working in the answer.
- Close with `---` and `*Total: N points. Self-test pace: about 2 points per minute.*`

## Accuracy rules (accuracy before volume)

- Every biological claim must be standard, verifiable VWO-level biology; if you are not sure of a fact, do not use it.
- Redo every calculation in your drafts: percentages, powers, probability, molar quantities, Hardy–Weinberg, energy budgets, concentrations. The answer must show the working and the result that actually follows from the data in the question.
- Data given in a question must be internally consistent (e.g. blood values within physiological ranges, realistic organ sizes, consistent units).
- BINAS conventions: name tables, don't number them ("the BINAS table of the genetic code").

## Copyright (hard rule)

- Never copy or closely paraphrase CCVX or CvTE exam questions, their figures, their data tables or their contexts. All contexts and data in exercises are invented but realistic.
- Do not reference or reuse any `img/*.png` or `img/*.jpg`. Replace needed diagrams with new original SVGs: white background, sans-serif labels, pastel fills with slate strokes, an `<title>` element — the two B01 SVGs are the visual model. Verify placement so labels do not overlap. Then delete the PNG/JPG files.

## Scope and git

- Work only inside your assigned folder(s). Do not touch other folders.
- Do not git commit, branch, push or create worktrees; the teacher reviews and commits each batch.
