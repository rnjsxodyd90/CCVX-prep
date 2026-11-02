# B13 — Circle geometry: practice

Nine original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o9 match the numbered learning outcomes in [README.md](README.md).

### mathb-b13-q01 | points 3 | outcome o1 | difficulty easy

#### Question

Show that x² + y² + 8x − 6y = −9 is the equation of a circle, and give its centre and radius.

#### Answer

Centre (−4, 3), radius 4

#### Solution

Complete the squares: x² + 8x = (x + 4)² − 16 and y² − 6y = (y − 3)² − 9. So (x + 4)² + (y − 3)² = −9 + 16 + 9 = 16. A circle with centre (−4, 3) and radius 4.

### mathb-b13-q02 | points 4 | outcome o2 | difficulty medium

#### Question

Compute the intersections of the circle x² + y² = 25 and the line y = x + 1.

#### Answer

(−4, −3) and (3, 4)

#### Solution

Substitute: x² + (x + 1)² = 25 ⇔ 2x² + 2x + 1 = 25 ⇔ x² + x − 12 = 0 ⇔ (x + 4)(x − 3) = 0 ⇔ x = −4 or x = 3. Then y = x + 1 gives the points (−4, −3) and (3, 4). Both check: 16 + 9 = 25 ✓ and 9 + 16 = 25 ✓.

### mathb-b13-q03 | points 4 | outcome o3 | difficulty medium

#### Question

Give the equation of the tangent to the circle x² + y² = 25 at the point T(3, 4).

#### Answer

3x + 4y = 25

#### Solution

Centre O(0, 0). Slope OT = 4/3, so the tangent slope is −3/4. Through T: y − 4 = (−3/4)(x − 3) ⇔ 4y − 16 = −3x + 9 ⇔ 3x + 4y = 25. (Shortcut check: normal vector *OT*→ = (3, 4), so the tangent is 3x + 4y = c with c = 9 + 16 = 25 ✓.)

### mathb-b13-q04 | points 4 | outcome o2 | difficulty medium

#### Question

Show that the line y = 2x + 5 is a tangent of the circle x² + y² = 5, and give the tangent point.

#### Answer

Tangent point (−2, 1)

#### Solution

Substitute: x² + (2x + 5)² = 5 ⇔ x² + 4x² + 20x + 25 = 5 ⇔ 5x² + 20x + 20 = 0 ⇔ x² + 4x + 4 = (x + 2)² = 0 ⇔ x = −2. Exactly one solution (D = 0), so the line is a tangent; y = 2·(−2) + 5 = 1 gives the tangent point (−2, 1). Check the radius property: the radius to (−2, 1) has slope (1 − 0)/(−2 − 0) = −1/2, and slope of the tangent × slope of the radius = 2 × (−1/2) = −1 ✓.

### mathb-b13-q05 | points 5 | outcome o4 | difficulty medium

#### Question

Compute the intersections of the circles x² + y² = 25 and (x − 6)² + y² = 25.

#### Answer

(3, 4) and (3, −4)

#### Solution

Subtract the second equation from the first: x² − (x − 6)² = 0 ⇔ (x² − x² + 12x − 36) = 0 ⇔ 12x = 36 ⇔ x = 3. Back-substitute: 9 + y² = 25 ⇔ y = ±4. Intersections (3, 4) and (3, −4). (Note: subtracting produced the line x = 3 through the intersection points — the radical line.)

### mathb-b13-q06 | points 3 | outcome o7 | difficulty easy

#### Question

Circle c₁ has centre (0, 0) and radius 3; circle c₂ has centre (10, 0) and radius 2. Compute the distance between the two circles.

#### Answer

5

#### Solution

Distance between centres: 10. Since 10 > 3 + 2 = 5, the circles are separate (external). Distance between the circles: 10 − 3 − 2 = 5, measured along the line through the centres.

### mathb-b13-q07 | points 4 | outcome o6 | difficulty medium

#### Question

From the point P(0, 6), two tangents to the circle x² + y² = 8 are drawn. Compute the distance from P to the nearest point of the circle, and the length |PT| from P to a tangent point T.

#### Answer

Nearest distance 6 − 2√2 ≈ 3.17; |PT| = 2√7 ≈ 5.29

#### Solution

Centre O(0, 0), radius r = √8 = 2√2 ≈ 2.83. |OP| = 6. Nearest point of the circle: on segment OP at distance r from O, so distance from P is 6 − 2√2 ≈ 3.17. For the tangent: triangle OTP is right-angled at T (tangent ⊥ radius), so |PT| = √(|OP|² − r²) = √(36 − 8) = √28 = 2√7 ≈ 5.29.

### mathb-b13-q08 | points 5 | outcome o9 | difficulty medium

#### Question

Triangle ABC has A(0, 0), B(8, 0), C(0, 6).

a. Show that the triangle is right-angled.

b. Give the equation of its circumscribed circle.

#### Answer

a. *AB*→·*AC*→ = 0; b. (x − 4)² + (y − 3)² = 25

#### Solution

a. *AB*→ = (8, 0), *AC*→ = (0, 6): dot product 0, so angle A is 90°. b. Converse of Thales: the centre is the midpoint of the hypotenuse BC: M = (4, 3); radius ½|BC| = ½√(64 + 36) = ½·10 = 5. Equation: (x − 4)² + (y − 3)² = 25. Check A: 16 + 9 = 25 ✓.

### mathb-b13-q09 | points 5 | outcome o3 | difficulty hard

#### Question

Show that the line x + y = 2 + √2 is tangent to the circle (x − 1)² + (y − 1)² = 1, and give the tangent point.

#### Answer

Tangent point (1 + ½√2, 1 + ½√2)

#### Solution

Substitute y = 2 + √2 − x into the circle equation. With u = x − 1 (so y − 1 = 1 + √2 − x = √2 − u): u² + (√2 − u)² = 1 ⇔ u² + 2 − 2√2·u + u² = 1 ⇔ 2u² − 2√2·u + 1 = 0. Discriminant: (2√2)² − 4·2·1 = 8 − 8 = 0: exactly one solution, so the line is a tangent. Solution: u = (2√2)/(2·2) = ½√2, so x = 1 + ½√2 and y = 2 + √2 − 1 − ½√2 = 1 + ½√2. Tangent point (1 + ½√2, 1 + ½√2). Check the distance: |1 + 1 − (2 + √2)|/√(1² + 1²) = √2/√2 = 1 = r ✓.
