# Marking scheme — Mock exam 1, CCVX Mathematics B (practice)

Exam: [mock-exam-1.md](mock-exam-1.md). Total 76 points. Grade = 1 + 9 × (score)/76. Alternative correct methods receive full credit; a computational slip costs the final point of a step unless the slip makes the work essentially simpler.

## Problem 1 — The shifted exponential (20 points)

**a. (3 points; mathb-mock1-q01)** f(x) = (x − 2)eˣ.
- Product rule stated or used correctly: f′ = (x − 2)′·eˣ + (x − 2)·(eˣ)′ (1 pt)
- Substituting the derivatives: = 1·eˣ + (x − 2)eˣ (1 pt)
- Simplifying to eˣ(x − 1) (1 pt)

**b. (4 points; mathb-mock1-q02)**
- f′(x) = 0 ⇔ x − 1 = 0 (since eˣ > 0 for all x) (1 pt)
- Only candidate x = 1, with f(1) = (1 − 2)e = −e (2 pts, both value and point)
- Sign analysis (or sketch argument): f′ < 0 for x < 1 and f′ > 0 for x > 1, so (−e) is a minimum (1 pt)

**c. (4 points; mathb-mock1-q03)**
- Point: f(2) = 0, so (2, 0) (1 pt)
- Slope: f′(2) = e²·(2 − 1) = e² (2 pts)
- Equation y = e²(x − 2), i.e. y = e²x − 2e² (1 pt)

**d. (5 points; mathb-mock1-q04)**
- Zero of f: (x − 2)eˣ = 0 ⇔ x = 2, so the region runs from x = 2 to x = 3 (1 pt)
- On (2, 3), f(x) > 0, so area A = ∫ from 2 to 3 of (x − 2)eˣ dx (1 pt)
- Antiderivative found with the product structure: [eˣ(x − 3)] (2 pts; check by differentiating: eˣ(x − 3) + eˣ = eˣ(x − 2) ✓)
- Evaluation: [eˣ(x − 3)] from 2 to 3 = e³·0 − e²·(−1) = e² (1 pt)

**e. (4 points; mathb-mock1-q05)**
- x-axis intersection: x = 2, point (2, 0) (1 pt)
- End behaviour: lim (x→∞) f(x) = ∞ and lim (x→−∞) f(x) = 0 from below (1 pt)
- On (−∞, 1] the graph decreases from almost 0 to the minimum −e, so it crosses each level −e < k < 0 exactly once (1 pt)
- On [1, ∞) it increases from −e through 0 to ∞, crossing the same level exactly once more; two intersections in total (1 pt)

## Problem 2 — The water tank (18 points)

**a. (3 points; mathb-mock1-q06)**
- h(0) = 32 − 2√4 = 32 − 4 = 28 cm (1 pt)
- h(12) = 32 − 2√16 = 32 − 8 = 24 cm (2 pts)

**b. (4 points; mathb-mock1-q07)**
- h(5) = 32 − 2√9 = 32 − 6 = 26 (1 pt)
- Average: (26 − 28)/(5 − 0) = −2/5 cm/min (1 pt, the sign or "loss of 2/5" required)
- h′(t) = −2 · 1/(2√(t + 4)) = −1/√(t + 4) (1 pt)
- h′(5) = −1/3 cm/min (1 pt)

**c. (5 points; mathb-mock1-q08)**
- 32 − 2√(t + 4) = 26 set up (1 pt)
- 2√(t + 4) = 6 ⇔ √(t + 4) = 3 (2 pts)
- Squaring: t + 4 = 9 (1 pt)
- t = 5, inside the domain [0, 12] (1 pt)

**d. (2 points; mathb-mock1-q09)**
- Equilibrium 24 cm, amplitude 10 cm, period 2π/(π/6) = 12 min (1 pt for all three)
- Continuity check: h(12) = 24 from part a, and h₂(12) = 24 + 10 sin(0) = 24 ✓ (1 pt)

