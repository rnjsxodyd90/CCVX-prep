# C5 — Chemical Equilibrium: notes

These are English explanations of every learning outcome in [README.md](README.md), and every topic is *drafted*: written from the CCVX and CvTE syllabi and standard VWO chemistry, not yet checked against an open source text or exam question (see [PLAN.md](../../PLAN.md) for the statuses).

Dutch terms are in brackets. A code such as *(CvTE M1.4)* points to the matching specification in the [CvTE 2027 syllabus](../../syllabus/cvte-syllabus-scheikunde-vwo-2027.pdf); Binas tables are named by subject, because their numbers differ between editions.

## C5.1 Irreversible and reversible reactions, equilibrium

- An irreversible reaction (*aflopende reactie*) goes in one direction until at least one reactant has run out, and is written with a single arrow. Example: the combustion of methane, CH₄ + 2 O₂ → CO₂ + 2 H₂O. *(CvTE R4.1)*
- A reversible reaction (*omkeerbare reactie*) can go both ways: the products can react back to the reactants. Example: blue copper sulfate pentahydrate turns white when heated, CuSO₄·5H₂O(s) → CuSO₄(s) + 5 H₂O(g), and blue again when water is added. *(CvTE R4.1)*
- Equilibrium (*evenwicht*): in a closed system a reversible reaction ends up with the forward and the reverse reaction going at the same rate. From then on the concentrations stay constant, although both reactions carry on at particle level: a dynamic equilibrium (*dynamisch evenwicht*). Equilibria are written with a double half-arrow, as in H₂(g) + I₂(g) ⇌ 2 HI(g) and N₂O₄(g) ⇌ 2 NO₂(g) (colourless and brown). *(CvTE R4.1)*
- When the reactants are mixed, the forward rate is high and the reverse rate is 0. As the reactants are used up the forward rate falls, and as the products form the reverse rate rises, until the two are equal. The time this takes is the time needed to reach equilibrium (*insteltijd*).
- The same equilibrium can be reached from both sides: at the same temperature and volume, 2.0 mol HI gives the same equilibrium mixture as 1.0 mol H₂ plus 1.0 mol I₂.
- The position of the equilibrium (*ligging van het evenwicht*) tells you whether the equilibrium mixture holds mainly products ("to the right") or mainly reactants ("to the left").
- **Trap:** at equilibrium the concentrations are constant, not equal, and the reaction hasn't stopped.
- **Trap:** equilibrium needs a closed system. If a product escapes, for example CO₂ when CaCO₃(s) ⇌ CaO(s) + CO₂(g) is heated in an open tube, the reaction runs to completion.

## C5.2 The equilibrium condition and equilibrium calculations

### Equilibrium constant and reaction quotient

- The condition of equilibrium (*evenwichtsvoorwaarde*) is the expression for the equilibrium constant K (*evenwichtsconstante*): the concentrations of the products over those of the reactants, each raised to the power of its coefficient. For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g): K = [NH₃]² / ([N₂]·[H₂]³). "Give the condition of equilibrium" means: write down this expression. *(CvTE R&A1.6)*
- Solids, pure liquids and water as the solvent are left out, because their "concentration" doesn't change. For CaCO₃(s) ⇌ CaO(s) + CO₂(g): K = [CO₂]. For CH₃COOH(aq) + H₂O(l) ⇌ CH₃COO⁻(aq) + H₃O⁺(aq): K = [CH₃COO⁻]·[H₃O⁺] / [CH₃COOH].
- The reaction quotient Q (*concentratiebreuk*) is the same expression filled in with the concentrations at any moment. At equilibrium K = Q. If Q < K, the reaction goes to the right until Q = K; if Q > K, it goes to the left. *(CvTE R&A1.6)*
- K depends only on the temperature (for a given equation), not on the concentrations, the pressure or a catalyst. *(CvTE R4.2)*
- K belongs to the equation as written. Written the other way round, the constant becomes 1/K; with all coefficients doubled, it becomes K².
- **Trap:** water is only left out when it is the solvent. In a gas reaction such as CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g), [H₂O] is part of the expression: K = [CO₂]·[H₂] / ([CO]·[H₂O]).
- **Trap:** fill in concentrations in mol L⁻¹, not chemical quantities in mol. Chemical quantities only give the same answer when the volume cancels, which happens when the powers in the numerator add up to the same number as those in the denominator, as for H₂ + I₂ ⇌ 2 HI (2 against 1 + 1).

