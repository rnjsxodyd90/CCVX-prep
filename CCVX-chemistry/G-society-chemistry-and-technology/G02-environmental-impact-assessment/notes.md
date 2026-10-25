# G2 — Environmental Impact Assessment: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

## G2.1 Consequences of a production process for environment and health

### Reasoning from data

- Questions describe a production process with data (amounts, concentrations, temperatures, limit values) and ask what it could mean for the environment and health. Answer in steps: what leaves the process (a substance, heat or a risk), where it goes (air, water, soil, people), what it does there, and whether the data show that it stays within the rules. *(CvTE T4.1)*
- Social conditions decide which effects are accepted and which measures are taken: laws and permits with limit values, public concern about health and safety, the cost of measures, jobs, and the location, such as housing or nature nearby. *(CvTE T4.1)*
- In the Netherlands, large projects that may have major environmental effects go through an environmental impact assessment (*milieueffectrapportage*, m.e.r.): the expected effects of the plan and of alternatives are described in an environmental impact report (*milieueffectrapport*, MER) before the government takes its decision. This procedure gives the subdomain its name.

### Transport of raw materials, products and waste

- Transport uses energy, so it emits CO₂, NOₓ and particulate matter, and it brings a risk of accidents along the route, especially with toxic, flammable or explosive substances (risk and safety are in [F04](../../F-industrial-chemical-processes/F04-risks-and-safety/notes.md)). *(CvTE T5.1)*
- From the data, find the largest mass flow, how far it has to go and how: by pipeline, ship, rail or road. Plants are often built where the largest flow starts or ends, or next to the plants that use their products. In clusters such as the Rotterdam port area and Chemelot in Geleen, pipelines link the plants. *(CvTE T5.1)*
- A dangerous intermediate is best made where it's used, so that it doesn't have to be transported at all; chlorine is an example ([G05](../G05-business-processes/notes.md)).
- **Trap:** compare per tonne of product, not per tonne of raw material: a process with a low yield or much waste moves more material for the same output.

### Emissions

- Emissions (*uitstoot*) are substances that a process releases into air, water or soil, in normal operation or through leaks. Common ones and their consequences: *(CvTE T4.1, T5.2)*
    - CO₂: the enhanced greenhouse effect (*versterkt broeikaseffect*) and climate change;
    - SO₂ and NOₓ: acidification (*verzuring*); NOₓ also helps to form ozone and smog, and together with NH₃ it causes nitrogen deposition (*stikstofdepositie*), which damages nature;
    - particulate matter (*fijnstof*): lung and heart disease;
    - heavy metals and persistent substances in wastewater: they build up in organisms and food chains;
    - nitrate and phosphate in wastewater: eutrophication; organic matter uses up the oxygen in the water while it's broken down.
- SO₂ and NO₂ react with oxygen and water to acids: 2 SO₂ + O₂ + 2 H₂O → 2 H₂SO₄ and 4 NO₂ + O₂ + 2 H₂O → 4 HNO₃. NO forms from the air itself in hot flames and engines: N₂ + O₂ → 2 NO, followed by 2 NO + O₂ → 2 NO₂. *(CvTE T5.2)*
- **Trap:** NOₓ forms even from a fuel without nitrogen, because N₂ and O₂ from the air react at high temperature.

### Limits

- A limit value (*grenswaarde*) is the maximum allowed by law or by a permit, for example for a concentration in flue gas (mg m⁻³), in outdoor air (µg m⁻³) or in water (mg L⁻¹), or for a total emission per year. Exam questions give the value; you convert the data to the same unit and compare (the units are in [C02](../../C-chemical-processes-and-conservation-laws/C02-chemical-calculations/notes.md)). *(CvTE T4.1, R&A1.2, R&A1.3)*
- Worked example with invented numbers. Suppose a boiler burns 1.00 t of fuel per hour that contains 1.0% sulfur by mass, it produces 1.2·10⁴ m³ of flue gas per hour, and the permit allows at most 2.0·10² mg SO₂ per m³. All the sulfur burns: S + O₂ → SO₂. *(CvTE T4.1, R&A1.1)*
    - m(S) = 1.00·10⁶ g × 0.010 = 1.0·10⁴ g per hour, and with the mass ratio m(SO₂) = 1.0·10⁴ g × 64.06 / 32.06 = 2.0·10⁴ g = 2.0·10⁷ mg per hour.
    - Concentration: 2.0·10⁷ mg / 1.2·10⁴ m³ = 1.7·10³ mg m⁻³, far above the limit.
    - Flue-gas desulfurisation must remove at least (1.7·10³ − 2.0·10²) / 1.7·10³ = 88% of the SO₂.
- **Trap:** check what the limit refers to: per m³ of flue gas or of outdoor air, per hour or per year, and one substance (SO₂) or a group (NOₓ).

### Use of cooling water

