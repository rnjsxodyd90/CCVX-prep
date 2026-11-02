# B9 — Integration: practice

Eleven original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o8 match the numbered learning outcomes in [README.md](README.md).

### mathb-b09-q01 | points 3 | outcome o2 | difficulty easy

#### Question

Give antiderivatives of: (a) x⁵ − 3x + 4; (b) 1/x³; (c) cos(4x).

#### Answer

(a) x⁶/6 − (3/2)x² + 4x + C; (b) −1/(2x²) + C; (c) ¼ sin(4x) + C

#### Solution

(a) Power rule per term: x⁶/6 − (3/2)x² + 4x + C. (b) x⁻³ integrates to x⁻²/(−2) = −1/(2x²) + C. (c) Simple chain rule: ∫ cos(4x) dx = ¼ sin(4x) + C. All check by differentiation.

### mathb-b09-q02 | points 2 | outcome o4 | difficulty easy

#### Question

Compute ∫ from 1 to 2 of (3x² + 2x) dx.

#### Answer

10

#### Solution

[x³ + x²] from 1 to 2 = (8 + 4) − (1 + 1) = 10.

### mathb-b09-q03 | points 3 | outcome o4 | difficulty easy

#### Question

Compute ∫ from 0 to 1 of e^(4x) dx exactly.

#### Answer

(e⁴ − 1)/4

#### Solution

[¼ e^(4x)] from 0 to 1 = e⁴/4 − 1/4 = (e⁴ − 1)/4.

### mathb-b09-q04 | points 2 | outcome o4 | difficulty easy

#### Question

Compute ∫ from 0 to π of sin(x) dx exactly.

#### Answer

2

#### Solution

[−cos(x)] from 0 to π = −cos π + cos 0 = 1 + 1 = 2. (The strip under one sine arch is exactly 2.)

### mathb-b09-q05 | points 2 | outcome o4 | difficulty easy

#### Question

Compute ∫ from 1 to e of 1/x dx.

#### Answer

1

#### Solution

[ln x] from 1 to e = 1 − 0 = 1. The area under y = 1/x from 1 to e is exactly 1.

### mathb-b09-q06 | points 4 | outcome o5 | difficulty medium

#### Question

Compute the area of the region bounded by the graph of f(x) = 4 − x² and the x-axis.

#### Answer

32/3

#### Solution

Zeros: x = ±2; the parabola opens downwards, so f ≥ 0 on [−2, 2]. Area = ∫ from −2 to 2 of (4 − x²) dx = [4x − x³/3] from −2 to 2 = (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 = 32/3.

### mathb-b09-q07 | points 4 | outcome o5 | difficulty medium

#### Question

For f(x) = x³, compute (a) ∫ from −1 to 1 of f(x) dx, and (b) the total area enclosed between the graph and the x-axis on [−1, 1]. Explain the difference.

#### Answer

(a) 0; (b) ½ — the integral is signed, the area is not

#### Solution

(a) [¼x⁴] from −1 to 1 = ¼ − ¼ = 0. (b) For x < 0 the graph lies below the axis, so flip the sign there: area = ∫ from −1 to 0 of (−x³) dx + ∫ from 0 to 1 of x³ dx. First part: [−¼x⁴] from −1 to 0 = 0 − (−¼) = ¼. Second part: [¼x⁴] from 0 to 1 = ¼. Total area = ¼ + ¼ = ½. The integral counts the left half *negative* (signed area); the geometric area is positive.

### mathb-b09-q08 | points 4 | outcome o6 | difficulty medium

#### Question

Compute the area enclosed by the graphs of f(x) = √x and g(x) = x².

#### Answer

⅓

#### Solution

Intersections: √x = x² ⇔ x = x⁴ ⇔ x(x³ − 1) = 0 ⇔ x = 0 or x = 1 (for x ≥ 0). On (0, 1): √x > x² (test x = ¼: ½ > 1/16). Area = ∫ from 0 to 1 (x^(1/2) − x²) dx = [⅔x^(3/2) − ⅓x³] from 0 to 1 = ⅔ − ⅓ = ⅓.

### mathb-b09-q09 | points 4 | outcome o7 | difficulty medium

#### Question

The region under f(x) = x² on 0 ≤ x ≤ 1 rotates about the x-axis. Compute the exact volume.

#### Answer

π/5

#### Solution

V = π ∫ from 0 to 1 (x²)² dx = π ∫ from 0 to 1 x⁴ dx = π[x⁵/5] from 0 to 1 = π/5.

### mathb-b09-q10 | points 5 | outcome o7 | difficulty hard

#### Question

The region bounded by the graph of y = x² (x ≥ 0), the y-axis and the line y = 4 rotates about the y-axis. Compute the exact volume.

#### Answer

8π

#### Solution

Solve for x: x = √y = y^(1/2), with y from 0 to 4. V = π ∫ from 0 to 4 x² dy = π ∫ from 0 to 4 y dy = π[½y²] from 0 to 4 = 8π.

### mathb-b09-q11 | points 5 | outcome o3 | difficulty hard

#### Question

Compute ∫ from 0 to π of sin²(x) dx exactly. (Hint: use a double-angle formula from the exam's formula sheet.)

#### Answer

π/2

#### Solution

Formula sheet: cos(2x) = 1 − 2 sin²x, so sin²x = ½ − ½ cos(2x). Integral = [x/2 − ¼ sin(2x)] from 0 to π = (π/2 − ¼·0) − (0 − ¼·0) = π/2.
