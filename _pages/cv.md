---
layout: page
title: Curriculum Vitae
permalink: /cv/
nav: true
nav_order: 5
nav_title: CV
description: CV of Ardie Barry Sailis, PhD candidate in Pharmaceutical Sciences at Universiti Malaya, with publications, experience and training
---

<style>
  @font-face {
    font-family: "Spectral";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("/assets/fonts/spectral-latin-600-normal.woff2") format("woff2");
  }

  .post-description {
    display: none;
  }

  .cv {
    --global-text-color: #1e293b;
    --global-text-color-light: #5b6478;
    --cv-ink: #0b174f;
    --cv-blue: #2563eb;
    --cv-text: #1e293b;
    --cv-muted: #5b6478;
    --cv-line: #dfe5f1;
    max-width: 880px;
    margin: 0.25rem auto 3rem;
    padding: 3rem 3.25rem 2.5rem;
    border: 1px solid var(--cv-line);
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 24px 60px rgba(11, 23, 79, 0.08);
    color: var(--cv-text);
    font-size: 0.97rem;
    line-height: 1.6;
  }

  .cv p {
    margin: 0;
    text-align: left;
  }

  .cv a {
    color: var(--cv-blue) !important;
    text-decoration: none !important;
  }

  .cv a:hover {
    text-decoration: underline !important;
    text-underline-offset: 3px;
  }

  .cv a:focus-visible {
    outline: 2px solid var(--cv-blue);
    outline-offset: 2px;
    border-radius: 3px;
  }

  .cv-head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.25rem 2rem;
    padding-bottom: 1.6rem;
    border-bottom: 2px solid var(--cv-ink);
  }

  .cv-head > div {
    flex: 1 1 28rem;
    min-width: 0;
  }

  .cv-name {
    margin: 0 0 0.4rem;
    color: var(--cv-ink);
    font-family: "Spectral", Georgia, serif;
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  .cv-role {
    color: var(--cv-text);
    font-weight: 600;
  }

  .cv-org {
    color: var(--cv-muted);
  }

  .cv-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem 1.3rem;
    margin: 0.9rem 0 0;
    padding: 0;
    list-style: none;
    color: var(--cv-muted);
    font-size: 0.9rem;
  }

  .cv-contact li {
    color: var(--cv-muted);
  }

  .cv a.cv-pdf {
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.05rem;
    border-radius: 8px;
    background: var(--cv-ink);
    color: #ffffff !important;
    font-size: 0.9rem;
    font-weight: 600;
    white-space: nowrap;
    transition: background-color 0.2s ease;
  }

  .cv a.cv-pdf:hover {
    background: var(--cv-blue);
    text-decoration: none !important;
  }

  .cv-pdf svg {
    width: 1rem;
    height: 1rem;
  }

  .cv-section {
    display: grid;
    grid-template-columns: 9.5rem minmax(0, 1fr);
    gap: 0 2rem;
    padding: 1.6rem 0;
    border-bottom: 1px solid var(--cv-line);
  }

  .cv-section:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .cv .cv-section > h2 {
    margin: 0;
    color: var(--cv-ink) !important;
    font-family: "Spectral", Georgia, serif;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.45;
  }

  .cv-entry + .cv-entry {
    margin-top: 1.15rem;
  }

  .cv-entry-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0 1rem;
  }

  .cv-entry-title {
    color: var(--cv-ink);
    font-weight: 700;
  }

  .cv-date {
    color: var(--cv-muted);
    font-size: 0.88rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .cv-entry-org {
    color: var(--cv-muted);
  }

  .cv-entry .cv-detail {
    margin-top: 0.4rem;
  }

  .cv-entry ul {
    margin: 0.5rem 0 0;
    padding-left: 1.1rem;
  }

  .cv-entry li {
    margin-bottom: 0.2rem;
  }


  .cv-pubs {
    margin: 0;
    padding-left: 2rem;
  }

  .cv-pubs li {
    margin-bottom: 0.9rem;
    padding-left: 0.35rem;
  }

  .cv-pubs li::marker {
    color: var(--cv-blue);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }

  .cv-pub-title,
  .cv-pub-authors,
  .cv-pub-venue {
    display: block;
  }

  .cv-pub-title {
    color: var(--cv-ink);
    font-weight: 600;
  }

  .cv-pub-authors,
  .cv-pub-venue {
    font-size: 0.92rem;
  }

  .cv-pub-authors strong {
    color: var(--cv-text);
  }

  .cv-rows {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .cv-rows li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.4rem;
  }

  .cv-pairs {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 0.45rem 1.25rem;
    margin: 0;
  }

  .cv-pairs dt {
    color: var(--cv-ink);
    font-weight: 700;
  }

  .cv-pairs dd {
    margin: 0;
  }

  @media (max-width: 720px) {
    .cv {
      padding: 1.75rem 1.25rem 1.5rem;
      border-radius: 12px;
    }

    .cv-name {
      font-size: 2.1rem;
    }

    .cv-section {
      grid-template-columns: 1fr;
      gap: 0.6rem;
    }

    .cv-pairs {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .cv-pairs dd {
      margin-bottom: 0.55rem;
    }
  }

  @media print {
    @page {
      size: A4;
      margin: 13mm 13mm 15mm;
    }

    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    html:root {
      color-scheme: light;
      font-size: 13px !important;
    }

    html:root,
    html:root body {
      background: #ffffff !important;
      padding: 0 !important;
      margin: 0 !important;
      min-height: 0 !important;
    }

    .post,
    article,
    main,
    .container.mt-5 {
      margin: 0 !important;
      padding: 0 !important;
    }

    html:root body::before,
    #navbar,
    footer,
    .fixed-bottom,
    .progress-container,
    #progress,
    .post-header,
    .cv a.cv-pdf,
    #custom-chatbase-greeting,
    #chatbase-bubble-button,
    #chatbase-bubble-window,
    iframe {
      display: none !important;
    }

    .container,
    .row,
    [class*="col-"] {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      flex: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .cv {
      max-width: none;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      box-shadow: none;
    }

    .cv-section {
      display: block;
      padding: 1.1rem 0;
    }

    .cv-section::after {
      content: "";
      display: block;
      clear: both;
    }

    .cv .cv-section > h2 {
      float: left;
      width: 9.5rem;
    }

    .cv-section > div,
    .cv-section > dl {
      margin-left: 11.5rem;
    }

    .cv .cv-section > h2 {
      break-after: avoid;
    }

    .cv-entry,
    .cv-pubs li,
    .cv-rows li,
    .cv-pairs dt,
    .cv-pairs dd {
      break-inside: avoid;
    }
  }
</style>

<div class="cv">
  <header class="cv-head">
    <div>
      <p class="cv-name">Ardie Barry Sailis</p>
      <p class="cv-role">PhD Candidate in Pharmaceutical Sciences (Health)</p>
      <p class="cv-org">Department of Pharmaceutical Life Sciences, Faculty of Pharmacy, Universiti Malaya</p>
      <ul class="cv-contact">
        <li><a href="mailto:ardiebarrys@gmail.com">ardiebarrys@gmail.com</a></li>
        <li><a href="https://ardiebarrysailis.com">ardiebarrysailis.com</a></li>
        <li><a href="https://orcid.org/0009-0009-8994-2793">ORCID 0009-0009-8994-2793</a></li>
        <li><a href="https://scholar.google.com/citations?user=saKP688AAAAJ">Google Scholar</a></li>
        <li><a href="https://www.linkedin.com/in/ardiebarrysailis">linkedin.com/in/ardiebarrysailis</a></li>
        <li>Kuala Lumpur, Malaysia</li>
      </ul>
    </div>
    <a class="cv-pdf" href="/assets/pdf/Ardie_Barry_Sailis_CV.pdf" download>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      Download PDF
    </a>
  </header>

  <section class="cv-section">
    <h2>Profile</h2>
    <div>
      <p>
        Toxicology researcher studying how e-cigarette use affects male reproductive health. My PhD at Universiti Malaya compares cigarette
        smokers, e-cigarette users and dual users in Malaysia, linking exposure to testosterone-related microRNAs, mitochondrial function and
        blood cell changes. I have published {{ site.data.papers | size }} peer-reviewed papers as sole or first author and review manuscripts
        for seven international journals. Open to roles in research, medical affairs, regulatory science and science communication.
      </p>
    </div>
  </section>

  <section class="cv-section">
    <h2>Education</h2>
    <div>
      <div class="cv-entry">
        <div class="cv-entry-head">
          <span class="cv-entry-title">Doctor of Philosophy in Pharmacy (Health)</span>
          <span class="cv-date">Dec 2023 &ndash; Dec 2026 (expected)</span>
        </div>
        <p class="cv-entry-org">Universiti Malaya, Kuala Lumpur</p>
        <p class="cv-detail">
          Thesis on testosterone-related microRNAs, blood cell abnormalities and sexual desire in Malaysian cigarette smokers, e-cigarette users
          and dual users.
        </p>
      </div>
      <div class="cv-entry">
        <div class="cv-entry-head">
          <span class="cv-entry-title">Bachelor of Science in Microbiology, With Distinction</span>
          <span class="cv-date">2019 &ndash; 2023</span>
        </div>
        <p class="cv-entry-org">Universiti Malaya, Kuala Lumpur</p>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <h2>Experience</h2>
    <div>
      <div class="cv-entry">
        <div class="cv-entry-head">
          <span class="cv-entry-title">Doctoral Researcher</span>
          <span class="cv-date">Dec 2023 &ndash; present</span>
        </div>
        <p class="cv-entry-org">Department of Pharmaceutical Life Sciences, Faculty of Pharmacy, Universiti Malaya</p>
        <ul>
          <li>Conducted a comparative study of cigarette smokers, e-cigarette users and dual users in Malaysia.</li>
          <li>Analyzed testosterone-related microRNAs by qPCR alongside hormone and blood cell profiles.</li>
          <li>Used transmission electron microscopy to assess mitochondrial damage in e-cigarette users and controls.</li>
          <li>Wrote mechanistic and systematic reviews on e-cigarette toxicology, reproductive health and redox signaling.</li>
          <li>
            Started an independent project, Cellular Signalling as Dynamic Regulatory Circuits, which produced the redoxostat concept in
            NRF2&ndash;KEAP1 biology.
          </li>
        </ul>
      </div>
      <div class="cv-entry">
        <div class="cv-entry-head">
          <span class="cv-entry-title">Peer Reviewer</span>
          <span class="cv-date">2025 &ndash; present</span>
        </div>
        <p class="cv-entry-org">Seven international journals</p>
        <p class="cv-detail">
          Reviews manuscripts in toxicology, pharmacology, reproductive health and public health for American Journal of Preventive Medicine,
          Journal of Hazardous Materials Advances, Pharmacological Reviews, Progress in Biophysics and Molecular Biology, Toxicology Reports,
          PLOS One and International Journal of General Medicine.
        </p>
      </div>
      <div class="cv-entry">
        <div class="cv-entry-head">
          <span class="cv-entry-title">Intern</span>
          <span class="cv-date">Oct 2022 &ndash; Jan 2023</span>
        </div>
        <p class="cv-entry-org">Indah Water Konsortium Sdn Bhd</p>
        <p class="cv-detail">
          Supported laboratory operations during a full-time internship, covering microbiology procedures, water quality testing, sample
          handling, documentation and technical reporting under standard operating procedures.
        </p>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <h2>Publications</h2>
    <div>
      {%- assign me = "Ardie Barry Sailis" %}
      <ol class="cv-pubs" reversed>
        {%- for p in site.data.papers %}
        {%- assign last_char = p.title | slice: -1 %}
        <li>
          <span class="cv-pub-title">{{ p.title }}{% unless last_char == "." or last_char == "?" %}.{% endunless %}</span>
          <span class="cv-pub-authors">
            {%- for a in p.authors -%}
              {%- if a == me -%}<strong>{{ a }}</strong>{%- else -%}{{ a }}{%- endif -%}
              {%- unless forloop.last %}, {% endunless -%}
            {%- endfor -%}
          </span>
          <span class="cv-pub-venue"><em>{{ p.journal }}</em>, {{ p.year }}. <a href="https://doi.org/{{ p.doi }}">doi.org/{{ p.doi }}</a></span>
        </li>
        {%- endfor %}
      </ol>
    </div>
  </section>

  <section class="cv-section">
    <h2>Talks and conferences</h2>
    <div>
      {%- assign events = site.data.talks | where_exp: "t", "t.kind != 'workshop'" -%}
      {%- for t in events %}
      <div class="cv-entry">
        <div class="cv-entry-head">
          <span class="cv-entry-title">{{ t.title }}</span>
          <span class="cv-date">{{ t.date }}</span>
        </div>
        {%- if t.kind == "poster" %}
        <p class="cv-entry-org">Poster presentation{% if t.where %}, {{ t.where }}{% endif %}</p>
        {%- elsif t.where %}
        <p class="cv-entry-org">{{ t.where }}</p>
        {%- endif %}
      </div>
      {%- endfor %}
    </div>
  </section>

  <section class="cv-section">
    <h2>Training</h2>
    <div>
      <ul class="cv-rows">
        {%- assign workshops = site.data.talks | where: "kind", "workshop" -%}
        {%- for t in workshops %}
        <li><span>{{ t.title }}{% if t.where %}, {{ t.where }}{% endif %}</span><span class="cv-date">{{ t.date }}</span></li>
        {%- endfor %}
      </ul>
    </div>
  </section>

  <section class="cv-section">
    <h2>Skills</h2>
    <dl class="cv-pairs">
      <dt>Laboratory</dt>
      <dd>qPCR, transmission electron microscopy, molecular biology techniques</dd>
      <dt>Data</dt>
      <dd>SPSS, bioinformatics, data interpretation</dd>
      <dt>Evidence</dt>
      <dd>Systematic reviews, literature synthesis, mechanistic toxicology</dd>
      <dt>Writing</dt>
      <dd>Scientific writing, manuscript preparation, peer review, research conceptualization</dd>
      <dt>Research areas</dt>
      <dd>E-cigarette and tobacco toxicology, reproductive health, pharmacology, toxicogenomics, molecular systems biology</dd>
    </dl>
  </section>

  <section class="cv-section">
    <h2>Languages</h2>
    <dl class="cv-pairs">
      <dt>Malay</dt>
      <dd>Native or bilingual proficiency</dd>
      <dt>English</dt>
      <dd>Professional working proficiency</dd>
    </dl>
  </section>

  <section class="cv-section">
    <h2>References</h2>
    <div>
      <p>Available on request.</p>
    </div>
  </section>
</div>