### Stoichiometric ratio

- The changes in chemical quantity (*chemische hoeveelheid*), or in concentration at a fixed volume, are in the ratio of the coefficients, the same mole ratio as in [C02](../C02-chemical-calculations/notes.md). That gives the "change" row of an equilibrium table, and the coefficients are also the powers in K. *(CvTE R&A1.1, R&A1.6)*

### Worked example: calculating K

- Suppose 0.400 mol N₂O₄ is put into an empty 2.00 L flask and kept at a fixed temperature. At equilibrium 0.160 mol NO₂ is present. Calculate K for N₂O₄(g) ⇌ 2 NO₂(g).
- Make a table with begin, change and equilibrium rows. NO₂ goes from 0 to 0.160 mol, so by the coefficients 0.160 / 2 = 0.0800 mol N₂O₄ has reacted:

| | N₂O₄ | NO₂ |
|---|---|---|
| begin (mol) | 0.400 | 0 |
| change (mol) | −0.0800 | +0.160 |
| equilibrium (mol) | 0.320 | 0.160 |
| equilibrium (mol L⁻¹), divided by 2.00 L | 0.160 | 0.0800 |

- K = [NO₂]² / [N₂O₄] = 0.0800² / 0.160 = 4.00·10⁻² (3 significant figures, like the data).

### Worked example: concentrations from K

- Suppose K = 64 for H₂(g) + I₂(g) ⇌ 2 HI(g) at a certain temperature, and a mixture starts with [H₂] = [I₂] = 0.100 mol L⁻¹ and no HI. If x mol L⁻¹ of H₂ reacts, then at equilibrium [H₂] = [I₂] = 0.100 − x and [HI] = 2x.
- K = (2x)² / (0.100 − x)² = 64. Taking the square root of both sides: 2x / (0.100 − x) = 8, so 2x = 0.800 − 8x and x = 0.0800.
- So [HI] = 0.16 mol L⁻¹ and [H₂] = [I₂] = 0.020 mol L⁻¹, in 2 significant figures because K has 2. Check: 0.16² / 0.020² = 64.
- Without that shortcut you get a quadratic equation. Solve it with the quadratic formula and keep the root that makes sense: here the roots are x = 0.0800 and x = 0.133, and the second would make [H₂] negative. *(CvTE A8.6)*

### Worked example: comparing Q with K

- Take the N₂O₄ equilibrium again, at the same temperature (K = 4.00·10⁻²). Suppose a mixture holds [N₂O₄] = 0.100 mol L⁻¹ and [NO₂] = 0.100 mol L⁻¹. Then Q = 0.100² / 0.100 = 0.100, so Q > K, and NO₂ reacts to form N₂O₄ (the equilibrium shifts to the left) until Q = K.

### K<sub>w</sub>, K<sub>z</sub> and K<sub>b</sub>

