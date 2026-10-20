/*
 * Subtle depth for existing cards: a small pointer tilt and lift on desktop,
 * a lift on keyboard focus, nothing on touch or with reduced motion.
 * Isolated enhancement. Remove the include line on each page to roll back.
 */
(function () {
  "use strict";

  var SELECTOR = ".explore-card, .scf-paper-card, .project-card";
  var MAX_TILT = 2.4; // degrees, small enough to keep text undistorted

  var cards = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
  if (!cards.length) return;

  cards.forEach(function (card) { card.classList.add("depth3d-card"); });

  if (!window.matchMedia) return;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function reset(card) {
    card.style.removeProperty("--d3-rx");
    card.style.removeProperty("--d3-ry");
    card.classList.remove("is-tilting");
  }

  cards.forEach(function (card) {
    var frame = 0;
    var last = null;

    function apply() {
      frame = 0;
      if (!last) return;
      var rect = card.getBoundingClientRect();
      var px = (last.clientX - rect.left) / rect.width - 0.5;
      var py = (last.clientY - rect.top) / rect.height - 0.5;
      // Tall cards (an opened project) tilt less so long text stays flat.
      var scale = Math.min(1, 260 / Math.max(rect.height, 1));
      card.style.setProperty("--d3-rx", (-py * MAX_TILT * scale).toFixed(2) + "deg");
      card.style.setProperty("--d3-ry", (px * MAX_TILT * scale).toFixed(2) + "deg");
    }

    card.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse" || !finePointer.matches || reduceMotion.matches) return;
      card.classList.add("is-tilting");
      last = e;
      if (!frame) frame = requestAnimationFrame(apply);
    });
    card.addEventListener("pointerleave", function () {
      last = null;
      reset(card);
    });
  });
})();
