# B12 — Vectors: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. On paper, vectors get an arrow: v⃗. In these notes we write v⃗ or **v**.

## 1. The vector concept

- A vector (*vector*) is a displacement over a distance in a direction: it has a length |v⃗| and a direction. Two vectors with the same length and the same direction are equal, wherever they start.
- *AB*→ is the displacement from A to B. The zero vector (*nulvector*) 0⃗ has |0⃗| = 0 and is the only vector without a direction.
- *BA*→ = −*AB*→: same length, opposite direction.

## 2. Adding and scaling

- Addition: head-to-tail (*kop-staart-methode*): *AB*→ + *BC*→ = *AC*→. Subtraction: a⃗ − b⃗ = a⃗ + (−b⃗); the diagonal in the parallelogram is a⃗ + b⃗, the other diagonal (from head of b⃗ to head of a⃗) is a⃗ − b⃗.
- Scalar multiple: c·a⃗ with c > 0 has the same direction, with c < 0 the opposite direction; |c·a⃗| = |c|·|a⃗|.

## 3. Components

- With respect to the axes: vector (a, b) moves a in the x-direction and b in the y-direction. *OA*→ for A(4, 3) is (4, 3) — the position vector (*plaatsvector*) of A.
- Displacement between points: *AB*→ = *OB*→ − *OA*→ = (b₁ − a₁, b₂ − a₂).
- Componentwise arithmetic: (a₁, a₂) ± (b₁, b₂) = (a₁ ± b₁, a₂ ± b₂); c·(a₁, a₂) = (ca₁, ca₂).
- Length: |(a₁, a₂)| = √(a₁² + a₂²) (Pythagoras). Zero vector: (0, 0).
- Decomposition along the axes: (4, 3) = (4, 0) + (0, 3).

## 4. The dot product

- Definition (*inwendig product*, *inproduct*): a⃗ · b⃗ = |a⃗|·|b⃗|·cos α, with α the angle between the vectors.
- In components: (a₁, a₂)·(b₁, b₂) = a₁b₁ + a₂b₂. These two forms are equal — that is the whole tool.
- Hence: cos α = (a₁b₁ + a₂b₂)/(|a⃗|·|b⃗|): the angle between any two vectors is computable.
- Properties: commutative; a⃗·a⃗ = |a⃗|²; distributive over addition.

## 5. Perpendicularity

- a⃗ ⊥ b⃗ ⇔ a⃗ · b⃗ = 0, provided neither is the zero vector. Both directions hold: perpendicular ⇒ dot product 0, and dot product 0 ⇒ perpendicular.
- This test replaces slope computations when coordinates are awkward; it is also the fastest way to prove right angles in geometry (see [B13](../B13-circle-geometry/)).

## 6. The vector equation of a line

- (*vectorvoorstelling*, also parametervoorstelling): (x, y) = (a, b) + λ·(p, q). The line passes through (a, b) (the *steunvector* = position vector) with direction (p, q) (the *richtingsvector*); λ is the parameter: each λ gives one point.
- Every point of the line corresponds to exactly one λ, and the slope is q/p (p ≠ 0).
- Two vector equations describe the same line when the direction vectors are scalar multiples of each other AND a point of one line lies on the other.

## 7. The normal vector

- A normal vector (*normaalvector*) of a line is any vector perpendicular to its direction vector.
- Direction (p, q) → a normal is (−q, p) (dot product −pq + pq = 0 ✓).
- The line px + qy = c has normal vector (p, q): the coefficients of the equation ARE a normal vector. A matching direction vector is (−q, p), with dot product p·(−q) + q·p = 0 ✓. This connects the vector world with the equation world of [B10](../B10-lines-and-distances/).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

### Example 1 — vector arithmetic

Given a⃗ = (3, −1) and b⃗ = (1, 4). Compute: 2a⃗ + b⃗, a⃗ − 3b⃗, and their lengths.

**Solution.** 2a⃗ + b⃗ = (6, −2) + (1, 4) = (7, 2), length √53. a⃗ − 3b⃗ = (3, −1) − (3, 12) = (0, −13), length 13.

### Example 2 — displacement vector and length

A(2, 5) and B(−1, 1). Compute *AB*→ and |*AB*→|.

**Solution.** *AB*→ = *OB*→ − *OA*→ = (−1 − 2, 1 − 5) = (−3, −4). Length: √(9 + 16) = √25 = 5.

### Example 3 — angle between vectors

Compute the angle between a⃗ = (2, 1) and b⃗ = (1, −3) (1 decimal°).

**Solution.** a⃗·b⃗ = 2 − 3 = −1; |a⃗| = √5, |b⃗| = √10. cos α = −1/(√5·√10) = −1/√50 = −1/(5√2) ≈ −0.14142, so α ≈ 98.1°.

### Example 4 — perpendicularity

Show that the triangle with vertices A(3, 3), B(0, 0), C(−3, 3) is right-angled at B, and also isosceles.

**Solution.** *BA*→ = (3 − 0, 3 − 0) = (3, 3) and *BC*→ = (−3 − 0, 3 − 0) = (−3, 3). Dot product: 3·(−3) + 3·3 = −9 + 9 = 0, so *BA*→ ⊥ *BC*→ and the angle at B is 90°. Lengths: |*BA*→| = √18 and |*BC*→| = √18, equal, so the triangle is also isosceles. (Tip for making your own checks: start from a perpendicular pair of vectors like (p, q) and (−q, p).)

### Example 5 — vector equation of a line

a. Give a vector equation of the line through A(1, 4) with direction (2, −3).

b. Give a vector equation of the line y = 2x − 1.

c. Does P(5, −2) lie on the line of part a?

**Solution.** a. (x, y) = (1, 4) + λ(2, −3). b. Direction vector from slope 2: (1, 2); a point on the line: (0, −1). So (x, y) = (0, −1) + λ(1, 2). c. Need 1 + 2λ = 5 → λ = 2 gives y = 4 − 6 = −2 ✓. Yes, P lies on it (at λ = 2).

### Example 6 — normal vector of a line

Give a normal vector of l: 3x − 4y = 12, then use it to write a vector equation of the perpendicular through A(1, 1).

**Solution.** Normal: (3, −4) (the coefficients). The perpendicular *along* the normal has direction (3, −4): (x, y) = (1, 1) + λ(3, −4). Check: l has slope 3/4, the perpendicular has slope −4/3, product −1 ✓.
