# P7 — Electric and magnetic fields: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o5 match the numbered learning outcomes in [README.md](README.md). Constants (BINAS): f = 8.99·10⁹ N·m²/C², e = 1.602·10⁻¹⁹ C, m_e = 9.109·10⁻³¹ kg.

### phys-p07-q01 | points 3 | outcome o1 | difficulty easy

#### Question

Two small spheres carry charges q = 2.0 µC and Q = 5.0 µC at a centre distance of 0.30 m.

a. Compute the electric force between them.
b. Is the force attractive or repulsive? State the rule you use.

#### Answer

a. F_el = 1.0 N; b. repulsive — both charges are positive (same signs repel)

#### Solution

a. F_el = f·qQ/r² = 8.99·10⁹·(2.0·10⁻⁶·5.0·10⁻⁶)/0.30² = 8.99·10⁹·1.0·10⁻¹¹/9.0·10⁻² = 1.0 N.
b. Both charges are positive → repulsion (*afstotend*). Newton's third law: each sphere pushes the other away with the same 1.0 N.

### phys-p07-q02 | points 3 | outcome o1 | difficulty easy

#### Question

An electron sits in a homogeneous electric field of strength E = 5.0·10² N/C.

a. Compute the force on the electron.
b. Compute its acceleration (m_e from BINAS) and state its direction relative to the field.

#### Answer

a. F = 8.0·10⁻¹⁷ N opposite to the field; b. a = 8.8·10¹³ m/s²

#### Solution

a. F_el = q·E = 1.602·10⁻¹⁹·5.0·10² = 8.0·10⁻¹⁷ N. The electron is negative, so the force points *opposite* to the field direction (the field direction is defined by the force on a *positive* charge).
b. a = F/m = 8.0·10⁻¹⁷/9.109·10⁻³¹ = 8.8·10¹³ m/s² — tiny mass, enormous acceleration (even in a modest field).

### phys-p07-q03 | points 2 | outcome o1 | difficulty easy

#### Question

Two flat metal plates stand 4.0 cm apart with a voltage of 2.0 kV across them. Compute the field strength between the plates and state what you can say about the field between them away from the edges.

#### Answer

E = 5.0·10⁴ V/m; homogeneous (straight, parallel field lines)

#### Solution

E = ΔU/Δx = U/d = 2.0·10³/4.0·10⁻² = 5.0·10⁴ V/m. Away from the edges the field is homogeneous: straight, parallel, evenly spaced field lines, so a charge anywhere there feels the same force.

### phys-p07-q04 | points 3 | outcome o3 | difficulty easy

#### Question

A long straight vertical wire carries a conventional current upward.

a. Describe (with the right-hand rule) the shape and the direction of the magnetic field around the wire, seen from above.
b. Describe how the field strength changes with the distance from the wire.
c. A compass needle held next to the wire points in a markedly different direction than before the current is switched on. Explain.

#### Answer

a. concentric circles around the wire, seen from above turning counterclockwise (thumb with the current, fingers curl with B); b. B decreases with distance (roughly as 1/r — field lines spread wider apart); c. the wire's field adds a perpendicular component to the Earth's field; the needle follows the resultant

#### Solution

a. Grip rule: right thumb along the conventional current (up), the curled fingers lay the field as concentric circles around the wire; viewed from above the lines run counterclockwise.
b. Farther away from the wire the field lines are spaced wider apart: the field weakens with distance (for an infinitely long straight wire B ∝ 1/r); near the wire it is strongest.
c. Normally the needle follows the horizontal component of the Earth's magnetic field (~5·10⁻⁵ T). The current adds its own field (perpendicular to the radial direction at the needle). The needle aligns to the vector sum — a clear deflection if the wire's extra field is comparable.

### phys-p07-q05 | points 4 | outcome o2 | difficulty medium

#### Question

In an X-ray tube electrons are accelerated from rest through a voltage of 2.5·10⁴ V.

a. Compute the kinetic energy of an electron at the anode, in eV and in J.
b. Compute its speed on arrival (classical approximation).

#### Answer

a. E_k = 25 keV = 4.0·10⁻¹⁵ J; b. v ≈ 9.4·10⁷ m/s

#### Solution

a. ΔE_k = q·U = e·2.5·10⁴ = 25 keV = 2.5·10⁴·1.602·10⁻¹⁹ = 4.0·10⁻¹⁵ J. (The eV count is immediate: one electron through one volt gains exactly 1 eV.)
b. ½m_ev² = 4.0·10⁻¹⁵ → v = √(2·4.0·10⁻¹⁵/9.109·10⁻³¹) = √8.79·10¹⁵ = 9.4·10⁷ m/s — about a third of the speed of light, which is why X-ray physics brushes relativistic corrections (beyond this syllabus).

