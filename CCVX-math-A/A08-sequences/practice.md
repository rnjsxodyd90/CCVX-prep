# A8 — Sequences: practice

Nine original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o7 match the numbered learning outcomes in [README.md](README.md).

### matha-a08-q01 | points 2 | outcome o2 | difficulty easy

#### Question

For each sequence, state whether it is arithmetic or geometric, and give the difference or ratio: (a) u_n = 7 − 2n; (b) w_n = 4·(1.5)ⁿ.

#### Answer

(a) arithmetic, difference −2; (b) geometric, ratio 1.5

#### Solution

(a) Linear in n: arithmetic with u₀ = 7 and step −2. (b) Exponential in n: geometric with w₀ = 4 and ratio 1.5.

### matha-a08-q02 | points 2 | outcome o2 | difficulty easy

#### Question

An arithmetic sequence starts at u₀ = 3 with difference 5.

a. Give the first four terms.

b. Give the recursive formula.

#### Answer

a. 3, 8, 13, 18; b. u_{n+1} = u_n + 5 with u₀ = 3

#### Solution

Each next term adds 5: 3, 8, 13, 18. Recursively: u_{n+1} = u_n + 5 with u₀ = 3.

### matha-a08-q03 | points 4 | outcome o5 | difficulty medium

#### Question

Given u_n = 2 + 6n (n ≥ 0).

a. Compute u_15.

b. For which index n does u_n first exceed 200?

#### Answer

a. 92; b. n = 34 (u_34 = 206)

#### Solution

a. u_15 = 2 + 90 = 92. b. 2 + 6n > 200 ⇔ n > 198/6 = 33, so the first index is n = 34: u_34 = 2 + 204 = 206 > 200 ✓ (u_33 = 200 equals 200, not exceeding it).

### matha-a08-q04 | points 4 | outcome o5 | difficulty medium

#### Question

A geometric sequence has u₀ = 5 and ratio r = 3.

a. Compute u_4.

b. For which n does u_n first exceed 1000?

#### Answer

a. 405; b. n = 5 (u_5 = 1215)

#### Solution

a. u_4 = 5·3⁴ = 5·81 = 405. b. 5·3ⁿ > 1000 ⇔ 3ⁿ > 200 ⇔ n > log(200)/log(3) ≈ 4.82, so n = 5: u_5 = 5·243 = 1215 ✓ (u_4 = 405 < 1000).

### matha-a08-q05 | points 3 | outcome o4 | difficulty medium

#### Question

Compute the sum u₀ + u₁ + … + u₂₀ for the arithmetic sequence u_n = 4 + 3n.

#### Answer

714

#### Solution

21 terms (n = 0 … 20), first u₀ = 4, last u₂₀ = 64. Sum = ½·21·(4 + 64) = ½·21·68 = 714.

### matha-a08-q06 | points 4 | outcome o4 | difficulty medium

#### Question

Compute the sum 2 + 1 + 0.5 + 0.25 + 0.125 with the geometric sum formula. Check with a direct addition.

#### Answer

3.875

#### Solution

Ratio ½, u_e = 2, and the term following u_l = 0.125 is u_{l+1} = 0.0625. Sum = (u_{l+1} − u_e)/(r − 1) = (0.0625 − 2)/(0.5 − 1) = (−1.9375)/(−0.5) = 3.875. Direct: 2 + 1 + 0.5 + 0.25 + 0.125 = 3.875 ✓.

### matha-a08-q07 | points 4 | outcome o3 | difficulty hard

#### Question

For a geometric sequence, u₁ = 6 and u₃ = 24. Give all possible direct formulas.

#### Answer

u_n = 3·2ⁿ, or u_n = −3·(−2)ⁿ

#### Solution

u₃/u₁ = r² = 24/6 = 4 ⇔ r = 2 or r = −2. For r = 2: u₀ = 3 and u_n = 3·2ⁿ. For r = −2: u₀ = −3 and u_n = −3·(−2)ⁿ. Both check: for r = −2, terms −3, 6, −12, 24 ✓ with u₃ = 24.

### matha-a08-q08 | points 4 | outcome o6 | difficulty medium

#### Question

A student saves by depositing €200 each month into an account that starts at €1000 (no interest in this model).

a. Give the direct formula for the account content u_n after n months.

b. After how many months is the content more than €5000?

#### Answer

a. u_n = 1000 + 200n; b. after 21 months (€5200)

#### Solution

a. Arithmetic with step 200: u_n = 1000 + 200n. b. 1000 + 200n > 5000 ⇔ n > 20. At n = 20 the content equals €5000 — equal, not more — so the first month with more is n = 21: u_21 = €5200.

### matha-a08-q09 | points 5 | outcome o7 | difficulty hard

#### Question

The number of members of a club follows u_{n+1} = 0.5·u_n + 40 with u₀ = 10 (n in years).

a. Compute the first four terms.

b. To which limit does the sequence converge? Show with the fixed-point equation.

#### Answer

a. 10, 45, 62.5, 71.25; b. 80

#### Solution

a. u₁ = 0.5·10 + 40 = 45; u₂ = 0.5·45 + 40 = 62.5; u₃ = 0.5·62.5 + 40 = 71.25. b. Fixed point: L = 0.5L + 40 ⇔ 0.5L = 40 ⇔ L = 80. Since |0.5| < 1, the sequence converges to 80 members (the terms climb from 10 towards it).
