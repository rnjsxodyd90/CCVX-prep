# A5 — Logarithms: practice

Nine original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md).

### matha-a05-q01 | points 3 | outcome o1 | difficulty easy

#### Question

Compute exactly: (a) ²log(16); (b) ⁹log(3); (c) log(1).

#### Answer

(a) 4; (b) ½; (c) 0

#### Solution

(a) 2⁴ = 16, so ²log(16) = 4. (b) 9^(1/2) = 3, so ⁹log(3) = ½. (c) log(1) = 0 for every base (g⁰ = 1).

### matha-a05-q02 | points 3 | outcome o3 | difficulty easy

#### Question

Write as a single logarithm and simplify exactly: ²log(12) − ²log(3) + ²log(4).

#### Answer

²log(16) = 4

#### Solution

Difference first: ²log(12/3) = ²log(4); then the sum: ²log(4 · 4) = ²log(16) = 4 (since 2⁴ = 16).

### matha-a05-q03 | points 3 | outcome o3 | difficulty easy

#### Question

Compute ⁵log(30) to 3 decimals with the calculator.

#### Answer

≈ 2.113

#### Solution

Base change: ⁵log(30) = log(30)/log(5) ≈ 1.47712/0.69897 ≈ 2.113.

### matha-a05-q04 | points 2 | outcome o4 | difficulty easy

#### Question

Solve: ³log(x + 6) = 2.

#### Answer

x = 3

#### Solution

Definition: x + 6 = 3² = 9 ⇔ x = 3. Domain check: x + 6 = 9 > 0 ✓.

### matha-a05-q05 | points 3 | outcome o4 | difficulty medium

#### Question

Solve: log(x) + log(5) = 2 (base 10).

#### Answer

x = 20

#### Solution

Combine: log(x) + log(5) = log(5x) = 2 ⇔ 5x = 10² = 100 ⇔ x = 20. Domain check: 20 > 0 ✓. Verify: log(20) + log(5) = log(100) = 2 ✓.

### matha-a05-q06 | points 4 | outcome o5 | difficulty medium

#### Question

The acidity is pH = −log([H⁺]) with [H⁺] in mol/L.

a. Lemon juice has [H⁺] = 2.5 × 10⁻³ mol/L. Compute the pH (2 decimals).

b. A solution has pH = 4.2. Compute [H⁺] in scientific notation.

#### Answer

a. ≈ 2.60; b. ≈ 6.3 × 10⁻⁵ mol/L

#### Solution

a. pH = −log(2.5 × 10⁻³) = −(log 2.5 − 3) = 3 − 0.39794 ≈ 2.60. b. [H⁺] = 10^(−4.2) = 10^0.8 × 10⁻⁵ ≈ 6.31 × 10⁻⁵ mol/L.

### matha-a05-q07 | points 3 | outcome o6 | difficulty medium

#### Question

A quantity follows N = 250·1.2ᵗ. Show that log(N) is a linear function of t (base 10), and give the formula.

#### Answer

log(N) ≈ 2.398 + 0.0792t

#### Solution

log(250·1.2ᵗ) = log(250) + t·log(1.2) ≈ 2.39794 + 0.07918t ≈ 2.398 + 0.0792t — linear in t, as the multiplicative model predicts.

### matha-a05-q08 | points 3 | outcome o6 | difficulty medium

#### Question

For a process, log(N) = 3 − 2·log(t) (base 10). Write N as a power function of t.

#### Answer

N = 1000·t⁻² = 1000/t²

#### Solution

N = 10^(3 − 2 log t) = 10³ · (10^(log t))⁻² = 1000·t⁻².

### matha-a05-q09 | points 4 | outcome o4 | difficulty hard

#### Question

Solve: log(x²) = 2 (base 10). (Careful: how many solutions?)

#### Answer

x = 10 ∨ x = −10

#### Solution

log(x²) = 2 ⇔ x² = 10² = 100 ⇔ x = ±10. Both are allowed: log(x²) exists for every x ≠ 0, so x = −10 is valid too — a classic place to drop a solution. Check: log((−10)²) = log 100 = 2 ✓.
