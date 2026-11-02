# A6 — Differentiation: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. The rules you need beyond the standard table are printed on the formula sheet — but the standard derivatives themselves are not; know them by heart.

## 1. Standard derivatives

| f(x) | f′(x) | remark |
|---|---|---|
| c (constant) | 0 | constant term vanishes |
| ax (+ b) | a | a line's slope is itself |
| a·xⁿ | n·a·xⁿ⁻¹ | also for fractional/negative n |
| eˣ | eˣ | the special base |
| gˣ | gˣ·ln(g) | ln(g) logs along |
| ln(x) | 1/x | |
| ᵍlog(x) | 1/(x·ln g) | constant factor 1/ln g dropping out of ln |

- Write roots and fractions as powers first: √x = x^(1/2) → ½x^(−1/2) = 1/(2√x); 1/x⁴ = x⁻⁴ → −4x⁻⁵.
- The power rule works for every real n, including n = ½ and n = −1.

## 2. The rules

- Constant factor (*constante factorregel*): (c·f)′ = c·f′. It implies the linear case: (ax + b)′ = a.
- Sum/difference (*somregel*): differentiate term by term.
- Product (*productregel*, formula sheet): p = f·g → p′ = f′·g + f·g′. Not "differentiate both factors and multiply" — the classic error.
- Quotient (*quotiëntregel*, formula sheet): q = f/g → q′ = (f′·g − f·g′)/g². Numerator order matters: it starts with f′.
- Chain (*kettingregel*, formula sheet): k(x) = f(g(x)) → k′(x) = f′(g(x))·g′(x), i.e. dk/dx = df/dg · dg/dx.

## 3. The chain rule in its exam-limited form

The syllabus uses the chain rule only for k(x) = f(g(x)) with f and g *single* standard functions. Benchmark examples to recognise instantly:

- k(x) = √(3x + 2): f = √u, g = 3x + 2 → k′ = 3/(2√(3x + 2)).
- k(x) = e^(−0.5x): → −0.5 e^(−0.5x).
- k(x) = ln(2x): → (1/(2x))·2 = 1/x (consistent with ln(2x) = ln 2 + ln x ✓).
- k(x) = (2x + 1)³: → 3(2x + 1)²·2 = 6(2x + 1)².
- k(x) = 1/(x + 4): write (x + 4)⁻¹ → −(x+4)⁻² = −1/(x + 4)².

## 4. Preparing before differentiating

- Split sums of fractions into single terms: (3x² + x)/x = 3x + 1 (for x ≠ 0) — then no quotient rule needed.
- Expand compact products if the product rule would be messier: x²(1 + 2x) = x² + 2x³.
- Check the necessity: 3x⁴ − 2x² + 5 is a plain polynomial — power and sum rules only.

## 5. The derivative as slope

- f′(a) is the slope (*helling*, richtingscoëfficiënt) of the tangent line (*raaklijn*) at (a, f(a)).
- Tangent line at x = a: slope f′(a) through (a, f(a)); equation y = f′(a)·(x − a) + f(a), tidied to y = mx + n.
- Approximation: near x = a, f(a + h) ≈ f(a) + h·f′(a) — the tangent as local linear model.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — prepare, then differentiate

Differentiate f(x) = (x³ − 2x² + x)/x + 4/x² (x > 0).

**Solution.** Prepare: (x³ − 2x² + x)/x = x² − 2x + 1 and 4/x² = 4x⁻². So f(x) = x² − 2x + 1 + 4x⁻², and f′(x) = 2x − 2 − 8x⁻³ = 2x − 2 − 8/x³.

### Example 2 — product rule

Differentiate f(x) = x²·ln(x), and compute f′(e) exactly.

**Solution.** f′ = 2x·ln(x) + x²·(1/x) = 2x ln x + x = x(2 ln x + 1). At x = e: f′(e) = e(2·1 + 1) = 3e.

### Example 3 — quotient rule

Differentiate q(x) = (2x − 1)/(x + 3).

**Solution.** q′ = (2·(x + 3) − (2x − 1)·1)/(x + 3)² = (2x + 6 − 2x + 1)/(x + 3)² = 7/(x + 3)².

### Example 4 — chain rule in the limited form

Differentiate: (a) k(x) = e^(2x − 1); (b) m(x) = ³log(5x).

**Solution.** (a) Chain rule: k′(x) = 2·e^(2x − 1). (b) Standard derivative directly: m′(x) = 1/(x ln 3). Cross-check with the chain rule: ln(5x) differentiates to 5/(5x) = 1/x, and ³log is just (1/ln 3)·ln, so both routes give the same answer — the inner factor 5 cancels, as it should, since ln(5x) = ln 5 + ln x.

### Example 5 — tangent line

Give the tangent line to f(x) = x³ − 3x + 2 at x = 2.

**Solution.** f(2) = 8 − 6 + 2 = 4. f′(x) = 3x² − 3, so f′(2) = 9. Tangent: y = 9(x − 2) + 4 = 9x − 14.
