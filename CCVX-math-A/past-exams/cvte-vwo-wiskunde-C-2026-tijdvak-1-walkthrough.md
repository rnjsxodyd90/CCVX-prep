# Walkthrough — CvTE VWO examen wiskunde C, 2026 tijdvak 1 (supplementary reasoning practice for wiskunde A)

- **Official paper:** VWO wiskunde C, centraal examen 2026 period 1, college code VW-1026-a-26-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1026-a-26-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1026-a-26-1-c.pdf>

**Note — this is a wiskunde C exam, not wiskunde A.** College code VW-1026-a belongs to VWO wiskunde C (VWO wiskunde A carries code VW-1024-a). This walkthrough is kept in the math-A prep as supplementary reasoning practice only: percentages, algebra, exponential models, counting and formal logic here transfer directly to CCVX wiskunde A, but the exam's coverage is NOT wiskunde A coverage — wiskunde C has no differentiation, no binomial or normal distribution and no hypothesis testing, so use the filtered per-question subdomain links as pointers to the overlapping skills, not as a syllabus map. Walkthroughs of the real VWO wiskunde A exams live in `cvte-vwo-wiskunde-A-…-tijdvak-1-walkthrough.md`.


Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you what each question asks for in our own words, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito). Questions that depend on a figure or worksheet (perspective drawing, a puzzle grid) get their answer described in words or as a method; for visual checks the official key's drawing is decisive.

Exam totals: 23 questions in 7 problems, 74 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: many short contexts — percentages and growth factors ([A01](../A01-numbers-and-algebra/), [A04](../A04-exponential-growth/)), counting ([A11](../A11-systematic-counting/)), exponent models and a forgetting curve ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/)), geometry volumes/areas ([B-style 3D visualisation]), radio waves periodicity ([A01](../A01-numbers-and-algebra/), [A09](../A09-sine-functions/)), code counting ([A11](../A11-systematic-counting/)), and logical reasoning.

## Question 1 (official paper) — 3 points

**Asked:** with equal numbers of gold and silver medals and 34 total, how many golds make the €780 000 bonus total? (Bonus values: gold €30 000, silver €22 500, bronze €15 000.)

**Solution.** Let g = gold = silver, b = bronze, with 2g + b = 34. The bonus: 30 000g + 22 500g + 15 000·b = 780 000. Substitute b = 34 − 2g: 52 500g + 510 000 − 30 000g = 780 000 ⇔ 22 500g = 270 000 ⇔ g = 12.

**Answer:** 12 golds (with 12 silvers and 10 bronzes).

**Common mistakes.** Using the actual historical 36-medal totals instead of the hypothetical 34; solving 2g + b = 34 for g and ignoring the money equation (there are two conditions — use both).

**Points:** 3 — two equations, clean elimination.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (systems).

## Question 2 (official paper) — 3 points

**Asked:** at most how many team members for a gold-medal team whose per-member payout stays above €11 000 (payout P = B·n^(−1/2), B = 30 000)?

**Solution.** 30 000·n^(−1/2) > 11 000 ⇔ √n < 30/11 ⇔ n < 900/121 ≈ 7.438: so at most 7 members. Check both sides (score method): n = 7 gives ≈ €11 339 (> 11 000); n = 8 gives ≈ €10 607 (< 11 000).

**Answer:** at most 7.

**Common mistakes.** Direction of the inequality on the negative power (per-member shrinks with n); reporting n = 7.4 as an integer.

**Points:** 3 — solve between two check-values, integer decision.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) and [A01](../A01-numbers-and-algebra/).

## Question 3 (official paper) — 3 points

**Asked:** how much more did Hassan's total bonus exceed Lavreysen's, with the rules: full for the best medal, 2/3 for the second, 1/3 for the third, and the team rule n^(−1/2) on a team-medal payout.

