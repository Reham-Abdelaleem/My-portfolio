// ── PROJECTS DATA ──
const projects = [
  {
    num: '01',
    featured: false,
    visual: {
      type: 'image',
      bg: 'linear-gradient(135deg,#dde3ff,#eef1ff)',
      img: 'assets/images/Perfume-E-Commerce.png',
      alt: 'Perfume E-Commerce Website',
    },
    tech: ['Front-End', 'E-Commerce UI', 'Responsive Design'],
    tags: [{ label: 'E-Commerce' }, { label: 'Web Application' }],
    title: 'Perfume E-Commerce Website',
    desc: 'A premium e-commerce web application for perfumes. Built the front end to deliver a user-friendly shopping experience based on the project requirements and UI designs, as part of the Digitera Front-End Track (EraaSoft × iCareer).',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Requirements & UI Designs Implemented' },
      { icon: 'fa-solid fa-circle-check', text: 'User-Friendly Shopping Experience' }
    ],
    liveUrl: 'https://digitera-project-lovat.vercel.app/products',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Digitera-project.git'
  },
  // {
  //   num: '02',
  //   featured: true,
  //   featuredBadge: '<i class="fa-solid fa-star"></i> Graduation Project',
  //   visual: {
  //     type: 'gradient',
  //     bg: 'linear-gradient(135deg,#dde3ff,#eef1ff)',
  //     icon: 'fa-solid fa-robot'
  //   },
  //   tech: ['React.js', 'Next.js', 'REST APIs'],
  //   tags: [{ label: 'Graduation Project', accent: true }, { label: 'A+ Grade' }],
  //   title: 'LamaPBX',
  //   desc: 'AI-powered platform integrating chatbot, knowledge base, and model providers for real-time intelligent customer interactions.',
  //   results: [
  //     { icon: 'fa-solid fa-star', text: 'Grade A+ Excellent' },
  //     { icon: 'fa-solid fa-circle-check', text: 'Full Platform Delivered' }
  //   ],
  //   liveUrl: null,
  //   githubUrl: null
  // },
  {
    num: '02',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Survey-Land.jpg',
      alt: 'Survey Land'
    },
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query'],
    tags: [{ label: 'Survey Management' }, { label: 'Team Project · 5 Members' }],
    title: 'Survey Land — Survey Management Platform',
    desc: 'A professional survey management platform built as part of a 5-member Front-End team (Afaaqware training program). The team implemented a responsive UI, reusable components, survey management, dashboards, and API integration using React, Next.js, TypeScript, Tailwind CSS, and React Query.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: '31 UI Screens & 29 Features' },
      { icon: 'fa-solid fa-circle-check', text: 'Reusable Components & Responsive UI' }
    ],
    liveUrl: 'https://surveyland-team1-round5.vercel.app',
    githubUrl: 'https://github.com/AfaaqWare/Level1-Round6-Team6.git'
  },
  {
    num: '03',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Mashrouak-landing-page.jpg',
      alt: 'Mashrouak'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'jQuery', 'Owl Carousel'],
    tags: [{ label: 'Landing Page' }, { label: 'Personal Project' }],
    title: 'Mashrouak — Digital Development Agency',
    desc: 'Full Arabic RTL landing page for a digital development agency. Features services, portfolio grid, pricing cards rendered from JS arrays, testimonials carousel, FAQ accordion, and form validation.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Dynamic JS Rendering' },
      { icon: 'fa-solid fa-circle-check', text: 'FAQ Accordion & Form Validation' }
    ],
    liveUrl: 'https://mashrouak-landing-page.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Mashrouak-landing-page.git'
  },
  {
    num: '04',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/L-Artisan-Crust.jpg',
      alt: "L'Artisan Crust"
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Owl Carousel'],
    tags: [{ label: 'Landing Page' }, { label: 'Personal Project' }],
    title: "L'Artisan Crust — Boulangerie de Luxe",
    desc: 'Elegant Arabic RTL landing page for a luxury bakery. Features a portfolio gallery, customer reviews carousel, contact form validation, and smooth scroll animations.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Luxury Visual Design' },
      { icon: 'fa-solid fa-circle-check', text: 'Reviews Carousel' }
    ],
    liveUrl: 'https://l-artisan-crust-landing-page.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/L-Artisan-Crust.git'
  },
  {
    num: '05',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Magnetic-media-landing-page.jpg',
      alt: 'Magnetic Media'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    tags: [{ label: 'Landing Page' }, { label: 'Personal Project' }],
    title: 'Magnetic Media — Marketing Agency',
    desc: 'Professional Arabic RTL landing page for a digital marketing agency. Features scroll animations, counter effects, contact form validation, and active nav highlighting.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Arabic RTL Support' },
      { icon: 'fa-solid fa-circle-check', text: 'Form Validation' }
    ],
    liveUrl: 'https://magnetic-media-landing-page.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Magnetic-media-landing-page.git'
  },
  {
    num: '06',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Elevvo-task4-PersonalBlog.jpg',
      alt: 'Personal Blog'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    tags: [{ label: 'Blog UI' }, { label: 'Personal Project' }],
    title: 'Personal Blog',
    desc: 'Blog homepage with dynamic post cards, category filters, live search with debounce, and pagination. Fully responsive with smooth animations.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Live Search & Filter' },
      { icon: 'fa-solid fa-circle-check', text: 'Pagination' }
    ],
    liveUrl: 'https://dynamic-personal-blog.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elevvo-Task4-PersonalBlog'
  }, 
  {
    num: '07',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Elevvo-task3-TaskFlow.jpg',
      alt: 'TaskFlow'
    },
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    tags: [{ label: 'Landing Page' }, { label: 'Personal Project' }],
    title: 'TaskFlow',
    desc: 'Modern SaaS landing page with hero, features, reviews, and pricing sections. Includes scroll animations, counter effects, and ripple buttons.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Scroll Animations' },
      { icon: 'fa-solid fa-circle-check', text: 'Fully Responsive' }
    ],
    liveUrl: 'https://taskflow-app-showcase.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elevvo-Task3-TaskFlow'
  }, 
  {
    num: '08',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Elevvo-task2-Contact-Form.jpg',
      alt: 'Contact Form'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    tags: [{ label: 'Form UI' }, { label: 'Personal Project' }],
    title: 'Contact Form',
    desc: 'Elegant contact form with real-time validation, character counter, error/success states, and smooth animations. Fully responsive.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Real-time Validation' },
      { icon: 'fa-solid fa-circle-check', text: 'Animated Feedback' }
    ],
    liveUrl: 'https://modern-contact-form-validation.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elvevo-task2-Contact-Form'
  },     
  {
    num: '09',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Elevvo-task1-Collapsible-Sidebar.jpg',
      alt: 'ShopZone'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    tags: [{ label: 'Dashboard UI' }, { label: 'Personal Project' }],
    title: 'ShopZone',
    desc: 'Premium shopping dashboard with an animated collapsible sidebar. Fully responsive — collapses to icons on desktop and slides in as a drawer on mobile.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Animated Sidebar' },
      { icon: 'fa-solid fa-circle-check', text: 'Mobile Responsive' }
    ],
    liveUrl: 'https://modern-collapsible-sidebar.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elvevo-task1-Collapsible-Sidebar'
  },
  {
    num: '10',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'assets/images/Leon-Creative Digital Agency.jpg',
      alt: 'Leon Agency'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5'],
    tags: [{ label: 'Landing Page' }, { label: 'Personal Project' }],
    title: 'Leon — Digital Agency',
    desc: 'Modern landing page for a creative digital agency. Fully responsive across all devices with clean Bootstrap 5 layout and custom CSS.',
    results: [
      { icon: 'fa-solid fa-circle-check', text: 'Fully Responsive' },
      { icon: 'fa-solid fa-circle-check', text: 'Clean Modern UI' }
    ],
    liveUrl: 'https://leon-digital-agency-template.vercel.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Leon-Digital-Agency-Template'
  }
];

