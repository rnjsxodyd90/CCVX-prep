# Walkthrough — CvTE VWO examen wiskunde B, 2023 tijdvak 1 (11 May 2023)

- **Official paper:** VWO wiskunde B, centraal examen 2023 period 1, college code VW-1025-a-23-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2024-06/vw-1025-a-23-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/2023/ex2023/VW-1025-a-23-1-c.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, figures or data — it tells you what each question asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito).

Exam totals: 19 questions, 76 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: rational function with oblique asymptote ([B08](../B08-function-investigation/), [B09](../B09-integration/)), plate bending geometry ([B11](../B11-triangle-geometry/)), force formulas ([A04-style power relations, B07](../B07-differentiation/)), rotated parabola ([B12](../B12-vectors/), [B14](../B14-parametric-curves/)), absolute sine ([B06](../B06-trigonometric-functions/), [B09](../B09-integration/)), log functions with perpendicularity ([B04](../B04-exponential-and-logarithmic-functions/)), rectangle with angle bisector ([B10](../B10-lines-and-distances/), [B12](../B12-vectors/), [B13](../B13-circle-geometry/)), exponential fraction with asymptotes ([B08](../B08-function-investigation/), [B09](../B09-integration/)).

## Question 1 (official paper) — 3 points

**Asked:** the exact minimum of f(x) = 2x + 1/x for x > 0.

**Solution.** f′(x) = 2 − 1/x² = 0 ⇔ x² = ½ ⇔ x = 1/√2 = ½√2 (positive root; the other is outside the domain). Sign of f′ flips − to + there, so a minimum: f(½√2) = 2·½√2 + √2 = 2√2.

**Answer:** 2√2.

**Common mistakes.** Forgetting x > 0 and reporting x = −½√2; calling it an AM-GM result without the derivative (the exam asks for the computation).

**Points:** 3 — derivative, candidate, evaluated minimum.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 2 (official paper) — 5 points

**Asked:** prove the region's area between f, its oblique asymptote and the lines x = a, x = 2a does not depend on a.

**Solution.** As x → ∞, 1/x → 0, so k: y = 2x is the oblique asymptote. The enclosed piece: between f (above) and the line (below) from a to 2a: area = ∫ₐ^{2a} (f(x) − 2x) dx = ∫ₐ^{2a} (1/x) dx = [ln x]ₐ^{2a} = ln(2a) − ln a = ln 2 — no a in sight. ∎

**Common mistakes.** Subtracting the wrong way (the curve sits above the asymptote between these bounds); dropping the log-rules at the end (ln(2a) − ln(a) = ln(2a/a) = ln 2 exactly).

**Points:** 5 — asymptote argument, correct bounds, exact ln(2) finish.

**Subdomain:** [B08](../B08-function-investigation/) and [B09](../B09-integration/).

## Question 3 (official paper) — 4 points

**Asked:** the volume when the region enclosed by the line y = 3 and f is revolved about the x-axis (2 decimals, typical calculator-region).

**Solution.** Intersections f(x) = 3: 2x + 1/x = 3 ⇔ 2x² − 3x + 1 = (2x − 1)(x − 1) = 0 ⇔ x = ½ or x = 1. On [½, 1], f ≤ 3, so rotating gives washers of outer radius 3: V = π∫_{½}¹ (3 − f(x))² dx = π∫_{½}¹ (3 − 2x − 1/x)² dx. Expand: 4x² − 12x + 13 − 6/x + 1/x², with antiderivative (4/3)x³ − 6x² + 13x − 6 ln x − 1/x. Evaluate at 1: 4/3 − 6 + 13 − 1 = 7.3333; at ½: ≈ 7.3256. Difference ≈ 0.00778; times π ≈ 0.0244 → ≈ 0.02.

**Answer:** ≈ 0.02.

**Common mistakes.** Forgetting the outer radius is 3, NOT f (rotating about the x-axis: washers with hole!); outer-inner radii swapped (the line y = 3 is above the curve here); f² polynomial slip in the expansion.

