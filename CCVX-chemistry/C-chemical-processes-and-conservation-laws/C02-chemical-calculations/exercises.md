# C2 — Exercises

Five past exam questions on chemical calculations. Each has the original question, the official answer with an English translation, and a worked answer. [checks.py](checks.py) recomputes every number in them.

> Exam texts and answers are © CCVX and © College voor Toetsen en Examens (CvTE). They're quoted here for personal study, which is why this repo is private. The PDF text loses sub- and superscripts and arrows; those have been restored. CCVX's worked answers carry the note *“aan deze uitwerking kunnen geen rechten worden ontleend”* (no rights can be derived from them).

| # | Topic | Source | Points |
|---|---|---|---|
| 1 | Molarity from a titration | CCVX example exam 1, question 1d | 2 |
| 2 | Excess and back-titration | CCVX example exam 2, questions 2a and 2d | 1 + 5 |
| 3 | Mass percentage after a reaction with an excess | CCVX example exam 1, question 5b | 3 |
| 4 | Yield, density and significant figures | CvTE vwo 2024 period 1, question 10 | 5 |
| 5 | Volume-ppm | CvTE vwo 2024 period 2, question 25 | 4 |

Sources: CCVX [example exam 1](https://www.ccvx.nl/VoorbeeldTentamensEngels/Voorbeeldtentamen%20scheikunde%201%20-%20EN.pdf) and its [worked answers](https://www.ccvx.nl/VoorbeeldTentamens/Voorbeeldtentamen%20scheikunde%201%20-%20Uitwerking.pdf), [example exam 2](https://www.ccvx.nl/VoorbeeldTentamensEngels/Voorbeeldtentamen%20scheikunde%202%20-%20EN.pdf) and its [worked answers](https://www.ccvx.nl/VoorbeeldTentamens/Voorbeeldtentamen%20scheikunde%202%20-%20Uitwerking.pdf). CvTE exams via [Examenblad 2024](https://www.examenblad.nl/2024/vwo/vakken/exacte-vakken/scheikunde-vwo): [2024-1 exam](https://www.examenblad.nl/system/files/exam-document/2024-07/vw-1028-a-24-1-o-spr.pdf), [2024-1 marking scheme](https://www.onderwijscurriculum.nl/wp-content/uploads/vw-1028-a-24-1-c) (copy on the SLO site), [2024-2 exam](https://www.examenblad.nl/system/files/exam-document/2024-07/vw-1028-a-24-2-o-spr.pdf), [2024-2 marking scheme](https://www.examenblad.nl/system/files/exam-document/2024-06/vw-1028-a-24-2-c.pdf). The addenda to these marking schemes don't change these questions.

Not covered yet: the pH of a strong acid or base (none of these exams asks for it), and the yield question 2025 period 2, question 19 (its marking scheme wasn't retrieved).

## 1. Molarity from a titration

**Covers:** concentration and molarity; stoichiometric ratio.

**Question** (CCVX, English original; the setup is from the start of question 1):

> You have a 0.100 M solution of ammonia in water.
>
> […]
>
> You transfer 25.0 mL of this solution into a beaker and you titrate the solution using diluted hydrochloric acid. During the titration, the pH of the solution is monitored continuously. […]
>
> It took 20.0 mL of diluted hydrochloric acid to reach E.
>
> d. Calculate the molarity of the hydrochloric acid solution that was used.

**Official answer** (CCVX, Dutch original):

> 2p d. Toegevoegd mol H⁺ = aanwezige mol NH₃, dus 20,0.M = 25,0x 0,100 M = 0,125 mol.L⁻¹

In English: 2 points. Mol H⁺ added = mol NH₃ present, so 20.0 × M = 25.0 × 0.100 M, which gives M = 0.125 mol L⁻¹.

**Worked answer:**

1. NH₃ + H₃O⁺ → NH₄⁺ + H₂O, so at the equivalence point n(H₃O⁺) = n(NH₃).
2. n(NH₃) = 25.0·10⁻³ L × 0.100 mol L⁻¹ = 2.50·10⁻³ mol.
3. [H₃O⁺] = 2.50·10⁻³ mol / 20.0·10⁻³ L = 0.125 mol L⁻¹, so the acid is 0.125 M.

## 2. Excess and back-titration: aluminium in a deodorant

**Covers:** mole ratio; excess and deficiency; amount per volume.

**Question** (CCVX, English original):

> When merging a potassium bromate solution (KBrO₃), a solution of potassium bromide and hydrochloric acid the following reaction occurs:
>
> BrO₃⁻ + 5 Br⁻ + 6 H⁺ → 3 Br₂ + 3 H₂O
>
> a. Calculate the amount of bromine (in mmol) created when 7.00 mmol of potassium bromate reacts with excess potassium bromide and sufficient hydrochloric acid.
>
> If oxine (C₉H₇NO) is added to the resulting solution, a reaction that exclusively produces dibromo-oxine (C₉H₅Br₂NO) as a carbon bond will occur. Oxine and dibromo-oxine are both molecular substances that are relatively easily soluble in water. The mole ratio for the reaction of oxine and bromine is oxine : bromine = 1: 2
>
> […]
>
> Some deodorants contain an Al³⁺ solution. The above reaction can be used to determine the levels of Al³⁺ in these types of solutions.
>
> Assume you are testing the Al³⁺ level in a deodorant by adding a solution of excess sodium oxinate (Na⁺C₉H₆NO⁻) to 10.0 mL of the deodorant in question. Sodium oxinate is a salt of oxine, which is a weak acid. Following the addition of this sodium salt solution, aluminium oxinate, which is a poorly soluble salt, forms a sediment.
>
> […]
>
> The aluminium oxinate is filtered and subsequently converted into Al³⁺ and oxine using hydrochloric acid. Next, 7.00 mmol of a potassium bromate solution is added, as well as the necessary amount of potassium bromide to convert all bromate into bromine. The oxine fully reacts with the bromine created in the above process (in a mole ratio of 1 : 2). The remaining amount of bromine is determined by titration, producing an outcome of 0.660 mmol.
>
> d. Calculate the amount of Al³⁺ in 1.00 mL of the deodorant.

**Official answer** (CCVX, Dutch original):

> 1p 2a molverhouding is 1 : 3 dus 21,0 mmol broom.
>
> 5p 2d Van 21,0 mmol broom is 0,660 mmol over, dus 20,34 mmol heeft gereageerd met (:2) 10,17 mmol oxine; dit is vrijgekomen uit (:3) 3,39 mmol aluminiumoxinaat en dus was aanwezig 3,39 mmol Al³⁺ in 10,0 mL deodorant. Dit is 3,39 . 26,98 mg = 91,5 mg dus per ml 9,15 mg.

In English: 2a (1 point): the mole ratio is 1 : 3, so 21.0 mmol bromine. 2d (5 points): of the 21.0 mmol bromine, 0.660 mmol is left over, so 20.34 mmol reacted with (÷ 2) 10.17 mmol oxine. That oxine came from (÷ 3) 3.39 mmol aluminium oxinate, so 3.39 mmol Al³⁺ was present in 10.0 mL of deodorant. That is 3.39 × 26.98 mg = 91.5 mg, so 9.15 mg per mL.

**Worked answer:**

- a. BrO₃⁻ : Br₂ = 1 : 3, so n(Br₂) = 3 × 7.00 = 21.0 mmol.
- d.
  1. The chain of reactions: Al³⁺ + 3 C₉H₆NO⁻ → Al(C₉H₆NO)₃ (s); the acid turns each Al(C₉H₆NO)₃ back into Al³⁺ and 3 oxine; each oxine takes 2 Br₂.
  2. Bromine is in excess, and what is left is titrated (a back-titration): reacted Br₂ = 21.0 − 0.660 = 20.34 mmol.
  3. Oxine = 20.34 / 2 = 10.17 mmol, so Al³⁺ = 10.17 / 3 = 3.39 mmol in 10.0 mL.
  4. In 1.00 mL: 0.339 mmol Al³⁺, which is 0.339 × 26.98 = 9.15 mg.

“Amount” can mean mmol or mg; CCVX answers in mg, so give both if a question is unclear.

## 3. Mass percentage after a reaction with an excess

**Covers:** stoichiometric ratio; excess; mass percentage; conservation of mass.

**Question** (CCVX, English original; question 5 starts by giving glyceryl trinitrate as C₃H₅N₃O₉):

> Glyceryltrinitrate is synthesized by esterification of glycerol (propane-1,2,3-triol) with nitric acid. Nitric acid is added in excess. The esterification takes place in the presence of sulphuric acid.
>
> A reactor is filled with 100 kg glycerol, 250 kg nitric acid and 150 kg sulphuric acid. Only glyceryltrinitrate and water are formed and all substances involved are fluids under the reaction conditions. After full conversion of the glycerol, the content of the reactor is emptied.
>
> b. Calculate the mass percentage of glyceryltrinitrate in the mixture from the reactor.

**Official answer** (CCVX, Dutch original):

> 3p b. 100 kg glycerol, C₃H₈O₃, = 100/92.1 kmol. Er ontstaat dus 100/92.1 kmol glycerylttrinitraat = (x 227) 246.5 kg. Totale massa reactor is onveranderd (100+250+150 = 500 kg) dus massa-% is (246.5/500).100% = 49.3 %

In English: 3 points. 100 kg glycerol, C₃H₈O₃, is 100/92.1 kmol. So 100/92.1 kmol glyceryl trinitrate forms, which is (× 227) 246.5 kg. The total mass in the reactor is unchanged (100 + 250 + 150 = 500 kg), so the mass percentage is (246.5/500) × 100% = 49.3%.

**Worked answer:**

1. C₃H₈O₃ + 3 HNO₃ → C₃H₅N₃O₉ + 3 H₂O, so glycerol : glyceryl trinitrate = 1 : 1.
2. n(glycerol) = 100·10³ g / 92.09 g mol⁻¹ = 1.086·10³ mol.
3. Check the excess: n(HNO₃) = 250·10³ / 63.02 = 3.97·10³ mol, more than the 3 × 1.086·10³ = 3.26·10³ mol needed. So glycerol limits the product, as the question says.
4. m(C₃H₅N₃O₉) = 1.086·10³ mol × 227.1 g mol⁻¹ = 246.6 kg.
5. Nothing leaves the reactor, so the mixture still weighs 100 + 250 + 150 = 500 kg (the sulfuric acid, the leftover nitric acid and the water formed are all in it).
6. Mass percentage = 246.6 / 500 × 100% = 49.3%.

CCVX's 246.5 kg comes from rounding the molar masses to 92.1 and 227; the percentage is the same.

## 4. Yield, density and significant figures: methanoic acid as a hydrogen store

**Covers:** yield; mole ratio; density; significant figures.

**Question** (CvTE, Dutch original; the first line is from the exam's cover page):

> Tenzij anders vermeld, is er sprake van standaardomstandigheden: T = 298 K en p = p₀.
>
> […]
>
> Er zijn momenteel auto’s verkrijgbaar die waterstof gebruiken als energiebron. Een van deze auto’s heeft een tank met daarin maximaal 6,33 kg waterstof onder hoge druk. Onderzocht wordt of het mogelijk is om de risico’s van het gebruik van waterstof te verminderen door de waterstof eerst om te zetten tot methaanzuur. Methaanzuur is een vloeistof die eenvoudig kan worden getankt en vervoerd.
> In een auto wordt het methaanzuur dan in een reactor omgezet tot waterstof volgens reactie 1.
>
> CH₂O₂ → CO₂ + H₂ (reactie 1)
>
> De ontstane waterstof wordt vervolgens in een brandstofcel geleid om elektrische energie op te wekken.
> Reactie 1 heeft een rendement van 90,0%. De dichtheid van methaanzuur is 1,22·10³ kg m⁻³.
>
> 5p 10 Bereken het volume in liter methaanzuur dat nodig is om 6,33 kg waterstof te produceren.
> Geef je antwoord in het juiste aantal significante cijfers.

In English:

> Unless stated otherwise, standard conditions apply: T = 298 K and p = p₀.
>
> […]
>
> Cars that use hydrogen as their energy source are currently available. One of these cars has a tank that holds at most 6.33 kg of hydrogen under high pressure. Researchers are investigating whether the risks of using hydrogen can be reduced by first converting the hydrogen into methanoic acid (formic acid). Methanoic acid is a liquid that is easy to fill up and transport.
> In a car, a reactor then converts the methanoic acid into hydrogen according to reaction 1.
>
> CH₂O₂ → CO₂ + H₂ (reaction 1)
>
> The hydrogen formed is then fed into a fuel cell to generate electrical energy.
> Reaction 1 has a yield of 90.0%. The density of methanoic acid is 1.22·10³ kg m⁻³.
>
> 10 (5 points) Calculate the volume in litres of methanoic acid needed to produce 6.33 kg of hydrogen.
> Give your answer in the correct number of significant figures.

**Official answer** (CvTE marking scheme, Dutch original):

> Een voorbeeld van een juiste berekening is:
> Een volle tank bevat 6,33 × 10³ / 2,02 = 3,134·10³ (mol) waterstof.
> Hiervoor is 3,134·10³ × 10² / 90,0 = 3,482·10³ (mol) methaanzuur nodig.
> De massa methaanzuur is 3,482·10³ × 46,0 × 10⁻³ = 1,602·10² (kg).
> Het volume methaanzuur is 1,602·10² / 1,22·10³ × 10³ = 1,31·10² (L).
>
> - omrekening van de massa waterstof naar de chemische hoeveelheid — 1
> - omrekening naar de benodigde chemische hoeveelheid methaanzuur — 1
> - omrekening naar de massa methaanzuur — 1
> - omrekening naar het volume in liter methaanzuur — 1
> - significantie — 1

In English:

> An example of a correct calculation is:
> A full tank contains 6.33 × 10³ / 2.02 = 3.134·10³ (mol) hydrogen.
> This needs 3.134·10³ × 10² / 90.0 = 3.482·10³ (mol) methanoic acid.
> The mass of methanoic acid is 3.482·10³ × 46.0 × 10⁻³ = 1.602·10² (kg).
> The volume of methanoic acid is 1.602·10² / 1.22·10³ × 10³ = 1.31·10² (L).
>
> - converting the mass of hydrogen to the amount of substance — 1
> - converting to the amount of methanoic acid needed — 1
> - converting to the mass of methanoic acid — 1
> - converting to the volume of methanoic acid in litres — 1
> - significant figures — 1

**Worked answer:**

1. Reaction 1 turns 1 mol CH₂O₂ into 1 mol H₂ when the yield is 100%.
2. n(H₂) = 6.33·10³ g / 2.016 g mol⁻¹ = 3.140·10³ mol.
3. With a 90.0% yield you need more methanoic acid than that, so divide by the yield: n(CH₂O₂) = 3.140·10³ / 0.900 = 3.489·10³ mol.
4. m(CH₂O₂) = 3.489·10³ mol × 46.03 g mol⁻¹ = 1.606·10⁵ g = 160.6 kg.
5. V = m / ρ = 160.6 kg / 1.22·10³ kg m⁻³ = 0.1316 m³ = 1.32·10² L, in 3 significant figures because 6.33, 90.0 and 1.22·10³ all have 3.

The marking scheme gets 1.31·10² L because it rounds M(H₂) to 2.02 g mol⁻¹. Its calculation is only “an example of a correct calculation”, and rule 1 of its subject rules says a deviation caused by acceptable intermediate rounding isn't penalised, so 1.32·10² L scores full marks too. Multiplying by 0.900 instead of dividing is the usual mistake: a yield under 100% means you need more starting material, not less.

## 5. Volume-ppm: N₂O₄ in the Apollo cabin

**Covers:** molar volume; ppm; significant figures.

**Question** (CvTE, Dutch original):

> In 1975 is er bijna een ongeluk gebeurd met een Apollo-ruimtevaartuig. Tijdens de terugkeer in de dampkring werd een luchtinlaat geopend, waardoor N₂O₄ in de cabine terechtkwam. De drie aanwezige astronauten konden op tijd een zuurstofmasker opzetten.
> Bij het incident is ongeveer 11 gram N₂O₄ in de cabine met een volume van 5,9 m³ terechtgekomen. Gehaltes van N₂O₄ boven de waarde 300 volume-ppm worden als levensgevaarlijk beschouwd.
> Het molair volume van een gas is 2,39·10⁻² m³ mol⁻¹.
>
> 4p 25 Voer de volgende opdrachten uit:
> - Bereken het gehalte N₂O₄ in de cabine in volume-ppm. Geef de uitkomst in het juiste aantal significante cijfers.
> - Geef aan of het gehalte boven de grens van levensgevaar is gekomen.

In English:

> In 1975 an Apollo spacecraft nearly had an accident. During re-entry into the atmosphere an air inlet was opened, which let N₂O₄ into the cabin. The three astronauts on board managed to put on oxygen masks in time.
> In the incident about 11 grams of N₂O₄ got into the cabin, which has a volume of 5.9 m³. N₂O₄ levels above 300 volume-ppm are considered life-threatening.
> The molar volume of a gas is 2.39·10⁻² m³ mol⁻¹.
>
> 25 (4 points) Do the following:
> - Calculate the N₂O₄ content of the cabin in volume-ppm. Give the result in the correct number of significant figures.
> - State whether the content went above the life-threatening limit.

**Official answer** (CvTE marking scheme, Dutch original):

> Een voorbeeld van een juiste berekening is:
> Er was 11 / 92,0 = 1,20·10⁻¹ (mol) N₂O₄ ontsnapt.
> Dat is 1,20·10⁻¹ × 2,39·10⁻² = 2,86·10⁻³ (m³).
> Het gehalte is 2,86·10⁻³ / 5,9 × 10⁶ = 4,8·10² (volume-ppm).
> Het maximaal toelaatbare gehalte is 300 volume-ppm, dus de situatie was levensgevaarlijk.
>
> - omrekening van de gegeven massa N₂O₄ naar de chemische hoeveelheid — 1
> - omrekening naar het volume N₂O₄ — 1
> - omrekening naar het gehalte in volume-ppm en consequente conclusie — 1
> - significantie — 1

In English:

> An example of a correct calculation is:
> 11 / 92.0 = 1.20·10⁻¹ (mol) N₂O₄ escaped.
> That is 1.20·10⁻¹ × 2.39·10⁻² = 2.86·10⁻³ (m³).
> The content is 2.86·10⁻³ / 5.9 × 10⁶ = 4.8·10² (volume-ppm).
> The maximum permissible content is 300 volume-ppm, so the situation was life-threatening.
>
> - converting the given mass of N₂O₄ to the amount of substance — 1
> - converting to the volume of N₂O₄ — 1
> - converting to the content in volume-ppm, with a consistent conclusion — 1
> - significant figures — 1

**Worked answer:**

1. M(N₂O₄) = 2 × 14.01 + 4 × 16.00 = 92.02 g mol⁻¹, so n = 11 g / 92.02 g mol⁻¹ = 0.1195 mol (keep the extra digit until the end).
2. V(N₂O₄) = n × V<sub>m</sub> = 0.1195 mol × 2.39·10⁻² m³ mol⁻¹ = 2.86·10⁻³ m³.
3. Content = V(N₂O₄) / V(cabin) × 10⁶ = 2.86·10⁻³ / 5.9 × 10⁶ = 4.8·10² volume-ppm, in 2 significant figures because 11 and 5.9 have 2.
4. 4.8·10² is more than 300, so the content went above the life-threatening limit.

The scheme's 2.86·10⁻³ m³ also keeps the unrounded amount; with 0.120 mol you'd get 2.87·10⁻³ m³ and the same final answer. CCVX's syllabus lists mass-ppm (mg kg⁻¹); volume-ppm works the same way with volumes.
