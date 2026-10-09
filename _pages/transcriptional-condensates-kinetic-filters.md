---
layout: yap-fullscreen
title: Transcriptional Condensates as Kinetic Filters
permalink: /research/transcriptional-condensates-kinetic-filters/
description: An interactive exploration of how transcriptional condensate kinetics may decode dynamic signaling inputs.
nav: false
nav_order: 102
---

<link rel="stylesheet" href="{{ '/assets/css/condensate-kinetic-filter.css' | relative_url }}?v=20261009-1">

<div class="tkf-page" id="tkf-lab">
  <a class="tkf-home" href="{{ '/' | relative_url }}">← Back to homepage</a>

  <header class="tkf-hero">
    <div class="tkf-eyebrow"><span class="tkf-live"></span> GENE REGULATION · TEMPORAL SIGNAL DECODING</div>
    <h1>Transcriptional condensates as kinetic filters</h1>
    <p class="tkf-subtitle">Temporal control of gene expression</p>
    <p class="tkf-byline"><strong>Ardie Barry Sailis</strong> · Review article · <em>Gene Reports</em> (2026)</p>
    <div class="tkf-meta">
      <span><b>Focus</b> Signal duration · assembly · transcription</span>
      <span><b>DOI</b> <a href="https://doi.org/10.1016/j.genrep.2026.102599" target="_blank" rel="noopener noreferrer">10.1016/j.genrep.2026.102599 ↗</a></span>
      <span><b>Article</b> 102599</span>
    </div>

    <div class="tkf-hero-figure" role="img" aria-label="Dynamic signaling input passes through condensate thresholding and finite assembly kinetics, then through persistence and dissolution, to shape transcriptional bursting. This is the proposed kinetic-filter model.">
      <svg class="tkf-main-figure" viewBox="0 0 1080 355" aria-hidden="true">
        <defs>
          <linearGradient id="tkf-node-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#183761"/><stop offset="1" stop-color="#09172f"/></linearGradient>
          <linearGradient id="tkf-signal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fbbf24"/><stop offset="1" stop-color="#fb923c"/></linearGradient>
          <marker id="tkf-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#67e8f9"/></marker>
          <marker id="tkf-return" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c4b5fd"/></marker>
        </defs>
        <text x="540" y="26" text-anchor="middle" class="tkf-svg-overline">PROPOSED KINETIC-FILTER MODEL</text>
        <g class="tkf-svg-node"><rect x="20" y="65" width="190" height="118" rx="15"/><text x="42" y="94" class="tkf-svg-number">01</text><text x="42" y="120" class="tkf-svg-title">SIGNAL INPUT</text><text x="42" y="145" class="tkf-svg-copy">Pulses · amplitude</text><text x="42" y="164" class="tkf-svg-copy">Duration · frequency</text></g>
        <path d="M212 123 H245" class="tkf-svg-arrow" marker-end="url(#tkf-arrow)"/>
        <g class="tkf-svg-node"><rect x="252" y="65" width="190" height="118" rx="15"/><text x="274" y="94" class="tkf-svg-number">02</text><text x="274" y="120" class="tkf-svg-title">THRESHOLD / DELAY</text><text x="274" y="145" class="tkf-svg-copy">Nucleation barrier</text><text x="274" y="164" class="tkf-svg-copy">Concentration · valency</text></g>
        <path d="M444 123 H477" class="tkf-svg-arrow" marker-end="url(#tkf-arrow)"/>
        <g class="tkf-svg-node"><rect x="484" y="65" width="190" height="118" rx="15"/><text x="506" y="94" class="tkf-svg-number">03</text><text x="506" y="120" class="tkf-svg-title">ASSEMBLY / EXCHANGE</text><text x="506" y="145" class="tkf-svg-copy">Local enrichment</text><text x="506" y="164" class="tkf-svg-copy">Finite kinetics</text></g>
        <path d="M676 123 H709" class="tkf-svg-arrow" marker-end="url(#tkf-arrow)"/>
        <g class="tkf-svg-node"><rect x="716" y="65" width="150" height="118" rx="15"/><text x="738" y="94" class="tkf-svg-number">04</text><text x="738" y="120" class="tkf-svg-title">PERSIST / RESET</text><text x="738" y="145" class="tkf-svg-copy">Lifetime</text><text x="738" y="164" class="tkf-svg-copy">Dissolution</text></g>
        <path d="M868 123 H901" class="tkf-svg-arrow" marker-end="url(#tkf-arrow)"/>
        <g class="tkf-svg-node"><rect x="908" y="65" width="152" height="118" rx="15"/><text x="930" y="94" class="tkf-svg-number">05</text><text x="930" y="120" class="tkf-svg-title">TRANSCRIPTION</text><text x="930" y="145" class="tkf-svg-copy">Burst frequency</text><text x="930" y="164" class="tkf-svg-copy">Duration · output</text></g>
        <rect x="228" y="222" width="625" height="73" rx="14" class="tkf-feedback-box"/>
        <text x="540" y="249" text-anchor="middle" class="tkf-feedback-title">KINETIC FILTERING</text>
        <text x="540" y="272" text-anchor="middle" class="tkf-feedback-copy">Rapid fluctuations may be attenuated · sustained inputs may accumulate</text>
        <path d="M790 183 V211 H850 V223" class="tkf-feedback-path" marker-end="url(#tkf-return)"/>
        <path d="M228 258 H116 V185" class="tkf-feedback-path" marker-end="url(#tkf-return)"/>
        <text x="540" y="329" text-anchor="middle" class="tkf-svg-foot">TEST THE FULL CHAIN: INPUT → CONDENSATE KINETICS → NASCENT RNA</text>
      </svg>
      <div class="tkf-mobile-figure" aria-hidden="true">
        <div class="tkf-mobile-node"><span>01</span><div><b>Signal input</b><small>Amplitude · duration · frequency</small></div></div><i>↓</i>
        <div class="tkf-mobile-node"><span>02</span><div><b>Threshold and delay</b><small>Nucleation barrier · concentration · valency</small></div></div><i>↓</i>
        <div class="tkf-mobile-node"><span>03</span><div><b>Assembly and exchange</b><small>Local enrichment · finite kinetics</small></div></div><i>↓</i>
        <div class="tkf-mobile-node"><span>04</span><div><b>Persistence and reset</b><small>Lifetime · dissolution</small></div></div><i>↓</i>
        <div class="tkf-mobile-node"><span>05</span><div><b>Transcriptional output</b><small>Burst frequency · duration · output</small></div></div>
        <div class="tkf-mobile-feedback">↶ <div><b>Kinetic filtering</b><small>Rapid fluctuations may be attenuated; sustained inputs may accumulate.</small></div></div>
      </div>
    </div>
    <p class="tkf-figure-note">Figures and interactive outputs are conceptual illustrations, not experimental measurements.</p>
  </header>

  <section class="tkf-panel" id="tkf-simulator">
    <div class="tkf-section-head"><div><span class="tkf-kicker">01 / DYNAMIC INPUT</span><h2>Test the kinetic filter</h2><p>Change pulse timing and assembly/reset kinetics to see how the model responds.</p></div><span class="tkf-tag">Live simulation</span></div>
    <div class="tkf-presets" role="group" aria-label="Input pattern presets">
      <button type="button" class="tkf-preset is-active" data-pattern="brief">Brief pulse</button>
      <button type="button" class="tkf-preset" data-pattern="repeated">Repeated pulses</button>
      <button type="button" class="tkf-preset" data-pattern="sustained">Sustained input</button>
      <button type="button" class="tkf-preset" data-pattern="rapid">Rapid fluctuations</button>
    </div>
    <div class="tkf-sim-layout">
      <div class="tkf-controls">
        <label class="tkf-range-label" for="tkf-amplitude"><span>Input amplitude</span><output id="tkf-amplitude-value">70%</output></label>
        <input id="tkf-amplitude" type="range" min="10" max="100" step="5" value="70">
        <label class="tkf-range-label" for="tkf-duration"><span>Pulse duration</span><output id="tkf-duration-value">35%</output></label>
        <input id="tkf-duration" type="range" min="5" max="100" step="5" value="35">
        <label class="tkf-range-label" for="tkf-assembly"><span>Assembly time</span><output id="tkf-assembly-value">30%</output></label>
        <input id="tkf-assembly" type="range" min="5" max="90" step="5" value="30">
        <label class="tkf-range-label" for="tkf-reset"><span>Reset time</span><output id="tkf-reset-value">35%</output></label>
        <input id="tkf-reset" type="range" min="5" max="90" step="5" value="35">
        <label class="tkf-range-label" for="tkf-threshold"><span>Assembly threshold</span><output id="tkf-threshold-value">45%</output></label>
        <input id="tkf-threshold" type="range" min="10" max="90" step="5" value="45">
        <button type="button" class="tkf-reset-button" id="tkf-reset-button">Reset simulation</button>
      </div>
      <div class="tkf-sim-output">
        <div class="tkf-status-row"><span class="tkf-status-dot"></span><strong id="tkf-status">Assembly-favored regime</strong></div>
        <svg class="tkf-chart" id="tkf-chart" viewBox="0 0 600 300" role="img" aria-label="Dynamic signal input, condensate occupancy, and transcription output over time">
          <g class="tkf-grid"><path d="M52 30 H580 M52 82 H580 M52 134 H580 M52 186 H580 M52 238 H580"/></g>
          <path class="tkf-axis" d="M52 24 V238 H580"/>
          <text x="52" y="16" class="tkf-axis-label">RELATIVE ACTIVITY</text><text x="52" y="265" class="tkf-axis-label">TIME →</text>
          <text x="42" y="242" text-anchor="end" class="tkf-axis-label">0</text><text x="42" y="138" text-anchor="end" class="tkf-axis-label">50</text><text x="42" y="34" text-anchor="end" class="tkf-axis-label">100</text>
          <path id="tkf-input-line" class="tkf-line tkf-input-line" d="M52 238 L100 238 L100 90 L180 90 L180 238 L580 238"/>
          <path id="tkf-condensate-line" class="tkf-line tkf-condensate-line" d="M52 238 C100 238 120 150 180 120 S300 210 580 238"/>
          <path id="tkf-transcription-line" class="tkf-line tkf-transcription-line" d="M52 238 C120 238 160 170 200 170 S300 224 580 238"/>
        </svg>
        <div class="tkf-chart-legend"><span><i class="tkf-input-swatch"></i> Input</span><span><i class="tkf-condensate-swatch"></i> Condensate occupancy</span><span><i class="tkf-transcription-swatch"></i> Transcription output</span></div>
        <div class="tkf-metrics">
          <div><span>Peak assembly</span><strong id="tkf-peak-assembly">—</strong></div>
          <div><span>Peak output</span><strong id="tkf-peak-output">—</strong></div>
          <div><span>Residual assembly</span><strong id="tkf-residual">—</strong></div>
        </div>
        <p id="tkf-insight" class="tkf-insight">Compare the timing of the input, assembly and output curves, not just their peaks.</p>
      </div>
    </div>
  </section>

  <section class="tkf-panel">
    <div class="tkf-section-head"><div><span class="tkf-kicker">02 / FILTER BEHAVIOR</span><h2>What kind of temporal filter emerges?</h2><p>Select a behavior to inspect its predicted signature and competing explanations.</p></div><span class="tkf-tag">Model explorer</span></div>
    <div class="tkf-filter-grid" role="group" aria-label="Temporal filter mechanisms">
      <button type="button" class="tkf-filter-card is-active" data-filter="threshold"><span>01</span><b>Duration threshold</b><small>Short inputs may not assemble</small></button>
      <button type="button" class="tkf-filter-card" data-filter="lowpass"><span>02</span><b>Low-pass filtering</b><small>Fast fluctuations attenuate</small></button>
      <button type="button" class="tkf-filter-card" data-filter="memory"><span>03</span><b>Persistence / memory</b><small>History remains after input</small></button>
      <button type="button" class="tkf-filter-card" data-filter="reset"><span>04</span><b>Regulated reset</b><small>Dissolution restores response</small></button>
    </div>
    <article class="tkf-filter-detail" aria-live="polite">
      <div class="tkf-filter-icon" id="tkf-filter-icon">τ</div>
      <div><span class="tkf-kicker" id="tkf-filter-label">DURATION GATING</span><h3 id="tkf-filter-title">Inputs must last long enough to assemble</h3><p id="tkf-filter-copy">Threshold-dependent nucleation introduces a delay. A brief signal may end before a stable assembly forms, while a sustained input can cross the threshold.</p><div class="tkf-criterion"><b>Predicted signature</b><span id="tkf-filter-signature">A duration-response curve with a transition in condensate formation probability.</span></div><div class="tkf-criterion"><b>Alternative explanation</b><span id="tkf-filter-alternative">Cooperative transcription-factor binding or promoter-state switching can also create thresholds and delays.</span></div></div>
    </article>
  </section>

  <section class="tkf-panel">
    <div class="tkf-section-head"><div><span class="tkf-kicker">03 / TRANSCRIPTIONAL BURSTING</span><h2>From condensate kinetics to bursts</h2><p>Explore the model's predicted links between assembly and transcriptional output.</p></div><span class="tkf-tag">Burst explorer</span></div>
    <div class="tkf-burst-controls">
      <label class="tkf-range-label" for="tkf-lifetime"><span>Condensate lifetime</span><output id="tkf-lifetime-value">60%</output></label>
      <input id="tkf-lifetime" type="range" min="5" max="100" step="5" value="60">
      <label class="tkf-range-label" for="tkf-density"><span>Local factor enrichment</span><output id="tkf-density-value">65%</output></label>
      <input id="tkf-density" type="range" min="5" max="100" step="5" value="65">
      <label class="tkf-range-label" for="tkf-exchange"><span>Molecular exchange</span><output id="tkf-exchange-value">70%</output></label>
      <input id="tkf-exchange" type="range" min="5" max="100" step="5" value="70">
    </div>
    <div class="tkf-burst-visual">
      <svg id="tkf-burst-chart" viewBox="0 0 720 245" role="img" aria-label="Predicted transcription burst pattern associated with selected condensate properties">
        <g class="tkf-grid"><path d="M48 28 H695 M48 75 H695 M48 122 H695 M48 169 H695 M48 216 H695"/></g>
        <path class="tkf-axis" d="M48 22 V216 H695"/>
        <text x="48" y="14" class="tkf-axis-label">NASCENT RNA OUTPUT</text><text x="48" y="237" class="tkf-axis-label">TIME →</text>
        <path id="tkf-burst-line" class="tkf-burst-line" d="M48 216 H100 V180 H130 V216 H210 V120 H245 V216 H310 V162 H350 V216 H430 V92 H464 V216 H540 V142 H575 V216 H695"/>
      </svg>
      <div class="tkf-burst-metrics">
        <div><span>Predicted burst frequency</span><strong id="tkf-burst-frequency">Moderate</strong></div>
        <div><span>Predicted burst duration</span><strong id="tkf-burst-duration">Moderate</strong></div>
        <div><span>Output per burst</span><strong id="tkf-burst-size">Moderate</strong></div>
      </div>
      <p id="tkf-burst-insight" class="tkf-insight">Change condensate lifetime, enrichment and exchange to see how the model qualitatively maps these properties to bursting.</p>
    </div>
  </section>

  <section class="tkf-panel">
    <div class="tkf-section-head"><div><span class="tkf-kicker">04 / CELLULAR OPERATING REGIME</span><h2>Condensates work inside living cells</h2><p>Choose a physiological context to explore what could shift assembly or reset kinetics.</p></div><span class="tkf-tag">Context matters</span></div>
    <div class="tkf-context-grid" role="group" aria-label="Physiological context">
      <button type="button" class="tkf-context is-active" data-context="baseline"><span>✳</span><b>Baseline</b><small>Dynamic exchange</small></button>
      <button type="button" class="tkf-context" data-context="energy"><span>⚡</span><b>Low energy</b><small>ATP-dependent processes</small></button>
      <button type="button" class="tkf-context" data-context="stress"><span>⌁</span><b>Cellular stress</b><small>Physicochemical change</small></button>
      <button type="button" class="tkf-context" data-context="aging"><span>◈</span><b>Restricted exchange</b><small>Slow reset / aging</small></button>
    </div>
    <article class="tkf-context-detail" aria-live="polite"><div class="tkf-context-icon" id="tkf-context-icon">✳</div><div><h3 id="tkf-context-title">Dynamic assemblies can remain responsive</h3><p id="tkf-context-copy">Molecular exchange and reversible assembly may permit transcription-associated condensates to respond to changing inputs while enriching regulatory components locally.</p><div class="tkf-criterion"><b>Measure</b><span id="tkf-context-readout">Input timing, exchange kinetics and nascent RNA in the same cells.</span></div></div></article>
  </section>

  <section class="tkf-panel">
    <div class="tkf-section-head"><div><span class="tkf-kicker">05 / EXPERIMENT DESIGN</span><h2>Build a causal test</h2><p>Select a perturbation and measurement to generate predictions, controls and falsification criteria.</p></div><span class="tkf-tag">Study planner</span></div>
    <div class="tkf-experiment-builder">
      <div class="tkf-experiment-controls">
        <label for="tkf-perturbation">Perturbation</label>
        <select id="tkf-perturbation">
          <option value="pulse">Brief vs sustained optogenetic pulse</option>
          <option value="exchange">Alter molecular exchange</option>
          <option value="dissolution">Accelerate condensate dissolution</option>
          <option value="idr">Condensation-impaired variant</option>
          <option value="rna">Perturb RNA-linked feedback</option>
        </select>
        <label for="tkf-measurement">Primary measurement</label>
        <select id="tkf-measurement">
          <option value="nascent">Condensate imaging + nascent RNA</option>
          <option value="frap">FRAP / molecular exchange</option>
          <option value="burst">Single-cell burst kinetics</option>
          <option value="input">Upstream input + chromatin controls</option>
        </select>
        <button type="button" class="tkf-primary" id="tkf-build-experiment">Generate experiment plan</button>
        <p id="tkf-experiment-status" class="tkf-experiment-status" aria-live="polite">Choose settings, then generate the plan.</p>
      </div>
      <article class="tkf-experiment-output" id="tkf-experiment-output" aria-live="polite">
        <span class="tkf-kicker">EXPERIMENT PREDICTION</span>
        <h3 id="tkf-experiment-title">Brief vs sustained input</h3>
        <div class="tkf-experiment-path"><span>Defined input</span><i>→</i><span>Condensate kinetics</span><i>→</i><span>Nascent RNA</span></div>
        <p id="tkf-experiment-design">Apply defined signal patterns and quantify assembly, dissolution and transcription in the same cells.</p>
        <div class="tkf-model-predictions">
          <article><span>IF KINETIC FILTERING CONTRIBUTES</span><p id="tkf-experiment-prediction">Temporal outputs should track selectively altered condensate kinetics.</p></article>
          <article><span>KEY ALTERNATIVES</span><p id="tkf-experiment-alternative">Upstream signaling, DNA binding, chromatin or promoter-state switching may explain the output.</p></article>
        </div>
        <div class="tkf-experiment-readouts">
          <div><b>Primary readout</b><span id="tkf-experiment-readout">Assembly latency, lifetime and nascent RNA timing</span></div>
          <div><b>Essential controls</b><span id="tkf-experiment-controls">Matched expression, localization, DNA binding and upstream signaling.</span></div>
          <div><b>Falsification criterion</b><span id="tkf-experiment-falsifier">Temporal transcription remains unchanged after a validated selective change in condensate kinetics.</span></div>
        </div>
      </article>
    </div>
  </section>

  <section class="tkf-conclusion">
    <div class="tkf-orbit" aria-hidden="true"><span></span><span></span><span></span><i>τ</i></div>
    <div><span class="tkf-kicker">THE CENTRAL QUESTION</span><h2>Do condensates decode time, or reflect transcription already in progress?</h2><p>The model is useful only if controlled changes in condensate kinetics predictably change nascent transcription while competing mechanisms are measured and controlled.</p><a href="https://doi.org/10.1016/j.genrep.2026.102599" target="_blank" rel="noopener noreferrer">Read the published review ↗</a></div>
  </section>
  <footer class="tkf-footer"><span>Interactive companion to the published review</span><a href="{{ '/publications/' | relative_url }}">All publications ↗</a></footer>
</div>

<script src="{{ '/assets/js/condensate-kinetic-filter.js' | relative_url }}?v=20261009-1" defer></script>
