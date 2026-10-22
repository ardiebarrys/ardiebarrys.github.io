---
layout: page
title: Biography
permalink: /biography/
description: Biography of Ardie Barry Sailis, a toxicology researcher studying how e-cigarettes affect male reproductive health
nav: true
nav_order: 2
---

<style>
  .post-description {
    display: none;
  }

  .bio-hero {
    position: relative;
    display: flex;
    align-items: flex-end;
    min-height: 380px;
    margin: 0 0 1.5rem;
    padding: 2rem 2.2rem;
    border-radius: 16px;
    overflow: hidden;
    background-image:
      linear-gradient(90deg, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.35)),
      url("{{ '/assets/img/biography-lab.jpg' | relative_url }}");
    background-size: cover;
    background-position: center;
    user-select: none;
  }

  .bio-hero h2 {
    margin: 0 0 0.6rem;
    color: #ffffff;
    font-size: clamp(2rem, 4.5vw, 2.8rem);
    font-weight: 700;
    line-height: 1.1;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
  }

  .bio-hero p {
    max-width: 640px;
    margin: 0;
    color: #ffffff;
    font-size: 1.15rem;
    line-height: 1.6;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
  }

  .bio-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 330px;
    gap: 1.5rem;
    align-items: start;
  }

  .bio-card,
  .bio-side > div {
    padding: 1.8rem 2rem;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--surface);
  }

  .bio-card h3 {
    margin: 1.6rem 0 0.5rem;
    color: var(--text-strong);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .bio-card h3:first-child {
    margin-top: 0;
  }

  .bio-card p {
    margin: 0 0 0.9rem;
    font-size: 1.05rem;
    line-height: 1.75;
  }

  .bio-card p:last-child {
    margin-bottom: 0;
  }

  .bio-side {
    position: sticky;
    top: calc(var(--nav-height) + 1rem);
    display: grid;
    gap: 1.5rem;
  }

  .bio-side > div {
    padding: 1.4rem 1.5rem;
  }

  .bio-side h3 {
    margin: 0 0 0.8rem;
    color: var(--accent);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .bio-focus {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .bio-focus span {
    padding: 0.4rem 0.75rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(13, 18, 29, 0.35);
    color: var(--text);
    font-size: 0.95rem;
  }

  .bio-quote {
    border-left: 4px solid var(--global-theme-color) !important;
  }

  .bio-quote blockquote {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-strong);
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6;
  }

  .bio-quote cite {
    display: block;
    margin-top: 0.7rem;
    color: var(--muted);
    font-style: normal;
    font-weight: 500;
  }

  .bio-image {
    margin: 1.5rem 0 0;
    border-radius: 16px;
    overflow: hidden;
  }

  .bio-image img {
    display: block;
    width: 100%;
    height: 420px;
    object-fit: cover;
    -webkit-user-drag: none;
    user-select: none;
  }

  @media (max-width: 991.98px) {
    .bio-layout {
      grid-template-columns: 1fr;
    }

    .bio-side {
      position: static;
    }
  }

  @media (max-width: 768px) {
    .bio-hero {
      min-height: 300px;
      padding: 1.4rem 1.3rem;
    }

    .bio-hero p {
      font-size: 1.02rem;
    }

    .bio-card,
    .bio-side > div {
      padding: 1.25rem 1.1rem;
    }

    .bio-card p {
      font-size: 1rem;
    }

    .bio-image img {
      height: 260px;
    }
  }
</style>

<section class="bio-hero" oncontextmenu="return false;">
  <div>
    <h2>Ardie Barry Sailis</h2>
    <p>I work where toxicology, molecular regulation and reproductive health meet.</p>
  </div>
</section>

<div class="bio-layout">
  <article class="bio-card">
    <h3>Early background</h3>
    <p>I am from Tambunan, Sabah, and of Dusun heritage. Kuala Lumpur was a long way off, in more senses than distance. At ten I wanted to know why bodies break down and whether anything can be done about it. I never stopped asking.</p>

    <h3>Academic development</h3>
    <p>Laboratory science gave that curiosity a shape and a specific question: what happens inside a cell when something goes wrong, and why do protective responses sometimes fail? That question led me to toxicology, pharmacology and molecular regulation. I work experimentally, but I read results as coordinated responses across pathways, not isolated outcomes.</p>

    <h3>Doctoral research</h3>
    <p>I came to the subject sideways. Searching for research assistant posts, I found a project on e-cigarettes and reproductive health and could not let go of the arithmetic: millions of users, and almost nothing known about what the aerosol does to sexual and hormonal function.</p>
    <p>My doctoral work looks beyond the lungs, at Leydig cell steroidogenesis, testosterone signaling, mitochondrial function, redox balance and microRNA regulation. The question is whether repeated exposure disturbs the systems that govern hormone production, cellular energy and stress adaptation.</p>

    <h3>Research philosophy</h3>
    <p>I do not see toxicant exposure as isolated cellular injury. Cells integrate signals across mitochondria, redox state, gene regulation, inflammation and hormones. Under repeated challenge, what may matter most is whether the cell can still sense, process and resolve stress.</p>
    <p>That conviction produced work nobody asked me to do. My framework, Cellular Signaling as Dynamic Regulatory Circuits, treats pathways as control systems rather than linear cascades, from NRF2–KEAP1 redox signaling and YAP/TAZ mechanotransduction to the unfolded protein response in environmental immunotoxicity. I wrote it because research should add to what is known, not only to what is required.</p>
    <p>The same instinct runs through my writing outside the lab. In <em>From AI Efficiency to Human Dignity: A Research Perspective on Magnifica Humanitas</em> (May 2026), I argued that AI should be judged not only on speed and accuracy but on justice, accountability and human dignity. In health research, that means asking who contributes the data, who governs it and who benefits.</p>

    <h3>Long-term direction</h3>
    <p>I want work that is mechanistically detailed and conceptually integrative, explaining not only whether something causes harm but how systems sense, adapt, resolve and eventually fail.</p>
  </article>

  <aside class="bio-side">
    <div class="bio-quote">
      <blockquote>"Absence of evidence is not evidence of absence. The most important questions often begin where existing evidence becomes incomplete, uncertain, or overlooked."</blockquote>
      <cite>Ardie Barry Sailis (2026)</cite>
    </div>
    <div>
      <h3>Research focus</h3>
      <div class="bio-focus">
        <span>Environmental toxicology</span>
        <span>E-cigarette exposure</span>
        <span>Reproductive health</span>
        <span>Molecular regulation</span>
        <span>Mechanotransduction</span>
        <span>YAP/TAZ signaling</span>
        <span>Mitochondrial stress</span>
        <span>microRNA signaling</span>
      </div>
    </div>
  </aside>
</div>

<figure class="bio-image" oncontextmenu="return false;">
  <img src="{{ '/assets/img/biography-portrait.jpg' | relative_url }}" alt="Ardie Barry Sailis during laboratory research" width="1600" height="903" loading="lazy" decoding="async" draggable="false">
</figure>
