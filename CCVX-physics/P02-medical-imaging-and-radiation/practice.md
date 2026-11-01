# P2 — Medical imaging and radiation: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o4 match the numbered learning outcomes in [README.md](README.md). Constants come from BINAS (h = 6.626·10⁻³⁴ J·s, c = 3.00·10⁸ m/s, e = 1.602·10⁻¹⁹ C, m_e = 9.109·10⁻³¹ kg, w_R(α) = 20, w_R(β, γ, X) = 1).

### phys-p02-q01 | points 4 | outcome o1 | difficulty easy

#### Question

A gamma camera detects the γ photons of Tc-99m, each with energy 140 keV.

a. Compute this energy in joules.
b. Compute the frequency and the wavelength of this radiation.

#### Answer

a. 2.24·10⁻¹⁴ J; b. f = 3.4·10¹⁹ Hz, λ = 8.9·10⁻¹² m

#### Solution

a. E_f = 140·10³ eV × 1.602·10⁻¹⁹ J/eV = 2.24·10⁻¹⁴ J.
b. E_f = hf → f = E_f/h = 2.24·10⁻¹⁴/6.626·10⁻³⁴ = 3.4·10¹⁹ Hz. Then c = λf → λ = 3.00·10⁸/3.4·10¹⁹ = 8.9·10⁻¹² m (check: λ = hc/E gives the same ✓).

### phys-p02-q02 | points 4 | outcome o2 | difficulty easy

#### Question

a. Radium-226 (²²⁶₈₈Ra) decays by α radiation to radon (Rn). Give the reaction equation.
b. Iodine-131 (¹³¹₅₃I) decays by β⁻ radiation to xenon (Xe). Give the reaction equation.

#### Answer

a. ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He; b. ¹³₁₅₃I → ¹³¹₅₄Xe + ⁰₋₁e

#### Solution

a. An α particle is ⁴₂He; mass numbers: 226 = 222 + 4 ✓, charges: 88 = 86 + 2 ✓ → ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.
b. In β⁻ decay A stays and Z rises by 1: ¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁e; check 131 = 131 ✓, 53 = 54 − 1 ✓.

### phys-p02-q03 | points 3 | outcome o3 | difficulty easy

#### Question

A syringe for a bone scan contains 50 MBq of Tc-99m (t½ = 6.0 h). Because of a delay the injection takes place 24 h after preparation. Compute the remaining activity.

#### Answer

3.1 MBq

#### Solution

24 h / 6.0 h = 4 half-lives: A(t) = 50·½⁴ = 50/16 = 3.1 MBq. Rounding: 3.1 MBq (the prepared value 50 MBq has 2 significant figures).

### phys-p02-q04 | points 3 | outcome o3 | difficulty easy

#### Question

For the γ radiation of a certain source, lead has half-value thickness d½ = 4.0 mm (given). What thickness of lead reduces the intensity to exactly 1/32 of the unshielded value?

#### Answer

2.0·10¹ mm (20 mm)

#### Solution

I(x) = I(0)·½^(x/d½). Need ½^(x/d½) = 1/32 = ½⁵ → x/d½ = 5 → x = 5·4.0 = 20 mm.

### phys-p02-q05 | points 4 | outcome o2 | difficulty medium

#### Question

In a laboratory accident a small piece of an α-emitting material ends up in a researcher's lung. The affected lung tissue has a mass of 0.10 kg and absorbs 40 mJ of α energy before the material is removed.

a. Compute the absorbed dose D in gray.
b. Compute the equivalent dose H in sievert.
c. The same 40 mJ had been β energy instead. Compute H and explain the difference.

#### Answer

a. D = 0.40 Gy; b. H = 8.0 Sv; c. H = 0.40 Sv — α is weighted 20× more heavily because its ionisations lie densely along a short track

#### Solution

a. D = E/m = 40·10⁻³/0.10 = 0.40 Gy.
b. H = w_R·D = 20·0.40 = 8.0 Sv — a severe, life-threatening local dose. (And because the α source is *inside* the body — contamination — all of its energy is absorbed.)
c. For β: w_R = 1 → H = 0.40 Sv. Equal deposited energy, 20 times less biological damage: the weighting factor w_R in H = w_R·D expresses the denser ionisation track of α.