- Water ionises very slightly: 2 H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq), with K<sub>w</sub> = [H₃O⁺]·[OH⁻] = 1.0·10⁻¹⁴ at 298 K (Binas). In pure water [H₃O⁺] = [OH⁻] = 1.0·10⁻⁷ mol L⁻¹, so the pH is 7.00; and because −log K<sub>w</sub> = 14.00, pH + pOH = 14.00 at 298 K. *(CvTE R&A1.6, R&A1.4)*
- The acid constant K<sub>z</sub> (*zuurconstante*; K<sub>a</sub> in English) of a weak acid HA belongs to HA + H₂O ⇌ A⁻ + H₃O⁺: K<sub>z</sub> = [A⁻]·[H₃O⁺] / [HA]. For ethanoic acid (acetic acid), CH₃COOH(aq) + H₂O(l) ⇌ CH₃COO⁻(aq) + H₃O⁺(aq), K<sub>z</sub> = 1.8·10⁻⁵ (Binas). The larger K<sub>z</sub>, the stronger the acid. *(CvTE R&A1.6)*
- The base constant K<sub>b</sub> (*baseconstante*) of a weak base B belongs to B + H₂O ⇌ BH⁺ + OH⁻: K<sub>b</sub> = [BH⁺]·[OH⁻] / [B]. For ammonia, NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq), K<sub>b</sub> = 1.8·10⁻⁵ (Binas). *(CvTE R&A1.6)*
- For a conjugate acid-base pair HA and A⁻, K<sub>z</sub>(HA) × K<sub>b</sub>(A⁻) = K<sub>w</sub>. The base A⁻ reacts with water to HA and OH⁻, so K<sub>b</sub>(A⁻) = [HA]·[OH⁻] / [A⁻]; multiplying this by the K<sub>z</sub> expression cancels [A⁻] and [HA] and leaves [H₃O⁺]·[OH⁻]. With Binas values, K<sub>z</sub>(NH₄⁺) × K<sub>b</sub>(NH₃) = 5.6·10⁻¹⁰ × 1.8·10⁻⁵ = 1.0·10⁻¹⁴. So when you know one, you can calculate the other: K<sub>b</sub>(CH₃COO⁻) = 1.0·10⁻¹⁴ / 1.8·10⁻⁵ = 5.6·10⁻¹⁰. Binas has a table of acid and base constants.
- **Trap:** a pH of 7.00 is neutral only at 298 K. K<sub>w</sub> increases with temperature, so hot pure water has a pH below 7 but is still neutral, because [H₃O⁺] = [OH⁻].

## C5.3 Shifting the position of equilibrium

- A change in conditions can make Q differ from K; the system then reacts in the direction that brings Q back to K. Concentrations, dilution and pressure change Q; the temperature changes K. Le Chatelier's rule predicts the same direction, but the syllabus asks you to explain it with Q and K. *(CvTE R4.2)*

### Change in the reaction quotient

- Adding a reactant (or removing a product) makes Q smaller than K, so the equilibrium shifts to the right until Q = K again. In the ammonia synthesis, N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), removing NH₃ by condensing it drives the reaction to the right. The shift uses up only part of an added substance. *(CvTE R4.2)*
- Dilution with water lowers all dissolved concentrations by the same factor. Q changes only when the sums of the coefficients of the dissolved particles differ on the two sides, and then the equilibrium shifts to the side with more dissolved particles. Example: Fe³⁺(aq) + SCN⁻(aq) ⇌ FeSCN²⁺(aq). Diluting to twice the volume makes Q = ½ / (½ × ½) × K = 2K before anything reacts, so Q > K and the equilibrium shifts to the left, the side with 2 particles. By the same reasoning a weak acid ionises further when it is diluted.
- Pressure (for gases): compressing the mixture into a smaller volume raises all gas concentrations by the same factor. If the number of gas molecules differs on the two sides, Q changes and the equilibrium shifts to the side with fewer gas molecules. For N₂O₄(g) ⇌ 2 NO₂(g), halving the volume makes Q = (2² / 2) × K = 2K, so the equilibrium shifts to the left. For H₂(g) + I₂(g) ⇌ 2 HI(g), with 2 gas molecules on each side, Q doesn't change and nothing shifts.
- **Trap:** adding more of a solid or a pure liquid, for example more CaCO₃ to the CaCO₃ and CaO equilibrium, doesn't change Q, so the equilibrium doesn't shift. Neither does pumping an unreactive gas into a closed vessel of constant volume: the concentrations stay the same.

