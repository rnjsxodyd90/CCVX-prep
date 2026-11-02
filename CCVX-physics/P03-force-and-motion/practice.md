# P3 — Force and motion: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o6 match the numbered learning outcomes in [README.md](README.md). Use g = 9.81 m/s².

### phys-p03-q01 | points 3 | outcome o1 | difficulty easy

#### Question

A cyclist rides at constant velocity and covers 2.4 km in 8.0 min.

a. Compute her velocity in m/s.
b. How long does she need for another 10 km at the same velocity?

#### Answer

a. v = 5.0 m/s; b. t = 2.0·10³ s (33 min)

#### Solution

a. v = x/t = 2400 m/(8.0·60 s) = 2400/480 = 5.0 m/s.
b. t = x/v = 10 000/5.0 = 2.0·10³ s ≈ 33 min.

### phys-p03-q02 | points 4 | outcome o2 | difficulty easy

#### Question

A car's (v,t) record shows three phases: uniform acceleration from 0 to 20 m/s in 8.0 s, then 12 s at 20 m/s, then braking uniformly to rest in 4.0 s.

a. Compute the distance covered in each phase.
b. Compute the average velocity over the whole ride.

#### Answer

a. 80 m + 240 m + 40 m; b. v_gem = 15 m/s

#### Solution

a. Areas under the (v,t) graph: ½·8.0·20 = 80 m; 12·20 = 240 m; ½·4.0·20 = 40 m.
b. Total 360 m in 24 s → v_gem = 360/24 = 15 m/s.

### phys-p03-q03 | points 3 | outcome o3 | difficulty easy

#### Question

A crate of 25 kg slides over a floor with friction coefficient f = 0.30. What horizontal force is needed to keep it moving at constant velocity?

#### Answer

F ≈ 74 N

#### Solution

Constant velocity → F_res = 0 (Newton 1), so the push equals the sliding friction: F = F_w,s = f·F_N = f·m·g = 0.30·25·9.81 = 73.6 ≈ 74 N.

### phys-p03-q04 | points 4 | outcome o5 | difficulty medium

#### Question

A car of 1.2·10³ kg accelerates uniformly from rest to 25 m/s in 6.0 s.

a. Compute the resultant force on the car.
b. During this acceleration the total friction force is 8.0·10² N. Compute the driving force the engine must deliver.

#### Answer

a. F_res = 5.0·10³ N; b. F_engine = 5.8·10³ N

#### Solution

a. a = Δv/Δt = 25/6.0 = 4.17 m/s²; F_res = m·a = 1.2·10³·4.17 = 5.0·10³ N.
b. F_engine − F_friction = F_res → F_engine = 5.0·10³ + 8.0·10² = 5.8·10³ N.

### phys-p03-q05 | points 4 | outcome o3 | difficulty medium

#### Question

A block of 2.0 kg lies on a slope of 30°.

a. Compute the component of the gravity force along the slope.
b. Compute the normal force of the slope on the block.
c. The maximum static friction has f = 0.40. Does the block start to slide? Justify with a computation.

#### Answer

a. 9.8 N along the slope; b. F_N = 17 N; c. yes, it slides: the driving component 9.8 N exceeds F_w,s,max = 6.8 N

#### Solution

a. Component along the slope: F_z·sin 30° = 2.0·9.81·0.500 = 9.8 N.
b. F_N = F_z·cos 30° = 19.62·0.866 = 17 N.
c. F_w,s,max = f·F_N = 0.40·17 = 6.8 N. The driving component 9.8 N exceeds the maximum friction 6.8 N → the block starts to slide (and then F_res = 9.8 − 6.8 = 3.0 N accelerates it).

### phys-p03-q06 | points 4 | outcome o2 | difficulty medium

#### Question

A ball is dropped from a bridge 45 m above the water.

