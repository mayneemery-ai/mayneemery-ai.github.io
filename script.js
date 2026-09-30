const targets = document.querySelectorAll(
  '.showcase-card, .experience-row, .skills-grid'
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