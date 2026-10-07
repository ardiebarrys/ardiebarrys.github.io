---
layout: page
title: Deep Numbers
permalink: /deep-numbers/
nav: true
nav_order: 8
description: Deep Numbers, a daily rarity game by Ardie Barry Sailis. Support the project and keep the rockets flying.
---

<style>
.deep-numbers-page {
  --dn-bg: #030712;
  --dn-panel: rgba(10, 16, 30, .78);
  --dn-line: rgba(148, 163, 184, .16);
  --dn-text: #f8fafc;
  --dn-muted: #94a3b8;
  --dn-blue: #60a5fa;
  --dn-cyan: #67e8f9;
  --dn-green: #86efac;
  --dn-purple: #c4b5fd;
  position: relative;
  overflow: hidden;
  margin: -1.5rem -1rem 0;
  padding: 0 1rem 4rem;
  min-height: 900px;
  color: var(--dn-text);
  background:
    radial-gradient(circle at 50% 0%, rgba(37,99,235,.18), transparent 34rem),
    radial-gradient(circle at 85% 45%, rgba(96,165,250,.08), transparent 25rem),
    var(--dn-bg);
  border-radius: 0 0 24px 24px;
}

.deep-numbers-page::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .35;
  background-image:
    linear-gradient(rgba(148,163,184,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.025) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: linear-gradient(to bottom, black, transparent 88%);
}

.dn-shell {
  position: relative;
  z-index: 2;
  max-width: 1080px;
  margin: 0 auto;
}

.dn-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--dn-line);
}

.dn-brand {
  display: flex;
  align-items: center;
  gap: .7rem;
  color: var(--dn-text) !important;
  text-decoration: none !important;
  font-weight: 850;
  letter-spacing: -.02em;
}

.dn-mark {
  width: 30px;
  height: 30px;
  position: relative;
  display: grid;
  place-items: center;
  border: 1px solid rgba(96,165,250,.45);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(96,165,250,.35), transparent 65%);
  box-shadow: 0 0 28px rgba(96,165,250,.2);
}

.dn-mark::after {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 12px rgba(255,255,255,.9);
}

.dn-nav-links {
  display: flex;
  gap: .25rem;
  flex-wrap: wrap;
}

.dn-nav-links button {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--dn-muted);
  padding: .45rem .65rem;
  border-radius: 7px;
  cursor: pointer;
  font: inherit;
  font-size: .78rem;
  font-weight: 700;
}

.dn-nav-links button:hover,
.dn-nav-links button.is-active {
  color: var(--dn-text);
  background: rgba(148,163,184,.08);
}

.dn-hero {
  min-height: 570px;
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
  padding: 4.5rem 0 3rem;
}

