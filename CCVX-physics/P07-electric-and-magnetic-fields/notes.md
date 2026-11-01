# P7 — Electric and magnetic fields: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions. Built from the CCVX physics syllabus of 15 August 2025.

## 1. Electric fields and the Coulomb force (o1)

- A charge makes the space around it "active": an **electric field**. A second charge q there feels a force. Field lines (*veldlijnen*) show, by their direction, the force direction on a *positive* test charge, and by their density the strength. Rules of thumb: field lines start on + and end on −, never cross, and meet conductors perpendicularly.
- Two point charges q and Q at distance r: **F_el = f·qQ/r²** with f = 8.99·10⁹ N·m²/C² (BINAS). Same signs repel (*afstotend*), opposite signs attract (*aantrekkend*) — Newton 3 applies as always. Note the same 1/r² shape as gravitation, but with the possibility of *repulsion* and with f enormously larger than G — electric forces dwarf gravity for elementary particles.
- Between two flat plates with voltage U at distance d the field is **homogeneous** with magnitude

  **E = ΔU/Δx** = U/d (V/m).

  Around a point charge (or sphere) the field is **radial**, as for the Coulomb force.
- Force and field are linked by F_el = q·E (magnitudes). ⚠️ Sign convention: the CCVX syllabus prints the **vector** equation **F⃗_el = −q·E⃗**, consistent with its E⃗ = ΔU/Δx pointing in the direction of *rising* potential. In words: a positive charge is pushed from the + side to the − side. Learn the magnitude form plus that direction sentence, and you cannot go wrong.
- Electric shielding context: inside a closed conductor there is no field (why a car is safe in a thunderstorm).

## 2. Voltage and kinetic energy of a charged particle (o2)

- Moving a charge q through a voltage difference U converts electric potential energy into kinetic energy (or the reverse):

  **ΔE_el = q·U** and **ΔE_k = −ΔE_el** (energy conservation for the charge).

  An electron (q = −e) that falls *against* the field through +U picks up E_k = e·U from rest.
- The natural energy unit here: **1 electronvolt (elektronvolt) = e·1 V = 1.602·10⁻¹⁹ J**. So an electron through 25 kV simply gets 25 keV — the eV bookkeeping skips the tiny joule numbers.
- Contexts: the **X-ray tube** (*röntgenbuis*) — electrons accelerated through 25–150 kV slam into a metal anode; their deceleration (and inner-shell knock-outs) produces X-radiation (link [P02](../P02-medical-imaging-and-radiation/)); the **linear accelerator** (*lineaire versneller*) — a row of gaps repeats q·U many times for MeV-class beams (radiotherapy).

## 3. Magnetic fields and their directions (o3)

- Sources of magnetism are moving charges: currents, spinning electrons in ferromagnets, the liquid-iron dynamo of the Earth (*aardmagnetisch veld*, ≈ 5·10⁻⁵ T in the Netherlands).
- Field lines of a bar magnet leave the north pole and enter the south pole outside the magnet (inside they close the loop); like poles repel, unlike attract.
- **Straight current wire**: concentric circles around the wire. Right-hand rule (grip rule): thumb along the conventional current → curled fingers give the field direction. In the plane of the paper, current into the paper (⊗) → clockwise circles.
- **Coil / solenoid (*spoel*)**: inside, the field lines run straight and parallel (homogeneous); outside it looks like a bar magnet. Second rule: curled fingers along the winding current → thumb points to the **north pole** of the coil. An electromagnet (*elektromagneet*) is stronger with more turns, more current, and an iron core — and, crucially, switchable.

## 4. The Lorentz force (o4)

- On a current-carrying wire (length ℓ of conductor in the field) perpendicular to B: **F_L = B·I·ℓ**. Direction with the left-hand rule on the palm: fingers = B direction... use the dependable mnemonic: let B enter the palm, the stretched four fingers point along the conventional current I, the outstretched thumb shows F_L. (And remember: the force is maximal when I ⊥ B, zero when I ∥ B.)
- On a single moving charge perpendicular to B: **F_L = B·q·v**. Same hand rule for **positive** charges (for negative ones, flip the result). Because F_L ⊥ v always, the Lorentz force never does work: it only *bends* paths — circular arcs with F_L = F_mpz → Bqv = mv²/r → **r = mv/(qB)** (circular motion again, as in [P05](../P05-gravitation/)).
- Contexts: **electric motor** — coil in a magnet field: opposite sides feel opposite forces → torque, and a commutator keeps it turning one way; **loudspeaker** — the signal current in the voice coil makes F_L push the cone back and forth: current in, sound out.

## 5. Electromagnetic induction (o5)

