# B9 — Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original; every antiderivative is checked by differentiation.

## Example 1 — antiderivatives, checked

Give antiderivatives: (a) 3x² − 4x + 2; (b) 2/x + √x; (c) sin(5x); (d) e^(2x+1).

**Solution.** (a) x³ − 2x² + 2x + C (check: 3x² − 4x + 2 ✓). (b) 2 ln|x| + ⅔x^(3/2) + C (check: 2/x + x^(1/2) ✓). (c) −⅕ cos(5x) + C (check: −⅕·(−5 sin) = sin 5x ✓). (d) ½ e^(2x+1) + C (check: ½·2e^(2x+1) ✓).

## Example 2 — definite integral, exact

Compute ∫_0^3 (x² − 1) dx.

**Solution.** [⅓x³ − x] from 0 to 3 = (9 − 3) − 0 = 6.

## Example 3 — area with a sign change

The graph of f(x) = x(x − 2) and the x-axis enclose a region between x = 0 and x = 2. Compute its area.

**Solution.** On (0, 2), f(x) ≤ 0 (parabola below the axis). Area = −∫_0^2 (x² − 2x) dx = −[⅓x³ − x²]_0^2 = −(8/3 − 4) = 4/3.

## Example 4 — area between two graphs

Compute the area enclosed by f(x) = x² and g(x) = 2x.

**Solution.** Intersections: x² = 2x ⇔ x = 0 or 2. Between 0 and 2, g is the upper curve (test x = 1: 2 > 1). Area = ∫_0^2 (2x − x²) dx = [x² − ⅓x³]_0^2 = 4 − 8/3 = 4/3.

## Example 5 — volume about the x-axis

The region under f(x) = √x from 0 to 4 rotates about the x-axis. Compute the exact volume.

**Solution.** V = π ∫_0^4 (√x)² dx = π ∫_0^4 x dx = π[½x²]_0^4 = 8π. (This is a paraboloid; note the root disappears — the classic trap is forgetting to square.)

## Example 6 — volume about the y-axis

The region bounded by y = √x, the y-axis and y = 2 rotates about the y-axis. Compute the exact volume.

**Solution.** Solve for x: y = √x ⇔ x = y², bounds y from 0 to 2. V = π ∫_0^2 (y²)² dy = π ∫_0^2 y⁴ dy = π[⅕y⁵]_0^2 = 32π/5.

## Example 7 — variable limit

g(p) = ∫_1^p (2/x + 1) dx for p > 0.

a. Give the rule of g(p).

b. Compute g′(p) without using your answer in a; check consistency.

c. For the related function h(p) = ∫_1^p 2/x dx, solve exactly: h(p) = 5.

**Solution.** a. g(p) = [2 ln x + x] from 1 to p = 2 ln p + p − (0 + 1) = 2 ln p + p − 1. b. g′(p) = 2/p + 1 = the integrand at p, as the theory of variable limits says; differentiating a confirms it: (2 ln p + p − 1)′ = 2/p + 1 ✓. c. h(p) = 2 ln p, so 2 ln p = 5 ⇔ ln p = 5/2 ⇔ p = e^(5/2) (≈ 12.18). A mixed equation like 2 ln p + p = 6 has no closed-form solution in school mathematics — exam questions are designed so the exact route works, as in c.