.dn-eyebrow {
  color: var(--dn-blue);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: .7rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.dn-hero h1 {
  max-width: 850px;
  margin: .7rem auto .9rem;
  color: #fff;
  font-size: clamp(2.6rem, 8vw, 6.6rem);
  line-height: .92;
  letter-spacing: -.065em;
}

.dn-gradient {
  background: linear-gradient(110deg, #fff 15%, var(--dn-blue) 48%, var(--dn-cyan) 78%, #fff);
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: dn-shimmer 7s ease-in-out infinite;
}

.dn-lede {
  max-width: 650px;
  margin: 0 auto;
  color: var(--dn-muted);
  font-size: 1rem;
  line-height: 1.65;
  text-align: center !important;
}

.dn-orbit {
  position: absolute;
  left: 50%;
  top: 53%;
  width: min(76vw, 680px);
  aspect-ratio: 1;
  transform: translate(-50%,-50%);
  border: 1px solid rgba(96,165,250,.07);
  border-radius: 50%;
  pointer-events: none;
  animation: dn-spin 30s linear infinite;
}

.dn-orbit::before,
.dn-orbit::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: var(--dn-blue);
  box-shadow: 0 0 16px rgba(96,165,250,.75);
}

.dn-orbit::before {
  width: 4px;
  height: 4px;
  left: 17%;
  top: 8%;
}

.dn-orbit::after {
  width: 3px;
  height: 3px;
  right: 11%;
  bottom: 19%;
}

.dn-launch-panel {
  position: relative;
  max-width: 700px;
  margin: -1rem auto 0;
  padding: 1.25rem;
  border: 1px solid var(--dn-line);
  border-radius: 18px;
  background: var(--dn-panel);
  backdrop-filter: blur(18px);
  box-shadow: 0 25px 70px rgba(0,0,0,.35);
}

.dn-mission {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--dn-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: .7rem;
}

.dn-number-row {
  display: flex;
  gap: .65rem;
}

.dn-number {
  flex: 1;
  min-width: 0;
  border: 1px solid rgba(148,163,184,.2);
  border-radius: 10px;
  background: rgba(2,6,23,.72);
  color: #fff;
  padding: .95rem 1rem;
  font: 700 1.15rem ui-monospace, SFMono-Regular, Menlo, monospace;
  outline: none;
  transition: border-color .25s ease, box-shadow .25s ease;
}

.dn-number:focus {
  border-color: rgba(96,165,250,.7);
  box-shadow: 0 0 0 4px rgba(96,165,250,.08);
}

.dn-launch {
  border: 1px solid rgba(96,165,250,.6);
  border-radius: 10px;
  padding: 0 1.25rem;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: #fff;
  font: 800 .85rem system-ui, sans-serif;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(37,99,235,.25);
  transition: transform .2s ease, box-shadow .2s ease;
}

.dn-launch:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(37,99,235,.34);
}

.dn-hint {
  margin: .65rem 0 0;
  color: var(--dn-muted);
  font-size: .74rem;
  text-align: left !important;
}

.dn-telemetry {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: .6rem;
  margin: 1rem 0 0;
}

.dn-telemetry div {
  padding: .75rem;
  border: 1px solid var(--dn-line);
  border-radius: 9px;
  background: rgba(148,163,184,.025);
}

