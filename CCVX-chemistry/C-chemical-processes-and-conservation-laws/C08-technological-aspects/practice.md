# C8 — Technological aspects: practice

Eight original questions on the C8 learning outcomes, in CCVX style.

### chem-c08-q01 | points 3 | outcome C8 | difficulty easy
#### Question
A lab test for an oxidation runs in a 250 mL flask at 1 g scale; the plant runs it in a 10 m³ reactor at 1000 kg scale. Name two effects of increasing scale that do not exist in the flask, and explain each with one physical reason.
#### Answer
Surface-to-volume ratio drops (the flask cools through its wall, the plant must pump heat across coils or exchangers), and mixing becomes non-trivial (a lab shake homogenises 250 mL; in 10 m³ there are residence-time gradients), so both temperature control and uniformity have to be engineered.
#### Solution
1. Heat exchange scales with surface area, contents with volume: doubling all dimensions quarters the cooling surface per litre — the exotherm of the flask is self-cooled, that of the plant is not.
2. Mixing time scales with vessel size: in the flask "everything sees the same concentration"; in the plant, added reagent is locally concentrated (local side reactions, hot spots) until mixed.
3. These are the daily surprises of scaling up — the reason process technology is a discipline between the lab bench and the shipyard.

### chem-c08-q02 | points 3 | outcome C8 | difficulty easy
#### Question
Choose one type of reactor for each job and justify: (1) a homogeneous liquid-phase esterification at the 5 m³ scale; (2) a catalytic gas reaction at the 100 t/day scale over a solid catalyst; (3) a small enzyme reaction that must be protected from shear.
#### Answer
1. A stirred tank reactor (jacketed and agitated) — good mixing and temperature control for a liquid batch. 2. A packed-bed reactor — the gas passes a fixed bed of solid catalyst; efficient, no catalyst separation needed. 3. A membrane reactor or immobilised-enzyme reactor — the enzyme is held behind a membrane or on a carrier, so the product stream flows past without stirring the enzyme to pieces.
#### Solution
1. The stirred tank is the workhorse for liquid batches (bulk to fine).
2. Packed beds suit solid catalysts in continuous gas service: the catalyst stays put, no filtration per tonne.
3. Enzymes are easily damaged proteins: hold them (immobilisation/membrane) and let the substrate flow by — the reactor choice follows the reactivity and fragility of the chemistry, the C8 point.

### chem-c08-q03 | points 3 | outcome C8 | difficulty medium
#### Question
A plant runs a strongly exothermic polymerisation. Describe what thermal management must do, name two devices it uses, and state the failure scenario it prevents.
#### Answer
It must remove the reaction heat at the rate it is produced (temperature control) so the mixture cannot run away: cooling jackets and reflux condensers (or internal cooling coils), plus safety relief (rupture disc/vent) and emergency cooling; failure prevention: thermal runaway — the temperature rises, the reaction goes faster, more heat, until boiling and overpressure burst the vessel.
#### Solution
1. Exothermicity feeds itself: higher T → faster reaction (C04) → more heat. Thermal management's job is to keep the balance at the set point.
2. Tools: cooled jackets/coils with a coolant, reflux (the solvent boils off and condenses back, carrying heat away), heat exchangers, and as last defence the relief/vent path.
3. Runaway is the named accident of polymerisation and nitration plants; the assessment of it is one of the G2/F4 points as well.

### chem-c08-q04 | points 3 | outcome C8 | difficulty medium
#### Question
A lab-on-a-chip runs a blood test in a few microlitres with channels thinner than a hair. Give two advantages over a classical 10 mL test tube analysis, and explain them at the level of molecules, transport and scale.
#### Answer
Sample and reagent consumption shrink enormously (microlitre drops are enough — cheap and patient-friendly), and analyses run fast because at microscale diffusion distances are tiny (molecules meet in seconds without stirring), so mixing and heating/cooling are almost instantaneous; the chip can run many tests in parallel.
#### Solution
1. Small scale × small scale: volume per test drops by 10³–10⁵; reagent cost per test and patient sample fall with it.
2. Transport by diffusion dominates at µm scale — no stirring needed; heat equilibrates in ms. Fast kinetics of handling, not of chemistry itself.
3. Bonus: parallelisation (many channels at once) for screening: a whole battery of assays from one fingerprick — the C8 "lab-on-a-chip" concept in practice.

