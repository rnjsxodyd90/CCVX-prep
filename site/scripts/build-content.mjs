// Builds the website content from the CCVX subject folders.
//
// Copyright guard (Hard rule 1): this script works from an ALLOW LIST, not a
// block list. It only ever reads README.md, notes.md, practice.md and
// mock-exam-*.md. Everything else (exercises.md, spec.*.md, source/, img/,
// syllabus/, ccvx1-*, cvte24-*) can never reach the output. build/sources.json
// records every file that was read, so validate-content.mjs can prove it.
//
// Coordinator contract pins:
//  1. Question ids must be exactly <itemid>-qNN, ascending from q01.
//  2. Single-level subjects (math A/B): a folder with notes.md directly at the
//     subject root is a subdomain; its domain is the first letter of its code.
//  3. Stored HTML is sanitized at build time: no script/iframe/object/embed/form.
//
// Temporary: when a subdomain has no practice.md yet (teachers still writing),
// site/sample-content/<itemId>/practice.md is used as a stand-in and logged.
//
// Outputs (main()): public/content/catalog.json, sample-<subject>.json,
// build/items.json, build/sources.json, functions/config.generated.json.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { marked } from 'marked';
import { SUBJECTS, EXAM_SOURCE } from './content-config.mjs';
import { ACCESS_MONTHS, BUNDLES, activePrices, launchBadge, lookupKeyFor } from './pricing-config.mjs';

const ACTIVE = activePrices(); // launch until the owner flips regular prices on

const ALLOWED_BASENAME = /^README\.md$|^notes\.md$|^practice\.md$|^mock-exam-\d+(-marking-scheme)?\.md$/;
const ALLOWED_PAST_EXAMS = /(^|\/)past-exams\/[a-z0-9-]+\.md$/i;
const EXCLUDED_SEGMENT = new Set(['source', 'img', 'syllabus']);
const EXCLUDED_NAME = /^ccvx1-|^cvte24-/i;

