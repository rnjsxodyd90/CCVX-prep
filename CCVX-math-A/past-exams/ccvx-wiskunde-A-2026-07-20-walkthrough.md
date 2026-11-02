# Walkthrough — Tentamen Wiskunde A, 20 July 2026 (CCVX sample exam A 24)

- **Official paper:** Tentamen Wiskunde A of 20 July 2026, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde A 24*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2024.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2024%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 6 problems, 81 points; grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = algebraic skills and differentiation basics ([A01](../A01-numbers-and-algebra/), [A06](../A06-differentiation/)); O2 = cost/revenue models, quotient derivative ([A02](../A02-linear-relations/), [A07](../A07-applications-of-the-derivative/)); O3 = normal distribution, binomial, testing ([A14](../A14-binomial-distribution/), [A15](../A15-normal-distribution/), [A16](../A16-hypothesis-testing/)); O4 = counting and expectation ([A11](../A11-systematic-counting/), [A12](../A12-probability/), [A13](../A13-random-variables/)); O5 = sinusoids ([A09](../A09-sine-functions/)); O6 = exponential models with a derivative ([A04](../A04-exponential-growth/), [A06](../A06-differentiation/), [A07](../A07-applications-of-the-derivative/)).

## Question 1a (official paper)

**Asked:** the slope of the straight line through the two intersection points of the exam's quadratic and (downward) parabola — algebraically.

**Solution.** Intersections: set the formulas equal: 2x² − 21x + 50 = 20 − x² ⇔ 3x² − 21x + 30 = 0 ⇔ x² − 7x + 10 = 0 ⇔ (x − 2)(x − 5) = 0, so x = 2 and x = 5. The y-values (plug into the second function, simplest): y = 20 − 4 = 16 and y = 20 − 25 = −5. Points A(2, 16) and B(5, −5). Slope = (−5 − 16)/(5 − 2) = −21/3 = −7.

**Answer:** −7.

**Common mistakes.** Sign slips when moving all terms to one side (30 = 50 − 20, not 70); using x-values in the slope formula instead of y-values; dividing by 7 instead of by 3 in the last step.

**Points:** 6 — a clean intersection computation, both points, and the slope formula.

**Subdomain:** [A01](../A01-numbers-and-algebra/) and [A02](../A02-linear-relations/).

## Question 1b (official paper)

**Asked:** the point(s) on the graph of the exam's root function h where the tangent line is horizontal — algebraically.

**Solution.** h(x) = x²·√(x + 5), domain x ≥ −5. Product rule with (√(x+5))′ = 1/(2√(x+5)): h′(x) = 2x·√(x + 5) + x²/(2√(x + 5)). Set h′ = 0 and multiply away the denominator: 2x·2(x + 5) + x² = 0 ⇔ 4x² + 20x + x² = 5x² + 20x = 5x(x + 4) = 0 ⇔ x = 0 or x = −4. Both lie in the domain. Values: h(0) = 0 and h(−4) = 16·√1 = 16.

**Answer:** (0, 0) and (−4, 16).

**Common mistakes.** Dropping the inner-factor derivative of the root (the chain factor ½(x+5)^(-1/2)); dividing by √x + 5 too early and losing x = 0; giving only x-values when coordinates are asked.

**Points:** 6 — product+chain derivative, the multiplication trick, both points with their y-values.

**Subdomain:** [A06](../A06-differentiation/).

## Question 1c (official paper)

**Asked:** solve the exam's exponential equation 9·4ˣ = 24·3ˣ algebraically, to 4 decimals.

**Solution.** Divide both sides by 3ˣ > 0 and by 9: (4/3)ˣ = 24/9 = 8/3. Logarithm: x = log(8/3)/log(4/3) ≈ 0.98083/0.28768 ≈ 3.4094.

**Answer:** x ≈ 3.4094.

**Common mistakes.** "Simplifying" 9·4ˣ to 36ˣ — it is 9 *times* 4ˣ and can never merge like that; inverting the log ratio (log(4/3)/log(8/3) would give the reciprocal answer).

**Points:** 4 — isolating the power and applying the base-change logarithm.

**Subdomain:** [A05](../A05-logarithms/).

## Question 2a (official paper)

**Asked:** for which production amounts x of fertiliser the total sales price T tops the costs C — algebraically.

