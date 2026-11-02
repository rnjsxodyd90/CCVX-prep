# A4 — Exponential growth: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o7 match the numbered learning outcomes in [README.md](README.md).

### matha-a04-q01 | points 2 | outcome o7 | difficulty easy

#### Question

A table gives t (days): 0, 1, 2, 3 and N: 400, 340, 289, 245.65. Show the behaviour is exponential and give the formula.

#### Answer

N(t) = 400·0.85ᵗ

#### Solution

Ratios of successive values: 340/400 = 0.85; 289/340 = 0.85; 245.65/289 = 0.85. Equal ratios per equal step ⇒ exponential with g = 0.85 and b = 400: N(t) = 400·0.85ᵗ.

### matha-a04-q02 | points 3 | outcome o2 | difficulty easy

#### Question

A savings account pays 4.5% interest per year.

a. Give the growth factor per year.

b. Compute the total percentage growth over 10 years (1 decimal).

#### Answer

a. g = 1.045; b. ≈ +55.3%

#### Solution

a. g = 1 + 0.045 = 1.045. b. Factor after 10 years: 1.045¹⁰ ≈ 1.5530, so about +55.3% — not 45% (factors multiply, percentages do not add).

### matha-a04-q03 | points 3 | outcome o3 | difficulty medium

#### Question

A bacterial culture grows 40% per day. Compute the growth factor and the growth percentage per hour (2 decimals).

#### Answer

Factor ≈ 1.0141 per hour; ≈ +1.41% per hour

#### Solution

Per day g = 1.4. Per hour: 1.4^(1/24) ≈ 1.01412, so ≈ 1.0141, about +1.41% per hour (not 40/24 ≈ 1.67%).

### matha-a04-q04 | points 3 | outcome o4 | difficulty medium

#### Question

The activity of a radioactive sample decreases by 10% per day. Compute the half-life (halveringstijd) to 1 decimal.

#### Answer

≈ 6.6 days

#### Solution

g = 0.9 per day. Halving: 0.9ᵗ = ½ ⇔ t = ln(½)/ln(0.9) ≈ 0.6931/0.1054 ≈ 6.6 days.

### matha-a04-q05 | points 4 | outcome o5 | difficulty medium

#### Question

An exponentially growing quantity is N(1) = 600 at day 1 and N(4) = 4800.

a. Give the formula N(t).

b. Compute N(6).

#### Answer

a. N(t) = 300·2ᵗ; b. 19 200

#### Solution

a. In 3 days the quantity goes ×8: g³ = 4800/600 = 8 ⇔ g = 2. From N(1) = b·2 = 600: b = 300. So N(t) = 300·2ᵗ. Check: N(4) = 300·16 = 4800 ✓. b. N(6) = 300·64 = 19 200.

### matha-a04-q06 | points 3 | outcome o4 | difficulty easy

#### Question

An investment doubles every 5 years. Compute the growth percentage per year (1 decimal).

#### Answer

≈ +14.9% per year

#### Solution

g⁵ = 2 ⇔ g = 2^(1/5) ≈ 1.1487, so about +14.9% per year.

### matha-a04-q07 | points 4 | outcome o6 | difficulty hard

#### Question

The number of copies of a rumour in a class follows the saturation model N(t) = 500(1 − 0.7ᵗ) (t in weeks, N in copies).

a. Give the saturation level.

b. After how many weeks are there 400 copies? (1 decimal)

#### Answer

a. 500 copies; b. ≈ 4.5 weeks

#### Solution

a. As t → ∞, 0.7ᵗ → 0 and N → 500: the saturation level is 500 copies. b. 500(1 − 0.7ᵗ) = 400 ⇔ 0.7ᵗ = 1 − 4/5 = 1/5 ⇔ t = ln(1/5)/ln(0.7) ≈ 1.6094/0.3567 ≈ 4.5 weeks.

### matha-a04-q08 | points 4 | outcome o6 | difficulty hard

#### Question

A logistic model for the number of users of an app is N(t) = 1000/(1 + 9·0.9ᵗ) (t in days).

a. Compute N(0) and the saturation level.

b. After how many whole days is N = 500 first reached or exceeded? (Give the exact t from your equation, then the day.)

#### Answer

a. N(0) = 100, level 1000; b. exact t = ln(1/9)/ln(0.9) ≈ 20.9, so day 21

#### Solution

a. N(0) = 1000/(1 + 9) = 100; as t → ∞ the denominator → 1, so N → 1000. b. 1000/(1 + 9·0.9ᵗ) = 500 ⇔ 1 + 9·0.9ᵗ = 2 ⇔ 0.9ᵗ = 1/9 ⇔ t = ln(1/9)/ln(0.9) ≈ 20.85 days: first reached on day 21.

### matha-a04-q09 | points 3 | outcome o1 | difficulty medium

#### Question

€5 000 is deposited at 3% compound interest per year. Compute the capital after 8 years (in cents).

#### Answer

≈ €6 333.85

#### Solution

K(t) = 5000·1.03ᵗ. K(8) = 5000·1.03⁸ ≈ 5000 × 1.26677 ≈ €6 333.85.

### matha-a04-q10 | points 3 | outcome o7 | difficulty easy

#### Question

Two tables on 0 ≤ x ≤ 3:

A: x = 0,1,2,3 with y = 100, 112, 124, 136
B: x = 0,1,2,3 with y = 100, 110, 121, 133.1

For each, decide whether the behaviour is linear or exponential, and give the formula.

#### Answer

A linear: y = 100 + 12x; B exponential: y = 100·1.1ˣ

#### Solution

A: equal differences (+12 per step) ⇒ linear with slope 12 and intercept 100: y = 100 + 12x. B: equal ratios (×1.1 per step) ⇒ exponential with g = 1.1 and b = 100: y = 100·1.1ˣ.
