# P8 — Matter, heat and gases: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions. Built from the CCVX physics syllabus of 15 August 2025.

## 1. The molecular model: phases and transitions (o1, o7)

- Matter is made of particles in motion. **Solid**: particles locked to fixed lattice spots, only vibrating — hence fixed shape and volume. **Liquid**: neighbours still touch but roll over each other — fixed volume, free shape. **Gas**: particles far apart, zooming freely — no fixed shape or volume.
- Temperature is the bookkeeper of that motion: the average kinetic energy of the particles grows linearly with the absolute temperature. The absolute zero (*absoluut nulpunt*, 0 K = −273.15 °C) is where thermal motion stops. Conversion: **T[K] = T[°C] + 273**.
- Transitions (*faseovergangen*): melting (*smelten*), solidifying (*stollen*), evaporating (*verdampen*) — at any temperature for liquids, since the fastest molecules escape (that is why puddles vanish below boiling point; the vapour pressure *dampdruk* is the partial pressure those escapees exert) — condensing (*condenseren*), and straight solid↔gas: subliming (*sublimeren*, drying frost in a freezing wind). Transitions absorb or release *latent* heat while the temperature stays constant.
- Attraction between molecules: from strong bonds in solids to the leftover Van der Waals force between neutral molecules — that weak handle is why real gases clog up slightly differently from ideal ones at high pressure or low temperature.

## 2. Heat transport (o2)

- Three mechanisms (*geleiding, stroming, straling*): conduction — particles pass the jiggle on (dominant in solids); convection — warm fluid moves itself (radiators, sea wind, blood); radiation — electromagnetic waves (the Sun through vacuum, a glowing stove).
- Heat current (*warmtestroom*) through a flat wall of area A and thickness d, with faces at ΔT apart:

  **P = λ·A·ΔT/d** (W), with λ the thermal conductivity of the material (BINAS thermal-conductivity table: e.g. brick ≈ 1.3, glass ≈ 0.80, polystyrene foam ≈ 0.030 W/(m·K)).

  The formula says it all for insulation (*energiebesparing door isolatie*): thicker wall → half the loss; better material (small λ) → small loss; bigger ΔT → bigger loss.
- In this formula P plays the same role as "heat per second": P = ΔQ/Δt.

## 3. Specific heat (o3)

- **Q = m·c·ΔT**: the heat needed to change the temperature of m kilograms by ΔT, with c the specific heat (*soortelijke warmte*) from BINAS (water 4.18·10³ J/(kg·K) — famously high; iron 0.46·10³).
- Mixing two bodies: the heat one loses, the other gains: ΣQ = 0 — a two-line balance that yields the final temperature.
- Heating power: P = ΔQ/Δt (e.g. a boiler or a human body at ≈ 100 W).
- Density as the link between m and V: ρ = m/V (assumed known).

## 4–5. Metals: density, specific heat and conduction (o4, o5)

- **Density and specific heat (o4).** When comparing equal *masses* of metals: heavier atoms (larger atomic mass) mean fewer atoms per kilogram. Each atom stores roughly the same thermal energy per kelvin, so a kilogram with fewer atoms stores fewer joules per kelvin: heavy metals (lead: ρ = 11.3·10³ kg/m³, c ≈ 0.13·10³ J/(kg·K)) have low specific heat; light metals (aluminium: ρ = 2.70·10³, c = 0.88·10³) have high specific heat. In the metals table ρ·c turns out strikingly constant.
- **Thermal and electrical conduction (o5).** In a metal, part of the electrons is free (*geleidingselektronen*): they carry *both* the electric current and the heat. So good electrical conductors (copper, silver, aluminium) are also good heat conductors — the same free electrons do both jobs. Insulators lack free electrons and are poor at both.

## 6. Stress, strain and the stress–strain diagram (o6)

