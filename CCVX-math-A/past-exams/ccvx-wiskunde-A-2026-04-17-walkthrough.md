# Walkthrough — Tentamen Wiskunde A, 17 April 2026 (CCVX sample exam A 23)

- **Official paper:** Tentamen Wiskunde A of 17 April 2026, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde A 23*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2023.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2023%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 6 problems, 81 points; grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = polynomials, quotients, sequences ([A01](../A01-numbers-and-algebra/), [A06](../A06-differentiation/), [A08](../A08-sequences/)); O2 = root and exponential models ([A04](../A04-exponential-growth/), [A06](../A06-differentiation/), [A07](../A07-applications-of-the-derivative/)); O3 = normal distribution and testing ([A15](../A15-normal-distribution/), [A16](../A16-hypothesis-testing/)); O4 = hypergeometric drawing and binomial continuation ([A11](../A11-systematic-counting/), [A12](../A12-probability/), [A14](../A14-binomial-distribution/)); O5 = exponential growth and saturation ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/)); O6 = sinusoid reading ([A09](../A09-sine-functions/)).

## Question 1a (official paper)

**Asked:** the algebraic minimal value of the exam's fourth-degree polynomial.

**Solution.** f(x) = x⁴ − 10x³ + 28x² − 64. f′(x) = 4x³ − 30x² + 56x = 2x(2x² − 15x + 28) = 0 ⇔ x = 0 or 2x² − 15x + 28 = 0. The quadratic: D = 225 − 224 = 1, so x = (15 ± 1)/4 = 4 or 3.5. Candidate values: f(0) = −64, f(3.5) = 0.3125, f(4) = 0. This positive-leading quartic shape (local max at 3.5, local minima at 0 and 4) makes the smallest of these the global minimum: −64.

**Answer:** minimal value −64 (at x = 0).

**Common mistakes.** Factoring the derivative incorrectly (2x² − 15x + 28 has D = 1); assuming only one extreme exists; not comparing the two minima with each other.

**Points:** 7 — derivative, both factor steps, all three evaluations, comparison.

**Subdomain:** [A07](../A07-applications-of-the-derivative/).

## Question 1b (official paper)

**Asked:** for which x the graph of the exam's rational function runs parallel to a given line y = x − 4 — algebraically.

**Solution.** g(x) = (2 − x²)/(x + 2). Quotient rule: g′(x) = (−2x(x + 2) − (2 − x²))/(x + 2)² = (−x² − 4x − 2)/(x + 2)². The line has slope 1, so solve g′(x) = 1: −x² − 4x − 2 = x² + 4x + 4 ⇔ 2x² + 8x + 6 = 0 ⇔ x² + 4x + 3 = 0 ⇔ (x + 1)(x + 3) = 0 ⇔ x = −1 or x = −3. (Both are in the domain x ≠ −2 ✓.)

**Answer:** x = −1 ∨ x = −3.

**Common mistakes.** Quotient numerator written backwards ((2 − x²) − 2x(x + 2) — sign flip); setting g(x) = x − 4 instead of g′(x) = 1 (parallel means equal *slope*).

**Points:** 6 — derivative, slope equation, both solutions.

**Subdomain:** [A06](../A06-differentiation/).

## Question 1c (official paper)

**Asked:** the sum of the powers of 3 that lie between 10 and 10 million — with the paper's hint pointing at 3³ up to 3¹⁴ — algebraically.

**Solution.** A geometric sequence with first term u_e = 27 = 3³ and ratio 3, last term u_l = 4 782 969 = 3¹⁴. The term after the last: u_{l+1} = 3¹⁵ = 14 348 907. Sum formula (formula sheet): (u_{l+1} − u_e)/(r − 1) = (14 348 907 − 27)/(3 − 1) = 14 348 880/2 = 7 174 440. (Check the count: 3³ … 3¹⁴ is 12 terms ✓.)

**Answer:** 7 174 440.

**Common mistakes.** Using u_l instead of u_{l+1} in the formula (the "first + last" version is for arithmetic!); starting the sum at 3⁰ = 1 (below 10); off-by-one on the term count.

**Points:** 4 — recognising the geometric sequence and using the right formula correctly.

**Subdomain:** [A08](../A08-sequences/).

## Question 2a (official paper)

**Asked:** the time when the first user model N₁ = t²·√(8 − 3t²) reaches its maximum — algebraically.

