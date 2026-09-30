const targets = document.querySelectorAll(
  '.showcase-card, .experience-row, .skills-grid, .hero-copy, .hero-photo'
);

targets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

targets.forEach((el) => observer.observe(el));

const toggle = document.querySelector('.nav-toggle');
const aside = document.querySelector('.portfolio-aside');
const asideLinks = document.querySelectorAll('.aside-nav a');

if (toggle && aside) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  asideLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = [...document.querySelectorAll('main section[id], main#top')];
const navLinks = [...document.querySelectorAll('.aside-nav a')];

const setActive = () => {
  let current = '#top';
  const y = window.scrollY + 180;

  document.querySelectorAll('main section[id]').forEach((section) => {
    if (section.offsetTop <= y) current = '#' + section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === current);
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();