### phys-p07-q06 | points 3 | outcome o4 | difficulty medium

#### Question

A straight wire of length ℓ = 0.50 m carries a current of 8.0 A horizontally to the right, through a homogeneous magnetic field B = 0.20 T directed perpendicularly *into* the paper.

a. Compute the Lorentz force on the wire.
b. State the direction of that force with the left-hand rule.

#### Answer

a. F_L = 0.80 N; b. upward in the plane of the paper

#### Solution

a. The wire is perpendicular to B: F_L = B·I·ℓ = 0.20·8.0·0.50 = 0.80 N.
b. Left hand: let B enter the palm (palm facing you, since B points into the paper), fingers point along I (right) → the outstretched thumb points **upward**: F_L up in the plane of the paper. (Motor principle — that is why these wire segments are put on rotors.)

### phys-p07-q07 | points 4 | outcome o4 | difficulty medium

#### Question

An electron with speed v = 2.0·10⁷ m/s flies perpendicularly into a homogeneous magnetic field B = 5.0·10⁻³ T.

a. Compute the Lorentz force on the electron.
b. The path bends into a circle. Compute its radius (use F_L = F_mpz).
c. Why does the electron's *speed* stay constant along the circle?

#### Answer

a. F_L = 1.6·10⁻¹⁴ N; b. r = 2.3 cm; c. F_L ⊥ v always → the Lorentz force can do no work, so E_k cannot change

#### Solution

a. F_L = B·q·v = 5.0·10⁻³·1.602·10⁻¹⁹·2.0·10⁷ = 1.60·10⁻¹⁴ ≈ 1.6·10⁻¹⁴ N.
b. B·q·v = m·v²/r → r = m·v/(q·B) = 9.109·10⁻³¹·2.0·10⁷/(1.602·10⁻¹⁹·5.0·10⁻³) = 2.27·10⁻² ≈ 2.3 cm.
c. The Lorentz force is always perpendicular to the velocity (left-hand rule: outcome ⊥ to both v and B), so its work W = F·s·cos α = 0. No work, no change of kinetic energy — the field can only *steer*, never speed up or slow down the charge.

### phys-p07-q08 | points 3 | outcome o3 | difficulty medium

#### Question

a. Describe the magnetic field pattern inside and just outside a long current-carrying coil (solenoid), including the field-line directions.
b. Give three measures that make the electromagnet formed by such a coil stronger.
c. The coil of a relay must pick up its armature but then *release* it when the current stops. What kind of core material fits and why (think of remanence)?

#### Answer

a. inside: homogeneous (straight, parallel lines); outside: like a bar magnet; rule: curled fingers with the winding current → thumb = north; b. more turns, more current, (soft-)iron core; c. soft iron: it magnetises and *demagnetises* readily — a remanent hard core would keep gripping

#### Solution

a. Inside the solenoid the field is practically homogeneous: straight, parallel, evenly spaced lines running to the coil's north end. Outside, the pattern equals a bar magnet's: lines leave at the north pole and re-enter at the south pole. The second right-hand rule gives the poles: curled fingers along the (conventional) winding current → thumb points to the north pole.
b. More turns N, larger current I, and a soft-iron core that channels and amplifies the field.
c. Soft iron: it strongly boosts the field while current flows but loses its magnetism when the field vanishes (low remanence). A hard magnetic material would stay magnetised and keep the armature stuck — fatal for a switch.

### phys-p07-q09 | points 4 | outcome o5 | difficulty medium

#### Question

A square wire frame with side 4.5 cm (area 2.0·10⁻³ m²) sits in a homogeneous field B = 0.15 T.

a. Compute the flux through the frame when its plane is perpendicular to the field.
b. The frame is rotated 30° away from that orientation. Compute the new flux (only the perpendicular component of B counts).
c. The rotation from (a) to (b) happens in 0.25 s. Give the average flux change per unit time and — with the syllabus proportionality — the factor by which the induced voltage changes if the same rotation is done in 0.10 s.

#### Answer

a. Φ = 3.0·10⁻⁴ Wb; b. Φ = 2.6·10⁻⁴ Wb; c. ΔΦ/Δt = 1.6·10⁻⁴ Wb/s; 2.5× faster → U_ind also ×2.5

#### Solution