// ── CERTIFICATES DATA ──
// NOTE: "link" is null for entries where no real credential URL was provided.
// Replace null with the actual certificate/post URL (LinkedIn post, Credly, PDF, etc.) when available.
const certificates = [
  {
    icon: 'fa-solid fa-diagram-project',
    name: 'Front-End Track',
    org: 'Digitera · EraaSoft × iCareer',
    meta: 'Sep 2026',
    desc: 'PRDs and user stories, Jira, Figma MCP, Sanity CMS.',
    link: 'https://drive.google.com/file/d/1Dv03ejyGErTF9vZmFZCIIaKpJE1nd0mM/view?usp=sharing'
  },
  {
    icon: 'fa-solid fa-laptop-code',
    name: 'Front-End Bootcamp',
    org: 'Huma Volve',
    meta: 'Aug 2026',
    desc: 'React project structure, Figma to code, APIs & Postman, Lighthouse.',
    link: 'https://drive.google.com/file/d/1ro5IcUZAHD3jE9VFv2yUK_vG8wue2JUs/view?usp=drive_link'
  },
  {
    icon: 'fa-solid fa-code-branch',
    name: 'Front-End Training — Level 2',
    org: 'Afaaqware',
    meta: 'Mar – Jul 2026',
    desc: 'Team collaboration, Git Flow, clean architecture, API integration.',
    link: 'https://drive.google.com/file/d/13JVEol1CrYliycyq_sTpQI0hvrCbyRjW/view?usp=drive_link'
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    name: 'Front-End Training — Fundamentals',
    org: 'Afaaqware',
    meta: 'Mar – Jul 2026',
    desc: 'SurveyLand team project, dashboards, filtering and search.',
    link: 'https://drive.google.com/file/d/13JVEol1CrYliycyq_sTpQI0hvrCbyRjW/view?usp=drive_link'
  },
  {
    icon: 'fa-solid fa-display',
    name: 'Frontend Development Internship',
    org: 'Elevvo Pathways',
    meta: 'Feb – Mar 2026',
    desc: 'Responsive design with Bootstrap 5 and modular JavaScript.',
    link: 'https://drive.google.com/file/d/1Z9uvJDl87gJ9KRXmCj0-MaGfzdl_J_EB/view?usp=drive_link'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    name: 'Digital Egypt Youth — Web Designer Track',
    org: 'NTI & Creativa',
    meta: 'Dec 2025 – Feb 2026 · 120 hours',
    score: '94% Score',
    desc: 'HTML/CSS/JS, Bootstrap, responsive layouts, freelancing.',
    link: 'https://drive.google.com/file/d/1AKMvLYNsCcYRTzQYzVcoG4LGm6zqcY6p/view?usp=drive_link'
  },
  {
    icon: 'fa-solid fa-database',
    name: 'Database Fundamentals',
    org: 'Mahara-Tech',
    desc: 'ERD modeling, SQL, normalization.',
    link: 'https://drive.google.com/file/d/1TfbMfHRkK0pZvCs6lm-QdN5NNZFi1c0F/view?usp=drive_link'
  }
];

