# Walkthrough — Tentamen Wiskunde A, 17 April 2025 (CCVX sample exam A 20)

- **Official paper:** Tentamen Wiskunde A of 17 April 2025, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde A 20*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2020.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2020%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 6 problems, 81 points; grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = quadratics, rational slope, same-base exponentials ([A01](../A01-numbers-and-algebra/), [A04](../A04-exponential-growth/), [A06](../A06-differentiation/)); O2 = island cable route ([A06](../A06-differentiation/), [A07](../A07-applications-of-the-derivative/)); O3 = hotel desserts ([A13](../A13-random-variables/), [A14](../A14-binomial-distribution/)); O4 = tide laboratory sinusoid ([A09](../A09-sine-functions/)); O5 = weights and testing ([A13](../A13-random-variables/), [A15](../A15-normal-distribution/), [A16](../A16-hypothesis-testing/)); O6 = AI software growth ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/), [A06](../A06-differentiation/)).

## Question 1a (official paper)

**Asked:** the difference between the x-coordinates of the two intersections of the exam's two quadratic functions — algebraically, to 4 decimals.

**Solution.** 3x² + 7x = x² + 3x + 5 ⇔ 2x² + 4x − 5 = 0. Quadratic formula: x = (−4 ± √(16 + 40))/4 = (−2 ± √14)/2. The roots differ by 2·√14/2·... directly: ((−2 + √14) − (−2 − √14))/2 = 2√14/2 = √14 ≈ 3.7417. (Shortcut worth knowing: the root spread of a quadratic is √D/a = √56/2 = √14.)

**Answer:** √14 ≈ 3.7417.

**Common mistakes.** Answering with one root instead of the difference; √D/2a used instead of √D/a for the spread; √14 rounded mid-computation (keep it exact to the end).

**Points:** 5 — roots or the discriminant relation, exact √14, correct rounding.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 1b (official paper)

**Asked:** the difference between the y-coordinates of the two points where the exam's rational function has slope 5 — algebraically.

**Solution.** h(x) = (x − 3)/(2x − 1). Quotient rule: h′(x) = ((2x − 1)·1 − (x − 3)·2)/(2x − 1)² = (2x − 1 − 2x + 6)/(2x − 1)² = 5/(2x − 1)². Set equal to 5: (2x − 1)² = 1 ⇔ 2x − 1 = ±1 ⇔ x = 1 or x = 0. Points: h(1) = (1 − 3)/(2 − 1) = −2 and h(0) = (−3)/(−1) = 3. Difference between the y-coordinates: 3 − (−2) = 5.

**Answer:** 5.

**Common mistakes.** Forgetting the ± on (2x−1)² = 1 (one branch lost); computing the x-difference instead; sign of the quotient numerator's constant ((−1 − (−6)) = 5 ✓).

**Points:** 7 — derivative, both branch points, y-difference.

**Subdomain:** [A06](../A06-differentiation/).

## Question 1c (official paper)

**Asked:** solve algebraically: 32ˣ = 8^(x−1).

**Solution.** Same base: 32ˣ = (2⁵)ˣ = 2^(5x) and 8^(x−1) = (2³)^(x−1) = 2^(3x − 3). So 5x = 3x − 3 ⇔ 2x = −3 ⇔ x = −3/2.

**Answer:** x = −3/2.

**Common mistakes.** Reading the left base as 3^(2x) (it is 32ˣ — powers of 2 territory); expanding 8^(x−1) with a sign error (+3 instead of −3).

**Points:** 5 — one base, clean exponent comparison.

**Subdomain:** [A01](../A01-numbers-and-algebra/) and [A04](../A04-exponential-growth/).

## Question 2a (official paper)

**Asked:** which of the two direct routes has the lowest cost.

**Solution.** Route 1 (all under sea): √45 km × €50 000/km ≈ 6.7082 × 50 000 ≈ €335 410. Route 2 (coast to B, then sea): 6×40 000 + 3×50 000 = 240 000 + 150 000 = €390 000. Route 1 is cheaper.

**Answer:** route 1 (directly under the sea) — ≈ €335k versus €390k.

