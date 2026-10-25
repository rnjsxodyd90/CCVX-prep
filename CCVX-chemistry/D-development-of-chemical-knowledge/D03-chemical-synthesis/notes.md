# D3 — Chemical Synthesis: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

| Topic | Status |
|---|---|
| D3.1 Polymers and their monomers | drafted |
| D3.2 Mechanism of addition polymerisation | drafted |
| D3.3 Mechanism, chain length and crosslinks | drafted |

## D3.1 Polymers and their monomers

- A polymer (*polymeer*) consists of very long molecules made by linking many small molecules, the monomers (*monomeren*). The part of the chain that repeats is the repeating unit; a structural formula of a polymer shows a piece of chain with a few units, or one unit in brackets with n. *(CvTE R2.1)*

### Addition polymers

- Addition polymers (*additiepolymeren*) form from monomers with a C=C double bond. The double bonds open and the monomers bond to each other without anything being split off, so the repeating unit has the same atoms as the monomer and the main chain contains only C atoms. *(CvTE R2.1)*
- From monomer to polymer: draw the monomer with the C=C bond horizontal and the other groups above and below it, make the double bond single, and add a bond on the left and right to the neighbouring units. From polymer to monomer: take two neighbouring C atoms of the main chain, with their side groups, as the repeating unit and put a double bond between them. *(CvTE R2.1)*

| Polymer | Monomer | Repeating unit |
|---|---|---|
| polyethene (PE) | ethene, CH₂=CH₂ | –CH₂–CH₂– |
| polypropene (PP) | propene, CH₂=CH–CH₃ | –CH₂–CH(CH₃)– |
| polyvinyl chloride (PVC) | chloroethene, CH₂=CHCl | –CH₂–CHCl– |
| polystyrene (PS) | phenylethene (styrene), CH₂=CH–C₆H₅ | –CH₂–CH(C₆H₅)– |

- Example, a piece of polypropene: –CH₂–CH(CH₃)–CH₂–CH(CH₃)–CH₂–CH(CH₃)–, three repeating units. *(CvTE R2.1)*
- **Trap:** in polypropene the CH₃ group is a side group. Only the two C atoms of the former double bond are in the main chain, so a main chain written as –CH₂–CH₂–CH₂– is wrong.

### Condensation polymers

- Condensation polymers (*condensatiepolymeren*) form from monomers with two reactive groups each, such as –OH, –COOH and –NH₂. Every link forms in a condensation reaction that splits off a small molecule, usually H₂O, and the main chain contains, for example, ester groups (polyesters) or amide groups (polyamides). *(CvTE R2.1, R1.15)*
- PET, a polyester, forms from benzene-1,4-dicarboxylic acid, HOOC–C₆H₄–COOH, and ethane-1,2-diol, HO–CH₂–CH₂–OH: n HOOC–C₆H₄–COOH + n HO–CH₂–CH₂–OH → –(CO–C₆H₄–CO–O–CH₂–CH₂–O)ₙ– + 2n H₂O. Strictly, 2n − 1 H₂O forms, because the two chain ends keep an H and an OH, but for a long chain that difference doesn't matter. *(CvTE R2.1)*
- Nylon-6,6, a polyamide, forms from hexanedioic acid, HOOC–(CH₂)₄–COOH, and hexane-1,6-diamine, H₂N–(CH₂)₆–NH₂, with the repeating unit –CO–(CH₂)₄–CO–NH–(CH₂)₆–NH–. The two sixes in the name are the numbers of C atoms in the two monomers. *(CvTE R2.1)*
- Proteins are condensation polymers of amino acids, which have both an –NH₂ and a –COOH group, linked by peptide bonds –CO–NH– ([G01](../../G-society-chemistry-and-technology/G01-chemistry-of-life/notes.md)). *(CvTE R2.1, L1.3)*
- From polymer to monomers: cut every ester or amide group in the main chain between the C of the C=O and the O or N, and add H₂O. The C=O side gets an OH and becomes a carbon acid; the O or N side gets an H and becomes an alcohol or an amine. This is the hydrolysis of the polymer ([C07](../../C-chemical-processes-and-conservation-laws/C07-classification-of-reactions/notes.md)). *(CvTE R2.1, R1.16)*
- **Trap:** in an ester group –CO–O–CH₂–, the link is the bond between the C of C=O and the O, not the O–CH₂ bond. And every link that forms releases one H₂O, so count the water.

### Copolymers

- A copolymer (*copolymeer*) is made from two or more different monomers. Ethene and propene together give an addition copolymer with both units in the chain, in random order, for example –CH₂–CH₂–CH₂–CH(CH₃)–CH₂–CH₂–. *(CvTE R2.1)*
- To find the monomers of an addition copolymer, divide the main chain into units of two C atoms and turn each kind of unit into its monomer with a C=C bond. *(CvTE R2.1)*
- Books differ on whether polyesters and polyamides made from two monomers, such as PET and nylon-6,6, count as copolymers, because their two monomers always alternate. *(CvTE R2.1)*
- **Trap:** in an addition copolymer of monomers with one C=C bond, every unit still has two C atoms in the main chain; don't draw a unit across the border between two different monomers.

## D3.2 Mechanism of addition polymerisation

