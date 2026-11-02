# Walkthrough — CvTE VWO examen wiskunde B, 2024 tijdvak 1 (May 2024)

- **Official paper:** VWO wiskunde B, centraal examen 2024 period 1, college code VW-1025-a-24-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2024-07/vw-1025-a-24-1-o-spr.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2024-05/vw-1025-a-24-1-c.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each question asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito).

Exam totals: 18 questions, 76 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: quartic-half-power graph ([B03](../B03-power-and-root-functions/), [B08](../B08-function-investigation/)), Erlang waiting times ([B04](../B04-exponential-and-logarithmic-functions/), [B09](../B09-integration/)), shifting graphs ([B02](../B02-functions-and-graphs/)), log-root-exponent with inverse ([B04](../B04-exponential-and-logarithmic-functions/), [B02](../B02-functions-and-graphs/)), parametric clover ([B14](../B14-parametric-curves/), [B06](../B06-trigonometric-functions/)), half circle ([B11](../B11-triangle-geometry/), [B13](../B13-circle-geometry/)), rational family ([B08](../B08-function-investigation/)), planetary astronomy ([B01](../B01-algebraic-skills/), [B12](../B12-vectors/)).

## Question 1 (official paper) — 3 points

**Asked:** prove that the graph of f(x) = x⁵ − 3x√x rises at A(1, −2).

**Solution.** f(x) = x^(9/2) − 3x^(3/2), so f′(x) = (9/2)x^(7/2) − (9/2)x^(1/2) = 4.5x^3.5 − 4.5√x. At x = 1: f′(1) = 4.5 − 4.5 = 0.5 > 0: the graph rises at A. (Also note f(1) = 1 − 3 = −2 ✓ the point is on the graph.) ∎

**Common mistakes.** The fractional-power derivative (√x = x^(1/2) → ½x^(−1/2), not 1/(2√x) collapsed twice); after computing the correct zero of f′ elsewhere, misreading "stijgt" as a vertex question.

**Points:** 3 — correct derivatives, f′(1) > 0 conclusion.

**Subdomain:** [B07](../B07-differentiation/) and [B03](../B03-power-and-root-functions/).

## Question 2 (official paper) — 4 points

**Asked:** the x-coordinate of P (3 decimals) for a horizontal segment PQ of length ½ with both ends on the graph.

**Solution.** Horizontal: f(p) = f(p + ½). Solve x⁵ − 3x^(3/2) = (x + ½)⁵ − 3(x + ½)^(3/2) numerically with the graphing calculator (non-algebraic equation): p ≈ 0.6827...

**Answer:** p ≈ 0.683.

**Common mistakes.** Using Pythagoras length in y (horizontal ⇒ same y, length is the x-gap); an exact-solution attempt (no closed form here — the CCVX would redesign for exactness).

**Points:** 4 — the equation setup, correct solving method, 3-decimal rounding.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 3 (official paper) — 3 points

**Asked:** algebraically the percentage of cases with waiting time 0–3 minutes, 1 decimal.

**Solution.** ∫₀³ 50·e^(−t/2) dt, with primitive −100·e^(−t/2): [−100e^(−t/2)]₀³ = −100·e^(−3/2) + 100 = 100(1 − e^(−1.5)) ≈ 77.68: ≈ 77.7%.

**Answer:** ≈ 77.7%.

