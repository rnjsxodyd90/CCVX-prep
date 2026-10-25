# C6 — Energy Calculations: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

| Topic | Status |
|---|---|
| C6.1 Energy diagrams | drafted |
| C6.2 Energy concepts | drafted |
| C6.3 Heat of reaction from heats of formation | drafted |
| C6.4 Conservation of energy: heat and electrical energy | drafted |

## C6.1 Energy diagrams

- An energy diagram (*energiediagram*) shows the energy of the reacting substances on the vertical axis against the course of the reaction on the horizontal axis, which needs no unit. Draw these parts: *(CvTE R5.2)*
    - a horizontal level for the reactants on the left and one for the products on the right, each labelled with the formulas, coefficients and state symbols;
    - a hump between the two levels, whose top is the transition state (activated state);
    - a vertical arrow from the reactant level up to the top: the activation energy (*activeringsenergie*);
    - a vertical arrow from the reactant level to the product level: the heat of reaction ΔE (*reactiewarmte*, also called the energy effect, *energie-effect*).
- Exothermic: the product level is below the reactant level, ΔE < 0. Endothermic: the product level is above it, ΔE > 0. *(CvTE R5.1)*

```text
exothermic                                endothermic

energy                                    energy
  ^                                         ^
  |            T                            |                T
  |           / \                           |               / \
  |          /   \                          |              /   \_______ P
  |         /     \                         |             /
  |  R ____/       \                        |            /
  |                 \                       |  R _______/
  |                  \_______ P             |
  +------------------------------>          +------------------------------>
          course of the reaction                    course of the reaction

R = reactant level, P = product level, T = transition state (top of the hump)
activation energy = height of T above R;  ΔE = level of P minus level of R
```

### Transition state (activated state)

- The transition state or activated state (*overgangstoestand*, *geactiveerde toestand*) is the unstable arrangement at the top of the hump, in which old bonds are partly broken and new bonds partly formed. It has the highest energy on the route, and it is not a substance you can isolate. *(CvTE R5.1)*
- For a reaction in steps, draw one hump per step; each intermediate sits in a dip between two humps, and the step with the largest activation energy is usually the slowest, the rate-determining step ([C04](../C04-reaction-kinetics/notes.md)).

### The influence of a catalyst

- A catalyst offers another route with a lower activation energy, so in the diagram you draw a second, lower hump between the same two levels. The reactant and product levels, and therefore ΔE, stay the same. *(CvTE R5.1, R3.2)*

```text
energy
  ^
  |               T
  |              / \
  |             /   \
  |            / .T'.\
  |           / .   . \
  |  R ______/..     ..\
  |                     \
  |                      \_______ P
  +----------------------------------->
           course of the reaction

outer hump (/ \):   without a catalyst, top T
inner hump (. . .): with a catalyst, lower top T'
R, P and ΔE are the same for both routes
```

- **Trap:** a catalyst lowers only the top. Don't move the reactant or product level, and don't change ΔE.
- **Trap:** the activation energy is measured from the reactant level to the top, not from zero and not from the product level.

## C6.2 Energy concepts

- Endothermic (*endotherm*): the reacting system takes up energy from the surroundings, ΔE > 0. Examples: photosynthesis, a thermolysis such as CaCO₃(s) → CaO(s) + CO₂(g), and the electrolysis of water. Exothermic (*exotherm*): the system gives off energy, ΔE < 0. Examples: combustion, respiration in cells, and the neutralisation of an acid by a base. *(CvTE R5.1)*
- Every substance, or mixture of substances, has its own level of chemical energy (*energieniveau*). Only differences between levels can be measured; heats of formation give each compound a level relative to its elements, which are set at 0. *(CvTE R5.1)*
- Heat of formation (*vormingswarmte*), written E<sub>f</sub> here: the energy effect when 1 mol of a compound is formed from its elements in their standard states, at 298 K and standard pressure. For water, H₂(g) + ½ O₂(g) → H₂O(l), E<sub>f</sub> = −2.86·10⁵ J mol⁻¹. Binas: heats of formation lists the values in 10⁵ J mol⁻¹. An element in its standard state, such as H₂(g), O₂(g), N₂(g), C(s) or Br₂(l), has E<sub>f</sub> = 0. *(CvTE R5.1)*
- Activation energy (*activeringsenergie*): the energy needed to reach the transition state, measured from the reactant level up to the top of the hump. Its effect on the reaction rate is in [C04](../C04-reaction-kinetics/notes.md). *(CvTE R5.1)*
- Ignition temperature (*ontbrandingstemperatuur*): the lowest temperature to which a fuel must be heated before it starts to burn in air. Heating supplies the activation energy; after that the heat of the combustion keeps the reaction going. A fire needs fuel, oxygen and a temperature at or above the ignition temperature. *(CvTE R5.1)*
- The energy diagram links these concepts. For the reverse reaction ΔE changes sign, and its activation energy is the height of the top above the product level. Example: suppose E<sub>act</sub> = 1.5·10⁵ J mol⁻¹ and ΔE = −0.9·10⁵ J mol⁻¹. Then the reverse reaction has E<sub>act</sub> = 1.5·10⁵ + 0.9·10⁵ = 2.4·10⁵ J mol⁻¹ and ΔE = +0.9·10⁵ J mol⁻¹.
- **Trap:** keep the sign of ΔE. "8.91·10⁵ J is released per mol of methane" means ΔE = −8.91·10⁵ J mol⁻¹; a positive ΔE for a combustion is wrong.

