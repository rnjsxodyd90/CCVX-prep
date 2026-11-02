# P4 — Energy and interaction: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions (g = 9.81 m/s²). Built from the CCVX physics syllabus of 15 August 2025.

## 1. Work

- A force does work (*arbeid*) when its point of application moves: **W = F·s·cos α** (α the angle between force and displacement). Work is a scalar, in joules.
- Sign: force with the motion → positive work (adds energy); against the motion → negative work (removes energy, e.g. friction work *wrijvingsarbeid* with α = 180°: W = −F_w·s); perpendicular → zero work.
- From a force–displacement diagram ((*F,x*)-diagram): **W = area** under the graph — for changing forces such as a spring (where this area gives E_veer).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200" width="350" role="img" aria-label="F,x-diagram: work equals the shaded area">
  <line x1="40" y1="160" x2="330" y2="160" stroke="#333" stroke-width="1"/>
  <line x1="40" y1="160" x2="40" y2="20" stroke="#333" stroke-width="1"/>
  <text x="24" y="26" font-size="12" font-family="sans-serif">F (N)</text>
  <text x="318" y="178" font-size="12" font-family="sans-serif">x (m)</text>
  <polygon points="40,160 165,50 290,50 290,160" fill="#c8e6c9" opacity="0.6"/>
  <polyline points="40,160 165,50 290,50" fill="none" stroke="#2e7d32" stroke-width="2.5"/>
  <line x1="165" y1="50" x2="165" y2="160" stroke="#999" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="73" y="140" font-size="11" font-family="sans-serif" fill="#333">triangle</text>
  <text x="200" y="110" font-size="11" font-family="sans-serif" fill="#333">rectangle</text>
  <text x="157" y="178" font-size="11" font-family="sans-serif" fill="#333">0.50</text>
  <text x="282" y="178" font-size="11" font-family="sans-serif" fill="#333">1.00</text>
  <text x="30" y="53" font-size="11" font-family="sans-serif" fill="#333">200</text>
</svg>

- Work–energy theorem: **ΣW = ΔE_k** — the *total* work of all forces changes the kinetic energy. This is often the fastest route when forces are complicated but the total work is known.

## 2. Power

- **P = ΔE/t**: energy converted per second (watt = J/s).
- With constant force and motion: **P = W/t = F·v**. At constant engine power, a larger v means a smaller force — why pulling away needs a low gear.
- Human numbers for orientation: resting metabolism ≈ 100 W; sustainable cycling output ≈ 75–150 W; short stair sprint ≈ 5·10² W useful.

## 3. The stock of energies

- Kinetic: **E_k = ½mv²**. Quadratic in v: double speed, four times the energy — and four times the braking distance at equal braking force (from ΣW = ΔE_k with W = −F·s).
- Gravitational potential: **E_z = mgh**, h the height above a chosen zero level (*potentiële energie* = energy of position; E_veer is also potential).
- Spring: **E_veer = ½Cu²**, u the extension/compression. Note: this is the area ½·(C·u)·u under the (F,u) line.
- Chemical: **E_ch = r_v·V** (fuels sold per volume, e.g. natural gas with r_v ≈ 32 MJ/m³) and **E_ch = r_m·m** (fuels per mass, e.g. petrol r_m ≈ 44·10⁶ J/kg); calorific values (*stookwaarden*) from BINAS tables. Food energy content works the same way (the moving human: a "kcal" of food = 4.2 kJ).
- Electric energy (see [P06](../P06-electric-circuits/)), radiation energy, and heat (*warmte*): the final resting place of "lost" energy.
- **Law of conservation of energy: ΣE_in = ΣE_uit** — energy is never created or destroyed, only converted. Friction does not destroy energy; it converts mechanical energy into heat. In exam solutions, write a small energy ledger: what was there before, what is there after, and where did the difference go?

## 4. Standard motion analyses

- **Free fall / vertical throw** (*verticale worp*): E_z ↔ E_k: mgh = ½mv² → v = √(2gh) for a drop from rest; for a throw upward from height h₀ the mass cancels everywhere: maximum added height Δh = v₀²/(2g).
- **Fall with friction**: mgh = ½mv² + Q — part of E_z becomes heat Q in the air; terminal velocity means all further E_z becomes Q (see [P03](../P03-force-and-motion/)).
- **Oscillation**: E_z or E_veer ↔ E_k periodically; turning points: all potential; equilibrium: all kinetic. Total is constant as long as friction is negligible.
- **Bouncing** (*stuiterbeweging*): at each bounce a fixed *fraction* of the mechanical energy is lost to heat and deformation → the rebound height per bounce is a constant fraction of the previous one (a geometric sequence!).

