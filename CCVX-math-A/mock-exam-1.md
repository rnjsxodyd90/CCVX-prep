# Mock exam 1 — CCVX Mathematics A (practice)

Original practice exam written for this prep. Nothing is copied from CCVX or CvTE exams.

- Time: 180 minutes. Total: 76 points over 4 problems.
- Grade: 1 + 9 × (points scored)/76, rounded to one decimal.
- Work algebraically. Round only when the question asks for it.
- No graphing calculator; a standard scientific calculator is allowed. The formula sheet printed below is the one of the real CCVX wiskunde A exam.
- Marking scheme with points per step: [mock-exam-1-marking-scheme.md](mock-exam-1-marking-scheme.md).

## Formula sheet (abbreviated print of the exam's formula list)

Quadratic formula: ax² + bx + c = 0 → x = (−b ± √(b² − 4ac))/(2a).

Differentiation: sum rule (f + g)′ = f′ + g′; product rule (f·g)′ = f′g + fg′; quotient rule (f/g)′ = (f′g − fg′)/g²; chain rule: k(x) = f(g(x)) → k′(x) = f′(g(x))·g′(x).

Logarithms: ᵍlog a + ᵍlog b = ᵍlog(ab); ᵍlog a − ᵍlog b = ᵍlog(a/b); ᵍlog(aᵖ) = p·ᵍlog a; ᵍlog a = ᵖlog(a)/ᵖlog(g).

Sequences: arithmetic: Sum = ½·(number of terms)·(first + last); geometric: Sum = (u_{l+1} − u_e)/(r − 1), r ≠ 1.

Probability: E(X + Y) = E(X) + E(Y); for independent X, Y: σ(X + Y) = √(σ²(X) + σ²(Y)); √n-law: E(S) = n·E(X), σ(S) = √n·σ(X); E(X̄) = E(X), σ(X̄) = σ(X)/√n. Binomial: P(X = k) = C(n,k)·pᵏ(1−p)ⁿ⁻ᵏ, E(X) = np, σ(X) = √(np(1−p)). Normal: Z = (X − μ)/σ. Critical values: α = 0.05: 1.645 (one-sided), 1.96 (two-sided); α = 0.01: 2.33 / 2.58.

### matha-mock1-q01 | points 3 | outcome a02 | difficulty easy

#### Question

A chocolate factory has weekly demand q = 120 − 3p (q in thousands of bars, p in euros per bar), for 0 < p < 40. Weekly costs are K(q) = 10q + 600 (thousands of euros). Show that the weekly revenue satisfies R(p) = −3p² + 120p (thousands of euros).

#### Answer

R(p) = −3p² + 120p, as required.

#### Solution

Revenue = price × quantity: R = p·q. Substitute q = 120 − 3p with brackets: R = p(120 − 3p) = 120p − 3p² = −3p² + 120p. ∎

### matha-mock1-q02 | points 4 | outcome a01 | difficulty easy

#### Question

(Weekly demand q = 120 − 3p; weekly costs K(q) = 10q + 600, thousands of euros.) Express the weekly profit W(p) in terms of p (thousands of euros).

#### Answer

W(p) = −3p² + 150p − 1800.

#### Solution

Profit W = R − K. Substitute K(q) = 10q + 600 with q = 120 − 3p: K = 10(120 − 3p) + 600 = 1800 − 30p. So W = (120p − 3p²) − (1800 − 30p) = −3p² + 150p − 1800.

### matha-mock1-q03 | points 5 | outcome a07 | difficulty medium

#### Question

(Weekly profit model is W(p) = −3p² + 150p − 1800 in thousands of euros.) Compute algebraically the price with maximal profit, and that maximal profit.

#### Answer

p = 25 with maximal profit 75 thousand euros.

#### Solution

W′(p) = −6p + 150 = 0 ⇔ p = 25. Nature: bergparabool (a = −3 < 0), so a maximum: W(25) = −3·625 + 3750 − 1800 = 75 thousand euros.

### matha-mock1-q04 | points 4 | outcome a03 | difficulty medium

#### Question

(Weekly profit model is W(p) = −3p² + 150p − 1800 in thousands of euros.) For which prices does the factory avoid losses (W(p) ≥ 0)? Solve algebraically.

#### Answer

20 ≤ p ≤ 30.

#### Solution

W ≥ 0 ⇔ −3p² + 150p − 1800 ≥ 0 ⇔ p² − 50p + 600 ≤ 0. Zeros: (p − 20)(p − 30) = 0 ⇔ p = 20, p = 30 (or quadratic formula). Bergparabool downward ⇒ answer 20 ≤ p ≤ 30.

### matha-mock1-q05 | points 4 | outcome a07 | difficulty hard

#### Question

