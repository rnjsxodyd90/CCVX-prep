# P9 — Optics: practice

Twelve original practice questions, written for this prep. Nothing is copied from CCVX or CvTE exams. Outcome codes o1–o4 match the numbered learning outcomes in [README.md](README.md). All angles are measured to the normal; refractive indices from BINAS (air 1.00, water 1.33, crown glass ≈ 1.52, diamond 2.42); c = 3.00·10⁸ m/s.

### phys-p09-q01 | points 2 | outcome o1 | difficulty easy

#### Question

A light ray hits a flat mirror. The angle between the incoming ray and the normal is 35°.

a. Give the angle between the reflected ray and the normal.
b. Compute the total angle between the incoming and the reflected ray.

#### Answer

a. 35°; b. 70°

#### Solution

a. Reflection law: i = t, both to the normal → 35°.
b. The two rays lie 35° + 35° = 70° apart.

### phys-p09-q02 | points 3 | outcome o1 | difficulty easy

#### Question

A point source hangs 1.2 m in front of an opaque cardboard figure of height 0.30 m. A wall stands 3.6 m behind the source–figure line (the figure halfway between source and wall: figure at 1.2 m, wall at 2.4 m from the figure).

a. Compute the height of the shadow on the wall.
b. Why is the shadow sharp here, and when would it show a penumbra?

#### Answer

a. 0.90 m; b. sharp because the source is (point-)small; an extended source gives a fuzzy edge (umbra + penumbra)

#### Solution

a. Similar rays: the shadow enlarges in proportion to the distance from the source: wall distance/figure distance = (1.2 + 2.4)/1.2 = 3.0 → shadow height = 0.30·3.0 = 0.90 m.
b. A point source is covered or visible — no in-between, so the edge is perfectly sharp. An extended source is covered gradually along the edge: behind it sits the transition ring (penumbra/bijschaduw) next to the full umbra.

### phys-p09-q03 | points 3 | outcome o1 | difficulty easy

#### Question

A ray from air hits the flat surface of water (n = 1.33) at an angle of incidence of 50°. Compute the angle of refraction and state whether the ray bends towards or away from the normal.

#### Answer

r = 35°; towards the normal

#### Solution

sin i/sin r = n → sin r = sin 50°/1.33 = 0.766/1.33 = 0.576 → r = 35°. Entering an optically denser medium, the ray bends *towards* the normal (r < i).

### phys-p09-q04 | points 3 | outcome o1 | difficulty medium

#### Question

Measuring on a glass block, a student finds: a ray from air (i = 60°) continues inside the glass at r = 35°. Compute the refractive index of the glass, name the likely type from BINAS, and give the angle of refraction for normal incidence (i = 0°).

#### Answer

n = 1.5 (crown glass); for i = 0° also r = 0° (no bending)

#### Solution

n = sin i/sin r = sin 60°/sin 35° = 0.866/0.574 = 1.51 ≈ 1.5 — crown glass (*kroonglas* ≈ 1.52) fits. Normal incidence: sin r = sin 0°/n = 0 → r = 0°: a ray along the normal passes straight through.

### phys-p09-q05 | points 3 | outcome o1 | difficulty medium

#### Question

A diver's lamp sends a ray from *inside* water (n = 1.33) towards the surface at an angle of 30° to the normal. Compute the angle at which the ray emerges in air.

#### Answer

r = 42°

#### Solution

Now the water–air transition plays: sin r/sin i = n → sin r = 1.33·sin 30° = 1.33·0.500 = 0.665 → r = 41.7 ≈ 42°. Leaving the denser medium, the ray bends *away* from the normal (r > i). (Reversibility: the 42° ray from air would enter the water at 30° — same path.)

### phys-p09-q06 | points 3 | outcome o1 | difficulty medium

#### Question

Light inside a crown-glass block (n = 1.52) meets the glass–air boundary.

a. Compute the critical angle.
b. What happens at an incidence of 45° and at 40°?

#### Answer

a. g = 41°; b. at 45°: total internal reflection; at 40°: the ray exits, bent away from the normal (to r = 78°)

#### Solution

