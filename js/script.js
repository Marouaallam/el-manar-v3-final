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

// Mobile Dropdown Chevron Click Toggle
document.querySelectorAll('.dropdown-chevron').forEach(chevron => {
  chevron.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      e.stopPropagation();
      const parent = chevron.closest('.has-dropdown');
      if (parent) {
        parent.classList.toggle('open');
      }
    }
  });
});

// Fast Animated Counter for Statistics Section
const initStatCounters = () => {
  const statNumbers = document.querySelectorAll('.stat-card .num[data-target]');
  if (!statNumbers.length) return;

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numEl = entry.target;
        const target = parseInt(numEl.getAttribute('data-target'), 10);
        const prefix = numEl.getAttribute('data-prefix') || '';
        const suffix = numEl.getAttribute('data-suffix') || '';

        if (isNaN(target)) return;

        const duration = 1600; // 1.6 seconds fast count up
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Easing out cubic for fast start and smooth slowing down at target
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeOut * target);

          numEl.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            numEl.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
            numEl.classList.add('count-done');
          }
        };

        requestAnimationFrame(updateCount);
        observer.unobserve(numEl);
      }
    });
  }, { threshold: 0.25 });

  statNumbers.forEach(num => statsObserver.observe(num));
};

// Site Preloader Animation
const initPreloader = () => {
  const loader = document.getElementById('site-loader');
  if (!loader) return;

  // Lock scroll during preloader animation
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    loader.classList.add('fade-out');
    document.body.style.overflow = '';
  }, 2300);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initStatCounters();
  });
} else {
  initPreloader();
  initStatCounters();
}


