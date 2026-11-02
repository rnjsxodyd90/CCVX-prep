# Walkthrough — CvTE VWO examen wiskunde B, 2022 tijdvak 1 (20 May 2022)

- **Official paper:** VWO wiskunde B, centraal examen 2022 period 1 (with answer sheet), college code VW-1025-a-22-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/2022/ex2022/VW-1025-a-22-1-o.pdf>
- **Official answers (correctievoorschrift + supplement, examenblad.nl):** <https://www.examenblad.nl/system/files/2022/ex2022/VW-1025-a-22-1-c.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, figures or data — it tells you what each question asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito). Questions that depend on the uitwerkbijlage (construction drawings) get their method described; the official key's figure marks those drawings.

Exam totals: 17 questions, 76 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: log-exp inverses ([B02](../B02-functions-and-graphs/), [B09](../B09-integration/), [B04](../B04-exponential-and-logarithmic-functions/)), Bézier curves and vectors ([B12](../B12-vectors/), [B14](../B14-parametric-curves/)), rational sine function ([B05](../B05-trigonometry/), [B08](../B08-function-investigation/)), root-family tangent-shifting ([B03](../B03-power-and-root-functions/), [B09](../B09-integration/), [B07](../B07-differentiation/)), volcanic parabolic paths ([B01](../B01-algebraic-skills/), [B03](../B03-power-and-root-functions/), [B10](../B10-lines-and-distances/)).

## Question 1 (official paper) — 3 points

**Asked:** prove f_p and g_p are inverses (p ≠ 0).

**Solution.** Show both compositions collapse to x: g_p(f_p(x)) = e^(p·ln x / p) = e^(ln x) = x for all x > 0, and f_p(g_p(x)) = p·ln(e^(x/p)) = p·(x/p) = x. ∎

**Common mistakes.** Only one direction (both is cleanest and complete); the p ≠ 0 condition unmentioned.

**Points:** 3 — the two compositions with the log rules.

**Subdomain:** [B02](../B02-functions-and-graphs/).

## Question 2 (official paper) — 5 points

**Asked:** the area of V (for p = −1) to two decimals.

**Solution.** The bounded region involves the mirrored pair f(x) = −ln x and g(x) = e^(−x) plus the axes. Their intersection solves −ln x = e^(−x): numerically x₀ ≈ 0.567 (the unique crossing). On [0, x₀]: f above g; on [x₀, 1]: g above (f hits the axis at x = 1). V = ∫₀^{x₀} (−ln x − e^(−x)) dx + ∫_{x₀}¹ (e^(−x) + ln x) dx. With antiderivative of −ln x − e^(−x) given by x − x ln x + e^(−x) and flipping on the second piece: total = 0.432 + 0.111 ≈ 0.54.

**Answer:** ≈ 0.54.

**Common mistakes.** Continuing past x = 1 (the x-axis closes the region there!); sign-tracked integrands instead of positive parts; numerical chaos from premature rounding.

**Points:** 5 — crossing, two sign-aware pieces, 2-decimal total.

**Subdomain:** [B09](../B09-integration/).

## Question 3 (official paper) — 4 points

**Asked:** the exact p for which y = x is a common tangent to both curves.

**Solution.** Tangency of f_p = p ln x to y = x at their meeting point: both f_p(x) = x and f′(x) = 1 must hold. The slope: f′(x) = p/x = 1 ⇔ x = p. Then the meeting point condition: p ln p = p ⇔ ln p = 1 ⇔ p = e (p ≠ 0 given). The mirrored statement on g_p follows automatically by the inverse symmetry.

**Answer:** p = e.

**Common mistakes.** Only using one of the two conditions (a tangent to y = x at a point where the line does not even meet the curve is no tangent); losing the inverse-symmetry remark.

**Points:** 4 — both conditions, exact p = e.

**Subdomain:** [B07](../B07-differentiation/) and [B04](../B04-exponential-and-logarithmic-functions/).

## Question 4 (official paper) — 3 points

**Asked:** the exact x-coordinate of point C, the intersection of the two tangents (A(1/15, 4/3) with slope 4, B(1, 19/10) with horizontal tangent).

**Solution.** Tangents: at B: y = 19/10. At A: y − 4/3 = 4(x − 1/15). Substitute: 19/10 − 4/3 = 17/30 = 4(x − 1/15) ⇔ x − 1/15 = 17/120 ⇔ x = 17/120 + 8/120 = 25/120 = 5/24.

**Answer:** x_C = 5/24.

