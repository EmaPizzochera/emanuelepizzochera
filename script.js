function setTheme(theme) {
  const themeToggle = document.querySelector('.theme-toggle');
  const toggleLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  if (theme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }

  themeToggle?.setAttribute('aria-label', toggleLabel);
  themeToggle?.setAttribute('title', toggleLabel);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeToggle = document.querySelector('.theme-toggle');
  const contactToggle = document.querySelector('.contact-toggle');
  const contactDropdown = document.querySelector('.contact-dropdown');

  setTheme(savedTheme === 'dark' ? 'dark' : 'light');

  themeToggle?.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });

  contactToggle?.addEventListener('click', () => {
    const isOpen = contactDropdown?.classList.toggle('open') ?? false;
    contactToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');

      if (!targetId || targetId === '#') {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
