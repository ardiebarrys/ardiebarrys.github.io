---
layout: page
title: Ardie Barry Sailis
permalink: /
nav: false
nav_order: 1
description: Doctoral Researcher · Toxicology · Scientific Evidence


selected_papers: false
social: false
---

<style>

  /* ==========================================================
     ABOUT IDENTITY CARD
     Rendered inside the page body rather than through the theme's
     floating profile component. This prevents layout collisions.
     ========================================================== */
  .about-shell {
    width: min(1100px, 100%);
    margin: 0 auto;
  }

  .research-profile {
    position: relative;
    display: grid;
    grid-template-columns: 170px minmax(0, 1fr);
    gap: 1.35rem 1.5rem;
    align-items: center;
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
    width: 170px;
    height: 170px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 24px;
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
    max-width: 105px;
    max-height: 29px;
    object-fit: contain;
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
      width: 150px;
      height: 150px;
      margin: .1rem auto .85rem;
      border-radius: 22px;
    }

    .research-profile-info p {
      text-align: center !important;
      text-align-last: center !important;
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
      width: 138px;
      height: 138px;
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

    .profile img,
  .profile-logo-links img,
  .profile-info img {
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
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

  .about-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.7rem;
    margin: 0 0 1.6rem;
  }

  .about-stats > div {
    padding: 1rem 1.05rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--surface);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .about-stats > div:hover {
    transform: translateY(-4px);
    border-color: var(--line-strong);
    box-shadow: 0 12px 25px rgba(37,99,235,0.10);
  }

  .about-stats strong,
  .about-stats span {
    display: block;
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

  .about-tab {
    appearance: none;
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0.5rem 0.78rem;
    background: transparent;
    color: var(--muted);
    font: inherit;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.22s ease;
  }

  .about-tab:hover,
  .about-tab.is-active {
    border-color: var(--global-theme-color);
    background: var(--global-theme-color);
    color: #fff;
    transform: translateY(-2px);
  }

  .about-panel-wrap {
    min-height: 125px;
    position: relative;
    overflow: hidden;
  }

  .about-panel {
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
    padding: 1.1rem;
    border-radius: 11px;
    background: var(--surface-strong);
    animation: about-panel-in 0.4s cubic-bezier(0.2,0.7,0.2,1) both;
  }

  .about-panel[hidden] { display: none; }

  .about-panel-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(96,165,250,0.22);
    border-radius: 10px;
    background: rgba(37,99,235,0.08);
    color: var(--accent);
    font-size: 0.75rem;
    font-weight: 850;
  }

  .about-panel h3 {
    margin: 0 0 0.3rem;
    color: var(--text-strong);
    font-size: 1.05rem;
  }

  .about-panel p {
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.55;
    text-align: left !important;
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

  .about-support-note {
    margin: 1rem 0 1.4rem;
    text-align: left !important;
    line-height: 1.55;
  }

  .bio-text a.about-coffee-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    margin-left: 0.35rem;
    padding: 0.42rem 0.75rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    color: var(--accent) !important;
    font-weight: 700;
    text-decoration: none !important;
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.1);
    white-space: nowrap;
  }

  .bio-text a.about-coffee-button:hover {
    border-color: var(--global-theme-color);
    background: var(--surface-strong);
    color: var(--global-theme-color) !important;
  }

  .about-coffee-icon {
    font-size: 0.95rem;
    line-height: 1;
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

  .highlight-study {
    margin: 2rem 0 2.5rem;
    padding: 1.25rem 1.4rem;
    border-left: 5px solid var(--global-theme-color);
    border-radius: 10px;
    background: var(--surface);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
  }

  .highlight-label {
    margin-bottom: 0.4rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .highlight-study h2 {
    margin: 0 0 0.65rem;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .highlight-study p {
    margin-bottom: 0.75rem;
    text-align: left !important;
    line-height: 1.55;
  }

  .highlight-citation {
    padding: 0.75rem 0.85rem;
    border-radius: 8px;
    background: var(--surface-strong);
  }

  .highlight-study a {
    color: var(--global-theme-color) !important;
    font-weight: 700;
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

  @media (min-width: 992px) {
    .bio-text {
      max-width: calc(100% - 430px);
    }
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
  .open-roles {
    margin: 1.75rem 0 2rem;
    padding: 1.25rem 1.4rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--surface);
  }

  .open-roles .home-section-title {
    margin: 0 0 0.5rem;
  }

  .open-roles p {
    margin-bottom: 0.6rem !important;
    text-align: left !important;
  }

  .open-roles ul {
    margin: 0 0 1rem;
    padding-left: 1.2rem;
  }

  .open-roles li {
    margin-bottom: 0.3rem;
    line-height: 1.5;
  }

  .open-roles-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .bio-text a.open-roles-link {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 1px solid var(--line-strong);
    border-radius: 8px;
    color: var(--text-strong) !important;
    font-weight: 600;
    text-decoration: none !important;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .bio-text a.open-roles-link.is-primary {
    border-color: var(--button);
    background: var(--button);
  }

  .bio-text a.open-roles-link:hover {
    border-color: var(--accent);
    background: var(--surface-strong);
  }

  .bio-text a.open-roles-link.is-primary:hover {
    border-color: var(--button-hover);
    background: var(--button-hover);
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
    .open-roles-actions { display: grid; grid-template-columns: 1fr; }
    .bio-text a.open-roles-link { width: 100%; box-sizing: border-box; justify-content: center; }
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
    .about-intro::after, .research-map-status i, .research-orbit, .research-core-ring { animation: none !important; }
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

<div class="about-stats reveal">
  {%- assign total_papers = site.data.papers | size -%}
  <div><strong>{{ total_papers }}</strong><span>peer-reviewed papers</span></div>
  <div><strong>7</strong><span>international journals reviewed</span></div>
  <div><strong>PhD</strong><span>Pharmaceutical Sciences</span></div>
  <div><strong>AI + Science</strong><span>building SciAudit AI</span></div>
</div>

<div class="about-explorer reveal">
  <div class="about-explorer-heading">
    <span class="about-eyebrow">Explore my work</span>
    <p>Select a focus.</p>
  </div>

  <div class="about-tabs" role="tablist" aria-label="Research areas">
    <button class="about-tab is-active" type="button" role="tab" aria-selected="true" data-about-panel="toxicology">Toxicology</button>
    <button class="about-tab" type="button" role="tab" aria-selected="false" data-about-panel="mechanisms">Mechanisms</button>
    <button class="about-tab" type="button" role="tab" aria-selected="false" data-about-panel="evidence">Evidence & writing</button>
  </div>

  <div class="about-panel-wrap">
    <div class="about-panel is-active" id="about-panel-toxicology" role="tabpanel">
      <div class="about-panel-icon">01</div>
      <div>
        <h3>Inhaled toxicants</h3>
        <p>
          E-cigarette and tobacco exposure, respiratory effects, secondhand
          aerosol, and implications for human health.
        </p>
      </div>
    </div>

    <div class="about-panel" id="about-panel-mechanisms" role="tabpanel" hidden>
      <div class="about-panel-icon">02</div>
      <div>
        <h3>Molecular mechanisms</h3>
        <p>
          Mitochondrial dysfunction, steroidogenesis, microRNA regulation,
          testosterone signalling, oxidative stress and cellular responses.
        </p>
      </div>
    </div>

    <div class="about-panel" id="about-panel-evidence" role="tabpanel" hidden>
      <div class="about-panel-icon">03</div>
      <div>
        <h3>Evidence & scientific communication</h3>
        <p>
          Literature synthesis, critical appraisal, scientific writing,
          peer review and structured evidence analysis.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="about-support-note reveal">
  If you find my research, writing, or open scientific projects useful, you can support my independent work.
  <a class="about-coffee-button" href="https://buymeacoffee.com/ardiebarrys" target="_blank" rel="noopener noreferrer">
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
      concept in NRF2–KEAP1 biology.
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
      <p>Dynamic regulatory circuits and mechanistic thinking beyond static pathway diagrams.</p>
    </article>
    <article class="timeline-item">
      <span class="timeline-dot"></span>
      <span class="timeline-year">2025 →</span>
      <h3>SciAudit AI</h3>
      <p>Turning evidence-critical research workflows into an auditable AI-assisted system.</p>
    </article>
  </div>
</div>

<div class="open-roles reveal">
  <h2 class="home-section-title">Open to roles</h2>
  <p>Research, medical affairs, regulatory science and scientific communication.</p>
  <div class="open-roles-actions">
    <a class="open-roles-link is-primary" href="/contact/">Get in touch</a>
    <a class="open-roles-link" href="/cv/">View CV</a>
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
    <span>Scientific writing</span>
    <span>Evidence synthesis</span>
  </div>
</div>

{%- assign highlight = site.data.papers | where_exp: "p", "p.highlight" | first -%}
{%- if highlight %}

<div class="highlight-study reveal">
  <div class="highlight-label">Highlighted Study</div>
  <h2>{{ highlight.short }}</h2>
  <p class="highlight-citation">
    <strong>{{ highlight.title }}</strong><br>
    {{ highlight.published | date: "%B %Y" }}, <em>{{ highlight.journal }}</em><br>
    DOI: <a href="https://doi.org/{{ highlight.doi }}">{{ highlight.doi }}</a>
  </p>
  <p>{{ highlight.highlight }}</p>
  <a href="/publications/">View related publications</a>
</div>
{%- endif %}

<div class="home-section reveal">
  <div class="home-section-title">Selected Papers</div>
  <div class="selected-papers">
    {%- assign selected_papers = site.data.papers | where: "selected", true -%}
    {%- for paper in selected_papers %}
    <a class="selected-paper" href="https://doi.org/{{ paper.doi }}">
      <span class="selected-paper-journal">{{ paper.journal }}, {{ paper.year }}</span>
      <span class="selected-paper-title">{{ paper.title }}</span>
    </a>
    {%- endfor %}
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
  if (profilePhoto) {
    profilePhoto.alt = 'Ardie Barry Sailis';
  }

  document.querySelectorAll('.profile img, .profile-logo-links img, .profile-info img').forEach((img) => {
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

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var key = tab.getAttribute("data-about-panel");

        tabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-selected", active ? "true" : "false");
        });

        panels.forEach(function (panel) {
          var active = panel.id === "about-panel-" + key;
          panel.hidden = !active;
          panel.classList.toggle("is-active", active);
        });
      });
    });

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targets = document.querySelectorAll(
      ".about-modern .reveal, .bio-text > p, .open-roles, .keyword-box, .highlight-study, .home-section > .home-section-title, .selected-paper, .news-list li, .profile-logo-links a, .profile-info > p"
    );

    if (reduce || !("IntersectionObserver" in window)) {
      return;
    }

    targets.forEach(function (el) {
      el.classList.add("reveal");
      if (el.matches(".profile-logo-links a, .selected-paper, .news-list li")) {
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
