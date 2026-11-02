# Walkthrough — CvTE central exam VWO Biology, 2026 tijdvak 1

**Official paper:** *Examen VWO biologie 2026, tijdvak 1*, Friday 22 May 2026, 13:30–16:30 — 19 pages, 41 questions (10 multiple-choice, 31 open), maximum 65 points.

**Sources (official, free):**
- Year page (document list): https://www.examenblad.nl/2026/vwo/vakken/exacte-vakken/biologie-vwo
- Questions (*opgaven*, code VW-1018-a-26-1-o): https://www.examenblad.nl/2026/vwo/documenten/cse-1/vw-1018-a-26-1-o (file: https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1018-a-26-1-o.pdf)
- Marking scheme (*correctievoorschrift*, code VW-1018-a-26-1-c): https://www.examenblad.nl/2026/vwo/documenten/cse-1/vw-1018-a-26-1-c (file: https://www.examenblad.nl/system/files/exam-document/2026-05/vw-1018-a-26-1-c.pdf)
- No *uitwerkbijlage* (answer sheet) this time — answers go straight into the answer booklet. As of this writing, examenblad.nl lists **no addendum (*aanvulling*) or correction** to the marking scheme for this exam; if one appears later it shows up on the same year page.

This is our own walkthrough of that official exam: for every question, what it asks (in our words), a step-by-step solution, the subdomain in our folder structure, the BINAS tables to use, common mistakes and how the points work. Nothing is copied from the paper: no question text, no figures, no tables, no marking-scheme wording. Open the official PDF next to this file.

Exam facts worth knowing first: 3 hours for 41 questions in five contexts — platelet disease in a newborn (Q1–11, 20 points), turning *E. coli* autotrophic (Q12–19, 13 points), a beekeeper's anaphylaxis (Q20–27, 12 points), CRISPR-made beige fat cells (Q28–36, 12 points) and starch mats for coastal restoration (Q37–41, 8 points). The cover's two classic rules apply: an open question that asks for an explanation or calculation scores 0 without it, and extra answers beyond the number asked are simply ignored. Several questions are "judge each numbered statement" tasks with threshold partial credit (all three or four right = 2 points, one less = 1). The marking scheme sets no subject-specific grading rules (*vakspecifieke regels*) this year. New for 2026: only **Binas 7th edition** (or ScienceData) is allowed — the 6th edition is banned; two questions are explicitly flagged "use your information book" (Q3 and Q20).

Subdomain ids refer to the folders in this package (e.g. `bio-b02` = B02 Metabolism in Cells).

---

## Question 1 (official paper)

Why does a baby with far too few platelets develop little bleeds (*bloeduitstortinkjes*) in the skin, given that platelets maintain the junctions between the endothelial cells lining blood vessels?

