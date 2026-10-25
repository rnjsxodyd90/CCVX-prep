# F2 — Green Chemistry: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

## F2.1 Aspects of green chemistry

- Green chemistry (*groene chemie*) designs products and processes so that they need fewer, safer and renewable raw materials and less energy, and make less waste. Exam questions describe a process and the changes made to it; you explain which aspect each change improves, and why. *(CvTE T2.1)*

### The twelve principles

Paul Anastas and John Warner (1998) summed up green chemistry in twelve principles. In short:

1. Prevent waste rather than clean it up afterwards.
2. Atom economy: let as many atoms of the reactants as possible end up in the product.
3. Use and make substances that are as little toxic as possible.
4. Design products that do their job and are as safe as possible.
5. Avoid solvents and other auxiliary substances, or use harmless ones such as water.
6. Save energy: work at room temperature and normal pressure where possible.
7. Use renewable raw materials.
8. Avoid extra steps, such as temporarily protecting a functional group, because each one needs reagents and makes waste.
9. Use catalysts, as selective as possible, rather than reagents that get used up.
10. Design products that break down into harmless substances after use.
11. Monitor the process while it runs, so that harmful substances are caught before they form.
12. Choose substances and conditions that keep the risk of explosions, fires and releases small.

### The aspects in the syllabus

- Reaction conditions (*reactieomstandigheden*): temperature, pressure, solvent and catalyst. Milder conditions save energy and are safer. Ethanol from fermentation forms at a mild temperature; ethanol from ethene and steam needs a high temperature and pressure. *(CvTE T2.1)*
- Safety (*veiligheid*): avoid toxic, flammable or explosive substances and extreme conditions, and keep stocks of hazardous substances small. The old route to epoxyethane used toxic chlorine; the modern route uses oxygen ([F05](../F05-sustainable-production-processes/notes.md)). *(CvTE T2.1)*
- Qualitative consideration of energy (*kwalitatieve energiebeschouwing*): where is heat produced or needed, and can it be reused? Distilling ethanol out of a dilute fermentation mixture costs a lot of heat, while an exothermic step can supply heat to another step through a heat exchanger ([F01](../F01-industrial-processes/notes.md)). *(CvTE T2.1)*
- Side reactions (*nevenreacties*): reactions alongside the main one that use up reactant and make unwanted products. When methane is chlorinated, CH₄ + Cl₂ → CH₃Cl + HCl is followed by CH₃Cl + Cl₂ → CH₂Cl₂ + HCl and so on; an excess of methane keeps this down, and a selective catalyst or milder conditions can help elsewhere. *(CvTE T2.1)*
- Choosing between batch process and continuous process (*keuze voor batchproces/continuproces*): for a large-volume product a continuous process saves the energy of heating up and cooling down every batch, and the cleaning between batches; for small amounts a batch process is the practical choice ([F01](../F01-industrial-processes/notes.md)). *(CvTE T2.1)*
- By-products (*bijproducten*): products that form in the main reaction itself, in a fixed ratio to the product. They count as waste unless they are used or sold: the glycerol from biodiesel production goes into cosmetics and food. *(CvTE T2.1)*
- Incomplete conversion (*onvolledige omzetting*): part of the reactants doesn't react, because of an equilibrium or a slow reaction. Separating them off and recirculating them, as in the ammonia process ([F01](../F01-industrial-processes/notes.md)), prevents waste. *(CvTE T2.1)*
- Excess and deficiency (*overmaat, ondermaat*): an excess of a cheap reactant converts more of an expensive one and pushes an equilibrium to the right, but the excess has to be recovered or it becomes waste. In biodiesel production the excess methanol is distilled off and reused. *(CvTE T2.1)*
- Renewable resources (*hernieuwbare grondstoffen*): raw materials that grow back within a human lifetime, such as sugar, starch, vegetable oil and wood, instead of petroleum, natural gas or coal. Bioethanol from sugar cane replaces ethanol made from ethene, which comes from oil. *(CvTE T2.1)*
- Use of water (*gebruik van water*): water is a cheap and harmless solvent, but wastewater must be cleaned before it's discharged, cooling water returns warmer ([F03](../F03-energy-conversion/notes.md)), and in dry regions water itself is scarce. *(CvTE T2.1)*
- Recycling (*recycling*): reusing materials after use, such as PET bottles and aluminium cans (F2.3). Inside a process, solvents and catalysts are reused too. *(CvTE T2.1)*
- Waste (*afval*): everything except the product that leaves the process and isn't used. Preventing it is better than treating it; the E-factor (F2.2) measures it. *(CvTE T2.1)*
- Environmental requirements (*milieueisen*): legal limits (*grenswaarden*) on emissions to air, water and soil, for instance for SO₂ and NOₓ, force cleaner processes or the cleaning of flue gas and wastewater ([G04](../../G-society-chemistry-and-technology/G04-environmental-requirements/notes.md)). *(CvTE T2.1, T4.1)*
- **Trap:** a by-product (*bijproduct*) forms in the main reaction, in a fixed ratio; the products of side reactions (*nevenreacties*) form in other reactions, in amounts that depend on the conditions. Name the right one.
- **Trap:** "greener" is never one number. A renewable raw material can come with a low atom economy (fermentation, F2.2) or a high energy use, so weigh the aspects against each other ([E03](../../E-innovation-and-chemical-research/E03-sustainability/notes.md), [F05](../F05-sustainable-production-processes/notes.md)).

