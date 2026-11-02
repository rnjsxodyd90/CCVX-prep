# A13 — Random variables: practice

Nine original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o8 match the numbered learning outcomes in [README.md](README.md).

### matha-a13-q01 | points 4 | outcome o3 | difficulty medium

#### Question

Compute the expectation and the standard deviation of X = the number of eyes of one fair die (exact form plus 2 decimals).

#### Answer

E(X) = 3.5; σ(X) = √(35/12) ≈ 1.71

#### Solution

E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6 = 3.5. Variance shortcut: E(X²) = (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6 ≈ 15.1667; Var = 91/6 − 3.5² = 91/6 − 147/12 = 182/12 − 147/12 = 35/12. σ = √(35/12) ≈ 1.7078 ≈ 1.71.

### matha-a13-q02 | points 4 | outcome o2 | difficulty medium

#### Question

A spinner pays out according to X: 1 euro with probability 0.5, 2 euros with probability 0.3, 5 euros with probability 0.2.

a. Give the probability distribution table and check it.

b. Compute E(X) and σ(X) (2 decimals).

#### Answer

b. E(X) = 2.10; σ(X) ≈ 1.51

#### Solution

a. x: 1, 2, 5 with P: 0.5, 0.3, 0.2; the probabilities add to 1 ✓. b. E(X) = 0.5 + 0.6 + 1.0 = 2.10. E(X²) = 0.5·1 + 0.3·4 + 0.2·25 = 0.5 + 1.2 + 5.0 = 6.7; Var = 6.7 − 2.1² = 6.7 − 4.41 = 2.29; σ = √2.29 ≈ 1.51.

### matha-a13-q03 | points 4 | outcome o3 | difficulty medium

#### Question

A lottery ticket costs €3. It pays €0 with probability 0.6, €5 with probability 0.3 and €10 with probability 0.1. Is the game fair? Compute the expected profit per ticket.

#### Answer

Not fair; expected profit −€0.50 per ticket

#### Solution

E(payout) = 0·0.6 + 5·0.3 + 10·0.1 = 1.5 + 1.0 = €2.50 < €3 cost: not fair. Expected profit = 2.50 − 3 = −€0.50 per ticket.

### matha-a13-q04 | points 3 | outcome o3 | difficulty easy

#### Question

Given E(X) = 4 and σ(X) = 1.5. Compute E(3X − 2) and σ(3X − 2).

#### Answer

10; 4.5

#### Solution

E(3X − 2) = 3·E(X) − 2 = 10. σ(3X − 2) = |3|·σ(X) = 4.5 (a shift does not change the spread).

### matha-a13-q05 | points 3 | outcome o6 | difficulty easy

#### Question

Two independent positioning systems have σ(X) = 0.8 mm and σ(Y) = 0.5 mm. Compute the standard deviation of the combined error X + Y.

#### Answer

√0.89 ≈ 0.943 mm

#### Solution

Independent → variances add: σ(X + Y) = √(0.8² + 0.5²) = √(0.64 + 0.25) = √0.89 ≈ 0.943 mm.

### matha-a13-q06 | points 4 | outcome o6 | difficulty medium

#### Question

X has σ(X) = 5. X₁ and X₂ are independent copies of X. Compute σ(2X) and σ(X₁ + X₂), and explain why they differ.

#### Answer

σ(2X) = 10; σ(X₁ + X₂) = √50 ≈ 7.07

#### Solution

σ(2X) = 2·σ(X) = 10. σ(X₁ + X₂) = √(25 + 25) = √50 = 5√2 ≈ 7.07. Doubling one fixed outcome doubles the spread; averaging two independent outcomes partly cancels — hence the √n-law's smaller spread.

### matha-a13-q07 | points 4 | outcome o7 | difficulty medium

#### Question

A cherry has mean mass 12 g with standard deviation 1.5 g. A box holds 36 independent cherries.

a. Compute the expectation and the standard deviation of the total mass S of the box.

b. Compute the standard deviation of the mean mass per cherry in a box.

#### Answer

a. E(S) = 432 g, σ(S) = 9 g; b. 0.25 g

#### Solution

a. √n-law: E(S) = 36·12 = 432 g; σ(S) = √36·1.5 = 9 g. b. σ(X̄) = σ/√n = 1.5/6 = 0.25 g.

### matha-a13-q08 | points 4 | outcome o2 | difficulty medium

#### Question

Two fair coins are tossed; X = the number of heads.

a. Give the probability distribution of X.

b. Compute E(X) and σ(X).

#### Answer

a. P(0) = ¼, P(1) = ½, P(2) = ¼; b. E(X) = 1, σ(X) = √0.5 ≈ 0.71

#### Solution

a. Outcomes TT, TH, HT, HH (¼ each): X = 0 with ¼, X = 1 with ½, X = 2 with ¼. b. E(X) = 0·¼ + 1·½ + 2·¼ = 1. E(X²) = ½ + 4·¼ = 1.5; Var = 1.5 − 1 = 0.5; σ = √0.5 = ½√2 ≈ 0.71.

### matha-a13-q09 | points 4 | outcome o8 | difficulty hard

#### Question

Bags of crisps are filled with μ = 300 g and σ = 8 g per bag. A pallet holds 50 independent bags.

a. Compute E(S) and σ(S) for the total mass S.

b. Estimate P(S < 14 887 g) with the 68/95 rule of thumb (state your assumption).

#### Answer

a. E(S) = 15 000 g, σ(S) = √50·8 ≈ 56.6 g; b. ≈ 2.5%

#### Solution

a. E(S) = 50·300 = 15 000 g; σ(S) = √50·8 ≈ 56.57 g. b. 14 887 ≈ 15 000 − 2·56.5 = μ − 2σ. Assuming S is approximately normal ([A15](../A15-normal-distribution/)), the 95% rule puts 2.5% of the area beyond the lower 2σ boundary: P(S < 14 887) ≈ 2.5%.
