---
layout: page
title: About
permalink: /
nav: false
nav_order: 1
description: Toxicology researcher studying how e-cigarette aerosol affects male reproductive health
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

  .home-intro .home-record {
    margin-top: 0.8rem !important;
    padding-top: 0.8rem;
    border-top: 1px solid rgba(148, 163, 184, 0.18);
    font-size: 1rem;
  }

  .home-intro .home-record strong {
    color: var(--text-strong);
    font-weight: 600;
  }

  /* ---------- The two research tracks ---------- */
  .home-tracks {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
    margin-top: 1.3rem;
  }

  .home-track {
    display: flex;
    flex-direction: column;
    padding: 1.1rem 1.2rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-top: 3px solid var(--t);
    border-radius: 14px;
    background: rgba(7, 9, 14, 0.42);
  }

  .track-doctoral { --t: #fbbf24; }
  .track-circuits { --t: #67e8f9; }

  .track-tag {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--t);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .home-track h3 {
    margin: 0 0 0.35rem;
    color: #eef4ff;
    font-size: 1.12rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .home-track > p {
    margin: 0 0 0.8rem !important;
    color: #aab1be;
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .track-keys {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }

  .track-keys span {
    padding: 0.28rem 0.6rem;
    border: 1px solid color-mix(in srgb, var(--t) 38%, rgba(148, 163, 184, 0.2));
    border-radius: 999px;
    background: color-mix(in srgb, var(--t) 10%, transparent);
    color: #dbe3ee;
    font-size: 0.8rem;
    line-height: 1.35;
  }

  .track-link {
    margin-top: auto;
    align-self: flex-start;
    color: var(--t) !important;
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none !important;
  }

  .track-link:hover { text-decoration: underline !important; }

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

  /* ---------- Animated six-stage circuit ---------- */
  .circuit-track {
    position: relative;
    height: 3px;
    margin: 0 0.3rem 1.1rem;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.16);
    overflow: hidden;
  }

  .circuit-track-fill {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    border-radius: 3px;
    background: linear-gradient(90deg, #f87171, #22d3ee, #a78bfa, #f472b6, #34d399, #86efac);
    animation: circuitFill 7.2s linear infinite;
  }

  @keyframes circuitFill {
    0% { width: 0; }
    90% { width: 100%; }
    100% { width: 100%; }
  }

  .circuit-anim .circuit-node {
    animation: circuitStage 7.2s linear infinite;
    animation-delay: calc(var(--i) * 1.2s);
    will-change: transform, box-shadow;
  }

  .circuit-anim .circuit-num {
    animation: circuitNum 7.2s linear infinite;
    animation-delay: calc(var(--i) * 1.2s);
  }

  @keyframes circuitStage {
    0%, 24%, 100% {
      transform: translateY(0);
      border-color: rgba(148, 163, 184, 0.22);
      box-shadow: none;
    }
    8%, 16% {
      transform: translateY(-4px);
      border-color: var(--c);
      box-shadow: 0 0 0 1px var(--c), 0 14px 30px rgba(2, 6, 15, 0.45);
    }
  }

  @keyframes circuitNum {
    0%, 24%, 100% {
      color: #93c5fd;
      background: transparent;
      border-color: rgba(148, 163, 184, 0.3);
    }
    8%, 16% {
      color: #0b1220;
      background: var(--c);
      border-color: var(--c);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .circuit-anim .circuit-node,
    .circuit-anim .circuit-num,
    .circuit-track-fill {
      animation: none;
    }
    .circuit-track-fill { width: 100%; }
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


    .home-pair {
      grid-template-columns: 1fr;
    }

    .home-tracks {
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
        <p><strong>Independent researcher</strong></p>
        <p>Toxicology and molecular biology</p>
        <p>Petaling Jaya, Selangor, Malaysia</p>
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
    <span class="home-label">Toxicology · Molecular Biology</span>
    <h2>I study how cells handle chemical stress, and what happens when they cannot.</h2>
    <p>That question runs in two directions. In the lab, whether vaping disturbs the systems that make testosterone, followed from what is actually inhaled down to Leydig cells, mitochondria and the microRNAs that regulate steroidogenesis. On paper, how signaling pathways end a response and recover from it, and why failing to resolve stress may matter more than switching on.</p>
    <p class="home-record">Most of what I have published, I wrote because the question was sitting there unanswered, not because a project required it.</p>
    <div class="home-tracks">
      <article class="home-track track-doctoral">
        <span class="track-tag">Doctoral research</span>
        <h3>Vaping and male reproductive health</h3>
        <p>Comparing smokers, vapers and dual users to investigate exposure patterns and reproductive health.</p>
        <div class="track-keys" aria-label="Doctoral research keywords">
          <span>E-cigarette aerosol</span>
          <span>Leydig cells &amp; testosterone</span>
          <span>Mitochondrial dysfunction</span>
          <span>microRNA regulation</span>
          <span>Sexual health</span>
        </div>
        <a class="track-link" href="/research/e-cigarettes-male-reproductive-health/">Open the doctoral study <span aria-hidden="true">→</span></a>
      </article>

      <article class="home-track track-circuits">
        <span class="track-tag">Independent framework</span>
        <h3>Cellular signaling circuits</h3>
        <p>Five papers treating pathways as control systems that must also resolve, not switches.</p>
        <div class="track-keys" aria-label="Cellular circuits keywords">
          <span>Signal resolution</span>
          <span>UPR &amp; ER stress</span>
          <span>NRF2–KEAP1</span>
          <span>YAP/TAZ</span>
          <span>CYP1A1</span>
          <span>Condensates</span>
        </div>
        <a class="track-link" href="/cellular-signaling-circuits/">Open Cellular Circuits <span aria-hidden="true">→</span></a>
      </article>
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

    {% include depth3d/upr-explorer.html %}

    <div class="circuit circuit-anim" role="img" aria-label="Animated six-stage proteotoxic stress-resolution circuit: 1 proteotoxic input, 2 ER stress sensing, 3 branch signaling, 4 immune decoding, 5 active resolution, 6 baseline restoration.">
      <p class="circuit-caption" aria-hidden="true">Proteotoxic stress-resolution circuit · six stages</p>
      <div class="circuit-track" aria-hidden="true"><span class="circuit-track-fill"></span></div>
      <div class="circuit-flow">
        <div class="circuit-node" style="--i:0;--c:#f87171"><span class="circuit-num">01</span><strong>Proteotoxic input</strong></div>
        <div class="circuit-node" style="--i:1;--c:#22d3ee"><span class="circuit-num">02</span><strong>ER stress sensing</strong></div>
        <div class="circuit-node" style="--i:2;--c:#a78bfa"><span class="circuit-num">03</span><strong>Branch signaling</strong></div>
        <div class="circuit-node" style="--i:3;--c:#f472b6"><span class="circuit-num">04</span><strong>Immune decoding</strong></div>
        <div class="circuit-node" style="--i:4;--c:#34d399"><span class="circuit-num">05</span><strong>Active resolution</strong></div>
        <div class="circuit-node" style="--i:5;--c:#86efac"><span class="circuit-num">06</span><strong>Baseline restoration</strong></div>
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

  <div class="home-pair">
    <section class="home-card">
      <span class="home-label">Projects</span>
      <h3>Both tracks, side by side</h3>
      <p>The doctoral study and the circuit framework, with the questions each one is built to answer.</p>
      <div class="card-links">
        <a class="btn-primary" href="/projects/">Open Projects</a>
        <a class="btn-secondary" href="/publications/">Publications</a>
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
  })();
</script>

{% include depth3d/home.liquid %}
