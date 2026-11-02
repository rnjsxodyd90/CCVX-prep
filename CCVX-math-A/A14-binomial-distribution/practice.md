# A14 — The binomial distribution: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Always start with the binomial justification sentence. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md).

### matha-a14-q01 | points 3 | outcome o2 | difficulty easy

#### Question

A fair coin is tossed 10 times; X = the number of heads. Compute P(X = 7), as a simplified fraction and to 4 decimals.

#### Answer

15/128 ≈ 0.1172

#### Solution

Binomial with n = 10, p = 0.5 (fixed number of independent two-outcome trials with constant p). P(X = 7) = C(10,7)·(0.5)¹⁰ = 120/1024 = 15/128 ≈ 0.1172.

### matha-a14-q02 | points 4 | outcome o2 | difficulty medium

#### Question

A fair die is rolled 6 times; X = the number of sixes. Compute P(exactly 2 sixes), exactly and to 4 decimals.

#### Answer

3125/15552 ≈ 0.2009

#### Solution

Binomial with n = 6, p = 1/6. P(X = 2) = C(6,2)·(1/6)²·(5/6)⁴ = 15·(1/36)·(625/1296) = 9375/46656; simplifying by 3: 3125/15552 ≈ 0.2009.

### matha-a14-q03 | points 3 | outcome o3 | difficulty easy

#### Question

A plant seed germinates with probability 0.8. A tray holds 5 seeds. Compute P(at least one seed germinates).

#### Answer

0.99968

#### Solution

Binomial with n = 5, p = 0.8. Complement: P(none germinate) = 0.2⁵ = 0.00032, so P(at least one) = 1 − 0.00032 = 0.99968.

### matha-a14-q04 | points 4 | outcome o3 | difficulty medium

#### Question

Binomial with n = 8 and p = 0.4: compute P(X ≤ 1) (4 decimals).

#### Answer

≈ 0.1064

#### Solution

P(X ≤ 1) = P(X = 0) + P(X = 1) = 0.6⁸ + 8·0.4·0.6⁷. Compute: 0.6⁸ = 0.016796 (0.6⁸ = 1679616/10⁸), 0.6⁷ = 0.0279936, so P = 0.016796 + 8·0.4·0.0279936 = 0.016796 + 0.089580 = 0.106376 ≈ 0.1064. Two terms — within the exam's limit.

### matha-a14-q05 | points 3 | outcome o4 | difficulty easy

#### Question

A binomial random variable has n = 200 and p = 0.6. Compute E(X) and σ(X) (exact σ in root form, 2 decimals).

#### Answer

E(X) = 120; σ(X) = 4√3 ≈ 6.93

#### Solution

E(X) = np = 200·0.6 = 120. σ(X) = √(200·0.6·0.4) = √48 = 4√3 ≈ 6.9282 ≈ 6.93.

### matha-a14-q06 | points 4 | outcome o3 | difficulty medium

#### Question

A fair coin is tossed 9 times. Compute P(the number of heads equals its expectation), i.e. P(X = 4) + P(X = 5) (4 decimals).

#### Answer

63/256 ≈ 0.4922

#### Solution

Binomial n = 9, p = 0.5; E(X) = 4.5, between 4 and 5, so the asked case is X = 4 or X = 5. By symmetry C(9,4) = C(9,5) = 126, and each probability is 126/512: sum = 252/512 = 63/256 ≈ 0.4922.

### matha-a14-q07 | points 4 | outcome o5 | difficulty medium

#### Question

a. Is the number of hearts X when 3 cards are drawn from a full deck without replacement binomial? Justify.

b. Compute P(X = 3) with the right method.

#### Answer

a. No — p changes between draws without replacement; b. C(13,3)/C(52,3) = 143/11050 ≈ 0.0129

#### Solution

a. Not binomial: the success probability changes between draws (after a heart, 12/51 remain, not 13/52); the trials are not independent with constant p. b. Combinations: favourable C(13,3) = 286 of C(52,3) = 22 100 possible draws: P = 286/22 100 = 143/11 050 ≈ 0.0129.

### matha-a14-q08 | points 4 | outcome o6 | difficulty medium

#### Question

A machine makes 3% defective parts. A sample of 10 parts is inspected (large population, so independence holds).

a. Compute P(no defectives).

b. Compute P(at least one defective) (4 decimals).

#### Answer

a. 0.97¹⁰ ≈ 0.7374; b. ≈ 0.2626

#### Solution

a. Binomial with n = 10, p = 0.03: P(X = 0) = 0.97¹⁰ ≈ 0.7374. b. Complement: 1 − 0.7374 = 0.2626.

### matha-a14-q09 | points 5 | outcome o3 | difficulty hard

#### Question

Binomial with n = 6 and p = 0.25: compute P(1 ≤ X ≤ 2) (4 decimals).

#### Answer

≈ 0.6526

#### Solution

P(X = 1) + P(X = 2) = C(6,1)·0.25·0.75⁵ + C(6,2)·0.25²·0.75⁴. Powers: 0.75⁵ = 0.237305, 0.75⁴ = 0.316406. So P = 6·0.25·0.237305 + 15·0.0625·0.316406 = 0.355957 + 0.296631 = 0.652588 ≈ 0.6526. Two terms — within the exam's limit.

### matha-a14-q10 | points 4 | outcome o5 | difficulty medium

#### Question

For each situation, state whether X is binomial (and give the parameters if so):

a. X = the number of patients with side effects among 100 patients who each have a 10% risk, independently.

b. X = the number of aces in 5 cards drawn from a deck without replacement.

c. X = the number of goals in 30 free throws with constant success probability 0.7.

Also compute E(X) and σ(X) for a.

#### Answer

a. Binomial, n = 100, p = 0.1: E(X) = 10, σ(X) = 3; b. not binomial; c. binomial, n = 30, p = 0.7

#### Solution

a. Fixed n, two outcomes, constant p, independence stated: binomial with n = 100, p = 0.1. E(X) = 100·0.1 = 10; σ(X) = √(100·0.1·0.9) = √9 = 3. b. Without replacement the probabilities change between draws: not binomial. c. Fixed n = 30, two outcomes, constant p = 0.7, independent throws: binomial.
