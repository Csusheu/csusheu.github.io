const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const currentYear = document.querySelector('#current-year');
const filterButtons = document.querySelectorAll('.filter-button');
const notes = document.querySelectorAll('.note-row');
const navLinks = document.querySelectorAll('.nav-link');

currentYear.textContent = new Date().getFullYear();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggle.setAttribute('aria-label', isDark ? '切换浅色模式' : '切换深色模式');
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '◑' : '◐';
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    notes.forEach((note) => {
      note.hidden = filter !== 'all' && note.dataset.category !== filter;
    });
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach((section) => observer.observe(section));
