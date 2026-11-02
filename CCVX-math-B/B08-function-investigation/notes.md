# B8 — Function investigation: limits, asymptotes, extrema: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Limits

- lim (x→a) f(x) = L means: f(x) gets arbitrarily close to L as x approaches a. For continuous standard functions, substitute: lim (x→2) (2 − x)/(4 − x²) — first simplify: (2−x)/((2−x)(2+x)) = 1/(2 + x) → 1/4.
- Limits at infinity: the highest powers dominate. For a rational function, divide numerator and denominator by the highest power of x: lim (x→∞) (3x² + x)/(5x² − 2) = 3/5. With different degrees: numerator higher → ±∞ (possible oblique asymptote); denominator higher → 0.

## 2. Asymptotes

- Vertical (*verticale asymptoot*): x = a when lim (x↑a) f(x) = ±∞ or lim (x↓a) f(x) = ±∞. For q(x) = f(x)/g(x): where g(x) = 0 **and** f(x) ≠ 0. Example: q(x) = (x + 1)/(x² − x − 2) = (x+1)/((x−2)(x+1)): at x = 2 a vertical asymptote; at x = −1 the numerator is 0 too — no asymptote but a perforation (see below) with value limit 1/(x−2)|_{x=−1} = −1/3.
- Horizontal (*horizontale asymptoot*): y = c when lim (x→∞) f(x) = c or lim (x→−∞) f(x) = c. The graph may touch or cross its horizontal asymptote for finite x.
- Oblique (*scheve asymptoot*): y = ax + b when f(x) − (ax + b) → 0 as x → ±∞. Find it by polynomial division: f(x) = (x² + x)/(x − 1) = x + 2 + 3/(x − 1), so the oblique asymptote is y = x + 2.
- Perforation (*perforatie*): lim (x↑a) f = lim (x↓a) f but f(a) undefined — a single missing point; typically f(x) = (x² − 1)/(x − 1) = x + 1 with a hole at (1, 2).
- Jump (*sprong*): one-sided limits differ, e.g. at x = 0 for y = |x|/x.

## 3. Investigating a function with the derivative

Standard programme for "onderzoek de functie":