- Many plants and power stations get rid of heat with water from a river, lake or the sea (*koelwater*), which goes back warmer. *(CvTE T4.1)*
- Consequences: warmer water holds less dissolved oxygen, while fish and other cold-blooded animals need more oxygen when it's warmer; algae grow faster; fish and larvae can be sucked in at the intake; and chemicals added against fouling by mussels and algae end up in the water. *(CvTE T4.1)*
- Why less oxygen: dissolving O₂ in water is exothermic, so at a higher temperature the equilibrium O₂(g) ⇌ O₂(aq) shifts to the left. A typical value: fresh water saturated with air holds about 11 mg O₂ per litre at 10 °C, but only about 9 mg L⁻¹ at 20 °C. *(CvTE R4.2)*
- Worked example with invented numbers. Suppose a power station has to get rid of 1.0·10⁹ J of heat per second, and the river water may warm up by at most 7.0 K. With Q = m·c·ΔT and the specific heat of water from Binas, 4.18·10³ J kg⁻¹ K⁻¹: m = 1.0·10⁹ / (4.18·10³ × 7.0) = 3.4·10⁴ kg of water per second, about 34 m³ per second. *(CvTE R5.5)*
- Ways to reduce the effect: cooling towers, which pass the heat to the air by evaporating part of the water, or using the heat (combined heat and power, below).
- **Trap:** thermal pollution adds no substance; the heat alone lowers the oxygen content and stresses the organisms.

### Risks in the event of an emergency

- Emergencies (*calamiteiten*) are fires, explosions, runaway reactions and leaks of toxic or flammable substances. Their consequences: casualties among workers and neighbours, and polluted air, soil and surface water, including contaminated fire-fighting water. *(CvTE T4.1)*
- Risk combines the probability of an incident with the size of its effect ([F04](../../F-industrial-chemical-processes/F04-risks-and-safety/notes.md)). From the data, look at the amount stored, toxicity, flammability, the boiling point (does it escape as a gas?), the density compared with air, the wind and the distance to housing. *(CvTE T4.1)*
- Example: chlorine (M = 70.90 g mol⁻¹, against about 29 g mol⁻¹ for air) is about 2.4 times as dense as air at the same temperature and pressure, so a chlorine cloud hugs the ground and flows into low places.
- Measures: storing less, working at lower pressure and temperature, sensors and automatic shutdown, basins that catch leaks and fire-fighting water, safety distances, and warning the neighbourhood.
- **Trap:** "dangerous" isn't the same as "high risk": a very toxic substance stored in small amounts behind good safeguards can be a smaller risk than a large tank of a less toxic one.

### Combined heat and power

- Combined heat and power (CHP, *warmtekrachtkoppeling*, WKK) generates electricity and uses the heat that would otherwise go into cooling water or the air: as steam or hot water for a process, a district-heating network or greenhouses. *(CvTE R5.5)*
- This raises the total efficiency (*rendement*), η = useful energy out / energy in × 100%, so less fuel, and so less CO₂, is needed for the same useful energy.
- Worked example with invented numbers. Suppose a CHP plant turns 100 MJ of fuel energy into 40 MJ of electricity and 45 MJ of useful heat: the electrical efficiency is 40%, the total efficiency (40 + 45) / 100 × 100% = 85%. Producing the same electricity in a power station with an efficiency of 40% and the same heat in a boiler with an efficiency of 90% would take 40 / 0.40 + 45 / 0.90 = 150 MJ of fuel, so CHP saves (150 − 100) / 150, a third of the fuel. *(CvTE R5.5)*
- Dutch greenhouses often run gas engines as CHP: the electricity powers lamps or goes to the grid, the heat warms the greenhouse, and CO₂ from the cleaned exhaust gas makes the crops grow faster. Inside a plant, heat exchangers reuse heat in the same way ([F01](../../F-industrial-chemical-processes/F01-industrial-processes/notes.md)).
- **Trap:** CHP doesn't raise the electrical efficiency; the gain is in the heat that's used. Heat at a low temperature is also worth less than electricity, so a high total efficiency doesn't mean all the output is equally useful (quality of energy, [C09](../../C-chemical-processes-and-conservation-laws/C09-quality-of-energy/notes.md)).

### Sustainability

- Judge what a process means for sustainability (*duurzaamheid*) with the comparison criteria of [G03](../G03-energy-and-industry/notes.md): are the raw materials renewable or finite, how much energy is used and from which source, how much waste and by-product forms and can it be used, are materials recycled, and what is emitted over the whole life cycle of the product? *(CvTE T5.1, T6.1)*
- Green-chemistry measures (atom economy, E-factor, catalysts, renewable raw materials) are in [F02](../../F-industrial-chemical-processes/F02-green-chemistry/notes.md); how the quality of water, air, soil and food is guaranteed is in [G04](../G04-environmental-requirements/notes.md).
- **Trap:** a measure that solves one problem can create another: desulfurisation with limestone removes SO₂ but releases CO₂ and produces gypsum ([G03](../G03-energy-and-industry/notes.md)).

## CCVX versus the Dutch syllabus

- **In both:** cooling water, emergencies, and emissions with limit values (CvTE T4.1); transport of raw materials, products and waste, which the Dutch syllabus moved to the comparison criteria of T5.1.
- **CCVX only:** combined heat and power and "sustainability" as items of this outcome. The Dutch syllabus dropped both from T4.1, and covers sustainability more broadly in T5 and T6.
