# A16 — Hypothesis testing: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. The formula sheet gives the critical value multipliers: 1.645 (one-sided, α = 0.05), 1.96 (two-sided, 0.05), 2.33 (one-sided, 0.01), 2.58 (two-sided, 0.01).

## 1. Choosing the type of test and H₀

- Counting successes out of n → **proportion test** (*proportietoets*, binomial test): H₀: p = p₀.
- Measuring a quantity with known σ, testing the mean → **mean test** (*gemiddeldentoets*, normal test): H₀: μ = μ₀.
- Write H₀ as an equality with the claimed/suspect value; the burden of proof is on the alternative.

## 2. Alternative hypothesis and sidedness

- Left-sided (*linkszijdig*): H₁: p < p₀ or μ < μ₀ — you suspect the value is *lower*.
- Right-sided (*rechtszijdig*): > — you suspect *higher*.
- Two-sided (*tweezijdig*): ≠ — you suspect a difference without a direction.
- Choose from the phrasing of the problem ("higher than claimed" → right; "changed?" → two-sided).

## 3. The test statistic and its parameters

- Proportion test: X = the count of successes, with n and p₀; E(X) = np₀, σ(X) = √(np₀(1−p₀)).
- Mean test: the sample mean X̄ of n measurements, with H₀-mean μ₀ and σ(X̄) = σ/√n (the √n-law).
- Significance level (*significantieniveau*): α = 0.05 usually (0.01 sometimes) — the false-alarm probability you allow.

## 4. Deciding via the exceedance probability (p-value)

- Exceedance probability (*overschrijdingskans*): assuming H₀ true, the probability of the measured outcome or a more extreme one (in the direction of H₁).
- Since tables and graphing calculators are restricted, **this value is usually given in the exam**. Decision: p-value ≤ α → reject H₀ (there is sufficient reason); otherwise there is insufficient evidence (do not "accept" H₀, just keep it).

## 5. Deciding via the critical value (rejection region)

With T normally distributed with μ_T, σ_T (formula sheet):

- Right-sided: critical value g = μ_T + 1.645σ_T (α = 0.05) or + 2.33σ_T (0.01); reject H₀ when the outcome > g.
- Left-sided: g = μ_T − 1.645σ_T (0.05) or − 2.33σ_T (0.01); reject when the outcome < g.
- Two-sided: g_left = μ_T − 1.96σ_T and g_right = μ_T + 1.96σ_T (0.05); 2.58 at 0.01; reject when the outcome is outside [g_left, g_right].
- For a proportion (binomial) test with np₀ ≥ 5, use these normal formulas with μ_T = np₀ and σ_T = √(np₀(1−p₀)) — NO continuity correction needed then.

## 6. Writing the conclusion

The exam expects a context-bound sentence: "At the 5% significance level there is (not) sufficient reason to believe that …" — naming what was tested and the direction. State the comparison you used (outcome vs critical value, or p-value vs α).

## Worked examples

Fully worked examples for the outcomes above. All examples are original.

### Example 1 — proportion test with a given p-value

A clinic's leaflet says their treatment cures 80% of patients. A random check of 200 patients finds 148 cured. Test at α = 0.05 whether the true proportion is lower; it is given that the exceedance probability is 0.0014.

**Solution.** Proportion test: H₀: p = 0.80, left-sided H₁: p < 0.80. p-value 0.0014 < 0.05: reject H₀. Conclusion: there is sufficient reason to believe the cure proportion is below 80%.

### Example 2 — critical values, right-sided, filling bags

A machine should fill bags with μ = 300 g, σ per bag = 8 g. A sample of 25 bags has mean 303.4 g. Test at α = 0.05 whether it fills too much.

**Solution.** Normal mean test, right-sided: H₀: μ = 300. σ(X̄) = 8/√25 = 1.6 g. Critical value g = 300 + 1.645·1.6 = 302.63 g. Sample mean 303.4 > 302.63: reject H₀. At the 5% level there is sufficient reason to believe the machine overfills.

### Example 3 — two-sided test

A supplier claims cables of mean strength μ = 1500 N, σ = 40 N. A batch of 100 cables has mean strength 1492 N. Is there reason to doubt the claim (two-sided, α = 0.05)?

**Solution.** σ(X̄) = 40/10 = 4 N. Critical values: 1500 ± 1.96·4 = 1500 ± 7.84: [1492.16, 1507.84]. The outcome 1492 < 1492.16 — just outside the region: reject H₀; there is sufficient reason (at 5%) to believe the mean strength differs from 1500 N. (Note how sharp big samples are.)

### Example 4 — binomial test with the normal formulas

A die is rolled 90 times and shows 24 sixes. Test at α = 0.05 whether the die favours six (right-sided).

**Solution.** H₀: p = 1/6; np₀ = 15 ≥ 5, so the normal formulas apply: μ_T = 15, σ_T = √(90·(1/6)·(5/6)) = √12.5 ≈ 3.5355. Critical value g = 15 + 1.645·3.5355 ≈ 20.82. Outcome 24 > 20.82: reject H₀; at the 5% level there is sufficient reason to believe this die lands six more often than 1/6 of the time.