a. Compute the fall time and the impact speed, treating the fall as free.
b. On a second try a light plastic ball of the same size is dropped. Sketch-wise describe (no computation) how its (v,t) diagram differs.

#### Answer

a. t = 3.0 s, v = 30 m/s; b. the (v,t) curve bends off and ends at a lower terminal velocity

#### Solution

a. x = ½gt² → t = √(2h/g) = √(2·45/9.81) = √9.17 = 3.03 ≈ 3.0 s; v = g·t = 9.81·3.03 = 29.7 ≈ 30 m/s.
b. Air resistance grows with v², so for the light ball it becomes comparable to F_z much earlier: the acceleration keeps decreasing, the (v,t) graph curves over and approaches a horizontal asymptote (terminal velocity) well below 30 m/s.

### phys-p03-q07 | points 4 | outcome o6 | difficulty medium

#### Question

A book rests on a table. Name the two Newton-3 action–reaction pairs that involve the book, state on which body each force acts, and explain why F_z (on the book) and F_N (on the book) are *not* such a pair.

#### Answer

Pairs: (Earth pulls book ↔ book pulls Earth), (book presses table ↔ table presses book); F_z and F_N act on the same body (the book), so they cannot be an action–reaction pair

#### Solution

Pair 1 (gravity): the Earth exerts F_z on the book (actie); the book exerts the opposite gravitational force on the Earth (reactie) — the book literally pulls the Earth up. Pair 2 (contact): the book presses down on the table; the table presses up on the book with F_N. Action and reaction always act on *different* bodies. F_z and F_N both act on the book, they are of different kinds (gravity vs. contact) and are equal only *because* the book is in equilibrium (F_res = 0); in an accelerating lift they differ while the N3 pairs remain exact opposites.

### phys-p03-q08 | points 3 | outcome o4 | difficulty medium

#### Question

A standing bus passenger lurches forward when the bus brakes hard. Explain this with Newton's first law, and use the term *traagheid* (inertia).

#### Answer

The passenger's body keeps its velocity because until he grabs something, almost no resultant force acts on it — inertia

#### Solution

During braking a large resultant force (brakes, road friction) decelerates the *bus*. The passenger is connected to the bus only weakly: without holding a rail, the resultant force on *him* is nearly zero, so by Newton's first law his velocity stays the same. Relative to the slowing bus he moves forward. His mass resists the change of motion: inertia (*traagheid*). The fix: exert a force on the body (rail, seatbelt) so that it decelerates together with the vehicle.

### phys-p03-q09 | points 5 | outcome o5 | difficulty medium

#### Question

A person of 70 kg stands on a scale inside a lift.

a. The lift accelerates upward at 2.0 m/s². What does the scale (which measures the normal force) read, and what is the person's weight?
b. The lift descends, decelerating at 2.0 m/s² (moving down, slowing). What does the scale read?
c. The lift cable snaps and the lift falls freely. What is the person's weight now? Comment.

#### Answer

a. N = 8.3·10² N, weight = 8.3·10² N; b. 8.3·10² N; c. 0 N — weightless, although F_z = 6.9·10² N still acts

#### Solution

a. Upward positive: N − m·g = m·a → N = m(g + a) = 70·(9.81 + 2.0) = 8.27·10² ≈ 8.3·10² N. The person's weight (force on the support, Newton 3) equals this 8.3·10² N — heavier than m·g (6.87·10² N).
b. Moving down and slowing means the acceleration is also upward (+2.0 m/s²): exactly the same balance → 8.3·10² N.
c. Free fall: a = −g → N = m(g − g) = 0. Both fall with g, the floor no longer pushes: the weight is zero — the person floats in the lift. Gravity still exerts F_z = 70·9.81 = 6.9·10² N (that is what keeps the fall going).

### phys-p03-q10 | points 5 | outcome o5 | difficulty hard

#### Question

A car of 1.0·10³ kg tows a caravan of 8.0·10² kg. The friction on the car is 6.0·10² N and on the caravan 4.0·10² N. The combination accelerates at 1.5 m/s².

