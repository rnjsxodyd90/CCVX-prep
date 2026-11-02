# Walkthrough — CCVX sample exam 1 (physics, 2017)

Total: 69 points in 5 opgaven (Q1 18, Q2 12, Q3 15, Q4 8, Q5 16), 3 hours, grade = 1 + 9 × (score/69). Official title: *Voorbeeldtentamen natuurkunde 1*, CCVX, © 2017. Free official sources: the [paper](https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensNatuurkunde/Voorbeeldtentamen%20natuurkunde%201.pdf) and the [answer key](https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensNatuurkunde/Voorbeeldtentamen%20natuurkunde%201%20-%20Uitwerking.pdf) on ccvx.nl. Nothing of the official text, figures, tables or answer-key wording is copied here: every line is our own phrasing and every number is derived by us from the data the paper itself supplies. Syllabus note: this 2017 paper predates the 1 September 2025 syllabus, but every topic in it is still on the current syllabus. Fun detail: Q4 had to *give* candidates the formula E = mc² in 2017 — since 2025 you are expected to know it (our folder [P10](../P10-electromagnetic-radiation-and-stars/)). New-2025 topics (Doppler, quantum) are naturally absent from this paper.

## Question 1 (official paper): ejection-seat training with a (v,t) diagram (18 points)

**Asked, per part:** a vertical rail shoots a seat+pilot up; a launch force works only the first 1.81 s, and its (v,t)-diagram of the first 6.00 s is drawn. Find the maximum speed (a), the height reached (b — the paper allows a fallback value 85 m), the maximum acceleration during the ascent (c), the work the launch force would do without friction (d, mass seat+pilot 96 kg), explain the slight knob in the graph at t = 4.26 s (e), and decide with the diagram whether the pilot lands before or after t = 8.00 s (f).

**The official (v,t) figure, in our own words:** from (0,0) a steep curve rises, bends over and reaches its top at just under 30 m/s near t ≈ 1.4 s (we read 28.5 m/s from the enlarged grid); then it descends nearly straight through zero at t = 4.26 s, where the slope visibly changes, and continues as a straight line to about −15 m/s at t = 6.00 s.

**Subdomains:** [P03](../P03-force-and-motion/) (motion from diagrams, Newton), [P04](../P04-energy-and-interaction/) (work–energy). **BINAS:** only g = 9.81 m/s² needed.

**Solution (ours):**

a. Direct reading of the peak of the curve: v_max ≈ 28.5 m/s. (The exam paper provides the same graph enlarged on the answer sheet — always use that.)

b. Height = area under the curve from t = 0 to the zero crossing at t = 4.26 s (up to there, the pilot is still rising). Quick estimate as a triangle: ½·4.26 s·28.5 m/s ≈ 61 m. But the curve bows *above* the left side of that triangle (the steep convex start) — box-counting the grid (each box ≈ 2.5 m of area) adds roughly 9 m: h_max ≈ 70 m. An estimate anywhere in the 60–70s m band with a visible area method passes; the official key lands at ≈ 70 m.

c. Acceleration = tangent slope in the (v,t). The steepest slope is at t = 0: draw the tangent there — it climbs about 30 m/s within the first ≈ 0.8 s → a_max ≈ 37–39 m/s², i.e. roughly 4g. (Official key works with the same tangent and reports ≈ 39 m/s².)

d. Without friction the launch work converts fully into gravitational potential energy at the top: W = m·g·h_max = 96·9.81·70 = 6.6·10⁴ J ≈ 66 kJ. (With the fallback 85 m: 96·9.81·85 = 8.0·10⁴ J.)

e. The knob marks the top (v = 0 at 4.26 s). *While rising* both gravity and air friction pull downward (F_tot = F_z + F_w, larger deceleration); *while falling* gravity still pulls down but friction reverses upward against the motion (F_tot = F_z − F_w, smaller acceleration). The slope in the (v,t) must therefore become less steep right at the top: exactly the slight knob the graph shows.

f. Extend the straight descent line: slope = −15 m/s per (6.00 − 4.26) s ≈ −8.6 m/s². At t = 8.00 s (3.74 s after the top) the speed would be about −32 m/s. The area of that descent triangle is ½·32·3.74 ≈ 60 m — less than the 70 m gained, so the pilot is still ≈ 10 m above ground at t = 8.00 s. **The pilot lands later than 8.00 s.** Cross-check by kinematics: down from 70 m at a = 8.6 m/s² takes √(2·70/8.6) = 4.0 s → landing at ≈ 4.26 + 4.0 = 8.3 s. Same answer, cleaner physics. ∎

