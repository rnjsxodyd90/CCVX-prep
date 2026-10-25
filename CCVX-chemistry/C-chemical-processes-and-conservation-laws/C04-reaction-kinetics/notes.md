# C4 — Reaction Kinetics: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

## C4.1 The collision model

- The reaction rate (*reactiesnelheid*) is how fast a reactant is used up or a product is formed: the change in concentration per second (calculated in C4.4). *(CvTE R&A1.2)*
- The collision model (*botsende-deeltjesmodel*): particles can only react when they collide, and only effective collisions (*effectieve botsingen*) lead to a reaction. For that the particles must collide with enough energy (at least the activation energy, C4.2) and in the right orientation. The more effective collisions per second in a given volume, the higher the rate. *(CvTE R3.1)*
- An exam explanation is a chain of cause and effect: the change in conditions, then more (or fewer) effective collisions per second, then a higher (or lower) rate.

### Concentration

- A higher concentration means more particles per litre, so more collisions per second and a higher rate. During a reaction the concentrations of the reactants fall, so the rate drops over time until a reactant has run out or equilibrium is reached ([C05](../C05-chemical-equilibrium/notes.md)). *(CvTE R3.1)*

### Pressure

- For gases, compressing the mixture into a smaller volume raises the pressure (*druk*) and with it the concentration of every gas, so the rate goes up. *(CvTE R3.1)*
- **Trap:** what counts is the concentration of the reacting gases. Pumping an unreactive gas into a closed vessel raises the total pressure, but the concentrations of the reactants stay the same, and so does the rate.

### Temperature

- At a higher temperature (*temperatuur*) the particles move faster. That gives more collisions per second, but mainly a larger fraction of collisions with at least the activation energy. Both mean more effective collisions per second, so a higher rate. *(CvTE R3.1)*
- **Trap:** don't explain a temperature effect with "more collisions" alone. The main effect is that a larger fraction of the collisions has enough energy to be effective.

### Surface area of reacting substances

- Surface area of reacting substances (*verdelingsgraad*, how finely a substance is divided): when a solid reacts with a liquid or a gas, only the particles at its surface can be hit. A powder has a much larger surface than one lump of the same mass, so there are more collisions per second and the rate is higher. Zinc powder reacts faster with hydrochloric acid than a piece of zinc, and the fine dust of a combustible solid, such as flour, can burn explosively. *(CvTE R3.1)*
- **Trap:** the surface area only matters when the reactants are in different phases. In a solution or a gas mixture the particles are already mixed as finely as possible.

## C4.2 Activation energy and catalysts

### Activation energy

- Activation energy (*activeringsenergie*, E<sub>act</sub>): the minimum energy that colliding particles need to react, because bonds in the reactants have to be (partly) broken before new bonds can form. On the way the particles pass through the transition state (*overgangstoestand*, *geactiveerde toestand*) at the top of the energy diagram ([C06](../C06-energy-calculations/notes.md)). *(CvTE R3.2, R5.1)*
- The higher the activation energy, the smaller the fraction of collisions that is effective, and the slower the reaction at a given temperature.
- Many exothermic reactions have to be started, for example by heating a fuel to its ignition temperature (*ontbrandingstemperatuur*) with a flame or a spark. After that the heat they release keeps them going. *(CvTE R5.1)*

### Catalyst

- A catalyst (*katalysator*) speeds up a reaction without being used up. It offers another reaction route (a different mechanism) with a lower activation energy, so a larger fraction of the collisions is effective. It does take part in the reaction, but it is formed back in a later step, so it doesn't appear in the overall equation; it is often written above the arrow. *(CvTE R3.2)*
- Example: hydrogen peroxide decomposes slowly on its own, 2 H₂O₂ → 2 H₂O + O₂, but quickly once manganese dioxide (MnO₂, *bruinsteen*) or the enzyme catalase is added.
- A homogeneous catalyst is in the same phase as the reactants, for example dissolved H⁺ (H₃O⁺) in an esterification mixture. A heterogeneous catalyst is in a different phase, usually a solid with the gases or liquids reacting at its surface: iron in the ammonia synthesis, nickel in the hardening of vegetable oils with hydrogen, and platinum and related metals in the catalytic converter of a car. A heterogeneous catalyst works better when its surface area is large (C4.1).
- Enzymes are biological catalysts (proteins) and are very specific; see [E02](../../E-innovation-and-chemical-research/E02-selectivity-and-specificity/notes.md) and [C10](../C10-activation-energy/notes.md). *(CvTE L2.1)*
- A catalyst lowers the activation energy of the forward and the reverse reaction equally and doesn't change ΔE, so it doesn't change the position of an equilibrium ([C05](../C05-chemical-equilibrium/notes.md)). *(CvTE R4.3, R5.1)*
- **Trap:** say that a catalyst gives "another reaction route (mechanism) with a lower activation energy". It doesn't supply energy, it isn't used up, and it doesn't give more product at equilibrium.

