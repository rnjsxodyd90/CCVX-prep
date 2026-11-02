# Walkthrough — CvTE VWO examen wiskunde C, 2022 tijdvak 1 (supplementary reasoning practice for wiskunde A)

- **Official paper:** VWO wiskunde C, centraal examen 2022 period 1, college code VW-1026-a-22-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/2022/ex2022/VW-1026-a-22-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/2022/ex2022/VW-1026-a-22-1-c.pdf>

**Note — this is a wiskunde C exam, not wiskunde A.** College code VW-1026-a belongs to VWO wiskunde C (VWO wiskunde A carries code VW-1024-a). This walkthrough is kept in the math-A prep as supplementary reasoning practice only: percentages, algebra, exponential models, counting and formal logic here transfer directly to CCVX wiskunde A, but the exam's coverage is NOT wiskunde A coverage — wiskunde C has no differentiation, no binomial or normal distribution and no hypothesis testing, so use the filtered per-question subdomain links as pointers to the overlapping skills, not as a syllabus map. Walkthroughs of the real VWO wiskunde A exams live in `cvte-vwo-wiskunde-A-…-tijdvak-1-walkthrough.md`.


Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you in our own words what each question asks for, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito). Questions that depend on a figure or worksheet (photos, perspective drawings, game boards) get their method described in words; visual answers follow the official key's drawings.

Exam totals: 21 questions in 5 problems, 76 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: Fibonacci scoring and racing speed ([A08](../A08-sequences/), [A01](../A01-numbers-and-algebra/)), sous-vide volumes, exponential-vs-quadratic cooking times ([A01](../A01-numbers-and-algebra/), [A04](../A04-exponential-growth/), [A03](../A03-power-and-quadratic-relations/)), software-support decay model with a decaying-increase reasoning task and base-a logarithm ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/)), the crate pyramid: sum-of-squares formula and a perspective drawing ([A03](../A03-power-and-quadratic-relations/), [A01](../A01-numbers-and-algebra/)), Safari Hide & Seek counting and formal logic ([A11](../A11-systematic-counting/), reasoning track alongside [A12](../A12-probability/)).

## Question 1 (official paper) — 2 points

**Asked:** how many points sixth place earns in the Fibonacci-style scoring (34, 21, then each place = previous minus the one before it, down to 1 point for eighth).

**Solution.** Continue the row: 3rd = 34 − 21 = 13, 4th = 21 − 13 = 8 (given), 5th = 13 − 8 = 5, 6th = 8 − 5 = 3.

**Answer:** 3 points.

**Common mistakes.** Leaving the fifth place out and answering 5; doing Fibonacci addition (8 + 5) instead of using the exam's difference scheme (the row runs BACKWARD through Fibonacci).

**Points:** 2 — fifth place 5, sixth place 3.

**Subdomain:** [A08](../A08-sequences/) (difference-defined sequences).

## Question 2 (official paper) — 3 points

**Asked:** judge whether "stay right behind number four in the final distance" is a safe tactic to keep third place (number three leads number four by 6 points after three distances).

**Solution.** Staying just behind means: whatever place number four takes, number three takes the next one. The leak: if number four WINS the distance (34 points) while number three finishes second (21), number four gains 34 − 21 = 13 points — more than the 6-point lead, so number four overtakes. Losing more than 6 is possible, so the tactic fails in that scenario.

**Answer:** no, not safe — a 1st place for number four with number three second costs 13 points, wiping out the 6-point lead.

**Common mistakes.** Comparing only equal placings ("right behind keeps the gap") — the POINTS per place differ; forgetting that first–second is the worst case (the gap 34 − 21 = 13 is the largest consecutive gap).

**Points:** 3 — insight "may not lose more than 6", the scenario where that fails, the verdict.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (quantitative reasoning).

## Question 3 (official paper) — 3 points

**Asked:** how many points first place earns in the 12-place variant (u₁₂ = 1, u₁₁ = 2, uₙ = uₙ₊₁ + uₙ₊₂).

**Solution.** Work upward: u₁₀ = 2 + 1 = 3, u₉ = 5, u₈ = 8, u₇ = 13, u₆ = 21, u₅ = 34, u₄ = 55, u₃ = 89, u₂ = 144, u₁ = 144 + 89 = 233.

**Answer:** 233 points.

**Common mistakes.** Applying the recurrence in the wrong direction (uₙ₊₂ = uₙ₊₁ − uₙ is NOT the rule here); arithmetic slips in the 10-step chain — write the table out, one addition per line.

