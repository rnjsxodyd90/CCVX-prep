# A4 — Exponential growth: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Solving gᵗ = x uses logarithms — see [A05](../A05-logarithms/) for the rules; this folder already uses the technique.

## 1. The formula N = b·gᵗ

- Exponential growth (*exponentiële groei*): every time unit multiplies N by the same factor. Formula: N = b·gᵗ with initial value (*beginwaarde*) b = N(0) and growth factor (*groeifactor*) g per unit.
- The graph of N = gᵗ: rises (increasingly) for g > 1, falls (towards 0) for 0 < g < 1, and is the constant line 1 for g = 1 (degenerate). Always positive, through (0, 1).
- In a table with equal time steps: equal *ratios* between successive values ≡ exponential; equal *differences* ≡ linear. Know both tests.

## 2. Factor ↔ percentage

- Growth factor g per unit means the quantity becomes g times as large; the growth percentage is (g − 1)·100%. +6% per year → g = 1.06; −15% per day → g = 0.85.
- Percentages NEVER add over time: +50% in two years is not 25% × 2... per year it is the factor √1.5, percentage √1.5 − 1 ≈ 22.5%.

## 3. Changing the time unit

- Per k units the factor is gᵏ: per year g = 1.08 gives per 5 years 1.08⁵ ≈ 1.4693, and per month 1.08^(1/12) ≈ 1.006434 (≈ 0.6434% per month — not 8/12 %).
- Always convert via the factor, never via the percentage.

## 4. Doubling and halving times

- Doubling time (*verdubbelingstijd*) for g > 1: solve gᵗ = 2 → t = ln(2)/ln(g).
- Halving time (*halveringstijd*) for 0 < g < 1: solve gᵗ = ½ → t = ln(½)/ln(g). Both positive numbers.
- Back-computing g from a doubling/halving time: g = 2^(1/T) or g = (½)^(1/T).
- Key consistency: the time for N to grow from any level to twice that level is always the same — independent of b.

## 5. Setting up from two data points

- N(0) = 400 and N(6) = 900: g⁶ = 900/400 = 2.25 → g = 2.25^(1/6) ≈ 1.1447: about +14.5% per unit.
- If the initial value is not at t = 0: N(2) = 400 and N(6) = 900 give g⁴ = 2.25 → g = 2.25^(1/4) ≈ 1.2247, and b from b·g² = 400.

## 6. Saturation models

- N = a(1 − gᵗ) with 0 < g < 1: rises from 0 towards a (the *verzadigingsniveau*, saturation level); difference a − N = a·gᵗ decays exponentially. Typical for charging, warming to a boundary, information spreading to a cap.
- N = a/(1 + c·gᵗ) with 0 < g < 1: the logistic curve rising towards a; the denominator falls to 1. N(0) = a/(1 + c).
- Compute when N reaches level m: for the first form: a(1 − gᵗ) = m ⇔ gᵗ = 1 − m/a → t = ln(1 − m/a)/ln(g). For the logistic: 1 + c·gᵗ = a/m ⇔ gᵗ = (a/m − 1)/c ⇔ t = ln((a − m)/(m·c))/ln(g). These are the two standard exact routes.

## 7. Reading contexts

- Interest/savings: capital K after t years at p% interest: K = K₀·(1 + p/100)ᵗ. A starting withdrawal or deposit changes b only.
- Radioactive decay: halving time given → g = (½)^(1/T_half) per unit.
- Epidemics and biology: doubling times; limited growth goes to A06/A07 when rates matter.

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — table recognition

Time t (days): 0, 1, 2, 3 with N: 250, 275, 302.5, 332.75. Is the growth exponential? Give the formula.

**Solution.** Ratios: 275/250 = 1.1; 302.5/275 = 1.1; 332.75/302.5 = 1.1 — equal ratios, so exponential with g = 1.1, b = 250: N = 250·1.1ᵗ.

### Example 2 — time unit conversion

A debt grows 21% per year. Give the growth factor per month and per fortnight (2 weeks = 1/26 year).

**Solution.** Per month: 1.21^(1/12) ≈ 1.01599 — about +1.60% per month. Per fortnight: 1.21^(1/26) ≈ 1.007357 — about +0.736%.

### Example 3 — doubling time

A mutual fund rises 7% per year. After how many years is it doubled?

**Solution.** 1.07ᵗ = 2 ⇔ t = ln 2/ln 1.07 ≈ 0.6931/0.06766 ≈ 10.2 years. (The "rule of 72", 72/7 ≈ 10.3, is an approximation of this.)

### Example 4 — from two points

A microalgae bloom covers 3 m² at t = 2 (days) and 48 m² at t = 4. Assume exponential growth. Give the formula with t in days.

**Solution.** Between the two measurements, 2 days pass: g² = 48/3 = 16 ⇔ g = 4 (growth factor per day). The initial value follows from either point: N(2) = b·4² = 3 ⇔ b = 3/16. So N(t) = (3/16)·4ᵗ. Check: N(4) = (3/16)·256 = 48 ✓. In percentage terms: +300% per day.

### Example 5 — saturation

A thermometer in a room of 22 °C, moved from a fridge, reads T(t) = 22 − 18·(0.8)ᵗ (°C). After how many minutes does it read 20 °C?

**Solution.** 22 − 18·0.8ᵗ = 20 ⇔ 18·0.8ᵗ = 2 ⇔ 0.8ᵗ = 1/9 ⇔ t = ln(1/9)/ln(0.8) ≈ 9.85 minutes. (The general trick: isolate gᵗ, then take logarithms on both sides — ln(1/9) = −ln 9, so the sign works out to a positive time.)
