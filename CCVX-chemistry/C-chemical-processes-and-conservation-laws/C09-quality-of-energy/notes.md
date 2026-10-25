# C9 — Quality of Energy: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. This subdomain is school-exam only in the Netherlands, so the CvTE syllabus doesn't specify it: *(SLO C9)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/), which names the same concepts, and CvTE codes mark overlap with the central exam.

| Topic | Status |
|---|---|
| Energy transitions | drafted |
| Types of energy | drafted |
| Quality of energy and efficiency | drafted |
| Exothermic and endothermic | drafted |
| Energy diagram | drafted |
| Heat of formation, fossil fuels and biofuels | drafted |
| Gibbs energy and enthalpy | drafted |

## Energy transitions

- In the narrow sense, an energy transition is a conversion of energy from one type into another (*energieomzetting*). The law of conservation of energy (*wet van behoud van energie*) says that the total amount of energy stays the same, but every conversion changes its type and lowers its quality (see below). *(CvTE R5.5, R&A3.1)*
- Example, a gas-fired power station: burning methane turns chemical energy into heat, the heat turns water into high-pressure steam that drives a turbine (kinetic energy), and a generator turns that into electrical energy. A battery turns chemical energy directly into electrical energy; charging it, or electrolysing water to make hydrogen, does the reverse; photosynthesis turns light into chemical energy. *(CvTE T6.5, L1.2)*
- In the wider sense, the energy transition (*energietransitie*) is the change of society's energy supply from fossil fuels to renewable sources such as sun, wind and biomass, to cut CO₂ emissions. Chemistry helps by storing electrical energy in substances (hydrogen from the electrolysis of water, batteries), by making fuels and raw materials from biomass and by making processes more efficient ([F03](../../F-industrial-chemical-processes/F03-energy-conversion/notes.md), [G03](../../G-society-chemistry-and-technology/G03-energy-and-industry/notes.md)). *(CvTE T3.1, T6.4, T6.5)*
- **Trap:** sun and wind don't deliver energy exactly when it is needed, so the transition also needs storage. Storing electrical energy in a substance such as hydrogen and turning it back later takes two conversions, each with its own losses.

## Types of energy

- Types of energy (*energiesoorten*) include chemical energy (stored in substances, in the bonds and arrangement of their particles), heat (the motion of particles), electrical energy, light and other radiation, kinetic energy (motion), potential energy (position, such as water behind a dam) and nuclear energy. *(SLO C9)*
- Chemical reactions turn chemical energy into heat or take heat in (most reactions), into or from electrical energy (batteries, fuel cells, electrolysis), and into or from light (a glow stick gives off light; photosynthesis and photolysis take it in). *(CvTE R5.5, L1.2)*
- Breaking a bond always costs energy, and forming a bond always releases energy. A reaction is exothermic when forming the new bonds releases more energy than breaking the old bonds costs.
- **Trap:** a fuel doesn't release energy because its bonds break, since breaking bonds costs energy. The energy comes out because forming the bonds in CO₂ and H₂O releases more energy than breaking the bonds in the fuel and in O₂ costs.

## Quality of energy and efficiency

- The quality of energy (*kwaliteit van energie*) is how much of it can be turned into other types, and so into useful work. Electrical and mechanical energy are high quality (*hoogwaardig*): they can be turned almost completely into any other type. Heat is low quality (*laagwaardig*), and the closer its temperature is to that of the surroundings, the lower its quality. *(SLO C9)*
- Why heat is low quality: an engine that turns heat into work can use at most the fraction 1 − T(surroundings) / T(heat), with T in K. Steam at 600 K with surroundings at 300 K gives at most 1 − 300/600 = 50 %; water at 330 K (57 °C) gives at most 1 − 300/330, about 9 %. This limit comes from physics, but it explains the ranking.
- Every conversion lowers the quality: part of the energy always ends up as low-temperature heat in the surroundings, so the efficiency (*rendement*), useful energy / energy supplied × 100 %, is always below 100 %. *(CvTE R5.5)*
- Example: a power station burns methane that releases 1.00·10³ MJ and delivers 4.0·10² MJ of electrical energy, so its efficiency is 4.0·10² / 1.00·10³ × 100 % = 40 %. The other 6.0·10² MJ isn't destroyed: it leaves as low-temperature heat in the cooling water and the flue gas. Calculations with efficiency are in [C06](../C06-energy-calculations/notes.md). *(CvTE R5.5)*
- Using quality better: use the waste heat (*restwarmte*) to heat buildings or other processes, as in combined heat and power (*warmtekrachtkoppeling*), or skip the heat step altogether, as a fuel cell does: it turns chemical energy directly into electrical energy, so the heat-to-work limit above doesn't apply to it. *(SLO C9)*
- **Trap:** energy is never used up. "Energy loss" means that energy has turned into low-quality heat that can no longer do useful work: the amount stays the same, but the quality falls.

