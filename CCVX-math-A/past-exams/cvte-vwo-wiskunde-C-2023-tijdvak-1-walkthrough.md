# Walkthrough — CvTE VWO examen wiskunde C, 2023 tijdvak 1 (supplementary reasoning practice for wiskunde A)

- **Official paper:** VWO wiskunde C, centraal examen 2023 period 1, college code VW-1026-a-23-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2024-06/vw-1026-a-23-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/2023/ex2023/VW-1026-a-23-1-c.pdf>

**Note — this is a wiskunde C exam, not wiskunde A.** College code VW-1026-a belongs to VWO wiskunde C (VWO wiskunde A carries code VW-1024-a). This walkthrough is kept in the math-A prep as supplementary reasoning practice only: percentages, algebra, exponential models, counting and formal logic here transfer directly to CCVX wiskunde A, but the exam's coverage is NOT wiskunde A coverage — wiskunde C has no differentiation, no binomial or normal distribution and no hypothesis testing, so use the filtered per-question subdomain links as pointers to the overlapping skills, not as a syllabus map. Walkthroughs of the real VWO wiskunde A exams live in `cvte-vwo-wiskunde-A-…-tijdvak-1-walkthrough.md`.


Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you in our own words what each question asks for, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito). Questions that depend on a figure or worksheet (set diagram, log-scale graph, photo, perspective drawing, stacked production graph) get their method described in words; visual answers follow the official key's drawings.

Exam totals: 22 questions in 6 problems, 75 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: set diagram and symbolic logic ([A11](../A11-systematic-counting/), reasoning track alongside [A12](../A12-probability/)), butterfly trends: exponential decay, log scales and log-formulas ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/)), whisky aging with recursive sequences ([A04](../A04-exponential-growth/), [A08](../A08-sequences/)), steel-letter photo perspective (spatial drawing), cement production: exponential vs linear models and weighted emissions ([A04](../A04-exponential-growth/), [A02](../A02-linear-relations/), [A01](../A01-numbers-and-algebra/)), pizza franchise counting and area economics ([A11](../A11-systematic-counting/), [A01](../A01-numbers-and-algebra/)).

## Question 1 (official paper) — 2 points

**Asked:** explain how the diagram shows that none of the 20 students has to sit four tests on the Tuesday.

**Solution.** Sitting four tests means having all four subjects — that corresponds to exactly one region of the diagram: region F, where all four subject sets overlap. In region F the diagram shows a 0, so not a single student has all four subjects — hence nobody sits four tests.

**Common mistakes.** Counting regions instead of reading the number in region F; arguing "the chance is small" instead of pointing at the explicit 0.

**Points:** 2 — region F identified, the 0 read.

**Subdomain:** sets and diagrams (reasoning track, alongside [A12](../A12-probability/)).

## Question 2 (official paper) — 2 points

**Asked:** use the diagram to find which tests can be scheduled at the same time (no student may face two tests at once).

**Solution.** Two tests can clash only if some student takes both subjects. Checking all six pairs of the four subjects in the diagram: every pair except natuurkunde–geschiedenis has at least one student in its overlap region(s). Only Na and Gs share no students.

**Answer:** only the natuurkunde and geschiedenis tests can be scheduled simultaneously.

**Common mistakes.** Naming every pair whose overlap is "small"; forgetting a pair (there are C(4,2) = 6 to check).

**Points:** 2 — the disjointness argument, the one pair.

**Subdomain:** sets and diagrams ([A11](../A11-systematic-counting/)-adjacent).

## Question 3 (official paper) — 4 points

**Asked:** translate Hansen's claim Du ⇒ (Na ∨ Gs) into an ordinary sentence and justify its correctness with the diagram.

**Solution.** Translation: "If Julia has Duits in her package, then she has natuurkunde or geschiedenis (or both)." Justification: having Duits puts Julia in one of the diagram regions G, H, Q or R (all regions inside the Du set). Regions G and H lie within the geschiedenis set; regions Q and R lie within the natuurkunde set. Every Du-region lies inside Na or Gs, so the claim is correct.

**Common mistakes.** Translating ∨ as "and" (it is the inclusive or); listing the Du-regions but not checking each against Na/Gs.

