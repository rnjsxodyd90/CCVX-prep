# D4 — Molecular Modelling: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. This subdomain is school-exam only in the Netherlands, so the CvTE syllabus doesn't specify it: *(SLO D4)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/), which names the same concepts, and CvTE codes mark overlap with the central exam.

## Molecular modelling

- Molecular modelling means building and studying three-dimensional models of molecules to understand their shape and how they react. It is done by hand with a molecular model kit (*molecuulbouwdoos*) or on a computer with programs such as Avogadro, ChemSketch or Spartan. *(SLO D4)*
- A program builds a molecule from a structural formula and calculates a likely three-dimensional shape, with the bond lengths and bond angles of lowest energy. It can show the molecule as balls and sticks or as a space-filling model, and some programs also show partial charges or how the electrons are spread over the molecule. *(SLO D4)*
- A model shows the spatial structure that VSEPR theory predicts from the steric number (*omringingsgetal*): 4 gives a tetrahedron with angles of about 109°, 3 a flat triangle with about 120°, and 2 a straight line with 180°. *(CvTE M1.16)*
- A model also shows steric effects: large groups take up space and can block the approach of another particle (steric hindrance, *sterische hindering*). And it shows whether a molecule is chiral (*chiraal*), meaning that it can't be laid over its mirror image. *(CvTE M1.18)*
- With a model you can see which atoms come close enough to react, from which side a particle can attack, and why a product with a particular three-dimensional structure forms. This is how modelling helps to write a mechanism; the active position (active site) of an enzyme that fits only one enantiomer is an example ([E02](../../E-innovation-and-chemical-research/E02-selectivity-and-specificity/notes.md)). *(SLO D4)*
- **Trap:** a structural formula on paper is flat, but the molecule isn't. The angles of 90° in a drawn formula are about 109° around a C atom with four single bonds, and two drawings that look different can be the same molecule, turned around.

## Reaction steps and mechanism

- A reaction mechanism (*reactiemechanisme*) describes the separate steps (*reactiestappen*) in which a reaction actually runs: which bonds break and form in each step, and which intermediates (*tussenproducten*) form and are used up again. Adding up the steps gives the overall equation, and the slowest step, the rate-determining step (*snelheidsbepalende stap*), decides the rate ([C04](../../C-chemical-processes-and-conservation-laws/C04-reaction-kinetics/notes.md)). *(CvTE R2.4)*
- Electron pairs move from an electron-rich site to an electron-poor one. A nucleophile (*nucleofiel*), a particle with a lone pair or a negative charge, attacks a δ+ atom; an electrophile (*elektrofiel*), a positive or δ+ particle, attacks an electron-rich site such as a C=C bond; a radical reacts with its unpaired electron ([C07](../../C-chemical-processes-and-conservation-laws/C07-classification-of-reactions/notes.md)). *(CvTE R2.5)*
- Example of what a model adds: in the substitution CH₃Br + OH⁻ → CH₃OH + Br⁻, the OH⁻ ion attacks the δ+ C atom from the side opposite the Br atom, where the large Br atom isn't in the way. While the C–O bond forms and the C–Br bond breaks, the three H atoms flip over, like an umbrella turning inside out in the wind. *(CvTE R2.5)*
- When an intermediate is flat around a C atom (steric number 3), a particle can attack it from both sides with equal chance. HBr adds to but-1-ene in two steps, CH₂=CH–CH₂–CH₃ + HBr → CH₃–CHBr–CH₂–CH₃: first H⁺ adds and gives a flat positive ion, then Br⁻ attacks it from either side. The product has an asymmetric C atom, so both enantiomers form in equal amounts (see the last topic). *(CvTE R2.4, R2.5, M1.18)*
- **Trap:** every step of a mechanism must be balanced in atoms and in charge, and the steps must add up to the overall equation, with the intermediates and any catalyst cancelling out.

## Catalyst

