# Marking scheme — Mock exam 2, CCVX Mathematics A (practice)

Exam: [mock-exam-2.md](mock-exam-2.md). Total 76 points. Grade = 1 + 9 × (score)/76. Alternative correct methods receive full credit; a computational slip costs the final point of a step unless the slip makes the work essentially simpler.

## Problem 1 — The second-hand car (18 points)

**a. (2 points; matha-mock2-q01)**
- Loss: 1 − 0.82 = 18% per year (1 pt)
- V(2) = 18 000·0.82² = 18 000·0.6724 = €12 103 (1 pt)

**b. (4 points; matha-mock2-q02)**
- Halving: 0.82ᵗ = ½ (1 pt)
- t = ln(½)/ln(0.82) (2 pts)
- ≈ 0.6931/0.19845 ≈ 3.5 years (1 pt)

**c. (4 points; matha-mock2-q03)**
- 18 000·0.82ᵗ = 5000 ⇔ 0.82ᵗ = 5/18 (2 pts)
- t = ln(5/18)/ln(0.82) ≈ 1.2809/0.19845 ≈ 6.5 years (2 pts)

**d. (4 points; matha-mock2-q04)**
- V(3) = 18 000·0.82³ = 18 000·0.551368 = €9 924.62 (2 pts)
- 9 925 < 14 000: the hope fails — by a wide margin (2 pts)

**e. (4 points; matha-mock2-q05)**
- The mistake: 18% per year subtracts from a *changing* base — losses compound, they are not linear (2 pts)
- Correct: factor 0.82⁵ ≈ 0.3707, so 37.1% of the purchase price (2 pts)

## Problem 2 — The day length (18 points)

**a. (2 points; matha-mock2-q06)**
- Equilibrium 12 h, amplitude 4.5 h, period 365 days (1 pt)
- Longest day 16.5 h, shortest 7.5 h (1 pt)

**b. (3 points; matha-mock2-q07)**
- Rising through the equilibrium happens at the starting point t = 80.75 (2 pts)
- That is during day 81 — late March, the (spring) equinox region (1 pt)

**c. (4 points; matha-mock2-q08)**
- Argument: 2π·(263.25 − 80.75)/365 = 2π·182.5/365 = π (2 pts)
- D = 12 + 4.5·sin(π) = 12 h, crossing the mean *downwards* (1 pt)
- Half a year after the spring crossing: the autumn equinox — day and night of equal length (1 pt)

**d. (4 points; matha-mock2-q09)**
- Minimum where sin = −1: (t − 80.75)/365 = 3/4 (2 pts)
- t = 80.75 + 273.75 = 354.5 → day 354.5 (only that one in [0, 365]; next is +365) (2 pts)

**e. (5 points; matha-mock2-q10)**
- Maximum where sin = 1: (t − 80.75)/365 = 1/4 (2 pts)
- t = 80.75 + 91.25 = 172.0 exactly (2 pts)
- Day 172 is 21 June — the model's maximum lies exactly on the real longest day (1 pt)

## Problem 3 — The yoghurt line (18 points)

**a. (3 points; matha-mock2-q11)**
- E(T) = 4·125 = 500 g (1 pt)
- σ(T) = √4·2 = 4 g (2 pts)

**b. (4 points; matha-mock2-q12)**
- b1: P(T < 500) = 50% (symmetry of the approx. normal total) (1 pt)
- b2: 492 = 500 − 2·4 = μ − 2σ(T) (2 pts)
- Lower 2σ tail: ≈ 2.5% (1 pt)

**c. (4 points; matha-mock2-q13)**
- Single cup X: 121 = 125 − 4 = μ − 2σ (2 pts)
- Lower 2σ tail: ≈ 2.5% (2 pts)

**d. (3 points; matha-mock2-q14)**
- Mean per cup X̄ of 4: E(X̄) = 125 g, σ(X̄) = 2/√4 = 1 g (2 pts)
- Means are √n less spread out, so deviations of the fill level are caught more sharply by weighing a batch (1 pt)

**e. (4 points; matha-mock2-q15)**
- Mean test, left-sided: H₀: μ = 125, σ(X̄) = 2/√25 = 0.4 (1 pt)
- Critical value: g = 125 − 2.33·0.4 = 124.07 (2 pts)
- Outcome 124.1 > 124.07: NOT in the rejection region — insufficient reason at 1% to claim underfilling (1 pt)

## Problem 4 — The exit poll (22 points)

**a. (2 points; matha-mock2-q16)**
- Condition: np = 85 ≥ 5 (and n(1−p) = 165 ≥ 5 for the usual textbook condition) (1 pt)
- μ = 85, σ = √(250·0.34·0.66) = √56.1 ≈ 7.49 (1 pt)

**b. (4 points; matha-mock2-q17)**
- At least μ + 2σ ≈ 100: continuity correction Y > 99.5 (1 pt)
- z = (99.5 − 85)/7.49 ≈ 1.94 ≈ 2 (2 pts)
- Upper 2σ tail: ≈ 2.5% (1 pt)

**c. (5 points; matha-mock2-q18)**
- Test set-up: proportion test, left-sided, H₀: p = 0.34, α = 0.05 (1 pt)
- Critical value: g = 85 − 1.645·7.49 ≈ 72.68 (2 pts)
- 71 < 72.68: in the rejection region (1 pt)
- Conclusion: at the 5% level there is sufficient reason to believe the support is below 34% (1 pt)

**d. (4 points; matha-mock2-q19)**
- σ(X̄) = 7.49/250 ≈ 0.02996 ≈ 0.0300 (2 pts)
- For sample size n′: √(0.34·0.66/n′) ≤ 0.015 ⇔ n′ ≥ 0.2244/0.000225 = 997.33, so n′ = 998 (2 pts)

**e. (7 points; matha-mock2-q20)**
- H₀: p = 0.5, two-sided, α = 0.05 (1 pt)
- μ_T = 125 and σ_T = √(250·0.25) ≈ 7.9057 (2 pts)
- Critical values: 125 ± 1.96·7.9057: g_left ≈ 109.5, g_right ≈ 140.5 (2 pts)
- Outcome 138 lies inside [109.5, 140.5]: not rejected (1 pt)
- Sentence: at the 5% significance level there is no sufficient reason to believe the yes-proportion differs from 50% (1 pt)
