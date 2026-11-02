# P5 — Gravitation: practice

Ten original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o2 match the numbered learning outcomes in [README.md](README.md). Constants from BINAS: G = 6.674·10⁻¹¹ N·m²/kg²; Earth M = 5.972·10²⁴ kg, R = 6.378·10⁶ m; Moon M = 7.35·10²² kg, R = 1.738·10⁶ m, Earth–Moon distance 3.844·10⁸ m.

### phys-p05-q01 | points 3 | outcome o1 | difficulty easy

#### Question

A geostationary satellite has an orbital radius r = 4.22·10⁷ m and a period T = 24 h.

a. Compute its orbital speed in m/s and km/s.
b. The satellite does not "fall" to Earth. Name the force that plays the role of centripetal force.

#### Answer

a. v ≈ 3.1·10³ m/s = 3.1 km/s; b. the gravitational force (zwaartekracht/gravitatiekracht) of the Earth

#### Solution

a. v = 2πr/T = 2π·4.22·10⁷/(24·3600 s) = 2.652·10⁸/8.640·10⁴ = 3.07·10³ ≈ 3.1·10³ m/s ≈ 3.1 km/s.
b. Gravity (*gravitatiekracht*): it is the only force on the satellite and points to the centre of the Earth — exactly what a centripetal force must do.

### phys-p05-q02 | points 4 | outcome o2 | difficulty easy

#### Question

a. Compute the gravitational force between the Earth and the Moon.
b. State, with the law involved, how large the force is that the Moon exerts on the Earth compared with the force the Earth exerts on the Moon.

#### Answer