## F2.2 Green-chemistry calculations

### Atom economy

- Atom economy (*atoomeconomie*, also called atom efficiency, *atoomefficiëntie*) = mass of the desired product ÷ total mass of all reactants × 100 %, both taken from the reaction equation (coefficient × molar mass). Because mass is conserved, the total mass of the reactants equals the total mass of all products. *(CvTE T2.2)*
- Fermentation, C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂: atom economy for ethanol = 2 × 46.07 ÷ 180.16 × 100 % = 51.14 %. Adding water to ethene, C₂H₄ + H₂O → C₂H₅OH, has an atom economy of 100 %: an addition reaction with a single product wastes no atoms.
- Biodiesel from triolein (F2.3): 3 × 296.5 ÷ (885.4 + 3 × 32.04) × 100 % = 90.62 %; the rest is glycerol.
- Substitution and condensation reactions always give a second product. For the esterification CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O the atom economy for ethyl ethanoate (*ethylethanoaat*) is 88.10 ÷ (60.05 + 46.07) × 100 % = 83.02 %.
- **Trap:** use the coefficients, and include every reactant in the equation, also one that ends up entirely in the waste. A catalyst isn't a reactant, so it doesn't count.

### E-factor

- E-factor (*E-factor*) = mass of waste ÷ mass of product, in kg waste per kg product; the ideal is 0. Waste is everything that leaves the process except the product: by-products that aren't used, starting material that isn't recirculated, lost solvent, spent catalyst. Use the definition the question gives, for instance on whether water counts. *(CvTE T2.2)*
- From the equation alone (100 % yield, only the by-products as waste): for fermentation with CO₂ as waste, E = 2 × 44.01 ÷ (2 × 46.07) = 0.9553.
- From a mass balance: suppose a batch uses 1.20 t of reactants and 3.00 t of solvent and gives 0.800 t of product, while 2.75 t of the solvent is recovered. By conservation of mass the waste is 1.20 + 3.00 − 0.800 − 2.75 = 0.65 t, so E = 0.65 ÷ 0.800 = 0.81. Without solvent recovery the waste would be 3.40 t and E = 4.25.
- Typical values, from Sheldon, who introduced the E-factor: less than about 0.1 for oil refining, from below 1 to about 5 for bulk chemicals, about 5 to more than 50 for fine chemicals, and about 25 to more than 100 for medicines. Small amounts made in many steps give the most waste per kg.
- **Trap:** a high atom economy doesn't guarantee a low E-factor: solvents, excess reagents and a low yield add waste that the equation doesn't show.

### Energy effect

- The energy effect (*energie-effect*) is the heat of reaction ΔE (*reactiewarmte*): the heats of formation (*vormingswarmtes*) of the products minus those of the reactants. The method is in [C06](../../C-chemical-processes-and-conservation-laws/C06-energy-calculations/notes.md). *(CvTE R5.1, R5.3)*
- Hydration of ethene at 298 K, C₂H₄(g) + H₂O(l) → C₂H₅OH(l), with heats of formation +0.52, −2.86 and −2.78 (·10⁵ J mol⁻¹, Binas): ΔE = −2.78·10⁵ − (+0.52·10⁵ − 2.86·10⁵) = −0.44·10⁵ J per mol ethanol. It's exothermic, so the reactor must be cooled, and the heat can be used elsewhere.
- Green chemistry also looks at energy qualitatively: an exothermic step can supply heat, an endothermic step needs fuel or electricity, and high temperatures and pressures cost energy even when ΔE is small.

### Yield

