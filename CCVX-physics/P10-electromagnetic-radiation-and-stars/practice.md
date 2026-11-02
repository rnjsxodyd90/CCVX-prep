# P10 — Electromagnetic radiation and stars: practice

Eleven original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md). Constants (BINAS): h = 6.626·10⁻³⁴ J·s, c = 3.00·10⁸ m/s, e = 1.602·10⁻¹⁹ C, k_W = 2.898·10⁻³ m·K, σ = 5.670·10⁻⁸ W/(m²·K⁴); handy: λ[nm] ≈ 1240/E[eV]; Sun: P = 3.85·10²⁶ W, T ≈ 5.8·10³ K, d = 1.496·10¹¹ m.

### phys-p10-q01 | points 3 | outcome o1 | difficulty easy

#### Question

An atom has two excited levels at −4.85 eV and −2.30 eV above its ground state. An electron drops from the higher to the lower of these two levels.

a. Compute the photon energy in eV and in J.
b. Compute the frequency and the wavelength of the emitted light, and name the spectral region.

#### Answer

a. ΔE = 2.55 eV = 4.09·10⁻¹⁹ J; b. f = 6.2·10¹⁴ Hz, λ = 4.9·10⁻⁷ m (visible, blue-green)

#### Solution

a. ΔE = |−2.30 − (−4.85)| = 2.55 eV = 2.55·1.602·10⁻¹⁹ = 4.09·10⁻¹⁹ J.
b. f = E/h = 4.09·10⁻¹⁹/6.626·10⁻³⁴ = 6.2·10¹⁴ Hz; λ = c/f = 4.9·10⁻⁷ m = 486 nm — visible blue-green (this is hydrogen's Hβ jump, n = 4 → 2).

### phys-p10-q02 | points 2 | outcome o4 | difficulty easy

#### Question

The Planck curve of the star Vega peaks at λ_max = 2.9·10⁻⁷ m. Compute its photosphere temperature and state in which part of the spectrum the peak lies.

#### Answer

T = 1.0·10⁴ K; the peak lies in the ultraviolet

#### Solution

T = k_W/λ_max = 2.898·10⁻³/2.9·10⁻⁷ = 1.0·10⁴ K. A 290 nm peak is ultraviolet — Vega is far hotter (and bluer) than the Sun.

### phys-p10-q03 | points 3 | outcome o1 | difficulty easy

#### Question

The ground state of hydrogen is at −13.6 eV; the level n = 2 sits at −3.40 eV.

a. Compute the ionisation energy from the ground state.
b. Compute the ionisation energy for an atom already excited to n = 2.
c. Explain the difference in words (no new computation).

#### Answer

a. 13.6 eV; b. 3.40 eV; c. from n = 2 the electron is already partway out: it lacks less energy to escape

#### Solution

a. From −13.6 eV to 0 (free): E_ion = 13.6 eV.
b. From −3.40 eV to 0: E_ion = 3.40 eV.
c. The ionisation energy is whatever energy the electron still misses to just escape (E = 0). The excited electron sits higher in the well, so the step left is smaller — 9.77 eV (n = 1→ 2's lift) already paid for.

### phys-p10-q04 | points 3 | outcome o2 | difficulty easy

#### Question

Two stars are plotted on an HR diagram: star A at (T = 6000 K, P = 1 P_sun); star B at (T = 3500 K, P = 10⁴ P_sun).

a. Classify both stars (main sequence / red giant / white dwarf) and justify B's classification with P = σAT⁴.
b. Which of the two has the larger radius?

#### Answer

a. A: main-sequence sun-like star; B: red giant — cool yet extremely luminous needs an enormous surface; b. B, by far

#### Solution

a. A sits on the middle of the main sequence (like the Sun). B is cooler than A yet radiates 10⁴ times more, and since P = σAT⁴ with a *lower* T⁴ factor, the area A must be enormous: top-right of the HR diagram — a red giant.
b. A ∝ P/T⁴: B's huge power at modest temperature forces a giant surface → giant radius. The red giant wins by roughly two orders of magnitude.

### phys-p10-q05 | points 3 | outcome o5 | difficulty medium

#### Question

a. Compute the intensity of the Sun's radiation arriving just above Earth's atmosphere.
b. A solar panel satellite orbits Venus at 0.72 times the Earth–Sun distance (given). Compute the intensity there.

#### Answer

a. I = 1.37·10³ W/m²; b. I = 2.6·10³ W/m²

#### Solution

a. I = P/(4πr²) = 3.85·10²⁶/(4π·(1.496·10¹¹)²) = 1.37·10³ W/m² — the solar constant.
b. I ∝ 1/r²: (1/0.72)² = 1/0.5184 = 1.929 → I = 1.37·10³·1.929 = 2.6·10³ W/m². Nearly double the yield per square metre — Venus is a sunnier building site.

### phys-p10-q06 | points 4 | outcome o5 | difficulty medium

#### Question

A white dwarf has the same total radiated power as the Sun but a surface temperature of 2.5·10⁴ K (Sun: 5.8·10³ K).

a. Compute the ratio of the two surface areas using P = σAT⁴.
b. Compute the ratio of the radii and comment on the size of the white dwarf compared with the Earth (R_Earth ≈ 6.4·10⁶ m, R_Sun ≈ 7.0·10⁸ m, given).

#### Answer

a. A_wd/A_Sun = 2.9·10⁻³; b. R_wd ≈ 0.054 R_Sun ≈ 3.8·10⁷ m ≈ 6 Earth radii — planet-sized but star-powered

#### Solution

a. Equal P → A ∝ 1/T⁴: A_wd/A_Sun = (T_Sun/T_wd)⁴ = (5.8·10³/2.5·10⁴)⁴ = (0.232)⁴ = 2.9·10⁻³ ≈ 3·10⁻³.
b. A = 4πR² → R ratio = √2.9·10⁻³ = 0.054 → R_wd = 0.054·7.0·10⁸ = 3.8·10⁷ m ≈ 6 R_Earth. White dwarfs are dead stellar cores: planetary-sized, still blazing hot — they fade only by cooling, having no fusion left.

### phys-p10-q07 | points 4 | outcome o2 | difficulty medium

#### Question

A hydrogen line that lies at 486.1 nm in the laboratory is found in a galaxy's spectrum at 486.4 nm.

a. Compute the galaxy's radial velocity and state the sign (approaching or receding).
b. Name the phenomenon as astronomers call it.

#### Answer

a. v = 1.9·10⁵ m/s, receding; b. redshift (*roodverschuiving*)

#### Solution

a. v = (Δλ/λ)·c = (486.4 − 486.1)/486.1·3.00·10⁸ = (0.3/486.1)·3.00·10⁸ = 1.85·10⁵ ≈ 1.9·10⁵ m/s. The line moved to a *longer* wavelength → the source moves away from us.
b. Redshift — and for nearby galaxies blueshift happens (Andromeda approaches us); the mapping line-shift → velocity is the exact Doppler physics of [P01](../P01-oscillations-and-waves/), with an official formula here.

### phys-p10-q08 | points 3 | outcome o4 | difficulty medium

#### Question

An incandescent lamp filament runs at 2.8·10³ K.

a. Compute λ_max and name the spectral region of the peak.
b. Use this to explain why incandescent lamps are such poor *light* sources, in one sentence with the word Planck curve.

#### Answer

a. λ_max ≈ 1.0·10⁻⁶ m — infrared; b. the Planck curve peaks in the infrared, so most of the radiated power is invisible heat rather than light

#### Solution

a. λ_max = k_W/T = 2.898·10⁻³/2.8·10³ = 1.03·10⁻⁶ m ≈ 1.0 μm: infrared.
b. The whole *Planck curve* of a 2.8·10³ K radiator lies mostly beyond the visible window: the peak in infrared and a huge tail of heat — only a few percent of the energy is visible light (η ≈ 5%, see [P04](../P04-energy-and-interaction/)), which is why LEDs won.

### phys-p10-q09 | points 5 | outcome o3 | difficulty hard

#### Question

In the Sun's core, four hydrogen nuclei fuse into one helium-4 nucleus (net). Atomic masses (BINAS): H-1 = 1.007825 u, He-4 = 4.002603 u (electrons cancel in the accounting).

a. Compute the mass defect per formed helium atom, in u and in kg.
b. Compute the released energy per helium atom in MeV and in J (1 u·c² = 931.5 MeV).
c. The Sun radiates 3.85·10²⁶ W. Compute the mass it converts into radiation per second, and the number of helium atoms formed per second.

#### Answer

a. Δm = 0.0287 u = 4.77·10⁻²⁹ kg; b. ΔE = 26.7 MeV = 4.28·10⁻¹² J; c. 4.3·10⁹ kg/s; 9.0·10³⁷ He/s

#### Solution

a. Δm = 4·1.007825 − 4.002603 = 4.031300 − 4.002603 = 0.028697 ≈ 0.0287 u; in kg: 0.028697·1.6605·10⁻²⁷ = 4.765·10⁻²⁹ ≈ 4.77·10⁻²⁹ kg.
b. ΔE = 0.028697·931.5 = 26.7 MeV = 26.7·10⁶·1.602·10⁻¹⁹ = 4.28·10⁻¹² J (same from ΔE = Δm·c² ✓ — the 2025 addition to the syllabus).
c. Mass per second: m = P/c² = 3.85·10²⁶/(3.00·10⁸)² = 4.28·10⁹ kg/s. Helium atoms: 3.85·10²⁶/4.28·10⁻¹² = 9.0·10³⁷ per second — and still only 0.07% of the Sun's mass over 10¹⁰ years.

### phys-p10-q10 | points 5 | outcome o2 | difficulty hard

#### Question

Star X is investigated:

- its Hα line (laboratory 656.3 nm) is found at 656.2 nm;
- its continuous spectrum peaks at 7.2·10⁻⁷ m;
- its total radiated power equals 100 P_sun.

a. Compute the star's radial velocity, including the direction of motion.
b. Compute its surface temperature and its colour impression.
c. Place the star in the HR diagram: which class? Justify briefly.

#### Answer

a. v = 4.6·10⁴ m/s towards us (blueshift); b. T = 4.0·10³ K, reddish-orange; c. red giant region: cool but 100 solar powers → large area

#### Solution

a. Δλ = 656.2 − 656.3 = −0.1 nm: the line moved to a *shorter* wavelength → the star approaches us. v = (Δλ/λ)·c = (0.1/656.3)·3.00·10⁸ = 1.524·10⁻⁴·3.00·10⁸ = 4.57·10⁴ ≈ 4.6·10⁴ m/s.
b. T = k_W/λ_max = 2.898·10⁻³/7.2·10⁻⁷ = 4.03·10³ ≈ 4.0·10³ K: definitely redder than the Sun.
c. Cool (4.0·10³ K) yet 100 times the Sun's power: on the HR diagram it sits above/right of the main sequence — a red (sub)giant; σAT⁴ bookkeeping: A ∝ P/T⁴ = 100·(5800/4000)⁴ ≈ 4.4·10² times the Sun's surface ✓ consistent with a giant.

### phys-p10-q11 | points 5 | outcome o1 | difficulty hard

#### Question

A hydrogen-like energy diagram holds levels n = 1 (−13.6 eV), n = 2 (−3.40 eV), n = 3 (−1.51 eV), n = 4 (−0.85 eV).

a. How many different photon energies can a gas of such atoms emit at most (all jumps between the four levels)?
b. Compute the *longest* emission wavelength available and the jump that produces it. Which spectral region is it in?
c. Compute the shortest emission wavelength and its region.

#### Answer

a. 6 different lines; b. n=4 → n=3: ΔE = 0.66 eV → λ = 1.9 μm (infrared); c. n=4 → n=1: ΔE = 12.8 eV → λ = 97 nm (ultraviolet)

#### Solution

a. Every pair gives one line: 4 levels choose 2 = 6 combinations (4→3, 4→2, 4→1, 3→2, 3→1, 2→1).
b. Longest λ needs the smallest ΔE: between the nearest levels n = 4 and n = 3: ΔE = 1.51 − 0.85 = 0.66 eV → λ = 1240/0.66 = 1.9·10³ nm = 1.9 μm — infrared, invisible to the eye.
c. Shortest λ needs the largest ΔE: n = 4 → 1: ΔE = 13.6 − 0.85 = 12.75 ≈ 12.8 eV → λ = 1240/12.75 = 97 nm — deep ultraviolet.
