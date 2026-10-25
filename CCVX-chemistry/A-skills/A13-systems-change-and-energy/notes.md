# A13 — Reasoning about Systems, Change and Energy: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

## A13 Systems, change and energy

- A system (*systeem*) is the part of the world you choose to study, such as a reaction mixture, a battery, a reactor, a factory or a cell in the body. Its boundary (*systeemgrens*) separates it from the surroundings (*omgeving*). An open system exchanges both matter and energy with its surroundings, a closed system only energy. Describing a chemical process in terms of systems (*systeemdenken*) means using what you know about substances, particles, reactivity and energy to say what happens inside the system and what crosses its boundary. *(CvTE A13.1)*
- The CvTE specification asks you to link concepts from the spheres Matter, Reactions and Calculation & analysis to questions set in contexts from Chemistry of life and Technology & sustainability, using the four aspects below.

### System, boundaries, parts and interactions

- Name the system and its boundary, its parts, and how the parts affect each other (*onderdelen en onderlinge interacties*). In a factory the parts are the process steps (reactor, separation, recycling); in a battery they are the electrodes, the electrolyte and the external circuit. *(CvTE A13.1)*
- Whether the system works depends on the interactions: a battery delivers current only if the reductor can pass electrons to the oxidator through the external circuit.

### Hierarchy, scale and order of magnitude

- A system consists of subsystems and is part of a larger system, a hierarchy (*hiërarchie*): a molecule in a reactor in a factory in an industrial area. Recognise the level that matters for the question, and the scale and order of magnitude (*schaal, ordegrootte*) of each part: grams in the lab, tonnes per day in a plant. *(CvTE A13.1)*
- Example: the amount of reductor sets the capacity of a battery. 0.654 g of zinc is 0.654 / 65.38 = 0.0100 mol, which can give 0.0200 mol of electrons, a charge of 0.0200 × 9.65·10⁴ = 1.93·10³ C (Faraday constant 9.65·10⁴ C mol⁻¹).

### Change over time and space

- Describe how the system, its parts and the interactions change over time and from place to place (*verandering over tijd en ruimte*): concentrations change as a reaction proceeds, a battery runs down, a gas escapes, ions move from one electrode to the other, a pollutant spreads from a factory. *(CvTE A13.1)*

### Input, output and circularity of energy and matter flows

- Name what flows into and out of the system (substances, heat, electrical energy) and what is recycled within it (*invoer, uitstroom en circulariteit van energie- en materiestromen*), and use these flows in your reasoning. Mass and energy are conserved, so the inputs must add up to the outputs plus whatever builds up inside ([C03](../../C-chemical-processes-and-conservation-laws/C03-conservation-laws-and-cycles/notes.md)). *(CvTE A13.1)*
- **Trap:** a substance that leaves the system, such as a gas that bubbles away, is no longer available for the reverse reaction.

## Worked example: charging a battery