**Points:** 3 — the back-computed table (up to 2 slips tolerated for 1 point), 233.

**Subdomain:** [A08](../A08-sequences/).

## Question 4 (official paper) — 4 points

**Asked:** by what percentage Sjinkie's average speed in the world record (2:07.943 over 1500 m) exceeded his Dordrecht race (2:14.065), 1 decimal.

**Solution.** Times in seconds: 2·60 + 14.065 = 134.065 s and 2·60 + 7.943 = 127.943 s. Average speeds: 1500/134.065 ≈ 11.19 m/s and 1500/127.943 ≈ 11.72 m/s. Percentage increase: (11.72 − 11.19)/11.19 ≈ 0.0478 → 4.8%. (Shortcut: speeds ratio = inverse times ratio: 134.065/127.943 ≈ 1.0478.)

**Answer:** 4.8%.

**Common mistakes.** Comparing TIMES (that gives 4.6% — and answers the wrong question); forgetting to convert minutes; basing the percentage on the FASTER speed in the denominator.

**Points:** 4 — both times in seconds, both speeds (or the inverse-ratio route), the percentage.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (speed, percentage change).

## Question 5 (official paper) — 3 points

**Asked:** the maximal amount of water (litres, 1 decimal) in the sous-vide (inner 27.5 × 19.5 × 12.0 cm; water may rise to a mark 2.0 cm below the rim) with the entrecote already inside (top/bottom ≈ 120 cm² each, 3.5 cm thick; ignore the bag's volume).

**Solution.** Water + meat together may occupy up to height 12.0 − 2.0 = 10.0 cm: 27.5·19.5·10.0 = 5362.5 cm³. Entrecote volume: 120·3.5 = 420 cm³. Maximal water: 5362.5 − 420 = 4942.5 cm³ = 4942.5 ml ≈ 4.9 litres.

**Answer:** 4.9 litres.

**Common mistakes.** Filling to the full 12.0 cm (the mark sits 2.0 cm BELOW the rim); doubling the meat area (the 120 cm² is used once — volume = area × thickness); cm³ → litre slip (4942.5 cm³ = 4.9425 L, then 1 decimal).

**Points:** 3 — bath capacity up to the mark, the meat volume, the subtraction + conversion.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (volumes, units).

## Question 6 (official paper) — 3 points

**Asked:** show by calculation that the table (0.25 in → 23 min, 0.5 in → 31 min, 1 in → 60 min) is NOT exponential, despite the manufacturer's remark.

**Solution.** For an exponential relation, equal steps in thickness must give equal growth factors. Factors: 31/23 ≈ 1.35 (for +0.25 in) and 60/31 ≈ 1.94 (for +0.5 in). Compare on the same step: for +0.5 in the factor should be (31/23)² ≈ 1.81 if the first step's factor held — but the actual factor for +0.5 in is 1.94 ≠ 1.81. The growth factors are not constant, so no exponential relation. ∎

**Common mistakes.** Comparing only the raw ratios 1.35 vs 1.94 without equalizing the step size (the key gives at most 1/3 for that alone); concluding "it must be linear" (nobody asks that — it is in fact quadratic).

**Points:** 3 — both ratios, the squared comparison, the conclusion.

**Subdomain:** [A04](../A04-exponential-growth/) (growth-factor test).

## Question 7 (official paper) — 3 points

**Asked:** how many minutes shorter the rule of thumb (1 hour per inch, proportional) is than the formula T = 0.5916d² + 0.0689d + 0.3329 at d = 1.3 (whole minutes).

**Solution.** Rule of thumb: 1.3 h = 78 min. Formula: T(1.3) = 0.5916·1.69 + 0.0689·1.3 + 0.3329 = 0.99980 + 0.08957 + 0.3329 ≈ 1.4223 h ≈ 85.3 min. Difference: 85.3 − 78 ≈ 7.3 → 7 minutes.

**Answer:** 7 minutes.

**Common mistakes.** Comparing against 1 hour flat (the rule scales WITH thickness); rounding the formula's 1.4223 h to 1.4 h before converting (that yields 6 minutes instead of 7 — keep full precision until the end).

**Points:** 3 — the rule-of-thumb minutes, the formula value, the whole-minute difference.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) (quadratic evaluation).

## Question 8 (official paper) — 4 points

**Asked:** from which thickness the gap between formula and rule of thumb reaches at least a quarter of an hour (inches, 1 decimal).