- Addition polymerisation runs by a radical chain mechanism with three kinds of step. The example below uses ethene and a peroxide R–O–O–R as the initiator, because its O–O bond is weak. *(CvTE R2.2, R2.5)*
- Initiation (*initiatie*): heating, or UV light, splits the initiator into two radicals, R–O–O–R → 2 R–O•. A radical then adds to the C=C bond of a monomer, which leaves the unpaired electron on the other C atom: R–O• + CH₂=CH₂ → R–O–CH₂–CH₂•. *(CvTE R2.2, R2.5)*
- In that step the unpaired electron and one electron of the double bond form the new bond, and the other electron of the double bond is left over as the new unpaired electron. *(CvTE R2.5)*
- Propagation (*propagatie*): the radical end adds to the next monomer, again and again, so the chain grows by one unit per step and the radical stays at its end: R–O–CH₂–CH₂• + CH₂=CH₂ → R–O–CH₂–CH₂–CH₂–CH₂•. *(CvTE R2.2)*
- Termination (*terminatie*): two radicals react with each other, their unpaired electrons form a bond and the chain stops growing. When two growing chains combine, they become one long molecule; for two very short chains, R–O–CH₂–CH₂• + •CH₂–CH₂–O–R → R–O–CH₂–CH₂–CH₂–CH₂–O–R. *(CvTE R2.2)*
- The chain ends therefore come from the initiator: a chain that ended by combination has an R–O– group at both ends. *(CvTE R2.2)*
- **Trap:** the initiator isn't a catalyst, because it is used up and ends up in the polymer as the end groups. And the unpaired electron is on the last C atom of the chain, not on the C atom that has just bonded to the chain.

## D3.3 Mechanism, chain length and crosslinks

### Average chain length and degree of polymerisation

- The degree of polymerisation (*polymerisatiegraad*) is the number of monomer units in a polymer molecule. Chains start and stop at random moments, so a polymer contains molecules of different lengths, and you give the average chain length (*gemiddelde ketenlengte*) and an average molar mass. *(CvTE R2.3)*
- For an addition polymer the average molar mass is about n × M(monomer), because the end groups are a tiny part of a long chain. Example: PVC with an average molar mass of 1.25·10⁵ g mol⁻¹ and M(C₂H₃Cl) = 62.49 g mol⁻¹ has n = 1.25·10⁵ / 62.49 = 2.00·10³. *(CvTE R2.3, R&A1.2)*
- For a condensation polymer, use the mass of the repeating unit: the monomers minus the water split off. For PET, C₁₀H₈O₄, that is 166.13 + 62.07 − 2 × 18.02 = 192.16 g mol⁻¹, so an average molar mass of 3.84·10⁴ g mol⁻¹ means 3.84·10⁴ / 192.16 = 2.00·10² repeating units. *(CvTE R2.3, R&A1.2)*
- Relation to the mechanism: every initiator radical starts one chain. With more initiator, more chains grow at the same time and share the same monomer, and radicals meet each other sooner, so the chains end up shorter. With less initiator there are fewer, longer chains. *(CvTE R2.3)*
- Example: suppose 1.0 mol of ethene polymerises with 1.0·10⁻³ mol of peroxide, every radical starts a chain, and all chains end by combining in pairs. The 2.0·10⁻³ mol of radicals start 2.0·10⁻³ mol of chains, which combine into 1.0·10⁻³ mol of polymer molecules. The average degree of polymerisation is 1.0 / 1.0·10⁻³ = 1.0·10³, and the average molar mass is about 1.0·10³ × 28.05 = 2.8·10⁴ g mol⁻¹. Twice as much peroxide gives chains half as long. *(CvTE R2.3)*
- The conditions have an effect too: a higher monomer concentration gives longer chains, because a radical then meets a monomer more often than another radical; a higher temperature splits the initiator faster, so more radicals are present at once and the chains get shorter. *(CvTE R2.3)*
- **Trap:** more initiator makes the polymerisation faster but the chains shorter. And n × M(monomer) only works for addition polymers; for condensation polymers subtract the water.

### Crosslinks

- Crosslinks (*crosslinks*) are atomic bonds (covalent bonds) between polymer chains. They form when some monomers can link to more than two others: in addition polymerisation a monomer with two C=C bonds, such as 1,4-diethenylbenzene, CH₂=CH–C₆H₄–CH=CH₂, and in condensation polymerisation a monomer with three reactive groups, such as propane-1,2,3-triol (glycerol), HO–CH₂–CH(OH)–CH₂–OH, which can form three ester bonds. *(CvTE R2.3)*
- With many crosslinks the chains form one three-dimensional network: a thermoset (*thermoharder*), which doesn't soften when heated but decomposes, because softening would mean breaking atomic bonds. Chains without crosslinks, held together only by Van der Waals bonds or hydrogen bridges, form a thermoplastic (*thermoplast*), which softens when heated ([B04](../../B-substances-and-materials/B04-bonds-structures-and-properties/notes.md)). *(CvTE R2.3, M4.1)*
- A few crosslinks give an elastic material that stretches and springs back, such as vulcanised rubber, which has sulfur bridges between its chains ([E01](../../E-innovation-and-chemical-research/E01-chemical-research/notes.md)). *(CvTE M4.1)*
- Relation to the mechanism: the larger the share of monomers with two C=C bonds or three reactive groups, the more crosslinks form and the harder and more rigid the network becomes. *(CvTE R2.3)*
- **Trap:** crosslinks are atomic bonds between chains, not hydrogen bridges or Van der Waals bonds. Monomers with only two reactive groups, or one C=C bond, give long chains but no network.
