# Walkthrough — Tentamen Wiskunde B, 22 July 2025 (CCVX sample exam B 21)

- **Official paper:** Tentamen Wiskunde B of 22 July 2025, published by the Centrale Commissies Voortentamen as *Voorbeeldtentamen wiskunde B 21*.
- **Paper (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2021.pdf>
- **Official answers (PDF):** <https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensWiskunde/Voorbeeldtentamen%20wiskunde%20B%2021%20-%20Uitwerking.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each part asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: CCVW.

Exam totals: 4 problems, 81 points (18 + 26 + 21 + 16); grade = points · 9/81 + 1; pass at 5.5. Coverage: O1 = parabola family, line, circle ([B03](../B03-power-and-root-functions/), [B09](../B09-integration/), [B10](../B10-lines-and-distances/), [B13](../B13-circle-geometry/)); O2 = exponential and log functions, volumes ([B04](../B04-exponential-and-logarithmic-functions/), [B09](../B09-integration/)); O3 = trigonometric products ([B05](../B05-trigonometry/), [B06](../B06-trigonometric-functions/), [B08](../B08-function-investigation/), [B09](../B09-integration/)); O4 = circle, Thales, tangents ([B12](../B12-vectors/), [B13](../B13-circle-geometry/)).

## Question 1a (official paper)

**Asked:** the exact area of the shaded region enclosed by the line x + 4y = 12, the x-axis and the parabola of f₄ = x²/4.

**Solution.** Intersections of the line and the parabola: y = 3 − x/4 = x²/4 ⇔ x² + x − 12 = 0 ⇔ (x + 4)(x − 3) = 0, giving A(3, 9/4) (and B(−4, 4) on the left, irrelevant here). The enclosed shape runs: along the parabola from (0, 0) to A(3, 9/4), then along the line down to the x-axis at (12, 0), and back along the x-axis to (0, 0). Area = ∫₀³ (x²/4) dx + triangle under the line from x = 3 to x = 12. First part: [x³/12]₀³ = 27/12 = 9/4. Second part: a triangle with base 9 (from x = 3 to x = 12 on the x-axis) and height 9/4 (the line's value at x = 3): ½·9·(9/4) = 81/8. Total: 9/4 + 81/8 = 18/8 + 81/8 = 99/8.

**Answer:** 99/8.

**Common mistakes.** Bounding the left part at x = −... at the y-axis correctly but integrating the line below (parabola is the lower curve only between 0 and 3); the region read from the figure wrongly as a single integral; the line-to-axis piece integrated instead of using the triangle (both give 81/8).

**Points:** 7 — intersections, the two-split area, exact fractions.

**Subdomain:** [B09](../B09-integration/).

## Question 1b (official paper)

**Asked:** the exact value of a for which the line *perpendicularly* intersects the parabola in the right intersection point A.

**Solution.** Line slope: from x + 4y = 12 → y = −¼x + 3, so slope −1/4. Parabola f_a(x) = x²/a has slope at x_A: f_a′(x_A) = 2x_A/a. Perpendicular intersection needs slope product −1: (2x_A/a)·(−1/4) = −1 ⇔ 2x_A/a = 4 ⇔ x_A = 2a. Then A is on both curves: x_A²/a = 3 − x_A/4: substituting x_A = 2a: 4a²/a = 3 − a/2 ⇔ 4a = 3 − a/2 ⇔ (9/2)a = 3 ⇔ a = 2/3.

**Answer:** a = 2/3.

**Common mistakes.** Perpendicular sign slip (product should be −1, not 1); letting x_A = 4/a (the algebra gives x_A = 2a); forgetting to use the intersection condition afterwards.

**Points:** 6 — slope product, the two equations, exact a.

**Subdomain:** [B08](../B08-function-investigation/) ([B10](../B10-lines-and-distances/) for the perpendicularity).

## Question 1c (official paper)

**Asked:** the exact a-value(s) for which the circle around M(√6a, 6) through C(2, 0) has radius 10.

**Solution.** First note that M sits on every f_a: (√6a)²/a = 6 ✓ — a check worth stating. Radius 10: |MC|² = (√6a − 2)² + 36 = 100 ⇔ (√6a − 2)² = 64 ⇔ √6a − 2 = ±8. The negative branch gives √6a = −6 — impossible for a > 0 (a root is never negative). Positive: √6a = 10 ⇔ 6a = 100 ⇔ a = 100/6 = 50/3.

**Answer:** a = 50/3.

**Common mistakes.** Squaring (√6a − 2)² incorrectly (it is 6a − 4√6a − 4's form's partner... the step is by factorising, not expanding); keeping the −8 branch (rejects by domain); forgetting the y-offset 6 in |MC|² (the C sits at y = 0, M at y = 6).

**Points:** 5 — the on-curve check, distance equation, domain decision.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 2a (official paper)

**Asked:** the exact area of the triangle formed by the two y-axis points A and B and the x-axis point C of the tangent to g at B.

**Solution.** B = (0, e); the tangent slope there: g′(x) = (e^(1−2x))′ = −2e^(1−2x), so g′(0) = −2e. Tangent: y = e − 2e·x. Its x-intercept: 0 = e − 2e·x ⇔ x = ½, so C = (½, 0). Triangle ABC has vertical side AB = e − 1/e... |AB| = e − e⁻¹ with A = (0, e⁻¹); the height to it is x_C = ½. Area = ½·(e − e⁻¹)·½ = (e − e⁻¹)/4 = (e² − 1)/(4e).

**Answer:** (e − 1/e)/4 = (e² − 1)/(4e).

**Common mistakes.** Tangent written as y = −2e·x (forgetting it passes through (0, e), not the origin); |AB| computed as e + 1/e; an "invented" base×height misread of the triangle (use coordinates cleanly).

**Points:** 6 — derivative, tangent line, intercept, area.

**Subdomain:** [B07](../B07-differentiation/) and [B11](../B11-triangle-geometry/).

## Question 2b (official paper)

**Asked:** the exact volume when the region enclosed by the exam's negative-side exponential, the y-axis and the line y = e² rotates about the x-axis.

**Solution.** The region runs from where g(x) = e^(1−2x) meets y = e² (at x = −½, since 1 − 2x = 2 then... 1 − 2x = 2 ⇔ x = −½) to the y-axis at x = 0. Rotation about the x-axis uses washers: outer radius e² (the line), inner radius g(x): V = π∫ from −½ to 0 of ((e²)² − e^(2−4x)) dx = π∫ (e⁴ − e^(2−4x)) dx. Antiderivative: e⁴·x + ¼e^(2−4x). At 0: ¼e². At −½: −e⁴/2 + ¼e^(2+2) = −e⁴/2 + e⁴/4 = −e⁴/4. Volume = π(¼e² − (−e⁴/4)) = π(e⁴ + e²)/4.

**Answer:** π(e⁴ + e²)/4.

**Common mistakes.** Discs instead of washers (the region lies *under* y = e², not above the curve only); the antiderivative of e^(2−4x) without the −4 factor; sign slips in e^(2−4·(−½)) = e⁴.

**Points:** 9 — the −½ boundary, washer setup, exact exponential integration.

**Subdomain:** [B09](../B09-integration/).

## Question 2c (official paper)

**Asked:** the exact value(s) of a for which h_a(x) = 2 ln x − a ln(x − 2) has a minimum at x = 8.

**Solution.** Necessary: h_a′(8) = 0. h_a′(x) = 2/x − a/(x − 2), so h_a′(8) = 1/4 − a/6 = 0 ⇔ a = 6/4 = 3/2. Nature check for a = 3/2 on the domain x > 2: h′(x) = 2/x − (3/2)/(x − 2) = 0 ⇔ 2(x − 2) = (3/2)x ⇔ x = 8 only; sign analysis (h′ → −∞ as x ↓ 2, h′ > 0 for large x? check: for large x, h′ ≈ (2 − 3/2)/x > 0): decreasing then increasing — indeed a minimum.

**Answer:** a = 3/2.

**Common mistakes.** Differentiating −a ln(x−2) as −a/x; skipping the domain x > 2 (it's what makes this a clean minimum question); answering without the required nature justification.

**Points:** 5 — derivative, the equation at x = 8, exact a with a nature remark.

**Subdomain:** [B07](../B07-differentiation/) (and [B04](../B04-exponential-and-logarithmic-functions/)).

## Question 2d (official paper)

**Asked:** solve exactly: 2 ln x − ln(x − 2) = ln(2x + 3).

**Solution.** Combine the left side: ln(x²/(x − 2)) = ln(2x + 3), so (logs cancel as ln is one-to-one) x²/(x − 2) = 2x + 3. Multiply out (x > 2): x² = (2x + 3)(x − 2) = 2x² − x − 6 ⇔ x² − x − 6 = 0 ⇔ (x − 3)(x + 2) = 0 ⇔ x = 3 or x = −2. The domain x > 2 leaves x = 3.

**Answer:** x = 3.

**Common mistakes.** Writing 2 ln x − ln(x − 2) as ln(2x) − lr(... the rules go to ln(x²/(x−2))); keeping x = −2 (outside the log domain!); solving x² = 2x + 3(x − 2) with bracket errors.

**Points:** 6 — combining, cross-multiplication, domain filtering.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/) and [B01](../B01-algebraic-skills/).

## Question 3a (official paper)

**Asked:** show by exact computation that the exam's F is a primitive of f(x) = sin(x)·cos(2x).

**Solution.** F(x) = cos x − (2/3)cos³x. Differentiate with the chain rule on cos³x: F′(x) = −sin x − (2/3)·3 cos²x·(−sin x) = −sin x + 2 sin x cos²x = sin x·(2cos²x − 1) = sin x·cos(2x) = f(x) (formula sheet: cos 2x = 2cos²x − 1). ∎

**Common mistakes.** The inner derivative of cos x dropped (giving a wrong factor); (2/3)·3 = 2 not −2; trying to differentiate f instead (it proves nothing).

**Points:** 4 — clean chain work ending in the double-angle form.

**Subdomain:** [B09](../B09-integration/) and [B05](../B05-trigonometry/).

## Question 3b (official paper)

**Asked:** show by exact computation that the largest of the graph's three enclosed regions (0 ≤ x ≤ π) has area (2/3)√2.

**Solution.** Zeros of f: sin x = 0 at 0, π; cos 2x = 0 at π/4, 3π/4. Sign check: f > 0 on (0, π/4), f < 0 on (π/4, 3π/4), f > 0 on (3π/4, π) — the middle one is the largest. Area = −∫ from π/4 to 3π/4 of f dx = F(π/4) − F(3π/4) with the primitive of part a. With cos(π/4) = ½√2 and cos³ = ¼√2: F(π/4) = ½√2 − (2/3)(¼√2) = ½√2 − (1/6)√2 = (1/3)√2; with cos(3π/4) = −½√2: F(3π/4) = −(1/3)√2. Area = (1/3)√2 − (−(1/3)√2) = (2/3)√2. ∎

**Common mistakes.** Using cos(π/4)³ = (½√2)³ incorrectly ((½√2)³ = ¼√2, not ⅛√2·... it's (½)³·(√2)³ = ⅛·2√2 = ¼√2 ✓); forgetting the minus for the below-axis region; comparing three areas when only the middle one's sign differs.

**Points:** 6 — zeros and regions, primitive evaluation with exact roots, the claimed value.

**Subdomain:** [B09](../B09-integration/).

## Question 3c (official paper)

**Asked:** all exact solutions on [0, 2π] of f(x) = g(x) for the given f and the second trigonometric function g(x) = cos(x)·sin(2x).

**Solution.** sin x·cos 2x = cos x·sin 2x. Move everything left and read it as a sum formula **backwards**: sin x·cos 2x − cos x·sin 2x = sin(x − 2x) = sin(−x) = 0 ⇔ sin x = 0 ⇔ x = 0, π, 2π on the interval. (No division by cos x or sin x needed — the formula sheet's sum rule does it all.)

**Answer:** x = 0, π, 2π.

**Common mistakes.** Dividing by cos x (hiding solutions where cos x = 0; the factoring route shows sin x = 0 is right, and cos x = 0 points x = π/2, 3π/2 do NOT solve: check e.g. f(π/2) = 1·cos π = −1 ≠ g = 0); expanding with double angles and getting stuck (the backwards sum rule is the exact tool).

**Points:** 5 — the sum-difference identity route, all three solutions on the interval.

**Subdomain:** [B06](../B06-trigonometric-functions/).

## Question 3d (official paper)

**Asked:** the exact angle between the graphs of f and the exam's third (sine-shifted) function h at their first intersection A(π/6, ¼).

**Solution.** The angle between the graphs = the angle between their tangent lines there. f′(x) = cos x·cos 2x − 2 sin x·sin 2x (product rule), so f′(π/6) = (√3/2)(½) − 2(½)(√3/2) = √3/4 − √3/2 = −√3/4. The other function is h(x) = (8/3)sin(x) − 13/12, with h′(x) = (8/3)cos x, so h′(π/6) = (8/3)(√3/2) = (4/3)√3. Product of the slopes: (−√3/4)·((4/3)√3) = −(3·4)/(4·3) = −1: the tangents are perpendicular by the slope-product theorem — angle 90°.

**Answer:** 90° (= π/2).

**Common mistakes.** The ×2 in f′ from the inner cos(2x) derivative (product AND chain rules both apply); slope product as +1 from sign slips; using the direction-angle difference with rounding instead of the exact perpendicularity test.

**Points:** 6 — both exact derivatives, the product test, conclusion.

**Subdomain:** [B07](../B07-differentiation/) and [B10](../B10-lines-and-distances/).

## Question 4a (official paper)

**Asked:** show by exact computation that the exam's segment AB is a diameter of the given circle.

**Solution.** Midpoint of AB with A(−6, 0), B(4, −10): ((−6 + 4)/2, (0 + (−10))/2) = (−1, −5). Complete the squares of the circle equation: x² + 2x + y² + 10y = 24 ⇔ (x + 1)² + (y + 5)² = 24 + 1 + 25 = 50: centre exactly (−1, −5). Also |AB| = √(10² + (−10)²) = √200 = 10√2 = 2·√50 — twice the radius. The midpoint is the centre and the segment's length equals the diameter. ∎

**Common mistakes.** Checking that A and B lie on the circle and calling that a proof (the midpoint must ALSO be the centre); square completion errors (24 + 1 + 25 = 50 ✓).

**Points:** 4 — midpoint, completed square, radius comparison.

**Subdomain:** [B13](../B13-circle-geometry/).

## Question 4b (official paper)

**Asked:** the exact coordinates of the two points P on the exam's vector-parametrised line m with ∠APB = 90°.

**Solution.** By the Thales converse, ∠APB = 90° ⇔ P lies on the circle with diameter AB — the circle from part a: (x + 1)² + (y + 5)² = 50. The line: (x, y) = (−5, −2) + λ(3, 4). Substitute: (−5 + 3λ + 1)² + (−2 + 4λ + 5)² = 50 ⇔ (3λ − 4)² + (4λ + 3)² = 50 ⇔ 9λ² − 24λ + 16 + 16λ² + 24λ + 9 = 25λ² + 25 = 50 ⇔ λ² = 1 ⇔ λ = ±1. λ = 1: P = (−2, 2); λ = −1: P = (−8, −6).

**Answer:** P₁(−2, 2) and P₂(−8, −6).

**Common mistakes.** Using the dot-product equation directly (works too: (A−P)·(B−P) = 0, more algebra, same points); parameter sign slips; forgetting there are exactly two (λ² = 1 has two roots).

**Points:** 6 — Thales set-up, substitution, both points.

**Subdomain:** [B13](../B13-circle-geometry/) and [B12](../B12-vectors/).

## Question 4c (official paper)

**Asked:** the exact equations of the circle's two vertical tangent lines.

**Solution.** Centre M(−1, −5), radius √50 = 5√2. Vertical tangent lines touch at the circle's leftmost and rightmost points: x = −1 − 5√2 and x = −1 + 5√2. (Check: distance from the centre to x = −1 ± 5√2 is 5√2 = r ✓.)

**Answer:** x = −1 − 5√2 and x = −1 + 5√2.

**Common mistakes.** Circumference-style slope solving (vertical lines have no slope — use the centre ± radius); writing the radius as √50 unsimplified (5√2 is the expected form); answers y = ... (vertical lines are x = const!).

**Points:** 6 — reading centre and r from the completed equation, both lines.

**Subdomain:** [B13](../B13-circle-geometry/).

---

*End of walkthrough. Try every part before reading the solution, mark yourself with the official answer key, and log weak subdomains back into the [Math B folder](../README.md).*
