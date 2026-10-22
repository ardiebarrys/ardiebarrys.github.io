(function () {
  "use strict";
  var root = document.getElementById("scf-overview");
  if (!root || root.dataset.ready === "true") return;
  root.dataset.ready = "true";

  var filters = Array.prototype.slice.call(root.querySelectorAll(".scf-filter"));
  var cards = Array.prototype.slice.call(root.querySelectorAll(".scf-paper-card"));
  var status = root.querySelector("#scf-filter-status");

  var descriptions = {
    all: "Showing all five frameworks.",
    biochemical: "Showing biochemical feedback: NRF2–KEAP1 and CYP1A1.",
    mechanical: "Showing mechanical signaling: YAP/TAZ.",
    temporal: "Showing temporal decoding: transcriptional condensates.",
    proteostasis: "Showing proteostasis: the unfolded protein response in immunotoxicity."
  };

  function applyFilter(key, announce) {
    if (!Object.prototype.hasOwnProperty.call(descriptions, key)) key = "all";

    filters.forEach(function (button) {
      var active = button.getAttribute("data-filter") === key;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    cards.forEach(function (card) {
      var visible = key === "all" || card.getAttribute("data-category") === key;
      card.hidden = !visible;
    });

    if (status && announce) status.textContent = descriptions[key];
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-filter"), true);
    });
  });

  applyFilter("all", false);
})();
