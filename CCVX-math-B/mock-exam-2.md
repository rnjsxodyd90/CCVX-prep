# Mock exam 2 — CCVX Mathematics B (practice)

Original practice exam written for this prep. Nothing is copied from CCVX or CvTE exams.

- Time: 180 minutes. Total: 76 points over 4 problems.
- Grade: 1 + 9 × (points scored)/76, rounded to one decimal.
- Work algebraically and exactly. Give exact answers (forms with √, π, e, ln) unless the question asks for a rounding.
- No graphing calculator. The formula sheet printed below is the one from the real CCVX wiskunde B exam. A protractor/ruler and a standard scientific calculator are allowed.
- Marking scheme with points per step: [mock-exam-2-marking-scheme.md](mock-exam-2-marking-scheme.md).

## Formula sheet

sin²(x) + cos²(x) = 1

sin(t + u) = sin t cos u + cos t sin u
sin(t − u) = sin t cos u − cos t sin u
cos(t + u) = cos t cos u − sin t sin u
cos(t − u) = cos t cos u + sin t sin u

sin(2t) = 2 sin t cos t
cos(2t) = cos²t − sin²t = 2 cos²t − 1 = 1 − 2 sin²t

### mathb-mock2-q01 | points 2 | outcome b11 | difficulty easy

#### Question

A gable roof sits on a house 8.0 m wide. Take coordinates with the origin at the left wall base (x, y in metres). The roof edges run from P(0, 2) to the ridge R(4, 3) and from R to Q(8, 2). Show that triangle PQR is isosceles.

#### Answer

|PR| = |QR| = √17: isosceles with apex R.

#### Solution

|PR| = √((4 − 0)² + (3 − 2)²) = √(16 + 1) = √17 and |QR| = √((8 − 4)² + (2 − 3)²) = √(16 + 1) = √17. Equal legs conclude the proof.

### mathb-mock2-q02 | points 4 | outcome b12 | difficulty medium

#### Question

(The roof edges run from P(0, 2) over the ridge R(4, 3) to Q(8, 2).) Compute the angle at R in triangle PQR, using the dot product (1 decimal°).

#### Answer

≈ 151.9°.

#### Solution

*RP*→ = (−4, −1) and *RQ*→ = (4, −1). Dot product: (−4)(4) + (−1)(−1) = −15. Lengths both √17: cos(angle) = −15/17, so the angle = cos⁻¹(−15/17) ≈ 151.9°.

### mathb-mock2-q03 | points 4 | outcome b13 | difficulty hard

#### Question

(The roof edges run from P(0, 2) over the ridge R(4, 3) to Q(8, 2).) Give an equation of the circumscribed circle of triangle PQR. (Hint: use the perpendicular bisectors.)

#### Answer

(x − 4)² + (y + 5½)² = 289/4.

#### Solution

Perpendicular bisector of PQ: x = 4. Perpendicular bisector of PR: midpoint (2, 2.5), slope PR = 1/4, so bisector slope −4: y = −4x + 10.5. Intersection is the centre: x = 4 with y = −16 + 10.5 = −5.5, so M(4, −5½); radius |MP| = √(16 + (2 + 5.5)²) = √72.25 = 8½. Equation: (x − 4)² + (y + 5½)² = 289/4. Check R: (4 − 4)² + (3 + 5.5)² = 72.25 ✓.

### mathb-mock2-q04 | points 4 | outcome b10 | difficulty medium

#### Question

(The roof edges run from P(0, 2) over the ridge R(4, 3) to Q(8, 2).) A horizontal roof window at height y = 2.4 spans the full width between the two roof edges PR and RQ. Compute the exact width of the window.

#### Answer

24/5 = 4.8 m.

#### Solution

Line PR: slope (3 − 2)/4 = 1/4: y = 2 + x/4; at y = 2.4: x = 1.6. Line RQ: slope (2 − 3)/(8 − 4) = −1/4: y − 3 = −(x − 4)/4, so y = 4 − x/4; at y = 2.4: x = 6.4. Width: 6.4 − 1.6 = 4.8 = 24/5.

### mathb-mock2-q05 | points 4 | outcome b11 | difficulty medium

#### Question

