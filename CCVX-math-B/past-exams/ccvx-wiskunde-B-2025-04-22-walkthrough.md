# Walkthrough — Tentamen Wiskunde B, 22 April 2025 (CCVX sample exam B 20)

- **Official paper:** Tentamen Wiskunde B of 22 April 2025, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde B 20*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2020.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2020%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 4 problems, 81 points (16 + 17 + 24 + 24); grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = product exponential, symmetry, primitive ([B04](../B04-exponential-and-logarithmic-functions/), [B07](../B07-differentiation/), [B09](../B09-integration/)); O2 = circles, tangents, similarities ([B10](../B10-lines-and-distances/), [B11](../B11-triangle-geometry/), [B13](../B13-circle-geometry/)); O3 = two cubics T1, tangent triangle, parabola volume ([B03](../B03-power-and-root-functions/), [B07](../B07-differentiation/), [B08](../B08-function-investigation/), [B09](../B09-integration/)); O4 = sine-cosine family, log perforation ([B04](../B04-exponential-and-logarithmic-functions/), [B05](../B05-trigonometry/), [B06](../B06-trigonometric-functions/), [B08](../B08-function-investigation/)).

## Question 1a (official paper)

**Asked:** the angle between the tangent to the exam's exponential-product graph at its zero point A(3/2, 0) and the vertical line x = 2, in degrees to 1 decimal.

**Solution.** Tangent slope at A: f′(x) = 2·e^(−x²+3x−2) + (2x − 3)(−2x + 3)·e^(−x²+3x−2), and at x = 3/2 the second term vanishes (2x − 3 = 0): f′(3/2) = 2·e^(−9/4 + 9/2 − 2) = 2·e^(1/4) ≈ 2.568. Direction angle: tan α = 2e^(1/4) → α ≈ 68.7°. The line x = 2 is *vertical*, so the angle between the tangent and it is the complement: 90° − 68.7° = 21.3°.

**Answer:** ≈ 21.3°.

**Common mistakes.** Answering 68.7° (that is the angle with the *horizontal* axis — the line here is vertical!); the product term not dropped at x = 3/2 (it is 0 there — show it); sign of the exponent (−1/4 vs +1/4: 2.25 − 4.5 + 2 = −0.25 flips).

**Points:** 5 — derivative, evaluation, the complement angle.

**Subdomain:** [B07](../B07-differentiation/) and [B10](../B10-lines-and-distances/).

## Question 1b (official paper)

**Asked:** prove point symmetry of the graph about A(3/2, 0): f(3/2 − x) = −f(3/2 + x) for all x.

**Solution.** Left: 2(3/2 − x) − 3 = −2x, and the exponent: −(3/2 − x)² + 3(3/2 − x) − 2 = −(9/4 − 3x + x²) + 9/2 − 3x − 2 = −x² + 1/4. So f(3/2 − x) = −2x·e^(1/4 − x²). Right: 2(3/2 + x) − 3 = 2x; the same exponent evaluation gives −x² + 1/4 again: −f(3/2 + x) = −(2x·e^(1/4 − x²)). The two expressions are equal for every x. ∎

**Common mistakes.** Only verifying numbers (a proof covers all x); sign slips in the squared bracket ((3/2 ± x)² = 9/4 ± 3x + x² with correct signs); forgetting the outer minus of the second factor.

**Points:** 3 — both exact exponent computations and the comparison.

**Subdomain:** [B02](../B02-functions-and-graphs/) and [B01](../B01-algebraic-skills/).

## Question 1c (official paper)

**Asked:** the exact value of a making the exam's family function F_a a primitive of f.

**Solution.** F_a(x) = a·e^(−x²+3x−2): chain rule gives F_a′(x) = a(−2x + 3)·e^(−x²+3x−2) = −a(2x − 3)·e^(−x²+3x−2). This must equal f(x) = (2x − 3)·e^(−x²+3x−2) for all x: −a = 1 ⇔ a = −1.

**Answer:** a = −1.

**Common mistakes.** Solving a = 2x − 3 as if a depended on x (a is a constant: the comparison of the *factors* gives a = −1, not an equation in x); dropping the chain exponent derivative.

**Points:** 3 — chain derivative and the factor comparison.

**Subdomain:** [B09](../B09-integration/).

## Question 1d (official paper)

**Asked:** the values of p < 2 with ∫ from p to 2 of f(x) dx = 0.