**Common mistakes.** Fraction arithmetic splitting wrong (17/120 + 8/120 must be carried exactly); confusing the y-value of B's tangent (it is constant — it IS the line).

**Points:** 3 — two tangent lines, precise fraction solve.

**Subdomain:** [B10](../B10-lines-and-distances/).

## Question 5 (official paper) — 3 points

**Asked:** draw the Bézier point R for t = 0.25 on the worksheet.

**Method description.** Follow the three constant-speed motions: on AC, place P at the quarter point (AP : PC = 1 : 3); on CB, place Q at the quarter point; on PQ, place R at the quarter point again (PR : RQ = 1 : 3). Set the scale from the figure (the key uses 6.7 : 1, so the drawn point positions stay within ±1 mm of R ≈ (0.178 , 1.581) in the paper's units). Explain your method with those three placements, per the answer key's marks.

**Common mistakes.** Reading the ratio the other way (¼ from the wrong endpoint); placing R at the midpoint instead of the quarter point of PQ; forgetting the scale calibration of the worksheet.

**Points:** 3 — three correct divisions and the drawn R.

**Subdomain:** [B12](../B12-vectors/) (drawing with ratios).

## Question 6 (official paper) — 5 points

**Asked:** prove the closed form of R in A, B, C and t.

**Solution.** Chain the three vector rules: *OP*→ = *OA*→ + t·*AC*→ = *OA*→ + t(*OC*→ − *OA*→) = (1 − t)*OA*→ + t*OC*→. *OQ*→ = (1 − t)*OC*→ + t*OB*→. *PQ*→ = *OQ*→ − *OP*→. Then *OR*→ = *OP*→ + t·*PQ*→ = (1 − t)*OP*→ + t*OQ*→ = (1 − t)((1 − t)*OA*→ + t*OC*→) + t((1 − t)*OC*→ + t*OB*→). Collecting: (1 − t)²*OA*→ + t²*OB*→ + (t(1 − t) + t(1 − t))*OC*→ = (1 − t)²*OA*→ + t²*OB*→ + 2t(1 − t)*OC*→. ∎

**Common mistakes.** Skipping the *PQ*→ = *OQ*→ − *OP*→ step (it carries the point geometry); combination *(1−t)·t + t·(1−t)* seen as zero (it's 2t(1−t)).

**Points:** 5 — all six substitutions correctly sequenced.

**Subdomain:** [B12](../B12-vectors/).

## Question 7 (official paper) — 3 points

**Asked:** prove with the R-formula that the shown curve with x(t) = −4t² + 6t, y(t) = 6t² − 8t + 4 is exactly this Bézier curve (A(0, 4), B(2, 2), C(3, 0)).

**Solution.** R(t) = (1 − t)²·(0, 4) + t²·(2, 2) + 2t(1 − t)·(3, 0). x-component: 0 + 2t² + 6t(1 − t) = 2t² + 6t − 6t² = −4t² + 6t ✓. y-component: 4(1 − t)² + 2t² + 0 = 4 − 8t + 4t² + 2t² = 6t² − 8t + 4 ✓. ∎

**Common mistakes.** Only checking x (both components are asked!); the y-component's t²-collection (4t² + 2t² = 6t²).

**Points:** 3 — both components expanded to match.

**Subdomain:** [B12](../B12-vectors/) and [B14](../B14-parametric-curves/).

## Question 8 (official paper) — 8 points

**Asked:** prove that the graphs of f (a rational sine fraction) and g(x) = sin x touch in two points.

**Solution.** Points: sin x/sin 2x = sin x. Since sin 2x = 2 sin x cos x, for sin x ≠ 0 this reduces to 1/(2 cos x) = sin x ⇔ 2 sin x cos x = 1 ⇔ sin 2x = 1 ⇔ 2x = π/2 + 2kπ ⇔ x = π/4 (+kπ); on (−π, π): x = π/4 and x = −3π/4 (sin x = 0 cases are perforations of f, not intersections). Tangency check: f = 1/(2 cos x), so f′ = sin x/(2cos²x); at π/4: (√2/2)/(2·½) = √2/2 = g′(π/4) ✓; at −3π/4: (−√2/2)/(2·½) = −√2/2 = g′(−3π/4) ✓. Both touching, as claimed. ∎

**Common mistakes.** Cancel costs: dividing by sin x (it removes the question of the perforations sin x = 0 — f is undefined there); the sin(2x) = 1 solution missing the second period value on (−π, π); only checking point-equality without slopes.

**Points:** 8 — the equation, both candidates, quotient-rule slope, both verifications.

**Subdomain:** [B06](../B06-trigonometric-functions/) and [B08](../B08-function-investigation/).

## Question 9 (official paper) — 4 points

**Asked:** prove that no other x-intercepts than (0, 0) and (1, 0) exist.

**Solution.** f(x) = x² − 2x√x + x = x(x − 2√x + 1) = x(√x − 1)². Zero ⇔ x = 0 or √x = 1 ⇔ x = 0 or x = 1 (both double-character... the √x = 1 root has x = 1; the polynomial x(√x − 1)² ≥ 0 for x ≥ 0, showing the graph only TOUCHES the axis at 1 — consistent with "no other intersections".) ∎

**Common mistakes.** Factoring x's square wrongly (it is x·(√x − 1)², the clean form); square-root sign issues (x ≥ 0 given).

**Points:** 4 — the factor form, both roots, no others.

**Subdomain:** [B03](../B03-power-and-root-functions/) and [B01](../B01-algebraic-skills/).

## Question 10 (official paper) — 4 points

**Asked:** the exact area enclosed by the graph and the x-axis.

**Solution.** Zeros at 0 and 1; between them f ≥ 0 (from the squared form). Area = ∫₀¹ (x² − 2x√x + x) dx = ∫₀¹ (x² − 2x^(3/2) + x) dx = [x³/3 − (4/5)x^(5/2) + x²/2]₀¹ = 1/3 − 4/5 + 1/2 = (10 − 24 + 15)/30 = 1/30.

**Answer:** 1/30.

**Common mistakes.** The power of √x mismatched (x√x = x^(3/2), its integral is (2/5)x^(5/2)); fraction arithmetic at the end.

**Points:** 4 — antiderivative with the right powers, exact 1/30.

**Subdomain:** [B09](../B09-integration/).

## Question 11 (official paper) — 7 points

**Asked:** the exact a ≠ 0 moving the tangent line k of f at the origin onto another tangent of f.

**Solution.** f(x) = x² − 2x√x + x: f′(x) = 2x − 3√x + 1, so the tangent at O is y = x. The shifted line l: y = x − a must meet f with equal slope: f′(x) = 1 ⇔ 2x − 3√x = 0 ⇔ √x(2√x − 3) = 0 ⇔ x = 0 (the original) or x = 9/4. At x = 9/4: f(9/4) = (9/4)( (3/2) − 1 )² = (9/4)·¼ = 9/16. The shifted line through (9/4, 9/16): a = 9/4 − 9/16 = 27/16.

**Answer:** a = 27/16.

**Common mistakes.** Also taking x = 0 as the "new" touch point (that reproduces k itself; we need the OTHER one); touch-and-slope conditions scrambled (the point must lie on the shifted line AND have slope 1 — two conditions); arithmetic on the 16ths.

**Points:** 7 — tangent at O, the slope equation, the second point, exact a.

**Subdomain:** [B07](../B07-differentiation/) and [B10](../B10-lines-and-distances/).

## Question 12 (official paper) — 3 points

**Asked:** prove the converted formula y = 2000 + tan α·x − (1/(9000 cos²α))·x² from the given motion equations.

**Solution.** From x(t) = 210 cos α·t comes t = x/(210 cos α). Substitute in y(t): y = 2000 + 210 sin α·(x/(210 cos α)) − 4.9·(x/(210 cos α))² = 2000 + tan α·x − (4.9/210²)·x²/cos²α = 2000 + tan α·x − x²/(9000 cos²α) (since 4.9/44100 = 1/9000). ∎

**Common mistakes.** tan α mishandled in the linear term (it survives the substitution cleanly); 4.9/44100 simplification errors.

**Points:** 3 — eliminating t, both terms verified.

**Subdomain:** [B14](../B14-parametric-curves/) and [B05](../B05-trigonometry/).

## Question 13 (official paper) — 3 points

**Asked:** the ground distance of the lavabomb launched at α = 1 rad, in hundreds of m.

**Solution.** Formula 2 at α = 1: y = 2000 + tan(1)·x − x²/(9000 cos²1) = 0. Coefficients: tan(1) ≈ 1.5574, cos²1 ≈ 0.29193, so x²/(2627.3) ≈ ... rewrite: 2000 + 1.5574x − 0.0003809x² = 0 ⇔ x = (1.5574 + √(1.5574² + 4·0.0003809·2000))/(2·0.0003809) ≈ (1.5574 + 2.3392)/0.0007618 ≈ 5116 m ≈ 51 hundred meters.

**Answer:** ≈ 51 hundred metres (about 5.1 km).

**Common mistakes.** cos in degrees on the calculator (the model is in radians!); distance measured from x = 0 — from the volcano edge concept: the given x IS measured from the launch point here per the model; the negative root handled.

**Points:** 3 — coefficient computation, positive root, unit conversion.

**Subdomain:** [B03](../B03-power-and-root-functions/) and [B01](../B01-algebraic-skills/).

## Question 14 (official paper) — 4 points

**Asked:** prove that every lavabomb path touches the given envelope parabola of the reachable region.

**Solution.** Show the system y_path(x, α) = y_envelope(x) always has a double root: −(1 + tan²α)x²/9000 + x tan α + 2000 = −x²/9000 + 4250 ⇔ (tan²α/9000)·... bring all: −(tan²α)·x²/9000 + x tan α = 2250 ⇔ tan²α·x² − 9000 tan α·x + 20 250 000 = 0. Discriminant: 9000²·tan²α − 4·tan²α·20 250 000 = tan²α·(81 000 000 − 81 000 000) = 0 — for every α. A quadratic with D = 0 meets in exactly one point: the curve touches each path. ∎

**Common mistakes.** Symbols lost between formula 2 and 3 (use 1/cos²α = 1 + tan²α); trying to show the curves touch "at the top" instead of the discriminant argument; forgetting the sign choice in the multiplication step.

**Points:** 4 — the equation, D = 0 argument, conclusion per α.

**Subdomain:** [B01](../B01-algebraic-skills/) and [B03](../B03-power-and-root-functions/).


## Question 15 (official paper) — 8 points

**Asked:** prove that P is the midpoint of segment QR (tangent at P meeting the vertical asymptote in Q and the oblique asymptote in R).

**Solution.** f(x) = x + 2/x, so f′(x) = 1 − 2/p² at x = p. Tangent: y − (p + 2/p) = (1 − 2/p²)(x − p). At the vertical asymptote x = 0: y_Q = p + 2/p − p(1 − 2/p²) = 4/p: Q = (0, 4/p). On the oblique asymptote y = x: solve x = p + 2/p + (1 − 2/p²)(x − p) ⇔ x·(2/p²) = 4/p ⇔ x = 2p: R = (2p, 2p). Midpoint of Q and R: (p, (4/p + 2p)/2) = (p, 2/p + p) = the coordinates of P. ∎

**Common mistakes.** Reading Q as the intersection with the OBLIQUE asymptote and R with the vertical (swapped roles — follow the figure labels); forgetting f′ fully in the line setup; the "midpoint" read as a distance (it is a coordinate statement).

**Points:** 8 — tangent, Q, R, the midpoint identity.

**Subdomain:** [B07](../B07-differentiation/) and [B13](../B13-circle-geometry/)-adjacent line work.

## Question 16 (official paper) — 5 points

**Asked:** exactly for which a the perpendicular bisector of AB passes through D.

**Solution.** D must be equidistant from A(0, a) and B(1, 0): |DB| = 2, so |DA| = √(1 + a²) must equal 2: 1 + a² = 4 ⇔ a² = 3 ⇔ a = √3 (with the condition a > 0).

**Answer:** a = √3.

**Common mistakes.** Setting up the bisector's equation (correct but long — use the equidistance definition instead: |PA| = |PB| is the whole idea); losing the sign.

**Points:** 5 — equidistance equation, exact a.

**Subdomain:** [B10](../B10-lines-and-distances/).

## Question 17 (official paper) — 4 points

**Asked:** prove the centre Z approaches a point P with y-coordinate 1 as a grows unboundedly.

**Solution.** Masses: 2 at A(0, a), 1 at B(1, 0), 1 at D(−1, 0), a at C(0, −1). The x-coordinate of Z stays 0: (2·0 + 1·1 + 1·(−1) + a·0)/(4 + a) = 0. The y-coordinate: (2·a + 1·0 + 1·0 + a·(−1))/(4 + a) = a/(a + 4) = (a/a)/((a + 4)/a) = 1/(1 + 4/a) → 1 as a → ∞. So Z approaches P(0, 1), whose y-coordinate is exactly 1. ∎

**Common mistakes.** The weight of C in the mass total (2 + 1 + 1 + a = 4 + a — small-symmetry trap); writing the limit's value as 1/(a+4)·a as 1 "immediately" (show the manipulation a/(a+4) = 1/(1+4/a) first).

**Points:** 4 — weighted mean formula, the limit, the conclusion.

**Subdomain:** [B08](../B08-function-investigation/) and [B12](../B12-vectors/)-adjacent weighting.

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math B folder](../README.md).*
