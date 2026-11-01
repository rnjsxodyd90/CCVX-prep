# P3 — Force and motion: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions (g = 9.81 m/s²). Built from the CCVX physics syllabus of 15 August 2025.

## 1. Quantities of motion

- Position x (m), displacement Δx, time interval Δt (s), velocity v (m/s), acceleration a (m/s²).
- Average velocity: **v_gem = Δx/Δt** — the slope of the chord in an (x,t) diagram.
- Instantaneous velocity: **v = dx/dt** — the slope of the *tangent line* in an (x,t) diagram. Instantaneous acceleration: **a = dv/dt** — tangent slope in a (v,t) diagram. The syllabus expects you to differentiate linear and quadratic functions (x(t) = 3t² − 2t → v(t) = 6t − 2) and to draw/read tangent lines on graphs.
- Displacement from a (v,t) diagram: **the area** between the curve and the t-axis (count or decompose into shapes); areas below the axis count negative. Then v_gem = displacement/time.
- Recognising the four standard motions:
  - uniform (constant v): (x,t) is a straight sloping line, (v,t) is horizontal;
  - uniformly accelerated from rest: (x,t) a parabola, (v,t) a straight line through the origin, a constant;
  - free fall (*vrije val*): the case a = g = 9.81 m/s² (only gravity);
  - fall with friction (*valbeweging met wrijving*): (v,t) curves to a horizontal asymptote — the terminal velocity. There the air resistance has grown to equal F_z, so F_res = 0.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 205" width="350" role="img" aria-label="v,t-diagram of a car: acceleration, constant speed, braking; distance from the area">
  <line x1="40" y1="170" x2="330" y2="170" stroke="#333" stroke-width="1"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#333" stroke-width="1"/>
  <text x="24" y="26" font-size="12" font-family="sans-serif">v (m/s)</text>
  <text x="318" y="188" font-size="12" font-family="sans-serif">t (s)</text>
  <polygon points="40,170 133,50 273,50 320,170" fill="#bbdefb" stroke="none" opacity="0.55"/>
  <polyline points="40,170 133,50 273,50 320,170" fill="none" stroke="#1565c0" stroke-width="2.5"/>
  <line x1="133" y1="50" x2="133" y2="170" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="273" y1="50" x2="273" y2="170" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="70" y="140" font-size="11" font-family="sans-serif" fill="#333">A₁ = ½·8·20</text>
  <text x="150" y="120" font-size="11" font-family="sans-serif" fill="#333">A₂ = 12·20</text>
  <text x="280" y="140" font-size="11" font-family="sans-serif" fill="#333">A₃</text>
  <text x="125" y="188" font-size="11" font-family="sans-serif" fill="#333">8.0</text>
  <text x="262" y="188" font-size="11" font-family="sans-serif" fill="#333">20</text>
  <text x="30" y="53" font-size="11" font-family="sans-serif" fill="#333">20</text>
</svg>

  In this example s = A₁ + A₂ + A₃ = 80 + 240 + 40 = 3.6·10² m.

## 2. The two simple motions

- Uniform motion: **x(t) = v·t** (starting at x = 0; otherwise x₀ + vt).
- Uniformly accelerated from rest: **v(t) = a·t** and **x(t) = ½·a·t²**. With an initial velocity these generalise (x = v₀t + ½at²), but the syllabus lists the from-rest forms; combined with (v,t) areas they cover the exam needs.
- Free fall uses these with a = g. Free fall *time* from height h: t = √(2h/g).

## 3. Forces and vectors

- Forces are vectors: magnitude, direction, point of application. Compose them with the parallelogram rule (head-to-tail); resolve a force into components along chosen axes with sine and cosine (angle with the axis: F_x = F·cos α, F_y = F·sin α).
- The forces of the syllabus:

  | force | formula | direction |
  |---|---|---|
  | gravity (*zwaartekracht*) | F_z = m·g | towards the centre of the Earth |
  | spring force (*veerkracht*) | F_v = C·u | back to the equilibrium length |
  | (max) sliding friction (*schuifwrijvingskracht*) | F_w,s,max = f·F_N | opposite the sliding |
  | air resistance (*luchtweerstandskracht*) | F_w,l = ½ρc_wAv² | opposite the velocity |
  | normal force (*normaalkracht*) | from the force balance | perpendicular to the surface |
  | tension (*spankracht*), muscle force (*spierkracht*), rolling resistance (*rolweerstandskracht*) | from the situation | along the rope / by the body |

- F_N equals m·g without vertical accelerations on a horizontal surface; on a slope F_N = m·g·cos α. The friction coefficient f is dimensionless. For air resistance: ρ is the *air* density (1.29 kg/m³ at 0 °C, BINAS), c_w the drag coefficient, A the frontal area.
- Assumed knowledge: density **ρ = m/V** (kg/m³, BINAS table for materials).

## 4. Newton's laws

