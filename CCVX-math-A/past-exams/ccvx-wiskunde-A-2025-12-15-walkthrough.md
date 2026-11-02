# Walkthrough — Tentamen Wiskunde A, 15 December 2025 (CCVX sample exam A 22)

- **Official paper:** Tentamen Wiskunde A of 15 December 2025, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde A 22*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2022.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20A%2022%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 6 problems, 81 points; grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = polynomials, roots, sequences ([A01](../A01-numbers-and-algebra/), [A06](../A06-differentiation/), [A08](../A08-sequences/)); O2 = quotient model ([A06](../A06-differentiation/), [A07](../A07-applications-of-the-derivative/)); O3 = normal men and testing ([A15](../A15-normal-distribution/), [A16](../A16-hypothesis-testing/)); O4 = game dice ([A11](../A11-systematic-counting/), [A12](../A12-probability/), [A13](../A13-random-variables/)); O5 = Ferris-wheel sinusoid ([A09](../A09-sine-functions/)); O6 = neighborhood growth, exponential and logistic ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/)).

## Question 1a (official paper)

**Asked:** the algebraic x-coordinates of the points on the exam's cubic graph with a horizontal tangent.

**Solution.** f(x) = (x − 2)(x² + 5x − 35). Expand (or use the product rule): f(x) = x³ + 3x² − 45x + 70, so f′(x) = 3x² + 6x − 45 = 3(x² + 2x − 15) = 3(x + 5)(x − 3) = 0 ⇔ x = −5 or x = 3. (The product-rule route gives the same factored form.)

**Answer:** x = −5 ∨ x = 3.

**Common mistakes.** Sign errors on expanding −35·(x−2) (it contributes −35x + 70 ✓); factoring 3(x + 5)(x − 3) with flipped signs inside; answering with the y-coordinates (both asked is x only).

**Points:** 6 — derivative, factoring, both roots.

**Subdomain:** [A06](../A06-differentiation/).

## Question 1b (official paper)

**Asked:** for which x the slope of the exam's root function at its graph point equals 2 — algebraically.

**Solution.** g(x) = √(12 − 2x²): chain rule gives g′(x) = (−4x)/(2√(12 − 2x²)) = −2x/√(12 − 2x²). Set equal to 2: −2x = 2√(12 − 2x²) ⇔ −x = √(12 − 2x²), which needs x ≤ 0 (a root is never negative). Square: x² = 12 − 2x² ⇔ 3x² = 12 ⇔ x² = 4 ⇔ x = −2 (x = +2 fails the sign condition). Check: g′(−2) = 4/√4 = 2 ✓.

**Answer:** x = −2.

**Common mistakes.** Losing the domain condition and delivering x = ±2; the derivative written as 1/(2√)·(−4x) garbled into −2x·√; forgetting the second derivative of 12 − 2x² is −4x (not −4).

**Points:** 6 — chain derivative, the sign condition, the squaring step with check.

**Subdomain:** [A06](../A06-differentiation/).

## Question 1c (official paper)

**Asked:** the sum of the odd numbers from 101 to 999 inclusive — algebraically.

**Solution.** An arithmetic sequence with first term 101, difference 2 and last term 999. Count: (999 − 101)/2 + 1 = 450 terms. Sum formula (formula sheet): ½ · count · (first + last) = ½·450·(101 + 999) = 225·1100 = 247 500.

**Answer:** 247 500.

**Common mistakes.** Off-by-one on the count (there are 450 odd numbers: 500 odd from 1 to 999 minus 50 from 1 to 99 ✓ check); using the geometric sum formula; forgetting the +1 term in the count.

**Points:** 4 — sequence identification, count, formula application.

**Subdomain:** [A08](../A08-sequences/).

## Question 2a (official paper)

**Asked:** algebraically the maximal number of visitors under the exam's click model V(t) = 1000t/(16t² + 49), using dV/dt.

