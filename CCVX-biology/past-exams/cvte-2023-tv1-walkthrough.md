# Walkthrough — Dutch central exam (CvTE), VWO Biology 2023, first sitting (tijdvak 1) (English)

**Official paper:** *Examen VWO 2023, tijdvak 1 — biologie*, Thursday 25 May 2023, 13:30–16:30, 23 pages, 39 questions in 6 contexts (9 multiple-choice, 30 open).
**Sources (official, free):**
- Question paper (opgaven): https://www.examenblad.nl/2023/vwo/documenten/cse-1/vw-1018-a-23-1-o
- Marking scheme (correctievoorschrift): https://www.examenblad.nl/2023/vwo/documenten/cse-1/vw-1018-a-23-1-c
- Subject page (with the norm conversion table): https://www.examenblad.nl/2023/vwo/vakken/exacte-vakken/biologie-vwo — no addendum (aanvulling) to the marking scheme was ever published for this sitting.

This is our own walkthrough of that official exam: for every question, what it asks (in our words), a step-by-step solution, the subdomain in our folder structure, the BINAS tables to use, common mistakes and how the points work. Nothing is copied from the paper: no question text, no figures, no tables, no marking scheme wording. Open the official PDF next to this file; the exam is Dutch, so key Dutch terms are glossed in brackets on first use.

Exam facts worth knowing first: 3 hours; the cover promises 39 questions and a maximum of 64 points — the marking sheet totals exactly 64 (15 one-pointers, 23 two-pointers and one 3-pointer). BINAS is an allowed aid, though this paper barely needs it. A signature format of this exam is *beoordeel de uitspraken* ("judge the statements: write the numbers under each other, then 'juist' (true) or 'onjuist' (false)"): with three such statements, three correct = 2 points, two correct = 1 point; with four statements, four correct = 2 points, three correct = 1 point. If an open question asks you to *explain* or *calculate*, an unexplained answer scores 0. If it asks for *one* reason and you give two, only the first counts — never oversupply.

Subdomain ids refer to the folders in this package (e.g. `bio-b02` = B02 Metabolism in Cells).

---
## The six contexts

1. *Maarten van der Weijden zwemt de Elfstedentocht* — an endurance swimmer's physiology (Q1–Q7)
2. *De kip als draagmoeder* — engineered chicken germ cells as surrogate mothers (Q8–Q15)
3. *Koorts en ziek zijn* — fever, signalling and immune defence (Q16–Q21)
4. *Sorghum als alternatief voor mais* — sorghum versus maize as cattle feed (Q22–Q28)
5. *Vergiftigen pijlgifkikkers zichzelf niet?* — why poison frogs don't poison themselves (Q29–Q33)
6. *Fosfor in een lekkende kringloop* — the leaking global phosphorus cycle (Q34–Q39)

## Question 1 (official paper)

Endurance training raised a swimmer's maximum oxygen uptake; the paper already gives the tissue-level change (more red blood cells). Name one change at the **organ** level that also raises O₂ uptake from the air.

**Solve:** Any upgrade of the uptake/transport organs counts: stronger/larger heart (higher cardiac output), larger vital capacity or lung volume, more alveoli or a bigger lung diffusion surface, better lung perfusion, stronger breathing muscles. One clean example suffices. → `bio-b03` (transport and respiratory systems). BINAS: none.
**Common mistakes:** giving a cellular change (the stem already covered tissue level); "more muscle mass" or "higher breathing frequency" — the scheme explicitly refuses both.
**Points:** 1 — remarkably lenient: even a bare "the lungs/heart got bigger" earns it.

## Question 2 (official paper)

Training also raised the number of capillaries in the swimmer's skeletal muscles. Explain, using the law of Fick, why this allows more aerobic dissimilation in those muscles.

**Solve:** Fick: the diffusion rate is proportional to the exchange area and to the concentration difference, and inversely proportional to the diffusion distance — for a given gradient, rate ∝ area / distance. More capillaries means (a) a larger total exchange surface area A and (b) a shorter distance Δx from blood to muscle cell. Both changes raise the O₂ diffusion speed into the muscle cells, so more oxygen per unit time is available for the aerobic line (citric-acid cycle + oxidative phosphorylation). → `bio-b02` (cell metabolism), `bio-b03` (Fick sits in the transport outcome). BINAS: none — the law itself is syllabus knowledge.
**Common mistakes:** name-dropping "Fick" without tying a variable (distance or area) to the extra capillaries; claiming the concentration difference grows — that is not what capillary sprouting changes.
**Points:** 2 — one for the variable (shorter distance or larger area), one for the consequence chain (greater O₂ diffusion rate → more aerobic dissimilation).

## Question 3 (official paper)

