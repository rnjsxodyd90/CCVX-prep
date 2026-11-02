# Walkthrough — CvTE VWO examen wiskunde A, 2026 tijdvak 1 (May 2026)

- **Official paper:** VWO wiskunde A, centraal examen 2026 period 1, college code VW-1024-a-26-1-o.
- **Paper (PDF, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1024-a-26-1-o.pdf>
- **Official answers (correctievoorschrift, examenblad.nl):** <https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1024-a-26-1-c.pdf>

Open the official paper next to this page. This walkthrough does not repeat the question texts, tables or figures, and restates only the given formulas and numbers needed to keep the solutions solvable — it tells you in our own words what each question asks for, then works out a complete solution independently derived by us. Copyright of the paper: College voor Toetsen en Examens (Cito). Questions that depend on a figure (the chess-strength trend, the forgetting curve, the cloudiness sketch) get their read-off method described in words.

Exam totals: 20 questions in 6 problems, 75 points. This CvTE exam allowed a graphing calculator (unlike the CCVX exam); calculator-dependent steps are flagged. Coverage: chess-program strength: counting, linear vs log models ([A01](../A01-numbers-and-algebra/), [A02](../A02-linear-relations/), [A05](../A05-logarithms/)), the Ebbinghaus forgetting curve: exponential test, power model, derivative ([A04](../A04-exponential-growth/), [A03](../A03-power-and-quadratic-relations/), [A06](../A06-differentiation/)), urban heat islands: log models with sin-based factors ([A05](../A05-logarithms/), [A09](../A09-sine-functions/)), Rubik's Race: block counting and multinomial patterns ([A03](../A03-power-and-quadratic-relations/), [A11](../A11-systematic-counting/)), heat pumps: exponential growth and a log sound-level model ([A04](../A04-exponential-growth/), [A05](../A05-logarithms/), [A06](../A06-differentiation/)), app income: two stacked linear models ([A02](../A02-linear-relations/)).

## Question 1 (official paper) — 2 points

**Asked:** how many times larger Shannon's rough estimate (30 options per move, 10 moves) is than the real 6.93×10^13 game continuations (1 decimal).

**Solution.** Shannon's estimate: 30^10 = 5.9049×10^14. Ratio: 5.9049×10^14 / (6.93×10^13) ≈ 8.52.

**Answer:** 8.5 times as large.

**Common mistakes.** 5^30 or 10^30 instead of 30^10 (the 30 counts per MOVE, and there are 10 moves); forgetting the exponent rule 30^10 = (3×10)^10 = 3^10×10^10 on a basic calculator.

**Points:** 2 — the estimate 30^10, the ratio.

**Subdomain:** [A01](../A01-numbers-and-algebra/) (powers, scientific notation).

## Question 2 (official paper) — 4 points

**Asked:** in which year a playing strength of 2853 would have been reached if the linear growth of figure 1 had continued past 1995.

**Solution.** Read two points from the trend line, e.g. (1989, 2150) and (1995, 2390) — the key allows read-off spread. Yearly increase: (2390 − 2150)/6 = 40. Solve 2390 + 40t = 2853 (t = years after 1995): t = 463/40 ≈ 11.6, so during the 12th year after 1995.

**Answer:** 2007.

**Common mistakes.** Averaging the two read-off years' strengths; t added to 1989 instead of 1995; answering 2006 (t = 11.57 lies inside the 12th year — round up in context).

**Points:** 4 — two read-off points, the slope, the equation, the year.

**Subdomain:** [A02](../A02-linear-relations/).

## Question 3 (official paper) — 4 points

**Asked:** how long after Houdini's release Stockfish's strength caught up again (whole months), given Stockfish went linearly from 3097 (1 Jan 2009) at +39/yr and Houdini followed R_H = 92.1·log(t + 1) + 3190 from 1 Jan 2010.

**Solution.** Anchor both at 1 Jan 2010 (t = 0): Stockfish had 3097 + 39 = 3136, so R_S = 3136 + 39t. Solve 3136 + 39t = 92.1·log(t + 1) + 3190. With the calculator's intersect (or systematic guessing): t ≈ 2.74 years ≈ 32.9 → 33 months.

**Answer:** after 33 months.

**Common mistakes.** Anchoring Stockfish at 2009 (then t runs a year wrong and the months come out ≈ 21); stating "2.74 years ≈ 32 months" (0.74 × 12 = 8.9 → 33, not 8 → 32).

**Points:** 4 — the 3136 anchor, the linear formula, the equation, the whole-month conversion.

**Subdomain:** [A02](../A02-linear-relations/) vs [A05](../A05-logarithms/) (intersection).

## Question 4 (official paper) — 4 points

**Asked:** build the new formula R = a·log(t + 1) + c (t = 0 at 1 Jan 2016), given that on 1 Jan 2016 the real strength was 121 above the old formula's prediction and on 1 Jan 2019 it was 3433 (a: 1 decimal, c: whole).

**Solution.** Old prediction at t = 6 years after 2010: R_H = 92.1·log(7) + 3190 ≈ 3268. Real value: 3268 + 121 = 3389, so c = 3389 (since log(0 + 1) = 0). Then 1 Jan 2019 is t = 3: a·log(4) + 3389 = 3433 ⇔ a = 44/log(4) = 44/0.60206 ≈ 73.1.

**Answer:** R = 73.1·log(t + 1) + 3389.

**Common mistakes.** Adding the 121 to 3190 instead of to the computed 3268 (the +121 applies to the full old-formula value at 2016); using t = 2 for 2019 (2016 → 2019 is three years, t = 3); log(3) instead of log(4) — the formula holds t + 1 inside the log.

**Points:** 4 — 3268 computed, c = 3389, the t = 3 equation, a = 73.1.

**Subdomain:** [A05](../A05-logarithms/) (fitting a log formula).

## Question 5 (official paper) — 2 points

**Asked:** show with a calculation that the forgetting-curve data in the figure cannot be exponential decay.

**Solution.** Read from the figure: after 20 minutes 58% remains, after 1 hour 44%. Twenty minutes is ⅓ hour, so if the decay were exponential, the per-hour factor would have to be 0.58³ = 0.195 — but the figure's actual 1-hour factor is 0.44. These clash: no exponential decay. ∎

**Common mistakes.** Comparing the raw percentages 58 vs 44 without converting to a common time unit; arguing from the unequal axis spacing alone (the question demands a calculation on the percentages).

**Points:** 2 — the 0.58³ requirement, the mismatch with 0.44.

**Subdomain:** [A04](../A04-exponential-growth/) (growth-factor test).

## Question 6 (official paper) — 4 points

**Asked:** after how many whole minutes half of the newly learned information is forgotten again, per P = 31.7/t^0.127 (P in %, t in days).

**Solution.** Half forgotten = 50% retained: 31.7/t^0.127 = 50 ⇔ t^0.127 = 0.634 ⇔ t = 0.634^(1/0.127) ≈ 0.0276 days. Convert: 0.0276 × 24 × 60 ≈ 39.8 minutes → at 40 whole minutes (at 39 it is not yet half forgotten).

**Answer:** after 40 minutes.

**Common mistakes.** Raising to the power 0.127 instead of 1/0.127; converting days to hours only (×24) without going to minutes; rounding 39.8 down (the question asks when the half IS forgotten — round up).

**Points:** 4 — the equation, the power solve, the day→minute conversion, the whole-minute answer.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) (power equations).