a. sin g = 1/n = 1/1.52 = 0.658 → g = 41°.
b. 45° > 41.1° → total internal reflection: nothing exits, the boundary mirrors perfectly. 40° < 41.1° → refraction: sin r = n·sin 40° = 1.52·0.643 = 0.977 → r = 78°, out along the surface, grazing.

### phys-p09-q07 | points 4 | outcome o2 | difficulty medium

#### Question

A glass fibre has a core of glass with n = 1.50, surrounded by cladding and air. A light pulse travels inside the core along the fibre, which curves gently.

a. Compute the critical angle of the core against air (approximation).
b. Explain with this why the pulse stays inside the fibre even when the fibre bends, and why the signal barely loses intensity over kilometres.
c. Give one health-care application of such fibre bundles (spec 14).

#### Answer

a. g = 41.8°; b. grazing incidence always exceeds the critical angle → total internal reflection, so no light escapes through the wall — the fibre guides the light; c. endoscopy (endoscoop) — and the fibre can also guide the laser for internal treatment

#### Solution

a. sin g = 1/n = 1/1.50 = 0.667 → g = 41.8°.
b. Rays running along a fibre meet its wall nearly lengthwise (grazing): incidence angles of 80–90°, far above 41.8°. Every contact is therefore a total internal reflection — an ideal mirror with no absorption at the boundary. Thousands of such reflections (also around gentle bends) guide the pulse through the core with only the weak absorption of the glass itself — hence very little loss.
c. Endoscope: one fibre bundle carries light down, a second carries the image back, e.g. for inspecting a stomach or a lung — and a fibre can deliver a laser beam exactly where a kidney stone hides (match spec 14's fibre technique).

### phys-p09-q08 | points 3 | outcome o2 | difficulty medium

#### Question

A narrow beam of white light enters a glass prism and leaves it as a coloured fan.

a. Name the phenomenon and explain why it happens (think of n per colour).
b. Which colour bends most, red or violet?
c. Give the approximate wavelengths of red and violet light in vacuum (f = c/λ, BINAS).

#### Answer

a. dispersion (*kleurschifting/dispersie*): the refractive index differs per colour (violet: larger n); b. violet bends most; c. red ≈ 700 nm (≈ 4.3·10¹⁴ Hz), violet ≈ 400 nm (≈ 7.5·10¹⁴ Hz)

#### Solution

a. Dispersion: n is not one constant for the glass but slightly larger for short wavelengths. At the first prism face every colour refracts by its own n, and at the second face the separation grows — the fan of colours.
b. Violet has the larger n → it bends most (at both faces).
c. λ_red ≈ 700 nm → f = 3.00·10⁸/7.0·10⁻⁷ = 4.3·10¹⁴ Hz; λ_violet ≈ 400 nm → f = 7.5·10¹⁴ Hz (BINAS, f = c/λ).

### phys-p09-q09 | points 4 | outcome o1 | difficulty hard

#### Question

A swimming instructor looks straight down into the 1.8 m deep pool (n = 1.33) at a coin on the bottom.

a. Using Snell's law for near-vertical rays, how deep does the coin *appear*? (For small angles, sin i/sin r = 1/n reduces the depth by 1/n.)
b. Explain in one sentence (ray direction) why the apparent depth is smaller.
c. A fish seems to hang 1.0 m below the surface. How deep is it really?

#### Answer

a. d′ = d/n = 1.4 m; b. rays from underwater bottom bend away from the normal when exiting, so the eye's brain places the coin shallower along the rays' extension; c. 1.3 m

#### Solution

a. d′ = d/n = 1.8/1.33 = 1.35 ≈ 1.4 m — the pool looks shallower than the tiles say.
b. Rays leaving the water for the eye bend away from the normal (denser → thinner medium); traced back in straight lines they meet above the real object — the image is lifted by the factor 1/n.
c. Real depth = n × apparent depth = 1.33·1.0 = 1.3 m. (The opposite of spearing fish: aim *below* where you see it.)

### phys-p09-q10 | points 4 | outcome o2 | difficulty hard

#### Question

Many gemstones shine because of total internal reflection.

a. Compute the critical angle of diamond (n = 2.42).
b. Compare with crown glass (g = 41°). Explain why a well-cut diamond returns so much more light to the viewer's eye.
c. The cutter arranges facets so that light entering from above meets the bottom facets at angles well beyond g. Which optical phenomenon does he exploit at each of those facets?

#### Answer

a. g = 24.4°; b. with such a small g, almost every internal contact is a total reflection — light entering a diamond has almost no way out except flashing back; c. total internal reflection (a perfect mirror, no metal coating needed)

#### Solution

a. sin g = 1/2.42 = 0.413 → g = 24.4°.
b. g_diamond (24°) is far below g_glass (41°), so a much wider range of incidence angles inside ends in total internal reflection. Light that enters through the table dances multiple times inside and exits through the crown facets, concentrated; ordinary glass lets much of it slip out through the back. That is the brilliance.
c. **Total internal reflection** at each facet — reflection without any mirror layer, lossless, exactly as in the glass fibre (q07).

### phys-p09-q11 | points 4 | outcome o3 | difficulty hard

#### Question

Image and sound recording, the three classic techniques:

a. Digital: the human ear reaches 20 kHz. Explain why a recording at 44.1 kHz sampling rate suffices, and what the 16-bit quantisation adds.
b. Magnetic tape: name one physics property of the tape material that makes recording possible at all, and one disadvantage of the analogue mechanism.
c. Compact disc: describe how a laser reads the stored information and why the signal is more robust than tape's.

#### Answer

a. sampling above 2× the highest frequency reconstructs all detail; 16-bit gives the value resolution; b. the tape's particles keep their magnetisation (remanence); wear, noise, stretching; c. a laser measures reflections off pits and lands (interference → on/off), a clean digital signal with error correction — no gradual analog loss

#### Solution

a. Sampling captures a waveform fully when the rate exceeds twice its highest frequency (sampling theorem). 44.1 kHz > 2 × 20 kHz ✓, so nothing audible escapes. Each sample is then stored as a 16-bit number: 65 536 loudness levels — the amplitude resolution.
b. The iron/chromium particles on the tape align with the recording field and *stay* magnetised (remanence) → the signal is stored but must fade slowly by nature; tape also hisses with tape noise, stretches (wow/flutter) and loses high frequencies with wear.
c. Along the track, pits and flat lands alternate; the reading laser spot interferes between the levels (destructive at a pit edge, constructive on a land) producing a sequence of on/off pulses: the binary stream itself. Being digital with error-correction codes, a CD plays the same bits even when lightly scratched or dusty — no equivalent of tape hiss; it degrades in cliffs, not in slopes.

### phys-p09-q12 | points 4 | outcome o4 | difficulty hard

#### Question

Hospital physics bag:

a. For gallstones the doctor first makes an echo of the abdomen and afterwards destroys a stone with a laser through a fibre. Name the physical principle behind each technique (both times in one or two lines).
b. Give one reason why prenatal checks are done with ultrasound rather than with X-ray photos.
c. A laser scalpel both cuts a tissue spot and *stops small bleeds*. That closing action is described as coagulation: heat the protein so it solidifies. Which property of laser light makes such precise dosing possible?

#### Answer

a. echo: reflection of ultrasound pulses at tissue boundaries + timing (s = v·t/2); laser-through-fibre: total internal reflection guides the high-energy beam to the stone; b. ultrasound uses no ionising radiation — no risk for the unborn child; c. the beam is very narrow and parallel: energy lands in a tiny spot at an exact distance, so dose per spot can be set (power × time)

#### Solution

a. **Echo**: the probe sends short ultrasound pulses; boundaries between tissues reflect part of the pulse (impedance jump), the echo time marks the depth (s = v·t/2, v ≈ 1.5·10³ m/s), and the computer draws an image. **Laser lithotripsy**: a thin fibre is passed to the stone; light transported inside it bounces on by total internal reflection (critical angle), and its focused energy crumbles the stone without cutting skin.
b. X-rays are ionising: DNA damage risk to the rapidly dividing cells of an unborn child. Ultrasound is mechanical vibration — it carries no ionising energy, so it is the safe prenatal eye.
c. Laser light is parallel and of one colour, so it can be focused to a spot of hundreds of micrometres: all delivered energy (power × exposure time) lands in a controllable tiny volume — the surgeon doses the coagulation exactly where and how long needed.
