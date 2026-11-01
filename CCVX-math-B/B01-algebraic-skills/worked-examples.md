# B1 — Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original, written for this prep.

## Example 1 — a root equation

Solve exactly: x − √(x + 7) = 5.

**Solution.** Isolate the root: √(x + 7) = x − 5. Squaring needs both sides ≥ 0, so require x ≥ 5. Square: x + 7 = (x − 5)² = x² − 10x + 25 ⇔ x² − 11x + 18 = 0 ⇔ (x − 2)(x − 9) = 0 ⇔ x = 2 or x = 9. The condition x ≥ 5 leaves x = 9. Check: 9 − √16 = 9 − 4 = 5. ✓

## Example 2 — an exponential equation, exact

Solve exactly: 2 · 3ˣ⁻¹ = 54 − 3ˣ.

**Solution.** Bring the powers together: 2 · 3ˣ⁻¹ = (2/3)·3ˣ, so (2/3)·3ˣ + 3ˣ = (5/3)·3ˣ = 54 ⇔ 3ˣ = 162/5. That is not a power of 3, so finish with a logarithm: x = ³log(162/5) = ln(162/5)/ln(3) ≈ 3.17.

When the numbers are chosen so the powers collect to an exact power — for example 3ˣ⁻¹ + 3ˣ = 12, which gives (4/3)·3ˣ = 12, so 3ˣ = 9 and x = 2 — you leave the answer exact; otherwise a logarithm with a rounded value is the right ending.

## Example 3 — a system with a context

A stall sells tulips at €2.50 each and roses at €4 each. Mara buys 12 flowers for €39. How many of each?

**Solution.** Let t tulips and r roses. t + r = 12 and 2.5t + 4r = 39. From the first, r = 12 − t. Substitute: 2.5t + 4(12 − t) = 39 ⇔ −1.5t + 48 = 39 ⇔ t = 6, r = 6. Check: 6 × 2.50 + 6 × 4 = 15 + 24 = 39. ✓ She buys 6 tulips and 6 roses.

## Example 4 — parameter: touching parabola and line

For which value of p does the line y = 2x + p touch the parabola y = x² + 3x?

**Solution.** Touching means one intersection with equal derivatives (or D = 0). Route via D: x² + 3x = 2x + p ⇔ x² + x − p = 0, D = 1 + 4p = 0 ⇔ p = −¼. Route via derivatives: slopes are equal: 2x + 3 = 2 ⇔ x = −½, and f(−½) = ¼ − 3/2 = −5/4 must equal 2(−½) + p ⇔ p = −¼. Both give p = −¼.

## Example 5 — isolate a variable

The pendulum formula is T = 2π√(L/g). Express L in terms of T and g.

**Solution.** T/2π = √(L/g) ⇔ L/g = (T/2π)² ⇔ L = gT²/(4π²).
