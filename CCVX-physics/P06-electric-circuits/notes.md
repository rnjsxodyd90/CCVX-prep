# P6 — Electric circuits: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions. Built from the CCVX physics syllabus of 15 August 2025.

## 1. Current, voltage, charge

- Electric current (*elektrische stroom*) is charge on the move: **I = Q/t** (ampere = coulomb per second). In metals the carriers are free electrons (*vrije elektronen*) drifting opposite to the conventional current direction; each carries the elementary charge e = 1.602·10⁻¹⁹ C (BINAS). In fluids the carriers are ions.
- Voltage (*spanning*) is energy per charge: **U = ΔE/Q** (1 V = 1 J/C). A source (*spanningsbron*: battery *batterij*, accumulator *accu*, power supply) does work on the charge; the components in the circuit hand that energy out again (as light, heat, motion…).
- Convention tip: a battery's printed Ah is a *charge* capacity: 1 Ah = 3600 C. Energy capacity = U × Ah × 3600 s in joules.

## 2. Resistance, resistivity, conductance, Ohm's law

- Ohm's law, as the syllabus states it: **U = I·R** (for ohmic components: a straight (I,U) line). The conductance (*geleidbaarheid*) is **G = 1/R**, unit siemens (S) — the syllabus prints it first; G measures "how easily" a component conducts and it *adds* in parallel (see below).
- A wire's resistance follows from its material, length and thickness:

  ρ = RA/ℓ → **R = ρℓ/A** with ρ the resistivity (*soortelijke weerstand*, in Ω·m, BINAS tables: copper 17·10⁻⁹ Ω·m).

  Longer → more R; thicker → less R.
- Non-ohmic components bend the (I,U) line: a filament lamp's R *rises* as it heats; a diode passes current in one direction only after its threshold (≈ 0.7 V for Si, more for a LED); NTC and LDR shift R with temperature and light.

## 3. Series circuits (*serieschakeling*)

- One path, one current: **I_tot = I₁ = I₂ = …**
- The source voltage divides: **U_tot = U₁ + U₂ + …** and **R_tot = R₁ + R₂ + …**
- Voltage division (*spanningsdeling*): larger resistor gets the larger share: U₁/U₂ = R₁/R₂ (current is the same for both). This is the working principle of every sensor divider with an NTC, PTC or LDR.

## 4. Parallel circuits (*parallelschakeling*) — changed formula since 1 Sept 2025

- Same voltage on every branch, the current divides: **U_tot = U₁ = U₂ = …**, **I_tot = I₁ + I₂ + …**
- The syllabus now prints the replacement resistance as

  **1/R_tot = 1/R₁ + 1/R₂ + …** (changed formula — learn it in exactly this form!)

  The identical statement in conductances is G_tot = G₁ + G₂ + … (with G = 1/R) — sometimes the fastest route.
- Current division (*stroomdeling*): the *smaller* resistor carries the larger current: I₁/I₂ = R₂/R₁ (inverse!).
- Sanity check: R_tot in parallel is always smaller than the smallest branch. Two equal R's give R/2; R and ∞ (open branch) give R.

## 5. Mixed circuits, meters, short circuit

- Strategy for mixed circuits (*gemengde schakelingen*): (1) fold parallel groups into one replacement R; (2) treat the rest as series; (3) unfold again to find branch quantities with the division rules. Always re-check by computing the same quantity two ways (they must be equal — Kirchhoff in a nutshell for this syllabus).
- Ammeter: has (nearly) **zero** resistance and must be placed **in series** in the branch — placing it across a component creates a short. Voltmeter: has (nearly) **infinite** resistance and is placed **in parallel** across the component.
- Short circuit (*kortsluiting*): an unintended path of ≈ 0 Ω next to a component: current skips the component and can grow dangerously large — that is what fuses are for (below).

## 6. Components you must know

| component | behaviour | use in circuits |
|---|---|---|
| ohmic resistor (*ohmse weerstand*) | constant R; (I,U) straight through origin | current limiting, voltage division |
| diode | conducts one way only, from a threshold voltage | rectification, protection, LEDs |
| LDR | R drops when lit | light sensors, street-light control |
| NTC | R drops when warm | thermostats, inrush limiting |
| PTC | R rises when warm | self-limiting heaters, protection |
| lamp / heating element (*verwarmingselement*) | resistor that converts to light/heat; R rises with T | lighting, kettles |
| electric motor (*elektromotor*) | converts to motion; beware start currents | pumps, fans |
| fuse (*zekering*) | melts (breaks the circuit) when I exceeds its rating (household groups: typically 16 A at 230 V) | overcurrent protection |
| residual-current device (*aardlekschakelaar*) | trips when the currents out and back differ (leak to earth, e.g. 30 mA) | leakage protection against shock |

