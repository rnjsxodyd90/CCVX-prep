# B14 — Parametric curves: practice

Eight original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o8 match the numbered learning outcomes in [README.md](README.md). Angles in radians.

### mathb-b14-q01 | points 3 | outcome o1 | difficulty easy

#### Question

The motion equations of a point P are x(t) = 2t + 1, y(t) = 3 − t.

a. Give an equation of the path in the form y = ax + b.

b. Give the vector equation of the path.

#### Answer

a. y = 7/2 − x/2; b. (x, y) = (1, 3) + t(2, −1)

#### Solution

a. Eliminate t: from x = 2t + 1 get t = (x − 1)/2; then y = 3 − (x − 1)/2 = 7/2 − x/2 — a straight line (x and y are linear). b. Reading the coefficients directly: (x, y) = (1, 3) + t(2, −1); direction vector (2, −1) gives slope −1/2 ✓ consistent with a.

### mathb-b14-q02 | points 4 | outcome o3 | difficulty easy

#### Question

Show that the path of x(t) = 1 + 3 cos t, y(t) = −2 + 3 sin t is a circle. Give the centre, radius and period.

#### Answer

Centre (1, −2), radius 3, period 2π

#### Solution

(x − 1)² + (y + 2)² = 9 cos²t + 9 sin²t = 9(cos²t + sin²t) = 9 — the circle with centre (1, −2) and radius 3 (Pythagorean identity, formula sheet). Both coordinates have period 2π, so the period of the motion is 2π.

### mathb-b14-q03 | points 5 | outcome o2 | difficulty hard

#### Question

The motion equations are x(t) = cos t, y(t) = sin(2t), for 0 ≤ t ≤ 2π. Compute all points of the path where the tangent is horizontal, and all where it is vertical.

#### Answer

Horizontal tangent at (½√2, 1), (−½√2, −1), (−½√2, 1), (½√2, −1); vertical at (1, 0) and (−1, 0)

#### Solution

x′(t) = −sin t; y′(t) = 2 cos(2t). Horizontal tangent: y′ = 0 and x′ ≠ 0. cos(2t) = 0 ⇔ 2t = π/2 + k·π ⇔ t = π/4, 3π/4, 5π/4, 7π/4; at each, sin t ≠ 0 ✓. Points: t = π/4 → (½√2, 1); t = 3π/4 → (−½√2, −1); t = 5π/4 → (−½√2, 1); t = 7π/4 → (½√2, −1). Vertical tangent: x′ = 0 and y′ ≠ 0. sin t = 0 ⇔ t = 0, π (inside (0, 2π)), and y′(0) = 2 ≠ 0, y′(π) = 2 ≠ 0 ✓. Points: (1, 0) and (−1, 0).

### mathb-b14-q04 | points 4 | outcome o5 | difficulty medium

#### Question

A point moves along x(t) = 4 cos(3t), y(t) = 4 sin(3t). Compute the velocity vector at time t = π/6 and show that the path speed is constant. Give the exact speed.

#### Answer

v⃗(π/6) = (−12, 0); speed 12, constant

#### Solution

v⃗(t) = (−12 sin(3t), 12 cos(3t)). At t = π/6: sin(π/2) = 1, cos(π/2) = 0, so v⃗ = (−12, 0). Speed: √(144 sin²(3t) + 144 cos²(3t)) = 12√(sin² + cos²) = 12 for all t — constant speed (uniform circular motion with ω = 3 and radius 4).

### mathb-b14-q05 | points 5 | outcome o6 | difficulty medium

#### Question

The path of a point is given by x(t) = t³ − 3t, y(t) = t².

a. Compute the slope of the tangent to the path at t = 2.

b. Find all points of the path with a horizontal tangent, and all with a vertical tangent.

#### Answer

a. 4/9; b. horizontal at (0, 0), vertical at (−2, 1) and (2, 1)

#### Solution

x′(t) = 3t² − 3 = 3(t² − 1); y′(t) = 2t. a. Slope = y′/x′ = 2t/(3(t² − 1)); at t = 2: 4/(3·3) = 4/9. b. Horizontal: y′ = 0 and x′ ≠ 0: t = 0 (x′ = −3 ≠ 0 ✓) → point (0, 0). Vertical: x′ = 0 and y′ ≠ 0: t = 1 → point (−2, 1) (y′ = 2 ≠ 0 ✓); t = −1 → point (2, 1) (y′ = −2 ≠ 0 ✓).

### mathb-b14-q06 | points 3 | outcome o4 | difficulty medium

#### Question

The motion equations are x(t) = sin(2t), y(t) = sin(3t). Compute the period of the motion.

#### Answer

2π

#### Solution

The x-coordinate has period 2π/2 = π; the y-coordinate has period 2π/3. The motion repeats when both do: lcm(π, 2π/3) = 2π, because 2π = 2·π = 3·(2π/3). So the period is 2π.

### mathb-b14-q07 | points 4 | outcome o6 | difficulty medium

#### Question

Compute exactly the intersections of the path of x(t) = 3 cos t, y(t) = 3 sin t with the line y = 3/2.

#### Answer

(3√3/2, 3/2) and (−3√3/2, 3/2)

#### Solution

3 sin t = 3/2 ⇔ sin t = ½ ⇔ t = π/6 or t = 5π/6 (in [0, 2π)). Then x = 3 cos t: x = 3·½√3 = 3√3/2 or x = −3√3/2. Points: (3√3/2, 3/2) and (−3√3/2, 3/2) — both on the circle x² + y² = 9: 27/4 + 9/4 = 36/4 = 9 ✓.

### mathb-b14-q08 | points 5 | outcome o7 | difficulty hard

#### Question

A stylised projectile follows x(t) = 10t, y(t) = 10t − 2.5t² (t in seconds).

a. Give the velocity vector and the acceleration vector at t = 1.

b. Compute the exact path speed at the top of the arc (t = 2).

c. Show that the path acceleration dv/dt at t = 2 equals 0, while a⃗(2) ≠ 0⃗. Explain the difference.

#### Answer

a. v⃗(1) = (10, 5), a⃗ = (0, −5); b. 10; c. dv/dt = (25t − 50)/v(t), so dv/dt(2) = 0 while a⃗(2) = (0, −5): the speed has an extreme at the top (the slowest moment), while the constant acceleration keeps turning the velocity vector

#### Solution

a. v⃗(t) = (10, 10 − 5t), so v⃗(1) = (10, 5); a⃗(t) = (0, −5) for all t (constant). b. v(t) = √(100 + (10 − 5t)²); at t = 2 the second term vanishes: v = √100 = 10 — the slowest moment of the flight, at the top where the y-speed is 0. c. Differentiate the speed: with u = 100 + (10 − 5t)², u′ = 2(10 − 5t)·(−5) = 50t − 100, so dv/dt = u′/(2v) = (25t − 50)/v(t). At t = 2: (50 − 50)/10 = 0. But a⃗(2) = (0, −5) ≠ 0⃗: the acceleration keeps pulling the velocity vector downward — it changes the *direction* of the motion — while the *speed* (the magnitude) happens to be at an extreme there, so dv/dt = 0. Path acceleration dv/dt measures change of speed, not change of velocity.
