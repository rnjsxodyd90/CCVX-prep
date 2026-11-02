# Walkthrough — Tentamen Wiskunde A, 21 July 2025 (CCVX sample exam A 21)

- **Official paper:** Tentamen Wiskunde A of 21 July 2025, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde A 21*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2021.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2021%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, figures or data — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 6 problems, 81 points (19 + 14 + 15 + 13 + 11 + 9); grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = quartic, root-slope, exact powers ([A01](../A01-numbers-and-algebra/), [A06](../A06-differentiation/)); O2 = new-product sales model ([A06](../A06-differentiation/), [A07](../A07-applications-of-the-derivative/)); O3 = cigars and testing ([A13](../A13-random-variables/), [A15](../A15-normal-distribution/), [A16](../A16-hypothesis-testing/)); O4 = liquorice coins ([A12](../A12-probability/), [A14](../A14-binomial-distribution/)); O5 = beetle models ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/)); O6 = temperature sinusoid ([A09](../A09-sine-functions/)).

## Question 1a (official paper)

**Asked:** the algebraic minimum of the exam's fourth-degree polynomial.

**Solution.** f(x) = 3x⁴ − 20x³ + 36x² + 3. f′(x) = 12x³ − 60x² + 72x = 12x(x² − 5x + 6) = 12x(x − 2)(x − 3) = 0 ⇔ x = 0, 2 or 3. Values: f(0) = 3; f(2) = 48 − 160 + 144 + 3 = 35; f(3) = 243 − 540 + 324 + 3 = 30. Shape check: with a positive leading term, f goes to ∞ at both tails, so the local max is at x = 2 (35) and the two minima at x = 0 (3) and x = 3 (30). The smallest is the global minimum.

**Answer:** minimum value 3 (at x = 0).

**Common mistakes.** Only checking the middle critical point; assuming the largest x gives the minimum (no — compare all three); a calculation slip in f(2) or f(3) (recompute with care: 3·16 = 48, 20·8 = 160, 36·4 = 144).

**Points:** 7 — factored derivative, three evaluations, comparison.

**Subdomain:** [A07](../A07-applications-of-the-derivative/).

## Question 1b (official paper)

**Asked:** for which x the graph of g(x) = −x + √(3x² − 2) has slope 2 at its point — algebraically.

**Solution.** Chain rule on the root: g′(x) = −1 + (6x)/(2√(3x² − 2)) = −1 + 3x/√(3x² − 2). Set equal to 2: 3x/√(3x² − 2) = 3 ⇔ x = √(3x² − 2). A root is ≥ 0, so require x ≥ 0. Square: x² = 3x² − 2 ⇔ 2x² = 2 ⇔ x = 1 (x = −1 rejected). Check: g′(1) = −1 + 3/1 = 2 ✓.

**Answer:** x = 1.

**Common mistakes.** Forgetting the −1 from the linear term; accepting x = −1 (the root side is non-negative, so x must be ≥ 0); squaring without checking back in the equation.

**Points:** 7 — chain derivative, sign condition, quadratic finish.

**Subdomain:** [A06](../A06-differentiation/).

## Question 1c (official paper)

**Asked:** solve algebraically: 27ˣ = 9^(x−1).

**Solution.** Same base: 27ˣ = 3^(3x) and 9^(x−1) = 3^(2x−2), so 3x = 2x − 2 ⇔ x = −2.

**Answer:** x = −2.

**Common mistakes.** Treating 27ˣ/9^(x−1) as (27/9)ˣ·9 (wrong distribution of the exponent); log-taking of each side with arithmetic slips when the clean route is one base.

**Points:** 5 — rewriting both sides to base 3 and comparing exponents.

**Subdomain:** [A04](../A04-exponential-growth/) and [A05](../A05-logarithms/).

## Question 2a (official paper)

**Asked:** how many items are sold on the first sales day.

