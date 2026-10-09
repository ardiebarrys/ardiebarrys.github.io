(function () {
  "use strict";
  var root = document.getElementById("cyp1-feedback-lab");
  if (!root || root.dataset.ready === "true") return;
  root.dataset.ready = "true";
  var $ = function (selector) { return root.querySelector(selector); };
  var $$ = function (selector) { return Array.prototype.slice.call(root.querySelectorAll(selector)); };
  var defaults = { input: 70, susceptibility: 90, induction: 35, capacity: 70, continuous: false, profile: "ficz" };
  var profiles = {
    ficz: { title: "FICZ-like labile profile", copy: "Susceptible to CYP1-mediated metabolism", symbol: "F", susceptibility: 90, induction: 35, capacity: 70 },
    dietary: { title: "Dietary indole profile", copy: "Intermediate, ligand-dependent susceptibility", symbol: "D", susceptibility: 50, induction: 45, capacity: 70 },
    persistent: { title: "Persistent ligand profile", copy: "Poorly metabolized; feedback may not clear the ligand", symbol: "P", susceptibility: 8, induction: 50, capacity: 70 }
  };
  var state = Object.assign({}, defaults);
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function setText(selector, value) { var el = $(selector); if (el) el.textContent = value; }
  function pathFrom(values, top, bottom, left, right) {
    var result = [];
    values.forEach(function (v, i) {
      var x = left + i / Math.max(1, values.length - 1) * (right - left);
      var y = bottom - clamp(v, 0, 1) * (bottom - top);
      result.push((i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1));
    });
    return result.join(" ");
  }
  function simulate(s) {
    var n = 80, ligand = s.input / 100, ah = 0, enzyme = 0.04;
    var ligands = [], ahs = [], enzymes = [];
    var delay = Math.round(4 + (s.induction / 100) * 18);
    var susc = s.susceptibility / 100, capacity = s.capacity / 100;
    for (var i = 0; i < n; i += 1) {
      var delayedAh = i >= delay ? ahs[i - delay] : 0;
      var enzymeTarget = clamp(delayedAh * capacity * 1.15, 0, 1);
      enzyme += (enzymeTarget - enzyme) * (enzymeTarget > enzyme ? 0.18 : 0.045);
      var rawAh = clamp(ligand * 1.12, 0, 1);
      ah += (rawAh - ah) * 0.34;
      ligands.push(ligand);
      ahs.push(ah);
      enzymes.push(enzyme);
      var clear = ligand * susc * enzyme * 0.16;
      var passive = ligand * 0.012;
      var replenishment = s.continuous ? (s.input / 100) * 0.035 : 0;
      ligand = clamp(ligand + replenishment - clear - passive, 0, 1);
    }
    return { ligand: ligands, ah: ahs, enzyme: enzymes };
  }
  function applyProfile(key, preserveInput) {
    var p = profiles[key];
    if (!p) return;
    state.profile = key;
    state.susceptibility = p.susceptibility;
    state.induction = p.induction;
    state.capacity = p.capacity;
    $("#cyp1-susceptibility").value = p.susceptibility;
    $("#cyp1-induction").value = p.induction;
    $("#cyp1-capacity").value = p.capacity;
    if (!preserveInput) state.input = defaults.input;
    $("#cyp1-input").value = state.input;
    $$(".cyp1-profile").forEach(function (b) { b.classList.toggle("is-active", b.dataset.ligand === key); });
    $$(".cyp1-ligand-card").forEach(function (b) { b.classList.toggle("is-active", b.dataset.compare === key); });
    setText("#cyp1-ligand-symbol", p.symbol);
    setText("#cyp1-ligand-title", p.title);
    setText("#cyp1-ligand-copy", p.copy);
    showComparison(key);
    renderSimulation();
  }
  function renderSimulation() {
    state.input = +$("#cyp1-input").value;
    state.susceptibility = +$("#cyp1-susceptibility").value;
    state.induction = +$("#cyp1-induction").value;
    state.capacity = +$("#cyp1-capacity").value;
    state.continuous = $("#cyp1-continuous").checked;
    setText("#cyp1-input-value", state.input + "%");
    setText("#cyp1-susceptibility-value", state.susceptibility + "%");
    setText("#cyp1-induction-value", state.induction + "%");
    setText("#cyp1-capacity-value", state.capacity + "%");
    var d = simulate(state);
    $("#cyp1-ligand-trace").setAttribute("d", pathFrom(d.ligand, 30, 238, 52, 580));
    $("#cyp1-ahr-trace").setAttribute("d", pathFrom(d.ah, 30, 238, 52, 580));
    $("#cyp1-enzyme-trace").setAttribute("d", pathFrom(d.enzyme, 30, 238, 52, 580));
    var peak = Math.round(Math.max.apply(null, d.ah) * 100);
    var residual = Math.round(d.ligand[d.ligand.length - 1] * 100);
    var persistent = Math.round(d.ah.filter(function (x) { return x >= 0.2; }).length / d.ah.length * 100);
    setText("#cyp1-peak", peak + "%");
    setText("#cyp1-residual", residual + "%");
    setText("#cyp1-persistence", persistent + "%");
    var status = $(".cyp1-state-row");
    var fails = residual >= 30 || persistent >= 70 || state.continuous;
    status.classList.toggle("is-persistent", fails);
    setText("#cyp1-state", fails ? "Persistent signaling pattern" : "Feedback-favored resolution");
    if (state.continuous) {
      setText("#cyp1-insight", "Ongoing ligand input replenishes the pool while CYP1A1 removes susceptible ligand; net signal duration reflects the balance of these rates.");
    } else if (state.susceptibility < 20) {
      setText("#cyp1-insight", "Low metabolic susceptibility limits this feedback route even when CYP1A1 activity rises. Ligand persistence can therefore maintain AhR drive.");
    } else if (state.induction > 65) {
      setText("#cyp1-insight", "A longer induction delay leaves an early window before enzyme activity builds, extending the ligand signal in this qualitative model.");
    } else if (fails) {
      setText("#cyp1-insight", "Residual ligand and prolonged AhR output suggest weaker resolution. Compare susceptibility, induction delay and metabolic capacity independently.");
    } else {
      setText("#cyp1-insight", "CYP1A1 builds after AhR activation; its later metabolism of susceptible ligand lowers ligand availability and contributes to negative feedback.");
    }
  }
  $$("#cyp1-simulator input[type=range]").forEach(function (input) {
    input.addEventListener("input", renderSimulation);
  });
  $("#cyp1-continuous").addEventListener("change", renderSimulation);
  $$(".cyp1-profile").forEach(function (b) {
    b.addEventListener("click", function () { applyProfile(b.dataset.ligand, true); });
  });
  $("#cyp1-reset").addEventListener("click", function () {
    state = Object.assign({}, defaults);
    $("#cyp1-input").value = defaults.input;
    $("#cyp1-continuous").checked = defaults.continuous;
    applyProfile(defaults.profile, true);
    renderSimulation();
  });

  var components = {
    ligand: ["L", "INPUT MODULE", "Ligand identity shapes the signal", "AhR responds to environmental chemicals, dietary compounds, microbial metabolites and endogenous ligands. Ligands differ in receptor engagement and susceptibility to metabolic clearance.", "How quickly does the available ligand pool change after exposure?"],
    ahr: ["A", "SENSOR MODULE", "AhR integrates ligand exposure", "Ligand-bound AhR translocates to the nucleus, partners with ARNT and induces responsive transcription, including CYP1A1. Receptor output depends on ligand and cellular context.", "Does receptor output fall when available ligand falls?"],
    induction: ["C", "DELAYED EFFECTOR", "CYP1A1 expression follows AhR activation", "CYP1A1 transcription, protein production and enzymatic activity take time to build after AhR activation. This delay creates a window in which signaling can precede metabolic feedback.", "How does the induction lag compare with ligand clearance?"],
    metabolism: ["M", "METABOLIC EFFECTOR", "Enzyme activity changes ligand availability", "CYP1A1 oxidizes susceptible substrates. The consequences vary: metabolism may reduce the availability of an AhR ligand, while some xenobiotic metabolism can also produce reactive metabolites.", "Is the ligand a substrate for the induced enzyme?"],
    feedback: ["↻", "NEGATIVE FEEDBACK", "Ligand loss can reduce receptor drive", "When CYP1A1 removes a susceptible AhR ligand, receptor activation can decline, reducing transcriptional drive for CYP1A1 and closing a negative-feedback loop.", "Does ligand depletion precede a fall in AhR-dependent output?"],
    outcome: ["I", "TISSUE OUTPUT", "Signal duration shapes local biology", "AhR regulates barrier programs and immune differentiation. CYP1A1 is a metabolic regulator, not an immune effector itself; outcomes depend on ligand, tissue, timing and other pathways.", "Are signaling kinetics linked to a functional immune or barrier readout?"]
  };
  function showComponent(key) {
    var c = components[key]; if (!c) return;
    $$(".cyp1-component").forEach(function (b) { b.classList.toggle("is-active", b.dataset.component === key); });
    setText("#cyp1-component-icon", c[0]); setText("#cyp1-component-label", c[1]);
    setText("#cyp1-component-title", c[2]); setText("#cyp1-component-copy", c[3]); setText("#cyp1-component-question", c[4]);
  }
  $$(".cyp1-component").forEach(function (b) { b.addEventListener("click", function () { showComponent(b.dataset.component); }); });

  var ligandCompare = {
    ficz: ["F", "FICZ · metabolism-engaged feedback", "AhR activation induces CYP1A1, and efficient metabolism of susceptible ligand can lower its availability and shorten the signaling window.", "Ligand decline followed by falling AhR output."],
    dietary: ["D", "Dietary and microbial indoles · variable feedback", "Dietary and microbiota-derived ligands differ in their affinity, source, stability and susceptibility to metabolism. Their effects depend on local production and clearance.", "Signal duration varies with ligand chemistry, replenishment and tissue context."],
    persistent: ["P", "Persistent ligand · feedback escape", "A ligand that resists CYP1-mediated metabolism may remain available after CYP1A1 induction, maintaining receptor drive despite an active feedback arm.", "Enzyme induction with limited ligand loss and sustained AhR output."]
  };
  function showComparison(key) {
    var d = ligandCompare[key]; if (!d) return;
    $$(".cyp1-ligand-card").forEach(function (b) { b.classList.toggle("is-active", b.dataset.compare === key); });
    setText("#cyp1-compare-glyph", d[0]); setText("#cyp1-compare-title", d[1]);
    setText("#cyp1-compare-copy", d[2]); setText("#cyp1-compare-signature", d[3]);
  }
  $$(".cyp1-ligand-card").forEach(function (b) {
    b.addEventListener("click", function () { applyProfile(b.dataset.compare, true); });
  });

  var failures = {
    persistent: ["FEEDBACK ESCAPE", "Ligand remains available after enzyme induction", "If a ligand is poorly metabolized, higher CYP1A1 activity may not reduce its availability quickly enough.", "Persistent ligand and sustained AhR-dependent transcription.", "Measure ligand disappearance, metabolite appearance, CYP1A1 activity and AhR output on the same time course.", "M38 32 L74 76"],
    induction: ["DELAYED FEEDBACK", "The metabolic response arrives after early signaling", "AhR signaling begins before induced CYP1A1 protein and activity fully build. A long lag can extend the early response window.", "AhR output rises before CYP1A1 activity; clearance begins later.", "Measure AhR nuclear dynamics, CYP1A1 protein/activity and ligand abundance at closely spaced time points.", "M144 32 L180 76"],
    capacity: ["CAPACITY LIMIT", "Clearance cannot keep pace with ligand input", "Low CYP1A1 activity or low substrate susceptibility can limit ligand removal despite receptor-driven induction.", "Ligand declines slowly while AhR output remains elevated.", "Measure catalytic activity and metabolite formation; include an independent measure of ligand exposure.", "M250 32 L286 76"],
    replenishment: ["INPUT OVERRUN", "Ligand replenishment offsets metabolic clearance", "Continued environmental exposure or endogenous production can replenish ligand while CYP1A1 removes it, preventing net depletion.", "AhR output persists while ligand input continues.", "Compare pulse-and-washout with continuous exposure at matched initial input.", "M356 32 L392 76"]
  };
  function showFailure(key) {
    var f = failures[key]; if (!f) return;
    $$(".cyp1-failure").forEach(function (b) { b.classList.toggle("is-active", b.dataset.failure === key); });
    setText("#cyp1-failure-label", f[0]); setText("#cyp1-failure-title", f[1]);
    setText("#cyp1-failure-copy", f[2]); setText("#cyp1-failure-signature", f[3]);
    setText("#cyp1-failure-test", f[4]); $("#cyp1-failure-mark").setAttribute("d", f[5]);
    $$(".cyp1-failure-node").forEach(function (node, i) {
      node.style.stroke = i === ({persistent:0,induction:1,capacity:2,replenishment:3})[key] ? "#fbbf24" : "rgba(147,197,253,.42)";
      node.style.fill = node.style.stroke === "#fbbf24" ? "rgba(180,120,20,.22)" : "#132d52";
    });
  }
  $$(".cyp1-failure").forEach(function (b) { b.addEventListener("click", function () { showFailure(b.dataset.failure); }); });

  var tissues = {
    gut: ["BARRIER IMMUNITY", "Gut: ligand availability supports mucosal defense", "CYP1A1-dependent ligand clearance can shape AhR signaling in intestinal tissue. Constitutive clearance of susceptible ligands can reduce IL-22 production and alter ILC3- and Th17-related responses.", "Ligand levels, CYP1A1 activity, AhR targets and IL-22-associated readouts."],
    skin: ["EPITHELIAL BARRIER", "Skin: local ligand metabolism influences AhR tone", "AhR signaling contributes to epithelial and immune homeostasis in skin. Excessive ligand clearance can change physiological ligand availability; the effect depends on exposure and local context.", "Ligand persistence, CYP1A1 activity, epithelial differentiation and inflammatory readouts."],
    lung: ["ENVIRONMENTAL INTERFACE", "Lung: environmental exposure meets inducible metabolism", "The airway encounters inhaled environmental ligands. AhR-dependent CYP1A1 induction and substrate metabolism can shape local exposure and the duration of signaling.", "Exposure history, CYP1A1 activity, ligand metabolites and time-resolved AhR targets."],
    liver: ["METABOLIC BUFFERING", "Liver: coordinated xenobiotic processing", "Hepatic metabolism buffers circulating chemicals through several enzyme systems. The AhR–CYP1A1 module is one feedback component; substrate handling and interactions with other CYP pathways matter.", "Ligand and metabolite pharmacokinetics, enzyme activity and contributions of other CYP pathways."],
    immune: ["IMMUNE DIFFERENTIATION", "Immune cells: signal duration affects lineage programs", "AhR ligand identity and duration can influence immune differentiation, including regulatory and inflammatory T-cell programs. CYP1A1 modulates ligand availability rather than directly encoding cytokine output.", "AhR kinetics, ligand clearance, IL-22, IL-17 and lineage-specific markers in the chosen model."]
  };
  function showTissue(key) {
    var t = tissues[key]; if (!t) return;
    $$(".cyp1-tissue-tabs button").forEach(function (b) { b.classList.toggle("is-active", b.dataset.tissue === key); });
    setText("#cyp1-tissue-kicker", t[0]); setText("#cyp1-tissue-title", t[1]);
    setText("#cyp1-tissue-copy", t[2]); setText("#cyp1-tissue-readout", t[3]);
    $("#cyp1-tissue-art").setAttribute("data-tissue", key);
  }
  $$(".cyp1-tissue-tabs button").forEach(function (b) { b.addEventListener("click", function () { showTissue(b.dataset.tissue); }); });

  var immune = {
    barrier: ["▤", "Barrier defense depends on ligand dynamics", "AhR ligand availability helps regulate intestinal immune and epithelial programs. CYP1A1-mediated clearance can tune this signal, including IL-22-linked mucosal defense.", "Measure ligand metabolism and immune output together; CYP1A1 expression alone is not a functional immune readout."],
    lineage: ["◉", "Immune differentiation is context-sensitive", "The magnitude and duration of AhR activation can influence regulatory and inflammatory immune programs. Ligand identity, cell type and differentiation stage modify the response.", "Pair temporal ligand/AhR data with lineage-specific markers and functional assays."],
    persistent: ["∞", "Persistent activation can disrupt homeostasis", "Ligands that resist metabolic clearance can sustain AhR-dependent transcription. Consequences depend on tissue and timing and should not be inferred from activation alone.", "Compare a persistent ligand with a metabolizable one while measuring feedback engagement and tissue outcome."]
  };
  function showImmune(key) {
    var d = immune[key]; if (!d) return;
    $$(".cyp1-immune-card").forEach(function (b) { b.classList.toggle("is-active", b.dataset.immune === key); });
    setText("#cyp1-immune-symbol", d[0]); setText("#cyp1-immune-title", d[1]);
    setText("#cyp1-immune-copy", d[2]); setText("#cyp1-immune-note", d[3]);
  }
  $$(".cyp1-immune-card").forEach(function (b) { b.addEventListener("click", function () { showImmune(b.dataset.immune); }); });

  var perturbations = {
    washout: ["Ligand pulse followed by washout", "Apply one ligand pulse, verify washout and collect samples through recovery.", "A CYP1A1 response follows AhR activation; its expression may mark exposure and enzyme induction.", "The circuit view predicts that ligand loss following CYP1A1 activity should precede or accompany the decline in AhR output.", "Vehicle control, verified washout and matched sampling across exposure groups.", "Time ordering between CYP1A1 activity, ligand loss and falling AhR output."],
    inhibit: ["CYP1 inhibition during ligand exposure", "Compare vehicle and selective CYP1-inhibited conditions during the same ligand pulse and recovery window.", "Focuses on the reduction of CYP-mediated metabolic capacity and the resulting substrate/metabolite changes.", "If CYP1-mediated clearance drives feedback, inhibition should prolong susceptible-ligand availability and AhR output.", "Verify inhibitor selectivity and target engagement; include inhibitor-only and viability controls.", "Longer ligand persistence with concordant extended AhR output under confirmed inhibition."],
    persistent: ["Labile vs persistent ligand", "Expose matched systems to ligands with different CYP1A1 susceptibility; record ligand and pathway kinetics.", "Both ligands can activate AhR, with differences interpreted primarily through their chemical activity and exposure.", "Poorly metabolized ligand is predicted to remain available longer and sustain signaling despite CYP1A1 induction.", "Match initial receptor engagement where feasible and confirm ligand exposure and metabolic products.", "Different decay trajectories linked to measured metabolic susceptibility."],
    delay: ["Delay CYP1A1 induction", "Compare normal induction timing with a validated manipulation that delays CYP1A1 expression while keeping AhR activation measurable.", "Predicts changed enzyme induction after receptor activation but may not prioritize the return of signaling to baseline.", "A longer lag should widen the interval before metabolic feedback and delay ligand clearance if this arm is limiting.", "Measure basal enzyme activity, induction lag, ligand exposure and cell viability.", "A delayed clearance and AhR-decay phase that follows the measured induction lag."],
    continuous: ["Continuous ligand replenishment", "Compare a finite pulse with ongoing replenishment at the same initial ligand concentration.", "Emphasizes exposure level and cumulative dose over time.", "Net signaling should reflect the balance between ligand replenishment and CYP1A1-mediated removal.", "Matched initial input, measured external medium concentration and verified sampling times.", "Persistent output during replenishment that resolves after replenishment is stopped, especially for susceptible ligands."]
  };
  var measurements = {
    ligand: ["Ligand and metabolite time course", "Quantify parent ligand and major metabolic products before, during and after the perturbation.", "The central readout is change in chemical abundance and metabolism.", "Compare ligand disappearance with AhR output decay; metabolite appearance can help connect enzyme activity to ligand loss.", "Use internal standards, matched sample handling and exposure verification.", "Ligand loss associated with CYP1A1 activity and preceding or coinciding with falling AhR output."],
    ahr: ["AhR nuclear localization or reporter kinetics", "Measure early receptor response and follow its decline across the feedback phase.", "Identifies the onset and magnitude of AhR activation.", "Signal duration and decay are central: equal peaks may have different post-exposure trajectories.", "Include reporter-negative/vehicle controls and normalize for cell number or viability.", "A reproducible change in decay kinetics linked to ligand metabolism rather than peak amplitude alone."],
    enzyme: ["CYP1A1 protein and catalytic activity", "Measure CYP1A1 transcript, protein and a validated catalytic activity assay at matched intervals.", "The response is defined by CYP1A1 induction and metabolic capacity.", "The circuit view tests whether functional enzyme activity precedes ligand depletion and signal decline.", "Include assay specificity controls and distinguish transcript abundance from catalytic activity.", "Time-ordering supports a feedback chain; expression alone is not proof of effective ligand clearance."],
    immune: ["IL-22 and immune differentiation readouts", "Pair the exposure time course with cytokine and lineage measurements in an appropriate immune or barrier model.", "Links exposure and AhR activation with downstream immune response.", "Tests whether different signal histories produce different immune outcomes after accounting for ligand metabolism.", "Include unstimulated controls, matched timing and cell viability/lineage controls.", "Immune effects track with signal duration or recovery after controlling for ligand exposure."],
    barrier: ["Barrier function and epithelial response", "Measure a defined barrier endpoint alongside ligand, CYP1A1 and AhR time courses.", "Captures physiological consequences of receptor activation and exposure.", "Tests whether persistent signaling is associated with impaired or altered barrier recovery.", "Include baseline barrier integrity, vehicle, exposure and viability controls.", "A functional difference aligned with feedback kinetics, not just with CYP1A1 expression."]
  };
  function buildExperiment() {
    var p = perturbations[$("#cyp1-perturbation").value];
    var m = measurements[$("#cyp1-measurement").value];
    if (!p || !m) return;
    setText("#cyp1-experiment-title", p[0]);
    setText("#cyp1-experiment-design", p[1] + " " + m[1]);
    setText("#cyp1-switch-prediction", p[2] + " " + m[2]);
    setText("#cyp1-circuit-prediction", p[3] + " " + m[3]);
    setText("#cyp1-experiment-readout", m[0]);
    setText("#cyp1-experiment-control", p[4] + " " + m[4]);
    setText("#cyp1-experiment-criterion", p[5] + " " + m[5]);
    setText("#cyp1-experiment-status", "Prediction generated · " + p[0]);
    $("#cyp1-experiment-output").setAttribute("data-generated", "true");
  }
  function markExperimentDirty() {
    setText("#cyp1-experiment-status", "Selections changed. Generate updated predictions.");
    $("#cyp1-experiment-output").setAttribute("data-generated", "false");
  }
  $("#cyp1-build-experiment").addEventListener("click", buildExperiment);
  $("#cyp1-perturbation").addEventListener("change", markExperimentDirty);
  $("#cyp1-measurement").addEventListener("change", markExperimentDirty);

  applyProfile("ficz", true);
  showComponent("ligand");
  showComparison("ficz");
  showFailure("persistent");
  showTissue("gut");
  showImmune("barrier");
  buildExperiment();
})();