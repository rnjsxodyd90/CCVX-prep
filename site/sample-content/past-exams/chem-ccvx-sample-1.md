<!-- TEMPORARY sample walkthrough by the web-dev, for building and testing the site only. Delete when the chemistry teacher delivers the real past-exams files. The asks are paraphrased in our own words; solutions are original. -->
official: CCVX example exam Chemistry 1
year: 2023
paper: https://www.ccvx.nl/VoorbeeldTentamensEngels/Voorbeeldtentamen%20scheikunde%201%20-%20EN.pdf
answers: https://www.ccvx.nl/VoorbeeldTentamens/Voorbeeldtentamen%20scheikunde%201%20-%20Uitwerking.pdf

A walkthrough of the first example exam on ccvx.nl, question by question: what the exam really asks, the cleanest route, and where candidates lose marks.

## Question 1 (official paper)
ask: From a titration of a weak acid with a sodium hydroxide solution, find the concentration of the acid from the equivalence volume.
subdomain: chem-c02
binas: table 49 (weak acid Kz values), table 7 (constants)
points: 4
mistakes: Reading the equivalence point at the bottom of the jump instead of the middle; forgetting that n(acid) = n(OH⁻) only holds for a monoprotic acid; working in mL without converting to L.
solution:
1. Read the equivalence volume from the steepest point of the curve, the middle of the vertical part.
2. The amount of hydroxide added there: n(OH⁻) = c × V, with the given sodium hydroxide concentration.
3. A weak monoprotic acid reacts 1 : 1 with OH⁻, so n(acid) = n(OH⁻) at equivalence.
4. Divide by the pipette volume of the acid solution to get the concentration in mol L⁻¹.

## Question 2 (official paper)
ask: Calculate the pH at the start of the same titration, before any sodium hydroxide is added.
subdomain: chem-c02
binas: table 49 (Kz), table 7
points: 3
mistakes: Using pH = −log c for a weak acid; the simple strong-acid formula overestimates [H₃O⁺] by a factor of ten or more.
solution:
1. A weak acid is not fully ionized, so [H₃O⁺] < c(acid): use the acid equilibrium.
2. Set up Kz = x² / (c − x), with x = [H₃O⁺], using Kz from BINAS table 49.
3. When c >> Kz, x ≈ √(Kz × c); otherwise solve the quadratic.
4. pH = −log x. Give as many decimals as the concentration has significant figures.
