# A7 — Modelling: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. *(SLO A7)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/domein-vaardigheden/), which gives an older Dutch wording close to that of the CCVX syllabus.

| Topic | Status |
|---|---|
| A7.1 Relevant quantities and relationships | drafted |
| A7.2 Assumptions and simplifications | drafted |
| A7.3 Choosing a suitable model | drafted |
| A7.4 Estimating parameter values and margins of error | drafted |
| A7.5 Verifiable expectations | drafted |
| A7.6 Evaluating a model | drafted |
| A7.7 Presenting a model study | drafted |

## A7.1 Relevant quantities and relationships

- A model (*model*) is a simplified picture of reality, in words, a drawing, a diagram or formulas, used to describe, explain or predict. Modelling (*modelvorming*) starts by picking out the quantities or parameters (*grootheden*) and relationships that matter and leaving out the rest. *(CvTE A7.1)*
- Example: for "how much ammonia is there in the reactor at equilibrium?" the relevant quantities are the starting amounts, the volume, the temperature and the equilibrium constant K, linked by the equilibrium condition K = [NH₃]² / ([N₂] × [H₂]³) for N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g). The shape or colour of the reactor doesn't matter. See [C05](../../C-chemical-processes-and-conservation-laws/C05-chemical-equilibrium/notes.md).
- **Trap:** a context text often contains numbers you don't need; decide which relationship you are using before you pick data.

## A7.2 Assumptions and simplifications

- You reduce a problem to a question you can research or calculate (*onderzoekbare vraagstelling*) by making assumptions (*aannames*) and simplifications (*vereenvoudigingen*), and you state them. *(CvTE A7.2)*
- Common ones in chemistry: every gas has the same molar volume (24.5 L mol⁻¹ at 298 K and p₀), i.e. gases behave ideally; a reaction runs to completion (*aflopende reactie*); a weak acid such as acetic acid ionises so little that [CH₃COOH] stays equal to the starting concentration; a dilute solution has the density of water; all the heat of a reaction goes into the water; volumes simply add up on mixing.
- Every assumption limits where the answer holds: real gases deviate from the molar volume at high pressure, and the weak-acid shortcut breaks down when the acid is less weak or very dilute.
- **Trap:** using a simplification without saying so; when a question asks for your assumptions, name them.

## A7.3 Choosing a suitable model

- Pick the model that suits the purpose, and know how it differs from reality and where it stops being valid: its range of validity (*geldigheidsgebied*). A model can be physical (a ball-and-stick model), schematic (a block diagram, see [F01](../../F-industrial-chemical-processes/F01-industrial-processes/notes.md)) or mathematical (a K expression, a rate formula). *(CvTE A7.3, A7.4, A7.5)*
- Particle model (*deeltjesmodel*): substances consist of moving particles with bonds between them; it explains phases, phase transitions, dissolving and diffusion. See [B03](../../B-substances-and-materials/B03-bonds-and-properties/notes.md).
- Collision model (*botsende-deeltjesmodel*): particles react only when they collide with enough energy; it explains how concentration, temperature, surface area and a catalyst change the rate. See [C04](../../C-chemical-processes-and-conservation-laws/C04-reaction-kinetics/notes.md).
- Equilibrium model: in a closed system the forward and the reverse reaction carry on at the same rate (dynamic equilibrium, *dynamisch evenwicht*); K fixes the position, and comparing the reaction quotient Q with K predicts the shift. See [C05](../../C-chemical-processes-and-conservation-laws/C05-chemical-equilibrium/notes.md).
- Shell model of the atom: explains valence and the octet rule, but not the shapes of molecules, for which you need VSEPR. See [B01](../../B-substances-and-materials/B01-particle-models/notes.md) and [B04](../../B-substances-and-materials/B04-bonds-structures-and-properties/notes.md).
- **Trap:** using a model outside its range: the collision model explains how fast an equilibrium is reached, not where it lies.

## A7.4 Estimating parameter values and margins of error

- A model parameter, such as K<sub>z</sub>, can be estimated from measured data (a reasoned estimate, *beargumenteerde schatting*), and the uncertainty of the data gives a margin of error (*foutmarge*) for it. *(CvTE A7.5)*
- Example: suppose you measure pH 2.87 for 0.100 M acetic acid. Then [H₃O⁺] = 10<sup>−2.87</sup> = 1.349·10⁻³ mol L⁻¹ (not rounded yet) and K<sub>z</sub> = (1.349·10⁻³)² / (0.100 − 1.349·10⁻³) = 1.8·10⁻⁵.
- If the pH is only known to ±0.01, it lies between 2.86 and 2.88, and K<sub>z</sub> lies between 1.76·10⁻⁵ and 1.93·10⁻⁵: about ±5%. The margin is that large because the pH scale is logarithmic and [H₃O⁺] appears squared.
- **Trap:** a parameter can't be more certain than the data it comes from; give it no more significant figures than they allow (see [A08](../A08-scientific-instruments/notes.md)).

## A7.5 Verifiable expectations

- A useful model predicts (*voorspellen*) something you can check by experiment, a verifiable expectation (*toetsbare verwachting*), including the direction and, where possible, the size of the effect. *(CvTE A7.7)*
- Equilibrium model: adding Fe³⁺ to the red equilibrium mixture Fe³⁺(aq) + SCN⁻(aq) ⇌ FeSCN²⁺(aq) makes Q smaller than K, so the equilibrium shifts to the right and the colour gets darker.
- Weak-acid model: [H₃O⁺] ≈ √(K<sub>z</sub> × c), so diluting a weak acid 10 times lowers [H₃O⁺] by a factor √10 and raises the pH by about 0.5, while for a strong acid the pH rises by 1.0. The full calculation agrees: 0.10 M acetic acid has pH 2.88 and 0.010 M acetic acid pH 3.38.
- **Trap:** "the colour changes" can't be refuted; say which way and, if you can, by how much.

## A7.6 Evaluating a model

- Evaluating a model (*een model toetsen en beoordelen*) means comparing its results with your expectations and with measurements. Where they disagree, find out why, then adjust or extend the model or narrow its range of validity. *(CvTE A7.3, A7.8)*
- Example: the shortcut √(K<sub>z</sub> × c) gives pH 2.87 for 0.10 M acetic acid and the full equation gives 2.88. That is close enough here, but the gap grows for less weak acids and very dilute solutions, where you need the full equation (see [A08](../A08-scientific-instruments/notes.md)).
- Atomic models were revised in exactly this way whenever new measurements didn't fit; see [A15](../A15-development-of-chemical-knowledge/notes.md).

## A7.7 Presenting a model study

- Presenting (*presenteren*) a model study: give the purpose, the assumptions, the model itself (diagram or formulas), the results, the comparison with data and the limits of the model. *(CvTE A7.9)*
- The CvTE text prints this specification in grey italics: school exam only.

## CCVX versus the Dutch syllabus

- **In both:** the end term. The CCVX items follow the older Dutch wording *(SLO A7)*; the 2027 CvTE text rewrote A7 into nine specifications, so the codes above match by content, not by number.
- **Dutch syllabus only:** naming similarities and differences between a model and reality to find its range of validity (A7.3), judging how well a model fits its purpose (A7.4), choosing a physical, schematic or mathematical representation (A7.5), and proposing improvements or extensions (A7.8).
- **CCVX only:** estimating margins of error for model parameters (item 4); the 2027 text only says "quantify where necessary" (A7.5).
- **Dutch central exam:** A7.6 (setting up or adjusting a model) and A7.9 (presenting) are printed in grey italics, so only the school exam tests them.
