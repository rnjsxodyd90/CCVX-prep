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
