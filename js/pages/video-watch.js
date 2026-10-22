/**
 * Watch page – big player + "up next" list (data: js/video-data.js).
 * URL: video-watch.html?v=<id>
 */
document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('yt-player');
  const details = document.getElementById('yt-details');
  const list = document.getElementById('yt-list');
  if (!player || !window.VIDEOS || !window.VIDEOS.length) return;
  const esc = window.videoEsc;

  const id = new URLSearchParams(window.location.search).get('v');
  const video = window.VIDEOS.find(v => v.id === id) || window.VIDEOS[0];
  const category = window.VIDEO_CATEGORIES[video.category] || '';

  document.title = `${video.title} – ألبوم الفيديو – مدرسة المنار`;

  // player: real YouTube embed when an id is set, otherwise the thumbnail + "قريباً"
  player.innerHTML = video.youtube
    ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.youtube)}?autoplay=1&rel=0"
         title="${esc(video.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>`
    : `<img src="${esc(window.siteUrl(video.thumb))}" alt="">
       <div class="yt-soon">
         <span class="yt-soon-play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>
         <span>سيتم نشر هذا الفيديو قريباً</span>
       </div>`;

  details.innerHTML = `
    <h1 class="yt-watch-title">${esc(video.title)}</h1>
    <div class="yt-channel">
      <img class="yt-avatar" src="${window.siteUrl('assets/images/logos/logo.svg')}" alt="">
      <div>
        <strong>مدرسة المنار</strong>
        <span>${esc(category)}</span>
      </div>
      <a href="${window.siteUrl('pages/creative/video-album.html')}" class="yt-back">ألبوم الفيديو ←</a>
    </div>
    <div class="yt-description">
      <span class="yt-desc-meta">${esc(category)} · ${esc(video.duration)}</span>
      <p>${esc(video.description || '')}</p>
    </div>`;

  // up next: every other video, same category first
  const others = window.VIDEOS.filter(v => v.id !== video.id)
    .sort((a, b) => (b.category === video.category) - (a.category === video.category));

  list.innerHTML = others.map(v => `
    <a class="yt-next" href="${window.videoUrl(v)}">
      <div class="yt-thumb">
        <img src="${esc(window.siteUrl(v.thumb))}" alt="" loading="lazy">
        <span class="yt-duration">${esc(v.duration)}</span>
      </div>
      <div>
        <h3 class="yt-title">${esc(v.title)}</h3>
        <p class="yt-meta">مدرسة المنار</p>
        <p class="yt-meta">${esc(window.VIDEO_CATEGORIES[v.category] || '')}</p>
      </div>
    </a>`).join('');
});
