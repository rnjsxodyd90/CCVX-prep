// One source of truth for subjects, prices and exam dates.
// Exam dates and deadlines come from ccvx.nl (source URL below) and the repo README.
// 'about' dates are the CCVX's own provisional dates (their page literally says "about").
export const EXAM_SOURCE = 'https://www.ccvx.nl/index%20-%20EN.html';
export const SAMPLES_SOURCE = 'https://www.ccvx.nl/index%20-%20EN.html#:~:text=Example';

// Prices live in pricing-config.mjs (ONE money file, owner updates 1 Nov 2026).
export const SUBJECTS = [
  {
    id: 'phys',
    name: 'Physics',
    dir: 'CCVX-physics',
    lookupKey: 'cup_phys_once',
    exams: [
      { label: 'Tuesday 24 November 2026', approx: false },           // verified on ccvx.nl (EXAM_SOURCE)
      { label: 'Around Wednesday 21 April 2027', approx: true },      // verified on ccvx.nl ("about")
      { label: 'Around Monday 19 July 2027', approx: true },          // verified on ccvx.nl ("about")
    ],
    // Computed as 10 working days before the sitting (same method as the repo
    // README's verified chemistry date). TO VERIFY at go-live against the CCVX
    // conditions, article 4.
    registrationDeadline: 'Tuesday 10 November 2026',
    sampleItem: 'phys-p01', // owner-confirmed: P01 oscillations and waves, the teacher's first finished subdomain; flat folders (pin 2)
  },
  {
    id: 'chem',
    name: 'Chemistry',
    dir: 'CCVX-chemistry',
    lookupKey: 'cup_chem_once',
    exams: [
      { label: 'Thursday 26 November 2026', approx: false },
      { label: 'Around Monday 12 April 2027', approx: true },
      { label: 'Around Friday 16 July 2027', approx: true },
    ],
    registrationDeadline: 'Thursday 12 November 2026',
    sampleItem: 'chem-c02',
  },
  {
    id: 'bio',
    name: 'Biology',
    dir: 'CCVX-biology',
    lookupKey: 'cup_bio_once',
    exams: [
      { label: 'Thursday 3 December 2026', approx: false },
      { label: 'Around Wednesday 14 April 2027', approx: true },
      { label: 'Around Wednesday 14 July 2027', approx: true },
    ],
    registrationDeadline: 'Thursday 19 November 2026',
    sampleItem: 'bio-b01', // owner-chosen public sample unit (notes; practice lands with the teacher batches)
  },
  {
    id: 'matha',
    name: 'Mathematics A',
    dir: 'CCVX-math-A',
    lookupKey: 'cup_matha_once',
    exams: [
      { label: 'Monday 14 December 2026', approx: false },
      { label: 'Around Monday 19 April 2027', approx: true },
      { label: 'Around Thursday 22 July 2027', approx: true },
    ],
    registrationDeadline: null,
    sampleItem: 'matha-a01', // coordinator decision: A01 numbers and algebra, the math A core
  },
  {
    id: 'mathb',
    name: 'Mathematics B',
    dir: 'CCVX-math-B',
    lookupKey: 'cup_mathb_once',
    exams: [
      { label: 'Tuesday 15 December 2026', approx: false },
      { label: 'Around Monday 19 April 2027', approx: true },
      { label: 'Around Friday 23 July 2027', approx: true },
    ],
    registrationDeadline: null,
    sampleItem: 'mathb-b03', // owner-chosen public sample unit for math B
  },
];
