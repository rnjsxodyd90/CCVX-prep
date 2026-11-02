# P9 — Optics: notes

English notes on the learning outcomes in [README.md](README.md). Dutch terms are in brackets and italics. Formula letters follow the CCVX syllabus and BINAS conventions (c = 3.00·10⁸ m/s). Built from the CCVX physics syllabus of 15 August 2025.

## 1. Beams, shadows, reflection (assumed knowledge)

- A light source sends out a **divergent** bundle; bundles from (optically treated) laser light or the distant Sun arrive virtually **parallel**; lenses make bundles **convergent**. Behind an obstacle a point source throws a sharp full shadow; an extended source produces umbra (*schaduw*, full) and penumbra (*bijschaduw*, partial) — geometry with straight rays only.
- Reflection comes in two kinds: **mirror reflection** (*spiegelende terugkaatsing*) — a smooth surface maps parallel in, parallel out (you can see the source); and **diffuse reflection** — a rough surface scatters every bundle into all directions (you see the surface itself; luckily, otherwise the world would be invisible).
- Reflection law: **i = t**, angles measured to the normal.

## 2. Refraction (o1)

- Crossing from air into glass/water (any optically denser medium), a light ray bends **towards** the normal; leaving it bends **away** from the normal. The law for entering a medium with index n:

  **sin i / sin r = n** (air → medium, angles to the normal).

  Leaving the medium: sin r/sin i = n (swap roles). Quick morals: smaller r for larger n; no bending along the normal (i = 0° → r = 0°).
- Refractive indices (BINAS): air ≈ 1.00, water 1.33, glass ≈ 1.5–1.6 (crown ≈ 1.52, flint ≈ 1.6), diamond 2.42.
- Because every ray is reversible: entering at i gives r; entering along the reversed path gives exactly i back.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 210" width="330" role="img" aria-label="Refraction of a light ray from air into glass: bending towards the normal">
  <line x1="30" y1="110" x2="310" y2="110" stroke="#333" stroke-width="1.5"/>
  <line x1="170" y1="25" x2="170" y2="195" stroke="#999" stroke-width="1" stroke-dasharray="4 4"/>
  <rect x="30" y="110" width="280" height="85" fill="#e3f2fd" opacity="0.5"/>
  <polyline points="90,30 170,110" fill="none" stroke="#1565c0" stroke-width="2.5"/>
  <polyline points="170,110 213,190" fill="none" stroke="#c62828" stroke-width="2.5"/>
  <text x="45" y="45" font-size="12" font-family="sans-serif" fill="#333">air (n ≈ 1.00)</text>
  <text x="45" y="150" font-size="12" font-family="sans-serif" fill="#333">glass (n ≈ 1.5)</text>
  <text x="177" y="33" font-size="11" font-family="sans-serif" fill="#333">normal</text>
  <path d="M145,65 A63,63 0 0 0 170,73" fill="none" stroke="#333" stroke-width="1"/>
  <text x="141" y="62" font-size="12" font-family="sans-serif" fill="#333">i</text>
  <path d="M170,150 A40,40 0 0 0 196,163" fill="none" stroke="#333" stroke-width="1"/>
  <text x="181" y="160" font-size="12" font-family="sans-serif" fill="#333">r</text>
</svg>

- Critical angle (*grenshoek*): a ray inside the medium, hitting the boundary at increasing i, exits closer and closer to the surface — until it would leave along the surface (r = 90°): **sin g = 1/n**. Beyond g there is **total internal reflection**: the boundary acts as a perfect mirror.
- Light speed in a medium is c/n; wavelength shrinks accordingly (frequency is light's identity, held fixed): f = c/λ in vacuum/air.

## 3. Fibres and prisms (o2)

- **Glass fibre** (*glasvezelkabel*): a thin glass core with cladding; any ray meeting the core wall beyond the critical angle reflects completely and zigzags onward, even around bends. Data flies kilometre-long paths with tiny loss — the backbone of the internet and of the endoscope (spec 14).
- **Prism dispersion**: n depends slightly on colour (normal dispersion: larger n for violet). White light splits at the first face and fans further at the second: red least bent, violet most. Raindrops do the same trick — the rainbow.

## 4. Recording image and sound (o3)

- Digital technique: the analogue signal is **sampled** at a fixed rate and each sample **quantised** (rounded) into bits. To catch every detail the sampling rate must exceed twice the highest frequency present; a CD samples audio at 44.1 kHz (sufficient for the 20 kHz hearing limit) and quantises in 16 bits.
- Magnetic tape (*magneetband*): the analogue signal magnetises particles on the tape proportionally — analogue, erasable, degrading.
- Compact disc: the bitstream lies as pits and lands in an aluminium track; a laser reads the reflections (interference between pit edge and land level gives dark/bright) — optical, digital, robust copy with error correction.

## 5. Ultrasound and laser light in health care (o4)

- Ultrasound (*echografie*): reflection at tissue boundaries; depth from echo time, s = v·t/2 with v ≈ 1.5·10³ m/s in tissue (details in [P02](../P02-medical-imaging-and-radiation/)); no ionising dose.
- Laser light: an intense, narrow, single-colour, parallel beam — the perfect knife and welder in surgery (LASIK cornea reshaping, destroying kidney stones through a fibre, coagulating a detached retina), and the reader of measurements (pulse oximetry via fibre).
- Glass fibre technology (*glasvezeltechniek*, endoscope): one bundle carries illumination light in, a second (or a camera chip) brings the image out — inspection of lungs and stomach without opening the body.

## Worked examples

Fully worked examples for the outcomes in [README.md](README.md). All examples are original.

## Example 1 — air into water

A ray hits the surface of a pond (n = 1.33) with i = 40°. Compute the angle of refraction.

**Solution.** sin i/sin r = n → sin r = sin 40°/1.33 = 0.6428/1.33 = 0.4833 → r = 28.9° ≈ 29°.

## Example 2 — identifying an unknown glass

A student measures i = 45.0°, r = 28.1° for a ray entering a glass block from air. Compute the refractive index and look up which glass it could be.

**Solution.** n = sin i/sin r = 0.7071/0.4710 = 1.501 ≈ 1.50: crown glass territory (BINAS, ~1.5).

## Example 3 — the snorkeller's window

Water (n = 1.33): compute the critical angle and explain why a submerged swimmer looking straight up sees the whole outside world in a bright cone.

**Solution.** sin g = 1/n = 1/1.33 = 0.7519 → g = 48.8°. Rays from outside entering water are compressed into a cone with half-angle g around the vertical; everything beyond that cone reflects underwater scenes back at the swimmer (mirror effect). Divers call it Snell's window.

## Example 4 — apparent depth of the pool bottom

Looking straight down into a 2.5 m pool (n = 1.33), how deep does the bottom appear?

**Solution.** For near-vertical viewing the small-angle version of Snell's law lifts the bottom by exactly the factor 1/n: apparent depth = d/n = 2.5/1.33 = 1.9 m. The same trick hides every fish: it is deeper than it looks.

## Example 5 — why a diamond burns

Compute the critical angle of diamond (n = 2.42) and explain the link with its sparkle.

**Solution.** sin g = 1/2.42 = 0.4132 → g = 24.4°. Light entering a diamond hits most internal faces far beyond 24.4° — nearly everything reflects back inside and exits only through chosen faces, concentrated as fierce flashes. High n + thoughtful cutting = brilliance.