- Flux (*flux*) through a loop: **Φ = B⊥·A** (Wb) — only the field component *perpendicular* to the loop area counts.
- A *changing* flux induces a voltage:

  **U_ind ∝ N** (the number of turns) and **U_ind ∝ dΦ/dt** (flux change per unit time).

  The syllabus uses proportionalities (no full −N·dΦ/dt law required): reason with "more turns / faster change / larger change → larger induced voltage".
- The induced effect always *opposes* the change (Lenz's law as a mental guide): a magnet pushed **into** a coil induces a current whose field pushes back; pulling it out flips the sign. No change, no voltage: a magnet resting inside the coil gives U_ind = 0.
- Situations to master: magnet moving in/out of a coil (read polarities off voltmeter deflection); a wire frame rotating in a homogeneous field — Φ(t) swings sinusoidally, so U_ind(t) swings too and is largest exactly where Φ crosses zero: an alternating voltage, an **AC dynamo** (*dynamo*). A bicycle dynamo/microphone works the same way (a vibrating coil or magnet converts motion into an electrical signal).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original. Constants: f = 8.99·10⁹ N·m²/C², e = 1.602·10⁻¹⁹ C, m_e = 9.109·10⁻³¹ kg (BINAS).

## Example 1 — Coulomb between ions

Two Na⁺ ions of a salt crystal sit 2.0·10⁻¹⁰ m apart (each charge +e). Compute the repulsion between them and compare with the gravitational attraction between them (m_Na ≈ 3.8·10⁻²⁶ kg).

**Solution.** F_el = f·qQ/r² = 8.99·10⁹·(1.602·10⁻¹⁹)²/(2.0·10⁻¹⁰)² = 8.99·10⁹·2.566·10⁻³⁸/4.0·10⁻²⁰ = 5.8·10⁻⁹ N. F_g = G·m²/r² = 6.674·10⁻¹¹·(3.8·10⁻²⁶)²/4.0·10⁻²⁰ = 2.4·10⁻⁴³ N. Ratio ≈ 10³⁴: gravity is utterly irrelevant between ions — chemistry is electric.

## Example 2 — electrons for the dentist's X-ray photo

An X-ray tube runs at 30 kV.

a. Compute the kinetic energy of an electron at the anode, in eV and in J.
b. Estimate its speed at the anode (classically).

**Solution.** a. E_k = q·U = e·30·10³ = 30 keV = 3.0·10⁴·1.602·10⁻¹⁹ = 4.8·10⁻¹⁵ J. b. ½m_ev² = 4.8·10⁻¹⁵ → v = √(2·4.8·10⁻¹⁵/9.109·10⁻³¹) = √1.055·10¹⁶ = 1.0·10⁸ m/s. (About ⅓ of c: the classical formula starts to strain, but as an estimate it stands.)

## Example 3 — loudspeaker force

The voice coil of a loudspeaker holds 2.0 m of wire (ℓ totalling the turns in the gap, given) in a radial field B = 0.40 T. The amplifier sends I = 3.0 A. Compute the force on the coil.

**Solution.** The gap field crosses the windings perpendicularly: F_L = B·I·ℓ = 0.40·3.0·2.0 = 2.4 N. When the current reverses, the force reverses — the coil (glued to the cone) follows the music waveform.

## Example 4 — bending an electron beam

Electrons with v = 1.5·10⁷ m/s enter perpendicularly a homogeneous field B = 6.0·10⁻³ T.

a. Compute the Lorentz force on one electron.
b. Compute the radius of the circular path.

**Solution.** a. F_L = B·q·v = 6.0·10⁻³·1.602·10⁻¹⁹·1.5·10⁷ = 1.44·10⁻¹⁴ N. b. F_L = F_mpz → B·q·v = m·v²/r → r = m·v/(q·B) = 9.109·10⁻³¹·1.5·10⁷/(1.602·10⁻¹⁹·6.0·10⁻³) = 1.42·10⁻² m ≈ 1.4 cm.

## Example 5 — dynamo output when cycling

A bicycle hub dynamo is effectively a 300-turn coil spinning next to a rotating magnet.

a. The light goes out when the wheel stands still. Explain, with the induction rule, why.
b. The lamp is brighter when cycling fast. Give two reasons in terms of the two proportionalities.
c. The dynamo is rewound with twice as many turns (same wire speed). What happens to the induced voltage?

**Solution.** a. Standing still, the flux through the coil does not change (dΦ/dt ≈ 0), so U_ind ∝ N·dΦ/dt ≈ 0: no voltage, no light. Spinning, the magnet sweeps changing flux through the coil each turn. b. Faster rotation makes the same flux swing happen more quickly: dΦ/dt is larger, so the peak induced voltage grows. At the same time the frequency of the alternating voltage rises, which the lamp filament smooths out — the net result is a brighter light. c. U_ind ∝ N: double the turns → double the induced voltage (at the same rotation speed).
