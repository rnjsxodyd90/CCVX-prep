# C2 — Chemical calculations: notes

Status: checked against the CCVX syllabus and Binas (5th edition or later). All worked examples in these notes are original. Practice questions with full solutions are in [practice.md](practice.md).

These notes cover the two CCVX learning outcomes: the quantities used in calculations (C2.1) and the principles behind process calculations (C2.2). Data come from Binas; since table numbers differ between editions, tables are named. Binas is allowed in the exam, so practise finding every value you use.

## C2.1 Quantities

### Amount of substance and molar mass

- The amount of substance, symbol n(X), is counted in mol (CCVX calls it the *chemical quantity*). One mole contains 6.022·10²³ particles, the Avogadro constant N_A (Binas, table of fundamental constants). So N = n × N_A.
- The molar mass M(X) in g mol⁻¹ has the same number as the molecular mass in u: H₂O is 18.02 u and M(H₂O) = 18.02 g mol⁻¹. Take molar masses from the Binas table of molar masses, or add up atomic masses from the table of atomic masses (H 1.008, C 12.01, O 16.00, and so on).
- The central conversion is n = m / M, with m in g. If a mass is given in kg, mg or tonnes, convert to grams first.
- CCVX also names the relative molecular mass M_r, a unit-free number. It equals the molar-mass number.

**Worked example (original).** How many molecules are in 9.00 g of water?

1. M(H₂O) = 2 × 1.008 + 16.00 = 18.02 g mol⁻¹ (Binas).
2. n = m / M = 9.00 / 18.02 = 0.499 mol.
3. N = n × N_A = 0.499 × 6.022·10²³ = 3.01·10²³ molecules.

More conversions of this type: practice chem-c02-q01.

### Concentration and molarity

- Concentration c(X) or [X] = n / V, in mol L⁻¹. The number of moles per litre is also called the molarity; “0.100 M” means 0.100 mol L⁻¹.
- Solutions of ionic compounds need care: one formula unit can give several particles. In 0.25 M Na₂SO₄, [Na⁺] = 0.50 mol L⁻¹ and [SO₄²⁻] = 0.25 mol L⁻¹. See chem-c02-q02.
- Diluting keeps n constant, so c₁V₁ = c₂V₂.
- At the equivalence point of a titration, the amounts of the two reactants stand in the ratio of the reaction equation. A known volume and concentration on one side then give the unknown concentration on the other.

**Worked example (original).** A 20.00 mL sample of hydrochloric acid is titrated with 0.1050 M sodium hydroxide. The equivalence point is reached after 19.04 mL. Calculate the molarity of the acid.

1. Reaction: H₃O⁺ + OH⁻ → 2 H₂O, so at the equivalence point n(H₃O⁺) = n(OH⁻).
2. n(NaOH) = 0.1050 mol L⁻¹ × 19.04·10⁻³ L = 1.999·10⁻³ mol.
3. c(HCl) = 1.999·10⁻³ mol / 20.00·10⁻³ L = 0.09996 mol L⁻¹ ≈ 0.1000 M.

Titrations: chem-c02-q08; back-titrations: chem-c02-q09.

### Density

- ρ = m / V. Useful conversions: 1 kg m⁻³ = 1 g L⁻¹ = 10⁻³ g mL⁻¹. Most mistakes happen in this unit conversion, so always write the units in every step.
- The Binas gas-density table applies at 273 K and p = p₀ only. For other conditions, the question gives the density.

**Worked example (original).** Ethanol has density 0.789 g mL⁻¹. What amount of ethanol (C₂H₆O, M = 46.07 g mol⁻¹) is in a 25.0 mL measuring cylinder?

1. m = ρ × V = 0.789 × 25.0 = 19.7 g.
2. n = m / M = 19.7 / 46.07 = 0.428 mol.

Density and percentage combined (concentrated acids): chem-c02-q12.

### Molar volume of gases

