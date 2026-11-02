# Walkthrough — Tentamen Wiskunde B, 20 April 2026 (CCVX sample exam B 23)

- **Official paper:** Tentamen Wiskunde B of 20 April 2026, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde B 23*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2023.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2023%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 4 problems, 81 points; grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = exponential square and log functions, volumes ([B04](../B04-exponential-and-logarithmic-functions/), [B07](../B07-differentiation/), [B09](../B09-integration/)); O2 = rational function family with parameter ([B08](../B08-function-investigation/), [B09](../B09-integration/)); O3 = parametric path ([B06](../B06-trigonometric-functions/), [B14](../B14-parametric-curves/)); O4 = touching circles ([B12](../B12-vectors/), [B13](../B13-circle-geometry/)).

## Question 1a (official paper)

**Asked:** the exact maximum of the exam's squared-exponential-difference function on x ≤ 0.

**Solution.** f(x) = (e^(2x) − eˣ)². Chain rule: f′(x) = 2(e^(2x) − eˣ)(2e^(2x) − eˣ) = 0 when e^(2x) = eˣ ⇔ x = 0, or 2e^(2x) = eˣ ⇔ eˣ = ½ ⇔ x = ln(½). Candidates on x ≤ 0: x = 0 gives f = (1 − 1)² = 0 (a minimum); at x = ln(½), eˣ = ½ and e^(2x) = ¼, so f = (¼ − ½)² = (1/4)² = 1/16; and f → 0 for x → −∞. So the maximum is 1/16.

**Answer:** 1/16.

**Common mistakes.** Differentiating the outer square but losing the inner derivative; taking x = 0 as the maximum (the graph shows a bump *left* of the y-axis); mixing up e^(2x) and (eˣ)² evaluation at ln(½).

**Points:** 6 — chain derivative, both candidates, the exact evaluation.

**Subdomain:** [B07](../B07-differentiation/) and [B08](../B08-function-investigation/).

## Question 1b (official paper)

**Asked:** the exact area of the region enclosed by the x-axis, the vertical line through x = ln(√2) and the graph of f.

**Solution.** Expand first: f(x) = e^(4x) − 2e^(3x) + e^(2x), positive on [0, ln√2] (check the graph). Antiderivative: ¼e^(4x) − (2/3)e^(3x) + ½e^(2x). Evaluate: at ln√2 the terms give ¼·(√2)⁴ − (2/3)·(√2)³ + ½·(√2)² = 1 − (4/3)√2 + 1 = 2 − (4/3)√2; at 0: ¼ − 2/3 + ½ = 1/12. Area = (2 − (4/3)√2) − 1/12 = 23/12 − (4/3)√2 ≈ 0.031.

**Answer:** 23/12 − (4/3)√2.

**Common mistakes.** Not expanding the square before integrating; (√2)³ evaluated as 2 instead of 2√2; sign slips in the final subtraction (the result is small but positive — sanity check helps).

**Points:** 6 — expansion, each antiderivative with its chain factor, exact root arithmetic.

**Subdomain:** [B09](../B09-integration/) and [B03](../B03-power-and-root-functions/).

## Question 1c (official paper)

**Asked:** the exact coordinates of the intersection with the x-axis of the tangent line to the exam's log graph at the marked point.

**Solution.** g(x) = ln(3x), and the point A sits at x = e/3, so 3x = e and y = ln(e) = 1: A(e/3, 1). g′(x) = (3x)′/3x = 1/x, so the slope at A is 3/e. Tangent: y − 1 = (3/e)(x − e/3) = (3/e)x − 1, so y = (3/e)x — it runs through the origin. The intersection with the x-axis is (0, 0).

**Answer:** (0, 0).

**Common mistakes.** Derivative written as 1/(3x) (forgot the inner factor 3 cancels, or chain it fully); the constant −1 dropped on expansion, breaking the clean origin intersection.

**Points:** 5 — point, derivative at the point, line equation, x-axis intersection.

**Subdomain:** [B07](../B07-differentiation/) and [B04](../B04-exponential-and-logarithmic-functions/).

## Question 1d (official paper)

**Asked:** show by exact computation that the exam's function H is a primitive of h(x) = g(x)².