## C6.3 Heat of reaction from heats of formation

- Rule: ΔE = Σ(n·E<sub>f</sub>, products) − Σ(n·E<sub>f</sub>, reactants), with n the coefficients in the equation. ΔE is then per mol of reaction as written. Write the heat of reaction as ΔE, not ΔH; enthalpy itself is a topic of [C09](../C09-quality-of-energy/notes.md). *(CvTE R5.3)*
- Why it works: imagine first breaking the reactants down into their elements (−E<sub>f</sub> for each) and then forming the products from those elements (+E<sub>f</sub> for each). Because energy is conserved, the energy effect doesn't depend on the route; the usual English name for this is Hess's law. *(CvTE R&A3.1)*
- Steps: (1) write the balanced equation with state symbols; (2) look up every E<sub>f</sub>, with 0 for elements and the right state, H₂O(l) or H₂O(g); (3) multiply each by its coefficient; (4) take products minus reactants; (5) give the unit, J mol⁻¹, and keep the sign.

### Worked example: methane, with liquid or gaseous water

- With the water as a liquid (the products cooled to room temperature): CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l). From Binas, in 10⁵ J mol⁻¹: CH₄(g) −0.75, CO₂(g) −3.935, H₂O(l) −2.86, O₂(g) 0.
- ΔE = [1 × (−3.935) + 2 × (−2.86)] − [1 × (−0.75) + 2 × 0] = −9.655 + 0.75 = −8.905, so ΔE = −8.91·10⁵ J per mol CH₄. Adding and subtracting keeps 2 decimals here, because −0.75 and −2.86 have 2, and −8.905 rounds half up to −8.91. *(CvTE A8.3)*
- With the water as a vapour (for example in hot flue gases): CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g), with H₂O(g) −2.42. ΔE = [−3.935 + 2 × (−2.42)] − (−0.75) = −8.025, so ΔE = −8.03·10⁵ J per mol CH₄.
- The difference, 2 × 0.44·10⁵ J, is the heat released when 2 mol of water vapour condenses. A condensing boiler (*HR-ketel*) is built to use that heat too.

### Worked example: ethanol

- C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l), with E<sub>f</sub>(C₂H₅OH(l)) = −2.78·10⁵ J mol⁻¹ (Binas).
- ΔE = [2 × (−3.935) + 3 × (−2.86)] − [−2.78 + 3 × 0] = −16.45 + 2.78 = −13.67, so ΔE = −13.67·10⁵ J = −1.367·10⁶ J per mol ethanol.

### Per mol of reaction as written

- For N₂(g) + 3 H₂(g) → 2 NH₃(g), with E<sub>f</sub>(NH₃(g)) = −0.46·10⁵ J mol⁻¹: ΔE = 2 × (−0.46·10⁵) − 0 = −0.92·10⁵ J per mol of this reaction, which is −0.46·10⁵ J per mol NH₃. Halving all coefficients halves ΔE.
- For N₂(g) + O₂(g) → 2 NO(g), with E<sub>f</sub>(NO(g)) = +0.90·10⁵ J mol⁻¹: ΔE = +1.80·10⁵ J, so endothermic. Because it is endothermic, a higher temperature shifts this equilibrium to the right ([C05](../C05-chemical-equilibrium/notes.md)); NO forms in noticeable amounts only at high temperatures, such as in car engines and in lightning.
- **Trap:** multiply every E<sub>f</sub> by its coefficient, put 0 for the elements, take products minus reactants (not the other way round), and check whether the water is H₂O(l) or H₂O(g).

### Backwards: a heat of formation from a heat of reaction