**Points:** 4 — the sentence, the four regions, G + H inside Gs, Q + R inside Na.

**Subdomain:** logic (reasoning track, alongside [A12](../A12-probability/)).

## Question 4 (official paper) — 4 points

**Asked:** list all theoretically possible combinations of two or more of the four subjects, and check for each whether the diagram has a region for it.

**Solution.** Combinations of two or more out of {Ec, Gs, Na, Du}: 1 quadruple combination (Ec-Gs-Na-Du), 4 triple combinations (Ec-Gs-Na, Ec-Gs-Du, Ec-Na-Du, Gs-Na-Du) and 6 pairs (Ec-Gs, Ec-Na, Ec-Du, Gs-Na, Gs-Du, Na-Du): 11 in total. Comparing with the diagram: Ec-Du and Gs-Na have NO region; the other 9 do.

**Answer:** 11 combinations; Ec-Du and Gs-Na are the ones not represented.

**Common mistakes.** Forgetting the quadruple combination; mixing up "has a region" with "has students in it" (a region with a 0 still exists in the diagram).

**Points:** 4 — the 1 + 4 + 6 count, the verdict per combination.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 5 (official paper) — 2 points

**Asked:** the average number of bruin zandoogjes per 100 m², given 200 counted on a route 1000 m long and 5 m wide.

**Solution.** Counted strip: 1000·5 = 5000 m² = 50 units of 100 m². Average: 200/50 = 4.

**Answer:** 4 per 100 m².

**Common mistakes.** Dividing by 100 first (the strip is 5000 m², not 1000); answering per m² (0.04).

**Points:** 2 — the strip area, the division.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (units).

## Question 6 (official paper) — 4 points

**Asked:** the yearly percentage decrease of the total number of butterflies over 1992–2017 (a 40% decline), assuming an exponential trend (1 decimal).

**Solution.** A 40% decline over 25 years means a 25-year growth factor of 0.6. Per year: g = 0.6^(1/25) ≈ 0.9798. Yearly decrease: 1 − 0.9798 = 0.0202 ≈ 2.0%.

**Answer:** 2.0% per year.

**Common mistakes.** Using 0.6/25 = 0.024 → 2.4% (linear division instead of the root — the key caps that at 1 point); 25 vs 26 years miscount; reporting the factor instead of the decrease.

**Points:** 4 — factor 0.6, the 25th-root setup, g ≈ 0.9798, the 2.0%.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 7 (official paper) — 3 points

**Asked:** the heath butterfly's population index in 2017 relative to 1992, from the log-scale figure (1 decimal).

**Solution.** On the logarithmic axis each decade (×10) takes 2 cm. Measure at 2017: the point sits 1.6 cm above the 1-line (reading margin 0.1 cm). On a log scale that height means: P = 10^(1.6/2) = 10^0.8 ≈ 6.3.

**Answer:** ≈ 6.3% (of the 1992 count).

**Common mistakes.** Reading the log axis as if it were linear (that gives ~5); forgetting that 2 cm corresponds to a FACTOR 10 (so 1 cm = factor 10^0.5).

**Points:** 3 — the measurement, the log-scale conversion, the rounded answer.

**Subdomain:** [A05](../A05-logarithms/) (logarithmic scales).

## Question 8 (official paper) — 2 points

**Asked:** the first year in which the trend formula log(P) = −0.026t + 1.8 (t years after 1992) puts P below 2%.

**Solution.** Solve −0.026t + 1.8 = log(2) = 0.301... ⇔ 0.026t = 1.499... ⇔ t ≈ 57.7. The first whole year past that: t = 58, i.e. year 1992 + 58.

**Answer:** 2050.

**Common mistakes.** Using ln 2 (natural log) instead of log 2 (base 10 — the formula uses log!); answering 2049 (t = 57 still gives P just above 2).

**Points:** 2 — the equation, the year.

**Subdomain:** [A05](../A05-logarithms/).

## Question 9 (official paper) — 3 points

**Asked:** show the rewrite of log(P) = −0.026t + 1.8 into P = 63·0.942ᵗ.

