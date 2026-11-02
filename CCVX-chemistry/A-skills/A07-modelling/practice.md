# A7 — Modelling: practice

Five original questions on the A7 learning outcome (reduce a problem to a model, run it, verify it), in CCVX style.

### chem-a07-q01 | points 3 | outcome A7 | difficulty easy
#### Question
A class wants to model how the temperature of a stirred water bath responds to a hot rod of copper dipped into it. (1) Name the entities (subsystems) of the system. (2) Give the abstract model you would use (in one sentence). (3) Give one simplification the first model must make explicit.
#### Answer
1. Entities: the copper rod, the water, the thermometer/vessel, the surroundings. 2. Conservation model: heat lost by the rod = heat gained by the water (and by the vessel/surroundings in an improved model), until the common temperature is reached — the first-law model of C03. 3. First simplification: vessel and surroundings receive no heat (only water and rod counted); or the stirring makes the water's temperature uniform instantly.
#### Solution
1. System = entities + interactions; here the interaction is heat exchange.
2. The model is the operation youener formally: m_brown c_copper ΔT = m_water c_water ΔT′ (physics/chem crossover), eventually with a vessel term.
3. Modelling is a chain of omissions: each simplification must be named, else the error is invisible — the A7 starting point.

### chem-a07-q02 | points 3 | outcome A7 | difficulty medium
#### Question
A student models the dissolution of table salt in a full glass as "straight-line proportional to stirring speed." Give one observable quantity the model predicts, the predictions it makes over which it can be falsified, and one limitation that will be forced by reality into a refinement.
#### Answer
The model predicts time-to-dissolve as a linear function of stirring speed. Falsifiable: at 0 rpm the time is not infinite (diffusion proceeds without stirring); and at high speeds the time stops falling (mass transfer saturates) — both are the data that will force the refinement "linear only above some speed, saturating at the top."
#### Solution
1. Every model is only checkable through its measurable consequences (the predicted time-to-solve as f(rpm)).
2. The two failure points of a linear model in this context: no-stir asymptote (diffusion still works) and saturation (once you outrun the dissolution rate itself).
3. This is the classic modelling cycle: model → predict → compare with the world → refine; the A7 exercise asks for it explicitly.

### chem-a07-q03 | points 4 | outcome A7 | difficulty medium
#### Question
Interpret the parameters. A spreadsheet model of a gas leak from a 1-hole in a gas cylinder computes: mass_flow(t) = k × p(t) × A, p(t + dt) = p(t) − mass_flow(t) × R·dt/V. (1) What is the meaning of each parameter? (2) Which two parameters are the target of error if the model underpredicts the leak duration? (3) Why is this a discrete (step) model rather than continuous?
#### Answer
1. k = flow coefficient (how fast the density exits per area pressure unit), A = hole area, p = cylinder pressure, R = proportionality (ideal gas/effusion factor), V = cylinder volume, dt = time step. 2. The leak is underpredicted if k or A is taken too small (or V too large) — those set how quickly the pressure falls. 3. The model does not follow time in a continuum: it recomputes pressure from mass flow at each step dt (an Euler step); a continuous model would write and solve the differential mass-balance directly.
#### Solution
1. Parameter = property the modeller must supply (area, coefficient, volume, law factor).
2. A wrong prediction traces back to a wrong parameter value/range — identifying which one is the interpretation task A7 asks for.
3. Discrete time steps are what spreadsheets/computers do; the continuous version is the calculus version (you will meet these side-by-side at university).

### chem-a07-q04 | points 4 | outcome A7 | difficulty medium
#### Question
A student models the temperature of a cooling cup of water as T(t) = T_room + (T₀ − T_room)·e^(−kt). (1) Sketch the curve in words. (2) Test this model quantitatively using this measurement pair: T₀ = 80 °C, T_room = 20 °C, T(10 min) = 50 °C. (3) Use your k to predict T(30 min), and explain what it teaches you about the model's working principle.
#### Answer
1. Exponential decay: steep at start, levelling to T_room. 2. k from the measurement pair: 50 = 20 + 60·e^(−10k) → e^(−10k) = 30/60 = 0.5 → k = ln 2/10 = 0.0693 min⁻¹. 3. T(30) = 20 + 60·e^(−0.0693×30) = 20 + 60·0.125 = 27.5 °C. The model's principle: cooling proceeds as an exponential towards the environment — rate proportional to the remaining difference (a simple form of Newton's cooling law): the further from T_room, the faster the correction.
#### Solution
1. Curve: downward convex asymptote.
2. Solve for k (logarithms as in a08-q02): −10k = ln(0.5) → k = 0.069.
3. Prediction 27.5 °C. Verify: the curve settles towards 20 as t grows — the end-point is the room's temperature, as it must be.

### chem-a07-q05 | points 4 | outcome A7 | difficulty hard
#### Question
The cooling model of chem-a07-q04 kept running overnight; at 8:00 the measured cup was 19.5 °C with the room minima of 19 °C. (1) What does that small negative offset tell the modeller? (2) Which model change would capture evaporation? (3) State the modelling moral in one sentence for your report.
#### Answer
1. The cup ended slightly below the model's limit (T_room): there is a mechanism the model omitted (evaporation, which itself draws heat — an extra channel). 2. Add a constant or time-dependent evaporation sink as a second term: dT/dt = −k(T − T_room) − E·w(t), with w the wetted surface and E an evaporation coefficient; fit E on the overnight value. 3. Moral: models are tested at their edges — small mismatches point at missing physics, and the next model round grows from exactly there.
#### Solution
1. An overnight test interlocutes the "asymptote": if reality lies below the promised floor, an unlisted channel (here evaporative cooling) is open.
2. Model change = an extra sink term; new parameter E to fit.
3. The A7 loop, in one line: simplify → predict → confront → extend → repeat; science never announces its model is finished.
