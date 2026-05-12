/* =============================================
   ANIMATIONS — Data Engineer themed
   - DAG node graph in hero (canvas + parallax)
   - Pipeline SVG: lines draw + dots flow
   - Hero text stagger reveal
   - Counter count-up
   - ScrollTrigger reveals: labels, titles, cards, timeline
   - Magnetic buttons
   - Custom cursor
   ============================================= */

window.PortfolioAnimations = (function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = () => typeof gsap !== 'undefined';
  const hasST = () => typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  if (hasST()) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- DAG canvas in hero (with parallax) ---------- */
  function initDAG() {
    const canvas = document.getElementById('dagCanvas');
    if (!canvas || prefersReduced) return;

    const ctx = canvas.getContext('2d');
    let w, h, dpr = window.devicePixelRatio || 1;

    function resize() {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', () => { resize(); buildGraph(); });

    let nodes = [];
    let edges = [];
    let particles = [];

    function buildGraph() {
      nodes = [];
      edges = [];
      const layers = 5;
      const margin = Math.min(w, h) * 0.08;
      const layerSpacing = (w - margin * 2) / (layers - 1);

      for (let layer = 0; layer < layers; layer++) {
        const count = layer === 0 || layer === layers - 1 ? 3 : (layer === 2 ? 4 : 3);
        const layerHeight = h * 0.7;
        const yStart = (h - layerHeight) / 2;
        for (let i = 0; i < count; i++) {
          const jitter = (Math.random() - 0.5) * 30;
          const baseY = count === 1 ? h / 2 : yStart + (layerHeight / (count - 1)) * i;
          nodes.push({
            x: margin + layer * layerSpacing + (Math.random() - 0.5) * 18,
            y: baseY + jitter,
            r: 2 + Math.random() * 1.5,
            layer,
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }

      nodes.forEach((node) => {
        const nextLayer = nodes.filter(n => n.layer === node.layer + 1);
        if (!nextLayer.length) return;
        const conn = 1 + Math.floor(Math.random() * 2);
        const shuffled = nextLayer.slice().sort(() => Math.random() - 0.5);
        for (let i = 0; i < Math.min(conn, shuffled.length); i++) {
          edges.push({ from: nodes.indexOf(node), to: nodes.indexOf(shuffled[i]) });
        }
      });

      particles = [];
      for (let i = 0; i < Math.min(edges.length, 10); i++) spawnParticle();
    }

    function spawnParticle() {
      if (!edges.length) return;
      const edge = edges[Math.floor(Math.random() * edges.length)];
      particles.push({
        edge,
        t: 0,
        speed: 0.0025 + Math.random() * 0.0035,
        size: 1.5 + Math.random() * 1.2,
      });
    }

    buildGraph();

    let lastSpawn = 0;
    function draw(time) {
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(45, 61, 124, 0.12)';
      ctx.lineWidth = 0.8;
      edges.forEach(edge => {
        const a = nodes[edge.from], b = nodes[edge.to];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      particles.forEach(p => {
        const a = nodes[p.edge.from], b = nodes[p.edge.to];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = 'rgba(45, 61, 124, 0.35)';
        ctx.beginPath();
        ctx.arc(
          a.x + (b.x - a.x) * Math.max(0, p.t - 0.08),
          a.y + (b.y - a.y) * Math.max(0, p.t - 0.08),
          p.size * 0.55, 0, Math.PI * 2
        );
        ctx.fill();
        ctx.fillStyle = 'rgba(45, 61, 124, 0.85)';
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.t += p.speed;
      });
      particles = particles.filter(p => p.t < 1);
      if (time - lastSpawn > 220 && particles.length < 14) {
        spawnParticle();
        lastSpawn = time;
      }

      nodes.forEach(n => {
        n.pulse += 0.02;
        const pulseR = n.r + Math.sin(n.pulse) * 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(26, 26, 26, 0.85)';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR + 4, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(45, 61, 124, 0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  /* ---------- Hero canvas parallax ---------- */
  function initHeroParallax() {
    if (!hasST() || prefersReduced) return;
    gsap.to('.hero-canvas', {
      yPercent: 25,
      opacity: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      }
    });
    gsap.to('.hero-grid-overlay', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      }
    });
  }

  /* ---------- Pipeline SVG: line draw + dots flow ---------- */
  function initPipeline() {
    const lines = document.querySelectorAll('.pipe-line');
    const nodes = document.querySelectorAll('.pipe-node');
    const dots = document.querySelectorAll('.pipe-dot');
    if (!lines.length || !hasGSAP()) return;

    if (!prefersReduced && hasST()) {
      // Prepare for stroke draw
      lines.forEach(line => {
        const length = line.getTotalLength();
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;
      });
      gsap.set(nodes, { opacity: 0, scale: 0.5, transformOrigin: '50% 50%' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.pipeline',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      });
      tl
        .to(nodes, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.6)' })
        .to(lines, { strokeDashoffset: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out' }, '-=0.3');
    }

    // Flowing dots along the pipe
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
          { attr: { cx: seg.x1, cy: 70 }, opacity: 0 },
          { attr: { cx: seg.x2, cy: 70 }, opacity: 1, duration: 1.4, ease: 'none',
            onStart: () => gsap.to(dot, { opacity: 1, duration: 0.2 }) }
        );
        if (idx < segments.length - 1) tl.to(dot, { opacity: 0, duration: 0.2 });
      });
      tl.to(dot, { opacity: 0, duration: 0.3 });
    });
  }

  /* ---------- Hero text stagger reveal ---------- */
  function revealHero() {
    if (prefersReduced || !hasGSAP()) {
      document.querySelectorAll('.hero-title .word').forEach(w => w.style.transform = 'translateY(0)');
      document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    gsap.set('.hero-title .word', { yPercent: 110 });
    gsap.set('.hero .reveal', { opacity: 0, y: 20 });

    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .to('.hero .eyebrow', { opacity: 1, y: 0, duration: 0.8 }, 0)
      .to('.hero-title .word', { yPercent: 0, duration: 1.2, stagger: 0.08 }, 0.15)
      .to('.hero-meta', { opacity: 1, y: 0, duration: 0.7 }, 0.7)
      .to('.hero-lede', { opacity: 1, y: 0, duration: 0.9 }, 0.55)
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.7 }, 0.85)
      .to('.hero-scroll', { opacity: 0.7, y: 0, duration: 0.6 }, 1.1)
      .add(() => {
        document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('is-visible'));
      });
  }

  /* ---------- Section titles & labels reveal ---------- */
  function initSectionReveals() {
    if (prefersReduced || !hasST()) {
      // Fallback: instant visible
      document.querySelectorAll('.reveal:not(.hero .reveal)').forEach(el => el.classList.add('is-visible'));
      return;
    }

    // 1) Section labels (— 0X / NAME) — slide in from left
    document.querySelectorAll('.section-label').forEach(label => {
      const num = label.querySelector('.num');
      const name = label.querySelector('.name');
      if (!num || !name) return;
      gsap.set([num, name], { opacity: 0, x: -20 });
      gsap.timeline({
        scrollTrigger: { trigger: label, start: 'top 85%' }
      })
        .to(num, { opacity: 1, x: 0, duration: 0.7, ease: 'expo.out' })
        .to(name, { opacity: 1, x: 0, duration: 0.6, ease: 'expo.out' }, '-=0.4');
    });

    // 2) Big section titles — fade up + clip reveal
    document.querySelectorAll('.section-title').forEach(title => {
      gsap.set(title, { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' });
      gsap.to(title, {
        opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)',
        duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: title, start: 'top 80%' }
      });
    });

    // 3) Contact title (dark section)
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) {
      gsap.set(contactTitle, { opacity: 0, y: 30 });
      gsap.to(contactTitle, {
        opacity: 1, y: 0, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: contactTitle, start: 'top 80%' }
      });
    }

    // 4) About paragraphs — stagger
    const aboutParas = document.querySelectorAll('.about-body p');
    if (aboutParas.length) {
      gsap.set(aboutParas, { opacity: 0, y: 28 });
      gsap.to(aboutParas, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'expo.out',
        scrollTrigger: { trigger: '.about-body', start: 'top 75%' }
      });
    }

    // 5) Stats — stagger up + counter
    const stats = document.querySelectorAll('.stat');
    if (stats.length) {
      gsap.set(stats, { opacity: 0, y: 30 });
      gsap.to(stats, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' }
      });
    }

    // 6) Expertise cards — stagger from below
    const expCards = document.querySelectorAll('.expertise-card');
    if (expCards.length) {
      gsap.set(expCards, { opacity: 0, y: 40 });
      gsap.to(expCards, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'expo.out',
        scrollTrigger: { trigger: '.expertise-grid', start: 'top 80%' }
      });
    }

    // 7) Project cards — stagger
    const projCards = document.querySelectorAll('.project-card');
    if (projCards.length) {
      gsap.set(projCards, { opacity: 0, y: 60 });
      gsap.to(projCards, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' }
      });
    }

    // 8) Timeline items — slide from left + dot pop
    const tlItems = document.querySelectorAll('.timeline-item');
    if (tlItems.length) {
      tlItems.forEach((item, i) => {
        gsap.set(item, { opacity: 0, x: -30 });
        gsap.to(item, {
          opacity: 1, x: 0, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: item, start: 'top 85%' }
        });
      });
    }

    // 9) Education items
    const eduItems = document.querySelectorAll('.edu-item');
    if (eduItems.length) {
      gsap.set(eduItems, { opacity: 0, y: 24 });
      gsap.to(eduItems, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'expo.out',
        scrollTrigger: { trigger: '.education-list', start: 'top 80%' }
      });
    }

    // 10) Contact blocks
    const contactBlocks = document.querySelectorAll('.contact-block');
    if (contactBlocks.length) {
      gsap.set(contactBlocks, { opacity: 0, y: 24 });
      gsap.to(contactBlocks, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: 'expo.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' }
      });
    }

    // 11) Contact CTA
    const contactCta = document.querySelector('.contact-cta');
    if (contactCta) {
      gsap.set(contactCta, { opacity: 0, y: 24 });
      gsap.to(contactCta, {
        opacity: 1, y: 0, duration: 0.7, ease: 'expo.out',
        scrollTrigger: { trigger: contactCta, start: 'top 90%' }
      });
    }

    // 12) Generic .reveal fallback for anything else
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.closest('.hero')) return;          // hero handled by revealHero
      if (el.classList.contains('is-visible')) return;
      gsap.fromTo(el,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%',
            onEnter: () => el.classList.add('is-visible') }
        }
      );
    });
  }

  /* ---------- Counters (kept; fires on first reveal) ---------- */
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
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
      }, { threshold: 0.5 });
      counters.forEach(c => io.observe(c));
    } else {
      counters.forEach(animate);
    }
  }

  /* ---------- Timeline progress line ---------- */
  function initTimelineProgress() {
    const list = document.querySelector('.timeline-list');
    if (!list || prefersReduced) return;
    function update() {
      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.55;
      const end = -rect.height + vh * 0.5;
      const total = start - end;
      const current = start - rect.top;
      const pct = Math.max(0, Math.min(1, current / total));
      list.style.setProperty('--progress', (pct * 100) + '%');
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* ---------- Magnetic buttons ---------- */
  function initMagnetic() {
    if (prefersReduced) return;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 0.25;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Custom cursor ---------- */
  function initCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('no-cursor');
      return;
    }
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });
    function loop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();
    document.querySelectorAll('a, button, .project-card, .expertise-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('is-hover');
        dot.classList.add('is-hover');
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('is-hover');
        dot.classList.remove('is-hover');
      });
    });
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
  }

  /* ---------- Loader (skips on revisits within same session) ---------- */
  function runLoader() {
    return new Promise(resolve => {
      const loader = document.getElementById('loader');
      if (!loader) { resolve(); return; }

      try {
        if (sessionStorage.getItem('portfolio.loaderShown') === '1') {
          loader.classList.add('is-done');
          setTimeout(resolve, 50);
          return;
        }
      } catch (_) {}

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
          setTimeout(resolve, 600);
          return;
        }
        const s = stages[i];
        progress.style.width = s.pct + '%';
        status.textContent = s.text;
        i++;
        setTimeout(next, 380 + Math.random() * 200);
      }
      next();
    });
  }

  /* ---------- Init ---------- */
  function init() {
    initDAG();
    initHeroParallax();
    initPipeline();
    initSectionReveals();
    initCounters();
    initTimelineProgress();
    initMagnetic();
    initCursor();

    // Refresh ScrollTrigger on resize
    if (hasST()) {
      window.addEventListener('resize', () => ScrollTrigger.refresh());
    }
  }

  return { init, runLoader, revealHero };
})();
