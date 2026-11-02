# Mock exam 1 — CCVX Mathematics B (practice)

Original practice exam written for this prep. Nothing is copied from CCVX or CvTE exams.

- Time: 180 minutes. Total: 76 points over 4 problems.
- Grade: 1 + 9 × (points scored)/76, rounded to one decimal.
- Work algebraically and exactly. Give exact answers (forms with √, π, e, ln) unless the question asks for a rounding.
- No graphing calculator. The formula sheet printed below is the one from the real CCVX wiskunde B exam. A protractor/ruler and a standard scientific calculator are allowed.
- Marking scheme with points per step: [mock-exam-1-marking-scheme.md](mock-exam-1-marking-scheme.md).

## Formula sheet

sin²(x) + cos²(x) = 1

sin(t + u) = sin t cos u + cos t sin u
sin(t − u) = sin t cos u − cos t sin u
cos(t + u) = cos t cos u − sin t sin u
cos(t − u) = cos t cos u + sin t sin u

sin(2t) = 2 sin t cos t
cos(2t) = cos²t − sin²t = 2 cos²t − 1 = 1 − 2 sin²t

### mathb-mock1-q01 | points 3 | outcome b07 | difficulty easy

#### Question

The function f is given by f(x) = x·eˣ − 2eˣ with domain **R**. Show that f′(x) = eˣ(x − 1).

#### Answer

f′(x) = eˣ(x − 1), as required.

#### Solution

Write f(x) = (x − 2)·eˣ and apply the product rule: f′(x) = 1·eˣ + (x − 2)·eˣ = eˣ(1 + x − 2) = eˣ(x − 1). ∎

### mathb-mock1-q02 | points 4 | outcome b08 | difficulty easy

#### Question

(The function f is given by f(x) = x·eˣ − 2eˣ with domain **R**.) Compute the extreme value of f exactly, and state whether it is a minimum or a maximum.

#### Answer

Minimum −e at the point (1, −e).

#### Solution

f′(x) = eˣ(x − 1) = 0 ⇔ x = 1 (since eˣ > 0 for all x). Sign of f′: negative for x < 1, positive for x > 1, so f decreases up to 1 and increases after: a minimum at x = 1, with f(1) = (1 − 2)e = −e.

### mathb-mock1-q03 | points 4 | outcome b07 | difficulty medium

#### Question

(The function f is given by f(x) = x·eˣ − 2eˣ with domain **R**.) The line l touches the graph of f at the point where x = 2. Give an exact equation of l in the form y = ax + b.

#### Answer

y = e²x − 2e².

#### Solution

Point: f(2) = (2 − 2)e² = 0, so (2, 0). Slope: f′(2) = e²·(2 − 1) = e². Tangent: y = e²(x − 2) = e²x − 2e².

### mathb-mock1-q04 | points 5 | outcome b09 | difficulty medium

#### Question

(The function f is given by f(x) = x·eˣ − 2eˣ with domain **R**.) Compute exactly the area of the region enclosed by the graph of f, the x-axis and the line x = 3.

#### Answer

e².

#### Solution

Zero of f: (x − 2)eˣ = 0 ⇔ x = 2, so the region runs from x = 2 to x = 3, with f > 0 inside. An antiderivative (check by differentiating): F(x) = eˣ(x − 3), since F′ = eˣ(x − 3) + eˣ = eˣ(x − 2) = f. Area = ∫ from 2 to 3 of f(x) dx = F(3) − F(2) = 0 − e²·(−1) = e².

### mathb-mock1-q05 | points 4 | outcome b08 | difficulty hard

#### Question

(The function f is given by f(x) = x·eˣ − 2eˣ with domain **R**.) Compute the intersection of the graph of f with the x-axis, and use it with part b (extremes) and the end behaviour to explain why the horizontal line y = k, with −e < k < 0, meets the graph of f in exactly two points.

#### Answer

Intersection (2, 0); exactly two intersections for −e < k < 0 by continuity + one minimum argument below.

#### Solution

x-axis intersection: (x − 2)eˣ = 0 ⇔ x = 2, so (2, 0). End behaviour: lim (x→∞) x eˣ − 2eˣ = ∞ (both terms up), and lim (x→−∞) f(x) = 0 from below. On (−∞, 1] the graph decreases continuously from almost 0 to the minimum −e, so it crosses each level −e < k < 0 exactly once; on [1, ∞) it increases from −e through 0 to ∞, crossing the same level exactly once more: two intersections in total.

### mathb-mock1-q06 | points 3 | outcome b04 | difficulty easy

#### Question

A cylindrical water tank loses water through a tap. The water height h (in cm) during the first 12 minutes after opening it behaves like a root curve: h(t) = 32 − 2√(t + 4) for 0 ≤ t ≤ 12 (t in minutes). Compute exactly the water height at t = 0 and at t = 12.

