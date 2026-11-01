// One source of truth for subjects, prices and exam dates.
// Exam dates and deadlines come from ccvx.nl (source URL below) and the repo README.
// 'about' dates are the CCVX's own provisional dates (their page literally says "about").
export const EXAM_SOURCE = 'https://www.ccvx.nl/index%20-%20EN.html';
export const SAMPLES_SOURCE = 'https://www.ccvx.nl/index%20-%20EN.html#:~:text=Example';

export const PRICE_EUR = 129; // one-off, VAT included
export const ACCESS_MONTHS = 12;

export const SUBJECTS = [
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
    sampleItem: null, // no subdomain has practice questions yet
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
    sampleItem: null,
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
    sampleItem: null,
  },
];
