// ── PROJECTS DATA ──
const projects = [
  // {
  //   num: '01',
  //   featured: true,
  //   featuredBadge: '⭐ Graduation Project',
  //   visual: {
  //     type: 'gradient',
  //     bg: 'linear-gradient(135deg,#dde3ff,#eef1ff)',
  //     icon: '🤖'
  //   },
  //   tech: ['React.js', 'Next.js', 'REST APIs'],
  //   tags: [{ label: 'Graduation Project', accent: true }, { label: 'A+ Grade' }],
  //   title: 'LamaPBX',
  //   desc: 'AI-powered platform integrating chatbot, knowledge base, and model providers for real-time intelligent customer interactions.',
  //   results: [
  //     { icon: 'fa-star', text: 'Grade A+ Excellent' },
  //     { icon: 'fa-check-circle', text: 'Full Platform Delivered' }
  //   ],
  //   liveUrl: null,
  //   githubUrl: null
  // },
  {
    num: '01',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'images/Leon-Creative Digital Agency.jpg',
      alt: 'Leon Agency'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5'],
    tags: [{ label: 'Landing Page' }, { label: 'Personal Project' }],
    title: 'Leon — Digital Agency',
    desc: 'Modern landing page for a creative digital agency. Fully responsive across all devices with clean Bootstrap 5 layout and custom CSS.',
    results: [
      { icon: 'fa-check-circle', text: 'Fully Responsive' },
      { icon: 'fa-check-circle', text: 'Clean Modern UI' }
    ],
    liveUrl: 'https://leon-digital-agency-template.netlify.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Leon-Digital-Agency-Template'
  },
  {
    num: '02',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'images/Elevvo-task1-Collapsible-Sidebar.jpg',
      alt: 'ShopZone'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    tags: [{ label: 'Dashboard UI' }, { label: 'Personal Project' }],
    title: 'ShopZone',
    desc: 'Premium shopping dashboard with an animated collapsible sidebar. Fully responsive — collapses to icons on desktop and slides in as a drawer on mobile.',
    results: [
      { icon: 'fa-check-circle', text: 'Animated Sidebar' },
      { icon: 'fa-check-circle', text: 'Mobile Responsive' }
    ],
    liveUrl: 'https://modern-collapsible-sidebar.netlify.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elvevo-task1-Collapsible-Sidebar'
  },
  {
    num: '03',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'images/Elevvo-task2-Contact-Form.jpg',
      alt: 'Contact Form'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    tags: [{ label: 'Form UI' }, { label: 'Personal Project' }],
    title: 'Contact Form',
    desc: 'Elegant contact form with real-time validation, character counter, error/success states, and smooth animations. Fully responsive.',
    results: [
      { icon: 'fa-check-circle', text: 'Real-time Validation' },
      { icon: 'fa-check-circle', text: 'Animated Feedback' }
    ],
    liveUrl: 'https://modern-contact-form-validation.netlify.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elvevo-task2-Contact-Form'
  },
  {
    num: '04',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'images/Elevvo-task3-TaskFlow.jpg',
      alt: 'TaskFlow'
    },
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    tags: [{ label: 'Landing Page' }, { label: 'Personal Project' }],
    title: 'TaskFlow',
    desc: 'Modern SaaS landing page with hero, features, reviews, and pricing sections. Includes scroll animations, counter effects, and ripple buttons.',
    results: [
      { icon: 'fa-check-circle', text: 'Scroll Animations' },
      { icon: 'fa-check-circle', text: 'Fully Responsive' }
    ],
    liveUrl: 'https://taskflow-app-showcase.netlify.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elevvo-Task3-TaskFlow'
  },
  {
    num: '05',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'images/Elevvo-task4-PersonalBlog.jpg',
      alt: 'Personal Blog'
    },
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    tags: [{ label: 'Blog UI' }, { label: 'Personal Project' }],
    title: 'Personal Blog',
    desc: 'Blog homepage with dynamic post cards, category filters, live search with debounce, and pagination. Fully responsive with smooth animations.',
    results: [
      { icon: 'fa-check-circle', text: 'Live Search & Filter' },
      { icon: 'fa-check-circle', text: 'Pagination' }
    ],
    liveUrl: 'https://dynamic-personal-blog.netlify.app/',
    githubUrl: 'https://github.com/Reham-Abdelaleem/Elevvo-Task4-PersonalBlog'
  }
];

// ── RENDER PROJECTS ──
function renderProjects() {
  const carousel = document.getElementById('projectsCarousel');
  carousel.innerHTML = projects.map(p => {
    let visualInner = '';
    if (p.visual.type === 'gradient') {
      visualInner = `<div class="project-visual-bg"><div class="project-visual-icon">${p.visual.icon}</div></div>`;
    } else {
      visualInner = `<img src="${p.visual.img}" alt="${p.visual.alt}" style="width:100%;height:100%;object-fit:cover;opacity:.85;">`;
    }

    const techBadges = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
    const overlayTags = p.tags.map(t => `<span class="overlay-tag${t.accent ? ' accent' : ''}">${t.label}</span>`).join('');
    const results = p.results.map(r => `<div class="overlay-result"><i class="fas ${r.icon}"></i> ${r.text}</div>`).join('');

    const actions = (p.liveUrl || p.githubUrl) ? `
      <div class="overlay-actions">
        ${p.liveUrl ? `<a href="${p.liveUrl}"   target="_blank" class="overlay-btn primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
        ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" class="overlay-btn ghost"><i class="fab fa-github"></i> GitHub</a>` : ''}
      </div>` : '';

    const featuredBadge = p.featured ? `<span class="project-featured-badge">${p.featuredBadge}</span>` : '';

    return `
      <div class="project-card${p.featured ? ' featured' : ''}">
        ${featuredBadge}
        <div class="project-visual" style="background:${p.visual.bg};">
          ${visualInner}
          <div class="project-num">${p.num}</div>
          <div class="project-tech-stack">${techBadges}</div>
        </div>
        <div class="project-overlay">
          <div class="overlay-tags">${overlayTags}</div>
          <div class="overlay-title">${p.title}</div>
          <div class="overlay-desc">${p.desc}</div>
          <div class="overlay-results">${results}</div>
          ${actions}
        </div>
      </div>`;
  }).join('');
}

renderProjects();

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
  }, 3500);

  function startAutoplay() {
    autoplay = setInterval(() => {
      current = (current + 1 > totalCards - getVisible()) ? 0 : current + 1;
      goTo(current);
    }, 3500);
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

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

if (window.matchMedia('(pointer: fine)').matches) {
  document.body.style.cursor = 'none';
  cursor.style.display = 'block';
  ring.style.display = 'block';

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a,button,input,textarea,.skill-pill,.service-card,.project-card,.why-card').forEach(el => {
    el.style.cursor = 'none';
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%,-50%) scale(2)'; ring.style.opacity = '0'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.opacity = '.6'; });
  });
}

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
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--blue)' : '';
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