**Solution.** Exponentiate base 10 on both sides: P = 10^(−0.026t + 1.8). Sum-in-exponent rule: P = 10^1.8·10^(−0.026t). Factor the t: P = 10^1.8·(10^(−0.026))ᵗ. Evaluate: 10^1.8 ≈ 63.1 → 63 and 10^(−0.026) ≈ 0.9419 → 0.942. So P = 63·0.942ᵗ. ∎

**Common mistakes.** Writing P = 10^(−0.026t) + 10^1.8 (sums do not split like that); rounding 10^(−0.026) to only 2 decimals and missing the 3-decimal form 0.942.

**Points:** 3 — the exponentiation, the split, both constants evaluated.

**Subdomain:** [A05](../A05-logarithms/).

## Question 10 (official paper) — 3 points

**Asked:** how long until only half of the whisky remains at a constant angels' share of 4.5% per year (years and whole months).

**Solution.** Yearly factor 0.955. Solve 0.955ˣ = 0.5 ⇔ x = ln(0.5)/ln(0.955) ≈ 15.05 years ≈ 15 years + 0.05·12 ≈ 15 years and 1 month.

**Answer:** 15 years and 1 month.

**Common mistakes.** Treating 4.5% yearly loss as linear (that gives 100/4.5 ≈ 22.2 years); 0.05 year converted as 5 or 6 months instead of ≈ 1 (0.05 × 12 = 0.6, which rounds to 1 whole month).

**Points:** 3 — the half-equation, the solve, years-and-months conversion.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 11 (official paper) — 4 points

**Asked:** how many 750 ml bottles can be filled from a 200 L cask of Pappy Van Winkle 23 (year 1: −10%, next 8 years: −4%/yr, remaining years: −3%/yr, then 6 L lost at bottling).

**Solution.** After year 1: 200·0.9 = 180 L. After 8 years at −4%: 180·0.96⁸ ≈ 180·0.7214 ≈ 129.85 L. After the remaining 23 − 9 = 14 years at −3%: 129.85·0.97¹⁴ ≈ 129.85·0.6528 ≈ 84.77 L. Minus bottling loss: 84.77 − 6 = 78.77 L = 78 770 ml. Bottles: 78 770/750 ≈ 105.0 → 105 bottles.

**Answer:** 105 bottles.

**Common mistakes.** Wrong year counts (1 + 8 + 14 = 23 ✓ — not 1 + 8 + 15); applying 3% to the ORIGINAL 200 L each year; forgetting the 6 L bottling loss; rounding up to 106 (only whole bottles can be filled).

**Points:** 4 — 180 L, the two compounded periods, minus 6, the bottle count.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 12 (official paper) — 2 points

**Asked:** a recursive formula for the row of later-added whisky shares: 3; 2.91; 2.82; 2.74; …

**Solution.** Each year every litre already present loses 3%, so each added share behaves the same: next term = previous × 0.97. W(n + 1) = 0.97·W(n), with first term W(1) = 3.

**Answer:** W(n + 1) = 0.97·W(n) with W(1) = 3.

**Common mistakes.** An explicit formula instead of recursive (the question REQUIRES the recursive form); missing the first term (no formula is complete without it).

**Points:** 2 — the recursion, the initial value.

**Subdomain:** [A08](../A08-sequences/).

## Question 13 (official paper) — 4 points

**Asked:** the percentage of the mixture at the end of year 7 that is 5 years old or older (2 decimals).

**Solution.** Track the three qualifying ages at the end of year 7. Original batch (now 7 years old): 100·0.97⁷ ≈ 80.80%. Whisky added at the end of year 1 (now 6 years old): 3·0.97⁶ ≈ 2.50%. Added at the end of year 2 (now 5 years old): 3·0.97⁵ ≈ 2.58%. Total: 80.79... + 2.49... + 2.57... = 85.873...%.

**Answer:** 85.87%.

**Common mistakes.** Including the 4-year-old layer (it is younger than 5); computing 0.97⁷ for ALL layers (later-added whisky starts its decay when added); the complement route is fine too: 100 − 3·(1 + 0.97 + 0.97² + 0.97³ + 0.97⁴) = 85.87.

