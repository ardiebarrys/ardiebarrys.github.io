---
layout: yap-fullscreen
title: Cellular Circuits
permalink: /cellular-signaling-circuits/
description: An overview of five research frameworks exploring cellular signaling as dynamic regulatory circuits.
nav: true
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/cellular-circuit-overview.css' | relative_url }}?v=20261011">

<div class="scf-page" id="scf-overview">
  <header class="scf-hero">
    <div class="scf-hero-copy">
      <p class="scf-eyebrow"><span class="scf-live-dot"></span>Independent research framework</p>
      <h1>Cellular Signaling<br><span>as Dynamic Regulatory Circuits</span></h1>
      <p class="scf-lede">Five biological systems, one question: how do cells read an input, control how long it lasts and return to a responsive state?</p>
      <div class="scf-hero-actions">
        <a class="scf-primary-link" href="#scf-research">Explore the five frameworks <span aria-hidden="true">↓</span></a>
        <a class="scf-secondary-link" href="{{ '/publications/' | relative_url }}">Publications <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="scf-hero-diagram" role="img" aria-label="A regulatory circuit linking input, control, output and reset around a central cell state.">
      <svg viewBox="0 0 360 384" aria-hidden="true">
        <defs>
          <linearGradient id="scf-ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#67e8f9"/><stop offset=".52" stop-color="#a5b4fc"/><stop offset="1" stop-color="#86efac"/></linearGradient>
          <linearGradient id="scf-core" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#202d46"/><stop offset="1" stop-color="#121928"/></linearGradient>
          <marker id="scf-tip" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#67e8f9"/></marker>
        </defs>
        <circle cx="180" cy="178" r="112" class="scf-guide"/>
        <circle cx="180" cy="178" r="92" class="scf-guide" stroke-dasharray="3 8"/>
        <ellipse cx="180" cy="178" rx="150" ry="60" transform="rotate(-42 180 178)" class="scf-orbit scf-orbit-a"/>
        <ellipse cx="180" cy="178" rx="150" ry="60" transform="rotate(42 180 178)" class="scf-orbit scf-orbit-b"/>
        <path d="M225.8 52.1 A134 134 0 0 1 304.2 127.8" class="scf-arc" marker-end="url(#scf-tip)"/>
        <path d="M305.9 223.8 A134 134 0 0 1 230.2 302.2" class="scf-arc" marker-end="url(#scf-tip)"/>
        <path d="M134.2 303.9 A134 134 0 0 1 55.8 228.2" class="scf-arc" marker-end="url(#scf-tip)"/>
        <path d="M54.1 132.2 A134 134 0 0 1 129.8 53.8" class="scf-arc" marker-end="url(#scf-tip)"/>
        <circle cx="180" cy="178" r="60" fill="url(#scf-core)" stroke="rgba(148, 163, 184, .4)" stroke-width="1.4"/>
        <circle cx="180" cy="178" r="48" fill="none" stroke="rgba(103,232,249,.21)" stroke-width="1"/>
        <text x="180" y="170" text-anchor="middle" class="scf-core-small">CELLULAR</text>
        <text x="180" y="194" text-anchor="middle" class="scf-core-large">STATE</text>
        <g class="scf-diagram-node" transform="translate(180 44)"><circle r="36"/><text y="4.5" text-anchor="middle">INPUT</text></g>
        <g class="scf-diagram-node" transform="translate(314 178)"><circle r="36"/><text y="4.5" text-anchor="middle">CONTROL</text></g>
        <g class="scf-diagram-node" transform="translate(180 312)"><circle r="36"/><text y="4.5" text-anchor="middle">OUTPUT</text></g>
        <g class="scf-diagram-node" transform="translate(46 178)"><circle r="36"/><text y="4.5" text-anchor="middle">RESET</text></g>
        <circle cx="112" cy="110" r="4" fill="#67e8f9"/><circle cx="248" cy="110" r="3.5" fill="#c4b5fd"/>
        <circle cx="248" cy="246" r="4" fill="#86efac"/><circle cx="112" cy="246" r="3.5" fill="#fbbf24"/>
        <text x="180" y="378" text-anchor="middle" class="scf-diagram-foot">SENSE · INTEGRATE · REGULATE · RESOLVE</text>
      </svg>
    </div>
    <p class="scf-hero-footer"><span>Feedback over linearity</span><span>Time over snapshots</span><span>Resolution over peaks</span></p>
  </header>

  <section class="scf-panel" aria-labelledby="scf-principle-title">
    <p class="scf-kicker">The shared lens</p>
    <h2 id="scf-principle-title">A pathway is more than an on/off switch</h2>
    <p class="scf-intro">Each review asks the same control question: how is a signal sensed, shaped over time, held in check by feedback and ended?</p>
    <ol class="scf-process" aria-label="Signal control sequence">
      <li><span>01</span><b>Sense</b><small>Detect a change</small></li>
      <li><span>02</span><b>Integrate</b><small>Combine inputs</small></li>
      <li><span>03</span><b>Control</b><small>Feedback and timing</small></li>
      <li><span>04</span><b>Resolve</b><small>Reset responsiveness</small></li>
    </ol>
  </section>

  <section class="scf-library" id="scf-research" aria-labelledby="scf-research-title">
    <p class="scf-kicker">Five connected frameworks</p>
    <h2 id="scf-research-title">Explore the research</h2>

    <div class="scf-filters" role="group" aria-label="Filter frameworks">
      <button type="button" class="scf-filter is-active" data-filter="all" aria-pressed="true">All five</button>
      <button type="button" class="scf-filter" data-filter="biochemical" aria-pressed="false">Biochemical feedback</button>
      <button type="button" class="scf-filter" data-filter="mechanical" aria-pressed="false">Mechanical signaling</button>
      <button type="button" class="scf-filter" data-filter="temporal" aria-pressed="false">Temporal decoding</button>
      <button type="button" class="scf-filter" data-filter="proteostasis" aria-pressed="false">Proteostasis</button>
    </div>
    <p class="scf-sr-only" id="scf-filter-status" aria-live="polite"></p>

    <div class="scf-card-grid">
      <article class="scf-paper-card scf-yap" data-category="mechanical">
        <div class="scf-card-top"><span class="scf-index">01</span><span class="scf-domain">Mechanochemical signaling</span></div>
        <ol class="scf-flow" aria-label="Mechanics, YAP/TAZ, genes, resolution">
          <li><b>Mechanics</b><span>force, matrix</span></li>
          <li><b>YAP/TAZ</b><span>nuclear state</span></li>
          <li><b>Genes</b><span>cell response</span></li>
          <li><b>Resolution</b><span>reset capacity</span></li>
        </ol>
        <div class="scf-card-copy">
          <h3>YAP/TAZ as a mechanochemical signal-resolution circuit</h3>
          <p>Matrix stiffness, attachment and actin tension are read through YAP/TAZ. The framework links signal timing with active termination and recovery of mechanosensitivity.</p>
        </div>
        <p class="scf-card-question"><b>Central question</b><span>Can a cell regain mechanical responsiveness after its force history changes?</span></p>
        <a class="scf-open" href="{{ '/research/yap-taz-signal-resolution/' | relative_url }}"><span>Explore YAP/TAZ</span><span aria-hidden="true">↗</span></a>
      </article>

      <article class="scf-paper-card scf-nrf" data-category="biochemical">
        <div class="scf-card-top"><span class="scf-index">02</span><span class="scf-domain">Redox signaling</span></div>
        <ol class="scf-flow" aria-label="Redox cue, KEAP1, NRF2, reset">
          <li><b>Redox cue</b><span>stress input</span></li>
          <li><b>KEAP1</b><span>sensor, gate</span></li>
          <li><b>NRF2</b><span>gene program</span></li>
          <li><b>Reset</b><span>turnover, redox</span></li>
        </ol>
        <div class="scf-card-copy">
          <h3>NRF2–KEAP1 as a redox signal-resolution circuit</h3>
          <p>KEAP1 senses redox and electrophilic stress while CUL3–KEAP1 controls NRF2 turnover. KEAP1 renewal, proteostasis, autophagy and reducing capacity decide when the signal ends.</p>
        </div>
        <p class="scf-card-question"><b>Central question</b><span>Does the redox response resolve once the stress passes, or stay engaged?</span></p>
        <a class="scf-open" href="{{ '/research/nrf2-keap1-redoxostat/' | relative_url }}"><span>Explore NRF2–KEAP1</span><span aria-hidden="true">↗</span></a>
      </article>

      <article class="scf-paper-card scf-cyp" data-category="biochemical">
        <div class="scf-card-top"><span class="scf-index">03</span><span class="scf-domain">Environment · Immunity</span></div>
        <ol class="scf-flow" aria-label="Ligand, AhR, CYP1A1, immunity">
          <li><b>Ligand</b><span>environment</span></li>
          <li><b>AhR</b><span>sensor</span></li>
          <li><b>CYP1A1</b><span>metabolism</span></li>
          <li><b>Immunity</b><span>local context</span></li>
        </ol>
        <div class="scf-card-copy">
          <h3>CYP1A1 as a conserved metabolic circuit</h3>
          <p>AhR senses environmental, dietary, microbial and endogenous ligands. Delayed CYP1A1 induction clears susceptible ligands, tying chemical persistence to how long immune and barrier signaling lasts.</p>
        </div>
        <p class="scf-card-question"><b>Central question</b><span>How does ligand susceptibility decide whether sensing is transient or persistent?</span></p>
        <a class="scf-open" href="{{ '/research/cyp1a1-metabolic-feedback/' | relative_url }}"><span>Explore CYP1A1</span><span aria-hidden="true">↗</span></a>
      </article>

      <article class="scf-paper-card scf-cond" data-category="temporal">
        <div class="scf-card-top"><span class="scf-index">04</span><span class="scf-domain">Gene regulation · Timing</span></div>
        <ol class="scf-flow" aria-label="Pulses, assembly, reset, bursts">
          <li><b>Pulses</b><span>signal timing</span></li>
          <li><b>Assembly</b><span>threshold, lag</span></li>
          <li><b>Reset</b><span>exchange</span></li>
          <li><b>Bursts</b><span>RNA output</span></li>
        </ol>
        <div class="scf-card-copy">
          <h3>Transcriptional condensates as kinetic filters</h3>
          <p>Thresholds, nucleation delays, molecular exchange and dissolution may link fluctuating inputs to transcriptional bursting. A testable hypothesis, not yet a proven causal sequence.</p>
        </div>
        <p class="scf-card-question"><b>Central question</b><span>Do condensate kinetics decode timing, or reflect transcription already underway?</span></p>
        <a class="scf-open" href="{{ '/research/transcriptional-condensates-kinetic-filters/' | relative_url }}"><span>Explore condensates</span><span aria-hidden="true">↗</span></a>
      </article>

      <article class="scf-paper-card scf-upr" data-category="proteostasis">
        <div class="scf-card-top"><span class="scf-index">05</span><span class="scf-domain">Proteostasis · Immunotoxicity</span></div>
        <ol class="scf-flow" aria-label="Toxicant, ER sensors, branches, resolution">
          <li><b>Toxicant</b><span>proteotoxic input</span></li>
          <li><b>ER sensors</b><span>IRE1α, PERK, ATF6</span></li>
          <li><b>Branches</b><span>immune output</span></li>
          <li><b>Resolution</b><span>recover or persist</span></li>
        </ol>
        <div class="scf-card-copy">
          <h3>The UPR as a proteotoxic stress-resolution circuit</h3>
          <p>Environmental toxicants act as proteotoxic inputs. IRE1α, PERK and ATF6 decode ER stress into immune outcomes, and failed resolution can shift immune and barrier cells toward persistent dysfunction.</p>
        </div>
        <p class="scf-card-question"><b>Central question</b><span>Does the response resolve before the next exposure, or stay branch-skewed and persistent?</span></p>
        <a class="scf-open" href="{{ '/research/upr-proteotoxic-stress-resolution/' | relative_url }}"><span>Explore the UPR</span><span aria-hidden="true">↗</span></a>
      </article>
    </div>
  </section>

  <section class="scf-panel" aria-labelledby="scf-synthesis-title">
    <p class="scf-kicker">The connecting question</p>
    <h2 id="scf-synthesis-title">What determines whether a signal ends?</h2>
    <p class="scf-intro">Activation is only half the story. The other half is how each system changes once the input fades.</p>
    <div class="scf-synthesis-grid">
      <div><span>01</span><b>Input history</b><p>Force, redox state, ligand supply or pulse pattern.</p></div>
      <div><span>02</span><b>Control mechanism</b><p>Transport, protein turnover, metabolic feedback or assembly.</p></div>
      <div><span>03</span><b>Time course</b><p>Latency, persistence, adaptation, termination and recovery.</p></div>
      <div><span>04</span><b>Outcome</b><p>Responsive baseline, altered cell state or persistent signaling.</p></div>
    </div>
  </section>

  <section class="scf-endnote">
    <div>
      <p class="scf-kicker">A framework, not one mechanism</p>
      <h2>Shared logic. Distinct biology.</h2>
      <p>The reviews do not claim every pathway uses the same machinery. They test whether timing, feedback and resolution help organize mechanisms across systems.</p>
    </div>
    <a href="{{ '/publications/' | relative_url }}">Browse publications <span aria-hidden="true">↗</span></a>
  </section>
</div>
<script src="{{ '/assets/js/cellular-circuit-overview.js' | relative_url }}?v=20261011" defer></script>
{% include depth3d/cards.liquid %}
