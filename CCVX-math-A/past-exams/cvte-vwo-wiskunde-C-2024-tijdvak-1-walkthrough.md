# Walkthrough — CvTE VWO examen wiskunde C, 2024 tijdvak 1 — supplementary practice for wiskunde A students (topics overlap)

- **Official paper:** VWO wiskunde C, centraal examen 2024 period 1, college code VW-1026-a-24-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2024-07/vw-1026-a-24-1-o-spr.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2024-05/vw-1026-a-24-1-c.pdf>

**Note — this is a wiskunde C exam, not wiskunde A.** College code VW-1026-a belongs to VWO wiskunde C (VWO wiskunde A carries code VW-1024-a). This walkthrough is kept in the math-A prep as supplementary reasoning practice only: percentages, algebra, exponential models, counting and formal logic here transfer directly to CCVX wiskunde A, but the exam's coverage is NOT wiskunde A coverage — wiskunde C has no differentiation, no binomial or normal distribution and no hypothesis testing, so use the filtered per-question subdomain links as pointers to the overlapping skills, not as a syllabus map. Walkthroughs of the real VWO wiskunde A exams live in `cvte-vwo-wiskunde-A-…-tijdvak-1-walkthrough.md`.


Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you in our own words what each question asks for, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito). Questions that depend on a figure or worksheet (drawings, photographs, scatter plots) get their method described in words; visual answers follow the official key's drawings.

Exam totals: 24 questions in 6 problems, 77 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: marble sculpture volume and photo perspective ([A01](../A01-numbers-and-algebra/), spatial drawing), meadowlark percentages, exponential decline, logistic limit and tangent slope ([A04](../A04-exponential-growth/), [A08](../A08-sequences/), [A06](../A06-differentiation/)), court-room logic (reasoning track, alongside [A12](../A12-probability/)), body-fat formulas ([A01](../A01-numbers-and-algebra/)), Rubik's-cube power model ([A03](../A03-power-and-quadratic-relations/), [A04](../A04-exponential-growth/)), multiplets and Hellin's law ([A11](../A11-systematic-counting/), [A01](../A01-numbers-and-algebra/)).

## Question 1 (official paper) — 4 points

**Asked:** the volume of marble used for the letter Z, in dm³ (top view of the Z given with dimensions; seat height 40 cm).

**Solution.** The Z's top surface fits into a 100 × 142 cm rectangle with two right-angled triangles cut off. Each cut-off triangle has legs 50 cm and 142 − 2·40 = 62 cm. Area: 100·142 − 2·(½·50·62) = 14 200 − 3100 = 11 100 cm². Volume: 11 100·40 = 444 000 cm³. Convert: 444 000 cm³ = 444 dm³.

**Answer:** 444 dm³.

**Common mistakes.** Halving the wrong triangle legs (the 62 comes from 142 minus BOTH 40 cm widths, not one); forgetting the cm³ → dm³ conversion (÷ 1000 — the question explicitly asks for dm³).

**Points:** 4 — the cut-off idea, the area, the ×40, the unit conversion.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (areas and volumes, units).

## Question 2 (official paper) — 3 points

**Asked:** draw the letter A into the worksheet's side view (seen from the left), given the real letter A is 120 cm high and stands 140 cm from the Z.

**Method description.** The already-drawn Z fixes the scale: its 40 cm seat height occupies 2 cm in the drawing, so 1 cm in the drawing = 20 cm in reality. Then the A is 120/20 = 6 cm high, stands 140/20 = 7 cm from the Z, and is drawn with the same thickness as the Z (2 cm wide in the drawing). Place it upright behind the Z as seen from the left, and finish the letter's shape.

**Common mistakes.** Using the Z's full height rather than its seat height as the scale reference; putting the A in front of the Z (the photo shows the arrangement).

**Points:** 3 — the 7 cm distance, the 6 cm height, a finished 2 cm-wide letter.

**Subdomain:** spatial drawing (views and scale).

## Question 3 (official paper) — 4 points

