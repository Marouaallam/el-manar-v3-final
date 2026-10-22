/**
 * Home page – فضاء الإبداع cards cycle through their section's examples
 * (from js/creative-data.js). Each example shows its own picture (item.image)
 * or its icon, and the card links to the example currently shown.
 * Markup: <a class="ch-card" data-rotate="models|contributions|creations|publications">
 * Without JavaScript the card keeps its original photo and text.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (!window.CREATIVE_ITEMS) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const INTERVAL = 5000;

  document.querySelectorAll('.ch-card[data-rotate]').forEach((card, cardIndex) => {
    const key = card.dataset.rotate;
    const items = window.CREATIVE_ITEMS[key] || [];
    const section = window.CREATIVE_SECTIONS[key];
    const text = card.querySelector('.ch-photo-text');
    if (!items.length || !text) return;

    // switch the card to the rotating layout
    card.classList.add('ch-rotating');
    card.querySelectorAll(':scope > img, :scope > .ch-icon').forEach(el => el.remove());
    const oldBadge = text.querySelector('.ch-badge');
    if (oldBadge) oldBadge.remove();

    const kicker = document.createElement('span');
    kicker.className = 'ch-kicker';
    kicker.textContent = section.name;
    card.prepend(kicker);

    const visual = document.createElement('div');
    visual.className = 'ch-visual';
    card.prepend(visual);

    const title = text.querySelector('h4');
    const desc = text.querySelector('p');
    const more = text.querySelector('.ch-more');

    // footer row: "read more" + dots
    const foot = document.createElement('div');
    foot.className = 'ch-foot';
    if (more) foot.appendChild(more);
    text.appendChild(foot);

    let dots = [];
    if (items.length > 1) {
      const dotWrap = document.createElement('div');
      dotWrap.className = 'ch-dots';
      dots = items.map((_, i) => {
        const d = document.createElement('button');
        d.type = 'button';
        d.setAttribute('aria-label', `العنصر ${i + 1}`);
        d.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          show(i);
          restart();
        });
        dotWrap.appendChild(d);
        return d;
      });
      foot.appendChild(dotWrap);
    }

    let current = 0;
    const show = (i) => {
      current = (i + items.length) % items.length;
      const item = items[current];
      card.classList.add('is-changing');
      setTimeout(() => {
        title.textContent = item.title;
        if (desc) desc.textContent = item.excerpt;
        if (more) more.textContent = 'اقرأ المزيد ←';
        if (item.image && item.fit !== 'contain') {
          // photos fill the whole card
          visual.className = 'ch-visual is-cover';
          visual.innerHTML = `<img src="${window.siteUrl(item.image)}" alt="">`;
        } else if (item.image) {
          // book covers etc. stay whole in a small frame
          visual.className = 'ch-visual is-image';
          visual.innerHTML = `<img src="${window.siteUrl(item.image)}" alt="">`;
        } else {
          visual.className = 'ch-visual is-icon';
          visual.innerHTML = window.CREATIVE_ICONS[item.icon] || window.CREATIVE_ICONS.pen;
        }
        // book covers stand large on the side; text keeps to the other side
        card.classList.toggle('has-side-image', Boolean(item.image && !item.lowres && item.fit === 'contain'));
        card.href = window.creativeItemUrl(item);
        dots.forEach((d, n) => d.classList.toggle('active', n === current));
        card.classList.remove('is-changing');
      }, reduceMotion ? 0 : 250);
    };

    let timer = null;
    const start = () => {
      if (reduceMotion || items.length < 2) return;
      stop();
      timer = setInterval(() => show(current + 1), INTERVAL);
    };
    const stop = () => clearInterval(timer);
    const restart = () => { stop(); start(); };

    card.addEventListener('mouseenter', stop);
    card.addEventListener('mouseleave', start);
    card.addEventListener('focusin', stop);
    card.addEventListener('focusout', start);

    show(0);
    // stagger the cards so they don't all change at the same moment
    setTimeout(start, cardIndex * 1200);
  });
});