**Points:** 4 — the three layers' percentages, the sum to 2 decimals.

**Subdomain:** [A08](../A08-sequences/) and [A04](../A04-exponential-growth/).

## Question 14 (official paper) — 4 points

**Asked:** the height at which the photo of the steel letters (365 cm each, pedestal included) was taken, using the enlarged photo on the worksheet (whole cm).

**Method description.** Extend two parallel depth lines of a letter/pedestal in the photo to their vanishing point and draw the horizon through it. In the photo, the left leg of the R (with pedestal) measures 74 mm, and the horizon lies 16 mm above the ground line. The camera height equals the horizon height, so scale with the known letter height: (16/74)·365 ≈ 78.9 cm.

**Answer:** ≈ 79 cm (the key allows measurement spread).

**Common mistakes.** Comparing the horizon height against a letter WITHOUT its pedestal (the 365 cm includes the pedestal); dividing 74/16 instead of 16/74.

**Points:** 4 — vanishing point + horizon, both measurements, the scaled division, whole cm.

**Subdomain:** spatial drawing (perspective/photo measurement).

## Question 15 (official paper) — 4 points

**Asked:** draw the missing letter H into the worksheet's perspective drawing of HIER (H–I distance = I–E distance; H as wide as that distance; the H's crossbar at mid-height like the E's).

**Method description.** Draw lines through the tops and bottoms of the existing letters to the common vanishing point — the H must live between those two guide lines. Double the I–E distance leftwards using the diagonal trick (the diagonals of the rectangle double an interval in perspective): once to place the H's right leg, again to place its left leg (equal spacing AND equal width, both in perspective). Draw the two vertical legs between the guide lines, then connect them with the crossbar at mid-height, vanishing toward the same vanishing point.

**Common mistakes.** Copying the I–E distance linearly onto the drawing (perspective shrinks equal distances!); the crossbar drawn horizontally instead of toward the vanishing point.

**Points:** 4 — guide lines and vanishing point, the right leg, the left leg, the crossbar.

**Subdomain:** spatial drawing (perspective).

## Question 16 (official paper) — 5 points

**Asked:** the first year world cement production would exceed 5000 million tons, if the exponential growth 575 (1970) → 3800 (2010) had continued.

**Solution.** Growth factor over 40 years: 3800/575 ≈ 6.609, so per year g = 6.609^(1/40) ≈ 1.0483. Solve 575·1.0483ᵗ = 5000 ⇔ 1.0483ᵗ = 8.696 ⇔ t = ln(8.696)/ln(1.0483) ≈ 45.8. The first whole year past it: t = 46 → 1970 + 46.

**Answer:** 2016.

**Common mistakes.** The 40th-root taken as /40 of the ratio (that is linear, not exponential); anchoring t = 0 at 2010 without adjusting the final year; answering 2015 (t = 45.8 rounds UP in context).

**Points:** 5 — the 40-year factor, the yearly factor, the equation setup, the solve, the year.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 17 (official paper) — 4 points

**Asked:** the first year production exceeds 4500 million tons under the article's assumption: linear growth from 4300 (2017) to +25% in 2030.

**Solution.** 2030 level: 1.25·4300 = 5375 million tons. Linear yearly increase: (5375 − 4300)/13 ≈ 82.69 million tons per year. Solve 4300 + 82.69t = 4500 ⇔ t ≈ 2.42. First whole year: t = 3 → 2017 + 3.

**Answer:** 2020.

**Common mistakes.** Dividing 25% over 13 years and treating it as percentage growth per year (the problem says linear, i.e. equal ABSOLUTE steps); t counted from 2010; rounding 2.42 to 2 instead of up.

**Points:** 4 — the 5375, the yearly step, the equation, the year.

**Subdomain:** [A02](../A02-linear-relations/).

## Question 18 (official paper) — 4 points

**Asked:** how many times larger China's 2017 cement-related CO₂ emissions were than Europe's, using the worksheet figure (1 decimal).