**Asked:** the height at which the photo (also on the worksheet) was taken, using the Z's 40 cm seat height, in whole cm.

**Solution.** Extend two parallel depth lines of the Z in the photo until they meet: that is a vanishing point. The horizon is the horizontal line through the vanishing point; the camera height equals the horizon's height in the scene. Measure in the photo: the Z's seat height is 19 mm and the horizon sits 73 mm above the ground. Scale: 19 mm in the photo = 40 cm in reality, so the photo height = (73/19)·40 ≈ 153.7 cm.

**Answer:** ≈ 154 cm (measurement tolerance is allowed by the key).

**Common mistakes.** Drawing the horizon at the top edge of the Z instead of through the vanishing point; comparing against the Z's total height rather than the given 40 cm seat.

**Points:** 4 — vanishing point, horizon, both measurements + scaling.

**Subdomain:** spatial drawing (perspective).

## Question 4 (official paper) — 2 points

**Asked:** how many hectares of grassland remained in the Netherlands in 2014, given that 150 000 ha (a 14% drop) was lost since 1990 (in thousands of hectares).

**Solution.** The 150 000 ha is 14% of the 1990 stock: 1990 stock = 150 000/0.14 ≈ 1 071 428.6 ha. Remaining in 2014: 1 071 428.6 − 150 000 = 921 428.6 → 921 thousand hectares. (Shortcut: 150 000·(86/14).)

**Answer:** 921 000 ha (921 thousand hectares).

**Common mistakes.** Computing 0.86·(150 000/0.14) vs 150 000·(86/14) is fine — but taking 14% OFF 1 071 428 again (double-counting the loss) is not; answering without the "thousands" rounding.

**Points:** 2 — the 1990 stock, the subtraction.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (percentages).

## Question 5 (official paper) — 4 points

**Asked:** how many percent fewer meadowlarks the dune areas had in 2005 compared to 1989, using the yearly percentage declines of figure 1 (whole percents).

**Solution.** Read from figure 1: dunes declined by −9.6% per year over 1990–2000 and −7.8% per year over 2001–2005 (reading margin 0.2). Growth factors: 0.904 (11 years) and 0.922 (5 years). Compound factor 1989 → 2005: 0.904¹¹·0.922⁵ ≈ 0.3295·0.6665 ≈ 0.220. So 22% remains: 78% fewer.

**Answer:** 78%.

**Common mistakes.** Applying each factor the wrong number of times (1990–2000 is 11 transitions, 2001–2005 is 5); adding the percentages (9.6 + 7.8) instead of compounding factors.

**Points:** 4 — both read-off percentages, both factors, correct compounding.

**Subdomain:** [A04](../A04-exponential-growth/) (repeated percentage change).

## Question 6 (official paper) — 4 points

**Asked:** set up a recursive formula for the sequence of P (lark percentage relative to 1990, t in years from 1990), using that P was 40 in 2005.

**Solution.** Exponential decline: P(t) = r·P(t − 1). The 2005 reading (t = 15) gives P(15) = 40, with P(0) = 100: 100·r¹⁵ = 40 ⇔ r¹⁵ = 0.4 ⇔ r = 0.4^(1/15) ≈ 0.9407 ≈ 0.941. Recursive formula: P(t) = 0.941·P(t − 1) with initial term P(0) = 100. (Alternative accepted: P(T) = 0.4·P(T − 1) with T in units of 15 years.)

**Answer:** P(t) = 0.941·P(t − 1), P(0) = 100.

**Common mistakes.** Giving only the direct formula P(t) = 100·0.941ᵗ (scored at most 2/4 — the question demands a recursive form); forgetting the initial term; r in fewer than 3 decimals (0.94 would break the 3-decimal instruction).

**Points:** 4 — r¹⁵ = 0.4, r ≈ 0.941, the recursive formula, the initial term.

**Subdomain:** [A08](../A08-sequences/) and [A04](../A04-exponential-growth/).

## Question 7 (official paper) — 4 points