**Solution.** Product and chain rules: N₁′(t) = 2t·√(8 − 3t²) + t²·(−6t)/(2√(8 − 3t²)) = 2t√(8 − 3t²) − 3t³/√(8 − 3t²). Multiply the equation N₁′ = 0 by √(8 − 3t²): 2t(8 − 3t²) − 3t³ = 0 ⇔ 16t − 6t³ − 3t³ = t(16 − 9t²) = 0 ⇔ t = 0 or t² = 16/9 ⇔ t = 4/3 (positive). From the graph this is the maximum; t = 0 and t = √(8/3) are the endpoints with N₁ = 0.

**Answer:** at t = 4/3 months.

**Common mistakes.** Losing the chain factor −6t; solving without clearing the root-denominator (sign chaos); for the answer giving N₁(4/3) instead of the *time* t asked for.

**Points:** 6 — derivative with both rules, the clearing step, the positive root.

**Subdomain:** [A06](../A06-differentiation/) and [A07](../A07-applications-of-the-derivative/).

## Question 2b (official paper)

**Asked:** by what percentage the two models differ at t = 1 — algebraically.

**Solution.** First model at t = 1: N₁ = 1·√(8 − 3) = √5 ≈ 2.2361 (million). Second model: N₂ = e^(−1 + 4 − 2) = e¹ ≈ 2.7183. Percentage difference relative to the first model: (e − √5)/√5 × 100% ≈ 0.48221/2.23607 × 100% ≈ 21.57%.

**Answer:** ≈ 21.57% (the second model gives about 21.6% more).

**Common mistakes.** Dividing by e instead of by √5 (choose the right "old" for (new − old)/old); subtracting the percentages as if both were percentages already; time confusion (t = 1 is July here — June + 1 month).

**Points:** 4 — both values, correct reference base, percentage formula.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 2c (official paper)

**Asked:** decide with the derivative of N₂ whether usage grows or shrinks at t = 1.5 (16 July).

