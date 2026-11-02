# Walkthrough — CCVX sample exam 1 (chemistry)

Total: 72 points (Q1 19, Q2 18, Q3 9, Q4 14, Q5 12), 3 hours. Get the free official paper and its worked answers at ccvx.nl (VoorbeeldTentamens: scheikunde 1). Nothing of the official text, figures, tables or answer-key wording is copied here: every line is our own phrasing and every number is derived independently. Statements like "the official key gives X" refer to points and verdicts, in our words.

## Question 1 (official paper): ammonia dissolving, weak base, titration and buffer (19 points)

**Asked, per part:** why 100 L of NH₃ gas can dissolve in 1 L of water without the solution's volume growing (a); prove that 0.100 M aqueous ammonia has pH 11.1 (b); why the equivalence point of the following titration sits below pH 7 (c); the molarity of the titrant acid (d); why the flat middle of the titration curve is flat (e); what is special about the solution exactly halfway the titration (f); use the half-way pH (9.3) to compute K_a (K_z) of NH₄⁺ (g).

**Subdomains:** C05 (weak base, K_b, buffers), C02 (titration stoichiometry), C01 (ammonia in water). **BINAS:** table of acid and base constants (K_b NH₃ = 1.8·10⁻⁵), V_m = 24.5 L mol⁻¹.

**Solution (ours):**

a. In a gas the particles sit far apart: 100 L of NH₃(g) is about 100/24.5 ≈ 4 mol of molecules. They fit between the ~56 mol of water molecules that make 1 L of water, and ammonia is welcome there: both NH₃ and H₂O are polar and form hydrogen bridges to each other. So the ammonia slips into the intermolecular space of the liquid without needing its own large volume — the liquid expands by only a couple of percent, roughly 1 L of solution.

b. NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. K_b = [NH₄⁺][OH⁻]/[NH₃] = 1.8·10⁻⁵. With [NH₄⁺] = [OH⁻] = x and [NH₃] = 0.100 − x: x²/(0.100 − x) = 1.8·10⁻⁵. Quadratic: x = 1.33·10⁻³ mol L⁻¹ (the approximation gives 1.34·10⁻³). pOH = −log(1.33·10⁻³) = 2.88; pH = 14.00 − 2.88 = 11.12 ≈ 11.1. ∎

c. At the equivalence point all NH₃ has been converted into NH₄⁺, and NH₄⁺ is a weak acid (NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺). A solution of a weak acid has pH < 7 — so the equivalence point below 7 is expected for "weak base titrated by strong acid".

d. At equivalence: n(H₃O⁺) = n(NH₃). n(NH₃) = 25.0·10⁻³ L × 0.100 mol L⁻¹ = 2.50·10⁻³ mol; this needed 20.0 mL of acid: c(HCl) = 2.50·10⁻³/20.0·10⁻³ = 0.125 mol L⁻¹.

e. Around the flat part of the curve, [NH₄⁺] and [NH₃] are of the same order of magnitude: the mixture is a buffer. Added strong acid converts NH₃ to NH₄⁺ — the strong acid is replaced by a weak acid, and the ratio [acid]/[base] changes only logarithmically with the additions, so the pH barely moves.

f. Exactly halfway, half of the NH₃ has been converted: [NH₄⁺] = [NH₃] precisely. That also fixes the pH: pOH = pK_b, i.e. pH = pK_z of NH₄⁺.

g. With [NH₄⁺] = [NH₃], K_z = [NH₃][H₃O⁺]/[NH₄⁺] = [H₃O⁺] = 10^(−9.3) = 5·10⁻¹⁰.

**Common mistakes:** taking 100 L V_m = 24.5 for 1 L of water → 4 mol ammonia needs ~0.16 L of its "own" volume — that is the wrong picture, the molecules dissolve between water molecules; using pOH = −log(pH) confusion (forgetting the pH–pOH step); in d using the 1:1 ratio wrongly inverted; in f/g writing K_z with the ratio included although the ratio equals 1 there.

**Points note (official key):** a 4p, b 4p, c 2p, d 2p, e 3p, f 2p, g 2p.

## Question 2 (official paper): dopamine, Parkinson, protein structure, DNA point mutation (18 points)

**Asked:** write the decarboxylation of L-DOPA to dopamine (a); explain why L- naming is needed for L-DOPA but not for dopamine (b); draw the piece ~Ala–Pro–Ala~ (c); explain how Pro disrupts an α-helix at this point, naming the bonding (d); which nucleotides code for the mutated amino acid 166 (e); the normal and mutated base pair in the DNA (f).

**Subdomains:** G01 (proteins, nucleic acids, DNA), E02 (stereoisomerism), B01 (structural formulas, isomerism), C01 (organic equations). **BINAS:** table of amino acids with codons (70E/71G).

**Solution (ours):**

a. L-DOPA is a dihydroxy-phenylalanine: HO–C₆H₃(OH)–CH₂–CH(NH₂)–COOH (two OH on the ring). Decarboxylation removes the COOH as CO₂: L-DOPA → dopamine + CO₂, giving HO–C₆H₃(OH)–CH₂–CH₂–NH₂ (two ring OH unchanged). Draw the full structural formulas; count C, H, O, N on both sides to check.