**Solution.** Read the 2017 stacked graph: Europe ≈ 150 million tons of cement, China ≈ 2300 million tons (read-off margin 50 Mt allowed). Emission factors: Europe 750 kg/ton, China 750 + 220 = 970 kg/ton. Totals: Europe 150 Mton × 750 kg = 112.5 milliard kg; China 2300 Mton × 970 kg = 2231 milliard kg. Ratio: 2231/112.5 ≈ 19.8.

**Answer:** ≈ 19.8 times as large.

**Common mistakes.** Forgetting the +220 for China; comparing production volumes instead of emission totals; unit slip (millions of tons vs billions of kg — the consistent pair gives a pure ratio either way).

**Points:** 4 — the two read-off productions, the 970, the ratio.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (ratios, units) + figure reading.

## Question 19 (official paper) — 4 points

**Asked:** the minimal percentage of concrete that must be made with the Sqape technology to hit the climate target of 450 kg CO₂ per ton of concrete (750 without, 120 with).

**Solution.** Let p be the Sqape share. Weighted emission: 120p + 750(1 − p) ≤ 450 ⇔ 750 − 630p ≤ 450 ⇔ 630p ≥ 300 ⇔ p ≥ 0.47619... So at least 47.62% → rounded up to whole percents: 48%.

**Answer:** at least 48%.

**Common mistakes.** Rounding 47.6 to 47 (at 47% the emission is 453.9 kg — above target; you must round UP); setting up 750p + 120(1 − p) (inverting which share carries which emission).

**Points:** 4 — the variable, the weighted equation, the solve, the rounded-up percent.

**Subdomain:** [A02](../A02-linear-relations/) (weighted means, linear equation).

## Question 20 (official paper) — 3 points

**Asked:** the average franchise fee per branch per month in 2017 (whole euros), given total revenue €99.7M of which €23M wholesale, 143 branches, 6.5% fee.

**Solution.** Branch revenue: (99.7 − 23)/143 = 76.7/143 ≈ €0.5364 million per branch. Fee per branch per year: 0.065·0.5364M ≈ €34 864. Per month: 34 864/12 ≈ €2905.

**Answer:** €2905.

**Common mistakes.** Taking 6.5% of the wholesale-included 99.7M; dividing by 12 before dividing by 143 is fine, but forgetting one of the two divisions is not.

**Points:** 3 — branch revenue, ×6.5%, ÷12.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 21 (official paper) — 3 points

**Asked:** the number of different pizzas the branch can serve (32 variants; 4 NY-Style sizes + 3 other bases each in one size; a double tasty has two different variants on one base).

**Solution.** Base options: 4 + 3 = 7 bases. Per base: 32 single-variant pizzas plus the double tasties — unordered PAIRS of two different variants: C(32,2) = (32·31)/2 = 496. Per base: 32 + 496 = 528. Total: 7·528 = 3696.

**Answer:** 3696 different pizzas.

**Common mistakes.** 32·31 for the double tasty (ordering does not matter — half-and-half is one pizza); forgetting the single-variant pizzas; counting the three special bases as one.

**Points:** 3 — the 7 bases, the C(32,2) = 496, the total.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 22 (official paper) — 5 points

**Asked:** judge Arie's claims: A — two 35 cm pizzas give more pizza than three 25 cm pizzas; B — the price per cm² is higher for the two large ones.

**Solution.** Radii: 17.5 and 12.5 cm. Areas: large π·17.5² ≈ 962.1 cm², small π·12.5² ≈ 490.9 cm². Statement A: 2·962.1 = 1924.2 vs 3·490.9 = 1472.6 cm² — the two large ones give MORE pizza: A is TRUE. Statement B: large: 15.49/962.1 ≈ €0.0161 per cm²; small: 8.99/490.9 ≈ €0.0183 per cm² — the LARGE pizza is cheaper per cm²: B is NOT true.

**Answer:** A true, B false.

**Common mistakes.** Comparing diameters or circumferences instead of areas (area scales with the radius SQUARED — this is the classic pizza trap); computing total price ÷ single-pizza area for the per-cm² claim; judging B from A's truth (they are independent).

**Points:** 5 — the two areas, the two totals, the two per-cm² prices, both verdicts.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (areas, ratios).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math A folder](../README.md).*
