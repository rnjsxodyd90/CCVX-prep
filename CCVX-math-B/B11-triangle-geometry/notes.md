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