**Common mistakes.** Primitive with the wrong constant (keep the −1/(1/2) = −2 factor accounted); percentage-vs-area units mixed (this model's total area is 100 percent — no extra normalising needed here).

**Points:** 3 — antiderivative, bounds, 1-decimal answer.

**Subdomain:** [B09](../B09-integration/) and [B04](../B04-exponential-and-logarithmic-functions/).

## Question 4 (official paper) — 3 points

**Asked:** prove that y = (t/a − 1/a²)·e^(at) is a primitive of y = t·e^(at) for every a ≠ 0.

**Solution.** Product rule: y′ = (1/a)·e^(at) + (t/a − 1/a²)·a·e^(at) = e^(at)·(1/a + t − 1/a) = t·e^(at). ∎ Cleanest start is expanding first: y = (t/a)e^(at) − (1/a²)e^(at), then differentiate each part.

**Common mistakes.** Sign chaos inside the big bracket (the 1/a terms cancel exactly — that's the point); differentiating without the product rule on the first term.

**Points:** 3 — clean product+chain differentiation.

**Subdomain:** [B09](../B09-integration/) and [B07](../B07-differentiation/).

## Question 5 (official paper) — 4 points

**Asked:** algebraically the mean waiting time in whole minutes for the exam's Erlang model.

**Solution.** Mean = (1/100)·∫₀²⁰ t·50·e^(−t/2) dt = 0.5·∫₀²⁰ t·e^(−t/2) dt. With Q4 (a = −½): the primitive of t·e^(−t/2) is (−2t − 4)e^(−t/2). Bounds: at 20: −44·e^(−10); at 0: −4. Integral = −44e^(−10) + 4 ≈ 4.000. Mean ≈ 0.5·4 = 2 minutes.

**Answer:** ≈ 2 minutes.

**Common mistakes.** The 1/100 factor lost; evaluation of e^(−10) as exactly 0 written sloppily (it's ≈ 0.002 — keep the exact form and round at the end).

**Points:** 4 — primitive application, bounds, whole-minute conclusion.

**Subdomain:** [B09](../B09-integration/) and [B04](../B04-exponential-and-logarithmic-functions/).

## Question 6 (official paper) — 6 points

**Asked:** exactly construct the formula of g, obtained from f(x) = (3x − 7)² by a horizontal + vertical shift, through A(5, 40) with tangent slope −6 at A.

**Solution.** Write the shift explicitly: g(x) = (3(x − h) − 7)² + c. Chain derivative: g′(x) = 6(3(x − h) − 7). At A: 6(15 − 3h − 7) = −6 ⇔ 8 − 3h = −1 ⇔ h = 3. Then g(5) = (3·2 − 7)² + c = (−1)² + c = 40 ⇔ c = 39. So g(x) = (3(x − 3) − 7)² + 39 = (3x − 16)² + 39. (Check: the shifted-original of A lives at x = 2 on f: f(2) = (−1)² = 1, and 2 + 3 = 5 with 1 + 39 = 40 ✓ consistent.)

**Answer:** g(x) = (3x − 16)² + 39.

**Common mistakes.** Translating with the sign flipped (f(x − h) shifts RIGHT for h > 0 — my h = 3 accordingly); only using g(5) = 40 with two unknowns (the slope supplies the second equation!); putting the +39 inside the square.

**Points:** 6 — shift form, chain-rule use (explicitly scored!), solving both constants.

**Subdomain:** [B02](../B02-functions-and-graphs/) and [B07](../B07-differentiation/).

## Question 7 (official paper) — 5 points

**Asked:** the length of the shortest vertical connector of f(x) = ²log√(1 + 8ˣ) and its inverse g (numeric answer, 2 decimals).

**Solution.** Invert: y = ²log(√(1 + 8ˣ)) ⇔ 2^(2y) = 1 + 8ˣ ⇔ 8ˣ = 2^(2y) − 1, so g(x) = (1/3)·²log(4ˣ − 1). Minimise the vertical difference d(x) = f(x) − g(x) with the graphing calculator: minimum ≈ 0.956 (around x ≈ 0.6). So the segment is about 0.96 long.

**Answer:** ≈ 0.96.

**Common mistakes.** The ½ inside f dropped in the inversion (that squaring-to-2^(2y) is the engine); seeking a closed form for the minimum (numeric is the task here); forgetting f > g everywhere in the question's window.

**Points:** 5 — inverse rule computation, numeric minimisation, rounding.

**Subdomain:** [B02](../B02-functions-and-graphs/) and [B04](../B04-exponential-and-logarithmic-functions/).

## Question 8 (official paper) — 6 points

**Asked:** investigate exactly whether a p exists for which the difference yQ − yP = 3 (Q one unit right of P on the graph of f).

**Solution.** f = ²log√(1 + 8ˣ). Difference: f(p + 1) − f(p) = ½·²log((1 + 8^(p+1))/(1 + 8ᵖ)) = 3 ⇔ (1 + 8·8ᵖ)/(1 + 8ᵖ) = 2⁶ = 64. Then 1 + 8·8ᵖ = 64 + 64·8ᵖ ⇔ 8·8ᵖ − 64·8ᵖ = 64 − 1 ⇔ −56·8ᵖ = 63 ⇔ 8ᵖ = −63/56 < 0 — **impossible** for real p. So no such p exists. ∎

**Common mistakes.** The 2⁶ = 64 step missed (the ½ in f is exactly what produces 2⁶ from 3 — nice trap); concluding "no p" from a numeric dead-end instead of the exact contradiction; ignoring that yQ > yP at all (f IS increasing here — the contradiction is in the numbers, not the direction).

**Points:** 6 — the ratio=64 line, clean contradiction argument.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) and [B01](../B01-algebraic-skills/).

## Question 9 (official paper) — 5 points

**Asked:** the exact distance between the parametric P and its shadow Q (π seconds ahead) at the two moments they're vertically aligned.

**Solution.** xQ(t) = 4 cos(t + π) + cos(4(t + π)) = −4 cos t + cos 4t (cos + π flips sign; 4t + 4π is a full extra turn). xP = xQ ⇔ 4 cos t + cos 4t = −4 cos t + cos 4t ⇔ 8 cos t = 0 ⇔ t = π/2 or 3π/2. At π/2: P = (4·0 + cos 2π, 4·1 + sin 2π) = (1, 4) and Q = (4·0 + cos 6π·... x same 1; y: 4 sin(3π/2·... carefully: Q(π/2) = (cos(6π), 4 sin(π/2 + π) + sin(6π)) = (1, −4). Distance PQ = 8. Same at 3π/2 (swapped): also 8.

**Answer:** PQ = 8 (both times).

**Common mistakes.** The sign flip of cos(t + π) missed for only one of the two terms; distance computed with Pythagoras when the x-zeros make it vertical (|Δy| directly).

**Points:** 5 — the shift identities, both times, the distance.

**Subdomain:** [B06](../B06-trigonometric-functions/) and [B14](../B14-parametric-curves/).

## Question 10 (official paper) — 6 points

**Asked:** the exact acute angle (in degrees) between the path's tangent at t = 2π/3 and the x-axis.

**Solution.** x′(t) = −4 sin t − 4 sin 4t; y′(t) = 4 cos t + 4 cos 4t. At t = 2π/3: sin = √3/2, cos = −½, and 4t = 8π/3 ≡ 2π/3: same values. So x′ = −4(√3/2) − 4(√3/2) = −4√3; y′ = 4(−½) + 4(−½) = −4. Slope dy/dx = (−4)/(−4√3) = 1/√3, giving direction angle arctan(1/√3) = 30° (acute; the acute angle between the tangent and the x-axis is 30°).

**Answer:** 30°.

**Common mistakes.** The 8π/3 reduction forgotten (it's 2π + 2π/3); the angle as 120° (take the acute one!); computing in degrees on the calc while the formulas need consistent settings.

**Points:** 6 — both parametric derivatives, the slope, exact 30°.

**Subdomain:** [B14](../B14-parametric-curves/) and [B05](../B05-trigonometry/).

## Question 11 (official paper) — 4 points

**Asked:** the exact x-coordinate of the point P where a line through O at distance 2½ hits the semicircle on AB.

**Solution.** Circle: centre (1, 0), radius 2: (x − 1)² + y² = 4. P: x² + y² = (2.5)² = 6.25. Subtract: (x² + y²) − ((x − 1)² + y²) = 6.25 − 4 ⇔ 2x − 1 = 2.25 ⇔ x = 3.25/2 = 13/8.

**Answer:** x_P = 13/8.

**Common mistakes.** Subtracting with sign errors; answering x = 1.625 without the exact 13/8 form (both count, but exact is requested); forgetting there are 2 intersection x-values (the subtraction gives P uniquely via the linear remainder).

**Points:** 4 — both circle equations, clean subtraction.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 12 (official paper) — 5 points

**Asked:** the exact area of the grey quadrilateral in the figure (with the right-angled triangle BRO and point S as second circle-line intersection).

**Solution.** Detect the similarity: △BRO ∼ △BSA (both right-angled: at R by construction and at S by Thales on the circle with diameter AB; they share the angle at B). Sides: |OB| = 3, |AB| = 4, so the scale is 4/3. In △BRO: |BR| = √8 = 2√2 (Pythagoras, legs |OR| = 1), so area(△BRO) = ½·1·√8 = ½√8. Then area(△BSA) = (4/3)²·½√8 = 8√8/9. The grey quadrilateral: AORS = △BSA − △BRO = 8√8/9 − √8/2 = (16√8 − 9√8)/18 = 7√8/18 = 7√2/9.

**Answer:** 7√2/9 (≈ 1.10).

**Common mistakes.** The similarity scale applied to lengths but reported on areas (scale factor squares!); forgetting |OR| = 1 in Pythagoras; the subtraction direction (grey = big − small).

**Points:** 5 — similarity, Pythagoras, area composition.

**Subdomain:** [B11](../B11-triangle-geometry/) and [B13](../B13-circle-geometry/).

## Question 13 (official paper) — 4 points

**Asked:** prove that no value of a makes the graph of f_a(x) = (ax² − 2)/(x² + a) have a perforation.

**Solution.** A perforation needs numerator AND denominator zero at the same x. Denominator: x² + a = 0. If a > 0: never zero. If a = 0: the numerator is −2 ≠ 0 there. If a < 0: zeros at x = ±√(−a), and the numerator there is a·(−a) − 2 = −a² − 2 ≤ −2 < 0, never zero either. So no a admits a perforation. ∎

**Common mistakes.** Only discussing a > 0 (the a < 0 case is where denominators can vanish — handle all three cases); "perforation means numerator zero" without the denominator condition (both!).

**Points:** 4 — both conditions, the full case split.

**Subdomain:** [B08](../B08-function-investigation/) and [B01](../B01-algebraic-skills/).

## Question 14 (official paper) — 6 points

**Asked:** exactly which positive a minimises the length ST (T the vertex on the y-axis, S the y-intercept of the horizontal asymptote).

**Solution.** T: f_a(0) = −2/a, so T(0, −2/a). Asymptote: f_a(x) → a as x → ±∞, so S(0, a). Length: ST(a) = a + 2/a (a > 0). Minimise: ST′ = 1 − 2/a² = 0 ⇔ a² = 2 ⇔ a = √2 (positive). (AM-GM check: ST ≥ 2√2 with equality at a = √2 ✓.)

**Answer:** a = √2.

**Common mistakes.** ST = |a| − 2/a sign-way (one value is below the axis, one above: the distance is a + 2/a); discarding a = −√2 (the question restricts to a > 0 ✓); the limit demonstration missing (asymptote shown via y → a, division by x²).

**Points:** 6 — T, S, the length function, exact minimum.

**Subdomain:** [B08](../B08-function-investigation/) and [B07](../B07-differentiation/).

## Question 15 (official paper) — 2 points

**Asked:** the rank number of Saturn by the exam's Titius-Bode rule (a = 0.4 + 0.3·2^(n−2) in AU) with Saturn at 10 AU.

**Solution.** 0.4 + 0.3·2^(n−2) = 10 ⇔ 0.3·2^(n−2) = 9.6 ⇔ 2^(n−2) = 32 = 2⁵ ⇔ n − 2 = 5 ⇔ n = 7.

**Answer:** n = 7.

**Common mistakes.** 9.6/0.3 = 32 slip (not 9.6·0.3); n = 9 from the +2 in the exponent sign.

**Points:** 2 — one clean exponential step.

**Subdomain:** [A04-style exponentials] — in our folders: [B04](../B04-exponential-and-logarithmic-functions/).

## Question 16 (official paper) — 3 points

**Asked:** prove the stated relation between d and α (given via the exact figure situation of the three planets with Venus midway along the line).

**Solution.** Set Z = the sun, A = Earth, V = Venus, M = Mars, with V as the midpoint of M and E on a straight line, and |ZV| = 0.7, |ZE| = 1.0, |ZM| = 1.6, |VE| = |VM| = d. In △ZVE, the cosine rule at V (angle ∠ZVE = α) gives |ZE|² = |ZV|² + d² − 2·|ZV|·d·cos α ⇔ 1.00 = 0.49 + d² − 1.4d·cos α ⇔ 1.4d·cos α = d² − 0.51. In △ZVM, the angle at V is 180° − α (rays to E and M are opposite, since V is midway): |ZM|² = 0.49 + d² − 1.4d·cos(180° − α) ⇔ 2.56 = 0.49 + d² + 1.4d·cos α ⇔ 1.4d·cos α = 2.07 − d². So d² − 0.51 = −(d² − 2.07), which is the stated relation (−cos α = cos(180° − α)). ∎

**Common mistakes.** The supplement relation missed (−cos(180° − α) = −(−cos α) confusion — write it once and use it); applying the cosine rule to the wrong vertices.

**Points:** 3 — two cosine-rule statements, supplement logic.

**Subdomain:** [B05](../B05-trigonometry/) and [B11](../B11-triangle-geometry/).

## Question 17 (official paper) — 3 points

**Asked:** algebraically Earth-to-Venus distance (2 decimals).

**Solution.** From Q16: d² − 0.51 = −(d² − 2.07) ⇔ 2d² = 2.58 ⇔ d² = 1.29 ⇔ d = √1.29 ≈ 1.1358 ≈ 1.14 AE.

**Answer:** d ≈ 1.14 AE.

**Common mistakes.** Forgetting d > 0 (root-sign); continuing with a calculator crossing (this one is exact to √1.29!).

**Points:** 3 — the exact equation and its root.

**Subdomain:** [B01](../B01-algebraic-skills/).

## Question 18 (official paper) — 4 points

**Asked:** the radius of the sun's circle around the common centre of mass, in hundreds of thousands of km.

**Solution.** Two point masses: sun m_Z = 2·10³⁰ kg at distance d = 8·10⁸ km from Jupiter m_J = 2·10²⁷ kg. Centre of mass: from the sun's side, radius r = m_J·d/(m_Z + m_J) = 2·10²⁷·8·10⁸/(2·10³⁰ + 2·10²⁷) = 1.6·10³⁶/2.002·10³⁰ ≈ 7.99·10⁵ km ≈ 8.00·10⁵ km = 8 hundred thousand km.

**Answer:** ≈ 800 000 km (eight hundred-thousands).

**Common mistakes.** Using m_J/m_Z directly without the (m_Z + m_J) normalising factor; scientific-notation slips (10³⁶/10³⁰ = 10⁶, then unit answer in wrong rounding); reporting in km instead of the asked hundred-thousands.

**Points:** 4 — the barycentre ratio, computation, unit conversion.

**Subdomain:** [B01](../B01-algebraic-skills/) (units and scientific notation).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math B folder](../README.md).*
