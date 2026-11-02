# B1 — Algebraic skills: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. All CCVX wiskunde B computation must be algebraic and exact: give answers like x = 3√2 or t = ⅓π, not rounded decimals, unless the question asks for rounding.

## 1. Standard equations

### Linear and quadratic

- Linear (*eerstegraads*): collect x on one side. 5x − 3 = 2x + 9 ⇔ 3x = 12 ⇔ x = 4.
- Quadratic (*tweedegraads*): ax² + bx + c = 0. Try factoring first; otherwise the quadratic formula (*abc-formule*): x = (−b ± √D)/(2a) with discriminant (*discriminant*) D = b² − 4ac. D > 0 gives two solutions, D = 0 one, D < 0 none.
- The formula sheet does **not** include the quadratic formula — know it by heart.

### Power and root equations

- xⁿ = a with n even: x = ± ⁿ√a, only if a ≥ 0. Example: x⁴ = 16 ⇔ x = ±2.
- xⁿ = a with n odd: x = ⁿ√a, exactly one solution. Example: x³ = −8 ⇔ x = −2.
- General: xⁿ = a ⇔ x = a^(1/n) (a ≥ 0). Reduce first: 2x³ = 54 ⇔ x³ = 27 ⇔ x = 3.
- Root equation: √x = a ⇔ x = a², with conditions x ≥ 0, a ≥ 0. Square both sides only when both sides are non-negative, and check the answer in the original equation.

### Exponential and logarithmic

- gˣ = a ⇔ x = ᵍlog(a); on the calculator x = ln(a)/ln(g). Exact when a is a power of g: 3ˣ = 27 = 3³ ⇔ x = 3.
- ᵍlog(x) = a ⇔ x = gᵃ. Example: ²log(x) = 5 ⇔ x = 32.
- ᵍlog(gⁿ) = n: logarithm and exponential cancel when prepared in the same base.

### Absolute value

- |x| = a ⇔ x = ±a (a ≥ 0). |2x − 3| = 5 gives 2x − 3 = 5 or 2x − 3 = −5, so x = 4 or x = −1. No solution when a < 0.

## 2. Inequalities

- Solve f(x) > g(x) by computing f(x) = g(x) algebraically, then reading the answer from a sketch or sign chart. Example: x² < 3x ⇔ x² − 3x = x(x − 3) has zeros 0 and 3; the parabola lies below 0 between the zeros, so 0 < x < 3.
- Multiplying an inequality by a negative number reverses the sign: −2x > 6 ⇔ x < −3.
- Squaring both sides is only safe when both sides are ≥ 0 (then the order is preserved).

## 3. Systems of two linear equations

- Elimination: multiply an equation so one coefficient matches, then add or subtract. Substitution: isolate one variable and substitute. Check the solution in both equations.
- For 2x + 3y = 12 and x − y = 1: from the second, x = y + 1; substitute: 2(y + 1) + 3y = 12 ⇔ 5y = 10 ⇔ y = 2, x = 3.

## 4. Equation of a straight line

- Line with slope a through point P(p, q): q = a·p + b gives b, so y = ax + b.
- A vertical line has equation x = p; its slope does not exist.
- From a normal vector (m, n): the line has equation mx + ny = c; find c by substituting the point.

## 5. Manipulating equations and formulas

### Splitting

- A·B = 0 ⇔ A = 0 ∨ B = 0. Never divide by a factor that could be 0 — you lose solutions; factor instead. x² = 3x ⇔ x(x − 3) = 0 ⇔ x = 0 ∨ x = 3.
- A² = B² ⇔ A = ±B.
- A·B = A·C ⇔ A = 0 ∨ B = C.

### Brackets, fractions and roots

- Expand: (A + B)(C + D) = AC + AD + BC + BD. Factor out: A·B + A·C = A(B + C).
- Fractions: add via a common denominator; divide by multiplying by the reciprocal; cross-multiply: A/B = C/D ⇔ AD = BC ∧ BD ≠ 0.
- Roots: √A = B ⇔ A = B² ∧ A ≥ 0. √(x + 2) = x ⇔ x + 2 = x² ∧ x ≥ 0 ⇔ x² − x − 2 = 0 ⇔ x = −1 or x = 2; only x = 2 satisfies x ≥ 0 (and indeed √4 = 2).

### Substitution (*substitutie*)

