// Theme toggle functionality using Font Awesome icons
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');

  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';  // show moon icon
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';   // show sun icon
    localStorage.setItem('theme', 'dark');
  }
}

// Initialize functionality once DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const themeToggle = document.querySelector('.theme-toggle');

  // Apply saved theme and set correct icon
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Attach click handler for theme toggle button
  themeToggle.addEventListener('click', toggleTheme);

  // Smooth scrolling for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active navigation link highlighting on scroll
  const navLinks = document.querySelectorAll('.navbar a:not(.theme-toggle)');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink);
});

const contactToggle = document.querySelector('.contact-toggle');
const contactDropdown = document.querySelector('.contact-dropdown');

if (contactToggle && contactDropdown) {
  contactToggle.addEventListener('click', () => {
    const isOpen = contactDropdown.classList.toggle('open');
    contactToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}