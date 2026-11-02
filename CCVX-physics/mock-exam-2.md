# CCVX Physics — Mock exam 2

**Fully original mock exam**, written for this prep. Nothing is copied from CCVX or CvTE exams and no CCVX/CvTE contexts are reused. Modelled on the CCVX physics syllabus of 15 August 2025 (in force from 1 September 2025; with revised quantum mechanics, the current parallel-circuit rule, E = mc² and the Doppler effect). For CCVX's own free sample exams, see the CCVX [sample exam page](https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensNatuurkunde/VoorbeeldTentamensNatuurkunde.html) (external).

## Exam rules (as in the real sitting)

- **Time: 3 hours (180 minutes).** Written exam, open questions; partial credit for correct steps — always show your working: formula, substitution, result with unit.
- You may use **BINAS** (5th edition or later, English edition allowed) **with no notes in it**, one simple scientific calculator (no graphing calculator), pen and pencil (pencil only for graphs), a set square and a watch (no smartwatch).
- Constants not in the question should be taken from BINAS. Use **g = 9.81 m/s²**, unless stated otherwise. Give answers with a sensible number of significant figures and always with a unit.
- This exam has **16 questions**, total **69 points**. Your grade now = 1 + 9 × (score/69). Time guide: about 2½ minutes per point.
- The [marking scheme](mock-exam-2-marking-scheme.md) gives the points per step. Check your work only after your full attempt.

---

### phys-mock2-q01 | points 4 | outcome P1 | difficulty easy

#### Question

An organ pipe is open at both ends and sounds its fundamental tone. The pipe is 1.70 m long; the speed of sound in the hall is 343 m/s.

a. Compute the fundamental frequency.
b. Compute the frequency of the first overtone and state its harmonic number.
c. The same pipe with one end closed: compute the new fundamental frequency and explain in one line why it is lower.

#### Answer

a. f = 1.0·10² Hz; b. f = 2.0·10² Hz (2nd harmonic); c. f = 5.0·10¹ Hz

#### Solution

a. Open–open pipe: ℓ = ½λ → λ = 2·1.70 = 3.40 m → f = v/λ = 343/3.40 = 1.0·10² Hz (101 Hz).
b. First overtone = 2nd harmonic: λ = ℓ = 1.70 m → f = 343/1.70 = 2.02·10² ≈ 2.0·10² Hz (exactly 2 × f₁, as expected for an open-open family).
c. Closed at one end: ℓ = ¼λ → λ = 4·1.70 = 6.8 m → f = 343/6.8 = 5.0·10¹ Hz. The closed end forces a node there — only a quarter wave fits the same tube, so λ doubles and the fundamental halves.

### phys-mock2-q02 | points 5 | outcome P2 | difficulty medium

#### Question

A nuclear-medicine department receives Tc-99m (t½ = 6.0 h), activity 6.0·10⁸ Bq, at 06:00.

a. Compute the activity at 12:00 the same day.
b. Compute the activity at 06:00 the next day.
c. State in one sentence why a hospital prefers daily fresh deliveries of this isotope.
d. During one scintigram an organ of 0.15 kg absorbs 0.60 mJ of γ energy. Compute the absorbed dose D and the equivalent dose H (w_R(γ) = 1).

#### Answer

a. A = 3.0·10⁸ Bq; b. A = 3.8·10⁷ Bq; c. after one day only 1/16 of the activity is left; d. D = 4.0 mGy, H = 4.0 mSv

#### Solution

a. 6.0 h = exactly one half-life → A = 6.0·10⁸·½ = 3.0·10⁸ Bq.
b. 24 h = 4 half-lives → A = 6.0·10⁸·½⁴ = 3.75·10⁷ ≈ 3.8·10⁷ Bq.
c. With halving every 6 hours, the day's leftovers are unusably weak (1/16 per extra day), so a clinic orders fresh Tc-99m daily — short t½ means it also clears the patient quickly.
d. D = E/m = 0.60·10⁻³/0.15 = 4.0·10⁻³ Gy; H = w_R·D = 1·4.0·10⁻³ = 4.0 mSv.

