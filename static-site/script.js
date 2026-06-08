(function () {
  const cta = document.getElementById('floatingCta');
  if (!cta) return;

  let timeoutId = null;

  const handleScroll = () => {
    cta.classList.add('is-hidden');

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      cta.classList.remove('is-hidden');
    }, 180);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
})();
