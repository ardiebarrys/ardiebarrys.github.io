---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 6
---

<style>
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: start;
    max-width: 780px;
    margin-top: 1.5rem;
  }

  .contact-panel,
  .contact-card {
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(183, 0, 183, 0.22);
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.02));
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  }

  .contact-card h2,
  .contact-panel h2 {
    margin: 0 0 0.8rem;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .contact-address {
    margin-bottom: 1rem;
    line-height: 1.55;
  }

  .contact-map {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #dddddd;
    background: #ffffff;
  }

  .contact-map iframe {
    display: block;
    width: 100%;
    height: 360px;
    border: 0;
  }

  .response-note {
    margin: -0.25rem 0 1rem;
    color: #555555;
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .contact-form {
    display: grid;
    gap: 1rem;
  }

  .contact-field label {
    display: block;
    margin-bottom: 0.35rem;
    font-weight: 700;
  }

  .contact-field input,
  .contact-field select,
  .contact-field textarea {
    width: 100%;
    padding: 0.75rem 0.85rem;
    border: 1px solid #cccccc;
    border-radius: 8px;
    background: #ffffff;
    color: #111111;
    font: inherit;
    box-sizing: border-box;
  }

  .contact-field textarea {
    min-height: 160px;
    resize: vertical;
  }

  .contact-field input:focus,
  .contact-field select:focus,
  .contact-field textarea:focus {
    outline: none;
    border-color: var(--global-theme-color);
    box-shadow: 0 0 0 3px rgba(183, 0, 183, 0.12);
  }

  .contact-submit {
    width: fit-content;
    padding: 0.7rem 1.1rem;
    border: 0;
    border-radius: 8px;
    background: var(--global-theme-color);
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
  }

  .contact-submit:hover {
    opacity: 0.88;
  }
</style>

<div class="contact-layout">
  <div class="contact-card">
    <h2>Address</h2>

    <div class="contact-address">
      <strong>Department of Pharmaceutical Life Sciences</strong><br>
      Faculty of Pharmacy<br>
      University of Malaya<br>
      50603 Kuala Lumpur, Malaysia
    </div>

    <div class="contact-map">
      <iframe
        src="https://www.google.com/maps?q=Faculty%20of%20Pharmacy%2C%20University%20of%20Malaya%2C%2050603%20Kuala%20Lumpur%2C%20Malaysia&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <div class="contact-panel">
    <h2>Send a Message</h2>

    <p class="response-note">
      I usually reply within 7 business days.
    </p>

    <form class="contact-form" action="https://formspree.io/f/mjgdnjlb" method="POST">
      <div class="contact-field">
        <label for="email">Your Email</label>
        <input id="email" name="email" type="email" required>
      </div>

      <div class="contact-field">
        <label for="topic">Topic</label>
        <select id="topic" name="topic" required>
          <option value="">Select a topic</option>
          <option value="Inquiry">Inquiry</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Publication">Publication</option>
          <option value="Speaking Invitation">Speaking Invitation</option>
          <option value="Media or Writing">Media or Writing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="contact-field">
        <label for="message">Question</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button class="contact-submit" type="submit">Send Message</button>
    </form>
  </div>
</div>
