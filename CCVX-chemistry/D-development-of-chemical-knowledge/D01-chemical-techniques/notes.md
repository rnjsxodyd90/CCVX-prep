# D1 — Chemical Techniques: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

| Topic | Status |
|---|---|
| D1.1 Separation techniques | drafted |
| D1.2 Checking a separation | drafted |
| D1.3 Chromatography | drafted |
| D1.4 Gas chromatography and retention time | drafted |
| D1.5 Mass spectrometry | drafted |
| D1.6 Calculations with peak area and peak height | drafted |

## D1.1 Separation techniques

- A separation method (*scheidingsmethode*) uses a difference in one property between the components of a mixture. To choose a method, find the property in which the components differ most, and say which component has the higher or lower value. *(CvTE R&A2.2)*

| Method | Property used |
|---|---|
| Filtration (*filtreren*) | particle size |
| Settling (*bezinken*) and centrifuging (*centrifugeren*) | density |
| Distillation (*destilleren*) | boiling point |
| Concentration by evaporation (*indampen*) | boiling point: the solvent evaporates, the dissolved solid doesn't |
| Extraction and washing (*extraheren/wassen*) | solubility in the extraction solvent |
| Adsorption (*adsorberen*) | how strongly particles stick to a surface |

- Filtration: the mixture is poured through a filter. Solid particles that are too large to pass stay behind as the residue (*residu*), and the liquid that passes is the filtrate (*filtraat*). Example: sand and salt water; the salt stays dissolved and passes with the water. *(CvTE R&A2.1, R&A2.2)*
- Settling: in a suspension, solid particles that are denser than the liquid sink to the bottom, and the clear liquid can then be poured off (*decanteren*). Centrifuging speeds this up by spinning the tubes fast, which helps with particles that settle too slowly, such as blood cells in blood. *(CvTE R&A2.1, R&A2.2)*
- "Precipitation" in the CCVX list corresponds to settling (*bezinken*) in the Dutch list. A related step removes an unwanted ion with a precipitation reaction: add an ion that forms a poorly soluble salt with it, then filter off the solid. Example, phosphate from waste water with iron(III) ions: Fe³⁺(aq) + PO₄³⁻(aq) → FePO₄(s). Precipitation reactions are in [C07](../../C-chemical-processes-and-conservation-laws/C07-classification-of-reactions/notes.md). *(CvTE M3.10)*
- Distillation: a liquid mixture is heated, the component with the lowest boiling point evaporates first, and its vapour is cooled in a condenser and collected as the distillate (*destillaat*). It works when the boiling points differ enough, e.g. ethanol (boiling point about 78 °C) from water (100 °C). Crude oil is split into fractions in the same way in a column. *(CvTE R&A2.1, R&A2.2)*
- Concentration by evaporation: a solution is heated until the solvent has evaporated and the dissolved solid remains, e.g. salt from seawater. Use it when only the solid is wanted; distillation also recovers the solvent. *(CvTE R&A2.1, R&A2.2)*
- Extraction: a substance is dissolved out of a mixture with an extraction solvent (*extractiemiddel*) in which it dissolves well and the rest doesn't, such as making tea with hot water. Iodine can be extracted from water with hexane, which doesn't mix with water and dissolves the apolar iodine much better, and the two layers are separated in a separating funnel (*scheitrechter*). *(CvTE R&A2.1, R&A2.2, M3.7)*
- Washing is extraction used to remove an unwanted substance, e.g. rinsing a precipitate on a filter with water to remove dissolved ions, or passing a gas through a liquid that dissolves an impurity. *(CvTE R&A2.1)*
- Adsorption: particles stick to the surface of a solid, the adsorbent. Activated carbon (*actieve kool*) has a very large surface area and is used to remove coloured or smelly impurities from water or air. Polar substances stick best to a polar surface and apolar substances to an apolar one. *(CvTE R&A2.1, M3.8)*
- In a process, the choice also depends on what you want to keep, on energy costs (distillation uses a lot of heat) and on whether the solvent can be recovered, which is why industrial processes often combine several steps ([C08](../../C-chemical-processes-and-conservation-laws/C08-technological-aspects/notes.md)). *(CvTE R&A2.2, T1.3)*
- **Trap:** name the property and compare the values, e.g. "distillation, because ethanol has a lower boiling point than water", not "because the mixture is heated". And filtration can't separate a dissolved substance from its solvent.

## D1.2 Checking a separation

