// MetaVerse Marketer — Main JS
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Pricing toggle
  const pricingToggles = document.querySelectorAll('.pricing-toggle button');
  const pricingGroups = document.querySelectorAll('.pricing-group');
  pricingToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      pricingToggles.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.target;
      pricingGroups.forEach(g => {
        g.classList.toggle('active', g.id === target);
      });
    });
  });
});
