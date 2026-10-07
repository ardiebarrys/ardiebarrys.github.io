---
layout: page
title: SciAudit AI
permalink: /sciaudit-ai/
nav: true
nav_order: 7
description: AI-assisted scientific evidence auditing for biomedical research
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

  .sciaudit-page {
    width: 100%;
    margin: 1.5rem 0 3rem;
  }

  /* Hero */
  .sciaudit-hero {
    margin-bottom: 1.8rem;
    padding: 2rem 2.1rem;
    border: 1px solid var(--line);
    border-left: 5px solid var(--global-theme-color);
    border-radius: 12px;
    background: var(--surface);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
  }

  .sciaudit-kicker {
    margin-bottom: 0.5rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sciaudit-hero h2 {
    margin: 0 0 0.7rem;
    color: var(--text-strong);
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .sciaudit-tagline {
    margin: 0;
    color: var(--text);
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.5;
  }

  /* Main grid */
  .sciaudit-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
    gap: 1.8rem;
    margin-bottom: 1.8rem;
  }

  /* Cards */
  .sciaudit-card {
    padding: 1.5rem 1.6rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--surface);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
    box-sizing: border-box;
  }

  .sciaudit-card h2 {
    margin: 0 0 0.85rem;
    color: var(--text-strong);
    font-size: 1.25rem;
    font-weight: 700;
  }

  .sciaudit-card p {
    margin: 0 0 0.9rem;
    color: var(--text);
    line-height: 1.6;
    text-align: left !important;
  }

  .sciaudit-card p:last-child {
    margin-bottom: 0;
  }

  /* Project description */
  .sciaudit-intro {
    margin-bottom: 1.8rem;
  }

  .sciaudit-intro p {
    max-width: 950px;
    line-height: 1.65;
  }

  /* Feature list */
  .sciaudit-list {
    margin: 0;
    padding-left: 1.2rem;
  }

  .sciaudit-list li {
    margin-bottom: 0.5rem;
    color: var(--text);
    line-height: 1.5;
  }

  .sciaudit-list li:last-child {
    margin-bottom: 0;
  }

  /* Metadata */
  .sciaudit-meta {
    display: grid;
    gap: 0.75rem;
  }

  .sciaudit-meta-row {
    display: grid;
    grid-template-columns: 8rem minmax(0, 1fr);
    gap: 0.8rem;
    padding-bottom: 0.7rem;
    border-bottom: 1px solid var(--line);
  }

  .sciaudit-meta-row:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .sciaudit-meta-label {
    color: var(--muted);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .sciaudit-meta-value {
    color: var(--text-strong);
    font-weight: 600;
    line-height: 1.45;
  }

  /* Status */
  .sciaudit-status {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-top: 0.25rem;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface-strong);
    color: var(--global-theme-color);
    font-size: 0.82rem;
    font-weight: 700;
  }

  /* Bottom note */
  .sciaudit-note {
    margin-top: 1.8rem;
    padding: 1.2rem 1.35rem;
    border: 1px solid var(--line);
    border-left: 5px solid var(--global-theme-color);
    border-radius: 10px;
    background: var(--surface-strong);
    color: var(--text);
    line-height: 1.6;
  }

  .sciaudit-note strong {
    color: var(--text-strong);
  }

  /* Footer project identity */
  .sciaudit-identity {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 1.4rem;
  }

  .sciaudit-chip {
    display: inline-flex;
    align-items: center;
    padding: 0.42rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    color: var(--text);
    font-size: 0.88rem;
  }

  /* Responsive */
  @media (max-width: 820px) {
    .sciaudit-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .sciaudit-hero,
    .sciaudit-card {
      padding: 1.2rem 1.1rem;
    }

    .sciaudit-hero h2 {
      font-size: 1.7rem;
    }

    .sciaudit-tagline {
      font-size: 1.05rem;
    }

    .sciaudit-meta-row {
      grid-template-columns: 1fr;
      gap: 0.2rem;
    }
  }
</style>