- Replace a repeated expression by one letter: x⁴ + 4x² − 5 = 0 with y = x² gives y² + 4y − 5 = 0, so y = 1 or y = −5; only y = 1 is usable, so x = ±1. Same pattern: e²ˣ + 4eˣ − 5 = 0 with y = eˣ; here y = eˣ > 0, so again only y = 1, x = 0.

### Isolating variables (*variabelen vrijmaken*)

- Solve y = f(x) for x. Example: y = 1/(x + 1) ⇔ x = 1/y − 1. Use logarithms for exponents: N = b·gᵗ ⇔ t = ᵍlog(N/b).
- Note for exams: "write y as a function of x" means isolate y; "express x in terms of y" means isolate x.

### Substituting formulas

- Substitute with brackets: if T = 2π√(L/g) and L = 3h + 1, then T = 2π√((3h + 1)/g) — the brackets around 3h + 1 are essential.

## 6. Parameters

- A parameter (*parameter*) is a letter for a constant whose value varies per case. In p derived functions, treat p as a constant: for f_p(x) = p x² − 3x, the derivative is f_p′(x) = 2px − 3.
- Number of intersections: the parabola y = x² and line y = 2x + p meet where x² − 2x − p = 0; D = 4 + 4p = 0 gives p = −1 (one intersection, touching); D > 0 ⇔ p > −1 (two).
- Curve through the vertices: for each p the vertex satisfies y = f_p(x) with f_p′(x) = 0; eliminate p from the two equations to get one equation in x and y.
- Touching curves: f_p(x) = g(x) and f_p′(x) = g′(x) at the touching point — two equations, often allowing you to find both x and p.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original, written for this prep.

## Example 1 — a root equation

Solve exactly: x − √(x + 7) = 5.

**Solution.** Isolate the root: √(x + 7) = x − 5. Squaring needs both sides ≥ 0, so require x ≥ 5. Square: x + 7 = (x − 5)² = x² − 10x + 25 ⇔ x² − 11x + 18 = 0 ⇔ (x − 2)(x − 9) = 0 ⇔ x = 2 or x = 9. The condition x ≥ 5 leaves x = 9. Check: 9 − √16 = 9 − 4 = 5. ✓

## Example 2 — an exponential equation, exact

Solve exactly: 2 · 3ˣ⁻¹ = 54 − 3ˣ.

**Solution.** Bring the powers together: 2 · 3ˣ⁻¹ = (2/3)·3ˣ, so (2/3)·3ˣ + 3ˣ = (5/3)·3ˣ = 54 ⇔ 3ˣ = 162/5. That is not a power of 3, so finish with a logarithm: x = ³log(162/5) = ln(162/5)/ln(3) ≈ 3.17.

When the numbers are chosen so the powers collect to an exact power — for example 3ˣ⁻¹ + 3ˣ = 12, which gives (4/3)·3ˣ = 12, so 3ˣ = 9 and x = 2 — you leave the answer exact; otherwise a logarithm with a rounded value is the right ending.

## Example 3 — a system with a context

A stall sells tulips at €2.50 each and roses at €4 each. Mara buys 12 flowers for €39. How many of each?

**Solution.** Let t tulips and r roses. t + r = 12 and 2.5t + 4r = 39. From the first, r = 12 − t. Substitute: 2.5t + 4(12 − t) = 39 ⇔ −1.5t + 48 = 39 ⇔ t = 6, r = 6. Check: 6 × 2.50 + 6 × 4 = 15 + 24 = 39. ✓ She buys 6 tulips and 6 roses.

## Example 4 — parameter: touching parabola and line

For which value of p does the line y = 2x + p touch the parabola y = x² + 3x?

**Solution.** Touching means one intersection with equal derivatives (or D = 0). Route via D: x² + 3x = 2x + p ⇔ x² + x − p = 0, D = 1 + 4p = 0 ⇔ p = −¼. Route via derivatives: slopes are equal: 2x + 3 = 2 ⇔ x = −½, and f(−½) = ¼ − 3/2 = −5/4 must equal 2(−½) + p ⇔ p = −¼. Both give p = −¼.

## Example 5 — isolate a variable

The pendulum formula is T = 2π√(L/g). Express L in terms of T and g.

**Solution.** T/2π = √(L/g) ⇔ L/g = (T/2π)² ⇔ L = gT²/(4π²).
