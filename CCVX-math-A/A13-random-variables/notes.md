# A13 — Random variables: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. The random variable

- A random variable (*toevalsvariabele*) X attaches a number to each outcome of a random experiment: eyes of a die, number of broken light bulbs in a box, payout of a scratch card.
- Notation: P(X = 4) = the probability that X takes the value 4. The whole table of P(X = xᵢ) over all xᵢ is the probability distribution (*kansverdeling*); the probabilities always add to 1 — check this.

## 2. Expectation

- Expectation (*verwachtingswaarde*): E(X) = Σ xᵢ·P(X = xᵢ) — the long-run average per experiment.
- Interpretation: E(X) need not be a possible value (a die: E = 3.5). For a fair game, E(payout) = stake.
- Linearity is free (formula sheet): E(X + Y) = E(X) + E(Y) **always**, even for dependent variables. And E(aX + b) = a·E(X) + b.

## 3. Standard deviation

- σ(X) = √(Σ (xᵢ − E(X))²·P(X = xᵢ)) — the typical distance of X from its expectation. Also computed as √(E(X²) − (E(X))²) (variance = mean of squares − square of mean).
- For a small distribution, exam work is by hand; the statistics function of the calculator is allowed (weighted with probabilities as frequencies).
- Rules: Var(aX + b) = a²·Var(X), so σ(aX + b) = |a|·σ(X).

## 4. Sum of two random variables

- E(X + Y) = E(X) + E(Y) (always).
- σ(X + Y) = √(σ²(X) + σ²(Y)) **only for independent** X and Y: variances add, NOT standard deviations (formula sheet). Doubling: Var(2X) = 4·Var(X) — different from Var(X + X) = 2·Var(X) for independent copies! A classic trap.

## 5. The √n-law

For n independent repetitions of the same experiment, with sum S and mean X̄ (formula sheet):

- E(S) = n·μ, σ(S) = √n·σ;
- E(X̄) = μ, σ(X̄) = σ/√n.

Interpretation: averages are √n times *more predictable* — that is why measurements are repeated. n = 16 gives σ/4 for the mean.

## 6. Interpreting with the 68/95 rules

- When a sum or mean of many repetitions is approximately normal ([A15](../A15-normal-distribution/)), use the rules of thumb with these expectation and standard deviation to reason about outcomes: "the total of 25 bottles... E(S) = 25·μ, σ(S) = 5·σ_B — the chance to deviate hugely is small."

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — small distribution

X takes 0, 1, 2 with probabilities 0.4, 0.4, 0.2. Compute E(X) and σ(X).

**Solution.** E(X) = 0·0.4 + 1·0.4 + 2·0.2 = 0.8. Variance: E(X²) = 0 + 0.4 + 4·0.2 = 1.2; Var = 1.2 − 0.64 = 0.56; σ = √0.56 ≈ 0.748.

### Example 2 — a fair game?

A scratch card costs €2. It pays €0 with probability 0.70, €3 with 0.25 and €10 with 0.05. Fair?

**Solution.** E(payout) = 0·0.70 + 3·0.25 + 10·0.05 = 0.75 + 0.50 = €1.25 < €2. Not fair; expected loss €0.75 per card.

### Example 3 — sum of two dice... sum of two independent machines' errors

Independent: σ(X) = 3, σ(Y) = 4 (mm). Total error Z = X + Y: σ(Z) = √(9 + 16) = 5 mm.

### Example 4 — doubling trap

X has σ = 2. Compare σ(2X) and σ(X₁ + X₂) for independent copies X₁, X₂.

**Solution.** σ(2X) = 2·σ(X) = 4. σ(X₁ + X₂) = √(4 + 4) = 2√2 ≈ 2.83. Different: scaling up the same outcome doubles the spread; summing two independent copies spreads less.

### Example 5 — √n-law in context

One serving of yoghurt has mean 150 g with σ = 6 g. A breakfast pack of 4 servings: S has E(S) = 600 g and σ(S) = √4·6 = 12 g. The mean mass per serving of the pack has σ = 6/2 = 3 g.
