# Walkthrough — CvTE VWO examen wiskunde B, 2026 tijdvak 1 (13 May 2026)

- **Official paper:** VWO wiskunde B, centraal examen 2026 period 1 (13 May 2026), college code VW-1025-a-26-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1025-a-26-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1025-a-26-1-c.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, figures or data — it tells you what each question asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito).

Exam totals: 17 questions in 6 problems, 75 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); the walkthrough keeps solutions algebraic wherever possible, and where the VWO uses the calculator, it says so explicitly (at the CCVX such a question would be redesigned for exact work). Coverage: circle-line geometry ([B12](../B12-vectors/), [B13](../B13-circle-geometry/)), logarithms and tangents ([B04](../B04-exponential-and-logarithmic-functions/), [B07](../B07-differentiation/)), perforation and area ([B08](../B08-function-investigation/), [B09](../B09-integration/)), bounce model ([B03](../B03-power-and-root-functions/), [B01](../B01-algebraic-skills/)), parametric loop ([B14](../B14-parametric-curves/)), trigonometric quotient ([B05](../B05-trigonometry/), [B08](../B08-function-investigation/)), bounded volume ([B09](../B09-integration/), [B08](../B08-function-investigation/)).

## Question 1 (official paper) — 4 points

**Asked:** the exact coordinates of the right intersection of a circle through P(7, 24) around the origin with a given line through the origin.

**Solution.** The circle has radius |OP| = √(49 + 576) = 25, so it is x² + y² = 625. The line 3x − 4y = 0 becomes y = (3/4)x. Intersect: x² + (3x/4)² = 625 ⇔ (25/16)x² = 625 ⇔ x² = 400 ⇔ x = ±20. Right of the y-axis: x = 20, then y = (3/4)·20 = 15.

**Answer:** S = (20, 15).

**Common mistakes.** Circle radius taken as 7 + 24 (it is Pythagoras!); losing the "right of the y-axis" filter and keeping x = −20.

**Points:** 4 — circle equation, substitution, positive x, y-coordinate.

**Subdomain:** [B13](../B13-circle-geometry/) and [B10](../B10-lines-and-distances/).

## Question 2 (official paper) — 5 points

