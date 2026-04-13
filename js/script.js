// ── PROJECTS DATA ──
const projects = [
  {
    num: '01',
    featured: true,
    featuredBadge: '⭐ Graduation Project',
    visual: {
      type: 'gradient',
      bg: 'linear-gradient(135deg,#dde3ff,#eef1ff)',
      icon: '🤖'
    },
    tech: ['React.js', 'Next.js', 'REST APIs'],
    tags: [{ label: 'Graduation Project', accent: true }, { label: 'A+ Grade' }],
    title: 'LamaPBX',
    desc: 'AI-powered platform integrating chatbot, knowledge base, and model providers for real-time intelligent customer interactions.',
    results: [
      { icon: 'fa-star', text: 'Grade A+ Excellent' },
      { icon: 'fa-check-circle', text: 'Full Platform Delivered' }
    ],
    liveUrl: null,
    githubUrl: null
  },
  {
    num: '02',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80',
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
    liveUrl: 'https://lnkd.in/dPqDtA8d',
    githubUrl: 'https://lnkd.in/dNuZY2_M'
  },
  {
    num: '03',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80',
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
    liveUrl: 'https://lnkd.in/dPqDtA8d',
    githubUrl: 'https://lnkd.in/dNuZY2_M'
  },
  {
    num: '04',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=700&q=80',
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
    liveUrl: 'https://lnkd.in/dPqDtA8d',
    githubUrl: 'https://lnkd.in/dNuZY2_M'
  },
  {
    num: '05',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=700&q=80',
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
    liveUrl: 'https://lnkd.in/dPqDtA8d',
    githubUrl: 'https://lnkd.in/dNuZY2_M'
  },
  {
    num: '06',
    featured: false,
    visual: {
      type: 'image',
      bg: '#000',
      img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&q=80',
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
    liveUrl: 'https://lnkd.in/dPqDtA8d',
    githubUrl: 'https://lnkd.in/dNuZY2_M'
  }
];

function renderProjects() {
  const carousel = document.getElementById('projectsCarousel');
  carousel.innerHTML = projects.map(p => {
    // Visual block
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
        ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" class="overlay-btn primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
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

// ── RENDER PROJECTS IMMEDIATELY ──
renderProjects();

// ── PURE JS CAROUSEL ──
(function initCarousel() {
  const track = document.getElementById('projectsCarousel');
  const cards = track.querySelectorAll('.project-card');
  const totalCards = cards.length;
  let current = 0;

  function getVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getCardWidth() {
    return cards[0] ? cards[0].getBoundingClientRect().width + 28 : 0;
  }

  function goTo(index) {
    const max = totalCards - getVisible();
    current = Math.max(0, Math.min(index, max));
    track.style.transform = `translateX(-${current * getCardWidth()}px)`;
  }

  let autoplay = setInterval(() => {
    current = (current + 1 > totalCards - getVisible()) ? 0 : current + 1;
    goTo(current);
  }, 3500);

  track.closest('.projects-carousel').addEventListener('mouseenter', () => clearInterval(autoplay));
  track.closest('.projects-carousel').addEventListener('mouseleave', () => {
    autoplay = setInterval(() => {
      current = (current + 1 > totalCards - getVisible()) ? 0 : current + 1;
      goTo(current);
    }, 3500);
  });

  window.addEventListener('resize', () => goTo(current));
})();

// ── SCROLL REVEAL ──
document.body.classList.add('js-loaded');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) { e.target.style.transitionDelay = (i % 4) * .08 + 's'; e.target.classList.add('visible'); }
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
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
  (function animRing() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animRing); })();
  document.querySelectorAll('a,button,input,textarea,.skill-pill,.service-card,.project-card,.why-card').forEach(el => {
    el.style.cursor = 'none';
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%,-50%) scale(2)'; ring.style.opacity = '0'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.opacity = '.6'; });
  });
}

// ── HAMBURGER ──
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinksMobile').classList.toggle('open');
});

// ── SCROLL TOP + NAV SHRINK ──
const scrollTopBtn = document.getElementById('scrollTop');
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
  navbar.style.padding = window.scrollY > 80 ? '10px 20px' : '';
  // Active nav highlight
  let cur = '';
  document.querySelectorAll('section[id]').forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('.nav-links a, .nav-links-mobile a').forEach(a => {
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
  if (!name || !email || !message) { msg.textContent = 'Please fill in all required fields.'; msg.className = 'form-msg err'; return; }
  msg.textContent = 'Message sent successfully! I\'ll get back to you soon.';
  msg.className = 'form-msg ok';
  this.reset();
  setTimeout(() => { msg.className = 'form-msg'; }, 5000);
});

// ── CLOSE MOBILE MENU ON LINK CLICK ──
document.querySelectorAll('#navLinksMobile a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinksMobile').classList.remove('open');
  });
});