// ── RENDER CERTIFICATES ──
function renderCertificates() {
  const grid = document.getElementById('certificatesGrid');
  if (!grid) return;
  grid.innerHTML = certificates.map(c => {
    const meta = c.meta ? `<div class="cert-meta">${c.meta}</div>` : '';
    const score = c.score ? `<span class="grade-badge d-inline-block fw-semibold"><i class="fa-solid fa-star"></i> ${c.score}</span>` : '';
    const link = c.link ? `<a href="${c.link}" target="_blank" rel="noopener noreferrer" class="cert-link text-decoration-none fw-medium"><i class="fa-solid fa-link"></i> View Certificate</a>` : '';
    return `
      <div class="col-12 col-md-6 col-lg-4 reveal">
        <div class="cert-card">
          <div class="cert-head d-flex align-items-start gap-3">
            <div class="cert-icon"><i class="${c.icon}"></i></div>
            <div>
              <div class="cert-name">${c.name}</div>
              <div class="cert-org fw-medium">${c.org}</div>
            </div>
          </div>
          ${meta}
          <p class="cert-desc">${c.desc}</p>
          <div class="cert-foot d-flex align-items-center justify-content-between gap-2 flex-wrap">${link}${score}</div>
        </div>
      </div>`;
  }).join('');
}

