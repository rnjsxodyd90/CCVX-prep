# B12 — Vectors: practice

Eight original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o7 match the numbered learning outcomes in [README.md](README.md).

### mathb-b12-q01 | points 2 | outcome o3 | difficulty easy

#### Question

Given a⃗ = (2, 3) and b⃗ = (−1, 4). Compute a⃗ + b⃗ and 3a⃗ − b⃗, with their lengths in simplified root form.

#### Answer

(1, 7) with length 5√2; (7, 5) with length √74

#### Solution

a⃗ + b⃗ = (2 − 1, 3 + 4) = (1, 7); length √(1 + 49) = √50 = 5√2. 3a⃗ − b⃗ = (6, 9) − (−1, 4) = (7, 5); length √(49 + 25) = √74 (74 = 2·37, no square factor).

### mathb-b12-q02 | points 2 | outcome o3 | difficulty easy

#### Question

A(−2, 3) and B(4, −1). Give *AB*→ and |*AB*→| in simplified root form.

#### Answer

*AB*→ = (6, −4); length 2√13

#### Solution

*AB*→ = *OB*→ − *OA*→ = (4 − (−2), −1 − 3) = (6, −4). Length: √(36 + 16) = √52 = 2√13.

### mathb-b12-q03 | points 3 | outcome o4 | difficulty medium

#### Question

Compute exactly the angle between a⃗ = (1, √3) and b⃗ = (1, −√3).

#### Answer

120°

#### Solution

a⃗·b⃗ = 1·1 + √3·(−√3) = 1 − 3 = −2. Lengths: |a⃗| = √(1 + 3) = 2, |b⃗| = 2. cos α = −2/4 = −½, so α = 120° exactly.

### mathb-b12-q04 | points 4 | outcome o5 | difficulty hard

#### Question

Line l has the vector equation (x, y) = (0, 5) + λ(2, −1). Find the point P on l for which *OP*→ is perpendicular to l, and give the distance from O to l.

#### Answer

P(2, 4); distance 2√5 ≈ 4.47

#### Solution

A point on l has the form P = (2λ, 5 − λ). *OP*→ = (2λ, 5 − λ) must be perpendicular to the direction vector (2, −1): dot product 2λ·2 + (5 − λ)·(−1) = 4λ − 5 + λ = 5λ − 5 = 0 ⇔ λ = 1. So P = (2, 4). Distance from O: |*OP*→| = √(4 + 16) = √20 = 2√5 ≈ 4.47.

### mathb-b12-q05 | points 3 | outcome o6 | difficulty medium

#### Question

Give a vector equation of the line through (3, −1) that is perpendicular to the line with vector equation (x, y) = (1, 2) + λ(4, 2).

#### Answer

(x, y) = (3, −1) + μ(−1, 2) (any scalar multiple of the direction works)

#### Solution

The given direction (4, 2) ∝ (2, 1). A perpendicular direction: switch and negate one component: (−1, 2) — check: (2, 1)·(−1, 2) = −2 + 2 = 0 ✓. With position vector (3, −1): (x, y) = (3, −1) + μ(−1, 2).

### mathb-b12-q06 | points 3 | outcome o6 | difficulty medium

#### Question

Show that l₁: (x, y) = (1, 3) + λ(2, −1) and l₂: (x, y) = (5, 1) + μ(−4, 2) describe the same line.

#### Answer

They describe the same line.

#### Solution

Directions: (−4, 2) = −2·(2, −1), so the lines are parallel. A point of l₁ on l₂? Take (1, 3): then (1 − 5, 3 − 1) = (−4, 2) = 1·(−4, 2), so μ = 1 gives exactly (1, 3) ✓. Parallel lines sharing a point are the same line.

### mathb-b12-q07 | points 3 | outcome o7 | difficulty medium

#### Question

Compute the angle between the lines l: 2x + 3y = 6 and m: x − y = 1 using normal vectors (1 decimal°).

#### Answer

≈ 78.7°

#### Solution

Normals: n⃗ₗ = (2, 3), n⃗ₘ = (1, −1). cos(angle between normals) = (2·1 + 3·(−1))/(√13·√2) = −1/√26 ≈ −0.19612, so the normals meet at ≈ 101.3°. The angle between two lines equals the acute angle between their normals: 180° − 101.3° ≈ 78.7°.

### mathb-b12-q08 | points 4 | outcome o5 | difficulty hard

#### Question

Quadrilateral ABCD has A(1, 1), B(4, 2), C(5, 5), D(2, 4).

a. Prove with vectors that ABCD is a parallelogram.

b. Prove with the dot product that its diagonals are perpendicular.

c. Is it a rhombus? Justify.

#### Answer

a. *AB*→ = *DC*→ = (3, 1) ✓; b. diagonals (4, 4) and (−2, 2), dot product 0 ✓; c. yes — all sides have length √10

#### Solution

a. *AB*→ = (3, 1); *DC*→ = C − D = (5 − 2, 5 − 4) = (3, 1). One pair of opposite sides equal in length and direction suffices: ABCD is a parallelogram. b. Diagonals: *AC*→ = (4, 4), *BD*→ = D − B = (−2, 2). Dot product: 4·(−2) + 4·2 = 0: perpendicular. c. |*AB*→| = √10 and |*AD*→| = |(1, 3)| = √10: adjacent sides equal, so yes, a rhombus (consistent with the perpendicular diagonals).