A table contrasts slow (type I) and fast (type II) muscle fibres on mitochondria, glycogen store, myoglobin and myofibril density. Pick two type I traits and explain why each is functional for a 200 km ultra-swim.

**Solve:** Work trait by trait, always ending in the endurance benefit: many mitochondria → much aerobic ATP over long hours; large glycogen store → onboard glucose fuel for a long effort; high myoglobin → O₂ buffer that releases oxygen when local O₂ tension drops; low myofibril density → lighter muscle / lower ATP cost per long-haul stroke (the scheme reads this as: a high density would make the muscle heavy). Give exactly two. → `bio-b02`, `bio-b06` (movement). BINAS: none.
**Common mistakes:** listing traits without the functional link (the link carries the point); circular answers like "type I fibres are slow, so they suit long distances".
**Points:** 2 — one per trait with a fitting explanation.

## Question 4 (official paper, mc)

To keep lactic acid from accumulating, the swimmer kept a calm pace. Which option describes the situation when lactate DOES accumulate in muscle cells, given the three ATP-yielding processes (glycolysis; citric-acid cycle; oxidative phosphorylation)?

**Solve:** Lactate forms when pyruvate and NADH pour out of glycolysis faster than the mitochondrial aerobic line can process them; the overflow is then fermented to lactate to re-oxidise NADH. So accumulation means: process 1 runs ahead of processes 2 and 3 together. Answer A. → `bio-b02`. BINAS: none.
**Common mistakes:** picking "2 and 3 run ahead" — that is a fully aerobic, well-supplied muscle; thinking lactate blocks glycolysis, while it is a *product* of glycolysis outrunning the rest.
**Points:** 2 (multiple choice, all-or-nothing).

## Question 5 (official paper)

Judge three statements about the difference between digesting triglycerides (fat) and starch in the gut: (1) starch digestion starts earlier along the tract; (2) starch needs fewer different enzymes to reach absorbable products; (3) part of the absorbed digestion products of triglycerides travels by a different route to the blood.

**Solve:** 1 *juist*: salivary amylase starts starch in the mouth, while fats are only attacked in the small intestine. 2 *onjuist*: starch goes via salivary and pancreatic amylase plus brush-border maltase and friends — not fewer enzymes than the essentially one-lipase route of triglycerides (bile emulsifies but is no enzyme). 3 *juist*: the fatty products are rebuilt into chylomicrons inside the gut cells and leave via the lymph (lacteals), reaching blood later — glucose enters the blood capillaries directly. → `bio-b03` (digestion, absorption). BINAS: none.
**Common mistakes:** forgetting the lymphatic detour of fats; scoring 2 as true on the intuition "starch is a simple chain, so it must be simpler".
**Points:** 2 (3 correct → 2; 2 correct → 1).

## Question 6 (official paper)

A swallowed thermometer pill lets the coach watch core temperature. Name one process, directly steered by the **animal** (voluntary) nervous system, that helps keep the swimmer's temperature from dropping too fast during the swim.

**Solve:** The animal (skeletal-muscle) system produces heat by work: the swimming movements themselves, or shivering. That is the whole answer — muscle activity converts chemical energy to heat. → `bio-b04` (regulation), `bio-b06` (muscle work). BINAS: none.
**Common mistakes:** naming skin vasoconstriction or other thermostat outputs — those are *autonomic*, precisely the half the question excludes.
**Points:** 1.

## Question 7 (official paper, mc)

Wrinkly fingers and toes after 55 hours in water: a nerve reaction reduced the amount of tissue fluid in the skin by changing capillary filtration, via rising muscle tone in one of the two labelled vessels (P on the inflow side of the capillary bed, Q on the outflow side). Did filtration increase or decrease, and in which vessel did the tone rise?

**Solve:** Less tissue fluid means less filtration out of the capillaries. Capillary filtration is driven by the blood pressure *inside* the bed; to lower that pressure you clamp the **inflow** side — the arteriole feeding the bed (P). Clamping the outflow side would back the blood up and *raise* filtration. So: filtration decreased, vessel P. Answer A. → `bio-b03` (exchange across vessel walls). BINAS: none.
**Common mistakes:** choosing the outflow vessel on the idea that "squeezing anywhere lowers flow" — squeezing the exit raises the pressure and the filtration; answering "filtration increased" because the wrinkles *feel* like water got in (it is water leaving the tissue).
**Points:** 2 (multiple choice).

## Question 8 (official paper)

Researchers modify early chicken embryonic stem cells so that adult birds will produce **transgenic offspring**. Two stem-cell types exist: one can become any cell type except germ cells; the other (PGCs, primordial germ cells) becomes only germ cells. Explain the choice for PGCs.

