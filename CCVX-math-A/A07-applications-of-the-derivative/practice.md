# A7 — Applications of the derivative: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md).

### matha-a07-q01 | points 3 | outcome o3 | difficulty easy

#### Question

Compute the extreme value of f(x) = x² − 6x + 13 with the derivative, and state whether it is a minimum or a maximum.

#### Answer

Minimum 4 at the vertex (3, 4)

#### Solution

f′(x) = 2x − 6 = 0 ⇔ x = 3. Since it is a *dalparabool* (a > 0), the only extreme is a minimum: f(3) = 9 − 18 + 13 = 4. Vertex (3, 4).

### matha-a07-q02 | points 4 | outcome o3 | difficulty medium

#### Question

Compute the extrema of f(x) = 2x³ − 3x² − 12x + 5 and their nature.

#### Answer

Maximum 12 at (−1, 12); minimum −15 at (2, −15)

#### Solution

f′(x) = 6x² − 6x − 12 = 6(x − 2)(x + 1): zeros at x = −1 and x = 2. Sign of f′: +, −, +, so x = −1 gives a maximum and x = 2 a minimum. f(−1) = −2 − 3 + 12 + 5 = 12; f(2) = 16 − 12 − 24 + 5 = −15.

### matha-a07-q03 | points 3 | outcome o2 | difficulty easy

#### Question

For f(x) = x³ − 12x, give the intervals where the graph is increasing and where it is decreasing.

#### Answer

Increasing for x < −2 and x > 2; decreasing for −2 < x < 2

#### Solution

f′(x) = 3x² − 12 = 3(x² − 4) = 3(x − 2)(x + 2): positive outside [−2, 2], negative inside. So the graph increases for x < −2 and x > 2, and decreases for −2 < x < 2.

### matha-a07-q04 | points 4 | outcome o4 | difficulty medium

#### Question

For a product, demand is q = 80 − 4p (q in thousands, p in euros). Compute the price with maximal total revenue, and that maximal revenue.

#### Answer

p = 10 with revenue €400 000

#### Solution

Revenue: R(p) = p·q = p(80 − 4p) = −4p² + 80p (in thousands of euros, since q is in thousands). R′(p) = −8p + 80 = 0 ⇔ p = 10 (a bergparabool, so this is the maximum). R(10) = −400 + 800 = 400 thousand euros.

### matha-a07-q05 | points 4 | outcome o4 | difficulty hard

#### Question

The average cost per unit is C(q) = q + 100/q for q > 0. Compute the minimal average cost.

#### Answer

20 at q = 10

#### Solution

C′(q) = 1 − 100/q² = 0 ⇔ q² = 100 ⇔ q = 10 (positive since q > 0). Sign of C′: negative for q < 10, positive for q > 10, so a minimum: C(10) = 10 + 10 = 20.

### matha-a07-q06 | points 4 | outcome o4 | difficulty hard

#### Question

Give the global maximum and minimum of f(x) = x³ − 3x + 1 on the interval [−2, 3].

#### Answer

Global maximum 19 (at x = 3); global minimum −1 (at x = 1 and x = −2)

#### Solution

Inside candidates: f′(x) = 3x² − 3 = 0 ⇔ x = ±1; f(1) = −1, f(−1) = 3. Boundaries: f(−2) = −8 + 6 + 1 = −1; f(3) = 27 − 9 + 1 = 19. Comparing all four values: the global maximum is 19 at the boundary x = 3, and the global minimum is −1, attained twice (at the interior x = 1 and at the boundary x = −2).

### matha-a07-q07 | points 4 | outcome o5 | difficulty hard

#### Question

For f(x) = x³ − 9x² + 3x, compute where the graph falls the fastest (the minimum of the growth rate).

#### Answer

At x = 3, with rate −24

#### Solution

The growth rate is f′(x) = 3x² − 18x + 3: a dalparabool with its vertex (minimum) at x = −(−18)/(2·3) = 3. The minimal rate is f′(3) = 27 − 54 + 3 = −24, so the graph falls fastest at x = 3 (slope −24). Check with the second derivative: f″ = 6x − 18 = 0 ⇔ x = 3 ✓.

### matha-a07-q08 | points 4 | outcome o1 | difficulty medium

#### Question

a. Give the tangent line to f(x) = √x at x = 9.

b. Use it to approximate √9.4 (4 decimals), and compare with the calculator value.

#### Answer

a. y = x/6 + 3/2; b. ≈ 3.0667 (calculator: 3.0659, approximation good)

#### Solution

a. f(9) = 3; f′(x) = 1/(2√x), so f′(9) = 1/6. Tangent: y = (x − 9)/6 + 3 = x/6 + 3/2. b. √9.4 ≈ 9.4/6 + 1.5 = 1.5667 + 1.5 = 3.0667. Calculator: √9.4 ≈ 3.06594. Error ≈ 0.0007 — small near the touching point, as expected.

### matha-a07-q09 | points 5 | outcome o4 | difficulty hard

#### Question

A medicine response is modelled by R(c) = c·e^(−0.25c) for dose c ≥ 0. Compute the dose with the maximal response, and that maximal response (2 decimals).

#### Answer

c = 4 with R(max) = 4/e ≈ 1.47

#### Solution

Chain rule for e^(−0.25c) (single-standard inner function): R′(c) = 1·e^(−0.25c) + c·(−0.25 e^(−0.25c)) = e^(−0.25c)(1 − 0.25c). Since e^(−0.25c) > 0, R′ = 0 ⇔ c = 4. Sign: positive for c < 4, negative for c > 4, so a maximum: R(4) = 4·e⁻¹ = 4/e ≈ 1.47.

### matha-a07-q10 | points 4 | outcome o4 | difficulty medium

#### Question

The weekly profit of a workshop is modelled as W(q) = −2q² + 30q − 100 (hundreds of euros, q in hundreds of items), valid for 0 ≤ q ≤ 12. Compute the maximal weekly profit.

#### Answer

€1250 at q = 750 items

#### Solution

W′(q) = −4q + 30 = 0 ⇔ q = 7.5 (a bergparabool — maximum). W(7.5) = −2·56.25 + 225 − 100 = 12.5 hundreds of euros = €1250. The boundary values W(0) = −100 and W(12) = −28 are lower, so the interior vertex wins: €1250 per week at 750 items.