**Solution.** t = 0: V(0) = 700·(0 + 2)/(0 + 320) = 1400/320 = 4.375 thousand = 4375 pieces.

**Answer:** 4375 pieces.

**Common mistakes.** Reading the answer in thousands (the formula is in thousands); claiming 0 (the formula does not start at zero).

**Points:** 2 — correct evaluation and unit conversion.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 2b (official paper)

**Asked:** algebraically the number of days with at least 20 000 items sold.

**Solution.** V = 20: 700(t + 2)/(t² + 320) = 20 ⇔ 700t + 1400 = 20t² + 6400 ⇔ 20t² − 700t + 5000 = 0 ⇔ t² − 35t + 250 = 0 ⇔ (t − 10)(t − 25) = 0 ⇔ t = 10 or t = 25. The graph is above 20 between the crossings: V ≥ 20 for 10 ≤ t ≤ 25. Counting calendar days: from day 11 (t = 10) through day 26 (t = 25): 16 days.

**Answer:** 16 days.

**Common mistakes.** Saying 15 days (that is the span 25 − 10; the *inclusive count* of calendar days is 16); picking t < 10 or t > 25 (the graph peaks in between: the bergparabool test confirms the middle range).

**Points:** 5 — cleared equation, both roots, the day count with the calendar.

**Subdomain:** [A01](../A01-numbers-and-algebra/) and [A03](../A03-power-and-quadratic-relations/).

## Question 2c (official paper)

**Asked:** the maximal daily number of sold items, via dV/dt — algebraically.

**Solution.** Quotient rule: V′(t) = (700(t² + 320) − 700(t + 2)·2t)/(t² + 320)² = 700(t² + 320 − 2t² − 4t)/(t² + 320)² = 700(−t² − 4t + 320)/(t² + 320)². Zero: t² + 4t − 320 = 0 ⇔ t = (−4 + √(16 + 1280))/2 = (−4 + 36)/2 = 16 (positive root). Slope positive before, negative after → maximum: V(16) = 700·18/(256 + 320) = 12600/576 = 21.875 thousand = 21 875 pieces.

**Answer:** 21 875 pieces per day.

**Common mistakes.** Quotient numerator order flipped (start with f′·g); not computing V at the critical point; taking t = −20 as a second answer (negative time).

**Points:** 7 — quotient derivative, root, evaluation, maximum argument.

**Subdomain:** [A06](../A06-differentiation/) and [A07](../A07-applications-of-the-derivative/).

## Question 3a (official paper)

**Asked:** show by an algebraic computation that the standard deviation of a full box (100 cigars + box) is 2.5 g.

**Solution.** Cigars and box are independent, so variances add (formula sheet): σ²(total) = 100·σ²(cigar) + σ²(box) = 100·(0.2)² + 1.5² = 4 + 2.25 = 6.25, hence σ(total) = √6.25 = 2.5 g. ∎ (Note: the 100 *individual* cigars contribute 100× variance — this is the √n-law in action.)

