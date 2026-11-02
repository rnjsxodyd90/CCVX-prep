// Landing page: free-sample quiz, subject index preview, catalog counts.
// The block wordmark is shared and lives in js/chrome.js.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Free-sample quiz: three practice questions from the public sample file.
(async () => {
  const box = $('#quiz');
  if (!box) return;
  let sample;
  try {
    const res = await fetch('/content/sample-chem.json');
    if (!res.ok) return;
    sample = await res.json();
  } catch { return; }
  const qs = sample.questions.slice(0, 3);
  let i = 0;

  const marksLine = (q) => `${q.points} ${q.points === 1 ? 'mark' : 'marks'} when every step is right.`;
  const render = () => {
    const q = qs[i];
    box.innerHTML = `
      <h2>Question ${i + 1} of 3 · ${q.outcome}</h2>
      <div class="quiz-meta">${sample.title} · ${q.difficulty}</div>
      <div class="quiz-body content">${q.questionHtml}</div>
      <label class="sr-only" for="quiz-answer">Your answer</label>
      <textarea id="quiz-answer" placeholder="Work it out here, like you would on paper."></textarea>
      <button class="btn" type="button" data-show>Compare with the worked answer</button>
      <div class="quiz-result" hidden>
        <p class="marks">${marksLine(q)}</p>
        <div class="content">${q.solutionHtml}</div>
        <div class="content" style="margin-top:10px"><strong>Answer:</strong> ${q.answerHtml}</div>
        <div class="quiz-nav">
          <button type="button" data-again>Try once more</button>
          ${i < qs.length - 1 ? '<button type="button" data-next>Next question</button>'
                            : '<a class="btn" href="chemistry.html">See the Chemistry course</a>'}
        </div>
      </div>`;
    $('[data-show]', box).addEventListener('click', (e) => {
      e.target.hidden = true;
      $('#quiz-answer', box).disabled = true;
      $('.quiz-result', box).hidden = false;
    });
    $('[data-again]', box)?.addEventListener('click', render);
    $('[data-next]', box)?.addEventListener('click', () => { i += 1; render(); });
  };

  // First paint: the start tile; the first question opens on click.
  box.innerHTML = `
    <h2>From Chemistry C02: chemical calculations</h2>
    <p class="quiz-meta">Three practice questions from the free Chemistry sample. Write your answer, then compare it with the worked solution and the marking points.</p>
    <button class="btn" type="button" data-start>Start with question 1</button>`;
  box.querySelector('[data-start]').addEventListener('click', render);
})();

// Subject index with preview.
(() => {
  const rows = $$('#subjectIndex [data-pv]');
  const figs = $$('.index-preview [data-pv]');
  if (!rows.length || !figs.length) return;
  const set = (pv) => figs.forEach((f) => f.classList.toggle('on', f.dataset.pv === pv));
  rows.forEach((r) => {
    r.addEventListener('mouseenter', () => set(r.dataset.pv));
    r.addEventListener('focus', () => set(r.dataset.pv));
    r.addEventListener('click', () => set(r.dataset.pv));
  });
})();

// Catalog counts (subdomains per subject) + the launch-offer badge, straight
// from the built catalog (the ONE pricing config at build time).
(async () => {
  try {
    const cat = await (await fetch('/content/catalog.json')).json();
    const n = (id) => cat.subjects.find((s) => s.id === id)?.counts.subdomains;
    for (const [sel, val] of [['[data-count-chem-sub]', n('chem')], ['[data-count-bio-sub]', n('bio')]]) {
      $$(sel).forEach((el) => { if (val) el.textContent = val; });
    }
    if (cat.pricing?.badge) {
      for (const el of $$('#launchBadgeHero, [data-launch-badge]')) el.textContent = cat.pricing.badge;
    }
  } catch { /* counts and badge stay as written */ }
})();
