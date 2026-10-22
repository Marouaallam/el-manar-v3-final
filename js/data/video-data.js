/**
 * ألبوم الفيديو – video list used by video-album.html (grid) and video-watch.html (player).
 *
 * To add a video: copy one entry.
 *   id        unique, latin letters (video-watch.html?v=<id>)
 *   youtube   the YouTube video id, e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ use 'dQw4w9WgXcQ'
 *             (leave '' until the video is published – the page then shows the thumbnail with "قريباً")
 *   thumb     thumbnail image
 *   category  one of the keys in VIDEO_CATEGORIES
 */
window.VIDEO_CATEGORIES = {
  events: 'حفلات ومناسبات',
  activities: 'أنشطة',
  sports: 'رياضة',
  creations: 'إبداعات التلاميذ'
};

// SAMPLE videos – replace titles/thumbnails and add the real YouTube ids
window.VIDEOS = [
  {
    id: 'end-of-year',
    youtube: '',
    title: 'حفل نهاية السنة الدراسية',
    category: 'events',
    duration: '3:45',
    thumb: 'assets/images/life6.jpeg',
    description: 'لقطات من حفل تكريم المتفوقين وفقرات التلاميذ الفنية.'
  },
  {
    id: 'drawing-workshop',
    youtube: '',
    title: 'ورشة الرسم والألوان',
    category: 'activities',
    duration: '2:10',
    thumb: 'assets/images/life3.jpeg',
    description: 'تلاميذ الطور الابتدائي في ورشة فنية للتعبير بالألوان.'
  },
  {
    id: 'sports-tournament',
    youtube: '',
    title: 'الدورة الرياضية المدرسية',
    category: 'sports',
    duration: '4:30',
    thumb: 'assets/images/life2.jpeg',
    description: 'أجواء المنافسة والروح الرياضية في دورة كرة القدم بين الأقسام.'
  },
  {
    id: 'science-club',
    youtube: '',
    title: 'عرض مشروع نادي العلوم',
    category: 'creations',
    duration: '1:55',
    thumb: 'assets/images/life5.jpeg',
    description: 'تلاميذ نادي العلوم يشرحون مشروعهم حول الطاقة المتجددة.'
  },
  {
    id: 'little-chef',
    youtube: '',
    title: 'ورشة الطاهي الصغير',
    category: 'activities',
    duration: '2:40',
    thumb: 'assets/images/life1.jpeg',
    description: 'تجربة ممتعة في الطبخ والعمل الجماعي لتلاميذ الابتدائي.'
  },
  {
    id: 'quarter-century',
    youtube: '',
    title: 'ربع قرن من العطاء',
    category: 'events',
    duration: '5:05',
    thumb: 'assets/images/life0.jpeg',
    description: 'فيديو بمناسبة الذكرى الخامسة والعشرين لانطلاق التعليم بمركب المنار.'
  }
];

window.videoUrl = (v) => `video-watch.html?v=${encodeURIComponent(v.id)}`;
window.videoEsc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
