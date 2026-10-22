/**
 * وسائط تعليمية: tabs (tests / exercises / lessons) + stage filter + search.
 * Tabs follow the URL hash (#tests, #exercises, #lessons) so menu links open the right tab.
 */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.lr-tab'));
  const stages = Array.from(document.querySelectorAll('.lr-stage'));
  const items = Array.from(document.querySelectorAll('.lr-item'));
  const search = document.getElementById('lr-search');
  const empty = document.querySelector('.lr-empty');
  if (!tabs.length) return;

  const state = { tab: 'tests', stage: 'all', query: '' };

  // Item counts on each tab
  tabs.forEach(tab => {
    const count = items.filter(i => i.dataset.type === tab.dataset.tab).length;
    const label = tab.querySelector('[data-count]');
    if (label) label.textContent = `${count} موارد`;
  });

  const render = () => {
    tabs.forEach(t => {
      const on = t.dataset.tab === state.tab;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on);
    });
    stages.forEach(s => s.classList.toggle('active', s.dataset.stage === state.stage));

    let shown = 0;
    items.forEach(item => {
      const match =
        item.dataset.type === state.tab &&
        (state.stage === 'all' || item.dataset.stage.split(' ').includes(state.stage)) &&
        (!state.query || item.textContent.includes(state.query));
      item.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    empty.style.display = shown ? 'none' : 'block';
  };

  const fromHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (tabs.some(t => t.dataset.tab === hash)) state.tab = hash;
  };

  tabs.forEach(tab => tab.addEventListener('click', () => {
    state.tab = tab.dataset.tab;
    history.replaceState(null, '', `#${state.tab}`);
    render();
  }));

  stages.forEach(stage => stage.addEventListener('click', () => {
    state.stage = stage.dataset.stage;
    render();
  }));

  search.addEventListener('input', () => {
    state.query = search.value.trim();
    render();
  });

  window.addEventListener('hashchange', () => {
    fromHash();
    render();
  });

  fromHash();
  render();
});
