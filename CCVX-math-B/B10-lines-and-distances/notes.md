# B10 — Lines and distances (coordinate geometry): notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. We work in a right-angled coordinate system with equal units on both axes.

## 1. Equations of a line

- Common form: y = ax + b — slope (*richtingscoëfficiënt*) a, y-intercept b. Vertical lines have no slope: x = p.
- General form: mx + ny = c — works for every line, including vertical ones; from it, y = −(m/n)x + c/n when n ≠ 0.
- Intercept form: the line through (p, 0) and (0, q) can be written x/p + y/q = 1 (p, q ≠ 0).
- Slope through two points: a = (y_B − y_A)/(x_B − x_A) = Δy/Δx.
- Setting up a line: get the slope (or the normal vector (m, n)) plus one point, then substitute the point to find the missing constant. For y = ax + b: b = y_P − a·x_P.

## 2. Angles between lines

- Direction angle (*richtingshoek*) α of a non-vertical line: tan α = slope, with −90° < α < 90°.
- Angle between two lines: the smallest angle at the intersection, 0° ≤ β ≤ 90°. Compute both direction angles and subtract; take the supplement if the difference exceeds 90°.
- Perpendicular test: two (non-vertical) lines are perpendicular exactly when the product of the slopes equals −1 — both directions hold.

## 3. Perpendicular lines

- The perpendicular line (*loodlijn*) to y = ax + b has slope −1/a. Through a given point P: y = −x/a + b′, find b′ from P.
- For vertical/horizontal pairs: perpendicular to x = p is y = q and vice versa.

## 4. Distances

- Two points A(a₁, a₂), B(b₁, b₂): |AB| = √((b₁ − a₁)² + (b₂ − a₂)²) (Pythagoras). Notation also d(A, B).
- Point P to line l: construct the perpendicular from P to l, intersect, measure. The formula d = |m·x_P + n·y_P − c|/√(m² + n²) for l: mx + ny = c may be used but is *not assumed known* — derive it when needed, or work via the perpendicular line.
- Two parallel lines: take any point on one line and compute its distance to the other.
- Projection (*projectie*) of a point on a line: the foot of the perpendicular — the closest point of the line to P.

## 5. Perpendicular bisector and angle bisector

- The perpendicular bisector (*middelloodlijn*) of A and B is the set of all points P with |PA| = |PB|: the line through the midpoint of AB, perpendicular to AB. To get its equation: slope of AB → perpendicular slope → through the midpoint.
- The angle bisector pair (*bissectricepaar*) of lines l and m: all points P with d(P, l) = d(P, m). Two perpendicular lines, one bisecting each pair of angles. Practical method via distances: |a₁x + b₁y − c₁|/√(a₁² + b₁²) = |a₂x + b₂y − c₂|/√(a₂² + b₂²) for lines in general form; or from the direction vectors: bisectors follow the sum/difference of the two unit direction vectors.

## 6. Algebraic methods in geometry

- Intersection of two lines: solve the system ([B01](../B01-algebraic-skills/)).
- Intersection peak problems: "find P on l with minimal |PA|" = projection of A on l.
- Collinearity: A, B, C collinear ⇔ slope AB = slope BC (or *AB*→ is a scalar multiple of *BC*→, see [B12](../B12-vectors/)).
- Choosing your own coordinate system: place a convenient figure vertex at the origin and align an axis with a symmetry when the problem allows it — allowed because the units are equal and the axes perpendicular.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — line through two points, two ways

Line through A(1, 5) and B(4, −1). Give the equation in the form y = ax + b and in the general form.

**Solution.** Slope: (−1 − 5)/(4 − 1) = −6/3 = −2. From A: 5 = −2·1 + b ⇔ b = 7: y = −2x + 7. General form: 2x + y = 7. (Intercept form: x/(7/2) + y/7 = 1.)

## Example 2 — angle between two lines

Compute the angle between l: y = 2x + 1 and m: y = −3x + 4 (1 decimal°).

**Solution.** Direction angles: tan α = 2 → α ≈ 63.435°; tan β = −3 → β ≈ −71.565°. Difference: 63.435 − (−71.565) = 135°. The angle between lines is at most 90°, so take the supplement: 180 − 135 = 45°. The lines meet at 45°.

## Example 3 — perpendicular line through a point

Give the perpendicular (*loodlijn*) through P(6, 1) to l: y = ⅓x + 2.

**Solution.** Slope of the perpendicular: −1/(1/3) = −3. Through P: y = −3x + b with 1 = −18 + b ⇔ b = 19: y = −3x + 19.

## Example 4 — distance from point to line

Compute the distance from P(2, 5) to the line l: y = 2x − 1 (2 decimals).

**Solution.** Perpendicular through P: slope −½: y = −½x + 6. Intersect: 2x − 1 = −½x + 6 ⇔ (5/2)x = 7 ⇔ x = 14/5 = 2.8; y = 2·2.8 − 1 = 4.6. Foot Q(2.8, 4.6). Distance: √((2.8 − 2)² + (4.6 − 5)²) = √(0.64 + 0.16) = √0.8 = ⅖√5 ≈ 0.89. (Check with the formula: |2·2 − 5 − 1|/√(2² + 1²) = 2/√5 = ⅖√5 ✓.)

## Example 5 — perpendicular bisector

Give the equation of the perpendicular bisector of A(−1, 2) and B(5, 4).

**Solution.** Midpoint M = ((−1+5)/2, (2+4)/2) = (2, 3). Slope AB: (4 − 2)/(5 + 1) = 1/3, so the bisector slope is −3. Equation: y = −3(x − 2) + 3 = −3x + 9. Check with |PA| = |PB| on a point, say (0, 9): |PA|² = 1 + 49 = 50; |PB|² = 25 + 25 = 50 ✓.

## Example 6 — distance between parallel lines

Compute the distance between l: 3x + 4y = 12 and m: 3x + 4y = 24.

**Solution.** Take a point on l: (0, 3) (set x = 0). Distance from (0, 3) to m: perpendicular slope 4/3 (since m's slope is −¾): y = (4/3)x + 3. Intersect with m: 3x + 4((4/3)x + 3) = 24 ⇔ 3x + (16/3)x + 12 = 24 ⇔ (25/3)x = 12 ⇔ x = 36/25; y = (4/3)(36/25) + 3 = 48/25 + 75/25 = 123/25. Distance: √((36/25)² + (48/25)²) = √(1296 + 2304)/25 = √3600/25 = 60/25 = 12/5 = 2.4. (Formula check: |24 − 12|/√(3² + 4²) = 12/5 ✓.)
