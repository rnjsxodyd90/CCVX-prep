# A7 — Applications of the derivative: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. The derivative as slope

- f′(a) is the slope of the tangent (*raaklijn*) at (a, f(a)): f′(a) = richtingscoëfficiënt.
- Interpretation in context: the derivative is an *instantaneous rate of change* — units carry meaning: N′(t) in individuals/week, C′(q) in euros per piece. Compare with the average rate Δy/Δx on an interval.

## 2. Increasing and decreasing

- f′(x) > 0 on an interval → the graph rises; f′(x) < 0 → it falls.
- Sign chart of f′: solve f′(x) = 0, mark the zeros and any undefined points, and determine the sign in each interval with test values.
- Changing behaviour described precisely: "increasing for x < 2, decreasing for x > 2", optionally with the rate at marked points.

## 3. Extrema

- Candidate extrema (*extremen*): solve f′(x) = 0 **algebraically** (the syllabus stresses this: no graphing calculator hunting).
- Nature of each candidate: use a sketch of the graph — the syllabus' standard justification. (A sign chart of f′ around the point works the same way.)
- The points of the graph are called the vertices (*toppen*) of the graph.
- If the domain is a closed interval, ALSO evaluate the boundary points: the global extreme can sit at the edge.

## 4. Optimisation in context

Protocol for "compute the maximal/minimal …":

1. Choose the variable and write down the quantity as a function of it (possibly using a constraint to eliminate a second variable — [A03](../A03-power-and-quadratic-relations/) does this with fence problems).
2. Differentiate; solve f′ = 0 algebraically.
3. Check candidates (sketch or sign chart) AND boundaries.
4. Interpret back in the context with units and a clear sentence.

Typical targets: maximal revenue/profit (bergparabool from price×demand), minimal average cost, optimal dimensions for area/volume, optimal price.

## 5. Minimal and maximal growth rate

- The derivative is itself a function — the growth speed. Its extremes solve (f′)′ = f″ = 0 in simple cases, i.e. find the extreme of the *derivative function*.
- Example: for f(x) = x³ − 6x², f′ = 3x² − 12x has its minimum at x = 2 (vertex of the parabola f′): the graph falls fastest at x = 2 — the bulge point... the inflection point of f. For wiskunde A this "differentiate the derivative" view is enough; full convexity theory is wiskunde B territory ([B08](../../CCVX-math-B/B08-function-investigation/)).

## 6. Standard models combined with the derivative

- Quadratics/cubics: the vertex as extreme ([A03](../A03-power-and-quadratic-relations/)).
- Power and root models: extremes at f′ = 0 (e.g. f(x) = x√(12 − x) type scale).
- Exponential growth: N′ = N·ln(g); the relative growth rate N′/N is the constant ln(g).
- Saturation: N = a(1 − gᵗ) has N′ = −a·gᵗ·ln(g) > 0 for g < 1: everywhere increasing, flattening out towards the saturation level a.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — extrema of a cubic

Compute the extrema of f(x) = x³ − 3x² − 9x + 2.

**Solution.** f′(x) = 3x² − 6x − 9 = 3(x − 3)(x + 1): zeros at x = −1 and x = 3. Sign of f′: positive for x < −1, negative for −1 < x < 3, positive again for x > 3. So: maximum at x = −1 with f(−1) = −1 − 3 + 9 + 2 = 7, vertex (−1, 7); minimum at x = 3 with f(3) = 27 − 27 − 27 + 2 = −25, vertex (3, −25).

### Example 2 — optimisation with boundaries

A lemonade stall's profit model is W(q) = −q³ + 9q² − 15q (in tens of euros) for the daily number of litres q sold, 0 ≤ q ≤ 5. Compute the maximal profit.

**Solution.** W′(q) = −3q² + 18q − 15 = −3(q − 1)(q − 5): zeros at q = 1 and q = 5. Sign of W′: negative on (0, 1), positive on (1, 5): q = 1 is a minimum with W(1) = −1 + 9 − 15 = −7. The only remaining candidate for the maximum on [0, 5] is the boundary: W(0) = 0 and W(5) = −125 + 225 − 75 = 25. The maximal profit is 25 tens of euros = €250 per day, at q = 5 litres. (Lesson: on a bounded domain, always compare the boundary values too.)

### Example 3 — maximal growth rate

For f(x) = x³ − 6x², find where the graph falls the fastest.

**Solution.** The growth speed is f′(x) = 3x² − 12x = 3x(x − 4): a parabola with minimum at x = 2 (vertex). f′(2) = 12 − 24 = −12: the graph falls fastest at x = 2 with slope −12. (f″ = 6x − 12 = 0 gives the same place.)

### Example 4 — exponential rate in context

A fund follows K(t) = 40 000·1.03ᵗ (euros, t in years). Compute the instantaneous increase at t = 10 (to the euro).

**Solution.** K′(t) = 40 000·1.03ᵗ·ln(1.03). At t = 10: 1.03¹⁰ ≈ 1.34392, so K′(10) ≈ 40 000 × 1.34392 × 0.029559 ≈ 1 589: an instantaneous increase of about €1 589 per year.

### Example 5 — saturation rate

N(t) = 200(1 − 0.7ᵗ). Show N is increasing everywhere and describe its flattening.

**Solution.** N′(t) = −200·0.7ᵗ·ln(0.7). Since ln(0.7) < 0 and the rest is positive, N′(t) = 200·0.7ᵗ·|ln 0.7| > 0: increasing everywhere. Also N′(t) → 0 as t → ∞, so the growth flattens towards the saturation level 200.
