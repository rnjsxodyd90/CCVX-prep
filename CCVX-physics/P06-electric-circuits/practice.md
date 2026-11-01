# P6 — Electric circuits: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o3 match the numbered learning outcomes in [README.md](README.md). Use e = 1.602·10⁻¹⁹ C; copper resistivity ρ = 17·10⁻⁹ Ω·m (BINAS); mains voltage 230 V.

### phys-p06-q01 | points 3 | outcome o1 | difficulty easy

#### Question

Through a torch flows 3.0·10² C of charge in 5.0 minutes.

a. Compute the current.
b. How many free electrons pass a cross-section of the wire per second?

#### Answer

a. I = 1.0 A; b. 6.2·10¹⁸ electrons per second

#### Solution

a. I = Q/t = 3.0·10²/(5.0·60 s) = 3.0·10²/3.0·10² = 1.0 A.
b. Per second Q = I·t = 1.0 C; N = Q/e = 1.0/1.602·10⁻¹⁹ = 6.2·10¹⁸ electrons — the current in amperes literally counts charge packets per second.

### phys-p06-q02 | points 3 | outcome o2 | difficulty easy

#### Question

A heating element has a resistance of 46 Ω and is connected to the mains (230 V).

a. Compute the current.
b. Compute the power.

#### Answer

a. I = 5.0 A; b. P = 1.15·10³ W

#### Solution

a. Ohm's law: I = U/R = 230/46 = 5.0 A.
b. P = U·I = 230·5.0 = 1.15·10³ W (check: P = U²/R = 230²/46 = 1150 ✓).

### phys-p06-q03 | points 4 | outcome o2 | difficulty easy

#### Question

Two resistors R₁ = 20 Ω and R₂ = 30 Ω are in series on a 12 V battery.

a. Compute the replacement resistance and the current.
b. Compute the voltage across each resistor, using the voltage-division idea as a check.

#### Answer

a. R_t = 50 Ω, I = 0.24 A; b. U₁ = 4.8 V, U₂ = 7.2 V

#### Solution

