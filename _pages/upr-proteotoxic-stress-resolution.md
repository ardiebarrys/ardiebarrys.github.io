---
layout: yap-fullscreen
title: UPR Proteotoxic Stress-Resolution Circuit
permalink: /research/upr-proteotoxic-stress-resolution/
description: An interactive exploration of the proposed unfolded protein response as a branch-selective proteotoxic stress-resolution circuit in environmental immunotoxicity.
nav: false
nav_order: 99
---

<link rel="stylesheet" href="{{ '/assets/css/yap-signal-experience.css' | relative_url }}?v=20261011">
<link rel="stylesheet" href="{{ '/assets/css/upr-experience.css' | relative_url }}?v=20261022">

<div class="circuit-lab" id="upr-circuit-lab">
  <a class="yap-home-button" href="{{ '/cellular-signaling-circuits/' | relative_url }}"><span aria-hidden="true">←</span> Cellular Circuits</a>
  <section class="circuit-hero">
    <div class="circuit-eyebrow">Interactive framework · 2026</div>
    <h1>The unfolded protein response as a proteotoxic stress-resolution circuit</h1>
    <p class="circuit-subtitle">A framework in which environmental toxicants act as proteotoxic inputs, IRE1α, PERK and ATF6 decode ER stress into immune outcomes, and failed resolution can shift immune and barrier cells toward persistent dysfunction.</p>
    <div class="circuit-byline"><strong>Ardie Barry Sailis</strong> · Independent Researcher</div>
    <div class="circuit-hero-meta">
      <span><b>Journal</b> <em>Chemico-Biological Interactions</em>, 440 (2026) 112392</span>
      <span><b>Accepted</b> 18 October 2026</span>
      <span><b>Published</b> 19 October 2026</span>
      <span><b>DOI</b> <a href="https://doi.org/10.1016/j.cbi.2026.112392" target="_blank" rel="noopener noreferrer">10.1016/j.cbi.2026.112392 ↗</a></span>
    </div>

    <div class="protein-showcase" role="img" aria-label="Figure overview contrasting two models. In the conventional model, an environmental toxicant leads through oxidative stress, receptor signaling or cytotoxicity to inflammation or immune dysfunction. In the proposed model, the toxicant first disturbs ER proteostasis, which engages UPR branch signaling and its resolution, and this lies between exposure and altered immune function.">
      <div class="upr-models">
        <div class="upr-model-row">
          <span class="upr-model-tag">Conventional model</span>
          <div class="upr-model-flow">
            <span class="upr-model-step">Environmental toxicant</span>
            <span class="upr-model-arrow" aria-hidden="true">→</span>
            <span class="upr-model-step">Oxidative stress · receptor signaling · cytotoxicity</span>
            <span class="upr-model-arrow" aria-hidden="true">→</span>
            <span class="upr-model-step">Inflammation or immune dysfunction</span>
          </div>
        </div>
        <div class="upr-model-row is-proposed">
          <span class="upr-model-tag">Proposed model</span>
          <div class="upr-model-flow">
            <span class="upr-model-step">Environmental toxicant</span>
            <span class="upr-model-arrow" aria-hidden="true">→</span>
            <span class="upr-model-step">ER proteostasis disturbance</span>
            <span class="upr-model-arrow" aria-hidden="true">→</span>
            <span class="upr-model-step">UPR branch signaling &amp; resolution</span>
            <span class="upr-model-arrow" aria-hidden="true">→</span>
            <span class="upr-model-step">Altered immune function</span>
          </div>
        </div>
      </div>
    </div>

    <p class="circuit-hero-summary">The key question is not only whether a toxicant activates the UPR, but whether the response resolves once the exposure passes, or stays engaged and branch-skewed.</p>
    <div class="circuit-pills">
      <span class="circuit-pill">Environmental immunotoxicity</span><span class="circuit-pill">Unfolded protein response</span><span class="circuit-pill">ER stress</span><span class="circuit-pill">Proteostasis</span><span class="circuit-pill">Stress resolution</span>
    </div>
    <div class="circuit-actions">
      <a class="circuit-btn primary" href="#branch-explorer">Explore the circuit ↓</a>
      <a class="circuit-btn" href="https://doi.org/10.1016/j.cbi.2026.112392" target="_blank" rel="noopener noreferrer">Read the article ↗</a>
    </div>
  </section>

  <p class="visual-note">Every figure, explorer and simulation on this page is a conceptual illustration of the review's framework, not an experimental measurement. The framework is offered as a hypothesis-generating structure, and the causal step linking failed resolution to immune dysfunction remains largely extrapolated from non-toxicological ER-stress models.</p>

  <section class="circuit-section" aria-labelledby="resolution-figure-title">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">The framework at a glance</span><h2 id="resolution-figure-title">Three questions define proteotoxic stress resolution</h2></div></div>
    <div class="resolution-figure" role="img" aria-label="Three linked questions: activation, branch-selective decoding, and resolution.">
      <article class="resolution-figure-step"><span class="figure-symbol" aria-hidden="true">↗</span><strong>1. Activation</strong><p>Did the toxicant perturb ER proteostasis enough to engage UPR signaling?</p></article>
      <article class="resolution-figure-step"><span class="figure-symbol" aria-hidden="true">⌥</span><strong>2. Branch decoding</strong><p>Which combination of IRE1α, PERK and ATF6 is engaged, and in which cell?</p></article>
      <article class="resolution-figure-step"><span class="figure-symbol" aria-hidden="true">↻</span><strong>3. Resolution</strong><p>Did ER proteostasis and immune function return toward baseline before the next exposure?</p></article>
    </div>
  </section>

  <section class="circuit-section plain-language-guide" id="upr-explained">
    <div class="circuit-section-head">
      <div>
        <span class="circuit-eyebrow">The biology in plain language</span>
        <h2>How does the UPR turn toxicant exposure into an immune outcome?</h2>
        <p>What is already known, and what this review adds.</p>
      </div>
    </div>

    <div class="plain-language-grid">
      <article class="plain-language-card">
        <span class="plain-language-number">01 · THE PLAYERS</span>
        <h3>Three ER sensors read protein-folding stress</h3>
        <p><strong>IRE1α</strong>, <strong>PERK</strong> and <strong>ATF6</strong> sit in the endoplasmic reticulum membrane. When unfolded proteins accumulate, they signal through distinct but interacting programs that together make up the unfolded protein response (UPR).</p>
      </article>

      <article class="plain-language-card">
        <span class="plain-language-number">02 · WHY IMMUNE CELLS</span>
        <h3>Immune cells live near their ER folding limit</h3>
        <p>Cytokine secretion, antibody production and antigen presentation place a heavy folding load on the ER. That makes immune and barrier cells unusually dependent on ER quality control, so the same proteotoxic stress can reshape their function before any cell death.</p>
      </article>

      <article class="plain-language-card">
        <span class="plain-language-number">03 · WHAT SCIENCE ALREADY KNOWS</span>
        <h3>Toxicants activate the UPR, and the UPR shapes immunity</h3>
        <p>That individual environmental toxicants activate ER-stress markers is established, most robustly for particulate matter. That UPR signaling influences inflammation, antigen presentation and secretion is also established. Neither observation is claimed as novel here.</p>
      </article>

      <article class="plain-language-card plain-language-proposal">
        <span class="plain-language-number">04 · WHAT THIS PAPER PROPOSES</span>
        <h3>Judge the outcome by how the signal resolves, not only whether it starts</h3>
        <p>The review proposes a <strong>branch-selective proteotoxic stress-resolution circuit</strong>: toxicants are proteotoxic inputs, IRE1α/PERK/ATF6 decode them into immune outputs, and <strong>failed resolution</strong> is one route by which exposure shifts immune cells toward persistent dysfunction.</p>
      </article>
    </div>

    <div class="plain-language-caveat">
      <strong>Important:</strong> this is a conceptual framework from a review, not a newly validated pathway. ER-UPR signaling is treated as one module within a wider proteostasis-resolution network that also includes the integrated stress response, the mitochondrial UPR, the heat-shock response, proteasomal degradation and autophagy. It does not imply that all immunotoxicity is mediated by ER stress.
    </div>

    <p class="plain-language-sources">Read further: <a href="https://doi.org/10.1016/j.cbi.2026.112392" target="_blank" rel="noopener noreferrer">the published proteotoxic stress-resolution review</a>.</p>
  </section>

  <section class="circuit-section upr-scene-card" id="upr-3d">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">A cell under proteotoxic stress</span><h2>Interactive 3D model</h2><p>Follow one immune cell as a toxicant perturbs its endoplasmic reticulum, the three UPR branches decode the stress, and the response either resolves or fails. Switch to the ER close-up to see IRE1α, PERK and ATF6 at the membrane. Drag to rotate.</p></div></div>
    <div class="upr-scene" id="upr-scene-stage" data-phase="toxicant" data-view="cell" role="img" aria-label="Conceptual 3D model of an immune cell with its endoplasmic reticulum network. A toxicant enters, the ER signals through IRE1α, PERK and ATF6, and the stress resolves or persists.">
      <p class="upr-scene-fallback">A conceptual 3D model of an immune cell and its ER appears here in supporting browsers. The same content is described in the sections below.</p>
    </div>
    <div class="upr-scene-controls">
      <div class="upr-view-toggle" role="group" aria-label="Choose a view">
        <button type="button" class="is-active" data-set-view="cell">Whole cell</button>
        <button type="button" data-set-view="er">ER close-up</button>
      </div>
      <div class="upr-phase-row" role="group" aria-label="Choose a stage">
        <button type="button" class="is-active" data-set-phase="toxicant">1 · Toxicant input</button>
        <button type="button" data-set-phase="signaling">2 · Branch signaling</button>
        <button type="button" data-set-phase="adaptive">3 · Adaptive resolution</button>
        <button type="button" data-set-phase="failed">3 · Failed resolution</button>
      </div>
    </div>
    <p class="upr-scene-caption"><span class="l-tox" aria-hidden="true"></span> Toxicant <span class="l-ire" aria-hidden="true"></span> IRE1α <span class="l-perk" aria-hidden="true"></span> PERK <span class="l-atf6" aria-hidden="true"></span> ATF6 <span class="l-mis" aria-hidden="true"></span> Misfolded protein</p>
  </section>

  <section class="circuit-section" id="branch-explorer">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">System architecture · Table 1</span><h2>Three non-interchangeable UPR branches</h2><p>IRE1α, PERK and ATF6 are distinct modules that decode ER stress into different immune-relevant outputs. Select a branch to see its role and outputs.</p></div></div>
    <div class="upr-branch-grid" role="group" aria-label="UPR branch modules">
      <button class="upr-branch-btn is-active" type="button" data-branch="ire1" style="--br:#f87171"><strong>IRE1α</strong><small>Inflammatory and RNA-processing branch</small></button>
      <button class="upr-branch-btn" type="button" data-branch="perk" style="--br:#a5b4fc"><strong>PERK</strong><small>Translational brake and fate control</small></button>
      <button class="upr-branch-btn" type="button" data-branch="atf6" style="--br:#86efac"><strong>ATF6</strong><small>Proteostasis-restoration branch</small></button>
    </div>
    <div class="upr-branch-detail" id="branch-detail" aria-live="polite" style="--br:#f87171"></div>
  </section>

  <section class="circuit-section" id="toxicant-explorer">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">Proteotoxic inputs · Table 2</span><h2>Six toxicant classes, graded by evidence</h2><p>Toxicants should not be treated as interchangeable ER stressors. Select a class to see its proteotoxic signature and the strength of evidence for UPR engagement, immune outcome and resolution.</p></div></div>
    <div class="tox-grid" role="group" aria-label="Environmental toxicant classes">
      <button class="tox-btn is-active" type="button" data-tox="pm"><strong>Fine particulate matter</strong><div class="tox-grades"><span class="grade grade-strong"><span class="grade-label">UPR</span> Strong</span><span class="grade grade-strong"><span class="grade-label">Immune</span> Strong</span><span class="grade grade-moderate"><span class="grade-label">Resolution</span> Moderate</span></div></button>
      <button class="tox-btn" type="button" data-tox="metals"><strong>Metals &amp; metalloids</strong><div class="tox-grades"><span class="grade grade-strong"><span class="grade-label">UPR</span> Strong</span><span class="grade grade-strong"><span class="grade-label">Immune</span> Strong</span><span class="grade grade-moderate"><span class="grade-label">Resolution</span> Moderate</span></div></button>
      <button class="tox-btn" type="button" data-tox="edc"><strong>Endocrine disruptors</strong><div class="tox-grades"><span class="grade grade-moderate"><span class="grade-label">UPR</span> Moderate</span><span class="grade grade-moderate"><span class="grade-label">Immune</span> Moderate</span><span class="grade grade-sparse"><span class="grade-label">Resolution</span> Sparse</span></div></button>
      <button class="tox-btn" type="button" data-tox="pops"><strong>Persistent organic pollutants</strong><div class="tox-grades"><span class="grade grade-strong"><span class="grade-label">UPR</span> Strong</span><span class="grade grade-moderate"><span class="grade-label">Immune</span> Moderate</span><span class="grade grade-limited"><span class="grade-label">Resolution</span> Limited</span></div></button>
      <button class="tox-btn" type="button" data-tox="plastics"><strong>Micro- &amp; nanoplastics</strong><div class="tox-grades"><span class="grade grade-sparse"><span class="grade-label">UPR</span> Sparse</span><span class="grade grade-moderate"><span class="grade-label">Immune</span> Moderate</span><span class="grade grade-limited"><span class="grade-label">Resolution</span> Limited</span></div></button>
      <button class="tox-btn" type="button" data-tox="myco"><strong>Mycotoxins</strong><div class="tox-grades"><span class="grade grade-strong"><span class="grade-label">UPR</span> Strong</span><span class="grade grade-strong"><span class="grade-label">Immune</span> Strong</span><span class="grade grade-moderate"><span class="grade-label">Resolution</span> Moderate</span></div></button>
    </div>
    <div class="tox-detail" id="tox-detail" aria-live="polite"></div>
    <p class="lab-help" style="margin-top:0.7rem">Grades denote the directness and consistency of the available evidence, not the magnitude or toxicological importance of the effect. <b style="color:#34d399">Strong</b>: branch-resolved or perturbation evidence in exposure-relevant models. <b style="color:#fbbf24">Moderate</b>: consistent marker-level evidence or one well-controlled model. <b style="color:#fb923c">Limited</b>: few studies, indirect readouts or non-immune systems. <b style="color:#94a3b8">Sparse</b>: no direct evidence.</p>
  </section>

  <section class="circuit-section" id="celltype-explorer">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">Cell-type decoding · Fig. 2</span><h2>The same branches, different immune meaning per cell</h2><p>IRE1α, PERK and ATF6 generate distinct outputs depending on cell type and stress context. Select a cell type to decode its dominant immune consequence.</p></div></div>
    <div class="circuit-flow" role="group" aria-label="Immune and barrier cell types">
      <button class="circuit-node is-active" type="button" data-cell="0" style="--node-color:#f472b6"><span class="n">01</span><strong>Macrophages</strong><small>Polarization and cytokine output</small></button>
      <button class="circuit-node" type="button" data-cell="1" style="--node-color:#a78bfa"><span class="n">02</span><strong>Dendritic cells</strong><small>Antigen presentation</small></button>
      <button class="circuit-node" type="button" data-cell="2" style="--node-color:#34d399"><span class="n">03</span><strong>Activated T cells</strong><small>Effector function</small></button>
      <button class="circuit-node" type="button" data-cell="3" style="--node-color:#818cf8"><span class="n">04</span><strong>Plasma cells</strong><small>Antibody secretion</small></button>
      <button class="circuit-node" type="button" data-cell="4" style="--node-color:#f59e0b"><span class="n">05</span><strong>Barrier epithelium</strong><small>Mucus and barrier defense</small></button>
      <button class="circuit-node" type="button" data-cell="5" style="--node-color:#67e8f9"><span class="n">06</span><strong>ILC3s / mucosal</strong><small>IL-22 and IL-17 output</small></button>
    </div>
    <div class="node-detail celltype-detail" id="celltype-detail" aria-live="polite"></div>
  </section>

  <section class="circuit-section" id="resolution-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">Resolution architecture · Fig. 3</span><h2>Adaptive resolution versus failed resolution</h2><p>Resolution is an active restoration process, not a passive decline. The outcome depends on stress duration, branch dynamics and whether ER proteostasis is restored.</p></div></div>
    <div class="upr-resolve-compare">
      <div class="upr-resolve-col is-adaptive">
        <h3>Adaptive resolution</h3>
        <p>UPR signaling is transient and resolves, returning immune function toward baseline.</p>
        <ul class="upr-resolve-list">
          <li>ERAD, proteasomal clearance, autophagy and ER-phagy remove misfolded proteins and excess stress-expanded ER</li>
          <li>Ca²⁺ and redox balance normalize; translation recovers through GADD34-mediated eIF2α dephosphorylation</li>
          <li>IRE1α-XBP1 restores secretory capacity in high-demand cells</li>
          <li>Cytokine secretion, antigen presentation, antibody secretion and barrier function are restored</li>
        </ul>
      </div>
      <div class="upr-resolve-col is-failed">
        <h3>Failed resolution</h3>
        <p>Unfolded-protein burden persists and drives sustained or branch-skewed signaling.</p>
        <ul class="upr-resolve-list">
          <li>Persistent or excessive IRE1α signaling through RIDD, XBP1s and TRAF2–ASK1-JNK / NF-κB</li>
          <li>Prolonged PERK-ISR signaling suppresses cytokine protein synthesis; premature recovery reimposes ER burden</li>
          <li>Persistent cytokine signaling, impaired antigen presentation, secretory collapse</li>
          <li>Immunosuppressive function, T-cell dysfunction, epithelial barrier disruption and apoptosis</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">Resolution lab</span><h2>What happens across repeated low-dose exposures?</h2><p>The framework predicts that incomplete recovery between pulses, not total dose, shifts cells toward altered setpoints. Adjust the pulse pattern and recovery capacity to see the effect.</p></div></div>
    <div class="lab-grid">
      <div class="lab-controls">
        <div class="lab-control"><div class="lab-control-head"><label for="sim-strength">Per-pulse stress strength</label><output id="sim-strength-value" for="sim-strength">60%</output></div><input id="sim-strength" type="range" min="20" max="100" value="60" step="5"></div>
        <div class="lab-control"><div class="lab-control-head"><label for="sim-interval">Inter-exposure interval</label><output id="sim-interval-value" for="sim-interval">55%</output></div><input id="sim-interval" type="range" min="10" max="100" value="55" step="5"><span class="lab-help">Time between pulses, relative to the recovery half-time.</span></div>
        <div class="lab-control"><div class="lab-control-head"><label for="sim-recovery">Resolution capacity</label><output id="sim-recovery-value" for="sim-recovery">60%</output></div><input id="sim-recovery" type="range" min="10" max="100" value="60" step="5"><span class="lab-help">How fast ER proteostasis and function return between pulses.</span></div>
        <div class="lab-control"><div class="lab-control-head"><label for="sim-pulses">Number of exposures</label><output id="sim-pulses-value" for="sim-pulses">5</output></div><input id="sim-pulses" type="range" min="2" max="8" value="5" step="1"></div>
        <div class="circuit-actions"><button class="circuit-btn primary" type="button" id="sim-reset">Reset parameters ↺</button><button class="circuit-btn" type="button" id="sim-preset">Load incomplete-recovery example</button></div>
      </div>
      <div class="lab-readout" aria-live="polite">
        <span class="lab-state adaptive" id="sim-state">Adaptive resilience</span>
        <h3 id="sim-title">Recovery keeps pace with exposure</h3>
        <p id="sim-copy">Each pulse resolves before the next arrives, so the baseline setpoint is preserved.</p>
        <div class="lab-meter-label"><span>Residual stress before final pulse</span><strong id="sim-residual-label">18%</strong></div><div class="lab-meter"><span id="sim-residual-meter"></span></div>
        <div class="lab-meter-label"><span>Baseline drift</span><strong id="sim-drift-label">12%</strong></div><div class="lab-meter"><span id="sim-drift-meter"></span></div>
        <svg class="lab-chart" viewBox="-16 0 356 168" role="img" aria-label="Repeated UPR activation pulses with recovery between pulses">
          <line class="axis" x1="32" y1="18" x2="32" y2="136"/><line class="axis" x1="32" y1="136" x2="322" y2="136"/>
          <line class="axis" x1="32" y1="120" x2="322" y2="120" stroke-dasharray="3 5" id="sim-baseline"/>
          <text x="28" y="23" text-anchor="end">High</text><text x="28" y="140" text-anchor="end">Base</text><text x="32" y="158">Exposures →</text><text x="322" y="158" text-anchor="end">Time</text>
          <path class="trace" id="sim-trace" d=""/>
          <path id="sim-drift-line" fill="none" stroke="rgba(248,113,113,.7)" stroke-width="1.4" stroke-dasharray="4 4" d=""/>
        </svg>
      </div>
    </div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">Failure analysis · Table 3</span><h2>Distinct failures converge on persistent dysfunction</h2><p>Different disruptions within the resolution architecture produce recognizable failure modes. Select one to see the basis and its effect on immune dynamics.</p></div></div>
    <div class="mode-grid" role="group" aria-label="Circuit failure modes">
      <button class="mode-button is-active" data-mode="sensor" type="button">Sensor overload<small>Unfolded-protein load exceeds folding and clearance capacity.</small></button>
      <button class="mode-button" data-mode="imbalance" type="button">Branch imbalance<small>Dominant or prolonged PERK or IRE1α skews the output.</small></button>
      <button class="mode-button" data-mode="ridd" type="button">RIDD-associated dysfunction<small>Sustained IRE1α RNase degrades antigen-processing transcripts.</small></button>
      <button class="mode-button" data-mode="perk" type="button">Prolonged PERK-ISR<small>Persistent eIF2α phosphorylation limits cytokine output.</small></button>
      <button class="mode-button" data-mode="premature" type="button">Premature recovery<small>eIF2α dephosphorylation restores synthesis too early.</small></button>
      <button class="mode-button" data-mode="degradative" type="button">Degradative failure<small>ERAD, proteasome, autophagy or ER-phagy cannot clear the burden.</small></button>
      <button class="mode-button" data-mode="secretory" type="button">Secretory collapse<small>ER expansion fails to match secretory demand.</small></button>
      <button class="mode-button" data-mode="barrier" type="button">Barrier-resolution failure<small>Persistent epithelial ER stress disrupts mucin and repair.</small></button>
      <button class="mode-button" data-mode="incomplete" type="button">Incomplete recovery<small>UPR activity does not reset before the next exposure.</small></button>
    </div>
    <div class="mode-detail" id="mode-detail" aria-live="polite"></div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">What to measure · Fig. 3 readouts</span><h2>Activation, resolution and function must all be read</h2><p>Activation markers alone cannot distinguish transient adaptive stress from persistent immunotoxic signaling. The framework asks for all three layers, time-resolved.</p></div></div>
    <div class="readout-cols">
      <div class="readout-col is-activation">
        <h3>Activation markers</h3>
        <ul>
          <li>XBP1s</li><li>Phospho-IRE1α</li><li>Phospho-eIF2α</li><li>ATF4</li><li>CHOP</li><li>Cleaved ATF6</li><li>BiP / GRP78</li>
        </ul>
      </div>
      <div class="readout-col is-resolution">
        <h3>Resolution markers</h3>
        <ul>
          <li>Return-to-baseline time</li><li>Signal half-life</li><li>ERAD markers</li><li>ER-phagy markers</li><li>Autophagic flux</li><li>Protein-synthesis recovery</li><li>Ca²⁺ / redox normalization</li><li>Secretory restoration</li>
        </ul>
      </div>
      <div class="readout-col is-functional">
        <h3>Functional immune outputs</h3>
        <ul>
          <li>Cytokine secretion</li><li>Antigen presentation</li><li>Antibody secretion</li><li>T-cell effector function</li><li>Epithelial barrier function</li><li>Viability</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">Experimental agenda · Section 3.8.6</span><h2>Four priority experiments</h2><p>Not all predictions are equally tractable. Four define the most immediate agenda, and across all of them the common requirement is to report the recovery phase and the branch, not only the peak and the marker.</p></div></div>
    <div class="experiment-grid">
      <article class="experiment-card"><span class="step">PRIORITY 01</span><h3>Measure recovery kinetics directly</h3><p>Sample after exposure withdrawal, not only during it. Report the recovery half-time of each branch and the inter-exposure interval below which recovery becomes incomplete, together with the fraction that fails to return.</p></article>
      <article class="experiment-card"><span class="step">PRIORITY 02</span><h3>Repeated low-dose vs dose-matched single exposure</h3><p>Hold cumulative dose constant and vary the interval between pulses relative to the measured recovery half-time, so incomplete recovery rather than total dose becomes the manipulated variable.</p></article>
      <article class="experiment-card"><span class="step">PRIORITY 03</span><h3>Mixed exposures by sensing mechanism</h3><p>Pair a membrane-perturbing toxicant with a misfolding-inducing one, since IRE1 senses bilayer stress while ATF6 responds to luminal and sphingolipid inputs. Test whether co-exposure extends the recovery period disproportionately.</p></article>
      <article class="experiment-card"><span class="step">PRIORITY 04</span><h3>Map cell-type vulnerability</h3><p>Profile exposed tissue at single-cell resolution with paired functional output, to identify which high-secretory or barrier populations fail first and whether failure tracks secretory load, branch bias or resolution capacity.</p></article>
    </div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">Evidence provenance · Section 3.11</span><h2>What is observed, extrapolated, or predicted?</h2><p>The framework's three central claims rest on different bodies of research. Switch between them to keep direct observation apart from inference.</p></div></div>
    <div class="evidence-switches" role="group" aria-label="Evidence provenance categories"><button type="button" class="is-active" data-evidence="observed">Observed in exposure models</button><button type="button" data-evidence="extrapolated">Extrapolated from non-toxicological systems</button><button type="button" data-evidence="predicted">Framework predictions</button></div>
    <div class="evidence-panel" id="evidence-panel" aria-live="polite"></div>
  </section>

