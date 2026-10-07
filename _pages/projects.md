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
    color: var(--text-strong);
    font-size: 1.5rem;
    font-weight: 700;
  }

  .project-card {
    width: 100%;
    padding: 0;
    border: 1px solid var(--line);
    border-left: 5px solid var(--global-theme-color);
    border-radius: 10px;
    background: var(--surface);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
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
    background: var(--surface-strong);
  }

  .project-card[open] summary {
    border-bottom: 1px solid var(--line);
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
    background: var(--surface-strong);
    overflow: hidden;
  }

  .project-progress-fill {
    display: block;
    width: var(--progress);
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #1d4ed8, #2563eb, #60a5fa);
    transform: scaleX(0);
    transform-origin: left;
    animation: fillProgress 1.4s ease forwards;
  }

  .project-progress-value {
    min-width: 38px;
    color: var(--accent);
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

  .project-list a {
    color: var(--accent) !important;
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


<style>
/* ============================================================
   PROJECT STORY ENGINE
   A deliberately layered animation system for the Projects page.
   The DOM remains semantic and usable without JavaScript.
   ============================================================ */

.projects-page {
  --ps-accent: var(--global-theme-color);
  --ps-accent-2: #60a5fa;
  --ps-accent-3: #38bdf8;
  --ps-glow: rgba(96,165,250,.24);
  --ps-glow-strong: rgba(96,165,250,.42);
  --ps-ink: var(--text-strong);
  --ps-muted: var(--text-muted);
  --ps-line: var(--line);
  --ps-surface: var(--surface);
  --ps-surface-2: var(--surface-strong);
}

.project-card {
  position: relative;
  isolation: isolate;
  transition:
    border-color .45s ease,
    box-shadow .55s ease,
    transform .45s cubic-bezier(.2,.8,.2,1);
}

.project-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  z-index: -2;
  border-radius: inherit;
  background:
    radial-gradient(circle at 12% 8%, rgba(96,165,250,.18), transparent 28%),
    radial-gradient(circle at 88% 92%, rgba(56,189,248,.10), transparent 30%);
  opacity: 0;
  transition: opacity .7s ease;
  pointer-events: none;
}

.project-card::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(147,197,253,.7),
    transparent
  );
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.project-card[open] {
  border-color: rgba(147,197,253,.42);
  box-shadow:
    0 20px 55px rgba(0,0,0,.28),
    0 0 0 1px rgba(147,197,253,.06),
    0 0 60px rgba(59,130,246,.08);
  transform: translateY(-2px);
}

.project-card[open]::before { opacity: 1; }
.project-card[open]::after {
  opacity: 1;
  animation: projectScanLine 2.4s cubic-bezier(.4,0,.2,1) infinite;
}

@keyframes projectScanLine {
  0% { transform: translateY(-110%); }
  52%,100% { transform: translateY(110%); }
}

.project-card summary {
  position: relative;
  z-index: 5;
  min-height: 70px;
}

.project-card summary::-webkit-details-marker { display: none; }

.project-summary-title {
  display: inline-flex;
  align-items: center;
  gap: .65rem;
}

.project-summary-title::before {
  content: "";
  width: .55rem;
  height: .55rem;
  border: 1px solid currentColor;
  border-radius: 50%;
  box-shadow: 0 0 0 0 var(--ps-glow);
  transition: box-shadow .45s ease, background .45s ease, transform .45s ease;
}

.project-card[open] .project-summary-title::before {
  background: currentColor;
  box-shadow: 0 0 0 7px rgba(96,165,250,.07), 0 0 18px var(--ps-glow-strong);
  transform: scale(1.08);
}

.project-card summary::after {
  content: "EXPAND";
  margin-left: auto;
  color: var(--text-muted);
  font-size: .62rem;
  letter-spacing: .14em;
  opacity: .8;
  transition: transform .35s ease, color .35s ease;
}

.project-card[open] summary::after {
  content: "COLLAPSE";
  color: var(--global-theme-color);
  transform: translateY(-1px);
}

/* -------------------- Story stage -------------------- */

.project-story {
  position: relative;
  margin: .15rem 0 1.25rem;
  padding: 1.15rem 0 0;
  overflow: hidden;
}

.project-story-intro {
  display: grid;
  grid-template-columns: minmax(0,1fr) auto;
  gap: 1rem;
  align-items: end;
  margin-bottom: 1.25rem;
}

.project-story-kicker {
  margin: 0 0 .35rem;
  color: var(--global-theme-color);
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.project-story-title {
  margin: 0;
  color: var(--text-strong);
  font-size: clamp(1.15rem,2.4vw,1.7rem);
  line-height: 1.12;
}

.project-story-caption {
  max-width: 520px;
  margin: .55rem 0 0;
  color: var(--text-muted);
  font-size: .9rem;
  line-height: 1.55;
}

.project-story-status {
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  padding: .45rem .65rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--text-muted);
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  white-space: nowrap;
}

.project-story-status i {
  width: .42rem;
  height: .42rem;
  border-radius: 50%;
  background: var(--global-theme-color);
  box-shadow: 0 0 12px var(--ps-glow-strong);
  animation: storyPulse 1.7s ease-in-out infinite;
}

@keyframes storyPulse {
  0%,100% { transform: scale(.75); opacity:.55; }
  50% { transform: scale(1); opacity:1; }
}

.project-story-track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--story-count,5), minmax(145px,1fr));
  gap: 0;
  padding: 1rem 0 1.15rem;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(147,197,253,.28) transparent;
}

.project-story-track::before {
  content: "";
  position: absolute;
  top: 2.18rem;
  left: 2.15rem;
  right: 2.15rem;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent 0,
      rgba(147,197,253,.18) 4%,
      rgba(147,197,253,.42) 50%,
      rgba(147,197,253,.18) 96%,
      transparent 100%
    );
  transform: scaleX(0);
  transform-origin: left center;
}