## C4.3 Reaction mechanisms and the rate-determining step

### Reaction mechanism

- Many reactions take place in a number of steps; together they form the reaction mechanism (*reactiemechanisme*). Adding up the steps gives the overall equation. An intermediate (*tussenproduct*) is formed in one step and used up in a later one; a catalyst is used up in one step and formed back in a later one, so neither appears in the overall equation. *(CvTE R2.4)*
- Example: the decomposition of hydrogen peroxide catalysed by iodide ions runs in two steps.
    - Step 1 (slow): H₂O₂ + I⁻ → H₂O + IO⁻
    - Step 2 (fast): H₂O₂ + IO⁻ → H₂O + O₂ + I⁻
    - Overall: 2 H₂O₂ → 2 H₂O + O₂, with I⁻ as the catalyst and IO⁻ as the intermediate.
- In an energy diagram of a reaction in steps, each step has its own hump and each intermediate sits in a dip between two humps ([C06](../C06-energy-calculations/notes.md)).
- **Trap:** don't mix up an intermediate (formed first, used up later) with a catalyst (used up first, formed back later).

### Rate-determining step

- The rate-determining step (*snelheidsbepalende stap*) is the slowest step, usually the step with the highest activation energy. The overall reaction can't go faster than this step, so to speed up the reaction you have to speed up this step, for example by raising the concentration of a particle that takes part in it. In the example, step 1 is rate-determining, so the rate depends on [H₂O₂] and [I⁻]. *(CvTE R2.4)*
- **Trap:** a particle that only takes part in a fast step after the rate-determining step hardly affects the overall rate, even at a higher concentration.

## C4.4 Calculating the reaction rate

- The reaction rate s = Δc / Δt, in mol L⁻¹ s⁻¹ (the Dutch symbol s stands for *snelheid*). For a product Δc is positive. For a reactant the concentration drops, so take the decrease, s = −Δc / Δt; a rate is never negative. Always say which substance the rate refers to. *(CvTE R&A1.2)*
- The rates of the substances in one reaction are in the ratio of their coefficients. For 2 H₂O₂ → 2 H₂O + O₂, O₂ forms at half the rate at which H₂O₂ is used up, and H₂O forms at the same rate as H₂O₂ disappears. *(CvTE R&A1.1)*

### From a table

- Suppose the decomposition of hydrogen peroxide gives these concentrations:

| t (s) | 0 | 50 | 100 | 150 | 200 |
|---|---|---|---|---|---|
| [H₂O₂] (mol L⁻¹) | 0.500 | 0.420 | 0.354 | 0.297 | 0.250 |

- Average rate over the first 50 s: s = (0.500 − 0.420) / 50 = 0.080 / 50 = 1.6·10⁻³ mol L⁻¹ s⁻¹. After the subtraction Δc has only 2 significant figures, so the answer has 2. *(CvTE R&A1.2, A8.3)*
- Average rate from 150 s to 200 s: s = (0.297 − 0.250) / 50 = 0.047 / 50 = 9.4·10⁻⁴ mol L⁻¹ s⁻¹. The rate has dropped because [H₂O₂] has dropped (C4.1).
- Rate of formation of O₂ over the first 50 s: ½ × 1.6·10⁻³ = 8.0·10⁻⁴ mol L⁻¹ s⁻¹.

### From a graph