(The roof edges run from P(0, 2) over the ridge R(4, 3) to Q(8, 2).) Compute the exact area of triangle PQR in two ways: once with ½ × base × height, and once with ½·|PR|·|QR|·sin(angle at R). Show that both give the same exact value.

#### Answer

4 (m²), both ways.

#### Solution

Base PQ = 8, height 3 − 2 = 1: area = ½·8·1 = 4. Sine of the ridge angle: from cos = −15/17, sin = √(1 − (15/17)²) = √(64/289) = 8/17 (positive, angle < 180°). Area = ½·√17·√17·(8/17) = ½·17·8/17 = 4 — the same exact value. ✓

### mathb-mock2-q06 | points 2 | outcome b05 | difficulty medium

#### Question

In a harbour the water level during 24 hours is modelled by h(t) = 3.0 + 0.8·cos(π/6·(t − 10)), 0 ≤ t ≤ 24 (t in hours after midnight, h in metres). Give the water level at high water (maximum) and at low water (minimum), with the times of the first high and the first low after midnight.

#### Answer

High 3.8 m at t = 10 (10:00); first low 2.2 m at t = 4 (04:00).

#### Solution

Maximum 3.0 + 0.8 = 3.8 m when the cosine is 1: π/6·(t − 10) = 2kπ → t = 10 + 12k — first high at t = 10. Minimum 2.2 m when the cosine is −1: t − 10 = 6 + 12k → t = 16 + 12k, which also happens at t = 4 (k = −1); since the level falls from midnight, the FIRST low is at t = 4, not t = 16.

### mathb-mock2-q07 | points 3 | outcome b06 | difficulty medium

#### Question

(The water level satisfies h(t) = 3.0 + 0.8·cos(π/6·(t − 10)), 0 ≤ t ≤ 24.) Compute exactly the first time after midnight at which the level crosses the equilibrium level while falling.

#### Answer

t = 1 (01:00).

#### Solution

Equilibrium when cos(π/6·(t − 10)) = 0. Falling when dh/dt = −(0.8π/6)·sin(π/6·(t − 10)) < 0, i.e. sin > 0. Smallest t > 0 with cos = 0 and sin > 0: π/6·(t − 10) = −3π/2 ≜ π/2, so t = 1.

### mathb-mock2-q08 | points 4 | outcome b06 | difficulty hard

#### Question

(The water level satisfies h(t) = 3.0 + 0.8·cos(π/6·(t − 10)), 0 ≤ t ≤ 24.) A ship needs a water level of at least 3.4 m. Compute the first window of positive length (from → to) after midnight during which the ship can enter, exactly.

#### Answer

From t = 8 to t = 12.

#### Solution

h(t) ≥ 3.4 ⇔ cos(π/6·(t − 10)) ≥ ½. Cos ≥ ½ on arguments in [−π/3 + 2kπ, π/3 + 2kπ]. So t − 10 ∈ [−2 + 12k, 2 + 12k], i.e. t ∈ [8 + 12k, 12 + 12k]. First window of positive length after midnight: from t = 8 to t = 12. (Side note: h(0) = 3.4 exactly, but only instantaneously.)

### mathb-mock2-q09 | points 3 | outcome b05 | difficulty medium

#### Question

(The water level satisfies h(t) = 3.0 + 0.8·cos(π/6·(t − 10)), 0 ≤ t ≤ 24.) Compute the average rate of change of the water level between t = 0 and t = 6, and the instantaneous rate dh/dt at t = 6. Give both exactly, with units.

#### Answer

Average −2/15 m/h; dh/dt at t = 6: π√3/15 ≈ 0.36 m/h.

#### Solution

h(0) = 3 + 0.8·cos(−5π/3) = 3 + 0.8·½ = 3.4; h(6) = 3 + 0.8·cos(−2π/3) = 3 − 0.4 = 2.6. Average: (2.6 − 3.4)/6 = −4/30 = −2/15 m/h. h′(t) = −(4π/30)·sin(π/6·(t − 10)); h′(6) = −(4π/30)·(−½√3) = π√3/15 ≈ 0.36 m/h.

### mathb-mock2-q10 | points 4 | outcome b06 | difficulty hard

#### Question

