# P2 — Medical imaging and radiation: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions. Built from the CCVX physics syllabus of 15 August 2025.

## 1. Electromagnetic radiation: photons (o1)

- Electromagnetic radiation is emitted (*emissie*) when a charged system loses energy, propagates as a wave at the speed of light c = 3.00·10⁸ m/s in vacuum (also through air, for all practical purposes), and is taken up again by **absorption** (*absorptie*).
- Radiation also behaves as a stream of energy packets, photons (*fotonen*). The photon energy is

  **E_f = hf**, and the link with wavelength is **c = λf** (often combined: E_f = hc/λ),

  with Planck's constant h = 6.626·10⁻³⁴ J·s (BINAS).
- Small λ → large f → large photon energy. Order from long to short λ: radio, microwave, infrared, visible, ultraviolet, X-ray, γ. X and γ photons are energetic enough to *ionise* atoms — that is why they are dangerous and useful.

## 2. Ionising radiation and dose (o2)

**Nucleus and isotopes.** A nucleus has Z protons and N neutrons; the mass number is **A = Z + N**. Isotopes (*isotopen*) of one element share Z but differ in N. The atomic mass unit (*atomaire massaeenheid*) is 1 u = 1.6605·10⁻²⁷ kg (BINAS). A radioactive isotope (*radioactief verval*) decays spontaneously; the activity (*activiteit*) A tells how many nuclei decay per second (unit Bq = 1/s).

**The three kinds of decay radiation** — set up reaction equations conserving A and Z:

- α-radiation: a helium nucleus ⁴₂He. Parent loses A by 4 and Z by 2. Strongly ionising, short range (*dracht*): centimetres in air, stopped by paper or the dead skin layer. Dangerous mainly when the source is *inside* the body.
- β⁻-radiation: an electron ⁰₋₁e (a neutron turns into a proton). Z rises by 1, A unchanged. Moderate ionising power, range of metres in air, stopped by a few mm of aluminium.
- γ-radiation: a high-energy photon ⁰₀γ. A and Z unchanged (the nucleus sheds excitation energy). Weakly ionising but very penetrating (*doordringend vermogen*); attenuated, never fully stopped, by thick lead or concrete.
- X-radiation (*röntgenstraling*) is man-made: electrons accelerated by tens of kV in an X-ray tube (*röntgenbuis*) are decelerated in a metal anode.

**Check an equation:** mass numbers balance (top numbers) and charges balance (bottom numbers).

**Dose and equivalent dose.** Absorbed dose **D = E/m** in gray (1 Gy = 1 J/kg): the energy absorbed per kilogram of tissue. Equal doses of different radiation types do unequal damage, so the body dose for protection purposes is the equivalent dose **H = w_R·D** in sievert (Sv), with the radiation weighting factor w_R = 1 for β, γ and X, and w_R = 20 for α (BINAS). A dosimeter (badge) tracks a worker's accumulated dose.

**Risk facts (Binas):** natural background radiation (*achtergrondstraling*, partly cosmic — *kosmische straling* — partly from soil, food and our own K-40) is of the order of 2 mSv per year in the Netherlands. Protection standards keep *additional* artificial exposure for the public near 1 mSv per year. Distinguish irradiation (*bestraling*): exposed from an external source that is gone afterwards, from contamination (*besmetting*): radioactive material on or in the body — the exposure continues.

## 3. Half-life and half-value thickness (o3)

- Each radioactive isotope has a fixed half-life (*halveringstijd*) t½: after every t½ half of the remaining nuclei decay. Counting N₀ nuclei at t = 0:

  **N(t) = N(0)·½^(t/t½)** and since A ∝ N also **A(t) = A(0)·½^(t/t½)**.

- Instantaneous activity: **A = −dN/dt** (the slope of the (N,t) curve, negative because N falls; the minus makes A positive) and **A = (ln 2/t½)·N**. Validity: A(t) tells how many *decays per second* happen now, not how many happened so far.
- Important values (BINAS): Tc-99m 6.0 h (nuclear diagnostics), F-18 1.83 h (PET), I-131 8.0 d (thyroid therapy), Co-60 5.3 yr, C-14 5.73·10³ y (dating), U-238 4.5·10⁹ y.
- Radiation passing through matter loses intensity by the same kind of rule, now per *thickness*: **I(x) = I(0)·½^(x/d½)** with d½ the half-value thickness (*halveringsdikte*). Thick, high-Z material (lead) makes d½ small. A transmission curve (*doorlaatkromme*) shows I(x); a decay curve (*vervalkromme*) shows N(t) or A(t).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 200" width="340" role="img" aria-label="Decay curve: after each half-life half of the nuclei remain">
  <line x1="40" y1="170" x2="325" y2="170" stroke="#333" stroke-width="1"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#333" stroke-width="1"/>
  <text x="30" y="26" font-size="12" font-family="sans-serif">N</text>
  <text x="316" y="186" font-size="12" font-family="sans-serif">t</text>
  <polyline points="40,20 68,64 96,95 124,117 152,132.5 180,143.5 208,151.3 236,156.7 264,160.6 292,163.4 320,165.3" fill="none" stroke="#1565c0" stroke-width="2"/>
  <line x1="40" y1="95" x2="96" y2="95" stroke="#c62828" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="96" y1="95" x2="96" y2="170" stroke="#c62828" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="42" y="112" font-size="11" font-family="sans-serif" fill="#c62828">N₀/2</text>
  <text x="88" y="186" font-size="11" font-family="sans-serif" fill="#c62828">t½</text>
  <text x="40" y="14" font-size="11" font-family="sans-serif" fill="#333">N₀</text>
