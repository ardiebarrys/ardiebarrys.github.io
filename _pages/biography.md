---
layout: page
title: Biography
permalink: /biography/
nav: true
nav_order: 6
---

<style>

  .post,
  .page,
  .container,
  main {
    max-width: 1280px !important;
  }

  .navbar .nav-link.active,
  .navbar .nav-item.active .nav-link,
  .navbar .nav-link[aria-current="page"] {
    color: var(--global-theme-color) !important;
    font-weight: 700 !important;
  }

  .bio-page {
    width: 100%;
    max-width: 1280px !important;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  .bio-hero {
    position: relative;
    width: 100%;
    min-height: 430px;
    margin: 1.5rem 0 2rem;
    border-radius: 14px;
    overflow: hidden;
    background-image:
      linear-gradient(90deg, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.42)),
      url("{{ '/assets/img/biography-lab.jpg' | relative_url }}");
    background-size: cover;
    background-position: center;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
    user-select: none;
    -webkit-user-select: none;
  }

  .bio-hero-content {
    position: absolute;
    left: 2.2rem;
    right: 2.2rem;
    bottom: 2.2rem;
    max-width: 760px;
    color: #ffffff !important;
  }

  .bio-hero-content h1 {
    margin: 0 0 0.7rem;
    color: #ffffff !important;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.75);
  }

  .bio-hero-content p {
    margin: 0;
    padding: 0.2rem 0;
    color: #ffffff !important;
    font-size: 1.2rem;
    line-height: 1.65;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  }

  .bio-card,
  .bio-image-card {
    width: 100%;
    border: 1px solid rgba(183, 0, 183, 0.12);
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.045);
    box-sizing: border-box;
  }

  .bio-card {
    padding: 1.7rem 1.9rem;
  }

  .bio-card h2 {
    margin-top: 0;
    color: #0b174f !important;
    font-weight: 700;
  }

  .bio-card h3 {
    margin-top: 1.4rem;
    margin-bottom: 0.45rem;
    color: #0b174f;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .bio-card p {
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.75;
  }

  .bio-focus-inline {
    max-width: 860px;
    margin: 1.8rem auto;
    padding: 1.25rem 1.4rem;
    border-left: 5px solid var(--global-theme-color);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.07), rgba(183, 0, 183, 0.018));
    text-align: center;
  }

  .bio-focus-inline h3 {
    margin-top: 0;
    margin-bottom: 0.9rem;
    text-align: center;
  }

  .bio-focus-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.55rem;
  }

  .bio-focus-tag {
    padding: 0.45rem 0.7rem;
    border: 1px solid rgba(183, 0, 183, 0.22);
    border-radius: 999px;
    background: #ffffff;
    color: #111111;
    font-size: 0.95rem;
  }

  .bio-inline-quote {
    max-width: 860px;
    margin: 1.8rem auto;
    padding: 1.35rem 1.5rem;
    border-left: 5px solid var(--global-theme-color);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.02));
    text-align: center;
  }

  .bio-inline-quote blockquote {
    margin: 0;
    color: #111111;
    font-size: 1.08rem;
    font-weight: 600;
    line-height: 1.7;
    text-align: center;
  }

  .bio-inline-quote cite {
    display: block;
    margin-top: 0.85rem;
    color: #555555;
    font-style: italic;
    font-weight: 700;
    text-align: center;
  }

  .bio-image-card {
    margin-top: 1.8rem;
    overflow: hidden;
  }

  .bio-image-card img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    display: block;
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
  }

  @media (max-width: 768px) {
    .bio-hero {
      min-height: 300px;
    }

    .bio-hero-content {
      left: 1.3rem;
      right: 1.3rem;
      bottom: 1.4rem;
    }

    .bio-hero-content h1 {
      font-size: 2.2rem;
    }

    .bio-hero-content p {
      font-size: 1.02rem;
    }

    .bio-card {
      padding: 1.25rem;
    }

    .bio-image-card img {
      height: 280px;
    }
  }

</style>

<div class="bio-page">

<section class="bio-hero" oncontextmenu="return false;">
  <div class="bio-hero-content">
    <h1>Biography</h1>
    <p>
      PhD student in Pharmaceutical Sciences working at the intersection of toxicology,
      molecular regulation, and reproductive health.
    </p>
  </div>
</section>

