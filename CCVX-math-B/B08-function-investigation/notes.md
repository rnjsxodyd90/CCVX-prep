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
