# Marking scheme — Mock exam 2, CCVX Mathematics B (practice)

Exam: [mock-exam-2.md](mock-exam-2.md). Total 76 points. Grade = 1 + 9 × (score)/76. Alternative correct methods receive full credit; a computational slip costs the final point of a step unless the slip makes the work essentially simpler.

## Problem 1 — The triangular roof (18 points)

**a. (2 points; mathb-mock2-q01)**
- |PR| = √((4 − 0)² + (3 − 2)²) = √17 and |QR| = √((8 − 4)² + (2 − 3)²) = √17 (1 pt)
- Equal lengths conclude the proof (1 pt)

**b. (4 points; mathb-mock2-q02)**
- *RP*→ = (−4, −1) and *RQ*→ = (4, −1) (1 pt)
- Dot product: (−4)(4) + (−1)(−1) = −15 (1 pt)
- cos(angle) = −15/(√17·√17) = −15/17 (1 pt)
- Angle = cos⁻¹(−15/17) ≈ 151.9° (1 pt)

**c. (4 points; mathb-mock2-q03)**
- Perpendicular bisector of PQ: x = 4 (1 pt)
- Perpendicular bisector of PR: midpoint (2, 2.5), slope PR = 1/4, so slope −4: y = −4x + 10.5 (2 pts)
- Centre: x = 4 with y = −4·4 + 10.5 = −5.5, so M(4, −5½); radius |MP| = √(16 + (2 + 5.5)²) = √72.25 = 8½ (1 pt — equation: (x − 4)² + (y + 5½)² = 289/4; check R on it: 8.5² ✓)

**d. (4 points; mathb-mock2-q04)**
- Line PR: y = 2 + x/4 (1 pt); line RQ: y = 4 − x/4 (1 pt)
- At y = 2.4: x = 1.6 on PR and x = 6.4 on RQ (1 pt)
- Width: 6.4 − 1.6 = 4.8 m = 24/5 m (1 pt)

**e. (4 points; mathb-mock2-q05)**
- Base PQ = 8, height 3 − 2 = 1: area = ½·8·1 = 4 (1 pt)
- sin of the angle at R: from cos = −15/17, sin = √(1 − (15/17)²) = √(64/289) = 8/17 (positive, angle < 180°) (2 pts)
- ½·√17·√17·(8/17) = ½·17·8/17 = 4 — same value ✓ (1 pt)

## Problem 2 — Harbour tide (20 points)

**a. (2 points; mathb-mock2-q06)**
- Maximum 3.8 m when cos = 1: π/6·(t − 10) = 0 → t = 10, first high at 10:00 (1 pt)
- Minimum 2.2 m when cos = −1: t − 10 = 6 → t = 16, first low at 16:00 (1 pt)

**b. (3 points; mathb-mock2-q07)**
- Equilibrium when cos(π/6·(t − 10)) = 0 (1 pt)
- Falling when dh/dt = −(0.8π/6)·sin(π/6·(t − 10)) < 0, i.e. sin > 0 (1 pt)
- Smallest t > 0 with cos = 0 and sin > 0: π/6·(t − 10) = −3π/2 ≜ π/2, so t = 1 (1 pt; intermediate check that smaller t keeps the argument away from its zeros)

**c. (4 points; mathb-mock2-q08)**
- h(t) ≥ 3.4 ⇔ cos(π/6·(t − 10)) ≥ ½ (1 pt)
- Cos ≥ ½ on arguments in [−π/3 + 2kπ, π/3 + 2kπ] (1 pt)
- So t − 10 ∈ [−2 + 12k, 2 + 12k], i.e. t ∈ [8 + 12k, 12 + 12k] (1 pt)
- First window of positive length after midnight: from t = 8 to t = 12 (1 pt; note for the sharp-eyed: h(0) = 3.4 exactly, but only instantaneously)

**d. (3 points; mathb-mock2-q09)**
- h(0) = 3 + 0.8·cos(−5π/3) = 3 + 0.8·½ = 3.4; h(6) = 3 + 0.8·cos(−2π/3) = 3 − 0.4 = 2.6 (1 pt)
- Average: (2.6 − 3.4)/6 = −4/30 = −2/15 m/h (1 pt, with units)
- h′(t) = −(4π/30)·sin(π/6·(t − 10)); h′(6) = −(4π/30)·(−½√3) = π√3/15 ≈ 0.36 m/h (1 pt)

**e. (4 points; mathb-mock2-q10)**
- h(t) = 3.4 ⇔ cos(π/6·(t − 10)) = ½ (1 pt)
- π/6·(t − 10) = ±π/3 + 2kπ (1 pt)
- t = 10 ± 2 + 12k, i.e. t = 8 + 12k or t = 12 + 12k (1 pt)
- On [0, 24], extended by the endpoints: t = 0, 8, 12, 20, 24 (1 pt — t = 0 from cos(−5π/3) = ½; missing it costs this point)

