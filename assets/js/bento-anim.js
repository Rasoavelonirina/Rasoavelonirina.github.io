/* =============================================
   BENTO ANIMATIONS
   - Loader (4 stages, ~2s)
   - Counters count-up
   - Bento cards stagger-reveal on scroll
   - Pipeline SVG line draw + dots flow
   - Hero card title word-by-word reveal
   ============================================= */

window.PortfolioAnimations = (function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = () => typeof gsap !== 'undefined';
  const hasST = () => typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (hasST()) gsap.registerPlugin(ScrollTrigger);

  /* ---------- LOADER (skips on revisits within same session) ---------- */
  function runLoader() {
    return new Promise(resolve => {
      const loader = document.getElementById('loader');
      if (!loader) { resolve(); return; }

      // Skip if already shown in this session (prevents annoying re-runs on reload)
      try {
        if (sessionStorage.getItem('portfolio.loaderShown') === '1') {
          loader.classList.add('is-done');
          setTimeout(resolve, 50);
          return;
        }
      } catch (_) { /* sessionStorage may be blocked */ }

      const progress = document.getElementById('loaderProgress');
      const status = document.getElementById('loaderStatus');
      const stages = [
        { pct: 22, text: 'Loading sources…' },
        { pct: 48, text: 'Streaming pipelines…' },
        { pct: 74, text: 'Materializing views…' },
        { pct: 100, text: 'Ready.' },
      ];
      let i = 0;
      function next() {
        if (i >= stages.length) {
          loader.classList.add('is-done');
          try { sessionStorage.setItem('portfolio.loaderShown', '1'); } catch (_) {}
          setTimeout(resolve, 500);
          return;
        }
        const s = stages[i];
        progress.style.width = s.pct + '%';
        status.textContent = s.text;
        i++;
        setTimeout(next, 320 + Math.random() * 160);
      }
      next();
    });
  }

  /* ---------- HERO REVEAL ---------- */
  function revealHero() {
    if (prefersReduced || !hasGSAP()) return;

    // Stagger reveal of hero cards
    gsap.set('.bento-hero .card', { opacity: 0, y: 30, scale: 0.96 });
    gsap.to('.bento-hero .card', {
      opacity: 1, y: 0, scale: 1,
      duration: 0.9,
      stagger: 0.08,
      ease: 'expo.out',
    });

    // Hero word-by-word
    gsap.set('.card-hero .word', { opacity: 0, y: 20 });
    gsap.to('.card-hero .word', {
      opacity: 1, y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'expo.out',
      delay: 0.3,
    });
  }

  /* ---------- COUNTERS ---------- */
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;
    const animate = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1500;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * ease(t));
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(c => io.observe(c));
    } else {
      counters.forEach(animate);
    }
  }

  /* ---------- BENTO SCROLL REVEAL ---------- */
  function initScrollReveal() {
    if (prefersReduced || !hasST()) return;

    // Section headers
    document.querySelectorAll('.card-header').forEach(h => {
      gsap.set(h, { opacity: 0, y: 24 });
      gsap.to(h, {
        opacity: 1, y: 0, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: h, start: 'top 88%' }
      });
    });

    // Skill cards
    const skillCards = document.querySelectorAll('.bento-skills .card-skill');
    if (skillCards.length) {
      gsap.set(skillCards, { opacity: 0, y: 40, scale: 0.96 });
      gsap.to(skillCards, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8, stagger: 0.08, ease: 'expo.out',
        scrollTrigger: { trigger: '.bento-skills', start: 'top 80%' }
      });
    }

    // Project cards
    const projectCards = document.querySelectorAll('.bento-projects .card-project');
    if (projectCards.length) {
      gsap.set(projectCards, { opacity: 0, y: 50, scale: 0.96 });
      gsap.to(projectCards, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.9, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.bento-projects', start: 'top 80%' }
      });
    }

    // Career items
    const careerItems = document.querySelectorAll('.career-item');
    if (careerItems.length) {
      gsap.set(careerItems, { opacity: 0, x: -20 });
      careerItems.forEach((item, i) => {
        gsap.to(item, {
          opacity: 1, x: 0, duration: 0.7, ease: 'expo.out',
          scrollTrigger: { trigger: item, start: 'top 88%' }
        });
      });
    }

    // Career title
    const careerTitle = document.querySelector('.career-title');
    if (careerTitle) {
      gsap.set(careerTitle, { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' });
      gsap.to(careerTitle, {
        opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)',
        duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: careerTitle, start: 'top 85%' }
      });
    }

    // Contact cards
    const contactCards = document.querySelectorAll('.bento-contact .card');
    if (contactCards.length) {
      gsap.set(contactCards, { opacity: 0, y: 30, scale: 0.96 });
      gsap.to(contactCards, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8, stagger: 0.07, ease: 'expo.out',
        scrollTrigger: { trigger: '.bento-contact', start: 'top 80%' }
      });
    }

    // Marquee fade-in
    const marquee = document.querySelector('.marquee-section');
    if (marquee) {
      gsap.set(marquee, { opacity: 0 });
      gsap.to(marquee, {
        opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: marquee, start: 'top 90%' }
      });
    }
  }

  /* ---------- PIPELINE SVG ---------- */
  function initPipeline() {
    const lines = document.querySelectorAll('.pipe-line');
    const nodes = document.querySelectorAll('.pipe-node');
    const dots = document.querySelectorAll('.pipe-dot');
    if (!lines.length || !hasGSAP()) return;

    if (!prefersReduced && hasST()) {
      lines.forEach(line => {
        const length = line.getTotalLength();
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;
      });
      gsap.set(nodes, { opacity: 0, scale: 0.5, transformOrigin: '50% 50%' });
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.pipeline-showcase', start: 'top 75%' }
      });
      tl
        .to(nodes, { opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: 'back.out(1.6)' })
        .to(lines, { strokeDashoffset: 0, duration: 1, stagger: 0.12, ease: 'power2.out' }, '-=0.3');
    }

    // Flowing dots along the pipe segments
    if (!dots.length || prefersReduced) return;
    const segments = [
      { x1: 120, x2: 350 },
      { x1: 450, x2: 680 },
      { x1: 780, x2: 1010 },
      { x1: 1110, x2: 1180 },
    ];
    dots.forEach((dot, i) => {
      const tl = gsap.timeline({ repeat: -1, delay: i * 0.6 });
      segments.forEach((seg, idx) => {
        tl.fromTo(dot,
          { attr: { cx: seg.x1, cy: 80 }, opacity: 0 },
          { attr: { cx: seg.x2, cy: 80 }, opacity: 1, duration: 1.4, ease: 'none',
            onStart: () => gsap.to(dot, { opacity: 1, duration: 0.2 }) }
        );
        if (idx < segments.length - 1) tl.to(dot, { opacity: 0, duration: 0.2 });
      });
      tl.to(dot, { opacity: 0, duration: 0.3 });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    initCounters();
    initScrollReveal();
    initPipeline();
    if (hasST()) {
      window.addEventListener('resize', () => ScrollTrigger.refresh());
    }
  }

  return { init, runLoader, revealHero };
})();
