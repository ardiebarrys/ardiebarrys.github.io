/* Shared navigation, discovery and interface behavior. No rendering dependencies. */
(function () {
  "use strict";
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var menu = document.getElementById('site-menu');
  var main = document.querySelector('main, [role="main"]');
  var anchor = document.getElementById('site-content');
  if (main && anchor) { anchor.removeAttribute('id'); main.id = 'site-content'; main.tabIndex = -1; }
  if (menu) {
    menu.classList.add("is-enhanced");
    var summary = menu.querySelector('summary');
    var panel = menu.querySelector('.site-menu-panel');
    var close = menu.querySelector('[data-menu-close]');
    close.hidden = false;
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'true'); panel.setAttribute('aria-label', 'Explore the site');
    summary.setAttribute('aria-controls', 'site-menu-panel');
    function closeMenu() { menu.open = false; summary.focus(); }
    close.addEventListener('click', closeMenu);
    menu.addEventListener('toggle', function () {
      summary.setAttribute('aria-expanded', String(menu.open));
      if (menu.open) close.focus();
    });
    menu.addEventListener('keydown', function (event) {
      if (!menu.open) return;
      if (event.key === 'Escape') { event.preventDefault(); closeMenu(); return; }
      if (event.key !== 'Tab') return;
      var focusable = Array.from(panel.querySelectorAll('a[href], button:not([disabled])')).filter(function (el) { return el.getClientRects().length; });
      var first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === summary)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    panel.addEventListener('click', function (event) { if (event.target === panel) closeMenu(); });
  }
  document.querySelectorAll('[data-copy-email]').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', async function () {
      var status = button.parentElement.querySelector('[role="status"]');
      try { await navigator.clipboard.writeText('ardiebarrys@gmail.com'); status.textContent = 'Email address copied.'; }
      catch (error) { status.textContent = 'Email: ardiebarrys@gmail.com'; }
    });
  });

  // Search the real publication records. Original abstracts and citation tools stay intact.
  var publicationRoot = document.querySelector('.pubs');
  var searchTools = document.getElementById('publication-filters');
  if (publicationRoot && searchTools) {
    var search = document.getElementById('publication-search');
    var track = document.getElementById('publication-track');
    var year = document.getElementById('publication-year');
    var status = document.getElementById('publication-results');
    var empty = document.getElementById('publication-empty');
    var records = Array.from(publicationRoot.querySelectorAll('.pub')).map(function (article) {
      return { element: article, text: article.textContent.toLocaleLowerCase(), track: article.dataset.project || 'other', year: article.dataset.year };
    });
    var groups = Array.from(publicationRoot.querySelectorAll('.pub-year'));
    function applyFilters() {
      var words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean), count = 0;
      records.forEach(function (record) {
        var match = (!track.value || record.track === track.value) && (!year.value || record.year === year.value) && words.every(function (word) { return record.text.includes(word); });
        record.element.hidden = !match; if (match) count++;
      });
      groups.forEach(function (group) { group.hidden = !Array.from(group.querySelectorAll('.pub')).some(function (article) { return !article.hidden; }); });
      status.textContent = count + ' of ' + records.length + (records.length === 1 ? ' publication' : ' publications');
      empty.hidden = count > 0;
    }
    var timer;
    search.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(applyFilters, 150); });
    track.addEventListener('change', applyFilters); year.addEventListener('change', applyFilters);
    document.querySelectorAll('[data-clear-publications]').forEach(function (button) { button.addEventListener('click', function () { clearTimeout(timer); search.value = ''; track.value = ''; year.value = ''; applyFilters(); search.focus(); }); });
    searchTools.hidden = false; applyFilters();
  }

  var form = document.querySelector('.contact-form');
  if (form && window.fetch) {
    var formStatus = document.getElementById('contact-form-status');
    form.addEventListener('submit', async function (event) {
      if (!formStatus) return;
      event.preventDefault();
      if (!form.reportValidity()) return;
      var button = form.querySelector('[type="submit"]');
      button.disabled = true; button.textContent = 'Sending…'; form.setAttribute('aria-busy', 'true'); formStatus.textContent = 'Sending your message…';
      try {
        var response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('Message not sent');
        form.reset(); formStatus.textContent = 'Message sent. Thank you for getting in touch.'; formStatus.dataset.state = 'success';
      } catch (error) { formStatus.textContent = 'Your message could not be sent. Try again or email ardiebarrys@gmail.com.'; formStatus.dataset.state = 'error'; }
      finally { button.disabled = false; button.textContent = 'Send message'; form.removeAttribute('aria-busy'); }
    });
  }

  // Animate only supporting portfolio sections, once. Reading and 3D controls stay stable.
  if (!motion.matches && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.remove('site-reveal-pending'); observer.unobserve(entry.target); } }); }, { threshold: 0.06 });
    document.querySelectorAll('.home-tracks, .home-pair, .news, .project-feature, .bio-layout, .contact-top-grid').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add('site-reveal-pending'); observer.observe(el);
    });
    motion.addEventListener('change', function () { if (motion.matches) { document.querySelectorAll('.site-reveal-pending').forEach(function (el) { el.classList.remove('site-reveal-pending'); }); observer.disconnect(); } });
  }
})();
