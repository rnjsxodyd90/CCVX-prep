# Marking scheme — Mock exam 1, CCVX Mathematics A (practice)

Exam: [mock-exam-1.md](mock-exam-1.md). Total 76 points. Grade = 1 + 9 × (score)/76. Alternative correct methods receive full credit; a computational slip costs the final point of a step unless the slip makes the work essentially simpler.

## Problem 1 — The chocolate bar factory (20 points)

**a. (3 points; matha-mock1-q01)**
- Revenue = price × quantity: R = p·q (1 pt)
- Substitute q = 120 − 3p with brackets: R = p(120 − 3p) (1 pt)
- Expand: R = 120p − 3p² = −3p² + 120p ✓ (1 pt)

**b. (4 points; matha-mock1-q02)**
- Profit W = R − K (1 pt)
- Substitute K(q) = 10q + 600 with q = 120 − 3p: K = 10(120 − 3p) + 600 = 1800 − 30p (2 pts)
- W = (120p − 3p²) − (1800 − 30p) = −3p² + 150p − 1800 (1 pt)

**c. (5 points; matha-mock1-q03)**
- W′(p) = −6p + 150 (1 pt)
- W′ = 0 ⇔ p = 25 (2 pts)
- Nature: bergparabool (a = −3 < 0), so a maximum (1 pt)
- W(25) = −3·625 + 3750 − 1800 = 75 thousand euros (1 pt)

**d. (4 points; matha-mock1-q04)**
- W ≥ 0 ⇔ −3p² + 150p − 1800 ≥ 0 ⇔ p² − 50p + 600 ≤ 0 (1 pt)
- Zeros: (p − 20)(p − 30) = 0 ⇔ p = 20, p = 30 (2 pts, factoring or quadratic formula)
- Bergparabool of W (or dalparabool of the inequality) ⇒ answer 20 ≤ p ≤ 30 (1 pt)

**e. (4 points; matha-mock1-q05)**
- Marginal cost = K′(q) = 10 thousand euros per thousand bars = €10 per bar (1 pt)
- Revenue: R′(p) = −6p + 120 = 0 ⇔ p = 20 (R(20) = 1200) (2 pts)
- Explanation: costs fall as the price rises (fewer bars are made), so the profit optimum sits above the revenue optimum (1 pt)

## Problem 2 — The membership card (18 points)

**a. (2 points; matha-mock1-q06)**
- L(0) = 700 (1 pt)
- L(6) = 700·1.05⁶ ≈ 700 × 1.3401 ≈ 938 (1 pt)

**b. (3 points; matha-mock1-q07)**
- Doubling: 1.05ᵗ = 2 (1 pt)
- t = ln 2/ln 1.05 (1 pt)
- ≈ 0.6931/0.04879 ≈ 14.2 years (1 pt)

**c. (4 points; matha-mock1-q08)**
- 700·1.05ᵗ = 1300 (1 pt)
- 1.05ᵗ = 13/7 (1 pt)
- t = ln(13/7)/ln(1.05) ≈ 0.61876/0.04879 ≈ 12.7 (1 pt)
- So the model exceeds 1300 after 12.7 years — during year 13 (1 pt)

**d. (4 points; matha-mock1-q09)**
- M(0) = 1500/(1 + 1.5) = 600 (1 pt)
- Saturation level 1500 (0.85ᵗ → 0) (1 pt)
- 1500/(1 + 1.5·0.85ᵗ) = 1200 ⇔ 1 + 1.5·0.85ᵗ = 1.25 ⇔ 0.85ᵗ = 1/6 (1 pt)
- t = ln(1/6)/ln(0.85) ≈ 11.0 years (1 pt)

**e. (5 points; matha-mock1-q10)**
- The denominator 1 + 1.5·(0.85)ᵗ stays positive and decreases; a constant numerator over a falling positive denominator rises: M increases, so M′(t) > 0 (2 pts)
- M′ from the chain rule: M′(t) = −1500·(1 + 1.5·0.85ᵗ)⁻²·1.5·0.85ᵗ·ln(0.85) (2 pts)
- M′(0) = −1500·(1/6.25)·1.5·(−0.1625) ≈ 58.51 members per year (1 pt)

## Problem 3 — The sunflower seeds (18 points)

**a. (2 points; matha-mock1-q11)**
- Fixed n = 100, two outcomes (germinate/not), constant probability p, independent seeds: binomial (1 pt)
- Parameters under the claim: n = 100, p = 0.85 (1 pt)

**b. (3 points; matha-mock1-q12)**
- E(X) = np = 85 (1 pt)
- σ(X) = √(100·0.85·0.15) = √12.75 (1 pt)
- ≈ 3.57 (1 pt)

**c. (4 points; matha-mock1-q13)**
- P(X = 3) = C(4,3)·0.85³·0.15¹ (2 pts, full formula)
- C(4,3) = 4 and 0.85³ = 0.614125 (1 pt)
- = 4·0.614125·0.15 = 0.3685 (1 pt)

**d. (4 points; matha-mock1-q14)**
- Approximation allowed: np₀ = 85 ≥ 5 (and n(1−p₀) = 15 ≥ 5 for the usual textbook condition) (1 pt)
- μ_T = 85, σ_T = √12.75 ≈ 3.5707 (1 pt)
- Critical value: g = 85 − 1.645·3.5707 ≈ 79.13 (no continuity correction needed) (1 pt)
- Outcome 79 < 79.13: in the rejection region → reject H₀; at the 5% level there is sufficient reason to believe the germination rate is below 85% (1 pt)

**e. (5 points; matha-mock1-q15)**
- Meaning stated correctly: if the packet's claim were true (p = 0.85), the probability of counting 79 or fewer germinated seeds out of 100 would be 0.0036 (0.36%) (2 pts)
- Comparison: 0.0036 < 0.05 (1 pt)
- Conclusion: reject H₀ — sufficient reason at the 5% level to doubt the packet's claim (1 pt)
- In context words, left-sided equivalence with part d (1 pt)

## Problem 4 — The health screening (20 points)

**a. (4 points; matha-mock1-q16)**
- Healthy: g = 130 = 110 + 20 = μ_H + σ_H: upper σ-tail → 16% flagged (2 pts)
- Carriers: not flagged means X_C < 130 = μ_C − σ_C: lower σ-tail → 16% not flagged (2 pts)

**b. (5 points; matha-mock1-q17)**
- 2.5% flagged = upper 2σ tail (1 pt)
- g = μ_H + 2σ_H (1 pt)
- g = 110 + 40 = 150 mg/dL (3 pts)

**c. (5 points; matha-mock1-q18)**
- Per 10 000: 400 carriers (4%) and 9600 healthy (1 pt)
- With g = 150: carriers flagged 50% → 200; healthy flagged 2.5% → 240 (2 pts)
- Table totals: flagged 440; not flagged: carriers 200, healthy 9360 (1 pt)
- P(carrier given flagged) = 200/440 ≈ 45.5% (1 pt)

**d. (6 points; matha-mock1-q19)**
- Mean test, right-sided: H₀: μ = 110, H₁: μ > 110, α = 0.05 (1 pt)
- σ(X̄) = 20/√9 ≈ 6.67 stated (1 pt)
- Critical value: g = 110 + 1.645·6.67 ≈ 120.97 (2 pts)
- Group mean 118.4 < 120.97: not in the rejection region — no sufficient reason at 5% to call the group's mean level elevated (2 pts)
