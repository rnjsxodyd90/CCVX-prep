# Plan for filling the folders

Each folder's `README.md` already lists its CCVX learning outcomes and its Dutch counterpart. For every outcome, add the official Dutch wording, open Dutch study text, English translations of both, notes, and past exam questions. [C02](C-chemical-processes-and-conservation-laws/C02-chemical-calculations/) is done this way and is the model for the rest.

## Sources

### Official Dutch documents (copies in `syllabus/`)

- **CvTE syllabus scheikunde vwo 2027** (version 4, April 2026): the official Dutch wording of everything in the central exam. Since 2025 it groups the content into *sferen*: M (materie), R (reacties), R&A (rekenen & analyse), T (technologie & duurzaamheid) and L (chemie van het leven). The "Dutch source" line in each folder names the matching sections. You may copy it unchanged with a source line. That permission doesn't cover translations, so the `spec.en.md` files are unofficial and for study only.
- **Omnummeringstabel**: maps the old codes that the CCVX syllabus still uses (B1.4, C2.1, …) to the new ones (M1.1, R&A1.2, …), and notes what was added or dropped.

### Other official sources

- [SLO handreiking schoolexamen, vakinhoudelijke subdomeinen vwo](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/): the official (non-binding) elaboration of the school-exam subdomains (C07–C10, D02, D04, E03–E05, F04, F05, G04, G05), with suggested contexts and sources. The [toelichting bij de eindtermen](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/toelichting/) does the same for domain A.
- Past central exams with their marking schemes (*correctievoorschrift*): [examenblad.nl](https://www.examenblad.nl/2026/vwo/vakken/exacte-vakken/scheikunde-vwo) for recent years, and the [NVON archive](https://nvon.nl/examenoverzicht-scheikunde-vwo) for many years, often with worked answers. Exams from 2016 on follow the current programme.
- CCVX example exams in English: [exam 1](https://www.ccvx.nl/VoorbeeldTentamensEngels/Voorbeeldtentamen%20scheikunde%201%20-%20EN.pdf) ([worked answers, Dutch](https://www.ccvx.nl/VoorbeeldTentamens/Voorbeeldtentamen%20scheikunde%201%20-%20Uitwerking.pdf)) and [exam 2](https://www.ccvx.nl/VoorbeeldTentamensEngels/Voorbeeldtentamen%20scheikunde%202%20-%20EN.pdf) ([worked answers, Dutch](https://www.ccvx.nl/VoorbeeldTentamens/Voorbeeldtentamen%20scheikunde%202%20-%20Uitwerking.pdf)). These are the closest thing to the real exam. CCVX also lists the [exam verbs](https://www.ccvx.nl/Handelingswerkwoorden%20-%20EN.html) it uses.

### Dutch learning material

- [Wikiwijs Stercollectie Scheikunde v456](https://maken.wikiwijs.nl/61171/Scheikunde_v456) (VWO 4–6) and [hv3](https://maken.wikiwijs.nl/82750/Scheikunde_hv3) (year 3, for `0-basic-knowledge`): free and built on the Nieuwe Scheikunde modules. Wikiwijs labels them CC BY-SA 4.0 but links that label to CC BY-NC-SA 4.0, so follow the stricter terms: credit VO-content, don't use them commercially, and put your translations under the same licence. The images aren't covered by the licence. The modules are mostly activities; their theory is often in attached Word files. Many attachments hold their key formulas as Word equation objects, which are lost when the text is copied out, so compare each copy with the original for gaps.
- *Chemie Overal*, VWO 4–6: the textbook series CCVX suggests. Study from it and write notes in your own words; don't copy its text.

### English material

- *Advanced Chemistry for You* (Lawrie Ryan, 2nd edition, ISBN 9781408527368): the English book CCVX suggests, with a [chapter-by-chapter reading guide](https://www.ccvx.nl/Advanced%20Chemistry%20-%20Reading%20Guide.html).
- [OpenStax Chemistry 2e](https://openstax.org/details/books/chemistry-2e): free online, CC BY-NC-SA 4.0. Its terms forbid feeding it into AI tools, so link to it or quote it rather than machine-translating it.
- Binas, English edition, for data. Table numbers differ between editions, so refer to tables by name.

## What goes in each folder

| File | Contents |
|---|---|
| `README.md` | the outcomes (already there), plus a list of the files below |
| `spec.nl.md` | the CvTE syllabus text for this folder, unchanged, with page numbers |
| `spec.en.md` | an English translation of it |
| `source/*.nl.md` | Stercollectie text, copied unchanged, with a header giving the source, the licence and the date |
| `source/*.en.md` | a full English translation of each, with errors in the original listed as errata |
| `notes.md` | English notes per outcome; every point cites the spec, a source file, Binas or an exercise, and each topic has a status |
| `exercises.md` | whole past exam questions (every part and figure): the original text, the complete official answers, English translations of both, and worked answers to the parts on this folder's topic |
| `img/` | the exam figures used in `exercises.md`, cropped from the exam PDFs |

## Steps for each folder

1. Read the outcomes in `README.md`. They're your checklist.
2. Copy the Dutch syllabus sections named under "Dutch source" into `spec.nl.md` and translate them into `spec.en.md`. Check the omnummeringstabel for anything added or dropped.
3. Find the Stercollectie sections on the topic and copy them unchanged into `source/`. Translate each in full, using the CCVX terms from the glossary below. Machine translation is fine as a first pass, then check every formula, charge, unit and number against the Dutch. Record mistakes in the original as errata in the translation and leave the Dutch file as published.
4. Add 3–5 past exam questions to `exercises.md`. Always copy a whole question: every part, every figure and the whole context, and the complete official answers. A CCVX question is everything under one question number; a central-exam question is the whole context (*opgave*) with all its numbered questions, plus anything on the answer sheet (*uitwerkbijlage*). Start with the CCVX example exams, then the central exams on Examenblad (file names follow `vw-1028-a-YY-T-o.pdf` for the questions, `-u.pdf` for the answer sheet and `-c.pdf` for the marking scheme, and also check the addendum, the *aanvulling*). For school-exam folders, use the SLO suggestions.
5. Check every number in the worked answers and the source examples by hand: redo each calculation, and check units and significant figures.
6. Write `notes.md`. Mark each topic *drafted* (spec only), *checked against source* or *checked against exam*.
7. A folder is done when every outcome is at least *checked against source* and has an exam question, or the notes say why there isn't one.

## Order

1. `0-basic-knowledge`, `B01` (names, formulas and ions; everything else depends on them) and `A08` (significant figures and calculator skills, which are marked in every calculation).
2. `C02` (calculations) and `C01` (equations, acids and bases, redox). Then sit CCVX example exam 1 to see where you stand.
3. `B02`–`B04` (bonds, structure and properties).
4. `C04`–`C06` (kinetics, equilibrium and pH, energy).
5. `D01`, `D03`, `E01`, `E02`, `G01` (analysis, polymers, biochemistry).
6. `C03`, `F01`–`F03`, `G02`, `G03` (industry, green chemistry, energy).
7. The school-exam-only folders. They're short concept lists; a page of notes each is enough.
8. Cover `A05`–`A15` along the way, since they're tested inside content questions. Skip `A01`–`A04`: they can't be tested in writing.

Finish with CCVX example exam 2 under exam conditions: 3 hours, Binas, non-graphing calculator.

If you're aiming for 26 November 2026, registration closes around 16 November and about four weeks remain. In that case, do steps 1–6 and both example exams, and only skim step 7.

## Where CCVX and the Dutch syllabus differ

The CCVX syllabus applies. Newer Dutch material may skip these topics, but CCVX still lists them:

- B3.2 (intermediate lattice types) and C1.5 (bonds broken in distillation and adsorption).
- F2.3 (including oil refining), F3.2 (fossil-fuel power generation), the environmental factors in F3.4, and the named plants and fuels in G3.
- In G1: urea, glycogen, deoxyribose/ribose and phosphates, tRNA and ribosomes, essential fatty acids. In G2: combined heat and power. In A10: chromosomes, ecosystem, heredity.

These are only in the Dutch syllabus, so they're low priority for CCVX: K<sub>s</sub> (solubility product), K<sub>v</sub> (partition), the Faraday constant, and naming compounds with two kinds of functional group.

Two traps in the CCVX PDF:

- Its numbering doesn't always match the old Dutch numbering that the omnummeringstabel uses. CCVX C1.9–C1.18 are old Dutch C1.8–C1.17, and CCVX F3.3–F3.5 are old Dutch F3.2–F3.4. Match by content.
- Under D2 (Safety) it prints C10's text by mistake. [D02-safety](D-development-of-chemical-knowledge/D02-safety/README.md) has the real outcome.

## Glossary for translating

The CCVX syllabus uses some unusual English. Use its terms in `notes.md` and the translations so they match the exam wording, and add the usual term where it helps.

| Dutch | CCVX English | Usual English |
|---|---|---|
| atoombinding | atomic bond / covalent bond | covalent bond |
| molecuulbinding, vanderwaalsbinding | Van der Waals bond / molecular bond | intermolecular (London) forces |
| waterstofbrug | hydrogen bridge | hydrogen bond |
| ionbinding | ion bond | ionic bond |
| chemische hoeveelheid | chemical quantity | amount of substance |
| verdelingsgraad | surface area of reacting substances | particle size, surface area |
| concentratiebreuk | reaction quotient | reaction quotient |
| K<sub>z</sub> | K<sub>z</sub> | K<sub>a</sub> |
| omringingsgetal | steric number | steric number |
| grensstructuren, mesomerie | resonance (mesomeric) structures | resonance structures |
| carbonzuren | carbon acids | carboxylic acids |
| alkylalkanoaten | alkoxy alkanoates | esters |
| ammoniak | ammonia | ammonia, NH₃ |
| ammonia | ammonia | aqueous ammonia, NH₃(aq) |
| natronloog | caustic soda | sodium hydroxide solution |
| reactiewarmte, vormingswarmte | heat of reaction, heat of formation | enthalpy of reaction, of formation (Dutch and CCVX write ΔE, not ΔH) |
| overmaat, ondermaat | excess, deficiency | excess, limiting reagent |
| actieve plaats | active position | active site |
| ijklijn | calibration line | calibration curve |

## Copyright

- If the repo becomes public, keep only your own notes, the credited Stercollectie text and its translations (under the same licence) and the unchanged CvTE syllabus with its source line. Remove the `spec.en.md` files, the exam quotes in `exercises.md` and the exam figures in `img/`, and replace the other PDFs (the CCVX syllabus, the omnummeringstabel) and any book content with links.
- In a private repo you can also keep exam text and figures and your translations of copyrighted text, for your own study.