**Common mistakes:** reading the graph peak as exactly 30 m/s (grid!); for (b) computing the triangle only and staying at 61 m without checking the convex bow; taking the maximum slope at the peak of the curve instead of at t = 0; in (d) forgetting that friction-free work fills only mgh (the moving start point has kinetic energy zero anyway); in (e) saying "friction changes direction" without tying it to the slope change; in (f) comparing heights per second-vision instead of areas.

**Points note (official key):** a 2p, b 3p, c 3p, d 3p, e 3p, f 4p.

## Question 2 (official paper): string and stopped pipe resonance (12 points)

**Asked:** a string between fixed ends P and Q is excited by a driver of adjustable frequency; beside it stands a pipe closed at one end, depth d = 25.0 cm (sound speed 343 m/s). Compute the lowest two resonance frequencies of the pipe (a — fallback 400 Hz and 1200 Hz offered); state what the string length must satisfy so the lowest of those frequencies also resonates in the string (b, wave speed on the string 823 m/s); compute the shortest string in which *both* pipe resonances can resonate (c); and explain why lowering the temperature kills the resonance (d).

**Subdomains:** [P01](../P01-oscillations-and-waves/) (standing waves in strings and pipes, resonance). **BINAS:** speed of sound table (only as a check: 343 m/s given).

**Solution (ours):**

a. Stopped-open pipe: ℓ = (2n − 1)·¼λ. Fundamental: λ = 4·0.25 = 1.00 m → f₁ = 343/1.00 = 3.43·10² Hz. Next mode (3 quarter-waves): λ = 4·0.25/3 = 0.333 m → f₂ = 343/0.333 = 1.03·10³ Hz — neatly 3 × 343, as a stopped pipe only carries odd harmonics. (The fallback 400/1200 Hz keeps that ratio too.)

b. A string fixed at both ends: ℓ = k·½λ (k = 1, 2, 3, …). For f₁ = 343 Hz the wavelength on the string is λ = 823/343 = 2.40 m, so the string must satisfy **ℓ = k·1.20 m** (any whole multiple of half of 2.40 m).

c. The second frequency 1029 Hz needs ℓ = n·½λ₁ with λ₁ = 823/1029 = 0.80 m, i.e. **ℓ = n·0.40 m** (n = 1, 2, 3, …). Both at once: ℓ = k·1.20 m = n·0.40 m. The smallest common fit is ℓ = 1.20 m (k = 1, n = 3: the string then sings its fundamental at 343 Hz and its third harmonic at 1029 Hz — the same wave ends up resonating both ways).

d. The speed of sound drops with temperature: at the same pipe length, a *smaller* wavelength is now needed and the fixed driver frequency no longer matches ¼λ — resonance in the pipe dies. (The string story also moves: a colder string shrinks slightly and its tension rises, shifting its wave speed — again spoiling the match with which resonance was dialled in.)

**Common mistakes:** using the open-open rule ℓ = n·½λ for a stopped pipe (the 25.0 cm is a *quarter* wave, the given fallback answers would mislead you); in (b) forgetting that only multiples k·1.20 m resonate, not "ℓ = 1.20 m" exclusively; in (c) adding the two lengths instead of looking for a common multiple; in (d) blaming only the string or only the air without saying which resonance formula breaks.

**Points note (official key):** a 3p, b 3p, c 4p, d 2p.

## Question 3 (official paper): heat gun on AC mains (15 points)

**Asked:** a heat gun (fan motor in parallel with a glowing wire KLMNO) runs on effective AC voltage 220 V; in steady use the fan draws 750 mA and the wire draws 8.50 A. Compute the wire's resistance now (a); compute the whole appliance's power (b); explain why the wire current is larger just after switching on (c); a short develops between points M and O — halfway along the wire KLMNO: compute the current through piece KLM, through piece MNO, and through the fan (d); the Chinese producer sells the same gun into 230 V Europe with one extra resistor: sketch the circuit with it (e1) and compute its value (e2).