a. Compute the tension force in the tow bar.
b. Compute the driving force of the engine.
c. At the same engine force, what is the acceleration of the car alone (without caravan)?

#### Answer

a. F_span = 1.6·10³ N; b. F_engine = 3.7·10³ N; c. a = 3.1 m/s²

#### Solution

a. For the caravan: F_span − F_w,caravan = m_c·a → F_span = 8.0·10²·1.5 + 4.0·10² = 1.2·10³ + 4.0·10² = 1.6·10³ N.
b. For the whole: F_engine − (6.0·10² + 4.0·10²) = (m_car + m_c)·a = 1.8·10³·1.5 = 2.7·10³ N → F_engine = 2.7·10³ + 1.0·10³ = 3.7·10³ N. (Check on the car alone: 3.7·10³ − 6.0·10² − 1.6·10³ = 1.5·10³ N = 1.0·10³·1.5 ✓)
c. Without caravan: F_res = 3.7·10³ − 6.0·10² = 3.1·10³ N → a = 3.1·10³/1.0·10³ = 3.1 m/s².

### phys-p03-q11 | points 5 | outcome o3 | difficulty hard

#### Question

A skydiver of 75 kg jumps. Air density is 1.29 kg/m³.

a. Compute the terminal velocity in the free position (c_w·A = 0.70 m², given).
b. Compute the terminal velocity with the parachute open (c_w·A = 12 m², given).
c. Explain, with the formula and the (v,t) curve, why the velocity stops growing before the parachute opens.

#### Answer

a. v ≈ 4.0·10¹ m/s (40 m/s); b. v ≈ 9.8 m/s; c. F_w,l grows with v² until it equals m·g; then F_res = 0 and v is constant

#### Solution

a. Terminal: F_w,l = F_z → ½·ρ·c_w·A·v² = m·g → v = √(2m·g/(ρ·c_w·A)) = √(2·75·9.81/(1.29·0.70)) = √(1.472·10³/0.903) = √1.630·10³ = 40 m/s = 4.0·10¹ m/s.
b. v = √(2·75·9.81/(1.29·12)) = √(1.472·10³/15.48) = √95.1 = 9.8 m/s.
c. The (v,t) starts with slope g (nearly free fall), but F_w,l = ½ρc_wAv² grows quadratically. The resultant m·g − F_w,l, and thereby the slope, shrinks steadily; the curve flattens towards the asymptote where F_w,l = m·g: terminal velocity — Newton's first law takes over.

### phys-p03-q12 | points 5 | outcome o2 | difficulty hard

#### Question

The height of a stone thrown straight up follows x(t) = 30.0t − 4.905t² (x in m, t in s).

a. Give the velocity function v(t) by differentiating, and the acceleration a(t).
b. Compute the time at which the stone reaches its highest point and that height.
c. At what time does the stone return to x = 0, and with what velocity?

#### Answer

a. v(t) = 30.0 − 9.81t, a(t) = −9.81 m/s²; b. t = 3.06 s, x = 46 m; c. t = 6.1 s, v = −30 m/s (downward)

#### Solution

a. v = dx/dt: the derivative of 30.0t is 30.0 and of −4.905t² is −2·4.905t → v(t) = 30.0 − 9.81t. a = dv/dt = −9.81 m/s² = −g ✓ (free throw).
b. At the top v = 0: t = 30.0/9.81 = 3.06 s. Height: x(3.06) = 30.0·3.06 − 4.905·3.06² = 91.7 − 45.9 = 45.9 ≈ 46 m.
c. x = 0: 30.0t = 4.905t² → t = 30.0/4.905 = 6.1 s (besides t = 0). v(6.1) = 30.0 − 9.81·6.1 = −29.9 ≈ −30 m/s: it lands with the starting speed, downward — the symmetry of free fall.
