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

  $("#nrf2-simulator input[type=range]").forEach(function (input) {
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
      prediction: "Record NRF2 abundance and localization before, during and after a defined pulse. The circuit model predicts that decay kinetics reveal control behavior that a peak value alone cannot show.",
      readout: "Time to baseline and response to a second pulse"
    },
    duration: {
      title: "Peak-matched short vs long exposure",
      prediction: "Match the observed peak response while varying exposure duration. Compare residual NRF2 output and downstream consequences after both inputs have ended.",
      readout: "Post-withdrawal area under the curve"
    },
    autophagy: {
      title: "Autophagy impairment during stress",
      prediction: "Compare control and autophagy-impaired conditions for p62 accumulation, KEAP1 availability, NRF2 turnover and persistence after withdrawal.",
      readout: "KEAP1 availability and NRF2 decay kinetics"
    },
    keap1: {
      title: "Slower KEAP1 renewal",
      prediction: "Alter KEAP1 renewal and follow the return of NRF2 degradation after stress subsides. The circuit model predicts delayed termination if renewed control is rate-limiting.",
      readout: "KEAP1 recovery vs NRF2 half-life"
    },
    repeated: {
      title: "Repeated pulses vs chronic exposure",
      prediction: "Compare matched peak or cumulative exposure while varying the temporal pattern. Test whether recovery between pulses changes target-gene output or the response to a later challenge.",
      readout: "Inter-pulse recovery and second-challenge response"
    }
  };

  var measurements = {
    time: "Decay kinetics and time to baseline",
    targets: "Target transcription vs NRF2 abundance",
    turnover: "Ubiquitination, half-life and KEAP1 recovery",
    redox: "Redox recovery aligned to pathway decay",
    second: "Recovery of response amplitude and timing"
  };

  function buildExperiment() {
    var perturbation = $("#n2-perturbation").value;
    var measurement = $("#n2-measurement").value;
    var experiment = experiments[perturbation];
    setText("#n2-experiment-title", experiment.title);
    setText("#n2-experiment-prediction", experiment.prediction);
    setText("#n2-experiment-readout", measurements[measurement]);
  }
  $("#n2-build-experiment").addEventListener("click", buildExperiment);
  $("#n2-perturbation").addEventListener("change", buildExperiment);
  $("#n2-measurement").addEventListener("change", buildExperiment);

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