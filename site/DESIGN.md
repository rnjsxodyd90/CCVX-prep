# Design record — CCVX Ultimate Prep landing

Direction: `one-motif` (seed 836147353), from the taste skill draw on 1 Nov 2026.
No redraws. Full sheet: `site/.taste-skill/direction.json` (`node <skill>/scripts/draw.mjs --show`).

## Inventory (what only this product has)

- The CCVX exam facts: 3 hours, Utrecht (Educatorium room Beta), 13:30–16:30, EUR 98 exam fee paid to the CCVX.
- The product's own shape: one folder per syllabus subdomain, 53 subdomains in chemistry, 41 in biology.
- Partial credit: CCVX open questions award points per correct step; every question here has a marking scheme.
- BINAS is allowed in the exam; all chemistry and biology follows BINAS tables.
- English material for a Dutch exam: the audience is international pre-med, dentistry and science candidates.
- Price: EUR 129 one-off per subject, VAT included, 12 months access. The competitor (DecentraalSucces) charges EUR 199.

## The idea sentence

On this page, **the candidate's exam dossier: one tabbed folder per subject** becomes **the tab shape that runs the whole system**: the hero is a stack of subject folders, and the folder's trapezoid tab returns as the primary button shape, the picture masks, and the filled band between the page halves. Competitor test: DecentraalSucces sells courses with a teacher; a dossier of study material in folders belongs to this product.

## The one live thing

Three real questions from the free C02 sample (loaded from `content/sample-chem.json`, so it is true content, not a demo): the visitor answers, sees the worked solution and the marks a marking scheme would award. Fallback without script: same questions as `<details>` on the chemistry subject page.

## Sections (decentraalsucces.nl structure mapped onto the dealt blueprints)

1. Hero: tabbed folder stack. Folders: Chemistry, Biology, Mathematics A, Mathematics B, Free sample. Front folder (crimson) carries the action.
2. Pricing ("Kies de training"): one giant EUR 129 figure, the four subjects as four plain linked lines, one button.
3. How it works ("Onze aanpak", 4 steps): one question card progresses across four fields: read the notes, practise, check the worked answer with per-step marks, rehearse a timed mock. No index numbers.
4. What's inside (features): count-driven tiles, drawn objects only (reader fragments, notes page, mock clock) plus found pictures masked by the tab.
5. The real exam (proof): fact tiles with the official 2026/2027 exam dates from ccvx.nl, the EUR 98 fee, and the source link. No logos, no invented praise.
6. FAQ: 8 tiles.
7. Final CTA: a sentence with the subject as an inline select and the submit word as the button.
8. Footer: block wordmark, link columns, seller lines, not-affiliated line on this page and every page.

## Copy deck (landing, final page copy)

Hero
- h1: `CCVX Ultimate Prep`
- Support: English study material for the CCVX entrance exams: clear notes per outcome, original practice questions with full solutions, and timed mock exams with marking schemes.
- Folder tabs: Chemistry · Biology · Mathematics A · Mathematics B · Free sample
- Front folder action: `Try three real questions`
- Small line: EUR 129 per subject, one-off · VAT included · 12 months access

Pricing — heading `One price per subject`
- Para: Every subject costs the same. You get all notes, all practice questions with solutions and the mock exams with marking schemes for 12 months.
- Figure: `€ 129` with `per subject, once`
- Four lines: `Chemistry` / `Biology` / `Mathematics A (in preparation)` / `Mathematics B (in preparation)`; each ready subject links to its page.
- Button: `Choose your subject`
- Note line: The CCVX exam itself costs EUR 98 per sitting, paid to the CCVX.

How it works — heading `How you study`
- Field 1: `First you read the notes.` Every syllabus outcome explained, with worked examples.
- Field 2: `Then you practise.` Original questions per subdomain, easy to hard.
- Field 3: `Then you check every step.` Full solutions and per-step marking points, the way a CCVX corrector reads.
- Field 4: `Last you rehearse the exam.` A timed three-hour mock with a marking scheme, twice.

