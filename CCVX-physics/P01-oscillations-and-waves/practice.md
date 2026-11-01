# P1 — Oscillations and waves: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md). Use BINAS values (g = 9.81 m/s², speed of sound in air 343 m/s, c = 3.00·10⁸ m/s) and round sensibly.

### phys-p01-q01 | points 3 | outcome o1 | difficulty easy

#### Question

A block hangs from a spring and oscillates harmonically with period T = 0.40 s and amplitude A = 5.0 cm.

a. Compute the frequency.
b. Compute the maximum speed of the block.

#### Answer

a. f = 2.5 Hz; b. v_max = 0.79 m/s

#### Solution

a. f = 1/T = 1/0.40 = 2.5 Hz.
b. v_max = 2πA/T = 2π·0.050/0.40 = 0.785 ≈ 0.79 m/s.

### phys-p01-q02 | points 3 | outcome o2 | difficulty easy

#### Question

A mass of 0.250 kg hangs from a spring with spring constant C = 40.0 N/m and oscillates freely. Compute the period of this mass–spring system.

#### Answer

T = 0.497 s

#### Solution

T = 2π√(m/C) = 2π√(0.250/40.0) = 2π·√0.00625 = 2π·0.0791 = 0.497 s.

### phys-p01-q03 | points 3 | outcome o3 | difficulty easy

#### Question

A tuning fork produces the tone a′ with frequency 440 Hz. The speed of sound in the room is 343 m/s.

a. Compute the wavelength of the sound in that room.
b. A second fork sounds one octave higher (880 Hz) in the same room. What is its wavelength? Explain.

#### Answer

a. λ = 0.780 m; b. λ = 0.390 m — half as large because f doubled and v is the same

#### Solution

a. λ = v/f = 343/440 = 0.780 m.
b. λ = 343/880 = 0.390 m. The medium is the same, so v is the same; with v = fλ, doubling f halves λ.

### phys-p01-q04 | points 3 | outcome o3 | difficulty easy

#### Question

During a thunderstorm you see a lightning flash and hear the thunder 5.0 s later.

a. Compute the distance to the lightning.
b. Explain why you may ignore the travel time of the light.

#### Answer

a. s ≈ 1.7 km; b. light covers that distance in microseconds, sound in seconds

#### Solution

a. s = v_sound·t = 343·5.0 = 1.7·10³ m ≈ 1.7 km.
b. The light travels the same distance in t = s/c = 1.7·10³/3.00·10⁸ ≈ 5.7·10⁻⁶ s. Compared with 5.0 s this is utterly negligible, so the 5.0 s delay is essentially all sound travel.

### phys-p01-q05 | points 3 | outcome o4 | difficulty medium

#### Question

A cardiogram (ECG) of a resting person shows 5.0 complete heartbeats in 4.0 s.

a. Determine the period and the frequency of the heartbeat.
b. Convert this to beats per minute.

#### Answer

a. T = 0.80 s, f = 1.3 Hz (1.25 Hz); b. 75 beats per minute

#### Solution

a. T = 4.0 s/5.0 = 0.80 s; f = 1/T = 1.25 Hz ≈ 1.3 Hz.
b. 1.25 Hz · 60 s = 75 beats per minute.

### phys-p01-q06 | points 5 | outcome o5 | difficulty medium

#### Question

A guitar string has a vibrating length ℓ = 65.0 cm and produces its fundamental tone at 110 Hz.

a. Compute the wavelength of the fundamental *on the string* and the propagation speed of the waves on this string.
b. Give the frequency of the first overtone of this string.
c. A guitarist presses the string so that the vibrating length halves. What happens to the fundamental frequency and why?

#### Answer

a. λ = 1.30 m, v = 143 m/s; b. f = 220 Hz; c. the frequency doubles to 220 Hz, because f ∝ 1/ℓ at fixed v

#### Solution

a. Fundamental on a string: ℓ = 1·½λ → λ = 2ℓ = 1.30 m. The propagation speed on the string: v = fλ = 110·1.30 = 143 m/s.
b. First overtone is the second harmonic (n = 2): λ = ℓ = 0.650 m → f = 143/0.650 = 220 Hz.
c. New length ℓ′ = 32.5 cm, new fundamental λ′ = 0.650 m → f′ = 143/0.650 = 220 Hz. At fixed wave speed on the string, f = v/(2ℓ): halving ℓ doubles f; the tone sounds one octave higher.