a. Φ = B⊥·A = 0.15·2.0·10⁻³ = 3.0·10⁻⁴ Wb (frame plane ⊥ B, so the full B crosses the loop).
b. Tilted 30°: the perpendicular component is B·cos 30° = 0.13 T → Φ = 0.15·0.866·2.0·10⁻³ = 2.6·10⁻⁴ Wb.
c. ΔΦ/Δt = (3.0·10⁻⁴ − 2.6·10⁻⁴)/0.25 = 4.0·10⁻⁵/0.25 = 1.6·10⁻⁴ Wb/s. U_ind ∝ ΔΦ/Δt: same ΔΦ in 0.10 s instead of 0.25 s → 2.5× larger → 2.5× larger induced voltage.

### phys-p07-q10 | points 4 | outcome o5 | difficulty hard

#### Question

A bar magnet is pulled out of a coil with N = 400 turns in 0.050 s; during the extraction the flux through the coil falls from 3.0·10⁻⁴ Wb to 0.

a. Give, with the syllabus proportionality, the 'voltage number' N·ΔΦ/Δt for this event.
b. The same extraction is done with a coil of N = 200 turns. By what factor does the induced voltage change?
c. With the original coil, the magnet is pulled out twice as slowly (0.10 s). What happens to the induced voltage now?
d. During the extraction the voltmeter deflects the *other way* compared with pushing the magnet in. Explain.

#### Answer

a. 2.4; b. ×½ (halved); c. ×½ (halved, to 1.2); d. falling flux induces a voltage of opposite sign to rising flux — the induced current opposes the change

#### Solution

a. N·ΔΦ/Δt = 400·(3.0·10⁻⁴ − 0)/0.050 = 400·6.0·10⁻³ = 2.4.
b. U_ind ∝ N: halving the turns halves the induced voltage (1.2 in the same bookkeeping).
c. U_ind ∝ ΔΦ/Δt: same flux change spread over twice the time → half the induced voltage.
d. Pushing in: flux rises; pulling out: flux falls. The induced current always opposes the change of flux (energy/Lenz reasoning: the coil pushes back against the change), so the sign of the induced voltage flips between the two motions — which the meter shows as a deflection to the other side.

### phys-p07-q11 | points 4 | outcome o5 | difficulty hard

#### Question

A wire frame rotates at constant angular speed in a homogeneous magnetic field — the principle of a dynamo.

a. At which two orientations of the frame during a turn is the flux Φ maximal, and at which is it zero?
b. At which orientations is the *induced voltage* maximal? Explain with the (non-)uniformity of the flux change.
c. The frame is spun three times faster. Describe quantitatively what happens to the peak voltage and to the frequency of the alternating voltage.

#### Answer

a. Φ maximal when the plane of the frame is perpendicular to B; zero when parallel; b. U_ind is maximal exactly where Φ passes through zero (there |ΔΦ/Δt| is largest); c. peak voltage ×3, frequency ×3

#### Solution

a. Φ = B⊥A: maximal when the frame's plane is perpendicular to B (full field through the loop), zero when the plane is parallel to B (no field through the loop).
b. While rotating uniformly, Φ(t) swings sinusoidally. Its change per unit time is steepest exactly where Φ crosses zero (steepest part of the sine), and zero at the extremes. Hence U_ind is maximal when Φ = 0, and zero when Φ is at its extremes: voltage and flux are in quadrature. This is why a turning coil generates a smooth alternating voltage.
c. U_ind ∝ dΦ/dt: spinning 3× faster compresses the same flux swing into ⅓ of the time → peak voltage ×3; the number of cycles per second also grows ×3 (frequency ×3). Real grid generators are engineered for their frequency first.

### phys-p07-q12 | points 5 | outcome o2 | difficulty hard

#### Question

In an old oscilloscope tube electrons are accelerated through 18 kV, then travel 30 cm in field-free space to the screen.

a. Compute the kinetic energy of an electron at the end of the acceleration section (in J and in eV).
b. Compute its speed there.
c. Compute the flight time to the screen, and give the speed's *vertical* change (if any) during the flight if a vertical field is absent.

#### Answer

a. E_k = 2.9·10⁻¹⁵ J = 18 keV; b. v = 8.0·10⁷ m/s; c. t ≈ 3.8·10⁻⁹ s; without a field the velocity stays constant (Newton 1)

#### Solution

a. E_k = q·U = 1.602·10⁻¹⁹·1.8·10⁴ = 2.88·10⁻¹⁵ J = 18 keV.
b. ½m_ev² = 2.88·10⁻¹⁵ → v = √(2·2.88·10⁻¹⁵/9.109·10⁻³¹) = √6.32·10¹⁵ = 7.95·10⁷ ≈ 8.0·10⁷ m/s.
c. t = s/v = 0.30/7.95·10⁷ = 3.8·10⁻⁹ s. No force acts in the field-free space, so per Newton's first law the electron keeps its velocity — direction and speed unchanged — until the deflection plates steer it (that steering is again F_el = q·E from this same subdomain).