- After a separation, analysis shows whether it worked and to what extent: how pure the product is and how much of it was recovered. *(CvTE R&A2.1)*
- Melting point: a pure substance melts at one temperature (melting point, *smeltpunt*) and boils at one temperature (boiling point, *kookpunt*). A mixture melts over a temperature range (*smelttraject*) and boils over a range (*kooktraject*), and impurities usually lower the melting point. A sharp melting point at the value in the Binas tables of properties of substances shows a pure product. *(CvTE M2.2)*
- Chromatography: a pure substance gives one spot or one peak, and extra spots or peaks show impurities (D1.3, D1.4). *(CvTE R&A2.3)*
- Mass spectrometry: extra peaks in the mass spectrum compared with that of the pure substance show impurities (D1.5). *(CvTE R&A2.4)*
- Titration (*titratie*): a titration with an indicator (*indicator*) gives the chemical quantity of the substance in mol, from which the purity follows. Example: a 0.500 g sample of aspirin (C₉H₈O₄, M = 180.2 g mol⁻¹) needs 2.50·10⁻³ mol OH⁻, which reacts 1 : 1, CH₃COO–C₆H₄–COOH + OH⁻ → CH₃COO–C₆H₄–COO⁻ + H₂O. The sample contains 2.50·10⁻³ × 180.2 = 0.4505 g aspirin, so the purity is 0.4505 / 0.500 × 100 % = 90.1 %. Keep an extra digit in between and round only the final answer. *(CvTE R&A2.1, A8.3)*
- A reagent (*reagens*) shows whether a substance is still present. Example: to check that a precipitate has been washed free of chloride, add silver nitrate solution to the last wash water. If no white precipitate forms, Ag⁺(aq) + Cl⁻(aq) → AgCl(s) doesn't happen, so the chloride is gone. *(CvTE R&A2.1)*
- **Trap:** one spot with one solvent doesn't prove purity, because two substances can have the same R<sub>f</sub> value in that solvent. Repeat with another solvent or use a second method.

## D1.3 Chromatography

- In chromatography (*chromatografie*) a mobile phase (*mobiele fase*) carries the mixture along a stationary phase (*stationaire fase*). Each component is distributed between the two phases: its particles keep dissolving in the mobile phase and sticking to or dissolving in the stationary phase. Components that spend more time in the mobile phase move faster, so the components separate. *(CvTE R&A2.1, R&A2.2)*
- In paper chromatography the stationary phase is the paper (cellulose with water bound to it, which is polar), and the solvent (*loopvloeistof*) that rises through the paper is the mobile phase. Thin-layer chromatography (*dunnelaagchromatografie*) works the same way, with a thin layer of, for example, silica on a plate. *(CvTE R&A2.1)*
- The property differences are polarity, solubility in the mobile phase and adsorption to the stationary phase. A component whose particles form hydrogen bridges or dipole-dipole bonds with a polar stationary phase sticks to it and moves slowly; an apolar component in an apolar solvent moves almost with the solvent front. *(CvTE R&A2.2, M3.7, M3.8)*
- The R<sub>f</sub> value (*R<sub>f</sub>-waarde*) is the distance travelled by the spot divided by the distance travelled by the solvent front, both measured from the start line, so it lies between 0 and 1. Example: a spot at 3.2 cm with the front at 8.0 cm has R<sub>f</sub> = 3.2 / 8.0 = 0.40. *(CvTE R&A2.1, R&A2.3)*
- Under the same conditions (the same stationary phase, solvent and temperature) a substance always has the same R<sub>f</sub> value, so a spot is identified by running a pure reference substance next to it on the same plate. *(CvTE R&A2.3)*
- **Trap:** measure both distances from the start line where the spots were put, not from the edge of the paper. An R<sub>f</sub> value from a table only applies with the same solvent and stationary phase.

## D1.4 Gas chromatography and retention time

- In gas chromatography (*gaschromatografie*, GC) the sample is injected and vaporised, and an unreactive carrier gas such as helium or nitrogen, the mobile phase, carries it through a long, thin column coated on the inside with the stationary phase. A detector at the end records each component as it leaves, and the chromatogram shows the signal against time. *(CvTE R&A2.1, R&A2.3)*
- The retention time (*retentietijd*) is the time from injection until the top of a component's peak. Components that are attracted more strongly by the stationary phase, or that have a higher boiling point, stay longer in the column. Under fixed conditions (the same column, temperature and gas flow) the retention time is characteristic of a substance. *(CvTE R&A2.1, R&A2.3)*
- To show that a substance is present, compare the retention time of a peak with that of the pure substance measured under the same conditions. Adding some of the pure substance to the sample is another check: the peak grows and no new peak appears. *(CvTE R&A2.3)*
- **Trap:** the same retention time makes it likely, but doesn't prove, that it is the same substance, because two substances can leave the column at the same time. Combining GC with mass spectrometry (GC-MS) gives a mass spectrum of every peak, which identifies it with more certainty.

## D1.5 Mass spectrometry

