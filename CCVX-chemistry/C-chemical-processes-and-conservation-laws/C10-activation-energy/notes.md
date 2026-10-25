# C10 — Activation Energy: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. This subdomain is school-exam only in the Netherlands, so the CvTE syllabus doesn't specify it: *(SLO C10)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/), which names the same concepts, and CvTE codes mark overlap with the central exam.

| Topic | Status |
|---|---|
| Activation energy | drafted |
| Activation energy in experiments | drafted |
| Catalyst | drafted |
| Enzymes | drafted |
| Energy diagram and element conservation | drafted |

## Activation energy

- Activation energy (*activeringsenergie*, E<sub>act</sub>): the minimum energy that colliding particles need for the collision to lead to a reaction (an effective collision, *effectieve botsing*). It is needed because bonds in the reactants have to be broken or weakened before new bonds can form. In an energy diagram it is the height of the transition state above the reactant level. *(CvTE R3.2, R5.1)*
- Only collisions with at least the activation energy (and the right orientation) are effective. At a higher temperature the particles move faster, so they collide more often, but above all a much larger fraction of the collisions has enough energy. The collision model is in [C04](../C04-reaction-kinetics/notes.md). *(CvTE R3.1, R3.2)*
- The higher the activation energy, the slower the reaction at a given temperature. This is why a fuel and air don't react until the mixture is heated above its ignition temperature (*ontbrandingstemperatuur*): a spark or flame gives the first particles the activation energy, and the heat that their reaction releases then activates the next particles. *(CvTE R5.1)*
- **Trap:** the activation energy isn't the energy effect ΔE. A strongly exothermic reaction can still have a high activation energy and need heating to start. And a higher temperature doesn't lower the activation energy: it gives more particles enough energy to get over it.

## Activation energy in experiments

- To see the effect of the activation energy, measure the rate of the same reaction at several temperatures and keep everything else the same: concentrations, volumes and the surface area of reacting substances (*verdelingsgraad*). *(SLO C10; CvTE R3.1)*
- Example: sodium thiosulfate solution with hydrochloric acid (*zoutzuur*), S₂O₃²⁻(aq) + 2 H₃O⁺(aq) → S(s) + SO₂(aq) + 3 H₂O(l). The sulfur makes the solution cloudy, so you time how long it takes until a cross under the beaker disappears. The shorter the time, the higher the rate, and 1/time is used as a measure of the rate. *(CvTE R3.1)*
- Rule of thumb (*vuistregel*): near room temperature many reactions go about 2 to 3 times as fast for every 10 °C rise in temperature. From 20 °C to 40 °C that is 2² = 4 to 3² = 9 times as fast. It is only a rule of thumb, because the factor depends on the activation energy of the reaction. *(SLO C10)*
- The SLO suggests determining the activation energy from rates at different temperatures. The larger the activation energy, the more strongly the rate rises with temperature, as the Arrhenius equation for two temperatures shows: ln(r₂/r₁) = (E<sub>act</sub>/R) × (1/T₁ − 1/T₂), with the rates r₁ and r₂ at T₁ and T₂ in K and the gas constant R = 8.314 J mol⁻¹ K⁻¹. *(SLO C10)*
- Example: if the rate doubles from 293 K to 303 K, E<sub>act</sub> = 8.314 × ln 2 / (1/293 − 1/303) = 8.314 × 0.693 / (1.126·10⁻⁴) = 5.1·10⁴ J mol⁻¹. If it triples, E<sub>act</sub> = 8.1·10⁴ J mol⁻¹. So the rule of thumb fits reactions with an activation energy of roughly 0.5·10⁵ to 0.8·10⁵ J mol⁻¹. *(SLO C10)*
- **Trap:** use temperatures in kelvin in the Arrhenius equation, and don't use the rule of thumb when a question gives measured rates or another factor.

## Catalyst