**Points:** 4 — intersections, squared integrand, exact bounds, 2-decimal rounding.

**Subdomain:** [B09](../B09-integration/).

## Question 4 (official paper) — 5 points

**Asked:** algebraically by how many percent the area of the bent plate's front view grew (whole percent).

**Solution.** Neutral arc length P′Q′: at radius 2d + 0.4d = 2.4d wrapping 45° = π/4: length = 2.4d·π/4 = 0.6πd. Original area: neutral arc × thickness: 0.6πd·d = 0.6πd². New front-view area is the ring sector between radii 2d and 3d: (π/4)/2·((3d)² − (2d)²) = (π/8)(9d² − 4d²) = 5πd²/8 = 0.625πd². Increase: (0.625 − 0.6)πd² = 0.025πd², as share of the original: 0.025/0.6 = 1/24 ≈ 4.2% ≈ 4%.

**Answer:** ≈ 4%.

**Common mistakes.** The neutral radius as 2.4d (it sits at distance 0.4d from the 2d arc — read the figure's layer order); percentage off the NEW area (compared to OLD); dropping π in both (it cancels — that's the algebra to show).

**Points:** 5 — neutral arc, both areas, exact percentage.

**Subdomain:** [B11](../B11-triangle-geometry/) and sector geometry, with [A01-style percentage].

## Question 5 (official paper) — 3 points

**Asked:** algebraically the force (whole kN/m) needed for the same plate on a 100 mm opening, given the calibrated model and the 200 mm reference value 420.

**Solution.** Calibrate R from the 420 case: 420 = (R·10²/200)·(1 + 40/200) = 0.6R ⇔ R = 700. At V = 100: F = (700·100/100)·(1 + 40/100) = 700·1.4 = 980 kN/m.

**Answer:** 980 kN/m.

**Common mistakes.** Ratio method without registering R first (proportional thinking fails here — the correction term (1 + 4d/V) changes too); mm-units dropped (the formulas are tuned in mm).

**Points:** 3 — R from calibration, then the new evaluation.

**Subdomain:** [B01](../B01-algebraic-skills/) and [A01-style unit work].

## Question 6 (official paper) — 4 points

**Asked:** exactly the plate thickness d at which the needed force is minimal.

**Solution.** Substitute V = d^{1.75} into formula 1: F(d) = R·d^{0.25} + 4R·d^{−0.5}. Derivative: F′(d) = 0.25R·d^{−0.75} − 2R·d^{−1.5} = 0 ⇔ 0.25·d = 2 ⇔ d = 8^{·...}: 0.25 d^{−0.75} = 2 d^{−1.5} ⇔ d^{0.75} = 8 ⇔ d = 8^{4/3} = 16 mm. (Sign of F′: negative below, positive above — a genuine minimum.)

**Answer:** d = 16.

**Common mistakes.** Fractional-exponent slips (8^{1/(0.75)} = 8^{4/3} = (8^{1/3})⁴ = 16 ✓); for the F-form, sloppy subtraction of exponents (d²/d^{1.75} = d^{0.25} ✓).

**Points:** 4 — substituted formula, derivative, exact d.

**Subdomain:** [B03](../B03-power-and-root-functions/) and [B07](../B07-differentiation/).

## Question 7 (official paper) — 3 points

**Asked:** prove that Q's motion equations are indeed x_Q = t + t², y_Q = t² − t.

**Solution.** M is the midpoint of OP: M = (t, t²). Then *MP*→ = (2t − t, 2t² − t²) = (t, t²). Rotating *MP*→ clockwise over 90° maps (a, b) onto (b, −a), so *MQ*→ = (t², −t). Thus Q = M + (t², −t) = (t + t², t² − t). ∎

**Common mistakes.** Rotating the wrong sense (counterclockwise gives (−b, a) and a mirrored figure); forgetting that M already sits at (t, t²) (the task is M-relative).

