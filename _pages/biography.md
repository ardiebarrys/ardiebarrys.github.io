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

<section class="bio-hero">
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
    Ardie Barry Sailis is from Tambunan, Sabah, and is of Dusun heritage. His path into science has been shaped by both personal ambition and long-standing curiosity about the living world. His interest in research began early. By the age of ten, he had already set his mind on becoming a scientist, driven by a desire to understand how the body works, why disease develops, and how scientific discovery can be used to improve human health.
  </p>

  <h3>Academic Development</h3>
  <p>
    Over time, Ardie's early interest in science developed into a more defined academic direction within pharmaceutical sciences. His training introduced him to the ways medicines, toxicants, and biological systems interact, and this gradually shaped his interest in the molecular events that occur when cells are exposed to stress. He became particularly drawn to questions about how external exposures influence cellular function, how cells detect and respond to injury, and why protective responses may eventually become insufficient or maladaptive.
  </p>

  <p>
    This academic development led him toward toxicology, pharmacology, molecular regulation, and disease mechanisms. His current approach combines experimental investigation with systems-level thinking, allowing him to examine biological effects not only as isolated outcomes, but as coordinated responses across multiple molecular and cellular pathways.
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
    Ardie's doctoral research investigates the biological effects of e-cigarette exposure, particularly in relation to male reproductive and endocrine health. While e-cigarettes are often discussed primarily in the context of respiratory exposure, his work examines their wider systemic relevance. His research explores how e-cigarette aerosols and their chemical constituents may influence Leydig cell steroidogenesis, testosterone-associated signaling, mitochondrial function, oxidative and redox imbalance, microRNA-mediated regulation, and intercellular communication pathways.
  </p>

  <p>
    Through this work, he aims to contribute to a clearer understanding of how inhaled toxicants may affect health beyond the lungs. His research considers the possibility that repeated or chronic exposure to aerosol constituents may disturb molecular systems involved in hormone production, cellular energy regulation, stress adaptation, and reproductive function.
  </p>

  <h3>Research Philosophy</h3>
  <p>
    A central theme of Ardie's work is that toxicant exposure should not be viewed only as isolated cellular injury. Instead, he approaches toxicological effects as disruptions of coordinated biological systems. Cells do not respond to stress through single linear pathways; they integrate signals across mitochondrial activity, redox balance, gene regulation, inflammatory communication, protein networks, and hormonal control. When these systems are repeatedly challenged, the biological outcome may depend not only on the initial injury but also on whether cells can correctly sense, process, resolve, and recover from stress.
  </p>

  <p>
    His broader conceptual framework, titled <em>Cellular Signaling as Dynamic Regulatory Circuits</em>, applies ideas from systems biology and control theory to reinterpret canonical signaling pathways as dynamic regulatory systems rather than static molecular cascades. This framework emphasizes feedback regulation, temporal signal encoding, stress-integration circuits, phase-separated regulatory states, and failures in signal resolution that may contribute to disease progression.
  </p>

  <div class="bio-inline-quote">
    <blockquote>
      "Absence of evidence is not evidence of absence. For me, the most important scientific questions often begin where existing evidence becomes incomplete, uncertain, or overlooked."
    </blockquote>
    <cite>Ardie Barry Sailis (2026)</cite>
  </div>

  <p>
    This systems-oriented perspective also extends into his public writing on science, technology, and society. In his article <em>From AI Efficiency to Human Dignity: A Research Perspective on Magnifica Humanitas</em>, published on May 29, 2026, Ardie reflected on artificial intelligence, AI ethics, health data, digital power, and human dignity. The article argues that AI should not be evaluated only through efficiency, speed, scale, accuracy, or productivity, but also through its effects on justice, accountability, human dignity, labor, data governance, and the common good.
  </p>

  <p>
    From this perspective, scientific and technological progress should remain accountable to the people and communities it is meant to serve. In biomedical and health research, this means asking who contributes data, who governs it, who benefits from the resulting models, and whether affected communities have meaningful participation in decisions that shape research and care.
  </p>

  <h3>Long-Term Direction</h3>
  <p>
    Ardie's long-term academic goal is to contribute to mechanistic toxicology and molecular systems biology by developing research that is both biologically detailed and conceptually integrative. He is particularly interested in work that connects exposure science, cellular stress responses, endocrine regulation, reproductive health, systems-level disease models, and responsible scientific innovation.
  </p>

  <p>
    His scientific perspective is grounded in the idea that meaningful research should explain not only whether an exposure, technology, or intervention causes harm, but also how biological and social systems respond, adapt, compensate, and eventually fail. Through this direction, his work aims to build bridges between molecular detail, higher-level biological interpretation, and broader questions about human-centered science.
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
