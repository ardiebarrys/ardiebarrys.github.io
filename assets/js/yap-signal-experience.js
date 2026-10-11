(function () {
  'use strict';
  var root = document.getElementById('yap-circuit-lab');
  if (!root || root.dataset.thoughtReady === 'true') return;
  root.dataset.thoughtReady = 'true';

  var steps = [
    {
      key: 'input',
      title: '1. A force arrives',
      label: 'Mechanical input ON',
      copy: 'The surface under the cell stiffens, or the cell is stretched. Adhesions and the cytoskeleton carry that physical information inward.',
      watch: 'Yellow arrows push in; the cyan signal moves toward the nucleus.'
    },
    {
      key: 'control',
      title: '2. The cell interprets it',
      label: 'Signals are being integrated',
      copy: 'Several control systems set how much YAP/TAZ reaches the nucleus and what it does there. Hippo signaling matters, but it is not the only input.',
      watch: 'The signal is on, but its strength depends on the cell’s state.'
    },
    {
      key: 'withdrawal',
      title: '3. The force is removed',
      label: 'Mechanical input OFF',
      copy: 'The surface returns to its earlier state. Now the question is whether the response falls, or activity remains after the cue is gone.',
      watch: 'The force arrows vanish. The cyan signal may linger.'
    },
    {
      key: 'recovery',
      title: '4. The cell attempts to reset',
      label: 'Resolution and recovery',
      copy: 'Termination mechanisms lower signaling, but chromatin, the cytoskeleton or the matrix may keep a trace of the earlier force. Recovery is a process, not an OFF switch.',
      watch: 'A low signal does not prove the whole cell has reset.'
    },
    {
      key: 'challenge',
      title: '5. Apply a second force',
      label: 'Second challenge',
      copy: 'Apply a new force. Does the cell respond as before, or has its history changed the response? This tests whether mechanosensitivity truly recovered.',
      watch: 'Compare with the first response to reveal hidden persistence.'
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
    play.textContent = '▶ Play all';
    play.setAttribute('aria-pressed', 'false');
  }
  function start() {
    if (reducedMotion) {
      show(current + 1);
      return;
    }
    if (timer) { stop(); return; }
    play.textContent = 'Ⅱ Pause';
    play.setAttribute('aria-pressed', 'true');
    timer = window.setInterval(function () {
      if (current >= steps.length - 1) { stop(); show(0); return; }
      show(current + 1);
    }, 3200);
  }
  next.addEventListener('click', function () { stop(); show(current + 1); });
  play.addEventListener('click', start);
  show(0);

  // Run the looping animations only while the stage is visible, so scrolling stays smooth.
  if ('IntersectionObserver' in window) {
    stage.classList.add('is-paused');
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      stage.classList.toggle('is-paused', !visible);
      if (!visible && timer) stop();
    }).observe(stage);
  }
})();