# Walkthrough — Tentamen Wiskunde B, 16 December 2025 (CCVX sample exam B 22)

- **Official paper:** Tentamen Wiskunde B of 16 December 2025, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde B 22*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2022.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2022%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 4 problems, 81 points (21 + 25 + 21 + 14); grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = circle hexagons, tangents, parametrisation ([B08](../B08-function-investigation/), [B13](../B13-circle-geometry/)); O2 = logarithms, distances, volumes ([B04](../B04-exponential-and-logarithmic-functions/), [B09](../B09-integration/), [B10](../B10-lines-and-distances/), [B13](../B13-circle-geometry/)); O3 = trigonometric sums ([B05](../B05-trigonometry/), [B06](../B06-trigonometric-functions/), [B08](../B08-function-investigation/), [B09](../B09-integration/)); O4 = parabola family and a hybrid function ([B01](../B01-algebraic-skills/), [B04](../B04-exponential-and-logarithmic-functions/), [B09](../B09-integration/)).

## Question 1a (official paper)

**Asked:** for the shown hexagon (p = 3), the angle at the right x-axis vertex E between the two sides, algebraically, in degrees to 1 decimal.

**Solution.** On the circle x² + y² = 25: for x = 3, y = ±4, so the vertical-line vertices are (3, 4) and (3, −4), and E = (5, 0). Vectors from E to both: (−2, 4) and (−2, −4), each with length √(4 + 16) = √20. Dot product: 4 − 16 = −12, so cos(angle) = −12/20 = −0.6, giving angle ≈ cos⁻¹(−0.6) ≈ 126.9°. (A quicker mirror argument: half the angle has tan = 4/2 = 2, so the full angle is 2·tan⁻¹(2) ≈ 126.9° — same.)

**Answer:** ≈ 126.9°.

**Common mistakes.** Computing half the angle and forgetting to double it; choosing the dot-product sign wrong; taking the supplementary angle (180° − 63.4° ≈ 116.6° is *not* the exterior-to-interior relation here — the interior angle at E is the obtuse one).

**Points:** 4 — vertices, one trig computation, the doubling.

**Subdomain:** [B12](../B12-vectors/) or [B05](../B05-trigonometry/).

## Question 1b (official paper)

**Asked:** for p = 1⅖, an exact equation of the tangent to the circle at the upper vertex A.

**Solution.** At x = 7/5: y² = 25 − 49/25 = 576/25, so A = (7/5, 24/5). Radius slope OA = (24/5)/(7/5) = 24/7, so the tangent slope is −7/24 (tangent ⊥ radius). Through A: y − 24/5 = −(7/24)(x − 7/5), tidied to y = −(7/24)x + 125/24 (check: at x = 7/5 it gives (−49 + 625)/120 + ... = 24/5 ✓; or in general form 7x + 24y = 125).

**Answer:** y = −(7/24)x + 125/24 (equivalently 7x + 24y = 125).

**Common mistakes.** Tangent slope taken as −24/7 (reciprocal flipped wrongly — it is the negative reciprocal of the radius); slipping on the fraction arithmetic (keep everything in 120ths or clear denominators); forgetting that y_A must come from the exact circle equation.

**Points:** 5 — A's exact coordinates, the perpendicular slope, the clean line.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 1c (official paper)

**Asked:** prove that the hexagon's area equals A(p) = (2p + 10)·√(25 − p²) for the whole family.

**Solution.** With h = √(25 − p²), the six vertices are (±p, ±h) and (±5, 0). Split the hexagon into the middle rectangle from x = −p to x = p plus the two side triangles at E and F. Rectangle: width 2p times height 2h: 4ph. Each triangle: base 2h, height (5 − p): area ½·2h·(5 − p) = (5 − p)h. Total: 4ph + 2(5 − p)h = (4p + 10 − 2p)h = (2p + 10)√(25 − p²). ∎

**Common mistakes.** Only counting the rectangle (the side "ears" are half the point of the parameter p); using triangle height 5 instead of 5 − p; y taken as ±√ instead of the height coordinate √(25 − p²) correctly carried through.

**Points:** 6 — the correct split and clean algebra to the given formula.

**Subdomain:** [B13](../B13-circle-geometry/) and [B11](../B11-triangle-geometry/).

## Question 1d (official paper)

**Asked:** the exact p for which the area function from part c is maximal.

