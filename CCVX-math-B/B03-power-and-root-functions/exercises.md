# B3 — Practice questions with solutions

Nine original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Compute exactly; a full worked solution follows every question.

## Q1 — the power rules

Simplify to one power of each letter: (x² y⁻¹)³ · y⁴.

**Solution.** (x²)³ · (y⁻¹)³ · y⁴ = x⁶ · y⁻³ · y⁴ = x⁶ y¹ = x⁶y.

**Answer:** x⁶y

## Q2 — fractional and negative exponents, exact

Compute exactly: (a) 27^(2/3); (b) 16^(−3/4).

**Solution.** (a) 27^(2/3) = (27^(1/3))² = 3² = 9. (b) 16^(−3/4) = (16^(1/4))⁻³ = 2⁻³ = 1/8.

**Answer:** (a) 9; (b) 1/8

## Q3 — vertex and extreme value

Find the vertex of y = −3x² + 12x − 7 and state whether it is a minimum or maximum.

**Solution.** Axis of symmetry: x = −b/(2a) = −12/(−6) = 2. y(2) = −12 + 24 − 7 = 5. Since a = −3 < 0 it is a *bergparabool*, so the vertex (2, 5) gives the maximum value 5.

**Answer:** vertex (2, 5), a maximum of 5

## Q4 — completing the square and zeros

a. Write y = x² − 10x + 28 in the form (x − p)² + q and give the vertex.

b. How many x-intercepts does the parabola have?

**Solution.** a. x² − 10x = (x − 5)² − 25, so y = (x − 5)² + 3; vertex (5, 3). b. The minimum value is 3 > 0, so no x-intercepts. Check with D: 100 − 112 = −12 < 0. ✓

**Answer:** a. (x − 5)² + 3, vertex (5, 3); b. none

## Q5 — root equation with a rejected answer

Solve: √(3x + 1) = x − 1.

**Solution.** Need x ≥ 1. Square: 3x + 1 = x² − 2x + 1 ⇔ x² − 5x = 0 ⇔ x(x − 5) = 0 ⇔ x = 0 or x = 5. Only x = 5 satisfies x ≥ 1. Check: √16 = 4 = 5 − 1 ✓. (x = 0 gives √1 = 1 ≠ −1.)

**Answer:** x = 5

## Q6 — line meets root graph

Compute the intersection(s) of y = 2x − 3 and y = √x.

**Solution.** √x = 2x − 3 needs 2x − 3 ≥ 0, so x ≥ 3/2. Square: x = 4x² − 12x + 9 ⇔ 4x² − 13x + 9 = 0. D = 169 − 144 = 25, x = (13 ± 5)/8, so x = 9/4 or x = 1. Only x = 9/4 ≥ 3/2; then y = 2·(9/4) − 3 = 3/2. Check: √(9/4) = 3/2 ✓.

**Answer:** one intersection: (9/4, 3/2)

## Q7 — analysis of a shifted root graph

Given f(x) = 3 − √(2 − x).

a. Give the starting point of the graph.

b. Give the domain and range.

c. Describe the shape (direction of opening, rising or falling).

**Solution.** a. The root expression vanishes at x = 2, and f(2) = 3: starting point (2, 3). b. Need 2 − x ≥ 0, so domain x ≤ 2; √ ≥ 0, so f(x) ≤ 3, range y ≤ 3. c. The minus sign reflects the root graph in the x-axis, so from (2, 3) the graph runs to the left and downwards: moving left from x = 2 the root grows, so f falls; as x → 2 from the left, f rises to 3. It is the lower half of the sideways parabola (y − 3)² = 2 − x, opening to the left.

**Answer:** a. (2, 3); b. domain x ≤ 2, range y ≤ 3; c. half sideways parabola opening to the left, falling as you move left

## Q8 — power inequality

Solve: x⁴ > 4x².

**Solution.** Do not divide by x² blindly (it loses nothing here since x² ≥ 0, but factoring is safer): x⁴ − 4x² > 0 ⇔ x²(x² − 4) > 0 ⇔ x²(x − 2)(x + 2) > 0. The zeros are −2, 0, 2; the factor x² is never negative, and (x−2)(x+2) > 0 for x < −2 or x > 2. At x = 0 the left side is 0, not > 0.

**Answer:** x < −2 ∨ x > 2

## Q9 — context: scaling a cube

The edge s of a cube and its volume V satisfy V = s³.

a. Express s in terms of V.

b. The volume of a cube is tripled. By what exact factor does its edge change, and by what percentage (1 decimal)?

**Solution.** a. s = ∛V = V^(1/3). b. New edge s′ = ∛(3V) = ∛3 · ∛V = ∛3 · s, so the factor is ∛3 ≈ 1.442, an increase of about 44.2%.

**Answer:** a. s = ∛V; b. factor ∛3 ≈ 1.442, i.e. +44.2%