What is inside — heading `What you get`
- Tiles (counts from the content itself): notes per outcome (53 subdomains in Chemistry); original practice questions; original mock exams (two per subject, three hours each); marking schemes with partial credit; BINAS conventions throughout; 12 months access.
- Closing line: The official CCVX sample exams stay with the CCVX: we link to them and never copy them.

The real exam — heading tile `The real exam`
- Tiles: Chemistry — Thursday 26 November 2026 · Biology — Thursday 3 December 2026 · Mathematics A — Monday 14 December 2026 · Mathematics B — Tuesday 15 December 2026 · Around April 2027 and July 2027: new rounds · Utrecht, 13:30–16:30, three hours · EUR 98 exam fee, paid to the CCVX · Dates: ccvx.nl (link)

FAQ — heading `Questions`
1. Is this official CCVX material? — No. This is independent study material. It is not affiliated with or endorsed by the CCVX or any university. The official sample exams are free on ccvx.nl and we link to them.
2. What do I get for EUR 129? — One subject, fully: all notes, all original practice questions with worked solutions, and the mock exams with marking schemes. Twelve months of access, VAT included.
3. Which subjects are ready? — Chemistry is being finished for 26 November 2026. Biology, Mathematics A and Mathematics B are in preparation; the page of each subject says what is inside today.
4. Is everything in English? — Yes. The notes, questions and mock exams are in English and follow the English CCVX syllabus and BINAS conventions.
5. Can I get a refund? — Access starts immediately after payment. At checkout you confirm that you waive the 14-day withdrawal right, as the law allows for digital content that starts right away. The refund page explains the details.
6. Does EUR 129 include the exam? — No. You register and pay the CCVX separately (EUR 98 per sitting).
7. What may I bring to the exam? — The CCVX allows a BINAS book. Our notes use BINAS table numbers so the book feels familiar on exam day.
8. Can I study on my phone? — Yes. The reader works on desktop and mobile; a printed BINAS and real paper for working out are still worth it.

Final CTA
- Sentence: `In June, I will have passed CCVX [subject ▾].`
- Button word: `Start`
- Sub-line: EUR 129 once, VAT included, 12 months of access.

Footer
- Wordmark built from blocks: CCVX ULTIMATE PREP
- Columns: Subjects (Chemistry, Biology, Mathematics A, Mathematics B) · Prepare (Free sample, Pricing, What you get, Exam dates) · Legal (Terms, Privacy, Refund policy)
- Seller lines: Sura Steel · KvK 98957015 · Jan Krosstraat 172, 2571 DD 's-Gravenhage
- Required line (this page and every page): Independent study material. Not affiliated with or endorsed by the CCVX or any university.
- Copyright: © 2026 Sura Steel · ccvxultimateprep.com

## Imagery plan (original + found, credited)

- Product's own: the reader UI as an HTML fragment (real interface, `data-ui`), built from the actual sample JSON; it stands on the crimson folder stage. Counts as interface truth, not decoration.
- Found in open collections (to be gathered with assets.mjs, credited in the footer): an old print of the Utrecht university quarter, historical laboratory glassware or a morgue/dissection engraving, a close material texture like graph paper or a lab notebook page. Masked with the tab shape, one treatment (grayscale, crimson-tinted where the palette demands).
- Moving: one honest clip if assets.mjs --video finds something from this world (writing on paper, lab glass); otherwise a slow drift on a photograph.
## Motion plan

- Signature: index-with-preview on the four subject rows (hover a subject, the reader fragment crossfades in one frame; rows show inline on touch).
- Entrances: heading, text, tile stagger per section (60–90 ms), rise 16–32 px, once.
- Feedback: press/hover/focus on every control; the folder tabs lift on hover.
- One moving picture as above.