1. **First law (inertia, *traagheid*).** If the resultant force on a body is zero, its velocity is constant in magnitude and direction — rest stays rest, straight-line motion keeps its speed. A passenger feels "thrown forward" in a braking car because his body simply keeps its velocity while the car slows beneath him.
2. **Second law.** **F⃗_res = ΣF⃗_i = m·a⃗**: the acceleration is along the resultant force, a = F_res/m. Solving routine: draw all forces (free-body), choose axes (clever: along the motion), compute components, set ΣF = m·a.
3. **Third law.** If A exerts a force on B, B exerts the opposite force on A: **F⃗_AB = −F⃗_BA**. The two forces act on *different* bodies and never cancel each other. That is why the pair "F_z of the Earth on the book" and "F_N of the table on the book" is NOT an action–reaction pair — both act on the book (they cancel only because the book is in equilibrium; they even change independently in an accelerating lift).
   - **Weight (*gewicht*)** is defined in Dutch physics as the force a body exerts on its support or suspension. In a lift accelerating upward at a, the floor carries m(g + a): the weight exceeds m·g; in free fall the support force — the weight — is zero: the body is *weightless* (F_z still pulls, though!).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — motion of a commuter train (diagram reading)

A train departs, accelerating uniformly to 30 m/s in 60 s, keeps that speed for 4.0 min, then brakes uniformly to rest in 30 s. Compute the total distance and the average velocity over the whole trip.

**Solution.** Areas in the (v,t) diagram: acceleration triangle ½·60·30 = 900 m; constant part 240·30 = 7200 m; braking triangle ½·30·30 = 450 m. Total s = 8550 ≈ 8.6·10³ m. Total time 330 s → v_gem = 8550/330 = 26 m/s.

## Example 2 — free fall with sound return (link to P1)

A stone falls from a cliff; the splash is heard 4.0 s after release (speed of sound 343 m/s). Estimate the cliff height.

**Solution.** Let the fall take t₁ s; the sound then needs t₂ = 4.0 − t₁ s. The height satisfies h = ½g·t₁² = 4.905·t₁² (fall) and h = v_sound·t₂ = 343·(4.0 − t₁) (sound). Equate: 4.905·t₁² = 1372 − 343·t₁ → 4.905·t₁² + 343·t₁ − 1372 = 0. With the quadratic formula (an A12 skill): D = 343² + 4·4.905·1372 = 1.4458·10⁵, √D = 3.802·10², so t₁ = (−343 + 380.2)/(2·4.905) = 3.80 s (the negative root is unphysical). Fall time 3.80 s, sound time 0.20 s. Then h = 4.905·(3.80)² = 71 m. Check with the sound: 343·0.20 = 69 m — equal within the rounding of the data ✓. So the cliff is about 7.1·10¹ m high.

## Example 3 — resolving a force: hanging lamp

A lamp of 4.0 kg hangs from a ceiling on two identical cables, each at 50° to the horizontal ceiling. Compute the tension in each cable.

**Solution.** By symmetry each cable carries the same tension T. Vertical balance: 2·T·sin 50° = F_z = 4.0·9.81 = 39.24 N → T = 39.24/(2·0.766) = 26 N. Note: T < F_z is impossible with both cables pulling partly sideways; a flatter angle (nearly horizontal cables) makes T grow without limit — hence sagging ropes are tensioned hard.

## Example 4 — Newton 2 in a lift

A person of 70 kg stands on the floor of a lift accelerating upward at 1.5 m/s², then decelerating at 1.5 m/s² while still moving up. Compute the floor's normal force on the person in both phases and the person's weight in each phase.

**Solution.** Take upward positive. N − F_z = m·a.
- Accelerating up: N = m(g + a) = 70·(9.81 + 1.5) = 792 N. The person pushes the floor down with 792 N (Newton 3): that *is* his weight now — heavier than m·g.
- Decelerating (moving up, slowing): a = −1.5 m/s²: N = 70·(9.81 − 1.5) = 582 N: the weight drops below m·g. (In a freely falling lift N = 0: weightlessness.)

## Example 5 — friction and the constant-velocity condition

A delivery robot of 60 kg must slide crates over a concrete floor with friction coefficient f = 0.28.

a. What horizontal force keeps a crate moving at constant velocity?
b. The robot accelerates a crate from rest to 2.0 m/s in 3.0 s; what push force is needed?

**Solution.** a. Constant v → F_res = 0 (Newton 1): F_push = F_w,s = f·F_N = f·m·g = 0.28·60·9.81 = 1.65·10² N ≈ 1.6·10² N. b. Additionally accelerate: a = 2.0/3.0 = 0.667 m/s² → F_push = F_w,s + m·a = 164.8 + 40 = 2.0·10² N.

## Example 6 — why a skydiver stops speeding up

An 80 kg skydiver (c_w·A = 0.80 m² given, air density 1.29 kg/m³) jumps from a plane.

a. Just after leaving the plane (v small), what is his acceleration?
b. Compute his terminal velocity and explain why the (v,t) curve flattens.

**Solution.** a. At small v the air resistance ½ρc_wAv² ≈ 0, so only F_z remains: a ≈ g = 9.81 m/s² — nearly free fall. b. F_w,l grows with v² until ½ρc_wAv² = m·g: v = √(2m·g/(ρc_wA)) = √(2·80·9.81/(1.29·0.80)) = √(1570/1.032) = √1521 = 39 m/s. As F_w,l approaches m·g the resultant force (and so a) shrinks to zero: the graph approaches v = 39 m/s asymptotically — terminal velocity, Newton's first law.