**Solution.** Quotient rule: V′(t) = (1000(16t² + 49) − 1000t·32t)/(16t² + 49)² = 1000(−16t² + 49)/(16t² + 49)². Numerator zero: 16t² = 49 ⇔ t = 7/4 (the positive root; t ≥ 0). Positive slope before, negative after — a maximum. V(7/4) = 1750/(16·(49/16) + 49) = 1750/98 = 125/7 ≈ 17.857 thousand, i.e. about 17 857 visitors (in the formula's own units: 125/7 (×1000)).

**Answer:** 125/7 (thousand) ≈ 17 857 visitors.

**Common mistakes.** Dropping the −1000t·32t term of the quotient numerator; using t = −7/4; reading V as visitors instead of thousands (mind the unit).

**Points:** 7 — quotient derivative, root, evaluation, nature.

**Subdomain:** [A06](../A06-differentiation/) and [A07](../A07-applications-of-the-derivative/).

## Question 2b (official paper)

**Asked:** algebraically when the campaign stops (visitors sinking under 5000).

**Solution.** V = 5: 1000t/(16t² + 49) = 5 ⇔ 1000t = 80t² + 245 ⇔ 80t² − 1000t + 245 = 0 ⇔ 16t² − 200t + 49 = 0. Quadratic formula: D = 40 000 − 3136 = 36 864 = 192², so t = (200 ± 192)/32, giving t = 0.25 or t = 12.25. From the graph position (downslope after the maximum at t = 1.75), the stop happens at the *later* crossing.

**Answer:** at t = 12.25 days (day 13 of the campaign).

**Common mistakes.** Answering t = 0.25 (that crossing is the rise towards the peak, not the stop moment); arithmetic slips in the quadratic's constant term (245 = 49·5); forgetting that V is in thousands.

**Points:** 6 — clearing the fraction, the quadratic, the correct crossing by context.

**Subdomain:** [A01](../A01-numbers-and-algebra/) and [A03](../A03-power-and-quadratic-relations/).

## Question 3a (official paper)

**Asked:** the percentage of Dutch men with heights between 164 and 199 cm, via the exam's normal-curve figure (strips with their percentages).

**Solution.** Boundaries in z-language: 164 = 184 − 20 = μ − 2σ and 199 = 184 + 15 = μ + 1.5σ. From the figure's strips: left of μ: μ−2σ..μ−1.5σ = 0.044, μ−1.5σ..μ−σ = 0.092, μ−σ..μ−0.5σ = 0.150, μ−0.5σ..μ = 0.191 — together 0.477. Right of μ up to μ+1.5σ: 0.341 + 0.092 = 0.433 (mirror of the two innermost left strips plus the printed 0.092 by symmetry). Total: 0.477 + 0.433 = 0.910 = 91%.

**Answer:** ≈ 91%.

**Common mistakes.** Using only the 68/95 rules (the 1.5σ boundary has no rule-of-thumb value — the figure's strips are the data); computing only one side of μ; strip misassignments.

**Points:** 4 — z-translation of both boundaries, strip addition on both sides.

**Subdomain:** [A15](../A15-normal-distribution/).

## Question 3b (official paper)

**Asked:** for Belgian men (176 cm ± 9), is the percentage between 158 and 190 cm higher or lower than the Dutch 91%? Motivate.

**Solution.** In z-language: 158 = 176 − 18 = μ − 2σ — the same left boundary as the Dutchmen's 164. But 190 = 176 + 14 = μ + (14/9)σ ≈ μ + 1.56σ, slightly *further* right of the mean than the Dutch right boundary μ + 1.5σ. A wider upper reach collects more probability (the distributions have the same shape, just rescaled): so the Belgian region [158, 190] holds slightly *more* than 91%.

**Answer:** higher (boundary at μ + 1.56σ instead of μ + 1.5σ).

**Common mistakes.** Comparing the means or σ's instead of the actual z-positions of 158/190; "more spread → lower percentage" slogans without computing the z-boundaries.

**Points:** 4 — both z-values, the comparison argument.

**Subdomain:** [A15](../A15-normal-distribution/).

## Question 3c (official paper)

**Asked:** formulate H₀ and H₁ for the professor's test "is my students' mean height equal to 184 cm?"

**Solution.** Test of equality against a mean, no direction: two-sided. H₀: μ = 184; H₁: μ ≠ 184.

**Answer:** H₀: μ = 184; H₁: μ ≠ 184.

**Common mistakes.** Reading "gelijk is aan" as either left or right (an equality question is two-sided); testing the proportion.

**Points:** 2 — mean test, two-sided.

**Subdomain:** [A16](../A16-hypothesis-testing/).

## Question 3d (official paper)

**Asked:** the conclusion at α = 0.05 when the 25 students average 180.5 cm.

**Solution.** Test statistic: the sample mean with σ_G = 10/√25 = 2. Two-sided critical values: 184 ± 1.96·2, so g_left = 180.08 and g_right = 187.92. The outcome 180.5 lies inside [180.08, 187.92] (just barely above g_left): do NOT reject H₀. There is insufficient reason at the 5% level to believe these students' mean height differs from 184 cm.

**Answer:** H₀ is not rejected (180.5 stays inside the acceptance region).

**Common mistakes.** Forgetting the √n on σ (the mean's σ is 2, not 10); reading 180.5 < 184 as automatic rejection (above the left critical value, the evidence is insufficient); calling the outcome "proof of 184".

**Points:** 6 — σ of the mean, both critical values, comparison and conclusion.

**Subdomain:** [A16](../A16-hypothesis-testing/) and [A13](../A13-random-variables/).


## Question 4a (official paper)

**Asked:** compute the Yahtzee probability (all five special dice showing one and the same of their three equally likely pictures) to 4 decimals.

**Solution.** Each die shows each picture with probability 1/3, independently. One chosen picture on all five dice: (1/3)⁵ = 1/243; three possible pictures, disjoint: 3·(1/243) = 1/81 ≈ 0.0123. (Equivalently: first die free — the remaining four must match it: (1/3)⁴ = 1/81.)

**Answer:** 1/81 ≈ 0.0123.

**Common mistakes.** (2/6)⁵ for one picture but forgetting the ×3 for the three pictures (the *same* picture can be any of three); computing (1/3)⁵ alone.

**Points:** 3 — the per-picture probability and the disjoint-sum (or first-die-free trick).

**Subdomain:** [A12](../A12-probability/).

## Question 4b (official paper)

**Asked:** show that the probability of the specific outcome three hearts + two clubs equals 10/243.

**Solution.** A fixed throw pattern, e.g. heart-heart-heart-club-club, has probability (1/3)⁵ = 1/243. The three heart-positions among the five dice can be chosen in C(5,3) = 10 ways. Total: 10·(1/243) = 10/243. ∎

**Common mistakes.** Missing the ordering factor C(5,3) = 10 (one named pattern is 1/243, not the whole event); mistaking C(5,3)·C(2,2) for something bigger than 10.

**Points:** 4 — the pattern probability plus the combination count.

**Subdomain:** [A11](../A11-systematic-counting/) and [A12](../A12-probability/).

## Question 4c (official paper)

**Asked:** the total Full House probability (any ordered triple-pair of two distinct pictures) to 4 decimals.

**Solution.** Pick the picture that comes 3 times (3 ways) and the picture that comes twice (2 remaining) : 3·2 = 6 labelled patterns. Each is the part-b computation: 10/243. Total: 6·(10/243) = 60/243 = 20/81 ≈ 0.2469.

**Answer:** 20/81 ≈ 0.2469.

**Common mistakes.** Multiplying by C(3,2) = 3 instead of 3·2 (which picture is the triple — that matters, it is not symmetric!); adding Yahtzees (a distinct event).

**Points:** 3 — the 3×2 pattern count on top of part b.

**Subdomain:** [A11](../A11-systematic-counting/) and [A12](../A12-probability/).

## Question 4d (official paper)

**Asked:** the expected payout per throw, given the paper's prize table.

**Solution.** E = 10·P(Yahtzee) + 2·P(Full House) + 0·P(rest) = 10·(1/81) + 2·(20/81) = 10/81 + 40/81 = 50/81 ≈ €0.62. (With the paper's rounded approximations 0.01 and 0.25 it estimates to 10·0.01 + 2·0.25 = €0.60 — as the official answers also allow.)

**Answer:** 50/81 ≈ €0.62 per throw.

**Common mistakes.** Including the zero-probability term with a nonzero value; expectation computed on payout *plus* stake confusion — here only payouts are asked.

**Points:** 3 — the expectation sum with correct probabilities.

**Subdomain:** [A13](../A13-random-variables/).

## Question 5a (official paper)

**Asked:** the cabin height at t = 0 under the sinusoid model of the form H = a + b·sin(c·t), algebraically.

**Solution.** At t = 0: H = a + b·sin(0) = a. The equilibrium a is mid between the extreme cabin heights (10 low and 60 high): a = (60 + 10)/2 = 35. So H(0) = 35 m.

**Answer:** 35 m.

**Common mistakes.** Answering 10 (boarding at the lowest point is a *story*; the sine starts at the equilibrium); confusing a with the minimum 25? (amplitude is next part).

**Points:** 2 — evaluating at t = 0 with the equilibrium computed.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 5b (official paper)

**Asked:** compute a, b and c in the model, from a low of 10 m, a high of 60 m and two full rounds in 5 minutes.

**Solution.** Equilibrium a = (10 + 60)/2 = 35. Amplitude b = 60 − 35 = 25. Two rounds in 5 minutes → period 2.5 minutes: c = 2π/period = 2π/2.5 = 0.8π ≈ 2.5133.

**Answer:** a = 35, b = 25, c = 0.8π ≈ 2.5133.

**Common mistakes.** Period taken as 5 (that's the two-round total, not one round); b with sign fuss (take b > 0 here; the event of boarding is not modelled in the phase but in the story).

**Points:** 3 — three parameters, each justified.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 5c (official paper)

**Asked:** algebraically the times in the two rounds that the busy-day cabin H = 35 + 25·sin(π·(t − ⅓)) is highest.

**Solution.** Maximum when sin = 1: π·(t − ⅓) = π/2 (+ k·2π) ⇔ t − ⅓ = ½ (+ 2k) ⇔ t = ⅓ + ½ = 5/6 (+ 2k). Period: 2π/π = 2 minutes, and the two rounds span 4 minutes → the maxima lie at t = 5/6 and t = 5/6 + 2 = 17/6 = 2 5/6 minutes.

**Answer:** t = 5/6 min and t = 17/6 min (i.e. 0 min 50 s and 2 min 50 s).

**Common mistakes.** Reading t − ⅓ as t − 3 (the fraction inside the formula); period taken wrongly from a missed π-factor; only one maximum given (two rounds = two maxima).

**Points:** 5 — the π/2 condition, the period, both times within the window.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 6a (official paper)

**Asked:** the inhabitants on 1 January of 2023 and 2024, from the exponential growth 1000 → 10 000 over 2022–2025 — algebraically.

**Solution.** Growth factor over 3 years: 10 000/1000 = 10, so per year g = 10^(1/3). On 1 Jan 2023: 1000·10^(1/3) ≈ 2154. On 1 Jan 2024: 1000·10^(2/3) ≈ 4642.

**Answer:** ≈ 2154 (2023) and ≈ 4642 (2024).

**Common mistakes.** Linear interpolation (it is exponential: factor per year, not amount per year); rounding 10^(1/3) to 3.3 and compounding the error; labelling 2024's value at t = 3 instead of t = 2.

**Points:** 5 — per-year root, both evaluations.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 6b (official paper)

**Asked:** when the logistic model first reaches 60 000 inhabitants — algebraically, year and month.

**Solution.** 250 000/(4 + 21e^(−t)) = 60 000 ⇔ 4 + 21e^(−t) = 250/60 = 25/6 ⇔ 21e^(−t) = 25/6 − 24/6 = 1/6 ⇔ e^(−t) = 1/126 ⇔ t = ln 126 ≈ 4.836 years after 1 January 2025. That is 4 years + 0.836·12 ≈ 10 months later: November 2029 (January 2029 plus about ten months).

**Answer:** November 2029.

**Common mistakes.** Keeping 60 000/250 000 upside-down in the fraction; mixing the denominator subtraction sign (25/6 − 4 = 1/6); reporting just t ≈ 4.8 (the calendar conversion is part of the question).

**Points:** 6 — isolating the exponential, log solving, year+month conversion.

**Subdomain:** [A04](../A04-exponential-growth/) and [A05](../A05-logarithms/).

## Question 6c (official paper)

**Asked:** the long-run maximum number of inhabitants.

**Solution.** As t grows, e^(−t) → 0, so N → 250 000/4 = 62 500 inhabitants (the logistic ceiling).

**Answer:** 62 500.

**Common mistakes.** Answering 250 000 (that is the numerator, not the limit); saying "no maximum" (the denominator falls to 4 and then the model stops growing).

**Points:** 2 — the limit argument.

**Subdomain:** [A04](../A04-exponential-growth/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math A folder](../README.md).*
