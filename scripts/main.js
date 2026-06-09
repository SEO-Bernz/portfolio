/* ============================================================
   ELEVATE STUDIO — Main Script
   Hydrates all DOM from SITE_CONFIG and wires up interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const C = SITE_CONFIG;

  // ── Helpers ─────────────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  function sectionHeader(container, { num, title, subtitle }) {
    container.innerHTML = `
      ${num ? `<div class="section-num reveal">${num}</div>` : ''}
      <h2 class="section-title reveal">${title}</h2>
      <p class="section-sub reveal">${subtitle}</p>
    `;
  }

  // ── Brand / Nav ──────────────────────────────────────────────
  document.title = `${C.brand.name} — SEO Specialist & Consultant`;
  $('#footer-tagline').textContent = C.brand.tagline;

  // Nav links
  const navFragment = document.createDocumentFragment();
  const navMobFragment = document.createDocumentFragment();
  const sectionIds = ['packages', 'assessment', 'contact'];
  C.brand.nav.forEach((label, i) => {
    const id = sectionIds[i] || label.toLowerCase();
    const li1 = el('li', '', `<a href="#${id}">${label}</a>`);
    const li2 = el('li', '', `<a href="#${id}">${label}</a>`);
    navFragment.appendChild(li1);
    navMobFragment.appendChild(li2);
  });
  $('#nav-links').appendChild(navFragment);
  $('#nav-mobile-links').appendChild(navMobFragment);

  // Burger toggle
  const burger = $('#nav-burger');
  const mobileMenu = $('#nav-mobile');
  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
  });
  // Close mobile menu on link click
  $$('#nav-mobile-links a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    });
  });

  // Sticky nav
  const navbar = $('#navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Hero ─────────────────────────────────────────────────────
  $('#hero-badge').innerHTML = `<span>${C.brand.tagline}</span>`;
  $('#hero-h1-line1').textContent = C.hero.headline;
  $('#hero-h1-line2').textContent = C.hero.headlineAccent;
  $('#hero-sub').textContent = C.hero.subheadline;
  $('#hero-cta1').textContent = C.hero.cta1;
  $('#hero-cta2').textContent = C.hero.cta2;

  // ── Section 01: Website Packages ─────────────────────────────
  sectionHeader($('#section-header-packages'), {
    num: C.websitePackages.sectionNumber,
    title: C.websitePackages.title,
    subtitle: C.websitePackages.subtitle,
  });
  renderPricingCards('#pricing-grid-website', C.websitePackages.packages, { showMonthly: true });
  $('#website-cta').textContent = C.websitePackages.cta;

  // ── Section 04: Assessment ────────────────────────────────────
  const A = C.assessment;
  $('#assess-num').textContent = A.sectionNumber;
  $('#assess-title').textContent = A.title;
  $('#assess-sub').textContent = A.subtitle;
  $('#assess-price').innerHTML = `<span class="price-num">${A.price}</span><span class="price-label">one-time investment</span>`;
  $('#assess-desc').textContent = A.description;
  $('#assess-cta').textContent = A.cta;

  const benefitsContainer = $('#assessment-benefits');
  A.benefits.forEach((b, i) => {
    const card = el('div', 'benefit-card reveal');
    card.style.transitionDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="benefit-num">${b.num}</div>
      <div>
        <div class="benefit-title">${b.title}</div>
        <div class="benefit-body">${b.body}</div>
      </div>
    `;
    benefitsContainer.appendChild(card);
  });

  // ── Section 05: CRM ───────────────────────────────────────────
  sectionHeader($('#section-header-crm'), {
    num: C.crm.sectionNumber,
    title: C.crm.title,
    subtitle: C.crm.subtitle,
  });
  const crmFeatures = $('#crm-features');
  C.crm.features.forEach(f => {
    const card = el('div', 'crm-card reveal');
    card.innerHTML = `
      <div class="crm-icon">${f.icon}</div>
      <div class="crm-title">${f.title}</div>
      <div class="crm-body">${f.body}</div>
    `;
    crmFeatures.appendChild(card);
  });

  // CRM comparison table
  const table = $('#crm-table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  thead.innerHTML = `<tr>${C.crm.comparison.headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
  C.crm.comparison.rows.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = row.map((cell, i) => {
      if (i === 0) return `<td style="font-weight:600;color:var(--text)">${cell}</td>`;
      if (i === 1) return `<td class="col-without">${cell}</td>`;
      return `<td><span class="col-with">${cell}</span></td>`;
    }).join('');
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);

  // ── Section 06: Why ───────────────────────────────────────────
  sectionHeader($('#section-header-why'), {
    title: C.whyUs.title,
    subtitle: C.whyUs.subtitle,
  });
  const whyGrid = $('#why-grid');
  C.whyUs.cards.forEach((card, i) => {
    const div = el('div', 'why-card reveal');
    div.style.transitionDelay = `${i * 60}ms`;
    div.innerHTML = `
      <span class="why-icon">${card.icon}</span>
      <div class="why-title">${card.title}</div>
      <div class="why-body">${card.body}</div>
    `;
    whyGrid.appendChild(div);
  });

  // ── Form ──────────────────────────────────────────────────────
  $('#form-title').textContent = C.form.title;
  $('#form-sub').textContent = C.form.subtitle;

  // Step tabs
  const stepsContainer = $('#form-steps');
  C.form.steps.forEach((step, i) => {
    const btn = el('button', 'form-step-btn', `
      <div class="step-circle">${step.num}</div>
      <span class="step-label">${step.label}</span>
    `);
    btn.type = 'button';
    btn.dataset.step = i + 1;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('id', `step-tab-${i + 1}`);
    btn.setAttribute('aria-controls', `step-${i + 1}`);
    if (i === 0) btn.classList.add('active');
    stepsContainer.appendChild(btn);
  });

  // Services checkboxes
  const servicesGrid = $('#services-grid');
  C.form.services.forEach(service => {
    const label = document.createElement('label');
    label.className = 'service-check';
    label.innerHTML = `
      <input type="checkbox" name="service" value="${service}" />
      <div class="check-box">✓</div>
      <span class="check-label">${service}</span>
    `;
    label.addEventListener('click', () => {
      label.classList.toggle('selected');
    });
    label.querySelector('input').addEventListener('change', e => {
      label.classList.toggle('selected', e.target.checked);
    });
    servicesGrid.appendChild(label);
  });

  // Budget & Timeline selects
  const budgetSel = $('#budget');
  C.form.budgets.forEach(b => {
    const o = document.createElement('option');
    o.value = b; o.textContent = b;
    budgetSel.appendChild(o);
  });
  const timelineSel = $('#timeline');
  C.form.timelines.forEach(t => {
    const o = document.createElement('option');
    o.value = t; o.textContent = t;
    timelineSel.appendChild(o);
  });

  // Submit button text
  $('#btn-submit').textContent = C.form.submitCta;

  // Multi-step logic
  let currentStep = 1;
  const totalSteps = C.form.steps.length;
  const btnPrev = $('#btn-prev');
  const btnNext = $('#btn-next');
  const btnSubmit = $('#btn-submit');
  const stepBtns = $$('.form-step-btn');

  function updateStepUI() {
    $$('.form-panel').forEach((p, i) => {
      p.classList.toggle('active', i + 1 === currentStep);
    });
    stepBtns.forEach((btn, i) => {
      const stepNum = i + 1;
      btn.classList.toggle('active', stepNum === currentStep);
      btn.classList.toggle('done', stepNum < currentStep);
    });
    btnPrev.disabled = currentStep === 1;
    if (currentStep === totalSteps) {
      btnNext.style.display = 'none';
      btnSubmit.style.display = 'inline-flex';
    } else {
      btnNext.style.display = 'inline-flex';
      btnSubmit.style.display = 'none';
    }
  }

  btnNext.addEventListener('click', () => {
    if (currentStep < totalSteps) { currentStep++; updateStepUI(); }
  });
  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) { currentStep--; updateStepUI(); }
  });

  // Form submit
  const formEl = $('#consultation-form');
  const successEl = $('#form-success');
  formEl.addEventListener('submit', e => {
    e.preventDefault();
    formEl.style.display = 'none';
    successEl.classList.add('visible');
  });

  updateStepUI();

  // Footer
  const footerLinks = $('#footer-links');
  const footerNavIds = ['packages', 'assessment', 'contact'];
  C.footer.links.forEach((label, i) => {
    const id = footerNavIds[i] || label.toLowerCase();
    footerLinks.appendChild(el('li', '', `<a href="#${id}">${label}</a>`));
  });
  $('#footer-legal').textContent = C.footer.legal;

  // ── Pricing Card Builder ──────────────────────────────────────
  function renderPricingCards(selector, packages, opts) {
    const container = $(selector);
    packages.forEach((pkg, i) => {
      const card = el('div', `pricing-card reveal${pkg.popular ? ' popular' : ''}`);
      card.style.transitionDelay = `${i * 80}ms`;
      card.innerHTML = `
        ${pkg.popular ? `<div class="popular-badge">Most Popular</div>` : ''}
        <div class="card-name">${pkg.name}</div>
        <div class="card-price">${pkg.price}${pkg.period ? `<small>${pkg.period}</small>` : ''}</div>
        ${opts.showMonthly && pkg.monthly ? `<div class="card-monthly">or ${pkg.monthly} over 12 months</div>` : ''}
        <div class="card-desc">${pkg.description}</div>
        <ul class="card-features">
          ${pkg.features.map(f => `
            <li class="card-feature">
              <span class="feature-check" aria-hidden="true">✓</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
        <a href="#contact" class="btn ${pkg.popular ? 'btn-primary' : 'btn-ghost'} card-cta">
          Get Started
        </a>
      `;
      container.appendChild(card);
    });
  }

  // ── Scroll Reveal ─────────────────────────────────────────────
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe existing reveals, then re-observe after DOM settles
  function observeAll() {
    $$('.reveal').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });
  }
  observeAll();
  // Small delay to catch dynamically-appended elements
  setTimeout(observeAll, 100);

  // ── Smooth anchor fallback for older browsers ─────────────────
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.getElementById(anchor.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