- Stress (*spanning*, not voltage here!): **σ = F/A** (N/m² = Pa). Strain (*rek*): **ε = Δℓ/ℓ₀** (dimensionless, often in %).
- Elastic region: σ = E·ε → **E = σ/ε**, the elastic modulus (Young's modulus, BINAS: steel ≈ 2.0·10¹¹ Pa, aluminium ≈ 0.71·10¹¹ Pa): the *stiffness* of the material.
- Reading the (*σ,ε*) diagram: straight elastic start (proportional); plastic region where the deformation stays after unloading (the material yields); the top of the curve is the tensile strength (*treksterkte*), the maximum stress before necking and fracture.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 200" width="330" role="img" aria-label="Stress-strain diagram: elastic region, plastic region, tensile strength and fracture">
  <line x1="40" y1="165" x2="310" y2="165" stroke="#333" stroke-width="1"/>
  <line x1="40" y1="165" x2="40" y2="25" stroke="#333" stroke-width="1"/>
  <text x="26" y="31" font-size="12" font-family="sans-serif">σ</text>
  <text x="302" y="182" font-size="12" font-family="sans-serif">ε</text>
  <polyline points="40,165 100,80" fill="none" stroke="#1565c0" stroke-width="2.5"/>
  <path d="M100,80 C140,58 175,50 195,58 C215,66 225,84 235,96" fill="none" stroke="#1565c0" stroke-width="2.5"/>
  <line x1="235" y1="96" x2="249" y2="110" stroke="#c62828" stroke-width="2"/>
  <line x1="249" y1="96" x2="235" y2="110" stroke="#c62828" stroke-width="2"/>
  <text x="52" y="112" font-size="11" font-family="sans-serif" fill="#333">elastic</text>
  <text x="150" y="100" font-size="11" font-family="sans-serif" fill="#333">plastic</text>
  <text x="185" y="45" font-size="11" font-family="sans-serif" fill="#c62828">treksterkte</text>
  <text x="246" y="126" font-size="11" font-family="sans-serif" fill="#c62828">breuk</text>
</svg>

## 7–8. Pressure (o7, o8)

- **p = F/A** (Pa = N/m²). Gases: the rain of molecules on the walls supplies the force — the kinetic view of pressure. Faster molecules (higher T) or more hits per second (smaller V) → higher p.
- Normal air pressure p₀ ≈ 1.013·10⁵ Pa (1013 hPa, BINAS). Overpressure (*overdruk*) = p − p₀ above atmospheric; underpressure (*onderdruk*) = measured below it.
- Measuring: the barometer (mercury column balanced by p₀: h ≈ 0.76 m); the manometer for gas pressure; the blood-pressure meter (*bloeddrukmeter*) — an inflatable cuff that no longer lets blood pass at the systolic pressure.
- A pressure *difference* drives flow (*stroming*): air rushes into a vacuum bag, toothpaste leaves the tube from the squeezed side, wind from high to low outside.

## 9. The general gas law (o9)

- For n moles of an ideal gas: **pV/T = n·R**, R = 8.314 J/(mol·K), with T *always in kelvin*. For a fixed amount of gas this collapses into pV/T = constant, which contains the three sub-laws:
  - T constant (isothermal): p·V = constant — (p,V) hyperbola;
  - V constant (isochoric): p/T = constant — pressure rises linearly with T;
  - p constant (isobaric): V/T = constant — volume grows linearly with T.
- Strategy for two-state problems: p₁V₁/T₁ = p₂V₂/T₂ and drop what stays constant.

## 10. Thermal expansion (o10)

- Linear: **Δℓ/ℓ₀ = α·ΔT**, with α from BINAS (iron/steel 12·10⁻⁶ K⁻¹, aluminium 23·10⁻⁶ K⁻¹). Cubic (volume): **ΔV/V₀ = γ·ΔT** with γ ≈ 3α for solids (each of three directions expands by α).
- Applications: expansion joints in bridges and rails, bursting water pipes in frost (water expands when freezing — ice floats because its solid lattice is *looser* than the liquid).

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original. BINAS values used: c_water = 4.18·10³ J/(kg·K), c_iron = 0.46·10³ J/(kg·K), λ_brick = 1.3 W/(m·K), λ_polystyrene = 0.030 W/(m·K), α_steel = 12·10⁻⁶ K⁻¹, E_steel = 2.0·10¹¹ Pa, ρ_mercury = 13.6·10³ kg/m³, R = 8.314 J/(mol·K).

## Example 1 — boiler heat-up

A boiler heats 80 kg of water from 15 °C to 60 °C. Compute the heat required.

**Solution.** Q = m·c·ΔT = 80·4.18·10³·45 = 1.5·10⁷ J (≈ 4.2 kWh of heat — a full bath is a measurable line on the energy bill).

## Example 2 — insulated wall

A living-room wall (brick, λ = 1.3 W/(m·K), d = 0.30 m, A = 12 m²) separates 21 °C inside from 1.0 °C outside.

a. Compute the heat current through the wall.
b. Inside it gets 10 cm of polystyrene with λ = 0.030. Compute the new heat current (polystyrene layer alone; the syllabus says the air layers may be neglected and the brick's share is then small too).

**Solution.** a. P = λ·A·ΔT/d = 1.3·12·20/0.30 = 1.0·10³ W — a full electric heater leaking through one wall. b. P = 0.030·12·20/0.10 = 72 W. Insulation pays: the same comfort for one-fourteenth of the power.

## Example 3 — a hot iron block in water

An iron block (0.20 kg) at 2.0·10² °C is dropped into 0.50 kg of water at 20 °C. Compute the final temperature (no losses).

**Solution.** ΣQ = 0: m_i·c_i·(200 − T) = m_w·c_w·(T − 20) → 0.20·460·(200 − T) = 0.50·4180·(T − 20) → 92·(200 − T) = 2090·(T − 20) → 18400 + 41800 = 2182·T → T = 27.6 ≈ 28 °C. The water's heat capacity dominates — as always with water.

## Example 4 — tyre pressure on a hot day

A car tyre reads 2.0·10⁵ Pa (absolute, given) at 7.0 °C. After a long drive the tyre is 37 °C. Compute the pressure (volume practically constant).

**Solution.** Isochoric: p/T = constant → p₂ = p₁·T₂/T₁. Kelvin first: 280 K and 310 K (never °C!). p₂ = 2.0·10⁵·310/280 = 2.2·10⁵ Pa. Hot tyres run harder — and a severely under-inflated tyre heats *more* (flex work), which feeds the danger spiral.

## Example 5 — steel wire under load

A steel wire (ℓ = 2.0 m, A = 0.50 mm²) carries a 250 N load.

a. Compute stress, strain and elongation (steel E = 2.0·10¹¹ Pa).
b. Would the same wire in aluminium (E = 0.71·10¹¹ Pa) stretch more or less?

**Solution.** a. σ = F/A = 250/0.50·10⁻⁶ = 5.0·10⁸ Pa; ε = σ/E = 5.0·10⁸/2.0·10¹¹ = 2.5·10⁻³; Δℓ = ε·ℓ₀ = 2.5·10⁻³·2.0 = 5.0 mm. b. ε = σ/E: E_alu ≈ 0.71·10¹¹ Pa, factor 2.0/0.71 = 2.8 less stiff → the aluminium wire stretches 2.8 times further (≈ 1.4 cm): stiffness is material, not thickness.

## Example 6 — Torricelli's mercury barometer

Compute the height of the mercury column that 1.013·10⁵ Pa supports, and the water column for comparison.

**Solution.** The column's weight per area equals the pressure: p = ρ·g·h → h = p/(ρ·g). Mercury: h = 1.013·10⁵/(13.6·10³·9.81) = 0.760 m. Water: h = 1.013·10⁵/(1.00·10³·9.81) = 10.3 m — that is why barometers use mercury, and why suction pumps can never lift water higher than 10.3 m however strong they are built.