**Solution.** Solve first T = C: (2x² + 60x + 50)/(x + 1) = 50 + 3x. Multiply out (x + 1 > 0 since x ≥ 0): 2x² + 60x + 50 = (50 + 3x)(x + 1) = 3x² + 53x + 50 ⇔ 0 = x² − 7x = x(x − 7), so x = 0 or x = 7. Test x = 1 between the zeros: T = 56 > C = 53, so the sales price wins between the zeros. (Or: the difference reduces to the bergparabool-like fraction ⇔ −x² + 7x > 0 on the domain x > 0.)

**Answer:** 0 < x < 7.

**Common mistakes.** Forgetting to multiply the right side by (x + 1); giving 0 ≤ x ≤ 7 (at the boundaries T = C, so not "hoger dan"); flipping the inequality sign after reading the bergparabool.

**Points:** 7 — the cleared fraction, the quadratic, and a working interval argument.

**Subdomain:** [A01](../A01-numbers-and-algebra/) with model thinking of [A02](../A02-linear-relations/).

## Question 2b (official paper)

**Asked:** the production amount with maximal profit, using the derivative of the exam's profit function — algebraically, to 4 decimals.

**Solution.** P = T − C, so P′ = T′ − C′ with C′ = 3. Quotient rule on T: T′(x) = ((4x + 60)(x + 1) − (2x² + 60x + 50))/(x + 1)² = (4x² + 4x + 60x + 60 − 2x² − 60x − 50)/(x + 1)² = (2x² + 4x + 10)/(x + 1)². Set P′ = 0: (2x² + 4x + 10)/(x + 1)² = 3 ⇔ 2x² + 4x + 10 = 3x² + 6x + 3 ⇔ x² + 2x − 7 = 0 ⇔ x = (−2 ± √32)/2 = −1 ± 2√2. Only x = −1 + 2√2 ≈ 1.8284 is positive (and inside the profitable region of part a ✓).

**Answer:** x ≈ 1.8284.

**Common mistakes.** Numerator of the quotient rule in the wrong order (it starts with f′·g); the sign of "+ 10" becoming −10; answering −1 − 2√2 too (negative production is meaningless).

**Points:** 7 — quotient derivative, C′, the quadratic and the domain filter.

**Subdomain:** [A06](../A06-differentiation/) and [A07](../A07-applications-of-the-derivative/).

## Question 3a (official paper)

**Asked:** the percentage of cans whose content lies between two values placed symmetric around the mean — use the exam's shaded normal-distribution figure (its single percentage corresponds to P(μ − 1.5σ < X < μ − σ)).

**Solution.** Boundaries: 247 = μ − 3 = μ − 1.5σ and 253 = μ + 3 = μ + 1.5σ (σ = 2). The figure's strips on the left half add up: 0.092 + 0.150 + 0.191 = 0.433, so 43.3% lies between μ − 1.5σ and μ. The band is symmetric about μ, so double it: 86.6%.

**Answer:** ≈ 86.6%.

