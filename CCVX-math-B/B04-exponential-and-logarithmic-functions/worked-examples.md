# B4 — Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — growth factor and percentage

A car worth €24 000 loses 12% of its value each year.

a. Give the formula for the value V after t years.

b. Compute the value after 5 years (rounded to euros).

**Solution.** a. −12% per year gives growth factor g = 0.88, so V(t) = 24 000 · 0.88ᵗ. b. V(5) = 24 000 · 0.88⁵ ≈ 24 000 · 0.5277 ≈ €12 665.

## Example 2 — halving time, exact and rounded

The amount of a medicine in the blood decays with A(t) = 400 · (0.6)ᵗ (mg, t in hours). Compute the halving time, and the time until 50 mg remains (1 decimal).

**Solution.** Halving: (0.6)ᵗ = ½ ⇔ t = ⁰·⁶log(½) = ln(½)/ln(0.6) ≈ 1.357 ≈ 1.4 hours. 50 mg: 0.6ᵗ = ⅛ ⇔ t = ln(⅛)/ln(0.6) = 3 ln(½)/ln(0.6) ≈ 4.1 hours — exactly three halving times, as it should be (400 → 200 → 100 → 50).

## Example 3 — converting time units

A colony grows 15% per hour. What is the growth factor per minute, and per day?

**Solution.** Per hour g = 1.15. Per minute: 1.15^(1/60) ≈ 1.00233 (about +0.233% per minute — not 15/60 = 0.25%!). Per day: 1.15²⁴ ≈ 28.6.

## Example 4 — combining logs

Write as a single logarithm and simplify exactly: ³log(4) + ³log(6) − ³log(8/3).

**Solution.** ³log(4 · 6 / (8/3)) = ³log(24 · 3/8) = ³log(9) = 2. Check: ³log 9 = 2 since 3² = 9.

## Example 5 — log equation with a domain trap

Solve: ²log(x) + ²log(x − 2) = 3.

**Solution.** Domain: x > 2. Combine: ²log(x(x − 2)) = 3 ⇔ x² − 2x = 8 ⇔ x² − 2x − 8 = 0 ⇔ (x − 4)(x + 2) = 0 ⇔ x = 4 or x = −2. Only x = 4 lies in the domain. Check: ²log 4 + ²log 2 = 2 + 1 = 3 ✓.

## Example 6 — from log-linear to exponential form

A measurement satisfies log(N) = 1.6 + 0.25t (base 10). Write N as an exponential formula in t.

**Solution.** N = 10^(1.6 + 0.25t) = 10^1.6 · (10^0.25)ᵗ ≈ 39.8 · 1.778ᵗ. So the quantity grows by about 77.8% per unit of t, starting near 39.8.
