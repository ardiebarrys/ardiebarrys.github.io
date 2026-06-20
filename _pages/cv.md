---
layout: page
title: Curriculum Vitae
permalink: /cv/
nav: true
nav_order: 4
nav_title: CV
toc:
  sidebar: left
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

  /* Keep main CV navigation visible, hide only nested subheadings */
  #toc-sidebar ul ul,
  .toc-sidebar ul ul,
  #toc-sidebar .nav .nav,
  .toc-sidebar .nav .nav {
    display: none !important;
  }

  /* CV layout: move pane left and pull main content closer */
  @media (min-width: 992px) {
    .row:has(#toc-sidebar),
    .row:has(.toc-sidebar) {
      display: grid !important;
      grid-template-columns: 210px minmax(0, 1fr) !important;
      column-gap: 0.75rem !important;
      align-items: start !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .row:has(#toc-sidebar) > [class*="col-"],
    .row:has(.toc-sidebar) > [class*="col-"] {
      width: auto !important;
      max-width: none !important;
      flex: none !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .row:has(#toc-sidebar) > [class*="col-"]:first-child,
    .row:has(.toc-sidebar) > [class*="col-"]:first-child {
      width: 210px !important;
      max-width: 210px !important;
    }

    .row:has(#toc-sidebar) > [class*="col-"]:last-child,
    .row:has(.toc-sidebar) > [class*="col-"]:last-child {
      width: 100% !important;
      max-width: 100% !important;
    }

    #toc-sidebar,
    .toc-sidebar {
      width: 210px !important;
      max-width: 210px !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-right: 0.5rem !important;
    }

    #toc-sidebar .nav,
    .toc-sidebar .nav {
      margin-left: 0 !important;
      padding-left: 0 !important;
    }
  }

  .cv-page {
    width: 100%;
  }

  .cv-hero {
    margin: 1rem 0 2rem;
    padding: 1.8rem 2rem;
    border-left: 5px solid var(--global-theme-color);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.02));
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  }

  .cv-hero h1 {
    margin: 0 0 0.6rem;
    font-size: 2.4rem;
    font-weight: 700;
  }

  .cv-hero p {
    margin: 0;
    line-height: 1.55;
  }

  .cv-page h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #0b174f !important;
    font-size: 1.65rem;
    font-weight: 700;
  }

  .cv-card {
    margin-bottom: 1.3rem;
    padding: 1.35rem 1.5rem;
    border: 1px solid rgba(183, 0, 183, 0.18);
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.045);
  }

  .cv-card p,
  .cv-card li {
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.65;
  }

  .cv-info-table {
    width: 100%;
    border-collapse: collapse;
  }

  .cv-info-table th,
  .cv-info-table td {
    padding: 0.75rem 0.9rem;
    border-bottom: 1px solid #eeeeee;
    text-align: left;
    vertical-align: top;
  }

  .cv-info-table th {
    width: 220px;
    color: #0b174f;
    font-weight: 700;
  }

  .cv-date {
    color: var(--global-theme-color);
    font-weight: 700;
    text-transform: uppercase;
  }

  .cv-item-title {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.15rem;
    font-weight: 700;
  }

  .cv-muted {
    color: #555555;
  }

  .cv-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 0.5rem;
  }

  .cv-tag {
    padding: 0.45rem 0.7rem;
    border: 1px solid rgba(183, 0, 183, 0.22);
    border-radius: 999px;
    background: rgba(183, 0, 183, 0.055);
    color: #111111;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .cv-hero {
      padding: 1.25rem;
    }

    .cv-info-table th,
    .cv-info-table td {
      display: block;
      width: 100%;
      padding: 0.55rem 0;
    }
  }
</style>

<div class="cv-page" markdown="1">

<div class="cv-hero">
  <h1>Ardie Barry Sailis</h1>
  <p>
    PhD Candidate in Pharmaceutical Sciences (Health), Department of Pharmaceutical Life Sciences,
    Faculty of Pharmacy, Universiti Malaya.
  </p>
</div>

## Contact Information

<div class="cv-card">
  <table class="cv-info-table">
    <tr>
      <th>Name</th>
      <td>Ardie Barry Sailis</td>
    </tr>
    <tr>
      <th>Professional Title</th>
      <td>PhD Candidate in Pharmaceutical Sciences (Health)</td>
    </tr>
    <tr>
      <th>Email</th>
      <td>ardiebarrys@gmail.com</td>
    </tr>
    <tr>
      <th>Affiliation</th>
      <td>Department of Pharmaceutical Life Sciences, Faculty of Pharmacy
