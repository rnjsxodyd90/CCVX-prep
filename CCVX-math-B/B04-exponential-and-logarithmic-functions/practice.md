# B4 — Exponential and logarithmic functions: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o7 match the numbered learning outcomes in [README.md](README.md).

### mathb-b04-q01 | points 2 | outcome o1 | difficulty easy

#### Question

For f(x) = 4 · 1.5ˣ and g(x) = 4 · 0.75ˣ: state for each whether the graph increases or decreases, and where its horizontal asymptote lies.

#### Answer

f increasing, g decreasing; both with asymptote y = 0

#### Solution

f has base 1.5 > 1: increasing (increasingly increasing), asymptote y = 0 as x → −∞. g has base 0.75 with 0 < 0.75 < 1: decreasing (decreasingly decreasing), asymptote y = 0 as x → ∞. Both pass through (0, 4).

### mathb-b04-q02 | points 4 | outcome o2 | difficulty medium

#### Question

A bacterial colony counts 3000 cells at t = 0 (hours) and 4830 cells at t = 3. Assume exponential growth.

a. Give the formula N(t).

b. Give the hourly growth percentage to 1 decimal.

#### Answer

a. N(t) ≈ 3000 · 1.172ᵗ; b. ≈ 17.2% per hour

#### Solution

a. N(t) = 3000 · gᵗ with g³ = 4830/3000 = 1.61, so g = 1.61^(1/3) ≈ 1.172, giving N(t) ≈ 3000 · 1.172ᵗ. b. g − 1 ≈ 0.172, so about +17.2% per hour.

### mathb-b04-q03 | points 2 | outcome o2 | difficulty easy

#### Question

An investment grows by 6% per year. Compute the doubling time to 1 decimal.

#### Answer

≈ 11.9 years

#### Solution

1.06ᵗ = 2 ⇔ t = ln(2)/ln(1.06) ≈ 0.6931/0.05827 ≈ 11.9 years.

### mathb-b04-q04 | points 2 | outcome o6 | difficulty easy

#### Question

Compute exactly: ²log(54) − ²log(27) + ²log(4).

#### Answer

3

#### Solution

²log(54 · 4 / 27) = ²log(216/27) = ²log(8) = 3 (since 2³ = 8).

### mathb-b04-q05 | points 3 | outcome o7 | difficulty medium

#### Question

Solve exactly: 4^(x−1) = 8.

#### Answer

x = 2½

#### Solution

Same base: 4 = 2² and 8 = 2³, so 2^(2x−2) = 2³ ⇔ 2x − 2 = 3 ⇔ x = 5/2. Check: 4^(3/2) = (√4)³ = 2³ = 8 ✓.

### mathb-b04-q06 | points 2 | outcome o7 | difficulty easy

#### Question

Solve 3ˣ = 50. Round to 2 decimals.

#### Answer

x ≈ 3.56

#### Solution

x = ³log(50) = ln(50)/ln(3) ≈ 3.912/1.0986 ≈ 3.56.

### mathb-b04-q07 | points 3 | outcome o7 | difficulty medium

#### Question

Solve: log(x + 3) + log(x) = 1 (base 10).

#### Answer

x = 2

#### Solution

Domain: x > 0. Combine: log(x(x + 3)) = 1 ⇔ x² + 3x = 10 ⇔ x² + 3x − 10 = (x + 5)(x − 2) = 0 ⇔ x = 2 or x = −5. Only x = 2 is in the domain. Check: log 5 + log 2 = log 10 = 1 ✓.

### mathb-b04-q08 | points 2 | outcome o2 | difficulty easy

#### Question

A population follows P(t) = 500 · e^(0.03t), t in years. After how many years does it reach 1000? Round to 1 decimal.

#### Answer

≈ 23.1 years

#### Solution

e^(0.03t) = 2 ⇔ 0.03t = ln 2 ⇔ t = ln 2 / 0.03 ≈ 0.6931/0.03 ≈ 23.1 years.

### mathb-b04-q09 | points 3 | outcome o7 | difficulty medium

#### Question

Solve exactly: e²ˣ − 3eˣ + 2 = 0.

#### Answer

x = 0 ∨ x = ln 2 ≈ 0.69

#### Solution

Set y = eˣ (y > 0): y² − 3y + 2 = (y − 1)(y − 2) = 0 ⇔ y = 1 or y = 2. So eˣ = 1 ⇔ x = 0, and eˣ = 2 ⇔ x = ln 2 ≈ 0.69. Both are valid (y > 0 holds).

### mathb-b04-q10 | points 4 | outcome o6 | difficulty hard

#### Question

A quantity follows N = 250 · 1.2ᵗ.

a. Write log(N) (base 10) as a linear formula in t.

b. Write t as a formula in N.

#### Answer

a. log(N) ≈ 2.3979 + 0.0792t; b. t = ¹·²log(N/250)

#### Solution

a. log(250 · 1.2ᵗ) = log(250) + t·log(1.2) ≈ 2.3979 + 0.0792t. b. 1.2ᵗ = N/250 ⇔ t = ¹·²log(N/250) = ln(N/250)/ln(1.2).