**Asked:** prove from the formula G = 22/(1 + 1420·2.72^(−0.307·T)) + 9 (weight in grams, tarsus length in mm) what limit value the weight has — by reasoning, not with number examples.

**Solution.** As T grows, the exponent −0.307·T → −∞, so 2.72^(−0.307·T) → 0. Then 1420·2.72^(−0.307·T) → 0, the denominator 1 + 1420·2.72^(−0.307·T) → 1, and the fraction 22/(…) → 22. Hence G → 22 + 9 = 31 grams: the limit is 31 grams.

**Answer:** 31 grams.

**Common mistakes.** Plugging in one large T value (explicitly forbidden — the reasoning must be general); forgetting the +9 outside the fraction; claiming the fraction → 0 instead of the denominator → 1.

**Points:** 4 — exponential term → 0, denominator → 1, fraction → 22, limit 31.

**Subdomain:** [A04](../A04-exponential-growth/) (limits of exponential terms).

## Question 8 (official paper) — 4 points

**Asked:** the maximal growth rate of the weight (whole grams per mm), using the enlarged graph on the worksheet.

**Method description.** Between tarsus lengths 22 and 25 mm the curve is steepest; draw the tangent line there on the worksheet (the inflection point of the logistic curve). Read two points far apart on that tangent, e.g. (15, 5) and (30, 30). Maximal slope = (30 − 5)/(30 − 15) = 25/15 ≈ 1.7.

**Answer:** ≈ 2 grams per mm (the key allows read-off spread).

**Common mistakes.** Tangent at the wrong place (not the steepest spot); reading points on the curve instead of on the tangent; reporting 1.7 while whole grams per mm are asked — but do note the key's tolerance band instead of inventing precision.

**Points:** 4 — tangent in the right interval, two read-off points, the division, whole-number answer.

**Subdomain:** [A06](../A06-differentiation/) (rate of change read from a tangent).

## Question 9 (official paper) — 3 points

**Asked:** judge with a Venn diagram the reasoning "judges are honest; teachers are honest; so all teachers are judges".

**Solution.** Draw one big circle E (honest people). Inside it draw two circles that do not cover each other: R (judges) and D (teachers) — for instance side by side. Both R and D lie fully inside E, matching both premises. But the drawing shows a teacher can sit inside D while lying outside R: the conclusion "all teachers are judges" does not follow. The reasoning is not correct.

**Answer:** not correct (the Venn diagram shows honest teachers outside the judge circle are possible).

**Common mistakes.** Drawing D inside R (that assumes what must be proven); drawing R and D outside E (that contradicts the premises); concluding "sometimes true" instead of judging the reasoning.

**Points:** 3 — a suitable diagram (2 points) plus the verdict "not correct".

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

## Question 10 (official paper) — 2 points

**Asked:** finish "If you are not honest, then …" as the logical consequence of R ⇒ E, and write it in symbols.

**Solution.** The contrapositive of R ⇒ E is ¬E ⇒ ¬R: "if you are not honest, then you are not a judge".

**Answer:** ¬E ⇒ ¬R.

**Common mistakes.** Answering E ⇒ R (that swaps, not negates) or ¬R ⇒ ¬E; mixing the words ("…dan ben je eerlijk" etc.).

**Points:** 2 — the Dutch sentence and the symbols.

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

## Question 11 (official paper) — 2 points

**Asked:** describe claims I (E ⇒ R) and II (E ⇒ ¬R) in plain Dutch, and say for each whether it follows from R ⇒ E.

**Solution.** Claim I: "if you are honest, then you are a judge." Claim II: "if you are honest, then you are not a judge." Neither follows from R ⇒ E. An implication says nothing with the roles swapped (claim I) and nothing with the conclusion negated (claim II): honest non-judges (teachers, for instance) are perfectly consistent with "all judges are honest", and they disprove both I and II as consequences.

**Answer:** I and II both do NOT follow from R ⇒ E.

**Common mistakes.** Accepting claim I because it "sounds like" the original (that is the classic converse error); judging II as contradictory with — rather than not-following-from — the premise.

