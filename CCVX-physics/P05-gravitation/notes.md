# P5 — Gravitation: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions (G = 6.674·10⁻¹¹ N·m²/kg², g = 9.81 m/s²). Built from the CCVX physics syllabus of 15 August 2025.

## 1. Circular motion needs a centre-seeking force

- A body in uniform circular motion has constant *speed* but continuously changing velocity *direction*: it accelerates towards the centre. The needed resultant is the centripetal force (*middelpuntzoekende kracht*):

  **F_mpz = mv²/r**, directed towards the centre.

  "F_mpz" is a *role*, not a new force: it is played by gravity (satellites), tension (swung ball), friction (car in a bend) or a combination. The syllabus only requires calculations where **one** force plays the role — identify that force first.
- Orbital speed and period: **v = 2πr/T** with T the orbital period (*omlooptijd*) and r the orbital radius (*baanstraal*, measured from the **centre** of the celestial body, not from its surface!).
- An object hurled forward falls around the planet when gravity alone provides F_mpz: it is in orbit — "falling forever without hitting the ground".

## 2. Newton's law of gravitation

- Every two masses attract each other: **F_g = G·mM/r²**, along the line between centres, with r the distance between the centres. The force is mutual: the Earth pulls the Moon exactly as hard as the Moon pulls the Earth (Newton 3).
- Inverse-square law (*kwadratenwet*): twice the distance → quarter of the force. This 1/r² shape governs gravity, and also, in [P07](../P07-electric-and-magnetic-fields/), Coulomb's law.

## 3. Orbits

- For a circular orbit: G·mM/r² = mv²/r → **v = √(G·M/r)**. Only M (the central mass) matters; the satellite's own mass cancels — a bolt and a station fly the same orbit.
- Substituting v = 2πr/T gives **T² = 4π²r³/(G·M)**: T² ∝ r³ — Kepler's third law for circular orbits (usable for quick comparisons: four times the radius → 4^(3/2) = 8 times the period).
- Geostationary orbit (*geostationaire baan*): T = 24 h (one Earth rotation), above the equator, r ≈ 4.2·10⁷ m from the Earth's centre (height ≈ 3.6·10⁷ m above the surface): the satellite hangs above one fixed point — used for TV and telephone relays.
- Real planet orbits are ellipses (*ellipsbanen*), close to circles; comets on stretched ellipses spend most time far away (moving slowly where F_g is small) and rush past the Sun — as a numerical model with F_g = G·Mm/r² reproduces step by step (model skill: update r, F, a, v at each time step).

## 4. Gravitational energy and escape velocity

- **E_g = −G·mM/r** (negative: zero is chosen "at infinity", and you climb up out of the well). The energy needed to bring a mass from radius r₁ to r₂ (> r₁) is

  ΔE = E_g(r₂) − E_g(r₁) = G·mM·(1/r₁ − 1/r₂).

- Escape velocity (*ontsnappingssnelheid*): kinetic energy just sufficient to reach infinity and arrive there (just barely) at rest: ½mv² = G·mM/r → **v_ont = √(2GM/r)** — depends only on the body's mass and radius, not on the escaping object. Earth: 11.2 km/s; Moon: 2.4 km/s. (This is why the Moon holds no atmosphere: molecule speeds from thermal motion come within reach of 2.4 km/s.)
- Total energy of a circular orbit: E_k + E_g = ½mv² − G·Mm/r = **−G·Mm/(2r)** — bound systems have negative total energy; a higher orbit (larger r) has *more* total energy but a *smaller* speed (a classic exam trap: faster means lower).

## 5. The surface gravity of a planet

- At the surface F_z = F_g: m·g = G·mM/R² → **g = G·M/R²**. So g follows only from the planet's mass and radius: the Moon (small M) has 1.6 m/s², Jupiter (large M but also large R) about 25 m/s². This explains why "weight" differs per planet while mass stays the same.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original. Constants from BINAS: G = 6.674·10⁻¹¹ N·m²/kg²; Earth M = 5.972·10²⁴ kg, R = 6.378·10⁶ m; Moon M = 7.35·10²² kg, R = 1.738·10⁶ m.

## Example 1 — hammer throw on a rope

A 2.0 kg ball on a 1.2 m rope is swung horizontally at 3.0 m/s. Compute the tension in the rope (ignore gravity in this fast spin).

**Solution.** The rope tension alone plays the role of centripetal force: F_span = F_mpz = mv²/r = 2.0·3.0²/1.2 = 15 N.

## Example 2 — a low Earth orbit

Compute the orbital speed and period of a satellite 3.0·10² km above the Earth's surface.

**Solution.** r = R + h = 6.378·10⁶ + 3.0·10⁵ = 6.678·10⁶ m. F_g = F_mpz: G·M/r² = v²/r → v = √(G·M/r) = √(6.674·10⁻¹¹·5.972·10²⁴/6.678·10⁶) = √(3.986·10¹⁴/6.678·10⁶) = √5.969·10⁷ = 7.7·10³ m/s. T = 2πr/v = 2π·6.678·10⁶/7.7·10³ = 5.4·10³ s ≈ 90 min: about 16 sunrises per day.

## Example 3 — geostationary radius

Determine the radius of a geostationary orbit.

**Solution.** T = 24 h = 8.640·10⁴ s. From T² = 4π²r³/(GM): r³ = G·M·T²/(4π²) = 3.986·10¹⁴·(8.640·10⁴)²/39.48 = 2.976·10²⁴/39.48 = 7.54·10²² m³ → r = 4.2·10⁷ m. Height above the surface: 4.2·10⁷ − 6.378·10⁶ = 3.6·10⁷ m. Check via v: v = 2πr/T = 3.1 km/s ✓.

## Example 4 — escape velocity of Earth and Moon

Compute both escape velocities and the energy needed to lift 1 kg from each surface to "infinity".

**Solution.** Earth: v_ont = √(2·3.986·10¹⁴/6.378·10⁶) = √1.250·10⁸ = 1.12·10⁴ m/s. Energy per kg: G·M/R = 3.986·10¹⁴/6.378·10⁶ = 6.25·10⁷ J — consistent, since v²/2 = (1.118·10⁴)²/2 = 6.25·10⁷ ✓. Moon: GM = 4.905·10¹² → v_ont = √(2·4.905·10¹²/1.738·10⁶) = √5.64·10⁶ = 2.4·10³ m/s; energy per kg: 2.8·10⁶ J — 22× easier to leave the Moon, which is why the Apollo lander needed only a small ascent engine.

## Example 5 — why astronauts float

The ISS orbits at 3.0·10² km altitude. Compute g there and explain why the astronauts are nevertheless "weightless".

**Solution.** g(h) = G·M/r² = 3.986·10¹⁴/(6.678·10⁶)² = 8.94 m/s² — barely 9% less than at the surface, far from zero. The astronauts float because station *and* crew are in free fall together: gravity alone provides exactly the centripetal force of their common orbit, so the station floor exerts no normal force on them. Weightlessness in orbit is falling around the Earth — not the absence of gravity.
