# A1 — Numbers and algebra: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. In the exam all computation is algebraic: leave answers exact (fractions, roots) unless a rounding is asked.

## 1. Percentages and scientific notation

- Percentage change: (new − old)/old × 100%. New from percentage: new = old × (1 ± p/100). Backwards: old = new / (1 ± p/100) — do not just subtract the percentage of the *new* price.
- Chain percentage changes multiply: +10% then −10% gives ×1.10 × 0.90 = 0.99, a 1% loss.
- Scientific notation (*wetenschappelijke notatie*): a × 10ⁿ with 1 ≤ a < 10. 0.0000123 = 1.23 × 10⁻⁵; 4.7 million = 4.7 × 10⁶. Calculators show 1.23ᴱ−5.

## 2. Fractions and ratios

- Add via the common denominator: 2/3 + 3/4 = 8/12 + 9/12 = 17/12. Multiply: numerators × numerators. Divide: multiply by the reciprocal. Simplify before computing when you can cross-cancel.
- Ratio table (*verhoudingstabel*): equal ratios give equal cross products: if 5 muffins cost €3.75, then 1 costs €0.75 and 12 cost €9. Cross-multiplying is the same idea for equations: A/B = C/D ⇔ AD = BC (with BD ≠ 0).
- Keep exact fractions as long as possible; convert to decimals only at the end.

## 3. Variables and brackets

- Expand: (a + b)(c + d) = ac + ad + bc + bd. Watch signs with a minus before brackets: −(e − f) = −e + f.
- Isolate a variable: y = 1/(x + 1) ⇔ x + 1 = 1/y ⇔ x = 1/y − 1 (valid for y ≠ 0, x ≠ −1).
- Substitute formulas with **brackets**: if r = p·q and p = 50 − 2q, then r = (50 − 2q)·q = 50q − 2q².

## 4. Units

- Convert between rates by multiplying by 1 in disguise: 12 km per 5 minutes = 2.4 km/min = 40 m/s = 144 km/h (× 1000/1000 and × 60/60 consciously).
- Check plausibility: a car doing 900 km/h signals a unit slip.

## 5. Powers and roots

- aⁿ: base a, exponent n (rational in this syllabus). Special cases: a¹ = a; a⁰ = 1 (a ≠ 0); a⁻ⁿ = 1/aⁿ; a^(1/n) = ⁿ√a, with a ≥ 0 for even n (then also ⁿ√a ≥ 0).
- Rules: aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; (ab)ⁿ = aⁿbⁿ; (a/b)ⁿ = aⁿ/bⁿ. Trap: (a + b)² ≠ a² + b².
- Write roots as powers: √x = x^(1/2), 1/x³ = x⁻³. It unifies everything into one rule set.

## 6. Standard equations

- Linear: collect x on one side: 5x − 3 = 2x + 6 ⇔ 3x = 9 ⇔ x = 3.
- Quadratic: ax² + bx + c = 0. Factor when you see the pattern; otherwise the abc-formula from the *formula sheet*: x = (−b ± √(b² − 4ac))/(2a).
- Power equations: xⁿ = a. n odd → one solution x = ⁿ√a. n even → x = ±ⁿ√a, only for a ≥ 0. Otherwise x = a^(1/n) (a ≥ 0).
- Root equations: √x = a ⇔ x = a², conditions x ≥ 0, a ≥ 0. After squaring, always check candidates in the original equation.
- Splitting: A·B = 0 ⇔ A = 0 ∨ B = 0. A² = B² ⇔ A = ±B. A·B = A·C ⇔ A = 0 ∨ B = C. Never divide by something that could be 0: x² = 3x gives x = 0 or x = 3 by factoring — dividing by x would lose x = 0.

## 7. Inequalities

- Solve f(x) ≤ g(x): first solve f = g exactly, then read the answer from a sketch or sign chart. x² < 9 ⇔ −3 < x < 3 (parabola below the line between its zeros).
- Multiplying by a negative number reverses the sign: −2x > 8 ⇔ x < −4.

## 8. Systems and cross-multiplication

- Systems of two linear equations: eliminate or substitute; check both equations at the end.
- Cross-multiplication: A/B = C/D ⇔ AD = BC with BD ≠ 0. Example: (x + 1)/(x − 2) = 3 ⇔ x + 1 = 3x − 6 ⇔ x = 7/2.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — percentage both ways

A jacket costs €96 after a 20% discount. What was the original price? And if the original price later rises 25%, what happens?

**Solution.** old × 0.80 = 96 ⇔ old = 96/0.80 = €120. A 25% rise from €120: 120 × 1.25 = €150. (Net effect of −20% then +25% on the original: 0.80 × 1.25 = 1.00, back to €120 — percentages multiply, they don't cancel by adding.)

### Example 2 — fractions as a ratio

An iv line delivers 480 mL in 4 hours. How many mL per minute, and how long for 300 mL?

**Solution.** 480/240 min = 2 mL/min. 300/2 = 150 minutes (2½ hours).

### Example 3 — isolating and substituting

Revenue R = p·q (price × quantity). Given p = 120 − 3q, express R as a function of q and find the production with maximal revenue axis position (the value of q at the vertex).

**Solution.** R(q) = (120 − 3q)q = −3q² + 120q: a *bergparabool*, vertex at q = −120/(2·(−3)) = 20. Maximal revenue at q = 20 (R = 1200; price then 60).

### Example 4 — power equation types

Solve: (a) x³ = −27; (b) x⁴ = 81; (c) x² = −9.

**Solution.** (a) odd exponent: x = −3. (b) even exponent: x = ±3 (81 ≥ 0). (c) no solution (x² ≥ 0).

### Example 5 — root equation with a check

Solve: √(x + 5) = x − 1.

**Solution.** Need x ≥ 1. Square: x + 5 = x² − 2x + 1 ⇔ x² − 3x − 4 = 0 ⇔ (x − 4)(x + 1) = 0 ⇔ x = 4 or x = −1. Only x = 4 survives the domain: √9 = 3 = 4 − 1 ✓.