**Points:** 2 — both translations, both verdicts.

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

## Question 12 (official paper) — 4 points

**Asked:** deduce which of the three sisters (Alicia, Bahija, Cecile) was at the crime scene, given exactly one of them was there and their three statements (A and B both say "not me"; C says "only one of us three speaks the truth").

**Solution.** Suppose Cecile speaks the truth. Then she is the only truth-teller, so Alicia and Bahija both lie — meaning BOTH were at the crime scene. That contradicts the DNA fact that only one sister was there. So Cecile lies, meaning NOT exactly one sister speaks the truth. Now suppose Alicia (or Bahija) was at the scene: then Alicia lies and Bahija tells the truth — exactly one of A and B speaks the truth, and since Cecile also lies, exactly one sister in total speaks the truth… but that would make Cecile's statement ("only one of us speaks the truth") TRUE, while she must be lying. Contradiction. The only consistent case: Cecile was at the crime scene; then both Alicia and Bahija speak the truth, so Cecile's "only one speaks the truth" is indeed false. ∎

**Answer:** Cecile.

**Common mistakes.** Stopping after the first contradiction (that only proves Cecile lies, not that she was present — the other two cases must also be eliminated); treating "Cecile lies" as "nobody speaks the truth" (it can also mean two or three do).

**Points:** 4 — the case-by-case elimination (A present / B present / C present) with the truth-count check.

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

## Question 13 (official paper) — 3 points

**Asked:** reason (without number examples) from Gallagher's formula VVM = 0.446·G − 0.00087·j·G + 9.438·L² that a man's fat percentage rises as he ages (weight G and height L constant).

**Solution.** With G and L constant, the terms 0.446·G and 9.438·L² stay fixed. As age j rises, the subtracted term 0.00087·j·G grows, so the fat-free mass VVM falls. Body fat = G − VVM then rises, and the fat percentage V = (G − VVM)/G ·100 rises with it. ∎

**Common mistakes.** Arguing with a numeric example (explicitly forbidden); forgetting the last step — a falling VVM is not yet a rising percentage, you still need fat = G − VVM and division by a constant G.

**Points:** 3 — constant terms, the shrinking VVM, the chain to the percentage.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (formula reasoning).

## Question 14 (official paper) — 3 points

**Asked:** show that substituting formula 1 (with j = 33) into formula 2 gives V = 58.271 − 943.8·(L²/G).

**Solution.** With j = 33: VVM = 0.446·G − 0.00087·33·G + 9.438·L² = 0.446·G − 0.02871·G + 9.438·L². Substitute into V = (G − VVM)/G ·100:
V = (G − 0.446G + 0.02871G − 9.438L²)/G ·100 = (0.58271G − 9.438L²)/G ·100 = (0.58271 − 9.438·L²/G)·100 = 58.271 − 943.8·(L²/G). ∎

**Common mistakes.** Sign slip: −VVM flips ALL three terms, including making −(−0.02871G) = +0.02871G; dividing only the L² term by G instead of the whole numerator; 0.00087·33 = 0.02871 miscomputed as 0.2871.

**Points:** 3 — substitution with j = 33, the bracket expansion, the final reshaping.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (algebraic manipulation).

## Question 15 (official paper) — 3 points

**Asked:** the difference between Ronaldo's measured fat percentage (7) and the value formula 3 gives (5.88 kg of fat, 1.87 m, 33 years old), as a whole number.

**Solution.** His weight follows from the measurement: 5.88 kg fat is 7% of his weight, so G = 5.88/0.07 = 84 kg. Formula 3: V = 58.271 − 943.8·(1.87²/84) = 58.271 − 943.8·0.04163 ≈ 58.271 − 39.29 ≈ 18.98. Difference: 18.98 − 7 ≈ 12 percentage points.

**Answer:** 12 (percentage points).

**Common mistakes.** Using 5.88 as the weight (it is the fat mass!); mixing up the division order in L²/G; subtracting the wrong way (measured − computed).

**Points:** 3 — the weight 84, the computed 18.98, the difference.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (percentages, formula use).