- This example follows the first one in Bijlage 4 of the CvTE syllabus, which links the electrochemical cell to the use of electrical energy. Take a simple battery that differs from a standard cell: a zinc strip and a copper strip in one beaker of hydrochloric acid, joined by a wire with a small lamp. *(CvTE A13.1)*
- System and parts: two electrodes, the acid as electrolyte, and the external circuit. The reductor is zinc, the oxidator H₃O⁺. Negative electrode (zinc): Zn(s) → Zn²⁺(aq) + 2 e⁻. Positive electrode (copper): 2 H₃O⁺(aq) + 2 e⁻ → H₂(g) + 2 H₂O(l). Zinc also reacts with the acid directly at its own surface, and that part of the zinc gives no current.
- Hierarchy: H₃O⁺ is a stronger oxidator than Zn²⁺ (Binas: standard electrode potentials, 0.00 V against −0.76 V), so electrons flow from the zinc through the wire to the copper, and the cell voltage under standard conditions is 0.00 − (−0.76) = 0.76 V. The amounts set the capacity: with the acid in excess, 0.654 g of zinc gives 0.0200 mol of electrons.
- Change over time and space: while the battery discharges, zinc dissolves and hydrogen bubbles off at the copper, 0.0100 mol × 24.5 L mol⁻¹ = 0.245 L at 298 K and p₀ for 0.654 g of zinc. The hydrogen leaves the system, so charging can't reverse the reaction: this battery is not rechargeable. In a lead-acid battery, by contrast, the product of discharging (lead(II) sulfate) stays on the electrodes, so it is still there when the battery is charged.
- Flows and a closed circuit: electrons flow through the wire, and inside the battery ions move through the acid, which closes the circuit. In a standard cell with two separate half-cells a salt bridge or membrane does that job; without an ion path there is no current. Discharging converts chemical energy into electrical energy (and some heat); charging a rechargeable battery puts electrical energy back in *(CvTE T6.5)*. See [C01](../../C-chemical-processes-and-conservation-laws/C01-chemical-processes/notes.md) and [F03](../../F-industrial-chemical-processes/F03-energy-conversion/notes.md).

## Worked example: an industrial process

- This example follows the second one in Bijlage 4, about making an industrial process sustainable, which links industrial processes and green chemistry to the conservation laws. Take the ammonia synthesis: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g). *(CvTE A13.1)*
- System and parts: draw a block diagram ([F01](../../F-industrial-chemical-processes/F01-industrial-processes/notes.md)): a reactor; a cooler in which ammonia condenses and is separated; and a recycle stream that returns the unreacted nitrogen and hydrogen to the reactor, because the equilibrium doesn't lie completely to the right ([C05](../../C-chemical-processes-and-conservation-laws/C05-chemical-equilibrium/notes.md)).
- Scale and order of magnitude: find which step is largest in material and energy, since that is where optimising pays off most. Mass balance per tonne of ammonia: 1.000 t NH₃ is 1.000·10⁶ / 17.03 = 5.87·10⁴ mol, which needs 0.822 t N₂ and 0.178 t H₂, together again 1.000 t.
- Change over time and space: the plant runs continuously, day and night. Some effects stay local, such as the risk of an ammonia leak (toxic) or a hydrogen fire, while others are global, such as CO₂ emissions.
- Flows: inputs are nitrogen from the air, hydrogen and energy; outputs are ammonia and heat, because the reaction is exothermic, and heat exchangers reuse that heat. If the hydrogen is made from natural gas, CO₂ is a by-product: overall CH₄(g) + 2 H₂O(g) → CO₂(g) + 4 H₂(g). Judge the flows with the principles of green chemistry ([F02](../../F-industrial-chemical-processes/F02-green-chemistry/notes.md)): the synthesis step itself puts every atom into the product, recycling makes the material flow circular, and hydrogen from electrolysis of water with renewable electricity would avoid the CO₂.
- **Trap:** a mass balance over the reactor alone misses the recycle stream; draw the boundary around the whole process to compare what goes in with what comes out.

## CCVX versus the Dutch syllabus

- **In both:** the end term, describing chemical processes in terms of systems.
- **Dutch syllabus only:** specification A13.1 with its four aspects, and Bijlage 4 with the two worked examples and a list of past central-exam questions that test them: 2021-II *Retinal in het oog* question 12 (aspect 1), 2021-I *Groene verf* question 2 (aspect 3), 2018-II *Haarverf* question 14 (aspect 3), 2018-I *Zijde verven* questions 9–11 (aspects 1 and 3), 2018-I *De PEF-fles* question 1 (aspect 4) and 2017-II *Zwetende gebouwen koelen af* question 23 (aspects 2 and 4).
- **Wording:** the domain A text of the CvTE syllabus says *beschrijven* (describe), like the CCVX syllabus; the version in Bijlage 4 says *herkennen* (recognise) instead.
