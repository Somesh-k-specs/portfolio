// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Skills scroll navigation
  const scroller = document.getElementById('skillsScroll');
  const prev = document.querySelector('.skill-prev');
  const next = document.querySelector('.skill-next');
  const scrollAmount = 260; // px per click

  if (scroller) {
    if (prev) prev.addEventListener('click', () => scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' }));

    // keyboard support when focused
    scroller.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' }); e.preventDefault(); }
      if (e.key === 'ArrowLeft')  { scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); e.preventDefault(); }
    });
  }
});