**Solution.** Hassan: one gold full €30 000 + 2/3·30 000 + 1/3·15 000 = 30 000 + 20 000 + 5 000 = €55 000. Lavreysen: his team gold pays 30 000·4^(−1/2) = €15 000 to him; ordering his bonuses: 30 000 (individual gold) + 2/3·15 000 + 1/3·15 000 (bronze) = 30 000 + 10 000 + 5 000 = €45 000. Difference: €10 000.

**Answer:** €10 000 more.

**Common mistakes.** Applying the 2/3 to the full 30 000 team amount (the team rule shrinks it first to 15 000); ordering Hassan's medals wrongly (the full amount goes to the highest value medal — both her golds).

**Points:** 3 — both totals with the two rules in the right order.

**Subdomain:** [A01](../A01-numbers-and-algebra/) and [A03](../A03-power-and-quadratic-relations/).

## Question 4 (official paper) — 4 points

**Asked:** how many different top-10 medal standings are possible given the certain top-five (3 countries), the certain top-ten (3 more), and 14 candidates for the last four places.

**Solution.** The 3 certain top-five countries fill best-five slots in 5·4·3 = 60 ways. The 3 certain top-ten countries fill the remaining top-10 slots in 7·6·5 = 210 ways. The other four slots go to 4 of the 14 candidates in order: 14·13·12·11 = 24 024 ways. Total: 60 × 210 × 24 024 = 302 702 400.

**Answer:** 302 702 400.

**Common mistakes.** Counting the candidate four as C(14,4) without their ordering (the places 6–10 are distinct positions!); overlapping the two "certain" groups (they are disjoint: three + three fixed countries, distinct from the 14).

**Points:** 4 — three chained permutation counts multiplied.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 5 (official paper) — 3 points

**Asked:** the percentage increase of the otter-trek km-squares from winter 2013/2014 to 2018/2019, given the yearly changes −7%, +20%, +23%, +4%, +12%.

**Solution.** Chain the factors: 0.93 × 1.20 × 1.23 × 1.04 × 1.12 = 1.116 × 1.23 = 1.3727; × 1.04 = 1.4276; × 1.12 = 1.5989. Increase ≈ 60% (whole number).

**Answer:** ≈ 60%.

**Common mistakes.** Adding the percentages (−7 + 20 + 23 + 4 + 12 = 52% — wrong, factors multiply); rounding mid-chain — keep full factors until the end.

**Points:** 3 — five factors and the percentage off the product.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 6 (official paper) — 3 points

**Asked:** use the trendline of figure 1 to estimate the 2018 population from 97 driven-over otters.

**Solution.** Read a point of the drawn line (e.g. (60, 250): 60 hit otters ↔ population 250), ratio 250/60 ≈ 4.17 per hit otter. At 97: ≈ 97 × 4.17 ≈ 404 otters (reading margins apply — the official accepts a small band).

**Answer:** ≈ 404 otters.

**Common mistakes.** Using the inverse ratio; reading one axis for the other; more decimals than the figure supports.

**Points:** 3 — point read-off, proportionality, rounded estimate.

**Subdomain:** [A02](../A02-linear-relations/).

## Question 7 (official paper) — 3 points

**Asked:** the annual growth percentage (1 decimal) matching population 44 → 360 over the decade 2009–2019.

**Solution.** Factor over 10 years: 360/44 ≈ 8.1818, so per year g = 8.1818^(1/10) ≈ 1.2339 → ≈ 23.4% per year.

**Answer:** ≈ 23,4%.

**Common mistakes.** Ten-th root confused with √ (this is g^10 = 360/44, so 360/44^(1/10)); rounding 1.23 before answering one decimal (keep the 10th-root value for the last step).

**Points:** 3 — 10-year factor, 10th root, single decimal.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 8 (official paper) — 5 points

**Asked:** in which year the annual *increase* first exceeds 360 otters, with continued 23% yearly growth from 360 at end-2019.

