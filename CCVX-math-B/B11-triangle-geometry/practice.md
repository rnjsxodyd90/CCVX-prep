# B11 — Triangle geometry: practice

Eight original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o8 match the numbered learning outcomes in [README.md](README.md).

### mathb-b11-q01 | points 2 | outcome o4 | difficulty easy

#### Question

In triangle ABC: a = 10, α = 35°, β = 80°. Compute b (2 decimals).

#### Answer

b ≈ 17.17

#### Solution

Sine rule: b = a·sin β / sin α = 10 · sin 80°/sin 35° = 10 × 0.98481/0.57358 ≈ 17.17.

### mathb-b11-q02 | points 3 | outcome o4 | difficulty medium

#### Question

A triangle has sides 3, 7 and 8. Compute the largest angle (1 decimal°).

#### Answer

≈ 98.2° (exactly cos γ = −1/7)

#### Solution

The largest angle γ faces the longest side 8. Cosine rule: cos γ = (3² + 7² − 8²)/(2·3·7) = (9 + 49 − 64)/42 = −6/42 = −1/7. So γ = cos⁻¹(−1/7) ≈ 98.2°. A negative cosine means obtuse, as expected.

### mathb-b11-q03 | points 3 | outcome o2 | difficulty medium

#### Question

Triangle ABC: a = 5, c = 7, β = 120°. Compute the exact area.

#### Answer

35√3/4 ≈ 15.16

#### Solution

Area = ½·a·c·sin β = ½·5·7·sin 120°. Since sin 120° = sin 60° = ½√3, area = ½·5·7·½√3 = (35√3)/4 ≈ 15.16.

### mathb-b11-q04 | points 2 | outcome o1 | difficulty easy

#### Question

Show that the triangle with sides 7, 24 and 25 is right-angled, without computing any angle.

#### Answer

Yes — 7² + 24² = 25²

#### Solution

Converse of Pythagoras: 7² + 24² = 49 + 576 = 625 = 25². So the triangle is right-angled, with the right angle facing the side of length 25.

### mathb-b11-q05 | points 2 | outcome o3 | difficulty easy

#### Question

In triangle ABC: α = 47°, β = 63°. Compute γ and the exterior angle at C, and verify the exterior-angle rule.

#### Answer

γ = 70°; exterior angle 110°, which equals α + β

#### Solution

γ = 180° − 47° − 63° = 70° (angle sum). Exterior angle at C = 180° − 70° = 110°, and indeed α + β = 47° + 63° = 110° ✓.

### mathb-b11-q06 | points 3 | outcome o6 | difficulty medium

#### Question

In triangle ABC, D lies on AB with AD = 2 and DB = 4, and DE ∥ BC with E on AC. Given AC = 9, compute AE and EC.

#### Answer

AE = 3, EC = 6

#### Solution

DE ∥ BC makes triangle ADE similar to triangle ABC (two equal angles: A shared, corresponding angles at D and B). Ratio AD : AB = 2 : 6 = 1 : 3, so AE = (1/3)·AC = 3 and EC = 9 − 3 = 6.

### mathb-b11-q07 | points 4 | outcome o7 | difficulty medium

#### Question

Triangle with A(1, 1), B(7, 1), C(1, 7).

a. Compute the centroid Z.

b. Show that Z divides the median from C in the ratio 2 : 1.

#### Answer

a. Z(3, 3); b. shown via P(2/3) = Z on median CM

#### Solution

a. Z = ((1 + 7 + 1)/3, (1 + 1 + 7)/3) = (3, 3). b. Midpoint of AB: M = (4, 1). Points on the median from C: P(t) = C + t·(M − C) = (1 + 3t, 7 − 6t). Z = (3, 3) matches t = 2/3 (check both coordinates ✓). So |CZ| = (2/3)|CM| and |ZM| = (1/3)|CM|: ratio 2 : 1, the long part at the vertex.

### mathb-b11-q08 | points 5 | outcome o8 | difficulty hard

#### Question

Triangle with vertices A(1, 1), B(5, 3), C(3, 7).

a. Prove the triangle is isosceles and right-angled.

b. Compute the area exactly.

#### Answer

a. |AB| = |BC| = √20 and the angle at B is 90°; b. 10

#### Solution

a. *AB*→ = (4, 2), so |AB| = √(16 + 4) = √20. *BC*→ = (−2, 4), so |BC| = √(4 + 16) = √20. Equal lengths: isosceles with apex B. Dot product: *BA*→ · *BC*→ = (−4, −2)·(−2, 4) = 8 − 8 = 0, so the angle at B is 90° ([B12](../B12-vectors/)). b. Two perpendicular legs of length √20: area = ½·√20·√20 = ½·20 = 10.
