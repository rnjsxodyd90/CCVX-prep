// Curated tables of OFFICIAL free exams for the Phase 5 marketing pages.
// Links only: we never store, rehost or quote exam content (Hard rule 1).
// Every URL is verified by scripts/check-exam-links.mjs; see its printed date.
//
// Entry: { label, year, lang, paper, answers, source, topics }
//   topics: our subdomain ids the exam touches, at topic level only; empty
//   list means "spans the full syllabus" (we claim nothing more specific
//   without reading the paper; accuracy rule 3).
const CCVX = 'https://www.ccvx.nl';
const EB = 'https://www.examenblad.nl';

// CvTE vwo exams on examenblad.nl. Document ids follow the site structure
// (verified per subject page and with scripts/check-exam-links.mjs):
//   /<year>/vwo/documenten/cse-<1|2>/<code>-a-<yy>-<1|2>-o  paper (opgaven)
//   /<year>/vwo/documenten/cse-<1|2>/<code>-a-<yy>-<1|2>-c  answers (correctievoorschrift)
const CODES = { Natuurkunde: 1023, Scheikunde: 1028, Biologie: 1018, 'Wiskunde A': 1024, 'Wiskunde B': 1025 };
const cvte = (subject, year, part) => {
  const code = CODES[subject];
  const yy = String(year).slice(2);
  const base = `${EB}/${year}/vwo/documenten/cse-${part}/vw-${code}-a-${yy}-${part}`;
  const romans = ['I', 'II'];
  return {
    label: `VWO exam ${year}, session ${romans[part - 1]}`,
    year,
    lang: 'Dutch',
    paper: `${base}-o`,
    answers: `${base}-c`,
    source: 'CvTE, official source (examenblad.nl)',
    topics: [],
  };
};

export const EXAM_LINKS = {
  phys: {
    ccvx: [1, 2, 3].map((n) => ({
      label: `CCVX example exam ${n}`,
      year: null,
      lang: 'English (answers in Dutch)',
      paper: `${CCVX}/VoorbeeldTentamensEngels/VoorbeeldTentamensNatuurkunde%20-%20EN/Voorbeeldtentamen%20natuurkunde%20${n}%20-%20EN.pdf`,
      answers: `${CCVX}/VoorbeeldTentamens/VoorbeeldTentamensNatuurkunde/Voorbeeldtentamen%20natuurkunde%20${n}%20-%20Uitwerking.pdf`,
      source: 'CCVX, official source (ccvx.nl)',
      topics: [],
    })),
    cvte: [2025, 2024, 2023].flatMap((y) => [cvte('Natuurkunde', y, 1), cvte('Natuurkunde', y, 2)]),
  },
  chem: {
    ccvx: [1, 2].map((n) => ({
      label: `CCVX example exam ${n}`,
      year: null,
      lang: 'English (answers in Dutch)',
      paper: `${CCVX}/VoorbeeldTentamensEngels/Voorbeeldtentamen%20scheikunde%20${n}%20-%20EN.pdf`,
      answers: `${CCVX}/VoorbeeldTentamens/Voorbeeldtentamen%20scheikunde%20${n}%20-%20Uitwerking.pdf`,
      source: 'CCVX, official source (ccvx.nl)',
      topics: ['chem-c02'],
    })),
    cvte: [2025, 2024, 2023].flatMap((y) => [cvte('Scheikunde', y, 1), cvte('Scheikunde', y, 2)]),
  },
  bio: {
    ccvx: [{
      label: 'CCVX example exam',
      year: null,
      lang: 'English (answers in Dutch)',
      paper: `${CCVX}/VoorbeeldTentamensEngels/Voorbeeldtentamen%20biologie%20-%20EN.pdf`,
      answers: `${CCVX}/VoorbeeldTentamens/Voorbeeldtentamen%20biologie%20-%20Uitwerking.pdf`,
      source: 'CCVX, official source (ccvx.nl)',
      topics: [],
    }],
    cvte: [2025, 2024, 2023].flatMap((y) => [cvte('Biologie', y, 1), cvte('Biologie', y, 2)]),
  },
  matha: {
    ccvx: [1, 2, 3].map((n) => ({
      label: `CCVX example exam ${n}`,
      year: null,
      lang: 'English',
      paper: `${CCVX}/VoorbeeldTentamensEngels/VoorbeeldTentamensWiskunde%20-%20EN/Voorbeeldtentamen%20wiskunde%20A%20${n}%20-%20EN.pdf`,
      answers: `${CCVX}/VoorbeeldTentamensEngels/VoorbeeldTentamensWiskunde%20-%20EN/Voorbeeldtentamen%20wiskunde%20A%20${n}%20-%20Uitwerking%20-%20EN.pdf`,
      source: 'CCVX, official source (ccvx.nl)',
      topics: [],
    })),
    cvte: [2025, 2024, 2023].flatMap((y) => [cvte('Wiskunde A', y, 1), cvte('Wiskunde A', y, 2)]),
  },
  mathb: {
    ccvx: [1, 2, 3].map((n) => ({
      label: `CCVX example exam ${n}`,
      year: null,
      lang: 'English',
      paper: `${CCVX}/VoorbeeldTentamensEngels/VoorbeeldTentamensWiskunde%20-%20EN/Voorbeeldtentamen%20wiskunde%20B%20${n}%20-%20EN.pdf`,
      answers: `${CCVX}/VoorbeeldTentamensEngels/VoorbeeldTentamensWiskunde%20-%20EN/Voorbeeldtentamen%20wiskunde%20B%20${n}%20-%20Uitwerking%20-%20EN.pdf`,
      source: 'CCVX, official source (ccvx.nl)',
      topics: [],
    })),
    cvte: [2025, 2024, 2023].flatMap((y) => [cvte('Wiskunde B', y, 1), cvte('Wiskunde B', y, 2)]),
  },
};

export const SUBJECT_PAGES = {
  phys: 'physics.html', chem: 'chemistry.html', bio: 'biology.html', 'matha': 'math-a.html', 'mathb': 'math-b.html',
};
export const SUBJECT_EXAM_PAGES = {
  phys: 'physics-exams.html', chem: 'chemistry-exams.html', bio: 'biology-exams.html', 'matha': 'math-a-exams.html', 'mathb': 'math-b-exams.html',
};