**Solution.** A′(p) = 2√(25 − p²) + (2p + 10)·(−p/√(25 − p²)). Multiply the equation A′ = 0 by √(25 − p²): 2(25 − p²) − p(2p + 10) = 0 ⇔ 50 − 2p² − 2p² − 10p = 0 ⇔ 2p² + 5p − 25 = 0. D = 25 + 200 = 225, so p = (−5 + 15)/4 = 5/2 (the other root −5 is outside 0 < p < 5). Boundary check: A(0) = 50, A(5) = 0, and A(2.5) = 15·√18.75 ≈ 65 > 50, so the candidate wins.

**Answer:** p = 2½.

**Common mistakes.** The root-derivative chain slip (−p/√ instead of −2p/(2√) handled sloppily — they agree, but consistent writing saves a sign); keeping p = −5 in the answer (outside the family's domain 0 < p < 5); no boundary comparison.

**Points:** 6 — derivative with chain rule, cleared quadratic, domain filtering.

**Subdomain:** [B08](../B08-function-investigation/) and [B07](../B07-differentiation/).

## Question 2a (official paper)

**Asked:** the exact x-coordinates of the two intersections of the exam's two logarithmic graphs.

**Solution.** ln(2x + 8) = −ln(2 − x) ⇔ ln((2x + 8)(2 − x)) = 0 ⇔ (2x + 8)(2 − x) = 1 ⇔ −2x² − 4x + 16 = 1 ⇔ 2x² + 4x − 15 = 0. Quadratic formula: x = (−4 ± √(16 + 120))/4 = (−4 ± 2√34)/4 = −1 ± ½√34. Both satisfy the domains x > −4 and x < 2 ✓: −1 − ½√34 ≈ −3.92 > −4 ✓ and −1 + ½√34 ≈ 1.92 < 2 ✓.

**Answer:** x_A = −1 − ½√34, x_B = −1 + ½√34.

**Common mistakes.** Dropping the negative sign of the second log at the start; writing x = (−2 ± √34)/2 (same value, right, but present it neatly as −1 ± ½√34); no domain check at the end.

**Points:** 5 — log combination into zero, quadratic, exact roots.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) and [B01](../B01-algebraic-skills/).

## Question 2b (official paper)

**Asked:** the exact maximal vertical distance between the two graphs on the vertical window between the two intersections.

**Solution.** Distance d(p) = f(p) − g(p) = ln(2p + 8) + ln(2 − p) = ln((2p + 8)(2 − p)). The inner product u(p) = (2p + 8)(2 − p) = −2p² − 4p + 16 is maximised where u′ = −4p − 4 = 0 ⇔ p = −1 — inside the window (−3.92 < −1 < 1.92 ✓), and ln is increasing, so ln(u) is maximal there too. u(−1) = −2 + 4 + 16 = 18. Maximal distance: ln 18.

**Answer:** ln 18.

**Common mistakes.** Maximising f and g separately instead of their difference; exp of the difference instead of maximising the ln argument; forgetting the p = −1 must lie INSIDE the window (it does — state it).

**Points:** 6 — the difference function, its derivative or vertex argument, exact value.

**Subdomain:** [B08](../B08-function-investigation/) and [B02](../B02-functions-and-graphs/).

## Question 2c (official paper)

**Asked:** the distance from the y-axis intersection point C to the circle with the marked x-axis segment OD as diameter — to 4 decimals.

**Solution.** C: f(0) = ln 8, so C = (0, ln 8). D: g(x) = 0 ⇔ 2 − x = 1 ⇔ x = 1, so D = (1, 0). The circle has centre M = (0.5, 0) and radius 0.5. |MC| = √(0.5² + ln²8) = √(0.25 + (2.07944)²) ≈ √4.49... compute: 0.25 + 4.32407 = 4.57407 → √ ≈ 2.13871. C lies outside the circle, so d(C, circle) = |MC| − r ≈ 2.13871 − 0.5 = 1.63871 ≈ 1.6387.

**Answer:** ≈ 1.6387.

**Common mistakes.** Forgetting to subtract the radius (the centre distance is not the distance to the circle); using ln 8 = 8 (it is ≈ 2.08 — a very common slip); Centre placed at (1, 0) instead of the midpoint of the diameter.

**Points:** 6 — C and D, midpoint circle, distance minus radius, correct rounding.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 2d (official paper)

**Asked:** the exact volume of the solid from rotating the bounded region between the axes and the exam's g-graph about the y-axis.

