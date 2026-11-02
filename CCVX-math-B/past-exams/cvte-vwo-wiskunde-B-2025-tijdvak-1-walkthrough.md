# Walkthrough — CvTE VWO examen wiskunde B, 2025 tijdvak 1 (May 2025)

- **Official paper:** VWO wiskunde B, centraal examen 2025 period 1, college code VW-1025-a-25-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2025-05/vw-1025-a-25-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2025-05/vw-1025-a-25-1-c.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, figures or data — it tells you what each question asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito).

Exam totals: 18 questions, 77 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: quartic inflection ([B08](../B08-function-investigation/)), a parametric droplet ([B05](../B05-trigonometry/), [B09](../B09-integration/), [B14](../B14-parametric-curves/)), circles in a circle ([B11](../B11-triangle-geometry/), [B13](../B13-circle-geometry/)), root function and inverse ([B02](../B02-functions-and-graphs/), [B03](../B03-power-and-root-functions/), [B09](../B09-integration/)), spring masses and sinusoids ([B06](../B06-trigonometric-functions/)), tangent circles through two points ([B12](../B12-vectors/), [B13](../B13-circle-geometry/)), logarithms and limits ([B04](../B04-exponential-and-logarithmic-functions/), [B08](../B08-function-investigation/)).

## Question 1 (official paper) — 4 points

**Asked:** prove that the y-coordinate of the two inflection points of f(x) = x⁴ − 30x² equals −125.

**Solution.** f′(x) = 4x³ − 60x; f″(x) = 12x² − 60 = 0 ⇔ x² = 5 ⇔ x = ±√5. Both are genuine inflection points (f″ changes sign across each: 12x² − 60 is a dalparabool). y = (√5)⁴ − 30·5 = 25 − 150 = −125, and f is even, so both inflection points share this value. ∎

**Common mistakes.** Only checking one side (need BOTH x = √5 and −√5 named, with the even symmetry as quick argument); sign slip on 25 − 150.

**Points:** 4 — two derivatives, x² = 5, the evaluation.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 2 (official paper) — 4 points

**Asked:** the exact length of AD, where the line through the inflection points B and C meets the graph at A and D.

**Solution.** The inflection points lie at y = −125, so solve x⁴ − 30x² = −125 ⇔ x⁴ − 30x² + 125 = 0. Substitute u = x²: u² − 30u + 125 = 0 ⇔ (u − 5)(u − 25) = 0 ⇔ x = ±√5 (the points B and C) or x = ±5 — the other intersections A(−5, −125) and D(5, −125). Length AD = 10.

**Answer:** 10.

**Common mistakes.** Forgetting that the quadratic in u gives ± of each root (four x-values, circle the right pair); computing AB + BC + CD instead of AD directly (same total, longer).

**Points:** 4 — substitution, all four x-values, the ordered length.

**Subdomain:** [B08](../B08-function-investigation/) and [B01](../B01-algebraic-skills/).

## Question 3 (official paper) — 6 points

**Asked:** the exact coordinates of the three curve points with a vertical tangent on the parametric curve x(t) = sin t·(cos t − 1), y(t) = cos t, 0 ≤ t ≤ 2π.

**Solution.** x(t) = sin t cos t − sin t = ½ sin 2t − sin t, so x′(t) = cos 2t − cos t = 0 ⇔ cos 2t = cos t ⇔ 2t = ±t + 2kπ ⇔ t = 0, 2π/3, 4π/3, 2π. At t = 2π/3: (−3√3/4·... x = (√3/2)(−½ − 1) = −3√3/4, y = −½); at t = 4π/3: (3√3/4, −½). At t = 0 and 2π (both map to (0, 1)): although y′(0) = 0 too, the slope ratio √(dy/dx) blows up as t → 0 (x ∼ −t³/2, y − 1 ∼ −t²/2), so the tangent IS vertical there as well — the third point: (0, 1).

**Answer:** (0, 1), (−3√3/4, −½) and (3√3/4, −½).

