# P11 — Quantum world: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions (h = 6.626·10⁻³⁴ J·s, c = 3.00·10⁸ m/s, m_e = 9.109·10⁻³¹ kg, e = 1.602·10⁻¹⁹ C). Built from the CCVX physics syllabus of 15 August 2025 — the revised quantum chapter.

## 1. Light: wave, particle, and the double slit (o1)

- Light is a wave: it diffracts at a single slit (*enkelspleet* — a narrow slit acts as a source of spreading wavelets, producing a broad central maximum with side minima on a screen), and two coherent slits produce strictly placed fringes: constructive where the path lengths differ by a whole number of wavelengths (weglengteverschil = n·λ), destructive at half-integer offsets. At a grating (*tralie*, slit spacing d) the maxima sit at angles with

  **d·sin(α_n) = n·λ** (n = 0, 1, 2, …) — computable geometry, in the syllabus list.

- But light is *also* a stream of photons — indivisible units of energy E = hf. Turn the intensity down until the source emits one photon at a time:
  - the screen registers single, localised **dots** (indivisibility — *ondeelbaarheid*: a photon is never detected "half");
  - the dots gradually accumulate in exactly the interference pattern. The fringes are a **probability distribution**: high fringes = high detection probability. Each photon lands as a particle, yet its arrival probabilities follow the wave — each photon, one says, interferes with *itself*.
- Which-way (*welke-spleetdetectie*): install a detector that registers through which slit the photon went, and the interference pattern dies. Gaining particle information (the path) is incompatible with having wave behaviour (the fringes): **you cannot use wave and particle behaviour at the same time** — the single aspect of Heisenberg's *onbepaaldheidsrelatie* the syllabus requires.
- Vocabulary ties to [P01](../P01-oscillations-and-waves/): constructive ↔ path difference n·λ ↔ phase difference integer; destructive ↔ (n − ½)·λ ↔ half-integer phase difference.

## 2. Matter waves: electrons (o2)

- de Broglie: every moving particle carries a wavelength

  **λ = h/(m·v)**.

  For macroscopic objects this λ is comically small (a car: ~10⁻³⁸ m) — no wave character ever shows. For electrons at common speeds λ is ~10⁻¹⁰ m: the lattice spacing of a crystal — so electrons *do* diffract at crystals (diffraction rings), proving matter waves and measuring spacings at the same time.
- The double-slit story then replays completely with electrons: dots, probabilities, which-way annihilation. Quantum is not about light being strange; it is about *everything* being like this.

## 3. Confined particles: boxes, well, hydrogen (o3)

- Confinement quantises. A particle locked in an infinitely deep 1-D box of width L must have its wave function vanish at the walls: only standing waves fit, with n antinodes, so L = n·λ/2. Together with de Broglie (λ = h/(m·v)) and E_k = ½mv² = (mv)²/(2m), this gives immediately the quantised energies (no Schrödinger equation needed):

  **E_n = n²·h²/(8·m·L²)** (the syllabus prints E_n in eV; convert in the final step).

  Ground state n = 1 (never zero! confinement forbids rest — "zero-point energy" as a remark), n = 2 first excited state with 4× the energy, etc. Transitions between levels emit/absorb photons with ΔE = hf, just like atoms.
