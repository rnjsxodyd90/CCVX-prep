# B6 — Trigonometric functions: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Angles are in radians. Outcome codes o1–o7 match the numbered learning outcomes in [README.md](README.md).

### mathb-b06-q01 | points 3 | outcome o4 | difficulty easy

#### Question

Given f(x) = 5 + 2 sin(3(x − π/3)). Give the equilibrium level, amplitude, period, range and starting point.

#### Answer

Equilibrium y = 5, amplitude 2, period 2π/3, range [3,7], starting point (π/3, 5)

#### Solution

A = 5 (equilibrium), B = 2 (amplitude), period = 2π/C = 2π/3, range [A − B, A + B] = [3, 7]. Since B > 0 the graph rises through equilibrium at the starting point (D, A) = (π/3, 5).

### mathb-b06-q02 | points 3 | outcome o4 | difficulty medium

#### Question

A sinusoid has equilibrium level −1, amplitude 4, period 8, and rises through equilibrium at x = 1. Give its formula.

#### Answer

y = −1 + 4 sin(π/4·(x − 1))

#### Solution

C = 2π/8 = π/4; D = 1 (rising through (1, −1)); so y = −1 + 4 sin(π/4·(x − 1)). Check: y(1) = −1 ✓, amplitude 4 ✓, period 8 ✓.

### mathb-b06-q03 | points 3 | outcome o2 | difficulty medium

#### Question

Give all maxima and all zeros of f(x) = cos(x − π/6) (with k ∈ ℤ).

#### Answer

Maxima 1 at x = π/6 + k·2π; zeros at x = 2π/3 + k·π

#### Solution

cos has maxima at argument 0 + k·2π: x − π/6 = k·2π, so maxima 1 at x = π/6 + k·2π. Zeros at argument ½π + k·π: x − π/6 = ½π + k·π ⇔ x = 2π/3 + k·π.

### mathb-b06-q04 | points 4 | outcome o7 | difficulty medium

#### Question

Solve exactly on [0, 2π]: cos(2x) = −½.

#### Answer

x = π/3, 2π/3, 4π/3, 5π/3

#### Solution

u = 2x ∈ [0, 4π]. cos u = −½ ⇔ u = 2π/3 + k·2π or u = 4π/3 + k·2π. Within [0, 4π]: u = 2π/3, 4π/3, 8π/3, 10π/3. Divide by 2: x = π/3, 2π/3, 4π/3, 5π/3.

### mathb-b06-q05 | points 3 | outcome o6 | difficulty easy

#### Question

For which of these equations does a solution exist: (a) cos x = 1.3; (b) cos x = 1; (c) cos x = −1? Give all solutions where they exist (k ∈ ℤ).

#### Answer

(a) none; (b) x = k·2π; (c) x = π + k·2π

#### Solution

The range of cos is [−1, 1]. (a) 1.3 > 1: no solution. (b) cos x = 1: x = 0 + k·2π. (c) cos x = −1: x = π + k·2π.

### mathb-b06-q06 | points 3 | outcome o6 | difficulty easy

#### Question

Solve on [0, 2π], 2 decimals: sin x = 0.55.

#### Answer

x ≈ 0.58 ∨ x ≈ 2.56

#### Solution

A = sin⁻¹(0.55) ≈ 0.5824. Sine solutions: x = A + k·2π or x = π − A + k·2π. In [0, 2π]: x ≈ 0.58 and x ≈ 3.1416 − 0.5824 ≈ 2.56.

### mathb-b06-q07 | points 4 | outcome o7 | difficulty hard

#### Question

Solve exactly on [0, π]: cos(3x) = ½√3.

#### Answer

x = π/18, 11π/18, 13π/18

#### Solution

u = 3x ∈ [0, 3π]. cos u = ½√3 ⇔ u = ±π/6 + k·2π. Candidates in [0, 3π]: π/6, 11π/6 (= −π/6 + 2π), 13π/6 (= π/6 + 2π); the next values 23π/6 and 25π/6 exceed 3π. Divide by 3: x = π/18, 11π/18, 13π/18.

### mathb-b06-q08 | points 4 | outcome o6 | difficulty hard

#### Question

Solve exactly on [0, 2π]: cos(2x) = sin x.

#### Answer

x = π/6, 5π/6, 3π/2

#### Solution

Formula sheet: cos(2x) = 1 − 2 sin²x. So 1 − 2 sin²x = sin x ⇔ 2 sin²x + sin x − 1 = 0. Set y = sin x: 2y² + y − 1 = (2y − 1)(y + 1) = 0 ⇔ y = ½ or y = −1. sin x = ½: x = π/6, 5π/6. sin x = −1: x = 3π/2.

### mathb-b06-q09 | points 5 | outcome o5 | difficulty hard

#### Question

A Ferris wheel has radius 20 m with its centre 22 m above the ground. It turns once per 4 minutes and boarding happens at the lowest point at t = 0 (minutes).

a. Show that the height satisfies h(t) = 22 − 20 cos(π/2 · t).

b. At which times during the first 4 minutes is a seat exactly 32 m high? Give exact answers.

#### Answer

b. t = 1⅓ min and t = 2⅔ min

#### Solution

a. Radius 20 → amplitude 20; centre 22 → equilibrium 22; period 4 → C = 2π/4 = π/2. Starting at the minimum: a cosine anchored at its minimum is −cos, so h(t) = 22 − 20 cos(π/2·t). Check: t = 0 gives 2 ✓ (the lowest point); t = 2 gives 22 + 20 = 42 (the top) ✓. b. 22 − 20 cos(πt/2) = 32 ⇔ cos(πt/2) = −½ ⇔ πt/2 = 2π/3 or πt/2 = 4π/3 (within [0, 2π] of the argument) ⇔ t = 4/3 or t = 8/3.

### mathb-b06-q10 | points 5 | outcome o5 | difficulty medium

#### Question

An alternating voltage follows u(t) = 5 sin(200π t) (volts, t in seconds).

a. Give the amplitude, period and frequency.

b. Compute exactly for how long within one period 0 ≤ t ≤ T the voltage is above 2.5 V.

#### Answer

a. 5 V, T = 0.01 s, 100 Hz; b. exactly 1/300 s ≈ 3.3 ms

#### Solution

a. Amplitude 5 V; T = 2π/(200π) = 0.01 s; frequency f = 1/T = 100 Hz. b. sin(200π t) = ½ ⇔ 200π t = π/6 or 5π/6 (within [0, 2π]) ⇔ t = 1/1200 or t = 5/1200 = 1/240. The voltage exceeds 2.5 V between these: duration = 1/240 − 1/1200 = 5/1200 − 1/1200 = 4/1200 = 1/300 s ≈ 3.3 ms.