.project-card[open] .project-story-track::before {
  animation: storyLineDraw 1.4s .18s cubic-bezier(.2,.8,.2,1) forwards;
}

@keyframes storyLineDraw {
  to { transform: scaleX(1); }
}

.story-step {
  position: relative;
  min-width: 145px;
  padding: 0 .55rem;
  opacity: 0;
  transform: translateY(20px) scale(.97);
}

.project-card[open] .story-step {
  animation: storyStepIn .72s cubic-bezier(.2,.85,.2,1) forwards;
  animation-delay: calc(var(--step) * 100ms + 180ms);
}

@keyframes storyStepIn {
  0% { opacity:0; transform:translateY(20px) scale(.97); }
  70% { opacity:1; transform:translateY(-2px) scale(1.01); }
  100% { opacity:1; transform:translateY(0) scale(1); }
}

.story-node-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  height: 2.7rem;
  padding-top: .58rem;
  box-sizing: border-box;
}

.story-node {
  position: relative;
  display: grid;
  place-items: center;
  flex: 0 0 2rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(147,197,253,.55);
  border-radius: 50%;
  background: var(--surface);
  color: var(--global-theme-color);
  font-size: .65rem;
  font-weight: 900;
  box-shadow: 0 0 0 6px rgba(96,165,250,.035);
  transition: transform .35s ease, box-shadow .35s ease, background .35s ease;
}

.story-node::before,
.story-node::after {
  content: "";
  position: absolute;
  inset: -6px;
  border: 1px solid rgba(147,197,253,.13);
  border-radius: 50%;
  transform: scale(.72);
  opacity: 0;
}

.project-card[open] .story-node::before {
  animation: nodeRipple 1.8s calc(var(--step) * 120ms + .8s) ease-out infinite;
}
.project-card[open] .story-node::after {
  animation: nodeRipple 1.8s calc(var(--step) * 120ms + 1.05s) ease-out infinite;
}

@keyframes nodeRipple {
  0% { transform:scale(.72); opacity:0; }
  25% { opacity:.55; }
  100% { transform:scale(1.65); opacity:0; }
}

.story-step:hover .story-node {
  transform: translateY(-3px) scale(1.08);
  background: rgba(96,165,250,.09);
  box-shadow:
    0 0 0 7px rgba(96,165,250,.05),
    0 0 28px rgba(96,165,250,.18);
}

.story-index {
  position: absolute;
  top: -.05rem;
  left: 50%;
  width: max-content;
  transform: translateX(-50%);
  color: var(--text-muted);
  font-size: .48rem;
  font-weight: 700;
  letter-spacing: .08em;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
}

.story-step h4 {
  margin: .6rem 0 .35rem;
  color: var(--text-strong);
  font-size: .84rem;
  line-height: 1.25;
  text-align: center;
}

.story-step p {
  margin: 0 auto;
  max-width: 180px;
  color: var(--text-muted);
  font-size: .72rem;
  line-height: 1.48;
  text-align: center;
}

/* -------------------- Animated visual field -------------------- */

.story-visual {
  position: relative;
  min-height: 175px;
  margin: 1rem 0 1.35rem;
  border: 1px solid rgba(147,197,253,.13);
  border-radius: 14px;
  background:
    radial-gradient(circle at 50% 50%, rgba(59,130,246,.09), transparent 38%),
    linear-gradient(180deg, rgba(255,255,255,.018), rgba(0,0,0,.08));
  overflow: hidden;
  contain: layout paint;
}

.story-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(147,197,253,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(147,197,253,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle at center, black, transparent 76%);
  opacity: .65;
}

.story-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 0%,
    rgba(147,197,253,.06) 42%,
    rgba(147,197,253,.17) 50%,
    rgba(147,197,253,.06) 58%,
    transparent 100%
  );
  transform: translateX(-120%);
  pointer-events: none;
}

.project-card[open] .story-visual::after {
  animation: visualSweep 3.6s 1.15s ease-in-out infinite;
}

@keyframes visualSweep {
  0%,18% { transform:translateX(-120%); }
  55%,100% { transform:translateX(120%); }
}

.story-core {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 78px;
  height: 78px;
  border: 1px solid rgba(147,197,253,.55);
  border-radius: 50%;
  background: rgba(8,17,48,.88);
  color: var(--global-theme-color);
  font-size: .62rem;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
  transform: translate(-50%,-50%) scale(.75);
  box-shadow:
    0 0 0 10px rgba(96,165,250,.035),
    0 0 40px rgba(59,130,246,.13);
}

.project-card[open] .story-core {
  animation: coreReveal 1.1s .55s cubic-bezier(.16,1,.3,1) forwards, coreFloat 4s 1.7s ease-in-out infinite;
}

@keyframes coreReveal {
  to { transform:translate(-50%,-50%) scale(1); }
}

@keyframes coreFloat {
  0%,100% { margin-top:0; }
  50% { margin-top:-5px; }
}

.story-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--orbit-size, 210px);
  height: var(--orbit-size, 110px);
  border: 1px solid rgba(147,197,253,.13);
  border-radius: 50%;
  transform: translate(-50%,-50%) rotate(var(--orbit-rotation,0deg));
}

.story-orbit::before,
.story-orbit::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--global-theme-color);
  box-shadow: 0 0 15px var(--ps-glow-strong);
}

.story-orbit::before { left: 12%; top: 50%; }
.story-orbit::after { right: 12%; top: 50%; }

.project-card[open] .story-orbit {
  animation: orbitBreathe 4.5s ease-in-out infinite;
}

@keyframes orbitBreathe {
  0%,100% { opacity:.45; }
  50% { opacity:.9; }
}

.story-particle {
  position: absolute;
  z-index: 4;
  width: var(--size,4px);
  height: var(--size,4px);
  border-radius: 50%;
  background: var(--global-theme-color);
  box-shadow: 0 0 10px rgba(147,197,253,.7);
  opacity: 0;
  left: var(--x);
  top: var(--y);
}