.dn-telemetry dt {
  color: var(--dn-muted);
  font-size: .64rem;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.dn-telemetry dd {
  margin: .2rem 0 0;
  color: #fff;
  font: 700 .88rem ui-monospace, SFMono-Regular, Menlo, monospace;
}

.dn-result {
  display: none;
  max-width: 820px;
  margin: 1.5rem auto;
}

.dn-result.is-visible {
  display: block;
  animation: dn-rise .6s cubic-bezier(.2,.7,.2,1) both;
}

.dn-readout {
  padding: 2rem;
  border: 1px solid var(--dn-line);
  border-radius: 18px;
  background:
    radial-gradient(circle at 50% 0%, rgba(96,165,250,.13), transparent 50%),
    var(--dn-panel);
  text-align: center;
}

.dn-readout-label {
  color: var(--dn-muted);
  font-size: .72rem;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.dn-readout-number {
  margin: .35rem 0;
  color: #fff;
  font: 800 clamp(2.2rem, 8vw, 5rem) ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: -.06em;
}

.dn-distance {
  color: var(--dn-blue);
  font: 800 clamp(1.8rem, 6vw, 3.5rem) ui-monospace, SFMono-Regular, Menlo, monospace;
}

.dn-zone {
  margin: .25rem 0 0;
  color: var(--dn-cyan);
  font-weight: 800;
}

.dn-stats {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: .7rem;
  margin-top: .8rem;
}

.dn-stat {
  padding: 1rem;
  border: 1px solid var(--dn-line);
  border-radius: 12px;
  background: rgba(148,163,184,.025);
}

.dn-stat span {
  display: block;
  color: var(--dn-muted);
  font-size: .68rem;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.dn-stat strong {
  display: block;
  margin-top: .3rem;
  color: #fff;
  font: 800 1.1rem ui-monospace, SFMono-Regular, Menlo, monospace;
}

.dn-section {
  display: none;
  padding: 3.5rem 0;
  animation: dn-rise .5s ease both;
}

.dn-section.is-active {
  display: block;
}

.dn-section h2 {
  color: #fff;
  font-size: clamp(1.7rem,4vw,2.7rem);
  letter-spacing: -.045em;
}

.dn-section p,
.dn-section li {
  color: var(--dn-muted);
  line-height: 1.7;
}

.dn-card-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: .8rem;
}

.dn-card {
  padding: 1.25rem;
  border: 1px solid var(--dn-line);
  border-radius: 14px;
  background: var(--dn-panel);
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.dn-card:hover {
  transform: translateY(-5px);
  border-color: rgba(96,165,250,.3);
  box-shadow: 0 18px 38px rgba(0,0,0,.25);
}

.dn-card-number {
  color: var(--dn-blue);
  font: 700 .7rem ui-monospace, SFMono-Regular, Menlo, monospace;
}

.dn-card h3 {
  margin: .55rem 0 .35rem;
  color: #fff;
  font-size: 1rem;
}

.dn-card p {
  margin: 0;
  font-size: .84rem;
}

.dn-support {
  position: relative;
  overflow: hidden;
  padding: 2rem;
  border: 1px solid rgba(96,165,250,.24);
  border-radius: 18px;
  background:
    radial-gradient(circle at 80% 0%, rgba(37,99,235,.2), transparent 40%),
    rgba(10,16,30,.86);
}

.dn-support h2 {
  max-width: 650px;
  margin-top: 0;
}

.dn-support p {
  max-width: 650px;
}

.dn-support-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: .5rem;
  padding: .75rem 1.1rem;
  border-radius: 9px;
  background: linear-gradient(135deg,#2563eb,#0891b2);
  color: #fff !important;
  font-weight: 800;
  text-decoration: none !important;
  box-shadow: 0 10px 30px rgba(37,99,235,.25);
  transition: transform .2s ease;
}

.dn-support-button:hover {
  transform: translateY(-2px);
}

.dn-note {
  margin-top: .7rem;
  color: #64748b !important;
  font-size: .72rem !important;
}

.dn-back {
  display: inline-block;
  margin-top: 1rem;
  color: var(--dn-muted) !important;
  font-size: .78rem;
}

@keyframes dn-shimmer {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes dn-spin {
  to { transform: translate(-50%,-50%) rotate(360deg); }
}

@keyframes dn-rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}

@media (max-width: 760px) {
  .deep-numbers-page {
    margin-left: -.5rem;
    margin-right: -.5rem;
    padding-left: .75rem;
    padding-right: .75rem;
  }
  .dn-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .dn-hero {
    min-height: 500px;
    padding-top: 3rem;
  }
  .dn-orbit { width: 105vw; }
  .dn-number-row { flex-direction: column; }
  .dn-launch { min-height: 48px; }
  .dn-telemetry,
  .dn-stats,
  .dn-card-grid { grid-template-columns: 1fr; }
  .dn-support { padding: 1.3rem; }
}
</style>

<div class="deep-numbers-page" id="deep-numbers">
  <div class="dn-shell">

    <nav class="dn-nav" aria-label="Deep Numbers">
      <a class="dn-brand" href="/deep-numbers/">
        <span class="dn-mark" aria-hidden="true"></span>
        <span>Deep Numbers</span>
      </a>
      <div class="dn-nav-links">
        <button type="button" data-dn-view="play" class="is-active">Play</button>
        <button type="button" data-dn-view="about">How it works</button>
        <button type="button" data-dn-view="support">Support</button>
      </div>
    </nav>

    <section class="dn-view" id="dn-play">
      <div class="dn-hero">
        <div class="dn-orbit" aria-hidden="true"></div>
        <div>
          <div class="dn-eyebrow">Daily number mission · 001</div>
          <h1>How deep can your <span class="dn-gradient">number</span> go?</h1>
          <p class="dn-lede">
            Pick a number. Launch it into space. The rarer your number,
            the farther it travels.
          </p>
        </div>
      </div>

      <div class="dn-launch-panel">
        <div class="dn-mission">
          <span>MISSION 001</span>
          <span>1 → 1,000,000</span>
        </div>
        <form id="dn-form" novalidate>
          <div class="dn-number-row">
            <input id="dn-number" class="dn-number" type="text" inputmode="numeric"
              autocomplete="off" placeholder="Choose a number" aria-label="Choose a number">
            <button class="dn-launch" type="submit">LAUNCH</button>
          </div>
          <p class="dn-hint" id="dn-hint">One number. One launch. Choose carefully.</p>
        </form>

        <dl class="dn-telemetry">
          <div><dt>Explorers</dt><dd id="dn-explorers">—</dd></div>
          <div><dt>Deepest</dt><dd id="dn-deepest">—</dd></div>
          <div><dt>Mode</dt><dd>Demo</dd></div>
        </dl>
      </div>

      <div class="dn-result" id="dn-result" aria-live="polite">
        <div class="dn-readout">
          <div class="dn-readout-label">Your trajectory</div>
          <div class="dn-readout-number" id="dn-r-number">0</div>
          <div class="dn-distance" id="dn-r-distance">0 km</div>
          <div class="dn-zone" id="dn-r-zone">Low Earth Orbit</div>
        </div>
        <div class="dn-stats">
          <div class="dn-stat"><span>Rarity</span><strong id="dn-r-rarity">0%</strong></div>
          <div class="dn-stat"><span>World rank</span><strong id="dn-r-rank">#0</strong></div>
          <div class="dn-stat"><span>Nearby picks</span><strong id="dn-r-near">0</strong></div>
        </div>
      </div>
    </section>

    <section class="dn-section" id="dn-about">
      <div class="dn-eyebrow">The idea</div>
      <h2>Turn numerical rarity into a journey.</h2>
      <p>
        Deep Numbers is a daily game built around a simple experiment:
        everyone receives the same numerical space, everyone makes one
        irreversible pick, and the crowd determines how far each number travels.
      </p>

      <div class="dn-card-grid">
        <article class="dn-card">
          <span class="dn-card-number">01 / PICK</span>
          <h3>Choose one number</h3>
          <p>The same range opens for everyone. Your choice is your launch.</p>
        </article>
        <article class="dn-card">
          <span class="dn-card-number">02 / CROWD</span>
          <h3>Rarity becomes distance</h3>
          <p>Numbers surrounded by fewer neighboring choices travel deeper into space.</p>
        </article>
        <article class="dn-card">
          <span class="dn-card-number">03 / LOCK</span>
          <h3>The mission closes</h3>
          <p>When the mission ends, the final trajectory and rankings are locked.</p>
        </article>
      </div>

      <a class="dn-back" href="/projects/">Back to Ardie's projects</a>
    </section>

    <section class="dn-section" id="dn-support">
      <div class="dn-support">
        <div class="dn-eyebrow">Project support</div>
        <h2>Keep the rockets flying.</h2>
        <p>
          Deep Numbers is intended to remain free and ad-free. Contributions
          can help cover hosting, domain costs, infrastructure and continued
          development of new missions.
        </p>
        <a class="dn-support-button" href="https://ko-fi.com/deepnumbers" target="_blank" rel="noopener">
          Support Deep Numbers on Ko-fi
        </a>
        <p class="dn-note">
          Support is optional and does not affect scores, rarity, rankings or gameplay.
        </p>
      </div>
    </section>

  </div>
</div>

<script>
(function () {
  const root = document.getElementById("deep-numbers");
  if (!root) return;

  const views = {
    play: document.getElementById("dn-play"),
    about: document.getElementById("dn-about"),
    support: document.getElementById("dn-support")
  };

  const navButtons = root.querySelectorAll("[data-dn-view]");

  function showView(name) {
    Object.keys(views).forEach(function (key) {
      if (views[key]) {
        views[key].classList.toggle("is-active", key === name);
      }
    });

    if (name !== "play") {
      views.play.style.display = "none";
    } else {
      views.play.style.display = "";
    }

    views.about.classList.toggle("is-active", name === "about");
    views.support.classList.toggle("is-active", name === "support");

    navButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.dnView === name);
    });

    root.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  navButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      showView(button.dataset.dnView);
    });
  });

  const form = document.getElementById("dn-form");
  const input = document.getElementById("dn-number");
  const hint = document.getElementById("dn-hint");
  const result = document.getElementById("dn-result");
  const explorers = document.getElementById("dn-explorers");
  const deepest = document.getElementById("dn-deepest");

  const crowd = [];
  for (let i = 0; i < 42; i++) {
    crowd.push(Math.floor(1 + Math.random() * 1000000));
  }

  explorers.textContent = String(crowd.length);
  deepest.textContent = "—";

  function density(value) {
    let score = 0;
    const h = 1000;

    crowd.forEach(function (pick) {
      score += Math.exp(-Math.abs(value - pick) / h);
    });

    return score;
  }

  function rarity(value) {
    const distances = crowd.map(function (pick) {
      return {
        pick: pick,
        distance: Math.abs(value - pick)
      };
    }).sort(function (a, b) {
      return a.distance - b.distance;
    });

    let rank = distances.findIndex(function (item) {
      return item.pick === value;
    });

    if (rank < 0) {
      rank = distances.length;
    }

    return Math.min(99.99, Math.max(.01, 100 * (1 - rank / (distances.length + 1))));
  }

  function distanceFor(percentile) {
    const milestones = [
      [0, 400, "Low Earth Orbit"],
      [20, 384400, "Moon"],
      [40, 78000000, "Mars"],
      [55, 628000000, "Jupiter"],
      [65, 1200000000, "Saturn"],
      [72, 2900000000, "Uranus"],
      [80, 4350000000, "Neptune"],
      [95, 5760000000, "Pluto"],
      [97, 7350000000, "Kuiper Belt"],
      [99, 18000000000, "Heliopause"],
      [99.9, 300000000000, "Oort Cloud"],
      [99.99, 40000000000000, "Proxima Centauri"],
      [100, 246000000000000000, "Galactic Center"]
    ];

    for (let i = 1; i < milestones.length; i++) {
      if (percentile <= milestones[i][0]) {
        const a = milestones[i - 1];
        const b = milestones[i];
        const t = (percentile - a[0]) / (b[0] - a[0]);
        const logA = Math.log10(a[1]);
        const logB = Math.log10(b[1]);
        const km = Math.pow(10, logA + t * (logB - logA));
        return { km: km, zone: b[2] };
      }
    }

    return { km: milestones[milestones.length - 1][1], zone: "Galactic Center" };
  }

  function formatDistance(km) {
    if (km >= 9.46e12) return (km / 9.46e12).toFixed(2) + " ly";
    if (km >= 1e9) return (km / 1e9).toFixed(2) + " billion km";
    if (km >= 1e6) return (km / 1e6).toFixed(2) + " million km";
    return Math.round(km).toLocaleString() + " km";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = Number(input.value.replace(/,/g, "").trim());

    if (!Number.isInteger(value) || value < 1 || value > 1000000) {
      hint.textContent = "Choose a whole number from 1 to 1,000,000.";
      return;
    }

    if (!crowd.includes(value)) {
      crowd.push(value);
    }

    const rankData = crowd.slice().sort(function (a, b) {
      return density(a) - density(b);
    });

    const rank = rankData.indexOf(value) + 1;
    const pct = rarity(value);
    const trajectory = distanceFor(pct);
    const nearby = crowd.filter(function (pick) {
      return pick !== value && Math.abs(pick - value) <= 1000;
    }).length;

    document.getElementById("dn-r-number").textContent = value.toLocaleString();
    document.getElementById("dn-r-distance").textContent = formatDistance(trajectory.km);
    document.getElementById("dn-r-zone").textContent = trajectory.zone;
    document.getElementById("dn-r-rarity").textContent = pct.toFixed(2) + "%";
    document.getElementById("dn-r-rank").textContent = "#" + rank;
    document.getElementById("dn-r-near").textContent = nearby;

    deepest.textContent = trajectory.zone;
    hint.textContent = "Launch complete. Your number is now on its trajectory.";
    result.classList.remove("is-visible");
    void result.offsetWidth;
    result.classList.add("is-visible");

    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", function () {
    root.classList.toggle("reduced-motion", this.matches);
  });
})();
</script>
