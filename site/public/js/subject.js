// Subject page: renders the baked-in free sample (complete subdomain).
const $ = (s, r = document) => r.querySelector(s);

(() => {
  const box = $('#sampleBody');
  const dataEl = $('#sampleData');
  if (!box || !dataEl) return;
  const sample = JSON.parse(dataEl.textContent);

  const q = sample.questions.map((question, i) => `
    <article class="sa-q" id="${question.id}">
      <header class="sa-qhead">
        <span class="sa-qn">Question ${i + 1}</span>
        <span class="sa-meta">${question.points} ${question.points === 1 ? 'point' : 'points'} · ${question.difficulty} · ${question.outcome}</span>
      </header>
      <div class="sa-qbody">${question.questionHtml}</div>
      <details class="sa-sol">
        <summary>Show the worked answer<span class="plus"></span></summary>
        <div class="sa-solbody">
          <div class="sa-solsteps">${question.solutionHtml}</div>
          <p class="sa-ans">Answer: ${question.answerHtml}</p>
        </div>
      </details>
    </article>`).join('\n');

  box.innerHTML = `
    <section class="sa-notes">
      <h3>Notes</h3>
      <div class="sa-notesbody">${sample.notesHtml.replace(/^<h1>(.*?)<\/h1>/, '<h2>$1</h2>')}</div>
    </section>
    <section class="sa-practice">
      <h3>Practice questions (${sample.questions.length})</h3>
      ${q}
    </section>`;
})();
