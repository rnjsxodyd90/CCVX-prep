# B6 — Trigonometric functions: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Angles are in **radians** unless stated otherwise.

## 1. The standard graphs

- f(x) = sin(x) and g(x) = cos(x): sinusoids (*sinusoïden*), period 2π, range [−1, 1].
- sin starts at (0,0) rising; cos starts at its maximum (0, 1).
- Maxima: sin(x) = 1 at x = ½π + k·2π; cos(x) = 1 at x = 0 + k·2π. Minima: sin(x) = −1 at x = −½π + k·2π; cos(x) = −1 at x = π + k·2π.
- Zeros: sin(x) = 0 at x = k·π; cos(x) = 0 at x = ½π + k·π. Here k ∈ ℤ (any integer).

## 2. Symmetry and translations

From the unit circle (useful for solving equations):

- sin(x) = sin(π − x): sine values repeat mirrored in ½π.
- cos(x) = cos(−x): cosine is an even function.
- −sin(x) = sin(−x) = sin(π + x): sine is odd and changes sign over half a period.
- −cos(x) = cos(π − x) = cos(π + x).
- Horizontal translations by ½π swap sine and cosine: sin(x) = cos(x − ½π) and cos(x) = sin(x + ½π).

## 3. The general sinusoid

f(x) = A + B · sin(C(x − D)):

- A = equilibrium level (*evenwichtsstand*): the vertical mid-line, (max + min)/2.
- |B| = amplitude: (max − min)/2.
- C = 2π/period: the horizontal "speed factor".
- D = x-coordinate of the starting point (*beginpunt*): for B > 0 the graph **rises** through the equilibrium at (D, A); for B < 0 it falls through it there.

Reading from a graph: A and |B| from the extreme values, C from the period, D from a rising/falling equilibrium crossing. Building from data: same four numbers in reverse. Same for cos, but then the natural anchor is a maximum at (D, A + B).

Equation form f(x) = A + B sin(Cx + E) is also common; then D = −E/C.

## 4. Harmonic oscillation

u = a · sin(2π/T · t): amplitude a, period T (*trillingstijd*), frequency f = 1/T (*frequentie*, in Hz if t in seconds). Phase relations tell you when maxima and zeros occur: zeros each T/2, extremes each T/2 shifted by T/4.

## 5. Solving equations

- sin(x) = c and cos(x) = c:
  - No solution when |c| > 1.
  - One standard value: if c = 0, ±½, ±½√2, ±½√3, ±1, find one solution A from the exact table ([B05](../B05-trigonometry/notes.md#3-exact-values)); otherwise A = sin⁻¹(c) or cos⁻¹(c) on the calculator.
  - All solutions with k ∈ ℤ:
    - sin(x) = sin A ⇔ x = A + k·2π or x = π − A + k·2π;
    - cos(x) = cos A ⇔ x = ±A + k·2π.
- Composite arguments: first solve for the argument, then divide, **and only then** list a whole interval: for sin(2x − ⅓π) = ½ on [0, 2π], let u = 2x − ⅓π; u ∈ [−⅓π, 4π − ⅓π]; find all u, then x = (u + ⅓π)/2.
- Reducing to standard form with identities (formula sheet): cos(2x) = cos x → 2cos²x − 1 = cos x; sin(2x) = sin x → 2 sin x cos x = sin x, then split (never divide by sin x!).
- Mixed factors: sin x · cos x = ½ cos x ⇔ cos x (sin x − ½) = 0.

## 6. Periodic phenomena

Typical contexts: tides and water levels, day length over the year, temperature cycles, rotating wheels (a valve on a wheel), alternating voltage, pendulums. The exam asks to:

- set up the formula from a description (find A, B, C, D from the text);
- compute times within one period at a given level (solve f(t) = level on the right interval);
- interpret periodicity with insight: solutions repeat per period — give all solutions in the asked window by adding/subtracting the period.

## Worked examples

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
