# A8 — Scientific Instruments: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

| Topic | Status |
|---|---|
| A8.1 Getting information from sources and tables | drafted |
| A8.2 Presenting data | drafted |
| A8.3 Significant figures | drafted |
| A8.4 Measuring techniques and devices | drafted |
| A8.5 Handling materials safely | drafted |
| A8.6 Mathematical skills | drafted |

## A8.1 Getting information from sources and tables

- In the exam your sources are the question text with its figures and tables, and Binas. Using IT (*ICT*) is a school-exam matter: the CvTE prints "with the help of IT" in grey italics. *(CvTE A8.1)*

### Extracting data from graphs, tables and diagrams

- Read a graph in this order: which quantity and unit is on each axis, what one scale division is worth, and whether the line is straight or curved. Then read values off, interpolating between gridlines. *(CvTE A8.1)*
- A slope often means something. On a graph of gas volume against time the slope is the rate: if a gas syringe shows 12 mL at t = 10 s and 30 mL at t = 40 s, the average rate in that interval is (30 − 12) / (40 − 10) = 0.60 mL s⁻¹. The slope of a tangent gives the rate at one moment.
- Other figures to read: drawings of an experimental set-up, simulations, block diagrams of processes (*blokschema*, see [F01](../../F-industrial-chemical-processes/F01-industrial-processes/notes.md)), energy diagrams ([C06](../../C-chemical-processes-and-conservation-laws/C06-energy-calculations/notes.md)), chromatograms, mass spectra and calibration lines ([D01](../../D-development-of-chemical-knowledge/D01-chemical-techniques/notes.md)).
- **Trap:** read the power of ten in an axis label: on an axis labelled "c (10⁻³ mol L⁻¹)" a reading of 4.0 means 4.0·10⁻³ mol L⁻¹.

### Looking things up in tables

- Binas is the only table book allowed in the CCVX exam, and it must be free of notes. Know where to find, by subject: quantities with their symbols and units; SI units, prefixes and conversion factors; formulas that link quantities; constants such as N<sub>A</sub> and V<sub>m</sub>; atomic masses and the periodic table; densities and melting and boiling points; the solubility of salts; heats of formation; K<sub>z</sub> and K<sub>b</sub> values of acids and bases; standard electrode potentials; acid–base indicators with their colour-change ranges. *(CvTE A8.1)*
- Example: for a heat of reaction, look up in Binas: heats of formation, CO₂(g) −3.935·10⁵ J mol⁻¹ and H₂O(l) −2.86·10⁵ J mol⁻¹.
- **Trap:** Binas gives heats of formation in 10⁵ J mol⁻¹. Forgetting the factor 10⁵, or taking the value for H₂O(g) (−2.42·10⁵) instead of H₂O(l), gives a wrong answer.

## A8.2 Presenting data

- Tables: one column per quantity, with the quantity and unit in the heading, e.g. "t (s)"; the independent variable in the first column; every value with the right number of digits. *(CvTE A8.2)*
- Graphs: the independent variable on the horizontal axis and the dependent variable on the vertical axis; each axis labelled with quantity and unit; a scale that uses most of the space; points plotted accurately; then the best straight line or a smooth curve through them.
- A calibration line (*ijklijn*) is the best straight line through the points of the standard solutions; draw it through the origin only if the data justify that.
- Drawings, schemes and diagrams: a drawing of an experimental set-up shows the apparatus and how it is connected; a block diagram shows a process as blocks (reactor, separation step) joined by arrows for the flows of substances.
- A worked table, with means and 1/t values, is in [A05](../A05-research/notes.md).
- **Trap:** a zigzag through every point, or a straight line forced through points that clearly lie on a curve.

## A8.3 Significant figures