**Solve:** Chain the given fact to the observation: with too few platelets, the junctions between endothelial cells are not kept intact, so the lining of the small vessels becomes leaky; blood then escapes from the capillaries into the skin — that is the little purple bleed. Score the full chain: weakened endothelial connections → leaking vessel wall → blood outside the vessel. → `bio-b03` (blood and vessel wall). BINAS: none.
**Common mistakes:** talking about clotting (that's a later question — the junction remark is the hook here); describing the spot without the leak step ("platelets are missing, so bleeding" is too thin for 2 points).
**Points:** 2 — one for the failing endothelial junctions, one for blood leaking out of the (capillary) vessels.

## Question 2 (official paper, mc)

When the platelet count rises, does the concentration of the maturation signal protein TPO go down or up — and is this control negative or positive feedback?

**Solve:** TPO *stimulates* the maturation of platelet precursors, and the text says feedback keeps the platelet concentration stable. A controller of a stable variable must be counter-acted by that variable: more platelets → less TPO → less maturation. That is negative feedback. Answer A (down, negative). → `bio-b04` (feedback), `bio-b03`. BINAS: none.
**Common mistakes:** reasoning "TPO makes platelets, so more platelets = more TPO" — that confuses the cause with the controlled variable; calling stabilisation "positive" feedback.
**Points:** 2 (single mc letter).

## Question 3 (official paper, mc)

Estimate the platelet count per mm³ in the patient's blood from two microscope smears (normal vs patient, platelets coloured as dark dots), using the information book.

**Solve:** You can't weigh a smear, so calibrate: look up the *normal* thrombocyte count per mm³ of blood in the book, take the normal smear as that reference density, and scale by the dot-density ratio of the two smears. The patient's smear holds roughly one dot for every ten in the normal smear, and a normal count in the low hundred-thousands therefore lands near 30,000 per mm³ — answer E, not the 3,000 distractor (that would need a 1:100 ratio). → `bio-b03`, `bio-a08` (microscopy/quantification). BINAS: the data table with human blood values (normal thrombocyte count per mm³).
**Common mistakes:** counting dots but forgetting to scale against the *normal* picture; taking the answer from the book value alone — the question asks for *her* blood.
**Points:** 2 (single mc letter).

## Question 4 (official paper)

Four clotting substances are listed, two precursor stocks (prothrombin, fibrinogen) and two active products (thrombin, fibrin). During a bleed in this patient, which of them sit at a lower concentration than in a healthy person?

**Solve:** Her platelet shortage damps the clotting cascade, so conversion runs slower: less prothrombin is turned into thrombin and less fibrinogen into fibrin — the *products* 2 and 4 are the ones that stay low. The two precursors keep being produced by the liver and just wait longer before use, so their concentrations don't drop. Answer: numbers 2 and 4. → `bio-b03` (clotting cascade). BINAS: none.
**Common mistakes:** picking the two you "use up" (1 and 3) — slower conversion means *less product*, not less stock; adding a third number "to be safe", which halves the score under this question's own rule.
**Points:** 2 — both correct numbers = 2; both correct plus one extra wrong number = 1; exactly one correct number = 1; anything else = 0.

## Question 5 (official paper, mc)

Two platelet-antigen genes sit on different chromosomes and every allele present is expressed. Which inheritance pattern is that: co-dominant, linked, intermediate or multiple alleles?

**Solve:** Two genes on different chromosomes are by definition not linked, so that option dies first. Each gene has just two alleles in the population, so "multiple alleles" (three or more for one gene, like the ABO system) doesn't fit. The key sentence is that *all present alleles come to expression*: a heterozygote shows both products fully — that is co-dominance, not a blended intermediate phenotype. Answer A. → `bio-e03`. BINAS: none.
**Common mistakes:** jumping to "multiple alleles" because several antigen types exist — count alleles *per gene*; picking linked because the question compares two genes — read the chromosome numbers.
**Points:** 1 (single mc letter).

## Question 6 (official paper)

Two antigen variants differ in exactly one amino acid at one position (leucine versus proline in an otherwise identical 762-residue protein), from a point mutation. Judge three claims: the mutation could be an insertion; it sits in an intron; it concerns the third base of the coding triplet.

**Solve:** All three are false. An insertion of one base shifts the reading frame and changes everything downstream (and an in-frame three-base insertion would add a residue — the protein would not be the same 762 with one swap), so claim 1 fails. Introns are spliced out before translation, so a change inside one cannot swap an amino acid in the product — claim 2 fails. For claim 3, check the genetic code: leucine codons and proline codons differ in their first two positions, so no third-base change can turn leucine into proline (third-base changes are usually silent anyway). Answer: 1 — false, 2 — false, 3 — false. → `bio-b01`, `bio-e01`. BINAS: the genetic-code table.
**Common mistakes:** assuming "one wrong" must be in the set — trap layout, all three go one way; mixing up the mRNA codon with the DNA triplet when checking leucine→proline.
**Points:** 2 — all three judged right = 2; two right = 1; fewer = 0.

## Question 7 (official paper)

Why do fetal platelets normally never enter the mother's blood, even though an HPA mismatch can only cause trouble if they do?

**Solve:** In the placenta the two bloodstreams stay separated: exchange happens over the placental barrier and cells such as platelets do not cross. Only when that separation briefly breaks (e.g. during delivery) can fetal cells leak into the maternal circulation. → `bio-b03` (placental exchange), `bio-e03`. BINAS: none.
**Common mistakes:** saying "the placenta filters them out by size" without the core idea of *separated bloodstreams*; dragging antibodies into the answer (small IgG *does* cross — that contrast is the point of a later question).
**Points:** 1 — all-or-nothing; the placenta not letting platelets through (bloodstreams separated) must be explicit.

## Question 8 (official paper)

In the mother's immune activation against the fetal antigen, state for each of antigen, antigen-presenting cells (APCs) and T helper cells whether it comes from the fetus or from the mother.

**Solve:** Sort by who owns what. The antigen is the foreign molecule that triggers it all — the fetal HPA antigen, so: fetus. The APCs that pick it up and present it, and the T helper cells that get activated, are cells of the responding immune system — the mother's. Answer: antigen — fetal; APCs — maternal; T helper cells — maternal. → `bio-b05`. BINAS: none.
**Common mistakes:** assigning the APCs to the fetus because they "carry" the antigen — presenting is done by the responder's own cells; swapping all three because the whole event concerns the baby.
**Points:** 2 — all three right = 2; two right = 1; fewer = 0.

## Question 9 (official paper, mc)

What percentage of the Northwest-European population has platelets *without* antigen HPA-1a? Allele frequencies are given in the paper; assume Hardy-Weinberg.

**Solve:** "Without HPA-1a" means homozygous for the *other* allele. The genotype frequencies follow p² + 2pq + q²: take q = 0.16 (the given frequency of the 1b allele), so the wanted share is q² = 0.0256 ≈ 2.6%. Answer A. The 16% and 84% options catch students who stop at the allele frequencies; 4% and 27% catch slips like 2q² or q³. → `bio-e03`, `bio-f02` (Hardy-Weinberg). BINAS: none — it's arithmetic.
**Common mistakes:** answering 2pq (the *heterozygotes*) — homozygous absence is q²; plugging in 0.84 because "1a is mentioned" — the trait asked for is the absence of 1a.
**Points:** 2 (single mc letter).

## Question 10 (official paper, mc)

Is the allo-immunity in this baby a form of active or passive immunity, and which antibody class (IgE or IgG) is found against the two platelet antigens?

**Solve:** She never made the antibodies herself: they crossed the placenta from her mother during pregnancy — receiving ready-made antibodies is passive immunity. The only antibody class that crosses the placenta is IgG (IgE sticks to mast cells and matters in allergy, the other context in this exam). Answer D (passive, IgG). → `bio-b05`. BINAS: none.
**Common mistakes:** picking active because "she shows the symptoms" — the symptoms are caused by borrowed antibodies; choosing IgE because it appears together with allergy elsewhere in the paper.
**Points:** 2 (single mc letter).

## Question 11 (official paper)

Derive the genotypes of Rosie and of her mother for both HPA genes, given the father's genotype (heterozygous at both genes) and the boxed information above the question.

**Solve:** Work backward from the antibodies actually found. Rosie carries antibodies against antigen 1a and antigen 5b, made by her *mother* — so the mother must lack both (you don't make antibodies against your own antigens), while Rosie must carry both. Mother lacking 1a → homozygous `1b1b`; lacking 5b → `5a5a`. The father can donate both missing alleles (his genotype contains 1a and 5b), which also fixes Rosie: she gets 1b from her mother and 1a from her father → `1a1b`; likewise 5a from mother and 5b from father → `5a5b`. Answer: Rosie `1a1b 5a5b`; mother `1b1b 5a5a`. → `bio-e03`. BINAS: none.
**Common mistakes:** forgetting the antibodies are maternal and concluding Rosie *lacks* the antigens; writing the mother as a heterozygote — antibodies against 1a and 5b prove she is homozygous for the complementary alleles.
**Points:** 2 — one for each correct genotype in the paper's notation.

## Question 12 (official paper)

Two human–*E. coli* relationships are distinguished in the text: with the harmless gut variant and with the pathogenic variant. Name the most fitting form of symbiosis for each.

**Solve:** Match by who profits. The harmless gut strain gains a home and food *and* pays back in digestion support plus vitamins — both partners gain: mutualism (*mutualisme*). The pathogenic strain profits at the host's expense — that is parasitism (*parasitisme*). Answer: 1 — mutualism; 2 — parasitism. → `bio-d05`. BINAS: none.
**Common mistakes:** calling the harmless gut relation commensalism — the text hands you the return benefits (vitamins B and K, digestion help), so it is more than one-sided tolerance; reaching for "antagonism" for the pathogen — within symbioses the harmful mode is parasitism.
**Points:** 2 — one per correct term.

## Question 13 (official paper)

In the designed metabolism scheme of the engineered *E. coli* (Calvin cycle plus a membrane process, with methanoic acid and oxygen available), identify the two energy-carrying letters Q and R and the membrane process S.

**Solve:** The letter pair on the energy carrier is the ADP/ATP couple: the scheme has the Calvin cycle spending ATP (so ATP turns into ADP there) while the membrane machinery rebuilds it — per the official key, Q is ADP and R is ATP. The membrane process runs the electrons donated by methanoic acid down a transport chain with oxygen as the final acceptor, pumping the protons that drive ATP formation: oxidative phosphorylation, i.e. the respiratory chain (*ademhalingsketen*). Notice this bacterium has no mitochondria — the chain sits in its cell membrane, exactly where the paper puts S. → `bio-b02`. BINAS: none; the metabolic maps table can comfort you but is not needed.
**Common mistakes:** swapping ADP and ATP — trace where the cycle *consumes* energy; writing "photosynthesis" because the Calvin cycle is present — the energy here comes from a chemical donor, not light.
**Points:** 2 — one for both carrier names (Q = ADP and R = ATP together), one for the membrane process.

## Question 14 (official paper)

Is the engineered *E. coli* cisgenic or transgenic? Justify.

**Solve:** Transgenic (*transgeen*). The rule is about the donor, not the technique: genes were brought in from *Pseudomonas* and from another donor organism — species a bacterium cannot naturally cross with. Cisgenic would require a gene from the same species or a crossable relative. → `bio-f01` (GM & breeding), `bio-d01` (recombinant DNA). BINAS: none.
**Common mistakes:** calling everything made with recombinant DNA "transgenic" — the cis/trans split is precisely about whether the species boundary was crossed; saying cisgenic "because both are bacteria" — species is the unit, not the domain.
**Points:** 1 — correct term plus a justification that mentions the genes' origin in another species.

## Question 15 (official paper, mc)

What is the electron donor in photo-autotrophic organisms: light, H₂O or O₂?

**Solve:** Split roles: light supplies *energy*, not electrons; oxygen is the waste *product*. Water is oxidised and donates the electrons (with the H ending up in NADPH). Answer B. → `bio-b02`. BINAS: none.
**Common mistakes:** answering "light" — energy source and electron donor are different roles in the same process; this is the classic one-pointer students gift away.
**Points:** 1 (single mc letter).

## Question 16 (official paper)

Explain how the bacteria in the bioreactor could evolve into fully autotrophic ones during the long culture, and name the selection pressure involved.

**Solve:** Two ingredients, in evolution order. First there must be heritable variation: mutations arise and some cells are (or become) better at the autotrophic route than others. Then the environment sorts them: the medium's xylose — the lifeline sugar they could still burn without glycolysis — was tapered down to zero, so any cell still depending on heterotrophic metabolism starved while the more autotrophic ones kept fixing CO₂ and grew. The declining xylose concentration is the selection pressure that gives the fitter variants the edge. → `bio-f01`. BINAS: none.
**Common mistakes:** writing a Lamarckian story ("the bacteria adapted because they needed to") — variation first, selection second; naming CO₂ or oxygen as the pressure — those were abundant; scarcity of the fallback fuel is what selected.
**Points:** 2 — one for genetic variation/mutations in the degree of autotrophy, one for the falling xylose concentration as the selection pressure.

## Question 17 (official paper)

Name the process by which the bacteria build amino acids from glucose and inorganic substances, and give one inorganic compound the medium must contain for that to work.

**Solve:** Building your own organic molecules from simpler precursors is assimilation — here specifically nitrogen assimilation (*stikstofassimilatie*, "continued assimilation" is also accepted phrasing). Glucose brings C, H and O only; amino acids also need nitrogen, which can only come from an inorganic nitrogen source such as ammonium or nitrate added to the medium. → `bio-b02` (assimilation), `bio-b08` (nitrogen). BINAS: none.
**Common mistakes:** answering "photosynthesis" or "transamination" — the question names the whole sugar-to-amino-acid build-up, not a single enzyme step; forgetting that nitrate (besides ammonium) is an acceptable answer.
**Points:** 2 — one for the process name, one for a valid inorganic nitrogen compound.

## Question 18 (official paper)

Use the bar chart of the ¹³C-label experiment to argue that the engineered bacteria use CO₂, not methanoic acid, as carbon source for their amino acids.

**Solve:** Read the chart as two contrasts. When the label sits on the *CO₂*, a substantial share of the carbon in the amino acids carries the ¹³C mark — the gas is being fixed and built in. When the label sits on the *methanoic acid* only (with unlabelled CO₂ present), the amino acids stay essentially unlabelled — the acid feeds the electron chain but is not itself built in. The positive control (wild-type bacteria on labelled glucose, label recovered in amino acids) shows the detection itself works, so the near-zero bars are meaningful. → `bio-a05` (reading experimental results), `bio-b02`. BINAS: none.
**Common mistakes:** quoting the positive control as if it proves anything about carbon source choice — it only validates the method; saying "methanoic acid is not used at all" — it *is* used, as energy donor, just not as carbon skeleton.
**Points:** 2 — one for the labelled-CO₂ result showing up in amino acids, one for the labelled-acid result staying out.

## Question 19 (official paper)

The measured label from ¹³C-methanoic acid was initially higher; the chart had to be corrected for this. Explain from the metabolism scheme why label from the acid can still reach amino acids at all.

**Solve:** Follow the acid in the scheme: it is oxidised to release its electrons, and its carbon leaves as CO₂. If the starting acid is ¹³C-labelled, that *released* CO₂ is labelled too — and the Calvin cycle then fixes exactly that CO₂ into sugar and onwards into amino acids. The label arrives via the gas, not via direct incorporation of the acid. → `bio-b02`. BINAS: none.
**Common mistakes:** contradicting Question 18 by concluding the acid is a carbon source after all — the correction is about this small detour through CO₂, not direct use; ignoring the scheme and talking about contamination.
**Points:** 1 — all-or-nothing: the acid's carbon must pass through CO₂ before entering amino acids.

## Question 20 (official paper)

Explain how the allergic reaction causes oedema (the swelling of the beekeeper's face), using the information book.

**Solve:** The antigen binds primed white blood cells, which then dump the mediator histamine. Look up histamine's listed effects: it widens the small blood vessels and makes their walls leakier. More plasma then filters out of the blood than drains back, so tissue fluid accumulates — that excess is the oedema. Chain required: mediator → dilated/leaky vessels → more tissue fluid. → `bio-b05`, `bio-b03`. BINAS: the table of hormones and other regulating substances (the histamine entry).
**Common mistakes:** saying "the venom attracts water" — the swelling is mediated by the body's own mediator, not the toxin directly; stopping at "vessels widen" without the tissue-fluid step.
**Points:** 2 — one for the vascular effect of histamine/mediator, one for the rise in tissue fluid.

## Question 21 (official paper)

Why can a first bee sting not trigger an allergic reaction?

**Solve:** Allergy needs a prepared system: at the first encounter there has been no sensitisation yet — no specific antibodies against the venom antigen exist to arm the mast cells, so nothing can be triggered. Say it in those terms. Note the marking trap here: reasoning via "no memory cells have been formed" is explicitly refused a point, even though it sounds equivalent — the scheme wants the missing sensitisation/antibodies. → `bio-b05`. BINAS: none.
**Common mistakes:** the memory-cell phrasing just mentioned (zero credit); claiming the first dose is "too small" — dose is irrelevant, recognition is missing.
**Points:** 1 — all-or-nothing on the absence of sensitisation/antibodies.

## Question 22 (official paper, mc)

What do you actually feel when you take a pulse at the wrist — the artery wall contracting or stretching — and which blood pressure (diastolic or systolic) rules at that moment?

**Solve:** The pulse is a pressure wave: each heartbeat ejects a bolus of blood that briefly stretches the elastic artery wall as it passes. That ejection moment is the heart's contraction phase, so the pressure at the pulse is the systolic (peak) pressure. Arteries have no muscle that squeezes rhythmically at the wrist — the wall responds passively. Answer D (stretching, systolic). → `bio-b03`. BINAS: none.
**Common mistakes:** thinking the artery "beats" on its own — only the heart contracts; pairing the pulse with diastole — the felt peak is the pressure maximum, not the resting baseline.
**Points:** 2 (single mc letter).

## Question 23 (official paper)

From melittin's printed primary sequence, decide which of the three illustrated tertiary interactions (hydrophobic, disulfide bridges, hydrogen bonds) plays no role — with an explanation.

**Solve:** Scan the 26-letter sequence for the residue needed per interaction. Hydrophobic interaction: plenty of apolar residues present. Hydrogen bonds: several polar residues present. Disulfide bridges, though, need cysteine side chains (their sulfur is what links up) — and the letter C occurs nowhere in the sequence. So interaction type 2, the disulfide (*zwavel*) bridges, is absent because melittin contains no cysteine. → `bio-b01`, `0-basic-01` (amino-acid side chains). BINAS: the table of amino acids (side-chain properties).
**Common mistakes:** rejecting hydrogen bonds "because the peptide is mostly apolar" — a few polar residues suffice; the scheme adds a mercy note here: naming methionine next to cysteine is *not* counted wrong, since exam candidates habitually list every sulfur amino acid.
**Points:** 1 — correct interaction type plus the no-cysteine explanation.

## Question 24 (official paper)

Melittin ends up spanning the cell membrane, part inside the cell and part sticking out — explain that position from the protein's apolar middle segment.

**Solve:** The middle of a phospholipid bilayer is the fatty-acid region: hydrophobic/apolar. An apolar stretch of amino-acid residues is therefore chemically at home exactly there, so that segment embeds itself in the bilayer core while the polar, partly charged ends prefer the watery sides — leaving the protein lodged across the membrane with both flanks sticking out. → `bio-b01`, `bio-b02` (membrane structure). BINAS: none.
**Common mistakes:** explaining only "apolar likes apolar" without locating that apolar phase inside the membrane; claiming the protein is "transported" into position — the question wants the hydrophobicity argument, not a mechanism.
**Points:** 1 — all-or-nothing: the membrane's interior is hydrophobic/apolar and hosts the apolar segment.

## Question 25 (official paper, mc)

After melittin binds at the membrane, substances P and Q relay the signal through the cell until calcium channels open. What is the biological term for substances with that relay function?

**Solve:** An external signal picked up at the membrane and passed on *inside* the cell by mobile small molecules or ions is the textbook signal-transduction pattern; those intracellular couriers are second messengers ("second" because the venom signal itself is the first). Enhancers are DNA elements, a cascade is a chain shape not a substance, and receptors sit at the receiving membrane — none fits. Answer D. → `bio-d02` (signal relay), `bio-b04`. BINAS: none.
**Common mistakes:** choosing "receptors" because P/Q appear right after binding — the receptor is the membrane protein itself, not the free messengers downstream; choosing "cascades" — that names the process, not the substances.
**Points:** 1 (single mc letter).

## Question 26 (official paper, mc)

The Ca²⁺ flow through the opened channels starts an impulse. Which membrane-potential change can trigger an impulse — and is it caused by Ca²⁺ flowing in or out?

**Solve:** An impulse needs depolarisation: the membrane's inside must become less negative, past the threshold. Positive Ca²⁺ ions diffusing *into* the cell do exactly that (the electrochemical gradient points inward). An outflow would make the inside more negative — hyperpolarisation, which suppresses impulses. Answer A (depolarisation by influx). → `bio-b04`. BINAS: none.
**Common mistakes:** pairing "correct change" with the wrong ion direction — ask which way removes the negative interior; assuming calcium channels pump ions out for "reset" — that's a different transporter's job.
**Points:** 2 (single mc letter).

## Question 27 (official paper)

For four listed adrenaline effects, note for each whether it will or will not raise blood pressure.

**Solve:** Blood pressure rises when the heart pumps harder or the vessel tree narrows. Effect 1 — constriction of smooth muscle in the arterioles: raises peripheral resistance, so yes. Effect 2 — more perfusion of skeletal muscle: that is local vasodilation (lower resistance in a large bed), so no rise. Effect 3 — higher heart rate: more cardiac output per minute, so yes. Effect 4 — widened bronchi: an airway effect, not vascular at all, so no. Answer: 1 yes, 2 no, 3 yes, 4 no. → `bio-b04`, `bio-b03`. BINAS: none.
**Common mistakes:** marking effect 2 as "yes" because "more blood flow sounds like more pressure" — pressure depends on resistance, and dilated muscle vessels drop it; marking 4 as "yes" by association with the fight-or-flight package.
**Points:** 2 — all four right = 2; three right = 1; fewer = 0.

## Question 28 (official paper)

Explain at organism level why it is functional that brown fat tissue sits around the heart and the great vessels.

**Solve:** Brown fat burns fat purely to make heat. Clustered around the heart and great vessels, that heat goes straight into the bloodstream — the passing blood is warmed and then carries the warmth everywhere the circulation reaches. The location turns a local furnace into whole-body heating. → `bio-b04` (thermoregulation), `bio-b02` (heat production). BINAS: none.
**Common mistakes:** staying at cell level ("more mitochondria make more heat") — the organ-*position* question is asked; claiming the fat insulates the heart — it produces heat rather than keeping it in.
**Points:** 1 — all-or-nothing: warm blood distributing heat through the body.

## Question 29 (official paper)

Obesity could be a cause *or* a consequence of missing brown fat tissue. Explain both directions.

**Solve:** Direction 1, obesity → less brown fat: an obese body carries an insulating fat layer (and a relatively small surface area for its volume), so it gets cold less easily; with hardly any cold stimulus there is no demand to maintain heat-producing brown fat, and it regresses. Direction 2, missing brown fat → obesity: without that furnace, cold spells burn much less fat for heat; energy that would have been lost as warmth is instead kept and stored as fat, tipping the budget towards weight gain. The scheme also credits the appetite variant for the second direction (more demand for fuel → more eating → more reserves). → `bio-b02`, `bio-b04`. BINAS: none.
**Common mistakes:** giving two explanations that are the same direction reworded — check your causality arrows point opposite ways; vague "it's a vicious circle" without naming insulation or fat burning.
**Points:** 2 — one per direction.

## Question 30 (official paper)

Explain at molecular level why brown and beige fat cells produce no ATP during oxidative phosphorylation.

**Solve:** Normally the proton gradient across the inner mitochondrial membrane discharges through ATP synthase, which harvests the flow into ATP. These cells insert the uncoupling protein UCP1 into that membrane, giving H⁺ an alternative way back into the matrix — the gradient drains without turning ATP synthase, so the stored energy comes out as heat instead of ATP. → `bio-b02` (oxidative phosphorylation, uncoupling). BINAS: none.
**Common mistakes:** saying "no electron transport happens" — transport runs fine, it is the *coupling* that is gone; stating ATP synthase is absent — the enzyme is there, its proton supply is rerouted.
**Points:** 1 — all-or-nothing: H⁺ returns via UCP1 rather than via ATP synthase (gradient too low to drive synthesis).

## Question 31 (official paper, mc)

The UCP1 protein is translated in the cytosol, then recognised and imported into the mitochondria's inner membrane. Was translation on ER-bound or free ribosomes — and did the polypeptide pass through the Golgi system?

**Solve:** Destination decides the machinery. The ER-plus-Golgi route serves proteins for secretion, lysosomes and the cell membrane. A protein that leaves the ribosome unfolded into the cytosol and is then ferried into a mitochondrion was made on a *free* ribosome — and because it never entered the ER, it never saw the Golgi system either. Answer D (free ribosomes; no Golgi). → `bio-c01` (cell organisation), `bio-b01`. BINAS: none.
**Common mistakes:** reasoning "membrane protein → ER ribosomes" — that rule covers *cell* membrane (and organelle-endomembrane via ER targeting from the start); post-translational mitochondrial import is the exceptions list you must know; assuming every folded protein must pass the Golgi.
**Points:** 2 (single mc letter).

## Question 32 (official paper)

In the CRISPR activation construct, what is the role of the activator proteins fused to the Cas protein in switching the UCP1 gene on?

**Solve:** The guide RNA docks the complex at the UCP1 promoter; the activator proteins are transcription factors that then do the actual switching on: they recruit/stabilise the binding of RNA polymerase at that promoter (enhancer-style activation), so transcription of UCP1 starts in a cell that normally keeps the gene silent. → `bio-b01`, `bio-d01` (gene regulation). BINAS: none.
**Common mistakes:** assigning the activators the targeting role — targeting belongs to the guide RNA; saying the Cas protein "cuts the gene on" — this variant cuts nothing, it is a scaffold for activators.
**Points:** 1 — all-or-nothing: link the activators to RNA-polymerase binding at the promoter / enhancer action and hence transcription.

## Question 33 (official paper)

The test mice were immunodeficient. Why does that matter for this experiment, in which human cells were transplanted between their shoulder blades?

**Solve:** Human cells are foreign tissue to a mouse; an intact immune system would attack and clear the grafts before any effect on weight could show. Switching immunity off prevents rejection, so the transplanted white/beige/brown fat cells survive the four weeks and the group comparison stays intact. → `bio-a05` (experimental design), `bio-b05`. BINAS: none.
**Common mistakes:** answering in generalities ("so the mouse doesn't get sick") without the rejection of the *transplanted human cells*; confusing with sterile housing concerns.
**Points:** 1 — all-or-nothing: no rejection of the grafted cells.

## Question 34 (official paper)

What in the weight-change graph shows that this CRISPR treatment could succeed against obesity?

**Solve:** The decisive comparison is treatment versus control: on the same fat-rich diet, the mice given beige CRISPR cells gain *less* weight over the four weeks than the mice given ordinary white fat cells (the scheme equally accepts the early detail that the beige group dips in weight during the first week while the white group does not). That contrast isolates the engineered cells' effect. Beware the explicit catch: comparing the beige group only with the *brown* group earns nothing — brown is the benchmark, not the control. → `bio-a05` (graph-based argument). BINAS: none.
**Common mistakes:** the beige-vs-brown comparison just named; describing "weight went down" in absolute terms when the graph mainly shows *reduced gain* — describe the relative course against the white-cell group.
**Points:** 1 — all-or-nothing on the beige-versus-white contrast.

## Question 35 (official paper)

Does adding the third group (real brown fat cells) raise the reliability or the validity of the study? Explain.

**Solve:** Validity (*validiteit*). An extra comparison group doesn't repeat or sharpen the measurement, so reliability is untouched. What it adds is a yardstick: with true brown-fat mice alongside, the researchers can judge whether the CRISPR-made beige cells actually mimic the genuine article — i.e. whether the experiment measures what it is meant to show. → `bio-a05` (research concepts). BINAS: none.
**Common mistakes:** choosing reliability "because more groups means more certainty" — repetition and measurement precision are reliability; an extra condition for meaningful comparison is validity; explaining the right choice with the wrong definition still fails.
**Points:** 1 — correct term plus the benchmark explanation.

## Question 36 (official paper)

After four weeks a glucose tolerance test was run, with equal insulin levels in all groups. Argue from the glucose graph that the CRISPR technique countered the onset of type-2 diabetes in the mice.

**Solve:** Type-2 diabetes means cells respond poorly to insulin, so after a glucose shot the blood glucose concentration stays too high for too long. In the graph, the beige-cell mice bring their glucose down further/faster than the white-cell controls — *at equal insulin levels* — so their tissues must respond better to the same insulin: improved insulin sensitivity, exactly what the treatment was meant to achieve. The explicit remark in the scheme: merely stating that insulin lowers blood glucose already earns the first point, but the second requires the beige-below-white comparison from this figure. → `bio-b04` (glucose homeostasis), `bio-a05`. BINAS: none.
**Common mistakes:** attributing the difference to "more insulin" — the text rules that out (no insulin difference); comparing with the brown group again instead of the white control.
**Points:** 2 — one for what type-2 diabetes would predict (glucose stays elevated / insulin lowers glucose), one for the beige-versus-white difference in the graph.

## Question 37 (official paper)

Give one consequence of climate change and explain how it can harm ecosystem engineers such as seagrass and salt-marsh grass.

**Solve:** Any one well-chained example earns the point — pick one you can finish. Safe options: sea-level rise puts the fields too deep for the light these plants need; seawater warming can disturb plant metabolism or push temperatures past the plants' maximum (and warmer water favours plant diseases); stronger storms stir up sediment, clouding the water and cutting the light, or physically rip the meadows out; extra CO₂ acidifies the seawater, which can slow the plants' growth. One consequence, one mechanism. → `bio-b08`. BINAS: none.
**Common mistakes:** stacking three half-examples when one fully argued one is asked (only the first is read); naming "climate change" effects without the causal step to the plant — "storms increase" alone scores nothing until you say what that does to light or anchoring.
**Points:** 1 — all-or-nothing: consequence plus its negative mechanism.

## Question 38 (official paper)

Judge three statements about coastal ecosystems versus the open ocean: (1) coasts contribute more to carbon uptake into organic matter per equal area; (2) the gross primary production (BPP) of coasts is higher; (3) the engineers raise the number of niches.

**Solve:** All three hold. (1) True: the text gives the reason directly — far more photosynthesis per area, hence more CO₂ fixed into organic compounds. (2) True: BPP *is* that total photosynthesis, so the same fact settles it (the higher NPP mentioned in the text fades nothing here). (3) True: by damping currents and stabilising sediment, the engineers let other species settle — more available living conditions means more niches, which the stated rise in biodiversity confirms. Answer: 1 true, 2 true, 3 true. → `bio-b08`, `bio-c03`. BINAS: none.
**Common mistakes:** marking (2) false because only NPP was stressed in the text — respiration loss doesn't overturn a much larger gross gain; marking (3) false for fear of the word "niche" — species richness rising through habitat building is precisely niche creation.
**Points:** 2 — all three right = 2; two right = 1; fewer = 0.

## Question 39 (official paper)

Judge three statements about the tipping-point diagram (seagrass meadow → mixed tipping phase → algal dominance): (1) the middle phase is an equilibrium; (2) seagrass growth stimulates sediment resuspension; (3) the final phase is a climax ecosystem.

**Solve:** All three fail. (1) False: a tipping point is by definition an unstable transition — the system slides away from it, it doesn't rest there. (2) False: seagrass does the opposite — blades brake the current and roots bind the sediment, so resuspension is *suppressed* (which is why losing the seagrass muddies the water and feeds the algae). (3) False: the algal state is a collapsed, degraded state of this ecosystem, not the mature end of a succession line — "climax" is not a label for any stable state. Answer: 1 false, 2 false, 3 false. → `bio-b08`, `bio-c03`. BINAS: none.
**Common mistakes:** calling the mixed phase an equilibrium because two vegetation types coexist — coexistence during a shift is not balance; granting "climax" merely because recovery is hard — persistence is not climax.
**Points:** 2 — all three right = 2; two right = 1; fewer = 0.

## Question 40 (official paper)

The mats are pressed from potato waste, so no food or feed is sacrificed. Give one *other* argument why these starch mats are an ecologically sustainable way to restore coastal ecosystems.

**Solve:** Offer a single clean environmental argument, e.g.: the mats are biodegradable, so nothing persists or needs retrieval; they leave no pollution behind; if birds or fish nibble them it does no harm; their breakdown products don't accumulate in the food chain; and being plant-waste based, their production uses no petroleum, so they don't add to the enhanced greenhouse effect. Any one of these suffices — the scheme lists them as example answers. → `bio-b08`. BINAS: none.
**Common mistakes:** rephrasing the given potato-waste argument (it is excluded by the word "other"); answering in restoration terms ("mats help the plants root") — that is effectiveness, not sustainability.
**Points:** 1 — all-or-nothing on one valid sustainability argument.

## Question 41 (official paper)

Judge three statements about the field results at Bonaire and Texel: (1) the results support both hypotheses; (2) the results prove that mats buried under the sediment surface stabilise the sediment; (3) at Texel, seagrass would be a better choice than salt-marsh grass.

**Solve:** (1) True: survival and shoot growth improved with mats in the configuration each hypothesis covers — mat on the bottom for the salt-marsh grass, mat under the surface for the seagrass — so both hypotheses get support. (2) False: the experiment measured plant survival and growth, never sediment stability itself; an outcome consistent with a mechanism is not proof of that mechanism, and "prove" overshoots anyway. (3) False: each location tested its own local species for its own hypothesis, so the results contain no species comparison at Texel — nothing shows seagrass would beat cord-grass there. Answer: 1 true, 2 false, 3 false. → `bio-a05` (conclusions from results), `bio-b08`. BINAS: none.
**Common mistakes:** accepting (2) because better plant growth "means" stable sediment — that step is an assumption the design didn't test; accepting (3) by comparing the two locations' success bars — different species at different coasts is not a comparison within Texel.
**Points:** 2 — all three right = 2; two right = 1; fewer = 0.

---
*End of walkthrough. 41 questions, 65 points. Structure habits to copy from this paper: every block seeds one or two "judge the numbered statements" items (Q6, 27, 38, 39, 41 — threshold partial credit, so one slip still pays), and the research-heavy CRISPR block (Q32–36) is a model of how CvTE tests design, controls and the reliability/validity split. Before sitting a similar paper, re-drill: feedback reasoning (Q2), Hardy-Weinberg in disguise (Q9), clotting products vs precursors (Q4), proton-gradient uncoupling (Q30) and evidence-vs-proof wording (Q41).*
