# B6 — Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original. Angles in radians.

## Example 1 — building a sinusoid

A tide gauge shows a high of 3.4 m at t = 5 (hours) and a low of 0.8 m at t = 11; the motion is sinusoidal with period 12 h. Set up the formula for the water height h(t).

**Solution.** Equilibrium A = (3.4 + 0.8)/2 = 2.1; amplitude B = (3.4 − 0.8)/2 = 1.3; C = 2π/12 = π/6. The maximum is at t = 5. Rising through equilibrium happens a quarter period earlier: t = 5 − 3 = 2, so D = 2. Formula: h(t) = 2.1 + 1.3 sin(π/6 · (t − 2)). Check: t = 5 → sin(π/2) = 1 → 3.4 ✓; t = 11 → sin(3π/2) = −1 → 0.8 ✓.

## Example 2 — solving exactly

Solve on [0, 2π]: sin(2x) = ½.

**Solution.** Argument u = 2x ∈ [0, 4π]. sin u = ½ ⇔ u = π/6 + k·2π or u = 5π/6 + k·2π. Within [0, 4π]: u = π/6, 5π/6, 13π/6, 17π/6. So x = π/12, 5π/12, 13π/12, 17π/12.

## Example 3 — solving with the calculator

Solve on [0, 2π], 3 decimals: cos(x) = 0.7.

**Solution.** A = cos⁻¹(0.7) ≈ 0.7954. All solutions: x = ±0.7954 + k·2π; inside [0, 2π]: x ≈ 0.795 and x ≈ 2π − 0.795 ≈ 5.487.

## Example 4 — composite argument on an interval

Solve on [0, π]: sin(2x − ⅓π) = −½√2.

**Solution.** u = 2x − ⅓π ∈ [−⅓π, 2π − ⅓π] = [−⅓π, 5π/3]. sin u = −½√2 ⇔ u = −π/4 + k·2π or u = π + π/4 + k·2π = 5π/4 + k·2π. Inside the interval: u = −π/4 and u = 5π/4. Then x = (u + ⅓π)/2: x = (−π/4 + π/3)/2 = (π/12)/2 = π/24, and x = (5π/4 + π/3)/2 = (19π/12)/2 = 19π/24.

## Example 5 — sinusoid with B < 0

f(x) = 2 − 3 sin(4x + π). Give equilibrium, amplitude, period, and the x-values in [0, π] of the maxima and minima.

**Solution.** A = 2, amplitude 3 (= |−3|), period 2π/4 = π/2. Extremes where sin(4x + π) = ∓1: maximum of f when sin = −1: 4x + π = 3π/2 + k·2π ⇔ x = π/8 + k·π/2; in [0, π] this gives x = π/8 and x = 5π/8 (the next one, 9π/8 ≈ 3.53, falls outside). Minima of f when sin = 1: 4x + π = π/2 + k·2π ⇔ x = −π/8 + k·π/2; in [0, π]: x = 3π/8 and x = 7π/8.

## Example 6 — period of a repeated pattern

The light of a lighthouse flashes with the pattern "3 s on, 3 s off" twice, then "6 s on, 6 s off", repeating. Is this sinusoidal? What is the period?

**Solution.** A repeating on/off pattern is periodic but not sinusoidal — a sinusoid is the smooth A + B sin(C(x−D)) shape. The pattern repeats every 3 + 3 + 3 + 3 + 6 + 6 = 24 s: period T = 24 s.