**Subdomains:** [P06](../P06-electric-circuits/) (Ohm's law, parallel circuits, power, short circuit). **BINAS:** none needed.

**Solution (ours):**

a. Ohm across the whole glowing wire in use: R = U/I = 220/8.50 = 25.9 Ω.

b. The two parts sit in parallel on 220 V: I_tot = 8.50 + 0.750 = 9.25 A. P = U·I = 220·9.25 = 2.04·10³ W ≈ 2.0 kW. (Cross-check: P_wire = 220·8.5 = 1.87·10³ W; P_fan = 165 W; sum 2.04·10³ ✓.)

c. Directly after switching on the wire is still cold; a metal's resistance grows strongly with temperature, so the cold wire has a much lower resistance and starts with an inrush current larger than the steady 8.50 A.

d. The short circuit M–O puts both ends of MNO at the same potential:
   1. Piece KLM (half of the wire, so half of 25.9 Ω ≈ 12.9 Ω) now sees the full 220 V: I = 220/12.9 = 17 A — double the steady current.
   2. Piece MNO is shorted: V_M = V_O, so no current at all: 0 A.
   3. The fan sits in its own parallel branch and notices nothing: still 0.750 A.

e1. Draw the extra resistor **in series**, between the mains plug and the gun itself (the whole appliance in series with this resistor).
e2. In the new steady state the gun wants its usual 220 V at 9.25 A while the mains supplies 230 V: the extra resistor must drop the spare 10 V at 9.25 A: R = 10.0/9.25 = 1.08 Ω ≈ 1.1 Ω. (It must be rated for P = U·I ≈ 9.3·10¹ W, and it eats energy — in practice a series resistor is how *not* to build a dual-voltage product, but the physics is what it is.)

**Common mistakes:** computing the wire power with I_tot instead of the 8.50 A branch current; adding 0.75 A to the 17 A for the short-circuit current of the wire piece (the short is inside the wire branch, the 17 A is what that branch now takes); drawing the extra resistor in *parallel* in e1 (that heats the box, not drops the voltage); forgetting that the motor branch is independent in the parallel circuit.

**Points note (official key):** a 2p, b 3p, c 2p, d 4p, e1 1p, e2 3p.

## Question 4 (official paper): the two decay routes of Cs-137 (8 points)

**Asked:** caesium-137 decays 6% directly to stable barium-137, emitting an electron with 1.18 MeV of kinetic energy (write the reaction equation, a); 94% goes via an excited barium state ¹³⁷ᵐBa that sheds a gamma photon on the way down, the electron in that first step carrying 0.51 MeV. The paper hands you Einstein's relation E = mc² (in 2017 that was a gift; since the 2025 syllabus you must know it by heart). Compute the mass difference between the Cs-137 and Ba-137 nuclei (b); compute the frequency of the gamma photon (c).

**Subdomains:** [P02](../P02-medical-imaging-and-radiation/) (decay equations, gamma), [P10](../P10-electromagnetic-radiation-and-stars/) (E = mc², E = hf). **BINAS:** h, c, e, m_e (constants), Z of Cs and Ba (periodic table or isotopes table).

**Solution (ours):**

a. β⁻ decay: A unchanged, Z up by one: **¹³⁷₅₅Cs → ¹³⁷₅₆Ba + ⁰₋₁e**. (Check: 137 = 137 ✓, 55 = 56 − 1 ✓.)

b. The released energy in the direct route is the electron's 1.18 MeV of kinetic energy, and the electron itself is mass that left the nucleus. The *nuclear* mass difference therefore covers both:
   - mass equivalent of the kinetic energy: ΔE/c² = 1.18·10⁶·1.602·10⁻¹⁹/(3.00·10⁸)² = 1.89·10⁻¹³/9.00·10¹⁶ = 2.10·10⁻³⁰ kg;
   - plus the rest mass of the emitted electron: 9.11·10⁻³¹ kg.
   
   Total: **Δm ≈ 3.0·10⁻³⁰ kg** (≈ 1.8·10⁻³ u, with 1 u = 1.66·10⁻²⁷ kg — the classic sanity route).

c. The gamma photon carries the difference between the two electron energies: 1.18 − 0.51 = 0.67 MeV = 0.67·10⁶·1.602·10⁻¹⁹ = 1.07·10⁻¹³ J. Then f = E/h = 1.07·10⁻¹³/6.626·10⁻³⁴ = 1.6·10²⁰ Hz. (This is the famous 662 keV Cs-137 gamma line — the main calibration line of every gamma camera; the official key, with a slightly coarser e and h, also lands at 1.6·10²⁰ Hz.)

**Common mistakes:** in (b) giving only E/c² and forgetting the emitted electron's own rest mass (the question asks for the *nuclear* mass difference — both mass as energy and mass as particle left the Cs nucleus); using MeV directly in E = mc² without converting to joules; in (c) taking 1.18 + 0.51 instead of the difference (the 0.51 MeV already left with the electron before the gamma step).

**Points note (official key):** a 2p, b 3p, c 3p.

## Question 5 (official paper): Thomson-style e/m measurement (16 points)

**Asked:** electrons from a cathode are accelerated, pass a slit, and fly at 3.1·10⁷ m/s parallel to two horizontal plates M and N, 1.8 cm apart, holding a homogeneous field of 2.1·10⁴ V/m. Compute the voltage across the plates (a); show with a computation that gravity on an electron is negligible against the field force (b); a magnetic field is added that keeps the beam *undeflected*: draw/reason its direction at point P between the plates (c); compute the magnetic field strength needed for the straight path (d); the B field is then switched off and the beam deflects, leaving the electric field with a vertical speed component of 4.2·10⁶ m/s after the 3.5 cm plate length: compute the mass-to-charge ratio m/q this gives (e — the paper nudges you to compute the vertical acceleration first).

**Subdomains:** [P07](../P07-electric-and-magnetic-fields/) (E field, ΔE_el = q·U, Lorentz force, crossed fields). **BINAS:** e, m_e (for the comparison in b and the final sanity check), g.

**Solution (ours):**

a. Field strength and plate distance: U = E·d = 2.1·10⁴·1.8·10⁻² = 3.78·10² ≈ 3.8·10² V. (Small surprise for later: electrons accelerated *into* the beam from the cathode side received ≈ 378 eV.)

b. F_el = q·E = 1.602·10⁻¹⁹·2.1·10⁴ = 3.4·10⁻¹⁵ N. F_z = m_e·g = 9.11·10⁻³¹·9.81 = 8.9·10⁻³⁰ N. Ratio ≈ 3.8·10¹⁴: the electric force is fourteen orders of magnitude stronger — gravity is safely negligible. ∎

c. The electric force on the (negative) electron points opposite to E (per the paper's figure, upward). For a straight path the Lorentz force must point exactly downwards: F_L = −F_el. With the beam flying as drawn (electrons to the left, so the conventional current runs to the right), the left-hand rule with F_L down and I to the right forces **B pointing into the paper**. (State the chain: I direction → desired F_L direction → left-hand rule → B direction. The key rewards the reasoning, not the memory.)

d. No deflection: q·E = q·v·B → **B = E/v** = 2.1·10⁴/3.1·10⁷ = 6.8·10⁻⁴ T. (That is the whole crossed-fields selector in one line: E/v selects the speed, independent of m and q.)

e. In the field an electron accelerates vertically at a = F/m = q·E/m. Its transit time between the plates: t = L/v_x = 3.5·10⁻²/3.1·10⁷ = 1.1·10⁻⁹ s. On exit the vertical speed component is v_y = a·t = (q·E/m)·(L/v_x). Solve for the wanted ratio:

   m/q = L·E/(v_x·v_y) = 3.5·10⁻²·2.1·10⁴/(3.1·10⁷·4.2·10⁶) = 7.35·10²/1.30·10¹⁴ = 5.6·10⁻¹² kg/C.

   Sanity: BINAS's pair (m_e, e) gives 9.11·10⁻³¹/1.602·10⁻¹⁹ = 5.69·10⁻¹² kg/C — such a Thomson set-up really does measure e/m, marvellous.

**Common mistakes:** in (a) mixing up E·d direction (U = Ed, not E/d); in (b) writing an essay instead of the two numbers and their ratio; in (c) forgetting that the electron is negative, so the *current* is opposite its flight; in (e) using the full speed v instead of the horizontal v_x in the transit time, or dividing by v_y into the wrong slot — write the v_y = a·t relation symbolically first.

**Points note (official key):** a 2p, b 3p, c 4p, d 3p, e 4p.