**Solution.** Setup: π∫ x² dy with x written via the inverse of g: y = −ln(2 − x) ⇔ e^(−y) = 2 − x ⇔ x = 2 − e^(−y). Bounds: y = g(0) = −ln 2 to y = 0. Expand x² = 4 − 4e^(−y) + e^(−2y) and integrate: [4y + 4e^(−y) − ½e^(−2y)] from −ln 2 to 0. At 0: 0 + 4 − ½ = 3.5. At −ln 2: −4 ln 2 + 4·e^(ln2) − ½e^(2ln2) = −4 ln 2 + 8 − 2 = 6 − 4 ln 2. Difference: 3.5 − 6 + 4 ln 2 = 4 ln 2 − 2.5. Volume = π(4 ln 2 − 5/2) ≈ 0.856.

**Answer:** π·(4 ln 2 − 5/2).

**Common mistakes.** Using the x-axis formula π∫ y² dx (this rotates about the y-axis → you need x² in y); bounds swapped (negative volume as a smoke alarm); e^(−y) integrated as −e^(−y) with a lost sign somewhere in the expansion.

**Points:** 8 — inverse solving, π∫ x² dy with correct bounds, careful exponential integration.

**Subdomain:** [B09](../B09-integration/) and [B04](../B04-exponential-and-logarithmic-functions/).


## Question 3a (official paper)

**Asked:** prove that f(π + a) + f(π − a) = 2 for every a.

**Solution.** Use the symmetries sin(π + a) = −sin a and sin(π − a) = sin a for the first term, and sin(2π + 2a) = sin(2a) and sin(2π − 2a) = −sin(2a) for the second (add 2π·k as needed — the functions are periodic). Then: f(π + a) + f(π − a) = (−sin a + sin(2a) + 1) + (sin a − sin(2a) + 1) = 2. ∎ (This says the graph is point-symmetric about (π, 1) — remember this for part b.)

**Common mistakes.** Central-angle slips on the doubled arguments (2π + 2a is periodic, not a phase shift of π); writing a proof with specific numbers (a proof must cover all a).

**Points:** 4 — both sine symmetries used exactly, exact cancellation.

**Subdomain:** [B05](../B05-trigonometry/).

## Question 3b (official paper)

**Asked:** show by exact computation that the point on the graph with x-coordinate π is an inflection point.

**Solution.** f′(x) = cos x + 2 cos 2x; f″(x) = −sin x − 4 sin 2x. At x = π: f″(π) = −0 − 4·0 = 0, so it is a candidate. Sign check around it: for small ε > 0, f″(π − ε) = −sin(π − ε) − 4 sin(2π − 2ε) = −sin ε + 4 sin 2ε > 0, while f″(π + ε) = +sin ε − 4 sin 2ε < 0. The second derivative changes sign, so x = π is an inflection point at (π, 1). (Equivalently: from part a the graph is point-symmetric about exactly this point.)

**Common mistakes.** Stopping at f″(π) = 0 (necessary, not sufficient — show the sign change or cite the symmetry of part a); differentiating only one of the two sine terms.

**Points:** 5 — two derivatives, the evaluation, and a sign-change or symmetry statement.

**Subdomain:** [B08](../B08-function-investigation/).

## Question 3c (official paper)

**Asked:** the exact area of the shaded region between the graph of f, the x-axis and the y-axis.

**Solution.** The shaded region runs from the y-axis (x = 0) to the zero of f where the graph meets the x-axis again at x = 3π/2 (check: f(3π/2) = sin(3π/2) + sin(3π) + 1 = −1 + 0 + 1 = 0 ✓, and f > 0 throughout (0, 3π/2): on (0, π) the terms are ≥ 0 with the +1 carrying the ends, and between π and 3π/2 a midpoint test gives f(5π/4) = −½√2 + sin(5π/2) + 1 = −0.707 + 1 + 1 > 0 ✓). So area = ∫ from 0 to 3π/2 of (sin x + sin 2x + 1) dx = [−cos x − ½cos 2x + x] from 0 to 3π/2. At 3π/2: 0 − ½·(−1) + 3π/2 = ½ + 3π/2. At 0: −1 − ½ + 0 = −3/2. Difference: ½ + 3π/2 + 3/2 = 2 + 3π/2 = (4 + 3π)/2.

**Common mistakes.** Integrating to π or 2π instead of the region's actual right boundary at 3π/2 (the shaded region ends at the zero there); sign slips in the antiderivative evaluation at 3π/2 and 0.

**Points:** 6 — the boundary from the figure, antiderivative, exact evaluation.

**Subdomain:** [B09](../B09-integration/).

## Question 3d (official paper)

