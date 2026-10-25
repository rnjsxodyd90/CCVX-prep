# A7 — Modelling: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX syllabus, the Dutch CvTE syllabus and standard VWO biology, not yet checked against an open source text or exam question.

- **In Dutch VWO:** central exam and school exam (CvTE §1.4), always inside a content question.
- **Dutch source:** [CvTE syllabus biologie vwo 2027](https://www.examenblad.nl/2027/vwo/documenten/syllabus-biologie-vwo-2027) (version 2, July 2025), domain A *Vaardigheden*, A7 *Modelvorming*. A citation like *(CvTE A7 spec 5)* means specification 5 of A7; the CvTE has 9 specifications in newer wording against 8 CCVX items, so they are matched by content, and *(closest: CvTE A7 spec 6)* marks an item without a real match.

Dutch terms are in brackets. Binas tables are named, not numbered, because the numbers differ between editions.

## 1. Relevant parameters and relationships

- A model (*model*) is a simplified representation of a phenomenon, used to describe, explain or predict it. The first step is choosing which quantities (parameters) and relationships matter, and leaving out the rest. *(CvTE A7 specs 1–2)*
- Running example: for a growing population of bacteria in a culture, the parameters are the starting number, the doubling time and, later, the food supply; the colour of the colonies doesn't matter.

## 2. Assumptions and simplifications

- A model rests on assumptions (*aannames*) and simplifications (*vereenvoudigingen*) that make the problem workable: the simplest bacterial model assumes unlimited food and space, so the number doubles every 20 minutes. *(CvTE A7 spec 2)*
- The Hardy–Weinberg principle assumes a large population, random mating, and no mutation, gene flow or selection. Then, if 1% of a population is aa, q = √0.01 = 0.1, p = 0.9 and 2pq = 0.18: 18% are carriers ([F02](../../F-evolution/F02-speciation/README.md)).
- **Trap:** a model is only valid while its assumptions hold: bacteria in a closed culture run out of food, and a population under selection doesn't stay in Hardy–Weinberg equilibrium.

## 3. Selecting a suitable model

- A model can be physical (*fysiek*: a DNA model, the bell-jar model of breathing), schematic (*schematisch*: a food web, a regulation cycle, a cladogram, the operon model) or mathematical (*wiskundig*: Fick's law, Hardy–Weinberg, a growth formula). *(CvTE A7 specs 4–5)*
- The choice depends on the question: a regulation cycle explains why blood glucose stays nearly constant ([B04](../../B-self-regulation/B04-self-regulation-of-organisms/README.md)), a growth formula predicts numbers.

## 4. Estimating parameter values and margins of error

- Parameter values come from data, with a margin of error: if counts show the population doubling every 18 to 22 minutes, the doubling time is 20 ± 2 min. *(closest: CvTE A7 spec 6)*
- A small error in a parameter can grow large in the result: after 2 hours, 100 bacteria become 6.4·10³ with a doubling time of 20 min, but 4.4·10³ with 22 min and 1.0·10⁴ with 18 min, so −31% to +59% for an error of 10%.

## 5. Verifiable expectations

- An expectation states what the model predicts in a form that measurements can check: exponential growth doubles the number every doubling time (100, 200, 400, 800 after 0, 20, 40, 60 min), so on a logarithmic y-axis the points lie on a straight line ([A08](../A08-scientific-instruments/README.md) item 5). *(CvTE A7 spec 7)*

## 6. Computing with a time step

- A dynamic model computes the change in a small time step (*tijdstap*) Δt, here ΔN = r·N·Δt, adds it to N and repeats. For bacteria that double every 20 min, r = ln 2 / 20 ≈ 0.0347 per minute. *(closest: CvTE A7 spec 6)*
- The step size matters: from 100 bacteria, steps of 20 min give about 2.4·10³ after 2 hours and steps of 1 min about 6.0·10³, against the exact 6.4·10³. A smaller step is more accurate but needs more steps.
- Running many steps needs a computer, which CCVX leaves out of the written exam *(CCVX syllabus §1)*. By hand you can do one step: ΔN = 0.0347 × 100 × 20 ≈ 69, so N ≈ 169 after the first 20 min, where the exact value is 200.

## 7. Evaluating a model

- Comparing model results with expectations and measurements, within the margins of error: a real culture follows the exponential model at first, then levels off as food runs out, giving an S-shaped growth curve that approaches the carrying capacity (*draagkracht*, CCVX "capacity", [C03](../../C-self-organization/C03-self-organization-of-ecosystems/README.md)). *(CvTE A7 spec 3)*
- The Dutch syllabus calls the conditions within which a model works its range of validity (*geldigheidsgebied*): the exponential model holds only while food and space are not limiting. It also asks for improvements or extensions (spec 8), such as adding a carrying capacity to the model.
- **Trap:** a model can fit well within its range of validity and fail outside it; say which assumption no longer holds.

## 8. Presenting a model study

- Presenting how a model was built, what it assumes and what it shows (*het tot stand komen, de opbouw of het gebruik van een model presenteren*). *(CvTE A7 spec 9)*

## CCVX versus the Dutch syllabus

- **In both:** choosing parameters and simplifying (CCVX 1–2, CvTE 1–2), choosing a suitable model (CCVX 3, CvTE 4–5), predicting with it (CCVX 5, CvTE 7), comparing it with reality (CCVX 7, CvTE 3) and presenting it (CCVX 8, CvTE 9, printed grey, so not in the Dutch central exam). *(CvTE A7)*
- **Dutch syllabus only:** the range of validity (spec 3) and proposing improvements or extensions (spec 8).
- **CCVX only:** estimating parameters with margins of error (item 4) and computing with a time step (item 6). Their closest CvTE match, setting up or adjusting a model (spec 6), is printed grey.
