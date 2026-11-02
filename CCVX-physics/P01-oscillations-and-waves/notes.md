# P1 — Oscillations and waves: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions. Built from the CCVX physics syllabus of 15 August 2025.

## 1. Harmonic oscillation

- An oscillation (*trilling*) is a periodic motion around an equilibrium position (*evenwichtsstand*). The displacement (*uitwijking*) u is the distance from equilibrium, with a sign (+ above, − below). The amplitude A is the largest displacement.
- The oscillation is *harmonic* when the resulting force (*resulterende kracht*) is proportional to the displacement and points back to equilibrium:

  **F⃗_res = −C·u⃗** with C the spring constant (*veerconstante*) in N/m.

  That single condition (force ∝ −u) is what makes the motion a pure sine: the displacement, speed and acceleration are all sinusoidal in time.
- Displacement as a function of time: **u(t) = A·sin(2πt/T)** (when u = 0 and moving up at t = 0; use a cosine or a phase shift otherwise). Exam note from the syllabus: given u you do **not** have to solve for t.
- Period and frequency: **f = 1/T** with T in s and f in Hz.
- The speed is maximal when passing through equilibrium: **v_max = 2πA/T**. The speed is zero at the extremes, where the acceleration is maximal.
- The reduced phase (*gereduceerde fase*) counts how many whole periods plus a fraction have elapsed. Two identical oscillations shifted by Δt in time have phase difference (*faseverschil*)

  **Δφ = Δt/T** (a fraction of a cycle; multiply by 2π for radians or by 360° for degrees).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 190" width="340" role="img" aria-label="u,t-diagram of a harmonic oscillation with amplitude A and period T">
  <line x1="40" y1="90" x2="325" y2="90" stroke="#333" stroke-width="1"/>
  <line x1="40" y1="15" x2="40" y2="170" stroke="#333" stroke-width="1"/>
  <text x="322" y="106" font-size="12" font-family="sans-serif">t</text>
  <text x="18" y="20" font-size="12" font-family="sans-serif">u</text>
  <polyline points="40,90 50.8,69 61.7,53.6 72.5,48 83.3,53.6 94.2,69 105,90 115.8,111 126.7,126.4 137.5,132 148.3,126.4 159.2,111 170,90 180.8,69 191.7,53.6 202.5,48 213.3,53.6 224.2,69 235,90 245.8,111 256.7,126.4 267.5,132 278.3,126.4 289.2,111 300,90" fill="none" stroke="#1565c0" stroke-width="2"/>
  <line x1="72.5" y1="48" x2="72.5" y2="90" stroke="#c62828" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="77" y="66" font-size="12" font-family="sans-serif" fill="#c62828">A</text>
  <line x1="40" y1="176" x2="170" y2="176" stroke="#c62828" stroke-width="1"/>
  <line x1="40" y1="170" x2="40" y2="182" stroke="#c62828" stroke-width="1"/>
  <line x1="170" y1="170" x2="170" y2="182" stroke="#c62828" stroke-width="1"/>
  <text x="99" y="172" font-size="12" font-family="sans-serif" fill="#c62828">T</text>
  <text x="130" y="106" font-size="12" font-family="sans-serif" fill="#333">one period later: same phase</text>
</svg>

## 2. The mass–spring system

- A mass m (kg) hanging from a spring with spring constant C (N/m) has natural period

  **T = 2π√(m/C)** and natural frequency (*eigenfrequentie*) **f_eigen = 1/T**.

  Note: gravity only shifts the equilibrium position; it does not appear in T. Larger m → slower oscillation; stiffer spring (larger C) → faster.
- When a system is driven by a periodic force with frequency f_drive ≈ f_eigen, the amplitude grows large: **resonance** (*resonantie*). Examples: a child on a swing pushed in the right rhythm, a car body bouncing after a speed bump, rattling at certain engine speeds.
- The spring constant follows from a static measurement: at rest F_z = C·u, so C = m·g/u with g = 9.81 m/s² (BINAS).

