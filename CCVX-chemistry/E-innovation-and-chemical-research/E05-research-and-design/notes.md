# E5 — Research and Design: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions. This subdomain is school-exam only in the Netherlands, so the CvTE syllabus doesn't specify it: *(SLO E5)* points to the [SLO handreiking](https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-schei-hv/toetsen-schoolexamen/vakinhoudelijke-0/), which names the same concepts, and CvTE codes mark overlap with the central exam.

## Research question and hypothesis

- The outcome asks you to set up a practical research or design assignment in a context such as sustainability, materials, food or health, carry it out and report on it. The general skills are in [A05](../../A-skills/A05-research/notes.md) (research) and [A06](../../A-skills/A06-design/notes.md) (design). This page follows one research example through every step: how much vitamin C does orange juice lose in an opened carton in the fridge? *(SLO E5)*
- Formulating a research question (*onderzoeksvraag formuleren*): the question must be specific and answerable with measurements, such as "How does the vitamin C content of orange juice change during three days in an opened carton in the fridge?" A question such as "Is orange juice healthy?" can't be answered by one experiment. *(CvTE A5.2)*
- Drawing up a hypothesis (*hypothese opstellen*): an expected answer with a chemical reason, which the measurements can support or contradict. For example: "the vitamin C content decreases, because vitamin C is a reductor that reacts with oxygen from the air in the carton". *(CvTE A5.3; CvTE A5.4)*
- A design assignment (*ontwerpopdracht*) starts instead from a problem and a list of requirements and wishes (*programma van eisen en wensen*). For example, a self-heating can of soup must warm its contents by a set number of degrees within a few minutes, using a safe reaction in a separate compartment, such as CaO + H₂O → Ca(OH)₂. *(CvTE A6.1; CvTE A6.3)*
- **Trap:** a hypothesis without a reason is only a guess; give the chemistry that makes you expect the result.

## Identifying variables

- Identifying variables (*variabelen onderscheiden*): the independent variable (*onafhankelijke variabele*) is the one you change on purpose, here the storage time in days. The dependent variable (*afhankelijke variabele*) is the one you measure, here the vitamin C content in mg per 100 mL. The controlled variables are kept the same, so that only the independent variable can cause a difference: the temperature of the fridge, the brand and batch of the juice, the volume of each sample and the iodine solution. *(CvTE A5.5)*
- A reference helps: a closed carton from the same batch, measured on the same days, shows whether the loss comes from opening the carton.
- In a design assignment the requirements decide what you measure when you test the prototype, such as the temperature rise of the soup and the time it takes. *(CvTE A6.8)*
- **Trap:** change one variable at a time. The dependent variable is a quantity with a unit (vitamin C content in mg per 100 mL), not a method ("titration").

## Work plan

- Drawing up a work plan (*werkplan maken*): the method, the materials and amounts, the measurements and how often they are repeated, the safety measures ([D02](../../D-development-of-chemical-knowledge/D02-safety/notes.md)) and a time schedule. Someone else should be able to repeat the experiment from it. While carrying out the plan, write down every measurement and observation straight away, including anything unexpected. *(CvTE A5.5; CvTE A5.6)*
- Example: open a carton and keep it in the fridge. On days 0, 1, 2 and 3, pipette 25.00 mL of juice into a conical flask, add starch solution and titrate with an iodine solution of 5.00·10⁻³ mol L⁻¹ until the first lasting blue-black colour. Do each titration three times. Vitamin C (ascorbic acid, C₆H₈O₆) reduces iodine, C₆H₈O₆ + I₂ → C₆H₆O₆ + 2 H⁺ + 2 I⁻, and once all of it has reacted the next drop of iodine colours the starch. *(CvTE R&A2.1)*
- **Trap:** calculate the amounts in advance. Here the iodine concentration is chosen so that the titre is about 10 mL, which keeps the reading error of the burette small compared with the volume used.

## Processing measuring data

- Processing measuring data (*meetgegevens verwerken*): put the measurements in a table with quantities and units, take the average of the repeated measurements, calculate the result, and plot it in a graph with the independent variable on the horizontal axis. *(CvTE A5.7; CvTE A8.2)*
- Example (suppose): on day 0 the titres were 11.85, 11.80 and 11.75 mL, an average of 11.80 mL. That is 11.80·10⁻³ L × 5.00·10⁻³ mol L⁻¹ = 5.90·10⁻⁵ mol I₂, so also 5.90·10⁻⁵ mol vitamin C (1 : 1). With M(C₆H₈O₆) = 176.12 g mol⁻¹ that is 10.4 mg in 25.00 mL, or 41.6 mg per 100 mL. On day 3 the average titre was 9.40 mL, which gives 33.1 mg per 100 mL. Calculations like this are in [C02](../../C-chemical-processes-and-conservation-laws/C02-chemical-calculations/notes.md), measuring instruments in [A08](../../A-skills/A08-scientific-instruments/notes.md). *(CvTE A8.3)*
- **Trap:** don't round in between. Round only the final answer, to the number of significant figures of the least precise value (here three, from 5.00·10⁻³ mol L⁻¹).

## Drawing conclusions

- Drawing conclusions (*conclusies trekken*): answer the research question with the results and say whether they support the hypothesis. Here the vitamin C content fell from 41.6 to 33.1 mg per 100 mL in three days, a decrease of 20.3%, so the hypothesis that it decreases is supported. *(CvTE A5.8)*
- Evaluate the experiment in the discussion. *(CvTE A5.9)*
    - Reliability (*betrouwbaarheid*): would a repetition give the same result? The three titrations agree within 0.10 mL.
    - Validity (*validiteit*): does the method measure what it should? Other reductors in the juice also react with iodine, so the titration may overestimate the vitamin C.
    - Precision (*nauwkeurigheid*): how exact are the measurements? The burette and pipette set a limit, and the orange colour of the juice makes the end point harder to see.
- In a design assignment, test the prototype against every requirement and propose improvements. *(CvTE A6.8; CvTE A6.9)*
- **Trap:** conclude only what the data show. This experiment shows that the content decreases, not why; the explanation (oxidation by oxygen) belongs in the discussion and needs another experiment to test, for example with a carton whose air has been replaced by nitrogen.

## Presentation

- Presentation (*presenteren*): a research report follows a fixed order: title, introduction with the research question and hypothesis, method (materials and procedure), results (tables and graphs, without interpretation), conclusion, discussion (evaluation and improvements) and sources. A poster or talk follows the same order in a shorter form. A design report also contains the list of requirements, the solutions considered, the chosen design and the test results. *(CvTE A5.10; CvTE A6.10)*
- **Trap:** keep results and interpretation apart: the results show what was measured, and the conclusion and discussion say what it means.
