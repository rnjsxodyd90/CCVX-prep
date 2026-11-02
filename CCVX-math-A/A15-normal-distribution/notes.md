# A15 — The normal distribution: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. In this exam you use the rules of thumb and the standardisation formula from the formula sheet — not a Z-table (it is not printed; critical values for testing are in [A16](../A16-hypothesis-testing/)).

## 1. The Gaussian curve

- The normal distribution (*normale verdeling*) models a frequency distribution with the bell-shaped Gaussian curve (*Gausskromme*): symmetric about the mean μ, inflection points at μ − σ and μ + σ.
- Parameters: μ (mean = expectation) and σ (standard deviation).
- A histogram resembling a bell motivates the model; the total area under the curve is 1.

## 2. The rules of thumb (*vuistregels*)

- 50% of the observations lies below μ (symmetry).
- 68% lies between μ − σ and μ + σ → 16% beyond each side.
- 95% lies between μ − 2σ and μ + 2σ → 2.5% beyond each side.
- Extending to 3σ (99.7%): 0.15% beyond each side.

Use these directly: examination questions are designed so the boundaries hit these percentages exactly.

## 3. Computing percentages and boundary values

- Read-off pattern: convert the question to "beyond μ + kσ" or "between" forms, then the rules.
- Example: baby birth weights N(μ = 3.4 kg, σ = 0.5 kg): P(above 4.4 kg) = P(above μ + 2σ) = 2.5%; P(between 2.9 and 3.9 kg) = 68%.

## 4. Recovering μ and/or σ from percentages

Two percentage statements give two equations at σ-half-widths; solve the system:

- "84% weighs more than 80 kg" → 16% below 80 → 80 = μ − σ.
- "2.5% weighs more than 110 kg" → 110 = μ + 2σ.
- Subtract: 3σ = 30 → σ = 10 and μ = 90.

Know the mapping: 2.5% ↔ μ ± 2σ; 16% ↔ μ ± σ; 0.15% ↔ μ ± 3σ (and 97.5%, 84%, 99.85% as their complements).

## 5. The standardisation (formula sheet)

Z = (X − μ)/σ is standard normal, and P(X < g) = P(Z < (g − μ)/σ). You meet this mainly in testing ([A16](../A16-hypothesis-testing/)) where the given critical values (1.645, 1.96, 2.33, 2.58) are exactly the z-values for the standard normal's 5% and 1% boundaries.

## 6. Normal approximation of the binomial distribution

- For a binomial X with **np ≥ 5**, approximate with a normal Y having μ = np and σ = √(np(1−p)).
- Continuity correction (*continuïteitscorrectie*): the discrete bar at k is approximated by the strip up to its middle: P(X ≤ k) ≈ P(Y < k + ½); P(X ≥ k) ≈ P(Y > k − ½).
- Here too the exam picks boundaries at rule-of-thumb positions, so a calculation closes cleanly.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — rule-of-thumb reading

Reaction times in a game are N(220 ms, 15 ms). Which percentage of players reacts (a) faster than 190 ms; (b) between 190 and 250 ms; (c) faster than 175 ms?

**Solution.** Watch the wording: "faster" means *shorter* time. (a) 190 = 220 − 2·15 = μ − 2σ, and X < μ − 2σ covers 2.5% — so 2.5% of players. (b) 190 and 250 are μ − 2σ and μ + 2σ: 95% between them. (c) 175 = μ − 3σ: only 0.15% (99.85% is slower).

### Example 2 — one equation

2.5% of eggs are below 50 g, and μ = 58 g. Compute σ.

**Solution.** 2.5% below the mean region is the left 2σ tail: 50 = μ − 2σ ⇔ 2σ = 8 ⇔ σ = 4 g. (If the statement had been "5% below", the rule-of-thumb menu would not suffice; you would use z = 1.645 from the testing table of [A16](../A16-hypothesis-testing/): σ = 8/1.645 ≈ 4.86 g.)

### Example 3 — recovering both parameters

In a herd, 16% of cows give more than 30 L per day and 2.5% give more than 34 L. Compute μ and σ.

**Solution.** 16% above → 30 = μ + σ; 2.5% above → 34 = μ + 2σ. Subtract: σ = 4; then μ = 26.

### Example 4 — binomial approximation with continuity correction

A survey polls 400 people, each with p = 0.5 for "yes". X = the number of yes-votes. Estimate P(X ≤ 180) with the normal approximation.

**Solution.** np = 200 ≥ 5, so the normal approximation applies: μ = 200, σ = √(400·0.5·0.5) = 10. Continuity correction: P(X ≤ 180) ≈ P(Y < 180.5). Standardise: z = (180.5 − 200)/10 ≈ −1.95 ≈ −2: the lower 2σ tail, so ≈ 2.5%. (The exact binomial value is about 3.3% — close enough for a rules-of-thumb estimate; the exam designs its numbers to land exactly on these boundaries.)
