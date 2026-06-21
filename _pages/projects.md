---
layout: page
title: Projects
permalink: /projects/
description: Current research projects
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

  .navbar .nav-link.active,
  .navbar .nav-item.active .nav-link,
  .navbar .nav-link[aria-current="page"] {
    color: var(--global-theme-color) !important;
    font-weight: 700 !important;
  }

  .projects-page {
    margin-top: 2rem;
    width: 100%;
  }

  .project-section {
    margin-bottom: 2rem;
  }

  .project-section-title {
    margin-bottom: 1rem;
    color: #0b174f;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .project-card {
    width: 100%;
    padding: 0;
    border: 1px solid rgba(183, 0, 183, 0.22);
    border-left: 5px solid var(--global-theme-color);
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.02));
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    box-sizing: border-box;
  }

  .project-card summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.15rem 1.25rem;
    color: var(--global-theme-color) !important;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    list-style-position: inside;
  }

  .project-card summary:hover {
    background: rgba(183, 0, 183, 0.06);
  }

  .project-card[open] summary {
    border-bottom: 1px solid rgba(183, 0, 183, 0.16);
  }

  .project-summary-title {
    color: var(--global-theme-color) !important;
    font-weight: 700;
  }

  .project-progress {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 300px;
  }

  .project-progress-label {
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
  }

  .project-progress-track {
    width: 150px;
    height: 9px;
    border-radius: 999px;
    background: rgba(183, 0, 183, 0.14);
    overflow: hidden;
  }

  .project-progress-fill {
    display: block;
    width: var(--progress);
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #6b1aa8, #b700b7, #e783e7);
    transform: scaleX(0);
    transform-origin: left;
    animation: fillProgress 1.4s ease forwards;
  }

  .project-progress-value {
    min-width: 38px;
    color: #8a008a;
    font-size: 0.78rem;
    font-weight: 700;
    text-align: right;
  }

  @keyframes fillProgress {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  .project-card-content {
    padding: 1.25rem;
  }

  .project-card h2 {
    margin: 0 0 0.7rem;
    font-size: 1.25rem;
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

  @media (max-width: 768px) {
    .project-card summary {
      align-items: flex-start;
      flex-direction: column;
    }

    .project-progress {
      width: 100%;
      min-width: 0;
    }

    .project-progress-track {
      width: 100%;
    }
  }
</style>

<div class="projects-page">
  <section class="project-section">
    <h2 class="project-section-title">PhD Thesis Project</h2>

    <details class="project-card">
      <summary>
        <span class="project-summary-title">Doctoral Research</span>
        <span class="project-progress">
          <span class="project-progress-label">Progress:</span>
          <span class="project-progress-track">
            <span class="project-progress-fill" style="--progress: 90%;"></span>
          </span>
          <span class="project-progress-value">90%</span>
        </span>
      </summary>

      <div class="project-card-content">
        <h2>E-cigarette and Sexual Function</h2>

        <p>
          This project brings together my doctoral research on the toxicological effects of e-cigarette exposure, with emphasis on reproductive health, sexual function, Leydig cell steroidogenesis, testosterone signaling, mitochondrial dysfunction, and secondhand aerosol exposure.
        </p>

        <p>
          This work was supported by the Ministry of Higher Education Malaysia through the Fundamental Research Grant Scheme (FRGS/1/2020/SKK05/UM/02/1) and the UMSC C.A.R.E Fund (UMG010C-2022).
        </p>

        <ul class="project-list">
          <li>E-cigarettes and erectile dysfunction (DOI: 10.1038/s41443-026-01300-0)</li>
          <li>Leydig cell steroidogenic pathways (DOI: 10.1016/j.mce.2026.112786)</li>
          <li>MicroRNA-mediated testosterone signaling (DOI: 10.1016/j.etap.2026.104994)</li>
          <li>Mitochondrial dysfunction (DOI: 10.1016/j.tox.2025.154339)</li>
          <li>Secondhand aerosol exposure and lung health (DOI: 10.1007/s10389-026-02740-0)</li>
          <li>E-cigarettes as metabolic disruptors (DOI: 10.1080/15376516.2026.2658739)</li>
        </ul>
      </div>
    </details>
  </section>

  <section class="project-section">
    <h2 class="project-section-title">Personal Project</h2>

    <details class="project-card">
      <summary>
        <span class="project-summary-title">Conceptual Framework</span>
        <span class="project-progress">
          <span class="project-progress-label">Progress:</span>
          <span class="project-progress-track">
            <span class="project-progress-fill" style="--progress: 30%;"></span>
          </span>
          <span class="project-progress-value">30%</span>
        </span>
      </summary>

      <div class="project-card-content">
        <h2>Cellular Signaling as Dynamic Regulatory Circuits</h2>

        <p>
          This personal project develops a conceptual framework for interpreting cellular signaling pathways as dynamic regulatory circuits rather than static molecular switches. Its sole objective is to advance scientific understanding, and therefore it does not receive any funding.
        </p>

        <ul class="project-list">
          <li>NRF2-KEAP1 as a redox signal-resolution circuit (DOI: 10.1016/j.pbiomolbio.2026.03.005)</li>
          <li>CYP1A1 as an environmental sensing feedback circuit (DOI: 10.1007/s00204-026-04384-1)</li>
          <li>More coming soon!</li>
        </ul>
      </div>
    </details>
  </section>

  <section class="project-section">
    <h2 class="project-section-title">Miscellaneous</h2>

    <details class="project-card">
      <summary>Independent Writing</summary>

      <div class="project-card-content">
        <h2>Miscellaneous Sole-Author Works</h2>

        <p>
          This section collects articles that do not belong directly to the PhD thesis project or the cellular signaling framework.
        </p>

        <ul class="project-list">
          <li>Adipose-driven erectile dysfunction (DOI: 10.1111/dom.70818)</li>
        </ul>
      </div>
    </details>
  </section>
</div>