a. Series: R_tot = 20 + 30 = 50 Ω; I = U/R = 12/50 = 0.24 A.
b. U₁ = I·R₁ = 0.24·20 = 4.8 V; U₂ = 0.24·30 = 7.2 V. Division check: U₁ = 12·20/50 = 4.8 ✓, U₂ = 12·30/50 = 7.2 ✓ — the largest resistor takes the largest share, and 4.8 + 7.2 = 12 ✓ (Kirchhoff's voltage law for this loop).

### phys-p06-q04 | points 4 | outcome o2 | difficulty easy

#### Question

Two resistors R₁ = 6.0 Ω and R₂ = 3.0 Ω are in parallel on a 12 V battery. Note: since 1 September 2025 the syllabus gives the rule as 1/R_tot = 1/R₁ + 1/R₂ + …

a. Compute the replacement resistance.
b. Compute the current through each branch and the total current. Which resistor carries the larger current?

#### Answer

a. R_t = 2.0 Ω; b. I₁ = 2.0 A, I₂ = 4.0 A, I_tot = 6.0 A — the smallest resistor carries the most current

#### Solution

a. 1/R_tot = 1/6.0 + 1/3.0 = 1/6 + 2/6 = 3/6 = 1/2 → R_tot = 2.0 Ω. (Equivalent in conductances: G_tot = 0.167 + 0.333 = 0.500 S → R_tot = 1/G = 2.0 Ω ✓)
b. Both sit at 12 V: I₁ = 12/6.0 = 2.0 A; I₂ = 12/3.0 = 4.0 A; I_tot = 2.0 + 4.0 = 6.0 A. Check: I = U/R_tot = 12/2.0 = 6.0 A ✓.

### phys-p06-q05 | points 5 | outcome o2 | difficulty medium

#### Question

R₁ = 10 Ω is in series with the parallel pair R₂ = 6.0 Ω and R₃ = 3.0 Ω; the whole circuit is on a 24 V battery.

a. Compute the total resistance and the current delivered by the battery.
b. Compute the voltage across R₁ and across the parallel pair.
c. Compute the currents through R₂ and R₃.

#### Answer

a. R_t = 12 Ω, I = 2.0 A; b. U₁ = 20 V, U_∥ = 4.0 V; c. I₂ = 0.67 A, I₃ = 1.3 A

#### Solution

a. Fold the pair: 1/R_∥ = 1/6.0 + 1/3.0 = 1/2 → R_∥ = 2.0 Ω. Series: R_tot = 10 + 2.0 = 12 Ω. I = U/R = 24/12 = 2.0 A.
b. U₁ = I·R₁ = 2.0·10 = 20 V; the pair keeps the rest: U_∥ = 24 − 20 = 4.0 V (or 2.0·2.0 ✓).
c. I₂ = 4.0/6.0 = 0.67 A; I₃ = 4.0/3.0 = 1.3 A. Sum: 0.67 + 1.33 = 2.0 A ✓ (Kirchhoff's current law: branch currents sum to the total).

### phys-p06-q06 | points 4 | outcome o2 | difficulty medium

#### Question

A single 25 m stranded copper extension lead has a wire cross-section of 1.5 mm².

a. Compute the resistance of one 25 m copper wire of this lead (ρ_Cu = 17·10⁻⁹ Ω·m).
b. When 16 A flows, compute the voltage drop over that wire and the power dissipated in it.

#### Answer

a. R = 0.28 Ω; b. U = 4.5 V, P = 72 W

#### Solution

a. R = ρℓ/A = 17·10⁻⁹·25/1.5·10⁻⁶ = 4.25·10⁻⁷/1.5·10⁻⁶ = 0.283 ≈ 0.28 Ω.
b. U = I·R = 16·0.283 = 4.5 V; P = I²·R = 16²·0.283 = 72 W — and the *return* wire doubles these values. A coiled 16 A reel in the sun is a small room heater; that is why reels must be unrolled for heavy loads.

### phys-p06-q07 | points 5 | outcome o2 | difficulty medium

#### Question

A thermostat circuit places an NTC in series with a fixed 10 kΩ resistor across a 10 V supply. The output reads the voltage U_NTC across the NTC. Given: at 20 °C the NTC is 12 kΩ; at 40 °C it is 5.2 kΩ.

a. Compute U_NTC at 20 °C.
b. Compute U_NTC at 40 °C.
c. A comparator switches a heater off when U_NTC drops below 3.5 V. Between 20 °C and 40 °C, does it switch? At roughly which temperature (assume linear in the NTC-resistance)?

#### Answer

a. 5.5 V; b. 3.4 V; c. yes, it switches at ≈ 39 °C (just below 40 °C)

#### Solution

a. Voltage division: U_NTC = 10·12/(10 + 12) = 5.45 ≈ 5.5 V.
b. U_NTC = 10·5.2/(10 + 5.2) = 3.42 ≈ 3.4 V.
c. 3.4 V < 3.5 V → yes. Trigger level: U_NTC = 3.5 V ↔ R_NTC/(10 + R_NTC) = 0.35 → 0.65·R_NTC = 3.5 → R_NTC = 5.4 kΩ. The NTC falls linearly from 12 kΩ (20 °C) to 5.2 kΩ (40 °C), i.e. 6.8 kΩ per 20 °C; reaching 5.4 kΩ takes (12 − 5.4)/6.8·20 = 19 °C above 20 °C → T_switch ≈ 39 °C.

### phys-p06-q08 | points 4 | outcome o2 | difficulty medium

#### Question

A student measures the current through a 100 Ω resistor on a 10 V source: ideal value 0.100 A.

a. The ammeter he inserts in series has an internal resistance of 0.50 Ω. Compute the actual current and the percentage error of the reading.
b. Explain why a voltmeter must be connected in parallel, and state the ideal internal resistance of each meter.

#### Answer

a. I = 0.0995 A, error −0.5%; b. a voltmeter measures across: it must not drain the branch → ideal ∞; the ammeter must not drop the voltage of the branch → ideal 0 Ω

#### Solution

a. Now in series: R_tot = 100 + 0.50 = 100.5 Ω → I = 10/100.5 = 0.09950 A. Error: (0.09950 − 0.1000)/0.1000 = −0.5% — small but present: every measurement disturbs the circuit a little.
b. Voltage is a *difference between two points*, so the meter connects between those points (parallel); to avoid changing the circuit, it must carry almost no current → internal resistance ideal infinite. The ammeter must carry the branch current without costing it voltage → ideal zero resistance. Swapping these two rules is how fuses blow.

### phys-p06-q09 | points 3 | outcome o3 | difficulty medium

#### Question

A washing machine uses 2.0 kW during a 1.5 h programme.

a. Compute the energy in kWh and in joules.
b. Compute the cost at €0.25 per kWh (given).

#### Answer

a. E = 3.0 kWh = 1.08·10⁷ J; b. €0.75

#### Solution

a. E = P·t = 2.0 kW·1.5 h = 3.0 kWh = 3.0·3.6·10⁶ = 1.08·10⁷ J.
b. 3.0 kWh·€0.25 = €0.75 per run.

### phys-p06-q10 | points 4 | outcome o3 | difficulty hard

#### Question

A car battery is labelled "12 V, 60 Ah".

a. Compute the charge and the energy it can deliver.
b. Two 55 W headlights are switched on. Compute the total current and estimate how long the battery can feed them (no engine running).

#### Answer

a. Q = 2.16·10⁵ C, E ≈ 2.6·10⁶ J; b. I = 9.2 A, t ≈ 6.5 h

#### Solution

a. Q = 60 Ah = 60·3600 = 2.16·10⁵ C. E = U·Q = 12·2.16·10⁵ = 2.59·10⁶ ≈ 2.6·10⁶ J (also 60 Ah·12 V = 720 Wh = 0.72 kWh ✓).
b. P_tot = 110 W → I = P/U = 110/12 = 9.2 A. Time: t = Q/I = 60 Ah/9.17 A = 6.5 h — a night with lights on drains the battery close to empty.

### phys-p06-q11 | points 5 | outcome o3 | difficulty hard

#### Question

One hallway lamp burns on average 6.0 h per day, all year. Compare a 60 W incandescent with an 8.5 W LED giving the same light (electricity €0.25/kWh, LED purchase €8.00 extra, given).

a. Compute the yearly energy of each lamp in kWh.
b. Compute the yearly saving in kWh and euros.
c. Compute after how many months the LED has earned back its extra cost.

#### Answer

a. 131 kWh vs 19 kWh; b. 113 kWh ≈ €28 per year; c. ≈ 3.4 months

#### Solution

a. Incandescent: 0.060 kW·6.0 h·365 = 131.4 kWh; LED: 0.0085·2190 = 18.6 kWh.
b. ΔE = 112.8 ≈ 113 kWh → Δmoney = 112.8·0.25 = €28 per year.
c. Payback: €8.00/€28.20 yr⁻¹ = 0.284 yr ≈ 3.4 months — after which the saving is pure gain. (The efficiency numbers behind this: incandescent ~5% light, LED ~45% light; the rest is heat you pay for twice in summer.)

### phys-p06-q12 | points 4 | outcome o2 | difficulty hard

#### Question

One kitchen group (230 V, 16 A fuse) feeds a 2200 W kettle, a 900 W toaster and a 1400 W coffee machine at the same time.

a. Compute the total current and state what the fuse will do and why.
b. Later the kettle is switched off and all seems well — until someone touches the coffee machine with wet hands and the residual-current device (*aardlekschakelaar*) trips instantly. Explain the difference in function between fuse and residual-current device.

#### Answer

a. I = 19.6 A > 16 A → the fuse trips: sustained overcurrent; b. fuse = overcurrent protection (cable fire), RCD = leakage protection (electric shock): it compares out- and return current

#### Solution

a. All three in parallel on 230 V: P_tot = 4500 W → I = 4500/230 = 19.6 A > 16 A. The fuse element heats over time and melts once the overload persists: it opens the circuit to prevent the group cable from overheating (fire risk).
b. The fuse guards the installation against too much total current; it does not care *where* the current flows. The RCD compares the current going out (phase) with the current returning (neutral) many times per second; a mismatch — as small as 30 mA leaking through a person to earth — means current escapes via a dangerous path, and it trips in a fraction of a second: shock protection. Different jobs, both needed.