**Solution.** The increase during year t+1 equals 0.23·N(t), exceeding 360 when N(t) > 360/0.23 ≈ 1565.2. Solve 360·1.23ᵗ = 1565.2: 1.23ᵗ ≈ 4.348 ⇔ t = ln(4.348)/ln(1.23) ≈ 7.09 years after the end of 2019 (or solve the increase equation directly: t ≈ 8.09). That threshold is crossed during the year after end-2026 (t = 7 < 7.09): end of 2027 (t = 8) the population is big enough, so the increase in **2028** is the first above 360.

**Answer:** 2028.

**Common mistakes.** Answering the year when the population passes 1565 (that's the year *before* the threshold increase); writing the inequality for N instead of for the increase; rounding t = 7.09 to t = 7 and concluding 2027 by mistake (t = 7 is not yet past the boundary!).

**Points:** 5 — increase formulation, exponential equation, careful year mapping.

**Subdomain:** [A04](../A04-exponential-growth/) and [A05](../A05-logarithms/).

## Question 9 (official paper) — 3 points

**Asked:** show that the cube's content is about four times the pyramid's.

**Solution.** Cube: 100³ = 1 000 000 cm³. Pyramid: ⅓·100²·72 = 240 000 cm³. Ratio: 1 000 000/240 000 ≈ 4.17, "about four times". ∎

**Common mistakes.** Forgetting the pyramid's ⅓ (that gives 3× as if it compared prism-to-cube); distributing the ⅓ incorrectly over height.

**Points:** 3 — both volume formulas and the ratio.

**Subdomain:** stereo-visual work (acknowledged in the CCVX prep folders under geometry notes of [B11](../../CCVX-math-B/B11-triangle-geometry/) for the needed side computations).

## Question 10 (official paper) — 4 points

**Asked:** investigate whether the cube's corten-steel area (all sides but the bottom) is also about four times the pyramid's.

**Solution.** Cube without bottom: 5 × 100² = 50 000 cm². Pyramid sides: slant height √(72² + 50²) = √7684 ≈ 87.66 cm (the pyramid's apex sits above the base centre, 50 cm from each side), total 4 × ½·100·87.66 ≈ 17 532 cm². Ratio ≈ 50 000/17 532 ≈ 2.85 — *not* about four.

**Answer:** no (about 2.9 times, not 4).

**Common mistakes.** Using 72 cm instead of the slant height (the triangular faces are taller than the pyramid!); concluding consistency with Q9 despite the contradiction (the two scale factors differ — that's the point of the question).

**Points:** 4 — slant height via Pythagoras, both areas, conclusion.

**Subdomain:** [B11](../../CCVX-math-B/B11-triangle-geometry/)-level spatial geometry.

## Question 11 (official paper) — 5 points

**Asked:** complete the perspective drawing of the pyramid on the worksheet (base already given in perspective, apex 7.2 cm above the base centre).

**Method description.** Extend the base's edges to the vanishing point; construct the base centre via its diagonals; raise a vertical of 7.2 cm straight up from the centre (the scale height — verticals stay vertical in this perspective, NOT along the vanishing direction); place the apex there and connect it to the four corners; the hidden back edge may be omitted or dashed. The official figure checks each of these five steps.

**Common mistakes.** Measuring the apex 7.2 cm along the vanishing direction instead of straight up; apex above a base corner instead of the centre; wrong scale conversion (7.2 cm in the drawing corresponds in the stated scale).

**Points:** 5 — one per correct construction step.

**Subdomain:** spatial/visual reasoning (outside Fokus of the CCVX folders; listed with geometry notes).

## Question 12 (official paper) — 2 points

**Asked:** prove with a computation that the figure's data canNOT come from an exponential decay.

**Solution.** Exponential decay would apply the same factor per equal time step. From the figure: the first 20 minutes keep 58% (factor 0.58); if that were per-20-minutes exponential, after one hour (3 steps) the kept share would be 0.58³ ≈ 0.195 ≈ 19.5%. But the figure says 44% after 1 hour. Contradiction: not exponential. ∎

**Common mistakes.** Checking one point pair only ("it keeps decreasing — so exponential"); 0.58² instead of 0.58³ (3 steps of 20 min per hour); reasoning from shape instead of a numeric counterexample.

**Points:** 2 — expected factor computation and the contradiction.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 13 (official paper) — 4 points

**Asked:** after how many whole minutes you'd have forgotten half of just-learned information, under the exam's formula P = 31.7·t^(−0.127) (t in days).

**Solution.** Half forgotten means 50% remembered: 31.7·t^(−0.127) = 50 ⇔ t^(−0.127) = 50/31.7 ≈ 1.5773 ⇔ t^(0.127) = 0.6340 ⇔ t = 0.634^(1/0.127) ≈ 0.02762 days ≈ 0.02762 × 1440 ≈ 39.8 minutes → 40 minutes.

**Answer:** after 40 minutes.

**Common mistakes.** Negative power slip (P *falls* with t, so t^(0.127) = 31.7/50 inverted correctly); missing the day→minute conversion (×1440).

**Points:** 4 — the power equation, numerical solving (VWO calculator), minutes.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/).

## Question 14 (official paper) — 2 points

**Asked:** reason from the formulas for P and V that eventually everything is forgotten.

**Solution.** P = 31.7·t^(−0.127) → 0 as t grows (negative power), and V = 100 − P → 100: the forgotten share approaches 100%. ∎

**Common mistakes.** Limit with a positive power (that would grow); claiming P → 31.7 instead of 0.

**Points:** 2 — the limit argument in both formulas.

**Subdomain:** [A04](../A04-exponential-growth/) (end behaviour).

## Question 15 (official paper) — 3 points

**Asked:** the difference (1 decimal) between the first-hour forgetting percentages per the curve (figure) and per the formula, with the curve's value being smaller.

**Solution.** Formula at t = 1/24: P = 31.7/(1/24)^(0.127) = 31.7/(24^(−0.127)) = 31.7·24^(0.127) ≈ 31.7·1.4972 ≈ 47.46% remembered → 52.54% forgotten. Curve figure: 44% remembered → 56% forgotten. Difference: 56 − 52.54 ≈ 3.46 ≈ 3.5 percentage points.

**Answer:** 3.5 percentage points.

**Common mistakes.** Answering 47.46 − 44 (compare the FORGOTTEN shares, not the remembered ones!); the (1/24)^0.127 inversion.

**Points:** 3 — formula evaluation, both forget-shares, correct difference.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) and [A01](../A01-numbers-and-algebra/).

## Question 16 (official paper) — 3 points

**Asked:** the frequency (in thousands) of the radio wave from the figure (3.5 periods fit in 6 millionths of a second).

**Solution.** One period: 6/3.5 ≈ 1.714 micro-second = 1.714·10⁻⁶ s. Frequency = 1/T ≈ 1/(1.714·10⁻⁶) ≈ 583 333 → ≈ 583 thousand.

**Answer:** ≈ 583 000.

**Common mistakes.** 6 multiplications instead of 3.5 divisions; millions vs thousands of periods per second mixed up.

**Points:** 3 — period read-off, reciprocal, thousands rounding.

**Subdomain:** [A01](../A01-numbers-and-algebra/).

## Question 17 (official paper) — 3 points

**Asked:** compute the true wavelength of a 14-million-frequency radio wave (speed 300 000 km/s; state in whole cm).

**Solution.** Wavelength = speed/frequency = 300 000/14 000 000 km = 0.02143 km ≈ 21.43 m ≈ 2143 cm. (Far from the "about 20 m" mentioned — compute, don't trust.)

**Answer:** ≈ 2143 cm.

**Common mistakes.** Multiplying speed × frequency (it's a division); km-to-cm conversion (1 km = 100 000 cm).

**Points:** 3 — correct division, unit conversion.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (units).

## Question 18 (official paper) — 2 points

**Asked:** give an example of a NON-allowed amateur radio code of exactly six characters.

**Answer (one example).** PA6QRST: it puts the digit 6 in the third position, which is forbidden (and additionally uses Q with allowed follower, fine). Any code violating one rule counts: a forbidden 6, Q followed by O, or the letter sequence SOS.

**Common mistakes.** Giving a valid code (check all three rules!); a code of the wrong length (exactly six asked).

**Points:** 2 — one explicitly rule-violating code.

**Subdomain:** [A11](../A11-systematic-counting/) (rules literacy).

## Question 19 (official paper) — 5 points

**Asked:** the total number of possible code combinations under the three given rules.

**Solution.** First part: 1·8·9 = 72 (P, one of 8 letters, one of 9 digits). Second part: 1 letter: 26; 2 letters: 676; 3 letters: 26³ = 17 576, minus the Q-first forbidden-follower cases 1·7·26 = 182, minus the single SOS combination = 17 393. Second-part total: 26 + 676 + 17 393 = 18 095. All codes: 72 × 18 095 = 1 302 840.

**Answer:** 1 302 840.

**Common mistakes.** Forgetting the SOS exclusion (−1); subtracting the Q-restriction wrongly (7 forbidden follow-letters ×26 third letters — only when the first part letter is Q!); adding vs multiplying the two parts.

**Points:** 5 — both parts, exclusions, final product.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 20 (official paper) — 2 points

**Asked:** reason why island A must connect at least one bridge to B and one to C.

**Solution.** Island A needs three outgoing bridges in two available directions (B-side and C-side), and at most two bridges may run in one direction. Two in one direction leaves one — unavoidable: at least one bridge goes to B and at least one to C. ∎

**Common mistakes.** Assuming both to B and one to C always (only "at least one each way" is forced).

**Points:** 2 — the two-direction/max-two argument.

**Subdomain:** logical reasoning (bridge puzzle).

## Question 21 (official paper) — 2 points

**Asked:** explain why two bridges already built between D and E cannot be right.

**Solution.** Both D and E have now exhausted their maximum number of bridges (their displayed numbers are met), so neither can receive any further bridge from the outside. D and E thus form a closed pair unreachable from other islands — but the puzzle demands one connected group. ∎

**Common mistakes.** Citing the max-two-per-pair rule instead (two bridges between two islands is allowed! The problem is the *isolation*).

**Points:** 2 — the finished-count → isolation argument.

**Subdomain:** logical reasoning (bridge puzzle).

## Question 22 (official paper) — 4 points

**Asked:** complete the table: for island numbers 1–8, how many directions (one through four) can bridges go in?

**Answer (described).** Number 1: one direction only. 2: one or two directions. 3: two or three. 4: two, three or four. 5: three or four. 6: three or four (with the given side-case at two... the side note of the paper). 7: four only. 8: four only. Reasoning: bridges per direction max 2, total must equal the number, and fewer directions must still reach the number with max 2 per direction.

**Common mistakes.** Forgetting the "at most 2 per direction" cap (number 7 forces exactly 4 directions; 8 likewise); reading "directions" as "bridges".

**Points:** 4 — one score per correct table row (four rows get four points).

**Subdomain:** logical/systematic constraint reasoning ([A11](../A11-systematic-counting/)-adjacent).

## Question 23 (official paper) — 3 points

**Asked:** finish the puzzle on the worksheet completely.

**Method description.** Use the table of Q22 to place bridges from forced islands first (the grey "finished" islands), keep totalling each island's target away from maxed ones, avoid crossings, keep the one-group connectivity check to the end. The official correctievoorschrift's drawing shows the unique completion — compare yours bridge by bridge (each missing or wrong bridge costs one of the three points).

**Common mistakes.** Guessing bridges before the forced ones are placed; leaving an island one bridge short; a crossing pair.

**Points:** 3 — per correctly drawn bridge.

**Subdomain:** logical reasoning (bridge puzzle).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math A folder](../README.md).*
