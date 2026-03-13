// ── Helpers ────────────────────────────────────────────────
function el(id) { return document.getElementById(id); }

function svgIcon(name, size = 14) {
  const icons = {
    telegram: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.54c-.148.658-.537.818-1.089.508l-3.013-2.218-1.453 1.397c-.16.16-.295.295-.607.295l.215-3.053 5.564-5.025c.243-.215-.052-.334-.374-.119L7.33 14.517l-2.966-.924c-.645-.2-.658-.645.134-.954l11.577-4.465c.536-.196 1.006.12.487.074z"/></svg>`,
    whatsapp: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    email:    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    phone:    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
    arrow:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    prev:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>`,
    next:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  };
  return icons[name] || '';
}

// ── Footer Builder ──────────────────────────────────────────
function buildFooter(c) {
  return `
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="assets/logoWhite.svg" alt="Логотип" style="display:inline; height:38px;">
      <div class="brand">${c.name}</div>
      <div class="tagline">${c.tagline}</div>
      <p class="footer-desc">${c.description}</p>
      <div class="footer-socials" style="margin-top:20px">
        <a class="social-btn" href="${c.telegram}" target="_blank">${svgIcon('telegram',13)} Telegram</a>
        <a class="social-btn" href="${c.whatsapp}" target="_blank">${svgIcon('whatsapp',13)} WhatsApp</a>
      </div>
    </div>
    <div class="footer-contact">
      <h4>Напишите нам</h4>
      <ul class="footer-links">
        <li><a class="footer-link" href="mailto:${c.email}">
          <span class="icon-wrap">${svgIcon('email',14)}</span>${c.email}</a></li>
        <li><a class="footer-link" href="tel:${c.phone.replace(/\s/g,'')}">
          <span class="icon-wrap">${svgIcon('phone',14)}</span>${c.phone}</a></li>
        <li><a class="footer-link" href="${c.telegram}" target="_blank">
          <span class="icon-wrap">${svgIcon('telegram',14)}</span>Telegram Chat</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} ${c.name}. Все права защищены.</span>
    <span style="letter-spacing:0.04em">${c.tagline}</span>
  </div>`;
}

// ── Content Block Renderer ──────────────────────────────────
function renderContentBlock(block) {
  switch (block.type) {
    case 'text':
      return `<p class="body-text">${block.value}</p>`;
    case 'subheading':
      return `<h3 class="subheading">${block.value}</h3>`;
    case 'image':
      return `<figure class="content-image ${block.ratio === 'portrait' ? 'portrait' : block.ratio === 'square' ? 'square' : ''}">
        <img src="${block.src}" alt="${block.caption || ''}" loading="lazy">
        ${block.caption ? `<figcaption class="content-image-caption">${block.caption}</figcaption>` : ''}
      </figure>`;
    case 'image-grid':
      return `<figure class="content-image-grid">
        ${block.images.map(img => `<img src="${img.src}" alt="${img.caption||''}" loading="lazy">`).join('')}
        ${block.caption ? `<figcaption class="content-image-grid-caption">${block.caption}</figcaption>` : ''}
      </figure>`;
    case 'quote':
      return `<div class="highlight-box"><p>${block.value}</p></div>`;
    case 'specs':
      return `<div class="specs-grid">
        ${block.items.map(item => `<div class="spec-item"><div class="spec-label">${item.label}</div><div class="spec-value">${item.value}</div></div>`).join('')}
      </div>`;
    default:
      return '';
  }
}

// ── Init ────────────────────────────────────────────────────
function init() {
  // Header
  el('header-brand').textContent   = COMPANY.name;
  el('header-tagline').textContent = COMPANY.tagline;
  el('btn-contact-header').href    = COMPANY.telegram;

  // Hero desc
  el('hero-desc').textContent = COMPANY.description;

  // Stats
  el('hero-stats').innerHTML = COMPANY.stats
    .map(s => `<div class="stat-box"><div class="stat-num">${s.num}</div><div class="stat-label">${s.label}</div></div>`).join('');

  // Projects grid
  el('proj-count').textContent = String(PROJECTS.length).padStart(2,'0');
  el('projects-grid').innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card fade-up" style="animation-delay:${0.05 + i*0.08}s" onclick="openProject('${p.id}')">
      <div class="card-media">
        <img src="${p.thumbnail}" alt="${p.name}" loading="lazy">
        <span class="card-category">${p.category}</span>
        <span class="card-num">${String(i+1).padStart(2,'0')}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.shortDesc}</p>
      </div>
      <div class="card-footer">
        <span class="card-meta">${p.year}</span>
        <span class="card-arrow">${svgIcon('arrow',12)}</span>
      </div>
    </article>`).join('');

  // Footers
  const footerHTML = buildFooter(COMPANY);
  el('home-footer').innerHTML    = footerHTML;
  el('project-footer').innerHTML = footerHTML;
}