**Solution.** Differentiate H term by term with the product rule on x·(ln(3x))² and on 2x·ln(3x), using (ln(3x))′ = 1/x: H′(x) = (ln(3x))² + x·2ln(3x)·(1/x) − 2ln(3x) − 2x·(1/x) + 2 = (ln(3x))² + 2ln(3x) − 2ln(3x) − 2 + 2 = (ln(3x))² = g(x)². ∎

**Common mistakes.** Differentiating ln(3x) as 1/(3x) — it comes out 1/x either way, but show the chain honestly; aimless product-rule loops that never simplify.

**Points:** 3 — two product rules collapsed into one clean answer.

**Subdomain:** [B09](../B09-integration/).

## Question 1e (official paper)

**Asked:** the exact volume when the region under the log graph (between its zero and the marked vertical line) rotates about the x-axis.

**Solution.** Zero of g: ln(3x) = 0 ⇔ x = 1/3. Volume = π∫ from 1/3 to e/3 of g(x)² dx = π·[H(x)] between the bounds, with H the primitive from part d. H(e/3) = (e/3)·1² − 2(e/3)·1 + 2(e/3) = e/3; H(1/3) = (1/3)·0 − 0 + 2/3 = 2/3. Volume = π(e/3 − 2/3) = π(e − 2)/3.

**Answer:** π(e − 2)/3.

**Common mistakes.** The π forgotten; g instead of g² under the integral; subtracting the bounds backwards (a negative volume flags it).

**Points:** 5 — zero-finding, π∫ y² setup, exact use of the primitive.

**Subdomain:** [B09](../B09-integration/).

## Question 2a (official paper)

**Asked:** for the two parameter values that give the exam's rational family f_a(x) = (x² + x)/(x + a) a perforation, compute the perforation coordinates exactly.

**Solution.** A perforation needs a common zero: numerator zeros at x = 0 and x = −1; the denominator vanishes at x = −a. So a = 0 or a = 1. For a = 0: f₀(x) = (x²+x)/x = x + 1 (x ≠ 0), so the perforation lies at (0, 0 + 1) = (0, 1). For a = 1: f₁(x) = (x²+x)/(x+1) = x (x ≠ −1), so the perforation is (−1, −1).

**Answer:** a = 0 with perforation (0, 1); a = 1 with perforation (−1, −1).

**Common mistakes.** Solving only the numerator or only the denominator; answering with the limit value as x instead of coordinates; a sign slip putting the second hole at (1, ...).

**Points:** 5 — common-zero reasoning, both parameter cases with limits.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 2b (official paper)

**Asked:** exactly for which parameter values the graph of f_a has two extrema.