## 3. Running waves

- In a running (travelling) wave (*lopende golf*) the oscillation is passed on through a medium. Each point performs the same oscillation a little later than its neighbour. The wavelength λ is the distance between two points in the same phase (e.g. crest to crest).
- The propagation speed (*voortplantingssnelheid*): **v = fλ** …… a wave covers one wavelength per period, also written v = λ/T.
- Transverse (*transversaal*): the oscillation is perpendicular to the propagation (waves on a string, light). Longitudinal (*longitudinaal*): the oscillation is along the propagation (sound: compressions and rarefactions of air).
- Sound in air at 20 °C travels at about 343 m/s (BINAS: *geluidssnelheid*); in water about 1.5·10³ m/s. Light and all electromagnetic waves travel at c = 2.998·10⁸ m/s ≈ 3.00·10⁸ m/s in vacuum (BINAS: *lichtsnelheid*).
- Echo: the sound goes out and back, so the distance to the reflector is s = v·t/2 — do not forget the factor 2.
- Two points Δx apart along the wave train differ in phase by

  **Δφ = Δx/λ**.

- Oscillogram readings: a larger amplitude means a louder tone (*geluidssterkte*); a higher frequency means a higher pitch (*toonhoogte*).

## 4. (u,t) and (u,x) diagrams

- An (u,t) diagram plots the displacement of **one point** against time: read A and T from it. A cardiogram (ECG) and an oscillogram of a microphone signal are examples.
- An (u,x) diagram is a **snapshot** of the whole wave at one instant: read A and λ from it.
- Combining both gives everything: v = λ/T, f = 1/T, and phase differences from Δt or Δx.
- Careful with reading: in an (u,t) diagram a "wavelength" has no meaning (the horizontal axis is time), and in an (u,x) diagram the "period" has no meaning.

## 5. Standing waves

- A standing wave (*staande golf*) arises when a wave reflects back and forth in a limited medium and interferes with itself. Fixed points with zero displacement: nodes (*knopen*); points with maximum displacement: antinodes (*buiken*). Neighbouring node–antinode distance: ¼λ.
- The length ℓ of the medium must fit a whole number of half wavelengths:
  - String or pipe open at both ends: **ℓ = n·½λ** with n = 1, 2, 3, … → λ_n = 2ℓ/n, so the allowed frequencies are f_n = n·v/(2ℓ): a whole series f, 2f, 3f, … (fundamental *grondtoon* and overtones *boventonen*).
  - Pipe closed at one end (node at the closed end, antinode at the open end): **ℓ = (2n − 1)·¼λ** with n = 1, 2, 3, … → only the odd harmonics f, 3f, 5f, …
- In musical instruments (*muziekinstrumenten*) the fundamental sets the pitch and the mixture of overtones sets the timbre.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 290" width="340" role="img" aria-label="Standing wave patterns: fundamental and first two overtones on a string">
  <text x="8" y="60" font-size="12" font-family="sans-serif" fill="#333">n = 1 (grondtoon)</text>
  <line x1="40" y1="90" x2="300" y2="90" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="40,90 83.3,69 126.7,53.6 170,48 213.3,53.6 256.7,69 300,90" fill="none" stroke="#1565c0" stroke-width="2"/>
  <circle cx="40" cy="90" r="3" fill="#c62828"/><circle cx="300" cy="90" r="3" fill="#c62828"/>
  <text x="8" y="140" font-size="12" font-family="sans-serif" fill="#333">n = 2</text>
  <line x1="40" y1="160" x2="300" y2="160" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="40,160 61.7,139 83.3,123.6 105,118 126.7,123.6 148.3,139 170,160 191.7,181 213.3,196.4 235,202 256.7,196.4 278.3,181 300,160" fill="none" stroke="#1565c0" stroke-width="2"/>
  <circle cx="40" cy="160" r="3" fill="#c62828"/><circle cx="170" cy="160" r="3" fill="#c62828"/><circle cx="300" cy="160" r="3" fill="#c62828"/>
  <text x="8" y="220" font-size="12" font-family="sans-serif" fill="#333">n = 3</text>
  <line x1="40" y1="228" x2="300" y2="228" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="40,228 54.4,207 68.9,191.6 83.3,186 97.8,191.6 112.2,207 126.7,228 141.1,249 155.6,264.4 170,270 184.4,264.4 198.9,249 213.3,228 227.8,207 242.2,191.6 256.7,186 271.1,191.6 285.6,207 300,228" fill="none" stroke="#1565c0" stroke-width="2"/>
  <circle cx="40" cy="228" r="3" fill="#c62828"/><circle cx="126.7" cy="228" r="3" fill="#c62828"/><circle cx="213.3" cy="228" r="3" fill="#c62828"/><circle cx="300" cy="228" r="3" fill="#c62828"/>
