/**
 * فضاء الإبداع – shared examples.
 * Used by the home page rotating cards (creative-rotator.js) and the details page (creative-item.js).
 *
 * To add an example: copy an item into the right list.
 *   id      unique, latin letters (used in creative-item.html?id=...)
 *   url     optional – a dedicated page; otherwise creative-item.html?id=<id> is used
 *   image   optional – picture for the details page (fills the frame; good for photos of people)
 *   fit     optional – 'contain' to show the whole picture uncropped (use for book covers)
 *   icon    optional – 'woman' | 'medal' | 'calc' | 'pen' | 'book' | 'person'
 *   body    paragraphs shown on the details page
 */
window.CREATIVE_SECTIONS = {
  models: { name: 'نماذج ملهمة', page: 'role-models.html' },
  contributions: { name: 'إسهامات', page: 'contributions.html' },
  creations: { name: 'إبداعات', page: 'student-creations.html' },
  publications: { name: 'إصدارات', page: 'publications.html' }
};

window.CREATIVE_ITEMS = {
  models: [
    {
      id: 'aicha',
      url: 'role-model-aicha.html',
      title: 'الفاضلة عائشة بن كاسي أولاد بهون',
      meta: '1870 – 1968',
      icon: 'woman',
      excerpt: 'والدة الإمام الشيخ إبراهيم بيوض، عُرفت بالذكاء والحزم وقوة الشخصية، وأبدعت في الشعر الشعبي والنسج.'
    },
    {
      id: 'emir-abdelkader',
      title: 'الأمير عبد القادر',
      meta: '1808 – 1883',
      icon: 'person',
      excerpt: 'مؤسس الدولة الجزائرية الحديثة وقائد المقاومة الشعبية ضد الاحتلال الفرنسي.',
      body: ['مؤسس الدولة الجزائرية الحديثة وقائد المقاومة الشعبية ضد الاحتلال الفرنسي، عالم وشاعر عُرف بشجاعته ونبله وإنسانيته.']
    },
    {
      id: 'ben-badis',
      image: 'assets/images/figure-ben-badis.jpg',
      title: 'عبد الحميد بن باديس',
      meta: '1889 – 1940',
      icon: 'person',
      excerpt: 'رائد النهضة الإصلاحية ومؤسس جمعية العلماء المسلمين الجزائريين.',
      body: ['رائد النهضة الإصلاحية ومؤسس جمعية العلماء المسلمين الجزائريين سنة 1931. يُحتفل بيوم العلم في 16 أفريل ذكرى وفاته.']
    },
    {
      id: 'bennabi',
      title: 'مالك بن نبي',
      meta: '1905 – 1973',
      icon: 'person',
      excerpt: 'مفكر جزائري بارز اهتم بمشكلات الحضارة وشروط النهضة.',
      body: ['مفكر جزائري بارز اهتم بمشكلات الحضارة وشروط النهضة، ومن أشهر مؤلفاته «شروط النهضة» و«مشكلة الثقافة».']
    },
    {
      id: 'ibrahimi',
      image: 'assets/images/figure-ibrahimi.jpg',
      title: 'محمد البشير الإبراهيمي',
      meta: '1889 – 1965',
      icon: 'person',
      excerpt: 'عالم وأديب، رفيق ابن باديس وخليفته على رأس جمعية العلماء.',
      body: ['عالم وأديب، رفيق ابن باديس وخليفته على رأس جمعية العلماء المسلمين الجزائريين، من أعلام البيان العربي.']
    },
    {
      id: 'moufdi-zakaria',
      image: 'assets/images/figure-moufdi-zakaria.jpg',
      title: 'مفدي زكريا',
      meta: '1908 – 1977',
      icon: 'person',
      excerpt: 'شاعر الثورة الجزائرية ومؤلف النشيد الوطني «قسماً».',
      body: ['شاعر الثورة الجزائرية ومؤلف النشيد الوطني «قسماً»، خلّد بشعره ملحمة التحرير.']
    },
    {
      id: 'assia-djebar',
      title: 'آسيا جبار',
      meta: '1936 – 2015',
      icon: 'woman',
      excerpt: 'روائية ومؤرخة جزائرية، عضو الأكاديمية الفرنسية.',
      body: ['روائية ومؤرخة وسينمائية جزائرية، من أبرز الأصوات الأدبية في العالم، انتُخبت عضواً في الأكاديمية الفرنسية سنة 2005.']
    }
  ],

  contributions: [
    {
      id: 'november',
      title: 'نوفمبر… شعلة الحرية',
      meta: 'بقلم: بربار شهرزاد · السبت 8 نوفمبر 2025 · 317 مشاهدة',
      icon: 'pen',
      excerpt: 'في ليلةٍ من ليالي الوطن المظلمة، أضاءت شرارة نوفمبر سماء الجزائر، لتعلن ميلاد فجرٍ جديد.',
      body: [
        'في ليلةٍ من ليالي الوطن المظلمة، أضاءت شرارة نوفمبر سماء الجزائر، لتعلن ميلاد فجرٍ جديد، وتكتب بدماء الأحرار أولى صفحات الاستقلال والكرامة. من أجلكِ يا جزائرُ سالت دماؤنا ومن ترابكِ تنفّسنا المجدَ والخلودَ في أوّل نوفمبر 1954، نهض رجالٌ من بين الركام، آمنوا أنّ الحرية لا تُمنح، بل تُنتزع انتزاعًا… فكانوا صوت البارود، ونبض الوطن، ونور الطريق.',
        'منهم من رحل شهيدًا، ومنهم من بقي شاهدًا على زمنٍ لا يُنسى… زمنٍ صاغته الإرادة والعقيدة والوفاء للوطن. نم قرير العين يا شهيدَ الوطن، فالجزائر اليوم تزهو بما قد صنعتَ بالأمس.',
        'وفي هذه الذكرى الخالدة، نُجدد العهد على أن نكون ورثة الأمانة، نحمل مشعل المجد بالعلم والعمل والإخلاص، وفاءً لأولئك الذين قدّموا أرواحهم لتبقى الجزائر حرةً أبية. فلنجعل من نوفمبر مدرسةً للأجيال، يتعلمون منها أنّ الوطنية ليست شعارات، بل عطاءٌ وتفانٍ ومسؤولية.',
        'المجد والخلود لشهدائنا الأبرار، تحيا الجزائر، وتحيا ذكراكِ يا ثورة الأحرار.'
      ]
    },
    {
      id: 'motivation',
      title: 'طرق استثارة الدافعية للتعلم وزيادة التحصيل الدراسي',
      meta: 'مقال تربوي',
      icon: 'pen',
      excerpt: 'دراسة تربوية ومقال توجيهي لأولياء الأمور والمعلمين لتعزيز الشغف الدراسي لدى الأبناء.',
      body: ['دراسة تربوية ومقال توجيهي لأولياء الأمور والمعلمين لتعزيز الشغف الدراسي لدى الأبناء.']
    },
    {
      id: 'extracurricular',
      title: 'دور الأنشطة اللاصفية في بناء شخصية التلميذ القيادية',
      meta: 'مقال تربوي',
      icon: 'pen',
      excerpt: 'بحث تربوي يستعرض أهمية الدمج بين التميز الأكاديمي والمهارات الاجتماعية والرياضية.',
      body: ['بحث تربوي يستعرض أهمية الدمج بين التميز الأكاديمي والمهارات الاجتماعية والرياضية.']
    }
  ],

  creations: [
    {
      id: 'mental-math',
      image: 'assets/images/student-mental-math.png',
      title: 'بطل القسم في الحساب الذهني',
      meta: '2024/2025',
      icon: 'calc',
      excerpt: 'تمكن التلميذ النجيب فخار سفيان من افتكاك الصدارة في الحساب الذهني والمسابقة الفكرية.',
      body: ['بسم الله ما شاء الله .. لا قوة إلا بالله تمكن التلميذ النجيب فخار سفيان بن خضير بن عمر من افتكاك الصدارة في الحساب الذهني والمسابقة الفكرية التي كانت محور نشاط القسم لدوام…']
    },
    {
      id: 'bahdi-mama',
      image: 'assets/images/student-bahdi-mama.png',
      title: 'بهدي مامة بنت يحي',
      meta: '2022/2023',
      icon: 'medal',
      excerpt: 'أول تكريم للتلميذة بهدي مامة، مستوى الرابعة ابتدائي، لتميزها طيلة شهر فيفري 2023.',
      body: [
        'لقد تم اليوم بفضل الله تعالى أول تكريم للتلميذة بهدي مامة بنت يحي مستوى الرابعة ابتدائي لتميزها طيلة شهر فيفري 2023 م جهدا وحيوية وحرصا، فبارك الله فيها وفي من رباها وسدد خطاها للمزيد نحو التألق والنجاح.',
        'أ. دبوز ناريمان بنت قاسم: مدرسة المنار القرآ…'
      ]
    }
  ],

  publications: [
    {
      id: 'book-aicha',
      title: 'عيشة ن كاسي',
      meta: 'الإصدار الـ 11 من سلسلة أعلام الجزائر للأطفال',
      image: 'assets/images/book-aicha-n-kassi.png',
      fit: 'contain',
      icon: 'book',
      excerpt: 'قصة الفاضلة عائشة بنت كاسي أولاد بهون، والدة الإمام الشيخ إبراهيم بيوض، للأطفال.',
      body: ['قصة الفاضلة عائشة بنت كاسي أولاد بهون، والدة الإمام الشيخ إبراهيم بيوض، المعروفة بذكائها وحزمها وقوة شخصيتها، وبراعتها في النسج والشعر الشعبي.']
    }
  ]
};

/* helpers shared by the rotator and the details page */
window.creativeItemUrl = (item) => item.url || `creative-item.html?id=${encodeURIComponent(item.id)}`;

window.CREATIVE_ICONS = {
  woman: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6c-11 0-19 8.5-19 19.5v9c0 5 2.2 9.3 5.6 12.2L14 58h36l-4.6-11.3c3.4-2.9 5.6-7.2 5.6-12.2v-9C51 14.5 43 6 32 6z" fill="currentColor" opacity=".9"/><ellipse cx="32" cy="29" rx="8.5" ry="10" fill="#fff"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></svg>',
  calc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h4"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>'
};
