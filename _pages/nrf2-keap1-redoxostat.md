---
layout: yap-fullscreen
title: NRF2–KEAP1 Redoxostat
permalink: /research/nrf2-keap1-redoxostat/
description: An interactive visual guide to NRF2–KEAP1 redox signal resolution.
nav: false
nav_order: 100
---

<link rel="stylesheet" href="{{ '/assets/css/nrf2-redoxostat.css' | relative_url }}?v=20261009-1">

<div class="nrf2-lab" id="nrf2-redoxostat-lab">
  <a class="nrf2-home" href="{{ '/' | relative_url }}">← Back to homepage</a>

  <header class="nrf2-hero">
    <div class="nrf2-eyebrow"><span class="nrf2-live-dot"></span> REDOX SIGNAL CONTROL · INTERACTIVE REVIEW</div>
    <h1>NRF2–KEAP1 as a redox signal-resolution circuit</h1>
    <p class="nrf2-subtitle">Beyond the antioxidant switch</p>
    <p class="nrf2-byline"><strong>Ardie Barry Sailis</strong> · Independent Researcher</p>
    <div class="nrf2-hero-meta">
      <span><b>Core idea</b> Signal duration matters</span>
      <span><b>Control logic</b> Detect → adapt → resolve</span>
      <span><b>Article</b> <a href="https://doi.org/10.1016/j.pbiomolbio.2026.03.005" target="_blank" rel="noopener noreferrer">10.1016/j.pbiomolbio.2026.03.005 ↗</a></span>
    </div>
    <div class="nrf2-hero-figure" role="img" aria-label="NRF2 KEAP1 redoxostat overview: redox stress modifies the KEAP1 sensor, NRF2 becomes stabilized and enters the nucleus, antioxidant response genes are induced, and a resolution module helps restore KEAP1 control and redox balance.">
      <svg class="nrf2-desktop-diagram" viewBox="0 0 1120 360" aria-hidden="true">
        <defs>
          <linearGradient id="n2bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#183865"/><stop offset="1" stop-color="#08162e"/></linearGradient>
          <linearGradient id="n2cyan" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#67e8f9"/><stop offset="1" stop-color="#34d399"/></linearGradient>
          <marker id="n2arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#67e8f9"/></marker>
          <marker id="n2backarrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c4b5fd"/></marker>
        </defs>
        <text x="560" y="28" text-anchor="middle" class="n2-svg-title">THE REDOXOSTAT · A SIGNAL THAT MUST ALSO RESOLVE</text>
        <g class="n2-svg-node" data-figure-node="stress">
          <rect x="20" y="66" width="190" height="112" rx="16"/>
          <circle cx="53" cy="96" r="16" class="n2-icon-red"/><text x="53" y="101" text-anchor="middle" class="n2-svg-icon">!</text>
          <text x="44" y="131" class="n2-svg-head">REDOX STRESS</text>
          <text x="44" y="153" class="n2-svg-copy">ROS · electrophiles</text>
        </g>
        <path d="M212 122 H245" class="n2-svg-arrow" marker-end="url(#n2arrow)"/>
        <g class="n2-svg-node" data-figure-node="sensor">
          <rect x="252" y="66" width="190" height="112" rx="16"/>
          <circle cx="285" cy="96" r="16" class="n2-icon-violet"/><text x="285" y="101" text-anchor="middle" class="n2-svg-icon">K</text>
          <text x="276" y="131" class="n2-svg-head">KEAP1 SENSOR</text>
          <text x="276" y="153" class="n2-svg-copy">Cysteine chemistry</text>
        </g>
        <path d="M444 122 H477" class="n2-svg-arrow" marker-end="url(#n2arrow)"/>
        <g class="n2-svg-node" data-figure-node="controller">
          <rect x="484" y="66" width="190" height="112" rx="16"/>
          <circle cx="517" cy="96" r="16" class="n2-icon-cyan"/><text x="517" y="101" text-anchor="middle" class="n2-svg-icon">N</text>
          <text x="508" y="131" class="n2-svg-head">NRF2 STABILIZES</text>
          <text x="508" y="153" class="n2-svg-copy">Less turnover</text>
        </g>
        <path d="M676 122 H709" class="n2-svg-arrow" marker-end="url(#n2arrow)"/>
        <g class="n2-svg-node" data-figure-node="output">
          <rect x="716" y="66" width="190" height="112" rx="16"/>
          <circle cx="749" cy="96" r="16" class="n2-icon-green"/><text x="749" y="101" text-anchor="middle" class="n2-svg-icon">G</text>
          <text x="740" y="131" class="n2-svg-head">GENE RESPONSE</text>
          <text x="740" y="153" class="n2-svg-copy">ARE-linked program</text>
        </g>
        <path d="M908 122 H941" class="n2-svg-arrow" marker-end="url(#n2arrow)"/>
        <g class="n2-svg-node" data-figure-node="outcome">
          <rect x="948" y="66" width="152" height="112" rx="16"/>
          <circle cx="980" cy="96" r="16" class="n2-icon-gold"/><text x="980" y="101" text-anchor="middle" class="n2-svg-icon">↗</text>
          <text x="972" y="131" class="n2-svg-head">OUTCOME</text>
          <text x="972" y="153" class="n2-svg-copy">Context + time</text>
        </g>
        <path d="M1025 184 V233 H847" class="n2-svg-feedback" marker-end="url(#n2backarrow)"/>
        <rect x="366" y="218" width="478" height="84" rx="16" class="n2-svg-resolution"/>
        <text x="605" y="246" text-anchor="middle" class="n2-svg-res-title">ACTIVE RESOLUTION MODULE</text>
        <text x="605" y="269" text-anchor="middle" class="n2-svg-res-copy">KEAP1 renewal · protein turnover · autophagy</text>
        <text x="605" y="288" text-anchor="middle" class="n2-svg-res-copy">redox restoration · renewed responsiveness</text>
        <path d="M366 261 H114 V184" class="n2-svg-feedback" marker-end="url(#n2backarrow)"/>
        <text x="231" y="248" class="n2-svg-tiny">RESTORE CONTROL</text>
        <text x="560" y="335" text-anchor="middle" class="n2-svg-foot">ACTIVATION STARTS THE RESPONSE · RESOLUTION SHAPES ITS MEANING</text>
      </svg>
      <div class="nrf2-mobile-diagram" aria-hidden="true">
        <div class="n2-mobile-node stress"><span>!</span><div><b>Redox stress</b><small>ROS · electrophiles</small></div></div>
        <i>↓</i><div class="n2-mobile-node sensor"><span>K</span><div><b>KEAP1 sensor</b><small>Cysteine chemistry</small></div></div>
        <i>↓</i><div class="n2-mobile-node controller"><span>N</span><div><b>NRF2 stabilizes</b><small>Reduced turnover</small></div></div>
        <i>↓</i><div class="n2-mobile-node output"><span>G</span><div><b>Gene response</b><small>ARE-linked program</small></div></div>
        <i>↓</i><div class="n2-mobile-node outcome"><span>↗</span><div><b>Biological outcome</b><small>Context + duration</small></div></div>
        <div class="n2-mobile-return">↶ <b>Active resolution</b><small>KEAP1 renewal · turnover · autophagy · redox restoration</small></div>
      </div>
    </div>
    <p class="nrf2-figure-note">Figures and interactive outputs are conceptual illustrations, not experimental measurements.</p>
  </header>

  <section class="nrf2-panel" id="nrf2-simulator">
    <div class="nrf2-section-head"><div><span class="nrf2-kicker">01 / SIGNAL DYNAMICS</span><h2>Change the stress pattern</h2><p>Adjust the inputs and compare a brief response with a response that persists.</p></div><span class="nrf2-tag">Live simulation</span></div>
    <div class="nrf2-presets" role="group" aria-label="Stress pattern presets">
      <button type="button" class="n2-chip is-active" data-pattern="pulse">Brief pulse</button>
      <button type="button" class="n2-chip" data-pattern="repeated">Repeated pulses</button>
      <button type="button" class="n2-chip" data-pattern="chronic">Persistent stress</button>
    </div>
    <div class="nrf2-sim-layout">
      <div class="nrf2-controls">
        <label class="n2-range-row" for="n2-strength"><span>Stress intensity</span><output id="n2-strength-value">60%</output></label>
        <input id="n2-strength" type="range" min="10" max="100" step="5" value="60">
        <label class="n2-range-row" for="n2-duration"><span>Exposure duration</span><output id="n2-duration-value">35%</output></label>
        <input id="n2-duration" type="range" min="10" max="100" step="5" value="35">
        <label class="n2-range-row" for="n2-resolution"><span>Resolution capacity</span><output id="n2-resolution-value">70%</output></label>
        <input id="n2-resolution" type="range" min="10" max="100" step="5" value="70">
        <label class="n2-range-row" for="n2-redox"><span>Redox restoration</span><output id="n2-redox-value">65%</output></label>
        <input id="n2-redox" type="range" min="10" max="100" step="5" value="65">
        <button type="button" class="nrf2-reset" id="n2-reset">Reset model</button>
      </div>
      <div class="nrf2-sim-readout">
        <div class="n2-status-line"><span class="n2-status-dot"></span><span id="n2-state-label">Resolution-favored pattern</span></div>
        <svg id="n2-signal-chart" class="n2-chart" viewBox="0 0 560 265" role="img" aria-label="Interactive NRF2 activation and resolution trajectory">
          <g class="n2-gridlines"><path d="M48 24 H542 M48 75 H542 M48 126 H542 M48 177 H542 M48 228 H542"/></g>
          <path class="n2-axis" d="M48 18 V228 H542"/>
          <text x="48" y="13" class="n2-axis-label">RELATIVE NRF2 OUTPUT</text>
          <text x="48" y="250" class="n2-axis-label">TIME →</text>
          <text x="38" y="232" text-anchor="end" class="n2-axis-label">0</text>
          <text x="38" y="130" text-anchor="end" class="n2-axis-label">50</text>
          <text x="38" y="28" text-anchor="end" class="n2-axis-label">100</text>
          <path id="n2-input-trace" class="n2-input-trace" d="M48 228 L100 228 L100 105 L170 105 L170 228 L542 228"/>
          <path id="n2-output-trace" class="n2-output-trace" d="M48 228 C90 200 105 70 155 75 S220 170 300 205 S430 224 542 226"/>
          <path id="n2-resolved-trace" class="n2-resolved-trace" d="M48 228 C90 208 110 135 150 145 S200 196 270 218 S430 226 542 228"/>
        </svg>
        <div class="nrf2-chart-legend"><span><i class="n2-legend-input"></i> Stress input</span><span><i class="n2-legend-output"></i> NRF2 output</span><span><i class="n2-legend-resolved"></i> Higher-resolution reference</span></div>
        <div class="nrf2-readout-grid">
          <div><span>Peak response</span><strong id="n2-peak">60%</strong></div>
          <div><span>Residual signal</span><strong id="n2-residual">18%</strong></div>
          <div><span>Reset index</span><strong id="n2-reset-index">72/100</strong></div>
        </div>
        <p class="nrf2-output-note" id="n2-output-note">A brief stress pulse with effective feedback permits output to return toward baseline.</p>
      </div>
    </div>
  </section>

  <section class="nrf2-panel" id="nrf2-circuit-explorer">
    <div class="nrf2-section-head"><div><span class="nrf2-kicker">02 / CIRCUIT ARCHITECTURE</span><h2>Explore the redoxostat</h2><p>Select a component to inspect its role in control and recovery.</p></div><span class="nrf2-tag">Select a node</span></div>
    <div class="nrf2-architecture">
      <div class="nrf2-node-grid" role="group" aria-label="Redoxostat circuit components">
        <button class="n2-arch-node is-active" type="button" data-node="sensor"><span>01</span><b>Redox sensor</b><small>KEAP1 cysteines</small></button>
        <button class="n2-arch-node" type="button" data-node="controller"><span>02</span><b>Controller</b><small>CUL3 · ubiquitination</small></button>
        <button class="n2-arch-node" type="button" data-node="amplifier"><span>03</span><b>Amplifier</b><small>NRF2 transcription</small></button>
        <button class="n2-arch-node" type="button" data-node="resolution"><span>04</span><b>Resolution</b><small>Turnover · autophagy</small></button>
        <button class="n2-arch-node" type="button" data-node="metabolism"><span>05</span><b>Redox restoration</b><small>NADPH · thiol systems</small></button>
        <button class="n2-arch-node" type="button" data-node="outcome"><span>06</span><b>Outcome</b><small>Adaptation or persistence</small></button>
      </div>
      <article class="nrf2-node-detail" aria-live="polite">
        <div class="n2-detail-icon" id="n2-node-icon">K</div>
        <div><span id="n2-node-kind" class="nrf2-kicker">SENSOR MODULE</span><h3 id="n2-node-title">KEAP1 reads redox chemistry</h3><p id="n2-node-copy">Reactive cysteine residues respond to oxidative and electrophilic cues. Their modification can reduce KEAP1-mediated NRF2 ubiquitination and stabilize NRF2.</p><div class="n2-function"><b>Control question</b><span id="n2-node-question">Can the sensor regain its regulatory state after the cue subsides?</span></div></div>
      </article>
    </div>
  </section>

  <section class="nrf2-panel">
    <div class="nrf2-section-head"><div><span class="nrf2-kicker">03 / FAILURE MODES</span><h2>Where can resolution fail?</h2><p>Different defects can produce persistent output through different routes.</p></div><span class="nrf2-tag">Failure map</span></div>
    <div class="nrf2-failure-layout">
      <div class="nrf2-failure-list" role="group" aria-label="Select a failure mode">
        <button type="button" class="n2-failure-btn is-active" data-failure="sensor"><span class="n2-failure-num">01</span><span><b>Sensor dysfunction</b><small>KEAP1 cannot reset sensing</small></span><i>↗</i></button>
        <button type="button" class="n2-failure-btn" data-failure="controller"><span class="n2-failure-num">02</span><span><b>Controller impairment</b><small>NRF2 turnover is reduced</small></span><i>↗</i></button>
        <button type="button" class="n2-failure-btn" data-failure="escape"><span class="n2-failure-num">03</span><span><b>Amplifier escape</b><small>NRF2 evades KEAP1 restraint</small></span><i>↗</i></button>
        <button type="button" class="n2-failure-btn" data-failure="feedback"><span class="n2-failure-num">04</span><span><b>Feedback disruption</b><small>Autophagy or renewal fails</small></span><i>↗</i></button>
        <button type="button" class="n2-failure-btn" data-failure="redox"><span class="n2-failure-num">05</span><span><b>Redox reset failure</b><small>Reducing capacity is constrained</small></span><i>↗</i></button>
      </div>
      <article class="nrf2-failure-detail" aria-live="polite">
        <div class="n2-failure-visual">
          <svg viewBox="0 0 340 120" role="img" aria-label="Selected circuit failure visualization">
            <path id="n2-failure-line" d="M25 60 H315" class="n2-failure-track"/>
            <circle cx="34" cy="60" r="19" class="n2-failure-node"/><text x="34" y="65" text-anchor="middle">K</text>
            <circle cx="118" cy="60" r="19" class="n2-failure-node"/><text x="118" y="65" text-anchor="middle">C</text>
            <circle cx="202" cy="60" r="19" class="n2-failure-node"/><text x="202" y="65" text-anchor="middle">N</text>
            <circle cx="306" cy="60" r="19" class="n2-failure-node"/><text x="306" y="65" text-anchor="middle">↻</text>
            <path d="M53 60 H99 M137 60 H183 M221 60 H287" class="n2-failure-link"/>
            <path id="n2-failure-break" d="M20 38 L48 82" class="n2-failure-break"/>
            <text x="34" y="105" text-anchor="middle" class="n2-mini-label">KEAP1</text><text x="118" y="105" text-anchor="middle" class="n2-mini-label">CUL3</text><text x="202" y="105" text-anchor="middle" class="n2-mini-label">NRF2</text><text x="306" y="105" text-anchor="middle" class="n2-mini-label">RESET</text>
          </svg>
        </div>
        <span class="nrf2-kicker" id="n2-failure-kind">SENSOR FAILURE</span>
        <h3 id="n2-failure-title">KEAP1 sensing does not return to baseline</h3>
        <p id="n2-failure-copy">Loss-of-function changes or persistent modification can weaken KEAP1-mediated NRF2 repression after the original stress signal subsides.</p>
        <div class="n2-failure-row"><b>Expected pattern</b><span id="n2-failure-outcome">NRF2 remains stabilized after withdrawal.</span></div>
        <div class="n2-failure-row"><b>Discriminating test</b><span id="n2-failure-test">Follow KEAP1 state and NRF2 turnover after a reversible stress pulse.</span></div>
      </article>
    </div>
  </section>

  <section class="nrf2-panel">
    <div class="nrf2-section-head"><div><span class="nrf2-kicker">04 / SWITCH VS CIRCUIT</span><h2>Same peak, different history</h2><p>Explore why peak activation alone can miss the cost of persistent signaling.</p></div><span class="nrf2-tag">Model comparison</span></div>
    <div class="nrf2-model-tabs" role="group" aria-label="Compare model interpretation"><button type="button" class="is-active" data-model="switch">Antioxidant switch</button><button type="button" data-model="circuit">Signal-resolution circuit</button></div>
    <div class="nrf2-model-visual">
      <svg viewBox="0 0 760 220" id="n2-model-chart" role="img" aria-label="Switch model compared with signal-resolution model">
        <path class="n2-model-grid" d="M46 28 H735 M46 80 H735 M46 132 H735 M46 184 H735"/>
        <path class="n2-model-axis" d="M46 20 V184 H735"/>
        <path id="n2-model-pulse" class="n2-model-line" d="M46 184 C80 184 90 60 140 60 S180 175 245 182 S360 184 735 184"/>
        <path id="n2-model-chronic" class="n2-model-line n2-model-line-secondary" d="M46 184 C80 184 90 60 140 60 S200 60 245 60 S420 64 735 62"/>
        <text x="47" y="207" class="n2-axis-label">STRESS START</text><text x="735" y="207" text-anchor="end" class="n2-axis-label">STRESS WITHDRAWN →</text>
      </svg>
      <div class="nrf2-model-caption" id="n2-model-caption"><b>Switch model:</b> the state is read mainly as inactive or activated. Duration and post-stress recovery receive less emphasis.</div>
    </div>
    <div class="nrf2-compare-grid">
      <article><span class="n2-compare-mark switch-mark">ON / OFF</span><h3>Antioxidant switch</h3><p>Prioritizes whether NRF2 is activated and how strongly targets are induced.</p></article>
      <article><span class="n2-compare-mark circuit-mark">INPUT → OUTPUT → RESET</span><h3>Signal-resolution circuit</h3><p>Tracks input history, output duration, termination and recovery of responsiveness.</p></article>
    </div>
  </section>

  <section class="nrf2-panel">
    <div class="nrf2-section-head"><div><span class="nrf2-kicker">05 / EXPERIMENT DESIGN</span><h2>Build a discriminating experiment</h2><p>Choose a perturbation and the measurement that would best separate the models.</p></div><span class="nrf2-tag">Study planner</span></div>
    <div class="nrf2-experiment-builder">
      <div class="nrf2-builder-controls">
        <label for="n2-perturbation">Perturbation</label>
        <select id="n2-perturbation">
          <option value="pulse">Brief stress pulse, then withdrawal</option>
          <option value="duration">Peak-matched short vs long exposure</option>
          <option value="autophagy">Impaired autophagy during stress</option>
          <option value="keap1">Slower KEAP1 renewal</option>
          <option value="repeated">Repeated pulses vs chronic exposure</option>
        </select>
        <label for="n2-measurement">Primary measurement</label>
        <select id="n2-measurement">
          <option value="time">Time-resolved NRF2 abundance and nuclear localization</option>
          <option value="targets">Target-gene transcription over time</option>
          <option value="turnover">KEAP1 / NRF2 turnover and ubiquitination</option>
          <option value="redox">Redox state and NADPH-linked recovery</option>
          <option value="second">Response to a second matched challenge</option>
        </select>
        <button id="n2-build-experiment" class="nrf2-primary-btn" type="button">Generate prediction</button>
      </div>
      <article class="nrf2-experiment-output" aria-live="polite">
        <span class="nrf2-kicker">PREDICTION PANEL</span><h3 id="n2-experiment-title">Peak-matched stress pulse</h3>
        <div class="n2-experiment-path"><span>Stimulus</span><i>→</i><span>Time series</span><i>→</i><span>Recovery</span></div>
        <p id="n2-experiment-prediction">Compare the post-withdrawal trajectory, not only the maximum NRF2 response.</p>
        <div class="n2-experiment-readout"><b>Key discriminator</b><span id="n2-experiment-readout">Decay kinetics and time to baseline</span></div>
      </article>
    </div>
  </section>

  <section class="nrf2-panel">
    <div class="nrf2-section-head"><div><span class="nrf2-kicker">06 / BIOLOGICAL CONTEXT</span><h2>Why duration changes the outcome</h2><p>Select a context to see how persistent NRF2 signaling may be interpreted.</p></div><span class="nrf2-tag">Context matters</span></div>
    <div class="nrf2-context-grid" role="group" aria-label="Biological outcome contexts">
      <button type="button" class="n2-context is-active" data-context="adaptive"><span class="n2-context-icon">✳</span><b>Adaptive stress response</b><small>Transient protection</small></button>
      <button type="button" class="n2-context" data-context="cancer"><span class="n2-context-icon">◎</span><b>Cancer</b><small>Metabolic support · resistance</small></button>
      <button type="button" class="n2-context" data-context="fibrosis"><span class="n2-context-icon">⌁</span><b>Fibrosis</b><small>Redox and tissue remodeling</small></button>
      <button type="button" class="n2-context" data-context="metabolic"><span class="n2-context-icon">⌘</span><b>Metabolic disease</b><small>Redox imbalance</small></button>
    </div>
    <article class="nrf2-context-detail" aria-live="polite"><div class="n2-context-big" id="n2-context-symbol">✳</div><div><h3 id="n2-context-title">Transient activation can be protective</h3><p id="n2-context-copy">A time-limited NRF2 response can induce antioxidant and detoxification programs. Efficient termination helps return the system toward a responsive baseline.</p><div class="n2-context-bottom"><b>Interpretation</b><span id="n2-context-note">Assess both protection during stress and recovery after withdrawal.</span></div></div></article>
  </section>

  <section class="nrf2-takeaway">
    <div class="nrf2-takeaway-orbit" aria-hidden="true"><span></span><span></span><span></span><i>N</i></div>
    <div><span class="nrf2-kicker">THE CENTRAL DISTINCTION</span><h2>Activation is an event. Resolution is a system property.</h2><p>The redoxostat framework shifts attention from peak NRF2 activity alone to the full trajectory: sensing, response, termination and renewed competence.</p><a href="https://doi.org/10.1016/j.pbiomolbio.2026.03.005" target="_blank" rel="noopener noreferrer">Read the published review ↗</a></div>
  </section>
  <footer class="nrf2-bottom"><span>Interactive companion to the published review</span><a href="{{ '/publications/' | relative_url }}">All publications ↗</a></footer>
</div>

<script src="{{ '/assets/js/nrf2-redoxostat.js' | relative_url }}?v=20261009-1" defer></script>
