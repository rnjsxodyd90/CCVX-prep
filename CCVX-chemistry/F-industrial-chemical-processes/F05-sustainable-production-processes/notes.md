# F5 — Sustainable Production Processes: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. This subdomain is school-exam only in the Netherlands, so the CvTE syllabus doesn't specify it: *(SLO F5)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/), which names the same concepts, and CvTE codes mark overlap with the central exam.

## Large scale and design

- Large scale (*grote schaal*): the chemical industry makes most products in large plants, because the cost per kg falls as the plant grows, and heat and by-products can be passed between processes on one site. The other side: large stocks of hazardous substances, large flows of waste and emissions, and a lot of transport ([F04](../F04-risks-and-safety/notes.md)). *(SLO F5)*
- Design (*ontwerpen*): designing a production process means choosing the route (reactions and raw materials), the conditions, the kind of process (batch or continuous), the separation steps, the recirculation and the reuse of heat, and drawing it all as a block diagram ([F01](../F01-industrial-processes/notes.md)). Start from a list of requirements (product, amount, purity, cost, safety, environment), compare alternatives, and improve the design after testing it. *(SLO F5; CvTE A6.3, T1.2)*
- **Trap:** a design is judged as a whole: a step that saves raw material can cost more energy or create a hazard elsewhere in the process.

## Sustainable cycles and the laws of conservation

- Sustainable cycles (*duurzame kringlopen*): materials go round instead of ending up as waste, through recirculation inside the process, recycling after use and cradle to cradle, and within element cycles such as the carbon cycle ([C03](../../C-chemical-processes-and-conservation-laws/C03-conservation-laws-and-cycles/notes.md)). *(SLO F5; CvTE T2.3)*
- Laws of conservation (*behoudswetten*): mass is conserved, so whatever goes in comes out as product or waste, and a mass balance gives the size of the waste flow; elements are conserved, which is what atom economy builds on; energy is conserved too, but after use it ends up as heat at a low temperature ([C09](../../C-chemical-processes-and-conservation-laws/C09-quality-of-energy/notes.md)). *(SLO F5; CvTE R&A3.1)*
- **Trap:** waste can't be made to disappear, only converted or moved: incineration turns it into CO₂, water and ash, and a filter collects a pollutant that still has to go somewhere.

## Green chemistry and the chemical industry

- Green chemistry (*groene chemie*) supplies the criteria for a sustainable design: the twelve principles and the aspects in [F02](../F02-green-chemistry/notes.md). *(SLO F5; CvTE T2.1)*
- The chemical industry (*chemische industrie*) ranges from bulk chemicals made continuously in huge amounts (fuels, fertilisers, plastics) to fine chemicals and medicines made in batches ([F01](../F01-industrial-processes/notes.md)). It supplies materials for sustainable technology, such as batteries, insulation and solar cells, but it's also a large user of energy and fossil raw materials ([G05](../../G-society-chemistry-and-technology/G05-business-processes/notes.md)). *(SLO F5)*

## E-factor, atom economy and the coefficient of pollution Q

- Atom economy = mass of the desired product ÷ mass of all reactants in the equation × 100 %; E-factor = mass of waste ÷ mass of product. The worked examples are in [F02](../F02-green-chemistry/notes.md). *(SLO F5; CvTE T2.2)*
- The E-factor counts every kilogram of waste the same, whether it's table salt or a heavy-metal compound. The coefficient of pollution Q (*vervuilingscoëfficiënt Q*) corrects for this. Most likely it's the "unfriendliness quotient" Q that Sheldon combined with the E-factor into the environmental quotient EQ = E × Q. Q is assigned per kind of waste: about 1 for a harmless salt such as NaCl, and much higher (hundreds or more) for toxic heavy-metal waste. *(SLO F5)*
- This reading of Q is an interpretation, because the CCVX and SLO lists give only the name; when an exam question defines Q, use its definition.
- Example: suppose process X has E = 5 with only NaCl as waste (Q = 1), and process Y has E = 2 with a chromium salt as waste (suppose Q = 100). Then EQ = 5 × 1 = 5 for X and 2 × 100 = 200 for Y: Y makes less waste but pollutes far more. Comparing such claims is also part of [E03](../../E-innovation-and-chemical-research/E03-sustainability/notes.md).
- **Trap:** a low E-factor alone doesn't make a process clean; what the waste consists of matters as well.

## Judgment

- Judging (*oordeelvorming*) a production process means comparing it with alternatives on clear criteria, with arguments from chemistry, and keeping those apart from social and personal views ([A09](../../A-skills/A09-evaluation-and-judgment/notes.md)). *(SLO F5; CvTE A9.1, A9.2, T6.2)*
- A compact scheme:
    1. Raw materials: renewable or fossil, scarce, hazardous?
    2. Atom economy, yield and E-factor (with Q): how much waste, and how harmful is it?
    3. Energy: the energy effect, temperature and pressure, reuse of heat, the source of the energy.
    4. Safety: hazardous substances, conditions, stocks, risk of a runaway ([F04](../F04-risks-and-safety/notes.md)).
    5. Cycles: recirculation, use of by-products, reuse of solvents and catalysts, a product that can be recycled or breaks down after use.
    6. Emissions and water: CO₂, SO₂ and NOₓ, wastewater, cooling water.
- **Trap:** a judgment needs a conclusion that weighs the criteria; a list of advantages and disadvantages without a choice isn't one.

### Worked comparison: two routes to epoxyethane

- Epoxyethane (ethylene oxide, *epoxyethaan*), C₂H₄O, is a raw material for antifreeze and plastics. It can be made in two ways:
    - Route A, the old chlorohydrin route: C₂H₄ + Cl₂ + Ca(OH)₂ → C₂H₄O + CaCl₂ + H₂O. Atom economy = 44.05 ÷ (28.05 + 70.90 + 74.10) × 100 % = 25.46 %. From the equation alone, with CaCl₂ and H₂O as waste, E = (173.05 − 44.05) ÷ 44.05 = 2.928, of which about 2.5 kg is CaCl₂ per kg of product.
    - Route B, direct oxidation over a silver catalyst: 2 C₂H₄ + O₂ → 2 C₂H₄O. Atom economy = 100 % and E = 0 from the equation. In practice some ethene burns, C₂H₄ + 3 O₂ → 2 CO₂ + 2 H₂O; even if a tenth of the ethene burns, E is only 0.3129 with CO₂ and H₂O as waste.
- Raw materials: both routes start from ethene, made from oil; route A also uses lime and chlorine, which is made by electrolysis and costs a lot of energy. Safety: route A handles toxic chlorine; route B has to keep the ethene–oxygen mixture out of the explosive range.
- Conclusion: route B is greener on atom economy, waste and safety, and it has replaced route A. Its weak points are the side reaction to CO₂ and the fossil raw material; ethene made from bioethanol (C₂H₅OH → C₂H₄ + H₂O) could replace the latter.