- Yield (*rendement*) = actual amount of product ÷ theoretical amount × 100 %, where the theoretical amount follows from the equation and the reactant in deficiency ([C02](../../C-chemical-processes-and-conservation-laws/C02-chemical-calculations/notes.md)). *(CvTE R&A1.1)*
- Suppose 1.000·10³ kg glucose gives 4.70·10² kg ethanol by fermentation. The equation allows 1.000·10³ kg × (2 × 46.07) ÷ 180.16 = 511.4 kg, so the yield is 470 ÷ 511.4 × 100 % = 91.9 %.
- Counting only the glucose as input, the E-factor is then (1000 − 470) ÷ 470 = 1.13, against 0.9553 for a perfect reaction: a lower yield means more waste.
- **Trap:** yield and atom economy measure different things. Yield compares the product with what the equation allows; atom economy shows which fraction of the reactants' mass the equation itself puts into the product. Fermentation with a 100 % yield still has an atom economy of 51.14 %.

## F2.3 Chemical concepts in processes

- The CvTE syllabus doesn't list these processes; exam questions describe them and you apply the concepts. The closest specifications are given per point.

### Biomass fermentation

- Fermentation (*vergisting*): yeast converts sugars into ethanol and carbon dioxide without oxygen (anaerobically): C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. Its enzymes work at a mild temperature, and the yeast stops when the ethanol concentration gets too high, so the ethanol is distilled from the mixture (it boils at about 78 °C). *(CvTE T3.1, R&A2.2)*
- Starch from maize or wheat, or cellulose from straw or wood, is first hydrolysed into glucose. Proposals: use cellulose from waste instead of food crops, use the CO₂ (for instance in greenhouses), sell the residue as animal feed. *(CvTE T3.1)*
- Other micro-organisms ferment manure and organic waste into biogas; see [F03](../F03-energy-conversion/notes.md).
- **Trap:** fermentation isn't combustion: no oxygen takes part, and the CO₂ comes from the sugar itself. Two of the six carbon atoms end up in CO₂, which is why the atom economy is only 51.14 %.

### Biodiesel production: transesterification

- Vegetable oils are triglycerides: esters of glycerol (propane-1,2,3-triol) and three fatty acids ([B04](../../B-substances-and-materials/B04-bonds-structures-and-properties/notes.md)). They are too viscous for a diesel engine, so they are converted into the methyl esters of their fatty acids, which are biodiesel. *(CvTE L1.3)*
- Transesterification (*omestering*) swaps the alcohol part of an ester for another alcohol. With methanol, and a base such as NaOH or KOH as catalyst: triglyceride + 3 methanol → glycerol + 3 fatty-acid methyl esters. For triolein, the triglyceride of oleic acid (much of olive and rapeseed oil): (C₁₇H₃₃COO)₃C₃H₅ + 3 CH₃OH → C₃H₅(OH)₃ + 3 C₁₇H₃₃COOCH₃, in molecular formulas C₅₇H₁₀₄O₆ + 3 CH₃OH → C₃H₈O₃ + 3 C₁₉H₃₆O₂. *(CvTE R1.3)*
- The reaction is an equilibrium, so methanol is added in excess; the excess is distilled off and reused. Glycerol doesn't mix with the esters and is denser, so it settles (*bezinken*) as a lower layer and is sold as a by-product. *(CvTE R4.1, R&A2.2)*
- Side reaction: free fatty acids in the oil react with the base to form soap, C₁₇H₃₃COOH + OH⁻ → C₁₇H₃₃COO⁻ + H₂O, and water hydrolyses esters into more free fatty acids. This uses up catalyst and makes the layers hard to separate, so the oil must be dry and low in free fatty acids.
- Proposals: use waste frying oil, recover the methanol, use or sell the glycerol, use a solid catalyst that stays in the reactor and doesn't have to be washed out of the product.
- **Trap:** transesterification isn't hydrolysis: methanol, not water, splits the ester, so methyl esters form instead of free fatty acids, and there is no water in the equation.

### Oil refinery

