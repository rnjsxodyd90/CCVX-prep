# A9 — Sine functions: practice

Eight original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Angles in radians. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md).

### matha-a09-q01 | points 3 | outcome o3 | difficulty easy

#### Question

Given f(x) = 4 + 3·sin(π/4·(x − 5)). Give the equilibrium level, amplitude, period, range and the starting point with its direction.

#### Answer

Equilibrium 4, amplitude 3, period 8, range [1, 7]; starting point (5, 4), rising

#### Solution

A = 4 (equilibrium), B = 3 > 0 (amplitude). Period = 2π/(π/4) = 8. Range [4 − 3, 4 + 3] = [1, 7]. Since B > 0, the graph rises through the equilibrium at (D, A) = (5, 4).

### matha-a09-q02 | points 3 | outcome o3 | difficulty medium

#### Question

A sinusoid has maximum 9 and minimum 1, period 6, and a maximum at x = 1.

a. Give a formula using cos.

b. Give a formula using sin with its starting point.

#### Answer

a. y = 5 + 4·cos(π/3·(x − 1)); b. y = 5 + 4·sin(π/3·(x + 0.5))

#### Solution

A = (9 + 1)/2 = 5, B = (9 − 1)/2 = 4, C = 2π/6 = π/3. a. Anchor the cosine at the maximum: y = 5 + 4·cos(π/3·(x − 1)). b. Rising through equilibrium happens a quarter period (1.5) before the maximum: D = 1 − 1.5 = −0.5: y = 5 + 4·sin(π/3·(x + 0.5)). Check: y(1) = 5 + 4·sin(π/2) = 9 ✓.

### matha-a09-q03 | points 3 | outcome o3 | difficulty easy

#### Question

A sinusoid has maximum 20 at t = 3, minimum 8, and period 10. Give the formula with a cosine.

#### Answer

y = 14 + 6·cos(2π/10·(t − 3)) = 14 + 6·cos(π/5·(t − 3))

#### Solution

A = 14, B = 6, C = 2π/10 = π/5; cosine anchored at the maximum t = 3: y = 14 + 6·cos(π/5·(t − 3)).

### matha-a09-q04 | points 4 | outcome o4 | difficulty medium

#### Question

A sinusoid has a maximum of 7 at x = 2 and the next minimum of −1 at x = 6.

a. Give the period, equilibrium and amplitude.

b. Give a formula.

c. At which x does the graph cross the equilibrium for 0 ≤ x ≤ 8?

#### Answer

a. Period 8, equilibrium 3, amplitude 4; b. y = 3 + 4·cos(π/4·(x − 2)); c. x = 4 (falling) and x = 0, 8 (rising)

#### Solution

a. Maximum to next minimum is half a period: period = 2·(6 − 2) = 8. Equilibrium A = (7 + (−1))/2 = 3, amplitude B = 4. b. Cosine anchored at the maximum: y = 3 + 4·cos(π/4·(x − 2)), C = 2π/8 = π/4. c. Equilibrium crossings sit halfway between max and min: x = 4 (falling) and a quarter period left of the max: x = 0 (rising), then x = 8 (rising again).

### matha-a09-q05 | points 4 | outcome o6 | difficulty medium

#### Question

The tide at a pier follows h(t) = 2.1 + 1.1·cos(π/6·t) (t in hours after high water, h in metres).

a. Give the high- and low-water levels and the period.

b. Compute the water level 4 hours after high water (exact).

#### Answer

a. High 3.2 m, low 1.0 m, period 12 h; b. 1.55 m

#### Solution

a. Max = 2.1 + 1.1 = 3.2 m, min = 2.1 − 1.1 = 1.0 m; period = 2π/(π/6) = 12 h. b. h(4) = 2.1 + 1.1·cos(4π/6) = 2.1 + 1.1·cos(2π/3) = 2.1 + 1.1·(−½) = 2.1 − 0.55 = 1.55 m.

### matha-a09-q06 | points 5 | outcome o5 | difficulty hard

#### Question

A valve on a wheel has height y(t) = 50 + 40·cos(π/2·t) (cm, t in seconds; one revolution per 4 seconds). For how long within each revolution is the valve higher than 70 cm? Give the exact duration.

#### Answer

4/3 seconds per revolution

#### Solution

y > 70 ⇔ cos(π/2·t) > ½. Cos > ½ on the arguments (−π/3 + 2kπ, π/3 + 2kπ). In one period of length 4: π/2·t ∈ (−π/3, π/3) ⇔ t ∈ (−2/3, 2/3), a window of 4/3 s (equivalently, from t = 0 to 2/3 plus from 10/3 to 4). So the valve is above 70 cm for exactly 4/3 seconds per revolution.

### matha-a09-q07 | points 4 | outcome o5 | difficulty medium

#### Question

For f(x) = 2 + 2·sin(π·(x − 1)) with 0 ≤ x ≤ 2: compute all x where the graph crosses the equilibrium, and state whether it is rising or falling at each.

#### Answer

x = 1 (rising) and x = 2 (falling)

#### Solution

Equilibrium is y = 2: sin(π(x − 1)) = 0 ⇔ π(x − 1) = k·π ⇔ x = 1 + k. In [0, 2]: x = 1 and x = 2. At x = 1 the argument increases through 0 (sine rising), so rising; at x = 2 the argument is π, where the sine falls through zero, so falling. (Also note the period is 2π/π = 2, matching one full wave on the interval.)

### matha-a09-q08 | points 4 | outcome o2 | difficulty medium

#### Question

A sinusoid has maxima at x = 1 and x = 9 with value 6, and minimum value 2. Give its formula (there is a natural cosine form).

#### Answer

y = 4 + 2·cos(π/4·(x − 1))

#### Solution

Period from the two successive maxima: 9 − 1 = 8, so C = 2π/8 = π/4. Equilibrium A = (6 + 2)/2 = 4, amplitude B = 2. Anchor the cosine at the maximum x = 1: y = 4 + 2·cos(π/4·(x − 1)). Check: y(5) = 4 + 2·cos(π) = 2 ✓ (minimum midway).