- A catalyst (*katalysator*) is a substance that makes a reaction faster without being used up: it takes part in the reaction, but it is formed again in a later step. *(CvTE R3.2)*
- It offers another reaction route (a different mechanism) with a lower activation energy, so at the same temperature a larger fraction of the collisions is effective. *(CvTE R3.2, R5.1)*
- Example, iodide ions in hydrogen peroxide solution: first H₂O₂ + I⁻ → H₂O + IO⁻, then H₂O₂ + IO⁻ → H₂O + O₂ + I⁻. Together: 2 H₂O₂ → 2 H₂O + O₂. I⁻ is used in the first step and formed again in the second, so it is the catalyst; IO⁻ is formed and then used up, so it is an intermediate (*tussenproduct*). *(CvTE R2.4, R3.2)*
- A homogeneous catalyst is in the same phase as the reactants, like I⁻ in the solution above. A heterogeneous catalyst is in another phase, usually a solid on whose surface the reactant molecules react, such as manganese dioxide (MnO₂) in hydrogen peroxide solution, platinum metals in a car's catalytic converter or iron in the synthesis of ammonia. For a solid catalyst a large surface area matters ([C08](../C08-technological-aspects/notes.md)). *(CvTE R3.1, R3.2)*
- A catalyst speeds up the forward and the reverse reaction to the same extent, so an equilibrium forms sooner but its position doesn't change. *(CvTE R4.3)*
- **Trap:** a catalyst doesn't give the particles more energy and doesn't change ΔE; it lowers the activation energy by offering another route. Leave it out of the overall equation, but include it in the separate steps of the mechanism.

## Enzymes

- Enzymes (*enzymen*) are proteins that act as catalysts in living organisms (biocatalysts, *biokatalysatoren*). *(CvTE L2.1)*
- The molecule that reacts, the substrate (*substraat*), binds to the active position (active site, *actieve plaats*) of the enzyme and forms an enzyme-substrate complex (*enzym-substraatcomplex*). There it reacts by a route with a lower activation energy, and then the product splits off, so the enzyme is free for the next substrate molecule. *(CvTE L2.1, L2.2)*
- Enzymes are specific: the spatial shape and the functional groups of the active position fit only one substrate or a small group of similar substrates ([E02](../../E-innovation-and-chemical-research/E02-selectivity-and-specificity/notes.md)). Modelling active positions is in [D04](../../D-development-of-chemical-knowledge/D04-molecular-modelling/notes.md). *(CvTE L2.2)*
- Every enzyme has a temperature optimum (*temperatuuroptimum*) and a pH optimum (*pH-optimum*). Up to the optimum temperature the rate rises, as for any reaction; above it the spatial structure of the protein is lost (denaturation, *denaturatie*), the active position no longer fits and the rate drops. Many human enzymes work best near body temperature, 37 °C, and pepsin in the acidic stomach works best at a low pH. *(CvTE L2.2)*
- Example: catalase, found in the liver and most other tissues, breaks down hydrogen peroxide, a harmful by-product of metabolism, into water and oxygen. Enzymes in living organisms are in [G01](../../G-society-chemistry-and-technology/G01-chemistry-of-life/notes.md). *(CvTE L2.1)*
- **Trap:** above the optimum temperature the rate drops because the enzyme denatures (its shape changes), not because the collisions have less energy. Below the optimum it is the other way round: the enzyme is intact and the rate simply follows the temperature.

## Energy diagram and element conservation

- In an energy diagram with and without a catalyst, the reactant and product levels are the same, so ΔE is the same, but the catalysed route has a lower top. In a simple drawing the catalysed route is one lower hump; drawn in more detail it has a hump for every step, with the intermediate in the dip between them ([C06](../C06-energy-calculations/notes.md)). *(CvTE R5.1, R5.2)*
- Example: suppose E<sub>act</sub> = 0.80·10⁵ J mol⁻¹ and ΔE = −0.50·10⁵ J mol⁻¹. Then the reverse reaction has E<sub>act</sub> = 0.80·10⁵ + 0.50·10⁵ = 1.30·10⁵ J mol⁻¹. A catalyst that lowers the top by 0.30·10⁵ J mol⁻¹ gives 0.50·10⁵ J mol⁻¹ for the forward reaction and 1.00·10⁵ J mol⁻¹ for the reverse one: both are lowered by the same amount, which is why both directions go faster. *(CvTE R5.2, R4.3)*
- Element conservation (*elementbehoud*): in every reaction, catalysed or not, the number of atoms of each element stays the same. The catalyst isn't in the overall equation because it is formed again, in the same amount, in a later step. *(CvTE R&A3.1, R1.1)*
- To check a mechanism, make sure every step is balanced in atoms and charge, and that adding up the steps and crossing out what appears on both sides gives the overall equation. In the iodide example, I⁻ and IO⁻ cancel out and 2 H₂O₂ → 2 H₂O + O₂ remains. *(CvTE R1.1, R2.4)*
- **Trap:** don't draw the catalysed route with different reactant or product levels, and don't write the catalyst in the overall equation as a reactant or product. If it seems to be used up, either it isn't a catalyst or the mechanism is incomplete.
