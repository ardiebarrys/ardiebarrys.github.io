(function () {
  "use strict";
  var root = document.getElementById("scf-overview");
  if (!root || root.dataset.ready === "true") return;
  root.dataset.ready = "true";

  var filters = Array.prototype.slice.call(root.querySelectorAll(".scf-filter"));
  var cards = Array.prototype.slice.call(root.querySelectorAll(".scf-paper-card"));
  var status = root.querySelector("#scf-filter-status");

  var descriptions = {
    all: "Showing all four research frameworks.",
    biochemical: "Showing biochemical feedback frameworks: NRF2–KEAP1 and CYP1A1.",
    mechanical: "Showing the mechanochemical framework: YAP/TAZ.",
    temporal: "Showing the temporal decoding framework: transcriptional condensates."
  };

  function applyFilter(key) {
    var known = Object.prototype.hasOwnProperty.call(descriptions, key);
    if (!known) key = "all";

    filters.forEach(function (button) {
      var active = button.getAttribute("data-filter") === key;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    cards.forEach(function (card) {
      var visible = key === "all" || card.getAttribute("data-category") === key;
      card.classList.toggle("is-filtered-out", !visible);
      card.setAttribute("aria-hidden", visible ? "false" : "true");
    });

    status.textContent = descriptions[key];
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-filter"));
    });
  });

  applyFilter("all");
})();