**Asked:** algebraically the coordinates of A on that line such that the angle bisector of ∠OAB passes through P(7, 24) (B being A's perpendicular projection on the y-axis).

**Solution.** Write A = (a, 3a/4), so B = (0, 3a/4) and AB is horizontal. The angle at A sits between AB (horizontal) and the line AO, whose slope is 3/4; so tan(∠OAB) = 3/4, ∠OAB ≈ 36.87°, and the bisector makes half that: ≈ 18.43° with tan = 1/3. The bisector ray runs from A to P: tan(∠BAP) = (3a/4 − 24)/(a − 7) = 1/3... careful with signs (A lies far right): the direction works out as 3(3a/4 − 24) = a − 7 ⇔ 9a/4 − 72 = a − 7 ⇔ 5a/4 = 65 ⇔ a = 52. Then A = (52, 39).

**Answer:** A = (52, 39).

**Common mistakes.** The bisector's tan read as the full angle's (that is 3/4, not its half 1/3); sign chaos in (3a/4 − 24)/(a − 7); the horizontal line taken as vertical. (The clean vector route: unit direction along AO (4/5,3/5)·... plus AB's unit (1, 0) summed to (9/5·...), equally valid — the official key shows three routes; all land at (52, 39).)

**Points:** 5 — point form, angle or vector argument, exact a.

**Subdomain:** [B12](../B12-vectors/) and [B05](../B05-trigonometry/).

## Question 3 (official paper) — 6 points

**Asked:** the exact x-coordinate of Q where the line m, perpendicular to the tangent k at P (at x_P = ½), touches the graph of f(x) = 2 ln x + 3/(2x) − 1.

**Solution.** f′(x) = 2/x − 3/(2x²). At x = ½: f′ = 4 − 6 = −2, so line m, perpendicular to the tangent, has slope ½ and touches f also tangentially: solve f′(x) = ½ ⇔ 2/x − 3/(2x²) = ½ ⇔ 4x − 3 = x² ⇔ x² − 4x + 3 = 0 ⇔ (x − 1)(x − 3) = 0. Candidate x = 3 is outside the domain (0, 2], so x_Q = 1.

**Answer:** x_Q = 1.

**Common mistakes.** Slope relationship of perpendicular lines applied as −2 instead of −1/(−2) = ½; keeping x = 3 (domain!); quota... the tangent slope of k used as 2 (it's −2).

**Points:** 6 — f′, perpendicular slope condition, quadratic, domain filter.

**Subdomain:** [B07](../B07-differentiation/) and [B10](../B10-lines-and-distances/).

## Question 4 (official paper) — 2 points

**Asked:** give the single transformation that maps the graph of f to the graph of g(x) = 2 ln(2x) + 3/(4x) − 1.

**Solution.** Substituting 2x for x in f gives exactly g: f(2x) = 2 ln(2x) + 3/(2·(2x)) − 1 = g(x). Replacing x by 2x is the scaling *relative to the y-axis* ([B02](../B02-functions-and-graphs/)) with factor 1/2.

**Answer:** scaling relative to the y-axis with factor 1/2.

**Common mistakes.** Calling it a horizontal stretch by 2 (it is a compression: the same curve happens twice as fast); guessing a ln 2 shift instead (that would change the constant term — here the −1 stays).

**Points:** 2 — identifying x → 2x and the correct factor.

**Subdomain:** [B02](../B02-functions-and-graphs/).

## Question 5 (official paper) — 4 points

**Asked:** the exact x-coordinate of the intersection of f and g.

**Solution.** 2 ln x + 3/(2x) = 2 ln(2x) + 3/(4x) ⇔ 3/(4x) = 2 ln(2x) − 2 ln x ⇔ 3/(4x) = 2 ln(2x/x) = 2 ln 2 ⇔ x = 3/(8 ln 2).

**Answer:** x = 3/(8 ln 2).

**Common mistakes.** Combining the logs the wrong way (2 ln(2x) − 2 ln x = 2 ln 2, not 2 ln(x/2x)); dropping the 4x/2x subtraction; decimal intermediate steps (the question wants exact).

**Points:** 4 — log cancellation, isolated x.

**Subdomain:** [B04](../B04-exponential-and-logarithmic-functions/).

## Question 6 (official paper) — 5 points

**Asked:** the exact coordinates of the perforation of f_p(x) = (|x − 2| + p)/(x − 1) for its special parameter value.

**Solution.** A perforation requires numerator = 0 at the denominator's zero x = 1: |1 − 2| + p = 1 + p = 0 ⇔ p = −1. For x < 2 (near x = 1), |x − 2| = 2 − x, so f_{-1}(x) = (2 − x − 1)/(x − 1) = (1 − x)/(x − 1) = −1 for all x ≠ 1: the limit exists and equals −1 while f_{-1}(1) is undefined. Perforation: (1, −1).

**Answer:** p = −1, perforation (1, −1).

**Common mistakes.** Treating the numerator as plain x − 3 (the absolute value changes the branch!); for x ≥ 2 the other branch blows up properly — the hole only concerns the neighbourhood of 1, where the correct branch is |x − 2| = 2 − x; reporting the slope there (the branch is constant, that is the point).

**Points:** 5 — numerator-zero condition, |x − 2| branch on x < 2, exact limit.

**Subdomain:** [B08](../B08-function-investigation/) and [B02](../B02-functions-and-graphs/).

## Question 7 (official paper) — 3 points

**Asked:** the exact area of the region enclosed by f₀(x) = |1 − 1/(x − 1)| for x > 1, the x-axis and x = 5.

**Solution.** From the figure the region starts at the graph's zero (x = 2) and runs to x = 5, with f₀ ≥ 0 there (for x ≥ 2, x − 1 ≥ 1 so 1/(x−1) ≤ 1): area = ∫₂⁵ (1 − 1/(x − 1)) dx = [x − ln(x − 1)]₂⁵ = (5 − ln 4) − (2 − ln 1) = 3 − ln 4.

**Answer:** 3 − ln 4.

**Common mistakes.** Integrating the absolute value with two branches when the region is single-sign here; limits 0..5 instead of 2..5; leaving the answer as −ln(1/4) (which equals ln 4 up to sign — present 3 − ln 4).

**Points:** 3 — sign check, antiderivative of 1/(x−1), bounds.

**Subdomain:** [B09](../B09-integration/).

## Question 8 (official paper) — 2 points

**Asked:** the (one-decimal) speed at which the ball hits the ground for the first time.

**Solution.** Impact velocity = |h₀′(0.45)| with h₀(t) = −4.9t² + 1: h₀′(t) = −9.8t, at t = 0.45: −4.41, so a speed of 4.4 m/s (downward; report positive speed).

**Answer:** 4.4 m/s.

**Common mistakes.** Answering −4.4 as "speed" (speed is a magnitude); evaluating h₀ itself (that gives height, not velocity).

**Points:** 2 — derivative at the stuit time, rounded.

**Subdomain:** [A06-style differentiation in B context] — in our folders: [B07](../B07-differentiation/).

## Question 9 (official paper) — 7 points

**Asked:** construct the formula of h₃ (rounded to two decimals), given the bounce model (each peak at 64% of the previous, T_n = 0.9·0.8ⁿ).

**Solution.** Chain the times: impact 1 at 0.45; T₁ = 0.72 (between stuit 1 and 2); T₂ = 0.9·0.64 = 0.576, so stuit 3 at t_K = 0.45 + 0.72 + 0.576 = 1.746; T₃ = 0.9·0.512 = 0.4608, so stuit 4 at t_L = 1.746 + 0.4608 = 2.2068 (rounded: 2.21). h₃ is a parabola through (1.75, 0) and (2.21, 0): h₃(t) = p(t − 1.75)(t − 2.21). Its peak lies midway at t ≈ 1.98, with height 1·0.64³ ≈ 0.26: p·(0.23)·(−0.23) = 0.26 → p ≈ −4.94. So h₃(t) = −4.94(t − 1.75)(t − 2.21) on [1.75, 2.21].

**Answer:** h₃(t) = −4.94(t − 1.75)(t − 2.21) for 1.75 ≤ t ≤ 2.21.

**Common mistakes.** Using p = −4.9 mechanically (the official key caps at 5 points then — the peak is a *new* p); accumulating rounding early (keep T₂ and T₃ exact fractions 0.576 and 0.4608 until the end); peak height as 0.64³ of 1 meter (correct ✓) but applied to the *time*.

**Points:** 7 — bounce-history times, parabola form, peak solving, correct rounding.

**Subdomain:** [B03](../B03-power-and-root-functions/) and [B01](../B01-algebraic-skills/).

## Question 10 (official paper) — 3 points

**Asked:** the time at which the path speed of P is minimal (2 decimals).

**Solution.** Minimise v²(t) = (4t − 3t²)² + (4 − 4t)² = 16t² − 24t³ + 9t⁴ + 16 − 32t + 16t² = 9t⁴ − 24t³ + 32t² − 32t + 16. Its derivative 36t³ − 72t² + 64t − 32 has a single relevant zero on [0, 2]; in the VWO you solve it numerically with the graphing calculator: t ≈ 1.12. (At the CCVX one would estimate by sign changes between bracketing values — practice it with B08's toolkit; the CvTE answer is 1.12.)

**Answer:** t ≈ 1.12 (s).

**Common mistakes.** Minimising the velocity *vector* instead of its magnitude; stopping at t where only one component vanishes; calculator-free students: present bracketing justifications honestly (the question is numeric, no exact shortcut exists).

**Points:** 3 — speed formula, minimisation strategy, value.

**Subdomain:** [B14](../B14-parametric-curves/).

## Question 11 (official paper) — 4 points

**Asked:** the exact length of PQ when P and its shadow Q (one second behind) sit at equal heights.

**Solution.** Same height: 2t(2 − t) = 2(t − 1)(2 − (t − 1)) ⇔ 4t − 2t² = 2(t − 1)(3 − t) ⇔ 4t − 2t² = 8t − 2t² − 6 ⇔ 4t = 6 ⇔ t = 1.5. The endpoints share the height, so PQ is horizontal and its length is |x(1.5) − x(0.5)| = |9/8 − 3/8| = 6/8 = 3/4.

**Answer:** 3/4.

**Common mistakes.** Computing the distance with Pythagoras when the points already share a height; x at t and at t − 1 swapped (x(1.5) − x(0.5) — check which is which, length unsigned); timeline issue: Q = P(t − 1), so t ≥ 1 — note t = 1.5 qualifies.

**Points:** 4 — height equality, t, horizontal length.

**Subdomain:** [B14](../B14-parametric-curves/).

## Question 12 (official paper) — 6 points

**Asked:** the exact a for which the line through the path's max-x point A and max-y point B has slope −1.

**Solution.** x′(t) = 4t − 3t² = 0 ⇔ t = 4/3 (t = 0 excluded): A = ((4/3)²·(2/3), (8a/9)) = (32/27, 8a/9). y′(t) = 2a − 2at = 0 ⇔ t = 1: B = (1, a). Slope AB = (a − 8a/9)/(1 − 32/27) = (a/9)/(−5/27) = −(3a)/5 = −1 ⇔ a = 5/3.

**Answer:** a = 5/3.

**Common mistakes.** x-maximising from y′ = 0 and y from x′ = 0 (they're per-coordinate: A maximises x ONLY); arithmetic with 32/27 (the a-term evaluates at t = 4/3: a·(4/3)·(2/3) = 8a/9 ✓); losing the negative sign of the slope.

**Points:** 6 — both extrema, coordinates, slope equation, exact a.

**Subdomain:** [B14](../B14-parametric-curves/) and [B08](../B08-function-investigation/).


## Question 13 (official paper) — 3 points

**Asked:** show algebraically that the three intersections of y = 1 with the trigonometric graph are evenly spaced: AB = BC.

**Solution.** f(x) = 1 ⇔ 1 + 2 sin x = 1 + cos x ⇔ 2 sin x = cos x ⇔ tan x = ½. All solutions of tan x = ½: x = tan⁻¹(½) + k·π — one in each period of length π. On [0, 3π) there are exactly three, spaced exactly π apart: A, B, C with AB = BC = π. ∎

**Common mistakes.** Trying to solve sin = cos-ish equations with inverse sines numerically first (lose the clean period argument); listing the x-values and *verifying* equal gaps (the period of tan is THE proof — spacing is π exactly).

**Points:** 3 — tan reduction, the π-period statement, conclusion.

**Subdomain:** [B06](../B06-trigonometric-functions/).

## Question 14 (official paper) — 6 points

**Asked:** prove that the x-coordinate of the top T satisfies 5cos²x + 8cos x + 3 = 0.

**Solution.** Quotient rule on f = (1 + 2 sin x)/(1 + cos x): f′ = ((1 + cos x)·2 cos x + (1 + 2 sin x)·sin x)/(1 + cos x)² = (2 cos x + 2 cos²x + sin x + 2 sin²x)/(1 + cos x)² = (2 cos x + 2 + sin x)/(1 + cos x)² (Pythagorean identity). f′ = 0 ⇔ 2 cos x + 2 = −sin x. Square (both sides ≤ 0 check needed later — see Q15): 4 cos²x + 8 cos x + 4 = 1 − cos²x ⇔ 5cos²x + 8cos x + 3 = 0. ∎

**Common mistakes.** Quotient numerator written in the wrong order (it starts with the derivative of the FIRST function: (1+cos x)·2cos x); the squaring step used to "prove" without mentioning the sign hazard (it creates extraneous roots — handled in Q15); dropping the (1+cos x)² denominator (it never vanishes in this domain's interior anyway: 1 + cos x = 0 only at x = π, the domain edge).

**Points:** 6 — quotient derivative, identity use, exact squaring argument.

**Subdomain:** [B07](../B07-differentiation/) and [B05](../B05-trigonometry/).

## Question 15 (official paper) — 5 points

**Asked:** algebraically the y-coordinate of T.

**Solution.** Solve 5c² + 8c + 3 = 0 in c = cos x: c = (−8 ± √(64 − 60))/10 = (−8 ± 2)/10 → c = −0.6 or c = −1. c = −1 kills the denominator 1 + cos x (and matches no top): keep cos x = −0.6. Then sin x = ±0.8. Which sign? T lies BELOW the x-axis, so sin x = −0.8: y = (1 + 2·(−0.8))/(1 − 0.6) = (1 − 1.6)/0.4 = −0.6/0.4 = −1.5. (The +0.8 choice gives y = +6.5 — the extraneous top from the squaring in Q14.)

**Answer:** y_T = −1.5.

**Common mistakes.** Keeping both sign branches without the below-axis check; sin factor (+0.8) as the answer (that is exactly the squaring trap); evaluating the original f at cos-only without recomputing sin first.

**Points:** 5 — quadratic in cos x, root selection, exact y.

**Subdomain:** [B08](../B08-function-investigation/) and [B05](../B05-trigonometry/).

## Question 16 (official paper) — 6 points

**Asked:** prove the given closed form for the volume L_p of the revolved region (bounded by x = p, the x-axis and f(x) = e^(−x) − e^(−2x)).

**Solution.** L_p = π∫₀^p f(x)² dx = π∫₀^p (e^(−2x) − 2e^(−3x) + e^(−4x)) dx (expand the square: e^(−x)·e^(−x) = e^(−2x), cross term −2e^(−3x)). Antiderivatives: −½e^(−2x), +(2/3)e^(−3x), −¼e^(−4x). Evaluate: at p: −½e^(−2p) + (2/3)e^(−3p) − ¼e^(−4p); at 0: −½ + 2/3 − ¼ = (−6 + 8 − 3)/12 = −1/12. So L_p = π[(−½e^(−2p) + (2/3)e^(−3p) − ¼e^(−4p)) + 1/12] = (π/12)·(1 − 6e^(−2p) + 8e^(−3p) − 3e^(−4p)). ∎

**Common mistakes.** Cross-term −2e^(−3x) missed (the square of a difference has three terms!); the 1/12 lower-limit constant dropped; volume without the π.

**Points:** 6 — squared integrand, three antiderivatives, exact evaluation, the closed form.

**Subdomain:** [B09](../B09-integration/).

## Question 17 (official paper) — 4 points

**Asked:** the p for which L_p is half the limit value L (2 decimals).

**Solution.** p → ∞ kills all exponent terms: L = π/12. Half of it: L_p = π/24 ⇔ 1 − 6e^(−2p) + 8e^(−3p) − 3e^(−4p) = ½. Solve the equation numerically with the graphing calculator (VWO-round): p ≈ 0.95. Check: at p = 0.95 the terms give ≈ 1 − 0.8974 + 0.4628 − 0.0671 = 0.4983 ≈ 0.5 ✓ (the score allows a small band around 0.95).

**Answer:** p ≈ 0.95.

**Common mistakes.** Taking L as 1/12 without the π (continue with the π-factor consistently — the equation cancels it cleanly); hunting for an *exact* log solution (there is none for this mixed-exponential equation — a numeric solve is the assignment); sign slips in the limit value's constant.

**Points:** 4 — limit L, halving equation, calculator-solved p with 2 decimals.

**Subdomain:** [B08](../B08-function-investigation/) and [B09](../B09-integration/).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math B folder](../README.md).*