b. L-DOPA carries one asymmetric carbon: its α-C bears NH₂, COOH, H and CH₂–aryl (four different groups), so it exists as mirror-image forms and the label L/D matters. Dopamine's chain carbon at that position is CH₂ (two identical H's): no asymmetric carbon, hence no L/D naming needed.

c. Draw the tripeptide segment: —NH–CH(CH₃)–CO—N(—CH₂–CH₂–CH₂—)—CO—NH–CH(CH₃)–CO— with the middle nitrogen inside proline's five-membered ring (proline's side chain CH₂–CH₂–CH₂ loops back onto the peptide N) and correct amide C=O drawings.

d. The α-helix stays up through hydrogen bridges between backbone N–H groups and backbone C=O groups (two turns apart). Proline's ring means its peptide bond has no N–H at all (the N is part of the ring), so at proline positions one hydrogen bridge of the helix is missing; proline's rigid ring also forces an unnatural bend. The helix is kinked/weakened right there. The bonding: hydrogen bridges (between backbone C=O and N–H).

e. Triplets count from nucleotide 1; amino acid 166 sits in triplet 166, which starts at nucleotide 3 × 165 + 1 = 496 and runs 496–498. The mutated amino acid is 166 (Leu→Pro), so the answer: nucleotides 496, 497, 498.

f. Triplet for Leu on the coding strand is CTN; for Pro CCN. Leu→Pro by one point mutation is middle base T→C on the coding strand (nucleotide 497): normal base pair T–A, mutated base pair C–G. (On mRNA this reads CU(N)→CU? — coding DNA CTC → CCC: mRNA CUC → CCC.)

**Common mistakes:** decarboxylating the wrong carbon (it is the COOH group that leaves); counting the nucleotide of amino acid n as 3n instead of 3(n−1)+1...3n; forgetting proline's N is in its ring (so no N–H in the peptide bond); treating the α-helix as held by disulfide bridges (those stabilise tertiary fold, not the helix).

**Points note (official key):** a–f each 3p.

## Question 3 (official paper): chlorine gas–water vapour equilibrium (9 points)

**Asked:** the equilibrium (condition) of 2 Cl₂(g) + 2 H₂O(g) ⇌ 4 HCl(g) + O₂(g) (a); the equilibrium contents from 2.0 + 2.0 mol start with 1.2 mol Cl₂ left (b); K (c); higher or lower temperature when 1.0 mol Cl₂ remains — the forward reaction is endothermic (d).

**Subdomain:** C05 (equilibrium calculations, Q/K reasoning). **BINAS:** none strictly needed.

**Solution (ours):**

a. Condition of equilibrium: K = [HCl]⁴[O₂]/([Cl₂]²[H₂O]²).

b. Reacted: 2.0 − 1.2 = 0.8 mol Cl₂, so per the coefficients also 0.8 mol H₂O reacted, and formed: 2 × 0.8 = 1.6 mol HCl and 0.4 mol O₂. Equilibrium: Cl₂ 1.2 mol, H₂O 1.2 mol, HCl 1.6 mol, O₂ 0.4 mol.

c. Concentrations (/5.0 dm³): 0.24, 0.24, 0.32, 0.080 mol L⁻¹. K = (0.32)⁴(0.080)/((0.24)²(0.24)²) = 8.4·10⁻⁴/3.3·10⁻³ = 0.25 mol L⁻¹.

d. Fewer Cl₂ (1.0 mol) means more conversion, i.e. equilibrium further right. The forward reaction is endothermic, so raising the temperature shifts the equilibrium to the right. Answer: the temperature was raised.

**Common mistakes:** filling moles instead of concentrations into K (only correct when the powers sum equally on both sides — here the sum is 5 vs 4, so dividing by the volume matters); computing 2.0 for the temperature direction the wrong way round (read ΔH sign carefully: "the reaction to the right is endothermic").

**Points note (official key):** a 2p, b 3p, c 2p, d 2p.

## Question 4 (official paper): two vanadium salts and maleic anhydride (14 points)

**Asked:** deduce the vanadium charges in V₂O₂P₂O₇ and V₂OP₂O₇ (a); build the Lewis structure of P₂O₇⁴⁻ with the charges placed (b); the half-reaction V₂O₂P₂O₇ → V₂OP₂O₇ and the oxidator/reductor role (c1); the half-reaction butane → C₄H₂O₃ (c2); the total reaction (c3); and the catalyst debate: recycled salt, is it a catalyst? (d1–d3).

**Subdomains:** C01 (redox, half-reactions), B01 (Lewis structures, formal charge), F1 (process thinking). **BINAS:** periodic table for formal-work check (not needed numerically).

**Solution (ours):**

a. V₂O₂P₂O₇: the ionic content is 2 O²− and one P₂O₇⁴− = 8 negative charges for 2 vanadium ions → V is 4+. In V₂OP₂O₇: 1 O²− + 1 P₂O₇⁴− = 6 negatives → V is 3+.

