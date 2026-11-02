# Walkthrough — CCVX sample exam 2 (physics, 2017)

Total: 70 points in 5 opgaven (Q1 24, Q2 12, Q3 10, Q4 12, Q5 12), 3 hours, grade = 1 + 9 × (score/70). Official title: *Voorbeeldtentamen natuurkunde 2*, CCVX, © 2017. Free official sources: the [paper](https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensNatuurkunde/Voorbeeldtentamen%20natuurkunde%202.pdf) and the [answer key](https://www.ccvx.nl/VoorbeeldTentamens/VoorbeeldTentamensNatuurkunde/Voorbeeldtentamen%20natuurkunde%202%20-%20Uitwerking.pdf) on ccvx.nl. Nothing of the official text, figures, tables or answer-key wording is copied here: every line is our own phrasing and every number is derived by us from the data the paper itself supplies. Syllabus note: 2017 paper, but every topic still sits on the syllabus in force since 1 September 2025 — including the radar-Doppler reasoning of Q1, which is now explicitly examined content (see [P01](../P01-oscillations-and-waves/)).

## Question 1 (official paper): a car from its (v,t)-diagram, plus radar speed trapping (24 points)

**Asked, per part:** the car's (v,t) diagram shows three dips where the driver shifts gear; after each shift the acceleration is smaller than before — argue from the graph (a); compute the engine's work from t = 0 to 2.0 s neglecting friction (b, mass 850 kg); from the enlarged 5–7 s detail (the second shift, engine uncoupled) compute the friction force during shifting (c); test by computation whether the factory claim "0 to 80 km/h in 10 s" was met on this ride (d); from t = 20 s the car brakes to standstill — compute the braking distance from the graph (e). Then the radar: emitted waves have λ = 7.5 mm — frequency (f); explain why the reflected waves have a smaller amplitude and a slightly larger wavelength (g); interfering emitted and reflected waves gives a composite whose amplitude varies with period T, drawn for t in µs — the paper gives T = λ/(2·v) for far away: compute the receding car's speed (h); explain whether the uncorrected close-by formula then gives too high or too low a speed (i).

**The graph, as we read it on the paper's grid:** v rises steeply from 0 with a small dip near 1.5 s, climbs through ≈ 14 m/s at 5.5 s (second dip to ≈ 13.8 at 6.2 s), then resurges through ≈ 20 m/s at 10 s, eases towards a plateau ≈ 27–28 m/s between 16 and 20 s, then falls in a straight line to 0 at 24 s. The zoom shows: dip top (5.5 s, 14.0 m/s) to dip bottom (6.2 s, 13.8 m/s).

**Subdomains:** [P03](../P03-force-and-motion/) (motion, Newton), [P04](../P04-energy-and-interaction/) (work–kinetic), [P01](../P01-oscillations-and-waves/) (waves, Doppler, interference). **BINAS:** c only.

**Solution (ours):**

a. Acceleration is the slope in a (v,t) diagram: after every dip the rising flank is visibly *less steep* than the flank before it, so after shifting a_after < a_before. (Higher gear, less force per wheel — but the graph itself tells you without any mechanics.)

b. Read v(2.0 s) from the grid: v ≈ 7 m/s (linear read between two grid points, ±1 m/s tolerance). No friction → engine work = kinetic energy gained: W = ΔE_k = ½m·v² = ½·850·7² = 2.1·10⁴ J. (Cross-check via W = F·s: average acceleration ≈ 3.5 m/s², F ≈ 3.0·10³ N, path ≈ 7 m in 2 s → same 2.1·10⁴ J ✓.)

c. During shifting only friction acts: a = Δv/Δt = (13.8 − 14.0)/(6.2 − 5.5) = −0.2/0.7 = −0.29 m/s² → F_w = m·|a| = 850·0.286 = 2.4·10² N.

d. 80 km/h = 80000/3600 = 22.2 m/s. The graph reaches that level only at t ≈ 11 s (at t = 10 s it reads ≈ 20 m/s). So no: on this ride the car missed the factory claim by about a second.

e. Braking distance = area under the graph from t = 20 s to standstill at 24 s: triangle ½·2.7·10¹·4.0 = 54 m (reading the flat top as 27 m/s: ½·27·4 = 54 m).

f. f = c/λ = 3.00·10⁸/7.5·10⁻³ = 4.0·10¹⁰ Hz = 40 GHz.

g. Amplitude down: the emitted wave spreads spherically (intensity ∝ 1/r²) and the car reflects only a small share of what it catches — very little returns. Wavelength up: the **Doppler effect** — the receding car reflects the fronts while driving away, stretching the spacing of the returned wave (same physics as the receding siren in [P01](../P01-oscillations-and-waves/)).

h. Read the beat period from the figure: maxima sit about 9 grid boxes of 20 µs apart → T ≈ 1.8·10⁻⁴ s. Then v = λ/(2T) = 7.5·10⁻³/(2·1.8·10⁻⁴) = 2.1·10¹ m/s (≈ 75 km/h; grid reading tolerance puts anything 20–24 m/s in range).

i. Close by, the car does not drive straight away from the radar: only the *component* of v along the line radar–car stretches the wave, and that component is smaller than the full v. Using the full formula then misreads the smaller component as the whole speed: **too low a measured speed**. (The fix: multiply by cos of the angle, exactly the correction the paper describes.)

**Common mistakes:** for (a) invoking gears verbally instead of reading slopes; in (b) forgetting the work–kinetic theorem and getting stuck looking for F (that is the harder route — the answer is one line); in (c) using the full graph instead of the zoomed figure, contaminating with engine force; in (h) counting the composite's *carrier* period instead of the amplitude variation period (count the envelope!); in (i) reasoning backwards: the measured component is *less* than the true speed.

**Points note (estimated split within the official opgave total):** a 2p, b 4p, c 4p, d 2p, e 3p, f 2p, g 2p, h 3p, i 2p.

## Question 2 (official paper): muscle-powered light — magnet through a coil, then LED (12 points)

**Asked:** a magnet falls through a coil wound around a tube; induced voltage and flux are recorded. The maximum voltage (at 0.12 s) is smaller than |minimum voltage| (at 0.17 s) — explain with the flux graph (a). Then the closed tube with its magnet is shaken rhythmically, generating AC — measure the frequency from the graph (b); is the mean of this AC voltage exactly 0 V? (c); a battery charges a lamp with an LED whose (I,U) characteristic is given; the LED draws a constant 35 mA for the first 15 s — compute the converted electric energy (d); hook the LED straight to the coil without battery and it blinks: explain why, and determine the duration of each "on" period (e).

**Subdomains:** [P07](../P07-electric-and-magnetic-fields/) (induction, flux), [P06](../P06-electric-circuits/) (diode, power, energy), [P01](../P01-oscillations-and-waves/) (period, frequency). **BINAS:** none.

**Solution (ours):**

a. The induced voltage follows the *rate of flux change*: U_ind ∝ dΦ/dt, i.e. the slope of the flux graph. At 0.12 s the magnet approaches and the flux is still changing slowly (small slope → smaller voltage peak); by 0.17 s the magnet, accelerated by gravity, rushes *through* the coil and the flux swings its steepest way (largest slope → largest voltage magnitude, opposite sign). Faster motion ⇒ steeper flux ⇒ higher |U_ind| at the later instant.

b. Count four full periods of the AC on the graph: 4T spans from 2.1 to 2.8 s → T = 0.175 s → f = 1/T = 5.7 Hz.

c. Correct: the claim is true. Positive and negative peaks enclose equal areas per period (regular shaking gives as much +flux-change as −flux-change), so the sum over a whole period — and hence the mean — is 0 V. AC by construction has no DC part here.

d. At I = 35 mA the characteristic reads U ≈ 3.7 V. The LED runs P = U·I, constant for 15 s: E = P·t = 3.7·0.035·15 = 1.9 J.

e. An LED is a *diode*: it conducts only in one direction, and then only once the forward voltage exceeds its threshold (≈ 3 V on the characteristic). The coil's AC is positive only half of each cycle, and above 3 V for only part of that half — the LED lights in brief flashes once per period. From the graph: each flash lasts Δt ≈ 4·10⁻² s (scaling 5 mm of an 85 mm interval that itself spans 0.7 s). Blinking: one flash per period of the shaking; either way the diode is soldered in, it is the same half cycle each time.

**Common mistakes:** for (a) explaining amplitude by magnet *position* instead of *speed* (flux slope!); for (b) taking half a period as the period in a mirror-symmetric AC graph; for (d) reading U at the wrong current or computing P = I·t alone; for (e) blaming the AC sign flips only, without the 3 V threshold — the LED is dark even during part of the *positive* half-cycle, which is exactly the blinking evidence.

**Points note (estimated split within the official opgave total):** a 2p, b 3p, c 1p, d 3p, e 3p.

## Question 3 (official paper): a vuvuzela between two pipe models (10 points)

**Asked:** a 68 cm cone-shaped horn; two candidate models: half-open pipe (closed+open ends) versus open-open pipe. From the recorded sound (period on the graph) and the given graph of fundamental frequency versus length for both pipe types, show neither model is confirmed (a); from the horn's spectrum of overtones, argue which model is best (b); a third model proposes for a cone λ = 2·L with L the length to the cone's imaginary tip (from a scale drawing): test this model against the measured sound (c).

**Subdomains:** [P01](../P01-oscillations-and-waves/) (standing waves, harmonics, oscillogram). **BINAS:** speed of sound in air (343 m/s used).

**Solution (ours):**

a. The recording (fig 2) shows 9 periods in 42 ms → T = 4.67·10⁻³ s → the sounded fundamental: f₀ = 1/T ≈ 2.15·10² Hz. Read both models off the paper's frequency–length graph at 68 cm: half-open pipe ≈ 130 Hz, open-open ≈ 260 Hz. The measured 215 Hz matches neither → **neither hypothesis 1 nor 2 is supported**. The same verdict by direct computation (handy check): half-open gives f = 343/(4·0.68) = 1.3·10² Hz, open-open gives f = 343/(2·0.68) = 2.5·10² Hz — the graph answers were required, so cite them, not the formulas.

b. Overtone families: a half-open pipe carries only odd harmonics (ratio 1:3:5:7), an open-open pipe carries all of them (1:2:3:4). The vuvuzela's spectrum (fig 4) shows peaks in the ratio 1:2:3:4 — matching hypothesis 2's family, so **model 2 (open-open) is the best-supported**, though its exact f₀ sits off (predicted 260 Hz vs measured 215 Hz).

c. From the scale drawing extended to the imaginary zero-thickness tip: L/68 cm = 163.5/131 mm → L = 84.9 cm. The model then predicts λ = 2L = 1.70 m → f = 343/1.70 = 2.0·10² Hz. This lies close to the measured f₀ from (a) (202 vs 215 Hz, within a few percent — far better than both rejected models, and consistent with the harmonic family from (b)), so **model 3 agrees reasonably well** with the measurements.

**Common mistakes:** in (a) substituting pipe formulas instead of using the paper's graph as asked (the point is the comparison, not the formula); misreading 9T as T; in (b) matching only the fundamental and not the *family*; in (c) forgetting that L is the full cone length-to-tip, not the tube's 68 cm.

**Points note (estimated split within the official opgave total):** a 3p, b 3p, c 4p.

## Question 4 (official paper): Glasco's vacuum window versus double glazing (12 points)

**Asked:** Glasco windows hold vacuum between panes (≈ 6 mm) and insulate better than 13 mm double glass with dry air — explain (a); with P = μ·A·ΔT per window type (μ = 1.1 W/(m²·K) Glasco, 3.4 W/(m²·K) double glass, given), a room with 8.0 m² of windows, 19 K difference for 3.0 h, and a gas heater (85% efficiency) on Groningen gas: compute the saved cubic metres of gas (b); a light ray hits the drawn double-glass window under 40° with the glass *surface* at point P — draw its path through both panes on the answer sheet (c, n = 1.51).

**Subdomains:** [P08](../P08-matter-heat-and-gases/) (heat transport, conduction/convection, efficiency), [P09](../P09-optics/) (refraction). **BINAS:** calorific value of natural gas (32·10⁶ J/m³).

**Solution (ours):**

a. Ordinary double glazing traps a layer of air, through which heat escapes by *two* convective-conductive routes: conduction through the still air and — worse — convection: war air circulates inside the gap and carries heat from warm pane to cold pane. The Glasco vacuum offers *no matter at all* between the panes, so only radiation (and the thin edge contact) remains: conduction and convection are switched off — vacuum wins where thickness fails.

b. Saved power by choosing Glasco: ΔP = (3.4 − 1.1)·8.0·19 = 3.5·10² W. Over 3.0 h (1.08·10⁴ s): ΔE = 3.8·10⁶ J of heat not lost (also as E_d − E_G: 5.58 vs 1.81 MJ ✓). With r_v = 32·10⁶ J/m³ and η = 0.85: saved gas = ΔE/(η·r_v) = 3.78·10⁶/(0.85·32·10⁶) = 1.4·10⁻¹ m³. About 0.14 m³ in one evening — one good reason vacuum windows pay off.

c. The 40° is to the *surface*, so the incidence angle to the normal is i = 50°. Into glass: sin r = sin i/n = sin 50°/1.51 = 0.7660/1.51 = 0.507 → r = 30.5 degrees. The ray bends towards the normal (30.5°) through the first pane, exits to air at 50° (offset parallel), bends in again at 30.5° through the second pane, and exits parallel to the original direction. Draw all four bends; the net effect is a parallel displacement, no deviation. (Tip: at air gaps all legs in air run parallel at 50°.)

**Common mistakes:** in (a) saying only "vacuum is empty" instead of naming conduction AND convection as the blocked mechanisms; in (b) taking μ_d − μ_G but forgetting the heater's 85% efficiency in the gas accounting (the saved gas feeds an 85% device); using 22 °C instead of the correct ΔT = 19 K; in (c) measuring 40° to the normal (the paper gives it to the surface!) and computing sin 40°.

**Points note (estimated split within the official opgave total):** a 2p, b 5p, c 5p.

## Question 5 (official paper): pendulum (conical) — forces, F_mpz, T² = C·h (12 points)

**Asked:** a conical pendulum: a weight circles horizontally on a string; the drawn figure already shows the F_mpz arrow pointing at the circle's centre M — draw the forces that combine into it, minding direction and length (a); string ℓ = 1.4 m, 30 rounds in 69.3 s, height h = 1.2 m, m = 40 g: compute the centripetal force (b); series of measured T per h, tabulated, follow T² = C·h: from which properties of the graph does the agreement show (c); compute C with its unit (d).

**Subdomains:** [P05](../P05-gravitation/) (circular motion, F_mpz), [P03](../P03-force-and-motion/) (force vectors), syllabus-A skills (proportionalities through the origin). **BINAS:** g.

**Solution (ours):**

a. Only two forces act: gravity F_z straight down, and string tension F_s along the string upward-inward. Vector addition (parallelogram) must reproduce the drawn horizontal F_mpz pointing at M: so draw F_s along the string with vertical component just canceling F_z and horizontal remainder pointing to M — the drawing's lengths must match that: horizontal leg = F_mpz, vertical leg of F_s = F_z, both per the same scale as the printed F_mpz arrow.

b. Orbit radius: r = √(ℓ² − h²) = √(1.4² − 1.2²) = √0.52 = 0.72 m. Speed: the weight covers 30 circles of 2πr: v = 30·2π·0.721/69.3 = 1.96 m/s ≈ 2.0 m/s. Then F_mpz = m·v²/r = 0.040·1.96²/0.72 = 0.21 N. (Remark: the *ideal* conical-pendulum relation F_mpz = F_z·tanθ with tanθ = r/h = 0.60 would predict 0.24 N — the measured 69.3 s for 30 rounds sits slightly off the ideal 66 s, i.e. this rig is not a perfect free pendulum. The asked route through r and the measured period is the one that scores; see the sampled C in (d) for the same effect.)

c. T² = C·h is of the form y = (constant)·x, so agreement shows in the graph as: the points/line form **a straight line**, and that line **passes through the origin** (no intercept; h = 0 would force T = 0, a non-negotiable of the physics).

d. C = slope of the line. Pick two far points on the best-fit line through (0,0): e.g. (h = 1.2 m, T² = 3.86 s²) → C = 3.86/1.2 = 3.2 s²/m. Unit: [C] = [T²]/[h] = s²/m. (For the curious: theory predicts 4π²/g ≈ 4.0 s²/m for a perfect point mass on a massless string — the measured rig sits lower, which is exactly why the paper asks for the *measured* C rather than the ideal one.)

**Common mistakes:** drawing a third, invented "outward centrifugal" force in (a) — only F_z and F_s exist; in (b) using ℓ instead of r = √(ℓ² − h²) as the orbit radius; using 30/69.3 s as the circle time without writing T first (same thing, but show it); in (d) quoting the unit as s²·m⁻¹ sloppily or omitting it entirely (the question explicitly asks value AND unit).

**Points note (estimated split within the official opgave total):** a 4p, b 4p, c 2p, d 2p.