.project-card[open] .story-particle {
  animation: particleDrift var(--dur,4s) var(--delay,0s) ease-in-out infinite;
}

@keyframes particleDrift {
  0% { opacity:0; transform:translate3d(0,8px,0) scale(.65); }
  18% { opacity:.75; }
  50% { opacity:.35; transform:translate3d(var(--dx,10px),var(--dy,-12px),0) scale(1); }
  82% { opacity:.72; }
  100% { opacity:0; transform:translate3d(0,-18px,0) scale(.55); }
}

.story-visual-label {
  position: absolute;
  z-index: 5;
  left: 1rem;
  bottom: .85rem;
  color: var(--text-muted);
  font-size: .58rem;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.story-visual-label strong {
  color: var(--global-theme-color);
}

/* -------------------- Evidence rail -------------------- */

.project-evidence {
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(210px,.38fr);
  gap: 1rem;
  margin-top: .25rem;
}

.project-evidence-box {
  min-width: 0;
  padding: .95rem 1rem;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: rgba(255,255,255,.012);
  opacity: 0;
  transform: translateY(12px);
}

.project-card[open] .project-evidence-box {
  animation: evidenceIn .65s cubic-bezier(.2,.8,.2,1) forwards;
  animation-delay: calc(var(--evidence-delay,0) * 1ms);
}

@keyframes evidenceIn {
  to { opacity:1; transform:translateY(0); }
}

.project-evidence-label {
  margin: 0 0 .55rem;
  color: var(--global-theme-color);
  font-size: .62rem;
  font-weight: 900;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.project-evidence-box p {
  margin: 0 !important;
  color: var(--text-muted);
  font-size: .8rem;
  line-height: 1.5;
}

.project-evidence-box a {
  color: var(--accent) !important;
}

.project-evidence-box strong {
  color: var(--text-strong);
}

/* -------------------- Animated paper list -------------------- */

.project-paper-list {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: .65rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.project-paper {
  position: relative;
  min-width: 0;
  padding: .8rem .85rem .8rem 2.1rem;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: rgba(255,255,255,.012);
  opacity: 0;
  transform: translateY(10px);
}

.project-card[open] .project-paper {
  animation: paperIn .55s cubic-bezier(.2,.8,.2,1) forwards;
  animation-delay: calc(var(--paper) * 45ms + 720ms);
}

@keyframes paperIn {
  to { opacity:1; transform:translateY(0); }
}

.project-paper::before {
  content: "";
  position: absolute;
  left: .85rem;
  top: 1rem;
  width: .55rem;
  height: .55rem;
  border: 1px solid rgba(147,197,253,.55);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(96,165,250,.04);
}

.project-paper::after {
  content: "";
  position: absolute;
  left: 1.11rem;
  top: 1.55rem;
  width: 1px;
  height: calc(100% - 1.1rem);
  background: linear-gradient(var(--line), transparent);
}

.project-paper:last-child::after { display:none; }

.project-paper a {
  color: var(--text-strong) !important;
  font-size: .78rem;
  font-weight: 700;
  line-height: 1.35;
  text-decoration: none;
}

.project-paper a:hover { color: var(--global-theme-color) !important; }

.project-paper small {
  display: block;
  margin-top: .25rem;
  color: var(--text-muted);
  font-size: .62rem;
  line-height: 1.35;
}

/* -------------------- Numbers / metrics -------------------- */

.project-metrics {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: .65rem;
  margin: 1rem 0 0;
}

.project-metric {
  padding: .8rem;
  border: 1px solid var(--line);
  border-radius: 10px;
  text-align: center;
  opacity: 0;
  transform: scale(.94);
}

.project-card[open] .project-metric {
  animation: metricIn .6s cubic-bezier(.2,.85,.2,1) forwards;
  animation-delay: calc(var(--metric) * 110ms + 600ms);
}

@keyframes metricIn {
  60% { opacity:1; transform:scale(1.025); }
  100% { opacity:1; transform:scale(1); }
}

.project-metric-value {
  display: block;
  color: var(--global-theme-color);
  font-size: 1.35rem;
  font-weight: 900;
  line-height: 1;
}

.project-metric-label {
  display: block;
  margin-top: .35rem;
  color: var(--text-muted);
  font-size: .6rem;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: .06em;
}

/* -------------------- Special story visual variants -------------------- */

.story-visual[data-theme="thesis"] .story-core {
  border-color: rgba(96,165,250,.7);
}

.story-visual[data-theme="thesis"] .story-orbit:nth-of-type(1) {
  animation-duration: 5s;
}

.story-visual[data-theme="framework"] .story-core {
  border-radius: 50%;
  transform: translate(-50%,-50%) scale(.75);
}

.project-card[open] .story-visual[data-theme="framework"] .story-core {
  animation: frameworkCore 1s .55s cubic-bezier(.16,1,.3,1) forwards, coreFloat 4.2s 1.55s ease-in-out infinite;
}

@keyframes frameworkCore {
  to { transform:translate(-50%,-50%) scale(1); }
}

.story-visual[data-theme="framework"] .story-orbit {
  border-radius: 35%;
}

.story-visual[data-theme="audit"] .story-core {
  border-radius: 14px;
  width: 88px;
  height: 58px;
}

.story-visual[data-theme="audit"] .story-orbit {
  border-radius: 18px;
}

.story-visual[data-theme="misc"] .story-core {
  border-radius: 18px;
}

/* -------------------- Expand transition -------------------- */

.project-card-content {
  position: relative;
  padding: 1.35rem;
}

.project-card[open] .project-card-content {
  animation: contentOpen .65s cubic-bezier(.2,.8,.2,1) both;
}

@keyframes contentOpen {
  from { opacity:.55; transform:translateY(-7px); }
  to { opacity:1; transform:translateY(0); }
}

.project-card-content > h2,
.project-card-content > p,
.project-card-content > .project-list {
  position: relative;
  z-index: 2;
}

.project-card-content > h2 {
  animation: headingReveal .55s .08s cubic-bezier(.2,.8,.2,1) both;
}

@keyframes headingReveal {
  from { opacity:0; transform:translateX(-12px); }
  to { opacity:1; transform:translateX(0); }
}

/* -------------------- Mobile -------------------- */

@media (max-width: 900px) {
  .project-story-intro {
    grid-template-columns: 1fr;
  }

  .project-story-status {
    justify-self: start;
  }

  .project-story-track {
    grid-template-columns: repeat(var(--story-count,5), minmax(155px,1fr));
  }

  .project-evidence {
    grid-template-columns: 1fr;
  }

  .project-paper-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  /* On phones the story becomes a readable vertical sequence.
     This removes horizontal clipping and keeps every node/text pair centered. */
  .project-story-track {
    display: grid;
    grid-template-columns: 1fr;
    gap: .9rem;
    overflow: visible;
    padding: 1rem .15rem .35rem;
  }

  .project-story-track::before {
    top: 2.15rem;
    bottom: 2.1rem;
    left: 50%;
    right: auto;
    width: 1px;
    height: auto;
    transform: scaleY(0);
    transform-origin: top center;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(147,197,253,.42) 8%,
      rgba(147,197,253,.18) 92%,
      transparent
    );
  }

  .project-card[open] .project-story-track::before {
    animation: storyLineDrawMobile 1.4s .18s cubic-bezier(.2,.8,.2,1) forwards;
  }

  @keyframes storyLineDrawMobile {
    to { transform: scaleY(1); }
  }

  .story-step {
    min-width: 0;
    width: 100%;
    padding: .15rem .5rem .7rem;
    box-sizing: border-box;
  }

  .story-step h4,
  .story-step p {
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  .story-node-wrap {
    height: 3rem;
  }

  .story-index {
    top: .05rem;
  }

  .project-card {
    border-left-width: 3px;
    border-radius: 9px;
  }

  .project-card summary {
    min-height: 62px;
    padding: .95rem 1rem;
  }

  .project-card summary::after {
    margin-left: 0;
  }

  .project-card-content {
    padding: 1rem;
  }

  .project-story {
    padding-top: .75rem;
  }

  .story-visual {
    min-height: 150px;
  }

  .story-core {
    width: 66px;
    height: 66px;
    font-size: .56rem;
  }

  .project-metrics {
    grid-template-columns: 1fr;
  }

  .project-progress {
    gap: .45rem;
  }

  .project-progress-value {
    min-width: 34px;
  }
}

@media (max-width: 420px) {
  .project-card summary {
    gap: .55rem;
  }

  .project-progress-label {
    font-size: .67rem;
  }

  .project-progress-value {
    font-size: .68rem;
  }

  .story-visual {
    min-height: 135px;
  }
}

/* -------------------- Accessibility -------------------- */

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card *,
  .project-card::before,
  .project-card::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
    scroll-behavior: auto !important;
  }

  .story-step,
  .project-evidence-box,
  .project-paper,
  .project-metric {
    opacity: 1 !important;
    transform: none !important;
  }

  .project-story-track::before {
    transform: scaleX(1) !important;
  }
}

/* JS-enhanced fallback: content is never dependent on animation completion. */
.project-card.is-story-ready .story-step,
.project-card.is-story-ready .project-evidence-box,
.project-card.is-story-ready .project-paper,
.project-card.is-story-ready .project-metric {
  will-change: transform, opacity;
}
</style>

<div class="projects-page">

  <!-- ========================================================
       01. PHD THESIS
       ======================================================== -->
  <section class="project-section">
    <h2 class="project-section-title">PhD Thesis Project</h2>

    <details class="project-card project-card--thesis">
      <summary>
        <span class="project-summary-title">Doctoral Research</span>
        <span class="project-progress">
          <span class="project-progress-label">Progress:</span>
          <span class="project-progress-track"><span class="project-progress-fill" style="--progress:90%;"></span></span>
          <span class="project-progress-value">90%</span>
        </span>
      </summary>

      <div class="project-card-content">
        <h2>E-cigarette and Sexual Function</h2>

        <p>
          This project brings together my doctoral research on the toxicological effects of e-cigarette exposure, with emphasis on reproductive health, sexual function, Leydig cell steroidogenesis, testosterone signaling, mitochondrial dysfunction, and secondhand aerosol exposure.
        </p>

        <section class="project-story">
          <div class="project-story-intro">
            <div>
              <p class="project-story-kicker">Research story</p>
              <h3 class="project-story-title">From exposure to biological mechanism to human relevance</h3>
              <p class="project-story-caption">
                The papers form a connected evidence program rather than a single experiment: first define plausible exposures, then trace biological mechanisms, then ask what those mechanisms could mean for reproductive and respiratory health.
              </p>
            </div>
            <span class="project-story-status"><i></i> Evidence map</span>
          </div>

          <div class="story-visual" data-theme="thesis" aria-hidden="true">
            <div class="story-orbit" style="--orbit-size:260px;--orbit-rotation:10deg;"></div>
            <div class="story-orbit" style="--orbit-size:175px;--orbit-rotation:-24deg;"></div>
            <div class="story-core">E-CIG<br>EXPOSURE</div>
            <span class="story-particle" style="--x:12%;--y:27%;--dx:18px;--dy:-14px;--delay:.1s;--dur:4.8s;"></span>
            <span class="story-particle" style="--x:22%;--y:72%;--dx:-14px;--dy:-22px;--delay:.7s;--dur:5.5s;"></span>
            <span class="story-particle" style="--x:34%;--y:20%;--dx:22px;--dy:-10px;--delay:1.2s;--dur:4.2s;"></span>
            <span class="story-particle" style="--x:67%;--y:23%;--dx:-20px;--dy:-16px;--delay:.45s;--dur:5.1s;"></span>
            <span class="story-particle" style="--x:78%;--y:68%;--dx:14px;--dy:-20px;--delay:1.5s;--dur:4.6s;"></span>
            <span class="story-particle" style="--x:88%;--y:39%;--dx:-18px;--dy:-12px;--delay:2s;--dur:5.7s;"></span>
            <span class="story-visual-label"><strong>Exposure</strong> → mechanism → outcome</span>
          </div>

          <div class="project-story-track" style="--story-count:6;">
            <article class="story-step" style="--step:0;">
              <div class="story-node-wrap"><span class="story-node">01</span></div>
              <span class="story-index">QUESTION</span>
              <h4>What is being inhaled?</h4>
              <p>Aerosol chemistry, metals, particles, polymers and secondhand exposure define the starting point.</p>
            </article>
            <article class="story-step" style="--step:1;">
              <div class="story-node-wrap"><span class="story-node">02</span></div>
              <span class="story-index">SYSTEM</span>
              <h4>Where does stress appear?</h4>
              <p>Respiratory, mitochondrial and redox systems emerge as recurring biological targets.</p>
            </article>
            <article class="story-step" style="--step:2;">
              <div class="story-node-wrap"><span class="story-node">03</span></div>
              <span class="story-index">MECHANISM</span>
              <h4>How could cells respond?</h4>
              <p>Oxidative stress, mitochondrial dysfunction, ferroptosis and signaling disruption provide mechanistic links.</p>
            </article>
            <article class="story-step" style="--step:3;">
              <div class="story-node-wrap"><span class="story-node">04</span></div>
              <span class="story-index">REPRODUCTIVE</span>
              <h4>What about testosterone?</h4>
              <p>Leydig-cell steroidogenesis and microRNA-mediated regulation connect exposure to endocrine function.</p>
            </article>
            <article class="story-step" style="--step:4;">
              <div class="story-node-wrap"><span class="story-node">05</span></div>
              <span class="story-index">HEALTH</span>
              <h4>Could function change?</h4>
              <p>Erectile function and sexual health provide human-relevant endpoints for a complex biological pathway.</p>
            </article>
            <article class="story-step" style="--step:5;">
              <div class="story-node-wrap"><span class="story-node">06</span></div>
              <span class="story-index">NEXT</span>
              <h4>What remains unknown?</h4>
              <p>Longitudinal, exposure-resolved and biomarker-anchored studies are needed to establish causality.</p>
            </article>
          </div>

          <div class="project-metrics">
            <div class="project-metric" style="--metric:0;">
              <span class="project-metric-value">5</span>
              <span class="project-metric-label">coauthored thesis-linked papers</span>
            </div>
            <div class="project-metric" style="--metric:1;">
              <span class="project-metric-value">6</span>
              <span class="project-metric-label">major mechanistic themes</span>
            </div>
            <div class="project-metric" style="--metric:2;">
              <span class="project-metric-value">90%</span>
              <span class="project-metric-label">doctoral research progress</span>
            </div>
          </div>

          <div class="project-evidence">
            <div class="project-evidence-box" style="--evidence-delay:1050;">
              <p class="project-evidence-label">What the literature supports</p>
              <p>
                The publication record includes reviews on mitochondrial dysfunction, Leydig-cell steroidogenic pathways, microRNA regulation, erectile dysfunction, secondhand aerosol exposure, metabolic disruption, metal-containing nanoparticles, ferroptosis and potential device-derived micro/nanoplastics. These papers repeatedly distinguish biological plausibility from demonstrated human causality.
              </p>
            </div>
            <div class="project-evidence-box" style="--evidence-delay:1190;">
              <p class="project-evidence-label">Funding context</p>
              <p>
                Some thesis-linked work was supported through FRGS/1/2020/SKK05/UM/02/1 and the UMSC C.A.R.E Fund (UMG010C-2022).
              </p>
            </div>
          </div>
        </section>

        <ul class="project-paper-list">
          {%- assign project_papers = site.data.papers | where: "project", "thesis" -%}
          {%- for p in project_papers %}
          <li class="project-paper" style="--paper:{{ forloop.index0 }};">
            <a href="https://doi.org/{{ p.doi }}">{{ p.short }}</a>
            <small>{{ p.journal }} · {{ p.year }}</small>
          </li>
          {%- endfor -%}
          <li class="project-paper" style="--paper:{{ project_papers.size }};">
            <a href="#projects">More coming soon</a>
            <small>Ongoing doctoral research</small>
          </li>
        </ul>
      </div>
    </details>
  </section>

  <!-- ========================================================
       02. CELLULAR SIGNALING FRAMEWORK
       ======================================================== -->
  <section class="project-section">
    <h2 class="project-section-title">Independent Research Framework</h2>

    <details class="project-card project-card--framework">
      <summary>
        <span class="project-summary-title">Conceptual Framework</span>
        <span class="project-progress">
          <span class="project-progress-label">Progress:</span>
          <span class="project-progress-track"><span class="project-progress-fill" style="--progress:30%;"></span></span>
          <span class="project-progress-value">30%</span>
        </span>
      </summary>

      <div class="project-card-content">
        <h2>Cellular Signaling as Dynamic Regulatory Circuits</h2>

        <p>
          This independent project develops a conceptual framework for interpreting cellular signaling pathways as dynamic regulatory circuits rather than static molecular switches. Its sole objective is to advance scientific understanding, and therefore it does not receive any funding.
        </p>

        <section class="project-story">
          <div class="project-story-intro">
            <div>
              <p class="project-story-kicker">Framework story</p>
              <h3 class="project-story-title">From pathway diagrams to control systems</h3>
              <p class="project-story-caption">
                The central idea is simple: signaling is not only about whether a pathway is “on” or “off”. Timing, feedback, persistence and resolution can determine the biological outcome.
              </p>
            </div>
            <span class="project-story-status"><i></i> Conceptual model</span>
          </div>

          <div class="story-visual" data-theme="framework" aria-hidden="true">
            <div class="story-orbit" style="--orbit-size:250px;--orbit-rotation:0deg;"></div>
            <div class="story-orbit" style="--orbit-size:170px;--orbit-rotation:60deg;"></div>
            <div class="story-core">SIGNAL<br>CONTROL</div>
            <span class="story-particle" style="--x:15%;--y:35%;--dx:15px;--dy:-17px;--delay:.2s;--dur:4.2s;"></span>
            <span class="story-particle" style="--x:28%;--y:66%;--dx:-12px;--dy:-12px;--delay:1s;--dur:5s;"></span>
            <span class="story-particle" style="--x:73%;--y:31%;--dx:17px;--dy:-14px;--delay:.65s;--dur:4.7s;"></span>
            <span class="story-particle" style="--x:84%;--y:65%;--dx:-17px;--dy:-18px;--delay:1.45s;--dur:5.3s;"></span>
            <span class="story-visual-label"><strong>Input</strong> → response → resolution</span>
          </div>

          <div class="project-story-track" style="--story-count:5;">
            <article class="story-step" style="--step:0;">
              <div class="story-node-wrap"><span class="story-node">01</span></div>
              <span class="story-index">PROBLEM</span>
              <h4>Static diagrams</h4>
              <p>Traditional pathway maps can hide the importance of signal duration and feedback.</p>
            </article>
            <article class="story-step" style="--step:1;">
              <div class="story-node-wrap"><span class="story-node">02</span></div>
              <span class="story-index">INPUT</span>
              <h4>Signal arrives</h4>
              <p>Magnitude, duration and context determine the information carried by a biological signal.</p>
            </article>
            <article class="story-step" style="--step:2;">
              <div class="story-node-wrap"><span class="story-node">03</span></div>
              <span class="story-index">CONTROL</span>
              <h4>System responds</h4>
              <p>Feedback, thresholds and kinetic constraints shape the trajectory of the response.</p>
            </article>
            <article class="story-step" style="--step:3;">
              <div class="story-node-wrap"><span class="story-node">04</span></div>
              <span class="story-index">RESOLUTION</span>
              <h4>Signal is terminated</h4>
              <p>Resolution becomes part of the mechanism rather than an afterthought.</p>
            </article>
            <article class="story-step" style="--step:4;">
              <div class="story-node-wrap"><span class="story-node">05</span></div>
              <span class="story-index">FAILURE</span>
              <h4>Dynamics break</h4>
              <p>Persistent activation or impaired feedback can shift an adaptive response toward pathology.</p>
            </article>
          </div>

          <div class="project-evidence">
            <div class="project-evidence-box" style="--evidence-delay:900;">
              <p class="project-evidence-label">Three linked examples</p>
              <p>
                The current framework papers address <strong>NRF2–KEAP1</strong> as a redox signal-resolution circuit, <strong>CYP1A1</strong> as environmental-sensing feedback, and <strong>transcriptional condensates</strong> as candidate kinetic filters.
              </p>
            </div>
            <div class="project-evidence-box" style="--evidence-delay:1040;">
              <p class="project-evidence-label">Core question</p>
              <p>
                Can biological pathways be understood more accurately by modeling their dynamics, feedback and resolution rather than only their molecular components?
              </p>
            </div>
          </div>
        </section>

        <ul class="project-paper-list">
          {%- assign project_papers = site.data.papers | where: "project", "framework" -%}
          {%- for p in project_papers %}
          <li class="project-paper" style="--paper:{{ forloop.index0 }};">
            <a href="https://doi.org/{{ p.doi }}">{{ p.short }}</a>
            <small>{{ p.journal }} · {{ p.year }}</small>
          </li>
          {%- endfor -%}
          <li class="project-paper" style="--paper:{{ project_papers.size }};">
            <a href="#projects">More coming soon</a>
            <small>Independent conceptual development</small>
          </li>
        </ul>
      </div>
    </details>
  </section>

  <!-- ========================================================
       03. SCIAUDIT AI
       ======================================================== -->
  <section class="project-section">
    <h2 class="project-section-title">AI Research Technology</h2>

    <details class="project-card project-card--audit">
      <summary>
        <span class="project-summary-title">SciAudit AI</span>
        <span class="project-progress">
          <span class="project-progress-label">Stage:</span>
          <span class="project-progress-track"><span class="project-progress-fill" style="--progress:30%;"></span></span>
          <span class="project-progress-value">Early</span>
        </span>
      </summary>

      <div class="project-card-content">
        <h2>SciAudit AI</h2>

        <p>
          An independent, early-stage research technology project developing an AI-assisted scientific evidence auditing workflow for biomedical research.
        </p>

        <p>
          The project is initially being developed and tested within my own research workflow, with a focus on literature synthesis, cross-study evidence comparison, identification of unsupported claims and methodological limitations, and structured organization of scientific evidence.
        </p>

        <section class="project-story">
          <div class="project-story-intro">
            <div>
              <p class="project-story-kicker">Technology story</p>
              <h3 class="project-story-title">From a difficult literature review to an auditable research workflow</h3>
              <p class="project-story-caption">
                SciAudit AI is deliberately presented as an early-stage project. The story is about the problem being engineered around, not about claimed commercial traction or capabilities that have not yet been validated.
              </p>
            </div>
            <span class="project-story-status"><i></i> Early stage</span>
          </div>

          <div class="story-visual" data-theme="audit" aria-hidden="true">
            <div class="story-orbit" style="--orbit-size:250px;--orbit-rotation:0deg;"></div>
            <div class="story-orbit" style="--orbit-size:180px;--orbit-rotation:90deg;"></div>
            <div class="story-core">EVIDENCE<br>AUDIT</div>
            <span class="story-particle" style="--x:11%;--y:28%;--dx:20px;--dy:-13px;--delay:.1s;--dur:4.8s;"></span>
            <span class="story-particle" style="--x:24%;--y:70%;--dx:-15px;--dy:-19px;--delay:.8s;--dur:5.2s;"></span>
            <span class="story-particle" style="--x:72%;--y:25%;--dx:14px;--dy:-16px;--delay:1.1s;--dur:4.3s;"></span>
            <span class="story-particle" style="--x:87%;--y:66%;--dx:-19px;--dy:-11px;--delay:1.8s;--dur:5.6s;"></span>
            <span class="story-visual-label"><strong>Claim</strong> → evidence → audit trail</span>
          </div>

          <div class="project-story-track" style="--story-count:5;">
            <article class="story-step" style="--step:0;">
              <div class="story-node-wrap"><span class="story-node">01</span></div>
              <span class="story-index">INPUT</span>
              <h4>Scientific claim</h4>
              <p>Start with a claim, conclusion, or mechanistic statement that needs evidence.</p>
            </article>
            <article class="story-step" style="--step:1;">
              <div class="story-node-wrap"><span class="story-node">02</span></div>
              <span class="story-index">RETRIEVE</span>
              <h4>Find the evidence</h4>
              <p>Collect the studies and sources needed to evaluate what is actually supported.</p>
            </article>
            <article class="story-step" style="--step:2;">
              <div class="story-node-wrap"><span class="story-node">03</span></div>
              <span class="story-index">COMPARE</span>
              <h4>Compare studies</h4>
              <p>Look for agreement, disagreement, population differences and methodological constraints.</p>
            </article>
            <article class="story-step" style="--step:3;">
              <div class="story-node-wrap"><span class="story-node">04</span></div>
              <span class="story-index">AUDIT</span>
              <h4>Stress-test the claim</h4>
              <p>Separate direct evidence from inference, extrapolation and unsupported interpretation.</p>
            </article>
            <article class="story-step" style="--step:4;">
              <div class="story-node-wrap"><span class="story-node">05</span></div>
              <span class="story-index">OUTPUT</span>
              <h4>Build an audit trail</h4>
              <p>Return a structured evidence record that makes uncertainty visible rather than hiding it.</p>
            </article>
          </div>

          <div class="project-evidence">
            <div class="project-evidence-box" style="--evidence-delay:900;">
              <p class="project-evidence-label">Current scope</p>
              <p>
                Biomedical literature synthesis, cross-study comparison, unsupported-claim detection, methodological critique, evidence provenance and uncertainty.
              </p>
            </div>
            <div class="project-evidence-box" style="--evidence-delay:1040;">
              <p class="project-evidence-label">Status</p>
              <p>
                Independent and early-stage. The workflow is being developed and tested before any broader release.
              </p>
            </div>
          </div>
        </div>

        <ul class="project-list">
          <li>Biomedical scientific evidence auditing</li>
          <li>AI-assisted literature synthesis and comparison</li>
          <li>Evidence provenance, uncertainty and methodological critique</li>
          <li>Initial broader-release target: approximately 2029, subject to validation and development</li>
          <li><a href="/sciaudit-ai/">Explore SciAudit AI</a></li>
        </ul>
      </div>
    </details>
  </section>

  <!-- ========================================================
       04. INDEPENDENT WORK
       ======================================================== -->
  <section class="project-section">
    <h2 class="project-section-title">Independent Work</h2>

    <details class="project-card project-card--misc">
      <summary>
        <span class="project-summary-title">Independent Writing &amp; Synthesis</span>
      </summary>

      <div class="project-card-content">
        <h2>Miscellaneous Sole-Author Works</h2>

        <p>
          This section collects sole-author articles that do not belong to the cellular signaling framework. Thesis-related papers are included here when they were authored solely by me, while coauthored thesis work remains under Doctoral Research.
        </p>

        <section class="project-story">
          <div class="project-story-intro">
            <div>
              <p class="project-story-kicker">Independent synthesis</p>
              <h3 class="project-story-title">Independent synthesis across biological systems</h3>
              <p class="project-story-caption">
                These sole-author papers extend the research beyond the thesis and signaling framework, moving from upstream regulation and mitochondrial biology to respiratory injury, environmental sensing, and emerging exposure questions.
              </p>
            </div>
            <span class="project-story-status"><i></i> Independent work</span>
          </div>

          <div class="story-visual" data-theme="misc" aria-hidden="true">
            <div class="story-orbit" style="--orbit-size:245px;--orbit-rotation:-8deg;"></div>
            <div class="story-orbit" style="--orbit-size:165px;--orbit-rotation:30deg;"></div>
            <div class="story-core">UPSTREAM<br>CONTROL</div>
            <span class="story-particle" style="--x:14%;--y:25%;--dx:18px;--dy:-14px;--delay:.2s;--dur:4.4s;"></span>
            <span class="story-particle" style="--x:28%;--y:68%;--dx:-13px;--dy:-20px;--delay:.9s;--dur:5.2s;"></span>
            <span class="story-particle" style="--x:75%;--y:28%;--dx:17px;--dy:-15px;--delay:1.3s;--dur:4.8s;"></span>
            <span class="story-particle" style="--x:88%;--y:67%;--dx:-16px;--dy:-17px;--delay:1.7s;--dur:5.5s;"></span>
            <span class="story-visual-label"><strong>Mechanism</strong> → synthesis → new question</span>
          </div>

          <div class="project-story-track" style="--story-count:4;">
            <article class="story-step" style="--step:0;">
              <div class="story-node-wrap"><span class="story-node">01</span></div>
              <span class="story-index">SCOPE</span>
              <h4>Start with a biological question</h4>
              <p>Independent reviews begin from a mechanistic or exposure problem that needs a clearer synthesis.</p>
            </article>
            <article class="story-step" style="--step:1;">
              <div class="story-node-wrap"><span class="story-node">02</span></div>
              <span class="story-index">CONNECT</span>
              <h4>Link mechanisms</h4>
              <p>Signals, organ systems, exposure pathways and cellular responses are connected across levels.</p>
            </article>
            <article class="story-step" style="--step:2;">
              <div class="story-node-wrap"><span class="story-node">03</span></div>
              <span class="story-index">SYNTHESIZE</span>
              <h4>Separate evidence from inference</h4>
              <p>Established findings are distinguished from mechanistic plausibility and unresolved questions.</p>
            </article>
            <article class="story-step" style="--step:3;">
              <div class="story-node-wrap"><span class="story-node">04</span></div>
              <span class="story-index">OUTPUT</span>
              <h4>Define the next experiment</h4>
              <p>The result is a structured research question and a clearer map of what still needs direct testing.</p>
            </article>
          </div>

          <div class="project-evidence">
            <div class="project-evidence-box" style="--evidence-delay:850;">
              <p class="project-evidence-label">Independent-writing collection</p>
              <p>
                Includes the sole-author e-cigarette reviews on metal-containing nanoparticles, ferroptosis, device-derived micro/nanoplastics, and systemic metabolic disruption, alongside the coauthored obesity/erectile-dysfunction synthesis.
              </p>
            </div>
            <div class="project-evidence-box" style="--evidence-delay:990;">
              <p class="project-evidence-label">Example</p>
              <p><a href="https://doi.org/10.1111/dom.70818">Adipose as a Driver, Not a Bystander</a><br>Diabetes, Obesity and Metabolism · 2026</p>
            </div>
          </div>
        </section>

        <ul class="project-paper-list">
          {%- assign project_papers = site.data.papers | where: "project", "other" -%}
          {%- for p in project_papers %}
          <li class="project-paper" style="--paper:{{ forloop.index0 }};">
            <a href="https://doi.org/{{ p.doi }}">{{ p.short }}</a>
            <small>{{ p.journal }} · {{ p.year }}</small>
          </li>
          {%- endfor -%}
        </ul>
      </div>
    </details>
  </section>

  <script>
  (function () {
    "use strict";

    /*
     * Project Story Engine
     * --------------------
     * The CSS handles the visual choreography. This small controller:
     * 1. marks opened cards as animation-ready,
     * 2. restarts the choreography cleanly on re-open,
     * 3. creates a few lightweight ambient particles per open card,
     * 4. keeps native <details> keyboard behaviour intact,
     * 5. respects reduced-motion preferences.
     */

    var cards = Array.prototype.slice.call(
      document.querySelectorAll(".projects-page .project-card")
    );

    if (!cards.length) return;

    var reducedMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function clearDynamicParticles(card) {
      Array.prototype.slice.call(
        card.querySelectorAll(".project-story .ambient-particle")
      ).forEach(function (node) {
        node.remove();
      });
    }

    function createAmbientParticles(card) {
      if (reducedMotion) return;

      var visuals = card.querySelectorAll(".story-visual");
      Array.prototype.forEach.call(visuals, function (visual, visualIndex) {
        var count = visualIndex === 0 ? 18 : 10;

        for (var i = 0; i < count; i++) {
          var p = document.createElement("span");
          p.className = "story-particle ambient-particle";

          var x = 5 + Math.random() * 90;
          var y = 8 + Math.random() * 78;
          var dx = (Math.random() * 40 - 20).toFixed(1) + "px";
          var dy = (-8 - Math.random() * 22).toFixed(1) + "px";
          var delay = (Math.random() * 2.4).toFixed(2) + "s";
          var duration = (3.8 + Math.random() * 3.2).toFixed(2) + "s";
          var size = (2 + Math.random() * 3.2).toFixed(1) + "px";

          p.style.setProperty("--x", x + "%");
          p.style.setProperty("--y", y + "%");
          p.style.setProperty("--dx", dx);
          p.style.setProperty("--dy", dy);
          p.style.setProperty("--delay", delay);
          p.style.setProperty("--dur", duration);
          p.style.setProperty("--size", size);

          visual.appendChild(p);
        }
      });
    }

    function restartAnimation(card) {
      card.classList.remove("is-story-ready");
      void card.offsetWidth;
      card.classList.add("is-story-ready");
    }

    cards.forEach(function (card) {
      card.addEventListener("toggle", function () {
        if (card.open) {
          clearDynamicParticles(card);
          createAmbientParticles(card);
          restartAnimation(card);

          window.setTimeout(function () {
            if (!card.open) return;
            var firstStep = card.querySelector(".story-step");
            if (firstStep && !reducedMotion) {
              firstStep.setAttribute("data-active", "true");
            }
          }, 950);
        } else {
          clearDynamicParticles(card);
          card.classList.remove("is-story-ready");
        }
      });
    });

    /*
     * Pointer parallax is intentionally tiny. It adds depth without
     * making text or controls move under the cursor.
     */
    if (!reducedMotion && window.matchMedia("(pointer:fine)").matches) {
      cards.forEach(function (card) {
        card.addEventListener("pointermove", function (event) {
          if (!card.open) return;

          var rect = card.getBoundingClientRect();
          var x = (event.clientX - rect.left) / rect.width - 0.5;
          var y = (event.clientY - rect.top) / rect.height - 0.5;
          var visual = card.querySelector(".story-visual");

          if (!visual) return;

          visual.style.setProperty(
            "--pointer-x",
            (x * 6).toFixed(2) + "px"
          );
          visual.style.setProperty(
            "--pointer-y",
            (y * 4).toFixed(2) + "px"
          );
        });

        card.addEventListener("pointerleave", function () {
          var visual = card.querySelector(".story-visual");
          if (!visual) return;
          visual.style.setProperty("--pointer-x", "0px");
          visual.style.setProperty("--pointer-y", "0px");
        });
      });
    }
  })();
  </script>
</div>
