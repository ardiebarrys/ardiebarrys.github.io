module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  // Standalone 3D iframe HTML contains classes used by the shared viewer stylesheet.
  skippedContentGlobs: [],
  safelist: [
    /^primary-/, /^dropdown-/, /^mobile-nav-/, /^hero-/, /^painted-/, /^cell-orb/,
    /^reveal-/, /^reading-progress/, /^inline-icon/, /^nav-open$/, /^skip-link$/,
    /^research-/, /^home-night$/, /^statement-line$/,
    "collapse",
    "collapsing",
    "show",
    "dropdown-menu",
    "dropdown-item",
    "table",
    "table-dark",
    "table-hover",
    "table-responsive",
    "af-tooltip",
    "af-popover",
    "font-weight-bold",
    "font-weight-medium",
    "font-weight-lighter",
    // medium-zoom injects these at runtime, so they never appear in the static
    // HTML PurgeCSS scans; without them the zoom overlay's z-index rule is purged
    // and page chrome (scroll-progress bar, ToC) bleeds through a zoomed image.
    "medium-zoom-overlay",
    "medium-zoom-image--opened",
  ],
};
