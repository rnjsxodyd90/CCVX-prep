# C9 — Quality of energy: practice

Eight original questions on the C9 learning outcomes, in CCVX style. Note: Gibbs energy and enthalpy are CCVX-only vocabulary; the notes point to the definitions.

### chem-c09-q01 | points 2 | outcome C9 | difficulty easy
#### Question
Name the energy type before and after in each transition: (1) burning natural gas to boil water; (2) a torch battery lighting an LED; (3) charging a phone battery.
#### Answer
1. Chemical energy → heat (thermal energy). 2. Chemical energy → electrical energy → light. 3. Electrical energy → chemical energy.
#### Solution
1. Combustion converts the fuel's chemical energy to heat (an exothermic energy transition).
2. A battery converts chemical energy to electrical energy; the LED converts that (mostly) to light.
3. Charging forces the battery's redox reaction backwards, storing electrical energy as chemical energy again.
4. You read every such chain from "source type" to "delivered type": the first law counts every joule on the way.

### chem-c09-q02 | points 3 | outcome C9 | difficulty easy
#### Question
Classify as exothermic or endothermic and state the sign of the heat of reaction in each case: (1) combustion of methanol, (2) melting of ice, (3) the neutralisation H₃O⁺ + OH⁻ → 2 H₂O.
#### Answer
1. Exothermic, ΔH < 0; 2. endothermic, ΔH > 0; 3. exothermic, ΔH < 0
#### Solution
1. Burning releases heat: exothermic; the products lie lower in energy than the reactants: heat of reaction negative.
2. Melting needs heat from the surroundings: endothermic; the warm surroundings cool down a little, ΔH positive.
3. Mixing acid and base warms the beaker: exothermic, ΔH negative.
4. Sign convention (enthalpy from the system's view): energy out = negative, energy in = positive — read the energy diagram that way.

### chem-c09-q03 | points 3 | outcome C9 | difficulty medium
#### Question
Sketch (in words) the energy diagrams of the combustion of hydrogen (exothermic) and of the thermolysis of limestone (endothermic), marking transition state, activation energy and heat of reaction.
#### Answer
For H₂ combustion: reactants at the higher level, transition state above them, products below the reactants: Ea = climb to the transition state; ΔH = fall to the products (negative). For limestone: reactants lower, transition state above, products above the reactants: ΔH positive.
#### Solution
1. Vertical: energy; horizontal: reaction progress.
2. Exothermic: products end lower, the net change is negative: H₂ + ½ O₂ → H₂O, ΔE < 0.
3. Endothermic: products end higher than the reactants: CaCO₃ → CaO + CO₂, ΔE > 0 (see chem-c06-q06).
4. Every reaction has a hump (the activation energy, see C10) regardless of whether the diagram ends higher or lower.

### chem-c09-q04 | points 4 | outcome C9 | difficulty medium
#### Question
"A joule of 600 °C steam heat is worth more than a joule of warm water at 40 °C, although the first law calls them equal." Explain this statement about quality of energy, and give one practical consequence for a chemical plant that owns both.
#### Answer
High-temperature heat can do useful work (drive machines, run other reactions, generate electricity) — it is of high quality; at 40 °C the heat is near environmental temperature and can at best warm rooms, so it is "low-quality": energy is conserved but its usefulness degrades. Consequently, the plant uses the hot steam to preheat reactant streams and produce work, and finds that the 40 °C water can only be used for washing or be thrown away into cooling water.
#### Solution
1. Quality of energy = how much of the energy can still be converted into work; temperature sets it: hotter source, more valuable joule.
2. At every conversion a broad share degrades to heat at ambient temperature: the first law is obeyed while use value erodes (that is the second law in plain words; the quality scale is captured formally by entropy, and the practical max of extractable work by Gibbs energy).
3. Practical: heat management runs from high to low temperature (cascade): hot steam first for processes and preheating, lukewarm water only for domestic heat — why CHP counts heat and power separately.

### chem-c09-q05 | points 3 | outcome C9 | difficulty medium
#### Question
Compare fossil fuel and biofuel as chemical energy stores, giving one similarity and one difference on the quality-of-energy axis and one difference on the carbon-cycle axis.
#### Answer
Similarity: both store energy chemically at high quality per kg (fuels are concentrated stores, easy to transport). Difference (quality/storage): fossil fuels are stored sunlight from millions of years and accumulate underground (ready, dense), while biofuels need fresh land and processing each cycle. Difference (carbon): fossil fuels add old carbon to the atmosphere one-way; biofuels run in a fast cycle.
#### Solution
1. Both are chemical energy: high-quality, because combustion converts it nearly fully to high-temperature heat (and so to work).
2. Fossil fuels are mined (one-way stock; dense, cheap); biomass needs growing area per year (flow; costly to gather).
3. The CO₂ timing differs (fast cycle vs adding fossil stock; chem-c03-q05): that difference does not show in the energy quality of the joule, but in the environment column of the balance sheet.

### chem-c09-q06 | points 4 | outcome C9 | difficulty hard
#### Question
Define enthalpy (H) and Gibbs energy (G = H − T·S) in words, and explain how chemists use them to state whether a reaction releases heat and whether it can run by itself.
#### Answer
Enthalpy H is the heat content of a system at constant pressure; ΔH is the heat a reaction exchanges with the surroundings at constant pressure (negative: released). Gibbs energy G subtracts the part bound in disorder (T·S, temperature × entropy): ΔG is the maximum work a process can hand out at constant T and p, and a reaction can run by itself only when ΔG < 0.
#### Solution
1. ΔH: "heat of reaction" in a bench experiment at atmospheric pressure — easy to measure with a calorimeter.
2. Entropy S measures disorder; at higher T, disorder weighs heavier (T·S term): exothermic reactions with little entropy loss (ΔH < 0, ΔS ≈ 0 or positive) have ΔG < 0 and run.
3. ΔG decides the direction under given conditions: negative — runs by itself; zero — equilibrium; positive — would need energy input (a redox cell puts it out as voltage: that is the C01 cell voltage connection).
4. CCVX lists these terms as concepts: define and use them verbally; the detailed ΔG computation is not demanded.

### chem-c09-q07 | points 3 | outcome C9 | difficulty medium
#### Question
A school boiler burns 1 m³ of natural gas (36 MJ chemical energy) to heat a building. The radiators deliver 32 MJ of warmth. (1) Where did the other 4 MJ go? Use the first law. (2) Explain why the answer never is "4 MJ was lost as energy".
#### Answer
1. The 4 MJ went as heat into the flue gases and the boiler walls. 2. The first law (conservation of energy) says energy cannot be lost: it only changes places/forms; the 4 MJ exists, equally real — it is only not useful for heating.
#### Solution
1. Balance: chemical 36 MJ = radiator heat 32 MJ + flue heat and losses 4 MJ.
2. "Lost" in engineering language means irrecoverable at that temperature (degraded quality, C09's core), not vanished.
3. Efficiency η = useful output / input = 32/36 = 89%: the answer to "was energy destroyed?" is always no; the answer to "was usefulness destroyed?" can be yes.

### chem-c09-q08 | points 4 | outcome C9 | difficulty hard
#### Question
Two proposals are before a plant manager: (A) dump the 80 °C waste heat of a reactor into the river; (B) feed it to a neighbouring dairy's cleaning-water plant. (1) Analyse both with the quality-of-energy concept. (2) Give the physics/economics counter-argument of B. (3) Conclude with a judgment in two sentences.
#### Answer
1. A: converts useful-temperature heat into environment-temperature heat — total irreversibility, pure degradation of quality; the joules become worthless and add thermal load to the river (G02). B: keeps the joules working at a matching temperature need (80 °C suits cleaning water): the quality is preserved as service. 2. B costs a pipeline, a heat exchanger and a contract; the dairy's demand must roughly match the supply in time and temperature, or the profit is theoretical. 3. Judgment: cascading B beats dumping A almost always (one joule doing two jobs is the cheapest emission cut), so the dairy should pay for part of the pipeline; if the demands mismatch badly, A with a cooling tower is the residual option.
#### Solution
1. Quality reasoning: a kWh at 80 °C is still plenty useful for warming things; throwing it into a river is using it for nothing.
2. Cascading = use energy stepwise: reactor heat → dairy cleaning → (remainder) low-grade heating: maximum service per joule (F3/G3 see the same idea at plant scale).
3. Economy: pipelines, pumping and seasonal mismatch are B's price; society-priced CO₂ helps B.