**Solution.** Gap in hours: 0.5916d² + 0.0689d + 0.3329 − d. Set equal to 0.25: 0.5916d² − 0.9311d + 0.0829 = 0. Quadratic formula (or intersect with the calculator): d = (0.9311 ± √(0.9311² − 4·0.5916·0.0829))/1.1832 = (0.9311 ± 0.8190)/1.1832, giving d ≈ 0.09 (outside the model's range d ≥ 0.5 — and there the rule overestimates anyway) and d ≈ 1.479. The gap grows beyond 0.25 h from d ≈ 1.479 → from 1.5 inch.

**Answer:** from 1.5 inch.

**Common mistakes.** Solving T(d) = 0.25 h instead of T(d) − d = 0.25 h (the GAP is between two models); reporting 1.4 or 1.47 (rounding must go UP: at 1.4 the gap is still only ~11 minutes); forgetting the domain d ≥ 0.5 when interpreting the small root.

**Points:** 4 — the difference formula, the equation, the solve, the 1.5 conclusion.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/).

## Question 9 (official paper) — 4 points

**Asked:** what percentage of work time still goes to new software after three years if every month 2% LESS time goes to development than the month before (whole percents).

**Solution.** Monthly factor 0.98, over 3·12 = 36 months: 0.98³⁶ ≈ 0.4832 → 48.32...% ≈ 48%.

**Answer:** 48%.

**Common mistakes.** 3 years = 3 months (no — 36!); computing 100 − 2·36 = 28% (linear subtraction instead of repeated factors).

**Points:** 4 — monthly factor 0.98, the 36th power, the percentage.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 10 (official paper) — 3 points

**Asked:** the percentage increase of the SUPPORT percentage between t = 2 and t = 5, computed from P = 100·(1 − 0.694ᵗ) (whole percents).

**Solution.** P(2) = 100·(1 − 0.694²) = 100·(1 − 0.4816) ≈ 51.84%. P(5) = 100·(1 − 0.694⁵) ≈ 100·(1 − 0.1610) ≈ 83.90%. Percentage increase: (83.90 − 51.84)/51.84 ≈ 0.619 → 62%.

**Answer:** 62%.

**Common mistakes.** Reporting the percentage-POINT difference (32) instead of the relative increase; using 100 · P-ratio wrongly as (1 − 0.694³); mixing up which of the two values is the base of the percentage.

**Points:** 3 — both percentages, the relative increase, rounding.

**Subdomain:** [A01](../A01-numbers-and-algebra/) and [A04](../A04-exponential-growth/).

## Question 11 (official paper) — 4 points

**Asked:** reason — from the formula P = 100·(1 − 0.694ᵗ), without plugging in numbers or sketching — that the support percentage is increasing at a DECREASING rate.

**Solution.** Since 0 < 0.694 < 1, the term 0.694ᵗ decreases as t increases: each equal step in t multiplies it by 0.694, so its drops shrink — it decreases "less and less" toward 0 (it can never pass 0). Therefore 1 − 0.694ᵗ increases, and its increases shrink by the same shrinking drops. Multiplying by 100 does not change the shape: P is decreasingly increasing (afnemend stijgend). ∎

**Common mistakes.** Showing it only for two numeric examples (forbidden); arguing "it approaches 100, so it rises" — that misses the AFNEMEND (decreasing-rate) part, which lives in the shrinking step sizes.

**Points:** 4 — 0.694ᵗ decreases, its decrease shrinks, then 1 − 0.694ᵗ increases with shrinking steps, conclusion for P.

**Subdomain:** [A04](../A04-exponential-growth/) (global behaviour of exponential terms).

## Question 12 (official paper) — 3 points

**Asked:** rewrite P = 100·(1 − 0.694ᵗ) into t = ᵃlog(b + c·P), i.e. give a, b and c.

**Solution.** Divide: P/100 = 1 − 0.694ᵗ, so 0.694ᵗ = 1 − P/100 = 1 − 0.01P. Taking the base-0.694 logarithm: t = ⁰·⁶⁹⁴log(1 − 0.01P).

**Answer:** a = 0.694, b = 1, c = −0.01.

**Common mistakes.** Flipping the sign of c (+0.01 instead of −0.01); writing t = log(1 − 0.01P)/log(0.694) — a perfectly correct base-10 form, but the question's template wants the base as a: a = 0.694.

**Points:** 3 — 1 − 0.01P isolated, logarithm taken correctly, a/b/c named.

**Subdomain:** [A05](../A05-logarithms/).

## Question 13 (official paper) — 5 points