### phys-mock2-q03 | points 5 | outcome P3 | difficulty medium

#### Question

A parachutist (m = 80 kg, c_w·A = 0.80 m², air density 1.29 kg/m³) jumps from a balloon.

a. State her acceleration in the first moment after the jump, and explain why it is (nearly) g.
b. Compute her terminal velocity.
c. After falling 2.0·10² m from rest, she has essentially reached the terminal velocity of part (b). Compute with an energy ledger how much heat the air has gained over those 2.0·10² m.

#### Answer

a. a ≈ g = 9.81 m/s² (drag ≈ 0 at v ≈ 0); b. v = 39 m/s; c. Q = 9.6·10⁴ J

#### Solution

a. Just after leaving, v ≈ 0, so the air resistance ½ρc_wAv² ≈ 0 — only gravity acts: a = g = 9.81 m/s² (minus a still-negligible drag).
b. Terminal when F_w,l = F_z: ½·ρ·c_w·A·v² = m·g → v = √(2·80·9.81/(1.29·0.80)) = √(1.570·10³/1.032) = 39 m/s.
c. Energy ledger: m·g·h = E_k + Q → Q = m·g·h − ½m·v² = 80·9.81·2.0·10² − ½·80·39² = 1.5696·10⁵ − 6.08·10⁴ = 9.6·10⁴ J heats the air.

### phys-mock2-q04 | points 4 | outcome P4 | difficulty easy

#### Question

A car of 1.4·10³ kg drives 25 m/s (90 km/h) and brakes with a constant total braking force of 7.0·10³ N.

a. Compute the braking distance with the work–energy relation.
b. Show with the formula what the braking distance becomes at 50 m/s (same force).
c. State the practical conclusion for a 30 km/h school zone.

#### Answer

a. s = 63 m; b. 250 m (4×); c. braking distance grows with v² — every km/h over the limit multiplies the metres, so slowing to 30 km/h near schools buys real stopping length

#### Solution

a. ΣW = ΔE_k: −F·s = −½m·v² → s = ½m·v²/F = ½·1.4·10³·25²/7.0·10³ = 4.375·10⁵/7.0·10³ = 62.5 ≈ 63 m.
b. s ∝ v²: double speed → 2² = 4× the distance → s = 4·62.5 = 250 m.
c. The quadratic in (b) means that even 10 km/h extra around children costs outsize stopping distance — school zones at 30 km/h work because the energy scales with the square, not the headline number.

### phys-mock2-q05 | points 4 | outcome P4 | difficulty medium

#### Question

A toy launcher compresses a spring (C = 3.0·10² N/m) by 0.10 m and fires a ball of 60 g straight up. Neglect friction.

a. Compute the spring energy and the launch speed.
b. Compute the maximum height above the launch position.
c. With a 15% energy loss on firing, compute the new maximum height.

#### Answer

a. E_veer = 1.5 J, v = 7.1 m/s; b. h = 2.5 m; c. h = 2.2 m

#### Solution

a. E_veer = ½·C·u² = ½·3.0·10²·0.10² = 1.5 J. Then ½mv² = 1.5 → v = √(2·1.5/0.060) = √50 = 7.1 m/s.
b. m·g·h = 1.5 → h = 1.5/(0.060·9.81) = 2.5 m (2.55 m).
c. Only 85% converts: h′ = 0.85·2.55 = 2.2 m (E ∝ h at the top, directly scalable).

### phys-mock2-q06 | points 5 | outcome P5 | difficulty medium

#### Question

On the Moon (M = 7.35·10²² kg, R = 1.738·10⁶ m — G·M = 4.905·10¹² m³/s², BINAS) an astronaut drops a hammer from 1.4 m.