- In a mechanism, a catalyst takes part in one step and is formed again in a later step. It opens a route with a lower activation energy, and it doesn't appear in the overall equation ([C10](../../C-chemical-processes-and-conservation-laws/C10-activation-energy/notes.md)). *(CvTE R3.2, R2.4)*
- Example, a solid catalyst: in the hydrogenation of ethene on nickel or platinum, CH₂=CH₂ + H₂ → CH₃–CH₃, the H₂ molecules split into H atoms bound to the metal surface, the ethene molecules bind to the surface as well, and the H atoms add to them one at a time. Both H atoms come from the surface, so they add to the same side of the molecule. *(CvTE R3.2)*
- Models of an enzyme show how the substrate fits into the active position and which groups of the enzyme take part in the reaction ([E02](../../E-innovation-and-chemical-research/E02-selectivity-and-specificity/notes.md)). *(CvTE L2.1, L2.2)*
- **Trap:** a catalyst speeds up a reaction that can already run; it doesn't change ΔE or the position of an equilibrium. In a mechanism it is on the left in one step and on the right in a later step.

## Polymerisation, monomers and polycondensation

- Polymerisation (*polymerisatie*) links monomers (*monomeren*) into long chains. Monomers with a C=C bond give addition polymerisation, which runs by a radical mechanism of initiation, propagation and termination; monomers with two reactive groups, such as –OH, –COOH and –NH₂, give polycondensation (*polycondensatie*), in which every link splits off a small molecule, usually H₂O. Structures, mechanism and chain length are in [D03](../D03-chemical-synthesis/notes.md). *(CvTE R2.1, R2.2)*
- A monomer with both kinds of group can polycondense on its own. Lactic acid has an –OH and a –COOH group, so its molecules form ester bonds with each other into polylactic acid (PLA), a plastic made from plant material: n CH₃–CH(OH)–COOH → –(O–CH(CH₃)–CO)ₙ– + n H₂O. *(CvTE R2.1)*
- A model of a growing polyethene chain shows the radical at the chain end and the tetrahedral C atoms that make the chain zigzag. *(CvTE R2.2, M1.16)*
- **Trap:** a molecule with only one reactive group stops a polycondensation chain, because the chain end then has nothing left to react with. Long chains therefore need very pure monomers.

## Enantiomers and optical activity

- Enantiomers (*enantiomeren*, also *spiegelbeeldisomeren*) are two molecules that are each other's mirror image but can't be laid over each other, like a left and a right hand. They occur when a molecule has an asymmetric carbon atom (*asymmetrisch koolstofatoom*), a C atom with four different groups. Lactic acid, CH₃–CH(OH)–COOH, has one (its C2 carries H, OH, CH₃ and COOH), but propan-2-ol, CH₃–CH(OH)–CH₃, has none, because its C2 carries two CH₃ groups. More examples and how to count stereoisomers are in [E02](../../E-innovation-and-chemical-research/E02-selectivity-and-specificity/notes.md). *(CvTE M1.18)*
- Models make enantiomers visible: build both and try to lay one over the other. Swapping any two groups on the asymmetric C atom turns one enantiomer into the other. *(CvTE M1.18)*
- Optical activity (*optische activiteit*): a solution of one enantiomer rotates the plane of polarised light, light that vibrates in only one plane. The two enantiomers rotate it by the same angle in opposite directions, one clockwise, marked (+), and the other anticlockwise, marked (−). The angle is measured with a polarimeter.
- A racemic mixture (*racemisch mengsel*) contains equal amounts of the two enantiomers and doesn't rotate polarised light, because the two rotations cancel out. A reaction that makes an asymmetric C atom from substances without one, such as the addition of HBr above, gives a racemic mixture; enzymes, which are chiral themselves, usually make only one enantiomer.
- Enantiomers have the same melting point, boiling point and solubility, so ordinary separation methods can't separate them. They differ only in the direction in which they rotate polarised light and in how they interact with other chiral molecules, such as enzymes and receptors ([E02](../../E-innovation-and-chemical-research/E02-selectivity-and-specificity/notes.md)). *(CvTE M1.18)*
- **Trap:** a racemic mixture is optically inactive, although every molecule in it is chiral. And you can't tell from a structural formula whether an enantiomer turns the light clockwise (+) or anticlockwise (−); that has to be measured.

## CCVX versus the Dutch syllabus

- **In both:** reaction mechanisms, catalysts, polymerisation and enantiomers *(CvTE R2.1–R2.5, R3.2, M1.18)*. Molecular modelling itself is school-exam material in the Netherlands; the SLO text names the software (Avogadro, ChemSketch, Spartan) but no further concepts *(SLO D4)*.
- **CCVX only:** optical activity and racemic mixtures. The CvTE syllabus has enantiomers, but doesn't mention the rotation of polarised light.