### Change in the equilibrium constant

- A change in temperature changes K itself. Raising the temperature shifts the equilibrium in the endothermic direction: K increases if the forward reaction is endothermic and decreases if it is exothermic. *(CvTE R4.2)*
- The formation of NO₂ from N₂O₄ is endothermic, so heating the mixture gives more brown NO₂. The ammonia synthesis is exothermic (ΔE = −0.92·10⁵ J per mol of reaction as written, see [C06](../C06-energy-calculations/notes.md)), so a higher temperature gives less NH₃ at equilibrium, even though the equilibrium is reached faster.
- **Trap:** only a temperature change changes K. Concentration, pressure and dilution change Q, and the system then returns to the same K.

## C5.4 The influence of a catalyst

- Reaction rate: a catalyst lowers the activation energy of the forward and the reverse reaction by the same amount, so both reactions go faster ([C04](../C04-reaction-kinetics/notes.md)). *(CvTE R4.3)*
- Time needed to reach equilibrium (*insteltijd*): shorter, because both rates are higher. *(CvTE R4.3)*
- Position of equilibrium: unchanged. A catalyst doesn't change K, which depends only on the temperature, and it doesn't appear in Q, so the equilibrium mixture has the same composition; it is only reached sooner. *(CvTE R4.3)*
- In industry a catalyst lets an equilibrium reaction run fast enough at a lower temperature. That helps when the forward reaction is exothermic, as in the ammonia synthesis with its iron catalyst.
- **Trap:** a catalyst doesn't increase the equilibrium yield. In a continuous process it can raise the amount of product per hour, because the mixture gets closer to equilibrium during its time in the reactor, but the equilibrium composition stays the same.

## C5.5 pH calculations

- Use pH = −log [H₃O⁺], pOH = −log [OH⁻] and pH + pOH = 14.00 (at 298 K), and back again [H₃O⁺] = 10<sup>−pH</sup> and [OH⁻] = 10<sup>−pOH</sup>; these relations are in [C02](../C02-chemical-calculations/notes.md). *(CvTE R&A1.4)*
- A pH gets as many decimals as the concentration has significant figures, and the other way round: [H₃O⁺] = 2.5·10⁻³ mol L⁻¹ gives pH 2.60, and pH 2.60 gives [H₃O⁺] = 2.5·10⁻³ mol L⁻¹. *(CvTE A8.3)*
- Univalent (*éénwaardig*) means that one particle of the acid gives off one H⁺, or one particle of the base takes up one H⁺. The difference between strong and weak acids is in [C01](../C01-chemical-processes/notes.md); the K<sub>z</sub> and K<sub>b</sub> values are in the Binas table of acid and base constants. *(CvTE R&A1.5, R1.8)*

### Strong acid

- A strong acid ionises completely, for example HNO₃ + H₂O → H₃O⁺ + NO₃⁻ and HCl + H₂O → H₃O⁺ + Cl⁻; hydrochloric acid (*zoutzuur*) is H₃O⁺(aq) + Cl⁻(aq). So for a univalent strong acid [H₃O⁺] = c, the concentration of the acid. *(CvTE R&A1.5)*
- Example: nitric acid with c = 5.0·10⁻³ mol L⁻¹ has [H₃O⁺] = 5.0·10⁻³ mol L⁻¹ and pH = −log (5.0·10⁻³) = 2.30.
- Back: hydrochloric acid with pH 2.40 has [H₃O⁺] = 10<sup>−2.40</sup> = 4.0·10⁻³ mol L⁻¹, so c(HCl) = 4.0·10⁻³ mol L⁻¹.
- Diluting a strong acid ten times divides [H₃O⁺] by ten and raises the pH by exactly 1: the nitric acid above, diluted to 5.0·10⁻⁴ mol L⁻¹, has pH 3.30.
- **Trap:** [H₃O⁺] = c holds only for a strong acid. For a weak acid [H₃O⁺] is smaller than c, often much smaller.

