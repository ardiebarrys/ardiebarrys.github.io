---
layout: yap-fullscreen
title: Cellular Circuits
permalink: /cellular-signaling-circuits/
description: An overview of four research frameworks exploring cellular signaling as dynamic regulatory circuits.
nav: true
nav_order: 7
---

<link rel="stylesheet" href="{{ '/assets/css/cellular-circuit-overview.css' | relative_url }}?v=20261009-2">

<div class="scf-page" id="scf-overview">
  <a class="scf-back" href="{{ '/' | relative_url }}">← Back to homepage</a>

  <header class="scf-hero">
    <div class="scf-hero-ambient" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
    <div class="scf-hero-copy">
      <div class="scf-eyebrow"><span class="scf-live-dot"></span> INDEPENDENT RESEARCH FRAMEWORK</div>
      <h1>Cellular Signaling<br><span>as Dynamic Regulatory Circuits</span></h1>
      <p class="scf-lede">Four biological systems. One shared question: how do cells interpret an input, control its duration, and return toward a responsive state?</p>
      <div class="scf-hero-actions">
        <a class="scf-primary-link" href="#scf-research">Explore the four frameworks <span aria-hidden="true">↓</span></a>
        <a class="scf-secondary-link" href="{{ '/publications/' | relative_url }}">View publications ↗</a>
      </div>
    </div>
    <div class="scf-hero-diagram" role="img" aria-label="A dynamic regulatory circuit connecting signal input, integration, feedback and resolution around a central cell state.">
      <svg viewBox="0 0 430 410" aria-hidden="true">
        <defs>
          <linearGradient id="scf-ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#67e8f9"/><stop offset=".52" stop-color="#a5b4fc"/><stop offset="1" stop-color="#86efac"/></linearGradient>
          <linearGradient id="scf-core" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#183d70"/><stop offset="1" stop-color="#11183c"/></linearGradient>
          <marker id="scf-tip" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#67e8f9"/></marker>
        </defs>
        <circle cx="215" cy="202" r="144" fill="none" stroke="rgba(147,197,253,.12)" stroke-width="1"/>
        <circle cx="215" cy="202" r="119" fill="none" stroke="rgba(147,197,253,.12)" stroke-width="1" stroke-dasharray="3 8"/>
        <ellipse cx="215" cy="202" rx="172" ry="71" transform="rotate(-42 215 202)" fill="none" stroke="rgba(196,181,253,.2)" stroke-width="1"/>
        <ellipse cx="215" cy="202" rx="172" ry="71" transform="rotate(42 215 202)" fill="none" stroke="rgba(103,232,249,.17)" stroke-width="1"/>
        <path d="M215 52 A150 150 0 0 1 362 201" fill="none" stroke="url(#scf-ring)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 8" marker-end="url(#scf-tip)"/>
        <path d="M362 204 A150 150 0 0 1 215 352" fill="none" stroke="url(#scf-ring)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 8" marker-end="url(#scf-tip)"/>
        <path d="M212 352 A150 150 0 0 1 66 205" fill="none" stroke="url(#scf-ring)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 8" marker-end="url(#scf-tip)"/>
        <path d="M66 201 A150 150 0 0 1 213 52" fill="none" stroke="url(#scf-ring)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 8" marker-end="url(#scf-tip)"/>
        <circle cx="215" cy="202" r="72" fill="url(#scf-core)" stroke="rgba(147,197,253,.4)" stroke-width="1.4"/>
        <circle cx="215" cy="202" r="57" fill="none" stroke="rgba(103,232,249,.21)" stroke-width="1"/>
        <text x="215" y="194" text-anchor="middle" class="scf-core-small">CELLULAR</text>
        <text x="215" y="216" text-anchor="middle" class="scf-core-large">STATE</text>
        <g class="scf-diagram-node" transform="translate(215 39)"><circle r="29"/><text y="5" text-anchor="middle">INPUT</text></g>
        <g class="scf-diagram-node" transform="translate(380 202)"><circle r="29"/><text y="5" text-anchor="middle">CONTROL</text></g>
        <g class="scf-diagram-node" transform="translate(215 367)"><circle r="29"/><text y="5" text-anchor="middle">OUTPUT</text></g>
        <g class="scf-diagram-node" transform="translate(50 202)"><circle r="29"/><text y="5" text-anchor="middle">RESET</text></g>
        <circle cx="118" cy="107" r="4" fill="#67e8f9"/><circle cx="311" cy="114" r="3" fill="#c4b5fd"/>
        <circle cx="315" cy="292" r="4" fill="#86efac"/><circle cx="115" cy="292" r="3" fill="#fbbf24"/>
        <text x="215" y="402" text-anchor="middle" class="scf-diagram-foot">SENSE · INTEGRATE · REGULATE · RESOLVE</text>
      </svg>
    </div>
    <div class="scf-hero-footer"><span>FEEDBACK OVER LINEARITY</span><span>TIME OVER SNAPSHOTS</span><span>RESOLUTION OVER PEAKS</span></div>
  </header>

  <section class="scf-principle" aria-labelledby="scf-principle-title">
    <div class="scf-principle-heading">
      <span class="scf-kicker">THE SHARED LENS</span>
      <h2 id="scf-principle-title">A pathway is more than an on/off switch.</h2>
    </div>
    <p>These reviews organize existing molecular evidence around a control-system question: how are signals sensed, shaped over time, constrained by feedback, and terminated? The mechanisms differ across systems; the shared lens makes their dynamics easier to compare.</p>
    <div class="scf-process" aria-label="Signal control sequence">
      <div class="scf-process-step"><span>01</span><b>Sense</b><small>Detect a change</small></div><i aria-hidden="true">→</i>
      <div class="scf-process-step"><span>02</span><b>Integrate</b><small>Combine inputs</small></div><i aria-hidden="true">→</i>
      <div class="scf-process-step"><span>03</span><b>Control</b><small>Feedback and timing</small></div><i aria-hidden="true">→</i>
      <div class="scf-process-step"><span>04</span><b>Resolve</b><small>Reset responsiveness</small></div>
    </div>
  </section>

  <section class="scf-library" id="scf-research">
    <div class="scf-section-head">
      <div><span class="scf-kicker">FOUR CONNECTED FRAMEWORKS</span><h2>Explore the research</h2><p>Each page focuses on a different mechanism through which cells process biological information over time.</p></div>
      <span class="scf-count"><strong>04</strong><small>INTERACTIVE PAGES</small></span>
    </div>

    <div class="scf-filters" role="group" aria-label="Filter frameworks">
      <button type="button" class="scf-filter is-active" data-filter="all" aria-pressed="true">All four</button>
      <button type="button" class="scf-filter" data-filter="biochemical" aria-pressed="false">Biochemical feedback</button>
      <button type="button" class="scf-filter" data-filter="mechanical" aria-pressed="false">Mechanical signaling</button>
      <button type="button" class="scf-filter" data-filter="temporal" aria-pressed="false">Temporal decoding</button>
    </div>

    <div class="scf-card-grid">
      <article class="scf-paper-card scf-yap" data-category="mechanical" data-paper="yap">
        <div class="scf-card-top"><span class="scf-index">01</span><span class="scf-domain">MECHANOCHEMICAL SIGNALING</span><span class="scf-card-symbol" aria-hidden="true">↗</span></div>
        <div class="scf-mini-figure" role="img" aria-label="Mechanical input passes through YAP/TAZ signaling and transcription before active termination and restored mechanosensitivity.">
          <svg viewBox="0 0 530 108" aria-hidden="true"><path d="M35 54 H495" class="scf-flow-line"/><g class="scf-mini-node"><rect x="12" y="24" width="105" height="60" rx="10"/><text x="64" y="47" text-anchor="middle">MECHANICS</text><text x="64" y="65" text-anchor="middle" class="scf-mini-muted">force / matrix</text></g><g class="scf-mini-node"><rect x="151" y="24" width="95" height="60" rx="10"/><text x="199" y="47" text-anchor="middle">YAP / TAZ</text><text x="199" y="65" text-anchor="middle" class="scf-mini-muted">nuclear state</text></g><g class="scf-mini-node"><rect x="280" y="24" width="95" height="60" rx="10"/><text x="328" y="47" text-anchor="middle">GENES</text><text x="328" y="65" text-anchor="middle" class="scf-mini-muted">cell response</text></g><g class="scf-mini-node"><rect x="407" y="24" width="110" height="60" rx="10"/><text x="462" y="47" text-anchor="middle">RESOLUTION</text><text x="462" y="65" text-anchor="middle" class="scf-mini-muted">reset capacity</text></g></svg>
        </div>
        <div class="scf-card-copy"><span class="scf-numbered-kicker">MECHANICAL MEMORY · SIGNAL RESOLUTION</span><h3>YAP/TAZ as a mechanochemical signal-resolution circuit</h3><p>Mechanical cues such as matrix stiffness, cell attachment and actin tension are interpreted through YAP/TAZ regulation. The framework connects input integration and temporal decoding with active termination and recovery of mechanosensitivity.</p></div>
        <div class="scf-card-question"><b>Central question</b><span>Can a cell return to a mechanically responsive state after the force history changes?</span></div>
        <a class="scf-open" href="{{ '/research/yap-taz-signal-resolution/' | relative_url }}"><span>Explore YAP/TAZ</span><span aria-hidden="true">↗</span></a>
      </article>

      <article class="scf-paper-card scf-nrf" data-category="biochemical" data-paper="nrf2">
        <div class="scf-card-top"><span class="scf-index">02</span><span class="scf-domain">REDOX SIGNALING</span><span class="scf-card-symbol" aria-hidden="true">↻</span></div>
        <div class="scf-mini-figure" role="img" aria-label="Redox stress alters KEAP1 control, stabilizes NRF2, drives a transcriptional response and relies on feedback for resolution.">
          <svg viewBox="0 0 530 108" aria-hidden="true"><path d="M35 54 H495" class="scf-flow-line"/><g class="scf-mini-node"><rect x="12" y="24" width="105" height="60" rx="10"/><text x="64" y="47" text-anchor="middle">REDOX CUE</text><text x="64" y="65" text-anchor="middle" class="scf-mini-muted">stress input</text></g><g class="scf-mini-node"><rect x="151" y="24" width="95" height="60" rx="10"/><text x="199" y="47" text-anchor="middle">KEAP1</text><text x="199" y="65" text-anchor="middle" class="scf-mini-muted">sensor / gate</text></g><g class="scf-mini-node"><rect x="280" y="24" width="95" height="60" rx="10"/><text x="328" y="47" text-anchor="middle">NRF2</text><text x="328" y="65" text-anchor="middle" class="scf-mini-muted">gene program</text></g><g class="scf-mini-node"><rect x="407" y="24" width="110" height="60" rx="10"/><text x="462" y="47" text-anchor="middle">RESET</text><text x="462" y="65" text-anchor="middle" class="scf-mini-muted">turnover / redox</text></g></svg>
        </div>
        <div class="scf-card-copy"><span class="scf-numbered-kicker">THE REDOXOSTAT · ACTIVE TERMINATION</span><h3>NRF2–KEAP1 as a redox signal-resolution circuit</h3><p>KEAP1 senses redox and electrophilic chemistry, while the CUL3–KEAP1 system controls NRF2 turnover. The redoxostat framework emphasizes KEAP1 renewal, proteostasis, autophagy and cellular reducing capacity as constraints on signal termination.</p></div>
        <div class="scf-card-question"><b>Central question</b><span>Does the redox response resolve after the stress has passed, or remain persistently engaged?</span></div>
        <a class="scf-open" href="{{ '/research/nrf2-keap1-redoxostat/' | relative_url }}"><span>Explore NRF2–KEAP1</span><span aria-hidden="true">↗</span></a>
      </article>

      <article class="scf-paper-card scf-cyp" data-category="biochemical" data-paper="cyp1a1">
        <div class="scf-card-top"><span class="scf-index">03</span><span class="scf-domain">ENVIRONMENT · IMMUNITY</span><span class="scf-card-symbol" aria-hidden="true">⌁</span></div>
        <div class="scf-mini-figure" role="img" aria-label="Environmental or endogenous ligand activates AhR, induces CYP1A1 after a delay, and is metabolized to reduce signal persistence.">
          <svg viewBox="0 0 530 108" aria-hidden="true"><path d="M35 54 H495" class="scf-flow-line"/><g class="scf-mini-node"><rect x="12" y="24" width="105" height="60" rx="10"/><text x="64" y="47" text-anchor="middle">LIGAND</text><text x="64" y="65" text-anchor="middle" class="scf-mini-muted">environment</text></g><g class="scf-mini-node"><rect x="151" y="24" width="95" height="60" rx="10"/><text x="199" y="47" text-anchor="middle">AhR</text><text x="199" y="65" text-anchor="middle" class="scf-mini-muted">sensor</text></g><g class="scf-mini-node"><rect x="280" y="24" width="95" height="60" rx="10"/><text x="328" y="47" text-anchor="middle">CYP1A1</text><text x="328" y="65" text-anchor="middle" class="scf-mini-muted">metabolism</text></g><g class="scf-mini-node"><rect x="407" y="24" width="110" height="60" rx="10"/><text x="462" y="47" text-anchor="middle">IMMUNITY</text><text x="462" y="65" text-anchor="middle" class="scf-mini-muted">local context</text></g></svg>
        </div>
        <div class="scf-card-copy"><span class="scf-numbered-kicker">METABOLIC FEEDBACK · BARRIER HOMEOSTASIS</span><h3>CYP1A1 as a conserved metabolic circuit</h3><p>AhR senses environmental, dietary, microbial and endogenous ligands. Delayed CYP1A1 induction can metabolize susceptible ligands, linking chemical persistence to the duration of signaling and downstream immune and barrier responses.</p></div>
        <div class="scf-card-question"><b>Central question</b><span>How does ligand susceptibility determine whether environmental sensing is transient or persistent?</span></div>
        <a class="scf-open" href="{{ '/research/cyp1a1-metabolic-feedback/' | relative_url }}"><span>Explore CYP1A1</span><span aria-hidden="true">↗</span></a>
      </article>

      <article class="scf-paper-card scf-cond" data-category="temporal" data-paper="condensates">
        <div class="scf-card-top"><span class="scf-index">04</span><span class="scf-domain">GENE REGULATION · TEMPORAL FILTERING</span><span class="scf-card-symbol" aria-hidden="true">τ</span></div>
        <div class="scf-mini-figure" role="img" aria-label="Dynamic input passes through proposed condensate assembly and dissolution kinetics to shape transcriptional bursts.">
          <svg viewBox="0 0 530 108" aria-hidden="true"><path d="M35 54 H495" class="scf-flow-line"/><g class="scf-mini-node"><rect x="12" y="24" width="105" height="60" rx="10"/><text x="64" y="47" text-anchor="middle">PULSES</text><text x="64" y="65" text-anchor="middle" class="scf-mini-muted">signal timing</text></g><g class="scf-mini-node"><rect x="151" y="24" width="95" height="60" rx="10"/><text x="199" y="47" text-anchor="middle">ASSEMBLY</text><text x="199" y="65" text-anchor="middle" class="scf-mini-muted">threshold / lag</text></g><g class="scf-mini-node"><rect x="280" y="24" width="95" height="60" rx="10"/><text x="328" y="47" text-anchor="middle">RESET</text><text x="328" y="65" text-anchor="middle" class="scf-mini-muted">exchange</text></g><g class="scf-mini-node"><rect x="407" y="24" width="110" height="60" rx="10"/><text x="462" y="47" text-anchor="middle">BURSTS</text><text x="462" y="65" text-anchor="middle" class="scf-mini-muted">RNA output</text></g></svg>
        </div>
        <div class="scf-card-copy"><span class="scf-numbered-kicker">KINETIC-FILTER HYPOTHESIS · TRANSCRIPTIONAL BURSTING</span><h3>Transcriptional condensates as kinetic filters</h3><p>Thresholds, nucleation delays, finite molecular exchange, persistence and dissolution may connect fluctuating signaling inputs with transcriptional bursting. This model remains a testable hypothesis, with the full causal sequence still unproven.</p></div>
        <div class="scf-card-question"><b>Central question</b><span>Do condensate kinetics decode temporal inputs, or reflect transcription already underway?</span></div>
        <a class="scf-open" href="{{ '/research/transcriptional-condensates-kinetic-filters/' | relative_url }}"><span>Explore condensate filtering</span><span aria-hidden="true">↗</span></a>
      </article>
    </div>
    <p class="scf-filter-status" id="scf-filter-status" aria-live="polite">Showing all four research frameworks.</p>
  </section>

  <section class="scf-synthesis">
    <div class="scf-synthesis-heading"><span class="scf-kicker">THE CONNECTING QUESTION</span><h2>What determines whether a signal ends?</h2><p>Across these systems, activation is only one part of the explanation. The complementary question is how the system changes after the original input diminishes.</p></div>
    <div class="scf-synthesis-grid">
      <div><span class="scf-synthesis-symbol">01</span><b>Input history</b><p>Force, redox state, ligand availability or signaling pulse pattern.</p></div>
      <div><span class="scf-synthesis-symbol">02</span><b>Control mechanism</b><p>Transport, protein turnover, metabolic feedback or molecular assembly.</p></div>
      <div><span class="scf-synthesis-symbol">03</span><b>Time course</b><p>Latency, persistence, adaptation, termination and recovery.</p></div>
      <div><span class="scf-synthesis-symbol">04</span><b>Biological outcome</b><p>Responsive baseline, altered cell state or persistent signaling.</p></div>
    </div>
  </section>

  <section class="scf-endnote">
    <div><span class="scf-kicker">A FRAMEWORK, NOT A CLAIM OF ONE MECHANISM</span><h2>Shared logic. Distinct biology.</h2><p>The four reviews do not argue that every pathway uses the same molecular machinery. They ask whether timing, feedback and signal resolution provide a useful way to organize and test mechanisms across different biological systems.</p></div>
    <a href="{{ '/publications/' | relative_url }}">Browse the publication record ↗</a>
  </section>

  <footer class="scf-footer"><span>Cellular Signaling as Dynamic Regulatory Circuits</span><a href="{{ '/' | relative_url }}">Ardie Barry Sailis · Home</a></footer>
</div>
<script src="{{ '/assets/js/cellular-circuit-overview.js' | relative_url }}?v=20261009-1" defer></script>