**Solution.** With the primitive from part c: ∫ from p to 2 of f = F_{-1}(2) − F_{-1}(p) = −e^(−4 + 6 − 2) + e^(−p²+3p−2) = −1 + e^(−p²+3p−2) = 0 ⇔ −p² + 3p − 2 = 0 ⇔ p² − 3p + 2 = 0 ⇔ (p − 1)(p − 2) = 0. With the condition p < 2: **p = 1** (p = 2 would give the trivial empty interval, excluded by the strict inequality). Beautiful consistency: by part b's point symmetry about (3/2, 0), the area from 1 to 1½ cancels that from 1½ to 2 ✓.

**Answer:** p = 1.

**Common mistakes.** Reading the upper bound as 3/2; answering p = 2 as well; sign errors in F(2) (exponent −4 + 6 − 2 = 0, so that term is −1, not −e).

**Points:** 5 — primitive use, exponent-zero equation, the p < 2 filter.

**Subdomain:** [B09](../B09-integration/).

## Question 2a (official paper)

**Asked:** show by exact computation that circle d (centre O, radius √13) touches the given circle c at the given point R(−3, −2), where d's area is 25% of c's.

**Solution.** From the area condition: π·r_c² = 4·π·r_d², so r_c² = 4·13 = 52 and the circle equation of c is (x − 3)² + (y − 2)² = 52 — consistent with its centre M(3, 2) and R lying on it: (−3 − 3)² + (−2 − 2)² = 36 + 16 = 52 ✓. Circle d: |OR| = √(9 + 4) = √13, so R lies on d with radius √13 ✓. Touching: the centre distance |OM| = √(9 + 4) = √13 equals r_c − r_d = 2√13 − √13 = √13: internal tangency — d touches c from the inside at R. (Collinearity O, R, M confirms the touching point.)

**Common mistakes.** Comparing radii with the area factor instead of r² (areas scale with r²); external-tangency condition used (this one is internal: the small circle sits inside the big one); not verifying R on either circle.

**Points:** 5 — r² from areas, both on-circle checks, the internal-tangency condition.

**Subdomain:** [B13](../B13-circle-geometry/).

## Question 2b (official paper)

**Asked:** the exact y-coordinate where the one common tangent of cirkels d and e crossing the *positive* y-axis meets that axis.

**Solution.** e is the outer tangent circle at R with the same radius √13: its centre lies on the line of centres through R: M_e = (−6, −4) (one radius-step beyond R from M). Equal radii ⇒ the two outer common tangents are parallel to the line of centres O−M_e (slope (−4)/(−6) = 2/3): forms y = (2/3)x + c. Distance from O to such a line must be r = √13: |(2/3)x − y + c|/√((2/3)² + 1) at (0,0): |c|·3/√13 = √13 ⇔ |c| = 13/3. The third tangent is the one at R itself and crosses at −13/2. The two outer ones have y-intercepts ±13/3; the one meeting the **positive** y-axis has intercept 13/3.

**Answer:** 13/3.

**Common mistakes.** Slope of the tangent family taken as −3/2 (perpendicular — these outer tangents are PARALLEL to the line of centres d-e); the distance formula's denominator; choosing −13/3 (wrong side of the axis).

**Points:** 6 — e's centre, the parallel-tangent structure, exact intercept.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 2c (official paper)

**Asked:** exact coordinates of C (with x_C > 3) for which triangle CMB is similar to triangle OMA.

**Solution.** Triangle OMA has |OM| = √13, |MA| = 1, |OA| = √10. In the ordering C M B ~ O M A: the ratio is |MB|/|MA| = 2/1 = 2, so |MC| = 2|OM| = 2√13 and |CB| = 2|OA| = 2√10, and the angles at M match: angle between *MC*→ and *MB*→ equals ∠OMA. With *MO*→ = (−3, −2) and *MA*→ = (0, −1): cos(∠OMA) = 2/√13. With M(3, 2), B(3, 4) so *MB*→ = (0, 2): (0·(x−3) + 2(y−2))/(2√13·2) = 2/√13 ⇔ y − 2 = 4 ⇔ y = 6. And |MC| = 2√13: (x − 3)² + 16 = 52 ⇔ x = 9 (x > 3 excludes x = −3). Check |CB| = √(36 + 4) = √40 = 2√10 ✓.

**Answer:** C(9, 6).