- An average rate over an interval comes from two points on the curve. Suppose [O₂] is 0.020 mol L⁻¹ at 1.0 min and 0.050 mol L⁻¹ at 4.0 min: s = (0.050 − 0.020) / (3.0 × 60 s) = 0.030 / 180 = 1.7·10⁻⁴ mol L⁻¹ s⁻¹. *(CvTE A8.1)*
- The rate at one moment is the slope of the tangent (*raaklijn*) to the curve at that moment. Draw the tangent as long as you can, read off two points on it that are far apart, and calculate Δc / Δt between them. Suppose the tangent at t = 2.0 min goes through the points (0 min; 0.010 mol L⁻¹) and (5.0 min; 0.085 mol L⁻¹): s = (0.085 − 0.010) / (5.0 × 60 s) = 0.075 / 300 = 2.5·10⁻⁴ mol L⁻¹ s⁻¹.
- A concentration-time curve is steepest at the start, where the reactant concentrations are highest, and flattens out as the reaction slows down. Where it becomes horizontal the rate is 0: a reactant has run out, or equilibrium has been reached.

### From a measured gas volume

- Suppose 48 mL of O₂ (at 298 K and standard pressure) forms in the first 60 s from 0.100 L of hydrogen peroxide solution. Keep an extra digit in between:
    - n(O₂) = 0.048 L / 24.5 L mol⁻¹ = 1.96·10⁻³ mol (V<sub>m</sub> from Binas; see [C02](../C02-chemical-calculations/notes.md));
    - n(H₂O₂) used up = 2 × 1.96·10⁻³ = 3.92·10⁻³ mol, so Δ[H₂O₂] = 3.92·10⁻³ / 0.100 = 3.92·10⁻² mol L⁻¹;
    - s = 3.92·10⁻² / 60 = 6.5·10⁻⁴ mol L⁻¹ s⁻¹ (2 significant figures, from the 48 mL).
- **Trap:** the unit is mol L⁻¹ s⁻¹. Convert minutes to seconds, mL to L and mmol to mol before you divide.
- **Trap:** the rate of one substance isn't the rate of another: use the coefficients to convert.

## C4.5 Electron movement in reaction mechanisms

- A mechanism shows which bonds break and form; curved arrows show how the electrons move. An arrow starts at an electron pair (a lone pair or a bond) and ends where that pair goes: between two atoms (a new bond) or on one atom (a new lone pair). Use Lewis structures with all lone pairs and charges, and put each formal charge on the right atom. *(CvTE R2.5, M1.15, M1.17)* Lewis structures are in [B01](../../B-substances-and-materials/B01-particle-models/notes.md).
- A bond can break in two ways. If each atom keeps one electron of the shared pair, two radicals form. If one atom takes both electrons, a positive and a negative ion form.

### Nucleophile and electrophile

- A nucleophile (*nucleofiel*, "nucleus-loving") is a particle with a lone pair that attacks a positive or δ+ atom and forms a new bond with it by donating that pair. Examples: OH⁻, Br⁻, H₂O and NH₃; a nucleophile doesn't have to be negative. *(CvTE R2.5)*
- An electrophile (*elektrofiel*, "electron-loving") is an electron-pair acceptor: a positive ion or a δ+ atom, such as H⁺, a carbocation, or the δ+ end of a polarised Br₂ molecule. *(CvTE R2.5)*
- A δ+ atom comes from a polar atomic bond (covalent bond): the more electronegative atom pulls the shared pair towards itself and becomes δ−, leaving the other atom δ+. In CH₃Br the C atom is δ+ and the Br atom δ−: the difference in electronegativity is small, and C–Br falls outside the N/O/F rule ([B03](../../B-substances-and-materials/B03-bonds-and-properties/notes.md)), but it is enough to make this C atom the place where a nucleophile attacks. *(CvTE M3.1, M1.17)*

### Nucleophilic substitution

- OH⁻ + CH₃Br → CH₃OH + Br⁻ takes place in one step. The hydroxide ion is the nucleophile: an arrow goes from a lone pair on its O atom to the δ+ C atom, which it approaches from the side opposite the Br atom. At the same time an arrow goes from the C–Br bond to the Br atom: the bonding pair moves completely onto Br, which leaves as a bromide ion. *(CvTE R2.5)*

### Free radicals: radical substitution

- A free radical (*radicaal*) is a particle with an unpaired electron, such as Cl• or CH₃•. Radicals are very reactive because the unpaired electron tends to pair up. *(CvTE R2.5, M1.4)*
- Methane and chlorine react under UV light in a chain reaction with three stages.
    - Initiation (*initiatie*): Cl₂ → 2 Cl•. UV light splits the relatively weak Cl–Cl bond, and each Cl atom keeps one electron of the shared pair.
    - Propagation (*propagatie*): Cl• + CH₄ → HCl + CH₃•, then CH₃• + Cl₂ → CH₃Cl + Cl•. Each step uses up one radical and forms a new one, so the chain keeps going.
    - Termination (*terminatie*): two radicals combine and the chain stops: 2 Cl• → Cl₂, CH₃• + Cl• → CH₃Cl, or 2 CH₃• → C₂H₆ (which explains traces of ethane in the product).
