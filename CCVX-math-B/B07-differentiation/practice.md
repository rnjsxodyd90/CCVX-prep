# B7 — Differentiation: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o4 match the numbered learning outcomes in [README.md](README.md).

### mathb-b07-q01 | points 2 | outcome o1 | difficulty easy

#### Question

Differentiate f(x) = 3x⁴ − 2x² + 5x − 7 and compute f′(−1).

#### Answer

f′(x) = 12x³ − 4x + 5; f′(−1) = −3

#### Solution

f′(x) = 12x³ − 4x + 5 (power rule term by term). f′(−1) = −12 + 4 + 5 = −3.

### mathb-b07-q02 | points 3 | outcome o1 | difficulty medium

#### Question

Differentiate f(x) = 2√x + 4/x² (x > 0).

#### Answer

f′(x) = 1/√x − 8/x³

#### Solution

Rewrite: 2x^(1/2) + 4x⁻². Then f′(x) = 2·½x^(−1/2) + 4·(−2)x⁻³ = x^(−1/2) − 8x⁻³ = 1/√x − 8/x³.

### mathb-b07-q03 | points 2 | outcome o1 | difficulty medium

#### Question

Differentiate f(x) = 5ˣ + ³log(x).

#### Answer

f′(x) = 5ˣ ln 5 + 1/(x ln 3)

#### Solution

Standard derivatives: (aˣ)′ = aˣ ln(a) gives 5ˣ ln 5; (ᵍlog x)′ = 1/(x ln g) gives 1/(x ln 3). Sum: f′(x) = 5ˣ ln 5 + 1/(x ln 3).

### mathb-b07-q04 | points 3 | outcome o2 | difficulty medium

#### Question

Differentiate f(x) = (x² − 3x)·eˣ.

#### Answer

f′(x) = eˣ(x² − x − 3)

#### Solution

Product rule: f′ = (2x − 3)eˣ + (x² − 3x)eˣ = eˣ(x² − 3x + 2x − 3) = eˣ(x² − x − 3).

### mathb-b07-q05 | points 3 | outcome o2 | difficulty medium

#### Question

Differentiate f(x) = x/(x² + 1).

#### Answer

f′(x) = (1 − x²)/(x² + 1)²

#### Solution

Quotient rule: f′ = (1·(x² + 1) − x·2x)/(x² + 1)² = (x² + 1 − 2x²)/(x² + 1)² = (1 − x²)/(x² + 1)².

### mathb-b07-q06 | points 3 | outcome o2 | difficulty medium

#### Question

Differentiate f(x) = cos(2x − π/6) and compute f′(π/6) exactly.

#### Answer

f′(x) = −2 sin(2x − π/6); f′(π/6) = −1

#### Solution

Chain rule: f′(x) = −2 sin(2x − π/6). At x = π/6: f′ = −2 sin(π/3 − π/6) = −2 sin(π/6) = −2·½ = −1.

### mathb-b07-q07 | points 4 | outcome o4 | difficulty medium

#### Question

Give the equation of the tangent to the graph of f(x) = √(3x + 2) at x = 2/3.

#### Answer

y = (3/4)x + 3/2

#### Solution

f(2/3) = √4 = 2. Chain rule: f′(x) = 3/(2√(3x + 2)), so f′(2/3) = 3/4. Tangent: y = (3/4)(x − 2/3) + 2 = (3/4)x − 1/2 + 2 = (3/4)x + 3/2. Check: at x = 2/3, y = 1/2 + 3/2 = 2 ✓.

### mathb-b07-q08 | points 4 | outcome o4 | difficulty hard

#### Question

Give the tangent line to the graph of f(x) = ln(x) at x = e².

#### Answer

y = x/e² + 1

#### Solution

Point: (e², ln(e²)) = (e², 2). Slope: f′(x) = 1/x, so f′(e²) = 1/e². Line: y = (x − e²)/e² + 2 = x/e² − 1 + 2 = x/e² + 1.

### mathb-b07-q09 | points 4 | outcome o3 | difficulty medium

#### Question

Compute f″(x) for f(x) = sin(3x), and f″(π/6) exactly. What is the relation between f″ and f?

#### Answer

f″(x) = −9 sin(3x) = −9f(x); f″(π/6) = −9

#### Solution

f′(x) = 3 cos(3x); f″(x) = −9 sin(3x). f″(π/6) = −9 sin(π/2) = −9. Relation: f″ = −9·f — the harmonic-oscillation property (acceleration proportional to displacement).

### mathb-b07-q10 | points 4 | outcome o2 | difficulty hard

#### Question

Differentiate f(x) = ((2x + 1)/(x + 2))².

#### Answer

f′(x) = 6(2x + 1)/(x + 2)³

#### Solution

Chain rule with g(x) = (2x + 1)/(x + 2): f′ = 2g·g′. Quotient rule: g′ = (2(x + 2) − (2x + 1))/(x + 2)² = (2x + 4 − 2x − 1)/(x + 2)² = 3/(x + 2)². So f′(x) = 2·((2x + 1)/(x + 2))·(3/(x + 2)²) = 6(2x + 1)/(x + 2)³.