### chem-c08-q05 | points 3 | outcome C8 | difficulty medium
#### Question
Titanium dioxide nanoparticles in sunscreen scatter UV on skin, yet the same TiO₂ as a coarse pigment powder behaves differently. Explain what makes nanoprocesses/nanomaterials chemically different from the same material in bulk.
#### Answer
At the nanometre scale almost all atoms sit at the surface: surface effects dominate (much higher specific surface, much higher reactivity and different optical/electronic behaviour, here effective UV scattering), while in the bulk material most atoms are inside solid and see no outside.
#### Solution
1. A 20 nm particle has a large fraction of its atoms on the surface (roughly every fifth atom); a µm grain has practically none.
2. Surface atoms are unsaturated: more catalytic activity, faster dissolution, new optical properties (size-dependent band behaviour).
3. So nanoparticles are not small bulk: the fraction of surface decides the process — the premise of nanotechnology and of new safety questions (can they penetrate cells?).

### chem-c08-q06 | points 4 | outcome C8 | difficulty medium
#### Question
The hydroxyl radical ·OH is called "the detergent of the atmosphere". (1) Explain what this means for pollutants such as CO and CH₄ in the air. (2) Give one way ·OH forms in the troposphere. (3) Why do we not simply bottle ·OH and use it?
#### Answer
1. ·OH oxidises most pollutants — CO to CO₂, CH₄ and other VOCs towards CO₂ and water — so the air cleans itself of them: it is the atmosphere's detergent. 2. Ozone photolysis in moist air: O₃ + hν → O₂ + O(¹D), then O(¹D) + H₂O → 2 ·OH. 3. It lives only fractions of a second (it reacts at first contact), so it cannot be stored or transported; you can only generate it where you need it (that is exactly what advanced oxidation water treatment does).
#### Solution
1. A radical with an unpaired electron attacks almost anything (see C04): ·OH is the prime atmospheric oxidant of the daylit troposphere.
2. The chain starts from ozone and sunlight in the presence of water vapour; in polluted air VOC and NOₓ also feed radicals.
3. Extremely reactive species are by definition non-storable (lifetime ≪ 1 s): atmospheric chemistry is written in the language of radicals that never sit still — C8's point of the chemistry of atmospheric radicals.

### chem-c08-q07 | points 3 | outcome C8 | difficulty medium
#### Question
A block diagram of a synthesis shows: feed mixer → reactor → distillation → back to mixer. Explain what this loop shows about the process design beyond the chemistry of the equation, and give one reason why the designer tolerates the extra distillation.
#### Answer
It shows the process recycles an unconverted reactant or a solvent: the plant is not built around "one pass = complete conversion" (usually impossible, e.g. in equilibria), but around loops with separation plants doing the recovery. The distillation is tolerated because reclaiming the material is cheaper than losing it (economics of feedstock, waste and emission rules).
#### Solution
1. In a block diagram the separation plant is as important as the reactor: it closes the mass balance.
2. Recirculation keeps expensive reagents and solvents in the plant, improving yield (F01) and cutting emissions and waste (F02) for the price of separation energy.
3. So the C8 lesson is: an industrial process is reactor + separators + loops + heat management as one system, not the isolated line of the textbook equation.

### chem-c08-q08 | points 4 | outcome C8 | difficulty hard
#### Question
A start-up proposes a "microreactor" continuous plant: hundreds of parallel mm-wide channels instead of one big vessel, for a fast exothermic hydrogenation. List three expected advantages of this architecture and one risk, justifying each from scale, heat transfer and safety.
#### Answer
Advantages: superb heat removal (immense surface-to-volume ratio — runaway is structurally harder, see chem-c08-q03), precise residence-time control per channel (narrow distribution → better selectivity), and fast, safe scale-up by numbering channels rather than by enlarging a vessel (the lab result transfers directly). Risk: a blockage in one channel changes flow and reaction locally (fouling sensitivity), and monitoring hundreds of channels reliably is an engineering challenge — so the parallelisation that improves heat makes operation more complex.
#### Solution
1. Channels of mm scale have surface/volume ≈ 10²–10³ times a stirred tank's: heat extraction outruns any exotherm — safety by geometry.
2. Every molecule spends the same time: tight distribution, few side reactions, better yield (compare chem-f01-q06's recycle-free situation).
3. "Numbering up" multiplies instead of enlarging: two hundred identical channels double capacity without re-scaling physics — but fouling, clogging and instrumentation are the named weaknesses. The C8-analysis is architecture vs scale, exactly this.
