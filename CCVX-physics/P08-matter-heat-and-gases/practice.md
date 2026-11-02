# P8 — Matter, heat and gases: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o10 match the numbered learning outcomes in [README.md](README.md). BINAS values used: c_water = 4.18·10³ J/(kg·K), c_copper = 0.39·10³ J/(kg·K), λ_brick = 1.3 W/(m·K), λ_polystyrene = 0.030 W/(m·K), α_steel = 12·10⁻⁶ K⁻¹, E_steel = 2.0·10¹¹ Pa, ρ_mercury = 13.6·10³ kg/m³, R = 8.314 J/(mol·K), g = 9.81 m/s².

### phys-p08-q01 | points 2 | outcome o3 | difficulty easy

#### Question

Convert: a. 25 °C to kelvin; b. the boiling point of liquid nitrogen, 77 K, to degrees Celsius.

#### Answer

a. 298 K; b. −196 °C

#### Solution

a. T[K] = 25 + 273 = 298 K.
b. T[°C] = 77 − 273 = −196 °C. (The exact offset is 273.15; the syllabus formula uses 273 — follow it.)

### phys-p08-q02 | points 3 | outcome o3 | difficulty easy

#### Question

Compute the heat needed to warm 2.0 kg of water from 20 °C to 80 °C.

#### Answer

Q = 5.0·10⁵ J

#### Solution

Q = m·c·ΔT = 2.0·4.18·10³·60 = 5.02·10⁵ ≈ 5.0·10⁵ J. (For water, ΔT in °C equals ΔT in K — only differences matter here.)

### phys-p08-q03 | points 3 | outcome o8 | difficulty easy

#### Question

A person of 70 kg stands still on skis in the snow.

a. Both shoes have a total contact area of 3.0·10⁻² m². Compute the pressure on the snow in shoes.
b. With snowshoes the contact area is 6.0·10⁻² m². Compute the pressure now, and the conclusion for snow travel.

#### Answer

a. p ≈ 2.3·10⁴ Pa; b. p ≈ 1.1·10⁴ Pa — half the pressure, you sink less

#### Solution

a. p = F/A = m·g/A = 70·9.81/3.0·10⁻² = 2.3·10⁴ Pa.
b. p = 6.867·10²/6.0·10⁻² = 1.1·10⁴ Pa. Same weight over twice the area halves the pressure: the snow carries you — area is the classic lever of p = F/A.

### phys-p08-q04 | points 3 | outcome o10 | difficulty easy

#### Question

A steel bridge section is 80 m long. Between winter (−10 °C) and summer (30 °C), how much does its length change? What provision does the design need?

#### Answer

Δℓ ≈ 3.8 cm — expansion joints must absorb this movement

#### Solution

Δℓ = α·ℓ₀·ΔT = 12·10⁻⁶·80·40 = 3.84·10⁻² m ≈ 3.8 cm. Several centimetres per section, back and forth every year: without expansion joints, bearings and gaps the bridge would buckle in summer or tear in winter. (Railway tracks and overhead wires carry the same battle with α.)

### phys-p08-q05 | points 4 | outcome o2 | difficulty medium

#### Question

A brick wall (λ = 1.3 W/(m·K), thickness 0.30 m, area 12 m²) separates 21 °C inside from 1.0 °C outside.

a. Compute the heat current through the wall.
b. The wall gains an inner lining of 10 cm polystyrene slabs (λ = 0.030 W/(m·K), thermal resistance dominated by the polystyrene). Compute the new heat current and the percentage reduction.

#### Answer

a. P = 1.0·10³ W; b. P = 72 W — a reduction of 93%

#### Solution

a. P = λ·A·ΔT/d = 1.3·12·20/0.30 = 1.04·10³ ≈ 1.0·10³ W.
b. P = 0.030·12·20/0.10 = 72 W. Reduction: (1.04 − 0.072)·10³/1.04·10³ = 93%. Money and comfort: insulation is physics you can touch — thicker and low-λ both pay (P ∝ 1/d and ∝ λ).

