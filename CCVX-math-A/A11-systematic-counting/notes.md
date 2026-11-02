# A11 — Systematic counting: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Golden rule of this whole topic: **first decide whether the order matters and whether repetition is allowed** — that alone selects the formula.

## 1. Visualising

- Tree diagram (*boomdiagram*): stage-by-stage branching; count the end branches.
- Path diagram (*wegendiagram*): grid points with choice moves; counts per route add along the way.
- Grid (*rooster*): pairs of choices form a rectangle of cells.
- Contingency table (*kruistabel*): two properties with counts — feeds conditional probabilities in [A12](../A12-probability/).
- Venn diagram (*venndiagram*): overlapping sets; use |A ∪ B| = |A| + |B| − |A ∩ B|.

## 2. Multiplication and sum rules

- Multiplication rule (*vermenigvuldigingsregel*): "I **and** II" — independent stages multiply: 4 starters × 6 mains × 3 desserts = 72 menus.
- Sum rule (*somregel*): "I **or** II (but not both)" — disjoint cases add: menus with meat + menus with vegetarian, disjoint, add them.

## 3. With and without repetition

- With repetition: n choices per position, k positions: nᵏ (PIN codes: 10⁴).
- Without repetition: falling factorial n·(n−1)·…·(n−k+1) = n!/(n−k)! (podium of 3 from 8: 8·7·6 = 336).

## 4. Permutations and factorials

- Permutations (*permutaties*): rankings of distinct things where the **order matters**. All n! orders of n objects; of k out of n: n!/(n−k)!.
- n! = n·(n−1)·...·2·1, with 0! = 1.

## 5. Combinations

- Combinations (*combinaties*): selections where the **order does not matter**: C(n, k) = n!/(k!·(n−k)!), also written (n choose k).
- Property: C(n, k) = C(n, n−k) (choosing what you take equals choosing what you leave).
- Compute small ones by heart: C(5,2) = 10; C(6,3) = 20; C(10,3) = 120.

## 6. Pascal's triangle

- Row n (starting from row 0) contains C(n, 0), C(n, 1), …, C(n, n); each entry is the sum of the two above it.
- Counting letter sequences: the arrangements of AAABB... with a A-letters and b B-letters number C(a+b, a): e.g. 5 A's and 3 B's: C(8,3) = C(8,5) = 8!/(3!5!) = 56 — on row 8 of the triangle.

## 7. Combining techniques

- Multi-type orderings: arrangements of 3 A's, 4 B's, 5 C's: C(12,3)·C(9,4)·C(5,5) = C(12,3)·C(9,4) (place the A's, then the B's; the C's fill the rest). Value: 220 × 126 = 27 720.
- "At least one" often counts via the complement: 1 − none (see [A12](../A12-probability/)).
- Check by a second route when possible: the syllabus' own example shows C(12,3)·C(9,4) also equals C(12,5)·C(7,4).

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — tree/grid thinking

A cafeteria has 3 soups, 4 sandwiches and 2 drinks. How many full lunch combinations?

**Solution.** Multiplication rule: 3 × 4 × 2 = 24.

### Example 2 — without repetition

A team of 6 students elects a chair, a secretary and a treasurer (all different people). How many ways?

**Solution.** Order matters (different roles), no repetition: 6·5·4 = 120.

### Example 3 — combination

From 6 students, choose a delegation of 3 (no roles). How many ways?

**Solution.** Order irrelevant: C(6,3) = 20. Note the relationship with Example 2: 120/20 = 6 = 3! — each delegation can be arranged in 3! ways into the roles.

### Example 4 — letter sequences

How many different sequences can you make from the letters of KOKOS?

**Solution.** C(5,2)·C(3,2): choose positions for the two K's (10 ways), then for the two O's (3 ways): 30. (The S fills the last spot.)

### Example 5 — Venn diagram

In a class of 28 students, 15 do a sport and 12 play an instrument; 6 do both. How many do neither?

**Solution.** |A ∪ B| = 15 + 12 − 6 = 21, so 28 − 21 = 7 students do neither.
