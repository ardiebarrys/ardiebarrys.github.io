(() => {
  'use strict';
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 767px)');
  const nav = document.querySelector('.primary-nav');
  const toggle = nav?.querySelector('.mobile-nav-toggle');
  const panel = nav?.querySelector('.primary-panel');
  const dropdowns = [...(nav?.querySelectorAll('.dropdown-toggle') || [])];
  const focusable = container => [...container.querySelectorAll('a[href],button:not([disabled])')].filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
  nav?.querySelectorAll('ul').forEach(list => [...list.children].forEach((li, index) => li.style.setProperty('--item-index', index)));
  function closeDropdown(button, restore = false) {
    button.setAttribute('aria-expanded', 'false');
    document.getElementById(button.getAttribute('aria-controls')).inert = true;
    if (restore) button.focus();
  }
  function closePanel(restore = true) {
    if (!toggle) return;
    const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    panel.inert = mobile.matches;
    dropdowns.forEach(button => closeDropdown(button));
    if (restore && wasOpen) toggle.focus();
  }
  dropdowns.forEach(button => {
    const menu = document.getElementById(button.getAttribute('aria-controls'));
    menu.inert = true;
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      dropdowns.forEach(other => closeDropdown(other));
      button.setAttribute('aria-expanded', String(open));
      menu.inert = !open;
      if (open) menu.querySelector('a')?.focus();
    });
  });
  toggle?.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') return closePanel();
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    panel.inert = false;
    panel.querySelector('button,a')?.focus();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const open = dropdowns.find(button => button.getAttribute('aria-expanded') === 'true');
      if (open) {closeDropdown(open, true); event.preventDefault();}
      else closePanel();
    }
    if (event.key === 'Tab' && mobile.matches && toggle?.getAttribute('aria-expanded') === 'true') {
      const items = [toggle, ...focusable(panel)];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || !items.includes(document.activeElement))) {event.preventDefault(); last.focus();}
      else if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first.focus();}
    }
  });
  document.addEventListener('click', event => {
    if (nav && (!nav.contains(event.target) || event.target === panel)) closePanel();
    else dropdowns.forEach(button => {if (!button.parentElement.contains(event.target)) closeDropdown(button);});
    if (event.target.closest('.primary-panel a')) closePanel(false);
  });
  nav?.addEventListener('focusout', () => setTimeout(() => {
    if (!nav.contains(document.activeElement)) closePanel(false);
  }, 0));
  mobile.addEventListener('change', () => closePanel(false));
  closePanel(false);

  // Reveal stays visible without JS, unsupported observers or reduced motion.
  let revealObserver;
  const reveals = [...document.querySelectorAll('[data-reveal]')];
  function revealAll() {
    revealObserver?.disconnect();
    reveals.forEach(el => el.classList.remove('reveal-pending'));
  }
  if (!motion.matches && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('reveal-pending');
      revealObserver.unobserve(entry.target);
    }), {rootMargin:'0px 0px -12% 0px'});
    reveals.forEach(el => {
      const siblings = [...el.parentElement.children].filter(child => child.hasAttribute('data-reveal'));
      el.style.setProperty('--reveal-delay', `${(siblings.indexOf(el) % 5) * 60}ms`);
      el.classList.add('reveal-ready');
      if (el.getBoundingClientRect().top > innerHeight) el.classList.add('reveal-pending');
      revealObserver.observe(el);
    });
  }
  const counts = [...document.querySelectorAll('[data-count]')];
  const countFrames = new Set();
  function finishCounters() {countFrames.forEach(cancelAnimationFrame);countFrames.clear();counts.forEach(el => el.textContent = el.dataset.count);}
  if (!motion.matches && 'IntersectionObserver' in window) {
    const counters = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      counters.unobserve(entry.target);
      const start = performance.now(), target = Number(entry.target.dataset.count);
      function tick(now) {
        if (motion.matches) return finishCounters();
        const progress = Math.min(1, (now - start) / 1200);
        entry.target.textContent = Math.round(target * (1 - (1 - progress) ** 3));
        if (progress < 1) countFrames.add(requestAnimationFrame(tick));
      }
      countFrames.add(requestAnimationFrame(tick));
    }), {threshold:.8});
    counts.forEach(el => counters.observe(el));
  }
  document.querySelectorAll('.home-card,.home-track,.scf-paper-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      if (motion.matches || event.pointerType === 'touch') return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    });
  });
  const cssScroll = CSS.supports('animation-timeline: view()');
  const layers = [...document.querySelectorAll('.hero-layer')];
  const hero = document.querySelector('.painted-hero');
  const progress = document.querySelector('.reading-progress span');
  let queued = false;
  function updateScroll() {
    queued = false;
    if (cssScroll || motion.matches) return;
    if (hero && !mobile.matches) {
      const offset = Math.max(0, Math.min(hero.offsetHeight, -hero.getBoundingClientRect().top));
      layers.forEach(layer => {layer.style.transform = `translateY(${offset * Number(layer.dataset.speed) * .19}px)`;});
    }
    if (progress) {
      const distance = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, scrollY / distance) : 1})`;
    }
  }
  function scheduleScroll() {if (!queued) {queued = true; requestAnimationFrame(updateScroll);}}
  if (!cssScroll) {addEventListener('scroll', scheduleScroll, {passive:true});addEventListener('resize', scheduleScroll, {passive:true});updateScroll();}
  function resetMotion() {revealAll();finishCounters();layers.forEach(layer => layer.style.removeProperty('transform'));if (progress) progress.style.removeProperty('transform');scheduleScroll();}
  motion.addEventListener('change', resetMotion);
  mobile.addEventListener('change', resetMotion);
})();