- The number of significant figures (*significante cijfers*) shows how precisely a value was measured: 2.50 g was weighed to 0.01 g, 2.5 g only to 0.1 g. *(CvTE A8.3)*
- Counting: all non-zero digits count, and so do zeros between them. Leading zeros don't count (0.00250 has three significant figures); trailing zeros after the decimal point do (2.50 has three). Write 1200 as 1.2·10³ or 1.20·10³ to show whether it has two or three.
- Converting units doesn't change the number of significant figures: 2.50 g = 2.50·10⁻³ kg.
- Don't round in between: keep all digits in the calculator and round only the final answer, half up.
- In Dutch exams the answer must have the correct number of significant figures when the question says so; the CvTE list of exam verbs states this under *berekenen* (calculate). It is safest to get them right every time.

### Adding and subtracting

- The result gets as many decimals (*decimalen*) as the value with the fewest decimals. *(CvTE A8.3)*
- 25.00 mL (pipette) + 10.5 mL (measuring cylinder) = 35.50 mL, given as 35.5 mL.
- Burette readings of 1.25 mL and 18.70 mL give a titre of 18.70 − 1.25 = 17.45 mL.
- **Trap:** subtracting two close values loses significant figures: 21.4 °C − 20.9 °C = 0.5 °C has only one, and that then limits every product or quotient calculated with it.

### Multiplying and dividing

- The result gets as many significant figures as the value with the fewest. *(CvTE A8.3)*
- 2.50 g NaOH ÷ 40.00 g mol⁻¹ = 0.0625 mol (three figures). Made up to 0.2500 L, that is 0.0625 ÷ 0.2500 = 0.250 mol L⁻¹.
- A density of 12.5 g ÷ 4.6 mL = 2.717… g mL⁻¹ is given as 2.7 g mL⁻¹: two figures, set by 4.6.

### Counted numbers, constants and money

- Whole numbers from counting discrete objects, mathematical constants and amounts of money are exact: they never limit the number of significant figures. *(CvTE A8.3)*
- 10 tablets of 0.250 g each weigh 10 × 0.250 = 2.50 g: three figures, not one.
- The 1000 in 25.0 mL = 25.0 / 1000 L = 0.0250 L is exact, and so are the 100 in a percentage and the coefficients of a reaction equation. So 0.0856 g of an element in a 1.20 g sample is 0.0856 / 1.20 × 100% = 7.13%.
- A price is exact too: at €38.50 per kg, 0.240 kg costs 0.240 × 38.50 = €9.24.

### Logarithms

- A logarithm gets as many decimals as the value it was taken of has significant figures, and the other way round. *(CvTE A8.3)*
- [H₃O⁺] = 2.5·10⁻³ mol L⁻¹ (two figures) gives pH = −log(2.5·10⁻³) = 2.60 (two decimals).
- pH = 3.45 (two decimals) gives [H₃O⁺] = 10<sup>−3.45</sup> = 3.5·10⁻⁴ mol L⁻¹ (two figures).
- [OH⁻] = 0.020 mol L⁻¹ gives pOH = 1.70, so pH = 14.00 − 1.70 = 12.30.
- **Trap:** the digits before the decimal point of a pH only show the power of ten, so they don't count: pH 12.30 belongs to a concentration with two significant figures, not four.

## A8.4 Measuring techniques and devices

- Mass: a balance (*balans*), in g or kg. Put the empty container on it and set it to zero (*tarreren*) before weighing. A top-pan balance reads to about 0.01 g, an analytical balance to about 0.0001 g. *(CvTE A8.4)*
- Volume of a liquid: a burette (*buret*) for titrations, read to 0.01 mL; a pipette (*pipet*) for one fixed volume, e.g. 25.00 mL, filled with a pipette filler, never by mouth; a volumetric flask (*maatkolf*) to make up a solution to an exact volume, e.g. 250.0 mL; a measuring cylinder (*maatcilinder*) for rough volumes only. Read at the bottom of the meniscus, at eye level.
- Volume of a gas: a gas syringe (*gasspuit*), or a measuring cylinder filled with water and turned upside down in a trough.
- Temperature: a thermometer or temperature sensor, in °C; convert to K when a formula needs it.
- Pressure: a manometer or pressure sensor (*drukmeter*), in Pa or bar.
- Time: a stopwatch, or a data logger that records a sensor signal over time.
- pH: a pH meter (*pH-meter*), calibrated first with buffer solutions of known pH, for accurate values; an indicator (*indicator*) or universal indicator paper for a rough value, or to show the end point of a titration.
- Current and voltage: an ammeter (*stroommeter*, in A) in series and a voltmeter (*spanningsmeter*, in V) in parallel, for example to measure the voltage of an electrochemical cell.
- Other devices: a conductivity meter (*geleidbaarheidsmeter*) shows whether and how many ions are in a solution; a colorimeter measures how much light a coloured solution absorbs, which gives its concentration via a calibration line; gas chromatography and mass spectrometry identify and quantify substances (see [D01](../../D-development-of-chemical-knowledge/D01-chemical-techniques/notes.md)).
- **Trap:** a measuring cylinder is not precise enough for a titration or for making a standard solution; use a pipette, a burette or a volumetric flask.

