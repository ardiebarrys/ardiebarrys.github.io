<style>
  body {
    background: #ffffff !important;
    color: #111111 !important;
    font-family: Georgia, "Times New Roman", Times, serif !important;
  }

  .post,
  .page,
  .container,
  main {
    background: #ffffff !important;
    color: #111111 !important;
  }

  .pub-list,
  .publications {
    color: #111111 !important;
  }

  .pub-item,
  .publication {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid #cccccc;
    color: #111111 !important;
  }

  .pub-text {
    flex: 1;
    color: #111111 !important;
  }

  .pub-title,
  .publication h5,
  .publication h4,
  .publication p {
    color: #111111 !important;
  }

  .pub-title,
  .publication h5 {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.35rem;
  }

  .pub-authors,
  .pub-journal,
  .pub-doi {
    color: #111111 !important;
    margin-bottom: 0.4rem;
  }

  .pub-journal {
    font-style: italic;
  }

  .pub-doi a,
  .publication a {
    color: #2447a8 !important;
  }

  .pub-metrics {
    flex: 0 0 190px;
    width: 190px;
    min-height: 170px;
    background: #ffffff !important;
    border: 1px solid #dddddd;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
  }

  .pub-metrics iframe {
    background: #ffffff !important;
  }

  @media (max-width: 768px) {
    .pub-item,
    .publication {
      flex-direction: column;
    }

    .pub-metrics {
      width: 100%;
      max-width: 220px;
    }
  }
</style>
