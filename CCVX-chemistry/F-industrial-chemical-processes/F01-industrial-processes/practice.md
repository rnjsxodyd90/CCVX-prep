# F1 — Industrial processes: practice

Eight original questions on the F1 learning outcomes, in CCVX style.

### chem-f01-q01 | points 3 | outcome F1.1 | difficulty easy
#### Question
Ammonia is produced in a continuous process: fresh N₂ and H₂ are compressed; the gas passes a reactor with an iron catalyst where part of it forms NH₃; the gas then enters a condenser, where NH₃ liquefies and is drawn off; the remaining N₂ and H₂ return to the compressor. Draw this as a block diagram in words (blocks and arrows) and mark the recirculation.
#### Answer
feed (N₂ + H₂) → compressor → reactor (Fe catalyst, N₂ + 3 H₂ ⇌ 2 NH₃) → condenser/separator → liquid NH₃ out; unreacted N₂ + H₂ → back to compressor (recirculation loop).
#### Solution
1. Blocks represent apparatus: compressor, reactor, condenser/separation plant — connected by substance flows (arrows).
2. The reaction runs incomplete per pass, so the unreacted N₂ and H₂ are not waste but are returned: that is the recirculation stream, the loop from the separator back to the compressor inlet.
3. The catalyst sits inside the reactor block and is not a substance flow: it is not consumed, so no stream carries it.

### chem-f01-q02 | points 3 | outcome F1.3 | difficulty easy
#### Question
Explain the difference between a continuous process and a batch process, and give one argument why a blast furnace is run continuously and a specialty perfume molecule is made in batches.
#### Answer
A continuous process is fed and emptied without stopping (steady state), a batch process is charged, run, emptied and restarted; a blast furnace is bulk production where constant quality and high volume make continuous running economical, while a perfume molecule is a fine chemical made in small, varying amounts for which one flexible vessel per batch is better.
#### Solution
1. Continuous: raw materials flow in and products flow out at constant rates for weeks at a time; a batch is a cycle: fill, react, empty, clean, repeat.
2. For bulk chemicals (iron, ammonia, sulfuric acid) continuous running gives constant product quality, low labour per tonne and efficient heat integration: the choice of the industry.
3. For fine chemicals (pharmaceuticals, flavourings), quantities are small, recipes change, and vessels must be clean between products: batch fits, even at higher cost per kg.

### chem-f01-q03 | points 3 | outcome F1.3 | difficulty medium
#### Question
Classify sulfuric acid, ammonia, paracetamol and methyl eugenol (a perfume component) as bulk chemicals or fine chemicals, and give for each class the two properties that distinguish it from the other.
#### Answer
Bulk chemicals: sulfuric acid and ammonia; fine chemicals: paracetamol and methyl eugenol. Bulk = high tonnage (world-scale plants, often continuous) at high purity in percent range and low price per kg; fine = low tonnage (kilograms to tonnes, usually batch) at very high purity and high added value per kg.
#### Solution
1. Bulk chemicals are the base materials of industry (sulfuric acid, ammonia, ethene, NaOH): produced in millions of tonnes in continuous plants; sold by the tonne with a few % purity requirements.
2. Fine chemicals are made in small amounts to tight specifications (drugs, dyes, flavours): batch production in multipurpose vessels, prices dominated by purity (e.g. impurity limits in ppm for medicines).
3. Consequence: process design and green-chemistry optimisation look different for the two classes — energy integration pays off in bulk; waste per kg (E-factor) is far higher in fine chemistry.

### chem-f01-q04 | points 4 | outcome F1.1–F1.2 | difficulty medium
#### Question
In the methanol synthesis CO + 2 H₂ ⇌ CH₃OH (exothermic), the reactor converts only about 15% of the gas per pass. (1) Explain why the process still reaches almost complete conversion overall. (2) Fresh synthesis gas always contains some argon and methane (inert). Explain what problem these inert gases create in a loop, and how a plant solves it.
#### Answer
1. The unreacted 85% is recirculated through the reactor again and again, so each pass consumes a further fraction; together with removal of the product after every pass (equilibrium is pushed right), overall conversion approaches 100%. 2. Inert gases are not consumed and not condensed: they accumulate in the loop and dilute the reactants (slower reaction, wasted compression work). The plant drains a small part of the loop continuously — a purge.
#### Solution
1. Per pass ~15% converts; the CH₃OH is condensed out (so the equilibrium position keeps being re-shifted forward when the mixture re-enters), and the rest passes again. Multiplied over many passes, almost all converts.
2. Argon and methane neither react nor liquefy, so each recycle adds to their concentration: the reactant partial pressures sink and with them the rate.
3. A purge stream bleeds off a small continuous fraction of the loop (with its load of inerts and, unfortunately, some reactants) to keep the loop composition in range — a trade-off in the design of the block diagram.