(The water level satisfies h(t) = 3.0 + 0.8·cos(π/6·(t − 10)), 0 ≤ t ≤ 24.) Solve exactly on [0, 24]: h(t) = 3.4. (You may build on the previous part, but write the complete solution.)

#### Answer

t = 0, 8, 12, 20, 24.

#### Solution

h(t) = 3.4 ⇔ cos(π/6·(t − 10)) = ½ ⇔ π/6·(t − 10) = ±π/3 + 2kπ ⇔ t = 10 ± 2 + 12k, i.e. t = 8 + 12k or t = 12 + 12k. On [0, 24], extended by the endpoints: t = 0 (from cos(−5π/3) = cos(π/3) = ½), 8, 12, 20, 24.

### mathb-mock2-q11 | points 4 | outcome b06 | difficulty medium

#### Question

(The water level satisfies h(t) = 3.0 + 0.8·cos(π/6·(t − 10)), 0 ≤ t ≤ 24.) The harbour master replaces the model between t = 6 and t = 12 by the straight line through the model's points at t = 6 and t = 12. By what exact amount does his approximation deviate from the model at t = 9?

#### Answer

0.4√3 m.

#### Solution

Model values: h(6) = 2.6 and h(12) = 3 + 0.8·cos(π/3) = 3.4, so the line rises (3.4 − 2.6)/6 = 2/15 m per hour. Line at t = 9: 2.6 + (2/15)·3 = 3.0 m. Model at t = 9: h(9) = 3 + 0.8·cos(−π/6) = 3 + 0.4√3. Deviation: |3 + 0.4√3 − 3.0| = 0.4√3 m.

### mathb-mock2-q12 | points 2 | outcome b04 | difficulty easy

#### Question

The functions f_p are given by f_p(x) = ln(x) − ln(x − p), with x > p and parameter p > 0. Show that f_p(x) = ln(x/(x − p)).

#### Answer

f_p(x) = ln(x/(x − p)), by the difference rule.

#### Solution

Difference rule for logarithms: ln a − ln b = ln(a/b), with a = x, b = x − p. Conditions x > 0 and x − p > 0 both hold on the domain x > p.

### mathb-mock2-q13 | points 3 | outcome b08 | difficulty medium

#### Question

(The functions f_p are given by f_p(x) = ln(x) − ln(x − p), with x > p, p > 0.) Show with limit calculations that the graph of f_p has the line x = p as a vertical asymptote and the line y = 0 as a horizontal asymptote.

#### Answer

Vertical asymptote x = p; horizontal asymptote y = 0, both demonstrated below.

#### Solution

lim (x↓p) x/(x − p) = ∞, so lim (x↓p) f_p(x) = lim (u→∞) ln(u) = ∞: vertical asymptote x = p. Horizontal: lim (x→∞) x/(x − p) = lim 1/(1 − p/x) = 1, so lim (x→∞) f_p(x) = ln 1 = 0: horizontal asymptote y = 0.

### mathb-mock2-q14 | points 4 | outcome b07 | difficulty medium

#### Question

(The functions f_p are given by f_p(x) = ln(x) − ln(x − p), with x > p, p > 0.) Show with the derivative that f_p is decreasing on its whole domain.

#### Answer

f_p′(x) = −p/(x(x − p)) < 0 on the whole domain, so f_p is decreasing.

#### Solution

f_p′(x) = 1/x − 1/(x − p). One fraction: ((x − p) − x)/(x(x − p)) = −p/(x(x − p)). For x > p and p > 0 all three factors x, x − p, p are positive, so f_p′(x) < 0: strictly decreasing.

### mathb-mock2-q15 | points 4 | outcome b04 | difficulty medium

#### Question

(The functions f_p are given by f_p(x) = ln(x) − ln(x − p), with x > p, p > 0.) For which x is f₂(x) = 1? Give an exact answer.

#### Answer

x = 2e/(e − 1).

#### Solution

ln(x/(x − 2)) = 1 ⇔ x/(x − 2) = e ⇔ x = e(x − 2) ⇔ x = ex − 2e ⇔ x(1 − e) = −2e ⇔ x = 2e/(e − 1) ≈ 3.16 (inside the domain x > 2 ✓).

### mathb-mock2-q16 | points 5 | outcome b09 | difficulty hard

