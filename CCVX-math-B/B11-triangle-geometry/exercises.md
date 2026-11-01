# B11 — Practice questions with solutions

Eight original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. A full worked solution follows every question.

## Q1 — sine rule

In triangle ABC: a = 10, α = 35°, β = 80°. Compute b (2 decimals).

**Solution.** b = a·sin β / sin α = 10 · sin 80°/sin 35° = 10 × 0.98481/0.57358 ≈ 17.17.

**Answer:** b ≈ 17.17

## Q2 — cosine rule for an obtuse angle

A triangle has sides 3, 7 and 8. Compute the largest angle (1 decimal°).

**Solution.** The largest angle faces side 8: cos γ = (3² + 7² − 8²)/(2·3·7) = (9 + 49 − 64)/42 = −6/42 = −1/7. γ = cos⁻¹(−1/7) ≈ 98.2°. (Negative cosine ↔ obtuse, as expected for the largest side.)

**Answer:** ≈ 98.2° (exactly cos γ = −1/7)

## Q3 — exact area

Triangle ABC: a = 5, c = 7, β = 120°. Compute the exact area.

**Solution.** Area = ½·a·c·sin β = ½·5·7·sin 120°. sin 120° = sin 60° = ½√3, so area = ½ · 5 · 7 · ½√3 = (35√3)/4 ≈ 15.16.

**Answer:** 35√3/4 ≈ 15.16

## Q4 — is it right-angled?

Show that the triangle with sides 7, 24 and 25 is right-angled, without computing any angle.

**Solution.** Converse of Pythagoras: 7² + 24² = 49 + 576 = 625 = 25². So the triangle is right-angled, with the right angle facing the side of length 25.

**Answer:** yes — 7² + 24² = 25²

## Q5 — angle sum and exterior angle

In triangle ABC: α = 47°, β = 63°. Compute γ and the exterior angle at C, and verify the exterior-angle rule.

**Solution.** γ = 180° − 47° − 63° = 70°. Exterior angle at C = 180° − 70° = 110°, which indeed equals α + β = 47° + 63° = 110° ✓.

**Answer:** γ = 70°; exterior 110° = α + β

## Q6 — similarity with a parallel line

In triangle ABC, D lies on AB with AD = 2 and DB = 4, and DE ∥ BC with E on AC. Given AC = 9, compute AE and EC.

**Solution.** DE ∥ BC makes triangle ADE similar to triangle ABC (equal angles). Ratio AD : AB = 2 : 6 = 1 : 3, so AE = (1/3)·AC = 3 and EC = 9 − 3 = 6.

**Answer:** AE = 3, EC = 6

## Q7 — centroid on a median

Triangle with A(1, 1), B(7, 1), C(1, 7).

a. Compute the centroid Z.

b. Show that Z divides the median from C in the ratio 2 : 1.

**Solution.** a. Z = ((1 + 7 + 1)/3, (1 + 1 + 7)/3) = (3, 3). b. Midpoint of AB: M = (4, 1). Points on median C→M: P(t) = C + t·(M − C) = (1 + 3t, 7 − 6t). Z = (3, 3) matches t = 2/3 (both coordinates ✓). So |CZ| = (2/3)|CM| and |ZM| = (1/3)|CM|: ratio 2 : 1, long part at the vertex ✓.

**Answer:** a. Z(3, 3); b. shown via P(2/3) = Z on median CM

## Q8 — prove and compute

Triangle with vertices A(1, 1), B(5, 3), C(3, 7).

a. Prove the triangle is isosceles and right-angled.

b. Compute the area exactly.

**Solution.** a. *AB*→ = (4, 2), |AB| = √20. *BC*→ = (−2, 4), |BC| = √(4 + 16) = √20. Equal lengths: isosceles with apex B. Dot product: *BA*→ · *BC*→ = (−4, −2)·(−2, 4) = 8 − 8 = 0, so the angle at B is 90°: right-angled. (See [B12](../B12-vectors/) for the dot product.) b. Legs √20 each, perpendicular: area = ½·√20·√20 = ½·20 = 10.

**Answer:** a. |AB| = |BC| = √20 and perpendicular at B; b. 10
