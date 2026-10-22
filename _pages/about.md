---
layout: page
title: About
permalink: /
nav: false
nav_order: 1
description: Doctoral Researcher · Toxicology · Scientific Evidence
---

<style>
  /* The theme's page heading is replaced by the custom title below. */
  .post-header {
    display: none !important;
  }

  .home {
    --card: #121a29;
    --card-line: rgba(148, 163, 184, 0.22);
    --label: #93c5fd;
    --soft: #b7bec9;
  }

  .home p {
    margin: 0;
  }

  .home-title {
    margin: 0 0 1.25rem !important;
    color: var(--text-strong);
    font-size: clamp(2rem, 4vw, 2.6rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .home-card {
    margin: 0 0 1.5rem;
    padding: 1.4rem 1.5rem;
    border: 1px solid var(--card-line);
    border-radius: 18px;
    background: var(--card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
  }

  .home-label {
    display: block;
    margin-bottom: 0.4rem;
    color: var(--label);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  /* ---------- Profile ---------- */
  .profile-card {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 1.6rem;
    align-items: stretch;
  }

  .profile-photo {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 240px;
    object-fit: cover;
    object-position: 50% 22%;
    border: 2px solid rgba(148, 163, 184, 0.45);
    border-radius: 18px;
    -webkit-user-drag: none;
    user-select: none;
  }

  .profile-body {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    min-width: 0;
  }

  .profile-affiliation p {
    color: var(--text);
    font-size: 1.02rem;
    line-height: 1.55;
  }

  .profile-affiliation strong {
    color: var(--text-strong);
    font-weight: 600;
  }

  .profile-ids {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 1.4rem;
    padding: 0.75rem 0;
    border-top: 1px solid rgba(148, 163, 184, 0.22);
    border-bottom: 1px solid rgba(148, 163, 184, 0.22);
    color: var(--soft);
    font-size: 0.95rem;
  }

  .profile-ids b {
    color: var(--text-strong);
    font-weight: 600;
  }

  .profile-ids a {
    color: var(--accent) !important;
  }

  .profile-links {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.6rem;
    margin-top: auto;
  }

  .profile-links a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 46px;
    padding: 0.55rem 0.8rem;
    border: 1px solid rgba(148, 163, 184, 0.28);
    border-radius: 12px;
    background: rgba(23, 32, 50, 0.55);
    color: var(--text-strong) !important;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.2;
    text-decoration: none !important;
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }

  .profile-links a:hover {
    border-color: rgba(148, 163, 184, 0.7);
    background: rgba(37, 99, 235, 0.28);
  }

  .profile-links i {
    flex: 0 0 1.4rem;
    color: var(--accent);
    font-size: 1.25rem;
    text-align: center;
  }

  /* ---------- Intro ---------- */
  .home-intro h2 {
    max-width: 860px;
    margin: 0.2rem 0 0.7rem;
    color: var(--text-strong);
    font-size: clamp(1.75rem, 3.6vw, 2.6rem);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.03em;
    text-wrap: balance;
  }

  .home-intro p {
    max-width: 760px;
    color: var(--soft);
    font-size: 1.08rem;
    line-height: 1.6;
  }

  /* ---------- Highlighted study ---------- */
  .study {
    position: relative;
    padding: 0;
    overflow: hidden;
  }

  .study::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #93c5fd, #2563eb);
  }

  .study-head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    align-items: start;
    padding: 1.4rem 1.5rem 0.9rem;
  }

  .study-head h2 {
    margin: 0;
    color: var(--text-strong);
    font-size: clamp(1.4rem, 2.8vw, 1.9rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .study-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.45rem;
    max-width: 380px;
  }

  .study-meta span,
  .study-meta a {
    display: inline-flex;
    align-items: center;
    min-height: 30px;
    padding: 0.25rem 0.65rem;
    border: 1px solid rgba(148, 163, 184, 0.25);
    border-radius: 999px;
    background: rgba(23, 32, 50, 0.5);
    color: var(--soft) !important;
    font-size: 0.82rem;
    font-weight: 500;
    text-decoration: none !important;
  }

  .study-meta a:hover {
    border-color: rgba(148, 163, 184, 0.6);
    color: #fff !important;
  }

  .study-intro {
    padding: 0 1.5rem 1.1rem;
    color: var(--soft);
    font-size: 1rem;
    line-height: 1.6;
  }

  .circuit {
    margin: 0 1.1rem;
    padding: 1rem;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 14px;
    background: rgba(7, 9, 14, 0.45);
  }

  .circuit-caption {
    margin-bottom: 0.8rem !important;
    color: var(--label);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .circuit-flow {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0.6rem;
  }

  .circuit-node {
    position: relative;
    padding: 0.75rem 0.7rem;
    border: 1px solid rgba(148, 163, 184, 0.22);
    border-radius: 11px;
    background: linear-gradient(160deg, rgba(27, 38, 60, 0.75), rgba(13, 18, 28, 0.9));
  }

  .circuit-node::after {
    content: "→";
    position: absolute;
    top: 50%;
    right: -0.62rem;
    z-index: 2;
    color: #93c5fd;
    font-size: 0.85rem;
    transform: translateY(-50%);
  }

  .circuit-node:last-child::after {
    display: none;
  }

  .circuit-num {
    display: inline-grid;
    place-items: center;
    width: 26px;
    height: 26px;
    margin-bottom: 0.45rem;
    border: 1px solid rgba(148, 163, 184, 0.3);
    border-radius: 8px;
    color: #93c5fd;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .circuit-node strong {
    display: block;
    color: #eef4ff;
    font-size: 0.92rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .circuit-node small {
    display: block;
    margin-top: 0.3rem;
    color: #aab1be;
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .circuit-pair {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem;
    margin-top: 0.7rem;
  }

  .circuit-box {
    padding: 0.8rem 0.9rem;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 11px;
    background: rgba(23, 32, 50, 0.35);
  }

  .circuit-box .home-label {
    margin-bottom: 0.2rem;
  }

  .circuit-box strong {
    display: block;
    color: #eef4ff;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.35;
  }

  .circuit-box p {
    margin-top: 0.3rem !important;
    color: #aab1be;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .circuit-box.is-good {
    border-color: rgba(74, 222, 128, 0.3);
    background: linear-gradient(145deg, rgba(20, 76, 60, 0.3), rgba(23, 32, 50, 0.35));
  }

  .circuit-box.is-good .home-label {
    color: #86efac;
  }

  .circuit-box.is-bad {
    border-color: rgba(248, 113, 113, 0.3);
    background: linear-gradient(145deg, rgba(94, 32, 46, 0.3), rgba(23, 32, 50, 0.35));
  }

  .circuit-box.is-bad .home-label {
    color: #fca5a5;
  }

  .circuit-chips {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem;
    margin-top: 0.8rem;
    padding-top: 0.8rem;
    border-top: 1px solid rgba(148, 163, 184, 0.14);
  }

  .circuit-chips b {
    margin-right: 0.2rem;
    color: #fca5a5;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .circuit-chips span {
    padding: 0.3rem 0.6rem;
    border: 1px solid rgba(248, 113, 113, 0.3);
    border-radius: 999px;
    background: rgba(127, 29, 29, 0.18);
    color: #fecaca;
    font-size: 0.8rem;
  }

  .study-test {
    margin: 0.8rem 1.1rem 0;
    padding: 0.85rem 0.95rem;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 11px;
    background: rgba(23, 32, 50, 0.3);
  }

  .study-test strong {
    display: block;
    color: #eef4ff;
    font-size: 1rem;
    font-weight: 600;
  }

  .study-test p {
    margin-top: 0.25rem !important;
    color: #aab1be;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .study-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.75rem 1.25rem;
    padding: 1.4rem 1.5rem 1.5rem;
  }

  .btn-primary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 48px;
    padding: 0.7rem 1.3rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none !important;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .btn-primary {
    border: 1px solid rgba(148, 163, 184, 0.6);
    background: #2563eb;
    color: #fff !important;
  }

  .btn-primary:hover {
    background: #3b82f6;
  }

  .btn-secondary {
    border: 1px solid rgba(148, 163, 184, 0.35);
    background: rgba(148, 163, 184, 0.06);
    color: #e5e7eb !important;
  }

  .btn-secondary:hover {
    border-color: rgba(148, 163, 184, 0.7);
  }

  /* ---------- Explore my work ---------- */
  .explore-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.9rem;
  }

  .explore-head .home-label {
    margin: 0;
  }

  .explore-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .explore-tab {
    appearance: none;
    min-height: 42px;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(148, 163, 184, 0.3);
    border-radius: 999px;
    background: rgba(23, 32, 50, 0.35);
    color: #bfc4ce;
    font: inherit;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  .explore-tab:hover {
    border-color: rgba(96, 165, 250, 0.6);
    color: #fff;
  }

  .explore-tab[aria-selected="true"] {
    border-color: rgba(148, 163, 184, 0.7);
    background: #2563eb;
    color: #fff;
  }

  .explore-tab:focus-visible {
    outline: 2px solid #bfdbfe;
    outline-offset: 3px;
  }

  .explore-panel {
    padding: 1.2rem;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 14px;
    background: rgba(13, 18, 28, 0.55);
  }

  .explore-panel[hidden] {
    display: none;
  }

  .explore-panel h3 {
    margin: 0 0 0.4rem;
    color: var(--text-strong);
    font-size: 1.3rem;
    font-weight: 600;
  }

  .explore-panel > p {
    max-width: 780px;
    color: var(--soft);
    font-size: 1rem;
    line-height: 1.6;
  }

  .explore-steps {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.6rem;
    margin: 1rem 0;
    padding: 0;
    list-style: none;
    counter-reset: step;
  }

  .explore-steps li {
    position: relative;
    padding: 0.75rem 0.8rem 0.75rem 2.9rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 11px;
    background: rgba(23, 32, 50, 0.4);
    counter-increment: step;
  }

  .explore-steps li::before {
    content: counter(step, decimal-leading-zero);
    position: absolute;
    left: 0.75rem;
    top: 0.8rem;
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid rgba(148, 163, 184, 0.35);
    border-radius: 50%;
    color: #93c5fd;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .explore-steps strong {
    display: block;
    color: #eef4ff;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .explore-steps span {
    display: block;
    margin-top: 0.15rem;
    color: #aab1be;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .explore-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.6rem;
  }

  .explore-card {
    padding: 0.85rem 0.95rem;
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 11px;
    background: rgba(23, 32, 50, 0.3);
  }

  .explore-card .home-label {
    margin-bottom: 0.2rem;
  }

  .explore-card strong {
    display: block;
    color: #eef4ff;
    font-size: 0.98rem;
    font-weight: 600;
  }

  .explore-card p {
    margin-top: 0.25rem !important;
    color: #aab1be;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* ---------- Framework + support ---------- */
  .home-pair {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .home-pair .home-card {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .home-pair h3 {
    margin: 0 0 0.45rem;
    color: var(--text-strong);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .home-pair p {
    color: var(--soft);
    font-size: 1rem;
    line-height: 1.6;
  }

  .home-pair .card-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: auto;
    padding-top: 1rem;
  }

  .home-pair .btn-primary,
  .home-pair .btn-secondary {
    min-height: 44px;
    font-size: 0.95rem;
  }

  /* ---------- Focus chips ---------- */
  .focus-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .focus-list span {
    padding: 0.4rem 0.75rem;
    border: 1px solid rgba(148, 163, 184, 0.28);
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.07);
    color: var(--text);
    font-size: 0.95rem;
  }

  /* ---------- News ---------- */
  .news h2 {
    margin: 0 0 0.9rem;
    color: var(--text-strong);
    font-size: 1.35rem;
    font-weight: 700;
  }

  .news-list {
    margin: 0;
    padding: 0 0 0 1.1rem;
    border-left: 2px solid rgba(148, 163, 184, 0.25);
    list-style: none;
  }

  .news-list li {
    position: relative;
    display: grid;
    grid-template-columns: 5.6rem minmax(0, 1fr);
    gap: 1rem;
    margin-bottom: 0.85rem;
    line-height: 1.55;
  }

  .news-list li::before {
    content: "";
    position: absolute;
    top: 0.45rem;
    left: calc(-1.1rem - 6px);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #2563eb;
  }

  .news-date {
    color: var(--text-strong);
    font-weight: 600;
    white-space: nowrap;
  }

  .news-text a {
    color: var(--accent) !important;
  }

  /* ---------- Contact line ---------- */
  .home-contact {
    margin-top: 2.5rem;
    text-align: center;
  }

  .home-contact .contact-icons {
    display: flex;
    justify-content: center;
    gap: 1.1rem;
    font-size: 0 !important;
  }

  .home-contact .contact-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    font-size: 1.4rem !important;
  }

  .home-contact .contact-icons i,
  .home-contact .contact-icons svg {
    font-size: 1.4rem !important;
  }

  .home-contact p {
    margin-top: 0.5rem !important;
    color: var(--muted);
    font-size: 0.95rem;
    text-align: center !important;
  }

  .home-contact p a {
    color: var(--accent) !important;
  }

  /* ---------- Responsive ---------- */
  @media (max-width: 991.98px) {
    .circuit-flow {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .circuit-node:nth-child(3)::after {
      display: none;
    }

    .explore-steps {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .home-pair {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 767.98px) {
    .home-card {
      padding: 1.1rem 1rem;
      border-radius: 16px;
    }

    .profile-card {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .profile-photo {
      width: 160px;
      height: 200px;
      min-height: 0;
      margin: 0 auto;
    }

    .profile-links {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .study-head {
      grid-template-columns: 1fr;
      padding: 1.1rem 1rem 0.8rem;
    }

    .study-meta {
      justify-content: flex-start;
      max-width: none;
    }

    .study-intro {
      padding: 0 1rem 1rem;
    }

    .circuit {
      margin: 0 0.75rem;
      padding: 0.8rem;
    }

    .circuit-flow,
    .circuit-pair {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .circuit-pair {
      grid-template-columns: 1fr;
    }

    .circuit-node::after {
      display: none;
    }

    .study-test {
      margin: 0.75rem 0.75rem 0;
    }

    .study-actions {
      flex-direction: column;
      align-items: stretch;
      padding: 1.1rem 0.75rem 1.2rem;
    }

    .explore-panel {
      padding: 1rem 0.85rem;
    }

    .explore-tabs {
      width: 100%;
    }

    .explore-tab {
      flex: 1 1 auto;
    }

    .explore-steps {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 575.98px) {
    .profile-links a {
      padding: 0.5rem 0.65rem;
      font-size: 0.9rem;
    }

    .news-list li {
      grid-template-columns: 1fr;
      gap: 0.1rem;
    }
  }
</style>

<div class="home">
  <h1 class="home-title">Ardie Barry Sailis</h1>

  <section class="home-card profile-card" aria-label="Profile">
    <img class="profile-photo" src="/assets/img/ardie-profile.jpg" alt="Ardie Barry Sailis" width="900" height="1132" loading="eager" decoding="async" fetchpriority="high" draggable="false">

    <div class="profile-body">
      <div class="profile-affiliation">
        <p><strong>Department of Pharmaceutical Life Sciences</strong></p>
        <p>Faculty of Pharmacy, Universiti Malaya</p>
        <p>Kuala Lumpur, Malaysia</p>
      </div>

      <p class="profile-ids">
        <span><b>ORCID</b> <a href="https://orcid.org/0009-0009-8994-2793">0009-0009-8994-2793</a></span>
        <span><b>Scopus ID</b> 60192026900</span>
      </p>

      <nav class="profile-links" aria-label="Research profiles">
        <a href="https://scholar.google.com/citations?user=saKP688AAAAJ&amp;hl=en"><i class="ai ai-google-scholar" aria-hidden="true"></i>Google Scholar</a>
        <a href="https://www.researchgate.net/profile/Ardie-Sailis"><i class="ai ai-researchgate" aria-hidden="true"></i>ResearchGate</a>
        <a href="https://www.linkedin.com/in/ardiebarrysailis"><i class="fa-brands fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
        <a href="https://communities.springernature.com/users/ardie-barry-sailis"><i class="ai ai-springer" aria-hidden="true"></i>Springer Nature</a>
        <a href="https://www.growkudos.com/profile/ardie_barry_sailis"><i class="fa-solid fa-asterisk" aria-hidden="true"></i>Kudos</a>
        <a href="https://theconversation.com/profiles/ardie-barry-sailis-2713182/news"><i class="ai ai-conversation" aria-hidden="true"></i>The Conversation</a>
      </nav>
    </div>
  </section>

  <section class="home-card home-intro">
    <span class="home-label">Pharmaceutical Sciences · Toxicology</span>
    <h2>Researcher. Scientific writer. Evidence&#8209;focused problem solver.</h2>
    <p>I study how inhaled toxicants, especially e-cigarette aerosol, affect male reproductive health and the molecular mechanisms behind it.</p>
    <div class="focus-list" aria-label="Research focus">
      <span>E-cigarette toxicology</span>
      <span>Reproductive toxicology</span>
      <span>Endocrine disruption</span>
      <span>Mitochondrial dysfunction</span>
      <span>microRNA regulation</span>
      <span>Mechanotransduction</span>
      <span>YAP/TAZ signaling</span>
      <span>Evidence synthesis</span>
    </div>
  </section>

{%- assign highlight = site.data.papers | where_exp: "p", "p.highlight" | first -%}
{%- if highlight %}
  <figure class="home-card study" aria-labelledby="study-title">
    <div class="study-head">
      <div>
        <span class="home-label">Highlighted study</span>
        <h2 id="study-title">{{ highlight.short }}</h2>
      </div>
      <div class="study-meta">
        <span>{{ highlight.published | date: "%B %Y" }}</span>
        <span><em>{{ highlight.journal }}</em></span>
        <a href="https://doi.org/{{ highlight.doi }}">DOI ↗</a>
      </div>
    </div>

    <p class="study-intro">{{ highlight.highlight }}</p>

    <div class="upr-fig" id="upr-figure-stage" role="img" aria-label="Interactive conceptual 3D immune cell showing the nucleus, the endoplasmic reticulum with its IRE1α, PERK and ATF6 sensors, mitochondria, and toxicant particles entering the cell.">
      <noscript><p class="upr-fig-status">The interactive 3D cell needs JavaScript. The circuit is summarized below.</p></noscript>
    </div>
    <p class="upr-fig-caption">A conceptual 3D immune cell: the nucleus, the endoplasmic reticulum with its IRE1α, PERK and ATF6 sensors, mitochondria and incoming toxicant particles. Drag the background to move the cell, drag the cell to orbit around it, and scroll to zoom. Illustration, not measured data. A simplified 2D circuit follows.</p>

    <div class="circuit" role="img" aria-label="Figure 1. The UPR branch-selective proteotoxic stress-resolution circuit">
      <p class="circuit-caption" aria-hidden="true">Simplified 2D view · Proteotoxic stress-resolution circuit</p>
      <div class="circuit-flow">
        <div class="circuit-node"><span class="circuit-num">01</span><strong>Proteotoxic input</strong><small>Toxicant perturbs ER proteostasis</small></div>
        <div class="circuit-node"><span class="circuit-num">02</span><strong>ER stress sensing</strong><small>IRE1α, PERK and ATF6 detect the stress</small></div>
        <div class="circuit-node"><span class="circuit-num">03</span><strong>Branch signaling</strong><small>XBP1s/RIDD, eIF2α-ATF4-CHOP, N-ATF6</small></div>
        <div class="circuit-node"><span class="circuit-num">04</span><strong>Immune decoding</strong><small>Cytokines, antigen presentation, polarization, secretion</small></div>
        <div class="circuit-node"><span class="circuit-num">05</span><strong>Active resolution</strong><small>ERAD, autophagy, ER-phagy, Ca²⁺ and redox</small></div>
        <div class="circuit-node"><span class="circuit-num">06</span><strong>Baseline restoration</strong><small>Immune function returns toward baseline</small></div>
      </div>

      <div class="circuit-pair">
        <div class="circuit-box">
          <span class="home-label">Branch decoding</span>
          <strong>Activation alone is not the outcome</strong>
          <p>Meaning depends on which of IRE1α, PERK and ATF6 is engaged, for how long, and in which cell type.</p>
        </div>
        <div class="circuit-box">
          <span class="home-label">Resolution logic</span>
          <strong>Resolution is an active program</strong>
          <p>ERAD, autophagy, ER-phagy, translational recovery and Ca²⁺/redox normalization actively terminate the signal.</p>
        </div>
      </div>

      <div class="circuit-pair">
        <div class="circuit-box is-good">
          <span class="home-label">Adaptive resolution</span>
          <strong>Transient signaling → restored proteostasis → immune function returns</strong>
          <p>The stress is decoded, cleared and ER proteostasis recovers before the next exposure.</p>
        </div>
        <div class="circuit-box is-bad">
          <span class="home-label">Failed resolution</span>
          <strong>Persistent branch-skewed signaling → unresolved burden → immune dysfunction</strong>
          <p>Incomplete recovery between exposures can reset immune and barrier cells without overt cytotoxicity.</p>
        </div>
      </div>

      <div class="circuit-chips">
        <b>Failure modes</b>
        <span>Sensor overload</span>
        <span>Branch imbalance</span>
        <span>RIDD dysfunction</span>
        <span>Prolonged PERK-ISR</span>
        <span>Secretory collapse</span>
        <span>Incomplete recovery</span>
      </div>
    </div>

    <div class="study-test">
      <span class="home-label">Testable prediction</span>
      <strong>Measure the system after the exposure, not only during it.</strong>
      <p>Report recovery kinetics, branch-specific signaling and functional immune output, so incomplete recovery rather than peak activation becomes the variable.</p>
    </div>

    <div class="study-actions">
      <a class="btn-primary" href="/research/upr-proteotoxic-stress-resolution/">Explore the interactive circuit <span aria-hidden="true">↗</span></a>
      <a class="btn-secondary" href="/publications/">All publications</a>
    </div>
  </figure>
{%- endif %}

  <section class="home-card explore" aria-label="Explore my work">
    <div class="explore-head">
      <span class="home-label">Explore my work</span>
      <div class="explore-tabs" role="tablist" aria-label="Research areas">
        <button class="explore-tab" id="tab-toxicology" type="button" role="tab" aria-selected="true" aria-controls="panel-toxicology">Toxicology</button>
        <button class="explore-tab" id="tab-mechanisms" type="button" role="tab" aria-selected="false" aria-controls="panel-mechanisms" tabindex="-1">Mechanisms</button>
        <button class="explore-tab" id="tab-evidence" type="button" role="tab" aria-selected="false" aria-controls="panel-evidence" tabindex="-1">Evidence &amp; writing</button>
      </div>
    </div>

    <div class="explore-panel" id="panel-toxicology" role="tabpanel" aria-labelledby="tab-toxicology">
      <span class="home-label">Exposure → response</span>
      <h3>Inhaled toxicants</h3>
      <p>Characterize what is inhaled, set dose and context, trace the biological response, then judge human relevance.</p>
      <ol class="explore-steps">
        <li><strong>Exposure</strong><span>Aerosol, tobacco, route</span></li>
        <li><strong>Dose &amp; context</strong><span>Concentration, timing</span></li>
        <li><strong>Biological response</strong><span>Organ, cell, pathway</span></li>
        <li><strong>Human relevance</strong><span>Risk, uncertainty</span></li>
      </ol>
      <div class="explore-cards">
        <div class="explore-card"><span class="home-label">Questions</span><strong>What is inhaled?</strong><p>Which constituents, particles and doses are plausible.</p></div>
        <div class="explore-card"><span class="home-label">Evidence</span><strong>What changes?</strong><p>Respiratory, reproductive, metabolic and systemic endpoints.</p></div>
        <div class="explore-card"><span class="home-label">Decision</span><strong>What can be concluded?</strong><p>Plausibility, mechanism and proven human effects, kept apart.</p></div>
      </div>
    </div>

    <div class="explore-panel" id="panel-mechanisms" role="tabpanel" aria-labelledby="tab-mechanisms" hidden>
      <span class="home-label">Trigger → network → resolution</span>
      <h3>Molecular mechanisms</h3>
      <p>Follow the causal chain from a trigger through molecular nodes to adaptation, feedback, termination or lasting dysfunction.</p>
      <ol class="explore-steps">
        <li><strong>Trigger</strong><span>Stress, ligand, force</span></li>
        <li><strong>Molecular node</strong><span>Receptor, kinase, factor</span></li>
        <li><strong>Network response</strong><span>Feedback, crosstalk</span></li>
        <li><strong>Resolution</strong><span>Adaptation, persistence</span></li>
      </ol>
      <div class="explore-cards">
        <div class="explore-card"><span class="home-label">Core systems</span><strong>NRF2–KEAP1 · CYP1A1</strong><p>Redox sensing and environmental response.</p></div>
        <div class="explore-card"><span class="home-label">Mechanochemical</span><strong>YAP/TAZ signaling</strong><p>Force, transcription and cell state.</p></div>
        <div class="explore-card"><span class="home-label">Temporal control</span><strong>Condensates · microRNA</strong><p>Signal timing and kinetic filtering.</p></div>
      </div>
    </div>

    <div class="explore-panel" id="panel-evidence" role="tabpanel" aria-labelledby="tab-evidence" hidden>
      <span class="home-label">Question → audit → synthesis</span>
      <h3>Evidence &amp; scientific communication</h3>
      <p>Turn a broad question into an auditable chain: find the literature, test its quality, map claims to evidence and state the conclusion precisely.</p>
      <ol class="explore-steps">
        <li><strong>Question</strong><span>Scope the claim</span></li>
        <li><strong>Retrieve</strong><span>Find the evidence</span></li>
        <li><strong>Appraise</strong><span>Quality, bias</span></li>
        <li><strong>Synthesize</strong><span>Claim and uncertainty</span></li>
      </ol>
      <div class="explore-cards">
        <div class="explore-card"><span class="home-label">Audit</span><strong>Claim → source → support</strong><p>Trace each statement to evidence that actually supports it.</p></div>
        <div class="explore-card"><span class="home-label">Writing</span><strong>Precision over volume</strong><p>Show methods, limits, effect direction and uncertainty.</p></div>
      </div>
    </div>
  </section>

  <div class="home-pair">
    <section class="home-card">
      <span class="home-label">Independent framework</span>
      <h3>Cellular Signaling as Dynamic Regulatory Circuits</h3>
      <p>Five connected papers model YAP/TAZ, NRF2–KEAP1, CYP1A1, transcriptional condensates and the unfolded protein response as dynamic control systems, not simple switches.</p>
      <div class="card-links">
        <a class="btn-primary" href="/cellular-signaling-circuits/">Explore the framework</a>
        <a class="btn-secondary" href="/projects/">Projects</a>
      </div>
    </section>

    <section class="home-card">
      <span class="home-label">Support</span>
      <h3>Find this work useful?</h3>
      <p>Help keep my independent research and open projects going.</p>
      <div class="card-links">
        <a class="btn-primary" href="https://buymeacoffee.com/ardiebarrysailis" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">☕</span> Buy Me a Coffee</a>
      </div>
    </section>
  </div>

{%- capture news_rows -%}
  {%- for item in site.data.news -%}
    {{ item.date | date: "%Y-%m-%d" }}~~{{ item.date | date: "%b %Y" }}~~{{ item.text }}~~{{ item.link }}@@
  {%- endfor -%}
  {%- for p in site.data.papers -%}
    {%- if p.news -%}
      {%- assign news_line = p.news -%}
    {%- else -%}
      {%- capture news_line -%}New paper in {{ p.journal }}: {{ p.title }}{%- endcapture -%}
    {%- endif -%}
    {{ p.published | date: "%Y-%m-%d" }}~~{{ p.published | date: "%b %Y" }}~~{{ news_line }}~~https://doi.org/{{ p.doi }}@@
  {%- endfor -%}
{%- endcapture -%}
{%- assign news_items = news_rows | split: "@@" | sort | reverse %}

  <section class="news">
    <h2>Latest News</h2>
    <ul class="news-list">
      {%- assign news_shown = 0 -%}
      {%- for row in news_items -%}
        {%- assign parts = row | strip | split: "~~" -%}
        {%- if parts.size > 2 and news_shown < 5 -%}
          {%- assign news_shown = news_shown | plus: 1 %}
      <li>
        <span class="news-date">{{ parts[1] }}</span>
        <span class="news-text">{% if parts[3] != blank %}<a href="{{ parts[3] }}">{{ parts[2] }}</a>{% else %}{{ parts[2] }}{% endif %}</span>
      </li>
        {%- endif -%}
      {%- endfor %}
    </ul>
  </section>

  <div class="home-contact">
    <div class="contact-icons">{% social_links %}</div>
    <p>For academic correspondence, use the <a href="/contact/">Contact page</a>. Updated {{ site.time | date: "%-d %B %Y" }}.</p>
  </div>
</div>

<script>
  (function () {
    var photo = document.querySelector('.profile-photo');
    if (photo) {
      photo.addEventListener('contextmenu', function (event) { event.preventDefault(); });
    }

    var tabs = Array.prototype.slice.call(document.querySelectorAll('.explore-tab'));

    function select(tab, focus) {
      tabs.forEach(function (item) {
        var active = item === tab;
        item.setAttribute('aria-selected', active ? 'true' : 'false');
        item.setAttribute('tabindex', active ? '0' : '-1');
        var panel = document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !active;
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (event) {
        var next = null;
        if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
        if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
        if (event.key === 'Home') next = tabs[0];
        if (event.key === 'End') next = tabs[tabs.length - 1];
        if (next) {
          event.preventDefault();
          select(next, true);
        }
      });
    });
  })();
</script>

{% include depth3d/home.liquid %}
