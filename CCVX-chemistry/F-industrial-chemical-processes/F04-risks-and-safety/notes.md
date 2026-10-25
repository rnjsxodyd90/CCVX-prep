# F4 — Risks and Safety: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. This subdomain is school-exam only in the Netherlands, so the CvTE syllabus doesn't specify it: *(SLO F4)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/), which names the same concepts, and CvTE codes mark overlap with the central exam.

| Topic | Status |
|---|---|
| Substance flows and energy flows | drafted |
| Risk and probability | drafted |
| Change of scale | drafted |
| Risk and safety phrases | drafted |
| Pictograms | drafted |
| Substance cycles | drafted |

## Substance flows and energy flows

- Substance flows (*stofstromen*): which substances go where in a process, and how much, as in the block diagrams of [F01](../F01-industrial-processes/notes.md). For safety, ask where the hazardous substances are, how much of each is present at any moment, and where they could escape: storage, transport, reactors, pipes. A small stock limits the possible damage, for instance when a toxic intermediate is made on site and used at once. *(SLO F4; CvTE T1.1)*
- Energy flows (*energiestromen*): where heat is produced, where it goes, and what happens if it can't get away. An exothermic reactor is safe only while its cooling removes heat as fast as the reaction produces it (the energy balance). Stored energy is a hazard as well: flammable substances, gases under pressure. *(SLO F4; CvTE R&A3.1, A13.1)*
- If the cooling fails, the temperature rises, the reaction speeds up and produces even more heat: the reaction runs away, and boiling, a pressure rise or an explosion can follow. Reactors therefore have spare cooling, temperature alarms, pressure relief valves and an emergency stop. *(CvTE R3.1)*
- **Trap:** the danger of a runaway is that the heat production grows faster with temperature than the cooling does; an exothermic reaction is safe for as long as the heat is removed.

## Risk and probability

- Risk (*risico*) = probability (*kans, waarschijnlijkheid*) × effect (the size of the damage). A hazard (*gevaar*) is something else: what a substance or situation can do at worst, whether or not it's likely. *(SLO F4)*
- Worked example: suppose a small leak has a probability of 0.1 per year and does €20 000 of damage, and a tank explosion has a probability of 1·10⁻⁴ per year and does €50 000 000 of damage. The risks are 0.1 × €20 000 = €2 000 per year and 1·10⁻⁴ × €50 000 000 = €5 000 per year, so the rare explosion is the larger risk.
- Lower the probability with maintenance, inspection, alarms, automatic shut-down and training. Lower the effect with smaller stocks, a less hazardous substance, distance to homes, walls that catch spills around tanks, and an emergency plan. *(CvTE T4.1)*
- **Trap:** a very unlikely event can still be the largest risk when its effect is huge, and a very toxic substance carries little risk when nobody can come into contact with it.

## Change of scale

- Change of scale (*schaalverandering*), here scale-up (*schaalvergroting*): a process that is safe in a flask can be dangerous in a factory, because far more substance is present and the heat is harder to get rid of. *(SLO F4)*
- Heat is produced throughout the volume but removed through the wall. For reactors of the same shape the volume grows with the cube of the size (r³) and the wall area only with the square (r²), so the cooling area per litre falls as the reactor grows (for a sphere, area ÷ volume = 3/r). Doubling the size gives 8 times the volume but only 4 times the area: half the cooling area per litre.
- From a 1 L flask to a 10 m³ reactor (10⁴ times the volume) the size grows about 22 times, so the cooling area per litre becomes about 22 times smaller. Large reactors therefore need extra cooling (coils, an external heat exchanger), slow dosing of a reactant or a more dilute mixture, or the reaction can run away. Scale-up in general is in [C08](../../C-chemical-processes-and-conservation-laws/C08-technological-aspects/notes.md).
- Other scale effects: mixing is harder, so hot spots can form; a leak releases more; and the consequences can reach beyond the site ([G02](../../G-society-chemistry-and-technology/G02-environmental-impact-assessment/notes.md)).
- **Trap:** the heat produced per litre doesn't change with scale (at the same temperature and concentrations); what falls is the cooling capacity per litre.

