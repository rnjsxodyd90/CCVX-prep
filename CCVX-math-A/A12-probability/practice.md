# A12 — Probability: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Give exact fractions throughout; percentages rounded only when asked. Outcome codes o1–o8 match the numbered learning outcomes in [README.md](README.md).

### matha-a12-q01 | points 3 | outcome o2 | difficulty easy

#### Question

A fair die is rolled once. Compute: (a) P(at most 2 eyes); (b) P(odd); (c) P(even or at most 2).

#### Answer

(a) 1/3; (b) 1/2; (c) 2/3

#### Solution

(a) {1, 2}: 2/6 = 1/3. (b) {1, 3, 5}: 3/6 = 1/2. (c) even = {2, 4, 6}, "at most 2" = {1, 2}: union {1, 2, 4, 6} = 4/6 = 2/3. Check the sum rule: 1/2 + 1/3 − P({2}) = 1/2 + 1/3 − 1/6 = 2/3 ✓.

### matha-a12-q02 | points 3 | outcome o2 | difficulty easy

#### Question

Two fair dice are rolled. Compute P(sum ≥ 10).

#### Answer

1/6

#### Solution

36 equally likely outcomes. Sum ≥ 10: sum 10 → (4,6), (5,5), (6,4); sum 11 → (5,6), (6,5); sum 12 → (6,6): 6 favourable outcomes. P = 6/36 = 1/6.

### matha-a12-q03 | points 3 | outcome o6 | difficulty easy

#### Question

A bag holds 3 green and 7 grey marbles. Two marbles are drawn **with** replacement. Compute P(both green).

#### Answer

9/100

#### Solution

With replacement, the draws are independent and the probabilities don't change: (3/10)² = 9/100.

### matha-a12-q04 | points 4 | outcome o4 | difficulty medium

#### Question

A bag holds 5 white and 5 black marbles. Two marbles are drawn **without** replacement. Compute P(first black and then white).

#### Answer

5/18

#### Solution

P(first black) = 5/10; given that, P(white) = 5/9. Multiply (probability tree): 5/10 × 5/9 = 25/90 = 5/18.

### matha-a12-q05 | points 4 | outcome o4 | difficulty medium

#### Question

Tomorrow's rain depends on today's: P(rain today) = 0.3; if it rains today, P(rain tomorrow) = 0.5; if it stays dry today, P(rain tomorrow) = 0.2. Compute P(rain tomorrow).

#### Answer

0.29

#### Solution

Two paths add: 0.3 × 0.5 + 0.7 × 0.2 = 0.15 + 0.14 = 0.29.

### matha-a12-q06 | points 4 | outcome o5 | difficulty medium

#### Question

In a survey of 400 people, 25% smoke. Of the smokers 60% cough regularly; of the non-smokers 15%.

a. Fill in the contingency table (counts).

b. Compute P(a person smokes, given they cough regularly).

#### Answer

a. smokers: 60 cough / 40 not; non-smokers: 45 cough / 255 not; b. 4/7 ≈ 0.571

#### Solution

a. Smokers: 100, of which 60 cough and 40 don't. Non-smokers: 300, of which 45 cough and 255 don't. Totals: 105 cough, 295 not. b. Inside the cough column: 60/(60 + 45) = 60/105 = 4/7 ≈ 0.571.

### matha-a12-q07 | points 3 | outcome o6 | difficulty easy

#### Question

Events A and B have P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2. Are A and B independent? And if instead P(A and B) = 0.3?

#### Answer

With 0.2: independent; with 0.3: dependent

#### Solution

Independence needs P(A)·P(B) = P(A and B): 0.4 × 0.5 = 0.2, so yes in the first case. With P(A and B) = 0.3, the product rule fails: dependent.

### matha-a12-q08 | points 3 | outcome o7 | difficulty easy

#### Question

A fair coin is tossed 3 times. Compute P(at least one head).

#### Answer

7/8

#### Solution

Complement: P(no heads = three tails) = (1/2)³ = 1/8. So P(at least one head) = 1 − 1/8 = 7/8.

### matha-a12-q09 | points 4 | outcome o7 | difficulty medium

#### Question

Two students are randomly asked their birth month (all months equally likely). Compute P(they were born in different months).

#### Answer

11/12

#### Solution

Complement: P(same month) = 12 × (1/12)² = 1/12 (12 possible shared months). So P(different) = 1 − 1/12 = 11/12.

### matha-a12-q10 | points 4 | outcome o4 | difficulty hard

#### Question

Two cards are drawn from a full deck of 52 without replacement. Compute P(both are kings) exactly, and to 4 decimals.

#### Answer

1/221 ≈ 0.0045

#### Solution

Ordered count: 4·3 favourable of 52·51 total: 12/2652 = 1/221 ≈ 0.00452. (Combinations give the same: C(4,2)/C(52,2) = 6/1326 = 1/221 ✓.)
