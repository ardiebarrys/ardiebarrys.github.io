# UPR atlas and research scene

The homepage now introduces the UPR with a cell cutaway and five focused topics.
The research page uses the same anatomy and keeps its separate ER close-up,
phase controls, evidence explorer and illustrative recovery model.

## Files

- `_includes/depth3d/upr-explorer.html`: semantic guide, accessible topic controls,
  persistent anatomy key and inline SVG fallback.
- `assets/js/upr-cell-anatomy.js`: shared procedural anatomy. An open membrane
  exposes the nucleus, folded ER sheets, ribosomes and mitochondrial cristae.
  Materials use a restrained palette. These are illustrative structures and scales.
- `assets/js/depth3d-upr-figure.js`: lazy enhancement, topic selection, keyboard,
  rotation, zoom, responsive fit, offscreen suspension and context recovery.
- `assets/css/upr-figure.css`: scoped responsive layout, including narrow containers.
- `assets/js/depth3d-upr-cell.js`: detailed ER scene and phase-driven qualitative cues.
- `_pages/upr-proteotoxic-stress-resolution.md` and `assets/css/upr-experience.css`:
  explanations, selected states and alternative recovery/persistent-stress scenarios.

## Interaction contract

The homepage always includes the diagram and overview in HTML. Topic explanations
work before Three.js loads and remain usable if its import or renderer fails.
Only a successful render hides the diagram and reveals the 3D controls.
Normal wheel and vertical touch scrolling are preserved. Homepage arrow keys rotate,
plus/minus zoom and Home resets. Rotation starts only when requested. The detail
scene provides pause, reset, keyboard rotation and a fit that adapts to aspect ratio.
Reduced-motion preferences stop automatic motion. Rendering stops out of view or
in a hidden tab; context loss restores the fallback.

The guide describes context-dependent outputs and identifies recovery and persistent
stress as alternatives. The study-design wording on the homepage does not imply that
comparing exposure groups isolates aerosol causality.

## Validation

Run from the repository root with Node 22 or later:

```text
node --check assets/js/depth3d-upr-figure.js
node --check assets/js/depth3d-upr-cell.js
node --check assets/js/upr-cell-anatomy.js
node bin/check-upr.cjs
```

The behavior checks cover all 33 research-page selection controls, five homepage
topics, controlled-region IDs, recovery direction in the illustrative model,
reduced-motion behavior, renderer-load failure, real Three.js geometry bounds,
finite coordinates and disposal on both geometry budgets. They use a small DOM
fixture, not a browser accessibility audit. The existing PR workflow also runs the
production Jekyll build and PurgeCSS; only main-branch runs deploy.

Browser QA should cover desktop and 390-pixel layouts, no horizontal overflow,
all topic/phase/view controls, keyboard focus, reset, pause/resume, normal scrolling,
missing renderer, no-script fallback and hidden-tab return.

## Rollback

Revert the atlas change commit as a unit. Its shared anatomy module is used by both
UPR views. Other framework scenes are independent. The older `3d-depth-layer.md`
records the original implementation; this document supersedes its UPR descriptions.
