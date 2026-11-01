# B2 — Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — function or not?

Decide whether y can be written as a function rule of x: (a) x² + y² = 16; (b) x − 2y = 6.

**Solution.** (a) Solving for y gives y = ±√(16 − x²): two values for every x in (−4, 4), so **no** single function rule exists; the relation describes a circle. (b) y = ½x − 3: **yes**, this is a function rule — one y for every x.

## Example 2 — domain and range

Give the domain and range of f(x) = 2 + √(x + 3) and of g(x) = 4/(x − 1)².

**Solution.** f: the root needs x + 3 ≥ 0, so domain x ≥ −3; √ is ≥ 0, so range y ≥ 2. g: the denominator must be nonzero, so domain x ≠ 1; the square is > 0 and can be any positive number, so 4/(x−1)² takes all positive values: range y > 0.

## Example 3 — composite functions

f(x) = eˣ and g(x) = x² − 1. Write rules for h₁(x) = f(g(x)) and h₂(x) = g(f(x)).

**Solution.** h₁(x) = e^(x² − 1). h₂(x) = (eˣ)² − 1 = e²ˣ − 1. Note they are different functions; the order of composition matters.

## Example 4 — finding an inverse

Find the inverse of f(x) = 3 − 2√(x − 1), state its domain, and the relation between the ranges.

**Solution.** y = 3 − 2√(x − 1) ⇔ 2√(x − 1) = 3 − y ⇔ √(x − 1) = (3 − y)/2 ⇔ x = 1 + ((3 − y)/2)². Because √ ≥ 0, f has range y ≤ 3, so f⁻¹ has domain y ≤ 3: f⁻¹(y) = 1 + ((3 − y)/2)² = 1 + (3 − y)²/4, y ≤ 3. The graph of the inverse is the mirror image of f in the line y = x.

## Example 5 — transformations in order

Start with y = sin(x). Describe the graph of g(x) = −2 sin(3x) + 1 as a chain of transformations, and give its range.

**Solution.** sin(x) → scale relative to the y-axis by ⅓ (that's f(3x), period becomes 2π/3) → scale relative to the x-axis by −2 (amplitude 2 and reflection in the x-axis) → shift 1 up. Amplitude 2 about equilibrium 1, so the range is [−1, 3].

## Example 6 — maximal vertical distance

f(x) = x² and g(x) = 4x − 2 on 0 ≤ x ≤ 4. Compute the vertical distance at x = 1 and the maximal vertical distance on this interval.

**Solution.** Distance function d(x) = |x² − 4x + 2|... rather: on [0,4], check which is on top; f − g = x² − 4x + 2 = (x − 2)² − 2, which is negative between the roots 2 ± √2 and positive elsewhere on [0,4]. At x = 1: |1 − 2| = 1. For the maximum of |f − g| compare the candidates: f − g has derivative 2x − 4, zero at x = 2 with value −2 (so distance 2); at the boundaries x = 0: distance 2, x = 4: distance 2. So the maximal vertical distance on [0, 4] is 2.