a. Compute the Moon's surface g.
b. Compute the fall time and the impact speed.
c. The Moon's escape velocity is 2.4 km/s. Compute the escape *energy per kg* from the Moon's surface and compare it with the Earth's 6.3·10⁷ J/kg (given): why do engineers dream of launching from the Moon for deep-space missions?

#### Answer

a. g = 1.6 m/s²; b. t = 1.3 s, v = 2.1 m/s; c. 2.8·10⁶ J/kg ≈ 1/22 of Earth's — launching costs far less energy per kg

#### Solution

a. g = G·M/R² = 4.905·10¹²/(1.738·10⁶)² = 4.905·10¹²/3.02·10¹² = 1.62 ≈ 1.6 m/s².
b. t = √(2h/g) = √(2.8/1.62) = 1.31 ≈ 1.3 s; v = g·t = 1.62·1.31 = 2.1 m/s (check ½·2.1² = 2.2 ≈ g·h = 1.62·1.4 ✓).
c. Per kg: G·M/R = ½·v_esc² = 4.905·10¹²/1.738·10⁶ = 2.8·10⁶ J/kg — only 4.5% of Earth's 6.3·10⁷ J/kg, a factor ≈ 22 less (and no atmosphere in the way): deep-space hardware is cheaper out of the Moon's well, and material could even be sourced *there*.

### phys-mock2-q07 | points 5 | outcome P6 | difficulty medium

#### Question

An automatic garden light uses a series divider on 12 V: a fixed resistor R = 22 kΩ and an LDR (daylight: 2.0 kΩ; darkness: 40 kΩ). The lamp electronics read the voltage across the *fixed resistor* and switch the lamp ON when that voltage falls below 5.0 V.

a. Compute the voltage across the fixed resistor in daylight.
b. Compute it in the dark, and state whether the lamp is on.
c. Explain why the LDR is placed in a series divider at all, instead of connecting it straight to the 12 V supply.

#### Answer

a. U_R = 11.0 V; b. U_R = 4.3 V → the lamp is ON; c. the divider converts the LDR's resistance change into a voltage change — connected straight to 12 V the LDR would always see the same 12 V and nothing would switch

#### Solution

a. Divider: U_R = 12·22/(22 + 2.0) = 264/24 = 11.0 V (daylight: the LDR is small, so nearly the full voltage falls across R).
b. Dark: U_R = 12·22/(22 + 40) = 264/62 = 4.26 ≈ 4.3 V — below the 5.0 V threshold → the electronics sees "dark" and switches the lamp ON. Logic check: the reading falls with darkness, exactly as designed.
c. A series divider turns ΔR into ΔU (the fixed resistor shares the supply in proportion); with the LOR alone across 12 V the voltage would be a constant 12 V no matter how dark — no signal left to sense.

### phys-mock2-q08 | points 3 | outcome P6 | difficulty easy

#### Question

An electric-car home charger runs at 7.4 kW for 2.5 h per charging day, on 240 days a year (electricity at €0.30/kWh, given).

a. Compute the yearly energy use in kWh and the yearly cost.
b. Convert one charging day's energy use into joules.

#### Answer

a. E = 4.4·10³ kWh, cost €1.3·10³; b. E = 6.7·10⁷ J

#### Solution

a. Per day: E = 7.4·2.5 = 18.5 kWh. Yearly: 18.5·240 = 4.44·10³ ≈ 4.4·10³ kWh; cost: 4.44·10³·0.30 = €1.33·10³ ≈ €1.3·10³.
b. E = 18.5 kWh = 18.5·3.6·10⁶ = 6.66·10⁷ ≈ 6.7·10⁷ J (check P·t = 7400·9000 = 6.66·10⁷ ✓).

### phys-mock2-q09 | points 5 | outcome P7 | difficulty medium

#### Question

