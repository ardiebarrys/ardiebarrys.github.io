# Website maintenance

## Add or edit a paper

Edit `_data/papers.yml`; it drives Publications, the CV and homepage. Use the existing `project` value (`framework`, `thesis` or `other`) for topic filters. The five interactive study pages set `paper_doi` to the matching record. `_plugins/research_metadata.rb` emits citation metadata and ScholarlyArticle JSON-LD from that record.

## Publish and check

Push to `main`, then open **Actions → Deploy site**. Each build checks internal links, fragment targets, image/font assets and research metadata before publishing. The verified build is retained as `website-build` for 14 days. After publishing, the workflow waits for the exact source commit in `/deployment.json` and checks live entry points. External DOI and third-party service availability are not deployment gates.

## Roll back

Open **Actions → Deploy site → Run workflow**, keep the workflow branch `main`, and enter a known-good source commit in **revision**. The selected revision is rebuilt and deployed. This restores the live site without rewriting Git history. Check the live verification step and `/deployment.json`.

A later push to `main` deploys main again. To make rollback permanent, use `git revert <problem-commit>` on main and push; revert newest commits first if multiple changes are involved. Do not force-push or reset shared history.

## Viewer conventions

Shared controls live in `assets/js/research-viewer-tools.js` and `assets/css/research-viewer.css`. Each scene supplies an adapter for state, stage caption and a synchronous render for PNG export. State links use `#view=` with versioned JSON, and restore paused. UPR and NRF2 keep molecular mechanisms within their own modules. The three earlier diagrams share the same control shell and stage navigation; they retain their existing diagram geometry.

UPR loads on request; embedded viewers receive parent viewport visibility. Auto detail reduces pixel cost on mobile and low-memory devices; UPR also reduces geometry on those devices and falls back from high detail after sustained slow drawing. Respect reduced motion. PNG export captures the current scene, visible labels and stage caption.

Before publishing viewer edits, check desktop and mobile: open, play/pause, previous/next, scenarios, scrub, deep link, PNG download, fullscreen and keyboard focus. Test WebGL and fallback where available. Frame rate depends on device and browser; do not claim a fixed performance rate without measuring it.
