# B7 — Practice questions with solutions

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Differentiate exactly; a full worked solution follows every question.

## Q1 — polynomial

Differentiate f(x) = 3x⁴ − 2x² + 5x − 7 and compute f′(−1).

**Solution.** f′(x) = 12x³ − 4x + 5. f′(−1) = −12 + 4 + 5 = −3.

**Answer:** f′(x) = 12x³ − 4x + 5; f′(−1) = −3

## Q2 — roots and negative powers

Differentiate f(x) = 2√x + 4/x² (x > 0).

**Solution.** Rewrite: 2x^(1/2) + 4x⁻². Then f′(x) = x^(−1/2) − 8x⁻³ = 1/√x − 8/x³.

**Answer:** f′(x) = 1/√x − 8/x³

## Q3 — general exponential and logarithmic bases

Differentiate f(x) = 5ˣ + ³log(x).

**Solution.** f′(x) = 5ˣ·ln 5 + 1/(x·ln 3).

**Answer:** f′(x) = 5ˣ ln 5 + 1/(x ln 3)

## Q4 — product rule

Differentiate f(x) = (x² − 3x)·eˣ.

**Solution.** f′ = (2x − 3)eˣ + (x² − 3x)eˣ = eˣ(x² − 3x + 2x − 3) = eˣ(x² − x − 3).

**Answer:** f′(x) = eˣ(x² − x − 3)

## Q5 — quotient rule

Differentiate f(x) = x/(x² + 1).

**Solution.** f′ = (1·(x² + 1) − x·2x)/(x² + 1)² = (1 − x²)/(x² + 1)².

**Answer:** f′(x) = (1 − x²)/(x² + 1)²

## Q6 — chain rule, exact evaluation

Differentiate f(x) = cos(2x − π/6) and compute f′(π/6) exactly.

**Solution.** f′(x) = −2 sin(2x − π/6). At x = π/6: f′ = −2 sin(π/3 − π/6) = −2 sin(π/6) = −2·½ = −1.

**Answer:** f′(x) = −2 sin(2x − π/6); f′(π/6) = −1

## Q7 — tangent line to a root graph

Give the equation of the tangent to f(x) = √(3x + 2) at x = 2/3.

**Solution.** f(2/3) = √4 = 2. f′(x) = 3/(2√(3x + 2)), so f′(2/3) = 3/4. Tangent: y = (3/4)(x − 2/3) + 2 = (3/4)x − 1/2 + 2 = (3/4)x + 3/2. Check: at x = 2/3, y = 1/2 + 3/2 = 2 ✓.

**Answer:** y = (3/4)x + 3/2

## Q8 — tangent line involving e

Give the tangent line to f(x) = ln(x) at x = e².

**Solution.** Point: (e², 2). Slope: f′(x) = 1/x, so f′(e²) = e⁻² = 1/e². Line: y = (x − e²)/e² + 2 = x/e² − 1 + 2 = x/e² + 1.

**Answer:** y = x/e² + 1

## Q9 — second derivative

Compute f″(x) for f(x) = sin(3x), and f″(π/6) exactly. What is the relation between f″ and f?

**Solution.** f′(x) = 3 cos(3x); f″(x) = −9 sin(3x). f″(π/6) = −9 sin(π/2) = −9. Relation: f″ = −9·f — the harmonic-oscillation property (acceleration proportional to displacement).

**Answer:** f″(x) = −9 sin(3x) = −9f(x); f″(π/6) = −9

## Q10 — chain and quotient combined

Differentiate f(x) = ((2x + 1)/(x + 2))².

**Solution.** Chain rule with g(x) = (2x + 1)/(x + 2): f′ = 2g·g′. Quotient rule: g′ = (2(x + 2) − (2x + 1))/(x + 2)² = 3/(x + 2)². So f′(x) = 2·(2x + 1)/(x + 2) · 3/(x + 2)² = 6(2x + 1)/(x + 2)³.

**Answer:** f′(x) = 6(2x + 1)/(x + 2)³