## Question 16 (official paper) — 4 points

**Asked:** draw into the worksheet figure the lower bound of healthy weight for 33-year-old men (healthy V between 8 and 20; the upper-bound graph is drawn) and shade the healthy region.

**Method description.** The lower bound corresponds to V = 8: 58.271 − 943.8·L²/G = 8 ⇔ G = (943.8/50.271)·L² ≈ 18.77·L² — an upward-opening parabola through the origin. Compute G for at least three lengths, e.g. L = 1.60 → G ≈ 48.0 kg; L = 1.80 → G ≈ 60.8 kg; L = 2.00 → G ≈ 75.1 kg. Plot these points in the worksheet figure, connect them with a smooth curve, and shade the band between your curve and the given upper-bound curve.

**Common mistakes.** Drawing a straight line (the relation G ∝ L² is quadratic, the given upper-bound graph shows the same shape); shading outside the band; mixing up which bound belongs to V = 8 (LOW fat percentage = LOW weight).

**Points:** 4 — the V = 8 equation, ≥ 3 computed points, the smooth curve, the shaded band.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (graphing from a formula).

## Question 17 (official paper) — 2 points

**Asked:** show from the record table (n = 2 → 0.49 s, n = 3 → 3.47 s, n = 4 → 18.42 s, etc.) that Tₙ is neither linear nor exponential in n.

**Solution.** Linear would need equal differences: 3.47 − 0.49 = 2.98 but 18.42 − 3.47 = 14.95 — unequal, so not linear. Exponential would need equal ratios: 3.47/0.49 ≈ 7.1 but 18.42/3.47 ≈ 5.3 — unequal, so not exponential. ∎

**Common mistakes.** Checking only one of the two growth types; using Tₙ/n instead of Tₙ₊₁/Tₙ for the ratio test.

**Points:** 2 — the difference check and the ratio check.

**Subdomain:** [A02](../A02-linear-relations/) vs [A04](../A04-exponential-growth/) (growth-type recognition).

## Question 18 (official paper) — 3 points

**Asked:** from which cube number n the world record Tₙ = 0.026·n^4.4 would exceed one hour.

**Solution.** Solve 0.026·n^4.4 = 3600 ⇔ n^4.4 = 3600/0.026 ≈ 138 461.5 ⇔ n = 138 461.5^(1/4.4) ≈ 14.7 (calculator, or power rules: take the 4.4-th root). Cube numbers are whole: from n = 15 the record lies above one hour.

**Answer:** from cube number 15.

**Common mistakes.** Answering 14.7 (a cube number must be whole — round UP here, since 14 still lies under an hour); dividing 3600 by 0.026 in the wrong direction; taking ln but forgetting to divide by 4.4.

**Points:** 3 — the equation, the solve, the whole-number conclusion 15.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) (power functions).

## Question 19 (official paper) — 3 points

**Asked:** the record the formula predicts for the existing 33-cube (kubusnummer 33), in whole days, hours and minutes.

**Solution.** T₃₃ = 0.026·33^4.4 = 124 863 seconds (calculator). Convert: 124 863/3600 ≈ 34.68 hours = 1 day + 10.68 hours; 0.68 hours ≈ 0.68·60 ≈ 41 minutes.

**Answer:** 1 day, 10 hours and 41 minutes.

**Common mistakes.** Rounding 10.68 h to "11 hours" before splitting off the minutes; 33^4.4 typed as 33 × 4.4 on a basic calculator (you need the power key x^y).

**Points:** 3 — T₃₃ in seconds, the conversion route, the split answer.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) plus unit conversion.

## Question 20 (official paper) — 3 points

**Asked:** the factor by which Tₙ is multiplied when n doubles (1 decimal).

**Solution.** T₂ₙ = 0.026·(2n)^4.4 = 0.026·2^4.4·n^4.4 = 2^4.4·Tₙ. Factor: 2^4.4 ≈ 21.1. (Numerically: pick n = 4 and 2n = 8: T₈/T₄ = 8^4.4/4^4.4 gives the same 21.1.)

