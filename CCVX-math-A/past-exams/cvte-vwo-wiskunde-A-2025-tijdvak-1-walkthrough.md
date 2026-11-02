# Walkthrough — CvTE VWO examen wiskunde A, 2025 tijdvak 1 (May 2025)

- **Official paper:** VWO wiskunde A, centraal examen 2025 period 1, college code VW-1024-a-25-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2025-05/vw-1024-a-25-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2025-05/vw-1024-a-25-1-c.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you in our own words what each question asks for, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito). Questions that depend on a figure or worksheet (the bird scatter plot, the cycle graphs, the tyre-load graph) get their read-off method described in words.

Exam totals: 23 questions in 6 problems, 78 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: bird energy budget: power model, derivative, ln-linearisation ([A03](../A03-power-and-quadratic-relations/), [A06](../A06-differentiation/), [A05](../A05-logarithms/)), New Zealand economic cycles: combined sine models ([A09](../A09-sine-functions/)), the quiz 'De slimste mens': season counting, standings, trios ([A01](../A01-numbers-and-algebra/), [A11](../A11-systematic-counting/)), tyre pressure and aquaplaning: root formulas, exponential loss, a linear trend ([A01](../A01-numbers-and-algebra/), [A04](../A04-exponential-growth/), [A02](../A02-linear-relations/)), myopia: exponential population growth, ln-models and their derivatives ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/), [A06](../A06-differentiation/)), the Amnesty monument: arithmetic series ([A08](../A08-sequences/)).

## Question 1 (official paper) — 3 points

**Asked:** by what percentage a pigeon's real daily energy need exceeds the dashed-line value at its weight (whole percents).

**Solution.** Read the figure (worksheet): at the pigeon's body weight, the dashed line sits at about 170 kJ, while the pigeon's own dot sits at about 230 kJ (reading margin 10 kJ each). Percentage more: (230 − 170)/170·100 ≈ 35.3% → 35%.

**Answer:** 35%.

**Common mistakes.** Percentage based on 230 instead of 170 (the dashed line is the reference!); reading E at the weight of a different bird; reporting "60 kJ more" (the question demands a percentage).

**Points:** 3 — both read-offs, the percentage.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (percentages) + figure reading.

## Question 2 (official paper) — 3 points

**Asked:** the weight of a bird needing 1000 kJ daily, from E = 5.0·G^0.75 (whole grams).

**Solution.** 5.0·G^0.75 = 1000 ⇔ G^0.75 = 200 ⇔ G = 200^(1/0.75) = 200^(4/3) ≈ 1170 g.

**Answer:** 1170 grams.

**Common mistakes.** Raising to 0.75 instead of 1/0.75; 1000/5 = 200 then square-rooting (the exponent is 0.75, not 0.5).

**Points:** 3 — the equation, the solve description, whole grams.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/).

## Question 3 (official paper) — 3 points

**Asked:** reason via the derivative formula (no numbers, no sketch) whether the energy need is increasing at an increasing or at a decreasing rate.

**Solution.** dE/dG = 5.0·0.75·G^(−0.25) = 3.75/G^0.25. For G > 0 this is positive, so E rises with G. As G grows, the denominator G^0.25 grows, so dE/dG itself falls — the rise weakens. Hence E is decreasingly increasing (afnemend stijgend). ∎

**Common mistakes.** Only showing E′ > 0 (that says "increasing" but not the afnemend part); concluding "decreasing" from the negative exponent (the factor 3.75/G^0.25 stays positive for all G > 0).

**Points:** 3 — the derivative, its falling behaviour, the verdict.

**Subdomain:** [A06](../A06-differentiation/).

## Question 4 (official paper) — 4 points

**Asked:** rewrite E = 5.0·G^0.75 into ln(E) = a + b·ln(G), with a and b to 2 decimals.

**Solution.** ln(E) = ln(5.0·G^0.75) [product rule for ln] = ln(5.0) + ln(G^0.75) [power rule] = ln(5.0) + 0.75·ln(G). So a = ln 5.0 ≈ 1.61 and b = 0.75.

**Answer:** ln(E) = 1.61 + 0.75·ln(G).

**Common mistakes.** Writing 1.61·0.75·ln(G) (the SUM stays a sum — only the exponent 0.75 slides forward); giving a = 5.0 (a must be LN of 5.0: 1.61).

**Points:** 4 — ln applied, product split, power rule, a and b in 2 decimals.

**Subdomain:** [A05](../A05-logarithms/).

## Question 5 (official paper) — 4 points

**Asked:** draw the M-versus-G line (M = 40% of E) into the worksheet figure, with method.