(The factory's weekly cost is K(q) = 10q + 600, and its revenue is R(p) = −3p² + 120p, both in thousands of euros.) The marginal cost is constant in this model. Give it (in euros per bar) and compute the price at which the *revenue* — not the profit — is maximal. Explain the difference between the two prices in one sentence.

#### Answer

Marginal cost €10 per bar; revenue-maximal price p = 20.

#### Solution

Marginal cost = K′(q) = 10 thousand euros per thousand bars = €10 per bar. Revenue: R′(p) = −6p + 120 = 0 ⇔ p = 20 (R(20) = 1200). Explanation: costs fall as the price rises (fewer bars are made), so the profit optimum sits above the revenue optimum.

### matha-mock1-q06 | points 2 | outcome a04 | difficulty easy

#### Question

A sports club's membership follows the model L(t) = 700·1.05ᵗ (members, t in years since the start, t ≥ 0). Compute L(0) and L(6) (whole members).

#### Answer

L(0) = 700; L(6) ≈ 938.

#### Solution

L(0) = 700. L(6) = 700·1.05⁶ ≈ 700 × 1.3401 ≈ 938.

### matha-mock1-q07 | points 3 | outcome a04 | difficulty easy

#### Question

(Membership: L(t) = 700·1.05ᵗ.) Compute the doubling time of the model (1 decimal).

#### Answer

≈ 14.2 years.

#### Solution

Doubling: 1.05ᵗ = 2 ⇔ t = ln 2/ln 1.05 ≈ 0.6931/0.04879 ≈ 14.2 years.

### matha-mock1-q08 | points 4 | outcome a04 | difficulty medium

#### Question

(Membership: L(t) = 700·1.05ᵗ.) The club hall fits 1300 members. Compute after how many years the model first exceeds that number (1 decimal).

#### Answer

After 12.7 years — during year 13.

#### Solution

700·1.05ᵗ = 1300 ⇔ 1.05ᵗ = 13/7 ⇔ t = ln(13/7)/ln(1.05) ≈ 0.61876/0.04879 ≈ 12.7 years: the model exceeds 1300 after 12.7 years — during year 13.

### matha-mock1-q09 | points 4 | outcome a04 | difficulty medium

#### Question

Instead, the board assumes the hall binds growth and switches to the model M(t) = 1500/(1 + 1.5·(0.85)ᵗ). Compute M(0) and the saturation level, and compute after how many years the model passes 1200 members (1 decimal).

#### Answer

M(0) = 600; saturation 1500; ≈ 11.0 years.

#### Solution

M(0) = 1500/(1 + 1.5) = 600. As t → ∞, 0.85ᵗ → 0, so the saturation level is 1500 members. 1500/(1 + 1.5·0.85ᵗ) = 1200 ⇔ 1 + 1.5·0.85ᵗ = 1.25 ⇔ 0.85ᵗ = 1/6 ⇔ t = ln(1/6)/ln(0.85) ≈ 11.0 years.

### matha-mock1-q10 | points 5 | outcome a06 | difficulty hard

#### Question

(The alternative model is M(t) = 1500/(1 + 1.5·(0.85)ᵗ).) Explain without computing M′ in full that M is increasing (use that the denominator stays positive and falls). Then compute M′(0) (2 decimals).

#### Answer

M increases (denominator positive and falling); M′(0) ≈ 58.51 members/year.

#### Solution

The denominator 1 + 1.5·(0.85)ᵗ stays positive and decreases; a constant numerator over a falling positive denominator rises: M increases, so M′(t) > 0. Chain rule: M′(t) = −1500·(1 + 1.5·0.85ᵗ)⁻²·1.5·0.85ᵗ·ln(0.85); M′(0) = −1500·(1/6.25)·1.5·(−0.16251893) ≈ 58.51 members per year.

### matha-mock1-q11 | points 2 | outcome a14 | difficulty easy

#### Question

A seed packet states "at least 85% of the seeds germinate". A test gardener plants 100 seeds from one packet; X = the number that germinate. Explain why X is binomially distributed, and give the parameters under the packet's claim.

#### Answer

Binomial with n = 100, p = 0.85.

#### Solution

Fixed n = 100, two outcomes (germinate/not), constant probability p, independent seeds: binomial. Parameters under the claim: n = 100, p = 0.85.

### matha-mock1-q12 | points 3 | outcome a14 | difficulty easy

#### Question

(X = the number of germinated seeds in the stated binomial experiment.) Compute E(X) and σ(X) under the claim.

#### Answer

E(X) = 85; σ(X) = √12.75 ≈ 3.57.

#### Solution

E(X) = np = 85. σ(X) = √(100·0.85·0.15) = √12.75 ≈ 3.5707.

### matha-mock1-q13 | points 4 | outcome a14 | difficulty medium

#### Question

Computing P(X = 85) for n = 100 is laborious. Instead compute the parallel smaller case: for n = 4, p = 0.85, compute P(X = 3) (4 decimals). Show the full formula.

#### Answer

0.3685.

#### Solution

P(X = 3) = C(4,3)·0.85³·0.15¹. Since C(4,3) = 4 and 0.85³ = 0.614125: P = 4·0.614125·0.15 = 0.36848 ≈ 0.3685.

### matha-mock1-q14 | points 4 | outcome a16 | difficulty hard

#### Question

The gardener actually counts 79 germinated seeds. He tests at α = 0.05, left-sided ("is the germination rate below the claim?"), using the normal approximation of the binomial test. Justify the approximation, compute the critical value of the rejection region, and give the conclusion for the outcome 79.

#### Answer

Critical value ≈ 79.13; 79 < 79.13: reject H₀ — sufficient reason at 5% that the rate is below 85%.

#### Solution

Approximation allowed: np₀ = 85 ≥ 5 (and n(1−p₀) = 15 ≥ 5 for the usual textbook condition). μ_T = 85, σ_T = √12.75 ≈ 3.5707. Critical value: g = 85 − 1.645·3.5707 ≈ 79.13 (no continuity correction needed). Outcome 79 < 79.13: in the rejection region → reject H₀; at the 5% level there is sufficient reason to believe the germination rate is below 85%.

### matha-mock1-q15 | points 5 | outcome a16 | difficulty medium

#### Question

The exceedance probability of the outcome "79 or fewer germinated seeds" is given as 0.0036. State in one precise sentence what this number means, and draw the conclusion of the test from it.

#### Answer

Meaning: if the packet's claim were true (p = 0.85), the probability of counting 79 or fewer germinated seeds out of 100 would be 0.0036 (0.36%). Conclusion: reject H₀ — sufficient reason at the 5% level to doubt the packet's claim.

#### Solution

The exceedance probability (p-value) is, under H₀, P(X ≤ 79). 0.0036 < 0.05, so the outcome is in the rejection region: reject H₀. At the 5% significance level there is sufficient reason to believe the germination rate is below the packet's claim. (Same conclusion as the critical-value route of the previous part.)

### matha-mock1-q16 | points 4 | outcome a15 | difficulty medium

#### Question

In a screening program, blood values of healthy people are normally distributed with μ_H = 110 (mg/dL) and σ_H = 20; values of carriers of the condition are normally distributed with μ_C = 150 and σ_C = 20. A person is *flagged* when their measured value exceeds the threshold g. The program first sets g = 130. Estimate with the rules of thumb: the percentage of healthy people who are flagged, and the percentage of carriers who are NOT flagged.

#### Answer

16% of healthy people flagged; 16% of carriers not flagged.

#### Solution

Healthy: g = 130 = 110 + 20 = μ_H + σ_H: upper σ-tail → 16% flagged. Carriers: not flagged means X_C < 130 = μ_C − σ_C: lower σ-tail → 16% not flagged.

### matha-mock1-q17 | points 5 | outcome a15 | difficulty medium

#### Question

(Blood values of healthy people are normally distributed with μ_H = 110 and σ_H = 20.) Instead, the threshold is chosen so that exactly 2.5% of healthy people are flagged. Compute g.

#### Answer

g = 150 mg/dL.

#### Solution

2.5% flagged = upper 2σ tail: g = μ_H + 2σ_H = 110 + 40 = 150 mg/dL.

### matha-mock1-q18 | points 5 | outcome a15 | difficulty hard

#### Question

A random person from the population is tested with g = 150; 4% of the population carries the condition. Fill in the 2 × 2 table with whole counts per 10 000 people (flagged vs not flagged), and compute P(carrier given flagged) (1 decimal %).

#### Answer

Flagged: 200 carriers + 240 healthy = 440; not flagged: 200 carriers + 9360 healthy; P(carrier given flagged) ≈ 45.5%.

#### Solution

Per 10 000: 400 carriers (4%) and 9600 healthy. With g = 150: carriers flagged 50% (g = μ_C exactly) → 200; healthy flagged 2.5% → 240. Table totals: flagged 440; not flagged: carriers 200, healthy 9360. P(carrier given flagged) = 200/440 ≈ 45.5%.

### matha-mock1-q19 | points 6 | outcome a16 | difficulty medium

#### Question

Groups of 9 healthy employees are screened via their group mean; its standard deviation is σ(X̄) = 20/√9 ≈ 6.67. Test at α = 0.05 right-sided against "the group's mean level is elevated": H₀: μ = 110. Compute the critical value and draw the conclusion for a group mean of 118.4.

#### Answer

Critical value ≈ 120.97; 118.4 < 120.97: H₀ not rejected.

#### Solution

Mean test, right-sided: H₀: μ = 110, H₁: μ > 110, α = 0.05. σ(X̄) = 20/√9 ≈ 6.67. Critical value: g = 110 + 1.645·6.67 ≈ 120.97. Group mean 118.4 < 120.97: not in the rejection region — no sufficient reason at 5% to call the group's mean level elevated.