### chem-f01-q05 | points 3 | outcome F1.2 | difficulty medium
#### Question
In an exothermic industrial oxidation, the hot product gases leave the reactor at 450 °C while the feed must enter at 300 °C. A heat exchanger connects the two streams. (1) Describe how the exchanger saves energy. (2) What would the same energy management look like in a block diagram? (3) What is this energy management called in one phrase?
#### Answer
1. The hot product stream preheats the cold feed stream, so less fuel is needed to reach reaction temperature and less cooling water to cool the product: energy that would be lost is reused inside the process. 2. Two arrows cross over one "heat exchanger" block (the streams do not mix, only the heat passes). 3. Heat integration (energy management of the process).
#### Solution
1. Heat integration: the heat that the reaction gives off is not wasted but diverted into preheating the reactants — so the plant consumes less external energy (fuel) and emits less heat to the environment.
2. In the block diagram the heat exchanger appears as a block where a hot stream arrow passes downward heat to a cold stream arrow; both streams continue on their chemical way.
3. This is the everyday meaning of energy management on a process plant level: recover heat where it is produced and feed it back where it is needed (see C09 on energy quality).

### chem-f01-q06 | points 4 | outcome F1.1 | difficulty medium
#### Question
A description reads: "Syngas (CO + 2 H₂) and recycle gas are mixed, compressed to 80 bar and heated; they react over a copper catalyst to methanol vapour; the vapour is cooled so the methanol condenses and is stored; the gas overhead returns to the compressor; a small part is continuously purged." (1) Identify the reactors and the separation plant. (2) Name the recirculation stream and the purge. (3) Why is methanol the only condensed component?
#### Answer
1. Reactor: the converter with the copper catalyst; separation plant: the cooler/condenser (methanol out as liquid). 2. Recirculation: the unconverted H₂/CO gas (plus inert gases such as methane) left above the condensate, sent back to the compressor; the purge is the small continuous side stream of that same gas. 3. Methanol condenses at the cooling temperature because of its much higher boiling point (64.7 °C, and its hydrogen bridges) compared with the permanent gases.
#### Solution
1. Conversion happens in the catalyst converter; the separation is done in the cooler, where CH₃OH(l) is split off.
2. Loop: unconverted gas back to the compressor. The small side stream is the purge against inert build-up (see f01-q04).
3. This separation is a physical one (condensation): methanol (strong hydrogen bridges between its molecules) condenses at a much higher temperature than CO and H₂ — the property that decides the layout of this part of the block diagram.

### chem-f01-q07 | points 4 | outcome F1.1–F1.2 | difficulty hard
#### Question
A plant converts ethene with 20% conversion per pass; the unreacted ethene is fully recirculated and the product is removed after each pass. (1) After how many passes has more than 99% of the entering ethene been converted in total? (2) Explain why a plant nevertheless does not run 40 passes per kilogram of product.
#### Answer
1. Remaining fraction after n passes = 0.80ⁿ; 0.80²⁰ = 0.0115 (>1%) and 0.80²¹ = 0.0092 (<1%), so after 21 passes more than 99% is converted. 2. Every extra pass costs compressor work and flow capacity for a fraction of conversion that becomes vanishingly small (recirculation stream just keeps circulating); the optimum lies at fewer passes — the remainder leaves with the purge or the restream design.
#### Solution
1. If 20% converts per pass, 80% remains each pass: fraction left after n passes = (0.80)ⁿ. Solve 0.80ⁿ = 0.01: n = log(0.01)/log(0.80) = 20.6 → after 21 passes (less than 1% remaining).
2. Rate and equipment: pumping the loop is not free, and the "last percent" costs as many passes as the "first ninety"; designers optimise total cost, not maximum conversion — that is why overall yields combine partial conversions, recycles and purges.
3. Simple recursion thinking with the same log/equation skills as chem-a08-q04.

### chem-f01-q08 | points 3 | outcome F1.2–F1.3 | difficulty medium
#### Question
In the block diagram of a catalysed continuous process, the catalyst is never drawn as an input or output stream. (1) Explain why. (2) In which block does it "live", and what happens to it over the years? (3) On which class of chemicals (bulk/fine) does catalyst choice have the largest economic impact and why?
#### Answer
1. It is not consumed: it accelerates the reaction but is regenerated in every cycle, so it never leaves the plant with the product. 2. In the reactor (a bed or carrier inside it); it ages slowly by poisoning, sintering or coking and must be regenerated or replaced on a long cycle. 3. In bulk chemicals: there the product price is small, volumes enormous, and heat management per tonne dominates — a better catalyst raises selectivity and conversion, immediately changing the economics.
#### Solution
1. A catalyst participates per catalytic cycle without net consumption (it gives a path with lower activation energy, see C04/C05): it is not a substance stream in the diagram.
2. The reactor holds it; deactivation is gradual (sulfur adsorption, particle growth), so lists of maintenance cycles prescribe regeneration/replacement.
3. For a multi-million-tonne plant a half-percent selectivity improvement is worth millions per year — catalyst research in bulk chemistry is big business; fine chemicals care too, but their cost structure is dominated by purification and quality.
