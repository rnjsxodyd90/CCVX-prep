// Motion layer: staggered entrances for section parts, triggered once when a
// section scrolls in. Elements only hide when JS is running (html.js-mv), so
// no script means full content. prefers-reduced-motion drops the travel.
(() => {
  const root = document.documentElement;
  root.classList.add('js-mv');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = [...document.querySelectorAll('[data-mv]')];
  if (reduce || !('IntersectionObserver' in window)) {
    root.classList.add('mv-all');
    return;
  }
  els.forEach((el, i) => el.style.setProperty('--mv-d', `${(i % 6) * 75}ms`));
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) {
        en.target.classList.add('mv-on');
        io.unobserve(en.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  els.forEach((el) => io.observe(el));
})();
