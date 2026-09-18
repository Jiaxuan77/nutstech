/* Progressive enhancement: content stays readable without JavaScript. */
(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll('[data-scroll-reveal] h1, [data-scroll-reveal] p');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('reveal-pending');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });

  elements.forEach((element) => {
    // Brief stagger within programme rows; never delay essential reading.
    const delay = element.matches('.programme-meta') ? 70
      : element.matches('.programme-desc') ? 140 : 0;
    element.style.setProperty('--reveal-delay', `${delay}ms`);
    element.classList.add('scroll-reveal', 'reveal-pending');
    observer.observe(element);
  });

  const showAll = () => {
    observer.disconnect();
    elements.forEach((element) => element.classList.remove('reveal-pending'));
  };
  motion.addEventListener('change', (event) => {
    if (event.matches) showAll();
  });
  window.addEventListener('beforeprint', showAll);
})();
