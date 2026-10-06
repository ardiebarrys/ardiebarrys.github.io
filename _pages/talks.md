---
layout: page
title: Talks
permalink: /talks/
description: Presentations, conferences and workshops
nav: true
nav_order: 4
---

<style>
  .talks {
    margin-top: 1.5rem;
  }

  .talks-section {
    margin-bottom: 2.25rem;
  }

  .talks-section > h2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1rem;
    color: var(--text-strong);
    font-size: 1.35rem;
    font-weight: 700;
  }

  .talks-section > h2::after {
    flex: 1;
    height: 1px;
    background: var(--line);
    content: "";
  }

  .talk {
    display: grid;
    grid-template-columns: 7rem minmax(0, 1fr);
    gap: 1.25rem;
    margin-bottom: 0.75rem;
    padding: 1rem 1.25rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--surface);
  }

  .talk-date {
    color: var(--accent);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    line-height: 1.5;
  }

  .talk-title {
    margin: 0;
    color: var(--text-strong);
    font-weight: 700;
    line-height: 1.45;
    text-align: left !important;
  }

  .talk-where {
    margin: 0.2rem 0 0;
    color: var(--muted);
    text-align: left !important;
  }

  @media (max-width: 600px) {
    .talk {
      grid-template-columns: 1fr;
      gap: 0.2rem;
    }
  }
</style>

<div class="talks">
  <section class="talks-section">
    <h2>Presentations</h2>
    {%- for t in site.data.talks %}
    {%- if t.kind == "talk" or t.kind == "poster" %}
    <div class="talk">
      <div class="talk-date">{{ t.date }}</div>
      <div>
        <p class="talk-title">{{ t.title }}</p>
        <p class="talk-where">{% if t.kind == "poster" %}Poster presentation{% if t.where %}, {% endif %}{% endif %}{{ t.where }}</p>
      </div>
    </div>
    {%- endif %}
    {%- endfor %}
  </section>

  <section class="talks-section">
    <h2>Conferences and symposia</h2>
    {%- for t in site.data.talks %}
    {%- if t.kind == "conference" %}
    <div class="talk">
      <div class="talk-date">{{ t.date }}</div>
      <div>
        <p class="talk-title">{{ t.title }}</p>
        {%- if t.where %}
        <p class="talk-where">{{ t.where }}</p>
        {%- endif %}
      </div>
    </div>
    {%- endif %}
    {%- endfor %}
  </section>

  <section class="talks-section">
    <h2>Workshops</h2>
    {%- for t in site.data.talks %}
    {%- if t.kind == "workshop" %}
    <div class="talk">
      <div class="talk-date">{{ t.date }}</div>
      <div>
        <p class="talk-title">{{ t.title }}</p>
        {%- if t.where %}
        <p class="talk-where">{{ t.where }}</p>
        {%- endif %}
      </div>
    </div>
    {%- endif %}
    {%- endfor %}
  </section>
</div>
