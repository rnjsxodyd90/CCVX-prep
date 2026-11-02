# A8 — Sequences: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. In this syllabus terms are usually indexed from u₀ (sometimes from u₁ — the sum formulas use first index e and last index l, which covers both).

## 1. Direct and recursive formulas

- A sequence (*rij*) u₀, u₁, u₂, … comes in two standard descriptions:
  - Direct formula (*directe formule*): u_n as a function of n, e.g. u_n = 3·2ⁿ. Fast for any single term.
  - Recursive formula (*recursieve formule*): u_{n+1} as a function of u_n plus the start value, e.g. u_{n+1} = 2u_n + 3 with u₀ = 1. Fast for stepping; weak for jumping to u₁₀₀.
- Converting recursive → direct is the standard exam task for the two basic types below.

## 2. The arithmetic sequence

- Arithmetic sequence (*rekenkundige rij*): constant difference between successive terms. Linear growth!
- Recursive: u_{n+1} = u_n + a. Direct: u_n = u_0 + a·n (or u_n = u_1 + a·(n − 1)).
- Recognition: the direct formula is linear in n: u_n = 5 + 3n ⇔ start 5, step 3.

## 3. The geometric sequence

- Geometric sequence (*meetkundige rij*): constant ratio between successive terms — exponential growth in steps ([A04](../A04-exponential-growth/)).
- Recursive: u_{n+1} = r·u_n. Direct: u_n = rⁿ·u_0 (or u_n = rⁿ⁻¹·u_1).
- Recognition: u_n = 3·2ⁿ ⇔ start 3, ratio 2.

## 4. The sum formulas (formula sheet)

- Arithmetic sequence: Som = ½ · (number of terms) · (u_e + u_l) — "average of the ends × count". Number of terms = l − e + 1.
- Geometric sequence with r ≠ 1: Som = (u_{l+1} − u_e)/(r − 1). Here u_e is the first term and u_{l+1} = r·u_l the term after the last — get u_{l+1} from the direct formula.
- Checks worth doing: an arithmetic sum 3 + 5 + 7 has count 3, ends 3 and 7: ½·3·10 = 15 ✓. A geometric sum 2 + 6 + 18: u_e = 2, u_{l+1} = 54, r = 3: (54 − 2)/2 = 26 ✓.

## 5. Index of a term

- Set the direct formula equal to the wanted value and solve for n. Arithmetic: linear equation. Geometric: exponential equation → logarithms ([A05](../A05-logarithms/)).
- If n is not a whole number, the value is not a term of that sequence; nearest integer questions ask "first n with u_n ≥ …".

## 6. Contexts

- Savings with yearly fixed deposits: arithmetic (each year + the same amount, ignoring interest).
- Savings with yearly interest: geometric (× the growth factor); with interest AND deposits: recursive mixed form u_{n+1} = g·u_n + D (see 7).
- Months of loan quotas and annuities: same structure, at CCVX level in elementary form.

## 7. Behaviour and limits

- From the formula, describe: constant (a = 0 or r = 1), increasing, decreasing, alternating (r < 0, e.g. u_n = (−2)ⁿ).
- Convergence: for |r| < 1 a geometric sequence converges to 0. The mixed form u_{n+1} = g·u_n + D with |g| < 1 converges to the fixed point L satisfying L = g·L + D ⇔ L = D/(1 − g). Regarded as "behaviour of the sequence" at this syllabus level.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — from recursive to direct

Give the direct formulas: (a) u_{n+1} = u_n + 7, u₀ = 2; (b) u_{n+1} = 3u_n, u₀ = 5.

**Solution.** (a) Arithmetic with step 7: u_n = 2 + 7n. (b) Geometric with ratio 3: u_n = 5·3ⁿ.

### Example 2 — from direct to recursive

Give recursive formulas: (a) v_n = 10 − 4n; (b) w_n = 100·(0.8)ⁿ.

**Solution.** (a) Step −4, start 10: v_{n+1} = v_n − 4 with v₀ = 10. (b) Ratio 0.8: w_{n+1} = 0.8·w_n with w₀ = 100.

### Example 3 — arithmetic sum

Compute 5 + 8 + 11 + … + 98 (common difference 3, ending at a term).

**Solution.** Terms: arithmetic, u_e = 5, u_l = 98. Number of terms = (98 − 5)/3 + 1 = 31 + 1 = 32 (the +1 for the first term itself). Sum = ½·32·(5 + 98) = 16·103 = 1648.

### Example 4 — geometric sum

Compute 3 + 12 + 48 + … through the 10th term (ratio 4, starting u₀ = 3).

**Solution.** u_e = 3 (n = 0), and after the 10th term (n = 9) comes u₁₀ = 3·4¹⁰ = 3 145 728. Sum = (3·4¹⁰ − 3)/(4 − 1) = (3 145 728 − 3)/3 = 1 048 575.

### Example 5 — fixed point

The stock of a printer webshop follows u_{n+1} = 0.6·u_n + 200 with u₀ = 100 (n in months). To which level does the stock converge?

**Solution.** Fixed point: L = 0.6L + 200 ⇔ 0.4L = 200 ⇔ L = 500. Since |0.6| < 1 the sequence converges to 500 units — check: u₀ = 100 → u₁ = 260 → u₂ = 356 → u₃ = 413.6, climbing towards 500 ✓.