1. Domain, then f′(x).
2. Solve f′(x) = 0 for candidate extrema; also note any points where f′ does not exist (e.g. √x at x = 0 has a vertical tangent).
3. Determine their nature with a sketch (CCVX's preferred justification) or a sign chart of f′.
4. State increasing/decreasing intervals: increasing (*stijgend*) where f′ > 0, decreasing (*dalend*) where f′ < 0.
5. Add asymptotes and end behaviour; complete the picture.

- Extrema (*extremen*): minima and maxima together; the graph points are called vertices (*toppen*).
- The condition f′(a) = 0 alone does not guarantee an extreme: f(x) = x³ has f′(0) = 0 and a horizontal tangent without an extreme (a saddle).

## 4. The second derivative and inflection

- Inflection point (*buigpunt*): where the derivative f′ has an extreme — the bending changes. Necessary: f″(x) = 0; confirm via the context or a sign change of f″.
- Sign language:
  - f′ > 0, f″ > 0: increasingly increasing (*toenemend stijgend*);
  - f′ > 0, f″ < 0: decreasingly increasing (*afnemend stijgend*);
  - f′ < 0, f″ > 0: decreasingly decreasing (*afnemend dalend*);
  - f′ < 0, f″ < 0: increasingly decreasing (*toenemend dalend*).
- Finding candidates: solve f″(x) = 0 exactly.

## 5. Special situations between two graphs

- Touching (*raken*): f(x) = g(x) and f′(x) = g′(x) at the point of contact.
- Perpendicular intersection: f(x) = g(x) and f′(x)·g′(x) = −1.
- Angle between two curves in P: the angle between the tangents in P, computed with tan(direction angle) = slope — see [B10](../B10-lines-and-distances/).
- Number of intersections with a horizontal line y = c: count from the sketch, paying special attention to the vertices. Typical conclusion: "for 0 < c < 4 the line y = c meets the graph three times."

## 6. Limits in proofs of asymptotic behaviour

The syllabus asks you to *demonstrate* asymptotes with limit calculations (programme point 8). Write the full notation with intermediate steps. For f(x) = (2x + 3)/(x − 1):

lim (x→∞) (2x + 3)/(x − 1) = lim (x→∞) (2 + 3/x)/(1 − 1/x) = (2 + 0)/(1 − 0) = 2,

so the graph has the horizontal asymptote y = 2. Do the same for x → −∞ — both limits are needed to conclude "the" horizontal asymptote.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — complete analysis of a cubic

Investigate f(x) = x³ − 3x: zeros, extrema, inflection point, and the kind of monotonicity on each interval.

**Solution.** Zeros: x(x² − 3) = 0 ⇔ x = 0, ±√3. f′ = 3x² − 3 = 3(x² − 1): zero at x = ±1. Sign: f′ > 0 outside [−1, 1], f′ < 0 inside. So increasing on x < −1, maximum at (−1, 2), decreasing on −1 < x < 1, minimum at (1, −2), increasing for x > 1. f″ = 6x: zero at x = 0 with a sign change, so (0, 0) is an inflection point. Monotonicity types: for x < −1, f″ < 0 so decreasingly increasing; for −1 < x < 0, f″ < 0 so decreasingly decreasing; for 0 < x < 1, f″ > 0 so increasingly decreasing; for x > 1, f″ > 0 so increasingly increasing. (The graph is point-symmetric: f(−x) = −f(x) ✓.)

## Example 2 — asymptotes of a rational function

Find all asymptotes of q(x) = (x² − 4)/(x² − x − 2) and demonstrate them with limits.

**Solution.** Factor: q(x) = (x − 2)(x + 2)/((x − 2)(x + 1)).
- Vertical: x = −1 makes the denominator 0 while the numerator is (−1−2)(−1+2) = −3 ≠ 0. Indeed lim (x→−1) q(x) = ±∞ (the sign differs by side): vertical asymptote x = −1.
- At x = 2 both factors vanish: lim (x→2) (x + 2)/(x + 1) = 4/3. Perforation at (2, 4/3), no asymptote.
- Horizontal: lim (x→±∞) q(x) = lim (1 − 4/x²)/(1 − 1/x − 2/x²) = 1. Asymptote y = 1.

## Example 3 — oblique asymptote

Show that f(x) = (2x² + x)/(x − 2) has an oblique asymptote and give it.

**Solution.** Polynomial division: 2x² + x = (x − 2)(2x + 5) + 10, so f(x) = 2x + 5 + 10/(x − 2). Then lim (x→±∞) (f(x) − (2x + 5)) = lim 10/(x − 2) = 0: the oblique asymptote is y = 2x + 5. (Vertical asymptote x = 2 as well.)

## Example 4 — touching curves with a parameter

For which value of p does the graph of f(x) = x² + px touch the line y = 8x − 16?

**Solution.** Touching: (i) x² + px = 8x − 16 and (ii) 2x + p = 8. From (ii): p = 8 − 2x. Substitute in (i): x² + 8x − 2x² = 8x − 16 ⇔ −x² = −16 ⇔ x = ±4. Then (i) check: x = 4 → p = 0 gives equality x² = 16 = 8·4 − 16 = 16 ✓ touching at (4, 16); x = −4 → p = 16: x² + 16x = 8x − 16 ⇔ x² + 8x + 16 = (x + 4)² = 0 ✓; the touching point is (−4, f(−4)) = (−4, −48). So p = 0 (touching at (4, 16)) or p = 16 (touching at (−4, −48)).

## Example 5 — inflection of a bell-like curve

Does f(x) = x⁴ − 4x³ + 6x² − 4x have an inflection point?

**Solution (preface).** Note first that f(x) = (x − 1)⁴ − 1 (expand to check), which already suggests everything interesting happens at x = 1. Now the analysis.

**Solution.** f′ = 4x³ − 12x² + 12x − 4; f″ = 12x² − 24x + 12 = 12(x − 1)². f″ = 0 only at x = 1, but f″ does not change sign there (f″ ≥ 0 everywhere). So **no** inflection point: (1, −1) is a point where the slope (= f′) has a minimum of 0, i.e. a horizontal tangent that keeps increasing afterwards — f′(1) = 0 and the graph is increasing on both sides. Moral: f″ = 0 is necessary, not sufficient; check the sign change (or the context).