**Points:** 3 — the perpendicular rotation applied and moved back to Q.

**Subdomain:** [B12](../B12-vectors/) and [B14](../B14-parametric-curves/).

## Question 8 (official paper) — 3 points

**Asked:** exactly the factor c with which P's speed beats Q's speed at every t.

**Solution.** v_P = √(4 + 16t²) = 2√(1 + 4t²) (given). For Q: x′ = 1 + 2t, y′ = 2t − 1, so v_Q = √((1 + 2t)² + (2t − 1)²) = √(1 + 4t + 4t² + 4t² − 4t + 1) = √(2 + 8t²) = √2·√(1 + 4t²). Ratio v_P/v_Q = 2/√2 = √2 for ALL t: c = √2.

**Common mistakes.** Comparing at one t only (the question says "for every t" — the ratio must be constant, and it is!); summing v_P over the vector instead of its magnitude.

**Points:** 3 — both speed forms, the factor extraction.

**Subdomain:** [B14](../B14-parametric-curves/).

## Question 9 (official paper) — 3 points

**Asked:** prove L = t·√(2t² + 2)·... the given formula for the length L of PQ.

**Solution.** |PQ| = √2·|MP| (right isoceles at M after the 90° rotation). |MP| = √(t² + t⁴) = √(t²(1 + t²)) = |t|·√(1 + t²). So L = √2·|t|·√(1 + t²) = t·√(2t² + 2) for t ≥ 0 — matching the paper's statement. ∎

**Common mistakes.** |MP| computed as the full |PQ| (the rotation means |MP| = |MQ|, so PQ is the hypotenuse!); the root-of-squares simplification √(t²(1+t²)) without the t-sign care.

**Points:** 3 — the geometry relation and the algebraic form.

**Subdomain:** [B12](../B12-vectors/) and [B01](../B01-algebraic-skills/).

## Question 10 (official paper) — 4 points

**Asked:** exactly the slope the graph of L approaches as t comes from the left toward 0.

**Solution.** With the sign-aware length L = |t|·√(2t² + 2), for t < 0 it is L = −t·√(2t² + 2). Its derivative: L′ = −√(2t² + 2) − t·(2t/√(2t² + 2)) → at t ↑ 0: −√2. From the right it approaches +√2 — the corner is real.

**Answer:** −√2.

**Common mistakes.** Using t (unsigned) in the formula and reporting +√2 (the question is precisely about the asymmetry of that corner); derivative of the root evaluated loosely (its value at 0 is 0 for the second term).

**Points:** 4 — the signed form, derivative, one-sided limit.

**Subdomain:** [B02](../B02-functions-and-graphs/) and [B07](../B07-differentiation/).

## Question 11 (official paper) — 3 points

**Asked:** exact a and b of the sinusoid g(x) = a + b sin x whose two successive vertices coincide with the figure's A and B.

**Solution.** f = |sin x + ½√3|: where sin = 1 (first big maximum right of the axis, at π/2): f = 1 + ½√3: point A(π/2, 1 + ½√3). The next maximum is the folded one at sin = −1 (x = 3π/2), because there sin(x) + ½√3 = −1 + ½√3 < 0, so |f| = 1 − ½√3: point B(3π/2, 1 − ½√3). Fit g: g(π/2) = a + b = 1 + ½√3 and g(3π/2) = a − b = 1 − ½√3: a = 1, b = ½√3.

**Answer:** a = 1, b = ½√3.

**Common mistakes.** Treating B as a minimum (it is a (small) local MAXIMUM of |f| — that is exactly what the absolutes do); reading f as sin(x) + 2/3-type; mixing a and b.

**Points:** 3 — both anchored vertices, both equations.

**Subdomain:** [B06](../B06-trigonometric-functions/) and [B02](../B02-functions-and-graphs/).

## Question 12 (official paper) — 5 points