**Asked:** draw on the worksheet the single crate of the first (top) layer on top of the perspective drawing of the second layer (vertices of the top crate rest on the centres of the four crates below).

**Method description.** Extend the parallel depth edges of the top face of layer 2 to the vanishing point. Use the diagonals of that top face to find the centres of the four crates — the top crate's bottom vertices must sit on those four centres. Determine the crate's height via diagonals of a side face (the crate is a cube: its height equals its width measured through the diagonal construction). Draw the four verticals, close the top face with lines toward the same vanishing point, and finish the outline.

**Common mistakes.** Sizing the top crate like one small crate (it spans the centres of the four below — a 2×2 span, so its edge equals one full small-crate diagonal in the floor plan); placing the vertices at the crate CORNERS of layer 2.

**Points:** 5 — vanishing point, centres via top-face diagonals, height via side-face diagonals (2 points), finished drawing.

**Subdomain:** spatial drawing (perspective).

## Question 14 (official paper) — 5 points

**Asked:** with which layer, counted from the BOTTOM, the builders of the 63 365-crate pyramid were busy when the 20% mark was passed.

**Solution.** First find the number of layers: solve n(n + 1)(2n + 1)/6 = 63 365 (try values near (3·63 365)^(1/3) ≈ 57; T₅₇ = 57·58·115/6 = 63 365 exactly), so 57 layers. 20% of the crates: 0.2·63 365 = 12 673 crates from the bottom. Cumulative crate counts from below: 57² = 3249; +56² = 3136 → 6385; +55² = 3025 → 9410; +54² = 2916 → 12 326; +53² = 2809 → 15 135. Since 12 326 < 12 673 ≤ 15 135, the 12 673rd crate lands in the next layer: the 5th layer from the bottom.

**Answer:** the 5th layer from the bottom.

**Common mistakes.** Counting from the TOP after finding T₅₂ and T₅₃ but then forgetting to convert (57 − 53 + 1 = 5); answering "the 53rd layer" without saying from which side; working with 0.8 from the top but comparing against the wrong end.

**Points:** 5 — the n = 57 solve, the 12 673, the cumulative squares, the layer verdict.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) and [A08](../A08-sequences/).

## Question 15 (official paper) — 3 points

**Asked:** show the expansion of Tₙ = n(n + 1)(2n + 1)/6 into Tₙ = an³ + bn² + cn, leaving a, b and c as fractions.

**Solution.** (n + 1)(2n + 1) = 2n² + 3n + 1. Multiply by n: 2n³ + 3n² + n. Divide by 6: Tₙ = ⅓n³ + ½n² + ⅙n. So a = ⅓, b = ½, c = ⅙. ∎

**Common mistakes.** Prematurely converting to decimals (the question explicitly wants fractions); expanding n(n + 1) first but then mis-multiplying by (2n + 1) — either bracket order works if you finish cleanly; losing the /6 while expanding.

**Points:** 3 — the full expansion (2 points) and /6 split into the three fractions.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (algebraic expansion).

## Question 16 (official paper) — 4 points

**Asked:** investigate Elin's claim that the German pyramid of 105 995 crates cannot have been built in the same (complete square layers) way.

**Solution.** Compute complete pyramids near the estimate n ≈ (3·105 995)^(1/3) ≈ 68: T₆₇ = 67·68·135/6 = 102 510 and T₆₈ = 68·69·137/6 = 107 134. Since 102 510 < 105 995 < 107 134, no whole number of layers gives exactly 105 995 crates. (Equivalently: solving n(n + 1)(2n + 1)/6 = 105 995 gives n ≈ 67.7, not an integer.)

**Answer:** Elin is right — 105 995 lies between T₆₇ and T₆₈, so the German pyramid cannot have had complete square layers only.

**Common mistakes.** Checking only T₆₈ and concluding from "not equal" (you must sandwich the value between two consecutive totals); computing 2n + 1 = 137 for n = 67 (it is 135 — watch the substitution).

**Points:** 4 — T₆₇, T₆₈, the between-observation, the verdict.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/).

## Question 17 (official paper) — 3 points

**Asked:** in how many ways five DIFFERENT animals can be placed over the nine squares of field D (at most one animal per square).

**Solution.** First animal: 9 squares, second: 8, … fifth: 5: total 9·8·7·6·5 = 15 120. (Equivalently: choose the 5 squares C(9,5) ways and arrange the 5 animals on them: 126·120 = 15 120.)

**Answer:** 15 120 ways.

**Common mistakes.** 9⁵ (squares cannot be reused) or C(9,5) only (the five animals are DISTINCT — order among them matters).