</div>

<script>
(function () {
  var root = document.getElementById('upr-circuit-lab');
  if (!root) return;

  // ---------- Branch explorer (Table 1) ----------
  var branches = {
    ire1: {
      color: '#f87171',
      name: 'IRE1α',
      role: 'Detects ER proteotoxic stress and signals through XBP1 mRNA splicing, regulated IRE1-dependent decay (RIDD) and inflammatory pathways. An evolutionarily conserved sensor with both kinase and ribonuclease activities.',
      outputs: [
        ['XBP1s', 'Spliced XBP1 drives ER expansion, lipid synthesis, protein-folding capacity and secretory adaptation.'],
        ['RIDD', 'Degrades selected ER-localized mRNAs and microRNAs, reducing ER load but potentially impairing antigen-processing transcripts.'],
        ['TRAF2 · ASK1-JNK · NF-κB', 'Links ER stress to inflammatory signaling and cytokine production in stressed cells.']
      ],
      immune: 'In immune cells, IRE1α influences cytokine production, antigen cross-presentation and inflammasome activity. It can promote inflammatory output or, through RIDD, limit cross-presentation, so its meaning is context-dependent.'
    },
    perk: {
      color: '#a5b4fc',
      name: 'PERK',
      role: 'Couples ER stress to eIF2α phosphorylation, translational attenuation and ATF4 induction, with CHOP-linked control of the choice between adaptation and death.',
      outputs: [
        ['eIF2α phosphorylation', 'Suppresses global translation and reduces secretory protein burden, including cytokine protein output in some immune contexts.'],
        ['ATF4', 'Induces stress-adaptive transcription spanning amino-acid metabolism, redox control and metabolic remodeling.'],
        ['CHOP · GADD34', 'Regulate stress adaptation, translational recovery and the fate choice between recovery and cell death.']
      ],
      immune: 'Sustained PERK-eIF2α can suppress cytokine production and weaken T-cell effector function, while ATF4-driven serine metabolism can reprogram macrophages toward immunosuppressive M2 states. PERK acts as a fate-control branch.'
    },
    atf6: {
      color: '#86efac',
      name: 'ATF6',
      role: 'Undergoes ER-to-Golgi trafficking and regulated proteolytic cleavage to induce chaperones, ERAD components and folding-capacity restoration, with an outcome that is context-dependent rather than uniformly protective.',
      outputs: [
        ['N-ATF6', 'The cleaved fragment activates transcription of ER proteostasis genes after regulated cleavage.'],
        ['BiP/GRP78 · chaperones', 'Expand folding capacity and support restoration of ER proteostasis.'],
        ['ERAD components', 'Promote clearance of misfolded ER proteins and reduce persistent proteotoxic burden.']
      ],
      immune: 'ATF6 is the most pronounced branch-level evidence gap in the framework. Toxicant-specific data exist for its cleavage, but whether toxicant-engaged ATF6 restores secretory competence or drives injury in immune and barrier cells is unknown.'
    }
  };
  var branchBtns = root.querySelectorAll('.upr-branch-btn');
  var branchDetail = root.querySelector('#branch-detail');
  function showBranch(key) {
    var b = branches[key]; if (!b) return;
    branchBtns.forEach(function (x) { x.classList.toggle('is-active', x.getAttribute('data-branch') === key); });
    branchDetail.style.setProperty('--br', b.color);
    var outs = b.outputs.map(function (o) { return '<div class="upr-suboutput"><b>' + o[0] + '</b><span>' + o[1] + '</span></div>'; }).join('');
    branchDetail.innerHTML = '<h3>' + b.name + '</h3><p class="upr-branch-role">' + b.role + '</p><div class="upr-suboutputs">' + outs + '</div><p class="upr-branch-immune"><b>Immune relevance.</b> ' + b.immune + '</p>';
  }
  branchBtns.forEach(function (x) { x.addEventListener('click', function () { showBranch(x.getAttribute('data-branch')); }); });
  showBranch('ire1');

  // ---------- Toxicant evidence (Table 2) ----------
  var toxins = {
    pm: {
      name: 'Fine particulate matter (PM2.5, urban and traffic-derived)',
      signature: 'A PERK-skewed signature with ATF6 cleavage and lipid-driven activation. Branch engagement is selective rather than uniform.',
      studies: [
        ['UPR', 'strong', 'Laing et al.: ER stress in mouse lung and liver in vivo with selective branch engagement. PERK-eIF2α-CHOP is induced and ATF6 cleaved, while IRE1α is phosphorylated with RIDD and JNK but XBP1 splicing suppressed.'],
        ['UPR', 'strong', 'Watterson et al.: urban PM2.5 and PM10 induce the UPR in human bronchial epithelial cells at non-cytotoxic concentrations, with PERK phosphorylation, 50 kDa ATF6 cleavage and BiP/Hsp70/Hsp90 induction.'],
        ['Immune', 'strong', 'Hu et al.: fine PM raises IL-6, TNF-α and MUC5AC in bronchial epithelial cells through ER stress; IRE1α or NOD1 knockdown reduces NF-κB translocation.'],
        ['Resolution', 'moderate', 'Ma et al.: 4-PBA pretreatment attenuates ER-stress markers, inflammation and NLRP3-GSDMD pyroptosis in PM2.5-exposed rats. Prophylactic design, no recovery phase measured.']
      ],
      gap: 'The principal limitation is the absence of a measured recovery phase for particulate matter.'
    },
    metals: {
      name: 'Metals and metalloids (vanadium, arsenic, cadmium, mercury)',
      signature: 'Mixed branch engagement, with ER-mitochondria coupling and ATF4/XBP1 transcriptional programs. Branch-resolved immune evidence is confined to arsenic.',
      studies: [
        ['UPR', 'strong', 'Yokouchi et al.: cadmium activates all three branches in renal tubular cells and mouse kidney; dominant-negative perturbation shows ATF6 and IRE1-XBP1/JNK are proapoptotic while PERK-eIF2α is protective.'],
        ['UPR', 'moderate', 'Wang et al.: vanadium enriches ER proteostasis pathways and disrupts mitochondria-associated ER membrane function and ER Ca²⁺ transport in kidney tissue.'],
        ['Immune', 'strong', 'Srivastava et al.: arsenic trioxide impairs macrophage engulfment, bacterial clearance and cytokine output at non-cytotoxic concentrations, with PERK-eIF2α-ATF4-CHOP induction and no detectable change in ATF6α.'],
        ['Resolution', 'moderate', 'Overexpression of GRP78 or ORP150 reduces ER stress and cadmium-induced apoptosis; 4-PBA or N-acetylcysteine lowers UPR signaling and restores macrophage function. Prophylactic, no recovery phase.']
      ],
      gap: 'Branch-resolved immune evidence is confined to arsenic for this class.'
    },
    edc: {
      name: 'Endocrine-disrupting compounds (4-tert-octylphenol, bisphenols, phthalates)',
      signature: 'ER stress is documented, but the immune effects of the same compounds are reported through non-proteostatic routes, so receptor, cytotoxic and proteotoxic contributions remain unseparated.',
      studies: [
        ['UPR', 'moderate', 'Chen et al.: estrogen receptor α-mediated ER stress drives 4-tert-octylphenol-induced cardiac developmental toxicity in zebrafish.'],
        ['Immune', 'moderate', 'Lee et al.: 4-tert-octylphenol raises IL-4 in antigen-primed T cells via calcineurin/NFAT rather than estrogen-receptor signaling; no UPR branch measured.'],
        ['Immune', 'limited', 'Zarei &amp; Pourahmad: dibutyl phthalate suppresses IL-2, IFN-γ and TNF-α in human lymphocytes, but cytokine suppression cannot be separated from concurrent cytotoxicity.'],
        ['Resolution', 'sparse', 'Resolution and post-exposure recovery have not been examined for this class.']
      ],
      gap: 'Receptor, cytotoxic and proteotoxic contributions are not separated for endocrine disruptors.'
    },
    pops: {
      name: 'Persistent organic pollutants (dioxins, PCBs, perfluoroalkyl substances, PAHs)',
      signature: 'Direct UPR branch engagement at human-relevant concentrations, often through ER calcium release rather than misfolding. Immune evidence is routed through receptor and metabolic rather than proteostatic mechanisms.',
      studies: [
        ['UPR', 'strong', 'Qi et al.: perfluoroalkyl substances at serum-matched concentrations (10-100 nM) raise IRE1α, p-eIF2α, ATF4, ATF6 and BiP across three human liver cell lines, alongside TNF-α and IL-6.'],
        ['UPR', 'strong', 'Hocevar et al.: perfluorooctanoic acid activates PERK, IRE1α and ATF6 in mouse pancreatic acinar cells at non-cytotoxic concentrations; branch-selective inhibitors identify IRE1α-XBP1 as predominant.'],
        ['Immune', 'moderate', 'Taylor et al.: perfluorooctanoic acid suppresses the T-cell-dependent IgM response and reduces splenic plasmablasts; the mechanism pursued is mitochondrial and no UPR branch is measured.'],
        ['Resolution', 'limited', 'Hocevar et al.: 4-PBA blocks PFOA-induced UPR markers while antioxidants do not, separating proteostatic from oxidative contributions. Prophylactic, non-immune cell type.']
      ],
      gap: 'Immune evidence is routed through receptor and metabolic rather than proteostatic mechanisms for this class.'
    },
    plastics: {
      name: 'Micro- and nanoplastics (polystyrene; silica nanoparticles as comparator)',
      signature: 'Particles reach the ER and barrier tissues, but no polymer-specific UPR evidence exists. The only post-exposure data for any class come from here, and diverge by tissue.',
      studies: [
        ['UPR', 'sparse', 'Christen &amp; Fent: silica nanoparticles induce BiP and XBP1 splicing in human liver cells, identifying IRE1α engagement. The particle is an engineered-silica comparator, not a plastic, so no polymer-specific UPR evidence exists.'],
        ['Immune', 'moderate', 'Moosavi et al.: polystyrene nanoplastics accumulate in macrophage endosomes, lysosomes and the ER at non-cytotoxic concentrations and raise bactericidal ROS; ER function is not measured.'],
        ['Immune &amp; resolution', 'moderate', 'Han et al.: repeated intratracheal instillation drives size-dependent alveolar barrier loss and fibrosis; across a two-week post-exposure period, injury resolves only partially in smaller-particle groups. No UPR branch measured.'],
        ['Immune &amp; resolution', 'limited', 'Tavakolpournegari et al.: oral exposure remodels cortical microglia; activation markers decline despite near-complete particle retention, indicating adaptive regulation. Recovery arm in vitro, no UPR branch.']
      ],
      gap: 'No polymer-specific unfolded protein response evidence exists for plastics.'
    },
    myco: {
      name: 'Mycotoxins (3-acetyldeoxynivalenol, deoxynivalenol)',
      signature: 'All three branch markers rise and track immune-cell disturbance, both reversed by chemical chaperone treatment. Evidence rests on single acute-dose models.',
      studies: [
        ['UPR &amp; immune', 'strong', 'Jia et al.: 3-acetyldeoxynivalenol raises all three branch markers in spleen and alters immune-cell populations, neutrophil accumulation and cytokine induction, all attenuated by chemical chaperone treatment.'],
        ['UPR &amp; immune', 'strong', 'Zhao et al.: deoxynivalenol engages the PERK-eIF2α-ATF4-CHOP axis in mouse spleen and polarizes macrophages toward M1 dose-dependently; chemical chaperone treatment shifts polarization back toward M2.'],
        ['Resolution', 'moderate', 'Jia et al.: restoring proteostasis with 4-PBA blunts immunotoxic signaling without reducing exposure, the closest available causal test. Recovery kinetics are not resolved.']
      ],
      gap: 'Evidence rests on a single acute exposure model for mycotoxins.'
    }
  };
  var gradeLabel = { strong: 'Strong', moderate: 'Moderate', limited: 'Limited', sparse: 'Sparse' };
  var toxBtns = root.querySelectorAll('.tox-btn');
  var toxDetail = root.querySelector('#tox-detail');
  function showTox(key) {
    var t = toxins[key]; if (!t) return;
    toxBtns.forEach(function (x) { x.classList.toggle('is-active', x.getAttribute('data-tox') === key); });
    var rows = t.studies.map(function (s) {
      return '<div class="tox-study"><span class="tox-domain">' + s[0] + '</span><span class="grade grade-' + s[1] + '">' + gradeLabel[s[1]] + '</span><p>' + s[2] + '</p></div>';
    }).join('');
    toxDetail.innerHTML = '<h3>' + t.name + '</h3><p class="tox-signature">' + t.signature + '</p><div class="tox-evidence">' + rows + '</div><p class="tox-gap"><b>Principal gap.</b> ' + t.gap + '</p>';
  }
  toxBtns.forEach(function (x) { x.addEventListener('click', function () { showTox(x.getAttribute('data-tox')); }); });
  showTox('pm');

  // ---------- Cell-type decoder (Fig. 2) ----------
  var cells = [
    { name: 'Macrophages', ire1: ['IRE1α-XBP1 drives cytokines, TXNIP/NLRP3 and ERK/NF-κB toward inflammatory M1 polarization.', 1], perk: ['PERK-eIF2α-ATF4 serine metabolism skews toward immunosuppressive M2; eIF2α also suppresses cytokine translation.', 1], atf6: ['N-ATF6 supports PRR-linked cytokines and antimicrobial responses.', 1], consequence: 'Inflammatory or immunosuppressive polarization' },
    { name: 'Dendritic cells', ire1: ['RIDD degrades MHC I and antigen-processing transcripts, impairing cross-presentation; XBP1s supports ER capacity.', 1], perk: ['eIF2α phosphorylation limits antigen synthesis and reduces MHC I peptide presentation.', 1], atf6: ['N-ATF6 provides context-dependent proteostasis support.', 0], consequence: 'Maintained or impaired antigen presentation' },
    { name: 'Activated T cells', ire1: ['IRE1α-XBP1 supports activation, proliferation and cytokine secretion by resolving secretory stress.', 1], perk: ['Sustained p-eIF2α reduces effector cytokine translation, driving T-cell dysfunction.', 1], atf6: ['Context-dependent support of T-cell cytokine output.', 0], consequence: 'Impaired effector function, exhaustion-like dysfunction' },
    { name: 'Plasma cells', ire1: ['IRE1α-XBP1 promotes ER expansion and efficient antibody secretion.', 1], perk: ['PERK is normally restrained; sustained activation inhibits global translation.', 0], atf6: ['N-ATF6 supports folding capacity.', 0], consequence: 'Antibody secretion or secretory collapse' },
    { name: 'Barrier epithelial cells', ire1: ['Lipid-stress sensing via IRE1α drives XBP1s barrier adaptation or mucosal inflammatory cytokines.', 1], perk: ['Sustained p-eIF2α-CHOP drives apoptotic epithelial loss.', 1], atf6: ['Lipid-responsive ATF6 drives mucin responses.', 1], consequence: 'Barrier dysfunction, mucus disruption, epithelial injury' },
    { name: 'ILC3s / mucosal immune cells', ire1: ['IRE1α-XBP1 sustains IL-22 and IL-17 production and epithelial barrier defense.', 1], perk: ['Not a dominant branch in this context.', 0], atf6: ['Less emphasized in this context.', 0], consequence: 'Barrier defense or mucosal vulnerability' }
  ];
  var cellBtns = root.querySelectorAll('[data-cell]');
  var cellDetail = root.querySelector('#celltype-detail');
  function showCell(i) {
    var c = cells[i]; if (!c) return;
    cellBtns.forEach(function (b, k) { b.classList.toggle('is-active', k === i); });
    function br(label, color, data) {
      return '<div class="ct-branch' + (data[1] ? '' : ' is-faded') + '" style="--br:' + color + '"><b>' + label + '</b><span>' + data[0] + '</span></div>';
    }
    cellDetail.innerHTML =
      '<span class="node-detail-index">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<div><h3>' + c.name + '</h3>' +
      '<div class="ct-branches">' + br('IRE1α', '#f87171', c.ire1) + br('PERK', '#a5b4fc', c.perk) + br('ATF6', '#86efac', c.atf6) + '</div>' +
      '<div class="ct-consequence"><b>Dominant immune consequence</b><span>' + c.consequence + '</span></div></div>';
    cellDetail.style.animation = 'none'; void cellDetail.offsetWidth; cellDetail.style.animation = 'lab-enter .35s ease both';
  }
  cellBtns.forEach(function (b, i) { b.addEventListener('click', function () { showCell(i); }); });
  showCell(0);

  // ---------- Repeated-exposure recovery simulator ----------
  var sim = {
    strength: root.querySelector('#sim-strength'),
    interval: root.querySelector('#sim-interval'),
    recovery: root.querySelector('#sim-recovery'),
    pulses: root.querySelector('#sim-pulses')
  };
  function updateSim() {
    var s = +sim.strength.value, iv = +sim.interval.value, r = +sim.recovery.value, n = +sim.pulses.value;
    root.querySelector('#sim-strength-value').textContent = s + '%';
    root.querySelector('#sim-interval-value').textContent = iv + '%';
    root.querySelector('#sim-recovery-value').textContent = r + '%';
    root.querySelector('#sim-pulses-value').textContent = n;

    // Fraction of each pulse that clears before the next, from interval and recovery capacity.
    var clear = Math.max(0, Math.min(1, (iv / 100) * (0.35 + 0.9 * r / 100)));
    var x0 = 32, x1 = 322, span = x1 - x0, base = 120, top = 18;
    var slot = span / (n + 0.4);
    var residual = 0;             // carried-over stress at the start of each pulse (0..1)
    var pts = ['M' + x0 + ' ' + base];
    var driftPts = [];
    var maxResidual = 0;
    for (var i = 0; i < n; i++) {
      var cx = x0 + slot * (i + 0.5);
      var peakVal = Math.min(1, residual + s / 100 * (1 - 0.15 * residual));
      var peakY = base - peakVal * (base - top);
      var riseX = cx - slot * 0.22, fallX = cx + slot * 0.3, nextX = x0 + slot * (i + 1.5) - slot * 0.22;
      var startY = base - residual * (base - top);
      pts.push('L' + riseX.toFixed(1) + ' ' + startY.toFixed(1));
      pts.push('Q' + cx.toFixed(1) + ' ' + peakY.toFixed(1) + ' ' + (cx + slot * 0.06).toFixed(1) + ' ' + peakY.toFixed(1));
      // Decay toward the residual that remains before the next pulse.
      residual = peakVal * (1 - clear);
      maxResidual = Math.max(maxResidual, residual);
      var endX = (i < n - 1) ? nextX : x1;
      var endY = base - residual * (base - top);
      pts.push('C' + (fallX).toFixed(1) + ' ' + (peakY + (endY - peakY) * 0.5).toFixed(1) + ' ' + ((fallX + endX) / 2).toFixed(1) + ' ' + (endY - 1).toFixed(1) + ' ' + endX.toFixed(1) + ' ' + endY.toFixed(1));
      driftPts.push([cx, base - residual * (base - top)]);
    }
    root.querySelector('#sim-trace').setAttribute('d', pts.join(' '));

    // Baseline drift line through the inter-pulse residuals.
    var drift = 'M' + x0 + ' ' + base;
    driftPts.forEach(function (p) { drift += ' L' + p[0].toFixed(1) + ' ' + p[1].toFixed(1); });
    root.querySelector('#sim-drift-line').setAttribute('d', drift);

    var residualPct = Math.round(maxResidual * 100);
    var driftPct = Math.round((driftPts.length ? driftPts[driftPts.length - 1][1] : base) >= base ? 0 : ((base - driftPts[driftPts.length - 1][1]) / (base - top)) * 100);
    root.querySelector('#sim-residual-label').textContent = residualPct + '%';
    root.querySelector('#sim-residual-meter').style.width = residualPct + '%';
    root.querySelector('#sim-drift-label').textContent = driftPct + '%';
    root.querySelector('#sim-drift-meter').style.width = driftPct + '%';

    var adaptive = clear >= 0.6 && driftPct < 30;
    var state = root.querySelector('#sim-state');
    state.className = 'lab-state ' + (adaptive ? 'adaptive' : 'persistent');
    state.textContent = adaptive ? 'Adaptive resilience' : 'Altered immune setpoint';
    root.querySelector('#sim-title').textContent = adaptive ? 'Recovery keeps pace with exposure' : 'Recovery is incomplete between pulses';
    root.querySelector('#sim-copy').textContent = adaptive
      ? 'Each pulse resolves before the next arrives, so the baseline setpoint is preserved.'
      : 'Residual proteotoxic stress accumulates across pulses and the baseline setpoint drifts upward, the state the framework predicts shifts immune or barrier cells toward persistent dysfunction.';
  }
  Object.keys(sim).forEach(function (k) { sim[k].addEventListener('input', updateSim); });
  root.querySelector('#sim-reset').addEventListener('click', function () {
    sim.strength.value = 60; sim.interval.value = 55; sim.recovery.value = 60; sim.pulses.value = 5; updateSim();
  });
  root.querySelector('#sim-preset').addEventListener('click', function () {
    sim.strength.value = 75; sim.interval.value = 25; sim.recovery.value = 30; sim.pulses.value = 7; updateSim();
  });
  updateSim();

  // ---------- Failure modes (Table 3) ----------
  var modes = {
    sensor: ['Sensor overload', 'Persistent unfolded-protein accumulation exceeds folding and clearance capacity.', 'Sustained cytokine signaling and chronic immune activation.'],
    imbalance: ['Branch imbalance', 'Dominant or prolonged PERK or IRE1α signaling skews the stress output away from balanced resolution.', 'Inflammatory polarization, immune suppression, impaired function or stress-induced cell loss.'],
    ridd: ['RIDD-associated dysfunction', 'Sustained IRE1α RNase activity degrades selected mRNAs, including antigen-processing or MHC-related transcripts.', 'Impaired dendritic-cell antigen presentation and reduced cross-presentation.'],
    perk: ['Prolonged PERK-ISR signaling', 'Persistent eIF2α phosphorylation suppresses translation and limits cytokine or effector protein production.', 'T-cell dysfunction, reduced cytokine output and impaired immune activation.'],
    premature: ['Premature translational recovery', 'eIF2α dephosphorylation restores protein synthesis before ER proteostasis is restored.', 'Reimposes ER burden and may worsen unresolved stress.'],
    degradative: ['Degradative resolution failure', 'ERAD, proteasome, autophagy or ER-phagy cannot clear misfolded proteins or damaged ER.', 'Persistent UPR signaling and immune dysregulation.'],
    secretory: ['Secretory collapse', 'ER expansion and folding capacity fail to match secretory demand.', 'Impaired antibody secretion, cytokine output, antigen presentation or barrier function.'],
    barrier: ['Barrier-resolution failure', 'Persistent epithelial ER stress disrupts mucin production, inflammatory control or repair-associated programs.', 'Mucosal inflammation, barrier dysfunction and heightened environmental susceptibility.'],
    incomplete: ['Incomplete recovery between exposures', 'UPR activity does not fully reset before the next exposure pulse.', 'Establishes altered immune setpoints and persistent stress-responsive states.']
  };
  var modeButtons = root.querySelectorAll('.mode-button');
  function showMode(key) {
    var d = modes[key]; if (!d) return;
    modeButtons.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-mode') === key); });
    root.querySelector('#mode-detail').innerHTML = '<h3>' + d[0] + '</h3><div><strong>Basis</strong><p>' + d[1] + '</p></div><div><strong>Effect on immune dynamics</strong><p>' + d[2] + '</p></div>';
  }
  modeButtons.forEach(function (b) { b.addEventListener('click', function () { showMode(b.getAttribute('data-mode')); }); });
  showMode('sensor');

  // ---------- Evidence provenance ----------
  var evidence = {
    observed: ['Observed directly in toxicant-exposed systems', 'That environmental toxicants engage UPR signaling has been demonstrated directly in exposure models. The strongest evidence comes from particulate matter and mycotoxins, where branch markers rise in exposure-relevant tissues and chemical-chaperone rescue links the signaling to immune disturbance. These mechanisms are described in the review as observed.'],
    extrapolated: ['Extrapolated from non-toxicological systems', 'That UPR branch selection influences immune output comes mainly from non-toxicological systems: TLR-stimulated macrophages, tumor-associated myeloid cells, tissue-resident memory T cells and models of intestinal and allergic airway inflammation. Applying these branch-to-immune links to environmental exposures is an extrapolation, identified as such.'],
    predicted: ['Framework predictions still to test', 'That failed resolution contributes to immune dysfunction is supported most indirectly. Evidence that resolution dynamics rather than activation alone shape outcome comes from single-cell imaging and reconstitution of chronic ER stress in non-environmental models. The clearest partial exception is that pharmacological proteostasis support reduces immunotoxic signaling without reducing exposure, which implicates proteostatic capacity causally. The experimental predictions and the Table 2 grading are presented as predictions, not established findings.']
  };
  var evidenceButtons = root.querySelectorAll('[data-evidence]');
  function showEvidence(key) {
    var d = evidence[key]; if (!d) return;
    evidenceButtons.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-evidence') === key); });
    root.querySelector('#evidence-panel').innerHTML = '<h3>' + d[0] + '</h3><p>' + d[1] + '</p>';
  }
  evidenceButtons.forEach(function (b) { b.addEventListener('click', function () { showEvidence(b.getAttribute('data-evidence')); }); });
  showEvidence('observed');

  // ---------- 3D scene controls (drive data-view / data-phase; the 3D script observes them) ----------
  var sceneStage = root.querySelector('#upr-scene-stage');
  if (sceneStage) {
    var viewBtns = root.querySelectorAll('[data-set-view]');
    var phaseBtns = root.querySelectorAll('[data-set-phase]');
    viewBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        viewBtns.forEach(function (x) { x.classList.toggle('is-active', x === b); });
        sceneStage.setAttribute('data-view', b.getAttribute('data-set-view'));
      });
    });
    phaseBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        phaseBtns.forEach(function (x) { x.classList.toggle('is-active', x === b); });
        sceneStage.setAttribute('data-phase', b.getAttribute('data-set-phase'));
      });
    });
  }
})();
</script>
{% include depth3d/upr.liquid %}