**Solution.** Two extrema need two roots of f_a′. Quotient rule: f_a′(x) = ((2x + 1)(x + a) − (x² + x))/(x + a)² = (x² + 2ax + a)/(x + a)². Roots from the numerator: x² + 2ax + a = 0 with discriminant D = 4a² − 4a = 4a(a − 1) > 0 ⇔ a < 0 or a > 1. (At D = 0 the graph only flattens — just one candidate, and the denominator's zero must also be checked but falls outside these roots.)

**Answer:** a < 0 ∨ a > 1.

**Common mistakes.** D ≥ 0 spoiling the "strictly two" requirement; underestimating that the numerator-only equation suffices (the denominator cancels in its square).

**Points:** 5 — quotient derivative, discriminant, strict inequality.

**Subdomain:** [B08](../B08-function-investigation/) and [B01](../B01-algebraic-skills/).

## Question 2c (official paper)

**Asked:** exact equations for the asymptotes of f₂ = (x² + x)/(x + 2).

**Solution.** Vertical: x = −2 (denominator 0, numerator (−2)² − 2 = 2 ≠ 0). Oblique: split off the polynomial part: x² + x = (x + 2)(x − 1) + 2, so f₂(x) = x − 1 + 2/(x + 2), and 2/(x + 2) → 0 as x → ±∞. So y = x − 1 is the oblique asymptote.

**Answer:** x = −2 and y = x − 1.

**Common mistakes.** Calling y = x the asymptote (forget the −1 remainder); no limit demonstration (the syllabus wants the remainder argument shown).

**Points:** 4 — the split and the limit statement.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 2d (official paper)

**Asked:** the exact area of the bounded region enclosed by the y-axis, the line y = x − 1, x = 4 and the graph of f₂.

**Solution.** On [0, 4], f₂ lies above the line (their difference is positive): f₂(x) − (x − 1) = 2/(x + 2) from part c. Area = ∫₀⁴ 2/(x + 2) dx = [2 ln(x + 2)]₀⁴ = 2(ln 6 − ln 2) = 2 ln 3 = ln 9.

**Answer:** 2 ln 3 (= ln 9).

**Common mistakes.** Integrating f₂ alone (the line is the lower boundary, not the x-axis); simplifying the difference with a sign error; log rule slip: 2 ln 3 = ln 3² ✓ not ln 6.

**Points:** 6 — correct integrand via part c, ln-integral, exact log manipulation.

**Subdomain:** [B09](../B09-integration/).

## Question 3a (official paper)

**Asked:** the exact coordinates of all points of the exam's Lissajous path where the tangent is horizontal.

**Solution.** x(t) = 2 sin t, y(t) = cos 3t on 0 ≤ t ≤ 2π. Horizontal tangent needs y′(t) = −3 sin(3t) = 0 with x′(t) = 2 cos t ≠ 0. sin(3t) = 0 ⇔ t = k·π/3: candidates t = 0, π/3, 2π/3, π, 4π/3, 5π/3, 2π — and cos t ≠ 0 at every one of them. Evaluate: t = 0 and 2π → (0, 1); t = π/3 → (√3, −1); t = 2π/3 → (√3, 1); t = π → (0, −1); t = 4π/3 → (−√3, 1); t = 5π/3 → (−√3, −1).

**Answer:** (0, 1) twice (t = 0 and t = 2π), (√3, −1), (√3, 1), (0, −1), (−√3, 1), (−√3, −1).

**Common mistakes.** Missing the x′ ≠ 0 condition (if both are 0 you need a special case — luckily it never happens here); computing cos(3t) with 3π instead of π multiples (the standard values of [B05](../B05-trigonometry/)); losing the t = 2π endpoint.

**Points:** 6 — y′ = 0, seven candidate times, exact point values.

**Subdomain:** [B14](../B14-parametric-curves/).

## Question 3b (official paper)

**Asked:** show by exact computation that the path crosses itself at the exam's given point A(1, 0).

**Solution.** Show two different times land at A. x = 1 ⇔ 2 sin t = 1 ⇔ sin t = ½ ⇔ t = π/6 or t = 5π/6 (in [0, 2π]). At t = π/6: y = cos(π/2) = 0; at t = 5π/6: y = cos(5π/2) = cos(π/2) = 0. So the path passes A(1, 0) at two distinct times — a genuine self-crossing. ∎

**Common mistakes.** Checking one t only (an intersection of the *curve* needs two parameter values); solving 2 sin t = 1 with tars ranges beyond [0, 2π] without filtering.

**Points:** 3 — two parameter values with y = 0 at both.

**Subdomain:** [B14](../B14-parametric-curves/) and [B06](../B06-trigonometric-functions/).

## Question 3c (official paper)

**Asked:** algebraically the angle at which the path crosses itself at A.

**Solution.** The crossing angle is the angle between the velocity vectors at the two passage times of part b. v⃗(t) = (2 cos t, −3 sin 3t): at t = π/6: (√3, −3); at t = 5π/6: (−√3, −3). Dot product: √3·(−√3) + (−3)(−3) = −3 + 9 = 6; lengths both √12. cos α = 6/12 = ½, so α = 60°.

**Answer:** 60° (that is π/3).

**Common mistakes.** Angling the two vectors to the x-axis and mixing their directions (both give ±60° to the horizontal — the *between* angle is what is asked); sign slips in the dot product; answering 120° (take the acute angle between the tangents).

**Points:** 5 — both velocity vectors, dot product formula, acute angle choice.

**Subdomain:** [B12](../B12-vectors/) and [B14](../B14-parametric-curves/).

## Question 3d (official paper)

**Asked:** exactly all t in [0, 2π] whose path points lie on the line y = x/2.

**Solution.** cos(3t) = sin t. Convert: sin t = cos(π/2 − t), so cos(3t) = cos(π/2 − t) ⇔ 3t = π/2 − t + k·2π or 3t = −(π/2 − t) + k·2π. First: 4t = π/2 + 2kπ ⇔ t = π/8 + k·π/2 → in [0, 2π]: π/8, 5π/8, 9π/8, 13π/8. Second: 2t = −π/2 + 2kπ ⇔ t = −π/4 + k·π → 3π/4, 7π/4. Six solutions.

**Answer:** six solutions: t = π/8, 5π/8, 3π/4, 9π/8, 13π/8 and 7π/4.

**Common mistakes.** Solving only one of the two cos-equality cases (the ± case splits); wrong ordering at the end mixing 3π/4 into the π/8-family; endpoint handling (t = 2π itself does not solve it — check).

**Points:** 6 — the conversion, both families, the interval filter.

**Subdomain:** [B06](../B06-trigonometric-functions/) and [B14](../B14-parametric-curves/).


## Question 4a (official paper)

**Asked:** show by exact computation that the exam's stated centre M₂(−4, 2) of the second circle is correct.

**Solution.** When two circles touch, the common point and the two centres lie on one line ([B13](../B13-circle-geometry/)): A(−10, 5), M₁(2, −1) and M₂ are collinear. The radius of c₂ towards A is |M₂A|, and towards M₁ is |M₂M₁| — and since c₂ passes through M₁, both are the same radius. So M₂ is equidistant from A and M₁ on that line: the midpoint. Then x = (−10 + 2)/2 = −4 and y = (5 + (−1))/2 = 2. ∎

**Common mistakes.** Only checking that A lies on c₂ and skipping the "passes through M₁" step (that is what forces the midpoint); sign slips in the midpoint formula (5 + (−1) = 4, halved is 2).

**Points:** 3 — the equal-radii midpoint argument.

**Subdomain:** [B13](../B13-circle-geometry/).

## Question 4b (official paper)

**Asked:** investigate with an exact computation whether the exam's third circle (touching the first at B, radius √20) also touches the second circle.

**Solution.** Since c₃ touches c₁ at B(8, 11), the centre M₃ lies on the line B−M₁, on the far side of M₁, at distance √20 from B. Along *BM₁*→ = M₁ − B = (−6, −12) with length √180: the step from B is a factor √20/√180 = 1/3 of *BM₁*→: M₃ = B + ⅓·(−6, −12) = (8 − 2, 11 − 4) = (6, 7). Radii: r₃ = √20 = 2√5; r₂ = |AM₂| = √((−10 + 4)² + (5 − 2)²) = √(36 + 9) = √45 = 3√5. Centre distance: |M₃M₂| = √((6 + 4)² + (7 − 2)²) = √(100 + 25) = √125 = 5√5. Now r₂ + r₃ = 3√5 + 2√5 = 5√5 = |M₃M₂|: the sum of the radii equals the centre distance.

**Answer:** yes — the circles c₂ and c₃ touch *externally* (the figure is not deceiving here).

**Common mistakes.** Placing M₃ between B and M₁ instead of beyond M₁ (there are two points at distance √20 from B on that line — the touching geometry picks the outer one); proving the radii only and never computing the centre distance (both sides of the touching equation are needed).

**Points:** 7 — M₃ via the scaled vector, all three exact root distances, the touching condition.

**Subdomain:** [B13](../B13-circle-geometry/) and [B12](../B12-vectors/).

## Question 4c (official paper)

**Asked:** an exact equation of the exam's fourth circle, centred at the origin and tangent to the line through the exam's points A and B.

**Solution.** Line AB through (−10, 5) and (8, 11): slope (11 − 5)/(8 − (−10)) = 6/18 = 1/3. Through A: y − 5 = ⅓(x + 10), in general form x − 3y + 25 = 0. The centre-to-tangent-line gap is the radius ([B13](../B13-circle-geometry/)): distance from the origin to the line = |0 − 0 + 25|/√(1² + (−3)²) = 25/√10 = (5/2)√10. Then r² = 25²/10 = 125/2. Equation: x² + y² = 125/2 (= 62.5).

**Answer:** x² + y² = 125/2.

**Common mistakes.** Using 25/√10 as r² (the equation needs r² = (25/√10)² = 62.5); sign errors in the general form; computing the distance to point A instead of to the line.

**Points:** 6 — line AB, the perpendicular-distance argument, exact squaring.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math B folder](../README.md).*
