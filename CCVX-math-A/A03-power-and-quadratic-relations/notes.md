# A3 — Power and quadratic relations: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. The power relation y = a·xⁿ

- In a table with equal x-steps: when x is multiplied by a factor k, y is multiplied by kⁿ. That is the recognition test — linear would *add* the same amount, exponential would multiply by the same factor per equal step.
- Setting up from data: use two points to find n from the y-ratio: if doubling x triples... if y goes ×8 when x goes ×2, then 2ⁿ = 8 so n = 3; then a follows from one point.
- Classic contexts: braking distance ∝ speed²; heat loss of bodies ∝ (size factor); area ∝ length²; volume ∝ length³.

## 2. Graphs of power functions

- Even n (with a > 0): all graphs pass through (0,0), (−1, a)... through (1, a) and (−1, a); a vertex (minimum) at (0,0), line symmetry in the y-axis. a < 0 mirrors it: a maximum.
- Odd n: through (1, a) and (−1, −a), point symmetry about (0,0); always increasing (a > 0) or decreasing (a < 0), with a horizontal tangent at 0 when n > 1.
- The higher n, the flatter near 0 and the steeper for |x| > 1.

## 3. Transformations of y = xⁿ

- y = a(x − p)ⁿ + q: from y = xⁿ by (in a handy order) scaling by a, shifting p right and q up. The "characteristic point" (vertex/symmetry point) moves from (0,0) to (p, q). Example: y = 3(x − 4)² + 5 is a dalparabool with vertex (4, 5) — read directly.
- Reading in reverse: a parabola with vertex (−2, 1) has formula y = a(x + 2)² + 1; find a from one extra point.

## 4. The quadratic function f(x) = ax² + bx + c

- Parabola opening up (*dalparabool*) for a > 0: minimum; down (*bergparabool*) for a < 0: maximum.
- Axis of symmetry: x = −b/(2a); the vertex lies on it.
- Intersections with the x-axis from the quadratic formula (on the formula sheet): x = (−b ± √(b² − 4ac))/(2a); D = b² − 4ac counts them: 2, 1 (touching) or 0.
- Vertex ↔ standard: f(x) = a(x − p)² + q ↔ expand to bx + c form; completing the square works both ways but is faster in the a-form.

## 5. Equations

- Quadratic equations: factor when you see the pair of numbers with product c and sum −b... product a·c/pattern; otherwise the abc-formula. Reduce to = 0 first.
- x² = k: x = ±√k (carries both solutions!).
- Intersections: parabola–line: set equal, quadratic follows. Parabola–parabola likewise (sometimes the x² terms cancel → linear!).

## 6. Quadratic inequalities

- ax² + bx + c > 0 (or <): find the zeros exactly, sketch the parabola, read the answer. Distinguish strict vs non-strict boundaries (open vs closed in the answer).

## 7. Contexts

- Revenue and profit: R = p·q, W = R − K, with brackets on substitution; maximal revenue at the vertex of the resulting parabola.
- Geometry: area-max problems ("largest rectangle against a wall with 40 m fence"): area A(x) becomes quadratic; maximal at the vertex, not at a boundary... check both anyway in context questions.
- Motion with constant acceleration: position s(t) = s₀ + v₀t + ½at² is quadratic in t.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — reading the vertex form

Give the vertex and the behaviour of (a) y = 2(x − 3)² + 1; (b) y = −(x + 2)² + 4.

**Solution.** (a) dalparabool, vertex (3, 1), minimum value 1. (b) bergparabool, vertex (−2, 4), maximum value 4.

### Example 2 — setting up from a vertex and a point

A parabola has vertex (2, −3) and passes through (5, 6). Give its formula.

**Solution.** y = a(x − 2)² − 3. Use (5, 6): 6 = 9a − 3 ⇔ a = 1. Formula: y = (x − 2)² − 3 = x² − 4x + 1.

### Example 3 — intersections

Compute the intersections of y = x² − 3x and y = x − 3.

**Solution.** x² − 3x = x − 3 ⇔ x² − 4x + 3 = 0 ⇔ (x − 1)(x − 3) = 0 ⇔ x = 1 or x = 3. Points: (1, −2) and (3, 0).

### Example 4 — solving an inequality

Solve: x² − 2x − 8 ≤ 0.

**Solution.** Zeros: x = −2 or x = 4. Dalparabool ≤ 0 between its zeros: −2 ≤ x ≤ 4. (Boundaries included because of ≤.)

### Example 5 — maximal revenue connection

Demand: q = 100 − 2p. Express revenue R as a function of the price p and compute the price with maximal revenue.

**Solution.** R(p) = p·(100 − 2p) = −2p² + 100p: bergparabool, vertex at p = −100/(2·(−2)) = 25. Maximal revenue at price 25 (R = 1250).
