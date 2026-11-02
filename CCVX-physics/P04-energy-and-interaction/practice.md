# P4 — Energy and interaction: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o2 match the numbered learning outcomes in [README.md](README.md). Use g = 9.81 m/s².

### phys-p04-q01 | points 3 | outcome o1 | difficulty easy

#### Question

A warehouse worker pushes a crate 8.0 m forward over the floor.

a. He pushes horizontally with 75 N. Compute his work.
b. A colleague pushes with a handle at 30° below the horizontal, also with 75 N over 8.0 m. Compute her work and comment.

#### Answer

a. W = 6.0·10² J; b. W = 5.2·10² J — only the horizontal component of the force works

#### Solution

a. W = F·s·cos α = 75·8.0·1 = 6.0·10² J.
b. W = 75·8.0·cos 30° = 6.0·10²·0.866 = 5.2·10² J. The downward component presses the crate into the floor (and actually *increases* the friction) without doing work — pushing horizontally is smarter.

### phys-p04-q02 | points 4 | outcome o2 | difficulty easy

#### Question

a. Compute the kinetic energy of a car of 9.0·10² kg at 30 m/s (108 km/h).
b. Show with the formula what happens to E_k when the speed doubles to 60 m/s, and give the consequence for the braking distance at the same braking force.

#### Answer

a. E_k = 4.1·10⁵ J; b. E_k becomes 4× (1.6·10⁶ J), so the braking distance also becomes 4×

#### Solution

a. E_k = ½mv² = ½·9.0·10²·30² = 4.05·10⁵ ≈ 4.1·10⁵ J.
b. E_k is quadratic in v: doubling v → 4× E_k = 1.62·10⁶ J. From ΣW = ΔE_k with constant braking force F: s = ½mv²/F, so the braking distance also becomes 4× (and accident energy grows even faster in the human frame).

### phys-p04-q03 | points 2 | outcome o2 | difficulty easy

#### Question

A hiker of 70 kg climbs 5.0·10² m of height. Compute the increase of his gravitational energy.

#### Answer

ΔE_z = 3.4·10⁵ J

#### Solution

ΔE_z = m·g·Δh = 70·9.81·5.0·10² = 3.4·10⁵ J (about 82 kcal of useful output — and the body burns roughly four times that).

### phys-p04-q04 | points 3 | outcome o1 | difficulty medium

#### Question

A racing cyclist delivers a constant useful power of 2.5·10² W.

a. At 10 m/s (36 km/h) on flat ground: which total resistance force holds him back?
b. On a climb he rides at 5.0 m/s with the same power. Against which force can he work now?

#### Answer

a. F = 25 N; b. F = 50 N

#### Solution

a. P = F·v → F = P/v = 2.5·10²/10 = 25 N — that must equal the total resistance (air + rolling + slope: on the flat only the first two).
b. F = 2.5·10²/5.0 = 50 N: halving the speed doubles the available force — exactly why you shift to a lower gear uphill.

### phys-p04-q05 | points 4 | outcome o2 | difficulty medium

#### Question

A basketball (m = 0.62 kg) is dropped from 2.0 m and rebounds to 1.4 m.

a. Compute its speed just before the first bounce (no air resistance).
b. Which fraction of the mechanical energy survives the bounce, and where is the rest?
c. To which height does it rebound after the *second* bounce (assume the same fraction)?

#### Answer

a. v = 6.3 m/s; b. 0.70 (70%) survives, 30% to heat/sound/deformation; c. 0.98 m

#### Solution

a. mgh = ½mv² → v = √(2gh) = √(2·9.81·2.0) = 6.3 m/s.
b. Heights compare as energies (E_z ∝ h): 1.4/2.0 = 0.70 survives as mechanical energy; 30% is converted into heat (deformation) and a soft "thud" of sound.
c. h₂ = 1.4·0.70 = 0.98 m — a geometric sequence of heights (relates to the mathematics-A concept of exponential processes).

### phys-p04-q06 | points 4 | outcome o2 | difficulty medium

#### Question

A ball is thrown straight up with 12 m/s from a balcony 1.8 m above the street.

a. Compute the highest point reached above the street.
b. Compute the speed with which the ball hits the street.

#### Answer

a. 9.1 m; b. 13 m/s (13.4 m/s)

#### Solution

a. Added height from the throw: Δh = v₀²/(2g) = 12²/19.62 = 7.3 m; above street: 7.3 + 1.8 = 9.1 m.
b. Energy from the balcony to the street: ½mv₀² + mg·1.8 = ½mv² → v² = 12² + 2·9.81·1.8 = 1.79·10² → v = 13.4 ≈ 13 m/s.

### phys-p04-q07 | points 4 | outcome o2 | difficulty medium

#### Question

A spring (C = 2.5·10² N/m) is compressed 0.12 m against a block of 80 g on a smooth table and released.

a. Compute the stored spring energy.
b. Compute the speed the block gets (the spring loses contact at the equilibrium position).

#### Answer

a. E_veer = 1.8 J; b. v = 6.7 m/s

#### Solution

a. E_veer = ½Cu² = ½·2.5·10²·0.12² = 1.8 J.
b. All spring energy becomes kinetic: ½mv² = 1.8 → v = √(2·1.8/0.080) = √45 = 6.7 m/s.

### phys-p04-q08 | points 3 | outcome o1 | difficulty medium

#### Question

A winch pulls with a force that rises linearly from 0 to 2.0·10² N over the first 0.50 m, then stays 2.0·10² N for the next 0.50 m, pulling a cart of 40 kg that starts from rest.

a. Compute the work done over the full metre.
b. Compute the final speed of the cart (friction negligible).

