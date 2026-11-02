# B2 — Functions and graphs: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. From relation to function

- A function (*functie*) assigns **one** output y to every allowed input x. A relation like x² + y² = 25 assigns two y-values to most x-values; it is *not* a function rule, but you can split it into two function rules y = √(25 − x²) and y = −√(25 − x²).
- To test whether y can be written as a function of x: solve the formula for y. If that gives more than one expression (e.g. y² = x + 1), it is not a function rule.
- Rewriting the roles is also useful: from x = 2y − 6 you get y = ½x + 3 as a function of x, or from y = √(x + 3) the inverse relation x = y² − 3 (y ≥ 0).

## 2. Standard functions

The exam's standard functions (*standaardfuncties*), with their key properties:

- **Power functions** xⁿ (rational n): x² and x⁴ are symmetric about the y-axis with a vertex in (0,0); x³ and x⁵ are point-symmetric in (0,0); x^(1/2) = √x exists only for x ≥ 0.
- **Exponential** aˣ (a > 0): always positive; increasing for a > 1, decreasing for 0 < a < 1; the x-axis is a horizontal asymptote.
- **Logarithmic** ᵍlog(x): only for x > 0; the y-axis is a vertical asymptote; increasing for g > 1, decreasing for 0 < g < 1.
- **Trigonometric** sin(x) and cos(x), in radians: bounded between −1 and 1, period 2π. See [B06](../B06-trigonometric-functions/).
- **Absolute value** |x|: a V-shaped graph with its vertex in (0,0); |x| = x for x ≥ 0 and −x for x < 0.

## 3. Domain and range

- Domain (*domein*): all allowed x-values. Look out for: denominators ≠ 0; expressions under even roots ≥ 0; logarithm arguments > 0.
- Range (*bereik*): all possible y-values. Read it from a sketch using vertices and asymptotes.
- Interval notation must be read, not written: ⟨−2, 5] means −2 < x ≤ 5 (round bracket excludes, square bracket includes). On paper you may write −2 < x ≤ 5.

Examples. f(x) = 1 + √x: domain x ≥ 0, range y ≥ 1. f(x) = 3/(x − 2): domain x ≠ 2; the value 0 is never reached, so range y ≠ 0. f(x) = x² − 4: domain **R**, range y ≥ −4.

## 4. Combining functions

- Sum and constant multiple: polynomial 4x⁴ + 3x³ + 2x² + x + 1 is a combination of five power functions.
- Product and quotient: h(x) = x²·eˣ, or q(x) = f(x)/g(x), a rational function; see [B08](../B08-function-investigation/) for asymptotes.
- Composition (*samengestelde functies*): h(x) = f(g(x)) — first g, then f. With f(x) = eˣ and g(x) = x² you get h(x) = e^(x²). The order matters: g(f(x)) = (eˣ)² = e²ˣ is different.

## 5. Inverse functions

- Definition: y = f(x) ⇔ x = f⁻¹(y). Finding an inverse: solve y = f(x) for x. The graphs of f and f⁻¹ are mirror images in the line y = x.
- Standard pairs: x³ ↔ ∛x; x² (for x ≥ 0) ↔ √x; aˣ ↔ ᵃlog(x); eˣ ↔ ln(x).
- Only one-to-one functions have inverses; restrict the domain if needed (that is why √ is defined with x ≥ 0).

## 6. Transformations

| Transformation (*transformatie*) | New rule | Effect on point (a, b) of f |
|---|---|---|
| Horizontal shift by c | g(x) = f(x − c) | (a + c, b) |
| Vertical shift by c | g(x) = f(x) + c | (a, b + c) |
| Scaling factor c relative to the y-axis | g(x) = f(c·x) | (a/c, b) |
| Scaling factor c relative to the x-axis | g(x) = c·f(x) | (a, c·b) |
| Reflection in the y-axis | g(x) = f(−x) | (−a, b) |
| Reflection in the x-axis | g(x) = −f(x) | (a, −b) |

