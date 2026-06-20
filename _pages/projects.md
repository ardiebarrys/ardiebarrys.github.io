---
layout: page
title: Projects
permalink: /projects/
description: Selected research projects and writing themes.
nav: true
nav_order: 3
---

<style>
  .post,
  .page,
  .container,
  main {
    max-width: 1280px !important;
  }

  .projects-page {
    margin-top: 2rem;
    width: 100%;
  }

  .project-section {
    margin-bottom: 3rem;
  }

  .project-section-title {
    margin-bottom: 1rem;
    color: #0b174f;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .project-card {
    padding: 1.25rem;
    border: 1px solid rgba(183, 0, 183, 0.2);
    border-left: 5px solid var(--global-theme-color);
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.02));
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
  }

  .project-label {
    margin-bottom: 0.5rem;
    color: var(--global-theme-color);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .project-card h2 {
    margin: 0 0 0.7rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .project-card p {
    margin: 0 0 0.85rem;
    line-height: 1.55;
    text-align: left !important;
  }

  .project-list {
    margin: 0;
    padding-left: 1.1rem;
  }

  .project-list li {
    margin-bottom: 0.35rem;
    line-height: 1.45;
  }

  .project-card a {
    color: var(--global-theme-color) !important;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .project-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="projects-page">
  <section class="project-section">
    <h2 class="project-section-title">PhD Thesis Project</h2>

    <div class="project-grid">
      <article class="project-card">
        <div class="project-label">Doctoral Research</div>

        <h2>E-cigarette and Sexual Function</h2>

        <p>
          This project brings together my doctoral research on the toxicological effects of e-cigarette exposure, with emphasis on reproductive health, sexual function, Leydig cell steroidogenesis, testosterone signaling, mitochondrial dysfunction, and secondhand aerosol exposure.
        </p>

        <ul class="project-list">
          <li>E-cigarettes and erectile dysfunction</li>
          <li>Leydig cell steroidogenic pathways</li>
          <li>MicroRNA-mediated testosterone signaling</li>
          <li>Mitochondrial dysfunction</li>
          <li>Secondhand aerosol exposure and lung health</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="project-section">
    <h2 class="project-section-title">Personal Project</h2>

    <div class="project-grid">
      <article class="project-card">
        <div class="project-label">Conceptual Framework</div>

        <h2>Cellular Signaling as Dynamic Regulatory Circuits</h2>

        <p>
          This personal project develops a conceptual framework for interpreting cellular signaling pathways as dynamic regulatory circuits rather than static molecular switches.
        </p>

        <ul class="project-list">
          <li>NRF2-KEAP1 as a redox signal-resolution circuit</li>
          <li>CYP1A1 as an environmental sensing feedback circuit</li>
          <li>Signal duration, feedback, and resolution failure</li>
          <li>Control theory approaches to cell signaling</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="project-section">
    <h2 class="project-section-title">Miscellaneous</h2>

    <div class="project-grid">
      <article class="project-card">
        <div class="project-label">Independent Writing</div>

        <h2>Miscellaneous Sole-Author Works</h2>

        <p>
          This section collects sole-author papers and scholarly writing that do not belong directly to the PhD thesis project or the cellular signaling framework.
        </p>

        <ul class="project-list">
          <li>Independent review articles</li>
          <li>Conceptual manuscripts</li>
          <li>Topic-specific scholarly writing</li>
        </ul>
      </article>
    </div>
  </section>
</div>