**Answer:** 21.1.

**Common mistakes.** Answering "about 2" (confusing n doubling with T doubling); computing with a single number pair but rounding 2^4.4 prematurely.

**Points:** 3 — choosing n and 2n (or the symbolic route), both values, the quotient.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) (scaling rule x → kx in power functions).

## Question 21 (official paper) — 4 points

**Asked:** the number of different compositions of a triplet, distinguishing sex and origin type (one-egg, two-egg, three-egg), with explanation.

**Solution.** Count per origin type. One-egg: all three genetically identical → 3 boys or 3 girls: 2 compositions. Two-egg: the identical pair is boys or girls (2 ways), and the third (genetically different) child is a boy or a girl independently (2 ways): 2·2 = 4 compositions. Three-egg: all genetically different, so only the sex mix matters: 3 boys, 3 girls, 2 boys + 1 girl, 2 girls + 1 boy: 4 compositions. Total: 2 + 4 + 4 = 10.

**Answer:** 10 compositions.

**Common mistakes.** Double-counting the two-egg cases where the third child shares the pair's sex (genetically different but same sex is one composition, not several orderings); forgetting that within a three-egg triplet the children are not ordered.

**Points:** 4 — the three cases counted (2, 4, 4) and the total.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 22 (official paper) — 3 points

**Asked:** the percentage increase of the triplet-plus share from 1980 (25 out of 180 517 births) to 1991 (124 out of 196 698 births), in whole percents.

**Solution.** Shares: 1980: 25/180 517·100% ≈ 0.01385%; 1991: 124/196 698·100% ≈ 0.06304%. Relative increase: (0.06304 − 0.01385)/0.01385·100% ≈ 355%.

**Answer:** 355%.

**Common mistakes.** Reporting the percentage-POINT difference (0.049) as the increase — the question asks relative growth; computing (124 − 25)/25 (that ignores the changing total number of births).

**Points:** 3 — both shares, the relative increase, whole percents.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (percentage change).

## Question 23 (official paper) — 3 points

**Asked:** how many more naturally-conceived twins were born in 2002 than Hellin's law predicts (3707 twin births of which 22% via IVF; 199 205 births total; 3270 IVF births; Hellin: 1 in 89 births is a twin).

**Solution.** Naturally conceived twins: 78% of 3707 = 0.78·3707 ≈ 2891. Natural pregnancies: 199 205 − 3270 = 195 935, so Hellin predicts 195 935/89 ≈ 2202 twins. Excess: 2891 − 2202 = 689 (rounding the prediction to 2201 instead gives 690, also accepted).

**Answer:** 689 (or 690) more twins.

**Common mistakes.** Applying Hellin's 1/89 to ALL births instead of the natural pregnancies; using 22% instead of 78% of the twins; rounding inconsistencies (the key accepts both 689 and 690).

**Points:** 3 — the natural twins, the Hellin prediction, the difference.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (percentages and proportions).

## Question 24 (official paper) — 3 points

**Asked:** how many times larger the 1991 triplet-plus share (124 of 196 698) is than Hellin's law predicts for natural pregnancies, as a whole number.

**Solution.** Hellin's share for triplets up to quintuplets: 1/89² + 1/89³ + 1/89⁴ ≈ 0.0001262 + 0.0000014 + 0.00000002 ≈ 0.0001277, i.e. 0.01277%. Actual 1991 share: 124/196 698 ≈ 0.06304%. Ratio: 0.06304/0.01277 ≈ 4.9 → 5 times as large. (Equivalent route: Hellin expects 0.0001277·196 698 ≈ 25.1 cases vs the counted 124.)

**Answer:** 5 times as large.

**Common mistakes.** Using only 1/89² (that ignores quadruplets and quintuplets, which the question's "at most five children" instruction includes); comparing counts without the same base year; answering 4.9 as a whole number instead of rounding to 5.

**Points:** 3 — Hellin's combined share, the actual share, the whole-number ratio.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (proportions).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math A folder](../README.md).*
