# P11 — Quantum world: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o5 match the numbered learning outcomes in [README.md](README.md). Constants (BINAS): h = 6.626·10⁻³⁴ J·s, c = 3.00·10⁸ m/s, m_e = 9.109·10⁻³¹ kg, e = 1.602·10⁻¹⁹ C; handy λ[nm] ≈ 1240/E[eV].

### phys-p11-q01 | points 3 | outcome o2 | difficulty easy

#### Question

Compute the de Broglie wavelength of an electron that moves with 1.0·10⁶ m/s. Compare your answer with the size scale of atoms (~10⁻¹⁰ m) and state the consequence for experiments with crystals.

#### Answer

λ = 7.3·10⁻¹⁰ m — the same scale as atomic spacings, so crystals diffract electrons

#### Solution

λ = h/(m·v) = 6.626·10⁻³⁴/(9.109·10⁻³¹·1.0·10⁶) = 7.28·10⁻¹⁰ ≈ 7.3·10⁻¹⁰ m. This lies at atomic/crystal-lattice distances (~10⁻¹⁰ m), so a crystal works as a grating for electrons: diffraction rings appear — the syllabus's specified proof of electron wave nature.

### phys-p11-q02 | points 3 | outcome o2 | difficulty easy

#### Question

a. Compute the de Broglie wavelength of an electron at 2.5·10⁶ m/s.
b. Compute it for a car of 1.0·10³ kg driving at 30 m/s.
c. Explain in one sentence why only the electron answers "wave".

#### Answer

a. λ = 2.9·10⁻¹⁰ m; b. λ = 2.2·10⁻³⁸ m; c. only objects whose λ is comparable to the scale of the obstacles they meet show observable wave behaviour — that's the electron, never the car

#### Solution

a. λ = h/(mv) = 6.626·10⁻³⁴/(9.109·10⁻³¹·2.5·10⁶) = 2.91·10⁻¹⁰ ≈ 2.9·10⁻¹⁰ m.
b. λ = 6.626·10⁻³⁴/(1.0·10³·30) = 2.2·10⁻³⁸ m.
c. Wave phenomena (diffraction!) need openings or spacings of the order of λ. Nothing on the car's scale is anywhere near 10⁻³⁸ m, so its matter wave never shows; the electron's λ matches crystal spacings, so its wave side is measurable every day.

### phys-p11-q03 | points 3 | outcome o1 | difficulty easy

#### Question

A grating has 600 lines per mm. Monochromatic light with λ = 5.0·10⁻⁷ m falls on it perpendicularly.

a. Compute the grating constant d.
b. Compute the angle of the first-order maximum.

#### Answer

a. d = 1.7·10⁻⁶ m; b. α₁ = 17° (17.5°)

#### Solution

a. d = 1/(6.0·10² lines/mm) = 1.667·10⁻³ mm = 1.7·10⁻⁶ m.
b. d·sin α₁ = 1·λ → sin α₁ = 5.0·10⁻⁷/1.667·10⁻⁶ = 0.300 → α₁ = 17.5 ≈ 17°.

### phys-p11-q04 | points 4 | outcome o3 | difficulty medium

#### Question

An electron is locked in an infinitely deep one-dimensional box of width L = 1.0·10⁻⁹ m (a quantum-well toy model).

a. Compute the ground-state energy E₁ in J and in eV.
b. Compute E₂ and E₃ in eV.
c. The electron emits a photon when jumping E₂ → E₁. Compute the photon wavelength and state the spectral region.

#### Answer

a. E₁ = 6.0·10⁻²⁰ J = 0.38 eV; b. E₂ = 1.5 eV, E₃ = 3.4 eV; c. λ = 1.1·10⁻⁶ m, infrared

#### Solution