**Points:** 3 — the decreasing choices, the product, the answer.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 18 (official paper) — 4 points

**Asked:** the number of different ways to place all four pieces on the four fields (pieces 1, 2 and 4 may be rotated four ways; the H-shaped piece 3 only two: upright or lying).

**Solution.** Distribute the four distinct pieces over the four distinct fields: 4! = 24 ways. Orientations: pieces 1, 2 and 4 have 4 rotations each; piece 3 has 2. Total: 4!·4·4·2·4 = 24·128 = 3072.

**Answer:** 3072 ways.

**Common mistakes.** Giving piece 3 four orientations (an H in a square grid has only 2 distinct positions); 4·4·2·4 without the 4! field assignment (or the reverse); counting reflections as allowed.

**Points:** 4 — the 4!, the orientation counts, the product 3072.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 19 (official paper) — 3 points

**Asked:** explain why the requirement "five zebras visible" forces piece 3 onto field A (A3).

**Solution.** The board holds exactly five zebras in total, so showing five zebras means showing them ALL: not a single zebra may be covered. Pieces 1, 2 and 4 — however you rotate them — always cover at least one zebra on field A (their shapes span the field in such a way that one of A's zebra squares is always hit). Piece 3 covers only the four corner squares and the centre square of a field: on field A those five squares are zebra-free (A's zebras sit elsewhere), so piece 3 can be laid on A without hiding a zebra. Since no other piece can go on A uncovered-zebra-free: A3. ∎

**Common mistakes.** Arguing only "field A suits piece 3" — the argument also needs that pieces 1/2/4 CANNOT go on A; ignoring that "five visible" equals "all of them" (there are only five zebras on the whole board — check the fields in the paper's figure).

**Points:** 3 — all-zebras insight, pieces 1/2/4 always hiding one, piece 3's shape as the only option.

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

## Question 20 (official paper) — 4 points

**Asked:** translate the steps (A3 ∧ ¬C4) ⇒ (C1 ∨ C2) and ¬C1 ⇒ C2 into ordinary Dutch sentences, and explain how ¬C1 ⇒ C2 follows from game assignment 19.

**Solution.** Step one: "If piece 3 is placed on field A and piece 4 is NOT placed on field C, then piece 1 or piece 2 must be placed on field C." (That is just the pigeonhole fact that one of the remaining pieces 1/2/4 must fill C, with 4 excluded.) Step two: "If piece 1 is not placed on field C, then piece 2 must be placed there." The justification: assignment 19 allows ONLY zebras and elephants to be visible. Field C's zebra sits in a corner; if piece 1 were placed on C in any of its orientations that keeps that corner zebra visible, a lion and an antelope would also remain visible — forbidden by the assignment. So piece 1 cannot be on C (¬C1), and with the first step that leaves piece 2 for field C: C2. ∎

**Common mistakes.** Translating ∧ as "or"; explaining ¬C1 ⇒ C2 without using the assignment's "no other animals" clause (the lion + antelope argument is the point).

**Points:** 4 — both translations, the assignment's restriction invoked, the piece-1-on-C contradiction.

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

## Question 21 (official paper) — 6 points

**Asked:** reason out the full solution of game assignment 19 and shade on the worksheet how the remaining pieces must lie (piece 3 on A is pre-shaded).

**Solution.** Chain the forced moves. (1) From Q19–Q20: A3, C2 — and piece 2 must lie on C in the ONE orientation that leaves only the corner zebra visible. (2) Piece 1 cannot go on field B (there it would cover a zebra, whatever its orientation), so piece 1 → field D: D1, placed so that exactly the zebra and the elephant stay visible. (3) Only field B remains for piece 4: B4 — in the orientation that keeps exactly B's zebra and elephant visible. Visible totals then: A (via piece 3's gaps) contributes its two zebras, C one zebra, D one zebra + one elephant, B one zebra + one elephant → 5 zebras and 2 elephants, nothing else — as the assignment demands. Solution: A3, B4, C2, D1 with those orientations (shading per the key's figure).

**Answer:** A3, B4, C2, D1 (orientations as shaded in the official key).

**Common mistakes.** Placing piece 4 before proving piece 1's field (the key tolerates that variant ONLY with a correct reasoning chain); shading without written reasoning (capped at 3/6); leaving more animals visible on B or D than assigned.

**Points:** 6 — C2 orientation, D1 via the B-exclusion and its orientation, B4 forced and oriented, the correct shadings.

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math A folder](../README.md).*
