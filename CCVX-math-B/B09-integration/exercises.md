# B9 — Practice questions with solutions

Eleven original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. All answers are exact; a full worked solution follows every question.

## Q1 — antiderivatives

Give antiderivatives of: (a) x⁵ − 3x + 4; (b) 1/x³; (c) cos(4x).

**Solution.** (a) x⁶/6 − (3/2)x² + 4x + C. (b) x⁻³ integrates to x⁻²/(−2) = −1/(2x²) + C. (c) Simple chain rule: ¼ sin(4x) + C. All check by differentiation.

**Answer:** (a) x⁶/6 − (3/2)x² + 4x + C; (b) −1/(2x²) + C; (c) ¼ sin(4x) + C

## Q2 — definite integral

Compute ∫ from 1 to 2 of (3x² + 2x) dx.

**Solution.** [x³ + x²] from 1 to 2 = (8 + 4) − (1 + 1) = 10.

**Answer:** 10

## Q3 — exponential, exact

Compute ∫ from 0 to 1 of e^(4x) dx.

**Solution.** [¼ e^(4x)] from 0 to 1 = e⁴/4 − 1/4 = (e⁴ − 1)/4.

**Answer:** (e⁴ − 1)/4

## Q4 — trigonometric, exact

Compute ∫ from 0 to π of sin(x) dx.

**Solution.** [−cos(x)] from 0 to π = −cos π + cos 0 = 1 + 1 = 2. (The "strip" under one sine arch is exactly 2.)

**Answer:** 2

## Q5 — the natural logarithm appears

Compute ∫ from 1 to e of 1/x dx.

**Solution.** [ln x] from 1 to e = 1 − 0 = 1. This is *why* e is natural: the area under 1/x from 1 to e is exactly 1.

**Answer:** 1

## Q6 — area above the x-axis

Compute the area of the region bounded by f(x) = 4 − x² and the x-axis.

**Solution.** Zeros: x = ±2; the parabola opens downwards, so f ≥ 0 on [−2, 2]. Area = ∫ from −2 to 2 (4 − x²) dx = [4x − x³/3] from −2 to 2 = (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 = 32/3.

**Answer:** 32/3

## Q7 — integral vs area below the axis

For f(x) = x³, compute (a) ∫ from −1 to 1 of f(x) dx and (b) the total area enclosed between the graph and the x-axis on [−1, 1]. Explain the difference.

**Solution.** (a) [¼x⁴] from −1 to 1 = ¼ − ¼ = 0. (b) For x < 0 the graph lies below the axis, so flip the sign there: area = ∫ from −1 to 0 of (−x³) dx + ∫ from 0 to 1 of x³ dx. First part: [−¼x⁴] from −1 to 0 = 0 − (−¼) = ¼. Second part: [¼x⁴] from 0 to 1 = ¼. Total area = ¼ + ¼ = ½. The integral counts the left half *negative* (signed area), the geometric area is positive: ½.

**Answer:** (a) 0; (b) ½ — the integral is signed, the area is not

## Q8 — area between two curves

Compute the area enclosed by f(x) = √x and g(x) = x².

**Solution.** Intersections: √x = x² ⇔ x = x⁴ ⇔ x(x³ − 1) = 0 ⇔ x = 0 or x = 1 (for x ≥ 0). On (0, 1): √x > x² (test x = ¼: ½ > 1/16). Area = ∫ from 0 to 1 (x^(1/2) − x²) dx = [⅔x^(3/2) − ⅓x³] from 0 to 1 = ⅔ − ⅓ = ⅓.

**Answer:** ⅓

## Q9 — volume about the x-axis

The region under f(x) = x² on 0 ≤ x ≤ 1 rotates about the x-axis. Compute the exact volume.

**Solution.** V = π ∫ from 0 to 1 (x²)² dx = π ∫ from 0 to 1 x⁴ dx = π[x⁵/5] from 0 to 1 = π/5.

**Answer:** π/5

## Q10 — volume about the y-axis

The region bounded by the graph of y = x² (x ≥ 0), the y-axis and the line y = 4 rotates about the y-axis. Compute the exact volume.

**Solution.** Solve for x: x = √y = y^(1/2), y from 0 to 4. V = π ∫ from 0 to 4 x² dy = π ∫ from 0 to 4 y dy = π[½y²] from 0 to 4 = 8π.

**Answer:** 8π

## Q11 — integrating sin²x (identity from the formula sheet)

Compute ∫ from 0 to π of sin²(x) dx exactly. (Hint: use a double-angle formula from the exam's formula sheet.)

**Solution.** Formula sheet: cos(2x) = 1 − 2 sin²x, so sin²x = ½ − ½ cos(2x). Integral = [x/2 − ¼ sin(2x)] from 0 to π = (π/2 − 0) − 0 = π/2.

**Answer:** π/2
