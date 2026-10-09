(function () {
  "use strict";

  var root = document.getElementById("nrf2-redoxostat-lab");
  if (!root || root.dataset.ready === "true") return;
  root.dataset.ready = "true";

  var $ = function (selector) { return root.querySelector(selector); };
  var $$ = function (selector) { return Array.prototype.slice.call(root.querySelectorAll(selector)); };

  var defaults = { strength: 60, duration: 35, resolution: 70, redox: 65, pattern: "pulse" };
  var state = Object.assign({}, defaults);

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function setText(selector, value) {
    var node = $(selector);
    if (node) node.textContent = value;
  }

  function stressAt(t, pattern, strength, duration) {
    var level = strength / 100;
    var end = 0.18 + (duration / 100) * 0.69;
    if (pattern === "pulse") return t >= 0.16 && t <= end ? level : 0;
    if (pattern === "repeated") {
      var active = ((t >= 0.14 && t <= 0.27) || (t >= 0.38 && t <= 0.51) || (t >= 0.62 && t <= end));
      return active ? level : 0;
    }
    return t >= 0.16 && t <= 0.94 ? level : 0;
  }

  function simulate(settings, resolutionOverride, redoxOverride) {
    var count = 72;
    var output = 0;
    var values = [];
    var inputs = [];
    var resolution = (resolutionOverride == null ? settings.resolution : resolutionOverride) / 100;
    var redox = (redoxOverride == null ? settings.redox : redoxOverride) / 100;
    var decay = 0.025 + resolution * 0.13 + redox * 0.07;
    var rise = 0.09 + settings.strength / 100 * 0.035;
    for (var i = 0; i < count; i += 1) {
      var t = i / (count - 1);
      var input = stressAt(t, settings.pattern, settings.strength, settings.duration);
      inputs.push(input);
      var target = input * (0.62 + settings.strength / 280);
      if (input > 0) {
        output += (target - output) * rise;
      } else {
        output -= output * decay;
      }
      if (settings.pattern === "repeated" && input === 0) output -= output * decay * 0.15;
      values.push(clamp(output, 0, 1));
    }
    return { output: values, input: inputs };
  }

  function pathFrom(values, yTop, yBottom, xLeft, xRight) {
    var parts = [];
    var spanX = xRight - xLeft;
    var spanY = yBottom - yTop;
    values.forEach(function (value, index) {
      var x = xLeft + (index / (values.length - 1)) * spanX;
      var y = yBottom - clamp(value, 0, 1) * spanY;
      parts.push((index === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1));
    });
    return parts.join(" ");
  }

  function renderSimulation() {
    state.strength = +$("#n2-strength").value;
    state.duration = +$("#n2-duration").value;
    state.resolution = +$("#n2-resolution").value;
    state.redox = +$("#n2-redox").value;
    setText("#n2-strength-value", state.strength + "%");
    setText("#n2-duration-value", state.duration + "%");
    setText("#n2-resolution-value", state.resolution + "%");
    setText("#n2-redox-value", state.redox + "%");

    var run = simulate(state);
    var reference = simulate(state, 92, 92);
    $("#n2-input-trace").setAttribute("d", pathFrom(run.input, 28, 228, 48, 542));
    $("#n2-output-trace").setAttribute("d", pathFrom(run.output, 28, 228, 48, 542));
    $("#n2-resolved-trace").setAttribute("d", pathFrom(reference.output, 28, 228, 48, 542));

    var peak = Math.round(Math.max.apply(null, run.output) * 100);
    var residual = Math.round(run.output[run.output.length - 1] * 100);
    var resetIndex = Math.round(clamp((state.resolution * 0.55 + state.redox * 0.45) * (1 - residual / 155), 0, 1) * 100);
    setText("#n2-peak", peak + "%");
    setText("#n2-residual", residual + "%");
    setText("#n2-reset-index", resetIndex + "/100");

    var persistent = residual >= 30 || resetIndex < 45 || state.pattern === "chronic" && state.duration > 45;
    var status = $(".n2-status-line");
    status.classList.toggle("is-persistent", persistent);
    setText("#n2-state-label", persistent ? "Persistent-output pattern" : "Resolution-favored pattern");

    var note;
    if (state.pattern === "pulse" && !persistent) {
      note = "A brief input with effective termination allows output to move back toward baseline.";
    } else if (state.pattern === "repeated") {
      note = persistent
        ? "Repeated pulses overlap with incomplete recovery, increasing residual output in this illustrative model."
        : "Separated pulses allow more recovery between challenges. Compare the residual signal after each pulse.";
    } else if (state.pattern === "chronic") {
      note = "Ongoing input continually re-stabilizes output; stronger resolution changes the trajectory but cannot fully substitute for removing the stressor.";
    } else {
      note = "Signal persistence reflects the combination of exposure history and the selected resolution and redox-restoration settings.";
    }
    setText("#n2-output-note", note);
  }

  function setPattern(pattern) {
    state.pattern = pattern;
    $$(".n2-chip").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-pattern") === pattern);
    });
    renderSimulation();
  }

  $$("#nrf2-simulator input[type=range]").forEach(function (input) {
    input.addEventListener("input", renderSimulation);
  });
  $$(".n2-chip").forEach(function (button) {
    button.addEventListener("click", function () {
      setPattern(button.getAttribute("data-pattern"));
    });
  });
  $("#n2-reset").addEventListener("click", function () {
    $("#n2-strength").value = defaults.strength;
    $("#n2-duration").value = defaults.duration;
    $("#n2-resolution").value = defaults.resolution;
    $("#n2-redox").value = defaults.redox;
    setPattern(defaults.pattern);
  });

  var nodes = {
    sensor: {
      icon: "K", kind: "SENSOR MODULE", title: "KEAP1 reads redox chemistry",
      copy: "Reactive cysteine residues respond to oxidative and electrophilic cues. Their modification can reduce KEAP1-mediated NRF2 ubiquitination and stabilize NRF2.",
      question: "Can the sensor regain its regulatory state after the cue subsides?"
    },
    controller: {
      icon: "C", kind: "CONTROL MODULE", title: "CUL3–KEAP1 controls NRF2 turnover",
      copy: "The ligase complex regulates ubiquitination and proteasomal degradation of NRF2. Impaired turnover can uncouple NRF2 abundance from the stress that initiated the response.",
      question: "Does NRF2 turnover resume when the initiating input decreases?"
    },
    amplifier: {
      icon: "N", kind: "TRANSCRIPTIONAL AMPLIFIER", title: "NRF2 drives a graded response",
      copy: "Stabilized NRF2 engages antioxidant, detoxification, metabolic and proteostasis programs. Magnitude, duration and cellular context all shape the resulting program.",
      question: "Does transcription scale with the input, or remain high after it is withdrawn?"
    },
    resolution: {
      icon: "↻", kind: "ACTIVE TERMINATION", title: "Resolution requires coordinated control",
      copy: "KEAP1 renewal, NRF2 ubiquitination, proteasomal turnover, autophagic clearance and feedback help reduce pathway output. Their contribution varies with biological context.",
      question: "Which termination step limits the speed of recovery in this system?"
    },
    metabolism: {
      icon: "↯", kind: "REDOX RESTORATION", title: "Metabolism constrains reset capacity",
      copy: "NADPH-dependent glutathione and thioredoxin systems restore reducing capacity. Metabolic or proteostasis limits may delay the return of redox-sensitive control.",
      question: "Does the cell regain redox balance and the ability to respond to a later cue?"
    },
    outcome: {
      icon: "↗", kind: "SYSTEM OUTCOME", title: "Duration changes biological meaning",
      copy: "Transient output can support adaptation. Persistent or poorly resolved output can support tumor metabolism, resistance, or maladaptive tissue states in context-dependent ways.",
      question: "Do outcomes track peak activation, cumulative exposure, or the ability to resolve signaling?"
    }
  };

  function showNode(key) {
    var item = nodes[key];
    if (!item) return;
    $$(".n2-arch-node").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-node") === key);
    });
    setText("#n2-node-icon", item.icon);
    setText("#n2-node-kind", item.kind);
    setText("#n2-node-title", item.title);
    setText("#n2-node-copy", item.copy);
    setText("#n2-node-question", item.question);
  }
  $$(".n2-arch-node").forEach(function (button) {
    button.addEventListener("click", function () { showNode(button.getAttribute("data-node")); });
  });

  var failureModes = {
    sensor: {
      kind: "SENSOR FAILURE", title: "KEAP1 sensing does not return to baseline",
      copy: "Loss-of-function changes or persistent modification can weaken KEAP1-mediated NRF2 repression after the original stress signal subsides.",
      outcome: "NRF2 remains stabilized after withdrawal.",
      test: "Follow KEAP1 state and NRF2 turnover after a reversible stress pulse.",
      breakPath: "M20 38 L48 82", node: 0
    },
    controller: {
      kind: "CONTROLLER FAILURE", title: "NRF2 degradation is impaired",
      copy: "Disrupted CUL3–KEAP1 ligase activity reduces NRF2 ubiquitination and clearance, prolonging transcription after stress declines.",
      outcome: "NRF2 turnover slows and downstream output persists.",
      test: "Measure NRF2 ubiquitination, half-life and post-stress decay with matched inputs.",
      breakPath: "M104 38 L132 82", node: 1
    },
    escape: {
      kind: "AMPLIFIER ESCAPE", title: "NRF2 becomes less sensitive to restraint",
      copy: "NFE2L2 gain-of-function changes can disrupt KEAP1 recognition, allowing NRF2 to remain active despite normal upstream redox conditions.",
      outcome: "Transcription becomes partly uncoupled from the stress input.",
      test: "Compare NRF2 turnover and target expression while verifying KEAP1 status.",
      breakPath: "M188 38 L216 82", node: 2
    },
    feedback: {
      kind: "FEEDBACK FAILURE", title: "Clearance and feedback no longer constrain output",
      copy: "Autophagy impairment and p62-associated KEAP1 sequestration can weaken KEAP1 control and maintain NRF2 signaling.",
      outcome: "NRF2 output remains elevated after the initial stimulus.",
      test: "Track p62, KEAP1 availability, autophagic flux and NRF2 output through withdrawal.",
      breakPath: "M291 38 L319 82", node: 3
    },
    redox: {
      kind: "REDOX RESET FAILURE", title: "The cell cannot restore reducing capacity efficiently",
      copy: "Limited metabolic or thiol-reducing capacity may delay restoration of cysteine chemistry and redox-responsive control.",
      outcome: "Recovery is delayed even when the original stressor is removed.",
      test: "Pair NRF2 kinetics with NADPH-linked, glutathione or thioredoxin redox measurements.",
      breakPath: "M291 38 L319 82", node: 3
    }
  };

  function showFailure(key) {
    var item = failureModes[key];
    if (!item) return;
    $$(".n2-failure-btn").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-failure") === key);
    });
    setText("#n2-failure-kind", item.kind);
    setText("#n2-failure-title", item.title);
    setText("#n2-failure-copy", item.copy);
    setText("#n2-failure-outcome", item.outcome);
    setText("#n2-failure-test", item.test);
    $("#n2-failure-break").setAttribute("d", item.breakPath);
    $$(".n2-failure-node").forEach(function (node, index) {
      node.style.stroke = index === item.node ? "#fda4af" : "rgba(147,197,253,.42)";
      node.style.fill = index === item.node ? "rgba(190,24,93,.24)" : "#132d52";
    });
  }
  $$(".n2-failure-btn").forEach(function (button) {
    button.addEventListener("click", function () { showFailure(button.getAttribute("data-failure")); });
  });

  var modelCopy = {
    switch: "<b>Switch model:</b> activation state and response magnitude dominate the interpretation. A peak-centered readout can miss differences in post-stress recovery.",
    circuit: "<b>Circuit model:</b> matched peaks may still diverge when termination, turnover or redox restoration differs. The trajectory after withdrawal becomes a primary outcome."
  };
  $$(".nrf2-model-tabs button").forEach(function (button) {
    button.addEventListener("click", function () {
      var model = button.getAttribute("data-model");
      $$(".nrf2-model-tabs button").forEach(function (b) {
        b.classList.toggle("is-active", b === button);
      });
      $(".nrf2-model-visual").setAttribute("data-model", model);
      $("#n2-model-caption").innerHTML = modelCopy[model];
    });
  });

  var experiments = {
    pulse: {
      title: "Stress pulse followed by withdrawal",
      design: "Apply a defined oxidative or electrophilic stress pulse, verify washout, then sample baseline, activation and recovery.",
      switch: "Prioritizes NRF2 stabilization and antioxidant-target induction during exposure.",
      circuit: "Predicts that termination kinetics and residual output can differ even after the stressor is removed.",
      control: "Vehicle-treated cells, washout verification and matched viability.",
      criterion: "A distinct post-withdrawal trajectory despite a similar peak supports the circuit interpretation."
    },
    duration: {
      title: "Peak-matched short vs long exposure",
      design: "Titrate short and long exposures to comparable NRF2 peaks, then follow both groups after withdrawal.",
      switch: "If peak activation is the main driver, peak-matched groups should show broadly similar responses.",
      circuit: "The longer exposure may leave greater residual output or slower recovery despite a matched peak.",
      control: "Peak matching, matched sampling and viability; report both peak and cumulative exposure.",
      criterion: "Divergent recovery in peak-matched groups supports an effect of signal history."
    },
    autophagy: {
      title: "Autophagy impairment during stress",
      design: "Compare control cells with an autophagy-impaired condition across the same stress pulse and recovery period.",
      switch: "Emphasizes NRF2 target induction during exposure; autophagy effects may be missed by an activation-only endpoint.",
      circuit: "Predicts impaired KEAP1 clearance dynamics or renewal and prolonged NRF2 output when the p62–KEAP1 axis is disrupted.",
      control: "Verify autophagic flux and include a rescue or independent perturbation control.",
      criterion: "Persistence that tracks with impaired flux and altered KEAP1 control supports the feedback-failure model."
    },
    keap1: {
      title: "Slower KEAP1 renewal",
      design: "Alter KEAP1 renewal without changing the initial stress pulse, then quantify how quickly NRF2 control returns.",
      switch: "Primarily compares NRF2 activation and target induction during the stress response.",
      circuit: "Predicts delayed restoration of NRF2 turnover if KEAP1 renewal limits termination.",
      control: "Matched initial activation plus a KEAP1 rescue or renewal-restoration condition.",
      criterion: "A change in recovery kinetics rescued by restoring KEAP1 renewal supports a causal role in resolution."
    },
    repeated: {
      title: "Repeated pulses vs chronic exposure",
      design: "Compare repeated defined pulses with continuous exposure; match peak or cumulative dose where feasible and record the exposure pattern.",
      switch: "Emphasizes activation amplitude and target induction, potentially obscuring the recovery intervals between pulses.",
      circuit: "Predicts that incomplete inter-pulse recovery can change the residual signal and response to a subsequent pulse.",
      control: "Include matched vehicle, exposure verification and separate peak and cumulative-dose comparisons.",
      criterion: "Differences associated with inter-pulse recovery support a role for temporal pattern, not just peak amplitude."
    }
  };

  var measurements = {
    time: {
      name: "NRF2 abundance and nuclear localization over time",
      assay: "Quantify NRF2 protein and nuclear-to-cytoplasmic localization at baseline, during the pulse, and at several post-withdrawal time points.",
      switch: "The key result is the activation peak and whether NRF2 becomes stabilized.",
      circuit: "The key result is the trajectory after withdrawal: decay rate, residual output and time toward baseline.",
      control: "Keep image acquisition, fractionation, normalization and time points consistent.",
      criterion: "Compare decay half-life and post-withdrawal area under the curve, not only peak height."
    },
    targets: {
      name: "NRF2 target-gene transcription over time",
      assay: "Measure a prespecified target panel, such as NQO1, HMOX1 and GCLC, at matched time points using nascent RNA or a time-resolved reporter.",
      switch: "The key result is the magnitude of target induction during exposure.",
      circuit: "The key result is how quickly transcription falls after withdrawal and whether different exposure histories leave different residual output.",
      control: "Normalize to baseline and include unstressed controls and appropriate reporter or RNA controls.",
      criterion: "Persistent transcription after the input ends, especially with matched NRF2 peaks, supports dynamic regulation beyond peak activation."
    },
    turnover: {
      name: "NRF2 ubiquitination, half-life and KEAP1 recovery",
      assay: "Measure NRF2 ubiquitination and protein half-life alongside KEAP1 abundance or recovery, with samples spanning stress withdrawal.",
      switch: "The key result is reduced KEAP1-mediated repression and NRF2 stabilization during stress.",
      circuit: "The key result is whether turnover and KEAP1 control recover on schedule or remain impaired.",
      control: "Include matched input, protein-loading controls and a control for the turnover assay itself.",
      criterion: "A turnover defect that precedes or tracks delayed signal decay supports impaired control as a resolution mechanism."
    },
    redox: {
      name: "Redox state and NADPH-linked recovery",
      assay: "Pair the NRF2 time course with glutathione redox, NADPH/NADP+ and, where feasible, thioredoxin-system measurements.",
      switch: "The key result is whether the stress response induces a protective antioxidant program.",
      circuit: "The key result is whether restoration of cellular reducing capacity aligns with the return of NRF2 control.",
      control: "Collect matched samples and use validated assays with appropriate normalization and assay controls.",
      criterion: "A reproducible relationship between redox recovery and pathway termination supports coupling, but correlation alone does not establish causality."
    },
    second: {
      name: "Response to a second matched challenge",
      assay: "After the first exposure, allow a defined recovery interval and then apply the same second stimulus while tracking NRF2 and target responses.",
      switch: "Compares whether the pathway activates again, typically emphasizing response magnitude.",
      circuit: "Tests whether the prior exposure changed responsiveness, rise time, peak, decay or target induction on the second challenge.",
      control: "Use naive cells receiving the second stimulus at the same time, plus a recovered vehicle group.",
      criterion: "A response difference after the first signal appears to subside indicates that visible signal loss alone may not equal restored competence."
    }
  };

  function buildExperiment() {
    var perturbationKey = $("#n2-perturbation").value;
    var measurementKey = $("#n2-measurement").value;
    var experiment = experiments[perturbationKey];
    var measurement = measurements[measurementKey];
    if (!experiment || !measurement) return;

    setText("#n2-experiment-title", experiment.title);
    setText("#n2-experiment-prediction", experiment.design + " " + measurement.assay);
    setText("#n2-switch-prediction", experiment.switch + " " + measurement.switch);
    setText("#n2-circuit-prediction", experiment.circuit + " " + measurement.circuit);
    setText("#n2-experiment-readout", measurement.name);
    setText("#n2-experiment-control", experiment.control + " " + measurement.control);
    setText("#n2-experiment-criterion", experiment.criterion + " " + measurement.criterion);
    setText("#n2-experiment-status", "Prediction generated · " + experiment.title);
    $("#n2-experiment-output").setAttribute("data-generated", "true");
  }

  function markExperimentDirty() {
    setText("#n2-experiment-status", "Selections changed. Generate an updated prediction.");
    $("#n2-experiment-output").setAttribute("data-generated", "false");
  }

  $("#n2-build-experiment").addEventListener("click", buildExperiment);
  $("#n2-perturbation").addEventListener("change", markExperimentDirty);
  $("#n2-measurement").addEventListener("change", markExperimentDirty);
  buildExperiment();

  var contexts = {
    adaptive: {
      symbol: "✳", title: "Transient activation can be protective",
      copy: "A time-limited NRF2 response can induce antioxidant and detoxification programs. Efficient termination helps return the system toward a responsive baseline.",
      note: "Assess protection during stress and recovery after withdrawal."
    },
    cancer: {
      symbol: "◎", title: "Persistent NRF2 can support tumor survival",
      copy: "In some cancers, sustained NRF2 activity supports redox buffering, anabolic metabolism and resistance to treatments that rely on oxidative damage. Effects depend on tumor genotype and context.",
      note: "Measure pathway persistence, metabolic dependencies and treatment context."
    },
    fibrosis: {
      symbol: "⌁", title: "Tissue effects are context-dependent",
      copy: "NRF2 can suppress oxidative injury and inflammation in some fibrotic settings, while broader stress-network dysregulation may contribute to maladaptive remodeling in others.",
      note: "Do not infer outcome from NRF2 activation alone; resolve tissue and timing."
    },
    metabolic: {
      symbol: "⌘", title: "Redox control and metabolism are coupled",
      copy: "NRF2 changes glucose, glutamine, NADPH and antioxidant programs. Sustained activity or limited metabolic buffering can disrupt redox balance, including through reductive stress.",
      note: "Pair signaling time courses with NADPH-linked and metabolic measurements."
    }
  };

  function showContext(key) {
    var item = contexts[key];
    if (!item) return;
    $$(".n2-context").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-context") === key);
    });
    setText("#n2-context-symbol", item.symbol);
    setText("#n2-context-title", item.title);
    setText("#n2-context-copy", item.copy);
    setText("#n2-context-note", item.note);
  }
  $$(".n2-context").forEach(function (button) {
    button.addEventListener("click", function () { showContext(button.getAttribute("data-context")); });
  });

  renderSimulation();
  showNode("sensor");
  showFailure("sensor");
  buildExperiment();
  showContext("adaptive");
})();