---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 8
description: Get in touch about research, collaborations or roles
---

<style>
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
  }

  .contact-top-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
    gap: 1.5rem;
    width: 100%;
    align-items: stretch;
  }

  .contact-top-grid .contact-card {
    height: 100%;
  }

  .contact-card {
    width: 100%;
    padding: 1.6rem 1.8rem;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--surface);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
    box-sizing: border-box;
  }

  .contact-card h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.45rem;
    font-weight: 700;
  }

  .contact-address {
    margin-bottom: 1.2rem;
    font-size: 1.02rem;
    line-height: 1.6;
  }

  .contact-map {
    width: 100%;
    height: 360px;
    border: 0;
    border-radius: 10px;
  }

  .contact-note {
    margin-bottom: 0.4rem;
    color: var(--muted);
  }

  .support-card {
    display: flex;
    flex-direction: column;
  }

  .support-card p {
    margin-bottom: 1rem;
    color: var(--text);
    font-size: 1rem;
    line-height: 1.6;
  }

  .coffee-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: fit-content;
    min-height: 46px;
    margin: 0.2rem 0 1.1rem;
    padding: 0.7rem 1.15rem;
    border: 1px solid rgba(148, 163, 184, 0.6);
    border-radius: 12px;
    background: var(--button);
    color: #ffffff !important;
    font-weight: 600;
    text-decoration: none !important;
  }

  .coffee-button:hover {
    background: #3b82f6;
  }

  .coffee-icon {
    font-size: 1.05rem;
    line-height: 1;
  }

  .support-note {
    margin-top: auto;
    padding-top: 0.9rem;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.55;
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
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface);
    color: var(--text);
    font: inherit;
    box-sizing: border-box;
  }

  .contact-form textarea {
    min-height: 190px;
    resize: vertical;
  }

  .contact-form ::placeholder {
    color: #9ca5b4;
  }

  .contact-form button {
    margin-top: 1.2rem;
    padding: 0.75rem 1.2rem;
    border: 0;
    border-radius: 8px;
    background: var(--button);
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
  }

  .contact-form button:hover {
    background: var(--button-hover);
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
          Universiti Malaya<br>
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
        <h2>Support independent work</h2>

        <p>Beyond my thesis, I write independent reviews, commentary and open resources on toxicology and reproductive health. Your support keeps them going.</p>

        <a class="coffee-button" href="https://buymeacoffee.com/ardiebarrysailis" target="_blank" rel="noopener noreferrer">
          <span class="coffee-icon" aria-hidden="true">&#9749;</span>
          <span>Buy Me a Coffee</span>
        </a>

        <div class="support-note">Voluntary and personal, not institutional fundraising. Contributions never influence findings, peer review or institutional decisions.</div>
      </section>
    </div>

    <section class="contact-card">
      <h2>Send a message</h2>

      <p class="contact-note">Replies within seven business days.</p>

      <form class="contact-form" action="https://formspree.io/f/mjgdnjlb" method="POST">
        <label for="email">Your email</label>
        <input id="email" type="email" name="email" required>

        <label for="topic">Topic</label>
        <select id="topic" name="topic" required>
          <option value="">Select a topic</option>
          <option value="Inquiry">Inquiry</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Publication">Publication</option>
          <option value="Speaking invitation">Speaking invitation</option>
          <option value="Media or writing">Media or writing</option>
          <option value="Other">Other</option>
        </select>

        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send message</button>
      </form>
    </section>
  </div>
</div>
