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