## 5. Efficiency

- **η = E_nuttig/E_in = P_nuttig/P_in** (η in % or as a fraction). "Nuttig" = the energy in the form you actually want (motion, light, heat in the right place).
- Typical numbers for orientation: incandescent lamp ~5%, LED ~40–50%, car engine ~25–35%, human muscle ~20–25%, power plant ~40%. The rest is heat.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — braking distance from the work–energy theorem

A car of 1.1·10³ kg drives 100 km/h (27.8 m/s). The maximum braking force (tyres + road) is 8.0·10³ N. Compute the minimum braking distance.

**Solution.** ΣW = ΔE_k: −F·s = 0 − ½mv² → s = ½·1.1·10³·27.8²/8.0·10³ = ½·1.1·10³·772/8.0·10³ = 4.24·10⁵/8.0·10³ = 53 m. Double the speed (200 km/h) → four times as far: 2.1·10² m. This is why speed kills: E_k grows with v².

## Example 2 — vertical throw (energy route)

A ball thrown straight up from the ground at 14 m/s.

a. Maximum height? b. Speed at 5.0 m height?

**Solution.** a. ½mv₀² = mgh_max → h_max = v₀²/(2g) = 196/19.62 = 10 m. b. ½v₀² = ½v² + gh → v² = v₀² − 2gh = 196 − 98 = 98 → v = 9.9 m/s (same going up and coming down — energy does not know direction, velocity does).

## Example 3 — energy flow in a petrol car on the motorway

A car consumes 6.0 dm³ petrol per 100 km at 120 km/h. Petrol has r_m = 44·10⁶ J/kg and density 0.72 kg/dm³ (given); the engine's efficiency is 32%.

a. Compute the useful (mechanical) work delivered per 100 km.
b. Compute the average total resistance force during these 100 km.
c. Compute the engine's useful power at this speed.

**Solution.** a. Fuel mass 6.0·0.72 = 4.32 kg → E_ch = 4.32·44·10⁶ = 1.90·10⁸ J. Useful: E_nuttig = 0.32·1.90·10⁸ = 6.1·10⁷ J. b. At constant speed the useful work exactly balances friction work: F·s = 6.1·10⁷ → F = 6.1·10⁷/1.00·10⁵ = 6.1·10² N. c. 100 km takes 3000 s at 120 km/h: P = 6.1·10⁷/3000 = 2.0·10⁴ W = 20 kW (check with P = F·v = 610·33.3 = 2.0·10⁴ ✓).

## Example 4 — bouncing ball and the geometric sequence

A superball dropped from 1.60 m rebounds to 1.25 m; the same fraction rebounds each time.

a. After how many bounces is the top below 0.10 m?
b. Where did the "lost" energy go?

**Solution.** a. Rebound fraction 1.25/1.60 = 0.78 per bounce (heights: E_z ∝ h). h_n = 1.60·0.78ⁿ < 0.10 → 0.78ⁿ < 0.0625 → n > log(0.0625)/log(0.78) = (−1.204)/(−0.1079) = 11.2 → after the 12th bounce. b. Each impact converts part of E_k into heat (deformation) and sound: ΣE stays constant, but the mechanical share decays geometrically.

## Example 5 — spring launcher

A toy catapult compresses a spring (C = 4.0·10² N/m) by 9.0 cm and fires a 45 g ball straight up. Compute the launch speed and the maximum height (no friction).

**Solution.** E_veer = ½·C·u² = ½·4.0·10²·(0.090)² = 1.62 J. Launch: ½mv² = 1.62 → v = √(2·1.62/0.045) = √72 = 8.5 m/s. Height: mgh = 1.62 → h = 1.62/(0.045·9.81) = 3.7 m (measured from the launch position).

## Example 6 — humanity's favourite machine: the cyclist

A cyclist delivers 1.5·10⁵ J of muscle work in 10 min; his muscles work at an efficiency of 24%.

a. Compute the useful power and the chemical power.
b. How much food energy did this ride cost?
c. One "kcal" of food equals 4.2 kJ. How many kcal?

**Solution.** a. P_nuttig = 1.5·10⁵/600 = 2.5·10² W. P_in = 2.5·10²/0.24 = 1.0·10³ W. b. E_ch = 1.5·10⁵/0.24 = 6.3·10⁵ J = 0.63 MJ. c. 6.3·10⁵/4.2·10³ = 1.5·10² kcal — about one slice of bread; the body spends much more than the wheels receive.
