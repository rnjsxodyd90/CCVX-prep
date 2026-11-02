# P10 — Electromagnetic radiation and stars: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions (h = 6.626·10⁻³⁴ J·s, c = 3.00·10⁸ m/s, k_W = 2.898·10⁻³ m·K, σ = 5.670·10⁻⁸ W/(m²·K⁴)). Built from the CCVX physics syllabus of 15 August 2025.

## 1. Atoms: energy levels and spectral lines (o1)

- The electrons bound to an atom may live only on fixed energy levels (*energieniveaus*): the lowest is the ground state (*grondtoestand*), the others are excited states (*aangeslagen toestanden*). The energy tearing the electron fully loose from the ground state is the ionisation energy (*ionisatie-energie*).
- A photon (*foton*) is absorbed only if its energy exactly lifts an electron from one level to a higher one; an electron dropping down emits a photon with precisely the difference:

  **E_f = |E_m − E_n|**, together with **E_f = hf** and **E_f = hc/λ**.

  Handy constant: hc/e = 1.240·10⁻⁶ eV·m, so λ[nm] ≈ 1240/E[eV].
- Emission spectrum: bright lines on dark (a glowing thin gas, e.g. a sodium lamp). Absorption spectrum: dark Fraunhofer lines (*fraunhoferlijnen*) cut from a continuous background (a plasma's cool outer layer filtering starlight). The line *pattern* is a unique fingerprint per element — this is how we analyse stars without visiting them.
- Every energy E in an electron's bookkeeping can be switched between J and eV with 1 eV = 1.602·10⁻¹⁹ J.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 200" width="340" role="img" aria-label="Energy level diagram of the hydrogen atom with three transitions">
  <line x1="50" y1="156" x2="290" y2="156" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="62" x2="290" y2="62" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="44" x2="290" y2="44" stroke="#333" stroke-width="1.5"/>
  <line x1="50" y1="38" x2="290" y2="38" stroke="#333" stroke-width="1.2"/>
  <text x="296" y="160" font-size="11" font-family="sans-serif" fill="#333">n=1  −13.6 eV</text>
  <text x="296" y="66" font-size="11" font-family="sans-serif" fill="#333">n=2  −3.4 eV</text>
  <text x="296" y="48" font-size="11" font-family="sans-serif" fill="#333">n=3  −1.5 eV</text>
  <text x="296" y="34" font-size="11" font-family="sans-serif" fill="#333">n=4  −0.85 eV</text>
  <line x1="120" y1="44" x2="120" y2="62" stroke="#c62828" stroke-width="2"/>
  <polygon points="120,66 116,58 124,58" fill="#c62828"/>
  <text x="128" y="58" font-size="10" font-family="sans-serif" fill="#c62828">Hα 656 nm</text>
  <line x1="80" y1="62" x2="80" y2="156" stroke="#6a1b9a" stroke-width="2"/>
  <polygon points="80,160 76,152 84,152" fill="#6a1b9a"/>
  <text x="88" y="118" font-size="10" font-family="sans-serif" fill="#6a1b9a">Lyman α 122 nm</text>
  <line x1="200" y1="38" x2="200" y2="62" stroke="#1565c0" stroke-width="2"/>
  <polygon points="200,66 196,58 204,58" fill="#1565c0"/>
  <text x="208" y="55" font-size="10" font-family="sans-serif" fill="#1565c0">Hβ 486 nm</text>
  <text x="10" y="160" font-size="11" font-family="sans-serif" fill="#333">0</text>
  <text x="4" y="30" font-size="11" font-family="sans-serif" fill="#333">E</text>
</svg>

## 2. What starlight tells (o2)

- **Temperature** from the Planck curve's peak (Wien, section 4): hot stars are blue, cool stars red.
- **Composition** from the Fraunhofer lines: each pattern matches one element's fingerprint.
- **Radial velocity** from the Doppler shift of the lines: **v = (Δλ/λ)·c**; lines at longer λ = *redshift* (*roodverschuiving*, receding), shorter λ = *blueshift* (*blauwverschuiving*, approaching). (This is the same Doppler physics as the siren in [P01](../P01-oscillations-and-waves/), now with the formula.)
- **Hertzsprung–Russell diagram**: stars in a plot of radiated power (or luminosity) against temperature (axis with hot on the left, cool on the right). The main sequence runs diagonally from hot-luminous to cool-dim; red giants sit top-right (cool but very luminous → must be enormous, since P = σAT⁴ with moderate T and gigantic A); white dwarfs bottom-left (hot but dim → tiny area).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 210" width="340" role="img" aria-label="Hertzsprung-Russell diagram: main sequence, red giants, white dwarfs and the Sun">
  <line x1="45" y1="175" x2="320" y2="175" stroke="#333" stroke-width="1"/>
  <line x1="45" y1="175" x2="45" y2="20" stroke="#333" stroke-width="1"/>
  <text x="12" y="26" font-size="11" font-family="sans-serif" fill="#333">P/P_sun</text>
  <text x="200" y="196" font-size="11" font-family="sans-serif" fill="#333">T (K) — hot left</text>
  <text x="52" y="190" font-size="10" font-family="sans-serif" fill="#333">30 000</text>
  <text x="292" y="190" font-size="10" font-family="sans-serif" fill="#333">3 000</text>
  <line x1="70" y1="40" x2="280" y2="160" stroke="#90a4ae" stroke-width="8" opacity="0.5"/>
  <ellipse cx="265" cy="55" rx="32" ry="14" fill="#ef9a9a" opacity="0.55"/>
  <ellipse cx="80" cy="162" rx="22" ry="9" fill="#c5cae9" opacity="0.6"/>
  <circle cx="217" cy="97" r="4" fill="#ffb300"/>
  <text x="225" y="101" font-size="10" font-family="sans-serif" fill="#333">Sun</text>
  <text x="110" y="36" font-size="10" font-family="sans-serif" fill="#333">main sequence</text>
  <text x="238" y="40" font-size="10" font-family="sans-serif" fill="#333">red giants</text>
  <text x="52" y="148" font-size="10" font-family="sans-serif" fill="#333">white dwarfs</text>
</svg>

## 3. The fuel of stars: fusion and the mass defect (o3, new in 2025)

- Stars shine by fusing hydrogen into helium (in several steps; net: 4 H → He + energy). The fused product weighs slightly *less* than the ingredients: the mass defect (*massadefect*) Δm.
- That missing mass becomes energy via **E = mc²** (the syllabus's 2025 addition). Per atomic mass unit: 1 u = 1.6605·10⁻²⁷ kg → u·c² = 1.4924·10⁻¹⁰ J = 9.315·10² MeV — so each atomic mass unit of defect liberates 931.5 MeV. In the 4 H → He step Δm ≈ 0.0287 u ≈ 0.71% of the input mass: stars convert less than one percent of their hydrogen's mass into light, and that is already enough for billions of years.
- The Sun's power-bill version: radiating P = 3.85·10²⁶ W means converting P/c² ≈ 4.3·10⁹ kg of mass per second — four million tonnes per second, and still the Sun loses only ~0.07% of its mass over 10¹⁰ years (see Example 6).

## 4. Temperature and colour: Wien (o4)

- Every warm body emits a continuous spectrum (*continu spectrum*): the Planck curve (*planck-kromme*) — zero at both ends, with one peak.
- The peak marches with temperature: **λ_max·T = k_W** (Wien's law). Cooler → peak to longer λ (redder, then infrared); hotter → bluer, then UV. Sun (T ≈ 5.8·10³ K): λ_max ≈ 500 nm, mid-visible; a 2.8·10³ K lamp filament peaks at ≈ 1.0 μm: an incandescent lamp dumps most of its radiation into infrared — that is its inefficiency in one graph (see η in [P04](../P04-energy-and-interaction/)).

## 5. Power, area and distance: Stefan-Boltzmann and the inverse square (o5)

- Total radiated power of a (black) body: **P_bron = σ·A·T⁴**. Two consequences for exam questions: same size at double T → 2⁴ = 16× the power; same T at double radius → 4× the area → 4× the power. The T⁴ makes stars extremely T-sensitive.
- Spreading over a sphere: **I = P_bron/(4πr²)** — the observed intensity dilutes with the inverse square of distance (*kwadratenwet*). At Earth, r = 1.496·10¹¹ m, the Sun delivers I ≈ 1.37·10³ W/m² (the solar constant).

## 6. The electromagnetic spectrum (o6)

- From short to long λ (high to low photon energy): **γ – X – ultraviolet – visible – infrared – microwaves – radio**. Ionising from UV upward (see [P02](../P02-medical-imaging-and-radiation/) for the risks); non-ionising below.
- Instruments: the optical telescope (visible), the radio telescope (long waves, dishes, all-weather and dust-penetrating), the space telescope (above the atmosphere: IR, UV, X and γ astronomy needs orbit: the atmosphere blocks those bands).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — the Hα line from a level diagram

Hydrogen levels: E₂ = −3.40 eV, E₃ = −1.51 eV. Compute the energy, frequency and wavelength of the photon emitted at 3 → 2.

**Solution.** ΔE = |−1.51 − (−3.40)| = 1.89 eV = 1.89·1.602·10⁻¹⁹ = 3.03·10⁻¹⁹ J. f = E/h = 3.03·10⁻¹⁹/6.626·10⁻³⁴ = 4.57·10¹⁴ Hz; λ = c/f = 6.56·10⁻⁷ m = 656 nm — the deep-red Hα of every astronomy photo. Shortcut check: 1240/1.89 = 656 nm ✓.

## Example 2 — two stars from the same Planck shift

Star A peaks at 580 nm, star B at 290 nm.

a. Estimate both temperatures.
b. Which of the two is "bluer"? Give the colour-temperature mapping in words.

**Solution.** a. T = k_W/λ_max: T_A = 2.898·10⁻³/5.8·10⁻⁷ = 5.0·10³ K (about solar, slightly cooler); T_B = 2.898·10⁻³/2.9·10⁻⁷ = 1.0·10⁴ K. b. B is twice as hot and its peak sits at half the wavelength: B is the blue one. Hot = short λ = blue; cool = long λ = red.

## Example 3 — solar constant and Neptune

a. Verify Earth's received solar intensity (P_sun = 3.85·10²⁶ W, d = 1.496·10¹¹ m).
b. Neptune orbits at 30.1 times the Earth's distance. Compute the intensity there.

**Solution.** a. I = P/(4πd²) = 3.85·10²⁶/(4π·(1.496·10¹¹)²) = 3.85·10²⁶/2.812·10²³ = 1.37·10³ W/m² ✓. b. 30.1² = 906 → I = 1.37·10³/906 = 1.5 W/m². Inverse-square: the furthest planet collects barely a per-mille of our sunlight — solar panels retire long before Neptune.

## Example 4 — Betelgeuse's giant status

Betelgeuse: T ≈ 3.6·10³ K and P ≈ 1.2·10⁵ times the Sun's power (given). Show why it must be huge, and estimate its surface area relative to the Sun's (Sun: T ≈ 5.8·10³ K).

**Solution.** Both are (about) blackbodies: P = σAT⁴ → A ∝ P/T⁴. Compare:
A_B/A_S = (P_B/P_S)·(T_S/T_B)⁴ = 1.2·10⁵·(5.8/3.6)⁴ = 1.2·10⁵·(1.611)⁴ = 1.2·10⁵·6.74 = 8.1·10⁵.
Its surface is about a million times the Sun's — radius ratio √(8.1·10⁵) ≈ 900. A cool star can only be so luminous by being monstrous: a red supergiant, roughly Mars-orbit-sized.

## Example 5 — mass defect of one helium

Compute the energy released when 4 hydrogen atoms fuse into one helium atom: masses in u, 4 × 1.007825 → 4.002603 (BINAS atomic masses; electrons cancel).

**Solution.** Δm = 4·1.007825 − 4.002603 = 4.031300 − 4.002603 = 0.028697 u ≈ 0.0287 u. Energy: ΔE = Δm·c² = 0.028697·931.5 MeV = 26.7 MeV = 26.7·10⁶·1.602·10⁻¹⁹ = 4.28·10⁻¹² J per helium atom formed. Fraction of the input mass: 0.028697/4.0313 = 0.71% — the stellar bargain.

## Example 6 — the missing mass of the Sun's light

The Sun radiates P = 3.85·10²⁶ W. How much mass does it lose per second, and per year? And what fraction of a solar mass (M_sun = 1.989·10³⁰ kg) is that per 10¹⁰ years?

**Solution.** m = P/c² = 3.85·10²⁶/(3.00·10⁸)² = 3.85·10²⁶/9.00·10¹⁶ = 4.28·10⁹ kg/s ≈ 4.3 million tonnes per second. Per year (3.156·10⁷ s): 1.35·10¹⁷ kg. Per 10¹⁰ years: 1.35·10²⁷ kg = 6.8·10⁻⁴ of a solar mass — spectacular per second, modest per aeon. (Not even counting the solar wind.)