#### Question

Take g(x) = ln(x) − ln(2x − 3) for x > 3/2. Compute exactly the total area of the region(s) bounded by the graph of g, the x-axis and the lines x = 2 and x = 4. (Tip: compute where g(x) = 0 first, and use the standard antiderivative of ln.)

#### Answer

3 ln 3 + (5/2) ln 5 − 10 ln 2 ≈ 0.388.

#### Solution

Zero of g: ln(x/(2x − 3)) = 0 ⇔ x = 2x − 3 ⇔ x = 3, inside [2, 4]; g > 0 for x < 3 and g < 0 for x > 3. Antiderivative: G(x) = x ln x − x − ½(2x − 3) ln(2x − 3) + ½(2x − 3); values: G(2) = 2 ln2 − 3/2, G(3) = (3/2)ln3 − 3/2, G(4) = 4 ln4 − (5/2)ln5 − 3/2. Area = (G(3) − G(2)) − (G(4) − G(3)) (sign split at the zero) = (3/2·ln3 − 2 ln2) + ((5/2)ln5 + (3/2)ln3 − 4 ln4) = 3 ln3 + (5/2)ln5 − 10 ln2 ≈ 0.388.

### mathb-mock2-q17 | points 2 | outcome b01 | difficulty easy

#### Question

For each value of p, the function f_p is given by f_p(x) = −x² + px. Compute the x-values where the graph of f_p meets the x-axis.

#### Answer

x = 0 and x = p.

#### Solution

−x² + px = x(p − x) = 0 ⇔ x = 0 or x = p.

### mathb-mock2-q18 | points 4 | outcome b01 | difficulty medium

#### Question

(For each p, f_p(x) = −x² + px.) Show that the vertex of the parabola is (p/2, p²/4), and give an equation of the curve on which all these vertices lie.

#### Answer

Vertex (p/2, p²/4) ✓; all vertices lie on y = x².

#### Solution

Axis of symmetry x = −p/(2·(−1)) = p/2; value: f_p(p/2) = −p²/4 + p²/2 = p²/4, so the vertex is (p/2, p²/4). Eliminate p: x = p/2 ⇔ p = 2x, so y = (2x)²/4 = x².

### mathb-mock2-q19 | points 4 | outcome b08 | difficulty hard

#### Question

(For each p, f_p(x) = −x² + px.) For which values of p does the line y = −2x + 4 touch the parabola of f_p? Give the touching points as well.

#### Answer

p = 2 (touching at (2, 0)) and p = −6 (touching at (−2, 8)).

#### Solution

Touching ⇔ one solution for −x² + px = −2x + 4 ⇔ x² − (p + 2)x + 4 = 0 with discriminant zero: (p + 2)² − 16 = 0 ⇔ p + 2 = ±4, so p = 2 or p = −6. Touching points: p = 2: x² − 4x + 4 = (x − 2)² = 0, touching at (2, 0); p = −6: (x + 2)² = 0, touching at (−2, 8).

### mathb-mock2-q20 | points 5 | outcome b09 | difficulty medium

#### Question

Take p = 4 (so f₄(x) = −x² + 4x). Compute exactly the area of the region enclosed by the graph of f₄ and the x-axis.

#### Answer

32/3.

#### Solution

Zeros 0 and 4; f₄(x) > 0 on (0, 4) since a = −1 < 0 — a bergparabool. Area = ∫ from 0 to 4 of (−x² + 4x) dx = [−x³/3 + 2x²] from 0 to 4 = (−64/3 + 32) − 0 = 32/3.

### mathb-mock2-q21 | points 5 | outcome b09 | difficulty hard

#### Question

The region of the previous part (under f₄(x) = −x² + 4x on 0 ≤ x ≤ 4) rotates about the x-axis. Compute the exact volume of the resulting solid.

#### Answer

512π/15.

#### Solution

V = π ∫ from 0 to 4 of (−x² + 4x)² dx = π ∫ from 0 to 4 of (x⁴ − 8x³ + 16x²) dx = π[x⁵/5 − 2x⁴ + 16x³/3] from 0 to 4 = π·(1024/5 − 512 + 1024/3) = π·(3072 − 7680 + 5120)/15 = 512π/15.
