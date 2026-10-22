---
layout: page
title: Doctoral Research
permalink: /research/e-cigarettes-male-reproductive-health/
description: Doctoral research comparing cigarette smokers, e-cigarette users and dual users, linking exposure to testosterone signaling, mitochondrial function and microRNA regulation
nav: true
nav_order: 4
---

<style>
  .post-header { display: none !important; }

  .thesis {
    --line: rgba(148, 163, 184, 0.2);
    --card: #121a29;
    --soft: #b7bec9;
    --label: #93c5fd;
    max-width: 1000px;
    margin: 0 auto;
  }

  .thesis p { margin: 0; }

  .thesis-hero {
    padding: 2rem 2.1rem;
    margin-bottom: 1.1rem;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: linear-gradient(150deg, rgba(30, 58, 138, 0.28), rgba(10, 14, 22, 0.9));
  }

  .thesis-eyebrow {
    display: block;
    margin-bottom: 0.7rem;
    color: var(--label);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .thesis-hero h1 {
    margin: 0 0 0.9rem;
    color: #f1f6ff;
    font-size: clamp(1.7rem, 3.6vw, 2.5rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .thesis-hero p {
    color: var(--soft);
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .thesis-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.1rem;
    padding: 0.4rem 0.85rem;
    border: 1px solid rgba(251, 191, 36, 0.35);
    border-radius: 999px;
    background: rgba(120, 53, 15, 0.25);
    color: #fcd34d;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .thesis-section {
    margin: 1.6rem 0 0;
    padding: 1.5rem 1.6rem;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--card);
  }

  .thesis-section h2 {
    margin: 0 0 0.3rem;
    color: #f1f6ff;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .thesis-lede {
    margin-bottom: 1.2rem !important;
    color: var(--soft);
    font-size: 0.98rem;
    line-height: 1.6;
  }

  .thesis-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.7rem;
  }

  .thesis-group {
    padding: 1rem 1.1rem;
    border: 1px solid var(--line);
    border-top: 3px solid var(--g, #67e8f9);
    border-radius: 12px;
    background: rgba(7, 9, 14, 0.45);
  }

  .thesis-group strong {
    display: block;
    color: #eef4ff;
    font-size: 1rem;
    font-weight: 600;
  }

  .thesis-group span {
    display: block;
    margin-top: 0.3rem;
    color: #aab1be;
    font-size: 0.86rem;
    line-height: 1.45;
  }

  .thesis-endpoints {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
  }

  .thesis-endpoint {
    display: grid;
    grid-template-columns: 2.1rem minmax(0, 1fr);
    gap: 0.9rem;
    padding: 1rem 1.1rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: rgba(7, 9, 14, 0.45);
  }

  .thesis-endpoint b {
    color: var(--label);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .thesis-endpoint h3 {
    margin: 0 0 0.25rem;
    color: #eef4ff;
    font-size: 1rem;
    font-weight: 600;
  }

  .thesis-endpoint p {
    color: #aab1be;
    font-size: 0.88rem;
    line-height: 1.5;
  }

  .thesis-endpoint a {
    color: #93c5fd !important;
    font-size: 0.84rem;
  }

  .thesis-groundwork {
    display: grid;
    gap: 0.5rem;
  }

  .thesis-paper {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.6rem 1rem;
    align-items: baseline;
    padding: 0.75rem 0.9rem;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: rgba(7, 9, 14, 0.4);
  }

  .thesis-paper a {
    color: #eef4ff !important;
    font-size: 0.93rem;
    font-weight: 600;
    line-height: 1.4;
    text-decoration: none !important;
  }

  .thesis-paper a:hover { color: #67e8f9 !important; }

  .thesis-paper em {
    color: #9aa2b1;
    font-size: 0.82rem;
    font-style: normal;
    white-space: nowrap;
  }

  .thesis-note {
    margin-top: 1.2rem !important;
    padding: 0.95rem 1.1rem;
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-left: 3px solid #fbbf24;
    border-radius: 10px;
    color: #cbd5e1;
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .thesis-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.6rem;
  }

  .thesis-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.65rem 1.15rem;
    border: 1px solid rgba(148, 163, 184, 0.3);
    border-radius: 999px;
    color: #e8f1ff !important;
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none !important;
  }

  .thesis-btn.primary {
    border-color: transparent;
    background: linear-gradient(135deg, #2563eb, #0891b2);
  }

  .thesis-btn:hover { border-color: rgba(147, 197, 253, 0.6); }

  @media (max-width: 860px) {
    .thesis-groups, .thesis-endpoints { grid-template-columns: 1fr; }
  }

  @media (max-width: 640px) {
    .thesis-hero { padding: 1.4rem 1.2rem; }
    .thesis-section { padding: 1.2rem 1.1rem; }
    .thesis-paper { grid-template-columns: 1fr; }
  }
</style>

<div class="thesis">

  <section class="thesis-hero">
    <span class="thesis-eyebrow">Doctoral research</span>
    <h1>Does vaping change how the male body makes testosterone?</h1>
    <p>Millions of people vape. Very little is known about what the aerosol does to sexual and hormonal function. My thesis takes that question to people rather than to a model: it compares cigarette smokers, e-cigarette users and dual users, and asks whether their exposure tracks with the molecular systems that govern testosterone production.</p>
    <span class="thesis-status">Data collection and analysis in progress</span>
  </section>

  <section class="thesis-section">
    <h2>Three groups, one comparison</h2>
    <p class="thesis-lede">Most vaping research compares users against non-users. The more informative comparison is between the exposures themselves, because dual users carry both.</p>
    <div class="thesis-groups">
      <div class="thesis-group" style="--g:#f87171"><strong>Cigarette smokers</strong><span>The exposure we already have decades of evidence for.</span></div>
      <div class="thesis-group" style="--g:#67e8f9"><strong>E-cigarette users</strong><span>A different aerosol: metals, carbonyls, particles, no combustion.</span></div>
      <div class="thesis-group" style="--g:#a78bfa"><strong>Dual users</strong><span>The most common real-world pattern, and the least studied.</span></div>
    </div>
  </section>

  <section class="thesis-section">
    <h2>What I measure</h2>
    <p class="thesis-lede">Each endpoint is chosen because a mechanism predicts it, not because it is convenient to collect.</p>
    <div class="thesis-endpoints">
      <article class="thesis-endpoint">
        <b>01</b>
        <div>
          <h3>Testosterone signaling</h3>
          <p>Hormonal profile, and whether exposure tracks with the steroidogenic pathway rather than with smoking status alone.</p>
        </div>
      </article>
      <article class="thesis-endpoint">
        <b>02</b>
        <div>
          <h3>Testosterone-related microRNAs</h3>
          <p>Circulating microRNAs that regulate steroidogenic transcripts, as a readout upstream of the hormone itself.</p>
        </div>
      </article>
      <article class="thesis-endpoint">
        <b>03</b>
        <div>
          <h3>Mitochondrial function</h3>
          <p>Steroidogenesis begins in the mitochondrion. If energy handling shifts, hormone synthesis has a route to follow it.</p>
        </div>
      </article>
      <article class="thesis-endpoint">
        <b>04</b>
        <div>
          <h3>Blood cell and redox changes</h3>
          <p>Haematological and oxidative markers, to place any hormonal signal in its systemic context.</p>
        </div>
      </article>
      <article class="thesis-endpoint">
        <b>05</b>
        <div>
          <h3>Sexual desire and dependence</h3>
          <p>The human endpoint. Comparative data across smokers, vapers and dual users, presented at the ISAM regional meeting.</p>
        </div>
      </article>
      <article class="thesis-endpoint">
        <b>06</b>
        <div>
          <h3>Exposure characterization</h3>
          <p>What is actually inhaled, so that device and pattern are variables rather than assumptions.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="thesis-section">
    <h2>The groundwork, already published</h2>
    <p class="thesis-lede">Before measuring anything in people, I mapped what each endpoint could plausibly show, and where the existing evidence runs out. These reviews are the mechanistic basis for the design above.</p>
    <div class="thesis-groundwork">
      {%- assign thesis_dois = "10.1016/j.mce.2026.112786|10.1016/j.etap.2026.104994|10.1016/j.tox.2025.154339|10.1002/jat.70382|10.1038/s41443-026-01300-0|10.1007/s10389-026-02740-0" | split: "|" -%}
      {%- for p in site.data.papers -%}
        {%- for d in thesis_dois -%}
          {%- if p.doi == d %}
      <div class="thesis-paper">
        <a href="https://doi.org/{{ p.doi }}">{{ p.title }}</a>
        <em>{{ p.journal }}, {{ p.year }}</em>
      </div>
          {%- endif -%}
        {%- endfor -%}
      {%- endfor %}
    </div>
    <p class="thesis-note"><strong>On results.</strong> The comparative data from this thesis are not published yet, so no findings appear on this page. When they are reported, they will be linked here and on the <a href="{{ '/publications/' | relative_url }}">Publications</a> page.</p>
  </section>

  <div class="thesis-actions">
    <a class="thesis-btn primary" href="{{ '/publications/' | relative_url }}">All publications</a>
    <a class="thesis-btn" href="{{ '/cellular-signaling-circuits/' | relative_url }}">The circuit framework</a>
    <a class="thesis-btn" href="{{ '/contact/' | relative_url }}">Get in touch</a>
  </div>

</div>
