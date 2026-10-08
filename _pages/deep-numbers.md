---
layout: page
title: Deep Numbers
permalink: /deep-numbers/
nav: true
nav_order: 8
description: Deep Numbers, a daily rarity game by Ardie Barry Sailis.
---

<style>
  /*
   * Deep Numbers is a standalone experience. Hide the generic Jekyll page
   * heading and description above it, while retaining the game's own title.
   */
  body:has(#deep-numbers-app) .post-title,
  body:has(#deep-numbers-app) .post-description,
  body:has(#deep-numbers-app) .post-header {
    display: none !important;
  }

  body:has(#deep-numbers-app) .post {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }

  body:has(#deep-numbers-app) main,
  body:has(#deep-numbers-app) .page,
  body:has(#deep-numbers-app) .page__inner-wrap,
  body:has(#deep-numbers-app) .page__content,
  body:has(#deep-numbers-app) .post-content {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  /*
   * Deep Numbers is deliberately self-contained.
   * It uses no external game framework, chart library, icon library, or font.
   * The page owns its background, star field, controls, and game state.
   */

  html.deep-numbers-document,
  body.deep-numbers-active {
    background: #02030a !important;
  }

  body.deep-numbers-active {
    color: #eef2ff !important;
  }

  body.deep-numbers-active .page,
  body.deep-numbers-active main,
  body.deep-numbers-active .post,
  body.deep-numbers-active .container {
    max-width: none !important;
    background: transparent !important;
  }

  .deep-numbers-page {
    --dn-bg: #02030a;
    --dn-panel: rgba(7, 10, 24, .78);
    --dn-panel-strong: rgba(10, 14, 34, .92);
    --dn-line: rgba(148, 163, 255, .18);
    --dn-line-strong: rgba(129, 140, 248, .42);
    --dn-text: #f8fbff;
    --dn-muted: #98a3c5;
    --dn-purple: #a78bfa;
    --dn-violet: #7c3aed;
    --dn-blue: #60a5fa;
    --dn-cyan: #67e8f9;
    --dn-pink: #f0abfc;
    --dn-green: #86efac;
    --dn-red: #fb7185;
    --dn-shadow: 0 30px 100px rgba(0,0,0,.48);
    --dn-radius: 24px;

    position: relative;
    width: 100vw;
    min-height: 100vh;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    margin-top: -7rem !important;
    padding: 0 1rem 5rem;
    overflow: hidden;
    isolation: isolate;
    box-sizing: border-box;
    color: var(--dn-text);
    background:
      radial-gradient(circle at 50% 0%, rgba(124,58,237,.14), transparent 34rem),
      radial-gradient(circle at 15% 35%, rgba(37,99,235,.08), transparent 30rem),
      radial-gradient(circle at 85% 70%, rgba(103,232,249,.055), transparent 28rem),
      #02030a;
  }

  .deep-numbers-page::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -4;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 42%, rgba(124,58,237,.08), transparent 32%),
      radial-gradient(circle at 50% 100%, rgba(30,64,175,.08), transparent 42%);
  }

  .deep-numbers-page::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    opacity: .32;
    background:
      linear-gradient(rgba(148,163,184,.016) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148,163,184,.016) 1px, transparent 1px);
    background-size: 42px 42px;
    mask-image: linear-gradient(to bottom, black 0%, transparent 84%);
  }

  .dn-star-canvas,
  .dn-effects-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .dn-star-canvas { z-index: -5; }
  .dn-effects-canvas { z-index: 20; }

  .dn-app {
    position: relative;
    z-index: 2;
    width: min(1180px, calc(100vw - 1.5rem));
    margin: 0 auto;
  }

  .dn-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;
  }

  .dn-brand {
    display: inline-flex;
    align-items: center;
    gap: .75rem;
    color: #fff !important;
    text-decoration: none !important;
  }

  .dn-brand-mark {
    position: relative;
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    flex: 0 0 34px;
    border: 1px solid rgba(167,139,250,.48);
    border-radius: 50%;
    background:
      radial-gradient(circle at 45% 42%, rgba(167,139,250,.38), rgba(59,130,246,.08) 58%, transparent 70%);
    box-shadow:
      0 0 22px rgba(124,58,237,.25),
      inset 0 0 16px rgba(96,165,250,.08);
  }

  .dn-brand-mark::before,
  .dn-brand-mark::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  .dn-brand-mark::before {
    width: 6px;
    height: 6px;
    background: #fff;
    box-shadow: 0 0 14px rgba(255,255,255,.9);
  }

  .dn-brand-mark::after {
    width: 24px;
    height: 24px;
    border: 1px solid rgba(96,165,250,.18);
    animation: dn-orbit-spin 8s linear infinite;
  }

  .dn-brand-copy strong {
    display: block;
    font: 900 1rem/1 system-ui, sans-serif;
    letter-spacing: -.02em;
  }

  .dn-brand-copy span {
    display: block;
    margin-top: .28rem;
    color: #7480a4;
    font: 700 .6rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .dn-top-actions {
    display: flex;
    align-items: center;
    gap: .45rem;
  }

  .dn-stat-chip {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    min-height: 34px;
    padding: .45rem .65rem;
    border: 1px solid var(--dn-line);
    border-radius: 999px;
    background: rgba(10,14,30,.56);
    color: #b8c2e4;
    font: 800 .62rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .05em;
  }

  .dn-stat-chip b {
    color: #fff;
    font-weight: 900;
  }

  .dn-live {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--dn-cyan);
    box-shadow: 0 0 12px rgba(103,232,249,.9);
    animation: dn-live-pulse 1.5s ease-in-out infinite;
  }

  .dn-hero {
    position: relative;
    min-height: 610px;
    display: grid;
    place-items: center;
    padding: 4.5rem 1rem 2rem;
    text-align: center;
  }

  .dn-hero-orbit,
  .dn-hero-orbit::before,
  .dn-hero-orbit::after {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .dn-hero-orbit {
    width: min(760px, 92vw);
    aspect-ratio: 1;
    left: 50%;
    top: 49%;
    transform: translate(-50%,-50%);
    border: 1px solid rgba(124,58,237,.14);
    box-shadow:
      0 0 70px rgba(124,58,237,.055),
      inset 0 0 70px rgba(37,99,235,.035);
    animation: dn-orbit-breathe 6s ease-in-out infinite;
  }

  .dn-hero-orbit::before {
    content: "";
    inset: 13%;
    border: 1px solid rgba(96,165,250,.08);
  }

  .dn-hero-orbit::after {
    content: "";
    width: 8px;
    height: 8px;
    left: 10%;
    top: 25%;
    background: var(--dn-purple);
    box-shadow: 0 0 18px rgba(167,139,250,.9);
    animation: dn-orbit-node 14s linear infinite;
  }

  .dn-hero-content {
    position: relative;
    z-index: 2;
    max-width: 790px;
  }

  .dn-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .45rem .72rem;
    border: 1px solid rgba(167,139,250,.25);
    border-radius: 999px;
    background: rgba(124,58,237,.08);
    color: #c4b5fd;
    font: 850 .64rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .12em;
    text-transform: uppercase;
    box-shadow: 0 0 28px rgba(124,58,237,.07);
  }

  .dn-eyebrow-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--dn-pink);
    box-shadow: 0 0 12px rgba(240,171,252,.9);
  }

  .dn-title {
    margin: 1.2rem 0 .9rem !important;
    color: #fff !important;
    font-size: clamp(3.7rem, 10vw, 8.4rem) !important;
    line-height: .84 !important;
    letter-spacing: -.075em !important;
    font-weight: 950 !important;
    text-wrap: balance;
  }

  .dn-title-gradient {
    display: inline-block;
    background:
      linear-gradient(110deg, #fff 8%, #c4b5fd 35%, #93c5fd 58%, #67e8f9 78%, #fff 96%);
    background-size: 220% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: dn-gradient-slide 8s ease-in-out infinite;
  }

  .dn-subtitle {
    max-width: 650px;
    margin: 0 auto;
    color: #9aa6ca !important;
    font-size: clamp(.95rem, 2vw, 1.08rem);
    line-height: 1.75;
    text-align: center !important;
  }

  .dn-hero-metrics {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: .55rem;
    flex-wrap: wrap;
    margin: 1.55rem auto 0;
  }

  .dn-hero-metric {
    min-width: 125px;
    padding: .7rem .78rem;
    border: 1px solid rgba(148,163,184,.12);
    border-radius: 12px;
    background: rgba(7,10,24,.55);
    backdrop-filter: blur(12px);
  }

  .dn-hero-metric small {
    display: block;
    color: #69759a;
    font: 800 .56rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .dn-hero-metric strong {
    display: block;
    margin-top: .28rem;
    color: #f8fbff;
    font: 900 1rem/1.15 ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  .dn-scroll-hint {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: #596585;
    font: 800 .58rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .dn-scroll-hint span {
    display: block;
    width: 1px;
    height: 28px;
    margin: .5rem auto 0;
    background: linear-gradient(#596585, transparent);
    animation: dn-scroll-line 1.8s ease-in-out infinite;
  }

  .dn-cosmic-atlas {
    position: relative;
    width: 100vw;
    margin: 0 calc(50% - 50vw) 2.6rem;
    padding: 0;
    overflow: visible;
    background: transparent;
  }

  .dn-cosmic-atlas::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 22% 50%, rgba(251,146,60,.045), transparent 18%),
      radial-gradient(circle at 52% 50%, rgba(96,165,250,.055), transparent 20%),
      radial-gradient(circle at 84% 50%, rgba(167,139,250,.065), transparent 22%);
  }

  .dn-cosmic-atlas-head {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    width: min(1180px, calc(100vw - 1.5rem));
    margin: 0 auto .55rem;
    padding: 0 .25rem;
  }

  .dn-cosmic-atlas-kicker {
    color: #6e7ba0;
    font: 850 .56rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .dn-cosmic-atlas-head strong {
    display: block;
    margin-top: .28rem;
    color: #e8edff;
    font-size: .9rem;
    letter-spacing: -.02em;
  }

  .dn-cosmic-atlas-head span:last-child {
    color: #56617e;
    font: 750 .56rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .dn-cosmic-atlas-frame {
    position: relative;
    z-index: 2;
    width: 100vw;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background:
      radial-gradient(circle at 50% 48%, rgba(23,37,84,.18), transparent 48%),
      #010208;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.025),
      inset 0 -1px 0 rgba(255,255,255,.018);
  }

  .dn-cosmic-atlas-canvas {
    display: block;
    width: 100%;
    height: 360px;
    min-width: 0;
    cursor: crosshair;
  }

  .dn-cosmic-atlas-scale {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: repeat(15, minmax(72px, 1fr));
    gap: 0;
    width: min(1180px, calc(100vw - 1.5rem));
    margin: .65rem auto 0;
    overflow-x: auto;
    padding: 0 .25rem .25rem;
    scrollbar-width: thin;
  }

  .dn-cosmic-entity {
    min-width: 72px;
    padding: .45rem .3rem .5rem;
    border: 0;
    border-right: 1px solid rgba(148,163,184,.07);
    border-radius: 0;
    background: transparent;
    color: #667292;
    font: 800 .48rem/1.35 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .04em;
    text-align: center;
    text-transform: uppercase;
  }

  .dn-cosmic-entity:first-child {
    border-left: 1px solid rgba(148,163,184,.07);
  }

  .dn-cosmic-entity b {
    display: block;
    color: #aab5d5;
    font-size: .55rem;
  }

  .dn-cosmic-entity span {
    display: block;
    margin-top: .2rem;
    color: #586484;
  }

  .dn-cosmic-entity:nth-child(1) b { color: #d1d5db; }
  .dn-cosmic-entity:nth-child(2) b { color: #f7c7a5; }
  .dn-cosmic-entity:nth-child(3) b { color: #93c5fd; }
  .dn-cosmic-entity:nth-child(4) b { color: #cbd5e1; }
  .dn-cosmic-entity:nth-child(5) b { color: #fb7185; }
  .dn-cosmic-entity:nth-child(6) b { color: #d6a06b; }
  .dn-cosmic-entity:nth-child(7) b { color: #fde68a; }
  .dn-cosmic-entity:nth-child(8) b { color: #67e8f9; }
  .dn-cosmic-entity:nth-child(9) b { color: #93c5fd; }
  .dn-cosmic-entity:nth-child(10) b { color: #ddd6fe; }
  .dn-cosmic-entity:nth-child(11) b { color: #a78bfa; }
  .dn-cosmic-entity:nth-child(12) b { color: #67e8f9; }
  .dn-cosmic-entity:nth-child(13) b { color: #c4b5fd; }
  .dn-cosmic-entity:nth-child(14) b { color: #bfdbfe; }
  .dn-cosmic-entity:nth-child(15) b { color: #e9d5ff; }

  @media (max-width: 650px) {
    .dn-cosmic-atlas {
      margin-bottom: 1.7rem;
    }

    .dn-cosmic-atlas-head {
      align-items: flex-start;
      flex-direction: column;
      gap: .3rem;
    }

    .dn-cosmic-atlas-head span:last-child {
      white-space: normal;
    }

    .dn-cosmic-atlas-canvas {
      height: 300px;
    }

    .dn-cosmic-atlas-scale {
      width: 100%;
      grid-template-columns: repeat(15, minmax(78px, 1fr));
      overflow-x: auto;
      padding-bottom: .25rem;
    }
  }

  .dn-game-wrap {
    position: relative;
    margin: 0 auto;
  }

  .dn-game-shell {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(129,140,248,.18);
    border-radius: var(--dn-radius);
    background:
      radial-gradient(circle at 68% 30%, rgba(124,58,237,.10), transparent 35%),
      radial-gradient(circle at 20% 70%, rgba(37,99,235,.08), transparent 38%),
      rgba(4,7,17,.84);
    box-shadow:
      0 36px 110px rgba(0,0,0,.52),
      0 0 0 1px rgba(255,255,255,.018) inset,
      0 0 90px rgba(124,58,237,.04);
    backdrop-filter: blur(18px);
  }

  .dn-command {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 1rem;
    padding: .86rem 1rem;
    border-bottom: 1px solid rgba(148,163,184,.10);
    background: rgba(2,5,14,.62);
  }

  .dn-command-side {
    display: flex;
    align-items: center;
    gap: .6rem;
    min-width: 0;
  }

  .dn-command-side.right {
    justify-content: flex-end;
  }

  .dn-command-label {
    color: #586489;
    font: 850 .56rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .dn-command-value {
    color: #dbe4ff;
    font: 850 .68rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    white-space: nowrap;
  }

  .dn-command-center {
    color: #fff;
    font: 950 .7rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .13em;
  }

  .dn-game-grid {
    display: grid;
    grid-template-columns: minmax(0,1.28fr) minmax(300px,.72fr);
    gap: .9rem;
    padding: .9rem;
  }

  .dn-question-card,
  .dn-score-panel {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(148,163,184,.11);
    border-radius: 19px;
    background: rgba(8,11,24,.68);
  }

  .dn-question-card {
    min-height: 500px;
    padding: 1.45rem;
  }

  .dn-question-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(90deg, transparent, rgba(167,139,250,.045), transparent);
    transform: translateX(-110%);
    animation: dn-scan 9s ease-in-out infinite;
  }

  .dn-question-head {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .8rem;
  }

  .dn-badge {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    padding: .4rem .62rem;
    border: 1px solid rgba(96,165,250,.22);
    border-radius: 999px;
    background: rgba(37,99,235,.06);
    color: #a5bfff;
    font: 850 .58rem/1 system-ui, sans-serif;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .dn-badge-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--dn-blue);
    box-shadow: 0 0 10px rgba(96,165,250,.8);
  }

  .dn-round {
    color: #5e6a8d;
    font: 800 .59rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .11em;
    text-transform: uppercase;
  }

  .dn-question {
    position: relative;
    z-index: 2;
    max-width: 760px;
    margin: 3.1rem 0 0 !important;
    color: #fff !important;
    font-size: clamp(1.65rem, 4vw, 2.7rem) !important;
    line-height: 1.06 !important;
    letter-spacing: -.045em !important;
    font-weight: 900 !important;
  }

  .dn-hint {
    position: relative;
    z-index: 2;
    max-width: 670px;
    margin: .85rem 0 0 !important;
    color: #7f8aae !important;
    font-size: .88rem;
    line-height: 1.65;
  }

  .dn-estimate-zone {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0,1fr) auto;
    gap: .65rem;
    align-items: stretch;
    margin-top: 1.8rem;
  }

  .dn-input {
    width: 100%;
    min-height: 58px;
    padding: 0 1rem;
    border: 1px solid rgba(148,163,184,.19);
    border-radius: 13px;
    outline: none;
    box-sizing: border-box;
    background: rgba(1,4,12,.85);
    color: #fff;
    font: 900 1.25rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    transition:
      border-color .2s ease,
      box-shadow .2s ease,
      transform .2s ease;
  }

  .dn-input::placeholder {
    color: #465171;
  }

  .dn-input:focus {
    border-color: rgba(167,139,250,.7);
    box-shadow:
      0 0 0 4px rgba(124,58,237,.10),
      0 0 36px rgba(124,58,237,.08);
  }

  .dn-submit {
    min-width: 128px;
    border: 1px solid rgba(129,140,248,.46);
    border-radius: 13px;
    padding: 0 1rem;
    background:
      linear-gradient(135deg, #6d28d9, #2563eb 62%, #0891b2);
    color: #fff;
    font: 900 .72rem/1 system-ui, sans-serif;
    letter-spacing: .05em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow:
      0 15px 36px rgba(37,99,235,.18),
      inset 0 1px 0 rgba(255,255,255,.18);
    transition:
      transform .2s ease,
      box-shadow .2s ease,
      filter .2s ease;
  }

  .dn-submit:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow:
      0 20px 42px rgba(37,99,235,.25),
      inset 0 1px 0 rgba(255,255,255,.20);
  }

  .dn-submit:active {
    transform: translateY(0);
  }

  .dn-submit:disabled {
    cursor: not-allowed;
    opacity: .55;
    transform: none !important;
    filter: grayscale(.22);
    box-shadow: none;
  }

  .dn-input:disabled {
    cursor: not-allowed;
    opacity: .62;
  }

  .dn-feedback {
    position: relative;
    z-index: 2;
    min-height: 1.25rem;
    margin: .72rem 0 0 !important;
    color: #6f7da4 !important;
    font: 750 .67rem/1.45 ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  .dn-progress-wrap {
    position: relative;
    z-index: 2;
    margin-top: 2rem;
  }

  .dn-progress-head {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: #596584;
    font: 800 .57rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .dn-progress-track {
    height: 5px;
    margin-top: .5rem;
    border-radius: 999px;
    background: rgba(148,163,184,.08);
    overflow: hidden;
  }

  .dn-progress-fill {
    width: 0;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #7c3aed, #60a5fa, #67e8f9);
    box-shadow: 0 0 16px rgba(96,165,250,.42);
    transition: width .55s cubic-bezier(.2,.8,.2,1);
  }

  .dn-small-rule {
    margin-top: 1.2rem;
    color: #4d5877;
    font-size: .66rem;
    line-height: 1.55;
  }

  .dn-score-panel {
    min-height: 500px;
    padding: 1.05rem;
    background:
      radial-gradient(circle at 50% 42%, rgba(124,58,237,.12), transparent 46%),
      rgba(3,6,16,.78);
  }

  .dn-score-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .7rem;
  }

  .dn-score-title {
    color: #68749a;
    font: 850 .59rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .dn-destination {
    color: #d7e2ff;
    font: 900 .68rem/1.15 ui-monospace, SFMono-Regular, Menlo, monospace;
    text-align: right;
  }

  .dn-score-ring {
    position: relative;
    width: 220px;
    aspect-ratio: 1;
    margin: 2.3rem auto 1rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
      conic-gradient(#7c3aed 0deg, #60a5fa 120deg, #67e8f9 210deg, rgba(148,163,184,.07) 210deg);
    box-shadow:
      0 0 80px rgba(124,58,237,.14),
      inset 0 0 28px rgba(255,255,255,.03);
    transition: background .4s ease;
  }

  .dn-score-ring::before {
    content: "";
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 50% 36%, rgba(124,58,237,.13), rgba(2,5,13,.98) 68%);
    border: 1px solid rgba(148,163,184,.09);
  }

  .dn-score-inner {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .dn-score-number {
    color: #fff;
    font: 950 clamp(2.4rem, 6vw, 3.8rem)/.95 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: -.06em;
  }

  .dn-score-unit {
    margin-top: .25rem;
    color: #7884a6;
    font: 850 .58rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .dn-score-micro {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;
    margin-top: .8rem;
  }

  .dn-score-micro-item {
    padding: .7rem;
    border: 1px solid rgba(148,163,184,.09);
    border-radius: 11px;
    background: rgba(148,163,184,.022);
  }

  .dn-score-micro-item small {
    display: block;
    color: #536080;
    font: 800 .53rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .dn-score-micro-item strong {
    display: block;
    margin-top: .25rem;
    color: #f0f4ff;
    font: 900 .9rem/1.1 ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  .dn-rocket-stage {
    position: absolute;
    left: 50%;
    top: 58%;
    width: 200px;
    height: 190px;
    transform: translate(-50%,-50%);
    pointer-events: none;
  }

  .dn-rocket {
    position: absolute;
    left: 50%;
    top: 34%;
    width: 64px;
    height: 112px;
    transform: translate(-50%,-50%);
    filter: drop-shadow(0 0 26px rgba(96,165,250,.18));
    animation: dn-rocket-float 4.3s ease-in-out infinite;
  }

  .dn-rocket-body {
    position: absolute;
    left: 10px;
    top: 11px;
    width: 44px;
    height: 70px;
    border-radius: 48% 48% 42% 42%;
    border: 1px solid rgba(255,255,255,.45);
    background: linear-gradient(90deg,#9aa6bb,#f8fafc 44%,#a5b0c0);
    box-shadow: inset -6px 0 12px rgba(15,23,42,.16);
  }

  .dn-rocket-nose {
    position: absolute;
    left: 10px;
    top: -13px;
    width: 44px;
    height: 34px;
    border-radius: 50% 50% 12% 12%;
    background: linear-gradient(135deg,#e2e8f0,#fff);
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }

  .dn-rocket-window {
    position: absolute;
    left: 20px;
    top: 26px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid #334155;
    background: radial-gradient(circle at 35% 30%, #dbeafe, #60a5fa 46%, #1e3a8a 100%);
    box-shadow: 0 0 14px rgba(96,165,250,.34);
  }

  .dn-rocket-fin {
    position: absolute;
    top: 57px;
    width: 18px;
    height: 25px;
    background: linear-gradient(160deg,#334155,#64748b);
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
  }

  .dn-rocket-fin.left { left: -3px; }
  .dn-rocket-fin.right { right: -3px; transform: scaleX(-1); }

  .dn-flame {
    position: absolute;
    left: 50%;
    top: 80px;
    width: 22px;
    height: 44px;
    transform: translateX(-50%);
    border-radius: 50% 50% 62% 62%;
    background:
      radial-gradient(circle at 50% 15%, #fff 0 13%, #f0abfc 28%, #8b5cf6 60%, transparent 76%);
    filter: blur(.15px);
    animation: dn-flame 110ms ease-in-out infinite alternate;
  }

  .dn-trail {
    position: absolute;
    left: 50%;
    top: 106px;
    width: 70px;
    height: 70px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,.30), transparent 65%);
    filter: blur(2px);
    animation: dn-trail 1.8s ease-in-out infinite;
  }

  .dn-trajectory {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 120px;
    aspect-ratio: 1;
    transform: translateX(-50%);
    border: 1px dashed rgba(96,165,250,.13);
    border-radius: 50%;
    animation: dn-orbit-spin 16s linear infinite reverse;
  }

  .dn-trajectory::before,
  .dn-trajectory::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  .dn-trajectory::before {
    width: 4px;
    height: 4px;
    left: 7%;
    top: 25%;
    background: #67e8f9;
    box-shadow: 0 0 12px rgba(103,232,249,.9);
  }

  .dn-trajectory::after {
    width: 3px;
    height: 3px;
    right: 9%;
    bottom: 15%;
    background: #a78bfa;
    box-shadow: 0 0 10px rgba(167,139,250,.9);
  }

  .dn-trajectory-copy {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1rem;
    padding: 0 1rem;
    text-align: center;
  }

  .dn-trajectory-title {
    margin: 0;
    color: #eef2ff;
    font: 900 1rem/1.15 system-ui, sans-serif;
    letter-spacing: -.02em;
  }

  .dn-trajectory-text {
    max-width: 250px;
    margin: .45rem auto 0;
    color: #667394;
    font-size: .67rem;
    line-height: 1.55;
  }

  .dn-reveal {
    display: none;
    margin: .9rem;
    padding: 1rem;
    border: 1px solid rgba(167,139,250,.22);
    border-radius: 18px;
    background:
      radial-gradient(circle at 50% 0%, rgba(124,58,237,.12), transparent 48%),
      rgba(6,9,20,.9);
  }

  .dn-reveal.is-open {
    display: block;
    animation: dn-reveal-in .8s cubic-bezier(.16,1,.3,1) both;
  }

  .dn-reveal-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: .8rem;
  }

  .dn-reveal-kicker {
    color: #8b97bb;
    font: 850 .56rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .dn-reveal-head h2 {
    margin: .25rem 0 0 !important;
    color: #fff !important;
    font-size: 1.45rem !important;
    letter-spacing: -.035em !important;
  }

  .dn-replay {
    min-height: 38px;
    padding: 0 .8rem;
    border: 1px solid rgba(167,139,250,.30);
    border-radius: 10px;
    background: rgba(124,58,237,.08);
    color: #c4b5fd;
    font: 850 .62rem/1 system-ui, sans-serif;
    cursor: pointer;
  }

  .dn-replay:hover {
    background: rgba(124,58,237,.15);
  }

  .dn-reveal-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0,1fr));
    gap: .5rem;
  }

  .dn-reveal-item {
    min-width: 0;
    padding: .75rem;
    border: 1px solid rgba(148,163,184,.09);
    border-radius: 11px;
    background: rgba(148,163,184,.025);
  }

  .dn-reveal-item b {
    display: block;
    color: #627095;
    font: 850 .5rem/1.25 ui-monospace, SFMono-Regular, Menlo, monospace;
    letter-spacing: .06em;
  }

  .dn-reveal-item strong {
    display: block;
    margin-top: .4rem;
    color: #fff;
    font: 950 1rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  .dn-reveal-item span {
    display: block;
    margin-top: .34rem;
    color: #7180a4;
    font-size: .58rem;
    line-height: 1.4;
  }

  /* Force the game and information tabs to touch without the theme's
     default section spacing introducing a visible gap. */
  .deep-numbers-page .dn-game-wrap {
    margin-bottom: 0 !important;
  }

  .deep-numbers-page .dn-game-shell {
    margin-bottom: 0 !important;
  }

  .deep-numbers-page .dn-tabs {
    margin-top: -0.05rem !important;
  }

  .dn-tabs {
    display: flex;
    justify-content: center;
    gap: .35rem;
    flex-wrap: wrap;
    margin: .25rem auto 0;
  }

  .dn-tab {
    min-height: 38px;
    padding: 0 .8rem;
    border: 1px solid rgba(148,163,184,.10);
    border-radius: 999px;
    background: rgba(7,10,22,.55);
    color: #69759a;
    font: 850 .61rem/1 system-ui, sans-serif;
    cursor: pointer;
  }

  .dn-tab.is-active,
  .dn-tab:hover {
    border-color: rgba(167,139,250,.28);
    background: rgba(124,58,237,.09);
    color: #d8d5ff;
  }

  .dn-info-section {
    max-width: 950px;
    margin: .65rem auto 0;
    padding: 0 0 2rem;
  }

  .dn-panel {
    display: none;
    padding: 1.5rem;
    border: 1px solid rgba(148,163,184,.10);
    border-radius: 18px;
    background: rgba(6,9,20,.72);
  }

  .dn-panel.is-active {
    display: block;
    animation: dn-panel-in .55s cubic-bezier(.16,1,.3,1) both;
  }

  .dn-panel h2 {
    margin: 0 0 .45rem !important;
    color: #fff !important;
    font-size: clamp(1.55rem, 4vw, 2.1rem) !important;
    letter-spacing: -.045em !important;
  }

  .dn-panel p,
  .dn-panel li {
    color: #818cae !important;
    font-size: .83rem;
    line-height: 1.75;
  }

  .dn-panel-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: .65rem;
    margin-top: 1rem;
  }

  .dn-panel-card {
    padding: 1rem;
    border: 1px solid rgba(148,163,184,.09);
    border-radius: 13px;
    background: rgba(148,163,184,.022);
  }

  .dn-panel-card b {
    display: block;
    color: #bdc7e7;
    font-size: .72rem;
  }

  .dn-panel-card span {
    display: block;
    margin-top: .32rem;
    color: #6f7b9e;
    font-size: .65rem;
    line-height: 1.55;
  }

  .dn-support-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.1rem 1.2rem;
    border: 1px solid rgba(167,139,250,.18);
    border-radius: 15px;
    background:
      linear-gradient(135deg, rgba(124,58,237,.08), rgba(37,99,235,.05)),
      rgba(6,9,20,.75);
  }

  .dn-support-box strong {
    display: block;
    color: #fff;
    font-size: .88rem;
  }

  .dn-support-box span {
    display: block;
    margin-top: .25rem;
    color: #6e7a9e;
    font-size: .68rem;
  }

  .dn-support-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 38px;
    padding: 0 .8rem;
    border-radius: 9px;
    background: linear-gradient(135deg,#6d28d9,#2563eb);
    color: #fff !important;
    font: 850 .61rem/1 system-ui, sans-serif;
    text-decoration: none !important;
    white-space: nowrap;
  }

  .dn-footer-note {
    padding-top: 1rem;
    color: #424c69;
    font: 700 .58rem/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
    text-align: center;
  }

  @keyframes dn-gradient-slide {
    0%,100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes dn-orbit-spin {
    to { transform: rotate(360deg); }
  }

  @keyframes dn-orbit-breathe {
    0%,100% { opacity: .6; transform: translate(-50%,-50%) scale(.98); }
    50% { opacity: 1; transform: translate(-50%,-50%) scale(1.02); }
  }

  @keyframes dn-orbit-node {
    to { transform: rotate(360deg) translateX(min(350px, 41vw)) rotate(-360deg); }
  }

  @keyframes dn-live-pulse {
    0%,100% { opacity: .4; transform: scale(.8); }
    50% { opacity: 1; transform: scale(1.35); }
  }

  @keyframes dn-scroll-line {
    0%,100% { transform: scaleY(.4); transform-origin: top; opacity: .35; }
    50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  }

  @keyframes dn-scan {
    0%,75% { transform: translateX(-110%); }
    90%,100% { transform: translateX(110%); }
  }

  @keyframes dn-rocket-float {
    0%,100% { transform: translate(-50%,-50%) translateY(0); }
    50% { transform: translate(-50%,-50%) translateY(-9px); }
  }

  @keyframes dn-flame {
    from { transform: translateX(-50%) scaleY(.78); opacity: .72; }
    to { transform: translateX(-50%) scaleY(1.12); opacity: 1; }
  }

  @keyframes dn-trail {
    0%,100% { transform: translateX(-50%) scale(.78); opacity: .36; }
    50% { transform: translateX(-50%) scale(1.06); opacity: .72; }
  }

  @keyframes dn-reveal-in {
    from { opacity: 0; transform: translateY(26px) scale(.97); }
    to { opacity: 1; transform: none; }
  }

  @keyframes dn-panel-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: 900px) {
    .dn-game-grid {
      grid-template-columns: 1fr;
    }

    .dn-score-panel {
      min-height: 420px;
    }

    .dn-rocket-stage {
      top: 56%;
    }

    .dn-reveal-grid {
      grid-template-columns: repeat(2, minmax(0,1fr));
    }

    .dn-panel-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 650px) {
    .deep-numbers-page {
      width: 100vw;
      margin-top: -5rem !important;
      padding-left: .6rem;
      padding-right: .6rem;
    }

    .dn-app {
      width: 100%;
    }

    .dn-topbar {
      padding-top: .7rem;
    }

    .dn-brand-copy span {
      display: none;
    }

    .dn-stat-chip:nth-child(1) {
      display: none;
    }

    .dn-hero {
      min-height: 530px;
      padding-top: 3.3rem;
    }

    .dn-title {
      font-size: clamp(3.2rem, 17vw, 5.6rem) !important;
    }

    .dn-subtitle {
      max-width: 350px;
      font-size: .9rem;
    }

    .dn-hero-metric {
      min-width: 108px;
    }

    .dn-command {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "left center"
        "right right";
    }

    .dn-command-side.left { grid-area: left; }
    .dn-command-center { grid-area: center; text-align: right; }
    .dn-command-side.right { grid-area: right; justify-content: flex-start; }

    .dn-question-card {
      min-height: 470px;
      padding: 1rem;
    }

    .dn-question {
      margin-top: 2.2rem !important;
      font-size: clamp(1.45rem, 7vw, 2rem) !important;
    }

    .dn-estimate-zone {
      grid-template-columns: 1fr;
    }

    .dn-submit {
      min-height: 52px;
    }

    .dn-score-panel {
      min-height: 420px;
    }

    .dn-score-ring {
      width: 185px;
    }

    .dn-reveal-head {
      align-items: flex-start;
      flex-direction: column;
    }

    .dn-replay {
      width: 100%;
    }

    .dn-reveal-grid {
      grid-template-columns: 1fr;
    }

    .dn-support-box {
      align-items: flex-start;
      flex-direction: column;
    }

    .dn-support-link {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .deep-numbers-page *,
    .deep-numbers-page *::before,
    .deep-numbers-page *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
</style>

<div class="deep-numbers-page" id="deep-numbers-app">
  <canvas class="dn-star-canvas" id="dn-stars" aria-hidden="true"></canvas>
  <canvas class="dn-effects-canvas" id="dn-effects" aria-hidden="true"></canvas>

  <div class="dn-app">
    <div class="dn-topbar">
      <a class="dn-brand" href="{{ '/' | relative_url }}" aria-label="Back to homepage">
        <span class="dn-brand-mark" aria-hidden="true"></span>
        <span class="dn-brand-copy">
          <strong>Deep Numbers</strong>
          <span>Daily crowd intelligence game</span>
        </span>
      </a>

      <div class="dn-top-actions" aria-label="Game statistics">
        <span class="dn-stat-chip"><span class="dn-live"></span> LIVE</span>
        <span class="dn-stat-chip">STREAK <b id="dn-streak">0</b></span>
        <span class="dn-stat-chip">BEST <b id="dn-best">0</b></span>
      </div>
    </div>

    <section class="dn-hero" aria-labelledby="dn-title">
      <div class="dn-hero-orbit" aria-hidden="true"></div>

      <div class="dn-hero-content">
        <span class="dn-eyebrow"><span class="dn-eyebrow-dot"></span> DAILY MISSION · <span id="dn-mission-date">--</span></span>

        <h1 class="dn-title" id="dn-title">
          <span class="dn-title-gradient">Deep Numbers</span>
        </h1>

        <p class="dn-subtitle">
          Five questions. Five guesses. One hidden crowd benchmark.
          The closer you think, the farther your rocket travels.
        </p>

        <div class="dn-hero-metrics">
          <div class="dn-hero-metric">
            <small>Mission</small>
            <strong id="dn-mission-code">DN-000</strong>
          </div>
          <div class="dn-hero-metric">
            <small>Questions</small>
            <strong>05</strong>
          </div>
          <div class="dn-hero-metric">
            <small>Reset</small>
            <strong id="dn-reset-timer">--:--:--</strong>
          </div>
        </div>
      </div>

      <div class="dn-scroll-hint">
        Enter the mission
        <span></span>
      </div>
    </section>

    <section class="dn-cosmic-atlas" aria-labelledby="dn-cosmic-map-title">
      <div class="dn-cosmic-atlas-head">
        <div>
          <span class="dn-cosmic-atlas-kicker">Entity map</span>
          <strong id="dn-cosmic-map-title">From the inner planets to the deep universe</strong>
        </div>
        <span>continuous procedural atlas · your guesses become trajectories</span>
      </div>

      <div class="dn-cosmic-atlas-frame">
        <canvas
          class="dn-cosmic-atlas-canvas"
          id="dn-cosmic-canvas"
          role="img"
          aria-label="Animated code-drawn progression from Mercury and Venus through Earth, the outer planets, Pluto, the Kuiper Belt, the Oort Cloud, nearby galaxies, and the deep universe."
        ></canvas>
      </div>

      <div class="dn-cosmic-atlas-scale" aria-label="Cosmic entity progression">
        <div class="dn-cosmic-entity"><b>Mercury</b><span>inner world</span></div>
        <div class="dn-cosmic-entity"><b>Venus</b><span>greenhouse world</span></div>
        <div class="dn-cosmic-entity"><b>Earth</b><span>home world</span></div>
        <div class="dn-cosmic-entity"><b>Moon</b><span>natural satellite</span></div>
        <div class="dn-cosmic-entity"><b>Mars</b><span>rocky frontier</span></div>
        <div class="dn-cosmic-entity"><b>Jupiter</b><span>gas giant</span></div>
        <div class="dn-cosmic-entity"><b>Saturn</b><span>ringed giant</span></div>
        <div class="dn-cosmic-entity"><b>Uranus</b><span>ice giant</span></div>
        <div class="dn-cosmic-entity"><b>Neptune</b><span>outer planet</span></div>
        <div class="dn-cosmic-entity"><b>Pluto</b><span>dwarf planet</span></div>
        <div class="dn-cosmic-entity"><b>Kuiper Belt</b><span>icy reservoir</span></div>
        <div class="dn-cosmic-entity"><b>Oort Cloud</b><span>far reservoir</span></div>
        <div class="dn-cosmic-entity"><b>Milky Way</b><span>home galaxy</span></div>
        <div class="dn-cosmic-entity"><b>Andromeda</b><span>neighbor galaxy</span></div>
        <div class="dn-cosmic-entity"><b>Deep Field</b><span>cosmic scale</span></div>
      </div>
    </section>

    <section class="dn-game-wrap" id="dn-game" aria-label="Deep Numbers game">
      <div class="dn-game-shell">
        <div class="dn-command">
          <div class="dn-command-side left">
            <span class="dn-command-label">Mission</span>
            <span class="dn-command-value" id="dn-command-mission">DN-000</span>
          </div>

          <div class="dn-command-center">DEEP NUMBERS</div>

          <div class="dn-command-side right">
            <span class="dn-command-label">Window</span>
            <span class="dn-command-value">05 ESTIMATES</span>
          </div>
        </div>

        <div class="dn-game-grid">
          <section class="dn-question-card" aria-live="polite">
            <div class="dn-question-head">
              <span class="dn-badge"><span class="dn-badge-dot"></span><span id="dn-category">ESTIMATION</span></span>
              <span class="dn-round" id="dn-round">ROUND 01 / 05</span>
            </div>

            <h2 class="dn-question" id="dn-question">
              Loading today's question...
            </h2>

            <p class="dn-hint" id="dn-hint">
              Your first instinct is usually the most useful.
            </p>

            <form id="dn-form" novalidate>
              <div class="dn-estimate-zone">
                <input
                  class="dn-input"
                  id="dn-input"
                  name="guess"
                  type="number"
                  inputmode="numeric"
                  min="0"
                  max="100"
                  step="1"
                  autocomplete="off"
                  placeholder="0–100"
                  aria-label="Your percentage estimate"
                  required
                >
                <button class="dn-submit" id="dn-submit" type="submit">Lock Guess</button>
              </div>
              <p class="dn-feedback" id="dn-feedback" aria-live="polite"></p>
            </form>

            <div class="dn-progress-wrap">
              <div class="dn-progress-head">
                <span>Mission progress</span>
                <span id="dn-progress-label">01 / 05</span>
              </div>
              <div class="dn-progress-track">
                <div class="dn-progress-fill" id="dn-progress-fill"></div>
              </div>
            </div>

            <p class="dn-small-rule">
              The benchmark stays hidden until all five guesses are locked.
              Deep Numbers uses a curated game benchmark, not a claim of real-time survey data.
            </p>
          </section>

          <aside class="dn-score-panel" aria-label="Mission telemetry">
            <div class="dn-score-top">
              <span class="dn-score-title">Trajectory telemetry</span>
              <span class="dn-destination" id="dn-destination">READY</span>
            </div>

            <div class="dn-score-ring" id="dn-score-ring">
              <div class="dn-score-inner">
                <div class="dn-score-number" id="dn-live-score">0.0</div>
                <div class="dn-score-unit">crowd match</div>
              </div>
            </div>

            <div class="dn-score-micro">
              <div class="dn-score-micro-item">
                <small>Locked</small>
                <strong id="dn-locked">0 / 5</strong>
              </div>
              <div class="dn-score-micro-item">
                <small>Best round</small>
                <strong id="dn-best-round">--</strong>
              </div>
            </div>

            <div class="dn-rocket-stage" aria-hidden="true">
              <div class="dn-trajectory"></div>

              <div class="dn-rocket">
                <span class="dn-rocket-nose"></span>
                <span class="dn-rocket-body"></span>
                <span class="dn-rocket-window"></span>
                <span class="dn-rocket-fin left"></span>
                <span class="dn-rocket-fin right"></span>
                <span class="dn-flame"></span>
                <span class="dn-trail"></span>
              </div>
            </div>

            <div class="dn-trajectory-copy">
              <p class="dn-trajectory-title" id="dn-trajectory-title">Awaiting launch.</p>
              <p class="dn-trajectory-text" id="dn-trajectory-text">
                Finish five estimates to calculate your trajectory.
              </p>
            </div>
          </aside>
        </div>

        <section class="dn-reveal" id="dn-reveal" aria-live="polite">
          <div class="dn-reveal-head">
            <div>
              <span class="dn-reveal-kicker">Mission report</span>
              <h2 id="dn-reveal-title">Trajectory locked.</h2>
            </div>
            <button class="dn-replay" id="dn-replay" type="button">Launch another mission</button>
          </div>
          <div class="dn-reveal-grid" id="dn-reveal-grid"></div>
        </section>
      </div>

      <div class="dn-tabs" role="tablist" aria-label="Deep Numbers information">
        <button class="dn-tab is-active" type="button" role="tab" aria-selected="true" data-dn-tab="play">Play</button>
        <button class="dn-tab" type="button" role="tab" aria-selected="false" data-dn-tab="about">How it works</button>
        <button class="dn-tab" type="button" role="tab" aria-selected="false" data-dn-tab="support">Support</button>
      </div>

      <div class="dn-info-section">
        <section class="dn-panel is-active" id="dn-panel-play" role="tabpanel">
          <h2>Trust the estimate.</h2>
          <p>
            Deep Numbers is designed around one simple tension: you are not trying to know the answer,
            you are trying to predict the answer the crowd is likely to produce.
          </p>
          <div class="dn-panel-grid">
            <div class="dn-panel-card">
              <b>01 · Estimate</b>
              <span>Enter one percentage from 0 to 100. Do not overthink it.</span>
            </div>
            <div class="dn-panel-card">
              <b>02 · Lock</b>
              <span>Your benchmark stays hidden until all five rounds are complete.</span>
            </div>
            <div class="dn-panel-card">
              <b>03 · Launch</b>
              <span>Your overall similarity becomes your rocket's trajectory score.</span>
            </div>
          </div>
        </section>

        <section class="dn-panel" id="dn-panel-about" role="tabpanel" hidden>
          <h2>How the scoring works.</h2>
          <p>
            Each question has a hidden benchmark and tolerance. A close estimate scores higher than
            a distant one. The final mission score is the average of the five round scores.
          </p>
          <div class="dn-panel-grid">
            <div class="dn-panel-card">
              <b>100</b>
              <span>Near-perfect crowd match.</span>
            </div>
            <div class="dn-panel-card">
              <b>50</b>
              <span>Mixed trajectory. You caught part of the pattern.</span>
            </div>
            <div class="dn-panel-card">
              <b>0</b>
              <span>Wildly off-course. The crowd went another way.</span>
            </div>
          </div>
        </section>

        <section class="dn-panel" id="dn-panel-support" role="tabpanel" hidden>
          <div class="dn-support-box">
            <div>
              <strong>Keep the rockets flying.</strong>
              <span>Deep Numbers is a small independent project by Ardie Barry Sailis.</span>
            </div>
            <a class="dn-support-link" href="{{ '/contact/' | relative_url }}">Get in touch</a>
          </div>
        </section>
      </div>

      <div class="dn-footer-note">
        DEEP NUMBERS · A SMALL INTERACTIVE EXPERIMENT IN HUMAN ESTIMATION
      </div>
    </section>
  </div>
</div>

<script>
(function () {
  "use strict";

  var root = document.getElementById("deep-numbers-app");
  if (!root) return;

  document.documentElement.classList.add("deep-numbers-document");
  if (document.body) document.body.classList.add("deep-numbers-active");

  var $ = function (id) { return document.getElementById(id); };

  var starCanvas = $("dn-stars");
  var effectCanvas = $("dn-effects");
  var starCtx = starCanvas.getContext("2d");
  var effectCtx = effectCanvas.getContext("2d");

  var questionEl = $("dn-question");
  var hintEl = $("dn-hint");
  var inputEl = $("dn-input");
  var formEl = $("dn-form");
  var feedbackEl = $("dn-feedback");
  var progressLabel = $("dn-progress-label");
  var progressFill = $("dn-progress-fill");
  var roundEl = $("dn-round");
  var categoryEl = $("dn-category");
  var missionCodeEl = $("dn-mission-code");
  var commandMissionEl = $("dn-command-mission");
  var missionDateEl = $("dn-mission-date");
  var timerEl = $("dn-reset-timer");
  var liveScoreEl = $("dn-live-score");
  var lockedEl = $("dn-locked");
  var bestRoundEl = $("dn-best-round");
  var scoreRingEl = $("dn-score-ring");
  var destinationEl = $("dn-destination");
  var trajectoryTitleEl = $("dn-trajectory-title");
  var trajectoryTextEl = $("dn-trajectory-text");
  var streakEl = $("dn-streak");
  var bestEl = $("dn-best");
  var revealEl = $("dn-reveal");
  var revealTitleEl = $("dn-reveal-title");
  var revealGridEl = $("dn-reveal-grid");
  var replayEl = $("dn-replay");

  var categories = [
    "Everyday life",
    "Human habits",
    "Technology",
    "Science & space",
    "Social instinct",
    "Lifestyle",
    "General knowledge"
  ];

  /*
   * These are game benchmarks, intentionally framed as curated estimates rather
   * than live population measurements. Keeping the benchmark in the client lets
   * the page remain fast, deterministic, and dependency-free.
   */
  var bank = [
    { q: "How many percent of people think they are better-than-average drivers?", h: "Predict the confidence bias.", min: 20, max: 100, b: 75, t: 14 },
    { q: "How many percent of people check their phone within the first hour of waking?", h: "Think routine, not intention.", min: 20, max: 100, b: 68, t: 13 },
    { q: "How many percent of people have searched themselves online?", h: "Predict the quiet habit.", min: 10, max: 100, b: 55, t: 15 },
    { q: "How many percent of people would choose an extra week of vacation over a raise?", h: "Predict the practical preference.", min: 20, max: 100, b: 63, t: 14 },
    { q: "How many percent of people have forgotten why they walked into a room?", h: "An everyday human glitch.", min: 30, max: 100, b: 82, t: 10 },
    { q: "How many percent of people have re-read a message before sending it?", h: "Estimate the editing instinct.", min: 15, max: 100, b: 72, t: 12 },
    { q: "How many percent of people have kept a tab open for days because they might need it later?", h: "Predict digital clutter.", min: 10, max: 100, b: 65, t: 14 },
    { q: "How many percent of people would rather receive money than a surprise gift?", h: "Predict the practical answer.", min: 20, max: 100, b: 58, t: 14 },
    { q: "How many percent of people would rather be rich than famous?", h: "Predict the crowd's priority.", min: 20, max: 100, b: 76, t: 11 },
    { q: "How many percent of people have laughed at a joke they did not understand?", h: "Social camouflage.", min: 10, max: 100, b: 70, t: 13 },
    { q: "How many percent of people have pretended to know a song when they did not?", h: "Predict the social bluff.", min: 10, max: 95, b: 56, t: 14 },
    { q: "How many percent of people think they could survive a week without social media?", h: "Predict self-confidence.", min: 10, max: 100, b: 48, t: 15 },
    { q: "How many percent of people have watched a video at 1.5x speed?", h: "Predict modern viewing habits.", min: 10, max: 100, b: 60, t: 14 },
    { q: "How many percent of people would choose a four-day workweek?", h: "Predict the workplace consensus.", min: 30, max: 100, b: 81, t: 11 },
    { q: "How many percent of people have checked the fridge twice hoping new food appeared?", h: "A classic non-solution.", min: 20, max: 100, b: 69, t: 13 },
    { q: "How many percent of people prefer messages over phone calls?", h: "Predict communication preference.", min: 20, max: 100, b: 73, t: 12 },
    { q: "How many percent of people have used a search engine to spell a word?", h: "Predict the shortcut.", min: 20, max: 100, b: 64, t: 14 },
    { q: "How many percent of people have fallen asleep while watching a movie?", h: "Predict the couch effect.", min: 20, max: 100, b: 74, t: 13 },
    { q: "How many percent of people would rather travel than buy a new car?", h: "Predict the experience preference.", min: 20, max: 100, b: 60, t: 14 },
    { q: "How many percent of people have looked at the clock and immediately forgotten the time?", h: "Estimate the memory failure.", min: 20, max: 100, b: 71, t: 13 },
    { q: "How many percent of people have used an AI chatbot?", h: "Predict broad modern exposure.", min: 5, max: 100, b: 49, t: 18 },
    { q: "How many percent of people would trust AI to summarize a long article?", h: "Predict utility over skepticism.", min: 10, max: 100, b: 57, t: 15 },
    { q: "How many percent of people would use AI to brainstorm ideas?", h: "Predict the productivity answer.", min: 20, max: 100, b: 68, t: 13 },
    { q: "How many percent of people know what a QR code is?", h: "Predict current familiarity.", min: 40, max: 100, b: 93, t: 6 },
    { q: "How many percent of people know that the Sun is a star?", h: "Predict basic science recall.", min: 50, max: 100, b: 91, t: 7 },
    { q: "How many percent of people know that Venus is hotter than Mercury?", h: "A counterintuitive astronomy fact.", min: 5, max: 80, b: 31, t: 15 },
    { q: "How many percent of people can name the largest ocean?", h: "Predict geography familiarity.", min: 20, max: 100, b: 63, t: 15 },
    { q: "How many percent of people know that Jupiter is the largest planet?", h: "Predict school knowledge retention.", min: 20, max: 100, b: 76, t: 12 },
    { q: "How many percent of people know Mars is called the Red Planet?", h: "Predict a classic association.", min: 30, max: 100, b: 89, t: 8 },
    { q: "How many percent of people can explain what a black hole is?", h: "Predict conceptual familiarity.", min: 5, max: 90, b: 48, t: 17 },
    { q: "How many percent of people know that a light-year measures distance?", h: "Predict astronomy vocabulary.", min: 5, max: 90, b: 35, t: 17 },
    { q: "How many percent of people know that DNA carries genetic information?", h: "Predict general science familiarity.", min: 20, max: 100, b: 69, t: 14 },
    { q: "How many percent of people can name all seven continents?", h: "Predict school knowledge.", min: 10, max: 100, b: 74, t: 12 },
    { q: "How many percent of people know that water freezes at 0 degrees Celsius?", h: "Predict a familiar science fact.", min: 40, max: 100, b: 92, t: 7 },
    { q: "How many percent of people have heard of the James Webb Space Telescope?", h: "Predict science-news exposure.", min: 5, max: 90, b: 39, t: 16 },
    { q: "How many percent of people think they could identify the Milky Way in the night sky?", h: "Predict astronomy confidence.", min: 10, max: 100, b: 45, t: 16 },
    { q: "How many percent of people have looked up a health symptom online?", h: "Predict the classic rabbit hole.", min: 20, max: 100, b: 77, t: 12 },
    { q: "How many percent of people have used a map app to navigate somewhere familiar?", h: "Predict digital dependence.", min: 20, max: 100, b: 70, t: 13 },
    { q: "How many percent of people have taken a screenshot instead of saving a file properly?", h: "Predict the modern workaround.", min: 15, max: 100, b: 72, t: 13 },
    { q: "How many percent of people have accidentally liked an old social media post?", h: "Predict the scroll disaster.", min: 5, max: 80, b: 28, t: 15 },
    { q: "How many percent of people have watched a trailer and then never watched the film?", h: "Predict the entertainment gap.", min: 20, max: 100, b: 60, t: 15 },
    { q: "How many percent of people have said 'I'm almost there' when they were not?", h: "Predict the universal ETA inflation.", min: 20, max: 100, b: 62, t: 14 },
    { q: "How many percent of people have made a to-do list and then ignored it?", h: "Predict productivity theater.", min: 20, max: 100, b: 79, t: 12 },
    { q: "How many percent of people have bought something because it was on sale even though they did not need it?", h: "Predict discount psychology.", min: 20, max: 100, b: 66, t: 14 },
    { q: "How many percent of people have opened a message and forgotten to reply?", h: "Predict inbox behavior.", min: 20, max: 100, b: 83, t: 10 },
    { q: "How many percent of people have watched a whole series faster than they intended?", h: "Predict binge pressure.", min: 20, max: 100, b: 69, t: 14 },
    { q: "How many percent of people have searched for reviews while standing in a store?", h: "Predict buying behavior.", min: 10, max: 100, b: 58, t: 15 },
    { q: "How many percent of people have used the same password more than once?", h: "Predict risky convenience.", min: 20, max: 100, b: 63, t: 15 },
    { q: "How many percent of people have muted a group chat instead of leaving it?", h: "Predict the compromise.", min: 10, max: 100, b: 71, t: 13 },
    { q: "How many percent of people have delayed sending an email because they wanted it to sound perfect?", h: "Predict perfectionism.", min: 10, max: 100, b: 52, t: 15 },
    { q: "How many percent of people would rather have a beach holiday than a city holiday?", h: "Predict the leisure preference.", min: 20, max: 100, b: 61, t: 14 },
    { q: "How many percent of people would rather live near the ocean than near mountains?", h: "Predict the location preference.", min: 15, max: 100, b: 56, t: 15 },
    { q: "How many percent of people would rather have more free time than more money?", h: "Predict the abstract preference.", min: 20, max: 100, b: 59, t: 14 },
    { q: "How many percent of people have recognized a person but forgotten their name?", h: "Predict the name-recall problem.", min: 30, max: 100, b: 88, t: 9 },
    { q: "How many percent of people have reheated food and then forgotten to eat it?", h: "Predict the distracted meal.", min: 5, max: 80, b: 34, t: 15 },
    { q: "How many percent of people have checked their bank balance after making a purchase?", h: "Predict the post-purchase check.", min: 10, max: 100, b: 67, t: 14 },
    { q: "How many percent of people have changed their mind after reading online comments?", h: "Predict opinion volatility.", min: 10, max: 90, b: 44, t: 16 },
    { q: "How many percent of people have watched a tutorial while doing the thing it explains?", h: "Predict real-time learning.", min: 20, max: 100, b: 72, t: 13 },
    { q: "How many percent of people can name at least three constellations?", h: "Predict astronomy knowledge.", min: 5, max: 90, b: 29, t: 16 },
    { q: "How many percent of people know that Saturn is famous for its rings?", h: "Predict an iconic association.", min: 40, max: 100, b: 92, t: 7 },
    { q: "How many percent of people know Pluto is classified as a dwarf planet?", h: "Predict modern textbook recall.", min: 20, max: 100, b: 79, t: 12 },
    { q: "How many percent of people think they could explain gravity to a child?", h: "Predict confidence in explanation.", min: 10, max: 100, b: 62, t: 14 },
    { q: "How many percent of people have looked at the weather app and still asked someone what the weather is?", h: "Predict the social weather check.", min: 10, max: 90, b: 42, t: 16 },
    { q: "How many percent of people have written a message, deleted it, and rewritten it?", h: "Predict message anxiety.", min: 20, max: 100, b: 73, t: 12 },
    { q: "How many percent of people have gone to another room and forgotten what they wanted?", h: "Predict the classic brain glitch.", min: 30, max: 100, b: 84, t: 10 },
    { q: "How many percent of people have said they were 'fine' when they were not?", h: "Predict the social default.", min: 20, max: 100, b: 86, t: 9 },
    { q: "How many percent of people have searched for a movie after hearing one quote from it?", h: "Predict curiosity behavior.", min: 5, max: 90, b: 43, t: 16 },
    { q: "How many percent of people have used a calculator for a simple percentage?", h: "Predict tool dependence.", min: 10, max: 100, b: 61, t: 14 },
    { q: "How many percent of people have taken a photo of food before eating it?", h: "Predict social-media food culture.", min: 5, max: 90, b: 45, t: 16 },
    { q: "How many percent of people have bought something mainly because the packaging looked good?", h: "Predict visual persuasion.", min: 10, max: 90, b: 54, t: 15 },
    { q: "How many percent of people have skipped the instructions and figured it out themselves?", h: "Predict improvisation.", min: 20, max: 100, b: 76, t: 12 },
    { q: "How many percent of people have felt productive after organizing files instead of doing the main task?", h: "Predict productivity displacement.", min: 10, max: 100, b: 59, t: 15 },
    { q: "How many percent of people have checked their phone while already holding it?", h: "Predict automatic behavior.", min: 30, max: 100, b: 74, t: 13 },
    { q: "How many percent of people have opened social media without knowing why?", h: "Predict autopilot behavior.", min: 20, max: 100, b: 81, t: 11 },
    { q: "How many percent of people would choose to know the future if they could?", h: "Predict curiosity over uncertainty.", min: 20, max: 100, b: 67, t: 14 },
    { q: "How many percent of people have changed a playlist because one song suddenly felt wrong?", h: "Predict mood-driven curation.", min: 10, max: 100, b: 58, t: 14 }
  ];

  var missionSize = 5;
  var answers = [];
  var mission = [];
  var index = 0;
  var missionNumber = 0;
  var currentDateKey = "";
  var storageKey = "deep-numbers-v3";
  var seedState = 1;
  var pointerX = 0;
  var pointerY = 0;
  var particles = [];
  var stars = [];
  var starAnimation = 0;
  var effectAnimation = 0;
  var atlasAnimation = 0;
  var atlasGuesses = [];

  function seededRandom() {
    seedState = (seedState * 1664525 + 1013904223) >>> 0;
    return seedState / 4294967296;
  }

  function hashString(value) {
    var h = 2166136261;
    for (var i = 0; i < value.length; i += 1) {
      h ^= value.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function todayKey() {
    var now = new Date();
    var y = now.getFullYear();
    var m = String(now.getMonth() + 1).padStart(2, "0");
    var d = String(now.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function prettyDate(key) {
    var parts = key.split("-");
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  function hoursToMidnight() {
    var now = new Date();
    var next = new Date(now);
    next.setHours(24, 0, 0, 0);
    return Math.max(0, next.getTime() - now.getTime());
  }

  function countdown() {
    var ms = hoursToMidnight();
    var total = Math.floor(ms / 1000);
    var h = Math.floor(total / 3600);
    var m = Math.floor((total % 3600) / 60);
    var s = total % 60;
    timerEl.textContent =
      String(h).padStart(2, "0") + ":" +
      String(m).padStart(2, "0") + ":" +
      String(s).padStart(2, "0");
  }

  function readState() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch (error) {
      return {};
    }
  }

  function writeState(state) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      // Storage can be unavailable in strict privacy modes.
    }
  }

  function loadStats() {
    var state = readState();
    streakEl.textContent = String(state.streak || 0);
    bestEl.textContent = String(state.best || 0);
  }

  function updateCompletionStats(score) {
    var state = readState();
    var key = todayKey();

    if (state.completedDate !== key) {
      var previous = state.completedDate ? new Date(state.completedDate) : null;
      var today = new Date(key + "T00:00:00");
      var consecutive = false;

      if (previous) {
        var diff = Math.round((today - previous) / 86400000);
        consecutive = diff === 1;
      }

      state.streak = consecutive ? (state.streak || 0) + 1 : 1;
      state.completedDate = key;
    }

    state.best = Math.max(Number(state.best || 0), Math.round(score));
    state.lastScore = Number(score.toFixed(1));
    state.total = Number(state.total || 0) + 1;
    writeState(state);
    loadStats();
  }

  function buildDailyMission(forceReplay) {
    var key = todayKey();
    seedState = hashString(key + "|deep-numbers");
    missionNumber = 100 + (seedState % 900);

    var pool = bank.slice();
    var selected = [];

    /*
     * Daily missions are deterministic, so refreshing the page gives the same
     * five questions for the same calendar day. Replay shuffles the order but
     * does not alter the benchmark values.
     */
    while (pool.length && selected.length < missionSize) {
      var pick = Math.floor(seededRandom() * pool.length);
      selected.push(pool.splice(pick, 1)[0]);
    }

    mission = selected;
    if (forceReplay) {
      mission = selected.slice().sort(function () {
        return Math.random() - 0.5;
      });
    }

    currentDateKey = key;
    missionCodeEl.textContent = "DN-" + String(missionNumber).padStart(3, "0");
    commandMissionEl.textContent = "DN-" + String(missionNumber).padStart(3, "0");
    missionDateEl.textContent = prettyDate(key);
  }

  function similarity(guess, benchmark, tolerance) {
    var distance = Math.abs(guess - benchmark);
    var score = 100 * Math.exp(-Math.pow(distance / tolerance, 2) / 2);
    return Math.max(0, Math.min(100, score));
  }

  function destinationFor(score) {
    if (score >= 94) return { name: "INTERSTELLAR", text: "Your estimates escaped the solar system." };
    if (score >= 84) return { name: "NEPTUNE", text: "Deep-space trajectory acquired." };
    if (score >= 72) return { name: "SATURN", text: "The crowd pattern is pulling you outward." };
    if (score >= 60) return { name: "JUPITER", text: "Strong trajectory. Your instincts are converging." };
    if (score >= 45) return { name: "MARS", text: "You have left Earth orbit, but the pattern is still fuzzy." };
    if (score >= 30) return { name: "MOON", text: "A cautious first leap. The crowd is still elusive." };
    return { name: "EARTH ORBIT", text: "The trajectory needs another pass." };
  }

  function formatScore(score) {
    return Number(score || 0).toFixed(1);
  }

  function renderQuestion() {
    var q = mission[index];
    categoryEl.textContent = categories[index % categories.length];
    roundEl.textContent = "ROUND " + String(index + 1).padStart(2, "0") + " / 05";
    questionEl.textContent = q.q;
    hintEl.textContent = q.h;
    inputEl.min = String(q.min);
    inputEl.max = String(q.max);
    inputEl.placeholder = String(q.min) + "–" + String(q.max);
    inputEl.value = "";
    progressLabel.textContent = String(index + 1).padStart(2, "0") + " / 05";
    progressFill.style.width = String(index / missionSize * 100) + "%";
    feedbackEl.textContent = "One guess. The benchmark stays hidden.";
    feedbackEl.style.color = "#6f7da4";
    inputEl.focus({ preventScroll: true });

    questionEl.animate(
      [
        { opacity: 0, transform: "translateY(16px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 420, easing: "cubic-bezier(.16,1,.3,1)" }
    );
  }

  function liveTelemetry() {
    var scores = answers.map(function (answer) {
      return similarity(answer.value, answer.question.b, answer.question.t);
    });

    var average = scores.length
      ? scores.reduce(function (a, b) { return a + b; }, 0) / scores.length
      : 0;

    var bestRound = scores.length ? Math.max.apply(Math, scores) : 0;
    var destination = destinationFor(average);

    liveScoreEl.textContent = formatScore(average);
    lockedEl.textContent = String(answers.length) + " / 5";
    bestRoundEl.textContent = scores.length ? String(Math.round(bestRound)) : "--";
    destinationEl.textContent = destination.name;

    var deg = Math.max(0, Math.min(360, average * 3.6));
    var blueStop = Math.min(deg, 150);
    scoreRingEl.style.background =
      "conic-gradient(#7c3aed 0deg, #60a5fa " +
      blueStop + "deg, #67e8f9 " +
      deg + "deg, rgba(148,163,184,.07) " +
      deg + "deg)";

    trajectoryTitleEl.textContent =
      average < 30 ? "Awaiting launch." :
      average < 45 ? "Earth orbit." :
      average < 60 ? "Mars window acquired." :
      average < 72 ? "Jupiter trajectory." :
      average < 84 ? "Deep-space trajectory." :
      "The crowd is bending your trajectory.";

    trajectoryTextEl.textContent = answers.length
      ? "Current crowd match: " + formatScore(average) + ". Finish the mission to reveal the full report."
      : "Finish five estimates to calculate your trajectory.";
  }

  function launchReport() {
    var roundScores = answers.map(function (answer) {
      return similarity(answer.value, answer.question.b, answer.question.t);
    });

    var score = roundScores.reduce(function (a, b) { return a + b; }, 0) / missionSize;
    var destination = destinationFor(score);

    updateCompletionStats(score);

    progressFill.style.width = "100%";
    liveScoreEl.textContent = formatScore(score);
    bestRoundEl.textContent = String(Math.round(Math.max.apply(Math, roundScores)));
    destinationEl.textContent = destination.name;
    trajectoryTitleEl.textContent = "MISSION COMPLETE";
    trajectoryTextEl.textContent = destination.text;

    revealTitleEl.textContent =
      Math.round(score) + "/100 · " + destination.name;

    revealGridEl.innerHTML = "";

    answers.forEach(function (answer, i) {
      var roundScore = roundScores[i];
      var item = document.createElement("div");
      item.className = "dn-reveal-item";
      item.innerHTML =
        "<b>Q" + (i + 1) + " · " + categories[i % categories.length].toUpperCase() + "</b>" +
        "<strong>" + answer.value + "%</strong>" +
        "<span>Match " + Math.round(roundScore) + " · Hidden benchmark " + answer.question.b + "%</span>";
      revealGridEl.appendChild(item);
    });

    revealEl.classList.remove("is-open");
    void revealEl.offsetWidth;
    revealEl.classList.add("is-open");

    burst(window.innerWidth * .52, window.innerHeight * .46, score);
    pulseRocket(score);

    setTimeout(function () {
      revealEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 180);
  }

  function pulseRocket(score) {
    var rocket = root.querySelector(".dn-rocket");
    if (!rocket) return;
    var distance = Math.max(6, Math.round(score / 6));
    rocket.animate(
      [
        { transform: "translate(-50%,-50%) translateY(0) scale(1)" },
        { transform: "translate(-50%,-50%) translateY(-" + distance + "px) scale(1.04)" },
        { transform: "translate(-50%,-50%) translateY(0) scale(1)" }
      ],
      {
        duration: 900,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );
  }

  var submitting = false;


  function queueAtlasGuess(value, score, round) {
    var colors = ["#60a5fa", "#67e8f9", "#a78bfa", "#f0abfc", "#86efac"];
    atlasGuesses.push({
      value: value,
      score: score,
      round: round,
      color: colors[(round - 1) % colors.length],
      born: performance.now()
    });
  }

  function submitGuess(event) {
    event.preventDefault();

    if (submitting || !mission[index]) return;

    var q = mission[index];
    var value = Number(String(inputEl.value).replace(/,/g, "").trim());

    if (!Number.isFinite(value) || value < q.min || value > q.max) {
      feedbackEl.textContent =
        "Enter a whole number from " + q.min + " to " + q.max + ".";
      feedbackEl.style.color = "#fb7185";
      inputEl.animate(
        [
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(-3px)" },
          { transform: "translateX(3px)" },
          { transform: "translateX(0)" }
        ],
        { duration: 240 }
      );
      return;
    }

    submitting = true;
    inputEl.disabled = true;
    var submitButton = $("dn-submit");
    if (submitButton) submitButton.disabled = true;

    feedbackEl.textContent = "LOCKED. The benchmark remains hidden.";
    feedbackEl.style.color = "#67e8f9";

    answers.push({ question: q, value: value });
    queueAtlasGuess(
      value,
      similarity(value, q.b, q.t),
      index + 1
    );
    liveTelemetry();

    if (index < missionSize - 1) {
      setTimeout(function () {
        index += 1;
        submitting = false;
        inputEl.disabled = false;
        if (submitButton) submitButton.disabled = false;
        renderQuestion();
      }, 260);
    } else {
      setTimeout(function () {
        submitting = false;
        launchReport();
      }, 440);
    }
  }

  function replayMission() {
    answers = [];
    atlasGuesses = [];
    index = 0;
    submitting = false;
    inputEl.disabled = false;
    var submitButton = $("dn-submit");
    if (submitButton) submitButton.disabled = false;
    revealEl.classList.remove("is-open");
    buildDailyMission(true);
    liveTelemetry();
    renderQuestion();
    root.querySelector(".dn-game-wrap").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function setTab(name) {
    root.querySelectorAll("[data-dn-tab]").forEach(function (tab) {
      var active = tab.getAttribute("data-dn-tab") === name;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    root.querySelectorAll(".dn-panel").forEach(function (panel) {
      var activePanel = panel.id === "dn-panel-" + name;
      panel.classList.toggle("is-active", activePanel);
      panel.hidden = !activePanel;
    });
  }

  formEl.addEventListener("submit", submitGuess);
  replayEl.addEventListener("click", replayMission);

  root.querySelectorAll("[data-dn-tab]").forEach(function (tab) {
    tab.addEventListener("click", function () {
      setTab(tab.getAttribute("data-dn-tab"));
    });
  });

  inputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      formEl.requestSubmit();
    }
  });

  document.addEventListener("mousemove", function (event) {
    pointerX = (event.clientX / window.innerWidth - .5) * 2;
    pointerY = (event.clientY / window.innerHeight - .5) * 2;
    root.style.setProperty("--dn-px", pointerX.toFixed(3));
    root.style.setProperty("--dn-py", pointerY.toFixed(3));
  }, { passive: true });

  function drawCosmicAtlas(time) {
    var canvas = document.getElementById("dn-cosmic-canvas");
    if (!canvas) return;

    var rect = canvas.getBoundingClientRect();
    var ratio = Math.min(2, window.devicePixelRatio || 1);
    var width = Math.max(760, Math.floor(rect.width));
    var height = Math.max(220, Math.floor(rect.height));

    if (canvas.width !== Math.floor(width * ratio) || canvas.height !== Math.floor(height * ratio)) {
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
    }

    var ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);

    var now = Number(time || performance.now());
    var pulse = (Math.sin(now * .0022) + 1) / 2;

    function rgba(hex, alpha) {
      var value = hex.replace("#", "");
      var r = parseInt(value.slice(0, 2), 16);
      var g = parseInt(value.slice(2, 4), 16);
      var b = parseInt(value.slice(4, 6), 16);
      return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    }

    function seeded(seed) {
      var value = Math.sin(seed * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    }

    function circleGlow(x, y, color, radius, alpha) {
      var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, rgba(color, alpha));
      gradient.addColorStop(1, rgba(color, 0));
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function sphere(x, y, radius, light, mid, dark) {
      var gradient = ctx.createRadialGradient(
        x - radius * .34, y - radius * .38, radius * .05,
        x, y, radius
      );
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(.08, light);
      gradient.addColorStop(.42, mid);
      gradient.addColorStop(.82, dark);
      gradient.addColorStop(1, "#02040d");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      var shade = ctx.createRadialGradient(
        x + radius * .45, y + radius * .45, radius * .05,
        x + radius * .35, y + radius * .35, radius * 1.05
      );
      shade.addColorStop(0, "rgba(0,0,0,.02)");
      shade.addColorStop(1, "rgba(0,0,0,.62)");
      ctx.fillStyle = shade;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    var bg = ctx.createLinearGradient(0, 0, width, 0);
    bg.addColorStop(0, "#020714");
    bg.addColorStop(.42, "#07091b");
    bg.addColorStop(.72, "#0b0920");
    bg.addColorStop(1, "#02040e");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    var nebula = ctx.createRadialGradient(width * .68, height * .48, 0, width * .68, height * .48, width * .42);
    nebula.addColorStop(0, "rgba(124,58,237,.13)");
    nebula.addColorStop(.42, "rgba(37,99,235,.045)");
    nebula.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, width, height);

    // Deep-space background field.
    for (var s = 0; s < 170; s += 1) {
      var sx = seeded(s + 3) * width;
      var sy = 12 + seeded(s + 91) * (height - 48);
      var sr = .35 + seeded(s + 177) * 1.15;
      var twinkle = .18 + seeded(s + 311) * .55;
      if (s % 23 === 0) {
        ctx.fillStyle = "rgba(255,255,255," + (.45 + pulse * .35) + ")";
      } else {
        ctx.fillStyle = "rgba(190,205,255," + twinkle + ")";
      }
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }

    var labels = [
      "MERCURY", "VENUS", "EARTH", "MOON", "MARS", "JUPITER", "SATURN",
      "URANUS", "NEPTUNE", "PLUTO", "KUIPER", "OORT", "MILKY WAY", "ANDROMEDA", "DEEP"
    ];
    var colors = [
      "#d1d5db", "#f6d49b", "#60a5fa", "#cbd5e1", "#fb7185", "#d6a06b",
      "#fde68a", "#67e8f9", "#93c5fd", "#ddd6fe", "#a78bfa", "#67e8f9",
      "#c4b5fd", "#bfdbfe", "#e9d5ff"
    ];

    var left = Math.max(52, width * .035);
    var right = Math.min(width - 52, width * .965);
    var step = (right - left) / (labels.length - 1);
    var cy = Math.floor(height * .49);
    var planetR = Math.max(20, Math.min(38, step * .31));

    // Route line, with subtle direction arrows.
    var route = ctx.createLinearGradient(left, 0, right, 0);
    route.addColorStop(0, "rgba(96,165,250,.22)");
    route.addColorStop(.35, "rgba(103,232,249,.38)");
    route.addColorStop(.62, "rgba(167,139,250,.58)");
    route.addColorStop(1, "rgba(240,171,252,.16)");

    ctx.beginPath();
    ctx.moveTo(left, cy);
    ctx.lineTo(right, cy);
    ctx.strokeStyle = route;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([2, 8]);
    ctx.stroke();
    ctx.setLineDash([]);

    for (var arrow = 0; arrow < 8; arrow += 1) {
      var ax = left + (right - left) * (.08 + arrow * .12);
      ctx.strokeStyle = "rgba(167,139,250,.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ax, cy - 4);
      ctx.lineTo(ax + 5, cy);
      ctx.lineTo(ax, cy + 4);
      ctx.stroke();
    }

    function drawEarth(x, y, r) {
      // Stylized Earth based on the visual components emphasized in NASA
      // global Earth imagery: blue ocean, recognizable continental masses,
      // cloud systems, polar ice, atmospheric limb, and city-light hints.
      circleGlow(x, y, "#60a5fa", r * 2.8, .24);

      // Atmospheric halo.
      var atmosphere = ctx.createRadialGradient(
        x - r * .20, y - r * .25, r * .78,
        x, y, r * 1.30
      );
      atmosphere.addColorStop(0, "rgba(103,232,249,0)");
      atmosphere.addColorStop(.82, "rgba(96,165,250,.08)");
      atmosphere.addColorStop(.94, "rgba(125,211,252,.34)");
      atmosphere.addColorStop(1, "rgba(96,165,250,0)");
      ctx.fillStyle = atmosphere;
      ctx.beginPath();
      ctx.arc(x, y, r * 1.30, 0, Math.PI * 2);
      ctx.fill();

      // Ocean sphere.
      sphere(x, y, r, "#dbeafe", "#1677d2", "#062b68");

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .985, 0, Math.PI * 2);
      ctx.clip();

      // Ocean-depth shading and subtle equatorial band.
      var oceanShade = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
      oceanShade.addColorStop(0, "rgba(96,165,250,.08)");
      oceanShade.addColorStop(.52, "rgba(14,116,144,.05)");
      oceanShade.addColorStop(1, "rgba(2,18,55,.38)");
      ctx.fillStyle = oceanShade;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);

      // Approximate continental silhouettes. These are intentionally
      // recognizable at atlas scale rather than cartographic boundaries.
      function land(points, fill, opacity) {
        ctx.beginPath();
        points.forEach(function (p, i) {
          var px = x + p[0] * r;
          var py = y + p[1] * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      var landBase = "#43b96a";
      var landLight = "#74d47b";
      var landDark = "#24734d";
      var desert = "#c9a65d";

      // North America.
      land([
        [-.88,-.30],[-.75,-.55],[-.50,-.62],[-.31,-.50],[-.20,-.33],
        [-.34,-.18],[-.46,-.12],[-.48,.02],[-.65,.05],[-.73,-.10],
        [-.87,-.14]
      ], landBase, .95);

      // Greenland.
      land([
        [-.18,-.76],[.02,-.83],[.16,-.70],[.10,-.54],[-.08,-.50],[-.20,-.61]
      ], "#eaf6ff", .95);

      // Central America.
      land([
        [-.33,.02],[-.24,.08],[-.18,.17],[-.24,.27],[-.34,.19],[-.38,.08]
      ], landDark, .95);

      // South America.
      land([
        [-.28,.25],[-.12,.19],[.02,.31],[.08,.48],[.02,.69],[-.10,.88],
        [-.23,.74],[-.31,.53],[-.38,.38]
      ], landLight, .95);

      // Europe.
      land([
        [.02,-.38],[.14,-.46],[.25,-.43],[.34,-.31],[.29,-.22],
        [.16,-.24],[.10,-.16],[.01,-.25]
      ], landLight, .96);

      // Africa.
      land([
        [.04,-.17],[.22,-.21],[.36,-.08],[.38,.13],[.28,.40],
        [.12,.63],[-.01,.46],[-.08,.19],[-.04,.01]
      ], landBase, .98);

      // Arabian Peninsula.
      land([
        [.27,-.19],[.39,-.17],[.47,-.07],[.38,.04],[.28,-.02]
      ], desert, .92);

      // Asia.
      land([
        [.23,-.42],[.42,-.49],[.63,-.42],[.84,-.27],[.91,-.05],
        [.76,.06],[.60,.00],[.51,-.12],[.38,-.10],[.29,-.20]
      ], landLight, .96);

      // India.
      land([
        [.43,.02],[.53,.08],[.50,.28],[.39,.22],[.35,.08]
      ], landBase, .95);

      // Southeast Asia.
      land([
        [.57,.03],[.68,.10],[.66,.24],[.57,.19],[.53,.09]
      ], landDark, .96);

      // Japan / island arc.
      land([
        [.80,-.10],[.85,-.02],[.83,.06],[.78,.01]
      ], landLight, .9);

      // Australia.
      land([
        [.55,.42],[.74,.36],[.88,.47],[.84,.66],[.68,.75],
        [.51,.65],[.47,.51]
      ], landLight, .98);

      // Madagascar.
      land([
        [.36,.43],[.41,.50],[.39,.64],[.33,.58]
      ], landBase, .9);

      // Antarctica / southern polar cap.
      land([
        [-.82,.83],[-.56,.90],[-.25,.94],[.08,.92],[.42,.91],
        [.72,.86],[.86,.78],[.68,.72],[.35,.77],[.04,.73],
        [-.25,.77],[-.54,.73]
      ], "#eaf6ff", .88);

      // Regional terrain color patches.
      land([[-.68,-.39],[-.48,-.49],[-.35,-.39],[-.45,-.25],[-.61,-.27]], "#9bc66b", .70);
      land([[-.04,.08],[.08,.04],[.18,.19],[.08,.34],[-.03,.29]], desert, .66);
      land([[.39,-.12],[.54,-.18],[.64,-.08],[.52,.02],[.43,-.02]], desert, .58);
      land([[.58,.44],[.74,.39],[.81,.50],[.72,.60],[.59,.56]], "#6fba6c", .62);

      // Polar cap at the north edge.
      ctx.fillStyle = "rgba(240,249,255,.88)";
      ctx.beginPath();
      ctx.ellipse(x + r * .02, y - r * .87, r * .44, r * .14, 0, 0, Math.PI * 2);
      ctx.fill();

      // Major cloud belts and weather systems.
      function cloud(points, alpha) {
        ctx.beginPath();
        points.forEach(function (p, i) {
          var px = x + p[0] * r;
          var py = y + p[1] * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.strokeStyle = "rgba(255,255,255," + alpha + ")";
        ctx.lineWidth = Math.max(2, r * .075);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      cloud([[-.86,-.05],[-.65,-.14],[-.44,-.06],[-.26,-.15]], .42);
      cloud([[-.20,.38],[.00,.31],[.18,.40],[.34,.31]], .48);
      cloud([[.30,-.51],[.49,-.43],[.69,-.51],[.87,-.43]], .38);
      cloud([[-.55,.58],[-.37,.50],[-.17,.60]], .32);

      // Spiral cloud system over the western Pacific.
      ctx.strokeStyle = "rgba(255,255,255,.58)";
      ctx.lineWidth = Math.max(1.5, r * .055);
      ctx.beginPath();
      for (var spiral = 0; spiral < 28; spiral += 1) {
        var sa = spiral * .52;
        var sr2 = .025 + spiral * .008;
        var spx = x + .55 * r + Math.cos(sa) * sr2 * r;
        var spy = y + .16 * r + Math.sin(sa) * sr2 * r;
        if (spiral === 0) ctx.moveTo(spx, spy);
        else ctx.lineTo(spx, spy);
      }
      ctx.stroke();

      // Day/night terminator.
      var terminator = ctx.createLinearGradient(x - r, y, x + r, y);
      terminator.addColorStop(0, "rgba(255,255,255,0)");
      terminator.addColorStop(.58, "rgba(0,0,0,.02)");
      terminator.addColorStop(.84, "rgba(1,8,24,.22)");
      terminator.addColorStop(1, "rgba(1,4,16,.58)");
      ctx.fillStyle = terminator;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);

      // Sparse city-light hints on the night-side continents.
      var cityPoints = [
        [-.50,-.16],[-.36,-.25],[-.18,.18],[.12,-.28],[.18,-.05],
        [.25,.16],[.48,-.20],[.58,-.03],[.68,.15],[.72,.52]
      ];
      cityPoints.forEach(function (p, idx) {
        var lx = x + p[0] * r;
        var ly = y + p[1] * r;
        var intensity = .18 + .14 * Math.sin(idx * 2.7 + now * .001);
        ctx.fillStyle = "rgba(255,214,112," + Math.max(.08, intensity) + ")";
        ctx.beginPath();
        ctx.arc(lx, ly, Math.max(.8, r * .018), 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // Crisp atmospheric rim over the clipped globe.
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(125,211,252,.55)";
      ctx.lineWidth = Math.max(1, r * .035);
      ctx.stroke();

      // Tiny orbital satellite marker to make Earth read as the mission origin.
      var satAngle = now * .00045;
      var satX = x + Math.cos(satAngle) * r * 1.34;
      var satY = y + Math.sin(satAngle) * r * .48;
      ctx.strokeStyle = "rgba(148,163,184,.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.34, r * .48, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#67e8f9";
      ctx.shadowBlur = 7;
      ctx.fillRect(satX - 1, satY - 1, 2, 2);
      ctx.shadowBlur = 0;
    }
    function craterField(x, y, r, count, seedOffset, scale, color) {
      for (var c = 0; c < count; c += 1) {
        var angle = seeded(c + seedOffset) * Math.PI * 2;
        var dist = r * (.18 + seeded(c + seedOffset + 70) * .70);
        var cx = x + Math.cos(angle) * dist;
        var cy2 = y + Math.sin(angle) * dist * .88;
        var cr = r * (.018 + seeded(c + seedOffset + 140) * scale);
        ctx.strokeStyle = rgba(color, .22 + seeded(c + seedOffset + 210) * .22);
        ctx.fillStyle = rgba("#101827", .12 + seeded(c + seedOffset + 280) * .20);
        ctx.lineWidth = Math.max(.65, r * .012);
        ctx.beginPath();
        ctx.arc(cx, cy2, cr, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        if (cr > r * .045) {
          ctx.strokeStyle = "rgba(255,255,255,.10)";
          ctx.beginPath();
          ctx.arc(cx - cr * .24, cy - cr * .24, cr * .78, Math.PI * .9, Math.PI * 1.75);
          ctx.stroke();
        }
      }
    }

    function drawMercury(x, y, r) {
      circleGlow(x, y, "#d1d5db", r * 2.4, .10);
      sphere(x, y, r, "#f1f5f9", "#8f96a2", "#3d4654");
      craterField(x, y, r, 22, 901, .040, "#e5e7eb");

      // Bright crater rays and the large Caloris basin.
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .98, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = "rgba(248,250,252,.20)";
      ctx.lineWidth = Math.max(1, r * .018);
      for (var ray = 0; ray < 8; ray += 1) {
        var ra = ray * Math.PI / 4 + .18;
        ctx.beginPath();
        ctx.moveTo(x - Math.cos(ra) * r * .07, y - Math.sin(ra) * r * .07);
        ctx.lineTo(x + Math.cos(ra) * r * .55, y + Math.sin(ra) * r * .55);
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(250,250,250,.30)";
      ctx.lineWidth = Math.max(1.2, r * .028);
      ctx.beginPath();
      ctx.arc(x - r * .25, y + r * .12, r * .25, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Thin exosphere halo.
      ctx.strokeStyle = "rgba(226,232,240,.24)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, r * 1.04, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawVenus(x, y, r) {
      circleGlow(x, y, "#f6d49b", r * 2.6, .13);
      sphere(x, y, r, "#fff1c7", "#d9a45e", "#7c4a2b");

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .99, 0, Math.PI * 2);
      ctx.clip();

      // Thick sulfuric-acid cloud deck: layered, high-altitude streaks.
      for (var band = 0; band < 13; band += 1) {
        var by = y - r + (band + .45) * (2 * r / 13);
        ctx.strokeStyle = band % 3 === 0
          ? "rgba(255,246,202,.34)"
          : "rgba(255,222,150,.20)";
        ctx.lineWidth = Math.max(1.4, r * (.035 + seeded(band + 1200) * .025));
        ctx.beginPath();
        ctx.moveTo(x - r * 1.1, by);
        ctx.bezierCurveTo(
          x - r * .45, by - r * .12,
          x + r * .30, by + r * .10,
          x + r * 1.1, by - r * .04
        );
        ctx.stroke();
      }

      // Fast atmospheric super-rotation, represented by diagonal streaks.
      ctx.strokeStyle = "rgba(255,248,214,.18)";
      ctx.lineWidth = Math.max(1, r * .018);
      for (var streak = -3; streak <= 3; streak += 1) {
        ctx.beginPath();
        ctx.moveTo(x - r * .90, y + streak * r * .18);
        ctx.lineTo(x + r * .85, y + (streak + .42) * r * .15);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawMoon(x, y, r) {
      circleGlow(x, y, "#cbd5e1", r * 2.15, .12);
      sphere(x, y, r, "#f8fafc", "#a9b0bb", "#4b5563");
      craterField(x, y, r, 25, 42, .065, "#f8fafc");

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .99, 0, Math.PI * 2);
      ctx.clip();

      // Mare fields.
      var maria = [
        [-.34,-.18,.20,.12],[-.05,.04,.27,.15],[.28,-.18,.16,.11],
        [.16,.32,.20,.10],[-.30,.35,.13,.09]
      ];
      maria.forEach(function (m, i) {
        ctx.fillStyle = "rgba(72,78,89," + (.12 + (i % 2) * .05) + ")";
        ctx.beginPath();
        ctx.ellipse(x + m[0] * r, y + m[1] * r, m[2] * r, m[3] * r, seeded(i + 90) * .7, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    function drawMars(x, y, r) {
      circleGlow(x, y, "#fb7185", r * 2.4, .15);
      sphere(x, y, r, "#ffd7b0", "#bd4d3f", "#641f20");

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .99, 0, Math.PI * 2);
      ctx.clip();

      // Iron-oxide terrain and dark basaltic regions.
      craterField(x, y, r, 15, 1440, .032, "#ffd7b0");
      ctx.fillStyle = "rgba(86,35,32,.30)";
      ctx.beginPath();
      ctx.ellipse(x + r * .30, y - r * .10, r * .26, r * .10, -.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(x - r * .28, y + r * .18, r * .18, r * .09, .35, 0, Math.PI * 2);
      ctx.fill();

      // Valles Marineris: a long equatorial canyon system.
      ctx.strokeStyle = "rgba(74,24,24,.58)";
      ctx.lineWidth = Math.max(2, r * .055);
      ctx.beginPath();
      ctx.moveTo(x - r * .72, y + r * .02);
      ctx.bezierCurveTo(
        x - r * .28, y - r * .04,
        x + r * .18, y + r * .12,
        x + r * .67, y - r * .02
      );
      ctx.stroke();

      // Polar caps and a faint dust storm.
      ctx.fillStyle = "rgba(245,245,245,.78)";
      ctx.beginPath();
      ctx.ellipse(x - r * .03, y - r * .83, r * .31, r * .11, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(245,218,186,.20)";
      ctx.beginPath();
      ctx.ellipse(x + r * .28, y + r * .05, r * .40, r * .18, -.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawJupiter(x, y, r) {
      circleGlow(x, y, "#d6a06b", r * 2.55, .14);
      sphere(x, y, r, "#fff8ec", "#c78c62", "#70493c");

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .99, 0, Math.PI * 2);
      ctx.clip();

      // Alternating belts and zones with irregular turbulent edges.
      var bands = [
        ["#e9d5bf", -.78, .11], ["#9b6d59", -.62, .09], ["#f6ead8", -.49, .14],
        ["#a9755b", -.31, .08], ["#f5dfc6", -.17, .13], ["#9d6a57", -.02, .08],
        ["#f8ead6", .10, .13], ["#a46f59", .27, .09], ["#efd4b9", .43, .12],
        ["#8f5d4e", .60, .08], ["#f5e2ca", .73, .12]
      ];
      bands.forEach(function (band, bi) {
        ctx.fillStyle = band[0];
        var yy = y + band[1] * r;
        ctx.fillRect(x - r, yy, r * 2, band[2] * r);

        ctx.strokeStyle = bi % 2 ? "rgba(255,255,255,.10)" : "rgba(77,45,39,.13)";
        ctx.lineWidth = Math.max(1, r * .015);
        for (var wave = 0; wave < 4; wave += 1) {
          ctx.beginPath();
          for (var wp = 0; wp <= 24; wp += 1) {
            var wx = x - r + wp / 24 * r * 2;
            var wy = yy + band[2] * r * .5 + Math.sin(wp * .75 + wave * 1.7 + bi) * r * .018;
            if (wp === 0) ctx.moveTo(wx, wy);
            else ctx.lineTo(wx, wy);
          }
          ctx.stroke();
        }
      });

      // Great Red Spot and smaller vortices.
      ctx.fillStyle = "#b85a49";
      ctx.beginPath();
      ctx.ellipse(x + r * .38, y + r * .23, r * .22, r * .12, -.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255,210,190,.28)";
      ctx.lineWidth = Math.max(1, r * .018);
      ctx.beginPath();
      ctx.ellipse(x + r * .38, y + r * .23, r * .16, r * .075, -.08, 0, Math.PI * 2);
      ctx.stroke();

      for (var storm = 0; storm < 5; storm += 1) {
        var stx = x - r * .46 + storm * r * .18;
        var sty = y - r * .30 + Math.sin(storm * 1.9) * r * .06;
        ctx.fillStyle = storm % 2 ? "rgba(255,255,255,.65)" : "rgba(170,92,69,.52)";
        ctx.beginPath();
        ctx.ellipse(stx, sty, r * .07, r * .035, .1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Faint polar haze.
      var pole = ctx.createRadialGradient(x, y - r * .8, 0, x, y - r * .8, r * .42);
      pole.addColorStop(0, "rgba(255,255,255,.20)");
      pole.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = pole;
      ctx.fillRect(x - r, y - r, r * 2, r * .5);
      ctx.restore();
    }

    function drawSaturn(x, y, r) {
      circleGlow(x, y, "#fde68a", r * 2.7, .14);

      // Multi-ring system with a Cassini-like dark division.
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-.16);
      var ringData = [
        [1.24,.27,"rgba(214,194,146,.34)",1.3],
        [1.38,.31,"rgba(255,246,196,.62)",2.0],
        [1.53,.34,"rgba(187,157,105,.46)",1.6],
        [1.68,.38,"rgba(255,238,180,.52)",1.8]
      ];
      ringData.forEach(function (ring) {
        ctx.beginPath();
        ctx.ellipse(0, 0, r * ring[0], r * ring[1], 0, 0, Math.PI * 2);
        ctx.strokeStyle = ring[2];
        ctx.lineWidth = ring[3];
        ctx.stroke();
      });
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.46, r * .325, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(38,31,23,.58)";
      ctx.lineWidth = Math.max(2, r * .055);
      ctx.stroke();
      ctx.restore();

      sphere(x, y, r, "#fff8d8", "#d8b66d", "#80633e");

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * 1.01, 0, Math.PI * 2);
      ctx.clip();

      // Subtle atmospheric belts.
      var satBands = [
        [-.48,.08,"rgba(255,247,220,.30)"],
        [-.18,.07,"rgba(117,91,58,.22)"],
        [.12,.09,"rgba(255,244,206,.26)"],
        [.37,.06,"rgba(111,84,55,.20)"]
      ];
      satBands.forEach(function (b) {
        ctx.fillStyle = b[2];
        ctx.fillRect(x - r, y + b[0] * r, r * 2, b[1] * r);
      });

      // North-polar hexagon.
      var hx = x;
      var hy = y - r * .66;
      ctx.strokeStyle = "rgba(104,83,57,.34)";
      ctx.lineWidth = Math.max(1, r * .018);
      ctx.beginPath();
      for (var h = 0; h <= 6; h += 1) {
        var ha = -Math.PI / 2 + h * Math.PI / 3;
        var px = hx + Math.cos(ha) * r * .18;
        var py = hy + Math.sin(ha) * r * .12;
        if (h === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.restore();
    }

    function drawIceGiant(x, y, r, primary, secondary, ringed, isNeptune) {
      circleGlow(x, y, primary, r * 2.5, .13);
      sphere(x, y, r, "#effcff", primary, secondary);

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .99, 0, Math.PI * 2);
      ctx.clip();

      // Methane-rich blue-green atmosphere with subdued latitude bands.
      for (var ib = 0; ib < 7; ib += 1) {
        var iy = y - r * .72 + ib * r * .23;
        ctx.strokeStyle = isNeptune
          ? "rgba(191,219,254," + (.12 + ib * .012) + ")"
          : "rgba(207,250,254," + (.11 + ib * .010) + ")";
        ctx.lineWidth = Math.max(1, r * .024);
        ctx.beginPath();
        ctx.moveTo(x - r, iy);
        ctx.bezierCurveTo(x - r * .3, iy + r * .04, x + r * .35, iy - r * .05, x + r, iy + r * .02);
        ctx.stroke();
      }

      if (isNeptune) {
        // Dark storm oval and bright companion clouds.
        ctx.fillStyle = "rgba(17,47,104,.55)";
        ctx.beginPath();
        ctx.ellipse(x + r * .22, y - r * .12, r * .20, r * .09, -.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.46)";
        ctx.lineWidth = Math.max(1, r * .018);
        ctx.beginPath();
        ctx.ellipse(x + r * .20, y - r * .19, r * .18, r * .035, -.15, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        // Uranus is deliberately calmer and paler, with a thin polar hood.
        var hood = ctx.createLinearGradient(x, y - r, x, y - r * .25);
        hood.addColorStop(0, "rgba(255,255,255,.20)");
        hood.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = hood;
        ctx.fillRect(x - r, y - r, r * 2, r * .8);
      }
      ctx.restore();

      if (ringed) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-.18);
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.38, r * .32, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(180,240,255,.28)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.18, r * .25, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(226,232,240,.16)";
        ctx.stroke();
        ctx.restore();
      }
    }

    function drawPluto(x, y, r) {
      circleGlow(x, y, "#ddd6fe", r * 2.35, .10);
      sphere(x, y, r, "#fff7ed", "#bba59f", "#5e515b");

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, r * .99, 0, Math.PI * 2);
      ctx.clip();

      // Pluto's high-contrast Tombaugh Regio-inspired heart terrain.
      ctx.fillStyle = "rgba(246,231,224,.76)";
      ctx.beginPath();
      ctx.moveTo(x - r * .47, y - r * .15);
      ctx.bezierCurveTo(
        x - r * .28, y - r * .46,
        x - r * .04, y - r * .38,
        x + r * .02, y - r * .12
      );
      ctx.bezierCurveTo(
        x + r * .16, y - r * .36,
        x + r * .42, y - r * .34,
        x + r * .46, y - r * .05
      );
      ctx.bezierCurveTo(
        x + r * .34, y + r * .18,
        x + r * .08, y + r * .24,
        x - r * .02, y + r * .12
      );
      ctx.bezierCurveTo(
        x - r * .18, y + r * .25,
        x - r * .40, y + r * .12,
        x - r * .47, y - r * .15
      );
      ctx.fill();

      // Dark equatorial terrain and impact markings.
      ctx.fillStyle = "rgba(74,62,70,.28)";
      ctx.beginPath();
      ctx.ellipse(x + r * .26, y + r * .38, r * .28, r * .12, -.1, 0, Math.PI * 2);
      ctx.fill();
      craterField(x, y, r, 8, 1770, .025, "#f5f5f4");
      ctx.restore();

      // Charon companion.
      var ca = now * .00028;
      var charonX = x + Math.cos(ca) * r * 1.65;
      var charonY = y + Math.sin(ca) * r * .62;
      ctx.fillStyle = "#b9a9a9";
      ctx.beginPath();
      ctx.arc(charonX, charonY, Math.max(2, r * .19), 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(221,214,254,.20)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.65, r * .62, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawKuiper(x, y, r) {
      circleGlow(x, y, "#a78bfa", r * 2.7, .08);
      ctx.strokeStyle = "rgba(167,139,250,.34)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.32, r * .46, -.10, 0, Math.PI * 2);
      ctx.stroke();

      for (var k = 0; k < 24; k += 1) {
        var ka = seeded(k + 180) * Math.PI * 2;
        var kr = r * (1.15 + seeded(k + 210) * .55);
        ctx.fillStyle = k % 4 === 0 ? "#e9d5ff" : "#8b7bb6";
        ctx.globalAlpha = .45 + seeded(k + 250) * .45;
        ctx.beginPath();
        ctx.arc(x + Math.cos(ka) * kr, y + Math.sin(ka) * kr * .38, 1 + seeded(k + 290) * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function drawOort(x, y, r) {
      circleGlow(x, y, "#67e8f9", r * 3.4, .09);
      for (var o = 0; o < 48; o += 1) {
        var oa = seeded(o + 320) * Math.PI * 2;
        var orr = r * (1.0 + seeded(o + 350) * 1.65);
        ctx.fillStyle = o % 5 === 0 ? "#ffffff" : "#67e8f9";
        ctx.globalAlpha = .20 + seeded(o + 380) * .55;
        ctx.beginPath();
        ctx.arc(x + Math.cos(oa) * orr, y + Math.sin(oa) * orr * .58, .7 + seeded(o + 410) * 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "rgba(103,232,249,.16)";
      ctx.setLineDash([1, 5]);
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.9, r * .8, -.08, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function drawGalaxy(x, y, r, tilt, core, arm) {
      circleGlow(x, y, core, r * 2.6, .12);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(tilt);

      var galaxy = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 1.45);
      galaxy.addColorStop(0, "#ffffff");
      galaxy.addColorStop(.12, core);
      galaxy.addColorStop(.42, rgba(arm, .42));
      galaxy.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = galaxy;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.55, r * .55, 0, 0, Math.PI * 2);
      ctx.fill();

      for (var armIndex = 0; armIndex < 2; armIndex += 1) {
        ctx.beginPath();
        for (var p = 0; p <= 60; p += 1) {
          var t = p / 60 * Math.PI * 1.9 + armIndex * Math.PI;
          var rr = .16 * r + p / 60 * 1.18 * r;
          var px = Math.cos(t) * rr;
          var py = Math.sin(t) * rr * .34;
          if (p === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = rgba(arm, .42);
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      for (var dust = 0; dust < 26; dust += 1) {
        var da = seeded(dust + 510) * Math.PI * 2;
        var dr = r * (.25 + seeded(dust + 540) * 1.1);
        ctx.fillStyle = dust % 4 === 0 ? "#ffffff" : arm;
        ctx.globalAlpha = .25 + seeded(dust + 570) * .55;
        ctx.fillRect(Math.cos(da) * dr, Math.sin(da) * dr * .34, 1.5, 1.5);
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    }

    function drawDeepField(x, y, r) {
      circleGlow(x, y, "#e9d5ff", r * 3.0, .10);
      for (var g = 0; g < 42; g += 1) {
        var gx = x + (seeded(g + 610) - .5) * r * 3.1;
        var gy = y + (seeded(g + 640) - .5) * r * 1.55;
        var gr = .7 + seeded(g + 670) * 2.4;
        ctx.fillStyle = g % 7 === 0 ? "#ffffff" : (g % 3 === 0 ? "#c4b5fd" : "#60a5fa");
        ctx.globalAlpha = .18 + seeded(g + 700) * .65;
        ctx.beginPath();
        ctx.arc(gx, gy, gr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // Draw the physical/cosmic reference points.
    for (var i = 0; i < labels.length; i += 1) {
      var x = left + step * i;
      var r = planetR;

      if (i === 0) drawMercury(x, cy, r * .72);
      if (i === 1) drawVenus(x, cy, r * .90);
      if (i === 2) drawEarth(x, cy, r * 1.02);
      if (i === 3) drawMoon(x, cy, r * .78);
      if (i === 4) drawMars(x, cy, r * .86);
      if (i === 5) drawJupiter(x, cy, r * 1.24);
      if (i === 6) drawSaturn(x, cy, r * 1.12);
      if (i === 7) drawIceGiant(x, cy, r * .96, "#67e8f9", "#2d9fb3", true, false);
      if (i === 8) drawIceGiant(x, cy, r * .96, "#93c5fd", "#2448a8", false, true);
      if (i === 9) drawPluto(x, cy, r * .70);
      if (i === 10) drawKuiper(x, cy, r * .86);
      if (i === 11) drawOort(x, cy, r * .84);
      if (i === 12) drawGalaxy(x, cy, r * 1.10, -.22, "#f8e9ff", "#a78bfa");
      if (i === 13) drawGalaxy(x, cy, r * 1.04, .20, "#eef5ff", "#60a5fa");
      if (i === 14) drawDeepField(x, cy, r * .94);
    }

    // Animated user trajectories. Each submitted number travels from Earth to
    // a distance determined by its hidden crowd-match score, then remains as a marker.
    atlasGuesses = atlasGuesses.filter(function (guess) {
      return now - guess.born < 240000;
    });

    atlasGuesses.forEach(function (guess, guessIndex) {
      var age = Math.max(0, now - guess.born);
      var progress = Math.min(1, age / 1150);
      var eased = 1 - Math.pow(1 - progress, 3);
      var destinationX = left + (right - left) * Math.max(.08, Math.min(.94, guess.score / 100));
      var markerX = left + (destinationX - left) * eased;
      var arc = Math.sin(eased * Math.PI) * (14 + guessIndex * 3);
      var markerY = cy - arc;

      ctx.beginPath();
      ctx.moveTo(left, cy);
      ctx.quadraticCurveTo(
        (left + destinationX) / 2,
        cy - (28 + guessIndex * 5),
        destinationX,
        cy
      );
      ctx.strokeStyle = rgba(guess.color, progress < 1 ? .48 : .22);
      ctx.lineWidth = progress < 1 ? 2.2 : 1;
      ctx.setLineDash(progress < 1 ? [3, 5] : [2, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      circleGlow(markerX, markerY, guess.color, 25, .15 + pulse * .05);

      ctx.fillStyle = "#02040d";
      ctx.strokeStyle = guess.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(markerX, markerY, 6 + pulse * 1.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(markerX - 1.7, markerY - 1.8, 1.8, 0, Math.PI * 2);
      ctx.fill();

      var numberText = String(guess.value);
      var tagWidth = Math.max(48, numberText.length * 7 + 24);
      var tagY = markerY - 24 - guessIndex * 2;

      ctx.fillStyle = "rgba(2,4,14,.92)";
      ctx.strokeStyle = rgba(guess.color, .72);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(markerX - tagWidth / 2, tagY - 10, tagWidth, 19, 7);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.font = "900 8px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillStyle = guess.color;
      ctx.fillText("Q" + guess.round + "  " + numberText + "%", markerX, tagY + 3);

      if (progress < 1) {
        ctx.beginPath();
        ctx.arc(markerX, markerY, 11 + pulse * 5, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(guess.color, .16);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });

    ctx.textAlign = "left";
    ctx.font = "800 8px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillStyle = "rgba(148,163,184,.62)";
    ctx.fillText("INNER → OUTER SYSTEM", left, 18);

    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(196,181,253,.62)";
    ctx.fillText("GALACTIC → DEEP FIELD", right, 18);

    if (atlasGuesses.length) {
      ctx.textAlign = "left";
      ctx.fillStyle = "rgba(103,232,249,.70)";
      ctx.fillText("YOUR TRAJECTORY", left, height - 8);
    }

    atlasAnimation = requestAnimationFrame(drawCosmicAtlas);
  }
  function resizeCanvas(canvas, ctx) {
    var ratio = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function makeStars() {
    stars = [];
    var count = Math.max(120, Math.min(420, Math.floor(window.innerWidth * window.innerHeight / 7500)));

    for (var i = 0; i < count; i += 1) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.35 + .25,
        a: Math.random() * .72 + .18,
        z: Math.random() * .9 + .1,
        tw: Math.random() * Math.PI * 2,
        speed: Math.random() * .008 + .001
      });
    }
  }

  function drawStars(time) {
    starCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    stars.forEach(function (star) {
      star.tw += star.speed;
      var pulse = .58 + Math.sin(star.tw + time * .0012) * .28;
      var driftX = pointerX * star.z * -6;
      var driftY = pointerY * star.z * -4;

      starCtx.beginPath();
      starCtx.arc(star.x + driftX, star.y + driftY, star.r, 0, Math.PI * 2);
      starCtx.fillStyle = "rgba(220,228,255," + Math.max(.08, star.a * pulse) + ")";
      starCtx.fill();

      if (star.r > 1.05) {
        starCtx.beginPath();
        starCtx.arc(star.x + driftX, star.y + driftY, star.r * 2.8, 0, Math.PI * 2);
        starCtx.fillStyle = "rgba(124,58,237," + (.028 * pulse) + ")";
        starCtx.fill();
      }
    });

    if (Math.random() < .004) {
      spawnShootingStar();
    }

    drawShootingStars();
    starAnimation = requestAnimationFrame(drawStars);
  }

  var shooting = [];

  function spawnShootingStar() {
    shooting.push({
      x: Math.random() * window.innerWidth * .85,
      y: Math.random() * window.innerHeight * .55,
      vx: 7 + Math.random() * 8,
      vy: 2.5 + Math.random() * 4,
      life: 0,
      max: 26 + Math.random() * 24
    });
  }

  function drawShootingStars() {
    shooting = shooting.filter(function (meteor) {
      meteor.life += 1;
      meteor.x += meteor.vx;
      meteor.y += meteor.vy;

      var alpha = 1 - meteor.life / meteor.max;
      var tail = 36;

      starCtx.beginPath();
      starCtx.moveTo(meteor.x, meteor.y);
      starCtx.lineTo(meteor.x - meteor.vx * tail / 6, meteor.y - meteor.vy * tail / 6);
      starCtx.strokeStyle = "rgba(167,139,250," + Math.max(0, alpha * .75) + ")";
      starCtx.lineWidth = 1.5;
      starCtx.stroke();

      return meteor.life < meteor.max;
    });
  }

  function effectLoop() {
    effectCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles = particles.filter(function (p) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += .045;
      p.life -= 1;

      effectCtx.save();
      effectCtx.globalAlpha = Math.max(0, p.life / p.maxLife);
      effectCtx.fillStyle = p.color;
      effectCtx.translate(p.x, p.y);
      effectCtx.rotate(p.rotation);
      effectCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      effectCtx.restore();

      return p.life > 0;
    });

    effectAnimation = requestAnimationFrame(effectLoop);
  }

  function burst(x, y, score) {
    var colors = ["#a78bfa", "#60a5fa", "#67e8f9", "#f0abfc", "#ffffff"];

    for (var i = 0; i < 110; i += 1) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 1.8 + Math.random() * (2.8 + score / 55);
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.6,
        size: 2 + Math.random() * 4,
        rotation: Math.random() * Math.PI,
        vr: (Math.random() - .5) * .18,
        life: 50 + Math.random() * 55,
        maxLife: 105 + Math.random() * 40,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  function init() {
    loadStats();
    buildDailyMission(false);
    liveTelemetry();
    renderQuestion();
    countdown();

    resizeCanvas(starCanvas, starCtx);
    resizeCanvas(effectCanvas, effectCtx);
    makeStars();
    drawCosmicAtlas();

    cancelAnimationFrame(starAnimation);
    cancelAnimationFrame(effectAnimation);
    cancelAnimationFrame(atlasAnimation);
    starAnimation = requestAnimationFrame(drawStars);
    effectAnimation = requestAnimationFrame(effectLoop);
    atlasAnimation = requestAnimationFrame(drawCosmicAtlas);

    setInterval(function () {
      countdown();

      if (todayKey() !== currentDateKey) {
        buildDailyMission(false);
        answers = [];
        atlasGuesses = [];
        index = 0;
        revealEl.classList.remove("is-open");
        liveTelemetry();
        renderQuestion();
        loadStats();
      }
    }, 1000);
  }

  window.addEventListener("resize", function () {
    resizeCanvas(starCanvas, starCtx);
    resizeCanvas(effectCanvas, effectCtx);
    makeStars();
  });

  init();
})();
</script>