### phys-p01-q07 | points 4 | outcome o5 | difficulty medium

#### Question

A blow organ has a pipe stopped at one end. The pipe is 42.5 cm long; the speed of sound is 343 m/s.

a. Compute the fundamental frequency of this pipe.
b. Compute the frequency of its first overtone and express it as a multiple of the fundamental.
c. Why does this pipe have no second harmonic (2 × fundamental)?

#### Answer

a. f₁ ≈ 2.0·10² Hz (202 Hz); b. f ≈ 6.1·10² Hz (605 Hz), exactly 3 × the fundamental (to within rounding) (3rd harmonic); c. in a half-open pipe only odd numbers of quarter wavelengths fit

#### Solution

a. Stopped pipe: ℓ = (2n − 1)·¼λ. Fundamental (n = 1): λ = 4ℓ = 1.70 m → f = v/λ = 343/1.70 = 202 ≈ 2.0·10² Hz.
b. First overtone is n = 2: ℓ = 3·¼λ → λ = 4ℓ/3 = 0.5667 m → f = 343/0.5667 = 605 ≈ 6.1·10² Hz. Ratio: 605/202 = 2.995 ≈ 3 → the third harmonic.
c. The boundary conditions (closed end = node, open end = antinode) only allow ℓ = ¼λ, ¾λ, 1¼λ, … — i.e. the odd harmonics. An even number of quarter wavelengths would put a node or antinode at the wrong end, so the second harmonic cannot exist in this pipe.

### phys-p01-q08 | points 4 | outcome o1 | difficulty medium

#### Question

Two identical pendulums swing side by side. Pendulum 1 reaches its rightmost position 0.60 s earlier than pendulum 2. The period of each pendulum is 2.4 s.

a. Compute the phase difference between the two pendulums.
b. Express the same phase difference in radians and in degrees.
c. State what the reduced phase of pendulum 2 is at the moment pendulum 1 has completed exactly 3.0 periods.

#### Answer

a. Δφ = 0.25; b. Δφ = π/2 rad = 90°; c. φ₂ = 2.75

#### Solution

a. Δφ = Δt/T = 0.60/2.4 = 0.25.
b. 0.25 · 2π = ½π rad ≈ 1.6 rad; 0.25 · 360° = 90°.
c. Pendulum 2 runs 0.25 of a period behind pendulum 1, so its reduced phase is φ₂ = 3.0 − 0.25 = 2.75.

### phys-p01-q09 | points 4 | outcome o1 | difficulty medium

#### Question

The displacement of a tuning-fork prong is given by u(t) = 8.0·sin(5.0π·t), with u in centimetres and t in seconds.

a. Give the amplitude, the period and the frequency.
b. Compute the maximum speed of the prong.
c. Compute the displacement at t = 0.10 s.

#### Answer

a. A = 8.0 cm, T = 0.40 s, f = 2.5 Hz; b. v_max = 1.3 m/s; c. u = 8.0 cm

#### Solution

a. From u(t) = A·sin(2πt/T): A = 8.0 cm; 2π/T = 5.0π → T = 2π/(5.0π) = 0.40 s; f = 1/T = 2.5 Hz.
b. v_max = 2πA/T = 2π·0.080/0.40 = 1.26 ≈ 1.3 m/s.
c. u(0.10) = 8.0·sin(5.0π·0.10) = 8.0·sin(½π) = 8.0 cm — the prong is exactly at its largest displacement. (Note: with the syllabus you compute u from t this way; solving t from a given u is not required.)

### phys-p01-q10 | points 5 | outcome o6 | difficulty medium

#### Question

A train approaches a station at 40 m/s while sounding its horn at 500 Hz. The speed of sound is 343 m/s. (NB: the Doppler effect was added to the syllabus in the version of 1 September 2025.)

a. Explain, in terms of the wavefronts the horn emits, why a listener on the platform hears a frequency higher than 500 Hz.
b. Estimate the wavelength of the sound ahead of the train and the frequency the listener hears.
c. The train passes and moves away at the same speed. Estimate the frequency heard now, and describe the change at the moment of passing.

#### Answer

a. the wavefronts ahead are compressed by the moving source; b. λ′ ≈ 0.61 m, f′ ≈ 5.7·10² Hz; c. f″ ≈ 4.5·10² Hz, a clear drop in pitch at the moment of passing

