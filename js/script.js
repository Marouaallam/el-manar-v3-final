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

// Smooth scroll to top when clicking home/brand links while already on the landing page
const initHomeNavScroll = () => {
  const isIndexPage = window.location.pathname.endsWith('index.html') || 
                      window.location.pathname.endsWith('/') || 
                      window.location.pathname === '';
  if (!isIndexPage) return;

  document.querySelectorAll('a[href="index.html"], a[href="./"], a.brand').forEach(link => {
    link.addEventListener('click', (e) => {
      if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
};

// Smooth Page Switch Transition
const initPageTransitions = () => {
  // Prevent bfcache issues when navigating with browser back/forward buttons
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-exit');
    const bar = document.getElementById('page-progress-bar');
    if (bar) {
      bar.style.transform = 'scaleX(0)';
      bar.style.opacity = '0';
    }
  });

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented) return;

    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Ignore in-page anchors, JS links, email, phone, downloads, new tabs, modifier keys
    if (
      href.startsWith('#') ||
      href.startsWith('javascript:') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.target === '_blank' ||
      link.hasAttribute('download') ||
      e.ctrlKey || e.metaKey || e.shiftKey || e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    // Parse target URL
    let targetUrl;
    try {
      targetUrl = new URL(link.href, window.location.href);
    } catch (err) {
      return;
    }

    // Only handle internal links on the same origin or file protocol
    const isSameOrigin = (targetUrl.origin === window.location.origin) ||
                         (targetUrl.protocol === window.location.protocol && window.location.protocol === 'file:');
    if (!isSameOrigin) return;

    // If anchor on current page (e.g. page.html#section)
    if (targetUrl.pathname === window.location.pathname && targetUrl.hash) {
      return;
    }

    // If clicking home link while already on index page
    const isCurrentIndex = window.location.pathname.endsWith('index.html') || 
                          window.location.pathname.endsWith('/') || 
                          window.location.pathname === '';
    const isTargetIndex = targetUrl.pathname.endsWith('index.html') || 
                          targetUrl.pathname.endsWith('/') || 
                          targetUrl.pathname === '';
    if (isCurrentIndex && isTargetIndex && !targetUrl.hash) {
      return;
    }

    // Initiate smooth page exit
    e.preventDefault();

    let bar = document.getElementById('page-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'page-progress-bar';
      document.body.appendChild(bar);
    }

    bar.style.opacity = '1';
    bar.style.transform = 'scaleX(1)';
    document.body.classList.add('page-exit');

    setTimeout(() => {
      window.location.href = link.href;
    }, 180);
  });
};

// Scattered gallery cards straighten as the gallery scrolls up into view
const initGalleryScatter = () => {
  const gallery = document.querySelector('.gallery-scatter');
  if (!gallery) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gallery.style.setProperty('--k', 0);
    return;
  }

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    const top = gallery.getBoundingClientRect().top;
    // top at bottom of screen → fully scattered (1); top at 35% of screen → aligned (0)
    const k = Math.min(1, Math.max(0, (top - vh * 0.35) / (vh * 0.65)));
    gallery.style.setProperty('--k', k.toFixed(3));
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initStatCounters();
    initHomeNavScroll();
    initPageTransitions();
    initGalleryScatter();
  });
} else {
  initStatCounters();
  initHomeNavScroll();
  initPageTransitions();
  initGalleryScatter();
}