### phys-p02-q06 | points 3 | outcome o4 | difficulty medium

#### Question

During an abdominal ultrasound (echografie) the echo of one organ boundary arrives 6.5·10⁻⁵ s after the pulse is sent. The speed of sound in the tissue is 1.5·10³ m/s (given). Compute the depth of that boundary below the probe.

#### Answer

4.9 cm

#### Solution

The pulse goes down and back: 2d = v·t → d = v·t/2 = 1.5·10³·6.5·10⁻⁵/2 = 4.9·10⁻² m ≈ 4.9 cm. (Forgetting the factor 2 is the classic error.)

### phys-p02-q07 | points 4 | outcome o3 | difficulty medium

#### Question

A physics student measures a newly made radioactive sample. At t = 0 the sample contains N(0) = 8.0·10³ undecayed nuclei of the isotope being studied; after 6.0 h only 2.0·10³ of those nuclei remain.

a. Determine the half-life of this isotope from the data.
b. Compute the activity of the sample at t = 0.
c. Explain why the slope of the (N,t) diagram *itself* is negative while the activity is quoted as a positive number.

#### Answer

a. t½ = 3.0 h; b. A(0) ≈ 0.51 Bq; c. N decreases, so dN/dt < 0; the definition A = −dN/dt makes A positive

#### Solution

a. 8.0·10³ → 2.0·10³ means two halvings (8000 → 4000 → 2000) in 6.0 h → t½ = 3.0 h.
b. A(0) = (ln 2/t½)·N(0) = (0.693/3.0·3600 s)·8.0·10³ = 0.51 Bq.
c. The number of undecayed nuclei falls, so the derivative dN/dt is negative; the activity counts decays per second as a positive rate, hence the definition A = −dN/dt. The steeper the (N,t) curve, the larger the activity.

### phys-p02-q08 | points 5 | outcome o4 | difficulty medium

#### Question

For a PET scan a patient receives a tracer with fluorine-18, a β⁺ emitter (decays to oxygen).

a. Give the decay equation of ¹⁸₉F.
b. The emitted positron soon meets an electron. Describe what happens and why the detectors are arranged in a ring around the patient.
c. Explain how this technique can find a fast-growing tumour, while the tumour is barely visible on an ordinary X-ray photo.

#### Answer

a. ¹⁸₉F → ¹⁸₈O + ⁰₊₁e; b. annihilation: two 511 keV γ photons leave in opposite directions and are registered simultaneously by opposite detectors, so each event fixes a line through the body; c. the tracer collects where metabolism is high — PET images function, the X-ray photo only images anatomy

#### Solution

a. β⁺: A unchanged, Z decreases by 1: ¹⁸₉F → ¹⁸₈O + ⁰₊₁e. Check: 18 = 18 ✓, 9 = 8 + 1 ✓. (Positron = positive electron, antiparticle of e⁻.)
b. The positron annihilates with an electron: e⁺ + e⁻ → 2γ. Two photons of 0.511 MeV each fly off in exactly opposite directions (momentum conservation, see q11). Opposite detectors that register two photons at the same instant know the annihilation happened somewhere on the line between them; combining many such lines, the computer reconstructs the tracer concentration.
c. Tumour cells consume more energy than normal tissue, so the tracer collects there: the PET image lights up at the tumour even when its *shape* does not differ from the surroundings. The X-ray photo maps absorption differences (anatomy) and shows nothing where tissue densities are alike.

### phys-p02-q09 | points 5 | outcome o4 | difficulty medium

#### Question

Choose the best imaging technique for each situation and justify the choice with its physical background:

a. a suspected broken wrist in the first aid department;
b. torn knee ligaments in an athlete;
c. checking the growth of an unborn child during pregnancy.

#### Answer

a. X-ray photo; b. MRI; c. ultrasound (echografie)

#### Solution