b. Two PO₄ tetrahedra share one corner O: O₃P–O–PO₃. Draw, per P: one double-bonded terminal O (formal 0), two single-bonded terminal O carrying −1 each, and the bridging O (formal charge 0): 4 terminal O⁻ give the −4 of the ion (resonance structures spread the charges).

c1. Balance the reduction: V₂O₂P₂O₇ + 2 H⁺ + 2 e⁻ → V₂OP₂O₇ + H₂O. Both V go +4 → +3 (2 electrons). Electrons are taken up: V₂O₂P₂O₇ is an oxidator.

c2. C₄H₁₀ → C₄H₂O₃: balance C (4 = 4), balance O with water left (+3 H₂O), balance H with H⁺ right (left 10 + 6 = 16 H; right 2 + 14 = 16 H), balance charge with electrons right: C₄H₁₀ + 3 H₂O → C₄H₂O₃ + 14 H⁺ + 14 e⁻.

c3. Equalise electrons: c1 × 7, add to c2, cancel 14 H⁺ and the three waters: 7 V₂O₂P₂O₇ + C₄H₁₀ → 7 V₂OP₂O₇ + C₄H₂O₃ + 4 H₂O.

d1. The salt leaves the process as it entered (reactor 2 restores it), so it is not consumed overall — that smells like a catalyst. d2. But inside reactor 1 it is a reactant: it is reduced to the other salt (it changes substance), and the regeneration happens in a separate reactor — so within the reaction it is consumed, which a catalyst by strict definition is not. d3. The official verdict is that the strict view wins (Gijs is right): being recycled later is not the same as being a catalyst in the reaction.

**Common mistakes:** miscalculating the number of electrons (use +4→+3 ×2 V); forgetting the bridge oxygen has formal charge 0; putting water on the wrong side in the salt half-reaction; skipping the "inside reactor 1 vs overall" distinction and answering d3 too fast.

**Points note (official key):** a 2p, b 3p, c1 2p, c2 2p, c3 2p, d1 1p, d2 1p, d3 1p.

## Question 5 (official paper): glyceryl trinitrate and guncotton (12 points)

**Asked:** energy change of explosion per mole of glyceryl trinitrate (a); the mass percentage of trinitrate in the emptied reactor (b); the molecular formula of (fully nitrated) guncotton (c); whether guncotton's internal oxygen suffices for complete self-combustion (d).

**Subdomains:** C06 (heats of formation), C02 (yield, mass balance), C01 (esters). **BINAS:** table of formation heats; the given value −3.56·10⁵ J mol⁻¹ for glyceryl trinitrate; M = 227.1 g mol⁻¹ for the product.

**Solution (ours):**

a. 4 C₃H₅N₃O₉(l) → 12 CO₂(g) + 10 H₂O(g) + 6 N₂(g) + O₂(g). The explosion writes water as a gas, so use the formation of gaseous water (−2.42·10⁵ J mol⁻¹): ΔE = [12 × (−3.935·10⁵) + 10 × (−2.42·10⁵) + 0 + 0] − 4 × (−3.56·10⁵) = −7.142·10⁶ + 1.424·10⁶ = −5.718·10⁶ J per 4 mol. Per mole of glyceryltrinitrate: **−1.43·10⁶ J mol⁻¹** (the official key's value). (If you instead used the formation of liquid water you'd reach ≈ −1.54·10⁶ J mol⁻¹: the explosion equation itself dictates the gaseous state.)

b. Esterification: C₃H₈O₃ + 3 HNO₃ → C₃H₅N₃O₉ + 3 H₂O. n(glycerol) = 100·10³/92.1 = 1.086·10³ mol → n(trinitrate) = same; m = 1.086·10³ × 227.1 = 246.5 kg. Reactor input: 100 + 250 + 150 = 500 kg total, unchanged (gas doesn't leave the listed contents). Mass percentage of trinitrate: 246.5/500 × 100% = 49.3%.

c. The cellulose unit C₆H₁₀O₅ carries three OH groups; esterifying all three with HNO₃ trades three O–H atoms for three –O–NO₂: unit C₆H₇N₃O₁₁, hence guncotton = (C₆H₇N₃O₁₁)ₙ.

d. Full internal combustion needs, per unit, 6 CO₂ (12 O atoms) plus 3.5 H₂O (3.5 O atoms) = 15.5 O atoms to burn all C and H; the molecule carries only 11 O atoms. Even for carbon alone (12 O needed vs 11 present) it falls short: guncotton cannot fully self-combust; an explosive it is, but the decomposition is incomplete/needs outside oxygen for full conversion.

**Common mistakes:** using the formation of gaseous vs liquid water inconsistently (check what the given data line intends, then stay consistent); forgetting that all mass in the closed reactor is conserved (sulfuric acid stays, excess nitric acid stays, the water formed stays: 500 kg out); miscounting the OH groups in one cellulose unit (three, not four).

**Points note (official key):** a 4p, b 3p, c 3p, d 2p.

---

*Not affiliated with or endorsed by the CCVX or any university. The official paper and its marking scheme: ccvx.nl (VoorbeeldTentamens).*
