# B11 — Triangle geometry: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Standard notation: in triangle ABC, side a faces vertex A (angle α), side b faces B (angle β), side c faces C (angle γ).

## 1. Pythagoras

- In a right-angled triangle: a² + b² = c² with c the hypotenuse (*schuine zijde*). Use it also in reverse: if a² + b² = c² the triangle is right-angled.
- The theorem of Pythagoras is the engine behind the distance formula ([B10](../B10-lines-and-distances/)), the circle equation ([B13](../B13-circle-geometry/)) and the vector length ([B12](../B12-vectors/)).

## 2. Area

- Area (*oppervlakte*) = ½ × base × height. Any side can be the base; the *height* (*hoogte*) is the perpendicular distance from the opposite vertex.
- With trigonometry: area = ½·b·c·sin α (two sides with enclosed angle). This follows from h = b·sin α with c as base.
- Heron's formula is *not* in the syllabus.

## 3. Angle sum

- α + β + γ = 180° (π rad). Exterior angle = sum of the two non-adjacent interior angles.

## 4. Sine rule and cosine rule

Not on the formula sheet — memorise:

- Sine rule (*sinusregel*): a/sin α = b/sin β = c/sin γ. Use when you know a complete pair (side + opposite angle) plus one extra piece (a side or an angle).
- Cosine rule (*cosinusregel*): a² = b² + c² − 2bc·cos α. Use with three sides (find an angle) or two sides with the enclosed angle (find the third side).
- Choice table: SSS or SAS → cosine rule; AAS/ASA/SSA → sine rule. For SSA beware the ambiguous case (for which the exam will normally pick a clean configuration).
- Mixed with exact angles ([B05](../B05-trigonometry/)): work exactly.

## 5. Special triangles

- Isosceles (*gelijkbenig*): equal legs, equal base angles. The altitude from the apex bisects the base and the apex angle.
- Equilateral (*gelijkzijdig*): all angles 60°; half of it is the 30-60-90 triangle of the exact values.
- 45-45-90: legs equal, hypotenuse leg·√2.

## 6. Similarity

- Similar triangles (*gelijkvormige driehoeken*): equal angles; then ratios of corresponding sides are equal. Conversely, equal side ratios give equal angles.
- Classic use: a line parallel to a side cuts the triangle into a similar smaller triangle — proportions transfer. Heights and shadows problems are the standard context.
- Proof strategy: find two equal angles (AA suffices).

## 7. Medians and the centroid

- Median (*zwaartelijn*): from a vertex to the midpoint of the opposite side. The three medians meet in the centroid (*zwaartepunt*) Z.
- Z divides each median in the ratio 2 : 1, the long part being on the vertex side.
- Coordinates: Z = ((x_A + x_B + x_C)/3, (y_A + y_B + y_C)/3) — the average of the vertices.
- Area fact: each median bisects the area of the triangle.

## 8. Proving geometric properties

Typical CCVX proof patterns:

- Compute both quantities and show they are equal (algebraic proof);
- Show two triangles similar, then transfer a ratio;
- Use the converse of a theorem (e.g. right angle via a² + b² = c², or via Thales [B13](../B13-circle-geometry/));
- Symmetry: equal distances to an axis, identical coordinates up to sign.
Write the proof in clear numbered steps, each step one statement with a reason.

## Worked examples

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
