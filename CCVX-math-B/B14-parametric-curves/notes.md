# B14 — Parametric curves (motion equations): notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Parametric representations

- A parametric representation (*parametervoorstelling*) gives the position of a point P as (x(t), y(t)): one parameter t (often time) controls both coordinates. Example: x(t) = t², y(t) = 2t. The point's graph is its path (*baan*); when t is time, the equations are motion equations (*bewegingsvergelijkingen*).
- To get an implicit or explicit relation for the path, eliminate t: from y = 2t get t = y/2 and substitute: x = y²/4 — a sideways parabola (but only the right half, since x = t² ≥ 0; check the *t-range* maps correctly).
- The path ignores time: different motions can share one path (t² vs t⁴ for t ≥ 0 give the same half-parabola at different speeds).

## 2. Vertices of the path

- Horizontal tangent where y′(t) = 0 and x′(t) ≠ 0; vertical tangent where x′(t) = 0 and y′(t) ≠ 0. If both are 0 at the same t, the point is typically a cusp or a rest point — investigate separately (not required in detail).
- Slope of the tangent to the path at P: dy/dx = y′(t)/x′(t) (chain rule) — this also gives the *direction of travel* from the velocity vector.

## 3. Standard paths

- x and y linear in t: the path is a straight line; (x, y) = (b, d) + t(a, c) is exactly the vector equation of [B12](../B12-vectors/).
- x(t) = a + r cos t, y(t) = b + r sin t: a circle (uniform circular motion), centre M(a, b), radius r, period 2π. Identity proof: (x − a)² + (y − b)² = r²(cos²t + sin²t) = r².
- Different frequencies: x(t) = sin(2t), y(t) = sin(3t) style Lissajous figures. The motion's period is the **least common multiple** of the component periods (T_x = π, T_y = 2π/3 → T = lcm(π, 2π/3) = 2π).

## 4. Velocity and acceleration

- Velocity vector (*snelheidsvector*): v⃗(t) = (x′(t), y′(t)) — it is tangent to the path at P.
- Components: the x-speed vector v⃗_x = (x′(t), 0) and y-speed vector (0, y′(t)).
- Path speed (*baansnelheid*): v(t) = |v⃗(t)| = √(x′(t)² + y′(t)²).
- Acceleration vector (*versnellingsvector*): a⃗(t) = (x″(t), y″(t)).
- Path acceleration (*baanversnelling*): dv/dt — the rate of change of the scalar speed (note: *not* in general equal to |a⃗(t)|; for a circle at constant ω, |a⃗| > 0 while dv/dt = 0).

## 5. Typical exam tasks

- Compute position, velocity, speed and acceleration at a given t (with trigonometric x and y — exact values!).
- Find the vertices of the path (conditions above) and the extreme x- or y-coordinates.
- Prove the path is (part of) a circle/line/parabola, often via the sum formulas or identities from B05/B06.
- Intersections of the path with a line: substitute x(t), y(t) into the line equation and solve in t — a trigonometric equation [B06](../B06-trigonometric-functions/).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

### Example 1 — eliminating the parameter

The motion is x(t) = t² + 1, y(t) = 3t. Give a relation for the path and describe it.

**Solution.** t = y/3, so x = y²/9 + 1: the parabola x = 1 + y²/9 opened to the right with vertex (1, 0). Since t runs over all reals, y runs over **R** and the whole parabola is covered.

### Example 2 — circular motion

x(t) = 2 + 5 cos(2t), y(t) = 2 + 5 sin(2t).

a. Show the path is a circle; give centre, radius and period.

b. Compute the path speed.

**Solution.** a. (x − 2)² + (y − 2)² = 25(cos²2t + sin²2t) = 25: circle, centre (2, 2), radius 5, period 2π/2 = π. b. v⃗ = (−10 sin 2t, 10 cos 2t), so v = √(100 sin² + 100 cos²) = 10: constant speed 10. (Path acceleration dv/dt = 0, although a⃗ = (−20 cos 2t, −20 sin 2t) has length 20: the acceleration only turns the direction — the centripetal acceleration.)

### Example 3 — vertices of the path

x(t) = 2 sin t, y(t) = sin(2t), 0 ≤ t ≤ 2π. Compute where the path has horizontal or vertical tangents.

**Solution.** x′ = 2 cos t, y′ = 2 cos 2t. Horizontal tangent: cos 2t = 0 and cos t ≠ 0 → 2t = π/2 + kπ → t = π/4, 3π/4, 5π/4, 7π/4 (cos t = ±½√2 ≠ 0 ✓). Vertical tangent: cos t = 0 and cos 2t ≠ 0 → t = π/2, 3π/2 (then 2t = π, 3π, cos = −1 ≠ 0 ✓). Both zero simultaneously never happens here. The four horizontal-tangent points: t = π/4 → (√2, 1); t = 3π/4 → (√2, −1); t = 5π/4 → (−√2, 1); t = 7π/4 → (−√2, −1) (compute x = 2 sin t and y = sin 2t at each t). The two vertical-tangent points: t = π/2 → (2, 0); t = 3π/2 → (−2, 0).

### Example 4 — slope along the path

For the cycloid-like curve x(t) = t − sin t, y(t) = 1 − cos t, compute the slope of the path at t = π/2.

**Solution.** dy/dx = y′/x′ = sin t/(1 − cos t). At t = π/2: sin = 1, cos = 0: slope = 1/1 = 1.

### Example 5 — Lissajous period

x(t) = sin(4t), y(t) = sin(6t). Give the period of the motion.

**Solution.** T_x = 2π/4 = π/2; T_y = 2π/6 = π/3. LCM(π/2, π/3) = π (π = 2·(π/2) = 3·(π/3)). After t = π both coordinates return to their starting phase together.
