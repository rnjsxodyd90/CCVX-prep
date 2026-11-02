# Walkthrough — Tentamen Wiskunde B, 21 July 2026 (CCVX sample exam B 24)

- **Official paper:** Tentamen Wiskunde B of 21 July 2026, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde B 24*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2024.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2024%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 4 problems, 81 points; grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = parameter polynomials + logarithmic functions ([B01](../B01-algebraic-skills/), [B04](../B04-exponential-and-logarithmic-functions/), [B08](../B08-function-investigation/)); O2 = trigonometric functions and a primitive check ([B05](../B05-trigonometry/), [B06](../B06-trigonometric-functions/), [B09](../B09-integration/)); O3 = exponential functions, volume, limits ([B04](../B04-exponential-and-logarithmic-functions/), [B08](../B08-function-investigation/), [B09](../B09-integration/)); O4 = circles, tangents, angle bisectors, vectors ([B10](../B10-lines-and-distances/), [B12](../B12-vectors/), [B13](../B13-circle-geometry/)).

## Question 1a (official paper)

**Asked:** for which values of the parameter a does the exam's fourth-degree polynomial family have two inflection points — exactly.

**Solution.** An inflection point needs a sign change of the second derivative. Differentiate the polynomial p_a twice: p_a″(x) = 12x² − 6ax + 2a. That parabola in x changes sign twice exactly when its equation has two distinct real roots, so its discriminant must be positive: D = (6a)² − 4·12·2a = 36a² − 96a = 12a(3a − 8) > 0. The product is positive when both factors share a sign: a > 0 with 3a − 8 > 0 gives a > 8/3; a < 0 automatically carries 3a − 8 < 0, so every a < 0 qualifies.

**Answer:** a < 0 or a > 8/3.

**Common mistakes.** Solving "D ≥ 0" instead of strictly positive (at D = 0 there is no sign change, so one vertex touching, not two inflection points); and concluding "a > 8/3" and forgetting the whole branch a < 0.

**Points:** 5 — two derivatives and the discriminant work earn most of them.

**Subdomain:** [B08](../B08-function-investigation/) (inflection points) with parameter handling of [B01](../B01-algebraic-skills/).

## Question 1b (official paper)

**Asked:** compute exactly the area of the triangle whose vertices are the two intersection points of the exam's two logarithmic graphs and the intersection of the second graph with the positive x-axis.

**Solution.** Intersections of the two logs: set the arguments equal (ln is one-to-one): x² + x + 1 = −x² − x + 13 ⇔ x² + x − 6 = 0 ⇔ x = 2 or x = −3. Both give argument 7, so the intersections are B(2, ln 7) and C(−3, ln 7) — *on the same height*; note that as the built-in check. The point A on the positive x-axis: the second log is 0 ⇔ its argument is 1: −x² − x + 13 = 1 ⇔ x² + x − 12 = 0 ⇔ x = 3 or x = −4; take A(3, 0). Triangle ABC has horizontal base BC of length 5 and height ln 7 − 0 = ln 7: area = ½ · 5 · ln 7.

**Answer:** (5/2)·ln 7.

**Common mistakes.** Taking the x = −4 intersection for A instead of the positive one; trying to "compute" ln 7 numerically (keep exact); splitting the triangle unnecessarily instead of reading the aligned base.

**Points:** 5 — noticing that B and C share a y-coordinate is the key insight worth most of the credit.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) with triangle area from [B11](../B11-triangle-geometry/).

## Question 1c (official paper)

**Asked:** the angle that the tangent line at that positive-x intersection makes with the x-axis, algebraically, in degrees to 1 decimal.

**Solution.** Tangent slope = derivative at that point. Differentiate the second log function with the chain rule: quotient of (inner derivative) over (argument): g′(x) = (−2x − 1)/(−x² − x + 13). At x = 3: numerator −7, denominator 1, so slope −7. tan(direction angle) = −7 gives direction angle ≈ −81.87°; the acute angle with the x-axis is its absolute value.

**Answer:** ≈ 81.9°.

**Common mistakes.** Forgetting the chain rule on ln(u) (derivative is u′/u, not 1/u′); giving −81.9° as final answer (the angle between a line and the x-axis is between −90° and 90°, and here the exam asks the positive angle with the x-axis); rounding too early.

**Points:** 5 — derivative with chain rule, correct evaluation, and the arctan step.

**Subdomain:** [B07](../B07-differentiation/) and direction angles of [B10](../B10-lines-and-distances/).

## Question 1d (official paper)

**Asked:** solve exactly the one equation in the paper that sets (second log − first log) equal to half of the logarithm of 49.