## A8.5 Handling materials safely

- Work so that people, animals and the environment come to no harm: wear safety goggles and a lab coat, use a fume cupboard (*zuurkast*) for volatile, toxic or smelly substances, use small amounts, and read the hazard pictograms and the H and P statements on the label (they replaced the old R and S phrases). *(CvTE A8.5)*
- Put waste in the right container (for example heavy-metal salts or organic solvents) instead of down the sink.
- The CvTE text prints this specification in grey italics (school exam only), and it is hard to test in writing. More in [D02](../../D-development-of-chemical-knowledge/D02-safety/notes.md) and, for risks in industry, [F04](../../F-industrial-chemical-processes/F04-risks-and-safety/notes.md).
- **Trap:** dilute a concentrated acid by adding the acid slowly to the water, never water to the acid, because mixing releases a lot of heat and can make the liquid spatter.

## A8.6 Mathematical skills

### Calculator

- The README item "use a graphing calculator" doesn't apply: CCVX allows only a non-graphing calculator, and the CvTE text prints "graphing" in grey italics too. Practise on the calculator you will take: the ×10ˣ (EXP) key, log and 10ˣ, square roots and powers, and brackets. *(CvTE A8.6)*
- **Trap:** typing "÷ 6.022 × 10 ^ 23" without brackets divides by 6.022 and then multiplies by 10²³; use the EXP key or brackets.

### Ratios, percentages, powers and roots

- Ratios (*verhoudingen*): water contains hydrogen and oxygen in the mass ratio 2 × 1.008 : 16.00 = 2.016 : 16.00 = 1 : 7.937. So 36.0 g of water contains 36.0 × 2.016 / 18.016 = 4.03 g hydrogen and 36.0 × 16.00 / 18.016 = 32.0 g oxygen. *(CvTE A8.6)*
- Percentages (*procenten*): ammonium nitrate NH₄NO₃ (80.05 g mol⁻¹) contains 2 × 14.01 / 80.05 × 100% = 35.00% nitrogen by mass.
- Powers (*machten*): multiply powers of ten by adding the exponents (10⁻³ × 10⁻⁴ = 10⁻⁷) and divide by subtracting them. 1.00 g of water (18.02 g mol⁻¹) contains 1.00 / 18.02 × 6.022·10²³ = 3.34·10²² molecules.
- Powers in an equilibrium: for N₂ + 3 H₂ ⇌ 2 NH₃ with [N₂] = 0.50, [H₂] = 0.30 and [NH₃] = 0.20 mol L⁻¹, the reaction quotient is Q = 0.20² / (0.50 × 0.30³) = 3.0.
- Roots (*wortels*): a square root is the power ½. For 0.10 M acetic acid the shortcut [H₃O⁺] ≈ √(K<sub>z</sub> × c) = √(1.8·10⁻⁵ × 0.10) = 1.34·10⁻³ mol L⁻¹ gives pH 2.87.

### Weighted averages

