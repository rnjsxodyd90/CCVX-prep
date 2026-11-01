# B4 — Practice questions with solutions

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. A full worked solution follows every question.

## Q1 — recognising exponential behaviour

For f(x) = 4 · 1.5ˣ and g(x) = 4 · 0.75ˣ: state for each whether the graph increases or decreases, and where its horizontal asymptote lies.

**Solution.** f has base 1.5 > 1: increasing (increasingly increasing), asymptote y = 0 as x → −∞. g has base 0.75 with 0 < 0.75 < 1: decreasing (decreasingly decreasing), asymptote y = 0 as x → ∞. Both pass through (0, 4).

**Answer:** f increasing, g decreasing; both with asymptote y = 0

## Q2 — building a growth formula from data

A bacterial colony counts 3000 cells at t = 0 (hours) and 4830 cells at t = 3. Assume exponential growth.

a. Give the formula N(t).

b. Give the hourly growth percentage to 1 decimal.

**Solution.** a. N(t) = 3000 · gᵗ with g³ = 4830/3000 = 1.61, so g = 1.61^(1/3) ≈ 1.172: N(t) ≈ 3000 · 1.172ᵗ. b. About +17.2% per hour.

**Answer:** a. N(t) ≈ 3000 · 1.172ᵗ; b. ≈ 17.2% per hour

## Q3 — doubling time

An investment grows by 6% per year. Compute the doubling time to 1 decimal.

**Solution.** 1.06ᵗ = 2 ⇔ t = ln(2)/ln(1.06) ≈ 0.6931/0.05827 ≈ 11.9 years.

**Answer:** ≈ 11.9 years

## Q4 — combining logarithms, exact

Compute exactly: ²log(54) − ²log(27) + ²log(4).

**Solution.** ²log(54 · 4 / 27) = ²log(216/27) = ²log(8) = 3 (since 2³ = 8).

**Answer:** 3

## Q5 — exponential equation, exact

Solve exactly: 4^(x−1) = 8.

**Solution.** Same base: 4 = 2² and 8 = 2³, so 2^(2x−2) = 2³ ⇔ 2x − 2 = 3 ⇔ x = 5/2. Check: 4^(3/2) = (√4)³ = 2³ = 8 ✓.

**Answer:** x = 2½

## Q6 — exponential equation, rounded

Solve 3ˣ = 50. Round to 2 decimals.

**Solution.** x = ³log(50) = ln(50)/ln(3) ≈ 3.912/1.0986 ≈ 3.56.

**Answer:** x ≈ 3.56

## Q7 — logarithmic equation with a domain trap

Solve: log(x + 3) + log(x) = 1 (base 10).

**Solution.** Domain: x > 0. Combine: log(x(x + 3)) = 1 ⇔ x² + 3x = 10 ⇔ x² + 3x − 10 = (x + 5)(x − 2) = 0 ⇔ x = 2 or x = −5. Only x = 2 is in the domain. Check: log 5 + log 2 = log 10 = 1 ✓.

**Answer:** x = 2

## Q8 — continuous growth with e

A population follows P(t) = 500 · e^(0.03t), t in years. After how many years does it reach 1000? Round to 1 decimal.

**Solution.** e^(0.03t) = 2 ⇔ 0.03t = ln 2 ⇔ t = ln 2 / 0.03 ≈ 0.6931/0.03 ≈ 23.1 years.

**Answer:** ≈ 23.1 years

## Q9 — substitution with eˣ

Solve exactly: e²ˣ − 3eˣ + 2 = 0.

**Solution.** Set y = eˣ (y > 0): y² − 3y + 2 = (y − 1)(y − 2) = 0 ⇔ y = 1 or y = 2. So eˣ = 1 ⇔ x = 0, and eˣ = 2 ⇔ x = ln 2 ≈ 0.69. Both are valid (y > 0 holds).

**Answer:** x = 0 ∨ x = ln 2 ≈ 0.69

## Q10 — converting between exponential and log form

A quantity follows N = 250 · 1.2ᵗ.

a. Write log(N) (base 10) as a linear formula in t.

b. Write t as a formula in N.

**Solution.** a. log(250 · 1.2ᵗ) = log(250) + t·log(1.2) ≈ 2.3979 + 0.0792t. b. 1.2ᵗ = N/250 ⇔ t = ¹·²log(N/250) = ln(N/250)/ln(1.2).

**Answer:** a. log(N) ≈ 2.3979 + 0.0792t; b. t = ¹·²log(N/250)