</svg>

## 6. The Doppler effect (new in the 2025 syllabus)

- When source and receiver move **towards** each other, the observed wavelength is shorter and the observed frequency **higher** than the emitted one; when they move **apart**, the observed wavelength is longer and the frequency **lower**. Classic example: an ambulance siren sounds higher as it approaches and drops in pitch as it passes.
- Reason (moving source, still air): the source emits f_s wavefronts per second, but while emitting them it moves forward, so the wavefronts ahead of the source are squeezed into a shorter distance. The wavelength ahead becomes λ′ = (v_sound − v_source)/f_s, and the receiver measures a higher frequency f′ = v_sound/λ′ > f_s. Behind the source the wavefronts are stretched: λ″ = (v_sound + v_source)/f_s → f″ < f_s.
- Reason (moving receiver): a receiver moving towards the source runs into the wavefronts faster, so it counts more fronts per second: higher f′.
- You must be able to *explain* the change qualitatively and do simple reasoning with wavefront spacing; the CCVX syllabus lists the Doppler effect with the word "explain" (*uitleggen*), so a full Doppler formula is not given — but do not be surprised by simple numerical wavefront reasoning as in Example 7 below.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — from numbers to the oscillation

A block on a spring oscillates harmonically with T = 0.80 s and A = 6.0 cm.

a. Give u(t), taking u = 0 at t = 0 (moving upward).
b. Compute the maximum speed.
c. Compute u at t = 0.10 s.

**Solution.** a. u(t) = 6.0·sin(2πt/0.80) cm. b. v_max = 2πA/T = 2π·0.060/0.80 = 0.471 m/s ≈ 0.47 m/s. c. u(0.10) = 6.0·sin(2π·0.125) = 6.0·sin(0.785) = 6.0·0.707 = 4.2 cm.

## Example 2 — finding the spring constant, then T

A passenger of 60 kg lowers a car's suspension by 1.5 cm when sitting in it. The car body has mass 900 kg.

a. Compute C of the suspension (four wheels together).
b. Compute the natural frequency of the car body on its suspension.

**Solution.** a. At rest F_z = C·u → C = m·g/u = 60·9.81/0.015 = 3.9·10⁴ N/m. b. Oscillating mass ≈ 900 + 60 = 960 kg: T = 2π√(960/3.92·10⁴) = 2π·√0.02447 = 2π·0.1564 = 0.983 s; f_eigen = 1/0.983 ≈ 1.0 Hz. Driving over evenly spaced bumps at about 17 m/s with the bumps 17 m apart would force the car at roughly this frequency → resonance: large, uncomfortable bouncing.

## Example 3 — echo depth sounding

A ship sends an ultrasound pulse downward and receives the echo after 0.16 s. The speed of sound in seawater is 1.52·10³ m/s (given). How deep is the water?

**Solution.** The pulse travels down and back: s = v·t is the total path, so depth d = v·t/2 = 1.52·10³·0.16/2 = 1.2·10² m. The factor 2 is the classic error point: 243 m is the full path, not the depth.

