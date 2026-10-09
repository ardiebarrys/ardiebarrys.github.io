---
layout: yap-fullscreen
title: YAP/TAZ Signal-Resolution Circuit
permalink: /research/yap-taz-signal-resolution/
description: An interactive exploration of the proposed YAP/TAZ mechanochemical signal-resolution circuit.
nav: false
nav_order: 99
---

<link rel="stylesheet" href="{{ '/assets/css/yap-signal-experience.css' | relative_url }}?v=20261009-15">

<style>
  .circuit-lab, .circuit-lab * { box-sizing: border-box; }
  .circuit-lab { --ink:#e8f1ff; --muted:#9bb0d0; --line:rgba(147,197,253,.19); --blue:#60a5fa; --cyan:#67e8f9; --green:#86efac; --red:#fca5a5; color:var(--ink); width:100%; max-width:1180px; margin:0 auto 3rem; }
  .circuit-lab p { text-align:left !important; }
  .circuit-hero { position:relative; overflow:hidden; padding:clamp(1.4rem,4vw,3rem); border:1px solid var(--line); border-radius:24px; background:radial-gradient(circle at 80% 15%,rgba(59,130,246,.25),transparent 30%),radial-gradient(circle at 12% 90%,rgba(34,211,238,.10),transparent 30%),linear-gradient(145deg,#0c1d3d,#061126 72%); box-shadow:0 24px 65px rgba(0,0,0,.24); }
  .circuit-hero::before { content:""; position:absolute; inset:-40%; pointer-events:none; opacity:.18; background:repeating-radial-gradient(ellipse at 70% 40%,transparent 0 36px,rgba(147,197,253,.28) 37px 38px,transparent 39px 70px); animation:lab-drift 32s linear infinite; }
  .circuit-hero > * { position:relative; z-index:1; }
  .circuit-eyebrow { color:#93c5fd; font-size:.68rem; font-weight:850; letter-spacing:.16em; text-transform:uppercase; }
  .circuit-hero h1 { max-width:900px; margin:.65rem 0 .75rem; color:#f2f7ff; font-size:clamp(2rem,5.2vw,4rem); line-height:1.03; letter-spacing:-.05em; }
  .circuit-byline { color:#b8c9e5; font-size:.94rem; }
  .circuit-byline strong { color:#f2f7ff; }
  .circuit-subtitle { max-width:800px; margin:1.1rem 0 1.4rem; color:#b4c5e0; font-size:1.02rem; line-height:1.7; }
  .circuit-pills { display:flex; flex-wrap:wrap; gap:.45rem; }
  .circuit-pill { border:1px solid var(--line); border-radius:999px; padding:.38rem .65rem; color:#b9cce8; background:rgba(15,35,70,.6); font-size:.72rem; }
  .circuit-actions { display:flex; flex-wrap:wrap; gap:.65rem; margin-top:1.4rem; }
  .circuit-btn { display:inline-flex; align-items:center; justify-content:center; gap:.45rem; min-height:42px; padding:.65rem .95rem; border:1px solid rgba(147,197,253,.3); border-radius:10px; color:#eaf3ff !important; background:rgba(30,64,125,.38); font:inherit; font-size:.82rem; font-weight:800; text-decoration:none !important; cursor:pointer; transition:transform .2s ease,border-color .2s ease,background .2s ease; }
  .circuit-btn:hover { transform:translateY(-2px); border-color:#93c5fd; background:rgba(37,99,235,.38); }
  .circuit-btn.primary { border-color:rgba(96,165,250,.65); background:linear-gradient(135deg,#2563eb,#1d4ed8); box-shadow:0 8px 22px rgba(37,99,235,.2); }
  .circuit-section { margin:1.25rem 0; padding:clamp(1rem,2.5vw,1.5rem); border:1px solid var(--line); border-radius:18px; background:linear-gradient(145deg,rgba(13,29,58,.96),rgba(7,17,36,.98)); box-shadow:0 15px 38px rgba(0,0,0,.13); }
  .circuit-section-head { display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:1rem; }
  .circuit-section-head h2 { margin:.25rem 0 .3rem; color:#eaf2ff; font-size:clamp(1.25rem,3vw,1.8rem); letter-spacing:-.035em; }
  .circuit-section-head p { margin:0; max-width:760px; color:var(--muted); font-size:.87rem; line-height:1.6; }
  .circuit-tag { display:inline-flex; flex:0 0 auto; padding:.32rem .5rem; border:1px solid var(--line); border-radius:999px; color:#93c5fd; font-size:.61rem; font-weight:850; letter-spacing:.08em; text-transform:uppercase; }
  .circuit-flow { display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:.55rem; }
  .circuit-node { position:relative; min-width:0; min-height:142px; padding:.8rem .72rem; border:1px solid rgba(96,165,250,.2); border-radius:13px; background:linear-gradient(150deg,rgba(20,46,91,.78),rgba(7,20,42,.9)); color:var(--ink); text-align:left; cursor:pointer; transition:transform .25s ease,border-color .25s ease,background .25s ease,box-shadow .25s ease; }
  .circuit-node::after { content:""; position:absolute; left:12%; right:12%; bottom:0; height:2px; background:linear-gradient(90deg,transparent,var(--node-color,#60a5fa),transparent); transform:scaleX(.15); opacity:.4; transition:transform .3s ease,opacity .3s ease; }
  .circuit-node:hover,.circuit-node.is-active { transform:translateY(-3px); border-color:var(--node-color,#60a5fa); background:linear-gradient(150deg,rgba(30,64,125,.82),rgba(8,22,48,.96)); box-shadow:0 12px 26px rgba(0,0,0,.18); }
  .circuit-node.is-active::after { transform:scaleX(1); opacity:1; }
  .circuit-node .n { display:grid; place-items:center; width:28px; height:28px; margin-bottom:.65rem; border:1px solid var(--line); border-radius:9px; color:var(--node-color,#93c5fd); background:rgba(37,99,235,.12); font-size:.65rem; font-weight:900; }
  .circuit-node strong { display:block; color:#e5efff; font-size:.79rem; line-height:1.3; }
  .circuit-node small { display:block; margin-top:.35rem; color:#8da5ca; font-size:.65rem; line-height:1.4; }
  .node-detail { display:grid; grid-template-columns:54px minmax(0,1fr); gap:.85rem; align-items:start; margin-top:.8rem; padding:1rem; border:1px solid var(--line); border-radius:12px; background:rgba(3,12,28,.5); animation:lab-enter .35s ease both; }
  .node-detail-index { display:grid; place-items:center; width:48px; height:48px; border:1px solid rgba(96,165,250,.3); border-radius:13px; color:#93c5fd; background:rgba(37,99,235,.12); font-size:.75rem; font-weight:900; }
  .node-detail h3 { margin:0 0 .3rem; color:#e5efff; font-size:1rem; }
  .node-detail p { margin:0; color:#9bb0d0; font-size:.83rem; line-height:1.6; }
  .lab-grid { display:grid; grid-template-columns:minmax(0,1.1fr) minmax(280px,.9fr); gap:1rem; }
  .lab-controls,.lab-readout { min-width:0; padding:1rem; border:1px solid var(--line); border-radius:13px; background:rgba(3,12,28,.43); }
  .lab-control { margin-bottom:1.2rem; }
  .lab-control:last-child { margin-bottom:0; }
  .lab-control-head { display:flex; align-items:baseline; justify-content:space-between; gap:.8rem; margin-bottom:.45rem; }
  .lab-control label { color:#dbeafe; font-size:.82rem; font-weight:750; }
  .lab-control output { color:#93c5fd; font-size:.78rem; font-weight:850; font-variant-numeric:tabular-nums; }
  .lab-control input[type=range] { width:100%; accent-color:#60a5fa; cursor:pointer; }
  .lab-help { display:block; margin-top:.25rem; color:#7f96bb; font-size:.69rem; line-height:1.45; }
  .lab-meter-label { display:flex; justify-content:space-between; gap:.6rem; color:#9bb0d0; font-size:.7rem; }
  .lab-meter { height:8px; margin:.4rem 0 .9rem; border-radius:99px; overflow:hidden; background:rgba(148,163,184,.15); }
  .lab-meter span { display:block; width:50%; height:100%; border-radius:inherit; background:linear-gradient(90deg,#60a5fa,#67e8f9); transition:width .35s ease; }
  .lab-state { display:inline-flex; align-items:center; gap:.45rem; padding:.38rem .6rem; border:1px solid var(--line); border-radius:999px; color:#bfdbfe; font-size:.7rem; font-weight:850; }
  .lab-state::before { content:""; width:7px; height:7px; border-radius:50%; background:#60a5fa; box-shadow:0 0 0 4px rgba(96,165,250,.1); }
  .lab-state.adaptive { color:#bbf7d0; border-color:rgba(134,239,172,.28); }
  .lab-state.adaptive::before { background:#86efac; }
  .lab-state.persistent { color:#fecaca; border-color:rgba(252,165,165,.3); }
  .lab-state.persistent::before { background:#fca5a5; }
  .lab-readout h3 { margin:.75rem 0 .4rem; color:#eaf2ff; font-size:1.05rem; }
  .lab-readout p { margin:.35rem 0; color:#9bb0d0; font-size:.82rem; line-height:1.6; }
  .lab-caveat { margin-top:.75rem !important; padding:.7rem .75rem; border-left:2px solid #60a5fa; background:rgba(37,99,235,.08); color:#b5c8e5 !important; font-size:.72rem !important; }
  .lab-chart { width:100%; height:auto; display:block; margin-top:.7rem; border:1px solid rgba(147,197,253,.12); border-radius:11px; background:rgba(2,8,20,.5); }
  .lab-chart text { fill:#91a8ca; font-family:system-ui,sans-serif; font-size:10px; }
  .lab-chart .axis { stroke:rgba(147,197,253,.2); stroke-width:1; }
  .lab-chart .trace { fill:none; stroke:#67e8f9; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; filter:drop-shadow(0 0 3px rgba(103,232,249,.3)); }
  .lab-chart .trace-soft { fill:none; stroke:#93c5fd; stroke-width:1.5; stroke-dasharray:4 5; opacity:.75; }
  .mode-grid { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:.55rem; }
  .mode-button { padding:.75rem .65rem; min-height:94px; border:1px solid rgba(248,113,113,.2); border-radius:11px; background:rgba(74,22,36,.19); color:#e7dce4; font:inherit; font-size:.75rem; font-weight:800; text-align:left; cursor:pointer; transition:transform .2s ease,border-color .2s ease,background .2s ease; }
  .mode-button:hover,.mode-button.is-active { transform:translateY(-2px); border-color:rgba(252,165,165,.65); background:rgba(127,29,29,.24); }
  .mode-button small { display:block; margin-top:.35rem; color:#b59ba9; font-size:.64rem; line-height:1.4; font-weight:500; }
  .mode-detail { display:grid; grid-template-columns:1fr 1fr; gap:.8rem; margin-top:.8rem; padding:1rem; border:1px solid var(--line); border-radius:12px; background:rgba(3,12,28,.45); }
  .mode-detail h3 { grid-column:1/-1; margin:0; color:#e5efff; font-size:1rem; }
  .mode-detail div { padding:.75rem; border-radius:9px; background:rgba(15,35,70,.42); }
  .mode-detail strong { display:block; color:#93c5fd; font-size:.68rem; text-transform:uppercase; letter-spacing:.08em; }
  .mode-detail p { margin:.3rem 0 0; color:#9bb0d0; font-size:.79rem; line-height:1.55; }
  .experiment-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.65rem; }
  .experiment-card { padding:.9rem; border:1px solid var(--line); border-radius:12px; background:rgba(15,35,70,.36); }
  .experiment-card .step { color:#67e8f9; font-size:.63rem; font-weight:900; letter-spacing:.1em; }
  .experiment-card h3 { margin:.4rem 0 .35rem; color:#e5efff; font-size:.9rem; }
  .experiment-card p { margin:0; color:#9bb0d0; font-size:.77rem; line-height:1.55; }
  .evidence-switches { display:flex; flex-wrap:wrap; gap:.45rem; margin-bottom:.8rem; }
  .evidence-switches button { padding:.48rem .7rem; border:1px solid var(--line); border-radius:999px; background:rgba(15,35,70,.38); color:#9bb0d0; font:inherit; font-size:.74rem; font-weight:750; cursor:pointer; }
  .evidence-switches button.is-active { border-color:rgba(96,165,250,.65); color:#eaf2ff; background:rgba(37,99,235,.24); }
  .evidence-panel { padding:1rem; border:1px solid var(--line); border-radius:12px; background:rgba(3,12,28,.45); }
  .evidence-panel h3 { margin:0 0 .4rem; color:#e5efff; font-size:1rem; }
  .evidence-panel p { margin:0; color:#9bb0d0; font-size:.82rem; line-height:1.6; }
  .circuit-bottom { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:.8rem; padding:.5rem .2rem; color:#7f96bb; font-size:.72rem; }
  .circuit-bottom a { color:#93c5fd !important; }
  .circuit-lab button:focus-visible,.circuit-lab a:focus-visible,.circuit-lab input:focus-visible { outline:2px solid #93c5fd; outline-offset:3px; }
  @keyframes lab-enter { from {opacity:0;transform:translateY(7px)} to {opacity:1;transform:none} }
  @keyframes lab-drift { to {transform:rotate(360deg)} }
  @media(max-width:980px) { .circuit-flow { grid-template-columns:repeat(3,minmax(0,1fr)); } .mode-grid { grid-template-columns:repeat(3,minmax(0,1fr)); } }
  @media(max-width:720px) { .lab-grid { grid-template-columns:1fr; } .experiment-grid { grid-template-columns:1fr; } .circuit-section-head { display:block; } .circuit-tag { margin-top:.65rem; } }
  @media(max-width:560px) { .circuit-flow { grid-template-columns:repeat(2,minmax(0,1fr)); } .mode-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .mode-detail { grid-template-columns:1fr; } .mode-detail h3 { grid-column:auto; } .node-detail { grid-template-columns:42px minmax(0,1fr); } .node-detail-index { width:38px;height:38px; } .circuit-actions .circuit-btn { width:100%; } }
  @media(prefers-reduced-motion:reduce) { .circuit-lab *, .circuit-lab *::before, .circuit-lab *::after { animation:none !important; transition:none !important; scroll-behavior:auto !important; } }

  /* Full-width mechanism diagram sits below the hero heading, never behind text. */
  .circuit-hero > .protein-showcase { position:relative !important; display:block; z-index:1 !important; width:100%; max-width:100% !important; aspect-ratio:3 / 1; margin:1.1rem 0 1.25rem; transform:none; pointer-events:none; opacity:1; }
  .protein-showcase svg { display:block; width:100%; height:100%; overflow:visible; }
  .protein-panel { fill:rgba(8,24,51,.92); stroke:rgba(147,197,253,.42); stroke-width:1.5; }
  .protein-panel-title { fill:#dff8ff; font:800 15px system-ui,sans-serif; letter-spacing:.7px; }
  .protein-label { fill:#e0ecff; font:600 14px system-ui,sans-serif; }
  .protein-small { fill:#b2c8e8; font:12px system-ui,sans-serif; }
  .protein-arrow { fill:none; stroke:#67e8f9; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; }
  .protein-arrow-violet { fill:none; stroke:#a5b4fc; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; }
  .protein-flow { stroke-dasharray:5 5; animation:protein-shimmer 3.5s linear infinite; }
  .protein-caption { fill:#dff8ff; font:800 17px system-ui,sans-serif; letter-spacing:1px; }
  @keyframes protein-shimmer { to { stroke-dashoffset:-40; } }
  /* On phones, preserve the diagram's readable type size and let readers swipe across it. */
  .protein-showcase { overflow:hidden; }
  .protein-showcase > svg { display:block; width:100%; height:auto; }
  .protein-mobile-flow { display:none; }
  .protein-mobile-step { display:grid; grid-template-columns:38px minmax(0,1fr); gap:.7rem; align-items:start; padding:.85rem; border:1px solid rgba(147,197,253,.28); border-radius:12px; background:rgba(8,24,51,.86); }
  .protein-mobile-step .step-number { display:grid; place-items:center; width:34px; height:34px; border-radius:10px; background:rgba(37,99,235,.22); border:1px solid rgba(103,232,249,.35); color:#67e8f9; font-weight:900; }
  .protein-mobile-step strong { display:block; margin:.05rem 0 .25rem; color:#dff8ff; font-size:.91rem; line-height:1.35; }
  .protein-mobile-step p { margin:0; color:#b2c8e8; font-size:.8rem; line-height:1.45; }
  .protein-mobile-arrow { text-align:center; height:25px; color:#67e8f9; font-size:1.25rem; line-height:25px; }
  .protein-mobile-feedback { margin-top:.65rem; padding:.8rem; border-left:3px solid #a5b4fc; border-radius:0 10px 10px 0; background:rgba(99,102,241,.12); color:#dbeafe; font-size:.8rem; line-height:1.45; }
  @media(max-width:760px) {
    .circuit-hero > .protein-showcase { width:100%; aspect-ratio:auto; margin:.8rem 0 1rem; }
    .protein-showcase > svg { display:none; }
    .protein-mobile-flow { display:block; }
    .circuit-hero { padding:1rem; }
    .circuit-hero h1 { font-size:clamp(1.8rem,8vw,2.5rem); }
    .circuit-subtitle { font-size:.91rem; line-height:1.5; }
  }
  .mobile-figure-hint { display:none; margin:-.55rem 0 .8rem; color:#91a8ca; font-size:.7rem; }
  @media(max-width:760px) { .mobile-figure-hint { display:block; } }
  .resolution-figure { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.75rem; margin:1rem 0 1.25rem; }
  .resolution-figure-step { position:relative; padding:1rem .85rem; border:1px solid var(--line); border-radius:14px; background:linear-gradient(150deg,rgba(20,46,91,.8),rgba(7,20,42,.9)); text-align:center; }
  .resolution-figure-step .figure-symbol { display:grid; place-items:center; width:54px; height:54px; margin:0 auto .65rem; border:1px solid rgba(103,232,249,.35); border-radius:50%; color:#67e8f9; font-size:1.45rem; font-weight:900; background:rgba(37,99,235,.12); }
  .resolution-figure-step strong { display:block; color:#e5efff; font-size:.94rem; }
  .resolution-figure-step p { margin:.35rem 0 0; color:#9bb0d0; font-size:.78rem; line-height:1.45; text-align:center !important; }
  @media(max-width:560px) { .resolution-figure { grid-template-columns:1fr; gap:.55rem; } .resolution-figure-step { display:grid; grid-template-columns:48px minmax(0,1fr); gap:.2rem .75rem; align-items:center; text-align:left; padding:.75rem; } .resolution-figure-step .figure-symbol { grid-row:span 2; width:44px; height:44px; margin:0; font-size:1.2rem; } .resolution-figure-step p { margin:0; text-align:left !important; } }
  @media(prefers-reduced-motion:reduce) { .protein-flow { animation:none !important; } }

</style>

<div class="circuit-lab" id="yap-circuit-lab">
  <div class="yap-home-row"><a class="yap-home-button" href="{{ '/' | relative_url }}"><span class="home-arrow" aria-hidden="true">←</span><span>Back to homepage</span></a></div>
  <section class="circuit-hero">

    <div class="protein-showcase" role="img" aria-label="Mechanism overview: mechanical cues are integrated through adhesion, cytoskeletal and Hippo-pathway networks. Active LATS1/2 kinases phosphorylate YAP and TAZ, often promoting cytoplasmic retention or degradation. When YAP and TAZ accumulate in the nucleus, they partner with TEAD to regulate target genes. The review's signal-resolution framework adds the questions of termination, recovery and response to a later input. Simplified and context-dependent.">
      <div class="protein-mobile-flow" role="img" aria-label="Mobile mechanism figure: mechanical input, signal integration, YAP/TAZ control, nuclear gene regulation, and the proposed resolution questions.">
        <div class="protein-mobile-step"><span class="step-number">1</span><div><strong>Mechanical input</strong><p>Matrix stiffness, cell attachments and actin tension</p></div></div>
        <div class="protein-mobile-arrow" aria-hidden="true">↓</div>
        <div class="protein-mobile-step"><span class="step-number">2</span><div><strong>Signal integration</strong><p>Adhesion signals, cytoskeleton and Hippo pathway</p></div></div>
        <div class="protein-mobile-arrow" aria-hidden="true">↓</div>
        <div class="protein-mobile-step"><span class="step-number">3</span><div><strong>YAP/TAZ control</strong><p>LATS1/2 phosphorylation can promote retention or degradation</p></div></div>
        <div class="protein-mobile-arrow" aria-hidden="true">↓</div>
        <div class="protein-mobile-step"><span class="step-number">4</span><div><strong>Nuclear gene regulation</strong><p>YAP/TAZ partner with TEAD to regulate target genes</p></div></div>
        <div class="protein-mobile-arrow" aria-hidden="true">↓</div>
        <div class="protein-mobile-step"><span class="step-number">5</span><div><strong>Signal resolution</strong><p>Can the response terminate, sensitivity recover, and the cell respond appropriately again?</p></div></div>
        <div class="protein-mobile-feedback">The resolution circuit is a proposed framework for organizing these questions, not a single proven molecular pathway.</div>
      </div>
      <svg viewBox="0 0 900 300" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="protein-cyan" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cffafe"/><stop offset="1" stop-color="#0891b2"/></linearGradient>
          <linearGradient id="protein-violet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c4b5fd"/><stop offset="1" stop-color="#6366f1"/></linearGradient>
          <marker id="protein-arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#67e8f9"/></marker>
          <marker id="protein-arrowhead-violet" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc"/></marker>
        </defs>
        <text class="protein-caption" x="450" y="24" text-anchor="middle">HOW YAP / TAZ TURN MECHANICAL CUES INTO GENE REGULATION</text>
        <rect class="protein-panel" x="16" y="53" width="198" height="102" rx="13"/>
        <text class="protein-panel-title" x="115" y="77" text-anchor="middle">1 · MECHANICAL INPUT</text>
        <text class="protein-label" x="115" y="101" text-anchor="middle">Matrix stiffness</text>
        <text class="protein-label" x="115" y="119" text-anchor="middle">Cell attachments</text>
        <text class="protein-label" x="115" y="137" text-anchor="middle">Actin tension</text>
        <path class="protein-arrow protein-flow" d="M216 104 H245" marker-end="url(#protein-arrowhead)"/>
        <rect class="protein-panel" x="251" y="53" width="198" height="102" rx="13"/>
        <text class="protein-panel-title" x="350" y="77" text-anchor="middle">2 · INTEGRATION</text>
        <text class="protein-label" x="350" y="101" text-anchor="middle">Adhesion signals</text>
        <text class="protein-label" x="350" y="119" text-anchor="middle">Cytoskeleton</text>
        <text class="protein-label" x="350" y="137" text-anchor="middle">Hippo pathway</text>
        <path class="protein-arrow protein-flow" d="M451 104 H480" marker-end="url(#protein-arrowhead)"/>
        <rect class="protein-panel" x="486" y="53" width="198" height="102" rx="13"/>
        <text class="protein-panel-title" x="585" y="77" text-anchor="middle">3 · YAP / TAZ CONTROL</text>
        <text class="protein-label" x="585" y="101" text-anchor="middle">LATS1/2 phosphorylation</text>
        <text class="protein-label" x="585" y="119" text-anchor="middle">can restrain YAP / TAZ</text>
        <text class="protein-small" x="585" y="139" text-anchor="middle">Retention or degradation</text>
        <path class="protein-arrow-violet protein-flow" d="M686 104 H715" marker-end="url(#protein-arrowhead-violet)"/>
        <rect class="protein-panel" x="721" y="53" width="163" height="102" rx="13" style="stroke:rgba(103,232,249,.65)"/>
        <text class="protein-panel-title" x="802" y="77" text-anchor="middle">4 · NUCLEUS</text>
        <text class="protein-label" x="802" y="101" text-anchor="middle">YAP / TAZ + TEAD</text>
        <text class="protein-label" x="802" y="119" text-anchor="middle">Target-gene</text>
        <text class="protein-label" x="802" y="137" text-anchor="middle">regulation</text>
        <path class="protein-arrow-violet protein-flow" d="M802 157 V184 H585 V201" marker-end="url(#protein-arrowhead-violet)"/>
        <rect class="protein-panel" x="486" y="207" width="398" height="65" rx="13" style="stroke:rgba(196,181,253,.42)"/>
        <text class="protein-panel-title" x="685" y="229" text-anchor="middle">5 · SIGNAL RESOLUTION FRAMEWORK</text>
        <text class="protein-label" x="685" y="248" text-anchor="middle">Terminate the response · recover sensitivity · respond again</text>
        <text class="protein-small" x="685" y="263" text-anchor="middle">Termination · recovery · renewed response</text>
        <path class="protein-arrow" d="M486 238 H450 V174 H115 V158" marker-end="url(#protein-arrowhead)"/>
        <text class="protein-small" x="285" y="193" text-anchor="middle">Can the system return toward baseline?</text>
      </svg>
    </div>
    <div class="circuit-eyebrow">Interactive research framework · 2026</div>
    <h1>YAP/TAZ as a mechanochemical signal-resolution circuit</h1>
    <div class="circuit-byline"><strong>Ardie Barry Sailis</strong> · Independent Researcher · Petaling Jaya, Selangor, Malaysia</div>
    <p class="circuit-subtitle" style="margin:.6rem 0 0;font-size:.78rem;color:#8ea7cb">Received 21 July 2026 · Revised 4 October 2026 · Accepted 6 October 2026 · Available online 7 October 2026 · Version of Record 7 October 2026</p>
    <p class="circuit-subtitle">Explore a systems-level framework in which cells do more than sense mechanical forces. They integrate and decode those inputs, terminate signaling, and attempt to restore mechanosensitivity. The key question is not only whether YAP/TAZ activates, but whether the system resolves the response and returns toward a functional baseline.</p>
    <div class="circuit-pills">
      <span class="circuit-pill">Mechanotransduction</span><span class="circuit-pill">Hippo signaling</span><span class="circuit-pill">Temporal decoding</span><span class="circuit-pill">Mechanical memory</span><span class="circuit-pill">Signal resolution</span>
    </div>
    <div class="circuit-actions">
      <a class="circuit-btn primary" href="#circuit-explorer">Explore the circuit ↓</a>
      <a class="circuit-btn" href="https://doi.org/10.1016/j.pbiomolbio.2026.101960" target="_blank" rel="noopener noreferrer">Open published article ↗</a>
      <a class="circuit-btn" href="/publications/">All publications ↗</a>
    </div>
  </section>

  <div class="mobile-figure-hint" aria-hidden="true">Mobile view: the mechanism is arranged vertically for readability.</div>

  <section class="circuit-section" aria-labelledby="resolution-figure-title">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">The framework at a glance</span><h2 id="resolution-figure-title">Three questions define signal resolution</h2><p>Use this summary to orient yourself before exploring the detailed model.</p></div><span class="circuit-tag">Core figure</span></div>
    <div class="resolution-figure" role="img" aria-label="Three linked questions: activation, termination, and restoration.">
      <article class="resolution-figure-step"><span class="figure-symbol" aria-hidden="true">↗</span><strong>1. Activation</strong><p>Did the cell detect and respond to the mechanical cue?</p></article>
      <article class="resolution-figure-step"><span class="figure-symbol" aria-hidden="true">↓</span><strong>2. Termination</strong><p>Did signaling decline after the cue changed or stopped?</p></article>
      <article class="resolution-figure-step"><span class="figure-symbol" aria-hidden="true">↻</span><strong>3. Restoration</strong><p>Can the cell respond appropriately to a second cue?</p></article>
    </div>
  </section>

  <section class="circuit-section plain-language-guide" id="yap-taz-explained">
    <div class="circuit-section-head">
      <div>
        <span class="circuit-eyebrow">The biology in plain language</span>
        <h2>How do YAP and TAZ turn mechanical cues into gene regulation?</h2>
        <p>Follow the main control points, then distinguish established mechanisms from the signal-resolution framework proposed in this review.</p>
      </div>
      <span class="circuit-tag">Mechanism overview</span>
    </div>

    <div class="plain-language-grid">
      <article class="plain-language-card">
        <span class="plain-language-number">01 · THE PLAYERS</span>
        <h3>YAP and TAZ are cellular messengers to the gene-control system</h3>
        <p><strong>YAP</strong> (Yes-associated protein) and <strong>TAZ</strong> are co-activators that work with DNA-binding partners, especially <strong>TEAD</strong>, to regulate gene activity. They help convert information about a cell’s surroundings into changes in cell behavior.</p>
      </article>

      <article class="plain-language-card">
        <span class="plain-language-number">02 · WHAT THEY DO</span>
        <h3>They help cells respond to their physical and biological environment</h3>
        <p>YAP/TAZ can influence growth, survival, repair and cell identity. Mechanical conditions, cell contacts and biochemical signals affect whether they enter the <strong>nucleus</strong> and regulate genes. The Hippo pathway often restrains them through phosphorylation. Outcomes depend on cell type and context.</p>
      </article>

      <article class="plain-language-card">
        <span class="plain-language-number">03 · WHAT SCIENCE ALREADY KNOWS</span>
        <h3>Mechanical signals are processed through a network, not one simple switch</h3>
        <p><strong>Mechanotransduction</strong> converts physical inputs into biochemical signals. Adhesions, actin, Hippo-pathway proteins, nuclear transport and gene-regulatory machinery all contribute. Stiffness or tension can favor nuclear YAP/TAZ in some settings, but responses vary with cell type, context and exposure duration.</p>
      </article>

      <article class="plain-language-card plain-language-proposal">
        <span class="plain-language-number">04 · WHAT THIS PAPER PROPOSES</span>
        <h3>Judge the response by whether it resolves, not only by whether it starts</h3>
        <p>The review proposes a <strong>mechanochemical signal-resolution circuit</strong>: sense and integrate a cue, decode it over time, terminate the response, then test whether responsiveness returns. <strong>Activation is not resolution.</strong> A rising YAP/TAZ signal shows a response, not successful recovery.</p>
      </article>
    </div>

    <div class="plain-language-caveat">
      <strong>Important distinction:</strong> this is a conceptual framework developed in a review, not a claim that one new, fully validated molecular pathway has been discovered. Its proposed stages organize established mechanisms and identify questions that experiments should test, especially whether cells return toward baseline after a mechanical input is withdrawn and whether they respond normally to a second challenge.
    </div>

    <p class="plain-language-sources">Read further: <a href="https://doi.org/10.1016/j.pbiomolbio.2026.101960" target="_blank" rel="noopener noreferrer">the published signal-resolution review</a> · <a href="https://doi.org/10.1177/29780241261430920" target="_blank" rel="noopener noreferrer">a 2026 review of Hippo signaling in mechanobiology</a>.</p>
  </section>

  <p class="visual-note" style="margin:.4rem .2rem .8rem;color:#91a8ca;font-size:.75rem;line-height:1.4">Figures and interactive outputs are conceptual illustrations, not experimental measurements.</p>

  <section class="circuit-section thought-card" id="dynamic-thought-experiment">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">A cell under mechanical stress</span><h2>Dynamic thought experiment: follow one cell</h2><p>Think of a cell as a tiny tent. Forces pull on its fabric, internal supports pass the pull along, and the cell must settle when the force stops. Walk through the five moments below.</p></div><span class="circuit-tag">Animated walkthrough</span></div>
    <p class="thought-intro">Follow the signal from force detection to nuclear gene regulation, then examine how the response changes when the mechanical input stops.</p>
    <div class="thought-layout">
      <div class="cell-stage" id="thought-cell-stage" data-phase="input">
        <svg viewBox="0 0 560 330" role="img" aria-labelledby="cell-visual-title cell-visual-desc">
          <title id="cell-visual-title">Animated conceptual view of a cell responding to a mechanical input</title>
          <desc id="cell-visual-desc">Yellow arrows show a mechanical force, cyan dots show a conceptual YAP/TAZ-related signal, and a violet shape represents the nucleus. The illustration shows a cell responding to mechanical input.</desc>
          <defs>
            <linearGradient id="cell-fill" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#1e40af" stop-opacity=".22"/><stop offset="1" stop-color="#0e7490" stop-opacity=".06"/></linearGradient>
            <marker id="force-arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker>
          </defs>
          <path class="cell-membrane" fill="url(#cell-fill)" d="M67 161 C52 116 91 77 147 72 C193 39 251 60 291 75 C344 48 409 74 437 112 C480 145 467 203 430 230 C398 272 341 264 301 252 C245 280 194 258 156 251 C105 250 64 216 67 161 Z"/>
          <path class="cell-actin" d="M94 148 C151 125 174 187 232 155 S320 119 377 151 S419 189 448 170"/>
          <path class="cell-actin" d="M106 205 C164 180 191 221 239 207 S334 171 405 218"/>
          <path class="cell-actin" d="M130 104 C173 143 203 113 245 98 S327 100 355 127"/>
          <path class="cell-actin" d="M145 235 C177 199 203 172 244 163"/>
          <path class="cell-nucleus" d="M235 123 C259 101 306 109 323 135 C342 163 327 201 297 210 C268 222 233 200 228 173 C225 154 226 137 235 123 Z"/>
          <ellipse class="cell-nucleolus" cx="280" cy="161" rx="12" ry="9"/>
          <path class="cell-dna" d="M249 143 C265 132 294 138 307 151 S296 175 275 170 S254 181 267 190"/>
          <path class="cell-dna" d="M253 183 C267 171 288 180 304 166"/>
          <path class="force-arrow" d="M280 15 L280 48" marker-end="url(#force-arrowhead)"/>
          <path class="force-arrow" d="M184 18 L196 49" marker-end="url(#force-arrowhead)"/>
          <path class="force-arrow" d="M376 18 L364 49" marker-end="url(#force-arrowhead)"/>
          <circle class="force-dot" cx="280" cy="58" r="5"/><circle class="force-dot" cx="196" cy="57" r="4"/><circle class="force-dot" cx="364" cy="57" r="4"/>
          <path class="yap-path" d="M173 162 Q207 158 241 160 Q258 158 276 160"/>
          <path class="yap-path" d="M190 191 Q220 180 244 172"/>
          <circle class="yap-dot" cx="174" cy="161" r="5"/><circle class="yap-dot" cx="194" cy="154" r="4"/><circle class="yap-dot" cx="214" cy="165" r="4"/><circle class="yap-dot" cx="230" cy="157" r="4"/><circle class="yap-dot" cx="246" cy="162" r="4"/><circle class="yap-dot" cx="262" cy="149" r="4"/><circle class="yap-dot" cx="279" cy="171" r="4"/><circle class="yap-dot" cx="302" cy="153" r="4"/>
          <text class="cell-label" x="280" y="229" text-anchor="middle">NUCLEUS</text>
          <text class="cell-label" x="93" y="286">CELL EDGE</text><path d="M115 276 L90 247" stroke="rgba(147,197,253,.45)" fill="none"/>
          <text class="cell-label" x="355" y="286">CYTOSKELETON</text><path d="M390 273 L379 219" stroke="rgba(103,232,249,.55)" fill="none"/>
          <text class="cell-label" x="280" y="310" text-anchor="middle">MECHANICAL INPUT AND CELL RESPONSE</text>
        </svg>
        <div class="cell-caption"><span><i class="legend-dot force"></i> Mechanical force</span><span><i class="legend-dot"></i> Conceptual signal</span><span><i class="legend-dot nucleus"></i> Nucleus</span></div>
      </div>
      <div class="thought-side">
        <div class="thought-step" aria-live="polite">
          <div class="thought-count" id="thought-step-label">Mechanical input ON</div>
          <h3 id="thought-step-title">1. A force arrives</h3>
          <p id="thought-step-copy">Imagine the cell sitting on a surface that becomes stiffer, or being stretched. The cell does not “think” in words: proteins, adhesions and the cytoskeleton transmit physical information inward.</p>
          <div class="thought-status"><span id="thought-watch">Watch the yellow arrows enter the cell and the cyan signal begin moving toward the nucleus.</span></div>
        </div>
        <div class="thought-progress" id="thought-progress" role="group" aria-label="Choose a thought experiment step"></div>
        <div class="thought-controls">
          <button class="circuit-btn primary" id="thought-next" type="button">Next step →</button>
          <button class="circuit-btn" id="thought-play" type="button" aria-pressed="false">▶ Play walkthrough</button>
          <button class="circuit-btn" id="thought-restart" type="button">Start over ↺</button>
        </div>
        <div class="thought-controls" aria-label="Jump to an idea">
          <button class="circuit-btn" type="button" data-thought-preset="fast">Start with force</button>
          <button class="circuit-btn" type="button" data-thought-preset="memory">Explore recovery</button>
          <button class="circuit-btn" type="button" data-thought-preset="challenge">Test a second challenge</button>
        </div>
      </div>
    </div>
    <p class="lab-caveat">This animated cell is an explanatory illustration, not a live-cell recording. The moving dots do not represent measured molecule counts, rates or trajectories.</p>
  </section>

  <section class="circuit-section" id="circuit-explorer">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">01 / System architecture</span><h2>Follow the signal through six linked stages</h2><p>Select a stage to inspect its proposed role, regulatory mechanisms and the question that remains experimentally important.</p></div><span class="circuit-tag">Interactive map</span></div>
    <div class="circuit-flow" role="group" aria-label="Six stages of the mechanochemical signal-resolution circuit">
      <button class="circuit-node is-active" type="button" data-stage="0" style="--node-color:#60a5fa"><span class="n">01</span><strong>Mechanical inputs</strong><small>Stiffness, stretch, shear, pressure</small></button>
      <button class="circuit-node" type="button" data-stage="1" style="--node-color:#67e8f9"><span class="n">02</span><strong>Distributed sensing</strong><small>Adhesions, junctions, actin, LINC</small></button>
      <button class="circuit-node" type="button" data-stage="2" style="--node-color:#a5b4fc"><span class="n">03</span><strong>State control</strong><small>Hippo and parallel regulators</small></button>
      <button class="circuit-node" type="button" data-stage="3" style="--node-color:#c4b5fd"><span class="n">04</span><strong>Nuclear decoding</strong><small>Transport, TEAD, chromatin, timing</small></button>
      <button class="circuit-node" type="button" data-stage="4" style="--node-color:#fbbf24"><span class="n">05</span><strong>Active termination</strong><small>Export, phosphorylation, AMOT, turnover</small></button>
      <button class="circuit-node" type="button" data-stage="5" style="--node-color:#86efac"><span class="n">06</span><strong>Baseline restoration</strong><small>Regain normal mechanosensitivity</small></button>
    </div>
    <div class="node-detail" id="stage-detail" aria-live="polite"><span class="node-detail-index">01</span><div><h3>Mechanical inputs define the perturbation</h3><p>Cells encounter matrix stiffness, tensile stretch, fluid shear, pressure and confinement. The framework treats these as changing inputs, not as a direct one-step switch for nuclear YAP/TAZ. The critical experimental move is to withdraw or reverse the input and track what happens next.</p></div></div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">02 / Dynamic thought experiment</span><h2>What happens after the mechanical input is removed?</h2><p>Adjust the inputs to explore how exposure duration and recovery capacity can change the response trajectory.</p></div><span class="circuit-tag">Signal lab</span></div>
    <div class="lab-grid">
      <div class="lab-controls">
        <div class="lab-control"><div class="lab-control-head"><label for="input-strength">Mechanical input strength</label><output id="strength-value" for="input-strength">70%</output></div><input id="input-strength" type="range" min="10" max="100" value="70" step="5"><span class="lab-help">Represents a relative perturbation level, not a physical unit or universal stiffness scale.</span></div>
        <div class="lab-control"><div class="lab-control-head"><label for="input-duration">Exposure duration</label><output id="duration-value" for="input-duration">60%</output></div><input id="input-duration" type="range" min="10" max="100" value="60" step="5"><span class="lab-help">Longer exposure can increase the chance of persistent downstream changes in some experimental systems.</span></div>
        <div class="lab-control"><div class="lab-control-head"><label for="input-reset">Resolution capacity</label><output id="reset-value" for="input-reset">65%</output></div><input id="input-reset" type="range" min="10" max="100" value="65" step="5"></div>
        <div class="lab-control"><div class="lab-control-head"><label for="input-memory">Persistent memory load</label><output id="memory-value" for="input-memory">30%</output></div><input id="input-memory" type="range" min="0" max="100" value="30" step="5"><span class="lab-help">Represents residual chromatin, cytoskeletal, metabolic or extracellular changes after withdrawal.</span></div>
        <div class="circuit-actions"><button class="circuit-btn primary" type="button" id="reset-lab">Reset parameters ↺</button><button class="circuit-btn" type="button" id="preset-persistent">Load persistent-state example</button></div>
      </div>
      <div class="lab-readout" aria-live="polite">
        <span class="lab-state adaptive" id="lab-state">Recovery-favored state</span>
        <h3 id="lab-result-title">Resolution may be achievable</h3>
        <p id="lab-result-copy">The selected balance favors a return toward baseline after the input is withdrawn, although this is a hypothesis-generating visualization rather than a prediction for a specific cell type.</p>
        <div class="lab-meter-label"><span>Relative residual signal</span><strong id="residual-label">35%</strong></div><div class="lab-meter"><span id="residual-meter"></span></div>
        <div class="lab-meter-label"><span>Relative reset capacity</span><strong id="capacity-label">65%</strong></div><div class="lab-meter"><span id="capacity-meter"></span></div>
        <svg class="lab-chart" viewBox="0 0 340 170" role="img" aria-label="Signal activation and recovery curve">
          <line class="axis" x1="32" y1="18" x2="32" y2="136"/><line class="axis" x1="32" y1="136" x2="322" y2="136"/>
          <line class="axis" x1="32" y1="77" x2="322" y2="77" stroke-dasharray="3 5"/>
          <text x="6" y="22">High</text><text x="7" y="139">Base</text><text x="32" y="155">Input</text><text x="260" y="155">Withdrawal →</text>
          <path class="trace-soft" d="M32 130 L78 130 L78 43 L165 43 L165 130 L322 130"/>
          <path class="trace" id="signal-trace" d="M32 130 L78 130 L78 43 L165 43 C205 82 245 112 322 127"/>
        </svg>
        
      </div>
    </div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">03 / Failure analysis</span><h2>Different failures can converge on persistent output</h2><p>Choose a proposed failure mode. The distinction is operational: what went wrong, how to test it, and what kind of intervention might be relevant.</p></div><span class="circuit-tag">Diagnostic logic</span></div>
    <div class="mode-grid" role="group" aria-label="Circuit failure modes">
      <button class="mode-button is-active" data-mode="sensing" type="button">Abnormal sensing<small>The input is misread or force transmission is altered.</small></button>
      <button class="mode-button" data-mode="controller" type="button">Controller failure<small>Negative feedback is insufficient to constrain output.</small></button>
      <button class="mode-button" data-mode="escape" type="button">Effector escape<small>Output bypasses normal upstream restraint.</small></button>
      <button class="mode-button" data-mode="resolution" type="button">Resolution failure<small>Activation occurs, but return to baseline is delayed.</small></button>
      <button class="mode-button" data-mode="memory" type="button">Memory lock<small>History-dependent changes resist simple withdrawal.</small></button>
    </div>
    <div class="mode-detail" id="mode-detail" aria-live="polite"><h3>Abnormal sensing</h3><div><strong>What it means</strong><p>The cell's adhesion, cytoskeletal or nuclear force-transmission apparatus interprets the mechanical environment differently than expected.</p></div><div><strong>Discriminating test</strong><p>Measure traction, adhesion maturation or nuclear deformation alongside YAP/TAZ output across a controlled mechanical input range.</p></div></div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">04 / Experimental workflow</span><h2>How to test the resolution hypothesis</h2><p>The framework is most directly tested by following a controlled perturbation through activation, withdrawal and a second challenge.</p></div><span class="circuit-tag">Testable predictions</span></div>
    <div class="experiment-grid">
      <article class="experiment-card"><span class="step">STEP 01</span><h3>Control the mechanical input</h3><p>Use tunable substrates, in situ softening/restiffening or defined stretch pulses so the input can be reversed without changing unrelated culture conditions.</p></article>
      <article class="experiment-card"><span class="step">STEP 02</span><h3>Measure multiple layers over time</h3><p>Pair endogenous live-cell YAP reporters with nascent transcription and measurements of adhesion, cytoskeleton, nuclear-envelope state and Hippo regulation.</p></article>
      <article class="experiment-card"><span class="step">STEP 03</span><h3>Challenge the reset system</h3><p>After recovery, apply a second mechanical input. Compare activation and termination kinetics to test whether mechanosensitivity has actually returned.</p></article>
    </div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">05 / Evidence calibration</span><h2>What is established, and what remains a framework prediction?</h2><p>The article integrates evidence of different strengths. Switch between evidence classes to keep the distinction between established mechanisms and the proposed synthesis explicit.</p></div><span class="circuit-tag">Claim boundaries</span></div>
    <div class="evidence-switches" role="group" aria-label="Evidence categories"><button type="button" class="is-active" data-evidence="established">Established mechanisms</button><button type="button" data-evidence="direct">Direct resolution evidence</button><button type="button" data-evidence="proposed">Framework predictions</button></div>
    <div class="evidence-panel" id="evidence-panel" aria-live="polite"><h3>Established mechanisms</h3><p>Mechanical inputs regulate YAP/TAZ through adhesion complexes, cytoskeletal tension, Hippo signaling, nuclear transport and context-dependent transcription. Phosphorylation-dependent sequestration, nuclear trafficking, AMOT regulation and protein turnover are established regulatory mechanisms, though their relative contributions vary by system.</p></div>
  </section>

  <section class="circuit-section">
    <div class="circuit-section-head"><div><span class="circuit-eyebrow">06 / Framework summary</span><h2>The central distinction</h2></div><span class="circuit-tag">Take-home model</span></div>
    <div class="experiment-grid">
      <article class="experiment-card"><span class="step">ACTIVATION</span><h3>Did the signal rise?</h3><p>Measure input, YAP/TAZ localization and transcriptional engagement. This establishes pathway response but not successful resolution.</p></article>
      <article class="experiment-card"><span class="step">TERMINATION</span><h3>Did the response stop?</h3><p>Withdraw the mechanical cue and measure export, phosphorylation, sequestration, turnover and downstream output over time.</p></article>
      <article class="experiment-card"><span class="step">RESTORATION</span><h3>Can the cell respond normally again?</h3><p>Test whether the mechanical baseline and responsiveness to a subsequent input have recovered. This integrated restoration remains a key test of the framework.</p></article>
    </div>
  </section>

  <div class="circuit-bottom"><span>Interactive companion to the published review.</span><a href="https://doi.org/10.1016/j.pbiomolbio.2026.101960" target="_blank" rel="noopener noreferrer">Read the published article ↗</a></div>
</div>

<script>
(function () {
  var root = document.getElementById('yap-circuit-lab');
  if (!root) return;
  var stages = [
    ['Mechanical inputs define the perturbation','Cells encounter matrix stiffness, tensile stretch, fluid shear, pressure and confinement. The framework treats these as changing inputs, not as a direct one-step switch for nuclear YAP/TAZ. The critical experimental move is to withdraw or reverse the input and track what happens next.'],
    ['Sensing is distributed across the cell','Integrin adhesions, cadherin junctions, actin and myosin, microtubules, LINC complexes and nuclear structures contribute to force transmission. The same bulk stiffness may therefore be interpreted differently depending on adhesion identity, cell geometry and the mechanical history of the cell.'],
    ['Hippo acts as a state controller','MST1/2-LATS1/2 signaling, scaffolds such as MOB1 and AMOT, and Hippo-independent inputs regulate YAP/TAZ availability. The result is a continuously adjusted state, not simply an ON/OFF relay.'],
    ['Nuclear entry is not the endpoint','Nuclear YAP/TAZ output depends on TEAD engagement, cofactors, chromatin accessibility, transport kinetics and duration. Similar nuclear abundance can coexist with different transcriptional outputs.'],
    ['Termination is actively regulated','Phosphorylation, nuclear export, sequestration, AMOT stabilization and protein degradation can reduce signaling. Their relative order and contribution may differ by cell type and stimulus, and should not be assumed to be one universal sequence.'],
    ['Reset means restored responsiveness','The proposed mechanical baseline is a state in which the cell can again interpret future mechanical cues appropriately. Coordinated restoration across adhesions, cytoskeleton, nuclear coupling and extracellular matrix remains a central testable prediction.']
  ];
  var nodes = root.querySelectorAll('.circuit-node');
  var stageDetail = root.querySelector('#stage-detail');
  function showStage(index) {
    nodes.forEach(function (node, i) { node.classList.toggle('is-active', i === index); node.setAttribute('aria-pressed', i === index ? 'true' : 'false'); });
    stageDetail.innerHTML = '<span class="node-detail-index">' + String(index + 1).padStart(2, '0') + '</span><div><h3>' + stages[index][0] + '</h3><p>' + stages[index][1] + '</p></div>';
    stageDetail.style.animation = 'none'; void stageDetail.offsetWidth; stageDetail.style.animation = 'lab-enter .35s ease both';
  }
  nodes.forEach(function (node, i) { node.addEventListener('click', function () { showStage(i); }); });

  var inputs = {
    strength: root.querySelector('#input-strength'),
    duration: root.querySelector('#input-duration'),
    reset: root.querySelector('#input-reset'),
    memory: root.querySelector('#input-memory')
  };
  function updateLab() {
    var s = +inputs.strength.value, d = +inputs.duration.value, r = +inputs.reset.value, m = +inputs.memory.value;
    root.querySelector('#strength-value').textContent = s + '%';
    root.querySelector('#duration-value').textContent = d + '%';
    root.querySelector('#reset-value').textContent = r + '%';
    root.querySelector('#memory-value').textContent = m + '%';
    var burden = Math.max(0, Math.min(100, Math.round((s * .2) + (d * .38) + (m * .42) - (r * .25))));
    var residual = Math.max(0, Math.min(100, Math.round(burden * (1 - r / 125) + m * .22)));
    var recoveryFavored = r >= (d * .45 + m * .35) && residual < 58;
    root.querySelector('#residual-label').textContent = residual + '%';
    root.querySelector('#residual-meter').style.width = residual + '%';
    root.querySelector('#capacity-label').textContent = r + '%';
    root.querySelector('#capacity-meter').style.width = r + '%';
    var state = root.querySelector('#lab-state');
    state.className = 'lab-state ' + (recoveryFavored ? 'adaptive' : 'persistent');
    state.textContent = recoveryFavored ? 'Recovery-favored state' : 'Persistence-favored state';
    root.querySelector('#lab-result-title').textContent = recoveryFavored ? 'Resolution may be achievable' : 'Residual activity may remain';
    root.querySelector('#lab-result-copy').textContent = recoveryFavored
      ? 'Recovery capacity is relatively high compared with exposure duration and memory load.'
      : 'Exposure duration and/or persistent memory load outweigh the selected recovery capacity.';
    var startX = 32, startY = 130, riseX = 78, peakX = 165, peakY = 130 - s * 0.87;
    var decayEndY = 130 - residual * 0.87;
    var bend1 = peakX + 42, bend2 = 245;
    var dPath = 'M' + startX + ' ' + startY + ' L' + riseX + ' ' + startY + ' L' + riseX + ' ' + peakY.toFixed(1) + ' L' + peakX + ' ' + peakY.toFixed(1) +
      ' C' + bend1 + ' ' + (peakY + (decayEndY - peakY) * .55).toFixed(1) + ' ' + bend2 + ' ' + (decayEndY - 2).toFixed(1) + ' 322 ' + decayEndY.toFixed(1);
    root.querySelector('#signal-trace').setAttribute('d', dPath);
  }
  Object.keys(inputs).forEach(function (key) { inputs[key].addEventListener('input', updateLab); });
  root.querySelector('#reset-lab').addEventListener('click', function () {
    inputs.strength.value = 70; inputs.duration.value = 60; inputs.reset.value = 65; inputs.memory.value = 30; updateLab();
  });
  root.querySelector('#preset-persistent').addEventListener('click', function () {
    inputs.strength.value = 85; inputs.duration.value = 90; inputs.reset.value = 25; inputs.memory.value = 80; updateLab();
  });
  updateLab();

  var modeData = {
    sensing: ['Abnormal sensing','The cell\'s adhesion, cytoskeletal or nuclear force-transmission apparatus interprets the mechanical environment differently than expected.','Measure traction, adhesion maturation or nuclear deformation alongside YAP/TAZ output across a controlled mechanical input range.'],
    controller: ['Controller failure','Negative feedback or inhibitory state-control mechanisms are insufficient to constrain the amplitude or duration of YAP/TAZ signaling.','Test LATS1/2 activity and feedback responses after a matched stimulus; compare the duration of output with and without a targeted controller perturbation.'],
    escape: ['Effector escape','YAP/TAZ output can become less dependent on ordinary upstream restraint, including through Hippo-independent pathways or context-specific nuclear retention.','Measure YAP/TAZ output while verifying upstream restraint, and perturb the candidate bypass route rather than inferring it from nuclear localization alone.'],
    resolution: ['Resolution failure','Activation may occur normally, yet the return toward baseline is delayed or incomplete after the mechanical input is withdrawn.','Track time-resolved recovery after a reversible mechanical perturbation and distinguish slow decay from a stable, history-dependent state.'],
    memory: ['Memory lock','Persistent chromatin, nuclear, cytoskeletal, metabolic or matrix changes may alter later responses and make simple input withdrawal insufficient.','Withdraw the cue, measure persistence, then apply a second challenge. Test whether reversal requires interruption of feedback or an additional resetting intervention.']
  };
  var modeButtons = root.querySelectorAll('.mode-button');
  function showMode(key) {
    var d = modeData[key]; if (!d) return;
    modeButtons.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-mode') === key); });
    root.querySelector('#mode-detail').innerHTML = '<h3>' + d[0] + '</h3><div><strong>What it means</strong><p>' + d[1] + '</p></div><div><strong>Discriminating test</strong><p>' + d[2] + '</p></div>';
  }
  modeButtons.forEach(function (b) { b.addEventListener('click', function () { showMode(b.getAttribute('data-mode')); }); });

  var evidence = {
    established: ['Established mechanisms','Mechanical inputs regulate YAP/TAZ through adhesion complexes, cytoskeletal tension, Hippo signaling, nuclear transport and context-dependent transcription. Phosphorylation-dependent sequestration, nuclear trafficking, AMOT regulation and protein turnover are established regulatory mechanisms, though their relative contributions vary by system.'],
    direct: ['Direct evidence for resolution and persistence','Reversible mechanical perturbations and mechanical-dosing studies show that YAP/TAZ responses can decline after input withdrawal, and that exposure history can change reversibility. Feedback disruption and N-cadherin ligation have also been used to probe persistent states. These findings support specific parts of the model, not a fully reconstructed circuit in every tissue.'],
    proposed: ['Framework predictions still to test','The integrated claim that coordinated restoration of adhesion, cytoskeleton, nuclear coupling and matrix mechanics restores a common mechanical baseline remains a hypothesis. It also remains unresolved whether termination kinetics predict tissue-level disease outcomes better than activation magnitude across comparable systems.']
  };
  var evidenceButtons = root.querySelectorAll('[data-evidence]');
  function showEvidence(key) {
    var d = evidence[key]; if (!d) return;
    evidenceButtons.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-evidence') === key); });
    root.querySelector('#evidence-panel').innerHTML = '<h3>' + d[0] + '</h3><p>' + d[1] + '</p>';
  }
  evidenceButtons.forEach(function (b) { b.addEventListener('click', function () { showEvidence(b.getAttribute('data-evidence')); }); });
})();
</script>
<script src="{{ '/assets/js/yap-signal-experience.js' | relative_url }}?v=20261009-5" defer></script>
