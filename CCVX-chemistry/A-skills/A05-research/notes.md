# A5 — Research: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. *(SLO A5)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/domein-vaardigheden/), which gives an older Dutch wording close to that of the CCVX syllabus.

| Topic | Status |
|---|---|
| A5.1 Recognising and specifying a problem | drafted |
| A5.2 Research questions | drafted |
| A5.3 Linking the question to theory | drafted |
| A5.4 Hypothesis and expectations | drafted |
| A5.5 Work plan and variables | drafted |
| A5.6 Observations and measurements | drafted |
| A5.7 Processing and presenting data | drafted |
| A5.8 Conclusions | drafted |
| A5.9 Evaluation: validity, precision, reproducibility, reliability | drafted |
| A5.10 Presenting a study | drafted |

## A5.1 Recognising and specifying a problem

- A scientific problem (*natuurwetenschappelijk probleem*) is a question about nature that observations or measurements can answer. Specifying it means saying exactly which system, which quantity and which conditions it is about. *(CvTE A5.1)*
- Running example for this page: magnesium ribbon dissolves faster in warm hydrochloric acid than in cold acid. Specified: the problem is how the temperature of the acid affects the rate of this reaction: Mg(s) + 2 H₃O⁺(aq) → Mg²⁺(aq) + H₂(g) + 2 H₂O(l).
- In a written exam, A5 is tested on a described experiment: you are asked for the variables, a missing step in the plan, a conclusion or a point of criticism. Doing and presenting the research yourself is school-exam work (A5.6 and A5.10). The same skills are applied in [E05](../../E-innovation-and-chemical-research/E05-research-and-design/notes.md).
- **Trap:** a problem like "is magnesium dangerous?" is too vague to research, because it names no quantity you can measure.

## A5.2 Research questions

- A research question (*onderzoeksvraag*) turns the problem into one question that a study can answer. It names what you change and what you measure, over a range you can test. *(CvTE A5.2)*
- Example: "How does the time needed for 0.050 g of magnesium ribbon to react completely with 50.0 mL of 1.0 M hydrochloric acid change between 20 °C and 40 °C?"
- A large problem can be split into several research questions, each with its own experiment, for example one about temperature and one about concentration.
- **Trap:** a yes/no question ("does temperature matter?") is a weak research question; ask how one quantity depends on another.

## A5.3 Linking the question to theory

- Before planning, connect the question to known theory: which concepts explain or predict the result? *(CvTE A5.3)*
- Here that is the collision model (*botsende-deeltjesmodel*): at a higher temperature the particles move faster, collide more often, and a larger share of the collisions has at least the activation energy, so the rate goes up. See [C04](../../C-chemical-processes-and-conservation-laws/C04-reaction-kinetics/notes.md).
- The theory also tells you what else affects the rate and must be kept constant: the concentration of H₃O⁺ and the surface area of the magnesium (*verdelingsgraad*).

## A5.4 Hypothesis and expectations

- A hypothesis (*hypothese*) is a provisional answer to the research question, with a reason taken from theory. An expectation (*verwachting*) is what you should then observe or measure, stated so that the experiment could show it to be wrong. *(CvTE A5.4)*
- Hypothesis: "the reaction is faster at a higher temperature, because the particles collide more often and with more energy." Expectation: "the magnesium will be gone sooner at 30 °C than at 20 °C, and sooner still at 40 °C."
- **Trap:** "the time will be shorter at 40 °C" is an expectation (a measurable result), not a hypothesis (an explanation).

## A5.5 Work plan and variables

- A work plan (*werkplan*) lists the materials, the method step by step, what you measure and how often, and the safety measures, in enough detail that someone else could repeat the study. *(CvTE A5.5)*
- The independent variable (*onafhankelijke variabele*) is the one you change on purpose: the temperature. The dependent variable (*afhankelijke variabele*) is the one you measure: the reaction time t. The controlled variables (*constante variabelen*) are kept the same: the mass and length of ribbon, the volume and concentration of the acid, and the stirring.
- Keep the acid in excess (*overmaat*) so its concentration hardly changes: 0.050 g Mg is 2.1·10⁻³ mol and needs 4.1·10⁻³ mol H₃O⁺, while 50.0 mL of 1.0 M acid contains 0.050 mol, about 12 times as much. See [C02](../../C-chemical-processes-and-conservation-laws/C02-chemical-calculations/notes.md).
- Plan enough measurements: at least three temperatures (e.g. 20, 30 and 40 °C), each done three times. Safety: wear goggles against acid splashes; the hydrogen formed (about 50 mL at 298 K) is flammable.
- CCVX adds "by means of verification or falsification": design the experiment so that its result can confirm or refute (*falsificeren*) the expectation. A confirmed expectation supports the hypothesis but never proves it; one clear contradiction refutes it.
- **Trap:** changing two variables at once (warmer and more concentrated acid) makes it impossible to tell which one caused the effect.

