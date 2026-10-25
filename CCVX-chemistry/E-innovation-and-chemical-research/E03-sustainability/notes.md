# E3 — Sustainability: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. This subdomain is school-exam only in the Netherlands, so the CvTE syllabus doesn't specify it: *(SLO E3)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/), which names the same concepts, and CvTE codes mark overlap with the central exam.

| Topic | Status |
|---|---|
| Sustainable cycles and aspects of green chemistry | drafted |
| Atom economy (atom efficiency) | drafted |
| E-factor | drafted |
| Coefficient of pollution | drafted |
| Yield | drafted |
| Fossil fuels and electrochemistry | drafted |

## Sustainable cycles and aspects of green chemistry

- The outcome asks you to evaluate and comment on claims about sustainability, such as "this process is green", with chemical arguments and calculations: check what the claim is based on and what it leaves out ([A09](../../A-skills/A09-evaluation-and-judgment/notes.md)). *(SLO E3)*
- A process or product is sustainable (*duurzaam*) if it meets today's needs without making it harder for later generations to meet theirs: it uses renewable or recycled raw materials, little energy, and produces little waste or harmful emissions.
- Sustainable cycles (*duurzame kringlopen*): in a substance cycle (*stofkringloop*) a material is used, collected and reused, as with glass and metals; in an element cycle (*elementkringloop*) an element moves from compound to compound, as carbon does. Cradle-to-cradle design makes products whose materials can be fully reused at the end of their life, as raw material or as harmless biological material. More in [C03](../../C-chemical-processes-and-conservation-laws/C03-conservation-laws-and-cycles/notes.md). *(CvTE T2.3; SLO E3)*
- Example: in the carbon cycle, plants take up CO₂ by photosynthesis, 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, and burning or digesting the biomass releases the same CO₂ again. Burning fossil fuel adds carbon that was taken out of the cycle millions of years ago. *(CvTE T5.2)*
- Aspects of green chemistry (*aspecten groene chemie*) to look for in a process: waste, by-products and side reactions, incomplete conversion, excess/deficiency, (renewable) raw materials, use of water, energy use, reaction conditions, the choice of a batch or continuous process, recycling, safety and environmental requirements. They follow from the twelve principles of green chemistry of Anastas and Warner; more in [F02](../../F-industrial-chemical-processes/F02-green-chemistry/notes.md) and [F05](../../F-industrial-chemical-processes/F05-sustainable-production-processes/notes.md). *(CvTE T2.1)*
- **Trap:** renewable isn't automatically sustainable: growing, transporting and processing a raw material also costs energy, water and land. Judge the whole life cycle (*levenscyclus*) of a product, from raw material to waste. *(CvTE T6.1)*

## Atom economy (atom efficiency)

- Atom economy (*atoomeconomie*, also called atom efficiency, *atoomefficiëntie*) is the percentage of the mass of the starting materials in the balanced equation that ends up in the desired product: atom economy = mass of desired product / total mass of starting materials × 100%, with the masses taken from the coefficients and molar masses. Because mass is conserved, dividing by the total mass of all products gives the same result. *(CvTE T2.2)*
- Example: ethanol (M = 46.07 g mol⁻¹) by fermentation of glucose (M = 180.16 g mol⁻¹), C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂, has an atom economy of 2 × 46.07 / 180.16 × 100% = 51.14%. Ethanol by hydration of ethene, C₂H₄ + H₂O → C₂H₅OH, has an atom economy of 100%, as every addition reaction with a single product has.
- Commenting on the two routes: hydration scores better on atom economy, but it uses ethene from oil and needs a high temperature, a high pressure and a catalyst. Fermentation uses a renewable raw material at a mild temperature, but loses almost half of the mass as CO₂ and needs energy to distil the ethanol from the water. One number never decides on its own.
- **Trap:** use the coefficients of the balanced equation: in fermentation the desired product counts twice (2 C₂H₅OH). Atom economy belongs to the equation and says nothing about how much product a real process delivers (yield, below).

