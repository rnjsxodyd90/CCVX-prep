# A5 — Logarithms: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. The definition

- ᵍlog(x) answers: "to what power must g be raised to get x?": y = ᵍlog(x) ⇔ gʸ = x. With g > 0, g ≠ 1 and x > 0.
- log(x) without a base means ¹⁰log(x); ln(x) means ᵉlog(x) (calculator keys LOG and LN).
- Special values: ᵍlog(1) = 0 (g⁰ = 1); ᵍlog(g) = 1; ᵍlog(gⁿ) = n. Quick checks: ²log(1/8) = −3 (2⁻³ = ⅛); ³log(9) = 2; log(1000) = 3.
- Not defined for x ≤ 0 — ever. Check the domain in every equation.

## 2. The graph of y = ᵍlog(x)

- Domain x > 0; the y-axis (x = 0) is the vertical asymptote: as x ↓ 0, y → −∞ for g > 1 (as x approaches 0, the graph approaches the y-axis).
- Base point: every logarithmic graph passes through (1, 0) — and (g, 1).
- g > 1: increasing (slowly!); 0 < g < 1: decreasing.
- It is the mirror image of y = gˣ in the line y = x (they are inverse functions).

## 3. The rules (formula sheet)

- Sum: ᵍlog(a) + ᵍlog(b) = ᵍlog(a·b).
- Difference: ᵍlog(a) − ᵍlog(b) = ᵍlog(a/b).
- Power: ᵍlog(aᵖ) = p·ᵍlog(a). Consequence: log(√a) = ½ log a; log(1/a) = −log a.
- Base change: ᵍlog(a) = ᵖlog(a)/ᵖlog(g) — calculator use with p = 10: x = ³log(20) = log(20)/log(3) ≈ 2.727.
- Reverse use (combining into one log): 2·log(x) − log(3) = log(x²/3).

## 4. Solving logarithmic equations

- Route: combine into ONE logarithm equal to a number, then invert: ᵍlog(x) = a ⇔ x = gᵃ.
- log(x) + log(x + 6) = 1 (base 10): log(x(x+6)) = 1 ⇔ x² + 6x = 10 ⇔ x² + 6x − 10 = 0 ⇔ x = −3 ± √19; the domain x > 0 keeps only x = −3 + √19 ≈ 1.36.
- Exponential equations are the mirror: gˣ = a ⇔ x = ᵍlog(a) — see [A04](../A04-exponential-growth/) for growth context.
- Mixed sums with different logs of the same base combine fine; with different bases, first change base.

## 5. Formulas with logarithms

- Isolate variables: pH = −log([H⁺]) ⇔ [H⁺] = 10^(−pH). Sound level L = 10·log(I/I₀) ⇔ I = I₀·10^(L/10).
- Always make the logarithm the "innermost" step first: from ᵍlog(X) = Y follows gʸ = X.

## 6. The two conversion forms (syllabus algebra skill)

- ᵍlog(N) = at + b ⇔ N = g^(at+b) = gᵇ·(gᵃ)ᵗ = B·Gᵗ with B = gᵇ and G = gᵃ — an exponential-growth relation in disguise (semi-log straight line).
- ᵍlog(N) = a + b·ᵍlog(t) ⇔ N = gᵃ·tᵇ = A·tᵇ with A = gᵃ — a power relation (straight line on a log-log plot).
- Both directions are exam material: forward (prove it is exponential/power by obtaining the log-linear form) and backward (convert the given log-linear formula to the direct one).

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — exact values

Compute exactly: (a) ⁵log(25); (b) log(0.01); (c) ²log(√2).

**Solution.** (a) 5² = 25, so 2. (b) 10⁻² = 0.01, so −2. (c) 2^(1/2) = √2, so ½.

### Example 2 — combining

Write as a single logarithm: 2·³log(4) − ³log(2) + 1.

**Solution.** ³log(16) − ³log(2) = ³log(8); and 1 = ³log(3), so the total is ³log(8) + ³log(3) = ³log(24).

### Example 3 — base change on the calculator

Compute ⁷log(100) to 3 decimals.

**Solution.** ⁷log(100) = log(100)/log(7) = 2/0.845098 ≈ 2.367.

### Example 4 — solving with a domain check

Solve: log(x + 3) + log(x) = 1 (base 10).

**Solution.** log(x(x + 3)) = 1 ⇔ x² + 3x = 10 ⇔ x² + 3x − 10 = 0 ⇔ (x + 5)(x − 2) = 0 ⇔ x = 2 or x = −5. Domain x > 0 leaves x = 2. Check: log 5 + log 2 = log 10 = 1 ✓.

### Example 5 — from log-linear to a power relation

Suppose ¹⁰log(N) = 2 + 0.75·¹⁰log(t). Show N is a power function of t.

**Solution.** N = 10^(2 + 0.75·log t) = 10²·(10^(log t))^0.75 = 100·t^0.75. A power relation with exponent 0.75.
