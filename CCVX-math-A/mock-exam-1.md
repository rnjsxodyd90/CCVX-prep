# Mock exam 1 — CCVX Mathematics A (practice)

Original practice exam written for this prep. Nothing is copied from CCVX or CvTE exams.

- Time: 180 minutes. Total: 76 points over 4 problems.
- Grade: 1 + 9 × (points scored)/76, rounded to one decimal.
- Work algebraically. Round only when the question asks for it.
- No graphing calculator; a standard scientific calculator is allowed. The formula sheet printed below is the one of the real CCVX wiskunde A exam.
- Marking scheme: [mock-exam-1-marking-scheme.md](mock-exam-1-marking-scheme.md).

## Formula sheet (abbreviated print of the exam's formula list)

Quadratic formula: ax² + bx + c = 0 → x = (−b ± √(b² − 4ac))/(2a).

Differentiation: sum rule (f + g)′ = f′ + g′; product rule (f·g)′ = f′g + fg′; quotient rule (f/g)′ = (f′g − fg′)/g²; chain rule: k(x) = f(g(x)) → k′(x) = f′(g(x))·g′(x).

Logarithms: ᵍlog a + ᵍlog b = ᵍlog(ab); ᵍlog a − ᵍlog b = ᵍlog(a/b); ᵍlog(aᵖ) = p·ᵍlog a; ᵍlog a = ᵖlog(a)/ᵖlog(g).

Sequences: arithmetic: Sum = ½·(number of terms)·(first + last); geometric: Sum = (u_{l+1} − u_e)/(r − 1), r ≠ 1.

Probability: E(X + Y) = E(X) + E(Y); for independent X, Y: σ(X + Y) = √(σ²(X) + σ²(Y)); √n-law: E(S) = n·E(X), σ(S) = √n·σ(X); E(X̄) = E(X), σ(X̄) = σ(X)/√n. Binomial: P(X = k) = C(n,k)·pᵏ(1−p)ⁿ⁻ᵏ, E(X) = np, σ(X) = √(np(1−p)). Normal: Z = (X − μ)/σ. Critical values: α = 0.05: 1.645 (one-sided), 1.96 (two-sided); α = 0.01: 2.33 / 2.58.

## Problem 1 — The chocolate bar factory (20 points)

A chocolate factory has weekly demand q = 120 − 3p (q in thousands of bars, p in euros per bar), for 0 < p < 40. Weekly costs are K(q) = 10q + 600 (thousands of euros).

a. (3; matha-mock1-q01) Show that the weekly revenue satisfies R(p) = −3p² + 120p (thousands of euros).

b. (4; matha-mock1-q02) Express the weekly profit W(p) in terms of p (thousands of euros).

c. (5; matha-mock1-q03) Compute algebraically the price with maximal profit, and that maximal profit.

d. (4; matha-mock1-q04) For which prices does the factory avoid losses (W(p) ≥ 0)? Solve algebraically.

e. (4; matha-mock1-q05) The marginal cost is constant in this model. Give it (in euros per bar) and compute the price at which the *revenue* — not the profit — is maximal. Explain the difference between the two prices in one sentence.

## Problem 2 — The membership card (18 points)

A sports club's membership follows the model L(t) = 700·1.05ᵗ (members, t in years since the start, t ≥ 0).

a. (2; matha-mock1-q06) Compute L(0) and L(6) (whole members).

b. (3; matha-mock1-q07) Compute the doubling time of the model (1 decimal).

c. (4; matha-mock1-q08) The club hall fits 1300 members. Compute after how many years the model first exceeds that number (1 decimal).

Instead, the board assumes the hall binds growth and switches to the model M(t) = 1500/(1 + 1.5·(0.85)ᵗ).

d. (4; matha-mock1-q09) Compute M(0) and the saturation level, and compute after how many years the model passes 1200 members (1 decimal).

e. (5; matha-mock1-q10) Explain without computing M′ in full that M is increasing (use that the denominator stays positive and falls). Then compute M′(0) (2 decimals).

## Problem 3 — The sunflower seeds (18 points)

A seed packet states "at least 85% of the seeds germinate". A test gardener plants 100 seeds from one packet; X = the number that germinate.

a. (2; matha-mock1-q11) Explain why X is binomially distributed, and give the parameters under the packet's claim.

b. (3; matha-mock1-q12) Compute E(X) and σ(X) under the claim.

c. (4; matha-mock1-q13) Computing P(X = 85) for n = 100 is laborious. Instead compute the parallel smaller case: for n = 4, p = 0.85, compute P(X = 3) (4 decimals). Show the full formula.

The gardener actually counts 79 germinated seeds. He tests at α = 0.05, left-sided ("is the germination rate below the claim?"), using the normal approximation of the binomial test.

d. (4; matha-mock1-q14) Justify the approximation, compute the critical value of the rejection region, and give the conclusion for the outcome 79.

e. (5; matha-mock1-q15) The exceedance probability of the outcome "79 or fewer germinated seeds" is given as 0.0036. State in one precise sentence what this number means, and draw the conclusion of the test from it.

## Problem 4 — The health screening (20 points)

In a screening program, blood values of healthy people are normally distributed with μ_H = 110 (mg/dL) and σ_H = 20; values of carriers of the condition are normally distributed with μ_C = 150 and σ_C = 20. A person is *flagged* when their measured value exceeds the threshold g.

a. (4; matha-mock1-q16) The program first sets g = 130. Estimate with the rules of thumb: the percentage of healthy people who are flagged, and the percentage of carriers who are NOT flagged.

b. (5; matha-mock1-q17) Instead, the threshold is chosen so that exactly 2.5% of healthy people are flagged. Compute g.

A random person from the population is tested; 4% of the population carries the condition. Use g = 150.

c. (5; matha-mock1-q18) Fill in the 2 × 2 table with whole counts per 10 000 people (flagged vs not flagged), and compute P(carrier given flagged) (1 decimal %).

d. (6; matha-mock1-q19) Groups of 9 healthy employees are screened via their group mean; its standard deviation is σ(X̄) = 20/√9 ≈ 6.67. Test at α = 0.05 right-sided against "the group's mean level is elevated": H₀: μ = 110. Compute the critical value and draw the conclusion for a group mean of 118.4.