**Common mistakes.** Discarding t = 0/2π because y′ = 0 too (check the limiting slope before excluding); only one ± point (the curve is symmetric in the y-axis); fumbling sin(2π/3) = −√3/2 (it's +√3/2, the sign sits in (cos − 1)).

**Points:** 6 — x′ computation, the cos-equality, all three points with exact roots.

**Subdomain:** [B14](../B14-parametric-curves/) and [B06](../B06-trigonometric-functions/).

## Question 4 (official paper) — 4 points

**Asked:** prove the given explicit relation x² = −y⁴ + 2y³ − 2y + 1 for the curve's points.

**Solution.** x² = sin²t·(cos t − 1)² = (1 − cos²t)(cos t − 1)². With y = cos t: (1 − y²)(y − 1)² = (1 − y)(1 + y)(y − 1)². Expand: (1 − y²)(y² − 2y + 1) = y² − 2y + 1 − y⁴ + 2y³ − y² = −y⁴ + 2y³ − 2y + 1. ∎

**Common mistakes.** Substituting sin² = 1 + cos² (sign!); a term lost in the expansion — expand in the other order to double-check.

**Points:** 4 — sin² conversion, y substitution, clean expansion.

**Subdomain:** [B05](../B05-trigonometry/) and [B01](../B01-algebraic-skills/).

## Question 5 (official paper) — 4 points

**Asked:** the exact volume of the droplet solid (the enclosed y-symmetric region revolved about the y-axis).

**Solution.** The region runs between the y-bounds −1 and 1 (from y = cos t). Rotation about the y-axis: V = π∫₋₁¹ x² dy = π∫₋₁¹ (−y⁴ + 2y³ − 2y + 1) dy with the result from Q4. Antiderivative: −⅕y⁵ + ½y⁴ − y² + y. Values: at 1: −0.2 + 0.5 = 0.3; at −1: 0.2 + 0.5 − 1 − 1 = −1.3. Difference: 1.6 = 8/15π·... exact: 1.6 = 8/5. So V = 3π/5.

**Answer:** 3π/5 (= 1⅗π).

**Common mistakes.** x instead of x² in the integrand; evaluating only the [0, 1] part (the symmetric interval needs both bounds — here even-symmetry gives 2× the upper part, same result); fraction slips (−⅕ + ½ = 3/10 at y = 1).

**Points:** 4 — bounds, π∫ x² dy setup, exact evaluation.

**Subdomain:** [B09](../B09-integration/).

## Question 6 (official paper) — 3 points

**Asked:** prove the claimed relation MS = √(9 − 6r) in the nested-circle figure.

**Solution.** In the given configuration, c₃ (radius r) touches c₁ (radius 3) internally, so |MP| = 3 − r. At the touching point S of c₃ and c₄, PS ⊥ MS (radii to a common tangent point of the two equal circles: P and Q both at radius r, so PMS meets at right angles in the shared tangent geometry — the line of centres is perpendicular to the tangent through S, and MS ⊥ PS in the drawn rectangle-forming quadrilateral). Pythagoras in △MSP: MS = √((3 − r)² − r²) = √(9 − 6r + r² − r²) = √(9 − 6r). ∎

**Common mistakes.** Taking MP = 3 + r (this is an INTERNAL touching — inside the big circle, not outside); explaining the right angle only vaguely (the mutual tangency of c₃ and c₄ at S fixes it — draw it).

**Points:** 3 — MP from internal tangency, the right triangle, simplifying.

**Subdomain:** [B13](../B13-circle-geometry/).

## Question 7 (official paper) — 6 points

**Asked:** compute exactly the radius r, given MN = 1.

**Solution.** Now c₃ also touches c₂ (radius 2, centre N), so NP = r + 2. Triangle NSP is right at S (same right-angle argument as Q6): NS = MS + 1 = √(9 − 6r) + 1 (M lies between N and S on the horizontal line through the figure... consistent with MN = 1 given). Pythagoras: NS² + r² = NP² ⇔ (√(9−6r) + 1)² + r² = (r+2)². Expand: 9 − 6r + 2√(9−6r) + 1 + r² = r² + 4r + 4 ⇔ 2√(9 − 6r) = 10r − 6 ⇔ √(9−6r) = 5r − 3 ⇔ 9 − 6r = 25r² − 30r + 9 ⇔ 25r² − 24r = 0 ⇔ r = 24/25.

**Answer:** r = 24/25.

**Common mistakes.** Pythagoras on the wrong legs (NS and PS are the legs, NP is the hypotenuse); the root squaring done as (√a + 1)² = a + 1 (it's a + 2√a + 1); rejecting nothing — r = 0 also follows but is geometrically excluded.

**Points:** 6 — NP from tangency, the transcendental-point equation, exact r.

**Subdomain:** [B13](../B13-circle-geometry/) and [B11](../B11-triangle-geometry/).

## Question 8 (official paper) — 3 points

**Asked:** prove that f and g are each other's inverse.

**Solution.** Show g(f(x)) = x on the domain: g(f(x)) = 2·(½x² − 1) + 2 = x² − 2 + 2 = x² = x... that gives x², and since x ≥ 0 by the given domain, √x² = x. Similarly f(g(x)) = √(½(2x² + 2) − 1) = √(x²) = x. ∎ (Domain matters: the root returns the non-negative value.)

**Common mistakes.** Only proving one direction (showing both is the safe route, though one compositional identity suffices if the domains match); the √-sign issue for x < 0 (the given domains guard it).

**Points:** 3 — both (or one clean compositional) identity with the root sign.

**Subdomain:** [B02](../B02-functions-and-graphs/).

## Question 9 (official paper) — 5 points

**Asked:** the exact a minimising PQ(a), with the paper's given model PQ = (3/2)a − 4·√(a² − 1) (derived from the geometry... the visible formula).

**Solution.** Two routes. (i) The direct one: take the paper's printed model PQ(a), differentiate, solve PQ′(a) = 0 — this reduces to 4a/√(a² − 1) = 3√2 ⇔ 16a² = 18(a² − 1) ⇔ a² = 9, and with the condition a ≥ 2, a = 3. (ii) The geometric one (official alternative, worth understanding): the minimal distance along the family of parallel lines occurs where each curve's tangent has slope 1 in the inverse-frame computation — concretely, on g = √(2x² + 2): g′(x) = 4x/(2√(2x² + 2)) = 1 ⇔ x = 1, so Q(1, √(2+2)) = (1, 2) lies on the optimal line; on f = √(½x² − 1): f′(x) = x/(2√(½x² − 1)) = 1 ⇔ x = 2, so P(2, 1) — consistent: the optimal line through either passes through both, and a = 1 + 2 = 3.

**Answer:** a = 3.

**Answer:** a = 3.

**Common mistakes.** Differentiating the surrogate model with algebra slips; forgetting that the minimum of a PLACEMENT distance on two fixed curves happens where both tangents are parallel to the line (the *why*); as always accepting negative branches (a ≥ 2 here).

**Points:** 5 — derivative vs tangent-parallel argument, exact a = 3.

**Subdomain:** [B08](../B08-function-investigation/) and [B07](../B07-differentiation/).

## Question 10 (official paper) — 6 points

**Asked:** the area of V to two decimals (a calculator-based region between f, g, the axes and line y = −x + 17, with g-line crossing at (7, 10) and f's x-intercept at √2).

**Solution.** Regions (GR-computable in the VWO): (i) 0 → √2: under g alone; (ii) √2 → 7: between g (above) and f; (iii) 7 → 10: between the line (above) and f. Equivalent cleaner split: 2 × (the left half by symmetry) around the line y = x's symmetry — since f and g are inverses: ∫₀⁷ (g(x) − x) dx ≈ 12.369, plus the small triangle between y = x, x = 7 and the line: ½·3·1.5 = 2.25, doubled: 2·(12.369 + 2.25) ≈ 29.24.

**Answer:** ≈ 29.24.

**Common mistakes.** Forgetting the √2 intercept of f (the region's left boundary on the x-axis); computing the whole thing from primitives by hand (this is a VWO calculator question — at the CCVX it would be redesigned for exact integrals; keep the walkthrough note numeric).

**Points:** 6 — correct region split, numeric integration, 2-decimal rounding.

**Subdomain:** [B09](../B09-integration/) and [B02](../B02-functions-and-graphs/).


## Question 11 (official paper) — 3 points

**Asked:** from the block's model and figure 1, show that the spring's mass point has amplitude 50 and equilibrium 250.

**Solution.** The spring hangs from the ceiling at 350 to the block's mass point at Z_b(t), so its centre sits at the mean: Z_v(t) = (350 + Z_b(t))/2 = (350 + 150 − 100 cos 4t)/2 = 250 − 50 cos 4t: equilibrium 250 and amplitude 50 ✓. (Reading from the extremes also works: lowest point Z_b = 50 gives spring-centre 200; highest 250 gives 300: mid = 250, half-span = 50. ∎)

**Common mistakes.** Amplitude also halved but convention flipped (−50 versus +50: the model Z_v = 250 − 50 cos 4t pins the sign ✓); using 350 as equilibrium.

**Points:** 3 — the averaging argument or both extremes.

**Subdomain:** [B06](../B06-trigonometric-functions/).

## Question 12 (official paper) — 3 points

**Asked:** the two heights at which the upward speed equals 255 cm/s (answer in whole cm with calculator-supported inverse).

**Solution.** v(t) = Z_b′(t) = 400 sin(4t) (derivative of 150 − 100 cos 4t). 400 sin 4t = 255 ⇔ sin 4t = 0.6375 ⇔ 4t ≈ 0.685 or 4t ≈ π − 0.685 ≈ 2.456. Cosines at these arguments: cos(0.685) ≈ 0.774 and cos(2.456) ≈ −0.774: heights 150 − 100·0.774 ≈ 73 cm and 150 + 77 ≈ 227 cm.

**Answer:** 73 cm and 227 cm.

**Common mistakes.** Forgetting the second sine branch; reporting heights with the wrong sign of cos; reading v from the position formula instead of differentiating first (this question builds on that velocity is the derivative of Z_b!).

**Points:** 3 — derivative, two argument branches, both heights in cm.

**Subdomain:** [B06](../B06-trigonometric-functions/) and [B07](../B07-differentiation/).

## Question 13 (official paper) — 3 points

**Asked:** set up Z_total(t) = a + b·cos 4t for block + spring together, with masses 1000 g and 600 g.

**Solution.** Weighted mean: Z_total = (1000·Z_b + 600·Z_v)/1600 = (1000(150 − 100c) + 600(250 − 50c))/1600 = (150 000 − 100 000c + 150 000 − 30 000c)/1600 = (300 000 − 130 000c)/1600 = 187.5 − 81.25·c, with c = cos(4t). So a = 187.5 and b = −81.25.

**Answer:** Z_total(t) = 187.5 − 81.25·cos(4t).

**Common mistakes.** Averaging unweighted ((Z_b + Z_v)/2 — the masses differ!); swapping the masses (block is 1000, spring 600); arithmetic leaks in 130 000/1600 = 81.25.

**Points:** 3 — weighted mean stated and computed, final form.

**Subdomain:** [B06](../B06-trigonometric-functions/) and [B02](../B02-functions-and-graphs/).

## Question 14 (official paper) — 4 points

**Asked:** prove that the projection P′ of P(p, 3p + 32) on k (the line (x, y) = (0, 20) + t(1, −1)) is (−p − 6, p + 26).

**Solution.** Line k: y = −x + 20. The projection slope must be +1 (k's slope is −1). Check the two claims directly: P′ on k? (−p − 6) + (p + 26) = 20 ✓ (the point satisfies y = −x + 20). Slope of PP′: ((p + 26) − (3p + 32))/((−p − 6) − p) = (−2p − 6)/(−2p − 6) = 1 ✓ perpendicular to k. Both hold, so P′ is the projection. ∎

**Common mistakes.** Deriving P′ from scratch when the question asks for a verification (both accepted — but the check route is shorter and cleaner); sign slips in the slope computation.

**Points:** 4 — on-the-line check and perpendicularity check.

**Subdomain:** [B10](../B10-lines-and-distances/) and [B12](../B12-vectors/).

## Question 15 (official paper) — 5 points

**Asked:** exact coordinates of the two circles' centres M₁ and M₂.

**Solution.** With M = (m, 3m + 32) on the midperpendicular and M′ = (−m − 6, m + 26) from Q14: radius condition |MM′| = |MB| (equivalently |MA|, since M is on the midperpendicular of A and B). |MM′|² = (−2m − 6)² + (−2m − 6)² = 8m² + 48m + 72. |MB|² with B(−18, −2): (m + 18)² + (3m + 34)² = 10m² + 240m + 1480. Set equal: 8m² + 48m + 72 = 10m² + 240m + 1480 ⇔ 0 = 2m² + 192m + 1408 ⇔ m² + 96m + 704 = 0 ⇔ (m + 8)(m + 88) = 0 ⇔ m = −8 or m = −88. Centres: (−8, 8) and (−88, −232).

**Answer:** M(−8, 8) and M(−88, −232).

**Common mistakes.** 3m + 38 vs 3m + 34 (|MB| uses B not A — the midperpendicular property makes |MA| = |MB| anyway, same equation); expanding 2(2m+6)² without the factor 2; choosing a root without checking it against the figure context (both are valid circles as the text says).

**Points:** 5 — both distances, the quadratic, both centres.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 16 (official paper) — 4 points

**Asked:** the a (2 decimals) for p = 1 satisfying |OB| = |OA| + 2, where A on f(x) = ln(x + 1) and B on g₁(x) = ln x at x = a.

**Solution.** |OA| = √(a² + ln²(a + 1)) and |OB| = √(a² + ln² a). Solve √(a² + ln² a) − √(a² + ln²(a + 1)) = 2 numerically with the graphing calculator (at small a, ln a dives and |OB| overtakes |OA|): a ≈ 0.12.

**Answer:** a ≈ 0.12.

**Common mistakes.** Reading the condition as ln a = ln(a + 1) + 2 (that's about the *values*, not the distances from O — check what OA/OB mean here); an algebraic-hand-solve attempt (no closed form — calculator-root is the assignment).

**Points:** 4 — the two distance formulas, equation, calculator-solved a.

**Subdomain:** [B01](../B01-algebraic-skills/) and [B08](../B08-function-investigation/).

## Question 17 (official paper) — 4 points

**Asked:** the exact p for which the distance AB tends to 1 as a → ∞.

**Solution.** Distance AB = f(a) − g_p(a) = ln(a + 1) − ln(pa) = ln((a + 1)/(pa)). As a → ∞, (a + 1)/(pa) → 1/p, so the distance tends to ln(1/p) = −ln p. Set −ln p = 1 ⇔ p = e⁻¹ = 1/e.

**Answer:** p = 1/e.

**Common mistakes.** ln((a+1)/(pa)) → 1 instead of the log value; sign flip ending in p = e (it is 1/e); not using the log-rules to collapse terms first.

**Points:** 4 — distance expression, limit step, exact p.

**Subdomain:** [B08](../B08-function-investigation/) and [B04](../B04-exponential-and-logarithmic-functions/).

## Question 18 (official paper) — 6 points

**Asked:** algebraically the q for which h_q(x) = ½ ln(−x) + q touches the shown negative-x branch of f (described there by y = −ln(x + 1)) left of the y-axis; q to 2 decimals.

**Solution.** On the shown left branch, f behaves as y = −ln(x + 1) with slope f′ = −1/(x + 1). Touching needs equal slopes: h′(x) = 1/(2x) = −1/(x + 1) ⇔ x + 1 = −2x ⇔ x = −1/3 ✓ inside (−1, 0). Function values there: f-value −ln(2/3) = ln(3/2) ≈ 0.4055; h-value ½ ln(1/3) + q. Setting them equal: ½ ln(1/3) + q = −ln(2/3) = ln(3/2) ⇔ q = ln(3/2) − ½ ln(1/3) = ln(3/2) + ½ ln 3 ≈ 0.4055 + 0.5493 ≈ 0.95.

**Answer:** q ≈ 0.95.

**Common mistakes.** Slope equation sign dropped (on the left branch f's slope is NEGATIVE — that is what makes the solution x = −1/3 exist at all); touching condition written as h = f without the slope condition (2 equations needed); ln(3/2) taken as −0.405 (it is +0.405 — check sign at the end).

**Points:** 6 — branch slope, slope equation, function equality, exact q with rounding.

**Subdomain:** [B08](../B08-function-investigation/) and [B04](../B04-exponential-and-logarithmic-functions/).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math B folder](../README.md).*
