# 3D depth layer: change log and rollback

This folder is excluded from the Jekyll build (`exclude: docs/` in `_config.yml`), so this note is not published.

## What was added

| File | Type | Purpose |
| --- | --- | --- |
| `assets/js/lib/three-r170.module.min.js` | new | Three.js r170 (MIT, license header kept). Self-hosted, loaded lazily only when a 3D view is needed. Skipped by Terser because of the `.min.js` suffix. Not in a folder named `vendor`, which `_config.yml` excludes from the build. |
| `assets/js/depth3d-home-cell.js` | new | Homepage accent: translucent adherent cell with nucleus, stress fibers, perinuclear actin cap, focal adhesions and slow signal particles toward the nucleus. Desktop only (min-width 1100 px, fine pointer). Sizes itself to the free strip right of the intro text and hides if there is not enough room. Decorative (`aria-hidden`). |
| `assets/js/depth3d-yap-circuit.js` | new | Optional 3D view of the six-stage circuit, inserted above the existing stage buttons on the YAP/TAZ page. Selecting a stage in 3D clicks the existing button, so the existing detail panel stays the source of truth. Drag, keyboard, zoom, reset and show/hide controls. Open by default at 720 px and wider, collapsed on phones. |
| `assets/js/depth3d-circuits.js` | new | Shared 3D engine with four configurations: the homepage highlighted study (YAP/TAZ six stages above Figure 1, selection highlights the matching Figure 1 card), NRF2–KEAP1 (closed control loop: sensor, controller, amplifier, outcome, then resolution and redox restoration back to the sensor, with redox stress as input), CYP1A1 (ligand, AhR, delayed induction, metabolism, then negative feedback back to the ligand pool with an inhibition bar, plus the AhR branch to tissue output) and condensates (input, threshold, assembly/exchange, persistence, reset, transcription; the four filter cards select stages 1 to 4, and reset loops back to the threshold). Same controls and safeguards as the YAP/TAZ view. All circuit views (including YAP/TAZ) sit on a lit 3D grid floor and back wall: lines are white where the key light falls and gray in shadow. |
| `_includes/depth3d/circuits.liquid` | new | Link and script tags for the three framework pages. |
| `assets/js/depth3d-thought-cell.js` | new | "Thought experiment: follow one cell" on the YAP/TAZ page as a realistic 3D cell: translucent physically based membrane with ruffled lamellipodium and filopodia, textured nucleus with pore complexes, mitochondria, Golgi, centrosome and microtubules, vesicles, ventral stress fibers, perinuclear actin cap and focal adhesions, on an ECM-coated hydrogel over the lit grid. Follows the existing step controls through `data-phase`: force stretches the substrate (yellow arrows), ECM fibers straighten, adhesions enlarge, the actin cap tenses and the nucleus flattens; cyan YAP/TAZ particles shuttle into the nucleus, which glows cyan; Hippo-retained particles dim in step 2; residual flattening and glow remain after withdrawal as a conceptual memory cue. The original SVG stays in the page as fallback and behind a 2D/3D toggle. |
| `_includes/depth3d/thought-cell.liquid` | new | Script tag, included from `_includes/depth3d/yap.liquid`. |
| `assets/js/depth3d-cards.js` | new | Small pointer tilt (max 2.4 degrees) and lift on homepage explore cards, framework cards and project cards. Mouse only. |
| `assets/css/depth3d.css` | new | Styles for the three features above. Cards keep no transform at rest. |
| `_includes/depth3d/*.liquid` | new | Link and script tags for each page. |
| `_pages/about.md` | 1 line added | `{% include depth3d/home.liquid %}` |
| `_pages/yap-taz-signal-resolution.md` | 1 line added | `{% include depth3d/yap.liquid %}` |
| `_pages/nrf2-keap1-redoxostat.md`, `_pages/cyp1a1-metabolic-feedback.md`, `_pages/transcriptional-condensates-kinetic-filters.md` | 1 line added each | `{% include depth3d/circuits.liquid %}` |
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

- **NRF2–KEAP1, CYP1A1 and condensate pages:** added on request (October 2026). Loops are drawn as closed loops, matching each page's existing figure, so no cyclic mechanism is shown as a one-way pathway.
- **Exposure-to-response 3D:** would need new scientific content and causal framing that the site does not currently state. Deferred, per the brief.
- **Publication list:** no tilt or parallax, per the brief.

## Rollback

Remove everything:

```
git revert <merge commit>
```

Or remove one feature by deleting its include line:

- Homepage cell and homepage card tilt: the last line of `_pages/about.md`
- YAP/TAZ 3D view: the last line of `_pages/yap-taz-signal-resolution.md` (also removes the 3D thought-experiment cell)
- Thought-experiment 3D cell only: the `thought-cell.liquid` line in `_includes/depth3d/yap.liquid`
- Framework 3D views: the last line of each of the three framework pages
- Highlighted-study 3D view: the `depth3d-circuits.js` line in `_includes/depth3d/home.liquid`
- Framework card tilt: the last line of `_pages/cellular-signaling-circuits.md`
- Project card tilt: the last line of `_layouts/projects.html`

The new asset files are inert when nothing includes them.