**Solution.** First combine: the difference of the two logs is ln((−x² − x + 13)/(x² + x + 1)), and half of ln 49 is ln 7. Since ln is one-to-one, drop the logs: (−x² − x + 13)/(x² + x + 1) = 7. Cross-multiply (the denominator x² + x + 1 is always positive): −x² − x + 13 = 7x² + 7x + 7 ⇔ 8x² + 8x − 6 = 0 ⇔ 4x² + 4x − 3 = 0. Quadratic formula: x = (−4 ± √(16 + 48))/8 = (−4 ± 8)/8, so x = ½ or x = −3/2. Both arguments stay positive at both solutions, so both count.

**Answer:** x = ½ ∨ x = −3/2.

**Common mistakes.** Turning ½ln 49 into ln 49/2 instead of ln 7 (which costs the exact form); combining the logs the wrong way (difference = log of ratio, not ratio of logs); not checking the log domains.

**Points:** 6 — combining logarithms, the cross-multiplied quadratic, exact roots.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) and [B01](../B01-algebraic-skills/).

## Question 2a (official paper)

**Asked:** all exact solutions on 0 ≤ x ≤ π of the exam's equation cos(x) = sin(4x) — i.e. where the trigonometric quotient function equals 1.

**Solution.** Write both sides as sine (symmetry property of [B06](../B06-trigonometric-functions/)): cos x = sin(π/2 − x), so solve sin(π/2 − x) = sin(4x). Two families: (i) 4x = π/2 − x + k·2π ⇔ 5x = π/2 + 2kπ ⇔ x = π/10 + k·(2π/5); (ii) 4x = π − (π/2 − x) + k·2π = π/2 + x + k·2π ⇔ 3x = π/2 + 2kπ ⇔ x = π/6 + k·(2π/3). Inside [0, π]: from (i): π/10, π/2, 9π/10; from (ii): π/6, 5π/6. **But** the original function has denominator sin(4x), so exclude every solution where sin(4x) = 0: at x = π/2, sin(4x) = sin(2π) = 0 — the equation f(x) = 1 does not exist there at all.

**Answer:** x = π/10, π/6, 5π/6, 9π/10 (four solutions).

**Common mistakes.** Including x = π/2 — the generated solution lies outside the function's domain; using cos = cos conversions with three cases when one sine conversion covers it; listing values outside [0, π].

**Points:** 7 — the two solution families, the k-filtering on the interval, and the domain exclusion.

**Subdomain:** [B06](../B06-trigonometric-functions/).

## Question 2b (official paper)

**Asked:** the exact coordinates of the single perforation (removable gap) of that quotient function inside (0, π).

**Solution.** A perforation needs numerator and denominator both 0. Denominator sin(4x) = 0 at x = π/2 within the open interval; numerator cos(π/2) = 0 too — candidate. For the y-value, simplify before taking the limit: by the double-angle formula twice, sin(4x) = 2 sin(2x)cos(2x) = 4 sin(x)cos(x)cos(2x). The quotient cos(x)/(4 sin(x)cos(x)cos(2x)) simplifies to 1/(4 sin(x) cos(2x)) for x ≠ 0, π/2, π, and at x = π/2 this evaluates to 1/(4 · 1 · cos π) = −1/4. The limit exists while the function is undefined there: a perforation.

**Answer:** (π/2, −1/4).

**Common mistakes.** Trying to "compute" the limit by substitution without simplifying (0/0); sign slips in cos(2x) at π/2; calling it a vertical asymptote (the numerator is also 0, so it is not).

**Points:** 5 — identifying the candidate and computing the exact limit with the identities of the formula sheet.

**Subdomain:** [B08](../B08-function-investigation/) (perforations) and [B05](../B05-trigonometry/) (double angles).

## Question 2c (official paper)

**Asked:** show by exact computation that the exam's cubic-in-cosine function h is a primitive (antiderivative) of the given product function g = 3 sin(x) cos(2x).

**Solution.** Differentiate h = 3 cos x − 2 cos³x + 1: chain rule on cos³x gives −2·3cos²x·(−sin x) = 6 sin x cos²x; with the −3 sin x term: h′(x) = −3 sin x + 6 sin x cos²x = 3 sin x·(2cos²x − 1). By the double-angle formula 2cos²x − 1 = cos(2x) (formula sheet), this is exactly 3 sin x cos(2x) = g(x). So h is a primitive of g. ∎

**Common mistakes.** Dropping the chain factor −sin x inside and getting a wrong middle term; expanding cos(2x) the wrong sign (2cos²x − 1, not 1 − 2cos²x); differentiating g instead (that proves nothing about primitives).

**Points:** 4 — one clean differentiation plus the double-angle finish.

**Subdomain:** [B09](../B09-integration/) and [B05](../B05-trigonometry/).

## Question 2d (official paper)

**Asked:** the exact area of the largest of the three regions enclosed between the shown part of the graph of g (0 ≤ x ≤ π) and the x-axis.

