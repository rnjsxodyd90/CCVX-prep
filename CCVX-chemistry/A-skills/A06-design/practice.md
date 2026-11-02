# A6 — Design: practice

Five original questions on the A6 learning outcome (prepare, implement, test and evaluate a technical design), in CCVX style.

### chem-a06-q01 | points 3 | outcome A6 | difficulty easy
#### Question
Design brief, first step: "Design a simple experiment kit with which water hardness at home can be compared". Design step 1 asks for a program of requirements (list of demands). Give four demands the design should meet, and classify each as requirement (must) or wish (nice).
#### Answer
Musts: (1) safe and lawful with ordinary kitchen materials (no hazardous materials), (2) gives a yes/no or comparison answer with the same kit at home as in the lab, (3) conducts with ≤ 15 min + kitchen tools, (4) works with ≤ 100 mL of water.
Wishes: (5) colours for fast reading, (6) also gives a rough value scale (hard/soft).
#### Solution
1. The programme of requirements precedes the solution: requirements are testable conditions ("with ≤ 100 mL water"), wishes are desirable properties (gradation, colour).
2. This division of must/wish is what A06 wants in the exam: a design against a demand list, not a free improvisation.
3. Every chosen design feature is later checked against the list.

### chem-a06-q02 | points 3 | outcome A6 | difficulty medium
#### Question
Two candidate designs for the hardness kit exist: (A) a soap-solution titration (foam height after fixed shaking), (B) a paper-strip reaction with a complexometric indicator. Choose one and defend it against the demands of chem-a06-q01 (safety, same-at-home, ≤ 100 mL water, comparability), naming one disadvantage.
#### Answer
Choose A: soap solution in closed measure bottle, 100 mL graduated cylinder as measure: safe (soap), same at home (any tap), needs only 100 mL, foam height is comparable between homes if the shaking protocol is fixed; disadvantage: results depend on the soap brand and on temperature (morning vs afternoon), so the kit must ship the same soap brand as the lab comparison.
#### Solution
1. Against the requirement list: A is safe, cheap, home-compatible and gives a scalable answer (foam height), B uses an indicator and strip that may not be in a kitchen.
2. Naming a disadvantage honestly is a strength of design judgment (not marketing).
3. The main A6 point: defend the choice against the requirements, not by taste.

### chem-a06-q03 | points 3 | outcome A6 | difficulty medium
#### Question
A prototype of the soap kit has been tested at five known water-hardness levels: foam heights 12, 10, 8, 5, 3 cm for 2, 4, 6, 10, 14 °dH. Describe the testing and the step "test the design" the plan should include next, and draw one conclusion about the design from these data.
#### Answer
Test on known standards (spiked hardness stock), with each level done in triplicate and a fixed shaking protocol; then the test plan runs unknown waters and checks the foam-height relation for monotonicity and reproducibility. Conclusion: the kit discriminates between soft and hard waters (monotonic decrease 12 → 3 cm from 2 to 14 °dH), so the basic design works; the 6–10 °dH zone needs tighter spacing for reliable classification.
#### Solution
1. Testing = comparing the design against known references (set standards, protocol), in replicate.
2. A conclusion from data: monotone decrease supports the design; closely spaced levels reveal the limited resolution.
3. This is the "evaluate → iterate" loop of A06: test against refs, expose weaknesses, adjust.

### chem-a06-q04 | points 4 | outcome A6 | difficulty medium
#### Question
The kit is read out as "hard / in between / soft". Lay out one improvement iteration if the test showed the middle region (6–10 °dH) unreliable. Give: the changed feature, why it should work, and the new test protocol step to check it.
#### Answer
Change feature: double the water volume to 200 mL with the same soap quantity per test (steeper foam response per hardness unit) — or use a two-step dose (split the soap dose in two portions and measure total to first stable foam); why: the response is a dosage comparison; a bigger margin per class gives clearer cut points in the middle range. New test step: regenerate the calibration at 4, 6, 8, 10 °dH with the new protocol and check that the class boundaries reproduce within triplicates.
#### Solution
1. A change is tied to the diagnosed weakness: resolution in the middle.
2. Mechanism reasoned: higher sensitivity per unit hardness gives larger distance between adjacent classes.
3. Test again: calibration on the problematic zone only, in replicate — the hallmark proper of the implementation-and-test phase.

### chem-a06-q05 | points 4 | outcome A6 | difficulty hard
#### Question
Reflection on the whole design process of the soap kit. Write the 6-sentence evaluation: (a) which requirement was hardest to meet, (b) one unexpected failure in testing, (c) whether the design meets the design brief, (d) one deliberate simplification and its price, (e) one improvement for a later version, (f) verdict in one line.
#### Answer
(a) "Same answer at home as in the lab" (temperature and soap brand vary). (b) Soft water above 5°dH gave unstable second foam readings (fingerprint spreading of foam) — the cause was grease on reused bottles, not the water. (c) Meets the brief for class comparison, not for exact hardness values. (d) Simplification: one soap brand shipped in the kit and one shaking protocol; price: bound to that brand/regime, and the result is a class, not a number. (e) Later: include a reference card with colour/foam photos to smooth the readout. (f) Verdict: the kit answers the asking question reliably, within its stated bounds — good enough as a school design.
#### Solution
1. The reflection format is explicit: hardest requirement, unexpected failure, brief met yes/no, simplification with its price, next improvement, verdict.
2. Notice how the evaluation reveals the design's boundary, not its adjectives — the same discipline for any engineering (or exam) design report.
3. A06's inner move: from brief back to requirements, and from failed expectations back to design insight.
