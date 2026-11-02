# B8 — Function investigation: practice

Eleven original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o9 match the numbered learning outcomes in [README.md](README.md).

### mathb-b08-q01 | points 3 | outcome o1 | difficulty easy

#### Question

Compute: (a) lim (x→3) (x² − 9)/(x − 3); (b) lim (x→∞) (5x² + x)/(2x² + 3).

#### Answer

(a) 6; (b) 5/2

#### Solution

(a) Factor: (x − 3)(x + 3)/(x − 3) = x + 3 → 6. (b) Divide numerator and denominator by x²: (5 + 1/x)/(2 + 3/x²) → 5/2.

### mathb-b08-q02 | points 4 | outcome o2 | difficulty medium

#### Question

f(x) = 3x/(x − 2). Give all asymptotes, demonstrated with limit calculations.

#### Answer

Vertical asymptote x = 2; horizontal asymptote y = 3

#### Solution

Vertical: x = 2 makes the denominator 0, numerator 6 ≠ 0. lim (x↓2) f(x) = +∞ (for x > 2 both factors are positive) and lim (x↑2) f(x) = −∞: vertical asymptote x = 2. Horizontal: lim (x→∞) 3x/(x − 2) = lim 3/(1 − 2/x) = 3, and the same limit as x → −∞: horizontal asymptote y = 3. No oblique asymptote (numerator and denominator of the same degree).

### mathb-b08-q03 | points 3 | outcome o2 | difficulty medium

#### Question

Show that f(x) = (x² + x − 6)/(x − 2) has a perforation, and give its coordinates.

#### Answer

Perforation at (2, 5)

#### Solution

Factor: x² + x − 6 = (x + 3)(x − 2). So f(x) = x + 3 for x ≠ 2. The limit at x = 2 equals 5 from both sides, but f(2) is undefined: a perforation at (2, 5).

### mathb-b08-q04 | points 5 | outcome o4 | difficulty medium

#### Question

Analyse f(x) = x³ − 12x + 3: extrema, increasing/decreasing intervals, inflection point.

#### Answer

Max (−2, 19); min (2, −13); inflection (0, 3); increasing outside [−2, 2], decreasing inside

#### Solution

f′(x) = 3x² − 12 = 3(x − 2)(x + 2): zeros at x = −2 and x = 2. Sign of f′: +, −, + on x<−2, −2<x<2, x>2. So: increasing on (−∞,−2⟩, maximum f(−2) = −8 + 24 + 3 = 19 at (−2, 19); decreasing on ⟨−2, 2⟩, minimum f(2) = 8 − 24 + 3 = −13 at (2, −13); increasing on ⟨2, ∞). f″(x) = 6x = 0 at x = 0 with a sign change (left negative, right positive): inflection point (0, 3); it is no extreme of f since f′(0) = −12 ≠ 0.

### mathb-b08-q05 | points 5 | outcome o4 | difficulty hard

#### Question

Analyse f(x) = x·eˣ: extrema, range, and end behaviour (including the relevant limits).

#### Answer

