# B4 — Exponential and logarithmic functions: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. The exponential function

- f(x) = aˣ with base (*grondtal*) a > 0: the variable sits in the **exponent** (in a power function it sits in the base).
- Shape: always positive, through (0, 1). For a > 1: increasingly increasing (*toenemend stijgend*), with horizontal asymptote y = 0 as x → −∞. For 0 < a < 1: decreasingly decreasing (*afnemend dalend*), with asymptote y = 0 as x → ∞. For a = 1 the constant function 1 (degenerate).
- Shifts move the asymptote: f(x) = 3 + 2ˣ has asymptote y = 3 and range y > 3.

## 2. Growth formulas

- N(t) = b · gᵗ: exponential growth with initial value b (value at t = 0) and growth factor (*groeifactor*) g per unit of time. Growth factor g means +100(g − 1)% per unit: g = 1.07 is +7% per period; g = 0.83 is −17% per period.
- Converting to another time unit works by *powering*: growth factor g per day is g³⁰ per month (30 days) and g^(1/7) per 1/7-day... i.e. per hour it is g^(1/24). Percentage changes convert through the factor, never directly (7% per day is *not* 0.29% per hour).
- Doubling time (*verdubbelingstijd*) for g > 1: solve gᵗ = 2 → t = ᵍlog(2). Halving time (*halveringstijd*) for 0 < g < 1: solve gᵗ = ½ → t = ᵍlog(½).
- Applications: interest and savings, radioactive decay (half-life), cell division, cooling (approaches room temperature exponentially when written as T − T_room).

## 3. e and ln

- The number e ≈ 2.718282 is the natural base of continuous growth; the natural logarithm (*natuurlijke logaritme*) ln(x) = ᵉlog(x).
- Inverse pair: eˣ = y ⇔ x = ln(y). Memorise: ln(1) = 0, ln(e) = 1.
- The function eˣ has derivative eˣ — the reason e is "natural" (see [B07](../B07-differentiation/)).

## 4. The logarithmic function

- l(x) = ᵍlog(x) with g > 0, g ≠ 1 is the inverse of gˣ: y = ᵍlog(x) ⇔ gʸ = x. log(x) without base means ¹⁰log(x).
- Special values: ᵍlog(1) = 0, ᵍlog(g) = 1, ᵍlog(gⁿ) = n. So ²log(32) = 5 (2⁵ = 32), ln(e³) = 3.
- Graph: domain x > 0, vertical asymptote x = 0; decreasingly increasing (*afnemend stijgend*) for g > 1; decreasingly decreasing for 0 < g < 1. It grows without bound but arbitrarily slowly.
- Bringing the argument up in front for scaling: ᵍlog(x) of a transformed argument follows the rules below.

## 5. The logarithm rules

From the power rules (write a = g^u, b = g^v and track the exponents):

- Sum: ᵍlog(a) + ᵍlog(b) = ᵍlog(a·b).
- Difference: ᵍlog(a) − ᵍlog(b) = ᵍlog(a/b).
- Power: ᵍlog(aⁿ) = n · ᵍlog(a) for **all** n (also fractions: log(√a) = ½ log a).
- Change of base: ᵍlog(a) = ᵖlog(a) / ᵖlog(g) — the calculator rule, usually with p = 10 or p = e.

Combining: ²log(6) + ²log(10) − ²log(15) = ²log(60/15) = ²log(4) = 2.

## 6. Solving equations

- Solution strategy: rewrite the equation to a single log or a single power, then invert.
- Exponential: gˣ = a ⇔ x = ᵍlog(a) — exact if a = gⁿ; otherwise x = ln(a)/ln(g), rounded as asked.
- First isolate the power: 2 · 3ˣ = 7 ⇔ 3ˣ = 7/2 ⇔ x = ³log(7/2).
- Logarithmic: ᵍlog(x) = a ⇔ x = gᵃ; watch the domain x > 0 for every log in the equation.
- Equations like ³log(x) + ³log(x + 2) = 1: combine to ³log(x(x+2)) = 1 ⇔ x² + 2x = 3 ⇔ x = 1 or x = −3; the domain x > 0 kills x = −3.
- Mixed with substitution: 4ˣ − 5·2ˣ + 4 = 0 ⇔ (2ˣ)² − 5·2ˣ + 4 = 0; with y = 2ˣ: y = 1 or y = 4, so x = 0 or x = 2.
- Isolating from log formulas: ᵍlog(N) = at + b ⇔ N = g^(at+b) = gᵇ·(gᵃ)ᵗ, an exponential formula N = B·Gᵗ with B = gᵇ and G = gᵃ. And ᵍlog(N) = a + b·ᵍlog(t) ⇔ N = gᵃ·tᵇ, a power formula N = A·tᵇ with A = gᵃ.

## Worked examples

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