## A5.6 Observations and measurements

- Carry out the plan, measure carefully, and write down every result straight away with its unit and with all the digits the instrument gives (see [A08](../A08-scientific-instruments/notes.md)). Also note what you didn't plan to see, such as bubbles collecting on the ribbon or the ribbon floating up. *(CvTE A5.6)*
- Repeat each measurement, and check the temperature at the start and at the end: the reaction is exothermic and warms the acid a little.
- The CvTE text prints this specification in grey italics, so the Dutch central exam doesn't test it; only the school exam does.

## A5.7 Processing and presenting data

- Processing (*verwerken*) turns raw data into a form that answers the question: means, derived quantities, a table and a graph. *(CvTE A5.7)*
- Suppose the measured times are 81.6, 78.9 and 80.1 s at 20 °C, 45.3, 46.1 and 44.9 s at 30 °C, and 24.8, 25.6 and 25.2 s at 40 °C. The same amount of magnesium reacts each time, so the average rate is proportional to 1/t:

| T (°C) | mean t (s) | 1/t (s⁻¹) |
|---|---|---|
| 20 | 80.2 | 1.25·10⁻² |
| 30 | 45.4 | 2.20·10⁻² |
| 40 | 25.2 | 3.97·10⁻² |

- In a graph, put the independent variable on the horizontal axis and the dependent variable (here 1/t) on the vertical axis, each with quantity and unit, and draw a smooth line through the points instead of joining the dots.
- **Trap:** a mean gets no more digits than the measurements: the mean of 81.6, 78.9 and 80.1 s is 80.2 s.

## A5.8 Conclusions

- A conclusion (*conclusie*) answers the research question in one or two sentences, based only on your own results and only within the range you tested. *(CvTE A5.8)*
- Example: "Between 20 °C and 40 °C the reaction time fell from 80.2 s to 25.2 s: 20 °C warmer made the reaction about 3.2 times as fast. This agrees with the hypothesis."
- **Trap:** don't extrapolate beyond the data ("at 100 °C it will be ten times as fast"), and don't write that the hypothesis is proved.

## A5.9 Evaluation: validity, precision, reproducibility, reliability

- Evaluating (*evalueren*) means judging how well the study was done and how far its conclusion can be trusted. *(CvTE A5.9)*
- Validity (*validiteit*): did you measure what the question is about? If the oxide layer on the ribbon varies from piece to piece, or the acid warms up during the reaction, the times show more than the effect of temperature, and the validity drops. Sanding the ribbon and measuring the temperature during the run help.
- Dutch texts use *nauwkeurigheid* for both accuracy and precision, so keep them apart. Accuracy (*juistheid*) is how close a result is to the true value; precision (*precisie*) is how close repeated measurements are to each other. Three times that differ by at most 2.7 s at 20 °C are precise. A thermometer that reads 2 °C too high gives precise but inaccurate temperatures.
- Random errors (*toevallige fouten*) scatter results both ways and shrink by repeating and averaging. Systematic errors (*systematische fouten*) shift every result the same way and don't shrink by repeating.
- Reproducibility (*reproduceerbaarheid*): would someone else, following the same work plan, get the same results? That needs a complete plan and well-controlled variables.
- Reliability (*betrouwbaarheid*): how far the results and the conclusion can be trusted. It depends on enough repeats, a small spread, no systematic errors and a valid set-up.
- **Trap:** many repeats with little spread make a result precise, not accurate: a systematic error stays.

## A5.10 Presenting a study

- A research report (*onderzoeksverslag*) usually has an introduction (problem, research question, hypothesis), a method (work plan, variables, materials), results (tables and graphs), a conclusion and a discussion (evaluation and suggestions for further research). A poster or a talk follows the same order. *(CvTE A5.10)*
- The CvTE text prints this specification in grey italics: school exam only.

## CCVX versus the Dutch syllabus

- **In both:** items 1–10, which match CvTE A5.1–A5.10 one to one.
- **Dutch syllabus only:** A5.11, explaining that research needn't be an experiment (other approaches are, for example, a literature study, observing without intervening, or a model calculation), and A5.12, describing what research yields in terms of uncertainty (*onzekerheid*) and probability (*waarschijnlijkheid*): a result is never completely certain.
- **CCVX only:** "by means of verification or falsification" in item 5, and reproducibility as a separate concept in item 9. The 2027 Dutch text names only *nauwkeurigheid, validiteit en betrouwbaarheid*; the older Dutch wording also has *reproduceerbaarheid*, but neither Dutch text has verification or falsification. *(SLO A5)*
- **Dutch central exam:** A5.6 (doing the measurements) and A5.10 (presenting) are printed in grey italics, so only the school exam tests them.
