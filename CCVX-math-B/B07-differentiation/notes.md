# B7 — Differentiation: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Standard functions

Memorise; they are **not** on the formula sheet:

| f(x) | f′(x) |
|---|---|
| c (constant) | 0 |
| xᵃ | a·xᵃ⁻¹ (any rational a) |
| aˣ (a > 0) | aˣ·ln(a) |
| eˣ | eˣ |
| ln(x) | 1/x |
| ᵍlog(x) | 1/(x·ln g) |
| sin(x) | cos(x) |
| cos(x) | −sin(x) |

Notes:

- The power rule covers roots and fractions: √x = x^(1/2) → ½x^(−1/2) = 1/(2√x); 1/x = x⁻¹ → −x⁻².
- f(x) = aˣ uses ln(a): 2ˣ → 2ˣ ln 2. The special base e has ln e = 1, leaving eˣ → eˣ.
- The logarithm rule follows from changing base: ᵍlog(x) = ln(x)/ln(g) = (1/ln g)·ln x.
- Notations: f′(x), dy/dx, d/dx f(x) — all mean the derivative (*afgeleide*).

Preparation is half the work: expand brackets, split fractions into single terms (e.g. (x² + 3x)/x = x + 3 for x ≠ 0) and write roots as powers before differentiating.

## 2. The rules for combinations

- Constant factor (*constante factorregel*): (c·f)′ = c·f′. Example: (5x³)′ = 15x².
- Sum/difference (*somregel*): (f ± g)′ = f′ ± g′.
- Product (*productregel*): for p(x) = f(x)·g(x): p′ = f′·g + f·g′. Example: (x²·eˣ)′ = 2x eˣ + x² eˣ = eˣ(x² + 2x).
- Quotient (*quotiëntregel*): for q = f/g: q′ = (f′·g − f·g′)/g². Example: tan x = sin x/cos x: (cos x·cos x − sin x·(−sin x))/cos²x = 1/cos²x = 1 + tan²x.
- Chain (*kettingregel*): for k(x) = f(g(x)): k′(x) = f′(g(x))·g′(x), or dk/dx = df/dg · dg/dx. "Derivative of the outside (at the inside) times derivative of the inside."

Chain-rule workhorses:

- (ax + b)ⁿ → a·n(ax + b)ⁿ⁻¹. Example: (3x − 1)⁴ → 12(3x − 1)³.
- e^(g(x)) → g′(x)·e^(g(x)). Example: e^(x²) → 2x e^(x²).
- sin(cx) → c cos(cx); cos(cx) → −c sin(cx).
- ln(g(x)) → g′(x)/g(x). Example: ln(x² + 1) → 2x/(x² + 1).
- √(g(x)) → g′(x)/(2√(g(x))).

## 3. Second derivative

- Differentiate twice: f″ = (f′)′. Interpretation: the *change of the slope*; used for inflection points and convexity ([B08](../B08-function-investigation/)).
- Example: f(x) = x⁴ − 6x² gives f′ = 4x³ − 12x, f″ = 12x² − 12.
- For products/chains, the second derivative typically needs the product rule again: (x² eˣ)″ = (eˣ(x²+2x))′ = eˣ(2x+2) + eˣ(x²+2x) = eˣ(x² + 4x + 2).

## 4. The tangent line

- f′(a) is the slope (*helling*) of the tangent (*raaklijn*) at (a, f(a)) — the richtingscoëfficiënt, equal to tan(richtingshoek).
- Tangent line at x = a: compute y₀ = f(a) and slope m = f′(a); the line is y = m(x − a) + y₀, expanded to y = mx + n with n = y₀ − m·a.
- Normal line at x = a (often asked): slope −1/m through the same point.
- **Exact** work expected: slopes like 2e or ½√2 as final answers, not decimals.

## Worked examples

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