// ── SKILLS DATA ──
const skillCategories = [
  {
    title: 'Web Development',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
      { name: 'JavaScript (ES6+)', icon: 'fa-brands fa-square-js' },
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'Next.js', icon: 'fa-solid fa-server' },
      { name: 'TypeScript', icon: 'fa-solid fa-code' },
      { name: 'Tailwind CSS', icon: 'fa-brands fa-tailwindcss' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
      { name: 'Responsive Web Design', icon: 'fa-solid fa-mobile-screen-button' }
    ]
  },
  {
    title: 'API Integration',
    icon: 'fa-solid fa-plug',
    items: [
      { name: 'RESTful APIs', icon: 'fa-solid fa-cloud-arrow-up' },
      { name: 'JSON', icon: 'fa-solid fa-file-code' },
      { name: 'Axios', icon: 'fa-solid fa-arrow-right-arrow-left' },
      { name: 'React Query', icon: 'fa-solid fa-arrows-rotate' }
    ]
  },
  {
    title: 'Architecture & Design',
    icon: 'fa-solid fa-sitemap',
    items: [
      { name: 'Design Systems', icon: 'fa-solid fa-layer-group' },
      { name: 'Atomic Design', icon: 'fa-solid fa-atom' },
      { name: 'Component-Based Architecture', icon: 'fa-solid fa-cubes' },
      { name: 'Feature-Based MVC', icon: 'fa-solid fa-diagram-project' }
    ]
  },
  {
    title: 'Version Control',
    icon: 'fa-solid fa-code-branch',
    items: [
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
      { name: 'Git Flow', icon: 'fa-solid fa-code-branch' }
    ]
  },
  {
    title: 'Tools',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      { name: 'VS Code', icon: 'fa-solid fa-code' },
      { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
      { name: 'Figma', icon: 'fa-brands fa-figma' },
      { name: 'GitHub Desktop', icon: 'fa-brands fa-github' },
      { name: 'ClickUp', icon: 'fa-solid fa-list-check' },
      { name: 'Jira', icon: 'fa-brands fa-jira' }    
    ]
  },
  {
    title: 'Database',
    icon: 'fa-solid fa-database',
    items: [
      { name: 'SQL', icon: 'fa-solid fa-database' },
      { name: 'Database Design', icon: 'fa-solid fa-layer-group' },
      { name: 'ERD Modeling', icon: 'fa-solid fa-diagram-project' },
      { name: 'Normalization', icon: 'fa-solid fa-filter' }
    ]
  },
  {
    title: 'Computer Science',
    icon: 'fa-solid fa-brain',
    items: [
      { name: 'C++', icon: 'fa-solid fa-code' },
      { name: 'Data Structures', icon: 'fa-solid fa-diagram-project' },
      { name: 'Algorithms', icon: 'fa-solid fa-sitemap' }
    ]
  }
];

// ── RENDER SKILLS ──
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skillCategories.map((cat, i) => {
    const pills = cat.items.map(s => `<span class="skill-pill d-inline-flex align-items-center gap-2 fw-medium m-1"><i class="${s.icon}"></i> ${s.name}</span>`).join('');
    return `
      <div class="${i < skillCategories.length - 1 ? 'mb-3' : ''}">
        <div class="skill-cat-title d-flex align-items-center gap-2 fw-medium text-uppercase">
          <i class="${cat.icon}"></i> ${cat.title}
        </div>
        <div>${pills}</div>
      </div>`;
  }).join('');
}

