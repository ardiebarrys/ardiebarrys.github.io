---
layout: page
title: About
permalink: /
nav: false
nav_order: 1
description: Doctoral Researcher · Toxicology · Scientific Evidence


selected_papers: false
social: false
---

<style>
  /* About uses a normal page title so the navbar label remains "About". */
  .post-header {
    width: min(1280px, 100%);
    max-width: 1280px !important;
    margin: 0 auto 1.15rem !important;
    box-sizing: border-box;
  }

  .post-header .post-title,
  .post-header .post-description {
    display: none !important;
  }

  .about-page-title {
    margin: 0 0 1.35rem !important;
    padding-bottom: .15rem;
    color: var(--text-strong);
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
    font-weight: 700;
  }


  /* ==========================================================
     ABOUT IDENTITY CARD
     Rendered inside the page body rather than through the theme's
     floating profile component. This prevents layout collisions.
     ========================================================== */
  .about-shell {
    width: min(1280px, 100%);
    margin: 0 auto;
  }

  .about-shell,
  .about-shell > .bio-text,
  .about-shell > .social {
    box-sizing: border-box;
  }

  .post-header,
  .post > article {
    width: min(1100px, 100%);
    max-width: 1280px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    box-sizing: border-box;
  }

  .research-profile {
    position: relative;
    display: grid;
    grid-template-columns:  230px minmax(0, 1fr);
    gap:  1.5rem 1.75rem;
    align-items:  start;
    width: 100%;
    margin: 0 0 1.35rem;
    padding: 1.2rem 1.25rem;
    border: 1px solid rgba(96,165,250,.22);
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
    background:
      radial-gradient(circle at 18% 8%, rgba(96,165,250,.15), transparent 30%),
      radial-gradient(circle at 88% 88%, rgba(37,99,235,.12), transparent 34%),
      linear-gradient(145deg, rgba(15,35,82,.94), rgba(7,20,48,.98));
    box-shadow:
      0 18px 45px rgba(0,0,0,.22),
      inset 0 1px 0 rgba(255,255,255,.06);
  }

  .research-profile::before {
    content: "RESEARCH IDENTITY";
    position: absolute;
    top: .75rem;
    right: 1rem;
    color: rgba(147,197,253,.72);
    font-size: .55rem;
    font-weight: 850;
    letter-spacing: .16em;
  }

  .research-profile::after {
    content: "";
    position: absolute;
    width: 170px;
    height: 170px;
    right: -95px;
    top: 38px;
    border: 1px solid rgba(96,165,250,.12);
    border-radius: 50%;
    pointer-events: none;
  }

  .research-profile-photo {
    position: relative;
    z-index: 2;
    display: block;
    width:  230px;
    height:  230px;
    margin: 0 auto;
    object-fit: cover;
    border-radius:  30px;
    border: 2px solid rgba(147,197,253,.45);
    box-shadow:
      0 14px 32px rgba(0,0,0,.30),
      0 0 0 8px rgba(96,165,250,.055);
  }

  .research-profile-info {
    position: relative;
    z-index: 2;
    min-width: 0;
  }

  .research-profile-info p {
    margin: 0 0 .42rem !important;
    color: var(--text);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important;
    font-size: .96rem !important;
    line-height: 1.45 !important;
    text-align: left !important;
  }

  .research-profile-info p:first-child {
    margin-top: .05rem !important;
  }

  .research-profile-info strong {
    color: #dbeafe !important;
  }

  .research-profile-info a {
    color: var(--accent) !important;
  }

  .research-profile-info hr {
    margin: .78rem 0 !important;
    border-color: rgba(147,197,253,.25) !important;
    opacity: 1;
  }

  .research-links {
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    gap: .5rem;
    margin-top: .55rem;
  }

  .research-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    padding: .4rem .5rem;
    border: 1px solid rgba(147,197,253,.22);
    border-radius: 10px;
    background: rgba(255,255,255,.96);
    box-sizing: border-box;
    transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
  }

  .research-links a:hover {
    transform: translateY(-2px);
    border-color: rgba(96,165,250,.7);
    box-shadow: 0 9px 20px rgba(37,99,235,.16);
  }

  .research-links img {
    display: block;
    width: 82% !important;
    height: 46px !important;
    max-width: 190px !important;
    max-height: 46px !important;
    object-fit: contain;
    transform: scale(1.08);
    transform-origin: center;
  }

  @media (max-width: 767.98px) {
    .about-shell {
      width: 100%;
    }

    .research-profile {
      display: block;
      padding: 1rem .85rem .9rem;
      border-radius: 18px;
    }

    .research-profile-photo {
      width: 175px;
      height: 175px;
      margin: .1rem auto .9rem;
      border-radius: 24px;
    }

    .research-profile-info p {
      text-align: left !important;
      text-align-last: left !important;
    }

    .research-links {
      grid-template-columns: repeat(2, minmax(0,1fr));
    }

    .research-links a {
      height: 52px;
    }
  }

  @media (max-width: 420px) {
    .research-profile-photo {
      width: 158px;
      height: 158px;
    }

    .research-links a {
      height: 50px;
    }
  }
  .post,
  .page,
  .container,
  main {
    max-width: 1100px !important;
  }

  body {
    color: var(--text) !important;
  }

  h1 {
    font-weight: 700 !important;
  }

  .navbar a,
  .navbar .nav-link,
  .navbar-brand {
    color: inherit !important;
  }

  .navbar .nav-link.active,
  .navbar .nav-item.active .nav-link,
  .navbar .nav-link[aria-current="page"] {
    color: var(--global-theme-color) !important;
    font-weight: 700 !important;
  }

  .bio-text a,
  .profile-info a {
    color: var(--accent) !important;
  }

  .profile-info,
  .profile-info p,
  .profile-info a,
  .profile-info strong,
  .profile-info *,
  .profile .profile-info,
  .profile .profile-info *,
  div.profile-info,
  div.profile-info * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif !important;
    font-size: 1rem !important;
    letter-spacing: 0 !important;
    line-height: 1.45 !important;
  }

  .profile-info p {
    margin-bottom: 0.35rem !important;
    text-align: left !important;
    text-align-last: left !important;
  }

  .profile,
  .profile p,
  .profile-info,
  .profile-info p {
    text-align: left !important;
    text-align-last: left !important;
  }

  .profile-logo-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.65rem;
    margin-top: 0.25rem;
  }

  .profile-logo-links a {
    display: flex !important;
    align-items: center;
    justify-content: center;
    min-height: 88px;
    padding: 1rem 1.1rem;
    border: 1px solid var(--line-strong);
    border-radius: 10px;
    background: #ffffff !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
    box-sizing: border-box;
  }

  .profile-logo-links a:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 7px 18px rgba(37, 99, 235, 0.12);
  }

  .profile-logo-links img {
    max-width: 240px;
    max-height: 54px;
    object-fit: contain;
    display: block;
  }

    .research-profile-photo,
  .profile img,
  .profile-logo-links img,
  .profile-info img {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    pointer-events: none;
  }

  .bio-text p {
    text-align: justify !important;
    text-align-last: left !important;
    text-justify: inter-word !important;
    hyphens: auto !important;
  }

  /* Modern about page */
  .about-modern {
    position: relative;
  }

  .about-intro {
    position: relative;
    margin: 0 0 1.35rem;
    padding: 1.7rem 1.8rem 1.65rem;
    border: 1px solid var(--line);
    border-radius: 16px;
    overflow: hidden;
    background:
      radial-gradient(circle at 90% 15%, rgba(37, 99, 235, 0.12), transparent 32%),
      linear-gradient(135deg, var(--surface), var(--surface-strong));
    box-shadow: 0 16px 38px rgba(0,0,0,0.14);
  }

  .about-intro::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    right: -90px;
    bottom: -100px;
    border: 1px solid rgba(96,165,250,0.18);
    border-radius: 50%;
    animation: about-orbit 12s linear infinite;
  }

  .about-eyebrow {
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .about-intro h2 {
    max-width: 850px;
    margin: 0.55rem 0 0.55rem;
    color: var(--text-strong);
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.08;
    letter-spacing: -0.045em;
  }

  .about-intro .about-lead {
    max-width: 760px;
    margin: 0;
    color: var(--muted);
    font-size: 1.02rem;
    line-height: 1.62;
    text-align: left !important;
  }


  .about-stats strong {
    color: var(--text-strong);
    font-size: 1.25rem;
    font-weight: 800;
  }

  .about-stats span {
    margin-top: 0.2rem;
    color: var(--muted);
    font-size: 0.77rem;
    line-height: 1.35;
  }

  .about-explorer {
    margin: 0 0 1.6rem;
    padding: 1.25rem;
    border: 1px solid var(--line);
    border-radius: 15px;
    background: var(--surface);
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  }

  .about-explorer-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.85rem;
  }

  .about-explorer-heading p {
    margin: 0;
    color: var(--muted);
    font-size: 0.8rem;
  }

  .about-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-bottom: 0.8rem;
  }

  /* Focus explorer: restrained active state + interactive research workflow. */
  .about-tab {
    position: relative;
    appearance: none;
    border: 1px solid rgba(96,165,250,.22);
    border-radius: 999px;
    padding: 0.5rem 0.82rem;
    background: rgba(15,35,82,.22);
    color: #a9bfe9;
    font: inherit;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    overflow: hidden;
    isolation: isolate;
    transition:
      transform .22s cubic-bezier(.2,.7,.2,1),
      background-color .22s ease,
      border-color .22s ease,
      color .22s ease,
      box-shadow .22s ease;
  }

  .about-tab::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(100deg, transparent, rgba(147,197,253,.11), transparent);
    transform: translateX(-110%);
    transition: transform .55s ease;
  }

  .about-tab:hover {
    border-color: rgba(96,165,250,.42);
    background: rgba(30,64,125,.42);
    color: #dbeafe;
    transform: translateY(-2px);
  }

  .about-tab:hover::before { transform: translateX(110%); }

  .about-tab.is-active {
    border-color: rgba(96,165,250,.55);
    background: linear-gradient(180deg, rgba(37,99,235,.72), rgba(29,78,216,.62));
    color: #eaf3ff;
    box-shadow:
      0 8px 20px rgba(15,23,42,.22),
      inset 0 1px 0 rgba(255,255,255,.10);
    transform: translateY(-1px);
  }

  .about-tab:focus-visible {
    outline: 2px solid rgba(147,197,253,.72);
    outline-offset: 3px;
  }

  .about-panel-wrap {
    min-height: 360px;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }

  .about-panel {
    position: relative;
    display: block;
    min-height: 330px;
    padding: 1.15rem;
    border: 1px solid rgba(96,165,250,.13);
    border-radius: 12px;
    background:
      radial-gradient(circle at 92% 12%, var(--focus-glow, rgba(37,99,235,.12)), transparent 32%),
      linear-gradient(145deg, rgba(15,35,82,.72), rgba(7,20,48,.86));
    overflow: hidden;
    animation: focus-panel-in .48s cubic-bezier(.2,.7,.2,1) both;
  }

  .about-panel[hidden] { display: none; }

  .about-panel::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .42;
    background-image:
      linear-gradient(rgba(147,197,253,.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(147,197,253,.035) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: linear-gradient(to bottom, black, transparent 92%);
  }

  .about-panel::after {
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    right: -125px;
    bottom: -130px;
    border: 1px solid var(--focus-line, rgba(96,165,250,.14));
    border-radius: 50%;
    animation: focus-orbit 16s linear infinite;
    pointer-events: none;
  }

  .focus-panel-head,
  .focus-panel-body {
    position: relative;
    z-index: 2;
  }

  .focus-panel-head {
    display: grid;
    grid-template-columns: 48px minmax(0,1fr) auto;
    gap: .8rem;
    align-items: center;
    margin-bottom: 1rem;
  }

  .about-panel-icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid var(--focus-line, rgba(96,165,250,.22));
    border-radius: 11px;
    background: var(--focus-chip, rgba(37,99,235,.10));
    color: var(--focus-accent, #93c5fd);
    font-size: .7rem;
    font-weight: 900;
    letter-spacing: .08em;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
  }

  .focus-kicker {
    display: block;
    margin-bottom: .18rem;
    color: var(--focus-accent, #93c5fd);
    font-size: .62rem;
    font-weight: 850;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .about-panel h3 {
    margin: 0;
    color: #e7f0ff;
    font-size: 1.08rem;
    letter-spacing: -.015em;
  }

  .focus-status {
    display: inline-flex;
    align-items: center;
    gap: .38rem;
    padding: .32rem .52rem;
    border: 1px solid var(--focus-line, rgba(96,165,250,.18));
    border-radius: 999px;
    color: #9fb6df;
    font-size: .61rem;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .focus-status::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--focus-accent, #60a5fa);
    box-shadow: 0 0 0 4px var(--focus-chip, rgba(37,99,235,.10));
    animation: focus-status-pulse 2s ease-in-out infinite;
  }

  .focus-intro {
    max-width: 780px;
    margin: 0 0 1rem !important;
    color: #afc1df !important;
    font-size: .86rem !important;
    line-height: 1.55 !important;
    text-align: left !important;
  }

  .focus-workflow {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: .55rem;
    margin: .9rem 0 1rem;
    padding: .85rem;
    border: 1px solid var(--focus-line, rgba(96,165,250,.14));
    border-radius: 11px;
    background: rgba(3,12,30,.24);
    overflow: hidden;
  }

  .focus-workflow::before {
    content: "";
    position: absolute;
    left: 8%;
    right: 8%;
    top: 1.72rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--focus-line, rgba(96,165,250,.24)), transparent);
  }

  .focus-signal {
    position: absolute;
    top: 1.69rem;
    left: 8%;
    width: 22%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--focus-accent, #60a5fa), transparent);
    filter: blur(.15px);
    animation: focus-signal-flow 3.2s ease-in-out infinite;
    pointer-events: none;
  }

  .focus-step {
    position: relative;
    z-index: 2;
    min-width: 0;
    padding: .35rem .25rem .25rem;
    text-align: center;
    opacity: 0;
    transform: translateY(8px);
    animation: focus-step-in .42s ease forwards;
    animation-delay: calc(var(--step-index) * 90ms + 80ms);
  }

  .focus-step-node {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    margin: 0 auto .38rem;
    border: 1px solid var(--focus-line, rgba(96,165,250,.25));
    border-radius: 50%;
    background: rgba(7,20,48,.96);
    color: var(--focus-accent, #93c5fd);
    font-size: .61rem;
    font-weight: 900;
    box-shadow: 0 0 0 5px rgba(37,99,235,.035);
    transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
  }

  .focus-step:hover .focus-step-node {
    transform: scale(1.12);
    background: var(--focus-chip, rgba(37,99,235,.12));
    box-shadow: 0 0 0 7px var(--focus-chip, rgba(37,99,235,.08));
  }

  .focus-step strong {
    display: block;
    color: #dbeafe;
    font-size: .72rem;
    line-height: 1.25;
  }

  .focus-step small {
    display: block;
    margin-top: .18rem;
    color: #8198be;
    font-size: .59rem;
    line-height: 1.35;
  }

  .focus-detail-grid {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: .55rem;
  }

  .focus-detail-card {
    min-width: 0;
    padding: .72rem .78rem;
    border: 1px solid rgba(96,165,250,.12);
    border-radius: 10px;
    background: rgba(15,35,82,.38);
    transition: transform .25s ease, border-color .25s ease, background-color .25s ease;
  }

  .focus-detail-card:hover {
    transform: translateY(-3px);
    border-color: var(--focus-line, rgba(96,165,250,.3));
    background: rgba(30,64,125,.34);
  }

  .focus-detail-card span {
    display: block;
    margin-bottom: .3rem;
    color: var(--focus-accent, #93c5fd);
    font-size: .59rem;
    font-weight: 850;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .focus-detail-card strong {
    display: block;
    color: #dbeafe;
    font-size: .76rem;
    line-height: 1.35;
  }

  .focus-detail-card p {
    margin: .25rem 0 0 !important;
    color: #8ea5ca !important;
    font-size: .68rem !important;
    line-height: 1.45 !important;
    text-align: left !important;
  }

  .focus-output {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .8rem;
    margin-top: .65rem;
    padding: .58rem .72rem;
    border-left: 2px solid var(--focus-accent, #60a5fa);
    border-radius: 7px;
    background: rgba(3,12,30,.25);
  }

  .focus-output span {
    color: #7891ba;
    font-size: .61rem;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .focus-output strong {
    color: #dbeafe;
    font-size: .7rem;
    font-weight: 750;
    text-align: right;
  }

  .focus-panel[data-focus="toxicology"] {
    --focus-accent: #93c5fd;
    --focus-line: rgba(96,165,250,.25);
    --focus-chip: rgba(37,99,235,.11);
    --focus-glow: rgba(37,99,235,.15);
  }

  .focus-panel[data-focus="mechanisms"] {
    --focus-accent: #a5b4fc;
    --focus-line: rgba(129,140,248,.25);
    --focus-chip: rgba(79,70,229,.11);
    --focus-glow: rgba(79,70,229,.14);
  }

  .focus-panel[data-focus="evidence"] {
    --focus-accent: #7dd3fc;
    --focus-line: rgba(56,189,248,.24);
    --focus-chip: rgba(14,116,144,.12);
    --focus-glow: rgba(14,116,144,.13);
  }

  @keyframes focus-panel-in {
    from { opacity: 0; transform: translateY(10px) scale(.99); filter: blur(2px); }
    to { opacity: 1; transform: none; filter: none; }
  }

  @keyframes focus-step-in {
    to { opacity: 1; transform: none; }
  }

  @keyframes focus-signal-flow {
    0% { transform: translateX(-15%); opacity: 0; }
    15%,70% { opacity: 1; }
    100% { transform: translateX(330%); opacity: 0; }
  }

  @keyframes focus-status-pulse {
    0%,100% { transform: scale(.85); opacity: .55; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  @keyframes focus-orbit {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 767.98px) {
    .focus-panel-head {
      grid-template-columns: 42px minmax(0,1fr);
    }

    .focus-status {
      grid-column: 2;
      justify-self: start;
      margin-top: -.3rem;
    }

    .focus-workflow {
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: .65rem;
    }

    .focus-workflow::before {
      display: none;
    }

    .focus-signal {
      display: none;
    }

    .focus-detail-grid {
      grid-template-columns: 1fr;
    }

    .focus-output {
      display: block;
    }

    .focus-output strong {
      display: block;
      margin-top: .22rem;
      text-align: left;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .about-tab,
    .about-panel,
    .focus-step,
    .focus-signal,
    .focus-status::before,
    .about-panel::after {
      animation: none !important;
      transition: none !important;
      transform: none !important;
      filter: none !important;
      opacity: 1 !important;
    }
  }

  .about-two-column {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 0.8rem;
    margin-bottom: 1.6rem;
  }

  .about-mini-card {
    padding: 1.25rem 1.3rem;
    border: 1px solid var(--line);
    border-radius: 13px;
    background: var(--surface);
    transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
  }

  .about-mini-card:hover {
    transform: translateY(-4px);
    border-color: var(--line-strong);
    box-shadow: 0 15px 32px rgba(0,0,0,0.15);
  }

  .about-card-label {
    display: block;
    margin-bottom: 0.45rem;
    color: var(--accent);
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .about-mini-card h3 {
    margin: 0 0 0.45rem;
    color: var(--text-strong);
    font-size: 1.02rem;
  }

  .about-mini-card p {
    margin: 0 0 0.8rem;
    color: var(--muted);
    font-size: 0.88rem;
    line-height: 1.55;
    text-align: left !important;
  }

  .about-mini-card a {
    color: var(--accent) !important;
    font-size: 0.82rem;
    font-weight: 750;
  }

  .about-sciaudit-card {
    background:
      radial-gradient(circle at 90% 10%, rgba(37,99,235,0.10), transparent 34%),
      var(--surface);
  }

  @keyframes about-panel-in {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: none; }
  }

  @keyframes about-orbit {
    to { transform: rotate(360deg); }
  }

  /* Independent-work support callout */
  .about-support-note {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 1rem 1.35rem;
    margin: 1.25rem 0 1.6rem;
    padding: 1.15rem 1.25rem;
    border: 1px solid rgba(96,165,250,.30);
    border-radius: 14px;
    background:
      radial-gradient(circle at 88% 20%, rgba(37,99,235,.16), transparent 34%),
      linear-gradient(135deg, rgba(15,35,82,.78), rgba(7,20,48,.94));
    box-shadow:
      0 12px 30px rgba(0,0,0,.16),
      inset 0 1px 0 rgba(255,255,255,.05);
    text-align: left !important;
    line-height: 1.55;
    overflow: hidden;
  }

  .about-support-note::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #93c5fd, #2563eb);
    box-shadow: 0 0 18px rgba(96,165,250,.32);
  }

  .about-support-note::after {
    display: none;
  }

  .about-support-copy {
    position: relative;
    z-index: 1;
    padding-left: .35rem;
    color: #b9c9e3;
    font-size: .9rem;
  }

  .about-support-label {
    display: block;
    margin-bottom: .28rem;
    color: #93c5fd;
    font-size: .63rem;
    font-weight: 850;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .about-support-copy strong {
    color: #e5efff;
    font-weight: 750;
  }

  .bio-text a.about-coffee-button {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    min-height: 44px;
    margin: 0;
    padding: 0.62rem 1.05rem;
    border: 1px solid rgba(147,197,253,.50);
    border-radius: 9px;
    background: linear-gradient(180deg, #2563eb, #1d4ed8);
    color: #f8fbff !important;
    font-size: .84rem;
    font-weight: 800;
    letter-spacing: .01em;
    text-decoration: none !important;
    box-shadow:
      0 8px 20px rgba(29,78,216,.24),
      inset 0 1px 0 rgba(255,255,255,.14);
    white-space: nowrap;
    transition:
      transform .22s cubic-bezier(.2,.7,.2,1),
      background .22s ease,
      border-color .22s ease,
      box-shadow .22s ease;
  }

  .bio-text a.about-coffee-button::after {
    content: "↗";
    margin-left: .05rem;
    font-size: .9rem;
    transition: transform .22s ease;
  }

  .bio-text a.about-coffee-button:hover {
    border-color: #93c5fd;
    background: linear-gradient(180deg, #3b82f6, #2563eb);
    color: #ffffff !important;
    transform: translateY(-2px);
    box-shadow:
      0 12px 26px rgba(29,78,216,.34),
      0 0 0 3px rgba(96,165,250,.08);
  }

  .bio-text a.about-coffee-button:hover::after {
    transform: translate(2px,-1px);
  }

  .bio-text a.about-coffee-button:focus-visible {
    outline: 2px solid #bfdbfe;
    outline-offset: 3px;
  }

  .about-coffee-icon {
    font-size: 1rem;
    line-height: 1;
  }

  @media (max-width: 767.98px) {
    .about-support-note {
      grid-template-columns: 1fr;
      gap: .75rem;
      padding: 1rem;
    }

    .about-support-note::after {
      display: none;
    }

    .about-support-copy {
      padding-left: .2rem;
      padding-right: .2rem;
    }

    .bio-text a.about-coffee-button {
      width: 100%;
      box-sizing: border-box;
      min-height: 46px;
    }
  }

  .keyword-box,
  .highlight-study {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .keyword-box {
    margin: 1.5rem 0 2rem;
    padding: 1.15rem 1.25rem;
    border-left: 5px solid var(--global-theme-color);
    border-radius: 10px;
    background: var(--surface);
  }

  .keyword-title {
    margin-bottom: 0.8rem;
    color: var(--text-strong);
    font-size: 1rem;
    font-weight: 700;
  }

  .keyword-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .keyword-list span {
    padding: 0.42rem 0.68rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    color: var(--text);
    font-size: 0.95rem;
  }

  /* ==========================================================
     HIGHLIGHTED STUDY FIGURE
     A figure-like translation of the paper's proposed
     mechanochemical signal-resolution circuit.
     ========================================================== */
  .highlight-study {
    position: relative;
    margin: 2rem 0 2.5rem;
    padding: 0;
    border: 1px solid rgba(96,165,250,.25);
    border-radius: 18px;
    background:
      radial-gradient(circle at 92% 5%, rgba(37,99,235,.13), transparent 28%),
      linear-gradient(145deg, rgba(10,26,58,.98), rgba(5,15,35,.99));
    box-shadow:
      0 20px 48px rgba(0,0,0,.20),
      inset 0 1px 0 rgba(255,255,255,.045);
    overflow: hidden;
  }

  .highlight-study::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #93c5fd, #2563eb, #60a5fa);
    box-shadow: 0 0 20px rgba(96,165,250,.22);
    z-index: 4;
  }

  .highlight-figure-head {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0,1fr) auto;
    gap: 1rem;
    align-items: start;
    padding: 1.35rem 1.45rem 1.05rem;
    border-bottom: 1px solid rgba(96,165,250,.12);
  }

  .highlight-label {
    margin-bottom: .35rem;
    color: #93c5fd;
    font-size: .66rem;
    font-weight: 850;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .highlight-study h2 {
    max-width: 820px;
    margin: 0;
    color: #e7f0ff;
    font-size: clamp(1.35rem, 3vw, 2rem);
    font-weight: 750;
    line-height: 1.12;
    letter-spacing: -.035em;
  }

  .highlight-meta {
    display: flex;
    flex-wrap: wrap;
    gap: .45rem;
    justify-content: flex-end;
    max-width: 360px;
  }

  .highlight-meta span,
  .highlight-meta a {
    display: inline-flex;
    align-items: center;
    min-height: 28px;
    padding: .28rem .55rem;
    border: 1px solid rgba(147,197,253,.18);
    border-radius: 999px;
    background: rgba(15,35,82,.42);
    color: #9fb6d9 !important;
    font-size: .61rem;
    font-weight: 750;
    letter-spacing: .04em;
    text-decoration: none !important;
  }

  .highlight-meta a:hover {
    border-color: rgba(147,197,253,.55);
    color: #e5efff !important;
  }

  .highlight-figure-intro {
    position: relative;
    z-index: 2;
    margin: 0;
    padding: .85rem 1.45rem 1.1rem;
    color: #aebfda !important;
    font-size: .83rem !important;
    line-height: 1.55 !important;
    text-align: left !important;
  }

  .highlight-circuit {
    position: relative;
    margin: 0 1.1rem 1rem;
    padding: 1rem;
    border: 1px solid rgba(96,165,250,.15);
    border-radius: 14px;
    background:
      radial-gradient(circle at 50% 0%, rgba(37,99,235,.10), transparent 35%),
      rgba(2,10,26,.46);
    overflow: hidden;
  }

  .highlight-circuit::before {
    content: "FIGURE 1 · MECHANOCHEMICAL SIGNAL-RESOLUTION CIRCUIT";
    display: block;
    margin-bottom: .85rem;
    color: rgba(147,197,253,.55);
    font-size: .56rem;
    font-weight: 850;
    letter-spacing: .13em;
  }

  .highlight-flow-row {
    display: grid;
    grid-template-columns: repeat(6,minmax(0,1fr));
    gap: .45rem;
    align-items: stretch;
  }

  .highlight-flow-node {
    position: relative;
    min-width: 0;
    padding: .75rem .65rem .7rem;
    border: 1px solid rgba(96,165,250,.18);
    border-radius: 11px;
    background:
      linear-gradient(160deg, rgba(20,46,96,.72), rgba(7,20,48,.86));
    box-shadow: 0 8px 20px rgba(0,0,0,.14);
    opacity: 0;
    transform: translateY(10px);
    animation: highlight-node-in .5s cubic-bezier(.2,.7,.2,1) forwards;
    animation-delay: calc(var(--flow-index) * 90ms + 100ms);
    transition:
      transform .25s cubic-bezier(.2,.7,.2,1),
      border-color .25s ease,
      background .25s ease,
      box-shadow .25s ease;
  }

  .highlight-flow-node:hover {
    transform: translateY(-4px);
    border-color: rgba(147,197,253,.46);
    background: linear-gradient(160deg, rgba(30,64,125,.80), rgba(9,26,58,.92));
    box-shadow: 0 14px 26px rgba(0,0,0,.20);
  }

  .highlight-flow-node::after {
    content: "→";
    position: absolute;
    top: 50%;
    right: -.6rem;
    transform: translateY(-50%);
    color: rgba(147,197,253,.55);
    font-size: .85rem;
    font-weight: 800;
    z-index: 3;
  }

  .highlight-flow-node:last-child::after {
    display: none;
  }

  .highlight-flow-number {
    display: inline-grid;
    place-items: center;
    width: 25px;
    height: 25px;
    margin-bottom: .45rem;
    border: 1px solid rgba(147,197,253,.23);
    border-radius: 8px;
    background: rgba(37,99,235,.10);
    color: #93c5fd;
    font-size: .58rem;
    font-weight: 900;
    letter-spacing: .05em;
  }

  .highlight-flow-node strong {
    display: block;
    color: #deebff;
    font-size: .72rem;
    line-height: 1.25;
  }

  .highlight-flow-node small {
    display: block;
    margin-top: .22rem;
    color: #7f96bc;
    font-size: .59rem;
    line-height: 1.38;
  }

  .highlight-circuit-branches {
    display: grid;
    grid-template-columns: minmax(0,1fr) minmax(0,1fr);
    gap: .55rem;
    margin-top: .65rem;
  }

  .highlight-branch {
    position: relative;
    padding: .7rem .78rem;
    border: 1px solid rgba(96,165,250,.12);
    border-radius: 10px;
    background: rgba(15,35,82,.28);
  }

  .highlight-branch::before {
    content: "";
    position: absolute;
    top: -.65rem;
    left: 12%;
    width: 1px;
    height: .65rem;
    background: linear-gradient(180deg, rgba(96,165,250,0), rgba(96,165,250,.28));
  }

  .highlight-branch-label {
    display: block;
    margin-bottom: .18rem;
    color: #7dd3fc;
    font-size: .58rem;
    font-weight: 850;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .highlight-branch strong {
    display: block;
    color: #cfe1fc;
    font-size: .68rem;
  }

  .highlight-branch p {
    margin: .2rem 0 0;
    color: #7e96bb !important;
    font-size: .61rem !important;
    line-height: 1.4 !important;
    text-align: left !important;
  }

  .highlight-resolution-band {
    display: grid;
    grid-template-columns: minmax(0,1fr) 34px minmax(0,1fr);
    gap: .55rem;
    align-items: stretch;
    margin: .85rem 0 .2rem;
  }

  .highlight-state {
    position: relative;
    padding: .8rem .85rem;
    border-radius: 11px;
    border: 1px solid rgba(96,165,250,.15);
    background: rgba(15,35,82,.34);
  }

  .highlight-state.is-adaptive {
    border-color: rgba(74,222,128,.20);
    background: linear-gradient(145deg, rgba(20,76,60,.25), rgba(15,35,82,.34));
  }

  .highlight-state.is-pathological {
    border-color: rgba(248,113,113,.20);
    background: linear-gradient(145deg, rgba(94,32,46,.24), rgba(15,35,82,.34));
  }

  .highlight-state-label {
    display: block;
    margin-bottom: .2rem;
    color: #93c5fd;
    font-size: .59rem;
    font-weight: 850;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .highlight-state.is-adaptive .highlight-state-label { color: #86efac; }
  .highlight-state.is-pathological .highlight-state-label { color: #fca5a5; }

  .highlight-state strong {
    display: block;
    color: #dceaff;
    font-size: .76rem;
    line-height: 1.3;
  }

  .highlight-state p {
    margin: .28rem 0 0 !important;
    color: #8399bd !important;
    font-size: .62rem !important;
    line-height: 1.45 !important;
    text-align: left !important;
  }

  .highlight-state-arrow {
    display: grid;
    place-items: center;
    border-radius: 9px;
    color: #8198bd;
    font-size: .9rem;
  }

  .highlight-failure-strip {
    display: flex;
    flex-wrap: wrap;
    gap: .42rem;
    margin: .7rem 0 0;
    padding-top: .7rem;
    border-top: 1px solid rgba(96,165,250,.10);
  }

  .highlight-failure-chip {
    display: inline-flex;
    align-items: center;
    padding: .32rem .48rem;
    border: 1px solid rgba(248,113,113,.15);
    border-radius: 999px;
    background: rgba(127,29,29,.10);
    color: #c6a6aa;
    font-size: .57rem;
    font-weight: 700;
  }

  .highlight-test {
    margin: .85rem 1.1rem 0;
    padding: .8rem .9rem;
    border: 1px solid rgba(147,197,253,.13);
    border-radius: 11px;
    background: rgba(15,35,82,.22);
  }

  .highlight-test-label {
    display: block;
    margin-bottom: .25rem;
    color: #93c5fd;
    font-size: .58rem;
    font-weight: 850;
    letter-spacing: .11em;
    text-transform: uppercase;
  }

  .highlight-test strong {
    color: #dbeafe;
    font-size: .72rem;
    font-weight: 750;
  }

  .highlight-test p {
    margin: .22rem 0 0 !important;
    color: #8399bd !important;
    font-size: .62rem !important;
    line-height: 1.45 !important;
    text-align: left !important;
  }

  .highlight-study-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: .95rem;
    padding: .9rem 1.1rem 1.05rem;
    border-top: 1px solid rgba(96,165,250,.10);
  }

  .highlight-footer-note {
    color: #7e95ba;
    font-size: .64rem;
    line-height: 1.45;
  }

  .highlight-footer-note strong {
    color: #a8bfdf;
  }

  .highlight-related-link {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    flex: 0 0 auto;
    padding: .48rem .7rem;
    border: 1px solid rgba(147,197,253,.22);
    border-radius: 8px;
    background: rgba(30,64,125,.22);
    color: #bfdbfe !important;
    font-size: .65rem;
    font-weight: 800;
    text-decoration: none !important;
    transition: transform .22s ease, border-color .22s ease, background .22s ease;
  }

  .highlight-related-link:hover {
    transform: translateY(-2px);
    border-color: rgba(147,197,253,.52);
    background: rgba(37,99,235,.28);
  }

  /* Primary call-to-action for the highlighted YAP/TAZ study. */
  .highlight-explore-cta {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: .4rem 1rem 1.5rem;
  }

  .highlight-related-link.highlight-explore-primary {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: .65rem;
    min-width: min(100%, 340px);
    min-height: 58px;
    padding: 1rem 1.65rem;
    border: 1px solid rgba(147,197,253,.65);
    border-radius: 14px;
    background: linear-gradient(120deg, #2563eb 0%, #1d4ed8 55%, #1e40af 100%);
    color: #fff !important;
    font-size: 1rem;
    font-weight: 850;
    line-height: 1.25;
    text-align: center;
    box-shadow: 0 12px 32px rgba(37,99,235,.28), inset 0 1px 0 rgba(255,255,255,.16);
    animation: highlight-cta-pulse 3.4s ease-in-out infinite;
  }

  .highlight-related-link.highlight-explore-primary:hover {
    transform: translateY(-3px);
    border-color: #bfdbfe;
    background: linear-gradient(120deg, #3478ff 0%, #245be7 55%, #3155c7 100%);
    box-shadow: 0 16px 38px rgba(37,99,235,.36), inset 0 1px 0 rgba(255,255,255,.2);
  }

  @keyframes highlight-cta-pulse {
    0%, 100% { box-shadow: 0 12px 32px rgba(37,99,235,.23), inset 0 1px 0 rgba(255,255,255,.16); }
    50% { box-shadow: 0 15px 38px rgba(37,99,235,.38), 0 0 0 5px rgba(96,165,250,.06), inset 0 1px 0 rgba(255,255,255,.2); }
  }

  @keyframes highlight-node-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: 900px) {
    .highlight-flow-row {
      grid-template-columns: repeat(3,minmax(0,1fr));
      row-gap: .65rem;
    }

    .highlight-flow-node:nth-child(3)::after {
      display: none;
    }
  }

  @media (max-width: 680px) {
    .highlight-figure-head {
      grid-template-columns: 1fr;
      padding: 1.15rem 1rem .9rem;
    }

    .highlight-meta {
      justify-content: flex-start;
      max-width: none;
    }

    .highlight-figure-intro {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .highlight-circuit {
      margin-left: .7rem;
      margin-right: .7rem;
      padding: .75rem;
    }

    .highlight-flow-row {
      grid-template-columns: repeat(2,minmax(0,1fr));
    }

    .highlight-flow-node::after {
      display: none;
    }

    .highlight-circuit-branches {
      grid-template-columns: 1fr;
    }

    .highlight-resolution-band {
      grid-template-columns: 1fr;
    }

    .highlight-state-arrow {
      min-height: 22px;
      transform: rotate(90deg);
    }

    .highlight-test {
      margin-left: .7rem;
      margin-right: .7rem;
    }

    .highlight-study-footer {
      align-items: stretch;
      flex-direction: column;
      padding-left: .9rem;
      padding-right: .9rem;
    }

    .highlight-related-link {
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .highlight-related-link.highlight-explore-primary {
      animation: none !important;
    }

    .highlight-flow-node {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }

  .social,
  .contact-icons {
    font-size: 0 !important;
  }

  .contact-icons a {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 1.2rem !important;
    width: 1.2rem !important;
    height: 1.2rem !important;
    margin: 0 0.35rem !important;
  }

  .social i,
  .contact-icons i,
  .social svg,
  .contact-icons svg,
  .contact-icons .ai,
  .contact-icons .fab,
  .contact-icons .fas,
  .contact-icons .far {
    font-size: 1.2rem !important;
    width: 1.2rem !important;
    height: 1.2rem !important;
    line-height: 1.2rem !important;
  }

  .social i::before,
  .contact-icons i::before {
    font-size: 1.2rem !important;
  }

  /* Research identity map */
  .research-map {
    position: relative;
    margin: 0 0 1.6rem;
    padding: 1.3rem;
    border: 1px solid var(--line);
    border-radius: 16px;
    overflow: hidden;
    background:
      radial-gradient(circle at 15% 20%, rgba(37,99,235,.09), transparent 30%),
      radial-gradient(circle at 85% 75%, rgba(96,165,250,.07), transparent 32%),
      var(--surface);
    box-shadow: 0 18px 42px rgba(0,0,0,.14);
  }

  .research-map::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .45;
    background-image:
      linear-gradient(rgba(96,165,250,.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(96,165,250,.035) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: linear-gradient(to bottom, black, transparent 90%);
  }

  .research-map-head,
  .timeline-head {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .research-map-head h2 {
    margin: .35rem 0 0;
    color: var(--text-strong);
    font-size: clamp(1.25rem, 2.5vw, 1.8rem);
    letter-spacing: -.035em;
  }

  .research-map-status {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .35rem .6rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    font-size: .68rem;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .research-map-status i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #60a5fa;
    box-shadow: 0 0 0 4px rgba(96,165,250,.12), 0 0 12px rgba(96,165,250,.6);
    animation: research-pulse 2s ease-in-out infinite;
  }

  .research-map-stage {
    position: relative;
    min-height: 360px;
    margin: .5rem auto 0;
    max-width: 760px;
  }

  .research-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid rgba(96,165,250,.12);
    border-radius: 50%;
    transform: translate(-50%,-50%);
    pointer-events: none;
  }

  .orbit-one { width: 180px; height: 180px; animation: orbit-spin 18s linear infinite; }
  .orbit-two { width: 300px; height: 300px; animation: orbit-spin 28s linear infinite reverse; }
  .orbit-three { width: 430px; height: 430px; animation: orbit-spin 40s linear infinite; }

  .research-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 112px;
    height: 112px;
    display: grid;
    place-items: center;
    transform: translate(-50%,-50%);
    border: 1px solid rgba(96,165,250,.42);
    border-radius: 50%;
    background:
      radial-gradient(circle, rgba(37,99,235,.25), rgba(15,23,42,.75) 68%);
    box-shadow:
      0 0 0 10px rgba(37,99,235,.035),
      0 0 45px rgba(37,99,235,.16),
      inset 0 0 30px rgba(96,165,250,.08);
    z-index: 3;
  }

  .research-core-ring {
    position: absolute;
    inset: -7px;
    border: 1px solid rgba(96,165,250,.15);
    border-radius: 50%;
    animation: core-ring 3.5s ease-in-out infinite;
  }

  .research-core-label {
    position: relative;
    color: #dbeafe;
    font-size: .68rem;
    font-weight: 800;
    letter-spacing: .13em;
    line-height: 1.35;
    text-align: center;
  }

  .research-core-label b { color: #60a5fa; }

  .research-node {
    position: absolute;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 170px;
    padding: .8rem .9rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: color-mix(in srgb, var(--surface) 90%, transparent);
    color: var(--text);
    box-shadow: 0 12px 28px rgba(0,0,0,.16);
    cursor: pointer;
    text-align: left;
    transition: transform .3s cubic-bezier(.2,.7,.2,1), border-color .3s ease, box-shadow .3s ease;
  }

  .research-node:hover,
  .research-node.is-active {
    border-color: rgba(96,165,250,.55);
    box-shadow: 0 15px 34px rgba(37,99,235,.14);
  }

  .research-node.is-active { transform: translateY(-5px); }

  .node-exposure { left: 1%; top: 12%; }
  .node-mechanism { right: 1%; top: 38%; }
  .node-evidence { left: 8%; bottom: 7%; }

  .node-index {
    margin-bottom: .25rem;
    color: #60a5fa;
    font-size: .65rem;
    font-weight: 900;
    letter-spacing: .1em;
  }

  .research-node strong {
    color: var(--text-strong);
    font-size: .94rem;
  }

  .research-node small {
    margin-top: .18rem;
    color: var(--muted);
    font-size: .7rem;
    line-height: 1.35;
  }

  .research-map-detail {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 44px minmax(0,1fr);
    gap: .8rem;
    align-items: start;
    margin-top: -.1rem;
    padding: .95rem;
    border: 1px solid var(--line);
    border-radius: 11px;
    background: var(--surface-strong);
    animation: detail-in .35s ease both;
  }

  .research-detail-index {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(37,99,235,.09);
    color: #60a5fa;
    font-size: .7rem;
    font-weight: 900;
  }

  .research-map-detail h3 {
    margin: 0 0 .25rem;
    color: var(--text-strong);
    font-size: .98rem;
  }

  .research-map-detail p {
    margin: 0;
    color: var(--muted);
    font-size: .84rem;
    line-height: 1.5;
    text-align: left !important;
  }

  /* Research trajectory */
  .research-timeline {
    position: relative;
    margin: 0 0 1.6rem;
    padding: 1.25rem 1.3rem 1.4rem;
    border: 1px solid var(--line);
    border-radius: 15px;
    background: var(--surface);
    overflow: hidden;
  }

  .timeline-caption {
    color: var(--muted);
    font-size: .75rem;
  }

  .timeline-track {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
    margin-top: 1.25rem;
  }

  .timeline-line {
    position: absolute;
    left: 4%;
    right: 4%;
    top: 10px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(96,165,250,.38), transparent);
  }

  .timeline-item {
    position: relative;
    padding-top: 1.25rem;
  }

  .timeline-dot {
    position: absolute;
    top: 5px;
    left: 0;
    width: 11px;
    height: 11px;
    border: 2px solid var(--surface);
    border-radius: 50%;
    background: var(--muted);
    box-shadow: 0 0 0 1px var(--line);
  }

  .timeline-item.is-current .timeline-dot {
    background: #60a5fa;
    box-shadow: 0 0 0 4px rgba(96,165,250,.12), 0 0 18px rgba(96,165,250,.38);
  }

  .timeline-year {
    color: #60a5fa;
    font-size: .67rem;
    font-weight: 850;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .timeline-item h3 {
    margin: .35rem 0 .25rem;
    color: var(--text-strong);
    font-size: .95rem;
  }

  .timeline-item p {
    margin: 0;
    color: var(--muted);
    font-size: .8rem;
    line-height: 1.5;
    text-align: left !important;
  }

  @keyframes research-pulse {
    0%,100% { transform: scale(.9); opacity: .65; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  @keyframes orbit-spin {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to { transform: translate(-50%,-50%) rotate(360deg); }
  }

  @keyframes core-ring {
    0%,100% { transform: scale(.96); opacity: .35; }
    50% { transform: scale(1.05); opacity: .9; }
  }

  @keyframes detail-in {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: 768px) {
    .about-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .about-two-column {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .research-map-stage {
      min-height: 420px;
    }

    .research-node {
      min-width: 145px;
      max-width: 155px;
    }

    .node-exposure { left: 0; top: 8%; }
    .node-mechanism { right: 0; top: 42%; }
    .node-evidence { left: 0; bottom: 5%; }

    .orbit-three { width: 360px; height: 360px; }
    .orbit-two { width: 260px; height: 260px; }
    .orbit-one { width: 155px; height: 155px; }

    .timeline-track {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding-left: .15rem;
    }

    .timeline-line {
      left: 5px;
      top: 10px;
      bottom: 10px;
      width: 1px;
      height: auto;
      background: linear-gradient(180deg, rgba(96,165,250,.38), transparent);
    }

    .timeline-item {
      padding-left: 1.25rem;
      padding-top: 0;
    }

    .timeline-dot {
      left: 0;
      top: .2rem;
    }
  }

  @media (max-width: 480px) {
    .about-intro {
      padding: 1.3rem;
    }

    .about-stats {
      grid-template-columns: 1fr 1fr;
    }

    .about-panel {
      grid-template-columns: 42px minmax(0,1fr);
      gap: 0.75rem;
      padding: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    .bio-text,
    .keyword-box,
    .highlight-study {
      width: 100%;
      max-width: 100%;
    }

    .profile img {
      max-width: 180px !important;
      width: 60% !important;
      height: auto !important;
      margin-left: auto !important;
      margin-right: auto !important;
      display: block !important;
    }

    .bio-text a.about-coffee-button {
      margin-top: 0.5rem;
      margin-left: 0;
    }

    .profile-logo-links {
      grid-template-columns: 1fr 1fr;
      gap: 0.6rem;
    }

    .profile-logo-links a {
      min-height: 64px;
      padding: 0.6rem 0.7rem;
    }

    .profile-logo-links img {
      max-height: 36px;
    }
  }

  .social {
    margin-top: 2.5rem;
  }

  .contact-note {
    color: var(--muted);
    font-size: 0.85rem;
  }

  .contact-note a {
    color: var(--accent) !important;
  }

  /* Homepage: selected papers and latest news */
  .home-section {
    margin: 2rem 0 2.25rem;
  }

  .home-section-title {
    margin-bottom: 0.9rem;
    color: var(--text-strong);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .selected-papers {
    display: grid;
    gap: 0.8rem;
  }

  .bio-text a.selected-paper {
    display: block;
    padding: 0.95rem 1.1rem;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--surface);
    color: var(--text) !important;
    text-decoration: none !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .bio-text a.selected-paper:hover {
    transform: translateY(-3px);
    border-color: var(--line-strong);
    box-shadow: 0 12px 26px rgba(37, 99, 235, 0.14);
  }

  .selected-paper-journal {
    display: block;
    margin-bottom: 0.3rem;
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .selected-paper-title {
    display: block;
    color: var(--text-strong);
    font-weight: 600;
    line-height: 1.45;
  }

  .news-list {
    margin: 0;
    padding: 0 0 0 1.1rem;
    border-left: 2px solid var(--line);
    list-style: none;
  }

  .news-list li {
    position: relative;
    display: flex;
    gap: 1rem;
    margin-bottom: 0.85rem;
    line-height: 1.5;
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
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
  }

  .news-date {
    flex: 0 0 5.2rem;
    color: var(--text-strong);
    font-weight: 700;
    white-space: nowrap;
  }

  @media (max-width: 576px) {
    .news-list li {
      flex-direction: column;
      gap: 0.1rem;
    }

    .news-date {
      flex: none;
    }
  }

  /* Motion: reveal on scroll, hover polish */
  .reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
    transition-delay: var(--reveal-delay, 0s);
  }

  .reveal.is-in {
    opacity: 1;
    transform: none;
  }

  .profile figure img {
    animation: profile-in 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    border-radius: 12px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .profile figure img:hover {
    transform: scale(1.015);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.16);
  }

  @keyframes profile-in {
    from { opacity: 0; transform: scale(0.97); }
    to { opacity: 1; transform: none; }
  }

  .post-header .post-title,
  header .post-title {
    background: linear-gradient(90deg, #ffffff 0%, #60a5fa 50%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent !important;
    animation: title-shine 6s ease-in-out infinite;
  }

  @keyframes title-shine {
    0%, 100% { background-position: 0% center; }
    50% { background-position: 100% center; }
  }

  .profile-logo-links a {
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .profile-logo-links a:hover {
    transform: translateY(-3px);
  }

  .keyword-list span {
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }

  .keyword-list span:hover {
    transform: translateY(-2px);
    background-color: #2563eb !important;
    color: #ffffff !important;
    box-shadow: 0 6px 14px rgba(37, 99, 235, 0.22);
  }

  .highlight-study {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .highlight-study:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.24);
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal,
    .profile figure img,
    .post-title,
    .profile-logo-links a,
    .keyword-list span,
    .highlight-study,
    .bio-text a.selected-paper {
      animation: none !important;
      transition: none !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }

  /* Mobile layout hardening */
  html, body { max-width: 100%; overflow-x: hidden; }
  .post, .page, .container, main, .post-content, .bio-text, .about-modern {
    width: 100%; max-width: 100% !important; box-sizing: border-box; min-width: 0;
  }
  .bio-text { overflow-wrap: anywhere; word-break: normal; }
  .profile { width: 100%; max-width: 100%; box-sizing: border-box; min-width: 0; }
  .profile figure { max-width: 100%; box-sizing: border-box; margin-left: auto; margin-right: auto; }
  .profile figure img { display: block; max-width: 100%; height: auto; box-sizing: border-box; }
  .profile-info, .profile-info * { max-width: 100%; box-sizing: border-box; }
  .profile-info { overflow-wrap: anywhere; }
  .profile-logo-links { width: 100%; min-width: 0; }
  .profile-logo-links a { width: 100%; min-width: 0; overflow: hidden; }
  .profile-logo-links img { width: auto; max-width: 100%; height: auto; }
  .about-intro, .about-explorer, .about-two-column, .research-map, .research-timeline,
  .open-roles, .keyword-box, .highlight-study, .home-section {
    width: 100%; max-width: 100%; box-sizing: border-box; min-width: 0;
  }
  .about-intro h2, .about-intro .about-lead, .about-panel h3, .about-panel p,
  .about-mini-card h3, .about-mini-card p, .research-map-head h2, .research-map-detail h3,
  .research-map-detail p, .timeline-item h3, .timeline-item p, .highlight-study h2,
  .highlight-study p, .selected-paper-title, .news-text { overflow-wrap: anywhere; }

  @media (max-width: 991.98px) {
    .bio-text { max-width: 100% !important; }
    .about-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .about-two-column { grid-template-columns: 1fr; }
    .research-map-stage { min-height: 420px; }
    .research-node { min-width: 0; width: 31%; }
    .node-exposure { left: 0; top: 8%; }
    .node-mechanism { right: 0; top: 36%; }
    .node-evidence { left: 0; bottom: 4%; }
  }

  @media (max-width: 767.98px) {
    .post, .page, .container, main { padding-left: .9rem; padding-right: .9rem; }
    .post-content, .bio-text { padding-left: 0 !important; padding-right: 0 !important; }
    .profile { margin-bottom: 1.25rem; }
    .profile figure { width: min(220px, 70vw); }
    .profile-info, .profile-info p { width: 100%; text-align: left !important; text-align-last: left !important; }

    .about-intro { padding: 1.2rem 1rem; border-radius: 13px; }
    .about-intro h2 { font-size: clamp(1.55rem, 8vw, 2.15rem); line-height: 1.1; letter-spacing: -.035em; }
    .about-intro .about-lead { font-size: .93rem; line-height: 1.55; }

    .about-stats { grid-template-columns: 1fr 1fr; gap: .55rem; margin-bottom: 1.15rem; }
    .about-stats > div { min-width: 0; padding: .8rem .75rem; }
    .about-stats strong { font-size: 1.05rem; }
    .about-stats span { font-size: .7rem; }

    .about-explorer { padding: .9rem; border-radius: 13px; }
    .about-explorer-heading { display: block; margin-bottom: .7rem; }
    .about-explorer-heading p { margin-top: .25rem; }
    .about-tabs { display: grid; grid-template-columns: 1fr; gap: .4rem; }
    .about-tab { width: 100%; min-height: 42px; padding: .58rem .7rem; }
    .about-panel-wrap { min-height: 0; }
    .about-panel { grid-template-columns: 38px minmax(0,1fr); gap: .7rem; padding: .9rem; }
    .about-panel-icon { width: 38px; height: 38px; font-size: .68rem; }
    .about-panel h3 { font-size: .98rem; }
    .about-panel p { font-size: .82rem; line-height: 1.5; }

    .about-mini-card { padding: 1rem; }
    .research-map { padding: 1rem; }
    .research-map-head { display: block; }
    .research-map-status { margin-top: .65rem; }
    .research-map-stage { min-height: 455px; margin-top: .2rem; }
    .orbit-three { width: min(92vw,330px); height: min(92vw,330px); }
    .orbit-two { width: min(70vw,250px); height: min(70vw,250px); }
    .orbit-one { width: min(48vw,170px); height: min(48vw,170px); }
    .research-core { width: 86px; height: 86px; }
    .research-core-label { font-size: .58rem; }
    .research-node { width: min(44%,170px); padding: .65rem; border-radius: 10px; }
    .node-exposure { left: 0; top: 3%; }
    .node-mechanism { right: 0; top: 22%; }
    .node-evidence { left: 0; bottom: 3%; }
    .research-node strong { font-size: .82rem; }
    .research-node small { font-size: .64rem; }
    .research-map-detail { grid-template-columns: 36px minmax(0,1fr); gap: .65rem; padding: .8rem; }
    .research-detail-index { width: 36px; height: 36px; }
    .research-map-detail p { font-size: .78rem; }

    .timeline-track { overflow: visible; }
    .timeline-item { margin-left: 0 !important; padding-left: 1.1rem !important; }
    .keyword-list { gap: .4rem; }
    .keyword-list span { max-width: 100%; font-size: .8rem; padding: .38rem .55rem; }
    .highlight-study { padding: 1rem; }
    .selected-paper { overflow: hidden; }
    .news-list li, .news-text { min-width: 0; }
    .bio-text a.about-coffee-button { margin-left: 0; margin-top: .45rem; }
  }

  @media (max-width: 420px) {
    .post, .page, .container, main { padding-left: .7rem; padding-right: .7rem; }
    .about-stats { grid-template-columns: 1fr; }
    .research-map-stage { min-height: 470px; }
    .research-node { width: 48%; }
    .node-mechanism { top: 22%; }
  }

  @media (prefers-reduced-motion: reduce) {
    .about-intro::after, .research-map-status i, .research-orbit, .research-core-ring,
    .about-tab::before, .focus-panel::after, .focus-status::before, .focus-step, .focus-signal { animation: none !important; }
  }


  /* ==========================================================
     PROFILE HERO
     Turn the default profile block into a compact visual identity
     card so the page reaches the substantive research content faster.
     ========================================================== */

  .profile {
    float: none !important;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto 1.35rem !important;
    box-sizing: border-box;
    position: relative;
    display: grid;
    grid-template-columns: 170px minmax(0, 1fr);
    gap: 1.35rem 1.5rem;
    align-items: center;
    padding: 1.2rem 1.25rem 1.15rem;
    border: 1px solid rgba(96,165,250,.22);
    border-radius: 20px;
    background:
      radial-gradient(circle at 18% 8%, rgba(96,165,250,.15), transparent 30%),
      radial-gradient(circle at 88% 88%, rgba(37,99,235,.12), transparent 34%),
      linear-gradient(145deg, rgba(15,35,82,.92), rgba(7,20,48,.96));
    box-shadow:
      0 18px 45px rgba(0,0,0,.22),
      inset 0 1px 0 rgba(255,255,255,.06);
    overflow: hidden;
  }

  .profile::before {
    content: "RESEARCH IDENTITY";
    position: absolute;
    top: .8rem;
    right: 1rem;
    color: rgba(147,197,253,.72);
    font-size: .56rem;
    font-weight: 850;
    letter-spacing: .16em;
  }

  .profile::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    right: -105px;
    top: 42px;
    border: 1px solid rgba(96,165,250,.12);
    border-radius: 50%;
    pointer-events: none;
    animation: profile-orbit 14s linear infinite;
  }

  .profile figure {
    position: relative;
    z-index: 2;
    grid-row: 1 / span 2;
    margin: 0 auto !important;
  }

  .profile figure img {
    width: 170px !important;
    height: 170px !important;
    object-fit: cover;
    border-radius: 28px !important;
    border: 2px solid rgba(147,197,253,.45);
    box-shadow:
      0 14px 32px rgba(0,0,0,.3),
      0 0 0 8px rgba(96,165,250,.055);
    transition: transform .35s ease, box-shadow .35s ease;
  }

  .profile figure img:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow:
      0 20px 40px rgba(0,0,0,.32),
      0 0 0 10px rgba(96,165,250,.07);
  }

  .profile-info {
    position: relative;
    z-index: 2;
    padding: 0;
  }

  .profile-info p {
    margin-bottom: .48rem !important;
  }

  .profile-info p:first-child strong {
    color: #dbeafe !important;
    font-size: 1.02rem !important;
  }

  .profile-info hr {
    margin: .9rem 0 !important;
    border-color: rgba(147,197,253,.25) !important;
    opacity: 1;
  }

  .profile-logo-links {
    grid-template-columns: repeat(4, minmax(0,1fr));
    gap: .55rem;
    margin-top: .55rem;
  }

  .profile-logo-links a {
    min-height: 62px;
    height: 62px;
    padding: .55rem .65rem;
    border-radius: 12px;
    border-color: rgba(147,197,253,.22);
    box-shadow: 0 7px 18px rgba(0,0,0,.16);
    transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
  }

  .profile-logo-links a:hover {
    transform: translateY(-3px);
    border-color: rgba(96,165,250,.65);
    box-shadow: 0 12px 24px rgba(37,99,235,.16);
  }

  .profile-logo-links img {
    max-width: 125px;
    max-height: 34px;
  }

  @keyframes profile-orbit {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 767.98px) {
    .profile {
      display: block;
      padding: 1rem .85rem .9rem;
      border-radius: 18px;
    }

    .profile::before {
      top: .7rem;
      right: .8rem;
      font-size: .5rem;
    }

    .profile figure {
      width: 150px !important;
      margin: .2rem auto .8rem !important;
    }

    .profile figure img {
      width: 150px !important;
      height: 150px !important;
      border-radius: 24px !important;
    }

    .profile-info {
      padding-top: .55rem;
    }

    .profile-info p {
      text-align: center !important;
      text-align-last: center !important;
    }

    .profile-info p:first-child strong {
      font-size: .94rem !important;
    }

    .profile-logo-links {
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: .5rem;
    }

    .profile-logo-links a {
      min-height: 54px;
      height: 54px;
      padding: .45rem .55rem;
      border-radius: 10px;
    }

    .profile-logo-links img {
      max-width: 105px;
      max-height: 30px;
    }
  }

  @media (max-width: 420px) {
    .profile {
      padding-left: .7rem;
      padding-right: .7rem;
    }

    .profile figure,
    .profile figure img {
      width: 138px !important;
      height: 138px !important;
    }

    .profile-logo-links a {
      min-height: 50px;
      height: 50px;
    }

    .profile-logo-links img {
      max-width: 95px;
      max-height: 27px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .profile::after,
    .profile figure img { animation: none !important; }
  }

</style>

<div class="about-shell">
  <h1 class="about-page-title">Ardie Barry Sailis</h1>
  <div class="research-profile">
    <img class="research-profile-photo"
         src="/assets/img/ardie-profile.jpg"
         alt="Ardie Barry Sailis"
         width="170"
         height="170"
         loading="eager"
         decoding="async">

    <div class="research-profile-info">
      <p><strong>Department of Pharmaceutical Life Sciences</strong></p>
      <p>Faculty of Pharmacy, Universiti Malaya</p>
      <p>Kuala Lumpur, Malaysia</p>

      <hr>

      <p>
        <strong>ORCID:</strong>
        <a href="https://orcid.org/0009-0009-8994-2793">0009-0009-8994-2793</a>
        &nbsp; <strong>Scopus Author ID:</strong> 60192026900
      </p>

      <hr>

      <div class="research-links">
        <a href="https://scholar.google.com/citations?user=saKP688AAAAJ&amp;hl=en" aria-label="Google Scholar">
          <img src="/assets/img/google-scholar-logo.png" alt="Google Scholar" width="480" height="240" loading="lazy" decoding="async">
        </a>
        <a href="https://communities.springernature.com/users/ardie-barry-sailis" aria-label="Springer Nature Research Communities">
          <img src="/assets/img/springer-nature-logo.png" alt="Springer Nature Research Communities" width="480" height="240" loading="lazy" decoding="async">
        </a>
        <a href="https://www.growkudos.com/profile/ardie_barry_sailis" aria-label="Kudos">
          <img src="/assets/img/kudos-logo.png" alt="Kudos" width="480" height="240" loading="lazy" decoding="async">
        </a>
        <a href="https://www.researchgate.net/profile/Ardie-Sailis?ev=hdr_xprf" aria-label="ResearchGate">
          <img src="/assets/img/researchgate-logo.png" alt="ResearchGate" width="480" height="240" loading="lazy" decoding="async">
        </a>
        <a href="https://theconversation.com/profiles/ardie-barry-sailis-2713182/news" aria-label="The Conversation">
          <img src="/assets/img/the-conversation-logo.png" alt="The Conversation" width="480" height="240" loading="lazy" decoding="async">
        </a>
        <a href="https://orcid.org/0009-0009-8994-2793" aria-label="ORCID">
          <img src="/assets/img/orcid-logo.png" alt="ORCID" width="480" height="240" loading="lazy" decoding="async">
        </a>
        <a href="https://www.linkedin.com/in/ardiebarrysailis" aria-label="LinkedIn">
          <img src="/assets/img/linkedin-logo.png" alt="LinkedIn" width="480" height="240" loading="lazy" decoding="async">
        </a>
      </div>
    </div>
  </div>

  <div class="bio-text about-modern" markdown="1">

<div class="about-intro reveal">
  <div class="about-eyebrow">Pharmaceutical Sciences · Toxicology · Scientific Evidence</div>
  <h2>Researcher. Scientific writer. Evidence-focused problem solver.</h2>
  <p class="about-lead">
    I study how inhaled toxicants affect biological systems, with a focus on
    e-cigarette exposure, male reproductive health and molecular mechanisms.
  </p>
</div>

{%- assign highlight = site.data.papers | where_exp: "p", "p.highlight" | first -%}
{%- if highlight %}

<figure class="highlight-study reveal" aria-labelledby="highlight-study-title">
  <div class="highlight-figure-head">
    <div>
      <div class="highlight-label">Highlighted Study · Conceptual Framework</div>
      <h2 id="highlight-study-title">{{ highlight.short }}</h2>
    </div>
    <div class="highlight-meta">
      <span>{{ highlight.published | date: "%B %Y" }}</span>
      <span><em>{{ highlight.journal }}</em></span>
      <a href="https://doi.org/{{ highlight.doi }}" target="_blank" rel="noopener noreferrer">DOI ↗</a>
    </div>
  </div>

  <p class="highlight-figure-intro">
    {{ highlight.highlight }}
  </p>

  <div class="highlight-circuit" aria-label="YAP/TAZ mechanochemical signal-resolution circuit figure">
    <div class="highlight-flow-row">
      <div class="highlight-flow-node" style="--flow-index:0;">
        <span class="highlight-flow-number">01</span>
        <strong>Mechanical inputs</strong>
        <small>Stiffness · stretch · shear · pressure</small>
      </div>
      <div class="highlight-flow-node" style="--flow-index:1;">
        <span class="highlight-flow-number">02</span>
        <strong>Distributed sensing</strong>
        <small>Adhesions · junctions · cytoskeleton · LINC</small>
      </div>
      <div class="highlight-flow-node" style="--flow-index:2;">
        <span class="highlight-flow-number">03</span>
        <strong>State control</strong>
        <small>Hippo + parallel inputs regulate YAP/TAZ</small>
      </div>
      <div class="highlight-flow-node" style="--flow-index:3;">
        <span class="highlight-flow-number">04</span>
        <strong>Nuclear decoding</strong>
        <small>Transport · TEAD · chromatin · timing</small>
      </div>
      <div class="highlight-flow-node" style="--flow-index:4;">
        <span class="highlight-flow-number">05</span>
        <strong>Signal termination</strong>
        <small>Phosphorylation · export · degradation · AMOT</small>
      </div>
      <div class="highlight-flow-node" style="--flow-index:5;">
        <span class="highlight-flow-number">06</span>
        <strong>Baseline restoration</strong>
        <small>Adhesion · cytoskeleton · LINC · matrix recovery</small>
      </div>
    </div>

    <div class="highlight-circuit-branches">
      <div class="highlight-branch">
        <span class="highlight-branch-label">Temporal decoding</span>
        <strong>Magnitude is not enough</strong>
        <p>Output depends on signaling duration, nuclear residence, transcriptional context and feedback, not nuclear abundance alone.</p>
      </div>
      <div class="highlight-branch">
        <span class="highlight-branch-label">Resolution logic</span>
        <strong>Termination is an active program</strong>
        <p>Force relaxation and reversible trafficking reduce activity, while AMOT stabilization and degradation can consolidate the mechano-OFF state.</p>
      </div>
    </div>

    <div class="highlight-resolution-band">
      <div class="highlight-state is-adaptive">
        <span class="highlight-state-label">Efficient resolution</span>
        <strong>Adaptive response → restored mechanosensitivity → homeostasis / regeneration</strong>
        <p>The signal is decoded, terminated and followed by recovery of the mechanical baseline.</p>
      </div>

      <div class="highlight-state-arrow" aria-hidden="true">→</div>

      <div class="highlight-state is-pathological">
        <span class="highlight-state-label">Incomplete resolution</span>
        <strong>Persistent state → mechanical memory → self-reinforcement → pathology</strong>
        <p>Residual chromatin, cytoskeletal, nuclear, metabolic or extracellular changes can bias later responses and stabilize dysfunction.</p>
      </div>
    </div>

    <div class="highlight-failure-strip" aria-label="Predicted circuit failure modes">
      <span class="highlight-failure-chip">Abnormal sensing</span>
      <span class="highlight-failure-chip">Controller failure</span>
      <span class="highlight-failure-chip">Effector escape</span>
      <span class="highlight-failure-chip">Resolution failure</span>
      <span class="highlight-failure-chip">Memory lock</span>
    </div>
  </div>

  <div class="highlight-test">
    <span class="highlight-test-label">Testable prediction</span>
    <strong>Distinguish activation from resolution by measuring the system after the mechanical input is withdrawn.</strong>
    <p>
      The framework predicts that baseline recovery should be evaluated with reversible mechanical perturbations,
      endogenous live-cell reporters, temporally controlled YAP/TAZ manipulation, and integrated measurements
      of signaling, transcription, chromatin and mechanics.
    </p>
  </div>

  <div class="highlight-explore-cta">
    <a class="highlight-related-link highlight-explore-primary" href="/research/yap-taz-signal-resolution/">
      Explore interactive circuit <span aria-hidden="true">↗</span>
    </a>
  </div>

  <figcaption class="highlight-study-footer">
    <span class="highlight-footer-note">
      <strong>Ardie Barry Sailis.</strong> {{ highlight.title }} ·
      {{ highlight.journal }} · {{ highlight.year }} · Conceptual signal-resolution circuit framework.
    </span>
    <a class="highlight-related-link" href="/publications/">View related publications ↗</a>
  </figcaption>
</figure>
{%- endif %}

<div class="about-explorer reveal">
  <div class="about-explorer-heading">
    <span class="about-eyebrow">Explore my work</span>
    <p>Select a focus.</p>
  </div>

  <div class="about-tabs" role="tablist" aria-label="Research areas">
    <button class="about-tab is-active" id="focus-tab-toxicology" type="button" role="tab" aria-selected="true" aria-controls="about-panel-toxicology" data-about-panel="toxicology">Toxicology</button>
    <button class="about-tab" id="focus-tab-mechanisms" type="button" role="tab" aria-selected="false" aria-controls="about-panel-mechanisms" data-about-panel="mechanisms">Mechanisms</button>
    <button class="about-tab" id="focus-tab-evidence" type="button" role="tab" aria-selected="false" aria-controls="about-panel-evidence" data-about-panel="evidence">Evidence & writing</button>
  </div>

  <div class="about-panel-wrap" aria-live="polite">
    <div class="about-panel focus-panel is-active"
         id="about-panel-toxicology"
         data-focus="toxicology"
         role="tabpanel"
         aria-labelledby="focus-tab-toxicology"
         style="--step-index: 0;">
      <div class="focus-panel-head">
        <div class="about-panel-icon">01</div>
        <div>
          <span class="focus-kicker">Exposure → response</span>
          <h3>Inhaled toxicants</h3>
        </div>
        <span class="focus-status">active focus</span>
      </div>
      <div class="focus-panel-body">
        <p class="focus-intro">
          Exposure is treated as the starting condition: characterize what enters the system,
          define dose and context, trace biological response, then assess what the evidence
          supports about human relevance.
        </p>
        <div class="focus-workflow" aria-label="Toxicology workflow">
          <span class="focus-signal" aria-hidden="true"></span>
          <div class="focus-step" style="--step-index:0;"><span class="focus-step-node">01</span><strong>Exposure</strong><small>Aerosol, tobacco, route</small></div>
          <div class="focus-step" style="--step-index:1;"><span class="focus-step-node">02</span><strong>Dose & context</strong><small>Concentration, timing</small></div>
          <div class="focus-step" style="--step-index:2;"><span class="focus-step-node">03</span><strong>Biological response</strong><small>Organ, cell, pathway</small></div>
          <div class="focus-step" style="--step-index:3;"><span class="focus-step-node">04</span><strong>Human relevance</strong><small>Risk, uncertainty</small></div>
        </div>
        <div class="focus-detail-grid">
          <div class="focus-detail-card"><span>Questions</span><strong>What is inhaled?</strong><p>Which constituents, particles, doses and exposure patterns are biologically plausible?</p></div>
          <div class="focus-detail-card"><span>Evidence</span><strong>What changes?</strong><p>Integrate respiratory, reproductive, metabolic and systemic endpoints across models.</p></div>
          <div class="focus-detail-card"><span>Decision</span><strong>What can be concluded?</strong><p>Separate exposure plausibility, mechanistic evidence and demonstrated human effects.</p></div>
        </div>
        <div class="focus-output"><span>Workflow output</span><strong>Exposure profile → biological endpoint → human-health interpretation</strong></div>
      </div>
    </div>

    <div class="about-panel focus-panel"
         id="about-panel-mechanisms"
         data-focus="mechanisms"
         role="tabpanel"
         aria-labelledby="focus-tab-mechanisms"
         hidden>
      <div class="focus-panel-head">
        <div class="about-panel-icon">02</div>
        <div>
          <span class="focus-kicker">Trigger → network → resolution</span>
          <h3>Molecular mechanisms</h3>
        </div>
        <span class="focus-status">active focus</span>
      </div>
      <div class="focus-panel-body">
        <p class="focus-intro">
          Mechanistic analysis follows the causal chain from an initiating perturbation
          through molecular nodes and network behavior to adaptation, feedback,
          termination or persistent dysfunction.
        </p>
        <div class="focus-workflow" aria-label="Mechanistic biology workflow">
          <span class="focus-signal" aria-hidden="true"></span>
          <div class="focus-step" style="--step-index:0;"><span class="focus-step-node">01</span><strong>Trigger</strong><small>Stress, ligand, force</small></div>
          <div class="focus-step" style="--step-index:1;"><span class="focus-step-node">02</span><strong>Molecular node</strong><small>Receptor, kinase, factor</small></div>
          <div class="focus-step" style="--step-index:2;"><span class="focus-step-node">03</span><strong>Network response</strong><small>Feedback, crosstalk</small></div>
          <div class="focus-step" style="--step-index:3;"><span class="focus-step-node">04</span><strong>Resolution</strong><small>Adaptation, persistence</small></div>
        </div>
        <div class="focus-detail-grid">
          <div class="focus-detail-card"><span>Core systems</span><strong>NRF2–KEAP1 · CYP1A1</strong><p>Redox sensing, environmental response and signal-resolution behavior.</p></div>
          <div class="focus-detail-card"><span>Mechanochemical</span><strong>YAP/TAZ signaling</strong><p>Mechanical inputs, transcriptional control, feedback and cellular state.</p></div>
          <div class="focus-detail-card"><span>Temporal control</span><strong>Condensates · microRNA</strong><p>Signal timing, translational control and kinetic filtering of responses.</p></div>
        </div>
        <div class="focus-output"><span>Workflow output</span><strong>Perturbation → signaling circuit → feedback state → resolved phenotype</strong></div>
      </div>
    </div>

    <div class="about-panel focus-panel"
         id="about-panel-evidence"
         data-focus="evidence"
         role="tabpanel"
         aria-labelledby="focus-tab-evidence"
         hidden>
      <div class="focus-panel-head">
        <div class="about-panel-icon">03</div>
        <div>
          <span class="focus-kicker">Question → audit → synthesis</span>
          <h3>Evidence & scientific communication</h3>
        </div>
        <span class="focus-status">active focus</span>
      </div>
      <div class="focus-panel-body">
        <p class="focus-intro">
          Evidence work turns a broad scientific question into an auditable chain:
          retrieve relevant literature, interrogate study quality, map claims to evidence,
          synthesize agreement and uncertainty, and communicate the conclusion precisely.
        </p>
        <div class="focus-workflow" aria-label="Evidence workflow">
          <span class="focus-signal" aria-hidden="true"></span>
          <div class="focus-step" style="--step-index:0;"><span class="focus-step-node">01</span><strong>Question</strong><small>Scope the claim</small></div>
          <div class="focus-step" style="--step-index:1;"><span class="focus-step-node">02</span><strong>Retrieve</strong><small>Find the evidence</small></div>
          <div class="focus-step" style="--step-index:2;"><span class="focus-step-node">03</span><strong>Appraise</strong><small>Test quality, bias</small></div>
          <div class="focus-step" style="--step-index:3;"><span class="focus-step-node">04</span><strong>Synthesize</strong><small>Claim + uncertainty</small></div>
        </div>
        <div class="focus-detail-grid">
          <div class="focus-detail-card"><span>Audit</span><strong>Claim → source → support</strong><p>Trace statements to the evidence that actually supports them, not merely related citations.</p></div>
          <div class="focus-detail-card"><span>Writing</span><strong>Precision over volume</strong><p>Make methods, limitations, effect direction and uncertainty visible to the reader.</p></div>
          <div class="focus-detail-card"><span>Technology</span><strong>SciAudit AI</strong><p>Explore how evidence-critical research workflows can become structured and auditable.</p></div>
        </div>
        <div class="focus-output"><span>Workflow output</span><strong>Question → evidence map → calibrated conclusion → transparent communication</strong></div>
      </div>
    </div>
  </div>
</div>

<div class="about-support-note reveal" aria-label="Support independent research">
  <div class="about-support-copy">
    <span class="about-support-label">Support independent research</span>
    If you find my research, writing, or open scientific projects useful, you can
    <strong>support my independent work.</strong>
  </div>
  <a class="about-coffee-button" href="https://buymeacoffee.com/ardiebarrys" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee to support independent research">
    <span class="about-coffee-icon" aria-hidden="true">☕</span>
    Buy Me a Coffee
  </a>
</div>

<div class="about-two-column reveal">

  <div class="about-mini-card">
    <span class="about-card-label">Independent work</span>
    <h3>Cellular Signalling as Dynamic Regulatory Circuits</h3>
    <p>
      A research framework exploring signalling pathways as dynamic control
      systems rather than simple molecular switches, including the redoxostat
      concept in NRF2–KEAP1 biology and the YAP/TAZ mechanochemical
      signal-resolution circuit.
    </p>
    <a href="/projects/">Explore projects</a>
  </div>

  <div class="about-mini-card about-sciaudit-card">
    <span class="about-card-label">Building</span>
    <h3>SciAudit AI</h3>
    <p>
      An early-stage AI-assisted scientific evidence auditing project,
      initially developed from my own biomedical research workflow.
    </p>
    <a href="/sciaudit-ai/">Explore SciAudit AI</a>
  </div>

</div>

<div class="research-map reveal" aria-label="Research identity map">
  <div class="research-map-head">
    <div>
      <span class="about-eyebrow">Research identity</span>
      <h2>From exposure → mechanism → evidence</h2>
    </div>
    <span class="research-map-status"><i></i> active</span>
  </div>

  <div class="research-map-stage">
    <div class="research-orbit orbit-one"></div>
    <div class="research-orbit orbit-two"></div>
    <div class="research-orbit orbit-three"></div>

    <button class="research-node node-exposure is-active" type="button" data-node="exposure">
      <span class="node-index">01</span>
      <strong>Exposure</strong>
      <small>What enters the system?</small>
    </button>

    <button class="research-node node-mechanism" type="button" data-node="mechanism">
      <span class="node-index">02</span>
      <strong>Mechanism</strong>
      <small>What changes biologically?</small>
    </button>

    <button class="research-node node-evidence" type="button" data-node="evidence">
      <span class="node-index">03</span>
      <strong>Evidence</strong>
      <small>How strong is the conclusion?</small>
    </button>

    <div class="research-core">
      <span class="research-core-ring"></span>
      <span class="research-core-label">ARDIE<br><b>SCIENCE</b></span>
    </div>
  </div>

  <div class="research-map-detail" aria-live="polite">
    <span class="research-detail-index">01</span>
    <div>
      <h3>Exposure biology</h3>
      <p>Inhaled toxicants, tobacco and e-cigarette aerosol, exposure patterns and their implications for biological systems.</p>
    </div>
  </div>
</div>

<div class="research-timeline reveal">
  <div class="timeline-head">
    <span class="about-eyebrow">Trajectory</span>
    <span class="timeline-caption">research → synthesis → technology</span>
  </div>
  <div class="timeline-track">
    <div class="timeline-line"></div>
    <article class="timeline-item is-current">
      <span class="timeline-dot"></span>
      <span class="timeline-year">2020–2026</span>
      <h3>Doctoral research</h3>
      <p>Toxicology, reproductive health, molecular mechanisms and scientific evidence.</p>
    </article>
    <article class="timeline-item">
      <span class="timeline-dot"></span>
      <span class="timeline-year">Independent</span>
      <h3>Framework development</h3>
      <p>Dynamic regulatory circuits spanning redox and mechanical signaling, temporal decoding, feedback, termination and cellular memory.</p>
    </article>
    <article class="timeline-item">
      <span class="timeline-dot"></span>
      <span class="timeline-year">2025 →</span>
      <h3>SciAudit AI</h3>
      <p>Turning evidence-critical research workflows into an auditable AI-assisted system.</p>
    </article>
  </div>
</div>

<div class="keyword-box reveal">
  <div class="keyword-title">Focus</div>
  <div class="keyword-list">
    <span>E-cigarette toxicology</span>
    <span>Reproductive toxicology</span>
    <span>Endocrine disruption</span>
    <span>Mitochondrial dysfunction</span>
    <span>microRNA regulation</span>
    <span>Molecular toxicology</span>
    <span>Mechanotransduction</span>
    <span>YAP/TAZ signaling</span>
    <span>Signal resolution</span>
    <span>Scientific writing</span>
    <span>Evidence synthesis</span>
  </div>
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

<div class="home-section reveal">
  <div class="home-section-title">Latest News</div>
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
</div>

</div>

  </div>

  <div class="social">
  <div class="contact-icons">{% social_links %}</div>
  <div class="contact-note">
    For academic correspondence, please use the form on the <a href="/contact/">Contact page</a>. Last updated: {{ site.time | date: "%-d %B %Y" }}.
  </div>

</div>

<script>
  var profilePhoto = document.querySelector('.profile figure img');
  var customProfilePhoto = document.querySelector('.research-profile-photo');

  if (profilePhoto) {
    profilePhoto.alt = 'Ardie Barry Sailis';
  }

  if (customProfilePhoto) {
    customProfilePhoto.setAttribute('draggable', 'false');
    customProfilePhoto.setAttribute('aria-label', 'Ardie Barry Sailis profile photograph');
  }

  document.querySelectorAll('.research-profile-photo, .profile img, .profile-logo-links img, .profile-info img').forEach((img) => {
    img.setAttribute('draggable', 'false');

    img.addEventListener('dragstart', (event) => {
      event.preventDefault();
    });

    img.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
  });
  (function () {
    var nodeData = {
      exposure: {
        index: "01",
        title: "Exposure biology",
        text: "Inhaled toxicants, tobacco and e-cigarette aerosol, exposure patterns and their implications for biological systems."
      },
      mechanism: {
        index: "02",
        title: "Mechanistic biology",
        text: "Molecular responses including mitochondrial dysfunction, steroidogenesis, microRNA regulation, testosterone signalling and cellular stress."
      },
      evidence: {
        index: "03",
        title: "Evidence integrity",
        text: "Comparing studies, interrogating methodology, tracing claims to supporting evidence and making uncertainty visible."
      }
    };

    var researchNodes = document.querySelectorAll(".research-node");
    var researchDetail = document.querySelector(".research-map-detail");

    researchNodes.forEach(function (node) {
      node.addEventListener("click", function () {
        var key = node.getAttribute("data-node");
        var data = nodeData[key];
        if (!data || !researchDetail) return;

        researchNodes.forEach(function (item) {
          item.classList.toggle("is-active", item === node);
        });

        researchDetail.innerHTML =
          '<span class="research-detail-index">' + data.index + '</span>' +
          '<div><h3>' + data.title + '</h3><p>' + data.text + '</p></div>';

        researchDetail.style.animation = "none";
        void researchDetail.offsetWidth;
        researchDetail.style.animation = "detail-in .35s ease both";
      });
    });

    var tabs = document.querySelectorAll(".about-tab");
    var panels = document.querySelectorAll(".about-panel");

    function restartFocusAnimation(panel) {
      if (!panel) return;
      panel.classList.remove("focus-animation-restart");
      void panel.offsetWidth;
      panel.classList.add("focus-animation-restart");

      var steps = panel.querySelectorAll(".focus-step");
      steps.forEach(function (step, index) {
        step.style.animation = "none";
        step.style.opacity = "0";
        step.style.transform = "translateY(8px)";
        void step.offsetWidth;
        step.style.animation = "";
        step.style.setProperty("--step-index", index);
      });
    }

    function activateFocus(key, announce) {
      tabs.forEach(function (item) {
        var active = item.getAttribute("data-about-panel") === key;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", active ? "true" : "false");
        item.setAttribute("tabindex", active ? "0" : "-1");
      });

      panels.forEach(function (panel) {
        var active = panel.getAttribute("data-focus") === key;
        panel.hidden = !active;
        panel.classList.toggle("is-active", active);
        if (active) {
          restartFocusAnimation(panel);
        }
      });

      if (announce) {
        var activeTab = document.getElementById("focus-tab-" + key);
        if (activeTab) activeTab.focus();
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activateFocus(tab.getAttribute("data-about-panel"), false);
      });

      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" &&
            event.key !== "Home" && event.key !== "End") return;

        event.preventDefault();
        var next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;

        var nextKey = tabs[next].getAttribute("data-about-panel");
        activateFocus(nextKey, true);
      });
    });

    panels.forEach(function (panel) {
      panel.addEventListener("animationend", function () {
        panel.classList.remove("focus-animation-restart");
      });
    });

    activateFocus("toxicology", false);

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targets = document.querySelectorAll(
      ".about-modern .reveal, .bio-text > p, .keyword-box, .highlight-study, .news-list li, .profile-logo-links a, .profile-info > p"
    );

    if (reduce || !("IntersectionObserver" in window)) {
      return;
    }

    targets.forEach(function (el) {
      el.classList.add("reveal");
      if (el.matches(".profile-logo-links a, .news-list li")) {
        var index = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.style.setProperty("--reveal-delay", index * 0.07 + "s");
      }
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    targets.forEach(function (el) { io.observe(el); });
  })();
</script>
