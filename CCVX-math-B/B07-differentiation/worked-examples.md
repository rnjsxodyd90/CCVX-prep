# B7 — Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — prepare, then differentiate

Differentiate: f(x) = (x² + 2x)/x + 3√x (x > 0).

**Solution.** Prepare: (x² + 2x)/x = x + 2 and 3√x = 3x^(1/2), so f(x) = x + 2 + 3x^(1/2). Then f′(x) = 1 + (3/2)x^(−1/2) = 1 + 3/(2√x).

## Example 2 — product rule

Differentiate f(x) = x² · ln x and compute f′(e) exactly.

**Solution.** f′ = (x²)′·ln x + x²·(ln x)′ = 2x ln x + x²·(1/x) = 2x ln x + x = x(2 ln x + 1). At x = e: f′(e) = e(2·1 + 1) = 3e.

## Example 3 — quotient rule

Differentiate q(x) = (2x + 1)/(x − 3) for x ≠ 3.

**Solution.** q′ = (2·(x − 3) − (2x + 1)·1)/(x − 3)² = (2x − 6 − 2x − 1)/(x − 3)² = −7/(x − 3)². Note the derivative is negative everywhere on the domain — the graph decreases on each branch.

## Example 4 — chain rule

Differentiate: (a) h(x) = e^(3x − 1); (b) k(x) = sin(4x + ⅓π); (c) m(x) = √(x² + 6x).

**Solution.** (a) h′(x) = 3·e^(3x − 1). (b) k′(x) = 4 cos(4x + ⅓π). (c) Write as (x² + 6x)^(1/2): m′(x) = (2x + 6)/(2√(x² + 6x)) = (x + 3)/√(x² + 6x).

## Example 5 — the tangent line, exact

Give the equation of the tangent to the graph of f(x) = x³ − 3x at x = 2.

**Solution.** f(2) = 8 − 6 = 2 and f′(x) = 3x² − 3, so f′(2) = 9. Tangent: y = 9(x − 2) + 2 = 9x − 16.

## Example 6 — second derivative with product rule

Compute f″(x) for f(x) = x·eˣ and evaluate f″(0).

**Solution.** f′ = eˣ + x eˣ = eˣ(1 + x) (product rule). Again: f″ = eˣ(1 + x) + eˣ·1 = eˣ(2 + x). So f″(0) = 2.