## Exothermic and endothermic

- Exothermic (*exotherm*): the reacting system gives energy, usually heat, to the surroundings, because the products have less chemical energy than the reactants, so ΔE < 0. Examples are combustion, neutralisation and respiration. *(CvTE R5.1)*
- Endothermic (*endotherm*): the system takes up energy from the surroundings, so ΔE > 0. Examples are a thermolysis such as CaCO₃(s) → CaO(s) + CO₂(g), the electrolysis of water and photosynthesis; the energy must be supplied all the time, as heat, electrical energy or light. *(CvTE R5.1)*
- In terms of quality, an exothermic reaction in a flame turns chemical energy into heat, while the same reaction in a battery or fuel cell delivers part of it as high-quality electrical energy. An endothermic reaction can store high-quality energy as chemical energy, as the electrolysis of water stores electrical energy in hydrogen. *(CvTE T6.5)*
- **Trap:** endothermic doesn't mean "can't run by itself". Ammonium nitrate dissolves in water by itself, NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq), although the solution gets cold; the reason is in the topic on Gibbs energy below.

## Energy diagram

- An energy diagram (*energiediagram*) shows the energy of the reactants and of the products as two horizontal levels, and the route between them as a hump. The top of the hump is the transition state (*overgangstoestand*, also *geactiveerde toestand*). *(CvTE R5.1, R5.2)*
- The height of the top above the reactant level is the activation energy E<sub>act</sub> (*activeringsenergie*, see [C10](../C10-activation-energy/notes.md)), and the product level minus the reactant level is ΔE. In an exothermic reaction the product level is lower than the reactant level; in an endothermic reaction it is higher. *(CvTE R5.1, R5.2)*
- The diagram shows how much energy is released or taken up, but not as which type: the same ΔE can leave as heat (burning) or partly as electrical energy (fuel cell). Drawing diagrams with numbers is in [C06](../C06-energy-calculations/notes.md). *(CvTE R5.2)*
- **Trap:** in an endothermic reaction the top is always above the product level, so E<sub>act</sub> is larger than ΔE. A catalyst lowers only the top, never the two levels.

## Heat of formation, fossil fuels and biofuels

- Heat of formation (*vormingswarmte*): the energy effect when 1 mol of a substance forms from its elements in their standard states; for those elements themselves it is 0. The Binas table of heats of formation gives the values in 10⁵ J mol⁻¹, and ΔE = Σ(heats of formation of the products) − Σ(heats of formation of the reactants), each multiplied by its coefficient. *(CvTE R5.1, R5.3)*
- Example, with values from Binas: for C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l), ΔE = [2 × (−3.935) + 3 × (−2.86)] − (−2.78) = −13.67·10⁵ J per mol ethanol, which is −1.367·10⁶ J. *(CvTE R5.3)*
- Fossil fuels (*fossiele brandstoffen*: coal, oil and natural gas) formed over millions of years from the remains of organisms. Burning them releases carbon that was stored long ago, which raises the CO₂ content of the air (enhanced greenhouse effect, *versterkt broeikaseffect*), and their stocks are finite. *(CvTE T5.2)*
- Biofuels (*biobrandstoffen*) are made from recent biomass, e.g. bioethanol from the fermentation of glucose, C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. The carbon in them was taken from the air by photosynthesis shortly before, 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, so burning them returns it in a short carbon cycle (*koolstofkringloop*). *(CvTE T5.2, L1.2)*
- Biofuels are still not fully CO₂-neutral, because growing, fertilising, transporting and processing the crops costs energy, often from fossil fuels; crops for fuel can also compete with food for farmland ([F03](../../F-industrial-chemical-processes/F03-energy-conversion/notes.md)). *(CvTE T5.2)*
- **Trap:** a biofuel doesn't necessarily release less CO₂ per joule. Ethanol gives 2 × 44.01 g CO₂ per 1.367 MJ = 64.4 g per MJ, more than methane's 44.01 g per 0.891 MJ = 49.4 g per MJ (with ΔE = −8.91·10⁵ J per mol CH₄ from [C06](../C06-energy-calculations/notes.md)). The advantage of a biofuel is that its CO₂ was taken from the air shortly before. *(CvTE T5.2)*