**Common mistakes.** Reaching for the 68/95 rules (the boundaries here are 1.5σ — that fails; the figure's strips must be used); forgetting to double the left half; misreading the strip boundaries.

**Points:** 5 — locating μ ± 1.5σ, strip addition, symmetry argument.

**Subdomain:** [A15](../A15-normal-distribution/).

## Question 3b (official paper)

**Asked:** the probability that exactly three of six bought cans contain less than the mean content.

**Solution.** "Less than the mean" has probability 0.5 per can (the continuous distribution is symmetric about μ). Independent cans: binomial with n = 6, p = 0.5. P(X = 3) = C(6,3)·0.5³·0.5³ = 20·(0.5)⁶ = 20/64.

**Answer:** 0.3125.

**Common mistakes.** Using p from part a instead of the simple 0.5; forgetting C(6,3) = 20 and writing 0.5⁶ alone; rounding without the exact fraction.

**Points:** 5 — binomial justification with parameters, single probability computed exactly.

**Subdomain:** [A14](../A14-binomial-distribution/).

## Question 3c (official paper)

**Asked:** formulate H₀ and H₁ for the consumer organisation's claim test ("the cans contain *more* than the stated amount").

**Solution.** The stated content goes into H₀ as equality: H₀: μ = 75 (mg). The organisation's suspicion has a direction — "more than": right-sided alternative. So H₁: μ > 75.

**Answer:** H₀: μ = 75; H₁: μ > 75.

**Common mistakes.** Testing the proportion p instead of the mean μ (this is a mean test on caffeine weight); two-sided instead of right-sided; writing H₀: μ > 75 (H₀ always carries the equality).

**Points:** 2 — correct type plus correct direction.

**Subdomain:** [A16](../A16-hypothesis-testing/).

## Question 3d (official paper)

**Asked:** the conclusion of that test at α = 0.05 when the measured mean of the 16 cans is 0.5 mg above the claimed value.

**Solution.** Mean test, right-sided. The test statistic is the sample mean with σ_G = 1.1/√16 = 1.1/4 = 0.275 mg (the √n-law). Critical value: g = 75 + 1.645·0.275 = 75 + 0.452375 ≈ 75.45 mg. The outcome 75.5 mg exceeds the critical value, so it lies in the rejection region: reject H₀. Conclusion: at the 5% significance level there is sufficient reason to believe the cans contain more than 75 mg of caffeine.

**Answer:** reject H₀ — the organisation's claim finds sufficient support at 5%.

**Common mistakes.** Using σ = 1.1 instead of 1.1/√16 (the mean's spread!); comparing against 76.645 (= 75 + 1.645) instead of the scaled boundary; concluding "H₀ is false" as certitude instead of the test language.

**Points:** 6 — √n-law, critical value, comparison and a context-bound conclusion.

**Subdomain:** [A16](../A16-hypothesis-testing/) and [A13](../A13-random-variables/).


## Question 4a (official paper)

**Asked:** prove by exact computation that the Grand Slam probability (all four throws of the fair 4-sided die equal) is about 0.016.

**Solution.** One fixed pattern, say all ones: (1/4)⁴ = 1/256. Four possible equal outcomes (all 1s, 2s, 3s or 4s), disjoint: 4·(1/256) = 4/256 = 1/64 = 0.015625 ≈ 0.016, as stated. ∎

**Common mistakes.** Computing (1/4)⁴ = 1/256 and forgetting the ×4 (one specific face vs any face); mixing it up with "four different faces" (that is a different event).

**Points:** 3 — the single-pattern probability plus the ×4.

**Subdomain:** [A12](../A12-probability/).

## Question 4b (official paper)

**Asked:** the no-prize probability to 5 decimals. (A "Two Pairs" result is two distinct faces, each exactly twice.)

**Solution.** Two Pairs: choose the two distinct faces: C(4, 2) = 6 ways; orderings of a pattern with two of each (like aabb): 4!/(2!·2!) = 6 ways. Favourable: 36 of 4⁴ = 256 equally likely outcomes: P = 36/256 = 9/64 = 0.140625. No prize = complement of both prizes: 1 − 1/64 − 9/64 = 54/64 = 0.84375.

**Answer:** 0.84375.

**Common mistakes.** Counting the orderings wrong (C(4,2) twice does the job — the shape counts, not which value is the "first pair"); including Grand Slam in Two Pairs and double-counting; a probability total ≠ 1 slip signalled by messy decimals.

**Points:** 6 — combinatorial count, correct complement.

**Subdomain:** [A11](../A11-systematic-counting/) and [A12](../A12-probability/).

**Note:** the exam paper also *prints* an approximate value for this probability (≈ 0.884) which does not match the computed 0.84375 — as the official answers themselves show part c with *both* routes (see next part). Use the computed value when asked to derive it; use the paper's stated approximations only where the paper explicitly bases a follow-up question on them.

## Question 4c (official paper)

**Asked:** the expected profit per game for the community house (2 decimals), given the two prize levels and the €5 stake.

**Solution, with the computed probabilities.** Expected payout: 100·(1/64) + 10·(9/64) = 100/64 + 90/64 = 190/64 ≈ €2.97. Expected profit = stake − payout = 5.00 − 2.97 = €2.03 per game.

**Solution, with the paper's stated approximations (also accepted in the official answers).** With the paper's rounded chances for Grand Slam and no-prize, the Two-Pairs probability is 1 − 0.016 − 0.884 = 0.100, giving expected payout 100·0.016 + 10·0.100 = €2.60 and expected profit 5.00 − 2.60 = €2.40.

**Answer:** €2.03 per game (or €2.40 when the paper's printed approximations are used).

**Common mistakes.** Computing expected *payout* and calling it profit (the €5 stake belongs in the game); mixing one route's probabilities into the other route; forgetting units (euros, per game).

**Points:** 4 — expectation formula with the prize values and the stake bookkeeping.

**Subdomain:** [A13](../A13-random-variables/).

## Question 5a (official paper)

**Asked:** values for the four parameters a, b, c and d of the sinusoid fitting the graph of the traffic intensity (readable extremes, period and starting point).

**Solution.** From the graph: maximum 3000, minimum 500 cars/hour. Equilibrium a = (3000 + 500)/2 = 1750; amplitude b = 3000 − 1750 = 1250. The period is the distance between two successive maxima (or minima): 8 hours, so c = 2π/8 = π/4 ≈ 0.7854. The graph rises through the equilibrium at t = 8 (halfway the minimum at t = 6 and the maximum at t = 10), so d = 8. (With the period 8, d = 0 and d = 16 describe the same graph and are equally correct.)

**Answer:** a = 1750, b = 1250, c = π/4 ≈ 0.7854, d = 8 (also 0 or 16).

**Common mistakes.** Reading the period from zero-to-zero instead of max-to-max; absolute value sign for b (here simply positive); confusing c with 2π·period instead of 2π/period.

**Points:** 5 — all four parameters, each with a graph-based justification.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 5b (official paper)

**Asked:** during how many minutes between 6:00 and 22:00 the traffic intensity exceeds the given level 2700 (the paper states the first crossing is at t = 9.1).

**Solution.** Symmetry is the shortcut (wiskunde-A style — no inverse-sine needed). The first crossing is at t = 9.1; the maximum lies at t = 10, so the second crossing mirrors it at t = 10.9: the level is exceeded from t = 9.1 to t = 10.9 — that is 1.8 hours = 108 minutes around this maximum. The next maximum at t = 18 (one period of 8 later) gives the window t = 17.1 to t = 18.9, another 108 minutes. Total: 2 × 108 = 216 minutes.

**Answer:** 216 minutes.

**Common mistakes.** Counting only one maximum window; converting 1.8 hours to 180 minutes (1.8 h = 108 min!); treating 9.1 h as 9 h 1 min (it is 9:06 — 6 minutes before t = 10, not 1).

**Points:** 4 — the two mirrored crossings, both windows, correct minute conversion.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 6a (official paper)

**Asked:** after how many years the grass covers 50% of the island, if the percentage keeps growing exponentially from 5% to 20% in the first two years — algebraically, to 4 decimals.

**Solution.** In 2 years the coverage goes ×4 (5 → 20), so per year the growth factor g satisfies g² = 4, hence g = 2 (growth factor per 2 years would be 4). With P = 5·2ᵗ: 5·2ᵗ = 50 ⇔ 2ᵗ = 10 ⇔ t = log 10/log 2 = ²log(10) ≈ 3.3219 years.

**Answer:** t ≈ 3.3219 years (about 3 years and 4 months).

**Common mistakes.** Taking g = 4 per year (that is the 2-year factor, not per year); solving 2ᵗ = 50/5 with a wrong base (²log 2 = 1, so t = ²log 10 ✓); premature rounding (the 4-decimal requirement is an answer, not intermediate).

**Points:** 5 — the per-year factor, the exponential equation, correct rounding.

**Subdomain:** [A04](../A04-exponential-growth/) and [A05](../A05-logarithms/).

## Question 6b (official paper)

**Asked:** the maximum of the exam's more realistic model P = 5·e^(t − 0.125t²) — algebraically, to 4 decimals.

**Solution.** Chain rule on the exponent: P′(t) = 5·e^(t − 0.125t²)·(1 − 0.25t). The exponential factor is never 0, so P′ = 0 ⇔ 1 − 0.25t = 0 ⇔ t = 4. Sign: positive before, negative after — a maximum. P(4) = 5·e^(4 − 0.125·16) = 5·e² ≈ 36.9453%.

**Answer:** maximal coverage ≈ 36.9453% at t = 4.

**Common mistakes.** Dropping the inner derivative (1 − 0.25t); evaluating e^(t − 0.125t²) instead of its derivative at t = 4; writing the answer as a factor instead of a percentage (≈ 36.95% of the island).

**Points:** 6 — chain derivative, zero-finding, exact e²-value then rounded.

**Subdomain:** [A06](../A06-differentiation/) and [A07](../A07-applications-of-the-derivative/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math A folder](../README.md).*
