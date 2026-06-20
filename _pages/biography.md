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
      linear-gradient(90deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.18)),
      url("{{ '/assets/img/biography-lab.jpg' | relative_url }}");
    background-size: cover;
    background-position: center;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
  }

  .bio-hero-content {
    position: absolute;
    left: 2.2rem;
    bottom: 2.2rem;
    max-width: 720px;
    color: #ffffff;
  }

  .bio-hero-content h1 {
    margin: 0 0 0.6rem;
    font-size: 2.8rem;
    font-weight: 700;
  }

  .bio-hero-content p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.55;
  }

  .bio-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 1.5rem;
    align-items: start;
  }

  .bio-card,
  .bio-focus,
  .bio-quote,
  .bio-image-card {
    border: 1px solid rgba(183, 0, 183, 0.12);
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.045);
    box-sizing: border-box;
  }

  .bio-card {
    padding: 1.7rem 1.9rem;
  }

  .bio-card h2,
  .bio-focus h2 {
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

  .bio-focus {
    padding: 1.25rem 1.35rem;
    border-left: 4px solid var(--global-theme-color);
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.06), rgba(183, 0, 183, 0.015));
  }

  .bio-focus ul {
    margin: 0;
    padding-left: 1.1rem;
    line-height: 1.75;
  }

  .bio-quote {
    margin-top: 1.5rem;
    padding: 1.4rem 1.6rem;
    border-left: 5px solid var(--global-theme-color);
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.02));
  }

  .bio-quote blockquote {
    margin: 0;
    color: #111111;
    font-size: 1.1rem;
    line-height: 1.65;
  }

  .bio-quote cite {
    display: block;
    margin-top: 0.8rem;
    color: #555555;
    font-style: normal;
    font-weight: 700;
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
  }

  .bio-image-card figcaption {
    padding: 0.9rem 1rem;
    color: #555555;
    font-size: 0.95rem;
  }

  @media (max-width: 900px) {
    .bio-layout {
      grid-template-columns: 1fr;
    }

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
      font-size: 1.05rem;
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

<div class="bio-layout">
  <article class="bio-card">
    <h2>Ardie Barry Sailis</h2>

    <h3>Early Background</h3>
    <p>
      Ardie Barry Sailis is a PhD student in Pharmaceutical Sciences at the Faculty of Pharmacy,
      Universiti Malaya, Malaysia. Originally from Tambunan, Sabah, and of Dusun heritage, he moved
      to Peninsular Malaysia in 2019 to continue his academic journey. His interest in science began
      early. By the age of ten, he had already set his mind on becoming a scientist, driven by a
      curiosity about how the body works, why disease develops, and how scientific discovery can be
      used to improve human health.
    </p>

    <h3>Academic Development</h3>
    <p>
      As his training progressed, Ardie became increasingly interested in the molecular basis of toxic
      injury. He was drawn to questions about how external exposures interact with biological systems,
      how cells detect and respond to stress, and why some adaptive responses eventually fail. This
      interest led him toward toxicology, pharmacology, molecular regulation, and disease mechanisms,
      where his work now combines experimental interpretation with systems-level thinking.
    </p>

    <h3>Doctoral Research</h3>
    <p>
      His doctoral research investigates the biological effects of e-cigarette exposure, particularly in
      relation to male reproductive and endocrine health. While e-cigarettes are often discussed mainly
      in the context of respiratory exposure, his work examines their wider systemic relevance. His
      research explores how e-cigarette aerosols and their chemical constituents may influence Leydig
      cell steroidogenesis, testosterone-associated signaling, mitochondrial function, oxidative and
      redox imbalance, microRNA-mediated regulation, and intercellular communication pathways.
    </p>

    <h3>Research Philosophy</h3>
    <p>
      A central theme of Ardie’s work is that toxicant exposure should not be viewed only as isolated
      cellular injury. Instead, he approaches toxicological effects as disruptions of coordinated
      biological systems. Cells integrate stress signals across mitochondrial activity, redox balance,
      gene regulation, inflammatory communication, protein networks, and hormonal control. From this
      perspective, disease can be understood not only as molecular damage, but also as a failure of
      regulation, timing, feedback, communication, or recovery.
    </p>

    <h3>Long-Term Direction</h3>
    <p>
      Beyond his doctoral research, Ardie is developing a conceptual framework titled
      <em>Cellular Signaling as Dynamic Regulatory Circuits</em>. This work applies ideas from systems
      biology and control theory to reinterpret canonical signaling pathways as dynamic regulatory
      systems rather than static molecular cascades. His long-term academic goal is to contribute to
      mechanistic toxicology and molecular systems biology by developing research that is both
      biologically detailed and conceptually integrative.
    </p>
  </article>

  <aside>
    <section class="bio-focus">
      <h2>Research Focus</h2>
      <ul>
        <li>Environmental toxicology</li>
        <li>E-cigarette exposure</li>
        <li>Reproductive health</li>
        <li>Molecular regulation</li>
        <li>Mitochondrial stress</li>
        <li>microRNA signaling</li>
      </ul>
    </section>

    <section class="bio-quote">
      <blockquote>
        “Absence of evidence is not evidence of absence. For me, the most important scientific
        questions often begin where existing evidence becomes incomplete, uncertain, or overlooked.”
      </blockquote>
      <cite>- Ardie Barry Sailis (2026)</cite>
    </section>
  </aside>
</div>

<figure class="bio-image-card">
  <img src="{{ '/assets/img/biography-experimental.png' | relative_url }}" alt="Ardie Barry Sailis preparing samples during laboratory research">
  <figcaption>Preparing samples during laboratory-based experimental research.</figcaption>
</figure>

</div>
