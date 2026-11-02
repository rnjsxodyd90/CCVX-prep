# B5 — Trigonometry: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Right-angled triangles: SOH-CAH-TOA

- In a right-angled triangle (*rechthoekige driehoek*) with acute angle α: sin α = opposite/hypotenuse, cos α = adjacent/hypotenuse, tan α = opposite/adjacent — memorised in Dutch as **SOSCASTOA** (*schuine zijde* = hypotenuse).
- Consequence: tan(x) = sin(x) / cos(x).
- To find a side: pick the ratio containing the known side and the unknown side. To find an angle: compute the ratio, then use the inverse function sin⁻¹, cos⁻¹ or tan⁻¹ on the calculator.

## 2. The unit circle and radians

- Unit circle (*eenheidscirkel*): centre O(0,0), radius 1. A point rotating from (1,0) through angle α has coordinates (cos α, sin α). So sine and cosine are *coordinates*, defined for every angle, not only acute ones.
- Signs by quadrant: I (both +), II (sin +, cos −), III (both −), IV (sin −, cos +).
- Radians (*radialen*): measure the angle by the arc length on the unit circle. The full turn is 2π rad, so **180° = π rad**; 1° = π/180 rad, and 1 rad = 180/π ° ≈ 57.3°.
- Standard conversions: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 120° = 2π/3, 135° = 3π/4, 150° = 5π/6, 270° = 3π/2.
- For goniometric functions in this syllabus we work in radians almost always. Check your calculator's RAD/DEG setting explicitly in each solution.

## 3. Exact values

From the half equilateral triangle (30-60-90: sides 1, √3, 2) and the half square (45-45-90: sides 1, 1, √2):

| x | 0 | π/6 (30°) | π/4 (45°) | π/3 (60°) | π/2 (90°) |
|---|---|---|---|---|---|
| sin x | 0 | ½ | ½√2 | ½√3 | 1 |
| cos x | 1 | ½√3 | ½√2 | ½ | 0 |
| tan x | 0 | ⅓√3 | 1 | √3 | — |

Extend across the circle with symmetry and signs, e.g. sin(5π/6) = sin(π/6) = ½, cos(5π/6) = −cos(π/6) = −½√3, sin(3π/2) = −1.

## 4. The Pythagorean identity

- From the unit circle with Pythagoras: **sin²α + cos²α = 1**, printed on the exam's formula sheet.
- Consequences: sin²α = 1 − cos²α and cos²α = 1 − sin²α; given one ratio and the quadrant, compute the other exactly. Example: sin α = 3/5 in quadrant II gives cos α = −4/5.

## 5. Sum, difference and double-angle formulas

All on the formula sheet:

- sin(t + u) = sin t cos u + cos t sin u
- sin(t − u) = sin t cos u − cos t sin u
- cos(t + u) = cos t cos u − sin t sin u
- cos(t − u) = cos t cos u + sin t sin u

Double-angle cases (u = t):

- sin(2t) = 2 sin t cos t
- cos(2t) = cos²t − sin²t = 2 cos²t − 1 = 1 − 2 sin²t

Typical uses:

- Exact values of 15° and 75°: sin(15°) = sin(45° − 30°) = ½√2·½√3 − ½√2·½ = ¼(√6 − √2).
- Rewriting to a single sine: a sin x + b cos x can often be handled via the sum form in reverse — e.g. sin x + cos x = √2 sin(x + π/4) (check: √2·(sin x cos π/4 + cos x sin π/4) = √2·½√2·(sin x + cos x) = sin x + cos x).
- Proving identities, e.g. cos(2x) = 2 cos²x − 1 gives the power-lowerer cos²x = ½(1 + cos 2x), used constantly in [B09](../B09-integration/) for ∫ sin²x dx.
- Solving equations: cos(2x) = cos x becomes 2 cos²x − 1 = cos x (see [B06](../B06-trigonometric-functions/)).

## 6. Sine and cosine rules

For arbitrary triangles (angles opposite the sides with the same letter, standard notation):

- Sine rule (*sinusregel*): a/sin α = b/sin β = c/sin γ. Use with a known pair (side + opposite angle) plus one extra side or angle.
- Cosine rule (*cosinusregel*): a² = b² + c² − 2bc cos α. Use with three sides, or two sides with the enclosed angle.
- Choosing: one pair known → sine rule; three sides or side-angle-side → cosine rule. Details and geometry examples in [B11](../B11-triangle-geometry/).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — SOH-CAH-TOA

In right-angled triangle ABC (right angle at C) the hypotenuse AB = 10 and angle A = 35°. Compute BC and AC (2 decimals).

**Solution.** BC is opposite A: BC = AB·sin 35° = 10 × 0.5736 ≈ 5.74. AC is adjacent: AC = AB·cos 35° = 10 × 0.8192 ≈ 8.19.

## Example 2 — degrees and radians

Convert to radians exactly: 210° and 75°. Convert to degrees: 7π/6 and π/12.

**Solution.** 210° = 210·π/180 = 7π/6. 75° = 75π/180 = 5π/12. 7π/6 = 7/6·180° = 210°. π/12 = 180/12 = 15°.

## Example 3 — exact values across the circle

Give the exact values of sin(4π/3), cos(3π/4) and sin(11π/6).

**Solution.** 4π/3 = π + π/3 is in quadrant III: sin(4π/3) = −sin(π/3) = −½√3. 3π/4 = π − π/4, quadrant II: cos(3π/4) = −cos(π/4) = −½√2. 11π/6 = 2π − π/6, quadrant IV: sin(11π/6) = −sin(π/6) = −½.

## Example 4 — Pythagorean identity with a quadrant condition

Given cos α = −5/13 and ½π < α < π, compute sin α and tan α exactly.

**Solution.** sin²α = 1 − cos²α = 1 − 25/169 = 144/169, so sin α = ±12/13. Quadrant II means sin > 0: sin α = 12/13. Then tan α = (12/13)/(−5/13) = −12/5.

## Example 5 — sum formula for an exact value

Compute sin(75°) exactly with the sum formula.

**Solution.** sin(75°) = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = ½√2·½√3 + ½√2·½ = ¼√6 + ¼√2 = ¼(√6 + √2). (≈ 0.966.)

## Example 6 — solving with a double angle

Solve exactly for 0 ≤ x ≤ 2π: cos(2x) = cos x.

**Solution.** 2 cos²x − 1 = cos x ⇔ 2 cos²x − cos x − 1 = 0. Set y = cos x: 2y² − y − 1 = (2y + 1)(y − 1) = 0 ⇔ y = −½ or y = 1. cos x = 1 gives x = 0 and x = 2π. cos x = −½ gives x = 2π/3 and x = 4π/3.

**Answer:** x = 0, 2π/3, 4π/3, 2π

## Example 7 — sine rule vs cosine rule

Triangle PQR: p = 8, q = 5, angle R = 60°. Compute r exactly, then angle Q (1 decimal°).

**Solution.** Two sides with enclosed angle → cosine rule: r² = 8² + 5² − 2·8·5·cos 60° = 64 + 25 − 80·½ = 49, so r = 7. Then the sine rule: sin Q / q = sin R / r ⇔ sin Q = 5·sin 60°/7 = 5·½√3/7 = 5√3/14 ≈ 0.6186 ⇔ Q ≈ 38.2°. (Q is acute because q < r.)