- In a mass spectrometer (*massaspectrometer*) gaseous molecules are ionised, usually by fast electrons that knock an electron out of a molecule. That gives the positive molecular ion M⁺, and many molecular ions break into fragments: a positive ion and a neutral particle. Only the positive ions are detected, sorted by their mass-to-charge ratio m/z (*m/z-verhouding*); with a charge of 1+, m/z equals the mass of the ion in u. *(CvTE R&A2.1, R&A2.4)*
- A mass spectrum shows the relative abundance (*relatief voorkomen*) against m/z, with the highest peak set to 100 %. The peak with the highest m/z, apart from small isotope peaks, is usually the molecular ion and gives the molecular mass. *(CvTE R&A2.4)*
- Fragments form a characteristic pattern by which a substance is recognised: a peak at m/z 15 usually comes from CH₃⁺ and one at 77 from C₆H₅⁺, and a difference of 15 between two peaks often means a lost CH₃, of 17 a lost OH and of 18 a lost H₂O. Example, ethanol (M = 46 u): the highest peak is at m/z 31, from C₂H₅OH⁺ → CH₂OH⁺ + CH₃•, a loss of 46 − 31 = 15. *(CvTE R&A2.4)*
- Isotope patterns: natural chlorine is about 75.8 % ³⁵Cl and 24.2 % ³⁷Cl, about 3 : 1, and bromine about 50.7 % ⁷⁹Br and 49.3 % ⁸¹Br, about 1 : 1 (Binas table of isotopes). A compound with one Cl atom therefore shows two peaks 2 units apart with heights about 3 : 1, and one with one Br atom two peaks of about equal height. *(CvTE R&A2.1, R&A2.4)*
- Example: chloromethane gives molecular ion peaks at m/z 50 (CH₃³⁵Cl) and 52 (CH₃³⁷Cl) in a ratio of about 3 : 1. An unknown compound with peaks at 78 and 80 in a ratio of 3 : 1 contains one Cl atom; 78 − 35 = 43 is C₃H₇ (3 × 12 + 7 × 1), so the compound is C₃H₇Cl. *(CvTE R&A2.4)*
- With two Cl atoms there are three molecular ion peaks, at M, M + 2 and M + 4, in a ratio of 9 : 6 : 1, because (3 : 1)² gives 3 × 3 : 2 × 3 × 1 : 1 × 1. Br₂ shows peaks at 158, 160 and 162 in a ratio of 1 : 2 : 1. *(CvTE R&A2.4)*
- **Trap:** the highest peak is often a fragment, not the molecular ion. And a peak 2 units above the molecular ion of a chlorine or bromine compound comes from the heavier isotope, not from another substance.

## D1.6 Calculations with peak area and peak height

- In a chromatogram the peak area (*piekoppervlak*) is proportional to the amount of that substance. To find a concentration, measure standard solutions of known concentration, plot peak area against concentration as a calibration line (*ijklijn*), and read the concentration of the sample from its peak area. *(CvTE R&A2.1, R&A2.3)*
- Example: suppose four standards give these peak areas (in arbitrary units), which lie on a straight line through the origin with a slope of 1.52·10⁵ per g L⁻¹. *(CvTE R&A2.3)*

| Concentration (g L⁻¹) | Peak area |
|---|---|
| 0.100 | 1.52·10⁴ |
| 0.200 | 3.04·10⁴ |
| 0.300 | 4.56·10⁴ |
| 0.400 | 6.08·10⁴ |

- A sample with a peak area of 3.80·10⁴ then has c = 3.80·10⁴ / 1.52·10⁵ = 0.250 g L⁻¹, so 25.0 mL of it contains 0.250 × 0.0250 = 6.25·10⁻³ g of the substance. *(CvTE R&A2.3)*
- If a question says that the detector responds equally to all components, the percentage of each component is its peak area divided by the total area. Example: areas of 1.20, 3.60 and 0.20 give 24.0 %, 72.0 % and 4.0 % of the total of 5.00. *(CvTE R&A2.3)*
- In a mass spectrum the relative peak heights give the ratio of the ions. The M + 2 peak of a compound with one Cl atom is 24.2 / 75.8 = 0.319, about 32 %, of the height of the M peak. The isotope abundances also give the average atomic mass as a weighted average: 0.758 × 35 + 0.242 × 37 = 35.5 u, close to the Binas value of 35.45 u, which uses the exact isotope masses. *(CvTE R&A2.4, A8.6)*
- **Trap:** in a chromatogram, use the peak area, not the peak height, because peaks differ in width. A calibration line only holds for the substance and the conditions it was made with, because the detector responds differently to different substances.

## CCVX versus the Dutch syllabus

- **In both:** separation techniques and the properties they use, chromatography with retention times and peak areas, and mass spectrometry with fragments and peak heights *(CvTE R&A2.1–R&A2.4)*. The numbering differs: D1.1 and D1.3 became R&A2.2, with the terms in R&A2.1; D1.4 and D1.5 became the qualitative parts of R&A2.3 and R&A2.4, and D1.6 their quantitative parts. D1.2 is no longer a specification of its own but underlies R&A2.1–R&A2.3; it also uses melting ranges *(CvTE M2.2)*.
- **Dutch syllabus only:** the new Dutch list names the R<sub>f</sub> value, the stationary phase, the m/z ratio and the natural abundance of isotopes explicitly *(CvTE R&A2.1)*. It also has the mobile phase, titration, indicator and reagent, but CCVX lists those too, among the concepts of [A10](../../A-skills/A10-using-chemical-concepts/notes.md). These notes use all of them.
- **CCVX only:** "precipitation" in the list of D1.1, where the Dutch list has settling (*bezinken*). D1.1 covers both.
