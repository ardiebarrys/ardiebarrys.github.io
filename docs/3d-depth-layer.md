# 3D depth layer: change log and rollback

This folder is excluded from the Jekyll build (`exclude: docs/` in `_config.yml`), so this note is not published.

## What was added

| File | Type | Purpose |
| --- | --- | --- |
| `assets/js/lib/three-r170.module.min.js` | new | Three.js r170 (MIT, license header kept). Self-hosted, loaded lazily only when a 3D view is needed. Skipped by Terser because of the `.min.js` suffix. Not in a folder named `vendor`, which `_config.yml` excludes from the build. |
| `assets/js/depth3d-home-cell.js` | new | Homepage accent: translucent adherent cell with nucleus, stress fibers, perinuclear actin cap, focal adhesions and slow signal particles toward the nucleus. Desktop only (min-width 1100 px, fine pointer). Sizes itself to the free strip right of the intro text and hides if there is not enough room. Decorative (`aria-hidden`). |
| `assets/js/depth3d-yap-circuit.js` | new | Optional 3D view of the six-stage circuit, inserted above the existing stage buttons on the YAP/TAZ page. Selecting a stage in 3D clicks the existing button, so the existing detail panel stays the source of truth. Drag, keyboard, zoom, reset and show/hide controls. Open by default at 720 px and wider, collapsed on phones. |
| `assets/js/depth3d-cards.js` | new | Small pointer tilt (max 2.4 degrees) and lift on homepage explore cards, framework cards and project cards. Mouse only. |
| `assets/css/depth3d.css` | new | Styles for the three features above. Cards keep no transform at rest. |
| `_includes/depth3d/*.liquid` | new | Link and script tags for each page. |
| `_pages/about.md` | 1 line added | `{% include depth3d/home.liquid %}` |
| `_pages/yap-taz-signal-resolution.md` | 1 line added | `{% include depth3d/yap.liquid %}` |
| `_pages/cellular-signaling-circuits.md` | 1 line added | `{% include depth3d/cards.liquid %}` |
| `_layouts/projects.html` | 1 line added | `{% include depth3d/cards.liquid %}` |

No existing text, styles, scripts, URLs, navigation, publication data or build settings were changed. No new build dependencies.

## Safeguards

- WebGL missing, Three.js failing to load or a narrow screen: nothing is injected, and the page is exactly the original.
- `prefers-reduced-motion`: no drift, particles or tilt. The YAP/TAZ view renders still frames and changes only on input.
- Rendering pauses when a scene is off screen or the tab is hidden. Pixel ratio is capped (2 for the cell, 1.75 for the circuit).
- Zoom on the YAP/TAZ view needs pinch or Ctrl/Cmd + wheel, so page scrolling is never captured. Touch drags pass vertical scrolling through.
- The 3D circuit carries a visible "Conceptual 3D schematic" tag and a note that shapes are illustrative, not molecular structures or measured dynamics. Molecular relationships drawn (MST1/2 to LATS1/2 to YAP/TAZ phosphorylation, YAP/TAZ with TEAD on DNA, nuclear pores, export, turnover, the return loop to baseline) follow the existing page text and figure.

## Evaluated and not implemented

- **NRF2–KEAP1, CYP1A1 and condensate pages:** each already has a bespoke interactive 2D feedback diagram. A 3D version would add little and risks blurring their cyclic feedback logic. Deferred.
- **Exposure-to-response 3D:** would need new scientific content and causal framing that the site does not currently state. Deferred, per the brief.
- **Publication list:** no tilt or parallax, per the brief.

## Rollback

Remove everything:

```
git revert <merge commit>
```

Or remove one feature by deleting its include line:

- Homepage cell and homepage card tilt: the last line of `_pages/about.md`
- YAP/TAZ 3D view: the last line of `_pages/yap-taz-signal-resolution.md`
- Framework card tilt: the last line of `_pages/cellular-signaling-circuits.md`
- Project card tilt: the last line of `_layouts/projects.html`

The new asset files are inert when nothing includes them.