## Question 7 (official paper) — 4 points

**Asked:** how many times greater the forgetting speed is after 1 hour than after 1 week, using the derivative of P (whole number).

**Solution.** P = 31.7·t^(−0.127) ⇒ P′(t) = −0.127·31.7·t^(−1.127) = −4.0259·t^(−1.127) (%/day). At 1 hour, t = 1/24 day: P′(1/24) ≈ −4.0259·24^1.127 ≈ −144.6 %/day. At 1 week, t = 7: P′(7) ≈ −4.0259·7^(−1.127) ≈ −0.449 %/day. Ratio: 144.6/0.449 ≈ 322.

**Answer:** 322 times as large.

**Common mistakes.** Comparing P-values instead of the DERIVATIVE (the question is about speed, not level); mixing time units (both t's must be in days); forgetting the chain there's no extra factor here — but watch the minus signs cancel in the ratio.

**Points:** 4 — the derivative, both evaluated speeds, the ratio.

**Subdomain:** [A06](../A06-differentiation/) (power rule in context).

## Question 8 (official paper) — 3 points

**Asked:** the population a city would need for V_max = 13 °C under formula 1 (V_max = 2.01·log(P) − 4.06), and why that rules out such a difference for the Netherlands.

**Solution.** 2.01·log(P) − 4.06 = 13 ⇔ log(P) = 17.06/2.01 ≈ 8.488 ⇔ P ≈ 10^8.488 ≈ 307 000 000 inhabitants — more than seventeen times the whole Dutch population, so no Dutch city can ever show that difference. The "13 degrees warmer" claim is not realistic. ∎

**Answer:** ≈ 307 million inhabitants — more than the whole of the Netherlands, so unrealistic.

**Common mistakes.** 13/(2.01) − ... mishandling the −4.06 (−4.06 moves over FIRST: log P = (13 + 4.06)/2.01); comparing against a single Dutch city only — the cleaner killer argument is the whole country's population.

**Points:** 3 — the equation, the 307-million solve, the realism argument.

**Subdomain:** [A05](../A05-logarithms/).

## Question 9 (official paper) — 3 points

**Asked:** reason from figure 2 and V = V_max·C·W that with rising cloud cover (constant wind, constant outside temperature) the city temperature drops.

**Solution.** Figure 2 shows C falling as N rises from 0 to 8. In formula 2, V_max (fixed city) and W (constant wind) stay put, so a falling C drags V down: the temperature DIFFERENCE shrinks. With the outside temperature constant, a shrinking difference means the city temperature itself falls. ∎

**Common mistakes.** Claiming C rises (read the figure's trend direction carefully); concluding "V falls" without the last link to the city's absolute temperature.

**Points:** 3 — C decreases, V = product follows, the outside-temperature link.

**Subdomain:** [A05](../A05-logarithms/)-adjacent model reasoning.

## Question 10 (official paper) — 3 points

**Asked:** by what percentage Berlin's wind limit exceeded Hamburg's in 2018 (3 600 000 vs 1 830 700 inhabitants; 1 decimal).

**Solution.** L = (0.567·log P − 0.513)². Berlin: (0.567·6.55630 − 0.513)² = 3.20442² ≈ 10.27 m/s. Hamburg: (0.567·6.26266 − 0.513)² = 3.03793² ≈ 9.23 m/s. Percentage greater: (10.27 − 9.23)/9.23 ≈ 0.1126 → 11.3%.

**Answer:** 11.3%.

**Common mistakes.** Squaring only part of the bracket; dividing by Berlin's value in the base (the question is "Berlin greater THAN Hamburg" — base is Hamburg); forgetting the log is base 10 on populations in units of persons (not millions).

**Points:** 3 — both limits, the relative difference.

**Subdomain:** [A05](../A05-logarithms/).

## Question 11 (official paper) — 5 points

**Asked:** the maximum city temperature in Eindhoven on that 2019 day (outside 36.4 °C, wind 3 m/s, cloudiness 3, 230 000 inhabitants), chaining all five formulas (1 decimal).

**Solution.** Step by step. V_max = 2.01·log(230 000) − 4.06 = 2.01·5.36173 − 4.06 ≈ 6.717. Wind limit L = (0.567·5.36173 − 0.513)² = 2.52710² ≈ 6.386 m/s. W = 0.5 + 0.5·sin(π·(3/6.386 + 0.5)) = 0.5 + 0.5·sin(0.9698π) ≈ 0.5 + 0.5·0.09473 ≈ 0.547. C = 0.65 + 0.35·sin((π/8)·(3 + 4)) = 0.65 + 0.35·sin(7π/8) = 0.65 + 0.35·0.3827 ≈ 0.784. Difference V = 6.717·0.784·0.547 ≈ 2.88 °C. City maximum: 36.4 + 2.88 ≈ 39.3 °C.

**Answer:** ≈ 39.3 °C.

**Common mistakes.** Calculator in DEGREES instead of radians for the sine arguments (they contain π!); using L's formula with v already plugged in (v enters only via formula 5); adding V to nothing — V is the DIFFERENCE over the outside temperature 36.4.

**Points:** 5 — V_max, L, W, C, and the final addition (each computed value one point).

**Subdomain:** [A09](../A09-sine-functions/) and [A05](../A05-logarithms/) (chained model).

## Question 12 (official paper) — 3 points

**Asked:** find p and q in A(n) = p·(n − 1)² + q from A(2) = 8 and A(3) = 26, with explanation.

**Solution.** Substitute: n = 2 gives p + q = 8; n = 3 gives 4p + q = 26. Subtract: 3p = 18 → p = 6, then q = 8 − 6 = 2. Check against the alternative form: 6(n − 1)² + 2 = 6n² − 12n + 8 ✓ (exactly formula 2 of the paper).

**Answer:** p = 6, q = 2.

**Common mistakes.** Substituting n = 2 into (n − 1)² as −1²... i.e. sign slips with (n − 1)²; swapping p and q when reporting.

**Points:** 3 — both equations, p = 6, q = 2.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/) (two-equation fit).

## Question 13 (official paper) — 3 points

**Asked:** from which n a cube holds more than 250 blocks, using A(n) = 6n² − 12n + 8.

**Solution.** Neighbouring check is fastest: A(7) = 6·49 − 84 + 8 = 218 ≤ 250 and A(8) = 6·64 − 96 + 8 = 296 > 250 — so from n = 8. (Equation route: 6n² − 12n + 8 = 250 ⇔ n = 1 + √(41⅓) ≈ 7.43 → the first whole n above it is 8.)

**Answer:** from n = 8.

**Common mistakes.** Solving the equation and reporting 7.43 (n is a whole cube number — answer "from 8"); the quadratic formula with −c = −242 mis-signed.

**Points:** 3 — the equation or element computation, A(7) and A(8), the n = 8 conclusion.

**Subdomain:** [A03](../A03-power-and-quadratic-relations/).

## Question 14 (official paper) — 4 points

**Asked:** the number of possible colour patterns on a player's 25-square board (4 tiles in each of 6 colours, one square stays empty), in the form a·10^16 with a to 2 decimals.

**Solution.** Place the colours one after another: C(25,4) for colour 1, then C(21,4), C(17,4), C(13,4), C(9,4), C(5,4); the empty square takes the leftover spot. Product = 25!/(4!)⁶. Calculator: 25! = 1.5511×10^25 and 24⁶ ≈ 1.91103×10^8, quotient ≈ 8.1167×10^16.

**Answer:** ≈ 8.12·10^16 patterns.

**Common mistakes.** 25·24! without dividing by the 4! per colour (tiles of one colour are indistinguishable); six colours but forgetting the empty square takes the last spot (it is automatic after 24 placed tiles — no extra factor 25 needed in this route); inputting 25!/24^6 as 25!/(24⁶) wrongly on the calculator (that's actually right — the slip is dividing by 24·6).

**Points:** 4 — first colour C(25,4), the chain of five more, the full product, the answer form.

**Subdomain:** [A11](../A11-systematic-counting/) (multinomial counting).

## Question 15 (official paper) — 5 points

**Asked:** what percentage of all 6^9 nine-tile patterns a player can actually lay, given that 68 676 patterns contain six or more same-colour tiles (1 decimal).

**Solution.** The key insight: a player owns at most FOUR tiles per colour, so patterns with FIVE same-colour tiles are also unmakeable — not just the given six-or-more group. Count exactly-five patterns: pick the colour (6 ways), pick its 5 spots on the 9-tile pattern: C(9,5) = 126; fill the remaining 4 spots freely from the other 5 colours: 5^4 = 625. Total unmakeable: 68 676 + 6·126·625 = 68 676 + 472 500 = 541 176. Makeable: 6^9 − 541 176 = 10 077 696 − 541 176 = 9 536 520. Percentage: 9 536 520/10 077 696 ≈ 94.6%.

**Answer:** ≈ 94.6%.

**Common mistakes.** Subtracting only the 68 676 (leads to 99.3% — wrong, the five-of-a-colour patterns also exceed the player's stock); computing C(9,5)·5^4 without the 6 colour choices; patterns with 5 of TWO colours — impossible since 5 + 5 > 9, so no overlap correction needed.

**Points:** 5 — the unmakeable split, the 756·625 count, the subtraction, the percentage.

**Subdomain:** [A11](../A11-systematic-counting/).

## Question 16 (official paper) — 3 points

**Asked:** the yearly percentage growth of installed heat pumps 1994–2019 (1700 → 412 000 over 25 years; 1 decimal).

**Solution.** Factor over 25 years: 412 000/1700 ≈ 242.35. Per year: g = 242.35^(1/25) ≈ 1.2456 → 24.6% per year.

**Answer:** 24.6% per year.

**Common mistakes.** (412 000 − 1700)/25 as a percentage BASE (linear thinking — capped at 1 point by the key); the 25th root taken as 25th power.

**Points:** 3 — the 25-year factor, the root, the percentage.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 17 (official paper) — 4 points

**Asked:** the first year in which the yearly INCREASE of installed heat pumps exceeds 200 000, assuming W = 1700·e^(0.22t) (t = 0 at end of 1994) keeps holding.

**Solution.** The increase in year k (from t = k − 1 to t = k): W(k) − W(k − 1). Tabulate near the crossing: W(28) ≈ 804 827, W(29) ≈ 1 002 877, W(30) ≈ 1 249 661. Increases: W(29) − W(28) ≈ 198 049 (< 200 000) and W(30) − W(29) ≈ 246 784 (> 200 000). So the increase first tops 200 000 during the 30th year after end-1994: 1994 + 30.

**Answer:** in 2024.

**Common mistakes.** Using the derivative 374·e^0.22t (that answers a different question — instantaneous vs yearly increase; it yields 2023 and does NOT match the asked discrete increase); solving W(t) > 200 000 (that is the STOCK, not the increase); the year offset: k = 30 → 2024, not 2023.

**Points:** 4 — the three function values (or the inequality setup), both bounding increases, the year.

**Subdomain:** [A04](../A04-exponential-growth/).

## Question 18 (official paper) — 3 points

**Asked:** the minimal distance (whole decimetres) between the pump (L_max = 53 dB) and the property boundary to meet the 40 dB rule, under L = 53 − 10·log(πr²).

**Solution.** 53 − 10·log(πr²) = 40 ⇔ log(πr²) = 1.3 ⇔ πr² = 10^1.3 ≈ 19.95 ⇔ r² ≈ 6.351 ⇔ r ≈ 2.520 m = 25.2 dm. The requirement is "at most 40 dB", so 25 dm is just SHORT; round up to 26 dm.

**Answer:** 26 dm.

**Common mistakes.** Rounding 25.2 to 25 (violates the limit — safety demands UP); πr² treated as (πr)²; log(πr²) = 1.3 solved as r = 10^1.3 (forgot the π and the square).

**Points:** 3 — the equation, the solve, the rounded-up decimetres.

**Subdomain:** [A05](../A05-logarithms/).

## Question 19 (official paper) — 5 points

**Asked:** from which distance the human ear can no longer perceive the loudness drop (drop < 1 dB per meter), using the derivative of L (meters, 1 decimal).

**Solution.** L = L_max − 10·log(πr²). Write with ln: log(πr²) = (ln π + 2 ln r)/ln 10, so dL/dr = −10·(2/r)/ln 10 = −20/(r·ln 10) dB per meter. The drop is below 1 dB/m when 20/(r·ln 10) < 1 ⇔ r > 20/ln 10 ≈ 8.6859 → from 8.7 m.

**Answer:** from 8.7 m.

**Common mistakes.** Differentiating log(πr²) as 1/(πr²) (missing the chain factor 2/r relative to r²); solving dL/dr = 1 with the wrong sign handling (the absolute value of the DROP is what the ear notices); 20/ln 10 ≈ 8.69 wrongly rounded to 8.6 in the final step.

**Points:** 5 — the derivative, the "= −1" equation, the solve, the 8.7 conclusion.

**Subdomain:** [A06](../A06-differentiation/) (derivative of a log function).

## Question 20 (official paper) — 7 points

**Asked:** from which year the income from non-game apps reaches at least 65 billion dollars, given two linear models (total app income: 56.4 in 2017 → 85 in 2020; the non-game percentage: also linear).

**Solution.** Total income: +((85 − 56.4)/3) = +9.533 billion/yr: T(t) = 56.4 + 9.533t (t years after 2017). Percentage for other apps: 10.3/56.4 ≈ 18.262% in 2017 and 20/85 ≈ 23.529% in 2020, so +(23.529 − 18.262)/3 ≈ +1.7557 points/yr: p(t) = 18.262 + 1.7557t. Non-game income: O(t) = T(t)·p(t)/100. Evaluate whole years near the crossing: O(11) (2028): T = 161.27, p = 37.57 → O ≈ 60.6 (< 65); O(12) (2029): T = 170.8, p = 39.33 → O ≈ 67.2 (> 65). (Equation route: 0.16739t² + 2.7309t + 10.3 = 65 gives t ≈ 11.7 → the first whole year after: t = 12.)

**Answer:** from 2029.

**Common mistakes.** Applying the linear percentage to the CONSTANT 85-billion total (both models grow — the product is quadratic, not linear); linearly interpolating the non-game income itself (the paper explicitly says the TOTAL and the PERCENTAGE are the linear things); stopping at t = 11.7 without translating to a calendar year.

**Points:** 7 — the two slopes (2 × 1), the product model/table rows (3), the year verdict.

**Subdomain:** [A02](../A02-linear-relations/) (stacked linear models).

---

*End of walkthrough. Try every question before reading the solution, mark yourself with the official correctievoorschrift, and log weak subdomains back into the [Math A folder](../README.md).*
