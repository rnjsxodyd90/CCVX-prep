# A6 — Design: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

| Topic | Status |
|---|---|
| A6.1 Analysing the design problem | drafted |
| A6.2 Schedule of requirements and preferences | drafted |
| A6.3 Linking science to functions and properties | drafted |
| A6.4 Alternative solutions | drafted |
| A6.5 Reasoned design proposal | drafted |
| A6.6 Prototype | drafted |
| A6.7 Testing and evaluating | drafted |
| A6.8 Proposals for improvement | drafted |
| A6.9 Presenting a design | drafted |

## A6.1 Analysing the design problem

- A technical design problem (*ontwerpprobleem*) asks for a product or process that does a job, not for new knowledge. Analysing it means stating who needs what, under which conditions, and how you will know the design succeeds. *(CvTE A6.1)*
- Running example for this page: a self-heating can that warms 250 mL of soup without a flame or electricity, for hikers or emergency kits.
- The Dutch text adds splitting the problem into sub-problems (*deelproblemen*), tasks or properties that can be worked out separately: the heat source, getting the heat into the soup, starting the reaction only when wanted, keeping the chemicals away from the food, and the packaging. *(CvTE A6.2)*
- Designing is a cycle: requirements, ideas, a choice, a prototype, a test, improvements, and round again if needed. The same skills are applied in [E05](../../E-innovation-and-chemical-research/E05-research-and-design/notes.md).
- **Trap:** jumping straight to a solution ("use quicklime") before the problem and the requirements are clear.

## A6.2 Schedule of requirements and preferences

- The schedule of requirements and preferences (*programma van eisen en wensen*) lists what the design must and should do. Every requirement (*eis*) must be met, so each must be testable; preferences (*wensen*) are desirable and help you choose between designs that meet all the requirements. The Dutch text also names boundary conditions (*randvoorwaarden*), limits set from outside such as law, budget or size, and priorities (*prioriteiten*), the order of importance. *(CvTE A6.3)*
- Example requirements: the soup warms by at least 40 °C within a few minutes; no chemical can reach the food; the outside stays safe to hold; no flammable gas is released. Preferences: cheap, light, harmless and recyclable materials. Boundary condition: the can must meet the food-safety rules.
- **Trap:** "the can must work well" is not a requirement, because you can't test it; give a value or a clear yes/no criterion.

## A6.3 Linking science to functions and properties

- Each function of the design rests on chemistry or physics that you can explain and often calculate. *(CvTE A6.4)*
- Heat source: an exothermic reaction (ΔE < 0, see [C06](../../C-chemical-processes-and-conservation-laws/C06-energy-calculations/notes.md)), for example quicklime with water: CaO(s) + H₂O(l) → Ca(OH)₂(s).
- Amount: warming 0.250 kg of soup (treated as water, 4.18·10³ J kg⁻¹ K⁻¹) by 40.0 K takes Q = 4.18·10³ × 0.250 × 40.0 = 4.18·10⁴ J. Suppose the reaction releases 65 kJ per mol CaO: you then need 4.18·10⁴ / 6.5·10⁴ = 0.64 mol CaO, which is 0.64 × 56.08 = 36 g if all the heat reaches the soup, or 72 g if half of it is lost.
- Speed: the rate depends on the surface area of the CaO grains (*verdelingsgraad*) and on how well the water reaches them, see [C04](../../C-chemical-processes-and-conservation-laws/C04-reaction-kinetics/notes.md).
- Safety: Ca(OH)₂ contains hydroxide ions, a strong base, so it is corrosive and the heating compartment must stay sealed off from the soup.

## A6.4 Alternative solutions

- Work out several versions of the functions and properties of the design, i.e. more than one solution for each sub-problem (*meerdere oplossingen per deelprobleem*), before choosing. *(CvTE A6.5)*
- Heat sources: quicklime with water; dissolving anhydrous calcium chloride in water, which is also exothermic; or magnesium with salt water, Mg(s) + 2 H₂O(l) → Mg(OH)₂(s) + H₂(g), which also gives off hydrogen.
- Starting the reaction: a button that breaks a seal between the water and the solid, or a pull tab.

## A6.5 Reasoned design proposal

- A reasoned design proposal (*beargumenteerd ontwerpvoorstel*) chooses the alternative that meets all the requirements and scores best on the preferences, the priorities and other criteria such as the boundary conditions, and gives the reasons. *(CvTE A6.6)*
- Example: quicklime with water. Unlike magnesium it releases no flammable gas, so it meets the gas requirement, and 36–72 g of CaO fits in a can. Its drawback, a corrosive product, is handled by the sealed compartment.
- **Trap:** a proposal that doesn't refer to the schedule of requirements is just an opinion; name the requirement or preference behind each argument.

## A6.6 Prototype

- A prototype (*prototype*) is a first working version built to be tested, e.g. a beaker of soup standing in a larger insulated cup with quicklime, to which water is added. *(CvTE A6.7)*
- The CvTE text prints this specification in grey italics: school exam only. Building something can't be tested in a written exam.

## A6.7 Testing and evaluating

- Testing and evaluating (*testen en evalueren*) means checking the prototype against each requirement: record the temperature of the soup over time, check the temperature of the outside, look for leaks and released gas. Evaluate the design process too: were the choices well founded and the planning realistic? *(CvTE A6.8)*
- Example result: suppose the soup warms from 20 °C to only 50 °C, a rise of 30 °C instead of the required 40 °C. The requirement isn't met.

## A6.8 Proposals for improvement

- Base each proposal for improvement (*voorstel voor verbetering*) on a test result and on theory. *(CvTE A6.9)*
- Too little heat: more CaO, or insulate the outer wall so less heat is lost. Too slow: finer CaO grains (a larger surface area) or a better spread of the water. Steam escaping: add a vent.
- **Trap:** "use more chemicals" without saying which result it fixes and why it works is not a reasoned improvement.

## A6.9 Presenting a design

- Presenting (*presenteren*) a design: show the problem, the schedule of requirements, the alternatives and the reasons for the choice, the test results and the improvements, in a report, a poster or a demonstration of the prototype. *(CvTE A6.10)*
- The CvTE text prints this specification in grey italics: school exam only.

## CCVX versus the Dutch syllabus

- **In both:** all nine CCVX items. Match them by content: CCVX 1 is CvTE A6.1, and from CCVX 2 on the CvTE number is one higher (CCVX 2 is A6.3, …, CCVX 9 is A6.10).
- **Dutch syllabus only:** A6.2, splitting the design problem into sub-problems.
- **Dutch central exam:** only A6.1, A6.4 and A6.9 (CCVX items 1, 3 and 8) are printed in black; the other specifications are in grey italics, so only the school exam tests them.
