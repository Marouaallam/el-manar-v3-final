/**
 * Simple category filter for the فضاء الإبداع pages.
 * Markup: a .cs-chips container with buttons [data-filter="all" | "<cat>"],
 * followed by items carrying data-cat="<cat>" inside [data-filter-items].
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cs-chips').forEach(chips => {
    const list = document.querySelector(chips.dataset.target || '[data-filter-items]');
    if (!list) return;
    const items = Array.from(list.querySelectorAll('[data-cat]'));
    const empty = document.querySelector(chips.dataset.empty || '.cs-empty');

    chips.addEventListener('click', (e) => {
      const chip = e.target.closest('.cs-chip');
      if (!chip) return;

      chips.querySelectorAll('.cs-chip').forEach(c => c.classList.toggle('active', c === chip));
      const cat = chip.dataset.filter;
      let shown = 0;
      items.forEach(item => {
        const match = cat === 'all' || item.dataset.cat.split(' ').includes(cat);
        item.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (empty) empty.style.display = shown ? 'none' : 'block';
    });
  });
});
