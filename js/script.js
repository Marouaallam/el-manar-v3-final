// Scroll Reveal Observer
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
  });
}

// Mobile Dropdown Click Toggle
document.querySelectorAll('.has-dropdown > a').forEach(dropdownLink => {
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const parent = dropdownLink.parentElement;
      parent.classList.toggle('open');
    }
  });
});