**e. (4 points; mathb-mock1-q10)**
- 24 + 10 sin(π/6·(t − 12)) = 29 ⇔ sin(π/6·(t − 12)) = ½ (1 pt)
- π/6·(t − 12) = π/6 + k·2π or π/6·(t − 12) = 5π/6 + k·2π (2 pts)
- t = 13 + 12k or t = 17 + 12k (1 pt)
- Within [12, 24]: t = 13 and t = 17 (1 pt)

## Problem 3 — The circle and the point (20 points)

**a. (3 points; mathb-mock1-q11)**
- Centre M(2, −1) and radius 5 read from the equation (2 pts)
- |MP| = √((7 − 2)² + (4 + 1)²) = √(25 + 25) = 5√2 (1 pt)

**b. (5 points; mathb-mock1-q12)**
- Tangent perpendicular to radius stated (Pythagoras set-up in triangle MTP) (2 pts)
- |PT|² = |MP|² − r² (2 pts)
- |PT| = √(50 − 25) = √25 = 5 (1 pt)

**c. (6 points; mathb-mock1-q13)**
- Distance from M(2, −1) to the line x = 7 is |7 − 2| = 5 = r, so x = 7 touches the circle (2 pts)
- Tangent point T₁ is the foot of the perpendicular (horizontal) from M: T₁ = (7, −1) (2 pts)
- *MT₁*→ = (5, 0) is horizontal while x = 7 is vertical, so perpendicular (2 pts)

**d. (6 points; mathb-mock1-q14)**
- Set up: (x − 2, y + 1)·(x − 7, y − 4) = 0 gives x² + y² − 9x − 3y + 10 = 0 (2 pts)
- Circle expanded: x² + y² − 4x + 2y − 20 = 0; subtracting gives the line x + y = 6 (2 pts)
- Substituting y = 6 − x into the circle: 2x² − 18x + 28 = 0 ⇔ x² − 9x + 14 = 0 ⇔ x = 2 or x = 7 (1 pt)
- x = 7 gives T₁ = (7, −1); the other solution is T₂ = (2, 4) — check on c: 2·0 + 5² = 25 ✓ — and the tangent through T₂ and P(7, 4) is the horizontal line y = 4 (1 pt)

## Problem 4 — The patrol drone (18 points)

**a. (2 points; mathb-mock1-q15)**
- x(t) = 3 sin t: amplitude 3, period 2π (1 pt)
- y(t) = 2 sin(2t): amplitude 2, period 2π/2 = π (1 pt)

**b. (3 points; mathb-mock1-q16)**
- After time T both coordinates must be back in phase (1 pt)
- x needs T = k·2π; y needs T = k·π; smallest common: lcm(2π, π) = 2π (1 pt)
- Check that no smaller positive T works (x alone forces k·2π) (1 pt)

**c. (5 points; mathb-mock1-q17)**
- y′(t) = 4 cos(2t) computed (1 pt)
- 4 cos(2t) = 0 ⇔ 2t = π/2 + k·π (1 pt)
- Candidate times in (0, 2π): t = π/4, 3π/4, 5π/4, 7π/4 (1 pt)
- Check x′(t) = 3 cos t ≠ 0 at all four (1 pt)
- The four points: (3√2/2, 2), (3√2/2, −2), (−3√2/2, 2), (−3√2/2, −2) (1 pt for all four correct)

**d. (4 points; mathb-mock1-q18)**
- v⃗(t) = (3 cos t, 4 cos(2t)) (1 pt)
- v⃗(π/2) = (0, 4 cos π) = (0, −4) (2 pts)
- Path speed: |v⃗| = √(0² + 16) = 4 (1 pt)

**e. (4 points; mathb-mock1-q19)**
- At t = π: position (3 sin π, 2 sin 2π) = (0, 0) confirmed (1 pt)
- Slope rule: slope = y′(t)/x′(t) (1 pt)
- Values: y′(π) = 4 cos(2π) = 4 and x′(π) = 3 cos π = −3 (1 pt)
- Slope = 4/(−3) = −4/3 (1 pt)