a. E₁ = h²/(8·m·L²) = (6.626·10⁻³⁴)²/(8·9.109·10⁻³¹·(1.0·10⁻⁹)²) = 4.39·10⁻⁶⁷/7.29·10⁻⁴⁸ = 6.03·10⁻²⁰ J = 6.03·10⁻²⁰/1.602·10⁻¹⁹ = 0.376 ≈ 0.38 eV.
b. E_n = n²·E₁: E₂ = 4·0.376 = 1.50 ≈ 1.5 eV; E₃ = 9·0.376 = 3.38 ≈ 3.4 eV.
c. ΔE = 1.50 − 0.38 = 1.12 eV → λ = hc/ΔE = 1240/1.12 ≈ 1.1·10³ nm = 1.1·10⁻⁶ m: infrared. (A real atom's imprisonment of a different scale gave hydrogen's visible lines — same standing-wave logic.)

### phys-p11-q05 | points 3 | outcome o1 | difficulty medium

#### Question

A double-slit experiment is dimmed so much that photons pass one at a time, detected on a position-sensitive counter.

a. Describe what the counter records in the first minute and after a day.
b. Which two properties of the photon does this story display, and how do they fit together?

#### Answer

a. first minutes: scattered individual dots; after a day: the dots pile up into the neat double-slit fringe pattern; b. indivisibility (each photon = exactly one localised hit) and wave behaviour (the *probability* of the hit position follows the interference pattern)

#### Solution

a. At first: single impacts at apparently random spots — each a whole, pointlike detection. Over the day: those impacts reproduce exactly the fringes: many hits where the wave says constructive, none where destructive.
b. **Ondeelbaarheid** (indivisibility): the photon is never shared between fringes or dots — it is detected whole at one place, particle-like. Wave behaviour: the *probability distribution* that steers where each photon lands is the two-wave interference pattern, as if each photon explored both slits and interfered with itself. Detection = particle; statistics = wave.

### phys-p11-q06 | points 3 | outcome o1 | difficulty medium

#### Question

A student modifies the double-slit setup of q05 so a photon counter can tag through which slit each photon passed.

a. What happens to the fringe pattern on the screen?
b. Explain with the aspect of Heisenberg's principle (*onbepaaldheidsrelatie*) that is in the syllabus.

#### Answer

a. the interference pattern disappears, leaving two single-slit blobs; b. path information ("which-way") is particle information and excludes simultaneous wave behaviour

#### Solution

a. The fringes vanish: the screen now shows the broad, structureless sum of the two slits' individual spread.
b. The syllabus requires this one aspect of the onbepaaldheidsrelatie: *you cannot use wave and particle descriptions at the same time*. The tagging tells the particle's path — after which there is no slit pair "explored together", so no path difference, no phase difference, no interference. Observation that answers a particle question deletes the wave answer.

### phys-p11-q07 | points 4 | outcome o3 | difficulty medium

#### Question

For the hydrogen atom the syllabus gives E_n = 13.6/n² (in eV, binding magnitudes).

a. Compute the energies of levels n = 2, 3 and 4.
b. Explain with the standing-wave picture of the bound electron *why* the energies are discrete rather than continuous.
c. Which photon energy and wavelength correspond to the relaxation n = 3 → n = 2?

#### Answer

a. 3.40 / 1.51 / 0.85 eV; b. the electron wave must close on itself with a whole number of wavelengths (nodes/antinodes), so only fitting states exist; c. ΔE = 1.89 eV → λ = 656 nm (red, Hα)

#### Solution

a. E₂ = 13.6/4 = 3.40 eV; E₃ = 13.6/9 = 1.51 eV; E₄ = 13.6/16 = 0.85 eV.
b. The electron confined to the atom behaves as a wave function around the nucleus; only states in which this wave joins itself smoothly after a revolution (a whole number of wavelengths, with clean nodes and antinodes) survive constructive reinforcement — all others cancel. Allowed standing patterns ⇔ allowed energies: that quantisation is the discreteness of the spectrum.
c. ΔE = E₃ − E₂ = 3.40 − 1.51 = 1.89 eV → λ = 1240/1.89 = 656 nm — the red H-alpha line (compare [P10](../P10-electromagnetic-radiation-and-stars/), the same number from the energy-level diagram).

### phys-p11-q08 | points 3 | outcome o3 | difficulty medium