### phys-p08-q06 | points 4 | outcome o3 | difficulty medium

#### Question

A copper block of 0.50 kg at 80 °C is submerged in 0.30 kg of water at 15 °C. Compute the final equilibrium temperature, neglecting losses to the surroundings (c_copper = 0.39·10³ J/(kg·K)).

#### Answer

T_end ≈ 24 °C

#### Solution

Heat out of copper = heat into the water: m_cu·c_cu·(80 − T) = m_w·c_w·(T − 15) → 0.50·390·(80 − T) = 0.30·4180·(T − 15) → 195·(80 − T) = 1254·(T − 15) → 15600 + 18810 = (195 + 1254)·T → T = 34410/1449 = 23.8 ≈ 24 °C. Water carries the temperature with its huge c — a small hot metal block can barely move a bath.

### phys-p08-q07 | points 3 | outcome o9 | difficulty medium

#### Question

A balloon holds 2.5 dm³ of air at 25 °C at constant (atmospheric) pressure. It is placed in a fridge at 5.0 °C. Compute the new volume.

#### Answer

V₂ = 2.3 dm³

#### Solution

Constant pressure (isobaric): V/T = constant → V₂ = V₁·T₂/T₁. Kelvin: 298 K and 278 K. V₂ = 2.5·278/298 = 2.33 ≈ 2.3 dm³ — the balloon visibly shrinks in the fridge (and grows back outside: particle speed sets the space the gas demands).

### phys-p08-q08 | points 3 | outcome o7 | difficulty medium

#### Question

a. Explain with the kinetic model of an ideal gas why the pressure in a sealed canister rises when the canister is heated.
b. The general gas law assumes an *ideal* gas. Name the two simplifications that make a real gas (*reëel gas*) deviate, and state at which conditions (high/low p, high/low T) the ideal model fits best.

#### Answer

a. faster molecules hit the walls harder *and* more often → higher force per area; b. own volume of the molecules + mutual attraction (Van der Waals); ideal fits best at low pressure and high temperature

#### Solution

a. At constant V the molecule count and density stay put, but heating raises the average molecular speed (T ∝ average kinetic energy). Wall collisions then happen more frequently and with a larger impulse transfer per hit — both effects raise F/A = p linearly in T (p/T = constant, the isochoric law from the same model).
b. Ideal gas = point particles with no own volume and no mutual forces. Real molecules do occupy volume (hurts at high p, where the free volume shrinks) and attract each other (Van der Waals force — hurts at low T, where particles linger near each other). Hence: real gases behave most ideally at low pressure and high temperature — room air qualifies happily.

### phys-p08-q09 | points 4 | outcome o9 | difficulty hard

#### Question

A weather balloon is filled with 3.0 m³ of helium at ground level: p₁ = 1.01·10⁵ Pa, T₁ = 288 K. At height the conditions are p₂ = 5.5·10⁴ Pa, T₂ = 253 K. Compute the balloon's volume there.

#### Answer

V₂ = 4.8 m³

#### Solution

Same amount of gas: p₁V₁/T₁ = p₂V₂/T₂ → V₂ = V₁·(p₁/p₂)·(T₂/T₁) = 3.0·(1.01·10⁵/5.5·10⁴)·(253/288) = 3.0·1.836·0.878 = 4.8 m³. The pressure drop (+84%) wins over the cooling (−12%): balloons swell as they climb — and must be launched half-sagging so the envelope can grow.

### phys-p08-q10 | points 4 | outcome o6 | difficulty hard

#### Question

A steel guitar string (ℓ₀ = 0.65 m, A = 2.0·10⁻⁷ m²) is tuned by tightening it to F = 80 N.

a. Compute the stress in the string.
b. Compute the strain and the extra length the string gains (E_steel = 2.0·10¹¹ Pa).
c. The tuning is raised further, towards the elastic limit. Name which point on the σ–ε diagram marks where the string stops recovering when slackened (plastic deformation) and what finally happens at the top of the diagram.