**Solution.** Zeros of g(x) = 3 sin(x) cos(2x) in (0, π): sin x = 0 at the boundaries; cos(2x) = 0 at x = π/4 and x = 3π/4. Sign probe: g > 0 on (0, π/4), g < 0 on (π/4, 3π/4), g > 0 on (3π/4, π). The middle region is the largest (verify with the graph). Its area = −∫ from π/4 to 3π/4 of g(x) dx = h(π/4) − h(3π/4), with h the primitive from the previous part. Notice (½√2)³ = ¼√2. Then h(π/4) = (3/2)√2 − 2·(¼√2) + 1 = (3/2)√2 − (1/2)√2 + 1 = √2 + 1, and h(3π/4) = −(3/2)√2 + 2·(¼√2) + 1 = −(3/2)√2 + (1/2)√2 + 1 = −√2 + 1 (the cube flips sign with the cosine). Area = (√2 + 1) − (−√2 + 1) = 2√2.

**Answer:** 2√2.

**Common mistakes.** Forgetting the sign flip for the middle region (it lies below the axis); computing all three regions when the question only asks the largest; arithmetic slips inside (½√2)³ = ¼√2.

**Points:** 5 — zeros, the choice of region, exact primitive values.

**Subdomain:** [B09](../B09-integration/).

(Continued on the next parts: Opgaven 3 and 4.)

## Question 3a (official paper)

**Asked:** the exact minimum and maximum of the exam's function on x ≥ 0 that multiplies √x with a decreasing exponential of a square.

**Solution.** The function is f(x) = √x · e^(1 − x²). Both factors are positive for x > 0, so the smallest value sits at the edge: f(0) = 0, the minimum. For the maximum, differentiate with the product and chain rules: f′(x) = (1/(2√x))·e^(1−x²) + √x·(−2x)·e^(1−x²) = e^(1−x²)·(1/(2√x) − 2x√x). Since the exponential factor is never 0: 1/(2√x) = 2x√x ⇔ 1 = 4x² ⇔ x = ½ (the other sign is outside the domain). A sign check (f rises on (0, ½), falls beyond) shows a maximum: f(½) = √(½)·e^(3/4) = e^(3/4)/√2 = ½√2 · e^(3/4).

**Answer:** minimum 0 at x = 0; maximum ½√2·e^(3/4) at x = ½.

**Common mistakes.** Forgetting the boundary: x ≥ 0 means x = 0 is a candidate extreme even though f′ does not exist there; sign slips when multiplying 2x√x across.

**Points:** 7 — boundary reasoning, product+chain derivative, the √x division step, exact endpoint values.

**Subdomain:** [B07](../B07-differentiation/) and [B08](../B08-function-investigation/).

## Question 3b (official paper)

**Asked:** show by exact computation that the exam's little exponential function g is a primitive of h, where h is the square of the f of part a.

**Solution.** Write the square first: h(x) = f(x)² = x·e^(2 − 2x²). Differentiate g(x) = −¼·e^(2−2x²) with the chain rule on the exponent 2 − 2x² (derivative −4x): g′(x) = −¼·(−4x)·e^(2−2x²) = x·e^(2−2x²) = h(x). ∎

**Common mistakes.** Squaring only x and not the exponential (h ≠ √x·e^{...} of something strange — it is the square of the product); sign error on (−2x²)′ = −4x reversed.

**Points:** 4 — one chain differentiation against the squared h.

**Subdomain:** [B09](../B09-integration/).

## Question 3c (official paper)

**Asked:** the exact limit of the volume v(p) of the solid of revolution as the boundary p goes to infinity.

**Solution.** The solid-volume formula gives v(p) = π∫₀^p f(x)² dx = π∫₀^p h(x) dx, and the previous part found the primitive: π·[g(x)] from 0 to p = π·(−¼e^(2−2p²) + ¼e²). As p → ∞, e^(2−2p²) → 0 (the exponent runs to −∞), so the limit is π·(0 + ¼e²) = (e²/4)·π.

**Answer:** (πe²)/4.

**Common mistakes.** Forgetting to square f under the π∫-formula (the classic volume slip); writing the limit of e^(2−2p²) as ∞ (sign of the exponent); losing the π.

**Points:** 5 — correct setup with f², the primitive from part b, and the limit evaluation.

**Subdomain:** [B09](../B09-integration/) and [B08](../B08-function-investigation/).

## Question 3d (official paper)

**Asked:** the exact area of the bounded region enclosed by the exam's two small exponential graphs and the y-axis.

