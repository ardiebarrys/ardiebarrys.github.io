---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 5
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

  .contact-page {
    width: 100%;
    margin-top: 1.5rem;
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.8rem;
    width: 100%;
    margin-top: 1.5rem;
  }

  .contact-top-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(340px, 0.75fr);
    gap: 1.8rem;
    width: 100%;
    align-items: stretch;
  }

  .contact-top-grid .contact-card {
    height: 100%;
  }

  .contact-card {
    width: 100%;
    padding: 1.8rem 2rem;
    border: 1px solid rgba(183, 0, 183, 0.22);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.025));
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
  }

  .contact-card h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.45rem;
    font-weight: 700;
  }

  .contact-address {
    margin-bottom: 1.4rem;
    line-height: 1.55;
  }

  .contact-map {
    width: 100%;
    height: 360px;
    border: 0;
    border-radius: 10px;
  }

  .contact-note {
    margin-bottom: 1.2rem;
    color: #666666;
  }

  .support-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.45rem 1.6rem;
  }

  .support-card p {
    margin-bottom: 1rem;
    color: #444444;
    line-height: 1.55;
  }

  .coffee-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: fit-content;
    margin: 0.3rem 0 1rem;
    padding: 0.78rem 1.15rem;
    border: 1px solid rgba(183, 0, 183, 0.24);
    border-radius: 999px;
    background: #ffffff;
    color: #b700b7 !important;
    font-weight: 700;
    text-decoration: none !important;
    box-shadow: 0 6px 16px rgba(183, 0, 183, 0.1);
  }

  .coffee-button:hover {
    border-color: var(--global-theme-color);
    background: rgba(183, 0, 183, 0.08);
    color: var(--global-theme-color) !important;
  }

  .coffee-icon {
    font-size: 1.05rem;
    line-height: 1;
  }

  .support-helps {
    margin-top: 0.4rem;
    padding-top: 0.85rem;
    border-top: 1px solid rgba(183, 0, 183, 0.16);
    color: #333333;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .support-note {
    margin-top: 0.85rem;
    color: #666666;
    font-size: 0.88rem;
    line-height: 1.5;
  }

  .contact-form label {
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.35rem;
    font-weight: 700;
  }

  .contact-form input,
  .contact-form select,
  .contact-form textarea {
    width: 100%;
    padding: 0.75rem 0.85rem;
    border: 1px solid #cccccc;
    border-radius: 8px;
    background: #ffffff;
    color: #111111;
    font: inherit;
    box-sizing: border-box;
  }

  .contact-form textarea {
    min-height: 190px;
    resize: vertical;
  }

  .contact-form button {
    margin-top: 1.2rem;
    padding: 0.75rem 1.2rem;
    border: 0;
    border-radius: 8px;
    background: var(--global-theme-color);
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
  }

  .contact-form button:hover {
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    .contact-top-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .contact-card {
      padding: 1.25rem;
    }

    .contact-map {
      height: 320px;
    }
  }
</style>

<div class="contact-page">
  <div class="contact-layout">
    <div class="contact-top-grid">
      <section class="contact-card">
        <h2>Address</h2>

        <div class="contact-address">
          <strong>Department of Pharmaceutical Life Sciences</strong><br>
          Faculty of Pharmacy<br>
          University of Malaya<br>
          50603 Kuala Lumpur, Malaysia
        </div>

        <iframe
          class="contact-map"
          src="https://www.google.com/maps?q=Faculty%20of%20Pharmacy%2C%20University%20of%20Malaya%2C%2050603%20Kuala%20Lumpur%2C%20Malaysia&output=embed"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      <section class="contact-card support-card">
        <h2>Support Independent Academic Work</h2>

        <p>
          I write independent academic summaries, research commentary, and educational resources on toxicology, reproductive health, and biomedical science. Optional support helps maintain this website and support open science communication.
        </p>

        <a class="coffee-button" href="https://buymeacoffee.com/ardiebarrysailis" target="_blank" rel="noopener">
          <span class="coffee-icon">&#9749;</span>
          <span>Support via Buy Me a Coffee</span>
        </a>

        <div class="support-helps">
          <strong>Support helps with:</strong><br>
          Website maintenance | Open educational resources | Research communication
        </div>

        <div class="support-note">
          Contributions are voluntary and personal. They do not influence research findings, academic judgment, supervision, peer review, or institutional decisions. This page does not represent institutional fundraising unless stated otherwise.
        </div>
      </section>
    </div>

    <section class="contact-card">
      <h2>Send a Message</h2>

      <p class="contact-note">
        Please allow up to seven business days for a response.
      </p>

      <form class="contact-form" action="https://formspree.io/f/mjgdnjlb" method="POST">
        <label for="email">Your Email</label>
        <input id="email" type="email" name="email" required>

        <label for="topic">Topic</label>
        <select id="topic" name="topic" required>
          <option value="">Select a topic</option>
          <option value="Inquiry">Inquiry</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Publication">Publication</option>
          <option value="Speaking invitation">Speaking Invitation</option>
          <option value="Media or writing">Media or Writing</option>
          <option value="Other">Other</option>
        </select>

        <label for="message">Question</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
</div>