// ── Page Router ─────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  el(name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Open Project ────────────────────────────────────────────
function openProject(id) {
  const proj  = PROJECTS.find(p => p.id === id);
  if (!proj) return;
  const idx   = PROJECTS.indexOf(proj);
  const prev  = PROJECTS[idx - 1];
  const next  = PROJECTS[idx + 1];

  // Media
  const heroEl = el('proj-hero');
  heroEl.querySelectorAll('img, video').forEach(m => m.remove());

  if (proj.mainMedia.type === 'video') {
    const vid = document.createElement('video');
    vid.src = proj.mainMedia.src;
    if (proj.mainMedia.poster) vid.poster = proj.mainMedia.poster;
    vid.autoplay = true; vid.muted = true; vid.loop = true; vid.playsinline = true;
    vid.className = 'project-hero-media';
    heroEl.insertBefore(vid, heroEl.firstChild);
  } else {
    const img = document.createElement('img');
    img.src = proj.mainMedia.src; img.alt = proj.name;
    img.className = 'project-hero-media';
    heroEl.insertBefore(img, heroEl.firstChild);
  }

  // Title
  el('proj-eyebrow').innerHTML = `<span>${proj.category}</span>&nbsp;&nbsp;·&nbsp;&nbsp;${proj.year}`;
  el('proj-title').textContent = proj.name;

  // Prev / Next
  el('proj-switch').innerHTML = [
    prev ? `<button class="proj-switch-btn" onclick="openProject('${prev.id}')">
      ${svgIcon('prev',12)} <span class="proj-switch-label">${prev.name}</span>
    </button>` : '',
    next ? `<button class="proj-switch-btn" onclick="openProject('${next.id}')">
      <span class="proj-switch-label">${next.name}</span> ${svgIcon('next',12)}
    </button>` : ''
  ].join('');

  // TOC
  el('toc-list').innerHTML = proj.sections.map(s => `
    <li class="toc-item">
      <span class="toc-link" onclick="scrollToSection('${proj.id}-${s.id}')">${s.title}</span>
    </li>`).join('');

  // Content
  el('proj-content').innerHTML = proj.sections.map((s, i) => `
    <div class="content-section" id="${proj.id}-${s.id}">
      <h2 class="section-heading">
        <span class="section-heading-num">${String(i+1).padStart(2,'0')}</span>
        ${s.title}
      </h2>
      ${s.content.map(renderContentBlock).join('')}
    </div>`).join('');

  showPage('project');

  // TOC scroll spy
  setupTocSpy(proj);
}

// ── TOC Scroll Spy ──────────────────────────────────────────
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;
  window.scrollTo({ top, behavior: 'smooth' });
}

function setupTocSpy(proj) {
  if (window._tocObserver) window._tocObserver.disconnect();
  const links = document.querySelectorAll('.toc-link');
  const sectionIds = proj.sections.map(s => `${proj.id}-${s.id}`);

  window._tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const idx = sectionIds.indexOf(entry.target.id);
        if (idx > -1 && links[idx]) links[idx].classList.add('active');
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px' });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) window._tocObserver.observe(el);
  });
}

// ── Header shadow on scroll ─────────────────────────────────
window.addEventListener('scroll', () => {
  el('site-header').classList.toggle('scrolled', window.scrollY > 10);
});

// ── Run ─────────────────────────────────────────────────────
init();
