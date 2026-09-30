const targets = document.querySelectorAll('.work-card, .case-study, .capability-cards article, .timeline article');

targets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

targets.forEach((el) => observer.observe(el));