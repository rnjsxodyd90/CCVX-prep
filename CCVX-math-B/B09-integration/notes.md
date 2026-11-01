# B9 — Integration: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Antiderivatives

- F is an antiderivative (*primitieve*) of f when F′(x) = f(x). Antiderivatives differ by a constant, so we write F(x) + C. The "indefinite integral" ∫ f(x) dx = F(x) + C.
- Always check by differentiating: the fastest error-killer in integration.

## 2. Standard antiderivatives

| f(x) | F(x) | condition |
|---|---|---|
| c | cx + C | |
| xᵃ | xᵃ⁺¹/(a + 1) + C | a ≠ −1 |
| eˣ | eˣ + C | |
| 1/x | ln|x| + C | for x < 0: ln(−x) + C |
| sin(x) | −cos(x) + C | |
| cos(x) | sin(x) + C | |

Roots and fractions go through the power rule: ∫√x dx = ∫x^(1/2) dx = ⅔x^(3/2); ∫1/x² dx = ∫x⁻² dx = −x⁻¹. aˣ integrates to aˣ/ln(a) (chain check: (aˣ/ln a)′ = aˣ ln a/ln a = aˣ ✓).

## 3. Combination rules

- Constant factor: ∫ c·f(x) dx = c·F(x).
- Sum/difference: integrate term by term.
- Simple chain rule (*eenvoudige kettingregel*): ∫ f(ax + b) dx = (1/a)·F(ax + b) + C — the inner function must be linear. Example: ∫ e^(2x + 1) dx = ½e^(2x+1); ∫ cos(3x) dx = ⅓ sin(3x); ∫ (4x − 1)⁵ dx = (1/4)·(4x−1)⁶/6 = (4x−1)⁶/24.

## 4. Definite integrals

- ∫_a^b f(x) dx = F(b) − F(a). Write intermediate steps as [F(x)] with the bounds, e.g. ∫_0^2 x² dx = [⅓x³] from 0 to 2 = 8/3 − 0 = 8/3.
- Splitting: ∫_a^b = ∫_a^c + ∫_c^b (needed for functions with case definitions or |·|).
- The sign matters: where f < 0 the integral is negative.

## 5. Area between graph and x-axis

- Region bounded by x = a, the x-axis, x = b and the graph of f ≥ 0: area = ∫_a^b f(x) dx.
- If the graph dips below the x-axis, split at the zeros: area = ∫ (positive part) − ∫ (negative part), or integrate |f|. Sketch first.
- If the boundaries are intersection points, compute them algebraically first.

## 6. Area between two graphs

- With upper function f and lower function g on [a, b]: area = ∫_a^b (f(x) − g(x)) dx. The x-axis position is irrelevant; subtracting removes it.
- Find a and b by solving f(x) = g(x) exactly.

## 7. Volumes of revolution

- About the x-axis: V = π ∫_a^b y² dx with y = f(x). Expand y² before integrating.
- About the y-axis: V = π ∫_c^d x² dy with x = f⁻¹(y): solve for x, square, integrate over the *y*-bounds.
- Sanity checks: rotating f(x) = r about the x-axis on [0, h] gives π r² h (cylinder ✓); rotating y = (r/h)x gives ⅓π r² h (cone ✓).

## 8. Variable limits

- g(p) = ∫_1^p f(x) dx = F(p) − F(1). This defines g as a function of p. Direct consequence: g′(p) = f(p). Example: g(p) = ∫_1^p 1/x dx = ln(p); then g′(p) = 1/p ✓.
- Equations with variable limits: solve F(p) − F(1) = given value for p.

## Worked examples

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