**Asked:** the exact area of a small enclosed region.

**Solution.** f = 0 where sin x = −½√3: solutions x = 4π/3 and 5π/3 (+ k·2π): the small region sits between them. There sin(x) + ½√3 ≤ 0, so |f| = −(sin x + ½√3), and the area equals −∫ from 4π/3 to 5π/3 of (sin x + ½√3) dx = [cos x − ½√3·x] from 4π/3 to 5π/3. At 5π/3: ½ − (5π√3)/6; at 4π/3: −½ − (4π√3)/6 = −½ − (2π√3)/3. Difference: 1 − 5π√3/6 + 2π√3/3 = 1 − π√3/6.

**Answer:** 1 − π√3/6.

**Common mistakes.** Integrating |sin| without the sign flip (the absolute flips the sign exactly on this piece); zeros taken as 2π/3 and 4π/3 (check which solutions of sin = −½√3 frame a SMALL piece); a final sign slip at evaluation.

**Points:** 5 — zeros, the absolute's sign, exact evaluation.

**Subdomain:** [B06](../B06-trigonometric-functions/) and [B09](../B09-integration/).

## Question 13 (official paper) — 6 points

**Asked:** prove that the tangents of f and g at their intersection are perpendicular.

**Solution.** Intersection: ln x = 1 + e²(1 − ln x) ⇔ (1 + e²)·ln x = 1 + e² ⇔ ln x = 1 ⇔ x = e. Slopes: f′(x) = 1/x gives f′(e) = 1/e; g′(x) = e²·(−1/x) gives g′(e) = −e. Product: (1/e)·(−e) = −1 — by the slope-product condition the tangents are perpendicular. ∎

**Common mistakes.** Only checking point equality (the slope product is the perpendicularity's proof); arithmetic slips in g′ (chain factor −1/x after the constant).

**Points:** 6 — intersection, both derivatives, the product test.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) and [B10](../B10-lines-and-distances/).

## Question 14 (official paper) — 4 points

**Asked:** the q (1 decimal) of the shown line that makes the horizontal distance AB = 3, A left of B.

**Solution.** Write A = (p, q) on g and B = (p + 3, q) on f. Then: ln(p + 3) = q and 1 + e²(1 − ln p) = q. The numeric solve (this is a VWO calculator question — at the CCVX the numbers would be chosen exactly): q ≈ 1.7.

**Answer:** q ≈ 1.7.

**Common mistakes.** Writing B = (x_B, ln x_B) and solving separately (couple them!); ln p from A inverted wrongly.

**Points:** 4 — the coupled system and its numeric root.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) and [B01](../B01-algebraic-skills/).

## Question 15 (official paper) — 5 points

**Asked:** prove EF is the angle bisector of ∠PED for p = −2.

**Solution.** Coordinates: E(4, 4) (midpoint of BC), F(4, 0) (midpoint of OA). Line PF through (0, −2) and (4, 0): y = x/2 − 2 ⇔ x − 2y = 4. AC: from (8, 0) to (0, 4): x + 2y = 8. Intersection D: x − 2y = 4 with x + 2y = 8 gives 2x = 12, so D(6, 1). Vectors from E: *EP*→ = (−4, −6), *ED*→ = (2, −3), *EF*→ = (0, −4). Compute cos(∠PEF) = (*EP*→·*EF*→)/(|EP|·|EF|) = 24/(√52·4) = 6/√52 = 3/√13; cos(∠DEF) = (*ED*→·*EF*→)/(|ED|·|EF|) = 12/(√13·4) = 3/√13. Equal cosines ⇒ equal angles ⇒ EF bisects ∠PED. ∎

