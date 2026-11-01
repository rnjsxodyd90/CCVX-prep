# B2 — Practice questions with solutions

Nine original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. A full worked solution follows every question.

## Q1 — is it a function rule?

For each relation, decide whether y can be written as a function rule of x: (a) x = |y|; (b) x = 3y − 9.

**Solution.** (a) x = |y| gives y = x or y = −x for every x > 0: two values, so **not** a function rule. (b) y = (x + 9)/3 = ⅓x + 3: one y per x, so yes.

**Answer:** (a) no; (b) yes, y = ⅓x + 3

## Q2 — domain and range

Give the domain and range of f(x) = (x − 2)² + 3 and of g(x) = 1/(x + 2).

**Solution.** f: squares always exist, domain **R**; (x − 2)² ≥ 0, so f ≥ 3, range y ≥ 3. g: denominator ≠ 0 gives domain x ≠ −2; the fraction is never 0 and takes every other value, so range y ≠ 0.

**Answer:** f: domain **R**, range y ≥ 3; g: domain x ≠ −2, range y ≠ 0

## Q3 — reading interval notation

Write as inequalities: (a) ⟨−1, 4]; (b) [0, 6⟩; (c) ⟨←, 2].

**Solution.** Round bracket = endpoint excluded, square bracket = included; ← and → stand for −∞ and ∞.

**Answer:** (a) −1 < x ≤ 4; (b) 0 ≤ x < 6; (c) x < 2

## Q4 — composition and domain

f(x) = ln(x) and g(x) = 1/(x − 2). Write a rule for h(x) = f(g(x)), simplify it, and give the domain of h.

**Solution.** h(x) = ln(1/(x − 2)) = −ln(x − 2) (logarithm rule for 1/a). The argument of ln must be > 0, so x > 2.

**Answer:** h(x) = −ln(x − 2), domain x > 2

## Q5 — finding an inverse

Find the inverse of f(x) = 2^(x+1).

**Solution.** y = 2^(x+1) ⇔ x + 1 = ²log(y) ⇔ x = ²log(y) − 1. So f⁻¹(y) = ²log(y) − 1 with domain y > 0; interchanging letters, f⁻¹(x) = ²log(x) − 1 for x > 0.

**Answer:** f⁻¹(x) = ²log(x) − 1 (x > 0)

## Q6 — transformation chain

Starting from y = x², give the rule of the parabola with vertex (3, −4) obtained by translating, and find where the point (−1, 1) goes.

**Solution.** Vertex (0,0) → (3, −4): shift 3 right and 4 down: y = (x − 3)² − 4. Every point (a, b) → (a + 3, b − 4), so (−1, 1) → (2, −3). Check: (2 − 3)² − 4 = 1 − 4 = −3 ✓.

**Answer:** y = (x − 3)² − 4; the point goes to (2, −3)

## Q7 — symmetry

Show that f(x) = x⁴ − 3x² has line symmetry in the y-axis, and g(x) = x³ + x point symmetry in the origin.

**Solution.** f(−x) = (−x)⁴ − 3(−x)² = x⁴ − 3x² = f(x): line symmetry in the y-axis. g(−x) = −x³ − x = −(x³ + x) = −g(x): point symmetry in (0,0).

**Answer:** f(−x) = f(x) and g(−x) = −g(x), as required

## Q8 — vertical distance and intersections

The graphs of f(x) = x² and g(x) = x + 2 are given.

a. Compute the vertical distance between the graphs at x = 0.

b. Compute exactly where the graphs intersect.

**Solution.** a. |f(0) − g(0)| = |0 − 2| = 2. b. x² = x + 2 ⇔ x² − x − 2 = (x + 1)(x − 2) = 0 ⇔ x = −1 or x = 2; the intersection points are (−1, 1) and (2, 4).

**Answer:** a. 2; b. (−1, 1) and (2, 4)

## Q9 — splitting a relation into functions

The relation y² = x + 1 describes a sideways parabola.

a. Explain why y is not a function of x.

b. Give two function rules that together describe the whole relation, with their domains and ranges.

c. At which x does the parabola start, and how does that point behave?

**Solution.** a. For each x > −1 the relation gives two y-values, ±√(x + 1), so no single function rule exists. b. y₁ = √(x + 1) with domain x ≥ −1, range y ≥ 0 (upper half); y₂ = −√(x + 1), same domain, range y ≤ 0 (lower half). c. The parabola starts at (−1, 0); there the two halves meet and the tangent is vertical (the graph cannot continue left of x = −1).

**Answer:** a. two y-values per x; b. y = ±√(x + 1), x ≥ −1; c. vertex (−1, 0) with a vertical tangent