## Gibbs energy and enthalpy

- Enthalpy (*enthalpie*, H) is the quantity for heat at constant pressure: the enthalpy change ΔH of a reaction is the heat that the system exchanges with its surroundings at constant pressure when it does no electrical work, negative for an exothermic reaction. Most reactions, in open vessels and in industry, run at constant pressure.
- The values in the Binas table of heats of formation are such enthalpy changes (at 298 K and standard pressure), so the heat of reaction that Dutch exams write as ΔE is in practice ΔH: for ethanol, ΔH = −1.367·10⁶ J per mol. Write ΔE in a Dutch-style answer. *(CvTE R5.1)*
- Strictly, ΔH differs a little from the change in the energy of the system itself, because at constant pressure the system also exchanges work with the atmosphere when its volume of gas changes. That part is small: for CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), in which 3 mol of gas becomes 1 mol, it is about 5 kJ of the 891 kJ per mol, less than 1 %.
- Entropy (*entropie*, S) measures how spread out the particles and their energy are: the more ways they can be arranged, the higher the entropy. Entropy increases when a solid melts, when a liquid evaporates, when a reaction makes more gas molecules, and usually when substances mix or dissolve.
- The second law of thermodynamics says that in every process that runs by itself, the total entropy of the system and its surroundings increases. This is why every energy conversion produces some heat that spreads into the surroundings, and so why the quality of energy always drops.
- Gibbs energy (*gibbs-energie*, also *vrije enthalpie*): G = H − TS, so at constant temperature and pressure ΔG = ΔH − TΔS, with T in K. A reaction can run by itself (it is spontaneous) when ΔG < 0; when ΔG > 0 only the reverse reaction can run by itself; at ΔG = 0 the system is at equilibrium.

| ΔH | ΔS | ΔG < 0, so the reaction runs by itself |
|---|---|---|
| negative | positive | at every temperature |
| negative | negative | only at low temperatures |
| positive | positive | only at high temperatures |
| positive | negative | never |

- Example, the thermolysis of limestone, CaCO₃(s) → CaO(s) + CO₂(g): suppose ΔH = +1.78·10⁵ J mol⁻¹ and ΔS = +161 J mol⁻¹ K⁻¹ (positive, because a gas forms). At 298 K, ΔG = 1.78·10⁵ − 298 × 161 = +1.30·10⁵ J mol⁻¹, so limestone doesn't decompose at room temperature. ΔG = 0 at T = 1.78·10⁵ / 161 = 1.11·10³ K (about 830 °C), and above that ΔG is negative: at 1.20·10³ K, ΔG = 1.78·10⁵ − 1.20·10³ × 161 = −0.15·10⁵ J mol⁻¹. That is why limestone has to be heated strongly to decompose.
- Gibbs energy and quality: −ΔG is the largest amount of energy that a reaction at constant temperature and pressure can deliver as useful work, such as electrical energy from a battery or fuel cell. For a hydrogen fuel cell, 2 H₂(g) + O₂(g) → 2 H₂O(l), per mol H₂O formed ΔH = −2.86·10⁵ J and ΔG is about −2.37·10⁵ J, so even a perfect fuel cell turns at most about 83 % of the heat of reaction into electrical energy; the rest leaves as heat.
- **Trap:** ΔG < 0 means that a reaction can run by itself, not that it runs fast. Methane and air have a very negative ΔG, but they don't react until they are ignited, because the activation energy is high ([C10](../C10-activation-energy/notes.md)).

## CCVX versus the Dutch syllabus

- **In both:** exothermic and endothermic reactions, energy diagrams, heats of formation, efficiency, and fossil fuels and biofuels *(CvTE R5.1–R5.3, R5.5, T5.2)*. The quality of energy itself is school-exam material in the Netherlands *(SLO C9)*.
- **CCVX only:** enthalpy, entropy and Gibbs energy. They aren't in the CvTE syllabus and SLO C9 doesn't name them, so look them up in an English source from [PLAN.md](../../PLAN.md). Dutch exams write the heat of reaction as ΔE.
