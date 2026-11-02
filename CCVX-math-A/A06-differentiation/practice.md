# A6 — Differentiation: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o5 match the numbered learning outcomes in [README.md](README.md).

### matha-a06-q01 | points 2 | outcome o1 | difficulty easy

#### Question

Differentiate f(x) = 4x³ − 6x² + 2x − 1 and compute f′(1).

#### Answer

f′(x) = 12x² − 12x + 2; f′(1) = 2

#### Solution

Power rule per term: f′(x) = 12x² − 12x + 2. Then f′(1) = 12 − 12 + 2 = 2.

### matha-a06-q02 | points 3 | outcome o1 | difficulty medium

#### Question

Differentiate f(x) = 3√x + 2/x³ (x > 0).

#### Answer

f′(x) = 3/(2√x) − 6/x⁴

#### Solution

Rewrite: 3x^(1/2) + 2x⁻³. Then f′(x) = (3/2)x^(−1/2) − 6x⁻⁴ = 3/(2√x) − 6/x⁴.

### matha-a06-q03 | points 2 | outcome o1 | difficulty medium

#### Question

Differentiate f(x) = 2ˣ + ln(x).

#### Answer

f′(x) = 2ˣ ln 2 + 1/x

#### Solution

Standard derivatives: (gˣ)′ = gˣ ln(g) gives 2ˣ ln 2; (ln x)′ = 1/x. Sum: f′(x) = 2ˣ ln 2 + 1/x.

### matha-a06-q04 | points 3 | outcome o2 | difficulty medium

#### Question

Differentiate f(x) = (x + 1)·eˣ.

#### Answer

f′(x) = eˣ(x + 2)

#### Solution

Product rule: f′ = 1·eˣ + (x + 1)·eˣ = eˣ(1 + x + 1) = eˣ(x + 2).

### matha-a06-q05 | points 3 | outcome o2 | difficulty medium

#### Question

Differentiate f(x) = (x − 1)/(x + 1).

#### Answer

f′(x) = 2/(x + 1)²

#### Solution

Quotient rule (formula sheet): f′ = (1·(x + 1) − (x − 1)·1)/(x + 1)² = (x + 1 − x + 1)/(x + 1)² = 2/(x + 1)².

### matha-a06-q06 | points 3 | outcome o3 | difficulty medium

#### Question

Differentiate: (a) k(x) = e^(4x); (b) m(x) = √(5x).

#### Answer

(a) 4e^(4x); (b) 5/(2√(5x)) = √5/(2√x)

#### Solution

(a) Chain rule: k′(x) = 4·e^(4x). (b) m(x) = (5x)^(1/2): m′(x) = ½(5x)^(−1/2)·5 = 5/(2√(5x)) = √5/(2√x) — consistent with m(x) = √5·√x differentiated directly.

### matha-a06-q07 | points 4 | outcome o5 | difficulty medium

#### Question

Give the equation of the tangent line to the graph of f(x) = x² − 4x + 5 at the point where x = 3.

#### Answer

y = 2x − 4

#### Solution

Point: f(3) = 9 − 12 + 5 = 2, so (3, 2). Slope: f′(x) = 2x − 4, so f′(3) = 2. Tangent: y = 2(x − 3) + 2 = 2x − 4. Check: at x = 3, y = 2 ✓.

### matha-a06-q08 | points 4 | outcome o5 | difficulty hard

#### Question

A population follows N(t) = 2000·1.05ᵗ (t in years).

a. Give the growth rate N′(t).

b. Compute the instantaneous growth rate at t = 0, and the relative growth rate N′(t)/N(t) (2 decimals as a percentage).

#### Answer

a. N′(t) = 2000·1.05ᵗ·ln 1.05; b. ≈ 97.6 per year at t = 0; ≈ 4.88% per year, constant

#### Solution

a. (gˣ)′ = gˣ ln(g): N′(t) = 2000·1.05ᵗ·ln(1.05). b. N′(0) = 2000·ln(1.05) ≈ 2000 × 0.04879 ≈ 97.6 individuals per year. Relative: N′/N = ln(1.05) ≈ 0.0488 ≈ 4.88% per year for every t — the instant-measured counterpart of the 5% per-step growth.

### matha-a06-q09 | points 4 | outcome o4 | difficulty medium

#### Question

The average cost per unit is C(q) = (100q + 400)/q for q > 0. Differentiate C(q), first preparing the formula algebraically.

#### Answer

C′(q) = −400/q²

#### Solution

Prepare: C(q) = 100 + 400/q = 100 + 400q⁻¹. Then C′(q) = −400q⁻² = −400/q² — much easier than the quotient rule (which gives the same answer). The negative sign means average cost falls with quantity.

### matha-a06-q10 | points 3 | outcome o3 | difficulty medium

#### Question

Differentiate k(x) = ln(x²) (x > 0), in two ways, and show they agree.

#### Answer

k′(x) = 2/x

#### Solution

Chain rule on ln(x²): k′ = (1/x²)·2x = 2/x. Logarithm rule first: ln(x²) = 2 ln x, so k′ = 2·(1/x) = 2/x. Same answer ✓.