#### Question

A particle meets a barrier of finite height (an energy wall it classically could not pass).

a. Describe what its wave function does at and inside the barrier, according to the finite-well model.
b. State which two properties of the barrier control the tunneling probability and in which direction.
c. Name one phenomenon or device that lives off tunneling.

#### Answer

a. the wave function does not vanish at the wall but decays exponentially inside the barrier, with a small surviving tail at the far side of a thin barrier; b. width (wider → strongly less tunneling) and height (higher → less); c. α decay, tunnel diode, or the scanning tunneling microscope (STM)

#### Solution

a. Infinite walls put ψ = 0 outside. A finite barrier instead lets ψ *leak*: inside the wall ψ falls off exponentially (as in the exponential-decay family from mathematics), and if the barrier is narrow, the tail that reaches the far side is nonzero — there is a small chance to find the particle beyond the wall: tunneling (*tunnelen*). The probability |ψ|² shrinks exponentially into the barrier.
b. Thicker barrier → exponentially smaller tail → much less tunneling. Higher barrier (more "missing energy") → faster decay → less tunneling. (Conversely, thin and low both open the door wider.)
c. Natural example: alpha particles tunnel out of heavy nuclei — part of why radioactive half-lives span such extremes (link [P02](../P02-medical-imaging-and-radiation/)). Technological: the scanning tunneling microscope, which measures these exponentially falling currents atom by atom.

### phys-p11-q09 | points 4 | outcome o5 | difficulty hard

#### Question

Sort these materials with the band model and defend the sorting: copper cable, silicon chip, PVC insulation.

a. For each: conductor, semiconductor or insulator — and the decisive band property.
b. Why does silicon carry much more current at 100 °C than at 0 °C, while copper does the opposite?

#### Answer

a. copper: conductor — partially filled band / overlapping bands; silicon: semiconductor — small band gap (~1 eV); PVC: insulator — huge gap; b. silicon: heat promotes electrons over the small gap → more carriers → conduction up; copper: carriers were already all present; heat only boosts lattice scattering → resistance up

#### Solution

a. **Copper**: its uppermost band is half-filled — empty states immediately adjacent to filled ones — so electrons move at will: conductor. **Silicon**: full valence band, empty conduction band, small gap (~1.1 eV): a semiconductor, conductive only to the extent energy is supplied. **PVC**: full band plus a gap of many eV far beyond thermal or visible energies: insulator.
b. In silicon, thermal energy exponentially helps electrons jump the small gap: more carriers in the conduction band → current capacity rises with T (the NTC effect of [P06](../P06-electric-circuits/), now explained at band level). In copper every conduction electron is already available; heating only stirs more lattice vibrations, which *scatter* the carriers → resistance rises (metal PTC behaviour). Same formula of Ohm, opposite temperature sign — the gap decides.

### phys-p11-q10 | points 5 | outcome o5 | difficulty hard

#### Question

A silicon solar cell has a band gap of 1.1 eV.

a. Compute the threshold wavelength: above which wavelength can photons *no longer* promote an electron across the gap?
b. Which of these photons can generate current: blue 480 nm, red 650 nm, infrared 1300 nm? Justify each with its photon energy.
c. The excess energy of a 480 nm photon above 1.1 eV: where does it mostly end up, and what does that imply for the cell's temperature and the wish for more sophisticated ("multi-junction") designs?

#### Answer

a. λ_threshold = 1.1·10⁻⁶ m; b. blue 2.6 eV ✓ and red 1.9 eV ✓ work; IR 0.95 eV ✗ does not; c. into extra kinetic energy that thermalises as heat → the cell warms and loses efficiency; multi-junction stacks capture each colour at its own gap

#### Solution