- Overall: CH₄ + Cl₂ → CH₃Cl + HCl. Further substitution also gives CH₂Cl₂, CHCl₃ and CCl₄, so the product is a mixture. *(CvTE R2.5)* Addition polymerisation runs through the same three stages ([D03](../../D-development-of-chemical-knowledge/D03-chemical-synthesis/notes.md)); the free radical mechanism as a reaction type is in [C07](../C07-classification-of-reactions/notes.md).

### Electrophilic addition of bromine to ethene

- The C=C double bond is rich in electrons. When a Br₂ molecule comes close, the electrons of the Br–Br bond are pushed away from the double bond, so the nearer Br atom becomes δ+ and the further one δ−.
- Step 1: an arrow goes from the C=C double bond to the δ+ Br atom, and a second arrow from the Br–Br bond to the further Br atom. A C–Br bond forms, the further Br atom leaves with both electrons as Br⁻, and the other C atom is left with three bonds and a positive charge (a carbocation): CH₂=CH₂ + Br₂ → CH₂Br–CH₂⁺ + Br⁻. Here Br₂ is the electrophile. *(CvTE R2.5)*
- Step 2: the bromide ion is the nucleophile. An arrow goes from one of its lone pairs to the positive C atom and forms the second C–Br bond: CH₂Br–CH₂⁺ + Br⁻ → CH₂Br–CH₂Br (1,2-dibromoethane).
- More advanced texts draw the intermediate as a three-membered ring with a bridging Br atom (a bromonium ion) instead of an open carbocation. The overall result is the same, and exam questions show the mechanism they want you to describe. Addition reactions, including 1,2- and 1,4-addition, are in [C01](../C01-chemical-processes/notes.md).

### Resonance structures

- Some particles can't be described by a single Lewis structure. You then draw two or more resonance structures (*grensstructuren*; the phenomenon is *mesomerie*) that differ only in the positions of electron pairs, never in the positions of atoms. The real particle is in between, with those electrons spread out (delocalised) over several atoms. *(CvTE R2.5, M1.15)*
- Example: in the ethanoate ion CH₃COO⁻ one structure has the double bond to the first O atom and the negative charge on the second; the other structure has them the other way round. In reality both C–O bonds are equally long and each O atom carries half the negative charge. Benzene (two structures) and the nitrate ion (three) are other examples.
- Curved arrows turn one resonance structure into the next, for example a lone pair moving in to form a double bond while the pair of an existing double bond moves out onto an atom as a lone pair.
- Resonance explains why some intermediates are extra stable and where a nucleophile can attack. When H⁺ adds to buta-1,3-diene, the positive charge of the carbocation is spread over two C atoms, so Br⁻ can bond to either of them: that gives 1,2-addition or 1,4-addition ([C01](../C01-chemical-processes/notes.md)).
- **Trap:** resonance structures are not different molecules in equilibrium, and the particle doesn't switch between them; so don't put an equilibrium arrow between them.
- **Trap:** a curved arrow always starts at electrons (a lone pair or a bond), never at an atom or at a positive charge.

## CCVX versus the Dutch syllabus

- **In both:** everything else above. Two items sit elsewhere in CCVX: pressure is listed as a physics concept in [A10](../../A-skills/A10-using-chemical-concepts/notes.md), while CvTE R3.1 names it (as assumed knowledge) in the collision model; and Lewis structures are in CCVX B1.12 ([B01](../../B-substances-and-materials/B01-particle-models/notes.md)), while CvTE R2.5 adds them to the mechanism outcome. *(CvTE R3.1, R2.5)*
- **Dutch syllabus only:** the symbol s for the reaction rate. *(CvTE R&A1.2)*
- **Numbering:** the Dutch subsphere R2 is called *Reactiekinetiek*, but R2.1–R2.3 are about polymers ([D03](../../D-development-of-chemical-knowledge/D03-chemical-synthesis/notes.md)). CCVX C4.1–C4.2 are CvTE R3.1–R3.2, C4.3 and C4.5 are R2.4 and R2.5, and C4.4 is R&A1.2.
