(function () {
  'use strict';
  var root = document.getElementById('yap-circuit-lab');
  if (!root || root.dataset.thoughtReady === 'true') return;
  root.dataset.thoughtReady = 'true';

  // Remove theme-generated title banners that sit before the page's own content.
  function hideGeneratedPageHeading() {
    var node = root;
    var titleHints = /YAP\\/TAZ Signal-Resolution Circuit|An interactive exploration of the proposed YAP\\/TAZ mechanochemical signal-resolution circuit/i;
    while (node && node.parentElement) {
      var sibling = node.previousElementSibling;
      while (sibling) {
        var previous = sibling.previousElementSibling;
        var text = (sibling.innerText || sibling.textContent || '').replace(/\\s+/g, ' ').trim();
        var classes = typeof sibling.className === 'string' ? sibling.className : '';
        var isThemeHeader = /post-header|page-header|post-title|page-title|page-heading|header-section|post-description/i.test(classes);
        if (isThemeHeader || titleHints.test(text)) {
          sibling.style.setProperty('display', 'none', 'important');
          sibling.style.setProperty('min-height', '0', 'important');
          sibling.style.setProperty('height', '0', 'important');
          sibling.style.setProperty('margin', '0', 'important');
          sibling.style.setProperty('padding', '0', 'important');
          sibling.setAttribute('aria-hidden', 'true');
        }
        sibling = previous;
      }
      if (node.matches && node.matches('main')) break;
      node = node.parentElement;
    }
  }
  hideGeneratedPageHeading();

  var steps = [
    {
      key: 'input',
      title: '1. A force arrives',
      label: 'Mechanical input ON',
      copy: 'Imagine the cell sitting on a surface that becomes stiffer, or being stretched. The cell does not “think” in words: proteins, adhesions and the cytoskeleton transmit physical information inward.',
      watch: 'Watch the yellow arrows enter the cell and the cyan signal begin moving toward the nucleus.'
    },
    {
      key: 'control',
      title: '2. The cell interprets it',
      label: 'Signals are being integrated',
      copy: 'Several control systems influence how much YAP/TAZ reaches the nucleus and what it can do there. Hippo signaling is important, but it is not the only input.',
      watch: 'The signal is active, but its strength depends on the cell’s state and context.'
    },
    {
      key: 'withdrawal',
      title: '3. The force is removed',
      label: 'Mechanical input OFF',
      copy: 'Now the surface returns to its earlier condition. The key question changes: can the cell reduce the response, or does activity remain after the original cue disappears?',
      watch: 'The yellow force arrows disappear. The cyan signal does not necessarily vanish instantly.'
    },
    {
      key: 'recovery',
      title: '4. The cell attempts to reset',
      label: 'Resolution and recovery',
      copy: 'Termination mechanisms can reduce signaling. Meanwhile, chromatin, the cytoskeleton or the surrounding matrix may retain a trace of the earlier experience. Recovery is a process, not just an OFF switch.',
      watch: 'A low signal is not proof that every part of the cell has returned to its earlier state.'
    },
    {
      key: 'challenge',
      title: '5. Apply a second force',
      label: 'Second challenge',
      copy: 'Give the cell a new mechanical input. Does it respond in a familiar way, or has its history changed the response? This second challenge helps test whether mechanosensitivity has actually recovered.',
      watch: 'Compare this response with the first one. The proposed framework predicts that the comparison can reveal hidden persistence.'
    }
  ];
  var stage = root.querySelector('#thought-cell-stage');
  var title = root.querySelector('#thought-step-title');
  var label = root.querySelector('#thought-step-label');
  var copy = root.querySelector('#thought-step-copy');
  var watch = root.querySelector('#thought-watch');
  var next = root.querySelector('#thought-next');
  var play = root.querySelector('#thought-play');
  var progress = root.querySelector('#thought-progress');
  if (!stage || !title || !label || !copy || !watch || !next || !play || !progress) return;

  var current = 0;
  var timer = null;
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var buttons = [];
  steps.forEach(function (step, index) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = String(index + 1);
    b.setAttribute('aria-label', 'Show thought experiment step ' + (index + 1) + ': ' + step.title);
    b.addEventListener('click', function () { stop(); show(index); });
    progress.appendChild(b);
    buttons.push(b);
  });

  function show(index) {
    current = (index + steps.length) % steps.length;
    var item = steps[current];
    stage.setAttribute('data-phase', item.key);
    title.textContent = item.title;
    label.textContent = item.label;
    copy.textContent = item.copy;
    watch.textContent = item.watch;
    buttons.forEach(function (b, i) {
      if (i === current) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
    next.textContent = current === steps.length - 1 ? 'Replay from start ↺' : 'Next step →';
    stage.classList.remove('thought-refresh');
    void stage.offsetWidth;
    stage.classList.add('thought-refresh');
  }
  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
    play.textContent = '▶ Play walkthrough';
    play.setAttribute('aria-pressed', 'false');
  }
  function start() {
    if (reducedMotion) {
      show(current + 1);
      return;
    }
    if (timer) { stop(); return; }
    play.textContent = 'Ⅱ Pause walkthrough';
    play.setAttribute('aria-pressed', 'true');
    timer = window.setInterval(function () {
      if (current >= steps.length - 1) { stop(); show(0); return; }
      show(current + 1);
    }, 3200);
  }
  next.addEventListener('click', function () { stop(); show(current + 1); });
  play.addEventListener('click', start);
  root.querySelector('#thought-restart').addEventListener('click', function () { stop(); show(0); });
  root.querySelectorAll('[data-thought-preset]').forEach(function (b) {
    b.addEventListener('click', function () {
      stop();
      var preset = b.getAttribute('data-thought-preset');
      if (preset === 'fast') show(0);
      else if (preset === 'memory') show(3);
      else show(4);
    });
  });
  show(0);
})();