- A weighted average (*gewogen gemiddelde*) multiplies each value by its share and adds up the results. *(CvTE A8.6)*
- Suppose a table of isotopes gives chlorine as 75.78% ³⁵Cl (34.97 u) and 24.22% ³⁷Cl (36.97 u). Its average atomic mass is then 0.7578 × 34.97 + 0.2422 × 36.97 = 26.500 + 8.954 = 35.454, given as 35.45 u, which matches the atomic mass of Cl in Binas.
- **Trap:** the plain average (34.97 + 36.97) / 2 = 35.97 u ignores how common each isotope is.

### Formulas and units

- Write down the formula, fill in the values with their units, and check that the units of the result come out right. *(CvTE A8.6)*
- Making 250.0 mL of 0.100 M NaCl: n = c × V = 0.100 mol L⁻¹ × 0.2500 L = 0.0250 mol, and m = n × M = 0.0250 mol × 58.44 g mol⁻¹ = 1.46 g.
- Heat to warm 0.250 kg of water by 12.0 °C: Q = c<sub>w</sub> × m × ΔT = 4.18·10³ J kg⁻¹ K⁻¹ × 0.250 kg × 12.0 K = 1.25·10⁴ J. The mass must be in kg because c<sub>w</sub> is per kg; a temperature difference in °C is the same number in K.

### Rearranging relationships

- Rearrange a formula before filling in numbers: ρ = m / V gives V = m / ρ; n = m / M gives m = n × M; pH = −log [H₃O⁺] gives [H₃O⁺] = 10<sup>−pH</sup>. *(CvTE A8.6)*
- Suppose a liquid has ρ = 0.80 g mL⁻¹. Then 20.0 g of it has V = 20.0 / 0.80 = 25 mL.
- A buffer: from K<sub>z</sub> = [H₃O⁺] × [CH₃COO⁻] / [CH₃COOH] follows [H₃O⁺] = K<sub>z</sub> × [CH₃COOH] / [CH₃COO⁻]. With [CH₃COOH] = 0.10 and [CH₃COO⁻] = 0.050 mol L⁻¹: [H₃O⁺] = 1.8·10⁻⁵ × 0.10 / 0.050 = 3.6·10⁻⁵ mol L⁻¹, so pH = 4.44.

### Linear equations

- A linear equation (*lineaire vergelijking*) has the form y = a·x + b, so x = (y − b) / a. *(CvTE A8.6)*
- Calibration line: suppose standard solutions give y = 0.125·c + 0.010, where y is the measured absorbance and c the concentration in mg L⁻¹. A sample with y = 0.385 has c = (0.385 − 0.010) / 0.125 = 3.00 mg L⁻¹.

### Second-degree equations

- A second-degree (quadratic) equation (*tweedegraadsvergelijking*) a·x² + b·x + c = 0 has the solutions x = (−b ± √(b² − 4ac)) / 2a. When x is a concentration, only the positive root makes sense. *(CvTE A8.6)*
- Weak acid: for 0.10 M acetic acid, x = [H₃O⁺] follows from K<sub>z</sub> = x² / (0.10 − x) = 1.8·10⁻⁵. Rewritten: x² + 1.8·10⁻⁵·x − 1.8·10⁻⁶ = 0. Then x = (−1.8·10⁻⁵ + √((1.8·10⁻⁵)² + 4 × 1.8·10⁻⁶)) / 2 = 1.33·10⁻³ mol L⁻¹, and pH = 2.88. See [C05](../../C-chemical-processes-and-conservation-laws/C05-chemical-equilibrium/notes.md).
- The shortcut from the roots example ignores x in 0.10 − x and gives 1.34·10⁻³ mol L⁻¹ and pH 2.87. Use the full equation when x is not small compared with the starting concentration, or when the question asks for it.
- **Trap:** the root with −√ gives −1.35·10⁻³, a negative concentration; that one is not the answer.

### Direct and inverse proportions

