# Walkthrough — CCVX sample exam, Biology (English)

**Official paper:** *Biology Exam — CCVX Preliminary Examination (voorbeeldtentamen)*, 18 pages, 35 questions (16 multiple-choice, 19 open).
**Sources (official, free):**
- Questions (English): https://www.ccvx.nl/VoorbeeldTentamensEngels/Voorbeeldtentamen%20biologie%20-%20EN.pdf
- Marking notes (Dutch): https://www.ccvx.nl/VoorbeeldTentamens/Voorbeeldtentamen%20biologie%20-%20Uitwerking.pdf

This is our own walkthrough of that official sample exam: for every question, what it asks (in our words), a step-by-step solution, the subdomain in our folder structure, the BINAS tables to use, common mistakes and how the points work. Nothing is copied from the paper: no question text, no figures, no tables, no marking scheme wording. Open the official PDF next to this file.

Exam facts worth knowing first: 3 hours; the cover says "maximum 69 points" while the marking sheet totals 68 — go by the sum per question, and don't let the mismatch distract you. If an open question asks you to *explain* or *calculate*, an unexplained answer scores 0. If it asks for *two* reasons, give exactly two: extra ones are ignored.

Subdomain ids refer to the folders in this package (e.g. `bio-b02` = B02 Metabolism in Cells).

---

## Question 1 (official paper)

Two bacterial species used in dairy production have to be told apart with a simple culture experiment.

**Solve:** One species (diagram 1 in the paper) splits glucose into lactic acid only; the other (diagram 2) forms lactic acid AND ethanol plus CO₂. Both need an energy source, so the culture media must contain glucose. To tell the tubes apart, look for gas production (bubbles, or gas trapped in a Durham tube): only the species of diagram 2 produces gas. → your subdomain: `bio-b02` (assimilation and dissimilation, and microbes in biotechnology). BINAS: none needed; method from the diagrams.
**Common mistakes:** naming "agar" as the nutrient (agar is just the gel); saying "produce lactic acid" as the distinction — both do that.
**Points:** 2 (one for the glucose requirement, one for the gas observation).

## Question 2 (official paper)

Why can the species of diagram 2 only make lactic acid if ethanol is made at the same time?

**Solve:** Count redox cofactors through the branched pathway in the figure. In the upper branch (glucose → ribose) NAD is reduced (NAD → NADH). In the lower branch, NADH is reoxidised to NAD in the steps from acetyl phosphate to ethanol. Without the ethanol branch, NADH cannot be unloaded, NAD runs out, and the upper branch (and thus the lactic acid branch) stops. So both products must form together. → `bio-b02`. BINAS: none.
**Common mistakes:** repeating the carbon numbers (the paper explicitly says that scores nothing — it wants the *mechanism*); confusing NAD/NADP between the branches.
**Points:** 2 (the NAD ↔ NADH balance argument in both directions).

## Question 3 (official paper, mc)

Which of the two pathway diagrams is (are) a net ATP producer?

**Solve:** Homolactic glycolysis (diagram 1) makes 4, spends 2: net +2 ATP. The phosphoketolase route (diagram 2) also dissimilates for energy: net +1 ATP per glucose. So BOTH are net producers (just different yields). Answer: the option "both diagrams". → `bio-b02`. BINAS: none.
**Common mistakes:** assuming the longer detour pathway must make *less* and therefore *none* — both pathways earn ATP.
**Points:** 2.

## Question 4 (official paper)

Name two places in a β-cell where ATP can be produced.

