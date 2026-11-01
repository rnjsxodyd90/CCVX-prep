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
