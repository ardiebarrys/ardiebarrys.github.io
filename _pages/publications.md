---
layout: page
permalink: /publications/
title: Publications
description: Journal articles and literature reviews by Ardie Barry Sailis
nav: true
nav_order: 2
---

<style>
  .post,
  .page,
  .container,
  main {
    max-width: 1280px !important;
  }

  .pubs {
    margin-top: 2.5rem;
  }

  .pub-year {
    margin-bottom: 2.5rem;
  }

  .pub-year-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1rem;
    color: var(--text-strong);
    font-size: 1.5rem;
    font-weight: 700;
  }

  .pub-year-title::after {
    flex: 1;
    height: 1px;
    background: var(--line);
    content: "";
  }

  .pub {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    gap: 1.75rem;
    margin-bottom: 1rem;
    padding: 1.4rem 1.5rem;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--surface);
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }

  .pub:hover {
    border-color: var(--line-strong);
  }

  .pub-main {
    min-width: 0;
  }

  .pub-title {
    margin: 0 0 0.5rem;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .pub-title a {
    color: var(--text-strong) !important;
    text-decoration: none !important;
  }

  .pub-title a:hover {
    color: var(--accent-strong) !important;
    text-decoration: underline !important;
    text-underline-offset: 3px;
  }

  .pub-authors,
  .pub-venue {
    margin: 0 0 0.3rem;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: left !important;
  }

  .pub-authors strong {
    color: var(--text-strong);
  }

  .pub-venue em {
    color: var(--text);
  }

  .pub-venue a {
    color: var(--accent) !important;
    word-break: break-word;
  }

  .pub-timeline {
    display: flex;
    flex-wrap: wrap;
    gap: .25rem .85rem;
    margin: .55rem 0 0;
    color: var(--muted);
    font-size: .78rem;
    line-height: 1.45;
  }

  .pub-timeline span {
    white-space: nowrap;
  }

  .pub-timeline strong {
    color: var(--text);
    font-weight: 650;
  }

  .pub-tools {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.6rem;
    margin-top: 0.9rem;
  }

  .pub-page-link {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--line-strong);
    border-radius: 8px;
    background: transparent;
    color: var(--text-strong) !important;
    font: inherit;
    font-size: 0.88rem;
    font-weight: 600;
    line-height: 1.3;
    text-decoration: none !important;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .pub-page-link:hover {
    border-color: var(--accent);
    background: var(--surface-strong);
  }

  .pub-page-link:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .pub-cite,
  .pub-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--line-strong);
    border-radius: 8px;
    background: transparent;
    color: var(--text-strong);
    font: inherit;
    font-size: 0.88rem;
    font-weight: 600;
    line-height: 1.3;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .pub-cite:hover,
  .pub-toggle:hover {
    border-color: var(--accent);
    background: var(--surface-strong);
  }

  .pub-cite:focus-visible,
  .pub-toggle:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .pub-cite.is-copied {
    border-color: #34d399;
    color: #a7f3d0;
  }

  .pub-toggle::after {
    width: 0.42rem;
    height: 0.42rem;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    content: "";
    transform: translateY(-2px) rotate(45deg);
    transition: transform 0.2s ease;
  }

  .pub-toggle[aria-expanded="true"]::after {
    transform: translateY(2px) rotate(-135deg);
  }

  .pub-toggle[hidden],
  .pub-abstract-body[hidden] {
    display: none;
  }

  .pub-abstract-body {
    margin-top: 0.9rem;
    padding: 1rem 1.1rem;
    border-left: 3px solid var(--accent);
    border-radius: 8px;
    background: rgba(8, 17, 48, 0.45);
    color: var(--text);
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .pub-abstract-body p {
    margin: 0 0 0.7rem;
    text-align: left !important;
  }

  .pub-abstract-body p:last-child {
    margin-bottom: 0;
  }

  .pub-abstract-body strong {
    color: var(--text-strong);
  }

  .pub-metrics {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
    background: #ffffff;
    color: #1e293b;
    --global-text-color: #1e293b;
    --global-theme-color: #1d4ed8;
  }

  .pub-metric {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 72px;
  }

  @media (max-width: 860px) {
    .pub {
      grid-template-columns: 1fr;
      gap: 1.25rem;
      padding: 1.15rem;
    }

    .pub-metrics {
      justify-self: start;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pub,
    .pub-cite,
    .pub-toggle,
    .pub-toggle::after {
      transition: none;
    }
  }
</style>

{% include journal-metrics-summary.html %}

{%- assign me = "Ardie Barry Sailis" -%}
{%- assign years = site.data.papers | group_by: "year" %}

<div class="pubs">
  {%- for group in years %}
  <section class="pub-year" aria-labelledby="year-{{ group.name }}">
    <h2 class="pub-year-title" id="year-{{ group.name }}">{{ group.name }}</h2>
    {%- for p in group.items %}
    <article class="pub" id="{{ p.doi | slugify }}">
      <div class="pub-main">
        <h3 class="pub-title"><a href="https://doi.org/{{ p.doi }}">{{ p.title }}</a></h3>
        <p class="pub-authors">
          {%- for a in p.authors -%}
            {%- if a == me -%}<strong>{{ a }}</strong>{%- else -%}{{ a }}{%- endif -%}
            {%- unless forloop.last %}, {% endunless -%}
          {%- endfor -%}
        </p>
        <p class="pub-venue"><em>{{ p.journal }}</em>, {{ p.year }}. <a href="https://doi.org/{{ p.doi }}">doi.org/{{ p.doi }}</a></p>
        {%- if p.accepted or p.volume or p.issue %}
        <p class="pub-timeline" aria-label="Publication details">
          {%- if p.accepted %}<span><strong>Accepted</strong> {{ p.accepted | date: "%-d %B %Y" }}</span>{% endif -%}
          {%- if p.volume %}<span><strong>Volume</strong> {{ p.volume }}</span>{% endif -%}
          {%- if p.issue %}<span><strong>Issue</strong> {{ p.issue }}</span>{% endif -%}
        </p>
        {%- endif %}
        <div class="pub-tools">
          {%- if p.doi == "10.1016/j.pbiomolbio.2026.101960" %}
          <a class="pub-page-link" href="{{ '/research/yap-taz-signal-resolution/' | relative_url }}">View page</a>
          {%- endif %}
          {%- if p.doi == "10.1016/j.pbiomolbio.2026.03.005" %}
          <a class="pub-page-link" href="{{ '/research/nrf2-keap1-redoxostat/' | relative_url }}">View page</a>
          {%- endif %}
          {%- if p.doi == "10.1007/s00204-026-04384-1" %}
          <a class="pub-page-link" href="{{ '/research/cyp1a1-metabolic-feedback/' | relative_url }}">View page</a>
          {%- endif %}
          {%- if p.doi == "10.1016/j.genrep.2026.102599" %}
          <a class="pub-page-link" href="{{ '/research/transcriptional-condensates-kinetic-filters/' | relative_url }}">View page</a>
          {%- endif %}
          <button type="button" class="pub-toggle" aria-expanded="false" aria-controls="abstract-{{ p.doi | slugify }}" hidden>Show abstract</button>
          <button
            type="button"
            class="pub-cite"
            data-authors="{{ p.authors | join: ';' | escape }}"
            data-year="{{ p.year }}"
            data-title="{{ p.title | escape }}"
            data-journal="{{ p.journal | escape }}"
            data-volume="{{ p.volume }}"
            data-issue="{{ p.issue }}"
            data-pages="{{ p.pages }}"
            data-article="{{ p.article }}"
            data-doi="{{ p.doi }}"
          >
            Copy citation
          </button>
        </div>
        <div class="pub-abstract-body" id="abstract-{{ p.doi | slugify }}">{{ p.abstract | markdownify }}</div>
      </div>
<aside class="pub-metrics" aria-label="Metrics for this paper">
  <div class="pub-metric">
    <a
      href="https://plu.mx/plum/a/?doi={{ p.doi | url_encode }}"
      class="plumx-plum-print-popup"
      data-popup="bottom"
      data-size="medium">
    </a>
  </div>

  <div class="pub-metric">
    <div class="lazy-badge"
         data-badge="altmetric"
         data-badge-type="donut"
         data-doi="{{ p.doi }}"></div>
  </div>

  <div class="pub-metric">
    <span class="lazy-badge"
          data-badge="dimensions"
          data-doi="{{ p.doi }}"
          data-style="small_circle"></span>
  </div>
</aside>
    </article>
    {%- endfor %}
  </section>
  {%- endfor %}
</div>

<script>
  (function () {
    // Abstracts start collapsed. Without JavaScript they simply stay visible.
    document.querySelectorAll(".pub-toggle").forEach(function (toggle) {
      var body = document.getElementById(toggle.getAttribute("aria-controls"));
      if (!body) return;
      body.hidden = true;
      toggle.hidden = false;
      toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        toggle.textContent = open ? "Show abstract" : "Hide abstract";
        body.hidden = open;
      });
    });

    // Copy an APA-style citation for a paper.
    function apaName(full) {
      var parts = full.trim().split(/\s+/);
      var familyWords = 1;
      if (parts.length >= 3 && /^(mat|md|mohd|bin|binti|van|von|de|da|del|di|le|la)$/i.test(parts[parts.length - 2])) {
        familyWords = 2;
      }
      var family = parts.slice(-familyWords).join(" ");
      var initials = parts
        .slice(0, -familyWords)
        .map(function (name) {
          return name
            .split("-")
            .map(function (piece) {
              return piece.charAt(0).toUpperCase() + ".";
            })
            .join("-");
        })
        .join(" ");
      return initials ? family + ", " + initials : family;
    }

    function apaAuthors(list) {
      var names = list.map(apaName);
      if (names.length === 1) return names[0];
      if (names.length === 2) return names[0] + ", & " + names[1];
      return names.slice(0, -1).join(", ") + ", & " + names[names.length - 1];
    }

    function citation(button) {
      var d = button.dataset;
      var title = d.title.trim();
      if (!/[.?!]$/.test(title)) title += ".";
      var journal = d.journal.trim();
      var volume = d.volume && d.volume !== "undefined" ? d.volume.trim() : "";
      var issue = d.issue && d.issue !== "undefined" ? d.issue.trim() : "";
      var pages = d.pages && d.pages !== "undefined" ? d.pages.trim() : "";
      var article = d.article && d.article !== "undefined" ? d.article.trim() : "";
      var journalPart = journal + (volume ? ", " + volume : "") + (issue ? "(" + issue + ")" : "");
      if (pages) journalPart += ", " + pages;
      else if (article) journalPart += ", Article " + article;
      journalPart += ".";
      return apaAuthors(d.authors.split(";")) + " (" + d.year + "). " + title + " " + journalPart + " https://doi.org/" + d.doi;
    }

    function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
      }
      return new Promise(function (resolve, reject) {
        var area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        var ok = document.execCommand("copy");
        area.remove();
        ok ? resolve() : reject();
      });
    }

    document.querySelectorAll(".pub-cite").forEach(function (button) {
      button.addEventListener("click", function () {
        copyText(citation(button)).then(
          function () {
            button.textContent = "Copied";
            button.classList.add("is-copied");
            setTimeout(function () {
              button.textContent = "Copy citation";
              button.classList.remove("is-copied");
            }, 2000);
          },
          function () {
            window.prompt("Copy this citation:", citation(button));
          }
        );
      });
    });

    // Load the Altmetric and Dimensions badges only when a paper scrolls into view.
    var sources = {
      altmetric: {
        className: "altmetric-embed",
        src: "https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js",
        init: function (scope) {
          if (typeof window._altmetric_embed_init === "function") window._altmetric_embed_init(scope);
        },
      },
      dimensions: {
        className: "__dimensions_badge_embed__",
        src: "https://badge.dimensions.ai/badge.js",
        init: function () {
          if (window.__dimensions_embed && window.__dimensions_embed.addBadges) window.__dimensions_embed.addBadges();
        },
      },
    };
    var loading = {};

    function loadScript(name) {
      if (!loading[name]) {
        loading[name] = new Promise(function (resolve) {
          var script = document.createElement("script");
          script.src = sources[name].src;
          script.async = true;
          script.charset = "utf-8";
          script.onload = resolve;
          script.onerror = resolve;
          document.body.appendChild(script);
        });
      }
      return loading[name];
    }

    function activate(panel) {
      panel.querySelectorAll(".lazy-badge").forEach(function (badge) {
        var name = badge.getAttribute("data-badge");
        var source = sources[name];
        if (!source) return;
        badge.classList.remove("lazy-badge");
        badge.classList.add(source.className);
        loadScript(name).then(function () {
          source.init(panel);
        });
      });
    }

    var panels = document.querySelectorAll(".pub-metrics");
    if (!("IntersectionObserver" in window)) {
      panels.forEach(activate);
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            activate(entry.target);
          }
        });
      },
      { rootMargin: "400px 0px" }
    );
    panels.forEach(function (panel) {
      observer.observe(panel);
    });
  })();
</script>