**Method description.** M = 0.4·E = 0.4·5.0·G^0.75 = 2.0·G^0.75 — a straight line on the figure's double-log scale, just like the dashed E-line. Compute two well-separated points, e.g. M(1000) = 2.0·1000^0.75 ≈ 356 kJ and M(10 000) = 2.0·10 000^0.75 ≈ 2000 kJ; plot (1000, 356) and (10 000, 2000) and draw the straight line through them (parallel to the dashed line — a ×0.4 shift on the log scale).

**Common mistakes.** Drawing a line from the origin (40% of the END values only at one weight, then freehanding); forgetting that the figure's axes are logarithmic — equal vertical distances there mean equal FACTORS, so the new line must be parallel to the old one.

**Points:** 4 — M = 2.0·G^0.75, two computed points, the drawn line.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) + log-scale reading.

## Question 6 (official paper) — 2 points

**Asked:** how many times longer the longest cycle's period is than the shortest's (whole number), from figure 1.

**Solution.** Compare the voorraadcyclus (period ≈ 2.57 years) with the prijzencyclus (period ≈ 50 years). Ratio: 50/2.57 ≈ 19.4 → 19 times as long (the key also accepts 20 from coarser reading).

**Answer:** 19 times.

**Common mistakes.** Comparing with the investment cycle (~10.4 years — the MIDDLE period); reading the periods in months vs years.

**Points:** 2 — the right two periods compared, the rounded quotient.

**Subdomain:** [A09](../A09-sine-functions/) (period reading).

## Question 7 (official paper) — 3 points

**Asked:** explain how V = 0.8 + sin(2.445(t − 0.024)) follows from the data (max 1.8% on 1 Sept 1948, min −0.2%, period 2.57 years).

**Solution.** Equilibrium level: (1.8 + (−0.2))/2 = 0.8 → the 0.8. Amplitude: 1.8 − 0.8 = 1 → the invisible factor 1 in front of the sine. Frequency: c = 2π/2.57 = 2.4448... ≈ 2.445. Phase: a sine peaks ¼ period after its rising zero-crossing; the maximum is at t = 8/12 ≈ 0.6667, so the crossing sits at d = 0.6667 − 2.57/4 ≈ 0.6667 − 0.6425 ≈ 0.024.

