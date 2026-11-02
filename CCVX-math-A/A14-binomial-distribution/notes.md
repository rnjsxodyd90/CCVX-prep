# A14 — The binomial distribution: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics.

## 1. Recognising a binomial experiment

A *binomiaal kansexperiment* requires all four:

1. a fixed number n of repetitions;
2. each repetition (a *Bernoulli-experiment*) has two outcomes: **success** or **failure**;
3. each repetition has the SAME success probability p;
4. the repetitions are independent.

Then X = the number of successes is binomially distributed with parameters n and p.

NOT binomial: drawing without replacement from a small population (p changes), trials affecting each other, a variable number of trials, more than two outcomes unless you group them into success/failure.

## 2. The single-probability formula

From the formula sheet: P(X = k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ.

- Logic: any specific sequence with k successes has probability pᵏ(1−p)ⁿ⁻ᵏ, and C(n,k) counts the orders — that is the counting number of [A11](../A11-systematic-counting/) reappearing.
- Compute exactly as a simplified fraction where the numbers allow, otherwise to 4 decimals.

## 3. Cumulative probabilities — the exam's limit

- P(X ≤ k), P(X ≥ k), P(k ≤ X ≤ l) are sums of single probabilities, and the syllabus explicitly limits you to **sums of at most 3 terms** without a table: P(X ≤ 1) = P(X = 0) + P(X = 1).
- The complement route lets small-k questions fit that limit: P(X ≥ 4) = 1 − P(X ≤ 3) — but if P(X ≤ 3) already needs 4 terms, the exam will give the value or choose smaller numbers.
- For larger n use the normal approximation where allowed ([A15](../A15-normal-distribution/), condition np ≥ 5).

## 4. Expectation and standard deviation

- E(X) = n·p. Interpretation: on average np successes.
- σ(X) = √(n·p·(1−p)).
- The relative spread σ/n shrinks like 1/√n: a bigger experiment is proportionally more predictable.

## 5. Model checks and boundaries

- Always write the justification sentence first: "This is binomial with n = … and p = … because …" — it carries points.
- If p changes (without replacement), state it and use the hypergeometric-style counting of [A12](../A12-probability/) instead — expected at the recognition level only: explicitly saying "not binomial because …" is itself an answer.

## 6. Contexts

- Quality control: n sampled items, each defect with probability p.
- Genetics: n offspring, each with trait probability p.
- Games and surveys: scores, correct answers, "yes"-voters.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — the full listing

A small factory packs bulbs; 5% are defect (p = 0.05). A box of 20 is checked; X = the number of defects. E(X), σ(X), and P(X = 0), P(X = 1), P(X ≤ 2) (4 decimals).

**Solution.** Binomial with n = 20, p = 0.05: E(X) = 20·0.05 = 1; σ = √(20·0.05·0.95) = √0.95 ≈ 0.9747. Powers: 0.95²⁰ ≈ 0.3585, so 0.95¹⁹ ≈ 0.3774 and 0.95¹⁸ ≈ 0.3972. P(X = 0) = 0.95²⁰ ≈ 0.3585. P(X = 1) = 20·0.05·0.95¹⁹ ≈ 0.3774. P(X = 2) = C(20,2)·0.05²·0.95¹⁸ = 190·0.0025·0.3972 ≈ 0.1887. Then P(X ≤ 2) ≈ 0.3585 + 0.3774 + 0.1887 = 0.9246 — three terms, within the exam's limit.

### Example 2 — "at least one" via the complement

A player guesses the correct side in 4 penalty kicks independently (p = 0.5 each). P(at least one correct)? Binomial, n = 4, p = 0.5: 1 − P(0) = 1 − (0.5)⁴ = 1 − 1/16 = 15/16.

### Example 3 — not binomial

From a class of 10 students (4 left-handed), 3 are chosen without replacement; X = number of left-handers. Binomial?

**Solution.** No: the probabilities change between draws without replacement (after drawing a left-hander, 3/9 remain, not 4/10). Use probability trees or combinations instead: P(X = 1) = [C(4,1)·C(6,2)]/C(10,3) = 4·15/120 = 0.5.

### Example 4 — expectation comparison

Two machines: A produces with 2% defects (n = 100 daily), B with 1.5% (n = 150). Which has the larger expected number of defects per day? Which the larger σ?

**Solution.** E_A = 2, σ_A = √(100·0.02·0.98) = √1.96 = 1.4. E_B = 2.25, σ_B = √(150·0.015·0.985) = √2.216 ≈ 1.49. B expects more defects and more spread.
