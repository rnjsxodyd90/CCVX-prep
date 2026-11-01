# A2 — Linear relations: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Forms of a line

- The most-used form is y = ax + b: slope (*richtingscoëfficiënt*, "rico") a and y-intercept b (the point (0, b)).
- The general form mx + ny = c covers every line: n = 0 gives the vertical line x = c/m, m = 0 the horizontal line y = c/n. Vertical lines have NO slope — you cannot write them as y = ax + b.
- Converting: 3x + 4y = 12 ⇔ y = −¾x + 3. The line then clearly crosses (0, 3) and (4, 0).

## 2. Slope through two points

- a = Δy/Δx = (y_B − y_A)/(x_B − x_A). The order of the points does not matter as long as top and bottom match.
- Reading slope in context: "per extra unit of x, y changes by a". Negative slope = falling. Slope 0 = horizontal.

## 3. Setting up a line

Through a point P(p, q) with slope a: write y = ax + b and substitute: b = q − a·p.

Through two points: slope first (as above), then one of the points for b. Check the line with BOTH points before boxing it.

## 4. Intersections of lines

- Set equal or solve the system: y = 2x + 1 meets y = −x + 7 where 2x + 1 = −x + 7 ⇔ 3x = 6 ⇔ x = 2, point (2, 5). Check in BOTH equations.
- Parallel lines (same slope) have no intersection (or coincide); that is the algebraic sign of a modelling dead end when a problem asks for an intersection that "should" exist.

## 5. Interpolation and extrapolation

- Linear interpolation between (x₁, y₁) and (x₂, y₂): the value at x between them is y₁ + (x − x₁)·(y₂ − y₁)/(x₂ − x₁). Extrapolation is the same formula outside the range — but flag the risk: the model may stop being valid.

## 6. Direct and inverse proportionality

- Directly proportional (*recht evenredig*): y = ax — the graph goes through the origin; doubling x doubles y. Recognition test: y/x is constant.
- Inversely proportional (*omgekeerd evenredig*): y = a/x — doubling x halves y; the product x·y = a is constant. Examples: speed and travel time over a fixed distance; workers and duration of a fixed job.

## 7. Linear models in context

- Cost models: C = fixed + variable × quantity, e.g. taxi €3.50 start + €2.20 per km. The slope is the marginal cost; the intercept is what you pay even at 0 km.
- Break-even: two tariffs T₁ = 20 + 0.10x and T₂ = 45 are equal at 20 + 0.10x = 45 ⇔ x = 250. Reading direction: T₂ becomes cheaper after 250 units.
- Validity windows: a linear demand formula stops making sense where quantity or price goes negative — state the meaningful domain when asked.
- Combining formulas: revenue from price-demand: R = p·q with p = 120 − 2q (brackets!), giving R = 120q − 2q² (quadratic — see [A03](../A03-power-and-quadratic-relations/)).

## 8. Equations and inequalities with lines

- Equation solving is basic algebra ([A01](../A01-numbers-and-algebra/)); the context here is graphical reading: f(x) > g(x) means "where is the graph of f above that of g" — whose boundary is the intersection, computed algebraically.
- Example: 2x + 1 > −x + 7 ⇔ 3x > 6 ⇔ x > 2. No sign flip here; flip when dividing by a negative: −3x > 6 ⇔ x < −2.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — line through two points

Give the equation of the line through A(2, 7) and B(5, 1).

**Solution.** Slope a = (1 − 7)/(5 − 2) = −6/3 = −2. Through A: 7 = −2·2 + b ⇔ b = 11. Line: y = −2x + 11. Check B: −10 + 11 = 1 ✓.

### Example 2 — general form through a point, given direction

Give the line through P(3, −1) parallel to 2x − 5y = 10.

**Solution.** Parallel means same slope. 2x − 5y = 10 ⇔ y = ⅖x − 2, slope ⅖. Through P: y = ⅖x + b with −1 = 6/5 + b ⇔ b = −11/5. General form: y = ⅖x − 11/5 ⇔ 2x − 5y = 11.

### Example 3 — break-even

Print shop A charges €150 setup plus €0.80 per poster; shop B charges €400 plus €0.30 per poster. From how many posters is B cheaper?

**Solution.** A: 150 + 0.80x; B: 400 + 0.30x. Intersection: 150 + 0.80x = 400 + 0.30x ⇔ 0.50x = 250 ⇔ x = 500. For x > 500, B is cheaper (its slope is lower). At 500 posters both cost €550.

### Example 4 — inverse proportionality

Driving a fixed route, speed v (km/h) and time t (h) satisfy v·t = 120. Give t as a function of v and the time at 60 km/h and at 100 km/h.

**Solution.** t = 120/v. At v = 60: t = 2 h. At v = 100: t = 1.2 h = 1 h 12 min. (This is the form y = a/x with a = 120.)

### Example 5 — interpolation

The outside temperature was 2 °C at 8:00 and 11 °C at 14:00. Estimate (linearly) the temperature at 11:00.

**Solution.** Per hour: (11 − 2)/6 = 1.5 °C. At 11:00 (3 hours after 8:00): 2 + 3 × 1.5 = 6.5 °C.