- The Dutch syllabus also asks for the reverse: given ΔE and all heats of formation but one, calculate the missing E<sub>f</sub>. It is the same equation, solved for the unknown. *(CvTE R5.4)*
- Example: suppose a measurement gives ΔE = −15.60·10⁵ J per mol ethane for C₂H₆(g) + 3½ O₂(g) → 2 CO₂(g) + 3 H₂O(l). Then −15.60 = [2 × (−3.935) + 3 × (−2.86)] − E<sub>f</sub>(C₂H₆) = −16.45 − E<sub>f</sub>(C₂H₆), so E<sub>f</sub>(C₂H₆) = −16.45 + 15.60 = −0.85·10⁵ J mol⁻¹, which is the Binas value.

## C6.4 Conservation of energy: heat and electrical energy

- The first law of thermodynamics (the law of conservation of energy): the chemical energy released in a reaction is all converted into other forms, such as heat, light, electrical energy and work. None is lost, but usually only part of it ends up in the form you want. *(CvTE R5.5, R&A3.1)*
- Chemical energy becomes electrical energy either indirectly, in a power station (combustion, steam, turbine and generator), or directly, in an electrochemical cell such as a battery or a fuel cell ([C01](../C01-chemical-processes/notes.md), [F03](../../F-industrial-chemical-processes/F03-energy-conversion/notes.md)).
- Efficiency (*rendement*) = useful energy / energy supplied, as a fraction or × 100%. *(CvTE R5.5)*
- Heat taken up by water: q = m·c·ΔT, with c = 4.18·10³ J kg⁻¹ K⁻¹ (Binas), m in kg and ΔT in K; a change of 1 K is the same as a change of 1 °C.
- Electrical energy: E = P·t, in J, with P in W (J s⁻¹) and t in s; 1 kWh = 1000 W × 3600 s = 3.6·10⁶ J.
- **Trap:** in Dutch *rendement* means both the efficiency of an energy conversion (here) and the yield of a reaction ([C02](../C02-chemical-calculations/notes.md)).
- **Trap:** going from the useful energy back to the fuel you need, divide by the efficiency (you need more fuel); going from the fuel to the useful energy, multiply.

### Worked example: heating water with methane

- How much methane is needed to heat 1.50 kg of water from 18.0 °C to 65.0 °C? Suppose all the heat goes into the water, and the water formed leaves the burner as vapour, so ΔE = −8.03·10⁵ J per mol CH₄ (C6.3, with H₂O(g)).
- q = m·c·ΔT = 1.50 × 4.18·10³ × 47.0 = 2.95·10⁵ J.
- n(CH₄) = 2.95·10⁵ / 8.03·10⁵ = 0.367 mol, and m(CH₄) = 0.367 × 16.04 = 5.89 g (3 significant figures).
- If only 80% of the heat reaches the water (suppose), you need 5.89 / 0.80 = 7.4 g.

### Worked example: methane for 1 kWh of electrical energy

- Suppose a power station turns 40% of the heat of combustion of methane into electrical energy, and the water leaves as vapour (ΔE = −8.03·10⁵ J per mol CH₄).
- Energy needed from combustion: 3.6·10⁶ J / 0.40 = 9.0·10⁶ J per kWh.
- n(CH₄) = 9.0·10⁶ / 8.03·10⁵ = 11.2 mol (keep an extra digit in between), so m(CH₄) = 11.2 × 16.04 = 1.8·10² g per kWh, in 2 significant figures because of the 40%.
- 1 mol CH₄ gives 1 mol CO₂, so this also releases 11.2 × 44.01 = 4.9·10² g CO₂ per kWh. Comparing fuels by the CO₂ they produce per joule is part of [F03](../../F-industrial-chemical-processes/F03-energy-conversion/notes.md).

### Worked example: an electric kettle

- A 2.0 kW kettle is switched on for 3.0 min: E = P·t = 2.0·10³ W × 180 s = 3.6·10⁵ J, which is 0.10 kWh. It heats 1.00 kg of water from 20.0 °C to 90.0 °C: q = 1.00 × 4.18·10³ × 70.0 = 2.93·10⁵ J.
- Efficiency = 2.93·10⁵ / 3.6·10⁵ = 0.81, so 81%; the rest warms up the kettle and the air around it.

## CCVX versus the Dutch syllabus

- **In both:** everything else above. The Dutch R5.1 names ignition temperature as assumed knowledge (printed in italics); CCVX lists it in the basic knowledge ([sb14](../../0-basic-knowledge/04-reactions/notes.md)) and in [A10](../../A-skills/A10-using-chemical-concepts/notes.md).
- **Dutch syllabus only:** calculating a heat of formation from a given heat of reaction (R5.4), with the same arithmetic as C6.3; and the term energy levels (*energieniveaus*) in R5.1. *(CvTE R5.4, R5.1)*