**Solution.** The curves are k(x) = 4e^(x/2) and l(x) = 2e^(x/4). Intersection: 4e^(x/2) = 2e^(x/4) ⇔ e^(x/2 − x/4) = ½ ⇔ e^(x/4) = ½ ⇔ x = ln(2⁻⁴) = −4 ln 2 = ln(1/16). For x < 0 the higher graph is k (test x = ln(1/16): both equal 4·(1/16)^(1/2) = 1; test → left: k shrinks faster). So the area is ∫ from ln(1/16) to 0 of (4e^(x/2) − 2e^(x/4)) dx = [8e^(x/2) − 8e^(x/4)] evaluated between those bounds = (8 − 8) − (8·(1/16)^(1/2) − 8·(1/16)^(1/4)) = 0 − (8·¼ − 8·½) = −(2 − 4) = 2.

**Answer:** 2.

**Common mistakes.** Solving for x with ln applied sloppily (4 = 2·e^{x/4−x/2} is the cleanest first move); swapping which curve is upper; sign errors when the lower bound is negative.

**Points:** 7 — the exact intersection, the upper/lower choice, antiderivatives of e^(ax), careful bound subtraction.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) and [B09](../B09-integration/).

## Question 4a (official paper)

**Asked:** prove that the angle between OM and l equals the angle between OM and m (both lines tangent to the exam's circle at P and Q, with M the centre).

**Solution.** Both l and m are tangent to circle c₁, at P and Q respectively. The radius to a tangent point is perpendicular to the tangent, so MP ⊥ l and MQ ⊥ m, which means *the distance from M to l equals the distance from M to m* (both equal the radius). The points equidistant from two lines form their angle bisectors ([B10](../B10-lines-and-distances/)), so M lies on an angle bisector of l and m. Since l and m both pass through O, that bisector is the line OM itself: the angles ∠MOP = ∠MOQ follow. ∎

**Common mistakes.** Citing "the bisector property" without justifying via the radius-perpendicular-tangent fact; proving the mirror symmetry of l and m instead of the asked equality (related, but not the requested statement).

**Points:** 3 — the distance-equality chain is the only needed argument.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 4b (official paper)

**Asked:** show with an exact computation that the centre M lies on the line y = x.

**Solution.** Direction vectors of l and m: (1, 3) and (3, 1) — both have length √10, so they are equally long ([B12](../B12-vectors/)). A bisector through O has the direction of the *sum* of two equally long direction vectors: (1, 3) + (3, 1) = (4, 4) ∝ (1, 1). The part (a) result says M is on that bisector, hence M lies on y = x. ∎

**Common mistakes.** Adding direction vectors of unequal length (the normalisation matters — luckily both already share √10); proving the symmetry of l and m in y = x and never connecting M to the bisector.

**Points:** 3 — vector argument or the angle bookkeeping; both work, but the angle route must state the mirror property of l and m first.

**Subdomain:** [B12](../B12-vectors/) and [B10](../B10-lines-and-distances/).

## Question 4c (official paper)

**Asked:** the exact coordinates of M, given that the circle's area equals 10π.

**Solution.** Area πr² = 10π ⇔ r² = 10. Write M = (a, a) from part b. Distance from M to l (write l as 3x − y = 0): |3a − a|/√(3² + (−1)²) = 2a/√10. Since l is tangent to the circle, this distance-from-centre-to-tangent-line equals the radius: 2a/√10 = √10 ⇔ 2a = 10 ⇔ a = 5, positive per the figure.

**Answer:** M(5, 5).

**Common mistakes.** Using |OP| = |OQ| or the figure's scale without an exact distance computation (the figure is illustrative only); writing the distance formula with a wrong denominator (√(3² + 1²) or just 3); forgetting the sign choice a > 0 from the figure.

**Points:** 5 — r² extraction, distance formula to a line, exact solve.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 4d (official paper)

**Asked:** an exact equation of the exam's second circle, centred on the y-axis and tangent to l at the point R of l shown in the figure.

**Solution.** The tangent at R(1, 3) on l (slope 3) is perpendicular to the radius NR, so the radius from N lies on the perpendicular to l through R: slope −1/3, through R: y = −(x − 1)/3 + 3 = −x/3 + 10/3. N is on the y-axis: x = 0 gives N = (0, 10/3). Radius: |NR| = √((1 − 0)² + (3 − 10/3)²) = √(1 + 1/9) = √(10/9) = (1/3)√10. Equation: x² + (y − 10/3)² = 10/9.

**Answer:** x² + (y − 10/3)² = 10/9.

**Common mistakes.** Taking the perpendicular slope as +3 or −3 instead of −1/3; reading N as the projection of R onto the y-axis (that is not the centre — NR must be perpendicular to the tangent); forgetting to square the radius in the equation (the right side is r² = 10/9, not √10/3).

**Points:** 5 — perpendicular through R, centre on the axis, radius via the distance formula.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math B folder](../README.md).*