**Common mistakes.** cos with vectors merged wrongly (watch each vector's tail at E); calling EF the perpendicular bisector (it is the ANGLE bisector — different object); giving a symmetry-based argument without computing (here the dot-product computation IS the proof).

**Points:** 5 — D, all three vectors, both cosines equal.

**Subdomain:** [B12](../B12-vectors/) and [B10](../B10-lines-and-distances/).

## Question 16 (official paper) — 6 points

**Asked:** the exact p for which the circle through D about M is tangent to both OA and BC (fig 2's situation).

**Solution.** Set P = (0, p) on the negative y-axis. Then D is the intersection of line PF with AC: PF: y = p − (p/4)x; AC: x + 2y = 8. Substitute: x + 2p − (p/2)x = 8 ⇔ x = 2(8 − 2p)/(2 − p), and y = 2p/(p − 2). M(4, 2). Tangent to OA (y = 0) and BC (y = 4) requires radius = 2 (the distance from M to either line), so |MD| = 2. Compute components: Δx = 2(8 − 2p)/(2 − p) − 4 = 8/(2 − p); Δy = 2p/(p − 2) − 2 = 4/(p − 2). Then |MD|² = (64 + 16)/(p − 2)² = 80/(p − 2)² = 4 ⇔ (p − 2)² = 20 ⇔ p = 2 ± 2√5. Only the negative one qualifies: p = 2 − 2√5 (because p < 0 by definition).

**Answer:** p = 2 − 2√5.

**Common mistakes.** |MD| written only with Δx or only Δy (both factors land in the same denominator here — the problem is engineered for exactly this cleanliness); choosing p = 2 + 2√5 (positive, fails the "negative y-axis" condition); radius not argued from the tangency to y = 0 AND y = 4...

**Points:** 6 — D(p) coordinates, the radius=2 condition, exact p with the sign filter.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 17 (official paper) — 3 points

**Asked:** the exact distance between the graph's two horizontal asymptotes.

**Solution.** f(x) = 1/(eˣ + 1): x → +∞: eˣ → ∞ so f → 0; x → −∞: eˣ → 0 so f → 1/(0 + 1) = 1. Two asymptotes y = 0 and y = 1, distance exactly 1.

**Answer:** 1.

**Common mistakes.** Computing in only one direction (there are two!); writing the answer as e or ln 2 (the limits are 0 and 1, not their logs).

**Points:** 3 — both limits, the vertical distance.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 18 (official paper) — 3 points

**Asked:** prove F(x) = x − ln(eˣ + 1) is a primitive of f.

**Solution.** F′(x) = 1 − eˣ/(eˣ + 1) = ((eˣ + 1) − eˣ)/(eˣ + 1) = 1/(eˣ + 1) = f(x). ∎ (The (eˣ)′ is eˣ, used in the fraction's numerator.)

**Common mistakes.** The log's inner-derivative dropped (chain factor); the fraction algebra forgotten (1 − eˣ/(eˣ+1) must simplify to exactly f).

**Points:** 3 — chain differentiation and exact match.

**Subdomain:** [B09](../B09-integration/).

## Question 19 (official paper) — 4 points

**Asked:** prove the enclosed area (between f, the axes and x = a) is less than ln 2 for every a > 0.

**Solution.** Area = ∫₀ᵃ f dx = F(a) − F(0) = (a − ln(eᵃ + 1)) − (0 − ln 2) = a − ln(eᵃ + 1) + ln 2. Now a − ln(eᵃ + 1) = a − (ln(eᵃ(1 + e^(−a)))) = a − a − ln(1 + e^(−a)) = −ln(1 + e^(−a)) < 0 for every a. So the area equals ln 2 − ln(1 + e^(−a)) < ln 2. ∎ (As a → ∞ it *approaches* ln 2 but never passes it.)

**Common mistakes.** "Because f shrinks, the area converges so it must be below ln 2" — not a proof, the algebra shows it precisely; sign slips inside the log split.

**Points:** 4 — the primitive from Q18, the decomposition, strict inequality.

**Subdomain:** [B09](../B09-integration/) and [B04](../B04-exponential-and-logarithmic-functions/).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math B folder](../README.md).*