**Asked:** the exact x-coordinates of all intersections of f and the exam's second trigonometric function on [0, 2π].

**Solution.** f = g ⇔ sin x + sin 2x + 1 = sin x − cos 3x + 1 ⇔ sin 2x = −cos 3x. Convert the right side: −cos 3x = −sin(3x + π/2) = sin(−3x − π/2). Then sin 2x = sin(−3x − π/2) gives: (i) 2x = −3x − π/2 + 2kπ ⇔ 5x = −π/2 + 2kπ ⇔ x = −π/10 + 2kπ/5; (ii) 2x = π − (−3x − π/2) + 2kπ = 3π/2 + 3x + 2kπ ⇔ −x = 3π/2 + 2kπ ⇔ x = −3π/2 + 2kπ. In [0, 2π]: from (i): k = 1..5 → 3π/10, 7π/10, 11π/10, 3π/2, 19π/10; from (ii): k = 1 → π/2. Six solutions.

**Answer:** x = 3π/10, π/2, 7π/10, 11π/10, 3π/2, 19π/10 (six points).

**Common mistakes.** Converting −cos to +sin with a sign error (use −cos θ = sin(−θ − π/2) or draw the unit circle once); losing the second family; interval filtering errors (negative t-values must be shifted +2π).

**Points:** 6 — the conversion, both solution families, exact π-tenth forms.

**Subdomain:** [B06](../B06-trigonometric-functions/).

## Question 4a (official paper)

**Asked:** the exact value of parameter a for which the bounded region between the family's parabola and the x-axis has area 36.

**Solution.** f_a(x) = x² − a has zeros at ±√a, negative between them, so the area is −∫ from −√a to √a of (x² − a) dx = ∫ of (a − x²) over the same interval = [ax − x³/3] from −√a to √a = 2·(a√a − (a√a)/3) = (4/3)·a√a. Set (4/3)a^(3/2) = 36 ⇔ a^(3/2) = 27 ⇔ a = 27^(2/3) = 9.

**Answer:** a = 9.

**Common mistakes.** Integrating x² − a without the minus (sign flip for a region below the axis); writing a√a = 27 ⇔ a³ = 27 ⇔ a = 3 (the correct step is (a√a)² = 27² ⇔ a³ = 729 ⇔ a = 9); using boundary ±√a as ±a.

**Points:** 7 — zeros, integral of (a − x²), the power equation.

**Subdomain:** [B09](../B09-integration/) and [B03](../B03-power-and-root-functions/).

## Question 4b (official paper)

**Asked:** the exact coordinates of the intersections of the hybrid function g(x) = (1 − x²)/(1 − e^(x−1)) with the parabola of f₁(x) = x² − 1.

**Solution.** Set equal: (1 − x²)/(1 − e^(x−1)) = x² − 1. Multiply: 1 − x² = (x² − 1)(1 − e^(x−1)) ⇔ −(x² − 1) − (x² − 1)(1 − e^(x−1)) = 0 ⇔ (x² − 1)(2 − e^(x−1)) = 0... carefully: −(x²−1) = (x²−1)(1 − e^(x−1)) ⇔ (x²−1)(1 − e^(x−1)) + (x²−1) = 0 ⇔ (x²−1)(2 − e^(x−1)) = 0. Two branches: x² = 1 or e^(x−1) = 2 ⇔ x = −1, 1, or 1 + ln 2. Now the domain check: at x = 1 the denominator 1 − e⁰ = 0 — g is undefined there (a perforation of g, since the numerator vanishes too; the limit of g at x = 1 is −2, not the parabola's 0). So x = 1 gives NO intersection. x = −1: g(−1) = 0/(1 − e⁻²) = 0 → point (−1, 0); x = 1 + ln 2: denominator 1 − e^(ln2) = −1 and numerator 1 − (1 + ln 2)²: value 2 ln 2 + (ln 2)² → point (1 + ln 2, 2 ln 2 + ln²2).

**Answer:** (−1, 0) and (1 + ln 2, ln²2 + 2 ln 2).

**Common mistakes.** Including x = 1 (the graph of g has a hole exactly there — a factor cancel in algebra does NOT rescue a point where the function doesn't exist); solving e^(x−1) = 2 as x = ln 2 (it is x − 1 = ln 2, so x = 1 + ln 2); forgetting +1 when isolating.

**Points:** 7 — factoring, both branches, the domain exclusion, and exact y-values.

**Subdomain:** [B08](../B08-function-investigation/) and [B04](../B04-exponential-and-logarithmic-functions/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math B folder](../README.md).*
