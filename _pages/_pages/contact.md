---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 6
---

<style>
  .contact-panel {
    max-width: 760px;
    margin-top: 1.5rem;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(183, 0, 183, 0.22);
    background: linear-gradient(135deg, rgba(183, 0, 183, 0.08), rgba(183, 0, 183, 0.02));
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
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

<div class="contact-panel">
  <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
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