// ── RENDER PROJECTS ──
function buildProjectCardHTML(p) {
  let visualInner = '';
  if (p.visual.type === 'gradient') {
    visualInner = `<div class="project-visual-bg d-flex align-items-center justify-content-center position-absolute"><div class="project-visual-icon"><i class="${p.visual.icon}"></i></div></div>`;
  } else {
    visualInner = `<img src="${p.visual.img}" alt="${p.visual.alt}" class="w-100 h-100 object-fit-cover position-absolute overflow-hidden">`;
  }

  const techBadges = p.tech.map(t => `<span class="tech-badge fw-medium">${t}</span>`).join('');
  const overlayTags = p.tags.map(t => `<span class="overlay-tag fw-medium${t.accent ? ' accent' : ''}">${t.label}</span>`).join('');
  const results = p.results.map(r => `<div class="overlay-result d-flex align-items-center gap-1 fw-medium"><i class="fas ${r.icon}"></i> ${r.text}</div>`).join('');

  const actions = (p.liveUrl || p.githubUrl) ? `
    <div class="overlay-actions d-flex flex-wrap gap-2">
      ${p.liveUrl ? `<a href="${p.liveUrl}"   target="_blank" class="overlay-btn primary text-decoration-none fw-medium d-inline-flex align-items-center gap-1"><i class="fa-solid fa-link"></i> Live Demo</a>` : ''}
      ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" class="overlay-btn ghost text-decoration-none fw-medium d-inline-flex align-items-center gap-1"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
    </div>` : '';

  const featuredBadge = p.featured ? `<span class="project-featured-badge text-uppercase fw-semibold position-absolute z-2">${p.featuredBadge}</span>` : '';

  return `
    <div class="project-card position-relative overflow-hidden w-100${p.featured ? ' featured' : ''}">
      ${featuredBadge}
      <div class="project-visual position-absolute overflow-hidden d-flex align-items-center justify-content-center" style="background:${p.visual.bg};">
        ${visualInner}
        <div class="project-num fw-medium position-absolute">${p.num}</div>
        <div class="project-tech-stack d-flex flex-wrap justify-content-end gap-1 position-absolute z-2">${techBadges}</div>
      </div>
      <div class="project-overlay position-absolute z-3 overflow-hidden d-flex flex-column justify-content-evenly opacity-0">
        <div class="overlay-tags d-flex flex-wrap mb-2">${overlayTags}</div>
        <div class="overlay-title mb-1">${p.title}</div>
        <div class="overlay-desc overflow-hidden">${p.desc}</div>
        <div class="overlay-results d-flex flex-wrap gap-2">${results}</div>
        ${actions}
      </div>
    </div>`;
}

function renderProjects() {
  const carousel = document.getElementById('projectsCarousel');
  carousel.innerHTML = projects.map(buildProjectCardHTML).join('');
}

function renderProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `<div class="col-md-6 col-lg-4">${buildProjectCardHTML(p)}</div>`).join('');
}

renderProjects();
renderProjectsGrid();
renderCertificates();
renderSkills();

// ── PROJECTS: TOGGLE CAROUSEL / FULL GRID ──
(function initProjectsToggle() {
  const btn = document.getElementById('toggleProjectsView');
  const carouselWrap = document.querySelector('.projects-carousel');
  const gridWrap = document.getElementById('projectsGridWrap');
  if (!btn || !carouselWrap || !gridWrap) return;

  let showingGrid = false;
  btn.addEventListener('click', () => {
    showingGrid = !showingGrid;
    carouselWrap.style.display = showingGrid ? 'none' : '';
    gridWrap.style.display = showingGrid ? '' : 'none';
    btn.innerHTML = showingGrid
      ? '<i class="fa-solid fa-arrows-left-right"></i> Carousel View'
      : '<i class="fa-solid fa-table-cells-large"></i> View All as Grid';
  });
})();