**Common mistakes.** A different vertex correspondence (the given name order settles it); solving for y but not filtering x by x_C > 3; computing |CB| incorrectly after finding C.

**Points:** 6 — ratio from MB/MA, angle condition, coordinates with the sign filter.

**Subdomain:** [B11](../B11-triangle-geometry/) and [B12](../B12-vectors/).

## Question 3a (official paper)

**Asked:** show by exact computation that the line through the two graph intersections A and B meets the graph of g a third time on the x-axis.

**Solution.** Intersections: f − g = 2x² + 2x − 4 = 2(x − 1)(x + 2) = 0 ⇔ x = 1 or x = −2: points B(1, −1) and A(−2, −4) (either function's evaluation agrees). Line through them: slope (−1 + 4)/3 = 1: y = x − 2. Meet g again: x³ − x² − 3x + 2 = x − 2 ⇔ x³ − x² − 4x + 4 = 0 ⇔ x²(x − 1) − 4(x − 1) = (x − 1)(x² − 4) = (x − 1)(x − 2)(x + 2) = 0 ⇔ x = 1, 2, or −2. The third intersection is (2, 0) — on the x-axis. ∎ (The factorisation was predictable: we already knew the roots x = 1 and −2 from A and B.)

**Common mistakes.** Recomputing instead of factoring with the two known roots as guidance; y-coordinates instead of showing the third point lies at y = 0; arithmetic slips in the line's constant (−2).

**Points:** 7 — line through A,B, the third intersection, y = 0 check.

**Subdomain:** [B03](../B03-power-and-root-functions/) and [B01](../B01-algebraic-skills/).

## Question 3b (official paper)

**Asked:** the exact maximal distance between the two graph points at the same x between the intersections.

**Solution.** The difference: f(p) − g(p) = 2p² + 2p − 4, negative between the roots (−2, 1), so the distance there is g − f = −2p² − 2p + 4. Maximum of this bergparabool at p = −b/(2a) = 2/(−2·2) = −½, inside the window: distance = −2·(¼) + 1 + 4 = 9/2.

**Answer:** 9/2.

**Common mistakes.** Using f − g's minimum instead of distance-maximum sign; the vertex formula's sign (−b/2a with a = −2); boundary values omitted from comparison (they are 0 at the ends, and 9/2 wins).

**Points:** 5 — distance function, vertex argument, exact value.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 3c (official paper)

**Asked:** the exact area of the triangle CDP formed by the y-axis intersections of the two cubics and the intersection of their tangent lines there.

**Solution.** C = (0, −2) on f; D = (0, 2) on g. Tangent at C: f′(0) = (3x² + 2x − 1)|₀ = −1 → y = −x − 2. Tangent at D: g′(0) = (3x² − 2x − 3)|₀ = −3 → y = −3x + 2. Intersection P: −x − 2 = −3x + 2 ⇔ x = 2, y = −4: P(2, −4). Base CD = 4 (vertical on the y-axis), height = 2 (horizontal distance): area = ½·4·2.

**Answer:** 4.

**Common mistakes.** Tangents at the wrong points (they are at the *y-axis* points x = 0); triangle area with slanted height instead of the horizontal distance to the vertical base.

**Points:** 6 — both tangents, intersection P, area.

**Subdomain:** [B07](../B07-differentiation/) and [B11](../B11-triangle-geometry/).

## Question 3d (official paper)

**Asked:** show by exact computation that rotating the bounded region under the given parabola about the x-axis gives volume 8.1π.

**Solution.** h(x) = 3x − x² = x(3 − x): zeros at 0 and 3, positive in between. Volume = π·∫₀³ (3x − x²)² dx = π∫₀³ (9x² − 6x³ + x⁴) dx = π[3x³ − (3/2)x⁴ + x⁵/5]₀³ = π·(81 − 121.5 + 243/5) = π·(81 − 121.5 + 48.6) = π·8.1. ∎

**Common mistakes.** Forgetting to square h under π∫ y²; x⁴/4 coefficient slip; decimal verdicts checked against 8.1 without the exact route.

**Points:** 6 — proper volume setup, polynomial integration, exact 8.1.

**Subdomain:** [B09](../B09-integration/).

## Question 4a (official paper)

**Asked:** all exact a in [0, 4] for which the graph of f_a(x) = sin x − cos(ax) passes through B(5π/4, 0).

**Solution.** Need sin(5π/4) = cos(5aπ/4): sin(5π/4) = −½√2, so cos(5aπ/4) = cos(3π/4) ⇔ 5aπ/4 = ±3π/4 + 2kπ. First family: 5a = 3 + 8k; second: 5a = −3 + 8k. Candidates in [0, 4]: from the first: a = 3/5 (k = 0), 11/5 (k = 1), 19/5 (k = 2); from the second: a = 1 (k = 1), 13/5 (k = 2) — the next, 21/5 > 4, falls out.

**Answer:** a ∈ {3/5, 1, 11/5, 13/5, 19/5}.

**Common mistakes.** Only one of the two cosine-equality families (cos θ = cos α allows ±θ); cos(5π/4) written as +½√2; the endpoint a = 4 actually fails (check: 5·4 = 20 ≠ 3 ± 8k for integer k).

**Points:** 6 — exact angle value, both families, the interval filtering.

**Subdomain:** [B05](../B05-trigonometry/) and [B06](../B06-trigonometric-functions/).

## Question 4b (official paper)

**Asked:** the exact area of the bounded region V between the x-axis and the graph of f₁ on the given window.

**Solution.** f₁(x) = sin x − cos x: zeros where sin x = cos x ⇔ x = π/4, 5π/4; positive between them (test x = π/2: 1 − 0 = 1 > 0 ✓). Area = ∫ from π/4 to 5π/4 of (sin x − cos x) dx = [−cos x − sin x] from π/4 to 5π/4 = (−(−√2/2) − (−√2/2)) − (−√2/2 − √2/2) = √2 + √2 = 2√2.

**Answer:** 2√2.

**Common mistakes.** Integrating over [0, 2π] total (the signed version gives 0 — meaningless for the region); signs of the exact values at 5π/4 (both −½√2 ✓).

**Points:** 5 — zeros, correct interval, exact antiderivative values.

**Subdomain:** [B09](../B09-integration/) and [B06](../B06-trigonometric-functions/).

## Question 4c (official paper)

**Asked:** the exact minimal value of f₂(x) = sin x − cos 2x.

**Solution.** f₂′(x) = cos x + 2 sin 2x = cos x + 4 sin x cos x = cos x·(1 + 4 sin x) = 0 ⇔ cos x = 0 or sin x = −1/4. cos x = 0: at π/2 (f = 2, a max) and 3π/2 (f = 0). For sin x = −1/4, rewrite f₂ with cos 2x = 1 − 2 sin²x: f₂ = 2 sin²x + sin x − 1 = 2·(1/16) − 1/4 − 1 = 1/8 − 1/4 − 1 = −9/8. Negative and below the other candidates' values: minimum −9/8 (attained at two x-values in [0, 2π]).

**Answer:** minimum −9/8.

**Common mistakes.** Stopping at cos x = 0 candidates (the other branch carries the true minimum); using cos 2x = 2 cos²x − 1 instead of in sin-form; decimal shortcuts instead of the exact −9/8.

**Points:** 8 — derivative with both branches, the sin-form rewrite, exact minimum.

**Subdomain:** [B08](../B08-function-investigation/) and [B05](../B05-trigonometry/).

## Question 4d (official paper)

**Asked:** the exact x-value(s) where the exam's hybrid graph (trigonometric numerator over a log-sum denominator) has a perforation.

**Solution.** A perforation needs numerator AND denominator 0 simultaneously. Denominator: ln x + ln(3x + 1) + 2 ln 2 = ln(2²·x·(3x + 1)) = 0 ⇔ 4x(3x + 1) = 1 ⇔ 12x² + 4x − 1 = 0 ⇔ x = (−4 ± √64)/24 = (−4 ± 8)/24 ⇔ x = 1/6 (x = −1/2 breaks the log domains x > 0, 3x + 1 > 0). Numerator at x = 1/6: sin(π/6) − cos(2π/6) = ½ − ½ = 0 ✓. So x = 1/6 is a perforation (a single missing point; numerator and denominator both vanish).

**Answer:** x = 1/6.

**Common mistakes.** Only solving the denominator (the candidate must also zero the numerator — check!); the log manipulation −ln(4x(3x+1)) = 0 → argument 1 garbled; wasting time on the limit (the question only asks for the x-value).

**Points:** 5 — both vanishing conditions and the domain candidate.

**Subdomain:** [B08](../B08-function-investigation/) and [B04](../B04-exponential-and-logarithmic-functions/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math B folder](../README.md).*
