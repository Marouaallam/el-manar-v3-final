/**
 * Details page for a فضاء الإبداع example: creative-item.html?id=<id>
 * Content comes from js/creative-data.js.
 */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('ci-root');
  if (!root || !window.CREATIVE_ITEMS) return;

  const id = new URLSearchParams(window.location.search).get('id');
  let item = null;
  let sectionKey = null;
  Object.entries(window.CREATIVE_ITEMS).forEach(([key, list]) => {
    const found = list.find(i => i.id === id);
    if (found) { item = found; sectionKey = key; }
  });

  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const hero = document.querySelector('.subpage-hero');

  if (!item) {
    hero.querySelector('h1').textContent = 'العنصر غير موجود';
    hero.querySelector('p').textContent = '';
    root.innerHTML = `<p class="ci-missing">لم نعثر على هذا العنصر. <a href="${window.siteUrl('index.html')}" class="cs-link">العودة إلى الرئيسية ←</a></p>`;
    return;
  }

  const section = window.CREATIVE_SECTIONS[sectionKey];
  document.title = `${item.title} – مدرسة المنار`;
  hero.querySelector('h1').textContent = item.title;
  hero.querySelector('p').textContent = section.name;
  const crumb = hero.querySelector('.breadcrumb');
  crumb.innerHTML = `<a href="${window.siteUrl('index.html')}">الرئيسية</a> / <a href="${window.siteUrl(section.page)}">${esc(section.name)}</a> / <span>${esc(item.title)}</span>`;

  const visual = item.image
    ? `<img class="ci-image${item.fit === 'contain' ? ' is-contain' : ''}" src="${esc(window.siteUrl(item.image))}" alt="${esc(item.title)}">`
    : `<div class="cs-detail-icon">${window.CREATIVE_ICONS[item.icon] || window.CREATIVE_ICONS.pen}</div>`;

  // body: string = paragraph, '## …' = sub-heading, array = bullet list
  const body = (item.body || [item.excerpt]).map(p => {
    if (Array.isArray(p)) return `<ul class="ci-list">${p.map(li => `<li>${esc(li)}</li>`).join('')}</ul>`;
    if (p.startsWith('## ')) return `<h3 class="ci-heading">${esc(p.slice(3))}</h3>`;
    return `<p>${esc(p)}</p>`;
  }).join('');

  root.innerHTML = `
    <div class="cs-detail-head${item.image ? ' with-image' : ''}">
      ${visual}
      <div>
        <p class="cs-detail-sub">${esc(item.title)}</p>
        <div class="cs-detail-meta"><span>${esc(item.meta || '')}</span></div>
      </div>
    </div>
    ${body}
    <div class="cs-detail-links">
      <a href="${window.siteUrl(section.page)}" class="cs-link">العودة إلى ${esc(section.name)} ←</a>
    </div>`;
});
