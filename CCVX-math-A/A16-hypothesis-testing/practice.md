# A16 — Hypothesis testing: practice

Eight original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md). Critical multipliers (formula sheet): 1.645 / 1.96 at α = 0.05 (one/two-sided), 2.33 / 2.58 at α = 0.01.

### matha-a16-q01 | points 3 | outcome o1 | difficulty easy

#### Question

For each situation, name the type of test and formulate H₀:

a. A grower claims 3% of apples are bruised; a check counts bruises in 400 apples.

b. A machine should fill bottles at 1000 mL; inspectors measure the contents of 36 bottles (machine σ known).

#### Answer

a. Proportion test, H₀: p = 0.03; b. mean test, H₀: μ = 1000

#### Solution

a. Counting outcomes among n = 400 → proportion test (binomial): H₀: p = p₀ = 0.03. b. Measuring a quantity with known σ and testing a mean → normal mean test: H₀: μ = μ₀ = 1000.

### matha-a16-q02 | points 3 | outcome o2 | difficulty easy

#### Question

Give the alternative hypothesis and the sidedness:

a. "The producer claims at least 90% of the seeds germinate; the buyer suspects fewer germinate."

b. "A newspaper column says the sugar content is 12 g; a lab wants to check whether it has changed."

c. "Marketing claims the battery lasts longer than 20 hours."

#### Answer

a. H₁: p < 0.9, left-sided; b. H₁: μ ≠ 12, two-sided; c. H₁: μ > 20, right-sided

#### Solution

a. The suspicion goes downward: left-sided. b. An undirected "changed?" question: two-sided. c. The claim's direction is upward: right-sided.

### matha-a16-q03 | points 3 | outcome o6 | difficulty easy

#### Question

A test is right-sided with α = 0.05, and the exceedance probability of the sample outcome is given as 0.042.

a. What is the conclusion?

b. And if the level had been α = 0.01?

#### Answer

a. Reject H₀ at 5%; b. do not reject at 1%

#### Solution

Compare the given p-value with the level: a. 0.042 ≤ 0.05: reject H₀ — at 5% significance there is sufficient evidence against H₀. b. 0.042 > 0.01: insufficient evidence at the 1% level — H₀ is kept (not "proven").

### matha-a16-q04 | points 4 | outcome o5 | difficulty medium

#### Question

A lamp type should emit μ = 75 W-equivalents with σ = 10 (per lamp). Light output below that is underperformance. A sample of 25 lamps has mean output 72.

a. Set up the test (type, H₀, H₁, level α = 0.05).

b. Compute the critical value and conclude.

#### Answer

a. Left-sided mean test, H₀: μ = 75; b. g = 71.71; 72 > 71.71, so H₀ is kept

#### Solution

a. Normal mean test, left-sided: H₀: μ = 75, H₁: μ < 75, α = 0.05. b. σ(X̄) = 10/√25 = 2; critical value g = 75 − 1.645·2 = 71.71. The sample mean 72 > 71.71, so the outcome is NOT in the rejection region: insufficient reason at 5% to call the lamps underperforming.

### matha-a16-q05 | points 4 | outcome o5 | difficulty medium

#### Question

A packager claims mean packet mass μ = 500 g with σ = 12 g. A sample of 36 packets has mean 497 g. Test two-sided at α = 0.05 (critical values and conclusion).

#### Answer

Region [496.08, 503.92]; 497 lies inside: H₀ is kept

#### Solution

Mean test, two-sided, α = 0.05: σ(X̄) = 12/6 = 2; critical values 500 ± 1.96·2: g_left = 496.08, g_right = 503.92. Sample mean 497 lies inside the region: insufficient reason at the 5% level to doubt μ = 500 g.

### matha-a16-q06 | points 5 | outcome o3 | difficulty hard

#### Question

A baby registry counts 80 births in a month at a hospital, of which 48 are boys. Test at α = 0.05 whether the hospital's proportion of boys exceeds 50% (right-sided), using the normal approximation of the binomial test. Justify the approximation.

#### Answer

g ≈ 47.36; 48 > 47.36: reject H₀ — sufficient reason at 5% to believe the boy proportion exceeds 50%

#### Solution

Proportion test, right-sided: H₀: p = 0.5, H₁: p > 0.5. Justification: np₀ = 40 ≥ 5, so the normal formulas apply; μ_T = 40, σ_T = √(80·0.5·0.5) = √20 ≈ 4.4721. Critical value: g = 40 + 1.645·4.4721 ≈ 47.36. The outcome 48 > 47.36: in the rejection region — reject H₀. At the 5% level there is sufficient reason to believe the hospital's proportion of newborn boys exceeds 50%.

### matha-a16-q07 | points 5 | outcome o5 | difficulty medium

#### Question

A cereal brand complaints desk receives reports that the 45 g bars are underfilled. Bar mass is known to fluctuate with σ = 1.2 g. A sample of 9 bars has mean 44.4 g.

a. Perform the full test at α = 0.05.

b. The shop owner counters with "then test at 0.01". Does that change the conclusion?

#### Answer

a. g ≈ 44.34; 44.4 > 44.34: H₀ kept; b. g ≈ 44.07: still kept — the scale tips the same way at 1%

#### Solution

a. Mean test, left-sided (suspicion of *under*filling): H₀: μ = 45, H₁: μ < 45. σ(X̄) = 1.2/3 = 0.4; critical value g = 45 − 1.645·0.4 = 44.342 ≈ 44.34. Outcome 44.4 > 44.34: NOT in the rejection region — insufficient reason at 5% to support the complaint. b. At 0.01: g = 45 − 2.33·0.4 = 44.068 ≈ 44.07; still 44.4 > 44.07: still kept — the conclusion is stable here.

### matha-a16-q08 | points 4 | outcome o4 | difficulty medium

#### Question

For a right-sided test, the exceedance probability of the measured outcome is given as 0.028.

a. Researcher A tests at α = 0.05. Conclusion?

b. Researcher B tests at α = 0.01. Conclusion?

c. What does this dependency say about the role of α?

#### Answer

a. Reject H₀; b. keep H₀; c. the choice of α decides how much evidence counts as sufficient — a stricter α demands stronger evidence

#### Solution

a. 0.028 ≤ 0.05: reject H₀. b. 0.028 > 0.01: insufficient evidence at 1% — keep H₀. c. The significance level α is the chosen false-alarm margin: lowering α makes rejection harder, so the same data can clear one bar and not the other. The report should always state the α used — as in this answer.