In an X-ray tube, electrons are accelerated from rest through a voltage of 4.0·10⁴ V before they hit the anode (m_e = 9.109·10⁻³¹ kg, e = 1.602·10⁻¹⁹ C, h = 6.626·10⁻³⁴ J·s, c = 3.00·10⁸ m/s).

a. Compute the kinetic energy delivered per electron, in eV and in J.
b. Occasionally one electron's *entire* kinetic energy becomes a single photon. Compute that photon's energy and its wavelength, and state the radiation kind. (This endpoint is the tube's hardest radiation.)
c. Most emitted photons are weaker (longer wavelength) than the endpoint. Explain with the braking process why the tube emits a continuous spectrum rather than a single line.

#### Answer

a. E_k = 40 keV = 6.4·10⁻¹⁵ J; b. photon 40 keV, λ = 3.1·10⁻¹¹ m, X-radiation; c. electrons brake in several partial collisions, each producing a partial-energy photon — hence every energy below the endpoint appears: a continuum

#### Solution

a. ΔE_k = q·U = e·4.0·10⁴ = 4.0·10⁴ eV = 40 keV = 6.408·10⁻¹⁵ ≈ 6.4·10⁻¹⁵ J.
b. Photon = full E_k: 40 keV; λ = hc/E = 6.626·10⁻³⁴·3.00·10⁸/6.408·10⁻¹⁵ = 3.1·10⁻¹¹ m (0.031 nm): X-radiation. Only a full-stop collision gives the endpoint energy.
c. An electron usually loses its energy in *several* braking collisions before stopping inside the anode (bremsstrahlung). Each collision converts a fraction of the remaining kinetic energy into one photon, so photons emerge at every energy from the endpoint downwards — a continuous spectrum, with the endpoint λ as its short-λ edge. (Most of the energy ends as anode heat, which is why tubes need cooling.)

### phys-mock2-q10 | points 4 | outcome P7 | difficulty medium

#### Question

In a 3000 rpm alternator, one coil frame (area A = 4.0·10⁻³ m²) rotates in a homogeneous field B = 0.60 T. The coil has N = 800 turns on a circuit with total resistance 40 Ω. In every quarter turn the flux through the frame swings by B·A.

a. The rotation period is 0.020 s (3000 rpm = 50 rev/s). Compute the flux change ΔΦ in a quarter turn, and the product N·ΔΦ/Δt over that quarter turn.
b. Give the corresponding induced-current number U_ind/R.
c. State two independent changes that would each *quadruple* the peak induced voltage, naming the proportionality that makes each work.

#### Answer

a. ΔΦ = 2.4·10⁻³ Wb, N·ΔΦ/Δt = 3.8·10² (384); b. I = 9.6 A; c. e.g. quadruple N (U_ind ∝ N) or quadruple the rpm (U_ind ∝ dΦ/dt; also: quadruple B or A)

#### Solution

a. ΔΦ = B·A = 0.60·4.0·10⁻³ = 2.4·10⁻³ Wb. A quarter turn takes 0.020/4 = 5.0·10⁻³ s → N·ΔΦ/Δt = 800·2.4·10⁻³/5.0·10⁻³ = 800·0.48 = 3.8·10² (3.84·10²).
b. I = U_ind/R = 384/40 = 9.6 A (using the proportional voltage number from a).
c. Per the syllabus proportionalities U_ind ∝ N and U_ind ∝ dΦ/dt: quadruple the number of turns N, or quadruple the turning speed (same flux swing in a quarter of the time). Also valid: quadruple B or A, since Φ = B⊥·A.

### phys-mock2-q11 | points 4 | outcome P8 | difficulty easy

#### Question

A camping cooler with 0.50 kg of ice at 0 °C must cool drinks to fridge temperature. (Given: the heat of fusion of ice is L_s = 3.34·10⁵ J/kg — use Q = m·L_s for melting; c_water = 4.18·10³ J/(kg·K).)

a. Compute the heat needed to melt all the ice (staying at 0 °C).
b. Explain, with the molecular model, why the temperature stays 0 °C while the ice melts, even though heat keeps flowing in.
c. The melt water warms from 0 °C to 25 °C. Compute the total heat taken from the drinks over the whole process.

#### Answer

a. Q = 1.7·10⁵ J; b. the energy first breaks the crystal bonds (potential energy of the molecules), not their kinetic energy — T only rises when the last ice is gone; c. Q = 2.2·10⁵ J

#### Solution

a. Q₁ = m·L_s = 0.50·3.34·10⁵ = 1.67·10⁵ ≈ 1.7·10⁵ J.
b. Temperature measures the average *kinetic* energy of molecules. Melting energy converts into the *potential* energy of loosened molecular bonds: the crystal lattice opens, molecules gain freedom but no extra speed — so the thermometer stubbornly reads 0 °C until every crystal grain has converted. Only afterwards does c·m·ΔT apply.
c. Q₂ = m·c·ΔT = 0.50·4.18·10³·25 = 5.2·10⁴ J; Q_tot = 1.67·10⁵ + 5.2·10⁴ = 2.2·10⁵ J pulled out of the drinks.

### phys-mock2-q12 | points 4 | outcome P8 | difficulty medium

#### Question

A bicycle tyre holds air at 4.0·10⁵ Pa (absolute, given) at 290 K. The bike is stored outdoors at −10 °C; treat the tyre volume as constant.

a. Compute the absolute pressure of the tyre air in storage.
b. Compute the reading of a pressure gauge (overpressure) in storage.
c. Inflating the tyre, the pump gets warm. Give a molecular explanation for this heating (no cold source involved).

#### Answer

a. p = 3.6·10⁵ Pa; b. p_over = 2.6·10⁵ Pa; c. the pump does work on the gas; the ordered work becomes extra random molecular motion — internal energy, i.e. warmth

#### Solution

a. Constant V, n: p/T constant → p₂ = 4.0·10⁵·263/290 = 3.63·10⁵ ≈ 3.6·10⁵ Pa. (Kelvin first: −10 °C = 263 K!)
b. A gauge reads overpressure: p_abs − p_atmosphere = 3.63·10⁵ − 1.01·10⁵ = 2.6·10⁵ Pa.
c. Compressing is work on the gas (piston pushes molecules against their motion); molecules bounce back *faster* from the moving piston — random kinetic energy rises: internal energy up = temperature up. The metal pump wall takes its share and feels warm.

### phys-mock2-q13 | points 4 | outcome P9 | difficulty medium

#### Question

The prisms inside binoculars are 45°–45°–90° prisms of crown glass (n = 1.52).

a. Compute the critical angle of this glass against air.
b. Inside the prism a ray meets a long face at 45° to the normal. Show with numbers that total internal reflection occurs, and state the resulting deviation of the beam.
c. Give one practical advantage of such a TIR prism over a metal-coated mirror in binoculars.

#### Answer

a. g = 41° (41.1°); b. 45° > g → total internal reflection, the beam deviates by 90°; c. essentially lossless reflection with no coating to age or scratch — brighter image

#### Solution

a. sin g = 1/n = 1/1.52 = 0.658 → g = 41.1 ≈ 41°.
b. The incidence 45° exceeds the critical angle 41.1° → the boundary cannot refract, it reflects totally. With i = t = 45° at that face the incoming and outgoing directions differ by exactly 90° — the upright periscope turn the binocular uses twice per channel.
c. TIR needs no metal layer: virtually every photon reflects (no absorption dip), nothing oxidises or scratches off — the image stays bright for decades, unlike a silvered mirror.

### phys-mock2-q14 | points 5 | outcome P10 | difficulty medium

#### Question

Hydrogen's Lyman α line comes from the n = 2 → n = 1 transition, a jump of 10.2 eV.

a. Compute the photon energy in J and the wavelength of this line (shortcuts h = 6.626·10⁻³⁴ J·s, c = 3.00·10⁸ m/s, e = 1.602·10⁻¹⁹ C; λ[nm] ≈ 1240/E[eV] allowed), and state the spectral region.
b. In a quasar's spectrum this line sits at 121.8 nm while its laboratory value is 121.6 nm. Compute the quasar's radial velocity and give the sign of its motion (syllabus form: v = (Δλ/λ)·c).

#### Answer

a. E = 1.63·10⁻¹⁸ J, λ = 1.22·10² nm (ultraviolet); b. v = 4.9·10⁵ m/s, receding (redshift)

#### Solution

a. E = 10.2·1.602·10⁻¹⁹ = 1.634·10⁻¹⁸ ≈ 1.63·10⁻¹⁸ J. λ = hc/E = 1.986·10⁻²⁵/1.634·10⁻¹⁸ = 1.216·10⁻⁷ m = 121.6 ≈ 1.22·10² nm — ultraviolet, far past the violet edge (check: 1240/10.2 = 122 nm ✓).
b. Δλ = 121.8 − 121.6 = +0.2 nm: the line moved to a *longer* wavelength → redshift, the quasar moves away. v = (Δλ/λ)·c = (0.2/121.6)·3.00·10⁸ = 4.97·10⁵ ≈ 4.9·10⁵ m/s receding.

### phys-mock2-q15 | points 3 | outcome P10 | difficulty easy

#### Question

The solar constant at Earth is I_E = 1.37·10³ W/m². Mars orbits at 1.52 times the Earth–Sun distance.

a. Compute the intensity of sunlight at Mars.
b. A Mars rover's panel is rated at 4.0 m² and 20% efficiency (given). Estimate its maximal electrical power at Mars.

#### Answer

a. I = 5.9·10² W/m²; b. P = 4.7·10² W

#### Solution

a. I ∝ 1/r²: I_Mars = 1.37·10³/1.52² = 1.37·10³/2.310 = 5.93·10² ≈ 5.9·10² W/m².
b. P_el = 0.20·5.93·10²·4.0 = 4.74·10² ≈ 4.7·10² W — before dust, tilt and cold losses: Martian panels must be big, or the battery brave.

### phys-mock2-q16 | points 5 | outcome P11 | difficulty hard

#### Question

A novel light sensor and solar cell both use a semiconductor with band gap 1.8 eV.

a. Compute the longest wavelength at which this semiconductor still responds (E_f = E_gap threshold; λ[nm] ≈ 1240/E[eV] allowed).
b. Decide whether a yellow photon of 550 nm (E ≈ 2.25 eV) can drive the cell, and state the fate of its 0.45 eV of surplus.
c. Describe, with the band model, how this same material works in an LDR: what happens to its resistance when the room lights up, and why.

#### Answer

a. λ_threshold = 6.9·10² nm; b. yes — 2.25 ≥ 1.8 eV, one electron promoted; the 0.45 eV surplus becomes heat; c. more light → more photons lift electrons across the gap → more carriers in the conduction band → lower resistance

#### Solution

a. Threshold: λ = 1240/1.8 = 689 ≈ 6.9·10² nm — the material sees light up to deep red; everything longer (infrared) passes unnoticed.
b. The yellow photon carries 2.25 eV ≥ the 1.8 eV gap → yes, it promotes one electron across the gap and drives current (one electron-hole pair per absorbed photon, not more). The extra 0.45 eV sheds almost immediately as lattice vibration: heat in the cell.
c. In the dark the conduction band of the semiconductor sits nearly empty (high R). Room light pumps in photons with E ≥ 1.8 eV; each absorbed photon lifts one electron over the gap into a mobile state (leaving a hole). More light → more carriers → the resistance falls. That light-to-resistance ladder is the LDR's entire working secret.

---

*End of mock exam 2. Total: 69 points. The marking scheme is in [mock-exam-2-marking-scheme.md](mock-exam-2-marking-scheme.md).*