#### Solution

a. In each period the horn emits one wavefront, but between two emissions the train itself moves forward. The fronts ahead of the train are therefore squeezed into a shorter distance: a shorter wavelength arrives at the platform. The fronts still propagate at 343 m/s relative to the air, so with v = fλ a shorter λ means a higher observed frequency.
b. Per period (T = 1/500 s = 2.0 ms) the sound advances 343·T = 0.686 m and the train closes in by 40·T = 0.080 m, so the spacing ahead is λ′ = (343 − 40)/500 = 0.606 m. The listener hears f′ = 343/0.606 = 5.66·10² ≈ 5.7·10² Hz.
c. Behind the train the spacing stretches to λ″ = (343 + 40)/500 = 0.766 m → f″ = 343/0.766 = 4.48·10² ≈ 4.5·10² Hz. At the moment of passing, the observed pitch drops suddenly from about 566 Hz to about 448 Hz — the classic down-jump of a passing horn.

### phys-p01-q11 | points 5 | outcome o2 | difficulty hard

#### Question

A child of 22 kg sits on a playground swing. From a static measurement the "spring constant" of the swinging system for small oscillations turns out to be equivalent to C = 3.4·10³ N/m, so the empty seat-plus-child behaves for small amplitudes as a harmonic oscillator.

a. Compute the natural frequency of the loaded swing.
b. The child's parent pushes the swing. Explain with the term *resonance* how small pushes can build up a large amplitude, and state at what frequency the parent should push.
c. The child stands up on the seat. The effective oscillating mass becomes 26 kg. Does the natural frequency increase or decrease? Support your answer.

#### Answer

a. T ≈ 0.51 s, f_eigen ≈ 2.0 Hz; b. push in the rhythm of the natural frequency (≈ 2.0 Hz): the driving frequency equals the natural frequency, so the amplitude keeps growing (resonance); c. decrease to ≈ 1.8 Hz

#### Solution

a. T = 2π√(m/C) = 2π√(22/3.4·10³) = 2π·√0.00647 = 2π·0.0805 = 0.505 ≈ 0.51 s; f_eigen = 1/T = 2.0 Hz.
b. If the parent pushes once per period, in the direction of motion, each push adds energy in step with the swing: the driving frequency equals the natural frequency and the amplitude grows — that is resonance. So push with f ≈ f_eigen ≈ 2.0 Hz (once every 0.51 s).
c. T = 2π√(m/C): with m larger (26 kg) and C unchanged, T grows, so f decreases: T = 2π√(26/3.4·10³) = 0.549 s → f = 1.8 Hz. The swing oscillates slower.

### phys-p01-q12 | points 5 | outcome o4 | difficulty hard

#### Question

A running wave travels along a long cord. In an (u,x) snapshot the crests are 2.0 m apart and the amplitude is 3.0 cm. A video of one point P of the cord gives an (u,t) diagram with a period of 0.50 s.

a. Compute the propagation speed of the wave.
b. Compute the maximum speed of point P.
c. Point Q lies 1.0 m to the right of P. Compute the phase difference between P and Q and describe their relative motion.
d. Another point R lies 0.50 m to the right of P. At the instant P passes through equilibrium going upward, what is the displacement of R (qualitatively)?

#### Answer

a. v = 4.0 m/s; b. v_max = 0.38 m/s; c. Δφ = 0.50: P and Q are in opposite phase — when P is at +A, Q is at −A; d. R is then exactly at an extreme (crest or trough)

#### Solution

a. From the (u,x) diagram: λ = 2.0 m; from the (u,t) diagram: T = 0.50 s. v = λ/T = 2.0/0.50 = 4.0 m/s (equivalently v = fλ with f = 2.0 Hz).
b. v_max = 2πA/T = 2π·0.030/0.50 = 0.377 ≈ 0.38 m/s.
c. Δφ = Δx/λ = 1.0/2.0 = 0.50 — a half cycle. P and Q are in counter-phase: displacement and velocity of Q are at each instant exactly opposite to those of P.
d. R lies Δφ = 0.50/2.0 = 0.25 (¼ cycle) ahead or behind P (depending on the direction of travel). A point a quarter period removed from a passage through equilibrium is just at a turning point: R is at maximal displacement +A or −A.