## E-factor

- The E-factor (environmental factor) is the mass of waste per mass of product: E = mass of waste / mass of desired product. Waste is everything that leaves the process except the product: by-products, unconverted starting materials that aren't reused, solvents and other auxiliary substances. The ideal value is 0. Water is often left out; check the definition given in the question. *(CvTE T2.2)*
- Unlike atom economy, the E-factor uses the real masses of a process, so it includes the yield, the excess and the solvents.
- Example: ideal fermentation forms 2 CO₂ (2 × 44.01 = 88.02 g) for every 2 C₂H₅OH (92.14 g), so even at 100% yield E = 88.02 / 92.14 = 0.9553. With a perfect yield and no auxiliary substances, E = 1 / atom economy − 1, with the atom economy as a fraction (0.5114).
- Typical E-factors, after Sheldon: below about 0.1 for oil refining, up to about 5 for bulk chemicals, about 5 to 50 for fine chemicals and about 25 to more than 100 for medicines, which are made in many steps with a lot of solvent.
- **Trap:** a good process has a high atom economy but a low E-factor. Only compare E-factors that use the same rule for what counts as waste (with or without water).

## Coefficient of pollution

- The E-factor counts every kilogram of waste as equally bad, but 1 kg of sodium chloride does far less harm than 1 kg of a chromium salt. The coefficient of pollution (*vervuilingscoëfficiënt*) Q corrects for this; it is most likely what Sheldon calls the "unfriendliness quotient" (an interpretation: neither the CCVX syllabus nor the SLO text defines Q). Q is assigned, not measured: Sheldon's examples are 1 for a harmless salt such as NaCl and 100 to 1000 for heavy-metal salts, depending on how toxic they are. An exam gives the Q values. *(SLO E3)*
- The environmental quotient EQ = E × Q weighs the amount of waste by how harmful it is. With several kinds of waste, add up mass × Q for each kind and divide by the mass of product.
- Example (suppose): process A gives 1.0 kg of product with 2.0 kg of NaCl (Q = 1) and 0.10 kg of a chromium salt (Q = 100) as waste: E = 2.1, but EQ = (2.0 × 1 + 0.10 × 100) / 1.0 = 12. Process B gives the same product with 5.0 kg of NaCl only: E = 5.0 and EQ = 5.0. Process B has the larger E-factor but the smaller environmental load.
- **Trap:** Q isn't a physical constant, so a conclusion based on EQ is only as good as the Q values chosen. Say so when you comment on it.

## Yield

- Yield (*rendement*) is the actual amount of product as a percentage of the theoretical amount from the equation: yield = actual / theoretical × 100%. It stays below 100% because of incomplete conversion, side reactions and losses during separation. Calculations are in [C02](../../C-chemical-processes-and-conservation-laws/C02-chemical-calculations/notes.md). *(CvTE R&A1.1)*
- Yield and atom economy measure different things. Hydration of ethene has an atom economy of 100%, but only a small part of the ethene reacts on each pass through the reactor, so the unconverted ethene is separated and sent back.
- Example: 1.000·10³ kg of glucose can give at most 1.000·10³ × 2 × 46.07 / 180.16 = 511.4 kg of ethanol. Suppose the yield is 90.0%: then 0.900 × 511.4 = 4.60·10² kg of ethanol forms, and the rest, 1.000·10³ − 4.60·10² = 5.40·10² kg, is waste. So E = 5.40·10² / 4.60·10² = 1.17, against 0.9553 at 100% yield. In general E = 1 / (atom economy × yield) − 1, with both as fractions, if all the rest of the starting material ends up as waste.
- A better yield lowers the E-factor of the same reaction; a better atom economy needs a different reaction.
- *Rendement* is also used for energy: the useful energy as a percentage of the energy put in. A coal-fired power station turns only about 40% of the heat of combustion into electrical energy ([C09](../../C-chemical-processes-and-conservation-laws/C09-quality-of-energy/notes.md)).
- **Trap:** calculate the theoretical amount from the starting material in deficiency, not from the one in excess.

