# B13 — Circle geometry: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. The circle equation

- Centre equation (*middelpuntvergelijking*): the circle with centre M(a, b) and radius r is (x − a)² + (y − b)² = r². It is Pythagoras applied to every point of the circle.
- Expanding gives the general form x² + y² + px + qy + s = 0. Going back uses completing the square (*kwadraat afsplitsen*): x² + px = (x + p/2)² − p²/4.
- Warning: not every x² + y² + px + qy + s = 0 is a circle — completing the square gives r² = p²/4 + q²/4 − s, which must be positive (r² = 0: a point; r² < 0: nothing).

## 2. Line and circle

- Intersections: substitute y = ax + b (or x = ...) from the line into the circle equation → quadratic in x (or y) → 0, 1 or 2 solutions. One solution means the line is a tangent.
- Tangent (*raaklijn*) at a point T of the circle: the radius MT is perpendicular to the tangent, so (slope of MT) × (slope of tangent) = −1. Steps: slope MT → perpendicular slope → line through T.
- Distance from a line to a circle: perpendicular distance from the centre to the line minus the radius (if the line misses the circle).

## 3. Two circles

- Intersections: subtract the two circle equations — x² and y² cancel, leaving a linear equation: the line through the two intersection points (the radical line). Substitute back into one circle for the points themselves.
- Distance between two circles: |M₁M₂| − r₁ − r₂ (if separate); touching (*raken*) when the distance between centres equals r₁ + r₂ (external touching) or |r₁ − r₂| (internal); then the common tangent is perpendicular to the line of centres at the touching point.
- One circle inside another without touching: distance = r_bigger − (|M₁M₂| + r_smaller).

## 4. Tangents from an external point

- From a point P outside circle c there are exactly two tangents; the tangent points T₁, T₂ satisfy |PT₁| = |PT₂|.
- Finding them: |MT| = r and *MT*→ ⊥ *PT*→ (dot product, [B12](../B12-vectors/)), or solve the system: line through P with slope t, distance from M equal to r. The tangent length also follows from Pythagoras in triangle MTP: |PT| = √(|MP|² − r²).
- The line from P through M bisects the angle between the two tangents.

## 5. Triangle and circle

- Circumscribed circle (*omgeschreven cirkel*): the unique circle through A, B, C; its centre is the intersection of the perpendicular bisectors (*middelloodlijnen*) of the sides (any two suffice). Radius = distance from that centre to any vertex.
- Inscribed circle (*ingeschreven cirkel*): touches the three sides; centre = intersection of the angle bisectors (*bissectrices*); radius = distance from the centre to any side.
- Thales (*stelling van Thales*): if AB is a diameter of a circle and C is on the circle, then ∠ACB = 90°. Converse: in a right-angled triangle, the midpoint of the hypotenuse is the centre of the circumscribed circle (and its radius is half the hypotenuse).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

### Example 1 — completing the square

Is x² + y² − 6x + 4y + 3 = 0 a circle? Give centre and radius.

**Solution.** x² − 6x = (x − 3)² − 9 and y² + 4y = (y + 2)² − 4, so (x − 3)² + (y + 2)² = 9 + 4 − 3 = 10. Yes: centre M(3, −2), radius √10.

### Example 2 — line meets circle

Circle (x − 1)² + (y − 2)² = 10 and line y = x + 3. Compute the intersections.

**Solution.** Substitute: (x − 1)² + (x + 1)² = 10 ⇔ x² − 2x + 1 + x² + 2x + 1 = 10 ⇔ 2x² = 8 ⇔ x = ±2. Points: (2, 5) and (−2, 1).

### Example 3 — tangent at a point of the circle

Circle with centre M(2, 1) and point T(5, 3) on it. Give the tangent at T.

**Solution.** Slope MT: (3 − 1)/(5 − 2) = 2/3, so the tangent slope is −3/2. Through T: y − 3 = (−3/2)(x − 5) ⇔ y = (−3/2)x + 21/2. In general form: 3x + 2y = 21. (Cross-check with the normal vector: *MT*→ = (3, 2) is a normal of the tangent, so the tangent is 3x + 2y = c with c = 3·5 + 2·3 = 21 ✓.)

### Example 4 — two circles touching

c₁: centre M₁(0, 0), r₁ = 2; c₂: centre M₂(5, 3). For which radius r₂ do the circles touch externally?

**Solution.** |M₁M₂| = √(25 + 9) = √34. External touching: r₁ + r₂ = √34 ⇔ r₂ = √34 − 2 ≈ 3.83.

### Example 5 — circumscribed circle

Give the equation of the circumscribed circle of the triangle with A(0, 0), B(6, 0), C(0, 4).

**Solution.** Perpendicular bisector of AB: x = 3. Perpendicular bisector of AC: y = 2. Their intersection is the centre M(3, 2); radius |MA| = √(9 + 4) = √13. Equation: (x − 3)² + (y − 2)² = 13. Check that B and C lie on it: (6 − 3)² + (0 − 2)² = 9 + 4 = 13 ✓ and (0 − 3)² + (4 − 2)² = 13 ✓.

### Example 6 — Thales in reverse

Triangle with A(−1, 2), B(5, −2), C(5, 2).

a. Show that the angle at C is 90°.

b. Use the converse of Thales to give the circumscribed circle.

**Solution.** a. *CA*→ = (−1 − 5, 2 − 2) = (−6, 0); *CB*→ = (5 − 5, −2 − 2) = (0, −4). Dot product: (−6)·0 + 0·(−4) = 0, so the angle at C is 90°. b. By the converse of Thales, the centre is the midpoint of the hypotenuse AB: M = ((−1 + 5)/2, (2 − 2)/2) = (2, 0). Radius = ½|AB| = ½√((6)² + (−4)²) = ½√52 = √13. Equation: (x − 2)² + y² = 13. Check: C(5, 2) gives 9 + 4 = 13 ✓.