- Directly proportional (*recht evenredig*): y = k·x, so doubling x doubles y. At a given T and p a gas volume is directly proportional to the amount: 0.200 mol of gas at 298 K and p₀ takes up 0.200 × 24.5 = 4.90 L. *(CvTE A8.6)*
- Inversely proportional (*omgekeerd evenredig*): y = k / x, so doubling x halves y. For a fixed amount of solute the concentration is inversely proportional to the volume (c₁ × V₁ = c₂ × V₂): diluting 10.0 mL of 0.500 M hydrochloric acid to 250.0 mL gives 0.500 × 10.0 / 250.0 = 0.0200 M.

### Logarithms with base 10

- log 10ˣ = x and log(a × b) = log a + log b. So every tenfold dilution of a strong acid raises the pH by 1: hydrochloric acid of pH 2.00 diluted 100 times has pH 4.00. *(CvTE A8.6)*
- The inverse of log is 10ˣ: pH 4.44 means [H₃O⁺] = 10<sup>−4.44</sup> = 3.6·10⁻⁵ mol L⁻¹.
- **Trap:** pH 4 is not "twice as acidic" as pH 8: each pH unit is a factor 10, so [H₃O⁺] at pH 4 is 10⁴ times that at pH 8.

### Two linear equations with two unknowns

- Solve by substitution: write one unknown in terms of the other and put it into the second equation. *(CvTE A8.6)*
- Suppose a question gives: copper consists of ⁶³Cu (62.93 u) and ⁶⁵Cu (64.93 u), and its average atomic mass is 63.55 u. With fractions x and y: x + y = 1 and 62.93·x + 64.93·y = 63.55. Substituting x = 1 − y gives 62.93 + 2.00·y = 63.55, so y = 0.62 / 2.00 = 0.31. Copper is 31% ⁶⁵Cu and 69% ⁶³Cu.

### Converting derived units to SI units

- Binas has tables of units, prefixes and conversion factors; the bullets below are the conversions you need most. *(CvTE A8.6)*
- 1 L = 1 dm³ = 10⁻³ m³ and 1 mL = 1 cm³ = 10⁻⁶ m³, so 250.0 mL = 2.500·10⁻⁴ m³.
- 1 g cm⁻³ = 10³ kg m⁻³ (and 1 g L⁻¹ = 1 kg m⁻³), so 1.84 g cm⁻³ = 1.84·10³ kg m⁻³.
- 1 mol L⁻¹ = 10³ mol m⁻³, so 0.150 mol L⁻¹ = 1.50·10² mol m⁻³.
- T (K) = t (°C) + 273.15, usually rounded to + 273: 25 °C is 298 K.
- 1 bar = 10⁵ Pa, so 2.5 bar = 2.5·10⁵ Pa; standard pressure p₀ = 1.01325·10⁵ Pa.
- 1 kWh = 1000 W × 3600 s = 3.6·10⁶ J, so 2.5 kWh = 9.0·10⁶ J.
- **Trap:** squared and cubed units take the square or cube of the factor: 1 cm = 10⁻² m, but 1 cm³ = 10⁻⁶ m³.

### Estimating and judging results

- Estimate before you calculate, and afterwards check the size, the unit and the sign of the answer. *(CvTE A8.6)*
- Estimate: 2.50 g NaOH at roughly 40 g mol⁻¹ is about 0.06 mol, so 0.0625 mol is plausible and 6.25 mol would mean a mistake in the powers of ten.
- Judge: a concentration of 80 mol L⁻¹ in a solution in water is unrealistic, since pure water itself is only 1000 / 18.02 = 55.5 mol L⁻¹; a yield or a mass percentage above 100% points to an error (e.g. a product that is still wet); an acidic solution can't have a pH above 7 at 298 K; and the sign of a heat of reaction must fit an exothermic or endothermic reaction.

## CCVX versus the Dutch syllabus

- **In both:** A8.1–A8.6, numbered the same.
- **Graphing calculator:** CCVX allows only a non-graphing calculator, so that sub-item doesn't apply; the CvTE text prints "graphing" in grey italics, so the Dutch central exam doesn't test it either.
- **Dutch central exam:** "with the help of IT" in A8.1 and A8.2, and all of A8.5 (safe handling), are printed in grey italics, so only the school exam tests them.
