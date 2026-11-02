# A12 — Probability: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Keep probabilities as exact fractions while computing; round only at the end (and say "≈").

## 1. Random experiments and events

- A random experiment (*toevalsexperiment*) has known possible outcomes but an unknown actual result (die rolls, lotteries, arrivals).
- An event (*gebeurtenis*) is a named selection of the outcomes: "at least one six", "sum 7". Events get capital letters: A, B, G.

## 2. Laplace probability

- When all outcomes are equally likely: P(G) = (number of favourable outcomes)/(total number of outcomes) — the *kansdefinitie van Laplace*.
- Most work is counting: [A11](../A11-systematic-counting/) does systems; by hand for dice and small cases.
- Two dice: 36 equally likely outcomes. P(sum 7) = 6/36 = 1/6 (6 pairings); P(sum 12) = 1/36.

## 3. Empirical probability

- With no symmetry argument, use the relative frequency: P(A) ≈ (count of A)/(number of repeats), from observation. It approaches the true probability as the number of repetitions grows (the empirical law of large numbers).

## 4. Probability trees

- Multi-stage experiments: each branch multiplies, paths add. Fill the probabilities at each branch conditional on the path so far.
- Replacement vs no replacement: without replacement the second-stage probabilities change (denominators drop). Markedly binomial := with replacement or large population ([A14](../A14-binomial-distribution/)).

## 5. Conditional probability

- P(A given B) (*voorwaardelijke kans*) = P(A and B)/P(B). From a contingency table: stay inside the B-row (or column) and take the fraction.
- Example: table of test results vs disease status; given "test positive", the probability of the disease rarely equals the test's headline accuracy — compute from the cells.

## 6. Independence

- Independent: P(A given B) = P(A) — knowing B tells nothing about A.
- Product rule for independent experiments: P(G₁ and G₂) = P(G₁)·P(G₂). (Throws of a die, draws with replacement.)
- Test independence numerically from a table: compare P(A given B) with P(A).

## 7. The sum rule and the complement

- Mutually exclusive events (*elkaar uitsluitende gebeurtenissen*): P(G₁ or G₂) = P(G₁) + P(G₂). (In general: P(G₁ ∪ G₂) = P(G₁) + P(G₂) − P(G₁ ∩ G₂).)
- Complement rule: P(not G) = 1 − P(G). The route for "at least one": P(at least one six in 4 rolls) = 1 − (5/6)⁴.

## 8. Compound experiments

- Decide first: tree (sequence with memory), table (two characteristics), or combinatorics+cases (symmetric complex).
- Mixed use: roll a die and a sum of two cards — first list the sample space or the branches, then count or multiply accordingly.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — Laplace on two dice

Compute P(sum = 9) with two fair dice.

**Solution.** 36 equally likely outcomes; favourable: (3,6), (4,5), (5,4), (6,3) = 4. P = 4/36 = 1/9.

### Example 2 — urn without replacement

An urn holds 4 red and 6 blue marbles. You draw two without replacement. Compute P(both red) and P(different colours).

**Solution.** Total ordered draws: 10·9 = 90. Both red: 4·3 = 12 → 12/90 = 2/15. Different colours: red then blue (4·6 = 24) or blue then red (6·4 = 24): 48/90 = 8/15. (Check: same colour both ways: 12 + (6·5) = 42; 42 + 48 = 90 ✓.)

### Example 3 — conditional from a table

A clinic tests patients: the table shows 8% of patients have condition C; of those, 90% test positive; of those without C, 10% test positive (per 1000 patients: 72 true positives, 8 false negatives, 92 false positives, 828 true negatives). Compute P(C given positive).

**Solution.** Inside the positive column: 72/(72 + 92) = 72/164 ≈ 0.439. Despite a "90% accurate" test, fewer than half of the positives have C — the base rate dominates (the classic base-rate lesson).

### Example 4 — independence check

A die outcome A = "even", B = "at most 3". P(A) = 1/2; P(A given B) = P({2}/{1,2,3}) = 1/3 ≠ 1/2: dependent. But A = "even", C = "at least 5"? P(A given C) = P({6}/{5,6}) = 1/2 = P(A): independent.

### Example 5 — complement for "at least one"

You draw 3 balls from a bag with 5 white and 5 black balls (without replacement). Compute P(at least one black).

**Solution.** Complement: P(no black = all white) = C(5,3)/C(10,3) = 10/120 = 1/12. So P = 1 − 1/12 = 11/12 ≈ 0.917.