- V_m = V / n. Its value depends on temperature and pressure but not on the gas: every gas behaves the same (Avogadro's law).
- Values from Binas (table of fundamental constants): V_m = 22.4 L mol⁻¹ at 273 K and 24.5 L mol⁻¹ at 298 K, both at p = p₀.
- Unless a question says otherwise, assume T = 298 K and p = p₀, so V = n × 24.5 L.

**Worked example (original).** Calculate the volume of 0.200 mol of carbon dioxide at 298 K and p = p₀.

1. V = n × V_m = 0.200 × 24.5 = 4.90 L.

Gas calculations: chem-c02-q06, chem-c02-q13.

### Percentages, ppm and ppb

- Mass percentage = m(part) / m(total) × 100%. Volume percentage = V(part) / V(total) × 100%. For example, chlorine in PVC (C₂H₃Cl repeated unit, M_r = 62.49): 35.45 / 62.49 × 100% = 56.73%.
- ppm (parts per million) is the same fraction × 10⁶; ppb × 10⁹. CCVX gives the units directly: mass-ppm is mg kg⁻¹, mass-ppb is μg kg⁻¹, volume-ppm is cm³ m⁻³.
- For dilute water samples, 1 L ≈ 1.00 kg, so 1 mg L⁻¹ ≈ 1 mass-ppm.

Percentages: chem-c02-q09, chem-c02-q14; ppm and ppb: chem-c02-q11.

### pH and pOH

- pH = −log [H₃O⁺], and back again [H₃O⁺] = 10^(−pH). pOH = −log [OH⁻]. At 298 K, pH + pOH = 14.00 (K_w = [H₃O⁺][OH⁻] = 1.0·10⁻¹⁴ at 298 K; Binas, ion product of water).
- Strong acid: the acid ionises completely, so [H₃O⁺] equals the concentration of the acid (multiply by two for H₂SO₄ when it is treated as fully deprotonated). A strong base works the same way with [OH⁻]; check how many OH⁻ one formula unit gives (NaOH: 1; Ba(OH)₂: 2). See chem-c02-q03, chem-c02-q04.
- Weak acids and bases do not ionise completely; their pH needs K_a (CCVX: K_z) or K_b and belongs to C05 — chemical equilibrium.
- Significant figures for pH: a pH gets as many decimals as [H₃O⁺] has significant figures. For [H₃O⁺] = 2.5·10⁻³ mol L⁻¹ (two figures), pH = 2.60 (two decimals).

## C2.2 Principles

### Mass ratio

- The numbers in u in a reaction equation can be read as grams, so masses scale in a fixed ratio. From Mg + S → MgS: 24.31 g Mg reacts with 32.06 g S to give 56.37 g MgS. Every sample of this reaction obeys that same ratio (law of constant composition).
- This method is always allowed, but it only compares masses. The moment particles, volumes or concentrations enter the problem, work through moles.

### Mole ratio and the five-step method

- The coefficients of a balanced equation give the mole ratio. For 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O: n(C₄H₁₀)/2 = n(O₂)/13 = n(CO₂)/8 = n(H₂O)/10.
- Systematic problem approach, five steps:
  1. Write the balanced equation.
  2. Convert the given substance to mol.
  3. State the mole ratio between given and asked.
  4. Compute the amount of the asked substance.
  5. Convert to the unit the question asks for.
- Every conversion runs through the amount of substance:

```
mass m        ── ÷ M ──► ┐
gas volume    ── ÷ V_m ─►│ n (mol) ── × N_A ──► number of particles
solution vol. ── × c ───►│    └────── × M ────► mass of the asked substance
```

- Do not use the mass ratio where the mole ratio belongs.

### Volume ratio of gases

- At the same T and p, equal volumes of gases contain equal numbers of particles (Avogadro's law). For gases the volume ratio therefore equals the mole ratio from the equation: burning 1.0 L butane needs 13/2 × 1.0 = 6.5 L oxygen. See chem-c02-q06.

### Excess and deficiency

- A reactant is in excess when more of it is present than is needed for the other reactant; the other reactant is in deficiency. The reactant in deficiency runs out first and decides how much product forms.
- If the question does not say which reactant is in deficiency, check: convert both amounts to mol and compare with the mole ratio. The one that comes up short is the deficiency. See chem-c02-q07.
- A back-titration adds a known excess of one reactant and then measures what is left over with a second titration: reacted = added − left over. See chem-c02-q09.

### Yield

- Yield = actual output / theoretical output, as a fraction or × 100%. The theoretical output comes from a five-step calculation assuming complete conversion.
- A yield below 100% means you need more starting material for a target amount: divide by the yield, never multiply. See chem-c02-q10.

### Conservation of mass

- In a closed reactor, total mass is conserved: whatever goes in must come out, reacted or not. Atoms are not created or destroyed, only rearranged. Conservation laws as such are treated in C03 — conservation laws and cycles.

## Significant figures and exam verbs

- Multiplying and dividing: give the answer in as many significant figures as the measurement with the fewest. Adding and subtracting: as many decimals as the measurement with the fewest decimals. Counted numbers and exact constants do not count. A logarithm gets as many decimals as the original value had significant figures (CCVX syllabus, domain A).
- Rounding to significant figures only earns points when the question asks for it.
- Do not round in intermediate steps; round only the final answer.
- The verb "calculate" means: show the formulas or principles, the values used and the steps, and give the unit unless the question states it. A bare number without working earns little.

## CCVX versus the Dutch syllabus

- In both: everything above.
- Dutch syllabus only: charge Q and the Faraday constant F = Q / n (CCVX does not list these).
- CCVX only: the relative molecular mass M_r without a unit, and volume percentage, mass-ppm (mg kg⁻¹) and mass-ppb (μg kg⁻¹) spelled out explicitly.