**Solve:** ATP in a human cell is made in the cytoplasm (groundplasm, glycolysis) and in the mitochondria (oxidative phosphorylation; strictly: the inner mitochondrial membrane/cristae). → `bio-b02`. BINAS: none.
**Common mistakes:** writing "the nucleus" or "ribosomes" (they consume ATP, don't make it); giving only one place — the question wants two.
**Points:** 2 (one per correct location).

## Question 5 (official paper, mc)

What percentage of the 51 amino acids of insulin is essential?

**Solve:** Count them from the insulin sequence in the BINAS table of insulin, and check each residue against the table of amino acids (the eight/nine "essential" ones, sometimes marked: Val, Leu, Ile, Lys, Met, Phe, Thr, Trp, (His)). The count lands on 19 of 51 ≈ 37% → choose 37%. → `bio-b01` (protein structure) + `0-basic-01` (amino acids). BINAS: the table of amino acids and the insulin structure.
**Common mistakes:** counting alanine-rich regions as essential; using 20% ("two in ten") by guesswork.
**Points:** 2.

## Question 6 (official paper, mc)

With falling insulin output, which numbered conversions in the liver scheme decrease first?

**Solve:** Insulin *promotes* glucose uptake and use: phosphorylation of glucose, glycogen synthesis from glucose-6-phosphate, and the downstream breakdown toward pyruvic acid. With less insulin it is exactly the *stimulated* steps that fall back; the scheme in the paper shows those as 2, 3, 5 and 7. The glucose release steps are not stimulated by insulin. Answer: the option listing 2, 3, 5 and 7. → `bio-b02`, `bio-b04` (hormonal regulation). BINAS: none.
**Common mistakes:** also selecting conversion 1 (glucose-6-phosphate → glucose): that step goes UP with low insulin, not down.
**Points:** 2.

## Question 7 (official paper)

Why is glucose-6-phosphatase useful in liver cells, and not useful in muscle cells?

**Solve:** The liver's job includes keeping blood glucose up: when blood glucose falls, stored liver glycogen is converted via glucose-6-phosphate to glucose; only the last enzyme removes the phosphate, releasing transportable glucose into the blood. Muscle glycogen is a *private* fuel reserve: glucose-6-phosphate goes straight into dissimilation for ATP; there is no need (and it would be harmful) to export glucose, so the phosphatase would only leak energy-rich sugar out. → `bio-b02`, `bio-b03`, `bio-b04`. BINAS: none.
**Common mistakes:** saying the enzyme "makes" glucose (it dephosphorylates; synthesis happened earlier); forgetting that only free glucose can cross the membrane, not the phosphate ester.
**Points:** 2 (one for each cell type's reasoning).

## Question 8 (official paper)

In the nephron figure, which arrow shows reabsorption and which ultrafiltration?

**Solve:** Ultrafiltration is the pressure-driven passage from blood (glomerulus) into the kidney capsule/tubule system — in the paper's figure that is arrow 1. Reabsorption is the later return of useful substances from the tubule fluid back into the blood of the surrounding capillaries — arrow 2. → `bio-b03`. BINAS: none.
**Common mistakes:** swapping the two because "filtration sounds like blood→urine" but reabsorption also crosses a membrane — keep the direction (into tubule / back to blood) straight.
**Points:** 2 (one per arrow).

## Question 9 (official paper)

Name two features of the tubule epithelial cells (drawn in the paper) that fit substance transport.

**Solve:** This is a form–function read of a cell drawing. Score-bearing features: microvilli on the tubule side (huge apical surface for uptake), many mitochondria (ATP for active transport), visible vesicles (endo-/exocytosis of proteins), deep folds ("pedicels") on the blood side (large basolateral surface for release to blood). Give exactly two. → `bio-b02`, `bio-b03`, `bio-a11` (form and function). BINAS: none.
**Common mistakes:** restating "reabsorption" as the feature (that's the process, not the trait); naming organelles without linking them to transport work.
**Points:** 2 (one per correct feature).

## Question 10 (official paper, mc)

Tubule cells take up proteins from the filtrate and hydrolyse them. Two claims: 1) the products can be reused by the cell itself (e.g. to build ER), 2) the products can be released into the blood.

**Solve:** Hydrolysis of proteins gives free amino acids. Amino acids are general-purpose building blocks: the cell can build its own proteins (ER is membrane protein machinery), and it can export them to the blood — that is what "reabsorption" means: salvage, not discard. Both statements hold → option D. → `bio-b01`, `bio-b03`. BINAS: none.
**Common mistakes:** thinking breakdown products are waste (urea is the waste route for *nitrogen*, amino acids are far too useful to lose).
**Points:** 2.

## Question 11 (official paper, mc)

Six listed seed/seedling traits; which bundle fits the species that colonise an open spot in the rainforest FIRST?

**Solve:** Pioneers need: sunlight-germinating seeds (1 — they pop exactly when light is free), seedlings needing light themselves (2 — they rule the open spot, not the shade), many seeds (3 — hit many spots), and seed-bank dormancy (6 — wait for the opportunity). Season-bound (4) is irrelevant in a rainforest gap, and gravity dispersal over short distance (5) limits reaching gaps. → option with 1, 2, 3 and 6. → `bio-c03`, `bio-d05`. BINAS: none.
**Common mistakes:** choosing the traits of climax/shade species; thinking pioneers invest in few, big, animal-dispersed seeds.
**Points:** 2.

## Question 12 (official paper)

From the figure with gross production (P), total biomass (Q) and total respiration (R) over succession time: indicate the course of the *net* production, with a legend.

**Solve:** Net production = gross production − respiration, point by point. Read P and R at several times, subtract, plot the difference against time: it rises early and sinks to (about) zero as the system approaches the climax (P = R there), though biomass still grows to its maximum. Label the new line (or the shaded area between the curves) in the legend. → `bio-b08`. BINAS: none; draw on the appendix copy, pencil is allowed for graphs.
**Common mistakes:** plotting biomass (Q) as net production; forgetting the legend entry — it carries a point.
**Points:** 2 (correct P−R course, with a legend).

## Question 13 (official paper)

In the schematic of transcription and translation on the appendix sheet, letter twelve possible nucleotides into the mRNA and DNA strands and mark the 3' and 5' ends of all strands.

**Solve:** Rules to apply: (1) the mRNA letters must be the Watson–Crick complement of the DNA template strand (A–U, T–A, C–G, G–C); (2) the other DNA strand matches the mRNA with T in place of U; (3) mRNA is written 5'→3' in the reading direction, the template strand antiparallel 3'→5'; the second DNA strand runs 5'→3' against it — label all four ends consistently. Any lawful twelve satisfy it, using the figure's own reading direction through pre-mRNA → mRNA → protein. → `bio-b01`, `bio-e01`. BINAS: none beyond base pairing.
**Common mistakes:** pairing U in DNA; giving parallel (instead of antiparallel) ends; leaving the protein side without the amino-acid count the figure implies.
**Points:** 3 (mRNA letters, DNA letters, all ends).

## Question 14 (official paper)

A point substitution in the coding part of a gene sometimes leaves the enzyme working normally. Give two reasons.

**Solve:** (a) The codon, though changed, still codes for the SAME amino acid (silent mutation — the code is degenerate, mostly in third position); (b) the new amino acid has such similar properties that folding/activity are unaffected (a conservative change, e.g. one small hydrophobe for another, or the change sits far from the active site). → `bio-b01`, `bio-f01`. BINAS: the genetic-code table.
**Common mistakes:** saying "the DNA was repaired" (the substitution is the final state of the DNA in this question); mixing up the mRNA codon with the DNA triplet direction.
**Points:** 2 (one per valid distinct reason).

## Question 15 (official paper)

Why is the mosquito's preference for people with a raised body temperature functional at the moment of biting?

**Solve:** Heat means vasodilation: the skin's vessels are wide and close to the surface. The mosquito reaches a blood-filled vessel more easily with its piercing mouthparts. So the thermal cue aims it at more accessible blood. → `bio-b04`, `bio-d03` (functional behaviour). BINAS: none.
**Common mistakes:** answering at the wrong level ("it likes heat" is description, not function); dragging in Plasmodium's benefit instead of the mosquito's own feeding.
**Points:** 1.

## Question 16 (official paper, mc)

In jaundice from breakdown of red blood cells, where is bilirubin much higher than normal?

**Solve:** Bilirubin is released into the blood from dying red cells faster than the liver can excrete it, so it rises in ALL blood (including capillaries — visible in skin and eyes) and spills over into urine. Both → option "in all blood vessels and in the urine". → `bio-b03` (liver, excretion). BINAS: none.
**Common mistakes:** choosing faeces (bilirubin normally leaves via bile; the issue here is the *overflow* into blood and urine).
**Points:** 2.

## Question 17 (official paper)

Explain why the patient FEELS cold during the rise of a malaria fever, and why he starts shivering.

**Solve:** Pyrogens lift the set-point ("norm") of the hypothalamic thermostat. As long as the actual temperature sits below the raised norm, the body registers "too cold" — the sensation is coldness, and the heat-gain machinery starts: vasoconstriction in the skin, and shivering to produce muscle heat. The feeling of cold stops once the blood reaches the raised norm. → `bio-b04`, `bio-b05` (non-specific defence). BINAS: none.
**Common mistakes:** claiming the skin itself is cold (it may be objectively warm); saying shivering "fights the parasite" directly — it's a thermoregulation output.
**Points:** 2 (raised norm as cause of feeling cold; shivering as heat production).

## Question 18 (official paper)

Which of the three listed nitrogen compounds is formed DIRECTLY by nitrogen fixation?

**Solve:** N₂-binding (diazotrophy) reduces N₂ to ammonium (NH₄⁺), which the plant can use. Nitrite and nitrate come later by nitrification. → NH₄⁺. → `bio-b08` (nitrogen cycle). BINAS: none.
**Common mistakes:** naming more than one substance (the marking punishes extras here); choosing nitrate because "plants take up nitrate".
**Points:** 1.

## Question 19 (official paper)

(a) What distinguishes symbiotic from non-symbiotic N₂-binding? (b) Give an example of each.

**Solve:** Symbiotic: the bacterium lives in close association with the plant, exchanging goods — root-nodule bacteria (rhizobia) in legumes are the textbook case (the plant feeds the bacteria, the bacteria feed the plant fixed nitrogen). Non-symbiotic: free-living N₂-fixing bacteria or cyanobacteria in the soil/water, independent of a partner. → `bio-b08`, `bio-d05`. BINAS: none.
**Common mistakes:** calling any useful soil bacterium "symbiotic"; giving a nitrifier as the example — the question is about FIXATION (N₂ → NH₄⁺), not nitrification.
**Points:** 3 (a: 1, b: 2).

## Question 20 (official paper)

Why are a fertilised egg (one cell) and a blastula considered less suitable for IVF implantation than a morula?

**Solve:** One-cell zygote: too early — you cannot yet know whether the cell will divide and develop at all (uncertain viability), and it does not match the developmental stage the womb normally receives (an embryo descends the tube over days before arrival). Blastula: the inner/outer cell differentiation (embryoblast vs trophoblast) is already advanced; at that stage the zona pellucida has been or is being lost — outside the protective coat the embryo is fragile (and implantation timing/positioning becomes awkward in vitro). → `bio-c02`, `bio-e03`. BINAS: none.
**Common mistakes:** giving a reason for one stage that is just as true for the other (a duplicate reason earns only once); moral-ethical arguments instead of the biological ones asked.
**Points:** 2 (one per stage with a fitting reason).

## Question 21 (official paper, mc)

With equal lysozyme in both tubes, the bacterial membrane bursts in solution 1 but not in solution 2. Which option about the osmotic values is right?

**Solve:** Lysozyme digests holes in the (Gram-positive-ish) wall; what decides bursting afterwards is the water flow over the membrane. Burst happens when water flows IN (outside solution LESS concentrated than the cell contents: hypotonic). In the other tube no burst: outside is at least as concentrated as the cell (isotonic or hypertonic). So solution 1 has the LOWER osmotic value — and lower than the bacterium's inside; solution 2 higher or equal to the cell's. → the option reading "solution 1 lower than solution 2, and lower than in the bacterium". → `bio-b02` (osmosis). BINAS: none.
**Common mistakes:** swapping "burst = water out" (that's plasmolysis/shrinkage); ignoring the wall: bacteria with an intact wall don't burst even when hypotonic outside.
**Points:** 2.

## Question 22 (official paper, mc)

Patch colours in a female cat come from X-inactivation at some point in embryonic development. In which kitten was the X carrying the black allele switched off EARLIEST?

**Solve:** The earlier an X is switched off, the bigger the area its decision controls (more cell generations inherit that choice). Which X is off decides the colour: X^D (ginger) OFF → the black allele stays active → the patch is black; X^d OFF → ginger. So "the X^D was switched off earliest" in the kitten with the LARGEST black area: that is kitten 2 (black; possibly every cell line descends from a very early X^D-off event). Note the fathers of patches: daughters of a ginger father (X^D Y) and a black mother (X^d X^d) are always X^D X^d, so patchiness is possible at all. Answer: the option naming kitten 2. → `bio-e03`, `bio-f01` (X-linked inheritance, X-inactivation). BINAS: none.
**Common mistakes:** forgetting the cross forces all daughters to be heterozygous; reasoning with patches from the father's viewpoint; most of all: forgetting that "off X" = the OTHER colour shows.
**Points:** 2.

## Question 23 (official paper, mc)

Which couple gives the best shot at calico (three-colour) kittens, and what is the chance for a DAUGHTER from that couple?

**Solve:** Calico needs: X^D X^d (mosaic) AND at least one S (white patches). Parents available: Minet X^D X^D ss; Gus X^d X^d Ss; Tommy X^D Y ss; Max X^d Y SS; Fluffy X^d Y Ss; Rasta X^d Y Ss. We need a mother who CAN pass X^D (so: Minet X^D X^D — only she carries X^D among females) × a father who passes X^d to daughters and S to offspring. Max (X^d Y SS) fits best: daughters all X^D X^d, and S comes surely from SS father → every daughter calico, so 100%. Answer: Minet × Max, 100%. → `bio-e03` (X-linked + independent assortment). BINAS: none.
**Common mistakes:** forgetting the white factor S; trying Gus × Fluffy "because both are Ss" (the daughters can't be X^D X^d — nobody gives X^D); computing a son-chance where a daughter-chance is asked.
**Points:** 2.

## Question 24 (official paper, mc)

From the table of fetal flow rates (per kg): vena cava superior 78, vena cava inferior 182, right ventricle 169, pulmonary veins together 13 mL·min⁻¹·kg⁻¹. How many mL flow per minute from the LEFT ventricle straight into the aorta of a 3 kg unborn baby?

**Solve:** Heart balance: what enters the right atrium leaves the right ventricle: 78 + 182 = 260 per kg. Right ventricle pushes out 169 per kg, of which the lungs receive only 13 (via the artery) — the rest crosses to the left side (through the oval window + ductus): the left ventricle's flow = right-atrium inflow (260) − what went to the pulmonary trunk? Structure it as: left ventricle output = left-atrium inflow = pulmonary veins (13) + through the oval window (right atrium extras): 260 − 169 = 91 plus 13 = 104 per kg; × 3 kg = 312 mL per minute. → answer 312. → `bio-b03` (fetal circulation). BINAS: none.
**Common mistakes:** forgetting shunts exist (computing as in the adult); mixing the foramen ovale with the ductus arteriosus routes; forgetting to multiply by 3 kg.
**Points:** 2.

## Question 25 (official paper)

For pO₂ between 2 and 10 kPa, is the expectant mother's O₂ saturation higher or lower than her unborn child's, and why does that matter?

**Solve:** In that middle range the foetal curve lies ABOVE the maternal curve: at the same pO₂, adult Hb is less saturated, foetal Hb more saturated. The child's Hb therefore holds O₂ more strongly — which is exactly what the placenta needs: O₂ leaves the mother's blood and binds to the child's haemoglobin against a shallow gradient. → `bio-b03` (Hb and O₂ transport). BINAS: the oxygen-saturation curve of haemoglobin (compare shapes).
**Common mistakes:** answering "the same" because both curves coincide at the extremes — the question pins the intermediate range; saying the baby "breathes through the placenta" (no gas exchange by lungs there, but O₂ does cross by diffusion onto foetal Hb).
**Points:** 2 (direction of the difference + placental significance).

## Question 26 (official paper, mc)

The oval window (foramen ovale) fails to close fully after birth; left-to-right atrial shunt follows. Which listed abnormality/abnormalities does this cause?

**Solve:** Extra blood from the left atrium keeps pouring into the right atrium → more volume and thus higher pressure in the pulmonary artery (abnormality 1 holds). The added blood is OXYGENATED, so pO₂ in the pulmonary artery is HIGHER than normal, not lower (abnormality 2 fails). → option "only 1". → `bio-b03` (embryonic vs postnatal circulation). BINAS: none.
**Common mistakes:** reasoning "hole → mixed blood → low O₂" and picking both; the shunt direction here is left→right (oxygen-rich into the pulmonary artery), the opposite of blue-baby shunts.
**Points:** 2.

## Question 27 (official paper)

Name two non-specific defences of the gastrointestinal tract against bacterial establishment.

**Solve:** The barriers before specific immunity: stomach acid (very low pH kills most swallowed bacteria), the mucus layer over the gastric/intestinal wall, lysozyme in saliva, the digestive enzymes that also digest bacteria, and the mechanical flow (peristalsis) flushing content. Give two. → `bio-b05`. BINAS: none.
**Common mistakes:** naming antibodies (that is specific defence, third line); naming skin (wrong organ system here).
**Points:** 2 (one per valid line of defence).

## Question 28 (official paper)

Describe one plausible transmission route of H. pylori between people.

**Solve:** Oral route: from stomach contents/regurgitation or faeces to hands to shared glasses, cutlery or food (faecal–oral), or mouth-to-mouth via saliva (e.g. kissing, shared drinking glass). One clean chain suffices. → `bio-b05`, `bio-e03`-adjacent hygiene reasoning. BINAS: none.
**Common mistakes:** air/droplet claims (it is not the respiratory route for this bacterium); vague "bad hygiene" without a route.
**Points:** 1.

## Question 29 (official paper, mc)

Tapping the patellar tendon triggers the knee reflex; which numbered neurons in the spinal-cord diagram are actually active (release transmitter)?

**Solve:** Trace the loop: the muscle spindle in the extensor is stretched → its sensory neuron (1) fires → in the cord it excites both the motor neuron (5) of the extensor AND an inhibitory relay that silences the flexor; the diagram's own numbering shows the relay path fires too (7 and 9 in its chain). So active: 1, 5, 7 and 9 — the option matching that set. Neurons of the antagonist path that are INHIBITED do not release. → `bio-b04`, `bio-b06` (reflex arc, antagonists). BINAS: none.
**Common mistakes:** including the flexor motor neuron that is inhibited (inhibited ≠ firing); forgetting the inhibitory interneuron itself must fire.
**Points:** 2.

## Question 30 (official paper, mc)

A measured signal in the cell body of neuron 7 (figure 12): stimulation of which neuron(s) of figure 11 could be its cause?

**Solve:** Read the synapses onto neuron 7 in the circuit: neuron 7 is the inhibitory interneuron to the flexor motor neuron; it is driven by the sensory axon of the spindle (1) and by neuron 6 in the diagram's chain — the measured postsynaptic signal matches input from 6 and from 9? Work strictly by the drawn synapses in the paper: depolarising input arrives from 6 and 9; 2 synapses on other cells in the circuit, not on 7. → option "only neurons 6 and 9". → `bio-b04` (synapse logic). BINAS: none.
**Common mistakes:** guessing from proximity instead of the drawn synapses; including the sensory neuron because "everything starts there" (its synapse is elsewhere).
**Points:** 2.

## Question 31 (official paper, mc)

During contraction, what happens to the widths of the H-zone, the A-band and the I-band?

**Solve:** Filaments slide: the thin filaments move into the thick-filament array. The H-zone (bare myosin middle) shrinks/disappears; the I-band (actin only, at the ends) shrinks; the A-band (length of the myosin filaments) stays the same. → the option "H narrower, A unchanged, I narrower". → `bio-b06` (sarcomere). BINAS: none.
**Common mistakes:** thinking the A-band shrinks (the myosin filaments themselves don't shorten); mixing up which zone sits where.
**Points:** 2.

## Question 32 (official paper)

From a table of five skeletal traits (+/−) across five dinosaur genera, place all genera on the given phylogenetic tree whose branches each add one new trait; two genera may be interchanged.

**Solve:** Build the tree by nesting groups of shared derived traits: the genus with the fewest "+" (only the basal trait) is the outgroup (P in the paper's tree → the genus with the hip-socket hole only: Allosaurus). The next branch adds the pelvic protrusion (Q → Stegosaurus); then abnormal enamel (R → Parasaurolophus); the last two share the skull-base edge and split the remaining two genera either way (S/T → Pachycephalosaurus and Triceratops, interchangeable). → `bio-f02` (cladistics), `bio-f04`-adjacent. BINAS: none.
**Common mistakes:** nesting by total number of traits instead of shared SETS; forced certainty where the problem itself allows swapping the last pair.
**Points:** 2 (all genera placed; one swap or omission costs a point).

## Question 33 (official paper, mc)

Vision shifts from an object 8 m away to one 1 m away. Do impulses go to the ciliary body, and does tension in the ciliary processes rise or fall?

**Solve:** Near vision needs accommodation: stronger refraction → the ciliary muscle contracts, the ciliary processes approach the lens, the zonular fibres slacken, the lens rounds up. So yes to impulses, and the TENSION IN THE CILIARY PROCESSES as asked: the muscle ring contracts → tension decreases? Read the paper's precise sense: the muscle contracts (impulses increase) and the tension in the fibres suspending the lens falls, letting the lens thicken. The intended option: yes, and the tension DECREASES (slack zonules). → `bio-b07` (accommodation). BINAS: none.
**Common mistakes:** mixing up ciliary-muscle tension (rises) with zonular tension (falls — and that is what frees the lens); thinking distance vision needs the work.
**Points:** 2.

## Question 34 (official paper)

While watching the 1-metre object, a change makes the iris sphincter muscles contract. What change could that have been?

**Solve:** Contraction of the sphincter/circular muscle of the iris narrows the pupil — the pupil reflex to BRIGHter light. So: the light in the room got stronger. → `bio-b07` (pupil reflex). BINAS: none.
**Common mistakes:** linking to accommodation (lens) instead of the pupil; answering "the object moved" — the stimulus is light level, not distance.
**Points:** 1.

## Question 35 (official paper, mc)

Q sees sharply only near 8 m. His glasses are convex in the top halves, concave in the bottom halves. Looking through them, he first views the 1-metre object sharply, then the 20-metre one. Which head movement makes the far object sharp?

**Solve:** Mapping the lens needs: far (20 m) needs the less refractive (concave) correction? Person Q "sees sharply at about 8 m, not nearer nor further": he needs converging help for near (his eye's refraction too strong? let me reason: sharp at 8 m only, can't see 1 m or 20 m — his eyeball/lens behaves like a fixed-focus camera set at 8 m. To see a NEARER object he needs MORE convergence: convex (plus) lenses → the upper halves which he used for 1 m. To see FARTHER (20 m) he needs LESS convergence: concave (minus) lenses → the bottom halves. So he must move the image from the upper to the lower half of the glasses: tilt the head BACK (chin up, eyes down? — tilting the head back makes him look through the bottom of the lenses). → option A. → `bio-b07` (lenses and corrections). BINAS: none.
**Common mistakes:** choosing the same half (both objects at the "same height" — the trick is WHICH GLASS, not where the object is); confusing convex-for-near logic.
**Points:** 2.

---
*End of walkthrough. Total per the paper's marking sheet: 68 points over 35 questions. Re-read the three longest contexts (Energy, Coding/dinosaurs, vision) once more before the exam: they model the typical CCVX mixes of a process figure + a calculation + an explanation in one question.*