- The *probability* of finding the particle is |amplitude|²: the square of the wave function — antinodes are the likely addresses, nodes the forbidden ones.
- Finite well: at a barrier of finite height the wave function does not stop but **decays exponentially** inside the barrier. If the barrier is narrow, a small but nonzero probability reaches the far side: the particle can appear where it classically could not be — **tunneling** (*tunnelen*). (Applications in nature: α decay leaving the nucleus, [P02](../P02-medical-imaging-and-radiation/); in technology: the scanning tunneling microscope.)
- Hydrogen atom: the bound electron is the confined particle; its wave function must fit the orbit with a whole number of wavelengths (standing-wave nodes and antinodes around the nucleus), and exactly that discreteness produces the famous levels

  **E_n = 13.6/n² eV** (binding energies, so −E_n below zero)

  and the discrete spectrum of [P10](../P10-electromagnetic-radiation-and-stars/). Confined ⇒ quantised: one rule fits box, atom and nucleus.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" width="340" role="img" aria-label="Wave functions of the first three states of a particle in an infinite one-dimensional box">
  <line x1="60" y1="15" x2="60" y2="270" stroke="#333" stroke-width="2.5"/>
  <line x1="280" y1="15" x2="280" y2="270" stroke="#333" stroke-width="2.5"/>
  <line x1="60" y1="65" x2="280" y2="65" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="60,65 96.7,46 133.3,32.1 170,27 206.7,32.1 243.3,46 280,65" fill="none" stroke="#1565c0" stroke-width="2"/>
  <text x="290" y="69" font-size="11" font-family="sans-serif" fill="#333">ψ₁</text>
  <line x1="60" y1="145" x2="280" y2="145" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="60,145 78.3,126 96.7,112.1 115,107 133.3,112.1 151.7,126 170,145 188.3,164 206.7,177.9 225,183 243.3,177.9 261.7,164 280,145" fill="none" stroke="#c62828" stroke-width="2"/>
  <text x="290" y="149" font-size="11" font-family="sans-serif" fill="#333">ψ₂</text>
  <line x1="60" y1="225" x2="280" y2="225" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="60,225 72.2,206 84.4,192.1 96.7,187 108.9,192.1 121.1,206 133.3,225 145.6,244 157.8,257.9 170,263 182.2,257.9 194.4,244 206.7,225 218.9,206 231.1,192.1 243.3,187 255.6,192.1 267.8,206 280,225" fill="none" stroke="#2e7d32" stroke-width="2"/>
  <text x="290" y="229" font-size="11" font-family="sans-serif" fill="#333">ψ₃</text>
  <text x="15" y="69" font-size="11" font-family="sans-serif" fill="#333">n=1</text>
  <text x="15" y="149" font-size="11" font-family="sans-serif" fill="#333">n=2</text>
  <text x="15" y="229" font-size="11" font-family="sans-serif" fill="#333">n=3</text>
</svg>

## 4. Pauli's principle and bands in solids (o4)

- Pauli's exclusion principle (*uitsluitingsprincipe van Pauli*): no two electrons in a system may occupy the *same complete state*. One more quantum number rescues pairs on the same orbital: **spin** — the electron behaves as a tiny magnet pointing either with or against an external field ("spin up/down") — so at most two, if their spins are opposite.
- In a solid, the huge crowd of atoms overlaps: the discrete atomic levels smear into **energy bands** — nearly continuous ranges of allowed states, possibly separated by **band gaps** (forbidden energy intervals). All quantum rules still apply: bands fill from below, two (spin-paired) electrons per state.

## 5. Band gaps at work: conductor, insulator, semiconductor, and their components (o5)

- **Conductor** (metal): the highest band is partly filled (or bands overlap) — electrons are permanently free to move: always conductive.
- **Insulator**: a full band and a *large* gap — no empty states within reach: no conduction at normal temperatures.
- **Semiconductor** (*halfgeleider*): a full band below, an empty one above with a *small* gap (~1 eV). Light or heat can promote electrons across:
  - **LDR**: photons with E_f ≥ E_gap lift electrons into the conduction band → the more light, the more carriers, the lower the resistance. Light-controlled resistor — street-lights, camera exposure.
  - **NTC**: heat promotes electrons across the small gap faster than the lattice scattering grows (the metal case, where more vibration raises R) → resistance *falls* when hot. Thermometer probe, inrush limiting.
  - **Solar cell** (*zonnecel*): a junction in which each absorbed photon with E ≥ E_gap kicks an electron across the gap and the built-in field sweeps the carrier out as usable current. Silicon's gap ≈ 1.1 eV: threshold λ ≈ 1.1 μm — all visible light qualifies (E = hf logic from [P10](../P10-electromagnetic-radiation-and-stars/)).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — an electron's wavelength

Compute the de Broglie wavelength of an electron at 1.0·10⁶ m/s. To which part of matter is that length comparable, and what follows?