<div class="sciaudit-page">

  <section class="sciaudit-hero">
    <div class="sciaudit-kicker">Independent Research Technology Project</div>

    <h2>SciAudit AI</h2>

    <p class="sciaudit-tagline">
      AI-assisted scientific evidence auditing for biomedical research
    </p>

    <span class="sciaudit-status">Early-stage development</span>
  </section>


  <section class="sciaudit-card sciaudit-intro">
    <h2>Overview</h2>

    <p>
      SciAudit AI is an early-stage research technology project I am developing
      to improve how biomedical researchers evaluate, compare and organize
      scientific evidence.
    </p>

    <p>
      Development began in 2025 as an independent research initiative,
      initially in response to challenges I encountered in my own biomedical
      research workflow.
    </p>

    <p>
      The project is being developed around a simple premise: AI can assist with
      scientific evidence analysis, but useful research workflows should make
      supporting evidence, uncertainty and methodological limitations explicit
      rather than treating AI-generated summaries as a substitute for primary
      scientific sources.
    </p>
  </section>


  <div class="sciaudit-grid">

    <section class="sciaudit-card">
      <h2>What I am building</h2>

      <ul class="sciaudit-list">
        <li>
          Scientific literature synthesis
        </li>

        <li>
          Cross-study evidence comparison
        </li>

        <li>
          Identification of unsupported or weakly supported claims
        </li>

        <li>
          Identification of methodological limitations and sources of uncertainty
        </li>

        <li>
          Structured organization of findings and supporting evidence
        </li>

        <li>
          AI-assisted workflows for scientific research and writing
        </li>
      </ul>
    </section>


    <section class="sciaudit-card">
      <h2>Project Status</h2>

      <div class="sciaudit-meta">

        <div class="sciaudit-meta-row">
          <div class="sciaudit-meta-label">Stage</div>
          <div class="sciaudit-meta-value">
            Early development / self-validation
          </div>
        </div>

        <div class="sciaudit-meta-row">
          <div class="sciaudit-meta-label">Development</div>
          <div class="sciaudit-meta-value">
            Independent and bootstrapped
          </div>
        </div>

        <div class="sciaudit-meta-row">
          <div class="sciaudit-meta-label">Founder</div>
          <div class="sciaudit-meta-value">
            Ardie Barry Sailis
          </div>
        </div>

        <div class="sciaudit-meta-row">
          <div class="sciaudit-meta-label">Started</div>
          <div class="sciaudit-meta-value">
            2025
          </div>
        </div>

        <div class="sciaudit-meta-row">
          <div class="sciaudit-meta-label">Focus</div>
          <div class="sciaudit-meta-value">
            Biomedical research · Scientific evidence · Artificial intelligence
          </div>
        </div>

      </div>
    </section>

  </div>


  <section class="sciaudit-card">
    <h2>Initial Use Case</h2>

    <p>
      The initial version is being developed and tested within my own biomedical
      research workflow. I am using the project to explore whether an
      AI-assisted evidence-auditing workflow can improve the way scientific
      literature is synthesized, compared and critically assessed.
    </p>

    <p>
      This self-validation stage is intended to establish whether the workflow
      is genuinely useful and reproducible before considering broader
      development for other researchers.
    </p>
  </section>


  <section class="sciaudit-card" style="margin-top: 1.8rem;">
    <h2>Research Problem</h2>

    <p>
      Biomedical researchers routinely work across large and fragmented
      literatures in which findings differ in study design, population,
      exposure, measurement methods and evidentiary strength.
    </p>

    <p>
      SciAudit AI is being developed to help make those differences easier to
      identify and organize, particularly when evaluating whether a conclusion
      is adequately supported by the underlying scientific literature.
    </p>
  </section>


  <div class="sciaudit-note">
    <strong>Current development status:</strong>
    SciAudit AI is an independent, early-stage project and is currently being
    developed for research use and validation. It is not presented here as an
    incorporated company, funded startup, or commercially launched product.
    The project may be developed further depending on the results of the
    validation process.
  </div>


  <div class="sciaudit-identity">
    <span class="sciaudit-chip">Biomedical Research</span>
    <span class="sciaudit-chip">Scientific Evidence Auditing</span>
    <span class="sciaudit-chip">AI-Assisted Research</span>
    <span class="sciaudit-chip">Literature Synthesis</span>
    <span class="sciaudit-chip">Research Methodology</span>
  </div>

</div>