#### Answer

h(0) = 28 cm; h(12) = 24 cm.

#### Solution

h(0) = 32 − 2√4 = 32 − 4 = 28 cm. h(12) = 32 − 2√16 = 32 − 8 = 24 cm.

### mathb-mock1-q07 | points 4 | outcome b06 | difficulty medium

#### Question

(The height of the water in a cylindrical tank satisfies h(t) = 32 − 2√(t + 4) for 0 ≤ t ≤ 12, t in minutes.) Compute exactly the average change of the height per minute on the interval 0 ≤ t ≤ 5, and the instantaneous rate of change dh/dt at t = 5 (exact, in cm/min).

#### Answer

Average: −2/5 cm/min; dh/dt at t = 5: −1/3 cm/min.

#### Solution

h(5) = 32 − 2√9 = 26. Average: (26 − 28)/(5 − 0) = −2/5 cm/min. Instantaneous: h′(t) = −2·(1/(2√(t + 4))) = −1/√(t + 4), so h′(5) = −1/3 cm/min.

### mathb-mock1-q08 | points 5 | outcome b01 | difficulty medium

#### Question

(The height of the water in a cylindrical tank satisfies h(t) = 32 − 2√(t + 4) for 0 ≤ t ≤ 12, t in minutes.) Compute exactly at which time the height equals 26 cm. Show all algebraic steps.

#### Answer

t = 5 (minutes).

#### Solution

32 − 2√(t + 4) = 26 ⇔ 2√(t + 4) = 6 ⇔ √(t + 4) = 3 ⇔ t + 4 = 9 ⇔ t = 5, inside the domain [0, 12].

### mathb-mock1-q09 | points 2 | outcome b06 | difficulty easy

#### Question

From t = 12 the tank is refilled; the height then follows h₂(t) = 24 + 10 sin(π/6·(t − 12)) for 12 ≤ t ≤ 24. Give the equilibrium level, amplitude and period of this sinusoid. Check the continuity of the model at t = 12.

#### Answer

Equilibrium 24 cm, amplitude 10 cm, period 12 minutes; continuous at t = 12 (both models give 24 cm there).

#### Solution

Equilibrium A = 24 cm, amplitude 10 cm, period = 2π/(π/6) = 12 minutes. Continuity: from the first model h(12) = 24 (part a), and h₂(12) = 24 + 10·sin(0) = 24 ✓.

### mathb-mock1-q10 | points 4 | outcome b06 | difficulty hard

#### Question

(The water height follows h₂(t) = 24 + 10 sin(π/6·(t − 12)) for 12 ≤ t ≤ 24.) Compute all times in 12 ≤ t ≤ 24 at which the height equals 29 cm exactly.

#### Answer

t = 13 and t = 17 (minutes).

#### Solution

24 + 10 sin(π/6·(t − 12)) = 29 ⇔ sin(π/6·(t − 12)) = ½ ⇔ π/6·(t − 12) = π/6 + k·2π or π/6·(t − 12) = 5π/6 + k·2π ⇔ t = 13 + 12k or t = 17 + 12k. Within [12, 24]: t = 13 and t = 17.

### mathb-mock1-q11 | points 3 | outcome b13 | difficulty easy

#### Question

Circle c is given by (x − 2)² + (y + 1)² = 25, and point P(7, 4) lies outside c. Give the centre M and the radius r of c, and compute |MP| in simplified root form.

#### Answer

M(2, −1), r = 5; |MP| = 5√2.

#### Solution

Centre M(2, −1), radius 5 read from the equation. |MP| = √((7 − 2)² + (4 + 1)²) = √(25 + 25) = 5√2.

### mathb-mock1-q12 | points 5 | outcome b13 | difficulty medium

#### Question

(Circle c is given by (x − 2)² + (y + 1)² = 25, and point P(7, 4) lies outside c.) Two tangents can be drawn from P to c. Compute their common tangent length |PT| (the distance from P to a tangent point T) exactly.

#### Answer

|PT| = 5.

#### Solution

The tangent from an external point is perpendicular to the radius at the tangent point, so triangle MTP is right-angled at T: |PT|² = |MP|² − r² = 50 − 25 = 25, so |PT| = 5.

### mathb-mock1-q13 | points 6 | outcome b13 | difficulty medium

#### Question

(Circle c is given by (x − 2)² + (y + 1)² = 25, and point P(7, 4) lies outside c.) One tangent through P is the vertical line x = 7. Compute its tangent point T₁ on c, and show that the radius to T₁ is indeed perpendicular to this tangent.

#### Answer

T₁ = (7, −1); the radius *MT₁*→ = (5, 0) is horizontal, hence perpendicular to the vertical tangent.

#### Solution