**Solution.** Chain rule on the exponent: N₂′(t) = (−2t + 4)·e^(−t² + 4t − 2). At t = 1.5: (−3 + 4)·e^(−2.25 + 6 − 2) = 1·e^1.75. Since e^1.75 > 0, N₂′(1.5) > 0: the number of users is *increasing* then (the exponential's own maximum lies at t = 2, as the factor (−2t + 4) shows).

**Answer:** increasing at t = 1.5.

**Common mistakes.** Evaluating N₂ instead of N₂′ (the question is about the derivative's sign); sign slip in the exponent evaluation (−1.5² = −2.25, not 2.25).

**Points:** 4 — chain derivative and its sign at t = 1.5.

**Subdomain:** [A06](../A06-differentiation/).

## Question 3a (official paper)

**Asked:** the percentage of packages with delivery time between μ = 60 and 78 hours, via the exam's normal-distribution figure (whose strips carry the percentages).

**Solution.** 78 = 60 + 18 = μ + 18 = μ + 1.5σ (σ = 12). The figure's left-half strips mirror to the right: from μ to μ + σ is 0.341 (half of the 68% band) and μ + σ to μ + 1.5σ matches the printed 0.092 band by symmetry. Total: 0.341 + 0.092 = 0.433.

**Answer:** ≈ 43.3%.

**Common mistakes.** Using the 68% rule-of-thumb blindly (this needs the figure's finer strips); including the left tail by accident (the band starts *at* μ).

**Points:** 4 — translating 78 into μ + 1.5σ, strip addition on the correct side.

**Subdomain:** [A15](../A15-normal-distribution/).

## Question 3b (official paper)

**Asked:** at which of the two delivery services the percentage of packages below 75 hours is highest — motivated.

**Solution.** Express 75 in each service's z-language. V&Z: 75 − 60 = 15 = 1.25σ (σ = 12). B&B: 75 − 62 = 13 = 1.625σ (σ = 8). The boundary lies relatively further right for B&B, so B&B piles more probability below 75. (Equivalently, sketch both bells: B&B's curve is lower at 75 but much more of it lies left of 75.)

**Answer:** B&B — 75 = μ + 1.625σ there versus μ + 1.25σ at V&Z.

**Common mistakes.** Comparing the means only (62 < 75 for B&B, 60 < 75 for V&Z — inconclusive); assuming the narrower distribution must have less below 75 in *absolute* terms without the z-positions.

**Points:** 3 — both z-boundaries and the conclusion.

**Subdomain:** [A15](../A15-normal-distribution/).

## Question 3c (official paper)

**Asked:** formulate H₀ and H₁ for the webshop's suspicion that G&G is *slower* than their claimed 60 hours.

**Solution.** The claim is the mean 60: H₀: μ = 60. The suspicion has direction — longer than claimed: right-sided. H₁: μ > 60.

**Answer:** H₀: μ = 60; H₁: μ > 60.

**Common mistakes.** Testing the proportion p (this is a mean!); two-sided instead of right-sided ("langer dan" gives a direction).

**Points:** 2 — mean test with the right sidedness.

**Subdomain:** [A16](../A16-hypothesis-testing/).

## Question 3d (official paper)

**Asked:** the test's conclusion at α = 0.05 when the sample mean delivery time of 40 packages is 64 hours.

**Solution.** Mean test, right-sided. Test statistic: the sample mean with σ_G = 12/√40 ≈ 1.8974. Critical value: g = 60 + 1.645·1.8974 ≈ 63.12 hours. The outcome 64 > 63.12: in the rejection region → reject H₀. At the 5% level there is sufficient reason to believe G&G's average delivery time is above 60 hours.

**Answer:** reject H₀ — sufficient evidence at 5% that G&G is slower than claimed.

**Common mistakes.** Using 12 instead of 12/√40 (the mean is the test statistic!); comparing against 61.645 (= 60 + 1.645) — wrong unit; failing to write the conclusion in context.

**Points:** 6 — √n-law, critical value, comparison, context conclusion.

**Subdomain:** [A16](../A16-hypothesis-testing/) and [A13](../A13-random-variables/).

## Question 4a (official paper)

**Asked:** the probability that four blind-picked coins show all four different colours (4 decimals).

**Solution.** Draws without replacement from 15 red, 15 blue, 15 green, 5 gold = 50 coins. One fixed colour order (say red, blue, green, gold): (15·15·15·5)/(50·49·48·47). The four colours can appear in 4! = 24 orders with equal products: 24·(15³·5)/(50·49·48·47) = 24·16 875/5 527 200 ≈ 0.0733. (Combination route check: 15·15·15·5/C(50,4) ✓ — same.)

**Answer:** ≈ 0.0733.

**Common mistakes.** Forgetting the ×24 (one specific order is not enough); using replacement probabilities ((15/50)⁴-style, wrong denominators); rounding C(50,4) somewhere unsafe.

**Points:** 4 — the ordered-draw count or the combination route, 4-decimal rounding.

**Subdomain:** [A12](../A12-probability/) and [A11](../A11-systematic-counting/).

## Question 4b (official paper)

**Asked:** compute the win probability (at least one gold coin) to 6 decimals.

**Solution.** At-least-one via the complement: P(no gold in 4 draws) = (45·44·43·42)/(50·49·48·47) ≈ 0.646960. So P(win) = 1 − 0.646960 ≈ 0.353040.

**Answer:** ≈ 0.353040.

**Common mistakes.** Adding the four "exactly k gold" probabilities (allowed but error-prone — the official answers even mark that route as correct but not recommended); denominators 50⁴ as with replacement.

**Points:** 4 — complement route or the combination equivalent, exact rounding to 6 decimals.

**Subdomain:** [A12](../A12-probability/).

## Question 4c (official paper)

**Asked:** the probability of winning a prize in exactly 4 of 10 independent plays (4 decimals).

**Solution.** Repeated independent plays with the same win probability: binomial, n = 10 and p = 0.3530 (from part b). P(X = 4) = C(10,4)·p⁴·(1−p)⁶ = 210·0.353⁴·0.647⁶ ≈ 0.2392.

**Answer:** ≈ 0.2392.

**Common mistakes.** Using p = 0.25 or the 4-colour probability instead of part b's 0.353; exponent mix-up (p⁶·(1−p)⁴ instead of p⁴·(1−p)⁶); dropping C(10,4) = 210.

**Points:** 5 — binomial justification, parameters, single probability.

**Subdomain:** [A14](../A14-binomial-distribution/).

## Question 5a (official paper)

**Asked:** the modelled percentage of mobile-phone users on 1 January 1999, from the two given measurements (1 July 1996 and 1 July 2000) — algebraically.

**Solution.** Growth factor over 4 years: 4.86/0.96 = 5.0625, so per year g = 5.0625^(1/4) = 1.5. The asked date is 2.5 years after 1 July 1996: percentage = 0.96·1.5^(2.5) = 0.96·(2.25·√1.5) ≈ 2.645 ≈ 2.65%. (One-step route: 0.96·5.0625^(2.5/4) — same answer.)

**Answer:** ≈ 2.65%.

**Common mistakes.** Using the 4-year factor per year; misplacing the 2.5-year offset (it is 1 Jul 1996 → 1 Jan 1999); writing 2.645 as 265% (it stays a percentage all along).

**Points:** 4 — per-year factor extraction, the fractional power, rounded answer.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 5b (official paper)

**Asked:** explain why the exponential model cannot hold for the next decade (2005–2015).

**Solution.** Exponential growth with factor 1.5 is unbounded: the percentage of the population would pass 100%, which is impossible. Concretely: 1 July 2008 already gives 0.96·1.5¹² ≈ 124.6%, and the model claims ≈ 2128% by 2015 — so the exponential description must fail well before that (real adoption saturates).

**Answer:** it would exceed 100% of the population early in the period.

**Common mistakes.** Saying "it grows too fast" without the decisive 100% argument; invoking the saturation formula instead of explaining why exponential must break.

**Points:** 2 — the 100%-boundary argument (a concrete computed value helps).

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 5c (official paper)

**Asked:** when the provider's saturation formula first reaches 81% — algebraically, to the month.

**Solution.** 9(10 − 5.9e^(−0.28t)) = 81 ⇔ 10 − 5.9e^(−0.28t) = 9 ⇔ 5.9e^(−0.28t) = 1 ⇔ e^(−0.28t) = 1/5.9 ⇔ −0.28t = −ln 5.9 ⇔ t = ln(5.9)/0.28 ≈ 6.339 years after 1 July 2005. That is 6 years and 0.339·12 ≈ 4 months later: November 2011.

**Answer:** November 2011.

**Common mistakes.** Moving terms with sign errors (keep 5.9e^{...} on one side before taking ln); interpreting 0.339 of a year as 3.39 months instead of ×12 ≈ 4.07; answering t = 6.339 without the calendar conversion.

**Points:** 6 — isolating the exponential, the logarithm, the year+month conversion.

**Subdomain:** [A05](../A05-logarithms/) and [A04](../A04-exponential-growth/).

## Question 5d (official paper)

**Asked:** the long-run percentage predicted by the saturation formula.

**Solution.** As t → ∞, e^(−0.28t) → 0, so P → 9·(10 − 0) = 90: the saturation level is 90% of the population.

**Answer:** 90%.

**Common mistakes.** Answering 100% (this model caps at 9·10 = 90); limits in the wrong direction (e^(+0.28t) thinking).

**Points:** 2 — the limit argument.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 6a (official paper)

**Asked:** explain the factor 0.017214 in the sunshine formula.

**Solution.** In a sinusoid C = 2π/period. The period is one year = 365 days, so C = 2π/365 ≈ 0.017214. Equivalently: the formula completes one full sine wave over 2π/0.017214 ≈ 365 days — the year.

**Answer:** 0.017214 = 2π/365, the yearly period converted into the C-factor.

**Common mistakes.** Saying "it is small because t is large" (it encodes the *time unit* and period, not the scale of t); claiming it should be 365/C instead.

**Points:** 3 — the C = 2π/period link in the year context.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 6b (official paper)

**Asked:** the minimal and maximal average sunshine per day according to the formula.

**Solution.** The sine ranges over [−1, 1], so Z ranges over [4.6 − 2.8, 4.6 + 2.8] = [1.8, 7.4] hours.

**Answer:** minimum 1.8 hours, maximum 7.4 hours.

**Common mistakes.** Computing only one side; mixing amplitude with the C factor here (0.017214 does not affect the range).

**Points:** 2 — equilibrium ± amplitude.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 6c (official paper)

**Asked:** algebraically the day number on which the average sunshine is maximal.

**Solution.** Maximum when sin = 1, i.e. the argument is π/2 (+ k·2π): 0.017214·(t − 75) = π/2 ⇔ t − 75 = (π/2)/0.017214 ≈ 91.25 ⇔ t ≈ 166.25. Quicker with the phase: the formula rises through equilibrium at t = 75, so the maximum comes a quarter period later: 75 + 365/4 = 166.25. So day number 166.

**Answer:** day 166 (t ≈ 166.25).

**Common mistakes.** Swapping 75 and 91.25; giving 91 (that is 166 − 75); forgetting that the sine model's own phase (t = 75 is the *rising equilibrium crossing*, not the max).

**Points:** 3 — π/2 into the argument or the quarter-period step.

**Subdomain:** [A09](../A09-sine-functions/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math A folder](../README.md).*