#### Answer

a. σ = 4.0·10⁸ Pa; b. ε = 2.0·10⁻³, Δℓ = 1.3 mm; c. the elastic limit (yield point); at the tensile strength the string necks down and snaps

#### Solution

a. σ = F/A = 80/2.0·10⁻⁷ = 4.0·10⁸ Pa.
b. ε = σ/E = 4.0·10⁸/2.0·10¹¹ = 2.0·10⁻³ (0.20%); Δℓ = ε·ℓ₀ = 2.0·10⁻³·0.65 = 1.3·10⁻³ m = 1.3 mm — the peg must take up this stretch as the note rises.
c. Passing the elastic limit (yield point), the string stays permanently longer when released (plastic region). At the curve's maximum (tensile strength, treksterkte) a local neck forms and the string breaks — usually mid-song, which is a law of physics on its own.

### phys-p08-q11 | points 4 | outcome o4 | difficulty hard

#### Question

Two textbook observations from BINAS tables:

- aluminium (ρ = 2.70·10³ kg/m³, c = 0.88·10³ J/(kg·K)) floats well above lead (ρ = 11.3·10³ kg/m³, c ≈ 0.13·10³ J/(kg·K)) in the density column;
- copper and silver are champions in *both* the electrical and the thermal conductivity rankings.

a. Explain with the concept *atomaire massa* why the metal with the highest density tends to have the lowest specific heat per kilogram.
b. Explain with the concept *geleidingselektron* why thermal and electrical conduction in metals go hand in hand.

#### Answer

a. per atom, thermal energy per kelvin is roughly equal; a heavy atom means fewer atoms per kg → fewer joules per kg per kelvin → smaller c; b. the same free electrons that transport charge also transport kinetic energy (heat) — one carrier, two jobs

#### Solution

a. Temperature measures the average kinetic energy *per particle*. To warm one kilogram by 1 K you must raise the kinetic energy of every atom in that kilogram, and the energy per atom per kelvin is roughly the same for all metals. Lead atoms are ~7× heavier than aluminium atoms (atomic mass 207 vs 27), so 1 kg of lead holds ~7× fewer atoms → warming it takes ~7× less energy per kilogram → smaller c. (That is why ρ and c move in opposite directions in the metals table, and ρ·c is nearly constant.)
b. In a metal lattice, some electrons are not bound to one atom: the free (*geleidings*-)electrons. An electric voltage makes them drift (current); a hot end makes them move faster randomly and they carry that extra kinetic energy down the rod (heat conduction). Same mobile carriers, two transports — so a metal that conducts charge well conducts heat well, and insulators (no free electrons) fail at both.

### phys-p08-q12 | points 4 | outcome o8 | difficulty hard

#### Question

A mercury barometer stands in a room at normal air pressure (p₀ = 1.013·10⁵ Pa).

a. Compute the height of the mercury column (ρ = 13.6·10³ kg/m³).
b. The doctor's cuff reports "120/80 mmHg". Convert the systolic value 120 mmHg into pascal overpressure.
c. Why did Torricelli not build his barometer with water?

#### Answer

a. h = 0.76 m; b. 1.6·10⁴ Pa; c. the water column would be ≈ 10 m tall — cumbrous

#### Solution

a. p₀ = ρ·g·h → h = p₀/(ρ·g) = 1.013·10⁵/(13.6·10³·9.81) = 0.76 m — the classic 76 cm.
b. Overpressure: p = ρ·g·h = 13.6·10³·9.81·0.120 = 1.60·10⁴ Pa (≈ 16 kPa) above the room pressure; the diastolic 80 mmHg is 1.1·10⁴ Pa.
c. Water is 13.6× lighter: h = 1.013·10⁵/(1.00·10³·9.81) = 10.3 m. A ten-metre glass tower fits in no laboratory — and this same 10.3 m is the absolute limit for any suction pump: past that, the atmosphere simply cannot push the water higher.
