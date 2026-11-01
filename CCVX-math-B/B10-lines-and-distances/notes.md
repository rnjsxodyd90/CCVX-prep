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