**f. (4 points; mathb-mock2-q11)**
- Model values: h(6) = 2.6, h(12) = 3 + 0.8·cos(π/3) = 3.4, so the line rises (3.4 − 2.6)/6 = 2/15 per hour (1 pt)
- Line at t = 9: 2.6 + (2/15)·3 = 3.0 (1 pt)
- Model at t = 9: h(9) = 3 + 0.8·cos(π/6·(9 − 10)) = 3 + 0.8·cos(−π/6) = 3 + 0.4√3 (1 pt)
- Deviation: |3 + 0.4√3 − 3.0| = 0.4√3 ≈ 0.69 m (1 pt; the exact value 0.4√3 is required)

## Problem 3 — The logarithmic family (18 points)

**a. (2 points; mathb-mock2-q12)**
- Difference rule for logarithms: ln a − ln b = ln(a/b), with a = x, b = x − p (1 pt)
- Conditions x > 0 and x − p > 0 both hold on the domain x > p (1 pt)

**b. (3 points; mathb-mock2-q13)**
- lim (x↓p) x/(x − p) = ∞, so lim (x↓p) f_p(x) = lim (u→∞) ln(u) = ∞: vertical asymptote x = p (2 pts)
- lim (x→∞) x/(x − p) = lim 1/(1 − p/x) = 1, so lim f_p = ln 1 = 0: horizontal asymptote y = 0 (1 pt)

**c. (4 points; mathb-mock2-q14)**
- f_p′(x) = 1/x − 1/(x − p) (2 pts)
- One fraction: ((x − p) − x)/(x(x − p)) = −p/(x(x − p)) (1 pt)
- For x > p and p > 0 all three factors x, x − p, p are positive, so f_p′(x) < 0: strictly decreasing (1 pt)

**d. (4 points; mathb-mock2-q15)**
- ln(x/(x − 2)) = 1 ⇔ x/(x − 2) = e (1 pt)
- x = e(x − 2) ⇔ x = ex − 2e (1 pt)
- x(1 − e) = −2e ⇔ x = 2e/(e − 1) (2 pts; ≈ 3.16, inside the domain x > 2 ✓ required for the last point)

**e. (5 points; mathb-mock2-q16)**
- Zero of g: ln(x/(2x − 3)) = 0 ⇔ x = 2x − 3 ⇔ x = 3, inside [2, 4]; g > 0 for x < 3 and g < 0 for x > 3 (1 pt)
- Antiderivatives: ∫ln(x) dx = x ln x − x and ∫ln(2x − 3) dx = ½((2x − 3) ln(2x − 3) − (2x − 3)) state or use (2 pts)
- G(x) = x ln x − x − ½(2x − 3) ln(2x − 3) + ½(2x − 3); G(2) = 2 ln2 − 3/2, G(3) = (3/2)ln3 − 3/2, G(4) = 4 ln4 − (5/2)ln5 − 3/2 (1 pt)
- Area = (G(3) − G(2)) − (G(4) − G(3)) (sign split at the zero) (1 pt)
- = (3/2·ln3 − 2 ln2) + ((5/2)ln5 + (3/2)ln3 − 4 ln4) = 3 ln3 + (5/2)ln5 − 10 ln2 ≈ 0.388 (1 pt; any equivalent exact form accepted)

## Problem 4 — Parabolas with a parameter (20 points)

**a. (2 points; mathb-mock2-q17)**
- −x² + px = x(p − x) = 0 (1 pt)
- x = 0 or x = p (1 pt)

**b. (4 points; mathb-mock2-q18)**
- Axis of symmetry x = −p/(2·(−1)) = p/2 (1 pt)
- f_p(p/2) = −p²/4 + p²/2 = p²/4, vertex (p/2, p²/4) (1 pt)
- Eliminate p: x = p/2 ⇔ p = 2x; y = (2x)²/4 = x² (2 pts; the vertices lie on y = x²)

**c. (4 points; mathb-mock2-q19)**
- Method via discriminant or via f_p = line with f_p′ = line slope (1 pt for either set-up)
- Discriminant route: −x² + px = −2x + 4 ⇔ x² − (p + 2)x + 4 = 0; D = (p + 2)² − 16 = 0 (2 pts)
- p + 2 = ±4: p = 2 or p = −6 (1 pt)
- Touching points: p = 2: x² − 4x + 4 = (x − 2)² = 0, touching at (2, 0); p = −6: (x + 2)² = 0, touching at (−2, 8) (1 pt for both points with a check)

**d. (5 points; mathb-mock2-q20)**
- Zeros 0 and 4; f₄(x) > 0 on (0, 4) since a = −1 < 0 — a bergparabool (1 pt)
- Area = ∫ from 0 to 4 of (−x² + 4x) dx (1 pt)
- Antiderivative: −x³/3 + 2x² (2 pts)
- [−64/3 + 32] − 0 = 32/3 (1 pt)

**e. (5 points; mathb-mock2-q21)**
- V = π ∫ from 0 to 4 of (−x² + 4x)² dx (1 pt)
- Expand: (x² − 4x)² = x⁴ − 8x³ + 16x² (1 pt)
- Antiderivate: x⁵/5 − 2x⁴ + 16x³/3 (2 pts)
- Evaluate: 1024/5 − 512 + 1024/3 = (3072 − 7680 + 5120)/15 = 512/15, so V = 512π/15 (1 pt)
