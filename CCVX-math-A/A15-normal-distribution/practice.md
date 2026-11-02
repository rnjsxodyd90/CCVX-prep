# A15 — The normal distribution: practice

Nine original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md). The rules of thumb: 50% below μ; 68% within μ ± σ; 95% within μ ± 2σ; 99.7% within μ ± 3σ.

### matha-a15-q01 | points 4 | outcome o2 | difficulty easy

#### Question

Apples in an orchard are normally distributed with μ = 200 g and σ = 20 g. Compute which percentage of apples:

a. weighs less than 160 g;

b. weighs between 180 g and 240 g;

c. weighs more than 240 g.

#### Answer

a. 2.5%; b. 81.5%; c. 2.5%

#### Solution

a. 160 = μ − 2σ: the lower 2σ tail, 2.5%. b. 180 = μ − σ (34% below μ) and 240 = μ + 2σ (47.5% between μ and μ + 2σ): total 34 + 47.5 = 81.5%. c. 240 = μ + 2σ: the upper 2σ tail, 2.5%.

### matha-a15-q02 | points 3 | outcome o2 | difficulty easy

#### Question

Test scores in a large course are N(70, 8). Compute the percentage of students with scores (a) below 54 and (b) between 62 and 86.

#### Answer

a. 2.5%; b. 81.5%

#### Solution

a. 54 = 70 − 2·8 = μ − 2σ → 2.5%. b. 62 = μ − σ and 86 = μ + 2σ: 34% + 47.5% = 81.5%.

### matha-a15-q03 | points 4 | outcome o4 | difficulty medium

#### Question

For bottles from a filling line: 16% of bottles contain **less** than 330 mL, and 2.5% contain **more** than 360 mL. Compute μ and σ.

#### Answer

μ = 340 mL, σ = 10 mL

#### Solution

16% less than 330 mL → 330 = μ − σ. 2.5% more than 360 mL → 360 = μ + 2σ. Subtract: 3σ = 30 ⇔ σ = 10 mL; then μ = 330 + 10 = 340 mL.

### matha-a15-q04 | points 3 | outcome o4 | difficulty easy

#### Question

A normally distributed quantity has μ = 500, and 2.5% of the observations exceed 515. Compute σ.

#### Answer

σ = 7.5

#### Solution

The 2.5% upper tail is μ + 2σ: 515 = 500 + 2σ ⇔ σ = 7.5.

### matha-a15-q05 | points 3 | outcome o2 | difficulty easy

#### Question

Eggs from a supplier are N(58 g, 4 g). Compute the percentage of eggs (a) below 50 g, (b) above 66 g, (c) between 54 and 62 g.

#### Answer

a. 2.5%; b. 2.5%; c. 68%

#### Solution

a. 50 = μ − 2σ: 2.5%. b. 66 = μ + 2σ: 2.5%. c. 54 and 62 are μ − σ and μ + σ: 68%.

### matha-a15-q06 | points 3 | outcome o2 | difficulty medium

#### Question

For X ∼ N(100, 5), compute the percentage of observations between μ − σ and μ + 3σ.

#### Answer

83.85%

#### Solution

From μ − σ to μ: 34% (half of 68%). From μ to μ + 3σ: 49.85% (half of 99.7%). Total: 34 + 49.85 = 83.85%.

### matha-a15-q07 | points 4 | outcome o6 | difficulty hard

#### Question

A fair coin is tossed 64 times; X = the number of heads. Estimate P(X ≤ 24) with the normal approximation (state the condition, the parameters, the continuity correction and the estimate).

#### Answer

≈ 2.5%

#### Solution

Condition: np = 32 ≥ 5 ✓. So Y ∼ N(μ = 32, σ = √(64·0.5·0.5) = 4). Continuity correction: P(X ≤ 24) ≈ P(Y < 24.5). Standardise: z = (24.5 − 32)/4 = −1.875 ≈ −2, the lower 2σ tail: ≈ 2.5%.

### matha-a15-q08 | points 4 | outcome o6 | difficulty hard

#### Question

One hundred fair dice are rolled; S = the total number of eyes. (One die has μ = 3.5 and σ ≈ 1.708.)

a. Compute E(S) and σ(S).

b. Estimate P(S ≤ 316) with the normal approximation.

#### Answer

a. E(S) = 350, σ(S) ≈ 17.08; b. ≈ 2.5%

#### Solution

a. √n-law: E(S) = 100·3.5 = 350; σ(S) = √100·1.708 = 17.08. b. Continuity correction: P(S ≤ 316) ≈ P(S < 316.5); z = (316.5 − 350)/17.08 ≈ −1.96 ≈ −2: the lower 2σ tail ≈ 2.5% (the z lands right at the two-sided 95% boundary of the testing table).

### matha-a15-q09 | points 4 | outcome o4 | difficulty hard

#### Question

A filling machine has normally distributed bag masses. 0.15% of bags are below 148 g and 16% are above 156 g. Compute μ and σ.

#### Answer

μ = 154 g, σ = 2 g

#### Solution

0.15% below → 148 = μ − 3σ. 16% above → 156 = μ + σ. Subtract: 4σ = 8 ⇔ σ = 2 g; then μ = 156 − 2 = 154 g.
