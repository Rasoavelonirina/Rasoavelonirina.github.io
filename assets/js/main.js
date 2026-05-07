/* =============================================
   MAIN — orchestrator
   - i18n switch
   - Nav scroll state
   - Mobile nav
   - Smooth-scroll to anchors
   ============================================= */

(function () {
  /* ---------- i18n ---------- */
  const STORAGE_KEY = 'portfolio.lang';
  const DEFAULT_LANG = 'fr';
  const supported = ['fr', 'en'];

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supported.includes(saved)) return saved;
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return supported.includes(browser) ? browser : DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = dict[key];
      if (val == null) return;

      // For meta description, set "content" attribute
      if (el.tagName === 'META') {
        el.setAttribute('content', val);
        return;
      }
      // For title element, set textContent
      if (el.tagName === 'TITLE') {
        el.textContent = val;
        document.title = val;
        return;
      }

      // Allow simple HTML (e.g. <br>, &amp; entities)
      el.innerHTML = val;
    });

    // Update CV link to right language
    const cvHrefMap = {
      fr: 'assets/cv/cv-fr.pdf',
      en: 'assets/cv/cv-en.pdf',
    };
    document.querySelectorAll('#cvLink, #cvLink2').forEach(link => {
      link.setAttribute('href', cvHrefMap[lang] || cvHrefMap.fr);
    });

    // Update toggle visual
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(span => {
      span.classList.toggle('active', span.dataset.lang === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangToggle() {
    const toggle = document.getElementById('langToggle');
    if (!toggle) return;
    toggle.addEventListener('click', (e) => {
      const target = e.target.closest('[data-lang]');
      if (!target) return;
      const lang = target.dataset.lang;
      if (!supported.includes(lang)) return;
      applyLang(lang);
    });
  }

  /* ---------- Nav scroll state ---------- */
  function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile nav (with backdrop + body lock) ---------- */
  function initMobileNav() {
    const btn = document.getElementById('navMobile');
    const links = document.querySelector('.nav-links');
    if (!btn || !links) return;

    // Create backdrop element
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    function open() {
      links.classList.add('is-open');
      btn.classList.add('is-open');
      backdrop.classList.add('is-active');
      document.body.classList.add('nav-locked');
      btn.setAttribute('aria-expanded', 'true');
    }
    function close() {
      links.classList.remove('is-open');
      btn.classList.remove('is-open');
      backdrop.classList.remove('is-active');
      document.body.classList.remove('nav-locked');
      btn.setAttribute('aria-expanded', 'false');
    }
    function toggle() {
      links.classList.contains('is-open') ? close() : open();
    }

    btn.addEventListener('click', toggle);
    backdrop.addEventListener('click', close);

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', close);
    });

    // Close with Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('is-open')) close();
    });

    // Close on resize back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720 && links.classList.contains('is-open')) close();
    });
  }

  /* ---------- Smooth scroll fallback (for browsers ignoring CSS) ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ---------- Boot sequence ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    // i18n first
    applyLang(getLang());
    initLangToggle();
    initNavScroll();
    initMobileNav();
    initSmoothScroll();

    // Loader → reveal hero → start scroll-triggered animations
    if (window.PortfolioAnimations) {
      window.PortfolioAnimations.runLoader().then(() => {
        window.PortfolioAnimations.revealHero();
        window.PortfolioAnimations.init();
      });
    }
  });
})();