// ── PURE JS CAROUSEL (with Drag) ──
(function initCarousel() {
  const track = document.getElementById('projectsCarousel');
  const cards = track.querySelectorAll('.project-card');
  const totalCards = cards.length;
  let current = 0;

  function getVisible() {
    // if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getCardWidth() {
    return cards[0] ? cards[0].getBoundingClientRect().width + 28 : 0;
  }

  function goTo(index) {
    const max = totalCards - getVisible();
    current = Math.max(0, Math.min(index, max));
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(-${current * getCardWidth()}px)`;
  }

  // ── AUTOPLAY ──
  let autoplay = setInterval(() => {
    current = (current + 1 > totalCards - getVisible()) ? 0 : current + 1;
    goTo(current);
  }, 7500);

  function startAutoplay() {
    autoplay = setInterval(() => {
      current = (current + 1 > totalCards - getVisible()) ? 0 : current + 1;
      goTo(current);
    }, 7500);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
  }

  const carouselWrap = track.closest('.projects-carousel');
  carouselWrap.addEventListener('mouseenter', stopAutoplay);
  carouselWrap.addEventListener('mouseleave', startAutoplay);

  // ── DRAG (Mouse) ──
  let isDragging = false;
  let dragStartX = 0;
  let dragCurrentX = 0;
  let baseOffset = 0;
  const DRAG_THRESHOLD = 5; // px — below this, treat as a click
  let didDrag = false;

  function getBaseOffset() {
    return current * getCardWidth();
  }

  track.addEventListener('mousedown', e => {
    isDragging = true;
    didDrag = false;
    dragStartX = e.clientX;
    baseOffset = getBaseOffset();
    track.style.transition = 'none';
    track.style.cursor = 'grabbing';
    stopAutoplay();
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    dragCurrentX = e.clientX;
    const diff = dragCurrentX - dragStartX;
    if (Math.abs(diff) > DRAG_THRESHOLD) didDrag = true;
    track.style.transform = `translateX(${-baseOffset + diff}px)`;
  });

  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = '';
    const diff = e.clientX - dragStartX;

    if (Math.abs(diff) > DRAG_THRESHOLD) {
      if (diff < -60) goTo(current + 1);
      else if (diff > 60) goTo(current - 1);
      else goTo(current);
    } else {
      goTo(current);
    }
    startAutoplay();
  });

  // Prevent click on links/buttons after a drag
  track.addEventListener('click', e => {
    if (didDrag) e.preventDefault();
  }, true);

  // ── DRAG (Touch) ──
  let touchStartX = 0;
  let touchBaseOffset = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchBaseOffset = getBaseOffset();
    track.style.transition = 'none';
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchmove', e => {
    const diff = e.touches[0].clientX - touchStartX;
    track.style.transform = `translateX(${-touchBaseOffset + diff}px)`;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff < -50) goTo(current + 1);
    else if (diff > 50) goTo(current - 1);
    else goTo(current);
    startAutoplay();
  });

  // ── CURSOR STYLE ──
  track.style.cursor = 'grab';

  window.addEventListener('resize', () => goTo(current));
})();

// ── SCROLL REVEAL ──
document.body.classList.add('js-loaded');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i % 4) * .08 + 's';
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── HAMBURGER ──
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ── CLOSE MENU ON LINK CLICK ──
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── SCROLL TOP + NAV SHRINK + ACTIVE LINK ──
const scrollTopBtn = document.getElementById('scrollTop');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
  navbar.style.padding = window.scrollY > 80 ? '10px 60px' : '18px 60px';

  let cur = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── CONTACT FORM ──
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const message = document.getElementById('fmessage').value;
  const msg = document.getElementById('formMsg');

  if (!name || !email || !message) {
    msg.textContent = 'Please fill in all required fields.';
    msg.className = 'form-msg err';
    return;
  }

  msg.textContent = "Message sent successfully! I'll get back to you soon.";
  msg.className = 'form-msg ok';
  this.reset();
  setTimeout(() => { msg.className = 'form-msg'; }, 5000);

});