a. **X-ray photo**: bone absorbs X-rays much more strongly than soft tissue (smaller half-value thickness of bone), so a crack shows immediately; the technique is fast, cheap and available everywhere, and the required detail here does not justify a CT.
b. **MRI**: ligaments are soft tissue, practically invisible on X-rays; MRI maps hydrogen nuclei and gives superb soft-tissue contrast without ionising radiation. The athlete gets no dose.
c. **Ultrasound**: it uses sound pulses and echoes — no ionising radiation, so it is safe for the fetus and the mother; it works in real time so movement and heartbeat are visible. (X-ray/CT would be irresponsible here: the unborn child must not be irradiated.)

### phys-p02-q10 | points 5 | outcome o3 | difficulty hard

#### Question

A thyroid patient is treated with 4.0·10² MBq of iodine-131 (t½ = 8.0 d; 1 d = 8.64·10⁴ s).

a. After how many days has the activity fallen to 25 MBq?
b. How many I-131 nuclei does the dose contain at administration? Use A = (ln 2/t½)·N.
c. The patient stays in isolation for the first days. Give a physical reason and name which protection concept applies (irradiation or contamination) to visitors.

#### Answer

a. 32 d; b. N ≈ 4.0·10¹⁴ nuclei; c. the patient himself is the radioactive material — visitors near the patient are irradiated by his β/γ radiation, and if his sweat/urine (with I-131) reaches them they risk contamination

#### Solution

a. 4.0·10² → 25 MBq is a factor 16 = 2⁴, i.e. 4 half-lives: t = 4·8.0 = 32 d.
b. N = A·t½/ln 2 = 4.0·10⁸·(8.0·8.64·10⁴)/0.693 = 4.0·10⁸·6.912·10⁵/0.693 = 4.0·10¹⁴ nuclei.
c. Inside the patient the I-131 keeps emitting β and γ; that radiation leaves the body, so standing close to the patient means *irradiation* (external exposure). Bodily fluids containing I-131 (sweat, urine) can transfer radioactive material to others: *contamination*, which continues to expose them until it decays or is washed away. Isolation limits both.

### phys-p02-q11 | points 5 | outcome o4 | difficulty hard

#### Question

In a PET scanner the two annihilation photons each have an energy of 0.511 MeV.

a. Verify this energy with a calculation, using the electron mass from BINAS and E = mc².
b. Explain with a conservation law why the two photons leave in exactly opposite directions (and with equal energies).

#### Answer

a. E = 8.19·10⁻¹⁴ J = 5.11·10⁵ eV = 0.511 MeV ✓; b. momentum (impuls) conservation: the initial momentum is ≈ 0, so the two photon momenta must cancel — equal and opposite

#### Solution

a. E = m_e·c² = 9.109·10⁻³¹·(2.998·10⁸)² = 8.187·10⁻¹⁴ J. In eV: 8.187·10⁻¹⁴/1.602·10⁻¹⁹ = 5.11·10⁵ eV = 0.511 MeV ✓. Every annihilation converts the rest mass of *one* electron and *one* positron into two photons of this energy.
b. Just before annihilation the electron–positron pair moves slowly, so the total momentum is nearly zero. After the event the total must still be zero (conservation of momentum). Two photons can only cancel each other's momentum if they have equal energies and fly in exactly opposite directions — that is why the PET detector ring always looks at detector pairs.

### phys-p02-q12 | points 4 | outcome o3 | difficulty hard

#### Question

A bone sample from an archaeological site shows a carbon-14 activity that is exactly 1/8 of the activity of a fresh bone of the same mass. Estimate the age of the bone (t½ of C-14 is 5.73·10³ y) and explain the assumption behind this dating method.

#### Answer

1.7·10⁴ y (17 190 y)

#### Solution

1/8 = ½³ → three half-lives: age = 3·5.73·10³ = 1.719·10⁴ ≈ 1.7·10⁴ y. Assumption: while the organism lived, its C-14 fraction matched that of the atmosphere (steady exchange with food and air); after death the uptake stops and the C-14 only decays, so the drop from the "living" activity measures the elapsed time.