## 7. Power, energy, money

- **P = U·I** (watt). With Ohm's law also P = I²R = U²/R — pick the form that uses what is given.
- Energy: **E = P·t**. Household bookkeeping runs in kilowatt-hours: **1 kWh = 10³ W × 3600 s = 3.6·10⁶ J**. The kWh meter counts exactly this.
- Efficiency: η = E_nuttig/E_in = P_nuttig/P_in. An LED lamp gives the same light as an incandescent (*gloeilamp*) at ~⅐ of the power — the classic energy-saving context, and a fair comparison must include purchase price and lifetime.
- Generation of electricity (*opwekking*): whatever the source (steam turbine, wind, solar), the plant feeds the grid at a set power; the consumer *draws* power — the grid sums it all.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — current from charge and electrons

A starter motor draws 1.8·10³ C in 15 s. Compute the current and the number of electrons that passed.

**Solution.** I = Q/t = 1.8·10³/15 = 1.2·10² A. N = Q/e = 1.8·10³/1.602·10⁻¹⁹ = 1.1·10²² electrons.

## Example 2 — a sensor divider (LDR night switch)

An LDR is in series with a fixed resistor R = 10 kΩ on a 12 V supply. In the dark the LDR is 90 kΩ; in daylight 1.0 kΩ. Compute the voltage across R in both cases.

**Solution.** Voltage division (same current): U_R = U_bron·R/(R + R_sensor).
- Dark: U_R = 12·10/(10 + 90) = 1.2 V.
- Daylight: U_R = 12·10/(10 + 1.0) = 10.9 V.
Swap the two components and the logic flips — the designer picks the side whose voltage the transistor reads.

## Example 3 — the new parallel formula in action

Three resistors of 6.0 Ω, 3.0 Ω and 2.0 Ω in parallel on a 12 V battery.

a. Compute R_tot.
b. Compute the branch currents and the total current.

**Solution.** a. 1/R_tot = 1/R₁ + 1/R₂ + 1/R₃ = 1/6.0 + 1/3.0 + 1/2.0 = 1/6 + 2/6 + 3/6 = 6/6 = 1 → R_tot = 1.0 Ω. (Same answer via G: G_tot = 0.167 + 0.333 + 0.500 = 1.0 S → R = 1/G = 1.0 Ω ✓)
b. All branches have 12 V: I₁ = 2.0 A, I₂ = 4.0 A, I₃ = 6.0 A; I_tot = 12.0 A. Check with Ohm: I = U/R_tot = 12/1.0 = 12 A ✓. And the smallest resistor indeed carries the largest current.

## Example 4 — why the extension cord gets warm

A 25 m copper extension cord with wire section 1.5 mm² feeds a 3.5 kW heater at 230 V.

a. Compute the cord's resistance (two wires carry the current, out and back).
b. Compute the power dissipated in the cord and the voltage lost across it.

**Solution.** a. Total copper length 2·25 = 50 m: R = ρℓ/A = 17·10⁻⁹·50/1.5·10⁻⁶ = 0.57 Ω. b. I = P/U = 3500/230 = 15.2 A. P_cord = I²R = 15.2²·0.57 = 1.3·10² W(!); U_cord = I·R = 8.7 V. Moral: roll high-power reels completely out and use thick wire — the heater silently "lost" 9 V of its 230 V.

## Example 5 — kettle on the group fuse

A kitchen group (fuse 16 A at 230 V) feeds simultaneously a 2000 W kettle and a 1500 W coffee machine. Does the fuse hold?

**Solution.** The devices are in parallel on the same group: both see 230 V. I_kettle = 2000/230 = 8.7 A; I_coffee = 1500/230 = 6.5 A; I_tot = 15.2 A < 16 A — it just holds. Add a 900 W toaster (3.9 A) and the 19.1 A trips the fuse. The fuse is a deliberately weak link that melts before the wiring overheats.

## Example 6 — electricity bill

A family replaces five 60 W incandescent lamps with five 8.5 W LED lamps; the lamps burn 4.0 h per 24 h on average. Electricity costs €0.25 per kWh (given).

a. Compute the yearly energy saved.
b. Compute the yearly money saved and the payback time if the LEDs cost €7.50 each.

**Solution.** a. ΔP = 5·(60 − 8.5) = 257.5 W = 0.2575 kW. Time per year: 4.0·365 = 1460 h. Saved: E = 0.2575·1460 = 376 kWh ≈ 3.8·10² kWh. b. 376·0.25 = €94 per year. Cost: 5·7.50 = €37.50 → payback 37.50/94 yr = 0.40 yr ≈ 4.8 months. After that, pure profit — for one of the cheapest climate measures available.