a. Threshold: E_f = E_gap → λ = hc/E_gap = 1240/1.1 = 1.13·10³ nm ≈ 1.1·10⁻⁶ m: the cell is blind to everything longer (infrared passes through).
b. Blue 480 nm: E = 1240/480 = 2.58 ≈ 2.6 eV ≥ 1.1 → yes, one electron-hole pair per absorbed photon. Red 650 nm: E = 1.91 ≈ 1.9 eV ≥ 1.1 → yes to current. IR 1300 nm: E = 0.95 eV < 1.1 → no promotion, no current.
c. The 2.58 − 1.1 = 1.5 eV surplus per blue photon is shed by the excited electrons as vibration energy: **heat**. So one photon nature gives at most one promoted electron regardless of colour — high-energy light is partly wasted warmth, warming the cell and *lowering* its lifetime and efficiency. Multi-junction cells stack layers with different gaps so each colour hands its energy to a gap of matching size — the same physics, better bookkeeping.

### phys-p11-q11 | points 5 | outcome o5 | difficulty hard

#### Question

A garden-lamp module uses an LDR as light sensor and an NTC as frost guard.

a. Explain the LDR's falling resistance with light, from the band gap.
b. Explain the NTC's falling resistance with temperature, from the band gap, and contrast with a metal wire.
c. Both components are just "variable resistors" in circuit terms. State in which of the two circuits of [P06](../P06-electric-circuits/) (series voltage divider or parallel divider) you would place each to make a usable sensor voltage, and defend it.

#### Answer

a. photons with E ≥ E_gap lift electrons into the conduction band → more carriers per absorbed light → lower R; b. heat promotes carriers over the small semiconductor gap → R falls; a metal has no gap, heat only scatters → R rises; c. both in a *series* voltage divider: the changing R then converts into a changing voltage share to feed the switch

#### Solution

a. Darkness: only a few electrons sit in the conduction band — high resistance. Photons with energy ≥ the gap kick electrons up; each promoted electron (plus the hole it left) is a mobile carrier → the brighter the light, the more carriers, the lower the resistance: a clean light-to-resistance conversion.
b. In the NTC's semiconductor the same gap exists, now crossed by thermal energy: faster warming promotes more carriers than the extra lattice scattering costs → R falls as T rises. In a metal there is no gap to cross: carriers are already at maximum; heating only adds scattering → R *rises* (PTC signature). The presence of the small gap flips the temperature sign.
c. Trailing the changing component in a **series voltage divider** (fixed resistor + sensor) makes its changing resistance read as a changing voltage — directly measured by the control electronics (the pattern of [P06](../P06-electric-circuits/) Example 2). In parallel the total voltage would stay nailed to the source and the sensor would vanish in the wash.

### phys-p11-q12 | points 3 | outcome o4 | difficulty medium

#### Question

a. State Pauli's exclusion principle (*uitsluitingsprincipe van Pauli*) in your own words, and explain with the "little magnet" model of electron spin how two electrons can nevertheless share one orbital.
b. A single atom has neatly spaced energy levels. Describe what happens to those levels when 10²³ such atoms join into a solid.
c. "A completely *filled* energy band cannot carry current." Defend that with the Pauli principle.

#### Answer

a. at most one electron per complete state; spin is a tiny magnet that can point with or against an external field, so two electrons with opposite spins occupy the same orbital as two different states; b. the levels smear into almost continuous energy bands, possibly with band gaps between them; c. in a full band every state is already occupied (Pauli), so no electron can change state to build a net motion — no current

#### Solution

a. Pauli's exclusion principle: in one system no two electrons may occupy the *same complete state* (all quantum numbers identical). Spin adds one property to the state: the electron behaves as a tiny magnet that can align with or against an external field ("spin up"/"spin down"). Two electrons with *opposite* spins differ in that one quantum number — they are different states — so precisely two of them fit in one orbital.
b. When atoms pack together, each electron state of each atom slightly overlaps the neighbours: the one atomic level splits into an astronomical number of extremely closely spaced levels — an almost continuous **energy band**, with forbidden intervals (band gaps) between the bands.
c. Current needs electrons to *change* state (to pick up a directed motion). A filled band has every Pauli-allowed seat taken: an electron wanting extra motion finds only occupied states inside its band, and the next free states lie beyond the gap — out of reach. So a completely full band cannot carry current: the deep reason insulators start as full-band materials.