**Solve:** The goal is offspring carrying the modification — and a modification only reaches the next generation through the gametes. Only PGCs can become gametes, so only engineering PGCs can yield transgenic descendants; the other stem-cell type would produce modified body cells at best, never inherited eggs or sperm. → `bio-c01` (stem-cell potency), `bio-e03` (reproduction). BINAS: none.
**Common mistakes:** arguing convenience ("easier to culture", "more cells available") instead of heritability; missing that the experimental aim is a *next generation*.
**Points:** 1.

## Question 9 (official paper)

The researchers cut DNA with TALEN proteins. A TALEN binds DNA the same way as the transcription factor that binds the TATA-box. Judge three statements about how that transcription factor binds: (1) it binds DNA via base pairing; (2) it binds at the promoter of a gene; (3) it binds a piece of non-coding DNA.

**Solve:** 1 *onjuist*: a protein recognises DNA by shape/charge fit of its recognition domain — base pairing is something nucleic acids do to each other, never proteins. 2 *juist*: the TATA-box is the classic promoter element where transcription initiation is organised. 3 *juist*: promoters sit outside the translated/coding part — they are regulatory, non-coding DNA. → `bio-c01` (gene regulation, transcription factors), `bio-b01` (transcription). BINAS: none.
**Common mistakes:** importing the CRISPR/primer intuition "it finds the place by complementary bases" — TALEN and TATA-binding factors are proteins; placing the promoter inside the coding region.
**Points:** 2 (3 correct → 2; 2 correct → 1).

## Question 10 (official paper)

The engineered construct is built into the DDX4 gene; figures show the normal and modified gene with exons as blocks, the construct sitting where exon 3 used to be, ending in a PA sequence that stops transcription. Judge: (1) transcription stops after exon 4; (2) exon 3 is absent from the mRNA; (3) the pre-mRNA undergoes no splicing.

**Solve:** 1 *onjuist*: the inserted PA stop sequence terminates transcription at the construct, not after a downstream exon 4. 2 *juist*: the insertion disrupts/replaces exon 3's position, so the mature mRNA from the modified gene lacks it. 3 *onjuist*: the remaining upstream exons are still joined into the processed mRNA — splicing of the pre-mRNA does occur. → `bio-c01` (exons, splicing, knockout), `bio-b01`. BINAS: none.
**Common mistakes:** concluding "no exon 3 → no splicing anywhere" (two different things); missing that the PA signal is the actual transcript terminator.
**Points:** 2 (3 correct → 2; 2 correct → 1).

## Question 11 (official paper, mc)

To select the PGCs in which the construct (GFP + puromycin-resistance genes) came to expression, all treated PGCs were grown on a special medium. Must the medium contain GFP? Must it contain the poison puromycin?