- For g(x) = f(x − c) the graph moves *to the right* for positive c — the opposite of what many expect at first.
- Several transformations in order: for 3 sin(2(x − 1)) start with sin(x), scale x by 2 (graph gets 2× narrower), shift 1 to the right, scale height by 3.
- Symmetry: f(−x) = f(x) means line symmetry in the y-axis (*even function*); f(−x) = −f(x) means point symmetry in the origin (*odd function*). cos is even, sin is odd.

## 7. Drawing and sketching

- A drawing (*tekening*) must let the reader read off domain, range and characteristics: mark axis values, compute several points, draw asymptotes (dashed) and label them.
- A sketch (*schets*) only needs the shape with minima, maxima and asymptotes indicated.
- Common exam verbs: "draw the graph" (full drawing), "sketch" (shape only), "describe the graph of g arising from f by transformations".

## 8. Vertical distance between graphs

- At x = p the vertical distance between the graphs of f and g is |f(p) − g(p)|; the absolute value handles which is on top. The *maximal* vertical distance over an interval is found by differentiating d(x) = f(x) − g(x) (see [B08](../B08-function-investigation/)).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — function or not?

Decide whether y can be written as a function rule of x: (a) x² + y² = 16; (b) x − 2y = 6.

**Solution.** (a) Solving for y gives y = ±√(16 − x²): two values for every x in (−4, 4), so **no** single function rule exists; the relation describes a circle. (b) y = ½x − 3: **yes**, this is a function rule — one y for every x.

## Example 2 — domain and range

Give the domain and range of f(x) = 2 + √(x + 3) and of g(x) = 4/(x − 1)².

**Solution.** f: the root needs x + 3 ≥ 0, so domain x ≥ −3; √ is ≥ 0, so range y ≥ 2. g: the denominator must be nonzero, so domain x ≠ 1; the square is > 0 and can be any positive number, so 4/(x−1)² takes all positive values: range y > 0.

## Example 3 — composite functions

f(x) = eˣ and g(x) = x² − 1. Write rules for h₁(x) = f(g(x)) and h₂(x) = g(f(x)).

**Solution.** h₁(x) = e^(x² − 1). h₂(x) = (eˣ)² − 1 = e²ˣ − 1. Note they are different functions; the order of composition matters.

## Example 4 — finding an inverse

Find the inverse of f(x) = 3 − 2√(x − 1), state its domain, and the relation between the ranges.

**Solution.** y = 3 − 2√(x − 1) ⇔ 2√(x − 1) = 3 − y ⇔ √(x − 1) = (3 − y)/2 ⇔ x = 1 + ((3 − y)/2)². Because √ ≥ 0, f has range y ≤ 3, so f⁻¹ has domain y ≤ 3: f⁻¹(y) = 1 + ((3 − y)/2)² = 1 + (3 − y)²/4, y ≤ 3. The graph of the inverse is the mirror image of f in the line y = x.

## Example 5 — transformations in order

Start with y = sin(x). Describe the graph of g(x) = −2 sin(3x) + 1 as a chain of transformations, and give its range.

**Solution.** sin(x) → scale relative to the y-axis by ⅓ (that's f(3x), period becomes 2π/3) → scale relative to the x-axis by −2 (amplitude 2 and reflection in the x-axis) → shift 1 up. Amplitude 2 about equilibrium 1, so the range is [−1, 3].

## Example 6 — maximal vertical distance

f(x) = x² and g(x) = 4x − 2 on 0 ≤ x ≤ 4. Compute the vertical distance at x = 1 and the maximal vertical distance on this interval.

**Solution.** The distance at x = p is |f(p) − g(p)|. At x = 1: |f(1) − g(1)| = |1 − 2| = 1. For the maximum on the interval, write f − g = x² − 4x + 2 = (x − 2)² − 2: this is negative between the roots 2 ± √2 and positive elsewhere on [0, 4]. Candidates for the maximum of |f − g|: the vertex x = 2 of f − g gives value −2, so distance 2 there; the boundaries give |f(0) − g(0)| = 2 and |f(4) − g(4)| = 2. So the maximal vertical distance on [0, 4] is 2.