## Fossil fuels and electrochemistry

- Fossil fuels (*fossiele brandstoffen*), such as coal, oil and natural gas, formed from biomass over millions of years, so they aren't renewable on a human time scale. Burning them releases CO₂, which strengthens the greenhouse effect: CH₄ + 2 O₂ → CO₂ + 2 H₂O. Sulfur in the fuel burns to sulfur dioxide, S + O₂ → SO₂, and at the high temperature in an engine or furnace nitrogen from the air reacts too: N₂ + O₂ → 2 NO, then 2 NO + O₂ → 2 NO₂. More in [F03](../../F-industrial-chemical-processes/F03-energy-conversion/notes.md) and [G03](../../G-society-chemistry-and-technology/G03-energy-and-industry/notes.md). *(CvTE T5.2)*
- C/H ratio: the more hydrogen a fuel contains per carbon atom, the less CO₂ it emits per joule. With the heats of formation from Binas, CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l) has ΔE = −3.935·10⁵ + 2 × (−2.86·10⁵) − (−0.75·10⁵) = −8.91·10⁵ J per mol CO₂, while C(s) + O₂(g) → CO₂(g) gives −3.935·10⁵ J per mol CO₂. Treating coal as pure carbon, natural gas gives 2.26 times as much heat per mol CO₂. *(CvTE T5.2; CvTE R5.3)*
- Electrochemistry (*elektrochemie*) helps in two ways. Electrolysis with electricity from sun or wind makes hydrogen from water, 2 H₂O → 2 H₂ + O₂, with 2 H₂O + 2 e⁻ → H₂ + 2 OH⁻ at the negative electrode and 2 H₂O → O₂ + 4 H⁺ + 4 e⁻ at the positive electrode. Rechargeable batteries store electrical energy as chemical energy. *(CvTE T6.5)*
- A hydrogen fuel cell runs the reverse reaction, 2 H₂ + O₂ → 2 H₂O, and turns chemical energy directly into electrical energy. The reductor H₂ reacts at the negative electrode, H₂ → 2 H⁺ + 2 e⁻, and the oxidator O₂ at the positive electrode, O₂ + 4 H⁺ + 4 e⁻ → 2 H₂O. From the Binas table of standard electrode potentials, the source voltage (*bronspanning*) is 1.23 − 0.00 = 1.23 V. *(CvTE R1.14)*
- Judging a claim: hydrogen is only as sustainable as the energy used to make it. Most hydrogen is still made from natural gas, CH₄ + H₂O → CO + 3 H₂ followed by CO + H₂O → CO₂ + H₂, which releases CO₂. Storing electricity as hydrogen also loses energy twice: suppose the electrolysis has an efficiency of 70% and the fuel cell 50%, then only 0.70 × 0.50 = 35% of the electrical energy comes back. Recovering the metals from used batteries closes a substance cycle.
- **Trap:** the signs swap between the two kinds of cell. In a fuel cell or battery the reductor reacts at the negative electrode; in an electrolysis the reduction takes place at the negative electrode, where the power source pushes electrons in.

## CCVX versus the Dutch syllabus

- **In both:** the aspects of green chemistry, atom economy, the E-factor and cycles are central-exam material in the Netherlands (CvTE T2.1–T2.3), and so are yield (R&A1.1), fuels (T5.2), electrolysis of water and batteries (T6.5).
- **CCVX only:** the coefficient of pollution Q isn't in the CvTE syllabus; in the Netherlands only the SLO school-exam texts name it (E3 and F5). CCVX F2.2 says the green-chemistry formulas are given, while the CvTE 2027 syllabus removed "given formulas" from T2.2, so the Dutch central exam may not give them.
- **Dutch syllabus only:** the SLO list speaks of small-scale sustainable cycles (*kleine schaal duurzame kringlopen*); CCVX says only sustainable cycles.