**Solve:** GFP is the *product* of the reporter gene — the successfully modified cells make it themselves; nothing in the medium can hand it to them. Puromycin is the selection agent: only puromycin-resistant (i.e. transgenic, expressing) cells survive it. So: no GFP, yes puromycin. Answer B. → `bio-d01` (recombinant DNA markers and selection). BINAS: none.
**Common mistakes:** adding GFP "to select for it" (you don't feed a reporter, you read it later — the actual GFP screen happens in a later step); flipping the pair.
**Points:** 2 (multiple choice).

## Question 12 (official paper)

To show the construct landed at the right place in DDX4, the researchers cut the DNA of transgenic PGCs with the restriction enzyme Mfe1, ran gel electrophoresis with non-modified PGCs as control, and looked at the fragment map. How does the gel prove correct insertion?

**Solve:** The construct inserted between two Mfe1 sites makes that fragment longer than the wild-type fragment. So in the transgenic lanes a new, longer fragment appears — the upper band, at exactly the size the map predicts for a correct insertion — while the control cells show only the short wild-type fragment. Position + size match = proof of correct placement. → `bio-b01` (restriction analysis, gel electrophoresis), `bio-d01`. BINAS: none.
**Common mistakes:** saying "a band is present" without the size-shift logic; ignoring what the control lane is for (the comparison is the whole argument).
**Points:** 1 — lenient detail in the scheme: saying the diagnostic (upper) band appears in the transgenic cell lanes, or even "in the males", earns the point.

## Question 13 (official paper)

Make the crossing table (*kruisingstabel*, Punnett square) of the last cross: transgenic cockerels (heterozygous for the knocked-out DDX4 allele on Z) × a non-modified hen. Use Z− for the Z chromosome with the normal DDX4 gene and Z+ for the modified one, and circle the genotype of the infertile hens.

**Solve:** Remember birds: **males ZZ, females ZW** — the mother determines the sex (Z or W egg). Father: Z⁺Z⁻; mother: Z⁻W. Fill the grid: sons Z⁺Z⁻ and Z⁻Z⁻ (both get two Z's, one knocked-out copy at most → fertile, since males with one knocked-out allele stay fertile); daughters Z⁺W and Z⁻W (their single Z comes from the father). Circle **Z⁺W**: daughters whose only Z carries the knocked-out gene make no functional DDX4 → no egg cells → infertile, exactly the surrogate material wanted. → `bio-e03` (sex-chromosome inheritance), `bio-f01` (alleles/mutation). BINAS: none.
**Common mistakes:** defaulting to human XX/XY logic and letting the father pass the W; assuming the cockerels are Z⁺Z⁺ (the scheme docks the table point if you do — those male knockouts are not what the cross used); circling a son genotype.
**Points:** 2 — 1 for a consistent correct square, 1 for circling Z⁺W; writing female genotypes as Z⁺⁻/Z⁻⁻ style is *not* penalised.

## Question 14 (official paper, mc)

To make a common barnevelder hen lay eggs that are genetically of the rare Rumpless Game breed, PGCs from Rumpless Game embryos are brought into a female barnevelder embryo. Should the Rumpless Game PGCs be transgenic or not — and the barnevelder embryo?

**Solve:** The donor PGCs must become normal, rare-breed egg cells: they must stay **non-transgenic** (any knockout in them would wreck germ-cell formation). The host barnevelder must contribute nothing of her own: she needs the transgenic DDX4 knockout on her single Z so she is sterile and leaves the germline to the implanted PGCs. Answer C (PGCs non-transgenic, host embryo transgenic). → `bio-e03`, `bio-d01`. BINAS: none.
**Common mistakes:** modifying the donor cells "because this whole context is about modification" — here the point is *preserving* the rare genome; making the host non-transgenic too, so she keeps laying her own eggs.
**Points:** 2 (multiple choice).

## Question 15 (official paper)

The researchers want to store PGCs of rare breeds as a "frozen aviary", comparable to plant seed banks. Describe what the value of such a frozen aviary could be.

**Solve:** It is a genetic reserve: it keeps the genetic variation (range of genotypes) of rare breeds alive, protects breeds from extinction, and lets you produce extra offspring of a rare breed on demand. One such argument suffices. → `bio-f03` (biodiversity and its conservation). BINAS: none.
**Common mistakes:** talking about species — the scheme explicitly refuses "soort" where "ras" (breed) is meant; vague "for the future" without a concrete benefit.
**Points:** 1.

## Question 16 (official paper)

Fever starts when pyrogens such as IL-1 raise the thermostat's set point in the hypothalamus. A figure shows the chain: IL-1 → endothelial receptor → IRAK/MyD88 → arachidonic acid → COX → PGE2 → glial receptor → cAMP → the temperature-sensitive neuron fires. Judge: (1) activating IRAK and MyD88 sets off a signalling cascade; (2) arachidonic acid is the substrate of cyclo-oxygenase; (3) PGE2 is a second messenger.

**Solve:** 1 *juist*: receptor-linked relay proteins activating an enzyme series is precisely a signal cascade. 2 *juist*: cyclo-oxygenase consumes arachidonic acid to form PGE2 — that makes arachidonate its substrate. 3 *onjuist*: PGE2 acts *between* cells (it is released and binds a receptor on another cell) — a first-messenger role; the actual second messenger inside the glial cell is cAMP. → `bio-d02` (signal substances, second messengers), `bio-b04`. BINAS: none.
**Common mistakes:** labelling every small relay molecule "second messenger" — the term is reserved for the intracellular relay; overlooking that "X is converted by enzyme Y" already answers "X is Y's substrate".
**Points:** 2 (3 correct → 2; 2 correct → 1).

## Question 17 (official paper)

A temperature trace shows period a (core temperature climbing to the raised set point) and period b (dropping back after the pyrogen wave ends). Judge where each process contributes: (1) increased sweat production; (2) raised thyroid-hormone release; (3) widening of the skin blood vessels.

**Solve:** Period a is the heat-gain phase (body below the raised set point): heat production goes up — thyroid hormone raises the metabolic rate → 2 belongs to a. Period b is the heat-loss phase (set point back to normal, body too warm): sweating ↑ and skin vasodilation ↑ → 1 and 3 belong to b. → `bio-b04` (thermoregulation, endocrine control). BINAS: none.
**Common mistakes:** putting vasodilation in the rising phase (you feel cold then — vessels constrict); assuming sweat glands are "always on during fever" rather than tied to the overshoot phase.
**Points:** 2 (3 correct → 2; 2 correct → 1).

## Question 18 (official paper)

Four fever effects: (1) more differentiation of cytotoxic T cells; (2) higher phagocyte activity; (3) higher natural-killer-cell activity; (4) more antibody production. Classify each as part of the innate (*aangeboren/aspecifieke*) or acquired (*verworven/specifieke*) defence.

**Solve:** 1 *specific* — cytotoxic T cells are antigen-targeted adaptive cells. 2 *aspecific* — phagocytes are innate. 3 *aspecific* — NK cells are innate lymphocytes. 4 *specific* — antibodies are B-cell products, the definition of acquired humoral immunity. → `bio-b05` (non-specific vs specific defence). BINAS: none.
**Common mistakes:** calling NK cells specific because they "recognise" targets (they sense generic stress markers, not antigen); guessing all fever effects are innate and losing the two adaptive ones.
**Points:** 2 (4 correct → 2; 3 correct → 1).

## Question 19 (official paper)

Explain how prolonged high fever damages cells.

**Solve:** High temperature destroys protein structure: proteins denature — and that includes enzymes, so metabolism fails; membrane organisation and protein synthesis also suffer, and heat stress raises damaging oxygen radicals. One mechanism stated sharply suffices. → `0-basic-01` (protein chemistry), `bio-b01` (protein structure). BINAS: none.
**Common mistakes:** global answers like "the cells die" (names the outcome, not the damaging mechanism); blaming the immune system instead of the temperature itself.
**Points:** 1 — several accepted mechanisms, one is enough.

## Question 20 (official paper)

From the findings (heat lowers RBM3 in macrophages; RBM3 normally restrains thermo-miRNAs; those miRNAs cause RNA interference that lowers pyrogen production) a feedback loop is drawn with four numbered positions. Mark + (stimulation) or − (inhibition) at each.

**Solve:** Read the chain in order: pyrogens drive the fever rise → position 1 is **+**. Rising temperature lowers RBM3 production → **−**. RBM3 suppresses the thermo-miRNAs → **−**. The miRNAs suppress pyrogen production → **−**. Two chained inhibitions (temp ⊣ RBM3 ⊣ miRNA) amount to heat unleashing the brake on pyrogens — the negative-feedback core of the loop. So: 1 +, 2 −, 3 −, 4 −. → `bio-b04` (feedback), `bio-a14` (systems thinking). BINAS: none.
**Common mistakes:** cancelling signs mentally and writing the *net* effect instead of the sign at each numbered link; hedging the first link as − ("fever is bad") instead of the literal + of pyrogen → temperature rise.
**Points:** 2 (4 correct → 2; 3 correct → 1).

## Question 21 (official paper, mc)

The thermo-miRNAs interfere with the production of pyrogens. At which moment do they act: between transcription and splicing, between splicing and translation, or between translation and protein folding?

**Solve:** miRNA/RNA interference works in the cytoplasm on **mature mRNA**, blocking (or degrading) it so the ribosome can't translate it — that sits *after* splicing (you need the finished, spliced sequence to recognise it) and *before* translation. Answer B. → `bio-d01` (iRNA / gene regulation), `bio-b01` (transcript processing). BINAS: none.
**Common mistakes:** placing it upstream of splicing "because it is about RNA" — RNAi needs the mature sequence; thinking it attacks the folded protein.
**Points:** 1 (multiple choice).

## Question 22 (official paper)

The corn borer reached the Netherlands around 2010 from Southern Europe, via North America. In North America it is classed as an exotic species (*exoot*), in the Netherlands not. Give an argument why not.

**Solve:** An exotic species is one brought in *by human action*; the borer reached the Netherlands under its own power — natural migration/range expansion (helped along by a warming climate) — so it doesn't meet the definition here. → `bio-d05` (species introductions in ecosystems). BINAS: none.
**Common mistakes:** arguing impact level ("it causes little damage here") — the definition is about the route of arrival, not the harm; the scheme *does* also credit "the species hasn't established here yet / occurs only as a stray".
**Points:** 1.

## Question 23 (official paper)

The borer eats tunnels into stems and cob stalks, which lets the fungus Fusarium easily infect the plants. Which **type of defence** of the maize plant is reduced by the boring?

**Solve:** The tunnels break the plant's outer layers and structural barriers — that is the **physical (mechanical) defence**. The scheme also accepts "aspecific/innate defence" as the answer level. → `bio-b05` (plant defence mechanisms). BINAS: none.
**Common mistakes:** answering "chemical defence" (toxins are untouched by tunnelling); describing the damage ("stems break") instead of naming the defence type asked.
**Points:** 1.

## Question 24 (official paper)

Boring by the rups lets Fusarium infect the plant more easily, and borers develop faster in Fusarium-infected plants. Name this form of symbiosis between borer and fungus.

**Solve:** Both partners profit from the association: **mutualism** (*mutualisme*). → `bio-d05` (symbiosis types). BINAS: none.
**Common mistakes:** reaching for parasitism (one side must be harmed — here both gain); saying commensalism because "the fungus merely hitches" — the faster borer development is a real return benefit.
**Points:** 1.

## Question 25 (official paper)

The table gives fresh yield per hectare and dry-matter content (in g/kg) for maize and two sorghum cultivars. Calculate how much more dry matter per hectare the most productive sorghum cultivar yields compared with maize. Show the working.

**Solve:** Dry matter = fresh yield × dry-matter fraction. Work all three: maize ≈ 44.6 × 0.354 ≈ 15.8 t/ha; HHD2 ≈ 63.2 × 0.315 ≈ 19.9 t/ha; C7 ≈ 62.5 × 0.341 ≈ 21.3 t/ha. Most productive cultivar: **C7**. Difference: ≈ 21.3 − 15.8 ≈ **5.5 t/ha (≈ 5,524 kg/ha) more dry matter**. → `bio-b08` (production), `bio-a01` (data handling). BINAS: none — all data are in the paper's table.
**Common mistakes:** comparing fresh weights and picking HHD2 (heaviest harvest) without the dry-matter conversion; unit slips between tons, kg and the per-mille-style g/kg figure.
**Points:** 2 — 1 for selecting the right rows (maize + C7), 1 for a correct computation and result; the scheme accepts "1.35× as much / 35% more" as an equivalent of the difference.

## Question 26 (official paper, mc)

Cattle were fed each crop, and the digestibility (VCOS — what fraction of organic matter the gut resorbs) was measured: maize highest, HHD2 nearly equal, C7 lowest. Energy intake I splits into P (productivity), F (faecal loss) and R (dissimilation). Which of the four energy-flow schemes fits cattle on sorghum C7?

**Solve:** A lower VCOS means more of the eaten organic matter passes straight through: the faecal slice F grows and the resorbed remainder (which feeds R and P) shrinks relative to the maize-fed reference. Pick the scheme that shows exactly that shift for C7 — that is scheme B. → `bio-b08` (energy budgets I = P + F + R). BINAS: none.
**Common mistakes:** choosing by total intake rather than by fractions (the question is about digestion efficiency, i.e. the *split*); assuming a less digestible feed must shrink F too.
**Points:** 2 (multiple choice).

## Question 27 (official paper)

Microbes in the cattle gut convert carbohydrates from the feed into methane, making cattle farming a strong contributor to climate change. Explain how methane contributes.

**Solve:** Methane is a **greenhouse gas**: in the atmosphere it absorbs and returns heat (infrared) radiation towards the earth, strengthening the enhanced greenhouse effect. → `bio-b08` (climate, cycles). BINAS: none.
**Common mistakes:** the scheme refuses "methane is converted to CO₂" as the explanation; confusing methane with an ozone-layer gas.
**Points:** 1.

## Question 28 (official paper)

Sorghum has a higher protein content (per kg dry matter) than maize. Explain how using sorghum instead of maize as feed can reduce a cow's methane output.

**Solve:** With more protein per kilogram, the animal needs less total feed to cover its requirements — so it eats **fewer fermentable carbohydrates**, the very substrate the gut microbes turn into methane. Less carbohydrate in → less methane out. → `bio-b08` (food production and climate), `bio-b03` (digestion). BINAS: none.
**Common mistakes:** claiming sorghum "contains less methane" or that protein isn't fermentable (anything can ferment — the mechanism here is less feed and less carbohydrate); stopping at "higher protein" without the feed-quantity link.
**Points:** 1.

## Question 29 (official paper)

Epibatidine from a poison frog binds, like acetylcholine, to the acetylcholine receptors on the postsynaptic membrane and likewise opens Na⁺ channels. Judge: (1) binding epibatidine lowers the threshold potential; (2) binding epibatidine causes depolarisation; (3) epibatidine acts as an antagonist of acetylcholine.

**Solve:** 1 *onjuist*: the threshold potential is a membrane property of the postsynaptic cell; a ligand doesn't lower it — the ligand moves the membrane potential *towards* the threshold. 2 *juist*: opened Na⁺ channels → Na⁺ influx → depolarisation. 3 *onjuist*: it mimics acetylcholine's effect, so it is an **agonist**, not an antagonist (an antagonist blocks). → `bio-d02` (receptors, signal substances), `bio-b04` (neural regulation). BINAS: none.
**Common mistakes:** mixing threshold potential with membrane potential; calling every toxin an antagonist.
**Points:** 2 (3 correct → 2; 2 correct → 1).

## Question 30 (official paper)

Compared with acetylcholine binding, the Na⁺ channels stay open much longer when epibatidine binds — even at very low concentrations. Give a possible explanation.

**Solve:** Any mechanism that prolongs channel-opening time: epibatidine binds the receptor more strongly / stays bound longer than acetylcholine; or there is no enzyme in the synaptic cleft that breaks it down (nor a transporter that removes it). One plausible line suffices. → `bio-d02`, `bio-b04`. BINAS: none.
**Common mistakes:** saying "the concentration is higher" (the paper stresses even *low* doses work long — potency, not quantity); vague "it is stronger poison" without a molecular mechanism.
**Points:** 1 — several mechanisms accepted; the answer must give a *how*, not a restatement.

## Question 31 (official paper, mc)

Next to a cladogram, the paper shows part of the human acetylcholine-receptor amino-acid sequence, and, per frog species, only the positions where it differs from the human one. Which amino-acid change is most probably the result of convergent evolution (the same adaptation arising independently)?

**Solve:** Convergent means: the same change appears in lineages whose common ancestor did **not** have it — so look for one and the same substitution in species sitting in **different branches** of the cladogram, whose closer relatives lack it. That is the S→C change seen in *Dendrobates sylvaticus* and *Ameerega parvula* (two separate clades). The A→V change of the two *Ameerega* species is parsimoniously inherited from their shared *Ameerega* ancestor — common descent, not convergence. Answer A. → `bio-f01` (selection, convergence), reading the cladogram. BINAS: none.
**Common mistakes:** picking the shared *Ameerega* change because two species agree (shared ancestry explains that with one event); ignoring the tree and counting who has the change.
**Points:** 2 (multiple choice).

## Question 32 (official paper)

The figure's human receptor sequence next to the cladogram is the starting point; the researchers rebuilt it into the FCAI variant. (a) Which amino-acid changes are needed in the human receptor to get the FCAI variant? (b) What is the minimum number of nucleotides in the coding strand that must change to achieve these?

**Solve:** (a) Compare the frog FCAI residues with the human sequence as drawn: the differing positions require **Ser → Cys** and **Tyr → His** (all other shown positions already match). (b) Check the **genetic-code table in BINAS**: a serine codon (e.g. UCU) goes to a cysteine codon (UGU) with **one** nucleotide change; a tyrosine codon (UAU) goes to histidine (CAU) with **one**. Minimum total: **2 nucleotides**. → `bio-b01` (genetic code), `bio-f01` (point mutations). BINAS: the genetic-code table (*genetische code*).
**Common mistakes:** forgetting that one codon position change can swap the amino acid (counting three changes "one per codon" instead of per nucleotide); giving amino-acid changes that don't bridge human → FCAI as drawn.
**Points:** 2 — 1 for the two correct amino-acid changes, 1 for "two"; the second point is only awarded if it is consistent with your answer to part (a).

## Question 33 (official paper)

Dose–response curves show depolarisation versus concentration of acetylcholine and of epibatidine for the human receptor and for the FCAI and LCAI variants. Judge: (1) in cells with the human receptor the response to acetylcholine is stronger than to an equal concentration of epibatidine; (2) the human receptor is more sensitive to epibatidine than the FCAI and LCAI variants; (3) the FCAI mutation reduces the sensitivity to acetylcholine.

**Solve:** 1 *onjuist*: at equal concentrations the human receptor's response to epibatidine lies at or above the acetylcholine response — epibatidine is the *stronger* trigger here. 2 *juist*: the human curve for epibatidine sits to the left of both variant curves — half-max effect at a lower dose = more sensitive. 3 *juist*: the FCAI variant's acetylcholine curve is right-shifted compared with the human one — needs more for the same response = less sensitive. → `bio-d02` (receptor–ligand), `bio-a01` (reading graphs). BINAS: none.
**Common mistakes:** reading "stronger toxin" as "stronger response named in 1" without checking direction; confusing sensitivity (left/right shift at 50% response) with the maximum height of a curve.
**Points:** 2 (3 correct → 2; 2 correct → 1).

## Question 34 (official paper, mc)

Phosphate is taken up by plants. Through which vessel type does the absorbed phosphate reach the cells where it is built into an organic compound — and what is the name of the process that forms that organic compound?

**Solve:** Minerals dissolved in water travel upwards with the transpiration stream through the **xylem vessels** (*houtvaten*). Building organic compounds from photosynthesis products (e.g. incorporating phosphate into ATP/nucleic acids/phospholipids) is **continued assimilation** (*voortgezette assimilatie*), not carbon assimilation (that is CO₂ → glucose). Answer D. → `bio-b03` (plant transport; tracheids/sieve elements), `bio-b02` (assimilation). BINAS: none.
**Common mistakes:** choosing phloem because "phosphate must go to all cells" — phloem carries assimilates, xylem carries the minerals; calling it carbon assimilation because something organic is made — carbon assimilation refers to fixing CO₂.
**Points:** 2 (multiple choice).

## Question 35 (official paper)

Phosphorus is part of several organic compounds in the light and dark reactions of chloroplasts. Write down the two phosphorus-containing compounds that are **formed in the light reaction and used in the dark reaction**.

**Solve:** The light reaction delivers the two energy/reduction currencies the Calvin cycle spends: **NADPH and ATP**. Both contain phosphorus (NADP carries the extra phosphate; ATP is built on phosphate groups). → `bio-b02` (photosynthesis). BINAS: none.
**Common mistakes:** answering ADP/NADP⁺ (those are *products of the dark reaction*, returned to the light reaction — direction matters); naming glucose. Note: writing NADPH₂ instead of NADPH is not counted wrong.
**Points:** 1 — both compounds required for the point.

## Question 36 (official paper)

A world map shows one big phosphorus flow: Chinese phosphate ore → fertiliser → Brazilian soy plantations → soy to the Netherlands as pig feed → Dutch pork back to China. Explain, using this figure, how a raised phosphate level in Dutch surface water can arise.

**Solve:** Two-linked chain: the imported soy brings a load of organic phosphorus compounds **into the Netherlands** with the feed; the pigs turn most of it into **manure and urine**, which ends up on farmland as slurry — from fields the phosphate **leaches/run-offs into surface water**, raising its phosphate content. → `bio-b08` (nutrient cycles, eutrophication). BINAS: none.
**Common mistakes:** skipping the manure step and stopping at "import adds phosphorus" (the link to water is the second point); the human-consumption/via-sewage route alone is explicitly *not* credited for the second point — the pigs produce the leaching manure here.
**Points:** 2 — 1 for the phosphorus import via feed/soy, 1 for manure → leaching to surface water.

## Question 37 (official paper)

A graph shows phosphate *uptake* by crops in Western Europe rising slightly towards 2050, while the *required* phosphate fertilisation falls. Give a possible cause of this seeming contradiction.

**Solve:** Anything that decouples uptake from fresh fertiliser: soils have been enriched by decades of over-fertilisation, so crops mine the accumulated stock; fertilisation becomes more efficient (timing matched to the growing period); breeding gives crops better phosphate-uptake capacity; leaching losses fall; more crop residues are left on the field, recycling phosphorus. One plausible cause suffices. → `bio-b08`. BINAS: none.
**Common mistakes:** saying "crops need less phosphorus" (the graph shows uptake *rising* — efficiencies, not needs, change); repeating the graph instead of giving a cause.
**Points:** 1.

## Question 38 (official paper, mc)

Fertiliser phosphate reaching surface water contributes to algal blooms. Judge: (1) phosphate only contributes to algal bloom when the phosphate concentration is a **limiting factor** for algal growth; (2) algal bloom occurs when the **maximum tolerance limit** of algae for phosphate is exceeded.

**Solve:** 1 *juist*: extra phosphate only boosts growth if phosphate is what currently limits the algae. 2 *onjuist*: phosphate is a nutrient here, not a poison — the tolerance-range concept (lethality above a tolerance limit) does not apply to a growth-stimulating nutrient. So only statement 1: answer B. → `bio-d05` (limiting factors), `bio-b08`. BINAS: none.
**Common mistakes:** accepting statement 2 because "too much of anything is toxic" — bloom *is* the response to abundance, opposite of toxicity; forgetting that if e.g. nitrogen or light is limiting, added phosphate does nothing.
**Points:** 2 (multiple choice).

## Question 39 (official paper)

Researchers want to know to what extent water plants can lower a high phosphate concentration in surface water, and have several identical artificial ponds. Describe the experimental set-up (*proefopzet*): what is the same across ponds, what differs, and which measurements are needed.

**Solve:** Same for all ponds: equal, (raised) phosphate dose/concentration at the start and identical other conditions (light, temperature, water, size). Different between ponds: presence or amount of water plants (a series from none to several densities gives the dose–response). Measure: the (dissolved/available) phosphate concentration in the **water** of each pond — before and during/at the end of the experiment, repeatedly if possible. → `bio-a05` (designing research), `bio-b08`. BINAS: none.
**Common mistakes:** missing the control/dimension of difference ("some ponds with and some without plants"); measuring only the phosphate content of the *plants* — the scheme explicitly refuses that for the third point; forgetting to state what is kept constant.
**Points:** 3 — 1 for identical phosphate dosing/conditions (constants), 1 for the varying water-plant treatment (variable + control), 1 for measuring water phosphate concentration at the end (and start).

---
*End of walkthrough. Total per the paper and the marking sheet: 64 points over 39 questions (six contexts; 9 multiple-choice items, 30 open). Revision tip: this exam leans hard on the "judge three statements" format — practise turning mechanism knowledge into fast juist/onjuist calls, and rehearse the two calculation/discipline moments here: the dry-matter yield (Q25) and the codon arithmetic with the BINAS genetic-code table (Q32).*