## Example 4 — reading an oscillogram

An oscillogram of a tuning fork on an oscilloscope shows that 4.0 complete periods take 9.1 ms on the screen. The speed of sound in the room is 343 m/s.

a. Compute the frequency of the fork.
b. Compute the wavelength of the sound.
c. A second tone sounds louder but equally low. What is the same and what differs in its oscillogram?

**Solution.** a. T = 9.1 ms/4.0 = 2.275 ms → f = 1/T = 4.4·10² Hz. b. λ = v/f = 343/440 = 0.78 m. c. Same frequency (equal period on the screen) and a larger amplitude (loudness is set by amplitude, pitch by frequency).

## Example 5 — organ pipe

An organ pipe open at both ends is 2.72 m long. The speed of sound is 343 m/s.

a. Compute the fundamental frequency.
b. Compute the frequency of the first overtone and name it as a harmonic.
c. The same pipe with one end closed: fundamental and first overtone?

**Solution.** a. ℓ = n·½λ with n = 1 → λ = 2ℓ = 5.44 m → f = 343/5.44 = 63.1 ≈ 63 Hz. b. n = 2: λ = ℓ = 2.72 m → f = 126 Hz: the 2nd harmonic, one octave higher. c. Closed pipe: ℓ = (2n−1)·¼λ. Fundamental (n = 1): λ = 4ℓ = 10.9 m → f = 31.5 ≈ 32 Hz. First overtone (n = 2): ℓ = 3λ/4 → λ = 3.63 m → f = 94.6 ≈ 95 Hz — the *third* harmonic: a stopped pipe has only odd harmonics and sounds an octave lower than the open pipe of the same length.

## Example 6 — (u,t) and (u,x) combined

A wave in a rope: the (u,x) snapshot shows crests 1.5 m apart; the (u,t) recording of one point of the rope shows a period of 0.25 s.

a. Compute the propagation speed.
b. Compute the phase difference between two points 0.50 m apart.
c. Point P is at its maximum at t = 0. At what later times > 0 is P again at maximum, and when is it first in equilibrium?

**Solution.** a. λ = 1.5 m and T = 0.25 s → v = λ/T = 6.0 m/s (check: v = fλ with f = 4.0 Hz ✓). b. Δφ = Δx/λ = 0.50/1.5 = ⅓ ≈ 0.33. c. Maxima repeat every T: t = 0.25 s, 0.50 s, … First equilibrium after a maximum is ¼ period later: t = 0.0625 ≈ 0.063 s.

## Example 7 — Doppler reasoning (new syllabus)

An ambulance drives at 30 m/s towards a standing pedestrian. The siren emits 800 Hz; the speed of sound is 343 m/s.

a. Explain why the pedestrian hears a higher frequency than 800 Hz.
b. Estimate the wavelength of the sound ahead of the ambulance and the frequency the pedestrian hears.
c. What changes after the ambulance has passed?

**Solution.** a. While emitting each wavefront, the ambulance keeps driving closer, so the wavefronts ahead of it lie closer together: a shorter wavelength reaches the pedestrian, and because the fronts still arrive at the speed of sound, more fronts arrive per second → higher frequency. b. In one period (1/800 s = 1.25 ms) the sound moves ahead by 343/800 = 0.429 m while the ambulance closes the gap by 30/800 = 0.0375 m, so the spacing of the fronts ahead is λ′ = (343 − 30)/800 = 0.391 m. The pedestrian hears f′ = 343/0.391 = 877 ≈ 8.8·10² Hz — about 77 Hz higher than emitted. c. After passing, the ambulance stretches the wavefronts behind it: λ″ = (343 + 30)/800 = 0.466 m → f″ = 343/0.466 = 736 ≈ 7.4·10² Hz: the pitch drops below the emitted frequency, which is the characteristic "ee-ooh" drop of a passing siren.
