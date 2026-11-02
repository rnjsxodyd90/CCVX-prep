# A9 — Sine functions: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. In wiskunde A the emphasis is on recognising and reading sinusoids and using their symmetry; full equation-solving with arcsine is a wiskunde B topic — here the cases are readable from symmetry.

## 1. The four parameters

f(x) = A + B·sin(C·(x − D)):

- **A**: the equilibrium level (*evenwichtsstand*) — the mid-line of the wave: A = (max + min)/2.
- **|B|**: the amplitude — the distance from the equilibrium to an extreme: |B| = (max − min)/2. For B > 0 the graph rises through the equilibrium at the starting point; for B < 0 it falls through it.
- **C**: the horizontal scale factor: period = 2π/C, so C = 2π/period.
- **D**: the x-coordinate of the starting point (*beginpunt*) (D, A). For B > 0 the graph **rises** through (D, A); for B < 0 it falls through.

## 2. Reading a graph

1. Max and min → A and |B|.
2. One full wave length → period → C.
3. A rising equilibrium crossing → D (check the direction: falling means negative B or a different anchor). For a cosine-shaped graph, anchor on a maximum instead: max at x = d gives y = A + B·cos(C(x − d)) — often cleaner.

## 3. From formula to graph facts

Read straight from f(x) = A + B sin(C(x − D)): equilibrium A, amplitude |B|, period 2π/C, starting point (D, A) when B > 0. Max at D + ¼·period, min at D + ¾·period.

## 4. Symmetry

- Mirror symmetry about the vertical lines through each maximum and minimum.
- Point symmetry about every equilibrium crossing.
- Consequences used constantly: halfway between two successive maxima there is a minimum; if the graph crosses the equilibrium rising at x = a and falling at x = b, the maximum is halfway: x = (a + b)/2.
- The period gives copies: knowing one maximum at x = m lists all maxima at m + k·period.

## 5. Solving simple cases

- The syllabus cases to solve exactly are the symmetric ones: f(x) = A (equilibrium) — crossings at known symmetry spots; f(x) = max/min — extremes positions.
- "During one period, when is f above level L?": if L is the equilibrium or an extreme, answer exactly by symmetry; otherwise read from the graph, or solve algebraically in the clean instances (e.g. B sin(Cx) = 0, ±B).

## 6. Contexts

- Day length through the year: period 365 days, extremes mid-summer/winter.
- Tides: period ≈ 12 h 25 min ≈ 12.4 h.
- Seasonal temperature: daily or yearly period.
Setup recipe: from extremes take A, B; from the period take C; from a known normal/wave moment take D.

## Worked examples

Fully worked examples for the outcomes above. All examples are original. Angles in radians.

### Example 1 — from formula to facts

Given f(x) = 12 + 5 sin(π/6·(x − 3)): give the equilibrium, amplitude, period, range, starting point and the positions of the extreme values.

**Solution.** A = 12, B = 5, period = 2π/(π/6) = 12, range [7, 17], rising through (3, 12). Maximum at x = 3 + 3 = 6 (quarter period later), f = 17; minimum at x = 9, f = 7.

### Example 2 — from a description to a formula

A wheel's valve moves sinusoidally between heights 10 cm and 90 cm, with period 4 seconds, and is at its highest point at t = 0.

**Solution.** A = 50, B = 40, C = 2π/4 = π/2. Maximum at t = 0: anchor a cosine there: h(t) = 50 + 40 cos(π/2·t). Check: h(0) = 90 ✓; h(2) = 10 ✓.

### Example 3 — symmetry logic

A sinusoid rises through equilibrium at x = 2 and falls through it at x = 8.

a. Where is the maximum?

b. What is the period?

**Solution.** a. The maximum is halfway: x = (2 + 8)/2 = 5. b. Rising-crossing to next rising-crossing is one period; falling is half a period after rising: period = 2·(8 − 2) = 12.

### Example 4 — day length model

In a city the shortest day has 7.5 h daylight, the longest 16.5 h, with the longest on day 172 of the year.

a. Give a formula for the day length D(t) (t in days, period 365).

b. On which day is the length equal to the yearly average and increasing?

**Solution.** a. A = 12, B = 4.5, C = 2π/365. The graph rises through equilibrium a quarter period before the maximum: quarter period = 365/4 = 91.25, so D = 172 − 91.25 = 80.75. Formula: D(t) = 12 + 4.5·sin(2π·(t − 80.75)/365). b. The yearly average is the equilibrium 12 h; it is crossed while increasing at the starting point: t = 80.75, so during day 81 (and once a year after that: t = 80.75 + 365k).

### Example 5 — solving with symmetry

For f(x) = 3 sin(2x) on [0, π], give all x with f(x) = 3 and all x with f(x) = −3.

**Solution.** Maximum 3 when sin(2x) = 1: 2x = π/2 gives x = π/4; the next candidate, 2x = π/2 + 2π, gives x = 5π/4 > π, outside. Minimum −3 when sin(2x) = −1: 2x = 3π/2 gives x = 3π/4. So f = 3 at x = π/4 and f = −3 at x = 3π/4.