**Common mistakes.** d = 8/12 directly (the formula's t − d measures the SHIFT to the rising crossing, not to the maximum); using 2.57 as the frequency (frequency = 2π/period).

**Points:** 3 — equilibrium + amplitude, the frequency computation, the phase via the quarter period.

**Subdomain:** [A09](../A09-sine-functions/).

## Question 8 (official paper) — 4 points

**Asked:** the total growth by the voorraadcyclus on 1 Jan 2023 relative to 1 Jan 2021 (1 decimal, percentages compound over the two years).

**Solution.** V(74) ≈ −0.17% (given) and compute V(75) = 0.8 + sin(2.445·(75 − 0.024)) = 0.8 + sin(183.316...) = 0.8 + 0.893... ≈ 1.69% (calculator — reduce the argument: 183.316 − 29·2π ≈ 1.104 rad). Compound the two years: (1 − 0.0017)·(1 + 0.0169) = 0.9983·1.0169 ≈ 1.0152 → total growth ≈ 1.5%.

**Answer:** ≈ 1.5%.

**Common mistakes.** Simply adding: −0.17 + 1.69 = 1.52 (close, but the official route compounds the factors — same rounded answer here, but the method is what scores); calculator in degrees (arguments are radians); forgetting t = 75 corresponds to 1 Jan 2023 (t = 0 is 1948).

**Points:** 4 — V(75), both growth factors, the compounded percentage.

**Subdomain:** [A09](../A09-sine-functions/) and [A04](../A04-exponential-growth/) (compounding).

## Question 9 (official paper) — 4 points

**Asked:** the maximal shrink in 2025–2035 per the summed model V + I + P (2 decimals, percent per year).

**Solution.** The combined pattern is S(t) = 0.8 + sin(2.445(t − 0.024)) + 1.6 + 1.6·sin(0.604(t − 2.933)) + sin(0.126(t + 5.083)). Maximal shrink = the MINIMUM of S on t ∈ [77, 87]. With the calculator's minimum finder on that window (or a fine table): minimum value ≈ −1.06. So the maximal shrink is 1.06% shrink per year.

**Answer:** (–)1.06 percent per year.

**Common mistakes.** Finding a LOCAL minimum outside 2025–2035 (t from 77 to 87 only!); reporting the t-value instead of the shrink percentage; sign slip (answering +1.06 when shrink is asked as a negative growth).

**Points:** 4 — the sum formula, "krimp maximaal = S minimaal" insight, the windowed search, the answer.

**Subdomain:** [A09](../A09-sine-functions/) (combined periodic models).

## Question 10 (official paper) — 3 points

**Asked:** how many of the seasons before the 17th contained 35 episodes (season 11 had 5; the 30th episode of season 17 was #500).

**Solution.** Seasons 1–16: 500 − 30 = 470 episodes. Season 11 contributed 5, leaving 465 for the other 15 seasons. Base case all-30: 15·30 = 450; surplus 15 episodes; each 35-season adds 5: x = 15/5 = 3 seasons. (Check: 12·30 + 5 + 3·35 = 360 + 5 + 105 = 470 ✓.)

**Answer:** 3 seasons.

**Common mistakes.** 16 seasons × 30 as the baseline (season 11 must be pulled OUT of the pool first); dividing by 35 instead of by the surplus-per-season 5.

**Points:** 3 — the 465 remainder, the 450 baseline, the quotient 3.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 11 (official paper) — 4 points

**Asked:** the number of possible standings after round 1 when exactly 40 seconds are earned (start 60 each; five times 10 can be earned).

**Solution.** Each candidate ends on a multiple of 10 in {60, 70, 80, 90, 100, 110}, and the three gains over 60 sum to 40. Possible sorted outcomes: 100/60/60, 90/70/60, 80/80/60, 80/70/70. Standings distinguish the three candidates: distributions with one repeated value: C(3,1) = 3 placements each (100/60/60, 80/80/60, 80/70/70); the all-distinct one 90/70/60 has 3! = 6. Total: 3 + 3 + 3 + 6 = 15.

**Answer:** 15 standings.

**Common mistakes.** Missing one of the four sorted shapes (enumerate gains x ≤ y ≤ z with x + y + z = 40 in steps of 10 systematically); counting 4 shapes but forgetting that A/B/C are distinct people.

**Points:** 4 — the four shapes (2 points), their multiplicities, the total.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 12 (official paper) — 3 points

**Asked:** the minimum number of famous Dutch people needed to give all 30 episodes a different trio.

**Solution.** Trios from n people: C(n,3). Need C(n,3) ≥ 30. C(6,3) = 20 < 30; C(7,3) = 35 ≥ 30. So 7 suffice and 6 do not.

**Answer:** 7 famous Dutch people.

**Common mistakes.** Using permutations 6·5·4 (a trio is UNORDERED — C(n,3), not nP3 — and the key caps non-combination routes at 1 point); checking only C(6,3) = 20 and concluding "more than 6" without verifying 7.

**Points:** 3 — the combination insight, the two reference values, the answer 7.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 13 (official paper) — 3 points

**Asked:** the minimal tyre pressure (1 decimal, bar) so that an aircraft landing at 223 km/h avoids aquaplaning, under Horne: S = 63.5·√P.

**Solution.** 223 = 63.5·√P ⇔ √P = 3.5118 ⇔ P = 12.33... bar. This is the threshold: to be SAFE the pressure must be at least that, so round UP to one decimal: 12.4 bar.

**Answer:** 12.4 bar.

**Common mistakes.** Rounding 12.33 to 12.3 (then the threshold speed drops just below 223 — unsafe; the key demands 12.4); squaring 223/63.5 inside the root the wrong way (√P isolated first).

**Points:** 3 — the equation, the solve, the safety-consistent rounding.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (root equations).

## Question 14 (official paper) — 4 points

**Asked:** after how many days a tyre pumped 4% ABOVE advice needs re-pumping (2% loss per day; may not sink below 5% under advice).

**Solution.** Work in percentages of the advised pressure P: starts at 104 (%), daily factor 0.98, floor at 95. After t days: 104·0.98ᵗ. Check whole days: t = 4: 104·0.9224 ≈ 95.9 ≥ 95 ✓; t = 5: ≈ 94.0 < 95 ✗. (Equation route: 104·0.98ᵗ = 95 gives t = ln(95/104)/ln(0.98) ≈ 4.5 days — the tyre is re-pumped on the last SAFE day.) So re-pumping happens after 4 days.

**Answer:** after 4 days.

**Common mistakes.** Using 100 as the start (the 4% extra is the point of the question); mixing the two percentages (floor at 0.95·advice, not at 95 − 4); answering 4.5 (whole days are contextually required — the pressure is checked each morning).

**Points:** 4 — daily factor, the 104 → 95 framing, the two day-checks (or the equation), the verdict 4.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 15 (official paper) — 3 points

**Asked:** reason from formulas 2 (V = b/l) and 3 (S_auto = 55.5·√(P/V)) whether the aquaplaning threshold speed is higher or lower for a heavily loaded car (same tyre pressure).

**Solution.** Heavy loading makes l large relative to b, so V = b/l is SMALLER than for a lightly loaded car. With P constant, P/V is then LARGER, and so is its square root: S_auto = 55.5·√(P/V) is larger. Hence the heavily loaded car only starts aquaplaning at a HIGHER speed. ∎

**Common mistakes.** Drawing a safety conclusion in the wrong direction (a higher threshold = later aquaplaning); skipping the middle step (V ↓ ⇒ P/V ↑ ⇒ √P/V ↑); reasoning with the unadapted aircraft formula.

**Points:** 3 — V smaller, P/V larger, conclusion for S_auto.

**Subdomain:** [A02](../A02-linear-relations/)-adjacent formula reasoning.

## Question 16 (official paper) — 4 points

**Asked:** build the trend line through (0.9, 507) and (1.4, 214) and compute the maximal total load (whole kg) keeping V ≥ 1.05 for the 1200 kg car on four tyres.

**Solution.** Slope: (214 − 507)/(1.4 − 0.9) = −294/0.5... careful: (507 − 214)/(0.9 − 1.4) = 293/(−0.5) = −586. Line: G = −586V + 1034.4 (using 507 + 0.9·586). At V = 1.05: G = −586·1.05 + 1034.4 = 419.1 kg per tyre. Four tyres: 1676.4 kg total weight. Load: 1676.4 − 1200 = 476.4 → 476 kg.

**Answer:** 476 kg.

**Common mistakes.** Forgetting to share over four tyres (or dividing by 4 the LOAD instead of the total weight); rounding 476.4 up to 477 (a maximum must be rounded DOWN); using V = 1.05 as the minimum-load side (larger V = lighter tyre — the binding case is exactly V = 1.05).

**Points:** 4 — the slope, the line, the per-tyre weight at V = 1.05, the final subtraction.

**Subdomain:** [A02](../A02-linear-relations/).

## Question 17 (official paper) — 3 points

**Asked:** the average yearly increase 2018–2050 in the number of Dutch people with myopia (whole thousands), assuming 20% of 17.2 M in 2018 grows to 50% in 2050 while the population grows 0.36%/yr exponentially.

**Solution.** Population 2050: 17.2·1.0036^32 ≈ 17.2·1.1219 ≈ 19.3 million. Myopia cases: 0.20·17.2 = 3.44 M in 2018; 0.50·19.29 ≈ 9.65 M in 2050. Increase: 9.65 − 3.44 = 6.21 M over 32 years: ≈ 0.194 M/yr → 194 thousand per year.

**Answer:** ≈ 194 thousand per year.

**Common mistakes.** Forgetting the population growth (using 50% of 17.2 M); 32 vs 32.0 years miscount (2050 − 2018 = 32 steps ✓); leaving the answer in millions.

**Points:** 3 — the 2050 population, both case counts, the per-year division in thousands.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 18 (official paper) — 3 points

**Asked:** the difference between the graph's estimate and the formula's estimate of boys' axis length at 7 years 3 months (1 decimal, mm).

**Solution.** The graph connects the measured points at age 5 (21.8 mm) and age 10 (22.8 mm) by a straight line; 7.25 years is 2.25 of the 5 years along: estimate = 21.8 + (22.8 − 21.8)·(2.25/5) = 21.8 + 0.45 = 22.25 mm. The formula: J(7.25) = 0.5646·ln(3.25) + 21.7 ≈ 0.5646·1.1787 + 21.7 ≈ 22.37 mm. Difference: 22.37 − 22.25 ≈ 0.1 mm.

**Answer:** 0.1 mm.

**Common mistakes.** Using 7⅓ for 7 years 3 months (3 months = 0.25 year!); reading the formula with ln(7.25) instead of ln(7.25 − 4); giving 0.12 instead of the asked 1-decimal 0.1.

**Points:** 3 — the linear graph estimate, the formula value, the difference.

**Subdomain:** [A05](../A05-logarithms/) vs [A02](../A02-linear-relations/) (interpolation).

## Question 19 (official paper) — 4 points

**Asked:** how many years earlier a boy's eye is stable than a girl's, where stable means growth speed < 0.05 mm/yr per the formulas for J and M (1 decimal).

**Solution.** Growth speeds are the derivatives: dJ/dt = 0.5646/(t − 4) and dM/dt = 0.7112/(t − 4). Solve both equal to 0.05: boys: t − 4 = 0.5646/0.05 = 11.292 → t = 15.292; girls: t − 4 = 0.7112/0.05 = 14.224 → t = 18.224. Difference: 18.224 − 15.292 = 2.932 → 2.9 years earlier.

**Answer:** 2.9 years.

**Common mistakes.** Solving 0.05(t − 4) = 0.5646 with sides swapped (t − 4 = 0.05/0.5646 — inverted); subtracting the DERIVATIVES instead of the ages; answering 15.3 (that's the boys' age, not the asked difference).

**Points:** 4 — the derivative insight, both derivatives, both solves, the difference.

**Subdomain:** [A06](../A06-differentiation/) (derivative of ln function).

## Question 20 (official paper) — 2 points

**Asked:** show that the 6-year-old data point (axis length 23.4 mm) in A = p·ln(t − 4) + q yields q = 23.4 − 0.693p after 3-decimal rounding.

**Solution.** t = 6: p·ln(6 − 4) + q = 23.4 ⇔ p·ln 2 + q = 23.4. Since ln 2 = 0.693147...: q = 23.4 − 0.693147...·p ≈ 23.4 − 0.693p. ∎

**Common mistakes.** ln(6) instead of ln(6 − 4); isolating p instead of q; rounding ln 2 to 0.69 or 0.7 (3 decimals asked).

**Points:** 2 — the substituted equation, the isolation of q.

**Subdomain:** [A05](../A05-logarithms/).

## Question 21 (official paper) — 3 points

**Asked:** compute p and q to 3 decimals from the two linear equations q = 23.4 − 0.693p and q = 24.4 − 1.792p.

**Solution.** Set equal: 23.4 − 0.693p = 24.4 − 1.792p ⇔ 1.099p = 1.0 ⇔ p = 1/1.099 = 0.909919 ≈ 0.910. Then q = 23.4 − 0.693·0.909919 = 23.4 − 0.6306 ≈ 22.769.

**Answer:** p = 0.910, q = 22.769.

**Common mistakes.** Sign error when moving terms (−1.792p + 0.693p = −1.099p lands on the left: 1.099p = 1.0 ✓); premature rounding of p to 0.91 before computing q (rounding rules — keep precision until the end).

**Points:** 3 — the equality, the solve, both 3-decimal answers.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (linear system).

## Question 22 (official paper) — 3 points

**Asked:** at what age (whole years) this group's average axis length crosses the 26 mm threshold for severe myopia.

**Solution.** With p = 0.91, q = 22.77: 0.91·ln(t − 4) + 22.77 = 26 ⇔ ln(t − 4) = 3.23/0.91 ≈ 3.5495 ⇔ t − 4 ≈ 34.9 ⇔ t ≈ 38.9... computed with the given values: t ≈ 38.7. The crossing happens while the children are 38 years old.

**Answer:** at age 38.

**Common mistakes.** Rounding 38.7 to 39 (the OFFICIAL interpretation: crossing at t ≈ 38.7–38.9 happens during the 39th year of life, i.e. "at age 38" — follow the key: 38); e^3.5495 computed with ln/log swapped.

**Points:** 3 — the equation, the solve, the age verdict.

**Subdomain:** [A05](../A05-logarithms/).

## Question 23 (official paper) — 6 points

**Asked:** the total cement (whole litres) to fill all tubes of the monument (equally thick tubes on a square rim with one corner gap, heights rising in equal steps from 30 cm to 270 cm; 6030 cm³ of cement per 30 cm of tube).

**Solution.** The top view counts 25 tubes. Step size: (270 − 30)/24 = 10 cm. Total tube length: arithmetic series 30 + 40 + … + 270 = 25/2·(30 + 270) = 3750 cm. Cement per cm of tube: 6030/30 = 201 cm³. Total: 3750·201 = 753 750 cm³ = 753.75 litres → 754 litres.

**Answer:** 754 litres.

**Common mistakes.** 24 tubes (from 30 to 270 inclusive in steps of 10 is 240/10 + 1 = 25); forgetting the +1 in the count formula; rounding 753.75 to 753; cm³ → litre slip (753 750 cm³ = 753.75 L, ÷1000).

**Points:** 6 — the 25 tubes, the 10 cm step, the series sum description, 3750 cm, 201 cm³/cm, the litre answer.

**Subdomain:** [A08](../A08-sequences/) (arithmetic series) and [A01](../A01-numbers-and-algebra/) (units).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math A folder](../README.md).*
