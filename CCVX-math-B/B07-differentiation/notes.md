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