// Pin 3: stored-HTML sanitizer (script/iframe/object/embed/form out, pairs and strays).
export function sanitize(html) {
  return html
    .replace(/<(script|iframe|object|embed|form)\b[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<(script|iframe|object|embed|form)\b[^>]*\/?>/gi, '')
    .replace(/<\/(script|iframe|object|embed|form)\s*>/gi, '');
}

export function buildItems(repoRoot, siteRoot) {
  const sourcesRead = [];
  const warnings = [];

  function readAllowed(rel) {
    const norm = rel.split(path.sep).join('/');
    const parts = norm.split('/');
    const base = parts.at(-1);
    if (!ALLOWED_BASENAME.test(base) && !ALLOWED_PAST_EXAMS.test(norm)) throw new Error(`allow-list violation: ${norm}`);
    if (parts.some((p) => EXCLUDED_SEGMENT.has(p))) throw new Error(`excluded folder: ${norm}`);
    if (EXCLUDED_NAME.test(base)) throw new Error(`excluded name: ${norm}`);
    sourcesRead.push(norm);
    return fs.readFileSync(path.join(repoRoot, rel), 'utf8');
  }
  function tryPractice(rel, itemId) {
    try { return { md: readAllowed(rel), temp: false }; }
    catch (e) {
      if (e.code !== 'ENOENT') throw e;
      const fallback = `sample-content/${itemId}/practice.md`;
      if (fs.existsSync(path.join(siteRoot, fallback))) {
        sourcesRead.push(fallback);
        return { md: fs.readFileSync(path.join(siteRoot, fallback), 'utf8'), temp: true };
      }
      return null;
    }
  }

  // Markdown -> HTML: links to non-shipped files become plain text, images are
  // dropped (text-first v1), and the result is sanitized (pin 3).
  const EXCLUDED_HREF = /(^|\/)exercises\.md$|(^|\/)spec\.[a-z-]*\.md$|\/source\/|\/img\//i;
  // Mermaid guard: mermaid code blocks never render raw in the product.
  // The one calculation scheme lives in chem-c02; it is replaced by an
  // ORIGINAL flat drawing of the standard mole-ratio scheme (not copied from
  // any source). Any other mermaid block is dropped with a warning until the
  // teacher draws an original SVG for it (PLAN.md image rule).
  const CALC_SCHEME_SVG = `<figure class="calcscheme" role="img" aria-label="Every conversion between volume, mass, amount of substance, number of particles, gas volume and concentration runs through the amount of substance n.">
<svg viewBox="0 0 680 250" width="680" height="250" xmlns="http://www.w3.org/2000/svg" font-family="Albert Sans, sans-serif">
  <defs><style>
    .bx { fill: #efefef; } .bx-acc { fill: #b11226; }
    .t { fill: #0a0a0a; font-size: 15px; font-weight: 500; }
    .ta { fill: #ffffff; font-size: 15px; font-weight: 600; }
    .ln { stroke: #efefef; stroke-width: 2; }
    .lb { fill: #b11226; font-size: 13px; font-weight: 600; }
  </style></defs>
  <rect class="bx" x="20" y="92" width="128" height="66"/>
  <text class="t" x="84" y="120" text-anchor="middle">volume</text>
  <text class="t" x="84" y="140" text-anchor="middle">solid / liquid</text>
  <rect class="bx" x="205" y="92" width="100" height="66"/>
  <text class="t" x="255" y="133" text-anchor="middle">mass m</text>
  <rect class="bx-acc" x="362" y="92" width="126" height="66"/>
  <text class="ta" x="425" y="120" text-anchor="middle">amount n</text>
  <text class="ta" x="425" y="140" text-anchor="middle">in mol</text>
  <rect class="bx" x="545" y="92" width="115" height="66"/>
  <text class="t" x="602" y="120" text-anchor="middle">number of</text>
  <text class="t" x="602" y="140" text-anchor="middle">particles N</text>
  <rect class="bx" x="360" y="18" width="130" height="56"/>
  <text class="t" x="425" y="41" text-anchor="middle">gas volume</text>
  <rect class="bx" x="360" y="176" width="130" height="56"/>
  <text class="t" x="425" y="199" text-anchor="middle">solution</text>
  <text class="t" x="425" y="219" text-anchor="middle">volume × c(X)</text>
  <path class="ln" d="M148 125 H205 M176 112 l12 13 -12 13 M181 125 h-0.5"/>
  <path class="ln" d="M305 125 H362 M332 112 l12 13 -12 13 M338 125 h-0.5"/>
  <path class="ln" d="M488 125 H545 M516 112 l12 13 -12 13 M522 125 h-0.5"/>
  <path class="ln" d="M470 74 V92 M483 79 l-13 8 0.7 13"/>
  <path class="ln" d="M425 158 V176"/>
  <text class="lb" x="176" y="102" text-anchor="middle">× ρ</text>
  <text class="lb" x="176" y="160" text-anchor="middle">÷ ρ</text>
  <text class="lb" x="333" y="102" text-anchor="middle">÷ M</text>
  <text class="lb" x="333" y="160" text-anchor="middle">× M</text>
  <text class="lb" x="516" y="102" text-anchor="middle">× N<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text class="lb" x="516" y="160" text-anchor="middle">÷ N<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text class="lb" x="500" y="66" text-anchor="middle">÷ V<tspan baseline-shift="sub" font-size="10">m</tspan> / × V<tspan baseline-shift="sub" font-size="10">m</tspan></text>
  <text class="lb" x="500" y="212" text-anchor="middle">× c / ÷ c</text>
</svg></figure>`;
  const MERMAID_REPLACEMENTS = { 'chem-c02': CALC_SCHEME_SVG };
  const mermaidGuard = (html, ctx) => html.replace(/<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g, () => {
    if (MERMAID_REPLACEMENTS[ctx]) return MERMAID_REPLACEMENTS[ctx];
    warnings.push(`[${ctx}] mermaid block dropped (text-first v1); teacher draws an original SVG instead`);
    return '';
  });

  const md = (text, ctx) => {
    const r = new marked.Renderer();
    r.link = function ({ href, text: t }) {
      if (!href) return t;
      if (/^https?:\/\//.test(href)) return `<a href="${href}" target="_blank" rel="noopener">${t}</a>`;
      warnings.push(`[${ctx}] link to non-shipped file removed: ${href}`);
      return t;
    };
    r.image = function ({ href }) {
      warnings.push(`[${ctx}] image dropped (text-first v1): ${href}`);
      return '';
    };
    return mermaidGuard(sanitize(marked.parse(text, { renderer: r, gfm: true }).trim()), ctx);
  };

  const titleOf = (readmeMd) => {
    const m = readmeMd.match(/^#\s+(.+)$/m);
    if (!m) throw new Error('README without # title');
    return m[1].replace(/—/g, '–').trim();
  };
  const outcomesHtml = (readmeMd, ctx) => {
    const m = readmeMd.match(/^##\s+Learning outcomes[\s\S]*$/im);
    const body = m ? m[0].replace(/^##\s+Learning outcomes[^\n]*\n/i, '').split(/^##\s/m)[0]
      : readmeMd.split(/^##\s+Study material/m)[0];
    return md(body, ctx);
  };

  // Strict practice.md format (site/PLAN.md §4) + pin 1: the i-th question of
  // an item must be exactly <itemid>-qNN (NN = i, zero-padded).
  function parseQuestions(practiceMd, itemId) {
    const ctx = itemId;
    const blocks = practiceMd.split(/^###\s+/m).slice(1);
    return blocks.map((b, i) => {
      const nl = b.indexOf('\n');
      const head = b.slice(0, nl);
      const id = head.split('|')[0].trim();
      const expected = `${itemId}-q${String(i + 1).padStart(2, '0')}`;
      if (id !== expected) {
        throw new Error(`[${ctx}] question ${i + 1} has id "${id}", expected exactly "${expected}" (ids are <itemid>-qNN, ascending)`);
      }
      const parts = Object.fromEntries(head.split('|').slice(1).map((p) => {
        const kv = p.trim().match(/^(\w+)\s+(.+)$/);
        if (!kv) throw new Error(`[${ctx}] bad header field: ${p.trim()}`);
        return [kv[1], kv[2].trim()];
      }));
      const get = (name) => {
        const re = new RegExp(`^####\\s+${name}\\s*$`, 'im');
        const mm = b.match(re);
        if (!mm) return '';
        const rest = b.slice(mm.index + mm[0].length);
        const next = rest.search(/^####\s/m);
        return md(next === -1 ? rest : rest.slice(0, next), `${ctx} ${id}/${name}`);
      };
      const q = {
        id,
        points: parseInt(parts.points, 10),
        outcome: parts.outcome || '',
        difficulty: parts.difficulty || '',
        questionHtml: get('Question'),
        answerHtml: get('Answer'),
        solutionHtml: get('Solution'),
      };
      if (!Number.isInteger(q.points) || q.points <= 0) throw new Error(`[${ctx}] ${id}: bad points`);
      if (!['easy', 'medium', 'hard'].includes(q.difficulty)) throw new Error(`[${ctx}] ${id}: bad difficulty`);
      if (!q.questionHtml || !q.answerHtml || !q.solutionHtml) throw new Error(`[${ctx}] ${id}: missing Question/Answer/Solution`);
      return q;
    });
  }

  // Walkthroughs (Phase 5, PLAN-11b tolerant parser): accepts the teachers'
  // natural format variants. Never edits the teacher files.
  //
  // HEADER: legacy key lines (official:/year:/paper:/answers:) stay valid, or
  //   official title from "# Walkthrough — ..." or a bold "**Official paper:**"/
  //   "**Official title:**" line; year = first YYYY in the first 8 lines (a
  //   range like 2025/2026 takes the first); paper/answers = the first two
  //   http(s) links whose line context matches paper|vragen|question(s) or
  //   uitwerking|antwoord(en)|answer(s)|key|marking.
  // QUESTIONS: split on "## Question N(letter)? (official paper)...". Integers
  //   ascending; letter suffixes share the integer and follow it. Fields:
  //   ask from "**Asked:**" block (or the lead-in paragraphs before the first
  //   bold label); subdomain = first code token of the **Subdomain(s):** block
  //   (markdown links stripped); binas "**BINAS:**" (optional for math);
  //   points from "(N points)" in the header, else a bold "**Points:** N";
  //   mistakes from "**Common mistakes**"/"**Marking:**" or the points-key
  //   block; solution after "**Solution:**"/"**Solution (ours):**"/"**Solve:**";
  //   an "**Answer:**" line is also emitted into answerHtml.
  const SUBJECT_OF = (id) => id.split('-')[0];

  // ---------------- walkthrough parser (PLAN-11b tolerant) ----------------
  // labels may be bold ("**Subdomain:**") or plain ("subdomain:") so the
  // legacy sample files stay valid next to the teacher formats
  const LABEL_RE = /^\s*-?\s*(?:\*\*([^*]{1,60})\*\*|([A-Za-z][A-Za-z ()/]{1,40})[:.])\s*(.*)$/;
  const BOLD = LABEL_RE;
  const normLabel = (l) => l.trim().toLowerCase().replace(/[.:;]+$/, '');

  function parseWtHeader(mdText, itemId) {
    const lines = mdText.split('\n');
    const head = { official: '', year: '', paper: '', answers: '' };
    const kv = (k) => mdText.match(new RegExp(`^${k}:\\s*(.+)$`, 'im'))?.[1].trim();
    head.official = kv('official') || '';
    head.year = kv('year') || '';
    head.paper = kv('paper') || '';
    head.answers = kv('answers') || '';
    if (!head.official) {
      const m = mdText.match(/^\s*-?\s*\*\*Official (title|paper):\*\*\s*(.+)$/im);
      if (m) head.official = m[2].trim();
    }
    let h1Title = '';
    if (!head.official || head.official.startsWith('*')) {
      h1Title = mdText.match(/^#\s+Walkthrough\s*[—–-]\s+(.+)$/m)?.[1] || mdText.match(/^#\s+(.+)$/m)?.[1] || '';
      head.official = h1Title;
    }
    head.official = head.official.replace(/^\*+|\*+$|\(\s*$/, '').trim();
    if (!head.year) {
      const m = lines.slice(0, 8).join('\n').match(/\b((?:19|20)\d{2})\b/);
      if (m) head.year = m[1];
    }
    if (!head.paper || !head.answers) {
      const rest = lines.slice(0, 25);
      const linkList = [...lines.join('\n').matchAll(/\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s>)]+)/g)]
        .filter((m) => m.index < lines.slice(0, 25).join('\n').length)
        .map((m) => ({ text: (m[1] || '').toLowerCase(), line: lines.find((ln) => ln.includes(m[0]))?.toLowerCase() || '', url: (m[2] || m[3]).replace(/[),.;]+$/, '') }));
      const lineOf = (u) => lines.find((ln) => ln.includes(u))?.toLowerCase() || '';
      const withLine = linkList.map((l) => ({ ...l, line: l.line || lineOf(l.url) }));
      const markerOf = (l) => l.text || l.line; // anchor text first; the line for bare URLs
      if (!head.paper) {
        head.paper = withLine.find((l) => /paper|vragen|opgaven|questions/.test(markerOf(l)) && !/answer|key|correctie|uitwerking|antwoord/.test(markerOf(l)))?.url || '';
      }
      if (!head.answers) {
        const ans = withLine.find((l) => /correctievoorschrift/.test(markerOf(l)))
          || withLine.find((l) => /uitwerking|correctie/.test(markerOf(l)))
          || withLine.find((l) => /answers?|antwoord/.test(markerOf(l)) && !/booklet/.test(markerOf(l)))
          || withLine.find((l) => /key|marking/.test(markerOf(l)));
        head.answers = ans?.url || '';
      }
    }
    if (!head.official) throw new Error(`[${itemId}] walkthrough header missing: official title`);
    // year: first YYYY in the first 8 lines; the CCVX sample exams carry no
    // year on the paper, so it stays empty there (never invented).
    if (head.year && !/^(19|20)\d{2}$/.test(head.year)) throw new Error(`[${itemId}] bad year: ${head.year}`);
    return head;
  }

  function parseWtQuestionBlocks(mdText, itemId) {
    // Two proven shapes:
    //   A: "## Question 1 (official paper): title (19 points)" / "## Question 1a (official paper)"
    //   B: "### Q1 (4p) — title" under "## Opgave A — ..." groups (CvTE files)
    const lines = mdText.split('\n');
    const QHDR = /^#{2,3}\s+(?:Question\s+(\d+)([a-zA-Z])?\s+\(official paper\)\s*[:–-]?\s*(.*)|Q(\d+)([a-zA-Z])?(?:\s*\((\d+)\s*(?:p|points)\))?(?:\s*[—–-]\s*(.*))?)\s*$/i;
    const GROUP = /^##\s+Opgave\b/i;
    const intro = [];
    const blocks = [];
    const groups = [];
    let curGroup = null;
    let curQ = null;
    const flushQ = () => { if (curQ) { blocks.push(curQ); curQ = null; } };

    for (const line of lines) {
      const gm = line.match(GROUP);
      if (gm) {
        flushQ();
        curGroup = { body: [] };
        groups.push(curGroup);
        continue;
      }
      const qm = line.match(QHDR);
      if (qm) {
        flushQ();
        const num = Number(qm[1] ?? qm[4]);
        const suffix = qm[2] ?? qm[5] ?? '';
        const headerPoints = qm[6] ? parseInt(qm[6], 10) : (qm[3]?.match(/\((\d+)\s*points\)\s*$/)?.[1] ? parseInt(qm[3].match(/\((\d+)\s*points\)\s*$/)[1], 10) : NaN);
        const title = (qm[3] ?? qm[7] ?? '').replace(/\s*\(\d+\s*(?:p|points)\)\s*$/, '').trim();
        curQ = { num, suffix, title, headerPoints, mc: /\(official paper,\s*mc\)/i.test(qm[0]), body: [], group: curGroup };
        continue;
      }
      if (curQ) curQ.body.push(line);
      else if (curGroup) curGroup.body.push(line);
      else intro.push(line);
    }
    flushQ();
    if (!blocks.length) throw new Error(`[${itemId}] walkthrough without questions`);
    // group-level Subdomains/BINAS inheritance (first code token of the group's bold block)
    for (const g of groups) {
      const text = g.body.join('\n');
      const labelBlock = text.match(/\*\*Subdomains?:\*\*\s*(.+)/i)?.[1] || text;
      g.subdomain = firstCodeToken(labelBlock) || firstCodeToken(text);
      g.binas = text.match(/\*\*BINAS:\*\*\s*(.+)/i)?.[1]?.trim() || '';
    }
    let prev = null;
    for (const b of blocks) {
      if (prev && !(b.num > prev.num || (b.num === prev.num && b.suffix && b.suffix.localeCompare(prev.suffix || '`') > 0))) {
        throw new Error(`[${itemId}] question order must be ascending (1, 1a, 1b, 2a...); found ${prev.num}${prev.suffix} then ${b.num}${b.suffix}`);
      }
      prev = b;
    }
    return { intro: intro.join('\n'), blocks };
  }

  function harvestFields(body) {
    // split multi-bold lines into virtual lines, so "**Subdomains:** X.
    // **BINAS:** g." is harvested as two labels, not one
    const lines = body.split('\n').flatMap((ln) => {
      const pieces = ln.split(/(\*\*[A-Za-z][^*]{1,50}:?\*\*)/);
      if (pieces.length <= 1) return [ln];
      return pieces.reduce((out, p, i) => {
        if (i % 2 === 1 || out.length === 0) out.push(p);
        else out[out.length - 1] += p;
        return out;
      }, ['']).map((x) => x.trim()).filter(Boolean);
    });
    const labelIdx = [];
    lines.forEach((ln, i) => { const m = lines[i].match(LABEL_RE); if (m && /asked|ask|subdomain|binas|solution|solve|method|common mistakes|marking|answer|points/.test(normLabel(m[1] || m[2] || ''))) labelIdx.push(i); });
    const fields = {};
    const takeBlock = (i) => {
      const m = lines[i].match(LABEL_RE);
      const end = labelIdx.find((j) => j > i) ?? lines.length;
      return { label: normLabel(m[1] || m[2] || ''), text: [m[3], ...lines.slice(i + 1, end)].join('\n').trim() };
    };
    for (const i of labelIdx) {
      const { label, text } = takeBlock(i);
      if ((label.startsWith('asked') || label === 'ask') && !fields.ask) fields.ask = text;
      else if (label.startsWith('subdomain') && !fields.subdomain) fields.subdomain = text;
      else if (label === 'binas' && !fields.binas) fields.binas = text;
      else if ((label.startsWith('solution') || label.startsWith('solve') || label.startsWith('method description') || label.startsWith('method')) && !fields.solution) fields.solution = text;
      else if ((label.startsWith('common mistakes') || label === 'mistakes') && !fields.mistakes) fields.mistakes = text;
      else if (label === 'marking' && !fields.mistakes) fields.mistakes = text;
      else if (label.startsWith('answer') && !fields.answer) fields.answer = text;
      else if (label.startsWith('points') && !fields.pointsnote) fields.pointsnote = text;
    }
    if (!fields.ask) {
      const firstLabel = labelIdx[0] ?? lines.length;
      fields.ask = lines.slice(0, firstLabel).join('\n').trim();
    }
    if (!fields.mistakes && fields.pointsnote) fields.mistakes = fields.pointsnote;
    if (fields.solution && !fields.answer) {
      const m = fields.solution.match(/^\s*\*\*Answer:\*\*\s*(.+)$/im);
      if (m) {
        fields.answer = m[1].trim();
        fields.solution = (fields.solution.slice(0, m.index) + '\n' + fields.solution.slice(m.index + m[0].length)).trim();
      }
    }
    // NOTE: inline body tokens (bio's "`bio-b02`") are handled loosely at the
    // question level below, never here: only bold label lines declare fields.
    return fields;
  }

  function firstCodeToken(text = '') {
    const t = String(text || '');
    const pats = [
      /`([a-z]{2,5}-[a-z0-9]+)`/,                                           // backticks: `bio-b01`
      /\[([A-Za-z]?\d{1,3}(?:-basic-\d{1,2})?)\]\(/,                        // [C05](...) or [B07](...)
      /(?<![A-Za-z0-9-])[A-Z]\d{1,3}\b/,                                    // bare code: C05, B11, P11, F1
      /\b(?<![A-Za-z0-9-])([a-z0-9]{1,6}-[a-z0-9-]{2,})\b/,                // bare id: bio-b01, 0-basic-01
    ];
    for (let i = 0; i < pats.length; i++) {
      const m = t.match(pats[i]);
      if (m) return i <= 2 ? (m[1] || m[0]) : m[0];
    }
    return '';
  }

  function resolveSubdomain(code, subject, items, itemId) {
    const low = String(code || '').toLowerCase().replace(/[[\]`]/g, '').trim();
    if (!low) throw new Error(`[${itemId}] question without a subdomain code`);
    const bare = low.startsWith(`${subject}-`) ? low.slice(subject.length + 1) : low;
    const tryIds = low.startsWith(`${subject}-`)
      ? [low]
      : [
          `${subject}-${bare}`,
          `${subject}-${bare.replace(/^0-basic-knowledge-?|^0-basic-?|0-/, '')}`,
          `${subject}-${bare.split(/[\s(,]/)[0]}`,
        ];
    for (const c of tryIds) if (items.some((i) => i.subject === subject && i.kind === 'subdomain' && i.id === c)) return c;
    // cross-subject pool (e.g. math A walkthroughs link a Math B topic on purpose)
    for (const c of tryIds) {
      const bare = c.replace(/^[a-z]+-/, '');
      const cross = items.find((i) => i.kind === 'subdomain' && i.id.endsWith(`-${bare}`));
      if (cross) return cross.id;
    }
    throw new Error(`[${itemId}] cannot place subdomain "${code}" (tried ${tryIds.join(', ')})`);
  }

  function parseWalkthrough(mdText, itemId, items) {
    const cleanText = mdText.replace(/^<!--[\s\S]*?-->/, '');
    const head = parseWtHeader(cleanText, itemId);
    const withoutKeys = cleanText.replace(/^(official|year|paper|answers):\s*.+$/gim, '').trim();
    const { intro, blocks } = parseWtQuestionBlocks(withoutKeys, itemId);
    const subjName = SUBJECT_OF(itemId);
    const h1 = withoutKeys.match(/^#\s+(.+)$/m)?.[1].trim() || '';
    const title = h1.replace(/^Walkthrough\s*[—–-]\s*/i, '').trim() || head.official;
    const introBody = withoutKeys.replace(/^#\s+.*/m, '').split(/^##\s+Question\s+\d+/m)[0].trim();
    const introHtml = introBody ? md(introBody, itemId) : '<p></p>';

    const questions = blocks.map((b, i) => {
      const fields = harvestFields(b.body.join('\n'));
      // points: header "(N points)"/"(Np)" first, else the bold "**Points:** N"
      let points = Number.isInteger(b.headerPoints) ? b.headerPoints : NaN;
      if (!Number.isInteger(points)) {
        const m = (fields.pointsnote || '').match(/^\s*(\d+)\b/);
        points = m ? parseInt(m[1], 10) : NaN;
      }
      // Two sources, different strictness:
      //  1. a declared **Subdomain(s):** label or the group header's code:
      //     resolve it hard, teacher typos must fail the build;
      //  2. inline tokens in the body (bio's "`bio-b02`"): first code-shaped
      //     token that RESOLVES wins; nothing resolves → null + warning.
      let subdomainId = null;
      const declaredTok = firstCodeToken(fields.subdomain) || (b.group?.subdomain || '');
      if (declaredTok) {
        subdomainId = resolveSubdomain(declaredTok, subjName,items, itemId);
      } else {
        const bodyText = b.body.join('\n');
        const looseCand = [
          ...[...bodyText.matchAll(/`([a-z]{2,5}-[a-z0-9]+)`/g)].map((m) => m[1]),
          ...[...bodyText.matchAll(/\[([A-Za-z]?\d{2,3}(?:-basic-\d{1,2})?)\]\([^)]*\)/g)].map((m) => m[1]),
        ];
        for (const cand of looseCand) {
          try { subdomainId = resolveSubdomain(cand, subjName, items, itemId); break; } catch { /* keep looking */ }
        }
      }
      if (!subdomainId) {
        warnings.push(`[${itemId}] question ${i + 1} has no resolvable subdomain code; renders without one`);
      }
      const binas = fields.binas || b.group?.binas || '';
      const ask = fields.ask || b.title;
      const solutionText = fields.solution || fields.answer;
      return {
        id: `${itemId}-q${String(i + 1).padStart(2, '0')}`,
        index: i + 1,
        paperRef: `${b.num}${b.suffix}`,
        title: b.title,
        mc: !!b.mc,
        askHtml: ask ? md(ask, itemId) : '',
        answerHtml: fields.answer ? md(fields.answer, itemId) : '',
        solutionHtml: solutionText ? md(solutionText, itemId) : '',
        mistakesHtml: fields.mistakes ? md(fields.mistakes, itemId) : '',
        subdomainId,
        subdomainText: fields.subdomain || '',
        binas,
        points,
      };
    });
    if (!questions.length) throw new Error(`[${itemId}] walkthrough without questions`);
    return { head, title, introHtml, questions };
  }


  const humanise = (dirName) => dirName.replace(/^[A-Z0]-/, '').replace(/-/g, ' ').replace(/\b\w/g, (c, i) => (i === 0 ? c.toUpperCase() : c));
  const has = (p) => fs.existsSync(p) && fs.statSync(p).isFile();
  const dirsIn = (p) => fs.readdirSync(p).filter((d) => {
    const full = path.join(p, d);
    return fs.statSync(full).isDirectory() && !EXCLUDED_SEGMENT.has(d) && !EXCLUDED_NAME.test(d);
  });

  const items = [];
  for (const subj of SUBJECTS) {
    const subjDir = path.join(repoRoot, subj.dir);
    if (!fs.existsSync(subjDir)) { warnings.push(`[${subj.id}] folder ${subj.dir} does not exist yet: subject listed as in preparation`); continue; }
    let order = 0;

    const addSubdomain = (domainDir, subDirRel, displayDir) => {
      const rel = (f) => path.join(subDirRel, f);
      if (!has(path.join(repoRoot, rel('README.md'))) || !has(path.join(repoRoot, rel('notes.md')))) {
        warnings.push(`[${subj.id}] ${displayDir}: skipped (README.md or notes.md missing)`);
        return;
      }
      const code = displayDir.split('-')[0].toLowerCase();
      const id = `${subj.id}-${code}`;
      const readme = readAllowed(rel('README.md'));
      const notes = readAllowed(rel('notes.md'));
      const prac = tryPractice(rel('practice.md'), id);
      if (prac?.temp) warnings.push(`[${id}] TEMPORARY sample practice.md from site/sample-content (replace when the teacher delivers)`);
      items.push({
        id, subject: subj.id, kind: 'subdomain',
        title: titleOf(readme),
        domain: domainDir.id,
        domainName: domainDir.name,
        order: order += 1,
        free: id === subj.sampleItem,
        grantKeys: [subj.id],
        data: {
          outcomesHtml: outcomesHtml(readme, id),
          notesHtml: md(notes, id),
          questions: prac ? parseQuestions(prac.md, id) : [],
        },
      });
    };

    for (const entry of dirsIn(subjDir)) {
      const entryPath = path.join(subjDir, entry);
      // Pin 2: a folder with notes.md directly at the subject root is a
      // single-level subdomain (math A/B); its domain is its code's first letter.
      if (has(path.join(entryPath, 'notes.md'))) {
        const code = entry.split('-')[0].toLowerCase();
        addSubdomain({ id: code[0].toUpperCase(), name: `Domain ${code[0].toUpperCase()}` }, path.join(subj.dir, entry), entry);
        continue;
      }
      const domain = { id: entry.split('-')[0], name: humanise(entry) };
      for (const sub of dirsIn(entryPath)) {
        addSubdomain(domain, path.join(subj.dir, entry, sub), sub);
      }
    }

    // Mock exams at the subject root: mock-exam-1.md + mock-exam-1-marking-scheme.md
    for (const f of fs.readdirSync(subjDir).filter((f) => /^mock-exam-\d+\.md$/.test(f))) {
      const n = f.match(/\d+/)[0];
      const id = `${subj.id}-mock${n}`;
      const scheme = tryPractice(path.join(subj.dir, `mock-exam-${n}-marking-scheme.md`), id);
      const mockMd = readAllowed(path.join(subj.dir, f));
      items.push({
        id, subject: subj.id, kind: 'mock',
        title: `${subj.name} mock exam ${n}`,
        domain: 'mock', domainName: 'Mock exams',
        order: 1000 + Number(n),
        free: false, grantKeys: [subj.id],
        data: {
          introHtml: md(mockMd.split(/^###\s/m)[0], id),
          durationMinutes: 180,
          questions: parseQuestions(mockMd, id),
          markingSchemeHtml: scheme ? md(scheme.md, id) : '',
        },
      });
    }

  }

  // Walkthroughs run in a SECOND pass: cross-subject references (a Math A
  // walkthrough may link a Math B topic) need the complete pool first.
  for (const subj of SUBJECTS) {
    const subjDir = path.join(repoRoot, subj.dir);
    // Walkthroughs (Phase 5): repo past-exams/*.md, or the temporary
    // site/sample-content fallback until the teachers deliver.
    {
      const peDir = path.join(subjDir, 'past-exams');
      let peFiles = [];
      let peBaseRel = path.join(subj.dir, 'past-exams');
      let tempPe = false;
      if (fs.existsSync(peDir)) {
        peFiles = fs.readdirSync(peDir).filter((f) => /^[a-z0-9-]+\.md$/i.test(f) && !EXCLUDED_NAME.test(f)).sort();
      }
      if (!peFiles.length) {
        const tempDir = path.join(siteRoot, 'sample-content/past-exams');
        const mine = fs.existsSync(tempDir) ? fs.readdirSync(tempDir).filter((f) => f.startsWith(`${subj.id}-`) && f.endsWith('.md')).sort() : [];
        if (mine.length) {
          peFiles = mine;
          peBaseRel = 'sample-content/past-exams';
          tempPe = true;
        }
      }
      let wi = 0;
      for (const f of peFiles) {
        const rel = path.join(peBaseRel, f);
        const slug = f.replace(/\.md$/i, '');
        const id = slug.startsWith(`${subj.id}-`) ? slug : `${subj.id}-${slug}`;
        let raw;
        if (tempPe) {
          sourcesRead.push(rel);
          raw = fs.readFileSync(path.join(siteRoot, rel), 'utf8');
          warnings.push(`[${id}] TEMPORARY sample walkthrough from site/sample-content (replace when the teacher delivers)`);
        } else {
          raw = readAllowed(rel);
        }
        const wt = parseWalkthrough(raw, id, items);
        items.push({
          id, subject: subj.id, kind: 'walkthrough',
          title: wt.title,
          domain: 'past-exams', domainName: 'Past exams',
          order: 900 + (wi += 1),
          free: false, grantKeys: [subj.id],
          data: {
            officialTitle: wt.head.official,
            year: wt.head.year,
            paperUrl: wt.head.paper,
            answersUrl: wt.head.answers,
            introHtml: wt.introHtml,
            questions: wt.questions,
          },
        });
      }
    }
  }

  // Walkthrough subdomain references must exist (resolved during parsing;
  // this double-checks the resolver output across the whole pool).
  const allSubIds = new Set(items.filter((i) => i.kind === 'subdomain').map((i) => i.id));
  for (const it of items.filter((i) => i.kind === 'walkthrough')) {
    for (const q of it.data.questions) {
      if (q.subdomainId && !allSubIds.has(q.subdomainId)) {
        throw new Error(`[${it.id}] ${q.id}: unknown subdomain "${q.subdomainId}"`);
      }
    }
  }

  const ids = new Set();
  for (const it of items) {
    if (ids.has(it.id)) throw new Error(`duplicate item id: ${it.id}`);
    ids.add(it.id);
  }
  return { items, sources: sourcesRead, warnings };
}

export function buildCatalog(items) {
  return {
    generated: new Date().toISOString(),
    pricing: {
      offer: ACTIVE.launch ? 'launch' : 'regular',
      badge: launchBadge(),
      launchEnd: ACTIVE.launchEnd ? ACTIVE.launchEnd.toISOString().slice(0, 10) : null,
      pricePerSubject: ACTIVE.prices.subject,
      bundles: BUNDLES.map((b) => {
        const price = ACTIVE.prices[b.id];
        return { count: b.count, id: b.id, priceEur: price, perSubject: Math.round((price / b.count) * 100) / 100 };
      }),
      vatIncluded: true,
      accessMonths: ACCESS_MONTHS,
    },
    subjects: SUBJECTS.map((s) => {
      const its = items.filter((i) => i.subject === s.id);
      const subs = its.filter((i) => i.kind === 'subdomain').sort((a, b) => a.order - b.order);
      const mocks = its.filter((i) => i.kind === 'mock');
      return {
        id: s.id, name: s.name,
        priceEur: ACTIVE.prices.subject, vatIncluded: true, accessMonths: ACCESS_MONTHS,
        lookupKey: s.lookupKey,
        ready: subs.length > 0,
        exams: s.exams, registrationDeadline: s.registrationDeadline, examSource: EXAM_SOURCE,
        domains: [...new Map(subs.map((i) => [i.domain, i.domainName])).entries()].map(([id, name]) => ({ id, name })),
        subdomains: subs.map((i) => ({ id: i.id, title: i.title, domain: i.domain, questions: i.data.questions.length, free: i.free })),
        mocks: mocks.map((i) => ({ id: i.id, title: i.title, questions: i.data.questions.length, minutes: i.data.durationMinutes })),
        walkthroughs: its.filter((i) => i.kind === 'walkthrough').map((i) => ({ id: i.id, title: i.title, officialTitle: i.data.officialTitle, year: i.data.year, questions: i.data.questions.length })),
        counts: {
          subdomains: subs.length,
          questions: subs.reduce((t, i) => t + i.data.questions.length, 0),
          mocks: mocks.length,
          walkthroughs: its.filter((i) => i.kind === 'walkthrough').length,
          walkthroughQuestions: its.filter((i) => i.kind === 'walkthrough').reduce((t, i) => t + (i.data.questions?.length || 0), 0),
        },
        sampleItemId: s.sampleItem,
      };
    }),
  };
}

function main() {
  const SITE = path.resolve(import.meta.dirname, '..');
  const REPO = process.env.CCVX_REPO || path.resolve(SITE, '..');
  const OUT_PUBLIC = path.join(SITE, 'public/content');
  const OUT_BUILD = path.join(SITE, 'build');
  fs.mkdirSync(OUT_PUBLIC, { recursive: true });
  fs.mkdirSync(OUT_BUILD, { recursive: true });

  const { items, sources, warnings } = buildItems(REPO, SITE);
  const catalog = buildCatalog(items);
  fs.writeFileSync(path.join(OUT_PUBLIC, 'catalog.json'), JSON.stringify(catalog, null, 2));

  for (const s of catalog.subjects) {
    if (!s.sampleItemId) continue;
    const it = items.find((i) => i.id === s.sampleItemId && i.free);
    const samplePath = path.join(OUT_PUBLIC, `sample-${s.id}.json`);
    if (!it) {
      // the sample item does not exist in this tree: clear any stale sample
      // so the page can never show out-of-date free content
      if (fs.existsSync(samplePath)) fs.rmSync(samplePath);
      warnings.push(`[${s.id}] no free sample item yet`);
      continue;
    }
    fs.writeFileSync(path.join(OUT_PUBLIC, `sample-${s.id}.json`), JSON.stringify({
      subject: s.id, itemId: it.id, title: it.title,
      outcomesHtml: it.data.outcomesHtml, notesHtml: it.data.notesHtml,
      // owner-confirmed sample unit: the COMPLETE subdomain, all questions
      questions: it.data.questions,
    }, null, 2));
  }

  fs.writeFileSync(path.join(OUT_BUILD, 'items.json'), JSON.stringify(items, null, 2));
  fs.writeFileSync(path.join(OUT_BUILD, 'sources.json'), JSON.stringify(sources.map((s) => s.split(path.sep).join('/')).sort(), null, 2));
  fs.mkdirSync(path.join(SITE, 'functions'), { recursive: true });
  fs.writeFileSync(path.join(SITE, 'functions/config.generated.json'), JSON.stringify({
    subjects: SUBJECTS.map((s) => ({ id: s.id, lookupKey: s.lookupKey, priceEur: ACTIVE.prices.subject, accessMonths: ACCESS_MONTHS })),
    bundles: BUNDLES.map((b) => ({ id: b.id, count: b.count, lookupKey: lookupKeyFor(b.id), priceEur: ACTIVE.prices[b.id] })),
    priceForCount: { 1: ACTIVE.prices.subject, 2: ACTIVE.prices.bundle2, 3: ACTIVE.prices.bundle3, 5: ACTIVE.prices.bundle5 },
  }, null, 2));

  for (const w of warnings) console.warn('warn:', w);
  console.log(`built ${items.length} items, ${items.filter((i) => i.free).length} free; catalog subjects: ` +
    catalog.subjects.map((s) => `${s.id}(${s.counts.subdomains} sub, ${s.counts.questions} q, ${s.counts.mocks} mock)`).join(' '));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