a. F_g ≈ 2.0·10²⁰ N; b. exactly equal (Newton's third law)

#### Solution

a. F_g = G·mM/r² = 6.674·10⁻¹¹·7.35·10²²·5.972·10²⁴/(3.844·10⁸)² = 2.93·10³⁷/1.478·10¹⁷ = 2.0·10²⁰ N.
b. Newton's third law: F⃗_AB = −F⃗_BA — the forces are equal in size (2.0·10²⁰ N) and opposite in direction. (The Earth accelerates far less because its mass is 81 times larger: a = F/m.)

### phys-p05-q03 | points 3 | outcome o2 | difficulty easy

#### Question

Compute the gravitational acceleration g at the surface of Mars (M = 6.42·10²³ kg, R = 3.396·10⁶ m) and compare it with the Earth's 9.81 m/s².

#### Answer

g_Mars = 3.7 m/s², about 0.38 × the Earth's

#### Solution

g = G·M/R² = 6.674·10⁻¹¹·6.42·10²³/(3.396·10⁶)² = 4.285·10¹³/1.153·10¹³ = 3.71 ≈ 3.7 m/s². Ratio 3.71/9.81 = 0.38. A 70 kg astronaut would *weigh* (i.e. the normal force would be) only 2.6·10² N on Mars — same mass, different weight.

### phys-p05-q04 | points 5 | outcome o1 | difficulty medium

#### Question

A satellite flies in a circular orbit 3.0·10² km above the Earth's surface.

a. Compute its orbital speed from the requirement that gravity alone provides the centripetal force.
b. Compute the orbital period in minutes.

#### Answer

a. v = 7.7·10³ m/s; b. T ≈ 90 min (5.4·10³ s)

#### Solution

a. Orbit radius r = R + h = 6.378·10⁶ + 3.0·10⁵ = 6.678·10⁶ m. F_g = F_mpz → G·M/r² = v²/r → v = √(G·M/r) = √(3.986·10¹⁴/6.678·10⁶) = √5.97·10⁷ = 7.7·10³ m/s.
b. T = 2πr/v = 2π·6.678·10⁶/7.73·10³ = 5.43·10³ s = 90.5 ≈ 90 min. (This is the ISS-like regime: an orbit roughly every hour and a half.)

### phys-p05-q05 | points 5 | outcome o2 | difficulty medium

#### Question

a. Derive the radius of a *geostationary* orbit (T = 24.0 h) from G·M_Earth = 3.986·10¹⁴ m³/s².
b. Compute the height of that orbit above the Earth's surface.
c. Explain why a geostationary satellite must orbit above the equator, in the direction of the Earth's rotation.

#### Answer

a. r = 4.2·10⁷ m; b. h = 3.6·10⁷ m; c. the orbit's centre must be the Earth's centre and the period must match the rotation, which only works in the equatorial plane, rotating along

#### Solution

a. From G·M/r² = v²/r with v = 2πr/T: G·M/r² = 4π²r/T² → r³ = G·M·T²/(4π²) = 3.986·10¹⁴·(8.640·10⁴)²/39.478 = 7.54·10²² m³ → r = 4.22·10⁷ ≈ 4.2·10⁷ m.
b. h = r − R = 4.22·10⁷ − 6.378·10⁶ = 3.59·10⁷ ≈ 3.6·10⁷ m.
c. The centripetal force points to the Earth's centre, so the orbit's centre coincides with the Earth's centre. To stand still above one ground point, the orbital plane must be the equatorial plane and the angular velocity must match the Earth's spin (same T, same direction): that combination is the geostationary orbit. 

### phys-p05-q06 | points 4 | outcome o2 | difficulty medium

#### Question

a. Explain why E_g = −G·mM/r is *negative* (what zero level is chosen?).
b. Compute the minimum energy needed to lift a 1.0 kg mass from the Earth's surface to a point essentially infinitely far away.

#### Answer

a. zero is chosen at infinite separation; inside the well the energy is below zero; b. ΔE = 6.3·10⁷ J

#### Solution

a. Free particles at rest infinitely far away define E_g = 0. Within Earth's gravitational well the energy is lower, hence negative; climbing *out* requires adding energy until E_g → 0.
b. ΔE = E_g(∞) − E_g(R) = 0 − (−G·M·m/R) = 3.986·10¹⁴·1.0/6.378·10⁶ = 6.25·10⁷ ≈ 6.3·10⁷ J. (Per kilogram! A 70 kg climber needs 4.4·10⁹ J — rockets are expensive for a reason.)

### phys-p05-q07 | points 4 | outcome o2 | difficulty medium

#### Question

a. Compute the escape velocity from the Earth's surface.
b. Compute it for the Moon (G·M_Moon = 4.905·10¹² m³/s²).
c. Use the results to explain why the Moon could not hold on to an atmosphere.

#### Answer

a. 11 km/s (1.12·10⁴ m/s); b. 2.4 km/s; c. gas molecules reach speeds of that order by thermal motion, so the Moon's hold on them is too weak — they escape over time

#### Solution

a. ½mv² = GmM/R → v_ont = √(2G·M/R) = √(2·3.986·10¹⁴/6.378·10⁶) = √1.250·10⁸ = 1.12·10⁴ ≈ 11 km/s.
b. v_ont = √(2·4.905·10¹²/1.738·10⁶) = √5.64·10⁶ = 2.37·10³ ≈ 2.4 km/s.
c. Molecules in a warm gas have speeds of a few 10² m/s, with a fast tail of the distribution several times higher. Near the Moon, the upward-moving fast fraction can pass 2.4 km/s and is lost for good; over millions of years the atmosphere leaked away. The Earth's 11.2 km/s demands far more, so only the lightest gases (H₂, He) escape it.

### phys-p05-q08 | points 4 | outcome o2 | difficulty hard

#### Question

Jupiter's orbit radius is 5.2 times the Earth's.

a. Using T² ∝ r³ for (nearly) circular orbits around the same central mass, compute Jupiter's orbital period in Earth years.
b. Compute the ratio of the Sun's gravitational acceleration (per kg) on Jupiter to that on Earth.

#### Answer

a. T ≈ 12 yr; b. F per kg scales as 1/r² → (1/5.2)² ≈ 0.037 → about 4%

#### Solution

a. T_J²/T_E² = (r_J/r_E)³ = 5.2³ = 140.6 → T_J = 1 yr·√140.6 = 11.9 ≈ 12 yr. (Matches the known 11.9 yr — Kepler's third law in one line.)
b. Per unit mass F/m = G·M_sun/r² ∝ 1/r²: ratio = (1/5.2)² = 1/27 = 0.037. The Sun pulls 27× weaker on each kilogram out at Jupiter — a clean application of the inverse-square law.

### phys-p05-q09 | points 5 | outcome o1 | difficulty hard

#### Question

The International Space Station orbits 3.0·10² km above the Earth's surface.

a. Compute the gravitational acceleration g at that altitude.
b. Astronauts float inside. Explain — with the result of (a) — why "there is no gravity up there" is wrong, and what really causes the floating.

#### Answer

a. g = 8.9 m/s² (91% of surface value); b. gravity is very much present and provides exactly the centripetal force; station and astronauts fall freely together, so the normal force is zero

#### Solution

a. r = 6.678·10⁶ m: g = G·M/r² = 3.986·10¹⁴/(6.678·10⁶)² = 8.94 ≈ 8.9 m/s².
b. With 8.9 m/s² there is clearly gravity — without it the station would fly off tangentially into space! That 8.9 m/s² is precisely the centripetal acceleration v²/r of the orbit (satellite v ≈ 7.7·10³ m/s: check v²/r = 5.97·10⁷/6.678·10⁶ = 8.9 ✓). Station and crew both free-fall with that same acceleration, so the floor pushes on nobody: normal force zero → apparent weightlessness. It is falling around the Earth, not floating beyond its pull.

### phys-p05-q10 | points 4 | outcome o2 | difficulty hard

#### Question

A satellite of 5.0·10² kg is in a circular orbit with r = 6.678·10⁶ m.

a. Compute its kinetic energy (use the orbital speed v = 7.7·10³ m/s) and its gravitational energy.
b. Show that the total energy equals E = −G·mM/(2r).
c. An engine burn lifts the satellite to a higher circular orbit. State what happens to its total energy and to its orbital speed — and why this combination surprises many students.

#### Answer

a. E_k = 1.5·10¹⁰ J, E_g = −3.0·10¹⁰ J; b. E = −1.5·10¹⁰ J = −GmM/(2r); c. E increases, but v decreases — "faster is lower"

#### Solution

a. E_k = ½mv² = ½·5.0·10²·(7.73·10³)² = 1.49·10¹⁰ ≈ 1.5·10¹⁰ J. E_g = −G·mM/r = −3.986·10¹⁴·5.0·10²/6.678·10⁶ = −2.98·10¹⁰ ≈ −3.0·10¹⁰ J.
b. E = E_k + E_g = 1.49·10¹⁰ − 2.98·10¹⁰ = −1.49·10¹⁰ J. Algebraically: in a circular orbit ½mv² = GmM/(2r) (from v² = GM/r), so E = GmM/(2r) − GmM/r = −GmM/(2r) ✓ — always negative for a bound orbit.
c. A higher orbit: r larger → E = −GmM/(2r) *less* negative → total energy increases (the engine's chemical energy paid for that). But v = √(GM/r) becomes *smaller*: the satellite goes higher and slower. Counter-intuitive only until remembered that most of the burn paid for the climb (E_g), not for speed.
