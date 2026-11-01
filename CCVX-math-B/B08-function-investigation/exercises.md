# B8 — Practice questions with solutions

Eleven original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. A full worked solution follows every question.

## Q1 — computing limits

Compute: (a) lim (x→3) (x² − 9)/(x − 3); (b) lim (x→∞) (5x² + x)/(2x² + 3).

**Solution.** (a) Factor: (x − 3)(x + 3)/(x − 3) = x + 3 → 6. (b) Divide by x²: (5 + 1/x)/(2 + 3/x²) → 5/2.

**Answer:** (a) 6; (b) 5/2

## Q2 — rational function: demonstrate the asymptotes

f(x) = 3x/(x − 2). Give all asymptotes, demonstrated with limit calculations.

**Solution.** Vertical: x = 2 makes the denominator 0, numerator 6 ≠ 0. lim (x↓2) f(x) = +∞ (for x > 2 both factors positive) and lim (x↑2) f(x) = −∞: vertical asymptote x = 2. Horizontal: lim (x→∞) 3x/(x − 2) = lim 3/(1 − 2/x) = 3, and the same as x → −∞: horizontal asymptote y = 3. No oblique asymptote (numerator and denominator of the same degree).

**Answer:** x = 2 and y = 3

## Q3 — perforation

Show that f(x) = (x² + x − 6)/(x − 2) has a perforation, and give its coordinates.

**Solution.** Factor: x² + x − 6 = (x + 3)(x − 2). So f(x) = x + 3 for x ≠ 2. The limit at x = 2 is 5 from both sides, but f(2) is undefined: a perforation at (2, 5).

**Answer:** perforation at (2, 5)

## Q4 — full analysis of a cubic

Analyse f(x) = x³ − 12x + 3: extrema, increasing/decreasing intervals, inflection point.

**Solution.** f′(x) = 3x² − 12 = 3(x − 2)(x + 2): zeros at x = −2 and x = 2. Sign of f′: +, −, + on x<−2, −2<x<2, x>2. So: increasing on (−∞,−2⟩, maximum f(−2) = −8 + 24 + 3 = 19 at (−2, 19); decreasing on ⟨−2, 2⟩, minimum f(2) = 8 − 24 + 3 = −13 at (2, −13); increasing on ⟨2, ∞). f″(x) = 6x = 0 at x = 0 with a sign change (left negative, right positive): inflection point (0, 3) — no extreme of f itself, f′(0) = −12 ≠ 0.

**Answer:** max (−2, 19); min (2, −13); inflection (0, 3); increasing outside [−2, 2], decreasing inside

## Q5 — analysing x·eˣ

Analyse f(x) = x·eˣ: extrema, range, and end behaviour (including limits).

**Solution.** f′(x) = eˣ + x eˣ = eˣ(1 + x) = 0 ⇔ x = −1 (since eˣ > 0). Sign: negative for x < −1, positive for x > −1, so a minimum at x = −1 with f(−1) = −1/e. End behaviour: lim (x→∞) x eˣ = ∞; lim (x→−∞) x eˣ = 0 (the exponential factor beats the linear one), so y = 0 is a horizontal asymptote on the left. No maximum. Range: y ≥ −1/e.

**Answer:** minimum (−1, −1/e); range [−1/e, ∞⟩; left asymptote y = 0, unbounded on the right

## Q6 — oblique asymptote by division

Show that the graph of f(x) = (x² + 3x)/(x − 1) has an oblique asymptote y = x + 4, and give the vertical asymptote.

**Solution.** Division: x² + 3x = (x − 1)(x + 4) + 4, so f(x) = x + 4 + 4/(x − 1). Then lim (x→±∞) (f(x) − (x + 4)) = lim 4/(x − 1) = 0: oblique asymptote y = x + 4. Vertical: x = 1: numerator 4 ≠ 0, so lim (x↓1) f = +∞, lim (x↑1) f = −∞: vertical asymptote x = 1.

**Answer:** oblique y = x + 4; vertical x = 1

## Q7 — inflection point

Compute the extrema and the inflection point of f(x) = x³ + 3x² − 9x, and check the inflection point against the extrema.

**Solution.** f′ = 3x² + 6x − 9 = 3(x + 3)(x − 1): zeros −3 and 1. Maximum (−3, 27), minimum (1, −5). f″ = 6x + 6 = 0 at x = −1, with a sign change: inflection point (−1, 11). Check: (−1, 11) is exactly the midpoint of the two extrema ((−3 + 1)/2 = −1; (27 − 5)/2 = 11) — as expected for the point symmetry of a cubic. ✓

**Answer:** max (−3, 27), min (1, −5), inflection point (−1, 11)

## Q8 — types of increase/decrease

Describe the type of monotonicity of (a) f(x) = x² for x > 0 and (b) g(x) = √x.

**Solution.** (a) f′ = 2x > 0 and f″ = 2 > 0: increasingly increasing (*toenemend stijgend*). (b) g′ = 1/(2√x) > 0, g″ = −1/(4x^(3/2)) < 0: the slope is positive but shrinking — decreasingly increasing (*afnemend stijgend*).

**Answer:** (a) toenemend stijgend; (b) afnemend stijgend

## Q9 — parameter family

f_p(x) = x³ − 3px + 1 with p > 0.

a. Give the extrema in terms of p.

b. For which p is the minimum equal to 0? Give the exact value.

**Solution.** a. f_p′(x) = 3x² − 3p = 0 ⇔ x = ±√p. Maximum at x = −√p: f = −p√p + 3p√p + 1 = 2p√p + 1. Minimum at x = √p: f = 1 − 2p√p. (For p > 0 this is indeed a real extreme; for p ≤ 0 there would be none.) b. 1 − 2p√p = 0 ⇔ p^(3/2) = ½ ⇔ p = (½)^(2/3) = 1/∛4 ≈ 0.63.

**Answer:** a. max (−√p, 2p√p + 1), min (√p, 1 − 2p√p); b. p = 4^(−1/3) = 1/∛4

## Q10 — perpendicular intersection

Show that the graph of f(x) = ½x² and the line l: y = −½x + 3 intersect in two points, and check at which of them they are perpendicular.

**Solution.** Intersections: ½x² = −½x + 3 ⇔ x² + x − 6 = 0 ⇔ (x + 3)(x − 2) = 0 ⇔ x = 2 or x = −3; points (2, 2) and (−3, 9/2). Slopes: f′(x) = x; the line has slope −½. Product at x = 2: 2 × (−½) = −1: perpendicular ✓. At x = −3: (−3)(−½) = 3/2 ≠ −1: not perpendicular.

**Answer:** intersections (2, 2) and (−3, 9/2); perpendicular only at (2, 2)

## Q11 — counting intersections with a horizontal line

f(x) = x³ − 3x². For which values of k does the line y = k meet the graph in (a) exactly three, (b) exactly two, (c) exactly one point?

**Solution.** Vertices: f′ = 3x² − 6x = 3x(x − 2) = 0 ⇔ x = 0 or x = 2; maximum f(0) = 0, minimum f(2) = 8 − 12 = −4. The cubic runs from −∞ to ∞. Reading from the sketch: (a) strictly between the extreme levels: −4 < k < 0 gives three intersections; (b) exactly at an extreme level: k = −4 or k = 0 (the line is tangent at a vertex and cuts once more) gives two; (c) outside: k < −4 or k > 0 gives one.

**Answer:** (a) −4 < k < 0; (b) k = −4 ∨ k = 0; (c) k < −4 ∨ k > 0