**Common mistakes.** Swapping the two kilometre costs (coast 40k vs sea 50k); √45 approximated as 45 or √3·15.

**Points:** 2 — both correct totals.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 2b (official paper)

**Asked:** algebraically the minimal cost of the mixed route via a free point P on the coast, with the given cost formula K(x) = 4x + 5√(x² − 12x + 45) (x in [0, 6], units of €10 000).

**Solution.** Chain rule on the root: K′(x) = 4 + 5·(2x − 12)/(2√(x² − 12x + 45)) = 4 + 5(x − 6)/√(x² − 12x + 45). Set K′ = 0: 5(6 − x) = 4√(x² − 12x + 45) (both sides ≥ 0 for x ≤ 6 ✓). Square: 25(6 − x)² = 16(x² − 12x + 45) ⇔ 25x² − 300x + 900 = 16x² − 192x + 720 ⇔ 9x² − 108x + 180 = 0 ⇔ x² − 12x + 20 = 0 ⇔ (x − 2)(x − 10) = 0. Within [0, 6]: x = 2 (x = 10 is outside, and it fails the sign condition). Compare: K(2) = 8 + 5√(4 − 24 + 45) = 8 + 25 = 33; boundaries K(0) = 5√45 ≈ 33.54 and K(6) = 24 + 15 = 39.

**Answer:** minimal cost 33 (= €330 000) at x = 2 km.

**Common mistakes.** The derivative's inner factor (2x − 12) halved wrongly; squaring without the sign condition or without checking x = 10 in it; dismissing x = 2 without comparing against x = 0 and 6.

**Points:** 8 — derivative, the two-sided-square step, candidate+boundary comparison.

**Subdomain:** [A06](../A06-differentiation/) and [A07](../A07-applications-of-the-derivative/).

## Question 3a (official paper)

**Asked:** prove by computing to 4 decimals that P(all 10 dessert) ≈ 0.11 and P(9 of 10 dessert) ≈ 0.27.

**Solution.** Binomial with n = 10, p = 0.8: P(X = 10) = 0.8¹⁰ ≈ 0.1074. P(X = 9) = C(10,9)·0.8⁹·0.2 = 10·0.8⁹·0.2 = 2·0.8⁹ ≈ 0.2684. Both match the given approximations. ∎