</svg>

## 4. Imaging techniques (o4)

| Technique | Physical background | Sees well | Advantages | Disadvantages |
|---|---|---|---|---|
| X-ray photo (*röntgenopname*) | X-rays pass through the body; absorption per tissue depends on half-value thickness (bone absorbs much more than soft tissue) | bones, teeth, lungs | fast, cheap, small dose | flat shadow picture, little soft-tissue detail |
| CT scan | the X-ray tube rotates around the patient; a computer combines many directions into cross-sectional slices | detailed 3-D anatomy | sharp 3-D images | much larger dose than a photo |
| MRI scan | hydrogen nuclei (protons) align in a strong magnetic field; a radio pulse at the resonant frequency tips them; their relaxation signal is measured; *no ionising radiation* | soft tissue: brain, ligaments, tumours | superb soft-tissue contrast, no dose | slow, expensive, loud, impossible with many metal implants or pacemakers |
| PET scan | a tracer (*tracer*) with a β⁺ emitter (e.g. F-18) collects in active tissue; the emitted positron annihilates with an electron: e⁺ + e⁻ → 2γ, two 511 keV photons firing in exactly opposite directions; a detector ring registers them in coincidence and the computer reconstructs where the tracer sits | metabolic activity: tumours, brain function | shows *function*, not just shape | needs a nearby cyclotron, short half-lives, costly, some dose |
| Ultrasound (*echografie*) | pulses of sound above 20 kHz reflect at tissue boundaries; from the echo time the depth follows with s = v·t/2 (v ≈ 1.5·10³ m/s in soft tissue); Doppler ultrasound measures blood-flow speeds | pregnancy, heart, abdomen | no ionising radiation, real-time, cheap | cannot pass air or bone well, noisy images |
| Nuclear diagnostics (*nucleaire diagnostiek* / scintigraphy) | a radioactive tracer (e.g. Tc-99m, γ emitter) is taken up by an organ; a gamma camera maps the radiation from inside the body | thyroid, bones, kidneys | images organ function | small dose, limited detail |

Also know the two photon processes: in **annihilation** an electron and a positron vanish and two 0.511 MeV γ photons leave in opposite directions (energy from E = mc², see [P10](../P10-electromagnetic-radiation-and-stars/)); in the reverse **creation of an electron–positron pair**, a γ photon with enough energy (≥ 1.02 MeV) converts into an electron and a positron near a nucleus.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — reaction equations

Cobalt-60 (²⁷Co) decays by β⁻ radiation to nickel, which then emits a γ photon.

a. Give the equation of the β⁻ decay.
b. What changes in the γ step?

**Solution.** a. ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ⁰₋₁e. Check: top 60 = 60 + 0 ✓; bottom 27 = 28 − 1 ✓. b. Nothing in A or Z: the γ photon carries off only energy: ⁶⁰₂₈Ni* → ⁶⁰₂₈Ni + ⁰₀γ.

## Example 2 — planning a Tc-99m scan

For a bone scan at 14:00 an injection of 2.0·10² MBq of Tc-99m (t½ = 6.0 h) is required. The hospital prepares the sample at 8:00. What activity must be prepared?

**Solution.** From 8:00 to 14:00 is 6.0 h, exactly one half-life. The activity halves: A(t) = A(0)·½¹ = 2.0·10² MBq → A(0) = 4.0·10² MBq. The lab prepares 4.0·10² MBq.

## Example 3 — shielding

An operator works behind lead glass with half-value thickness 3.0 mm for the γ photons used (given). Which thickness transmits only 6.25% of the radiation?

**Solution.** 6.25% = 1/16 = ½⁴ → four half-value layers: x = 4·3.0 = 12 mm. (Each extra layer of d½ halves again what is left.)

## Example 4 — dose and equivalent dose

During a radiation accident a worker's lung of mass 0.80 kg absorbs 6.0 mJ of α energy.

a. Compute the absorbed dose.
b. Compute the equivalent dose and compare it with the same absorbed dose of β radiation.

**Solution.** a. D = E/m = 6.0·10⁻³/0.80 = 7.5 mGy. b. H = w_R·D = 20·7.5 = 1.5·10² mSv. The same 7.5 mGy of β radiation gives only 7.5 mSv: α damages tissue twenty times more per gray (its ionisations lie densely along a short track).

## Example 5 — from 511 keV to wavelength

Compute the wavelength of the annihilation photons used in PET imaging.

**Solution.** E_f = 511 keV = 511·10³·1.602·10⁻¹⁹ = 8.19·10⁻¹⁴ J. λ = hc/E_f = 6.626·10⁻³⁴·2.998·10⁸/8.19·10⁻¹⁴ = 2.43·10⁻¹² m: deep in the γ range.

## Example 6 — activity and nucleus count

A sealed check source holds 3.0·10¹⁰ nuclei of a γ emitter with t½ = 30 min.

a. Compute the activity.
b. Compute the activity after 2.0 h.

**Solution.** a. t½ = 1800 s: A = (ln 2/t½)·N = (0.693/1800)·3.0·10¹⁰ = 1.2·10⁷ Bq = 12 MBq. b. 2.0 h = 4 half-lives: A = 12·½⁴ = 7.5·10⁻¹ MBq ≈ 7.5·10⁵ Bq.