Minimum (−1, −1/e); range [−1/e, ∞⟩; left asymptote y = 0, unbounded on the right

#### Solution

f′(x) = eˣ + x eˣ = eˣ(1 + x) = 0 ⇔ x = −1 (since eˣ > 0). Sign: negative for x < −1, positive for x > −1, so a minimum at x = −1 with f(−1) = −1/e. End behaviour: lim (x→∞) x eˣ = ∞; lim (x→−∞) x eˣ = 0 (the exponential factor beats the linear one), so y = 0 is a horizontal asymptote on the left. No maximum. Range: y ≥ −1/e.

### mathb-b08-q06 | points 4 | outcome o2 | difficulty hard

#### Question

Show that the graph of f(x) = (x² + 3x)/(x − 1) has an oblique asymptote y = x + 4, and give the vertical asymptote.

#### Answer

Oblique asymptote y = x + 4; vertical asymptote x = 1

#### Solution

Division: x² + 3x = (x − 1)(x + 4) + 4, so f(x) = x + 4 + 4/(x − 1). Then lim (x→±∞) (f(x) − (x + 4)) = lim 4/(x − 1) = 0: oblique asymptote y = x + 4. Vertical: at x = 1 the numerator is 4 ≠ 0, so lim (x↓1) f = +∞ and lim (x↑1) f = −∞: vertical asymptote x = 1.

### mathb-b08-q07 | points 4 | outcome o6 | difficulty medium

#### Question

Compute the extrema and the inflection point of f(x) = x³ + 3x² − 9x, and check the inflection point against the extrema.

#### Answer

Max (−3, 27), min (1, −5); inflection point (−1, 11)

#### Solution

f′ = 3x² + 6x − 9 = 3(x + 3)(x − 1): zeros −3 and 1. Maximum (−3, 27), minimum (1, −5). f″ = 6x + 6 = 0 at x = −1, with a sign change: inflection point (−1, 11). Check: (−1, 11) is exactly the midpoint of the two extrema ((−3 + 1)/2 = −1; (27 − 5)/2 = 11) — as expected for the point symmetry of a cubic. ✓

### mathb-b08-q08 | points 3 | outcome o7 | difficulty medium

#### Question

Describe the type of monotonicity of (a) f(x) = x² for x > 0 and (b) g(x) = √x, using the signs of the first and second derivative.

#### Answer

(a) toenemend stijgend (increasingly increasing); (b) afnemend stijgend (decreasingly increasing)

#### Solution

(a) f′ = 2x > 0 and f″ = 2 > 0: increasingly increasing. (b) g′ = 1/(2√x) > 0, g″ = −1/(4x^(3/2)) < 0: the slope is positive but shrinking — decreasingly increasing.

### mathb-b08-q09 | points 5 | outcome o4 | difficulty hard

#### Question

f_p(x) = x³ − 3px + 1 with p > 0.

a. Give the extrema in terms of p.

b. For which p is the minimum equal to 0? Give the exact value.

#### Answer

a. Max (−√p, 2p√p + 1), min (√p, 1 − 2p√p); b. p = 1/∛4

#### Solution

a. f_p′(x) = 3x² − 3p = 0 ⇔ x = ±√p. Maximum at x = −√p: f = −p√p + 3p√p + 1 = 2p√p + 1. Minimum at x = √p: f = 1 − 2p√p. (For p > 0 these are real; for p ≤ 0 there would be none.) b. 1 − 2p√p = 0 ⇔ p^(3/2) = ½ ⇔ p = (½)^(2/3) = 2^(−2/3) = 1/∛4 ≈ 0.63.

### mathb-b08-q10 | points 5 | outcome o5 | difficulty hard

#### Question

Show that the graph of f(x) = ½x² and the line l: y = −½x + 3 intersect in two points, and check at which of them they are perpendicular.

#### Answer

Intersections (2, 2) and (−3, 9/2); perpendicular only at (2, 2)

#### Solution

Intersections: ½x² = −½x + 3 ⇔ x² + x − 6 = 0 ⇔ (x + 3)(x − 2) = 0 ⇔ x = 2 or x = −3; points (2, 2) and (−3, 9/2). Slopes: f′(x) = x; the line has slope −½. Product at x = 2: 2 × (−½) = −1: perpendicular ✓. At x = −3: (−3)(−½) = 3/2 ≠ −1: not perpendicular there.

### mathb-b08-q11 | points 4 | outcome o8 | difficulty medium

#### Question

f(x) = x³ − 3x². For which values of k does the line y = k meet the graph in (a) exactly three, (b) exactly two, (c) exactly one point?

#### Answer

(a) −4 < k < 0; (b) k = −4 ∨ k = 0; (c) k < −4 ∨ k > 0

#### Solution

Vertices: f′ = 3x² − 6x = 3x(x − 2) = 0 ⇔ x = 0 or x = 2; maximum f(0) = 0, minimum f(2) = 8 − 12 = −4. The cubic runs from −∞ to ∞. Reading from the sketch: (a) strictly between the extreme levels, −4 < k < 0, gives three intersections; (b) exactly at an extreme level, k = −4 or k = 0, the line is tangent at a vertex and cuts once more, giving two; (c) outside, k < −4 or k > 0, gives one.