### Univalent weak acid

- A weak acid HA ionises only partly: HA + H₂O ⇌ A⁻ + H₃O⁺. If x mol L⁻¹ of it ionises, then [H₃O⁺] = [A⁻] = x and [HA] = c − x (the H₃O⁺ that water forms on its own is negligible here), so K<sub>z</sub> = x² / (c − x). *(CvTE R&A1.5, R&A1.6)*
- Exact route: rewrite this as x² + K<sub>z</sub>·x − K<sub>z</sub>·c = 0 and use the quadratic formula, x = (−K<sub>z</sub> + √(K<sub>z</sub>² + 4·K<sub>z</sub>·c)) / 2; the other root is negative. *(CvTE A8.6)*
- Approximation: if x is much smaller than c, then c − x ≈ c, so K<sub>z</sub> ≈ x² / c and x = √(K<sub>z</sub>·c). Afterwards check that x really is small compared with c (a common rule of thumb is less than about 5% of c), or compare with the exact route.
- Example: ethanoic acid with c = 0.20 mol L⁻¹ and K<sub>z</sub> = 1.8·10⁻⁵.
    - Approximation: x = √(1.8·10⁻⁵ × 0.20) = 1.9·10⁻³ mol L⁻¹, so pH = 2.72.
    - Check: x / c = 1.9·10⁻³ / 0.20, about 1%, so the approximation is fine.
    - Exact: x = (−1.8·10⁻⁵ + √((1.8·10⁻⁵)² + 4 × 1.8·10⁻⁵ × 0.20)) / 2 = 1.9·10⁻³ mol L⁻¹ as well, and again pH = 2.72.
- When the approximation fails: methanoic acid (K<sub>z</sub> = 1.8·10⁻⁴) with c = 1.0·10⁻³ mol L⁻¹. The approximation gives x = 4.2·10⁻⁴ mol L⁻¹, 42% of c, so c − x ≈ c is not allowed. The exact route gives x = 3.4·10⁻⁴ mol L⁻¹ and pH = 3.46; the approximation would have given 3.37.
- A salt solution can be acidic: ammonium chloride contains the weak acid NH₄⁺ (K<sub>z</sub> = 5.6·10⁻¹⁰). For c = 0.10 mol L⁻¹: x = √(5.6·10⁻¹⁰ × 0.10) = 7.5·10⁻⁶ mol L⁻¹, and pH = 5.13.
- Diluting a weak acid ten times raises the pH by only about 0.5 (in the approximation x is proportional to √c), because the acid ionises further (C5.3).
- **Trap:** for a weak acid [H₃O⁺] is x, not c. Filling in c in pH = −log c treats the acid as strong.

### Strong base

- A strong base is completely split into ions. Caustic soda (*natronloog*) is Na⁺(aq) + OH⁻(aq), so [OH⁻] = c(NaOH). Barium hydroxide gives two OH⁻ per formula unit, Ba(OH)₂(s) → Ba²⁺(aq) + 2 OH⁻(aq), so [OH⁻] = 2 × c. Calculate the pOH first, then pH = 14.00 − pOH. *(CvTE R&A1.5)*
- Example: caustic soda with c = 0.050 mol L⁻¹ has pOH = −log 0.050 = 1.30 and pH = 14.00 − 1.30 = 12.70.
- Example: barium hydroxide solution with c = 0.010 mol L⁻¹ has [OH⁻] = 0.020 mol L⁻¹, pOH = 1.70 and pH = 12.30. The factor 2 is a counted number, so it doesn't limit the significant figures.
- Back: caustic soda with pH 11.50 has pOH = 2.50 and [OH⁻] = 10<sup>−2.50</sup> = 3.2·10⁻³ mol L⁻¹ = c(NaOH). A barium hydroxide solution with the same pH has c = 3.2·10⁻³ / 2 = 1.6·10⁻³ mol L⁻¹.
- **Trap:** −log [OH⁻] is the pOH, not the pH. Going via [H₃O⁺] = K<sub>w</sub> / [OH⁻] gives the same answer: 1.0·10⁻¹⁴ / 0.050 = 2.0·10⁻¹³ mol L⁻¹, pH 12.70.

