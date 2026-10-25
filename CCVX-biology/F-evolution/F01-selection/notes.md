# F1 — Selection: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX syllabus, the Dutch CvTE syllabus and standard VWO biology, not yet checked against an open source text or exam question.

- **In Dutch VWO:** central exam (CE).
- **Dutch source:** [CvTE syllabus biologie vwo 2027](https://www.examenblad.nl/2027/vwo/documenten/syllabus-biologie-vwo-2027) (version 2, July 2025), M8 *Selectie* (M8.1–M8.4). A citation like *(CvTE M8.2 spec 1)* means specification 1 of M8.2; its numbers don't match the CCVX numbers.

Dutch terms are in brackets. Binas tables are named, not numbered, because the numbers differ between editions.

## F1.1 DNA

### 1. DNA as the universal carrier of genetic information

- In every cellular organism, prokaryote or eukaryote, the genetic information (*genetische informatie*) is stored in DNA (*DNA*) as the order of four bases: A, T, C and G. Only some viruses use RNA instead. *(CvTE M8.1 spec 1)*
- The genetic code (*genetische code*) is the key from base sequence to amino acid sequence: three bases, a codon in the mRNA, stand for one amino acid. Four bases give 4³ = 64 codons; pairs of bases would give only 4² = 16, too few for 20 amino acids. See the Binas table of the genetic code.
- Of the 64 codons, 61 code for amino acids and 3 (UAA, UAG, UGA) are stop codons. AUG codes for methionine and is also the start codon.
- So most amino acids have more than one codon: the code is degenerate (redundant). Leucine, for example, has six codons and tryptophan only one.
- The code is almost universal: the same codons mean the same amino acids in bacteria, plants, fungi and animals. There are small exceptions; in human mitochondria, for example, UGA codes for tryptophan instead of stop.
- Because the code is universal, a bacterium given a human gene makes the same human protein, such as insulin. The universal code is also regarded as evidence that all life has a common origin ([F04](../F04-genesis-of-life/README.md)).
- The genome (*genoom*) is all the DNA of an organism: about 3·10⁹ base pairs per haploid set in humans, and about 4.6·10⁶ base pairs in the circular chromosome of *E. coli*.
- The genotype (*genotype*) is the genetic information an individual carries (its alleles). The phenotype (*fenotype*) is its observable traits, which develop from genotype plus environment ([E03](../../E-reproduction/E03-reproduction-of-organisms/README.md)).
- **Trap:** the genetic code (what each codon means) is the same in almost all organisms, but the genetic information (the actual base sequence) differs between species and between individuals.

### 2. The same genetic information in different organisms

- All organisms descend from common ancestors, so many genes have been passed down and still occur, only slightly changed, in very different species. Examples are the genes for ribosomal RNA, for histones, for cytochrome c (a protein of the electron transport chain), and the Hox genes that lay out the body plan of animals. *(CvTE M8.1 spec 2)*
- The more recently two species shared an ancestor, the more of their DNA is the same: in comparable stretches, human and chimpanzee DNA differ in only about 1–2% of the bases.
- Within one organism, practically all body cells carry the same genome; cells differ in which genes are active ([C01](../../C-self-organization/C01-self-organization-of-cells/README.md)).
- The same genetic information can also move between unrelated species. Naturally, bacteria pass on genes horizontally, for example plasmids with antibiotic-resistance genes. Artificially, genetic modification puts the human insulin gene into bacteria or a bacterial insecticide gene into maize. See [E01](../../E-reproduction/E01-dna-replication/README.md) and [D01](../../D-interaction/D01-molecular-interaction/README.md).
- Identical twins and clones carry the same genetic information as each other.
- **Trap:** "the same gene" in two species usually means a homologous gene with a very similar sequence, not an identical one.

### 3. Kinship from DNA data

- In DNA analysis (*DNA-analyse*) the base sequence of the same gene, or the amino acid sequence of the same protein, is compared between species. The fewer the differences, the more recent their common ancestor and the closer their kinship (*verwantschap*). *(CvTE M8.1 spec 3)*
- The reason: after two populations split, each collects its own mutations, so the differences build up with time.
- If differences build up at a roughly constant rate, their number works as a molecular clock (*moleculaire klok*). Dated fossils calibrate the clock.
- A worked example with made-up sequences of the same 24-base stretch in four species:

| Species | Sequence |
|---|---|
| P | ATG GCC AAG TCC GAC TTG AAA GGT |
| Q | ATG GCC AAG TCC GAC CTG AAG GGT |
| R | ATG GCC AGG TTC GAC CTG GAA GGT |
| S | ATG GTT AAG TTC GGC CTG AAA GAT |

- Counting position by position gives the differences: P–Q 2; P–R and Q–R 4; P–S, Q–S and R–S 6. So P and Q are the closest relatives, R branched off before them, and S is the most distant.
- Using the clock: if fossils show that P and Q split 5 million years ago, then at a constant rate P and R split about 4/2 × 5 = 10 million years ago, and S branched off about 6/2 × 5 = 15 million years ago.
- Slowly changing genes, such as those for ribosomal RNA, are used for distant kinship, even between domains. Fast-changing DNA, such as mtDNA, is used for close relatives and for populations within one species.
- Turning such data into a cladogram is in [F02](../F02-speciation/README.md).
- **Trap:** the number of differences shows how closely species are related, not who descends from whom. Living species are cousins, not each other's ancestors (humans did not descend from chimpanzees). And the clock gives only an estimate, because rates differ between genes and lineages.

## F1.2 Mutation

### 1. Types of mutation

- A mutation (*mutatie*) is a permanent change in the DNA: in the base sequence, in the structure of a chromosome (*chromosoom*), or in the number of chromosomes. A mutation in a gene (*gen*) creates a new allele (*allel*). *(CvTE M8.2 spec 1)*
- A point mutation (*puntmutatie*) changes a single base pair, usually by substitution: one base pair replaced by another. Some books also call the insertion or deletion of one nucleotide a point mutation.
- A substitution can have three effects. A silent mutation gives a codon for the same amino acid, thanks to the degenerate code (often a change in the third base). A missense mutation gives a different amino acid. A nonsense mutation creates a stop codon, so the protein is cut short and usually doesn't work.
- An insertion (*insertie*) or deletion (*deletie*) adds or removes one or more base pairs. If that number isn't a multiple of three, the reading frame shifts: a frameshift mutation (*leesraamverschuiving*, *frame shift mutatie*). All codons after it are read wrongly, and often a stop codon soon follows.
- If three base pairs (or a multiple of three) are inserted or deleted, one amino acid is added or lost and the rest of the protein stays the same. The most common cystic fibrosis allele, for example, lacks three base pairs, so its protein misses one phenylalanine.
- A worked example in mRNA codons (read with the Binas table of the genetic code):

| Mutation | mRNA (5'→3') | Protein |
|---|---|---|
| none | AUG CCU GAG UAC AAA UAG | Met-Pro-Glu-Tyr-Lys-stop |
| silent: GAG → GAA | AUG CCU GAA UAC AAA UAG | Met-Pro-Glu-Tyr-Lys-stop |
| missense: GAG → GUG | AUG CCU GUG UAC AAA UAG | Met-Pro-Val-Tyr-Lys-stop |
| nonsense: UAC → UAA | AUG CCU GAG UAA AAA UAG | Met-Pro-Glu-stop |
| frameshift: A inserted after AUG | AUG ACC UGA GUA CAA AUA G | Met-Thr-stop |
| in-frame deletion: GAG removed | AUG CCU UAC AAA UAG | Met-Pro-Tyr-Lys-stop |

- The missense change GAG → GUG (glutamic acid → valine) is exactly the one behind sickle cell anaemia.
- Chromosome mutations (*chromosoommutaties*) change the structure of a chromosome. A piece can be lost (deletion), doubled (duplication), turned around (inversion) or moved to a non-homologous chromosome (translocation).
- In chronic myeloid leukaemia, for example, a translocation between chromosomes 9 and 22 (the Philadelphia chromosome) fuses two genes into a cancer-causing gene.
- A genome mutation (*genoommutatie*) changes the number of chromosomes. Aneuploidy is one chromosome too many or too few, such as trisomy 21 (Down syndrome, 47 chromosomes), 45,X or 47,XXY, usually caused by non-disjunction (*non-disjunctie*) in meiosis. Polyploidy is one or more whole extra sets ([E03](../../E-reproduction/E03-reproduction-of-organisms/README.md)).
- Only mutations in cells that give rise to gametes are passed on to offspring. Mutations in body cells (somatic mutations) affect only that person, as in skin cancer.
- **Trap:** a frameshift needs an insertion or deletion of a number of bases that isn't a multiple of three; a substitution never shifts the reading frame.

### 2. Causes of mutation

- Mutations arise spontaneously, mainly through rare errors in DNA replication that escape the proofreading of DNA polymerase, and through spontaneous chemical damage to bases. *(CvTE M8.2 spec 2)* Replication is in [E01](../../E-reproduction/E01-dna-replication/README.md).
- Mutagenic radiation (*mutagene straling*) raises the mutation rate. See the Binas table of the electromagnetic spectrum.
  - Ionizing radiation (X-rays, gamma rays and the radiation from radioactive substances) breaks DNA strands, sometimes both strands at the same spot.
  - UV radiation in sunlight links neighbouring bases on one strand, typically two thymines (a thymine dimer), which disrupts replication. That's why sunburn raises the risk of skin cancer.
- Mutagenic substances (*mutagene stoffen*) react with DNA or disturb its copying. Examples are benzo[a]pyrene in tobacco smoke and charred food, aflatoxin from moulds on badly stored nuts and grain, mustard gas, and substances that slip in between the base pairs, such as the lab dye ethidium bromide. Many mutagens are also carcinogenic (*kankerverwekkend*).
- The DNA repair system (*DNA-repairsysteem*) checks and repairs DNA all the time:
  - DNA polymerase proofreads during replication, and mismatch repair fixes wrongly paired bases that slip through.
  - Excision repair cuts out a damaged stretch, such as a thymine dimer. DNA polymerase then fills the gap using the other strand as template, and DNA ligase seals it.
  - Broken strands are joined again.
- If the repair system itself fails, mutations pile up. People with xeroderma pigmentosum can't repair UV damage and get skin cancer young; inherited defects in the repair genes *BRCA1* and *BRCA2* raise the risk of breast and ovarian cancer.
- When the damage is too great, the protein p53 stops the cell cycle or makes the cell kill itself (apoptosis) ([E02](../../E-reproduction/E02-cell-life-cycle/README.md)).
- Genetic modification (*genetische modificatie*) changes DNA on purpose, by inserting a gene or by editing with CRISPR-Cas9. Breeders also use mutation breeding: they treat seeds with radiation or chemicals to cause random mutations, then select useful plants.
- **Trap:** a mutagen raises the chance of mutations, but it doesn't choose which gene mutates or whether the result is useful.

### 3. Mutations can affect the phenotype

- A mutation in a coding sequence can change the mRNA, then the amino acid sequence, then the folding and function of the protein, and so the phenotype. *(CvTE M8.2 spec 3)* Protein synthesis is in [B01](../../B-self-regulation/B01-protein-synthesis/README.md).
- In sickle cell anaemia, one substitution (codon GAG → GUG) puts valine in place of glutamic acid in the β-chains of haemoglobin. At low O₂ these haemoglobin molecules clump into fibres. The red blood cells turn sickle-shaped, break down (anaemia) and block small blood vessels.
- Many mutations don't change the phenotype at all:
  - silent mutations;
  - mutations in non-coding DNA, which is most of the human genome ([C01](../../C-self-organization/C01-self-organization-of-cells/README.md));
  - a recessive mutant allele in a heterozygote, where the normal allele still makes enough protein;
  - mutations in genes that aren't active in that cell type.
- Mutations in regulatory DNA change how much protein is made, or when. In many Europeans, a mutation in a regulatory region near the lactase gene keeps lactase production switched on in adults, so they can digest milk (lactase persistence). Gene regulation is in [D01](../../D-interaction/D01-molecular-interaction/README.md).
- Most mutations that change a protein are harmful or neutral. A few are beneficial in a particular environment: antibiotic resistance in bacteria, or lactase persistence where people drink milk.
- Somatic mutations can turn proto-oncogenes into oncogenes or switch off tumour suppressor genes, and so cause cancer, but they aren't inherited ([E02](../../E-reproduction/E02-cell-life-cycle/README.md)).
- **Trap:** a changed base doesn't always change the protein, and a changed protein doesn't always change the visible phenotype.

### 4. Mutations happen by chance

- Mutations happen by chance (*per toeval*): where a mutation occurs and what it does has nothing to do with whether the organism needs it. Only afterwards does selection decide, through the survival chance (*overlevingskans*) and reproduction of the carriers, whether a mutation becomes more common. *(CvTE M8.2 spec 4)*
- Experiments with bacteria in the 1940s and 1950s showed this: mutants resistant to a virus or an antibiotic were already present before the bacteria had ever met that virus or antibiotic.
- So an antibiotic doesn't cause resistance mutations. It kills the sensitive bacteria, and the resistant mutants that were already there survive and multiply (selection, [F02](../F02-speciation/README.md)).
- Mutagens and stress can raise the overall mutation rate, but they still don't steer mutations towards useful ones.
- **Trap:** "the bacteria mutated because of the antibiotic" is wrong: the antibiotic selected resistant mutants that already existed.

## F1.3 Recombination

### 1. Unique gametes through recombination

- Recombination (*recombinatie*) is the formation of new combinations of alleles. In sexual reproduction (*geslachtelijke voortplanting*) it happens during meiosis (*meiose*) in two ways: whole chromosomes are shuffled, and parts of chromosomes are swapped. *(CvTE M8.3 spec 1)* Meiosis step by step is in [E02](../../E-reproduction/E02-cell-life-cycle/README.md).
- Homologous chromosomes (*homologe chromosomen*) are the two chromosomes of a pair, one from the father and one from the mother. They have the same size, shape and genes in the same order, but possibly different alleles.
- Humans have 22 pairs of autosomes (*autosomen*) and one pair of sex chromosomes (*geslachtschromosomen*), XX or XY. X and Y can pair only through small matching end regions.
- The karyotype (*karyotype*) is the complete set of chromosomes of a cell, described by number, size and shape. Arranged in pairs in a photo, it's called a karyogram (*karyogram*).
- A normal man's karyotype is 46,XY and a woman's 46,XX; Down syndrome shows 47 chromosomes with three copies of chromosome 21. Karyograms reveal genome mutations, large chromosome mutations and the sex.
- Whole chromosomes are shuffled in metaphase I: each pair of homologues lines up independently of the other pairs, so each gamete gets a random mix of paternal and maternal chromosomes.
- With n pairs there are 2ⁿ combinations. Three pairs (A/a, B/b, C/c) give eight kinds of gametes: ABC, ABc, AbC, Abc, aBC, aBc, abC and abc. A human has 23 pairs, so 2²³ ≈ 8.4·10⁶ combinations per gamete.
- Random fertilization then combines one of 2²³ kinds of egg with one of 2²³ kinds of sperm cell: 2⁴⁶ ≈ 7.0·10¹³ possible combinations, before crossing-over is even counted.
- Parts are swapped in prophase I by crossover (crossing-over, *crossing-over*): the homologues pair up, and non-sister chromatids exchange matching pieces at points called chiasmata. The result is chromosomes with new combinations of alleles of linked genes (*gekoppelde genen*), genes on the same chromosome that would otherwise always be inherited together.
- The further apart two linked genes lie, the more often a crossover separates them; the recombination frequency is in [E03](../../E-reproduction/E03-reproduction-of-organisms/README.md).
- A haplotype (*haplotype*) is the combination of alleles on one chromosome, or one stretch of it, that is inherited as a block.
- The Y chromosome hardly recombines and mtDNA practically doesn't, so each is passed on as one haplotype, from father to son and from mother to children, changed only by mutations. That's why they're used to trace family lines and human migrations.
- So every gamete carries a complete haploid genome (*genoom*), but with a unique mix of paternal and maternal parts. Apart from identical twins, every person is genetically unique.
- **Trap:** crossing-over takes place between non-sister chromatids of homologous chromosomes in prophase I of meiosis, not between the identical sister chromatids and not in ordinary mitosis.

## F1.4 Genetic Variation

### 1. Variation from mutation and recombination

- Genetic variation (*genetische variatie*) is the set of differences in alleles and genotypes between the individuals of a population. The gene pool (*genenpool*) is the total of all alleles of all individuals in a population at one moment. *(CvTE M8.4 spec 1)*
- Mutation is the only source of new alleles. Recombination (independent assortment, crossing-over and random fertilization) makes new combinations of existing alleles every generation, and so new genotypes and phenotypes. In bacteria, horizontal gene transfer adds genes from other strains or species.
- CCVX says these processes "increase" variation, whereas the Dutch syllabus says they "maintain" it (*in stand gehouden*). Both are true: selection and genetic drift remove variation, while mutation and recombination keep supplying it ([F02](../F02-speciation/README.md)).
- Variation is the raw material for natural selection. Individuals whose genotype suits the environment better leave more offspring, so over generations the population adapts.
- Adaptation (*aanpassing*) is that process, and also the inherited trait that results from it, such as the thick winter fur of an arctic fox.
- Inbreeding (*inteelt*) is mating between relatives. Relatives share many alleles, so their offspring are more often homozygous. Rare harmful recessive alleles then show up more often (inbreeding depression), and variation in the population drops.
- Self-fertilization is the extreme case. An Aa plant that keeps fertilizing itself halves the fraction of heterozygotes every generation (1/2, 1/4, 1/8, …), so after 5 generations only 1/32 ≈ 3% of its descendants are heterozygous.
- Hereditary disorders in some pedigree dog breeds are a well-known result of inbreeding. Zoos counter it in their small populations with breeding programmes that exchange animals between zoos.
- **Trap:** recombination doesn't create new alleles, only new combinations; new alleles come only from mutation.

### 2. Desired gene combinations through genetic modification

- Genetic modification changes an organism's DNA directly in the lab, instead of by crossing and selection. It can put a desired gene into another organism or switch a gene off. *(CvTE M8.4 specs 2–3)*
- Recombinant DNA technology (*recombinant-DNA-technologie*) is how bacteria were made to produce human insulin:
  - Obtain the gene. Either cut it out with a restriction enzyme, which cuts at one specific base sequence and often leaves "sticky ends", or copy the mRNA into cDNA with reverse transcriptase. Bacteria can't remove introns, so the intron-free cDNA is used.
  - Cut a plasmid with the same restriction enzyme, so the ends match, and join gene and plasmid with DNA ligase. The result is a recombinant plasmid.
  - Put the plasmids into bacteria (transformation) and select the bacteria that took one up, for example with an antibiotic-resistance gene on the plasmid as a marker.
  - Grow those bacteria in fermenters, where they make the human protein.
- Plasmids, restriction enzymes and cDNA are in [B01](../../B-self-regulation/B01-protein-synthesis/README.md); introns in [C01](../../C-self-organization/C01-self-organization-of-cells/README.md).
- Plants are often modified with the bacterium *Agrobacterium tumefaciens*, which naturally inserts part of its plasmid into plant DNA. In animals, DNA can be injected into a fertilized egg cell.
- With CRISPR-Cas9, a guide RNA leads the enzyme Cas9 to a chosen DNA sequence, where it cuts. When the cell repairs the cut, the gene may be switched off, or, if a template is supplied, changed into a desired sequence.
- A transgenic (*transgeen*) organism has received a gene from a species it can't naturally cross with. Bt maize carries an insecticide gene from the bacterium *Bacillus thuringiensis*, and insulin-producing bacteria carry a human gene.
- A cisgenic (*cisgeen*) organism has received a gene from its own species or a crossable relative. An example is potatoes given resistance genes against late blight (*aardappelziekte*, caused by *Phytophthora*) from wild potato species. The terms are also in [D01](../../D-interaction/D01-molecular-interaction/README.md).
- Compared with classical breeding, GM is faster and transfers one known gene, so no unwanted genes come along with it; transgenic modification can also cross the species barrier. Classical breeding needs crossable parents and many generations of selection.
- **Trap:** transgenic versus cisgenic is about where the gene comes from, not about the technique; both are genetic modification.

## Specimen contexts

- Health (doctors in Japan sequencing radiation-induced mutations): ionizing radiation damages DNA, including double-strand breaks, and the number of mutations rises with the dose. Sequencing the DNA of exposed people or cells and comparing it with unexposed controls shows how many extra mutations each dose causes, which underpins protection advice: limit the time, keep your distance and use shielding. Uses F1.2.1–F1.2.3.
- Food production (plant breeders and taxonomists at a genetic resources institute): gene banks store seeds of old varieties and wild relatives of crops as a reservoir of alleles for pest resistance or flavour; in the Netherlands, the Centre for Genetic Resources (CGN) in Wageningen does this. Taxonomy shows which wild species are close enough to cross with the crop or to supply cisgenic genes. Breeders then combine the desired alleles by crossing and selection, mutation breeding or genetic modification. Uses F1.1.3, F1.3.1 and F1.4.

## CCVX versus the Dutch syllabus

- **In both:** DNA and the genetic code, kinship from DNA analysis, the types and causes of mutation, DNA repair, effects on the phenotype, the randomness of mutation, recombination in meiosis (homologous chromosomes, linked genes, crossing-over, haplotype), the gene pool, genetic variation and genetic modification.
- **Dutch syllabus only:** frameshift mutation (*leesraamverschuiving*, M8.2 spec 1), survival chance (*overlevingskans*, M8.2 spec 4), adaptation (*aanpassing*) and inbreeding (*inteelt*) (M8.4 spec 1), and recognising recombinant DNA technology, cisgenic and transgenic (M8.4 spec 3). The notes cover all of them.
- **CCVX only:** karyotype (not in M8.3), and in F1.4.1 variation being "increased" where the Dutch syllabus says "maintained".
