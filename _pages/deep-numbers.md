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

.dn-question{color:#fff;font-size:clamp(1.2rem,3vw,1.65rem);line-height:1.25;font-weight:800;letter-spacing:-.025em;margin-bottom:.5rem}.dn-explain{color:var(--dn-muted);font-size:.8rem;line-height:1.5;margin:0 0 1rem}.dn-rule-strip{display:flex;justify-content:center;align-items:center;gap:.7rem;flex-wrap:wrap;margin:1.25rem auto 0;color:#cbd5e1;font-size:.7rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase}.dn-rule-strip i{width:3px;height:3px;border-radius:50%;background:var(--dn-blue);box-shadow:0 0 8px var(--dn-blue)}.dn-launch-panel{animation:dn-float 6s ease-in-out infinite}.dn-hero>div:last-child{animation:dn-hero-in .9s cubic-bezier(.16,1,.3,1) both}.dn-orbit{animation:dn-spin 30s linear infinite,dn-breathe 5s ease-in-out infinite}.dn-mark{animation:dn-pulse 3s ease-in-out infinite}.dn-result.is-visible{animation:dn-reveal .9s cubic-bezier(.16,1,.3,1) both}.dn-simple-scale{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1.2rem}.dn-simple-scale div{padding:1rem;border:1px solid var(--dn-line);border-radius:12px;background:rgba(148,163,184,.025)}.dn-simple-scale strong{display:block;color:#fff;font-size:.7rem;letter-spacing:.08em}.dn-simple-scale span{display:block;color:var(--dn-muted);font-size:.78rem;margin-top:.3rem;line-height:1.5}@keyframes dn-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}@keyframes dn-breathe{0%,100%{opacity:.5}50%{opacity:1}}@keyframes dn-pulse{0%,100%{box-shadow:0 0 28px rgba(96,165,250,.2)}50%{box-shadow:0 0 42px rgba(96,165,250,.45)}}@keyframes dn-hero-in{from{opacity:0;transform:translateY(22px) scale(.98)}to{opacity:1;transform:none}}@keyframes dn-reveal{0%{opacity:0;transform:translateY(28px) scale(.94)}60%{opacity:1;transform:translateY(-5px) scale(1.015)}100%{opacity:1;transform:none}}@media(max-width:760px){.dn-simple-scale{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){.dn-launch-panel,.dn-hero>div:last-child,.dn-orbit,.dn-mark{animation:none!important}}</style>

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
          <div class="dn-eyebrow">Daily crowd mission · 001</div>
          <h1>Guess the number <span class="dn-gradient">everyone else</span> will choose.</h1>
          <p class="dn-lede">
            There is no correct answer. You get five questions and one guess each.
            The closer you are to the crowd, the farther your journey goes.
          </p>
          <div class="dn-rule-strip"><span>5 questions</span><i></i><span>1 guess each</span><i></i><span>reveal at the end</span></div>
        </div>
      </div>

      <div class="dn-launch-panel">
        <div class="dn-mission">
          <span>MISSION 001 · 5 QUESTIONS</span>
          <span>ONE GUESS EACH</span>
        </div>
        <form id="dn-form" novalidate>
          <div class="dn-question" id="dn-question">How many hours of sleep do you think most people get per night?</div>
          <p class="dn-explain" id="dn-explain">Think about the number an average person would type.</p>
          <div class="dn-number-row">
            <input id="dn-number" class="dn-number" type="text" inputmode="decimal" autocomplete="off" placeholder="Your guess" aria-label="Your numerical guess">
            <button class="dn-launch" type="submit">LOCK ANSWER</button>
          </div>
          <p class="dn-hint" id="dn-hint">One guess. No feedback until the mission is complete.</p>
        </form>

        <dl class="dn-telemetry">
          <div><dt>Questions</dt><dd id="dn-explorers">5</dd></div>
          <div><dt>Progress</dt><dd id="dn-deepest">1 / 5</dd></div>
          <div><dt>Scoring</dt><dd>Crowd match</dd></div>
        </dl>
      </div>

      <div class="dn-result" id="dn-result" aria-live="polite">
        <div class="dn-readout">
          <div class="dn-readout-label">MISSION COMPLETE</div>
          <div class="dn-readout-number" id="dn-r-number">—</div>
          <div class="dn-distance" id="dn-r-distance">0 / 100</div>
          <div class="dn-zone" id="dn-r-zone">Earth</div>
        </div>
        <div class="dn-stats">
          <div class="dn-stat"><span>Crowd score</span><strong id="dn-r-rarity">0</strong></div>
          <div class="dn-stat"><span>Accuracy</span><strong id="dn-r-rank">—</strong></div>
          <div class="dn-stat"><span>Your type</span><strong id="dn-r-near">—</strong></div>
        </div>
      </div>
    </section>

    <section class="dn-section" id="dn-about">
      <div class="dn-eyebrow">The idea</div>
      <h2>Don't find the right answer. Find the answer everyone else will give.</h2>
      <p>
        Deep Numbers is a five-question daily game about predicting people. Sometimes you may know the factual answer. That does not mean it will score highest. The winning move is to predict what the crowd is most likely to enter.
      </p>

      <div class="dn-card-grid">
        <article class="dn-card">
          <span class="dn-card-number">01 / GUESS</span>
          <h3>One guess per question</h3>
          <p>Everyone sees the same five questions. You lock one numerical answer for each.</p>
        </article>
        <article class="dn-card">
          <span class="dn-card-number">02 / THINK</span>
          <h3>Think like everyone else</h3>
          <p>Round numbers, familiar dates, common habits and human bias become part of the strategy.</p>
        </article>
        <article class="dn-card">
          <span class="dn-card-number">03 / REVEAL</span>
          <h3>No feedback until the end</h3>
          <p>Your answers stay hidden while you play. The crowd and your final trajectory are revealed together.</p>
        </article>
      </div>

      <div class="dn-simple-scale">
        <div><strong>LOW SCORE</strong><span>You thought differently from the crowd.</span></div>
        <div><strong>HIGH SCORE</strong><span>You predicted what other people would choose.</span></div>
      </div>

      <a class="dn-back" href="/projects/">Back to Ardie's projects</a>
    </section>

    <section class="dn-section" id="dn-support">
      <div class="dn-support">
        <div class="dn-eyebrow">Project support</div>
        <h2>Keep Deep Numbers moving.</h2>
        <p>
          Deep Numbers is intended to remain free and ad-free. Contributions
          can help cover hosting, domain costs, infrastructure and continued
          development of new missions.
        </p>
        <a class="dn-support-button" href="https://buymeacoffee.com/ardiebarrysailis" target="_blank" rel="noopener">
          Support Deep Numbers
        </a>
        <p class="dn-note">
          Support is optional and does not affect scores, rarity, rankings or gameplay.
        </p>
      </div>
    </section>

  </div>
</div>

<script>
(function(){
const root=document.getElementById("deep-numbers"); if(!root)return;
const qs=[
["How many hours of sleep do you think most people get per night?","Think about the number an average person would type.",0,16,7,1.5,7],
["How many times do you think most people check their phone in a day?","Predict the crowd, not your own behaviour.",1,300,80,25,80],
["What year do you think most people would guess the first Moon landing happened?","Famous dates are often remembered as memorable numbers.",1900,2100,1969,15,1969],
["How many kilometres do you think the Moon is from Earth?","You do not need to know astronomy. Estimate what ordinary people might type.",100000,1000000,400000,100000,384400],
["How many countries do you think most people would say there are in the world?","Think about the number people are likely to remember or round toward.",100,250,195,15,195]
];
let i=0,ans=[];
const q=document.getElementById("dn-question"),e=document.getElementById("dn-explain"),input=document.getElementById("dn-number"),hint=document.getElementById("dn-hint"),round=document.getElementById("dn-round-label"),prog=document.getElementById("dn-deepest"),form=document.getElementById("dn-form"),res=document.getElementById("dn-result");
const score=document.getElementById("dn-r-rarity"),acc=document.getElementById("dn-r-rank"),type=document.getElementById("dn-r-near"),distance=document.getElementById("dn-r-distance"),zone=document.getElementById("dn-r-zone");
function render(){let x=qs[i];round.textContent="ROUND "+(i+1)+" / 5";prog.textContent=(i+1)+" / 5";q.textContent=x[0];e.textContent=x[1];input.value="";input.min=x[2];input.max=x[3];input.placeholder=x[2].toLocaleString()+"–"+x[3].toLocaleString();hint.textContent="One guess. No feedback until the mission is complete.";input.focus();}
function gauss(v,c,t){return 100*Math.exp(-Math.pow((v-c)/t,2)/2);}
function dest(s){if(s>=98)return["Interstellar space","You predicted the crowd exceptionally well."];if(s>=94)return["Kuiper Belt","You went beyond the outer planets."];if(s>=90)return["Pluto","You reached the edge of the familiar solar system."];if(s>=82)return["Neptune","You made it past the giant planets."];if(s>=72)return["Saturn","You travelled deep into the outer solar system."];if(s>=62)return["Jupiter","You made a serious journey beyond Mars."];if(s>=50)return["Mars","You left Earth's neighbourhood."];if(s>=35)return["Moon","You made it beyond Earth."];return["Earth orbit","The crowd was hard to predict this time."];}
function simpleDistance(s){if(s>=98)return"Far beyond our solar system";if(s>=94)return"Billions of km away";if(s>=90)return"About 6 billion km";if(s>=82)return"About 4.5 billion km";if(s>=72)return"About 1.2 billion km";if(s>=62)return"About 780 million km";if(s>=50)return"About 78 million km";if(s>=35)return"About 384,000 km";return"A few hundred km above Earth";}
function ptype(s,a){if(s>=90&&a>=90)return"Human Calculator";if(s>=90)return"Social Thinker";if(a>=90)return"Fact Checker";if(s<45)return"Contrarian";return"Crowd Watcher";}
form.addEventListener("submit",function(ev){ev.preventDefault();let x=qs[i],v=Number(input.value.replace(/,/g,"").trim());if(!Number.isFinite(v)||v<x[2]||v>x[3]){hint.textContent="Enter a number between "+x[2].toLocaleString()+" and "+x[3].toLocaleString()+".";return;}ans.push({v:v,x:x});if(i<4){i++;q.animate([{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-14px)"},{opacity:1,transform:"translateX(0)"}],{duration:420,easing:"ease-out"});setTimeout(render,180);return;}
let ss=ans.map(a=>gauss(a.v,a.x[4],a.x[5])),aa=ans.map(a=>gauss(a.v,a.x[6],a.x[5])),s=ss.reduce((a,b)=>a+b,0)/5,a=aa.reduce((a,b)=>a+b,0)/5,d=dest(s);
score.textContent=s.toFixed(1);acc.textContent=Math.round(a)+"%";type.textContent=ptype(s,a);distance.textContent=simpleDistance(s);zone.textContent=d[0];hint.textContent=d[1];res.classList.remove("is-visible");void res.offsetWidth;res.classList.add("is-visible");res.scrollIntoView({behavior:"smooth",block:"center"});});
root.querySelectorAll("[data-dn-view]").forEach(function(b){b.addEventListener("click",function(){let n=b.dataset.dnView;["play","about","support"].forEach(function(k){let el=document.getElementById("dn-"+k);if(el){el.classList.toggle("is-active",k===n);if(k==="play")el.style.display=n==="play"?"":"none";}});root.querySelectorAll("[data-dn-view]").forEach(x=>x.classList.toggle("is-active",x===b));root.scrollIntoView({behavior:"smooth",block:"start"});});});
render();
})();
</script>