- Crude oil (*aardolie*) is a mixture of mainly alkanes, with cycloalkanes and aromatic compounds, of very different chain lengths. A refinery (*raffinaderij*) separates it and converts the parts into fuels and raw materials for the chemical industry.
- Fractional distillation (*gefractioneerde destillatie*): the oil is heated until most of it evaporates and enters a column that is hottest at the bottom and cooler towards the top. Each fraction (*fractie*) condenses at the height where the temperature falls below its boiling range (*kooktraject*): gases (C1 to C4) at the top, then petrol, kerosene and diesel, and a residue at the bottom. A fraction is still a mixture, so it has a boiling range rather than a boiling point. *(CvTE M2.2, R&A2.2)*
- Larger alkane molecules boil higher, because their larger mass and contact area give stronger Van der Waals bonds (molecular bonds, *vanderwaalsbinding, molecuulbinding*) between them ([B03](../../B-substances-and-materials/B03-bonds-and-properties/notes.md)). *(CvTE M3.1, M3.3)*
- Cracking (*kraken*): long alkanes are broken into shorter molecules, because there is more demand for petrol and for small alkenes (raw materials for plastics) than distillation supplies. It's a decomposition by heat (thermolysis), and a catalyst lets it run at a lower temperature. Example: C₁₀H₂₂ → C₈H₁₈ + C₂H₄. *(CvTE R1.3)*
- An alkane CₙH₂ₙ₊₂ doesn't contain enough hydrogen to split into two alkanes, so at least one product of cracking is an alkene. Bromine water shows it, because it loses its colour by addition: C₂H₄ + Br₂ → C₂H₄Br₂.
- Reforming (catalytic reforming): straight-chain alkanes from a petrol fraction are converted, over a platinum catalyst, into branched alkanes, cycloalkanes and aromatic compounds. These have a higher octane number (*octaangetal*): they resist knocking, igniting too early in a petrol engine. Forming rings releases hydrogen, for example C₆H₁₄ → C₆H₆ + 4 H₂ (hexane to benzene). The refinery uses this H₂, for instance to remove sulfur compounds from fuels.
- **Trap:** catalytic reforming isn't steam reforming. Steam reforming of methane, CH₄ + H₂O → CO + 3 H₂, is how hydrogen is made, for instance for ammonia ([F01](../F01-industrial-processes/notes.md)); catalytic reforming improves petrol and gives H₂ only as a by-product.
- **Trap:** fractional distillation only separates and breaks no atomic bonds (covalent bonds); cracking and reforming are reactions that change the molecules.

### Recycling

- Plastics: thermoplastics (*thermoplasten*) are chains without crosslinks, so they soften when heated and can be melted and reshaped. Mechanical recycling sorts, washes, shreds and melts them into new granules; each round shortens chains and adds impurities, so the quality drops. Thermosetting plastics (thermosets, *thermoharders*) are networks held together by crosslinks; they decompose instead of melting, so they can't be remelted ([B04](../../B-substances-and-materials/B04-bonds-structures-and-properties/notes.md)). *(CvTE M4.1, T2.3)*
- Chemical recycling breaks a polymer down into its monomers or other raw materials. A condensation polymer can be split at its ester or amide bonds: PET can be hydrolysed into its monomers, per repeating unit C₁₀H₈O₄ + 2 H₂O → HOOC–C₆H₄–COOH + HO–CH₂–CH₂–OH, and after purification these make PET as good as new. An addition polymer such as polyethene has only C–C bonds in its chain; heating it without air (pyrolysis) cracks it into a mixture of hydrocarbons. Polymers are in [D03](../../D-development-of-chemical-knowledge/D03-chemical-synthesis/notes.md). *(CvTE R1.3, T2.3)*
- Metals: scrap is melted and cast again. The metal atoms don't change, so in principle no quality is lost, as long as different metals and alloys are kept apart (iron and steel are sorted out with magnets). *(CvTE T2.3)*
- Recycling saves the most energy for metals made by electrolysis. New aluminium is made by electrolysis of molten aluminium oxide (Al³⁺ + 3 e⁻ → Al at the negative electrode), which uses a lot of electricity; remelting scrap aluminium takes only a small fraction of that energy, about 5 %. Element cycles and cradle to cradle are in [C03](../../C-chemical-processes-and-conservation-laws/C03-conservation-laws-and-cycles/notes.md), and judging sustainability claims in [E03](../../E-innovation-and-chemical-research/E03-sustainability/notes.md).
- **Trap:** only thermoplastics can be recycled mechanically. A thermoset can't be remelted: at best it's ground up as a filler or burned to recover its energy.

## CCVX versus the Dutch syllabus

- **In both:** the aspects of green chemistry *(CvTE T2.1)*, and atom economy and the E-factor *(CvTE T2.2)*. The Dutch T2.2 no longer says "given formulas", so learn both formulas.
- **Moved in the Dutch syllabus:** the energy effect is now R5.1 and yield R&A1.1, so both are still tested, just not under T2.
- **CCVX only:** F2.3 as a list of processes: biomass fermentation, biodiesel, the oil refinery with fractional distillation, cracking and reforming, and the recycling of plastics and metals. The closest Dutch specifications are T3.1 (energy from biomass, with the technique described in the question), R1.3 (transesterification, *omestering*) and T2.3 (recycling).
- **Dutch syllabus only, under T2:** relating processes to cradle to cradle and to element and substance cycles (T2.3); CCVX has these in [C03](../../C-chemical-processes-and-conservation-laws/C03-conservation-laws-and-cycles/notes.md).
