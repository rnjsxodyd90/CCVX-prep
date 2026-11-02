# Mock exam 2 — CCVX Mathematics A (practice)

Original practice exam written for this prep. Nothing is copied from CCVX or CvTE exams.

- Time: 180 minutes. Total: 76 points over 4 problems.
- Grade: 1 + 9 × (points scored)/76, rounded to one decimal.
- Work algebraically. Round only when the question asks for it.
- No graphing calculator; a standard scientific calculator is allowed. The formula sheet is the same as in mock exam 1 (and as in the real exam).
- Marking scheme: [mock-exam-2-marking-scheme.md](mock-exam-2-marking-scheme.md).

## Problem 1 — The second-hand car (18 points)

Mr. Smit buys a used car for €18 000. Its value follows V(t) = 18 000·0.82ᵗ (euros, t in years since purchase).

a. (2; matha-mock2-q01) Compute the yearly loss in percentage, and the value after 2 years (whole euros).

b. (4; matha-mock2-q02) Compute the halving time of the model (1 decimal, in years).

c. (4; matha-mock2-q03) After how many years is the car worth €5000? (1 decimal)

d. (4; matha-mock2-q04) Mr. Smit hopes the value never falls below €14 000 within 3 years. Compute the "3-year value guarantee" V(3) and state whether his hope holds (whole euros).

e. (4; matha-mock2-q05) He sells the car at t = 4. The buyer argues: "The value drops by 18% every year, so after 5 years it is worth 10% of the price." Correct this mistake and compute the value after 5 years as a percentage of the purchase price (1 decimal).

## Problem 2 — The day length (18 points)

The day length D (hours) in a Dutch city is modelled by

D(t) = 12 + 4.5·sin(2π·(t − 80.75)/365),   t in days, t = 0 on 1 January.

a. (2; matha-mock2-q06) Give the equilibrium level, amplitude, period and the extreme day lengths.

b. (3; matha-mock2-q07) On which day number t (exact value, then the day) does the day length rise through its mean value?

c. (4; matha-mock2-q08) Compute the day length on day t = 263.25 (exact), and describe what that moment is known for in the year.

d. (4; matha-mock2-q09) Using symmetry, give all t in the year with the day length exactly at its minimum.

In reality the longest day is 21 June (day 172).

e. (5; matha-mock2-q10) Show that the model's maximum also falls near t = 172, and compute exactly at which t the model's maximum lies.

## Problem 3 — The yoghurt line (18 points)

A yoghurt line fills cups with μ = 125 g and σ = 2 g per cup. A multipack has 4 cups; cup masses are independent; the total mass T of a multipack is what the consumer pays for.

a. (3; matha-mock2-q11) Compute E(T) and σ(T).

b. (4; matha-mock2-q12) The label promises "at least 500 g per multipack" — which is E(T) exactly. (b1) Compute P(T < 500 g), then (b2) estimate P(T < 492 g): work out how many σ(T) below the mean this is and use the rules of thumb.

c. (4; matha-mock2-q13) Compute the percentage of single cups below 121 g.

d. (3; matha-mock2-q14) Consider the mean mass per cup within a multipack as a random variable: compute its expectation and standard deviation, and explain with the √n-law why quality control uses means of batches instead of single items.

e. (4; matha-mock2-q15) An inspector weighs 25 cups: their mean is 124.1 g. Test at α = 0.01 left-sided ("is the line underfilling?"). Compute the critical value and conclude.

## Problem 4 — The exit poll (22 points)

For an election, party X's support is claimed to be p = 0.34 of voters. A pollster interviews n = 250 randomly chosen voters; the number of supporters found is binomially distributed with n = 250, p = 0.34.

a. (2; matha-mock2-q16) Confirm with the condition that the normal approximation may be used, and give μ and σ for the count.

b. (4; matha-mock2-q17) Estimate P(the count is at least μ + 2σ) with the normal approximation and the rules of thumb, using the continuity correction.

The actual count is 71 supporters. The pollster tests at α = 0.05 left-sided whether the support is *below* 34%.

c. (5; matha-mock2-q18) Compute the critical value of the rejection region and conclude.

An exit-poll agency wants the standard deviation of a *proportion* X̄ = count/n (for this n = 250 poll) to be at most 0.015.

d. (4; matha-mock2-q19) Compute σ(X̄) exactly (p = 0.34). Then compute, using the √n-law, from which sample size n′ the standard deviation would drop below 0.015 — exact computation, and round up.

The poll also asks a yes/no question on a second topic; of 250 respondents, 138 say yes.

e. (7; matha-mock2-q20) Test at α = 0.05, two-sided, whether the yes-proportion differs from 50% (H₀: p = 0.5): compute μ, σ, the two critical values, and conclude. State the conclusion in a full sentence.
