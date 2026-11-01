# B8 — Worked examples

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