<article class="bio-card">
  <h2>Ardie Barry Sailis</h2>

  <h3>Early Background</h3>
  <p>
    Ardie Barry Sailis is from Tambunan, Sabah, and of Dusun heritage. Kuala Lumpur was a long way off, in more senses than distance. He decided at ten that he wanted to be a scientist, which sounds precocious but was really a child wanting to know why bodies break down and whether anything can be done about it. He never stopped asking.
  </p>

  <h3>Academic Development</h3>
  <p>
    Pharmaceutical sciences gave that curiosity a shape. Learning how medicines and toxicants interact with living systems narrowed his attention to a specific question. What happens inside a cell when something goes wrong, and why do protective responses sometimes fail to protect?
  </p>

  <p>
    That question pulled him toward toxicology, pharmacology, and molecular regulation. He works experimentally, but reads results as coordinated responses across pathways rather than isolated outcomes.
  </p>

  <div class="bio-focus-inline">
    <h3>Research Focus</h3>
    <div class="bio-focus-list">
      <span class="bio-focus-tag">Environmental toxicology</span>
      <span class="bio-focus-tag">E-cigarette exposure</span>
      <span class="bio-focus-tag">Reproductive health</span>
      <span class="bio-focus-tag">Molecular regulation</span>
      <span class="bio-focus-tag">Mitochondrial stress</span>
      <span class="bio-focus-tag">microRNA signaling</span>
    </div>
  </div>

  <h3>Doctoral Research</h3>
  <p>
    He came to the subject sideways. While looking for research assistant positions online, he found a project on vaping and reproductive health and could not let go of the arithmetic. Millions of users worldwide, and almost nothing known about what the aerosol does to sexual and hormonal function. That gap seemed worth closing.
  </p>

  <p>
    His doctoral work examines what e-cigarette exposure does to male reproductive and endocrine health, at the Faculty of Pharmacy, Universiti Malaya. Vaping is usually discussed as a lung problem. He is interested in what happens further downstream, in Leydig cell steroidogenesis, testosterone signalling, mitochondrial function, redox imbalance, and microRNA regulation.
  </p>

  <p>
    The underlying question is whether repeated exposure disturbs the systems governing hormone production, cellular energy, and stress adaptation, well beyond the airway.
  </p>

  <h3>Research Philosophy</h3>
  <p>
    He does not think toxicant exposure is best understood as isolated cellular injury. Cells integrate signals across mitochondria, redox state, gene regulation, inflammation, and hormonal control. When those systems are repeatedly challenged, what matters may be less the initial insult than whether the cell can still sense, process, and resolve stress.
  </p>

  <p>
    That conviction produced work nobody asked him to do. Biology never runs cleanly from A to B. Something always intervenes, and the question of what intervenes is the one he keeps returning to. His framework, Cellular Signalling as Dynamic Regulatory Circuits, treats canonical pathways as control systems rather than linear cascades, with attention to feedback, timing, phase-separated states, and failures of signal resolution. He wrote it because research should add to what is known, not only to what is required.
  </p>

  <div class="bio-inline-quote">
    <blockquote>
      "Absence of evidence is not evidence of absence. The most important questions often begin where existing evidence becomes incomplete, uncertain, or overlooked."
    </blockquote>
    <cite>Ardie Barry Sailis (2026)</cite>
  </div>

  <p>
    The same instinct runs through his writing outside the lab. In <em>From AI Efficiency to Human Dignity: A Research Perspective on Magnifica Humanitas</em> (May 2026), he argued that AI should not be judged only on speed and accuracy, but on what it does to justice, accountability, and human dignity. In health research that means asking who contributes the data, who governs it, and who actually benefits.
  </p>

  <h3>Long-Term Direction</h3>
  <p>
    He wants to do work that is both mechanistically detailed and conceptually integrative, connecting exposure science, cellular stress, endocrine regulation, and systems-level disease models. Good research should explain not just whether something causes harm, but how systems respond, adapt, compensate, and eventually fail.
  </p>

</article>

<figure class="bio-image-card" oncontextmenu="return false;">
  <img
    src="{{ '/assets/img/biography-portrait.jpg' | relative_url }}"
    alt="Ardie Barry Sailis during laboratory research"
    draggable="false"
    oncontextmenu="return false;"
  >
</figure>

</div>
