# A16 — Hypothesis testing

- **Dutch:** *toetsen van hypothesen*
- **CCVX syllabus:** programme point 16 and the section *toetsen van hypothesen* of the concept list.

## Learning outcomes (CCVX syllabus)

From a suitable problem situation, the candidate can set up a statistical testing procedure (*toetsingsprocedure*) and with it:

1. State whether it is a proportion test (*proportietoets*, binomial test) with null hypothesis H₀: p = p₀, or a mean test (*gemiddeldentoets*, normal test) with null hypothesis H₀: μ = μ₀.
2. Formulate the null hypothesis (*nulhypothese*) and the alternative hypothesis, and state whether the procedure should be left-sided (*linkszijdig*), right-sided (*rechtszijdig*) or two-sided (*tweezijdig*).
3. Determine the test statistic with its parameters: for the binomial test the count X with n and p₀; for the normal test the sample mean with μ₀ and σ determined by the √n-law: σ_X̄ = σ/√n.
4. State how a given sample outcome converts to an exceedance probability (*overschrijdingskans* / p-value): the probability, under H₀, of an outcome at least as extreme as the one measured; since calculators and tables are restricted in the exam, this probability will usually be **given**, and the candidate interprets it against the significance level (*significantieniveau*, usually α = 0.05, sometimes 0.01): reject H₀ when the p-value ≤ α.
5. Compute the critical values of the rejection region (*verwerpingsgebied*, the critical region) with the formulas of the formula sheet:
   - α = 0.05: left g = μ_T − 1.645σ_T; right g = μ_T + 1.645σ_T; two-sided g_left = μ_T − 1.96σ_T and g_right = μ_T + 1.96σ_T;
   - α = 0.01: with 2.33 (one-sided) and 2.58 (two-sided);
   and interpret (reject or not reject H₀) by comparing the sample outcome with the critical value(s). For a binomial test with np₀ ≥ 5 these formulas may be used, with μ_T = np₀ and σ_T = √(np₀(1−p₀)), and no continuity correction is needed then.
6. Write the conclusion in clear words tied to the context ("there is sufficient/insufficient reason to believe …", naming the claim), at the given significance level.

## Study material

- [notes.md](notes.md): notes per outcome, with worked examples at the end. Start here.
- [practice.md](practice.md): 8 original practice questions with full worked solutions.