**Solution.** λ = h/(m·v) = 6.626·10⁻³⁴/(9.109·10⁻³¹·1.0·10⁶) = 7.3·10⁻¹⁰ m = 0.73 nm — atomic distances, the lattice spacings of crystals. So a crystal diffracts such electrons exactly as a grating diffracts light (√ the syllabus's specified context): ring patterns appear on the screen — direct proof that electrons are waves too.

## Example 2 — grating maxima

A grating is ruled with 6.0·10² lines per mm. Red laser light (λ = 6.3·10⁻⁷ m) falls perpendicularly onto it. Compute the angles of the orders 1 and 2.

**Solution.** Slit spacing d = 1/(6.0·10² mm) = 1.667·10⁻⁶ m. Order 1: sin α₁ = λ/d = 6.3·10⁻⁷/1.667·10⁻⁶ = 0.38 → α₁ = 22°. Order 2: sin α₂ = 2·0.38 = 0.76 → α₂ = 49°. (Order 3 would need sin α₃ = 1.13 > 1: no third order exists — a respectable bonus insight to name.)

## Example 3 — electron in a nano-box

An electron is locked in an infinitely deep box of L = 1.0 nm.

a. Compute the three lowest energies in eV.
b. The electron drops from level 2 to level 1. Compute the wavelength of the emitted photon and name the spectral region.

**Solution.** a. E_1 = h²/(8·m·L²) = (6.626·10⁻³⁴)²/(8·9.109·10⁻³¹·(1.0·10⁻⁹)²) = 6.0·10⁻²⁰ J = 0.38 eV; E_2 = 4·0.376 = 1.5 eV; E_3 = 9·0.376 = 3.4 eV. b. ΔE = 1.50 − 0.38 = 1.1 eV → λ = 1240/1.12 = 1.1·10⁻⁶ m: infrared. Nano-size confinement lifts the spacings to photon energies — one line of reasoning from a box to colour.

## Example 4 — what the interference pattern tells a single photon

In a low-intensity double-slit experiment only one photon is in the apparatus at a time.

a. What will two minutes of recording show?
b. What will one photon never do?
c. A sensor now tags the slit each photon passes. What happens and why?

**Solution.** a. A sparse but growing set of single dots that fills exactly the maxima and avoids the minima of the double-slit pattern: the fringe pattern is the probability map of where each dot can land. b. One photon will never register as two dots or half a dot (*ondeelbaarheid*) — it is detected as one whole particle at one spot, even though the *distribution* is wave-shaped. c. The pattern disappears and two single-slit blobs remain: tagging the path supplies particle information (which slit), and per the Heisenberg aspect in the syllabus this excludes simultaneous wave behaviour.

## Example 5 — what tunneling needs

For a finite barrier the wave function penetrates with exponential decay. State what happens to the tunneling probability when (a) the barrier widens, (b) the barrier height doubles, (c) the particle's energy nears the barrier height. Justify with the decaying wave function.

**Solution.** The part of ψ inside the barrier falls exponentially with penetration depth (and faster for a higher barrier). (a) Wider barrier → exponentially less reaches the far side → probability plummets. (b) Higher barrier → steeper decay per nanometre → also exponentially less tunneling. (c) Energy closer to the top → the decay is the softest in this list (the effective barrier left to cross is thinnest) → the tunneling probability grows strongly. At the limit (E ≥ barrier height) the crossing is classical again and "tunneling" stops being a miracle.

## Example 6 — choosing a material for a garden lamp's dusk switch

The dusk switch cuts light off when an LDR's resistance rises. Explain the LDR physics via the band model, and why copper or an insulator cannot do the job.

**Solution.** An LDR is a semiconductor with a band gap in the ~eV range. In darkness few electrons are promoted: the bands behave nearly insulating → high resistance. Daylight pumps energetic photons in: each absorbed photon lifts an electron over the gap into the conduction band → more mobile carriers → the resistance falls steadily with brightness: a light-to-resistance converter. Copper has no gap (carriers always plenty) so it cannot report darkness; an insulator's gap is so wide that visible photons cannot promote electrons at all — nothing reports either. Only the semiconductor leaves something to switch.