### Univalent weak base

- A weak base B takes up H⁺ only partly: B + H₂O ⇌ BH⁺ + OH⁻. With x = [OH⁻] = [BH⁺] and [B] = c − x, K<sub>b</sub> = x² / (c − x). Solve for x as for a weak acid (exactly, or with x = √(K<sub>b</sub>·c) and a check), then pOH = −log x and pH = 14.00 − pOH. *(CvTE R&A1.5)*
- Example: aqueous ammonia (*ammonia*, NH₃(aq)) with c = 0.080 mol L⁻¹ and K<sub>b</sub> = 1.8·10⁻⁵. Approximation: x = √(1.8·10⁻⁵ × 0.080) = 1.2·10⁻³ mol L⁻¹, which is 1.5% of c (the exact route also gives 1.2·10⁻³). So pOH = 2.92 and pH = 14.00 − 2.92 = 11.08.
- A sodium ethanoate solution is basic, because CH₃COO⁻ is a weak base with K<sub>b</sub> = 5.6·10⁻¹⁰. For c = 0.10 mol L⁻¹: x = √(5.6·10⁻¹⁰ × 0.10) = 7.5·10⁻⁶ mol L⁻¹, pOH = 5.13 and pH = 8.87.
- **Trap:** the K<sub>b</sub> calculation gives [OH⁻], so −log x is the pOH; don't stop there.

### From the pH back to the concentration

- Strong acid or strong base: c follows directly from [H₃O⁺] or [OH⁻], as in the examples above.
- Weak acid: x = [H₃O⁺] = 10<sup>−pH</sup>, and rearranging K<sub>z</sub> = x² / (c − x) gives c = x + x² / K<sub>z</sub>. Example: an ethanoic acid solution with pH 2.70 has x = 10<sup>−2.70</sup> = 2.0·10⁻³ mol L⁻¹, so c = 2.0·10⁻³ + (2.0·10⁻³)² / 1.8·10⁻⁵ = 0.22 mol L⁻¹.
- Weak base: pOH = 14.00 − pH and x = [OH⁻] = 10<sup>−pOH</sup>; then c = x + x² / K<sub>b</sub>. Example: aqueous ammonia with pH 11.20 has pOH = 2.80, x = 1.6·10⁻³ mol L⁻¹ and c = 0.14 mol L⁻¹.
- **Trap:** for a weak acid c is larger than [H₃O⁺], often much larger; c = 10<sup>−pH</sup> is only right for a strong acid.

## CCVX versus the Dutch syllabus

- **In both:** everything above. The Dutch R&A1.6 lists Q, K and "K = Q at equilibrium" explicitly with the equilibrium calculations, while CCVX names the reaction quotient only in C5.3; CCVX lists the stoichiometric ratio under C5.2, the Dutch syllabus under R&A1.1.
- **Dutch syllabus only:** the solubility product K<sub>s</sub> (*oplosbaarheidsproduct*) and the partition constant K<sub>v</sub> (*verdelingsevenwicht*). CCVX doesn't list them, but they follow the same rules as any K. For a saturated silver chloride solution, AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq) and K<sub>s</sub> = [Ag⁺]·[Cl⁻], with the solid left out. For a substance divided between water and a solvent that doesn't mix with water, K<sub>v</sub> is the ratio of its concentrations in the two layers, written like any K from the equation. *(CvTE R&A1.6)*
