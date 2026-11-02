# Mock exam 2 — CCVX Mathematics A (practice)

Original practice exam written for this prep. Nothing is copied from CCVX or CvTE exams.

- Time: 180 minutes. Total: 76 points over 4 problems.
- Grade: 1 + 9 × (points scored)/76, rounded to one decimal.
- Work algebraically. Round only when the question asks for it.
- No graphing calculator; a standard scientific calculator is allowed. The formula sheet is the same as in mock exam 1 (and as in the real exam).
- Marking scheme with points per step: [mock-exam-2-marking-scheme.md](mock-exam-2-marking-scheme.md).

### matha-mock2-q01 | points 2 | outcome a04 | difficulty easy

#### Question

Mr. Smit buys a used car for €18 000. Its value follows V(t) = 18 000·0.82ᵗ (euros, t in years since purchase). Compute the yearly loss in percentage, and the value after 2 years (whole euros).

#### Answer

18% loss per year; V(2) = €12 103.

#### Solution

Loss: 1 − 0.82 = 18% per year. V(2) = 18 000·0.82² = 18 000·0.6724 = €12 103 (whole euros).

### matha-mock2-q02 | points 4 | outcome a04 | difficulty medium

#### Question

(The car's value follows V(t) = 18 000·0.82ᵗ, t in years.) Compute the halving time of the model (1 decimal, in years).

#### Answer

≈ 3.5 years.

#### Solution

Halving: 0.82ᵗ = ½ ⇔ t = ln(½)/ln(0.82) ≈ 0.6931/0.19845 ≈ 3.5 years.

### matha-mock2-q03 | points 4 | outcome a04 | difficulty medium

#### Question

(The car's value follows V(t) = 18 000·0.82ᵗ, t in years.) After how many years is the car worth €5000? (1 decimal)

#### Answer

≈ 6.5 years.

#### Solution

18 000·0.82ᵗ = 5000 ⇔ 0.82ᵗ = 5/18 ⇔ t = ln(5/18)/ln(0.82) ≈ 1.2809/0.19845 ≈ 6.5 years.

### matha-mock2-q04 | points 4 | outcome a04 | difficulty medium

#### Question

(The car's value follows V(t) = 18 000·0.82ᵗ, t in years.) Mr. Smit hopes the value never falls below €14 000 within 3 years. Compute the "3-year value guarantee" V(3) and state whether his hope holds (whole euros).

#### Answer

V(3) ≈ €9 925 — the hope fails by a wide margin.

#### Solution

V(3) = 18 000·0.82³ = 18 000·0.551368 = €9 924.62 ≈ €9 925 < €14 000: the hope fails — far from being above €14 000, the value is under €10 000.

### matha-mock2-q05 | points 4 | outcome a04 | difficulty hard

#### Question

(The car's value follows V(t) = 18 000·0.82ᵗ, t in years.) He sells the car at t = 4. The buyer argues: "The value drops by 18% every year, so after 5 years it is worth 10% of the price." Correct this mistake and compute the value after 5 years as a percentage of the purchase price (1 decimal).

#### Answer

37.1% (not 10%) of the purchase price.

#### Solution

The mistake: 18% per year subtracts from a *changing* base — losses compound, they are not linear (the buyer computes 100% − 5·18% = 10%). Correct: factor 0.82⁵ ≈ 0.3707, so 37.1% of the purchase price.

### matha-mock2-q06 | points 2 | outcome a09 | difficulty easy

#### Question

The day length D (hours) in a Dutch city is modelled by D(t) = 12 + 4.5·sin(2π·(t − 80.75)/365), t in days, t = 0 on 1 January. Give the equilibrium level, amplitude, period and the extreme day lengths.

#### Answer

Equilibrium 12 h, amplitude 4.5 h, period 365 days; longest day 16.5 h, shortest 7.5 h.

#### Solution

Equilibrium level is 12, amplitude 4.5, period 365 days. Max = 12 + 4.5 = 16.5 h, min = 12 − 4.5 = 7.5 h.

### matha-mock2-q07 | points 3 | outcome a09 | difficulty medium

#### Question

(The day length follows D(t) = 12 + 4.5·sin(2π·(t − 80.75)/365).) On which day number t (exact value, then the day) does the day length rise through its mean value?

#### Answer

t = 80.75 — during day 81 (the spring equinox region).

#### Solution

Rising through the equilibrium happens at the starting point of the sine formula: t = 80.75. That is during day 81 — late March, the equinox region.

### matha-mock2-q08 | points 4 | outcome a09 | difficulty medium

#### Question

(The day length follows D(t) = 12 + 4.5·sin(2π·(t − 80.75)/365).) Compute the day length on day t = 263.25 (exact), and describe what that moment is known for in the year.

#### Answer

D = 12 h exactly; the autumn equinox (day and night of equal length).

#### Solution

Argument: 2π·(263.25 − 80.75)/365 = 2π·182.5/365 = π. D = 12 + 4.5·sin(π) = 12 h, crossing the mean *downwards* — half a year after the spring crossing: the autumn equinox.

### matha-mock2-q09 | points 4 | outcome a09 | difficulty medium

#### Question

(The day length follows D(t) = 12 + 4.5·sin(2π·(t − 80.75)/365).) Using symmetry, give the day number(s) t in the year at which the day length sits at its minimum.

#### Answer

t = 354.5 (day 354.5, and only that one in [0, 365]).

#### Solution

Minimum where sin = −1: (t − 80.75)/365 = 3/4 ⇔ t = 80.75 + 273.75 = 354.5. On one period 365 there is exactly one: day 354.5 (the deepest dip, late December).

### matha-mock2-q10 | points 5 | outcome a09 | difficulty hard

#### Question

In reality the longest day is 21 June (day 172). Show that the model's maximum also falls near t = 172, and compute exactly at which t the model's maximum lies.

#### Answer

Maximum at t = 172.0 exactly (i.e. exactly day 172 = 21 June).

#### Solution

Maximum where sin = 1: (t − 80.75)/365 = 1/4 ⇔ t = 80.75 + 91.25 = 172.0 exactly. Day 172 is 21 June — the model's maximum lies exactly on the real longest day.

### matha-mock2-q11 | points 3 | outcome a13 | difficulty easy

#### Question

A yoghurt line fills cups with μ = 125 g and σ = 2 g per cup. A multipack has 4 cups; cup masses are independent; the total mass T of a multipack is what the consumer pays for. Compute E(T) and σ(T).

#### Answer

E(T) = 500 g, σ(T) = 4 g.

#### Solution

E(T) = 4·125 = 500 g. σ(T) = √4·2 = 4 g (variance adds for independent cups).

### matha-mock2-q12 | points 4 | outcome a15 | difficulty medium

#### Question

The label promises "at least 500 g per multipack" — which is E(T) exactly. (b1) Compute P(T < 500 g), then (b2) estimate P(T < 492 g): work out how many σ(T) below the mean this is and use the rules of thumb.

#### Answer

b1: 50%; b2: ≈ 2.5%.

#### Solution

b1: P(T < 500) = 50% (symmetry of the approx. normal total). b2: 492 = 500 − 2·4 = μ − 2σ(T): the lower 2σ tail → ≈ 2.5%.

### matha-mock2-q13 | points 4 | outcome a15 | difficulty easy

#### Question

(Single cups: μ = 125 g, σ = 2 g.) Compute the percentage of single cups below 121 g.

#### Answer

≈ 2.5%.

#### Solution

Single cup X: 121 = 125 − 4 = μ − 2σ: lower 2σ tail → ≈ 2.5%.

### matha-mock2-q14 | points 3 | outcome a13 | difficulty medium

#### Question

Consider the mean mass per cup within a multipack as a random variable: compute its expectation and standard deviation, and explain with the √n-law why quality control uses means of batches instead of single items.

#### Answer

Mean per cup X̄ of 4: E(X̄) = 125 g, σ(X̄) = 1 g; batch means are √4 = 2× less spread out.

#### Solution

√n-law: E(X̄) = 125 g, σ(X̄) = 2/√4 = 1 g. Means are √n less spread out, so deviations of the fill level are caught more sharply by weighing a batch.

### matha-mock2-q15 | points 4 | outcome a16 | difficulty hard

#### Question

An inspector weighs 25 cups: their mean is 124.1 g. Test at α = 0.01 left-sided ("is the line underfilling?"). Compute the critical value and conclude.

#### Answer

Critical value ≈ 124.07; 124.1 > 124.07: H₀ kept.

#### Solution

Mean test, left-sided: H₀: μ = 125, σ(X̄) = 2/√25 = 0.4. Critical value: g = 125 − 2.33·0.4 = 124.07. Outcome 124.1 > 124.07: NOT in the rejection region — insufficient reason at 1% to claim underfilling.

### matha-mock2-q16 | points 2 | outcome a14 | difficulty easy

#### Question

For an election, party X's support is claimed to be p = 0.34 of voters. A pollster interviews n = 250 randomly chosen voters; the number of supporters found is binomially distributed with n = 250, p = 0.34. Confirm with the condition that the normal approximation may be used, and give μ and σ for the count.

#### Answer

np = 85 ≥ 5 ✓ (and n(1−p) = 165 ≥ 5); μ = 85, σ = √56.1 ≈ 7.49.

#### Solution

Condition: np = 85 ≥ 5 ✓ (and n(1−p) = 165 ≥ 5). So the normal approximation applies: μ = 85, σ = √(250·0.34·0.66) = √56.1 ≈ 7.49.

### matha-mock2-q17 | points 4 | outcome a15 | difficulty medium

#### Question

(The count is binomial with n = 250, p = 0.34.) Estimate P(the count is at least μ + 2σ) with the normal approximation and the rules of thumb, using the continuity correction.

#### Answer

≈ 2.5%.

#### Solution

At least μ + 2σ ≈ 100: continuity correction Y > 99.5. z = (99.5 − 85)/7.49 ≈ 1.94 ≈ 2: the upper 2σ tail ≈ 2.5%.

### matha-mock2-q18 | points 5 | outcome a16 | difficulty hard

#### Question

The actual count is 71 supporters. The pollster tests at α = 0.05 left-sided whether the support is *below* 34%. Compute the critical value of the rejection region and conclude.

#### Answer

g ≈ 72.68; 71 < 72.68: reject H₀ — sufficient reason at 5% to believe support is below 34%.

#### Solution

Test set-up: proportion test, left-sided, H₀: p = 0.34, α = 0.05. Critical value: g = 85 − 1.645·7.49 ≈ 72.68. 71 < 72.68: in the rejection region → reject H₀. Conclusion: at the 5% level there is sufficient reason to believe the support is below 34%.

### matha-mock2-q19 | points 4 | outcome a16 | difficulty medium

#### Question

An exit-poll agency wants the standard deviation of a *proportion* X̄ = count/n (for this n = 250 poll) to be at most 0.015. Compute σ(X̄) exactly (p = 0.34). Then compute, using the √n-law, from which sample size n′ the standard deviation would drop below 0.015 — exact computation, and round up.

#### Answer

σ(X̄) = 7.49/250 ≈ 0.02996 ≈ 0.0300; n′ = 998.

#### Solution

σ(X̄) = 7.49/250 ≈ 0.02996 ≈ 0.0300. For sample size n′: √(0.34·0.66/n′) ≤ 0.015 ⇔ n′ ≥ 0.2244/0.000225 = 997.33, so n′ = 998.

### matha-mock2-q20 | points 7 | outcome a16 | difficulty hard

#### Question

The poll also asks a yes/no question on a second topic; of 250 respondents, 138 say yes. Test at α = 0.05, two-sided, whether the yes-proportion differs from 50% (H₀: p = 0.5): compute μ, σ, the two critical values, and conclude. State the conclusion in a full sentence.

#### Answer

Region [109.5, 140.5]; 138 lies inside: not rejected. At the 5% significance level there is no sufficient reason to believe the yes-proportion differs from 50%.

#### Solution

H₀: p = 0.5, two-sided, α = 0.05. μ_T = 125 and σ_T = √(250·0.25) ≈ 7.9057. Critical values: 125 ± 1.96·7.9057: g_left ≈ 109.5, g_right ≈ 140.5. Outcome 138 lies inside [109.5, 140.5]: not rejected. At the 5% significance level there is no sufficient reason to believe the yes-proportion differs from 50%.