#### Answer

a. W = 1.5·10² J; b. v = 2.7 m/s

#### Solution

a. W = area in the (F,x) diagram = ½·0.50·2.0·10² + 0.50·2.0·10² = 50 + 1.0·10² = 1.5·10² J.
b. ΣW = ΔE_k: ½·40·v² = 150 → v = √(300/40) = √7.5 = 2.7 m/s.

### phys-p04-q09 | points 5 | outcome o2 | difficulty medium

#### Question

A car drives 100 km at constant speed and burns 5.6 dm³ of petrol (r_v = 33·10⁶ J/dm³, given; engine efficiency 25%).

a. Compute the chemical energy taken in and the useful mechanical work.
b. Compute the average total resistance force over this trip.
c. Name into which forms the remaining 75% went.

#### Answer

a. E_ch = 1.8·10⁸ J (184.8 MJ), W_nuttig = 46 MJ; b. F = 4.6·10² N; c. heat in engine/exhaust, cooling air, sound

#### Solution

a. E_ch = r_v·V = 33·10⁶·5.6 = 1.85·10⁸ J. Useful: E_nuttig = 0.25·1.85·10⁸ = 4.6·10⁷ J (46 MJ).
b. Constant speed: useful work = friction work over the trip: F·s = 4.6·10⁷ → F = 4.6·10⁷/1.00·10⁵ = 4.6·10² N.
c. About ¾ of the chemical energy left as heat via the exhaust and the cooling system (warmed air and engine block) plus some sound and vibration. An electric drivetrain moves that same loss upstream to the power plant — with a far better tank-to-wheel efficiency.

### phys-p04-q10 | points 4 | outcome o2 | difficulty hard

#### Question

A pendulum bob (m = 0.20 kg) swings through its lowest point at 2.0 m/s (measured with a light gate).

a. Compute its kinetic energy there.
b. Compute how high it rises above the lowest point in the turning points (friction negligible), and sketch the energy budget during one half period: turning point → equilibrium → turning point.
c. Where along the swing is the *tangential* component of the acceleration (the one that changes the bob's speed) zero?

#### Answer

a. 0.40 J; b. 0.20 m; all E_k ↔ E_z and back; c. in the equilibrium position the tangential component is zero (the resultant force along the path vanishes there; the *centripetal* component is not zero — it points up the rope, see [P05](../P05-gravitation/))

#### Solution

a. E_k = ½·0.20·2.0² = 0.40 J.
b. ½mv² = mgh → h = v²/(2g) = 4.0/19.62 = 0.204 ≈ 0.20 m. Turning point: E = 0.40 J all in E_z; equilibrium: all in E_k; in between a mix ΣE = E_z + E_k = 0.40 J — constant without friction.
c. In the lowest point the tangential (speed-changing) component of gravity vanishes: F_res along the path is 0, so the speed is momentarily maximal and constant — locally the tangential acceleration is zero. (The centripetal acceleration v²/r points upward into the rope; that belongs to circular motion, P05.)

### phys-p04-q11 | points 5 | outcome o2 | difficulty hard

#### Question

A stair runner (75 kg) climbs three floors of 2.8 m each in 12 s. Her muscles convert chemical energy with an efficiency of 22%.

a. Compute her useful power during the climb.
b. Compute the chemical power her body draws.
c. The tour is 10 climbs. Estimate the food energy spent, in J and in kcal (1 kcal = 4.2 kJ).

#### Answer

a. P_nuttig ≈ 5.2·10² W; b. P_in ≈ 2.3·10³ W; c. per climb 2.8·10⁴ J ≈ 6.7 kcal; 10 climbs: E_ch ≈ 2.8·10⁵ J (281 kJ) ≈ 67 kcal

#### Solution

a. ΔE_z = m·g·Δh = 75·9.81·(3·2.8) = 6.2·10³ J; P_nuttig = 6.2·10³/12 = 5.2·10² W.
b. η = P_nuttig/P_in → P_in = 5.2·10²/0.22 = 2.3·10³ W (2.34·10³ W).
c. Per climb the chemical energy is E_ch = ΔE_z/η = 6.2·10³/0.22 = 2.8·10⁴ J = 2.81·10⁴/4.2·10³ = 6.7 kcal. The full tour: E_ch,tot = 10·2.81·10⁴ = 2.8·10⁵ J = 281 kJ ≈ 67 kcal — about one small chocolate bar; the body is wonderfully efficient at *not* slimming down.

### phys-p04-q12 | points 5 | outcome o2 | difficulty hard

#### Question

A supply package (m = 2.0 kg) drops 1.2·10² m from a drone. Air drag converts 70% of the available gravitational energy into heat before impact.

a. Set up the energy ledger for the fall and compute the impact speed.
b. Compute the heat produced.
c. Would a 4.0 kg package land faster under the same percentage rule? Explain with the formulas.

#### Answer

a. v = √(0.30·2gh) = 27 m/s; b. Q = 1.6·10³ J; c. yes in practice — heavier mass means the same drag force eats a smaller *fraction* of E_z

#### Solution

a. Energy ledger: E_z,0 = E_k,eind + Q with Q = 0.70·mgh → 0.30·mgh = ½mv² → v = √(0.30·2·9.81·120) = √706 = 27 m/s.
b. Q = 0.70·2.0·9.81·120 = 1.6·10³ J.
c. The formula says *no* (mass cancels, like in free fall) — but the physics of the 70% rule says yes: the drag force at a given speed is independent of m, while E_z grows with m, so for the heavier package friction removes a smaller *fraction*; its "Q-share" would be lower than 70% and it lands faster. A formula result is only as good as the assumptions inside it.