**Common mistakes.** P(X = 10) taken as 0.8 (each cook-dessert... the independence multiplies); C(10,9) forgotten (that's where the factor 10 comes from).

**Points:** 5 — binomial parameters, both single probabilities.

**Subdomain:** [A14](../A14-binomial-distribution/).

## Question 3b (official paper)

**Asked:** P(fewer than 9 of the 10 guests order dessert), 2 decimals.

**Solution.** Complement (two terms is within the exam's limit): P(X < 9) = 1 − P(X = 9) − P(X = 10) = 1 − 0.2684 − 0.1074 = 1 − 0.3758 = 0.6242 ≈ 0.62.

**Answer:** ≈ 0.62.

**Common mistakes.** Including X = 9 in "fewer than 9" (it is strictly less); summing many probabilities by hand instead of using the complement.

**Points:** 2 — the complement over exactly two outcomes.

**Subdomain:** [A14](../A14-binomial-distribution/).

## Question 3c (official paper)

**Asked:** the expected dessert cost with 8 pre-made desserts (premade €5 each, made-to-order €9 each), given the three cost outcomes.

**Solution.** With 8 premade: cost is €40 whenever X ≤ 8; €49 when X = 9 (8×5 + 1×9); €58 when X = 10 (8×5 + 2×9). E = 40·P(X ≤ 8) + 49·P(X = 9) + 58·P(X = 10) = 40·0.6242 + 49·0.2684 + 58·0.1074 = 24.968 + 13.153 + 6.228 = 44.35 (all computed from parts a–b with the exact fractions as before).

**Answer:** ≈ €44.35.

**Common mistakes.** Forgetting the sunk premade cost of 8·5 in every branch (it applies even when X < 8); expectation built from the 9-euro rate throughout; rounding the probabilities mid-way.

**Points:** 4 — the three-case expectation with correct probabilities.

**Subdomain:** [A13](../A13-random-variables/).

## Question 3d (official paper)

**Asked:** the probability of exactly one banana dessert left over, given 5 strawberry + 5 banana pre-made and 7 guests choosing randomly.

**Solution.** Exactly one banana among the 3 leftovers ⇔ 4 banana and 3 strawberry among the 7 that were taken. Without replacement: P = C(5,4)·C(5,3)/C(10,7) = 5·10/120 = 50/120 = 5/12 ≈ 0.4167.

**Answer:** 5/12 ≈ 0.4167.

**Common mistakes.** Binomial treatment (this is drawing without replacement!); leftovers mistaken for the drawn set (it is the complement — equivalent count, keep straight which group has 4 banana).

**Points:** 4 — hypergeometric counting with the complement understood.

**Subdomain:** [A12](../A12-probability/).

## Question 4a (official paper)

**Asked:** values of a, b, c and d fitting the paper's water-height graph (form H = a + b·sin(c·(t − d))).

**Solution.** From the figure: maximum 120, minimum 30 → equilibrium a = (120 + 30)/2 = 75, amplitude b = 45. Period 12 (successive maxima — or successive minima — 12 apart), so c = 2π/12 = π/6. The graph rises through equilibrium at t = 0, so d = 0.

**Answer:** a = 75, b = 45, c = π/6, d = 0.

**Common mistakes.** b = 90 (peak-to-peak instead of half of it); c = 2π/(2·12) double-counting half-period; d from the maximum instead of a rising equilibrium crossing.

**Points:** 5 — four parameters with a justification for each.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 4b (official paper)

**Asked:** the first three times after t = 0 with maximal water height, under the given formula H = 100 + 30·sin(½(t − π/3)).

**Solution.** Period: 2π/(½) = 4π. The graph rises through equilibrium at t = π/3 (B > 0), so the first maximum is a quarter period later: π/3 + π = 4π/3. Then period steps: 4π/3 + 4π = 16π/3, then 28π/3.

**Answer:** t = 4π/3, 16π/3 and 28π/3.

**Common mistakes.** The first maximum placed at π/3 + 3π/2 (that one is the minimum); period as 2π instead of 4π; decimalised times breaking the exact form.

**Points:** 4 — period, one exact maximum, two further by period.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 5a (official paper)

**Asked:** the probability that one man's and one woman's total weight exceeded 160 kg in 2000.

**Solution.** Independent totals: mean μ = 82 + 73 = 155 kg; σ = √(8² + 6²) = √100 = 10 kg (variances add — formula sheet). Boundary: 160 = μ + 5 = μ + 0.5σ. The standard normal area between the mean and μ + 0.5σ is 0.191, so the right tail gives P(total > 160) = 0.5 − 0.191 = 0.309.

**Answer:** ≈ 30.9%.

**Common mistakes.** σ computed as 8 + 6 or 4 (variances add, σ's don't); using the 68%-rule only (the boundary here sits at 0.5σ, which the plain 68/95 rules of thumb do not cover — you need the half-sigma area 0.191); reading the alternative pair-boundary (this is not “each above” but the *sum* above 160).

**Points:** 6 — total mean, total σ via the √-rule, the right-side tail area 0.309.

**Subdomain:** [A13](../A13-random-variables/) and [A15](../A15-normal-distribution/).

## Question 5b (official paper)

**Asked:** formulate H₀ and H₁ for “is the 2025 mean weight of 20-year-old men still 82 kg?”

**Solution.** An equality question without direction: two-sided. H₀: μ = 82; H₁: μ ≠ 82.

**Answer:** H₀: μ = 82; H₁: μ ≠ 82.

**Common mistakes.** Left-sided (there is no “higher/lower” clause); a proportion setup (this is a mean).

**Points:** 2 — mean test, two-sided.

**Subdomain:** [A16](../A16-hypothesis-testing/).

## Question 5c (official paper)

**Asked:** the conclusion at α = 0.05 when the 100-man sample averages 83.5 kg.

**Solution.** σ of the mean: 8/√100 = 0.8. Two-sided critical values: 82 ± 1.96·0.8 = 82 ± 1.568, so [80.432, 83.568]. Outcome 83.5 lies inside: do NOT reject H₀ — insufficient reason at the 5% level to believe 2025's mean differs from 82 kg.

**Answer:** H₀ not rejected (83.5 stays inside the acceptance region).

**Common mistakes.** σ = 8 (the mean's σ is 0.8); rejecting because 83.5 > 82 (2σ tails are the criterion, not the sign); calling the conclusion “the mean is 82” (it's “insufficient evidence against it”).

**Points:** 5 — σ of the mean, the critical band, comparison and conclusion.

**Subdomain:** [A16](../A16-hypothesis-testing/) and [A13](../A13-random-variables/).

## Question 6a (official paper)

**Asked:** the number of package users on 1 January 2022, from the exponential growth 3125 → 32768 over 2020–2025.

**Solution.** Growth factor over 5 years: 32768/3125 = 10.48576, and per year g = 10.48576^(1/5) = 1.6 exactly (check: 1.6⁵ = 10.48576 ✓). On 1 Jan 2022 (2 years): 3125·1.6² = 3125·2.56 = 8000.

**Answer:** 8000 users.

**Common mistakes.** Rounding the yearly factor (10.48576^(1/5) = 1.6 exactly — spot it before starting); linear interpolation (which would give the wrong, generous number).

**Points:** 4 — per-year factor, forward evaluation.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 6b (official paper)

**Asked:** year and month when the number of users was 20 000 — algebraically.

**Solution.** With N = 3125·1.6ᵗ: 3125·1.6ᵗ = 20 000 ⇔ 1.6ᵗ = 6.4 ⇔ t = log(6.4)/log(1.6) ≈ 1.8563/0.4700 ≈ 3.95 years after 1 January 2020. About 0.95 of a year ≈ 11.4 months later: December 2023.

**Answer:** December 2023.

**Common mistakes.** Log base flipped; t = 3.45-ish month without converting 0.95 year to months; answering “34th month” without a date line.

**Points:** 4 — the exponential equation, the year+month conversion.

**Subdomain:** [A04](../A04-exponential-growth/) and [A05](../A05-logarithms/).

## Question 6c (official paper)

**Asked:** when the predicted BUTLER user count peaks — algebraically.

**Solution.** N_B = (t + 1)·e^(3.5 − 0.4t). Product+chain rule: N_B′ = e^(3.5−0.4t)·(1 − 0.4(t + 1)) = e^(3.5−0.4t)·(0.6 − 0.4t) = 0 ⇔ t = 0.6/0.4 = 1.5 (exponential factor never 0). Sign: positive before, negative after → maximum at t = 1.5: that is 1 July 2026 (18 months after 1 Jan 2025).

**Answer:** 1 July 2026 (t = 1.5).

**Common mistakes.** The −0.4·(t + 1) term's bracket lost; answering the number of users instead of the *time*; failing to convert t = 1.5 into a calendar date.

**Points:** 5 — derivative, root, calendar conversion.

**Subdomain:** [A06](../A06-differentiation/) and [A07](../A07-applications-of-the-derivative/).

## Question 6d (official paper)

**Asked:** when the predicted JAMES count reaches 20 000 — algebraically. (Note: N_J stands for thousands.)

**Solution.** 5(10 − 9·e^(−0.1t)) = 20 ⇔ 10 − 9e^(−0.1t) = 4 ⇔ 9e^(−0.1t) = 6 ⇔ e^(−0.1t) = 2/3 ⇔ −0.1t = ln(2/3) ⇔ t = ln(3/2)/0.1 ≈ 4.0547 years after 1 January 2025. That's 4 years plus about 0.65 of a month — January 2029 plus about three weeks.

**Answer:** late January 2029 (t ≈ 4.05).

**Common mistakes.** Oversighting the thousands unit (solve N_J = 20, not 20 000!); sign flip of the logarithm (keep t positive); reporting a month without computing how deep into the year t lands (0.05 of a year is only about 3 weeks — late January).

**Points:** 4 — the solved exponential, correct unit and date conversion.

**Subdomain:** [A04](../A04-exponential-growth/) and [A05](../A05-logarithms/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math A folder](../README.md).*
