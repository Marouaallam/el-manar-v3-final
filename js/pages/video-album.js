/**
 * ألبوم الفيديو – YouTube-style grid with category chips (data: js/video-data.js).
 */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('yt-grid');
  const chips = document.getElementById('yt-chips');
  if (!grid || !window.VIDEOS) return;
  const esc = window.videoEsc;

  const card = (v) => `
    <a class="yt-card" href="${window.videoUrl(v)}" data-cat="${v.category}">
      <div class="yt-thumb">
        <img src="${esc(window.siteUrl(v.thumb))}" alt="" loading="lazy">
        <span class="yt-duration">${esc(v.duration)}</span>
      </div>
      <div class="yt-info">
        <img class="yt-avatar" src="${window.siteUrl('assets/images/logos/logo.svg')}" alt="">
        <div>
          <h3 class="yt-title">${esc(v.title)}</h3>
          <p class="yt-meta">مدرسة المنار · ${esc(window.VIDEO_CATEGORIES[v.category] || '')}</p>
        </div>
      </div>
    </a>`;

  grid.innerHTML = window.VIDEOS.map(card).join('');

  // chips: الكل + one per category that has videos
  const used = [...new Set(window.VIDEOS.map(v => v.category))];
  chips.innerHTML = [`<button class="yt-chip active" data-filter="all">الكل</button>`]
    .concat(used.map(c => `<button class="yt-chip" data-filter="${c}">${esc(window.VIDEO_CATEGORIES[c])}</button>`))
    .join('');

  chips.addEventListener('click', (e) => {
    const chip = e.target.closest('.yt-chip');
    if (!chip) return;
    chips.querySelectorAll('.yt-chip').forEach(c => c.classList.toggle('active', c === chip));
    const f = chip.dataset.filter;
    grid.querySelectorAll('.yt-card').forEach(el => {
      el.style.display = f === 'all' || el.dataset.cat === f ? '' : 'none';
    });
  });
});