The line x = 7 is tangent to c because the distance from M(2, −1) to it equals 7 − 2 = 5 = r; the tangent point is the foot of the perpendicular from the centre: T₁ = (7, −1). *MT₁*→ = (7 − 2, −1 + 1) = (5, 0): horizontal, so perpendicular to the vertical line x = 7.

### mathb-mock1-q14 | points 6 | outcome b13 | difficulty hard

#### Question

(Circle c is given by (x − 2)² + (y + 1)² = 25, and point P(7, 4) lies outside c.) Compute the exact coordinates of the second tangent point T₂, and give an equation of the second tangent. (Hint: T₂ = (x, y) satisfies (T₂ − M)·(T₂ − P) = 0 — the radius is perpendicular to the tangent.)

#### Answer

T₂ = (2, 4); the second tangent is y = 4.

#### Solution

Dot-product condition: (x − 2)(x − 7) + (y + 1)(y − 4) = 0 ⇔ x² + y² − 9x − 3y + 10 = 0. The circle expanded: x² + y² − 4x + 2y − 20 = 0. Subtract: −5x − 5y + 30 = 0 ⇔ x + y = 6. Substitute y = 6 − x into the circle: (x − 2)² + (7 − x)² = 25 ⇔ 2x² − 18x + 28 = 0 ⇔ x² − 9x + 14 = 0 ⇔ x = 2 or x = 7. x = 7 gives T₁ = (7, −1); the other root: T₂ = (2, 4). The tangent through T₂ = (2, 4) and P(7, 4) is the horizontal line y = 4. Check on c: (2 − 2)² + (4 + 1)² = 25 ✓.

### mathb-mock1-q15 | points 2 | outcome b14 | difficulty easy

#### Question

The shadow of a drone moves over a flat roof with motion equations x(t) = 3 sin t, y(t) = 2 sin(2t), t ≥ 0 (t in seconds, distances in metres). Give the amplitude and the period of the x-motion and of the y-motion.

#### Answer

x: amplitude 3, period 2π; y: amplitude 2, period π.

#### Solution

x(t) = 3 sin t: amplitude 3, period 2π. y(t) = 2 sin(2t): amplitude 2, period 2π/2 = π.

### mathb-mock1-q16 | points 3 | outcome b14 | difficulty medium

#### Question

(The motion equations of a drone's shadow are x(t) = 3 sin t, y(t) = 2 sin(2t), t ≥ 0.) Show with the least common multiple that the period of the whole motion is 2π seconds.

#### Answer

Period 2π.

#### Solution

After time T both coordinates must be back in phase: x needs T = k·2π; y needs T = k·π; smallest common: lcm(2π, π) = 2π. And no smaller positive T works (x alone forces a multiple of 2π).

### mathb-mock1-q17 | points 5 | outcome b14 | difficulty hard

#### Question

(The motion equations of a drone's shadow are x(t) = 3 sin t, y(t) = 2 sin(2t), t ≥ 0.) Compute the exact coordinates of all points of the path with a horizontal tangent for 0 < t < 2π.

#### Answer

(3√2/2, 2), (3√2/2, −2), (−3√2/2, 2), (−3√2/2, −2).

#### Solution

y′(t) = 4 cos(2t) = 0 ⇔ 2t = π/2 + k·π ⇔ t = π/4, 3π/4, 5π/4, 7π/4 in (0, 2π); and x′(t) = 3 cos t ≠ 0 at all four (values ±3√2/2 and ±3). Points: t = π/4 → (3√2/2, 2); t = 3π/4 → (3√2/2, −2); t = 5π/4 → (−3√2/2, 2); t = 7π/4 → (−3√2/2, −2).

### mathb-mock1-q18 | points 4 | outcome b14 | difficulty medium

#### Question

(The motion equations of a drone's shadow are x(t) = 3 sin t, y(t) = 2 sin(2t), t ≥ 0.) Compute the exact path speed at t = π/2, and the velocity vector at that instant.

#### Answer

v⃗(π/2) = (0, −4); path speed 4.

#### Solution

v⃗(t) = (3 cos t, 4 cos(2t)), so v⃗(π/2) = (0, 4 cos π) = (0, −4). Path speed: |v⃗| = √(0² + 16) = 4.

### mathb-mock1-q19 | points 4 | outcome b14 | difficulty hard

#### Question

(The motion equations of a drone's shadow are x(t) = 3 sin t, y(t) = 2 sin(2t), t ≥ 0.) The path passes the origin at t = π. Compute the exact slope of the tangent to the path at that passage.

#### Answer

Slope = −4/3.

#### Solution

At t = π: position (3 sin π, 2 sin 2π) = (0, 0) confirmed. Slope rule: slope = y′(t)/x′(t) = 4 cos(2t)/(3 cos t); at t = π: 4 cos(2π)/(3 cos π) = 4/(−3) = −4/3.