**Common mistakes.** Adding standard deviations (0.2·100 + 1.5 — variances add, σ's do not); forgetting the box's own 1.5; the √n factor written as ×100 instead of √(100).

**Points:** 3 — the variance addition statement and the computation.

**Subdomain:** [A13](../A13-random-variables/).

## Question 3b (official paper)

**Asked:** with the rules of thumb, the probability that a full box weighs between 677.5 g and 685.0 g.

**Solution.** Mean: 100·4.8 + 200 = 680 g; σ = 2.5 g. Boundaries: 677.5 = μ − σ and 685 = μ + 2σ. Between them: 34% + 47.5% = 81.5%.

**Answer:** ≈ 81.5%.

**Common mistakes.** Computing E wrong (200 + 4.8, forgetting ×100); mixing the boundary z's (the band is asymmetric: −σ and +2σ — no single rule covers it; split at μ).

**Points:** 5 — mean of the total, both z-boundaries, rules of thumb.

**Subdomain:** [A15](../A15-normal-distribution/).

## Question 3c (official paper)

**Asked:** formulate H₀ and H₁ for Bert's suspicion that the new, cheaper cigars are *lighter* than 4.8 g.

**Solution.** Claim as equality: H₀: μ = 4.8. Suspicion has direction — lighter: left-sided: H₁: μ < 4.8.

**Answer:** H₀: μ = 4.8; H₁: μ < 4.8.

**Common mistakes.** Right- or two-sided (the suspicion's direction is downward); a proportion test setup (these are weights — a mean test).

**Points:** 2 — correct test type and direction.

**Subdomain:** [A16](../A16-hypothesis-testing/).

## Question 3d (official paper)

**Asked:** the conclusion at α = 0.05 when the sample mean of 10 new cigars is 4.6 g.

**Solution.** σ of the mean: 0.2/√10 ≈ 0.0632. Left-sided critical value: g = 4.8 − 1.645·0.0632 ≈ 4.69... compute: 1.645·0.063246 = 0.10404, so g ≈ 4.696 g. Outcome 4.6 < 4.696: in the rejection region → reject H₀. At the 5% level there is sufficient reason to believe the new cigars are lighter than 4.8 g.

**Answer:** reject H₀ — sufficient evidence for "lighter" at 5%.

**Common mistakes.** Using 0.2 instead of 0.2/√10; comparing 4.6 to 4.8 − 1.645·0.2 (wrong scale); skipping the context-bound conclusion sentence.

**Points:** 5 — √n-law, critical value, comparison, conclusion.

**Subdomain:** [A16](../A16-hypothesis-testing/) and [A13](../A13-random-variables/).

## Question 4a (official paper)

**Asked:** σ(X) of the gold-count in 7 bags with a 10% gold-per-bag rate.

**Solution.** Binomial with n = 7, p = 0.1 (independent bags, constant probability, two outcomes): σ(X) = √(7·0.1·0.9) = √0.63 ≈ 0.7937.

**Answer:** σ(X) = √0.63 ≈ 0.7937.

**Common mistakes.** E(X) computed instead of σ (E = 0.7 — different question); the formula without the (1 − p) factor.

**Points:** 3 — binomial parameters and the σ formula.

**Subdomain:** [A14](../A14-binomial-distribution/).

## Question 4b (official paper)

**Asked:** the probability Rob can trade for a free bag (needs 1 gold AND 5 silver among his 7 bags).

**Solution.** With X = number of golds: he needs X ≥ 1 (gold) AND 7 − X ≥ 5 (silvers) ⇔ 1 ≤ X ≤ 2. P(X = 1) = C(7,1)·0.1·0.9⁶ = 0.7·0.531441 ≈ 0.372009; P(X = 2) = C(7,2)·0.01·0.9⁵ = 21·0.01·0.59049 ≈ 0.124003. Sum ≈ 0.4960 (two terms — within the exam's cumulative limit).

**Answer:** ≈ 0.4960.

**Common mistakes.** Only counting P(X = 1) (forgetting X = 2 also qualifies); NOT noticing the silver condition (X ≤ 2 required!); rounding inside the powers.

**Points:** 5 — translating the trade condition into 1 ≤ X ≤ 2, both probabilities.

**Subdomain:** [A14](../A14-binomial-distribution/).

## Question 4c (official paper)

**Asked:** the probability Lianne draws at least one gold coin when she blindly picks 5 of her 10 known coins (2 gold, 8 silver).

**Solution.** Without replacement from a finite set — hypergeometric counting, via the complement: P(no gold) = C(8,5)/C(10,5) = 56/252 = 2/9. So P(at least one gold) = 1 − 2/9 = 7/9 ≈ 0.7778.

**Answer:** 7/9 ≈ 0.7778.

**Common mistakes.** Treating it as binomial with replacement (this is **without** replacement — the binomial independence is absent here); computing C(10,5) drawings but subtracting wrong in the complement.

**Points:** 5 — no-replacement counting, complement route.

**Subdomain:** [A12](../A12-probability/) and [A14](../A14-binomial-distribution/) (boundary: this one is NOT binomial — worth stating).

## Question 5a (official paper)

**Asked:** the predicted number of beetles on 1 July 2027 under the exponential model — algebraically.

**Solution.** Growth: 50 → 450 in 2 years gives g² = 9, so g = 3 per year. From 1 Jan 2021 to 1 Jul 2027 is 6.5 years: N = 50·3^6.5 = 50·3⁶·√3 = 36 450√3 ≈ 63 133 beetles.

**Answer:** ≈ 63 133 beetles (exact: 36 450√3).

**Common mistakes.** Using g = 9 (that is the 2-year factor); 6.5 as exponent without √3 handling; timeline slip (6.5 years, not 6).

**Points:** 5 — per-year factor, fractional exponent, sensible whole-beetle numbers.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 5b (official paper)

**Asked:** at which date the logistic model reaches 60 000 beetles — algebraically, year and month.

**Solution.** 150 000/(1 + 3000e^(−1.1t)) = 60 000 ⇔ 1 + 3000e^(−1.1t) = 2.5 ⇔ 3000e^(−1.1t) = 1.5 ⇔ e^(−1.1t) = 0.0005 ⇔ −1.1t = ln(0.0005) ⇔ t = ln(2000)/1.1 ≈ 6.91 years after 1 January 2021. That's 6 years plus 0.91·12 ≈ 10.9 months → November 2027.

**Answer:** November 2027.

**Common mistakes.** The reciprocal flipped when cross-multiplying (150 000/60 000 = 2.5 ✓ keeps it clean); t = −ln(0.0005)/1.1 written with a sign error; no calendar conversion.

**Points:** 6 — isolating the exponential, the log step, year+month answer.

**Subdomain:** [A04](../A04-exponential-growth/) and [A05](../A05-logarithms/).

## Question 6a (official paper)

**Asked:** the values of a and b in the body-temperature sinusoid.

**Solution.** a = (36.6 + 37.2)/2 = 36.9 °C; amplitude b = 37.2 − 36.9 = 0.3 °C.

**Answer:** a = 36.9, b = 0.3.

**Common mistakes.** a read as the minimum; b = 0.6 (that's the peak-to-peak 2b!).

**Points:** 2 — equilibrium and amplitude from the two extremes.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 6b (official paper)

**Asked:** c, computed algebraically.

**Solution.** Body temperature follows a daily rhythm: period = 24 hours, so c = 2π/24 = π/12.

**Answer:** c = π/12.

**Common mistakes.** c = 24 or 12 (the C factor works as 2π/period, not the period itself).

**Points:** 2 — the one-line computation with the daily period.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 6c (official paper)

**Asked:** the times of the minimum and maximum body temperature, in hours and minutes.

**Solution.** The model rises through equilibrium at t = 8.9 (the b > 0 starting point). Maximum a quarter period later: t = 8.9 + 24/4 = 14.9 h → 14:54. Minimum three quarters (or minus one quarter) from the start: t = 8.9 − 6 = 2.9 h → 02:54. (Equivalently, sin = 1 at (π/12)(t − 8.9) = π/2 and sin = −1 at = −π/2.)

**Answer:** minimum at 02:54 (t ≈ 2.9), maximum at 14:54 (t ≈ 14.9).

**Common mistakes.** Answering in decimal hours without the minute conversion (0.9 h = 54 min); the maximum at t = 8.9 (that's the equilibrium crossing, not the max); min/max swapped (b > 0: after the start comes the maximum).

**Points:** 5 — quarter-period logic, both times, hh:mm conversion.

**Subdomain:** [A09](../A09-sine-functions/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math A folder](../README.md).*