## Risk and safety phrases

- The old EU labels carried risk phrases (R sentences, *R-zinnen*: what the danger is) and safety phrases (S sentences, *S-zinnen*: how to work safely), numbered R1, R2, … and S1, S2, …: for example R45 "May cause cancer" and S2 "Keep out of the reach of children". The SLO calls them safety phrases (*veiligheidszinnen*). *(SLO F4)*
- Between 2010 and 2015 they were replaced by the worldwide GHS system, introduced in the EU by the CLP regulation: hazard statements (*H-zinnen, gevarenaanduidingen*) replace the R phrases and precautionary statements (*P-zinnen, veiligheidsaanbevelingen*) replace the S phrases. Binas lists both.
- The first digit of an H statement gives the kind of hazard: H2xx physical (fire, explosion, pressure), H3xx health, H4xx environment. Examples: H225 highly flammable liquid and vapour; H314 causes severe skin burns and eye damage; H350 may cause cancer; H400 very toxic to aquatic life.
- The first digit of a P statement gives the kind of measure: P1xx general, P2xx prevention, P3xx response, P4xx storage, P5xx disposal. Examples: P210 keep away from heat, sparks, open flames and other ignition sources; P280 wear protective gloves, clothing and eye or face protection.
- A label also carries a signal word: "Danger" (*Gevaar*) for the more severe hazard categories and "Warning" (*Waarschuwing*) for the less severe ones. Safe work in the laboratory is in [D02](../../D-development-of-chemical-knowledge/D02-safety/notes.md). *(CvTE A8.5)*
- **Trap:** H and P statements describe the hazard of a substance and the precautions, not the risk in a particular process; that risk also depends on the amount, the conditions and the exposure.

## Pictograms

- GHS hazard pictograms (*gevarenpictogrammen*) are red-bordered diamonds with a black symbol on white. They replaced the old orange squares with letter codes such as T (toxic), Xn (harmful), C (corrosive) and F (flammable). *(SLO F4)*

| Code | Symbol | Meaning |
|---|---|---|
| GHS01 | exploding bomb | explosive, self-reactive |
| GHS02 | flame | flammable gas, liquid or solid; self-heating |
| GHS03 | flame over circle | oxidizing: makes a fire burn more fiercely |
| GHS04 | gas cylinder | gas under pressure |
| GHS05 | corrosion | corrodes metals; causes severe skin burns and eye damage |
| GHS06 | skull and crossbones | acutely toxic: small amounts can kill |
| GHS07 | exclamation mark | harmful, irritating, can cause skin allergy or drowsiness |
| GHS08 | health hazard (silhouette) | long-term harm: cancer, damage to genes or fertility, organ damage, sensitisation of the airways |
| GHS09 | environment (dead tree and fish) | toxic to aquatic life |

- **Trap:** GHS06 (skull) means acute poisoning, GHS08 (silhouette) long-term effects such as cancer. GHS03 (flame over circle) marks an oxidizer, which needn't burn itself but feeds a fire.

## Substance cycles

- In a substance cycle (*stofkringloop*) a substance is recovered and used again: inside the process (recirculation of unreacted reactants, solvents, catalysts) or after use (recycling). Substance and element cycles in general are in [C03](../../C-chemical-processes-and-conservation-laws/C03-conservation-laws-and-cycles/notes.md). *(SLO F4; CvTE T2.3)*
- For safety and the environment, a closed cycle keeps hazardous substances inside the plant: less emission, less transport and less fresh supply. In biodiesel production the toxic, flammable excess methanol is distilled off and reused ([F02](../F02-green-chemistry/notes.md)).
- A closed loop also collects whatever enters it and doesn't leave: impurities build up unless a purge removes them, as with argon in the ammonia process ([F01](../F01-industrial-processes/notes.md)).
- **Trap:** a cycle reduces the amount of fresh substance needed, not the amount present in the plant: a recycle loop can hold a large stock of a hazardous substance.
