# B11 — Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — cosine rule then sine rule

In triangle ABC: a = 7, b = 5, c = 8. Compute angle α (1 decimal°).

**Solution.** Three sides → cosine rule: cos α = (b² + c² − a²)/(2bc) = (25 + 64 − 49)/(2·5·8) = 40/80 = ½, so α = 60° exactly.

## Example 2 — area with trigonometry

Triangle PQR: p = 6, r = 9, angle Q = 50°. Compute the area (2 decimals).

**Solution.** The enclosed angle is Q, the adjacent sides are p and r: area = ½·p·r·sin Q = ½·6·9·sin 50° = 27 × 0.76604 ≈ 20.68.

## Example 3 — exact work with the sine rule

In triangle ABC: α = 45°, β = 60°, a = 6. Compute b exactly.

**Solution.** b = a·sin β/sin α = 6·(½√3)/(½√2) = 6·√3/√2 = 6·√(3/2) = 6·(√6/2) = 3√6 (≈ 7.35).

## Example 4 — similarity in action

A 1.80 m person casts a 2.40 m shadow; at the same moment a tree casts a 9.60 m shadow. How tall is the tree?

**Solution.** Same sun angle → similar right triangles. Height/shadow is constant: h/9.60 = 1.80/2.40 = ¾, so h = ¾ × 9.60 = 7.20 m.

## Example 5 — centroid

Triangle with vertices A(0, 0), B(6, 0), C(2, 6). Give the coordinates of the centroid Z and show that the median from A is divided by Z in the ratio 2 : 1.

**Solution.** Z = ((0+6+2)/3, (0+0+6)/3) = (8/3, 2). Midpoint of BC: M = (4, 3). Parametrise the median A→M: P(t) = (4t, 3t). Z = (8/3, 2) corresponds to t = 2/3. So |AZ| = (2/3)|AM| and |ZM| = (1/3)|AM|: indeed 2 : 1 with the long part at the vertex.

## Example 6 — a proof

Claim: in isosceles triangle ABC with AC = BC, the median from C is perpendicular to AB. Prove it.

**Solution.** Let M be the midpoint of AB.
1. AC = BC (given, isosceles).
2. AM = BM (M is the midpoint).
3. CM = CM (common side).
4. Triangles AMC and BMC have three equal sides, so they are congruent; hence their angles at M, ∠AMC and ∠BMC, are equal.
5. ∠AMC + ∠BMC = 180° (straight line A-M-B), so each is 90°. ∎
