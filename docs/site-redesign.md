# Site-wide editorial redesign

The visual system follows the flat charcoal palette, Manrope typography, consistent
spacing and floating navigation in elayadesign's design guidance:
https://github.com/elayadesign/ai-design-skills

## Scope

- Shared typography, surfaces, responsive layout, navigation, breadcrumbs and footer.
- Homepage research introduction, portrait, publication count and research tracks.
- Publication search, research-track/year filters, result count and empty/reset state.
- Direct entry points to doctoral research and the five cellular circuit frameworks.
- Consistent biography, talks, CV, contact and research article presentation.
- Contact validation, submission progress, recoverable errors and direct email.
- Helpful 404 without automatic redirection.

The improved UPR anatomy, rendering and controls remain intact. Scientific diagrams
retain their meaningful colors. The underlying research, evidence grades, publication
data, simulations and Deep Numbers game behavior are preserved. CV print styles
remain separate from the screen design.

## Implementation

`_sass/_site-design.scss` is included through the existing main Sass entry point.
`assets/js/site-design.js` progressively enhances native navigation and publication
records. With JavaScript disabled, navigation links, abstracts, research pages and
the contact form remain available. The Manrope variable font is self-hosted with
its OFL license. There are no added runtime packages.

## Verification

Run `node bin/check-site.cjs` and `node bin/check-upr.cjs`. CI also parses the shared
scripts, builds Jekyll, runs PurgeCSS and checks internal destinations with
`node bin/check-links.cjs`. PR builds publish a temporary `site-preview` artifact
for review; the existing main-branch deployment policy is unchanged.

Browser QA covers desktop and 390-pixel layouts, full menu focus/Escape behavior,
publication search/filter/reset/empty states, contact validation without sending,
CV screen/print layout, research controls and the unchanged UPR 3D views.
