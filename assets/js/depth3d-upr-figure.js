/* Guided UPR atlas. Geometry and colors are illustrative. The diagram and text
 * remain available without WebGL. Uses the pinned, self-hosted Three.js module. */
(function () {
  "use strict";
  var stage = document.getElementById("upr-figure-stage");
  if (!stage) return;
  var script = document.currentScript;
  var threeURL = script.getAttribute("data-three") || "/assets/js/lib/three-r170.module.min.js";
  var anatomyURL = new URL("upr-cell-anatomy.js?v=20261025", script.src).href;
  var viewport = stage.querySelector(".upr-fig-viewport");
  var status = stage.querySelector(".upr-fig-status");
  var tabs = stage.querySelector(".upr-fig-tabs");
  var buttons = Array.from(tabs.querySelectorAll("button"));
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var selected = "overview", api = null, loading = false;
  var topics = {
    overview: {
      title: "Start with the endoplasmic reticulum",
      copy: "The endoplasmic reticulum (ER) helps proteins fold. When folding demand exceeds capacity, three ER sensors coordinate the unfolded protein response, or UPR.",
      steps: ["Protein folding becomes disrupted.", "IRE1α, PERK and ATF6 activate distinct, interacting responses.", "The cell adjusts protein production, folding and clearance."],
      note: "The cutaway exposes the ER around the nucleus. Colors identify structures; they do not show measured activity."
    },
    ire1: {
      title: "IRE1α: adjust the folding program",
      copy: "IRE1α is an ER membrane sensor. Its RNA-processing activity can generate XBP1s, a transcription factor that helps expand the cell’s protein-handling capacity.",
      steps: ["ER stress activates IRE1α.", "Splicing of XBP1 mRNA produces the XBP1s program.", "Other outputs include regulated RNA decay (RIDD) and inflammatory signaling."],
      note: "IRE1α outputs depend on cell type, stress intensity and duration. RNA decay and inflammatory signaling are not equivalent to the adaptive XBP1s response."
    },
    perk: {
      title: "PERK: ease the incoming workload",
      copy: "PERK phosphorylates eIF2α. This generally slows protein synthesis while favoring translation of selected stress-response messages, including ATF4.",
      steps: ["PERK senses stress at the ER membrane.", "Phosphorylated eIF2α reduces the incoming protein load.", "ATF4 supports adaptation; persistent stress can engage CHOP-associated injury pathways."],
      note: "Activation does not mean that cell death is inevitable. The outcome depends on whether stress resolves and how the wider cell responds."
    },
    atf6: {
      title: "ATF6: expand repair capacity",
      copy: "During ER stress, ATF6 moves from the ER to the Golgi. Proteolytic processing releases a fragment that can enter the nucleus and regulate gene expression.",
      steps: ["ATF6 traffics from the ER to the Golgi.", "Cleavage releases the active N-terminal fragment.", "Gene expression supports chaperones, folding capacity and ER-associated degradation."],
      note: "The highlighted sensor marks its ER location. The simplified cell does not depict the complete trafficking route or a resolved protein structure."
    },
    recovery: {
      title: "Recovery is the question that follows",
      copy: "A stress response is only part of the story. The framework asks whether the cell can clear the burden, reduce signaling and restore function after an exposure ends.",
      steps: ["Adaptive resolution: folding balance and function recover.", "Incomplete resolution: stress signaling or dysfunction persists.", "Test the distinction by measuring recovery over time."],
      note: "These are alternative, context-dependent outcomes across cell types. This illustration is a guide to the framework, not measured dynamics or a prediction for an individual cell."
    }
  };
  function selectTopic(id) {
    if (!topics[id]) return;
    selected = id;
    var topic = topics[id];
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.topic === id)); });
    stage.querySelector("#upr-topic-title").textContent = topic.title;
    stage.querySelector("#upr-topic-copy").textContent = topic.copy;
    var steps = stage.querySelector("#upr-topic-steps");
    steps.replaceChildren();
    topic.steps.forEach(function (text) { var li = document.createElement("li"); li.textContent = text; steps.appendChild(li); });
    stage.querySelector("#upr-topic-note").textContent = topic.note;
    stage.dataset.topic = id;
    if (api) api.select(id);
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () { selectTopic(b.dataset.topic); }); });
  tabs.hidden = false;
  selectTopic(selected);
  function fallback(message) {
    stage.classList.remove("is-ready");
    stage.querySelector(".upr-fig-tools").hidden = true;
    stage.querySelector("#upr-fig-help").hidden = true;
    status.textContent = message;
  }
  function load() {
    if (loading || api) return;
    loading = true;
    status.textContent = "Preparing the interactive cell…";
    Promise.all([import(threeURL), import(anatomyURL)]).then(function (modules) {
      api = build(modules[0], modules[1].createUPRCell); api.select(selected);
    }).catch(function () {
      if (api) api.dispose();
      api = null;
      fallback("Showing the cell diagram. Interactive 3D is unavailable; all pathway explanations are still available.");
    });
  }
  if ("IntersectionObserver" in window) {
    var loader = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { loader.disconnect(); load(); }
    }, { rootMargin: "300px" });
    loader.observe(stage);
  } else load();

  function build(THREE, createUPRCell) {
    var lowPower = window.matchMedia("(max-width: 720px), (pointer: coarse)").matches;
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "default" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !lowPower;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    var canvas = renderer.domElement;
    canvas.className = "upr-fig-canvas";
    canvas.tabIndex = 0;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", "Interactive cell cutaway showing the ER, nucleus and mitochondria");
    canvas.setAttribute("aria-describedby", "upr-fig-help upr-topic-title upr-topic-copy");
    viewport.insertBefore(canvas, viewport.firstChild);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
    var cell;
    var key = new THREE.DirectionalLight(0xfff1e0, 3.1);
    key.position.set(-3, 5, 6); key.castShadow = !lowPower;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = key.shadow.camera.bottom = -2;
    key.shadow.camera.right = key.shadow.camera.top = 2;
    key.shadow.camera.near = 0.5; key.shadow.camera.far = 15;
    key.shadow.bias = -0.0004; key.shadow.normalBias = 0.015; key.shadow.radius = 4;
    scene.add(key);
    var fill = new THREE.DirectionalLight(0x9fd8e8, 1.3); fill.position.set(4, 0, 3);
    var rim = new THREE.DirectionalLight(0xb8dcd1, 2.5); rim.position.set(0, 4, -4);
    scene.add(fill, rim, new THREE.HemisphereLight(0xc8dbec, 0x172a30, 1.4));
    function V(x, y, z) { return new THREE.Vector3(x, y, z); }
    var anatomy = createUPRCell(THREE, { lowPower: lowPower });
    cell = anatomy.group; scene.add(cell);
    var sensors = anatomy.sensors, sensorDefs = anatomy.sensorDefs, erMat = anatomy.erMaterial;
    var labelsEl = stage.querySelector(".upr-fig-labels");
    function label(text, at, kind) {
      var el = document.createElement("span"); el.className = "upr-fig-label"; el.textContent = text; labelsEl.appendChild(el);
      return { el: el, at: at, kind: kind };
    }
    var labels = [label("Nucleus", V(-0.48, 0.65, 0.4), "anatomy"), label("ER · protein folding", V(0.25, -0.85, 0.25), "anatomy"), label("Mitochondrion", V(-1.08, -0.40, 0.20), "anatomy")];
    sensorDefs.forEach(function (s) { labels.push(label(s.title, s.at.clone().add(V(0.13, 0.06, 0.16)), s.id)); });
    var topic = "overview", width = 0, height = 0, fit = 5;
    var orbit = { yaw: -0.08, pitch: 0.18, radius: 5 }, target = { yaw: -0.08, pitch: 0.18, radius: 5 };
    var rotating = false, visible = true, contextLost = false, disposed = false, drag = null;
    var raf = 0, lastTime = 0, rotationTime = 0, firstFrame = true;
    var rotateButton = stage.querySelector('[data-act="rotate"]');
    var projected = V(0, 0, 0), viewCenter = V(0, 0, 0), listeners = [];
    function listen(el, name, fn, options) { el.addEventListener(name, fn, options); listeners.push(function () { el.removeEventListener(name, fn, options); }); }
    function stopRotation() { rotating = false; rotateButton.setAttribute("aria-pressed", "false"); rotateButton.textContent = "Auto-rotate"; }
    function reset() { stopRotation(); target.yaw = -0.08; target.pitch = 0.18; target.radius = fit; kick(); }
    function zoom(factor) { target.radius = Math.max(fit * 0.65, Math.min(fit * 1.5, target.radius * factor)); kick(); }
    function select(id) {
      topic = id;
      Object.keys(sensors).forEach(function (key) { var active = id === key; sensors[key].material.emissiveIntensity = active ? 0.65 : 0.04; sensors[key].group.scale.setScalar(active ? 1.35 : 1); });
      erMat.emissive.setHex(id === "recovery" ? 0x2e5d42 : 0x000000); erMat.emissiveIntensity = id === "recovery" ? 0.25 : 0;
      kick();
    }
    listen(rotateButton, "click", function () { rotating = !rotating; rotationTime = 0; rotateButton.setAttribute("aria-pressed", String(rotating)); rotateButton.textContent = rotating ? "Pause rotation" : "Auto-rotate"; kick(); });
    listen(stage.querySelector('[data-act="reset"]'), "click", reset);
    listen(stage.querySelector('[data-z="in"]'), "click", function () { zoom(1 / 1.15); });
    listen(stage.querySelector('[data-z="out"]'), "click", function () { zoom(1.15); });
    listen(canvas, "pointerdown", function (event) {
      if (event.button !== 0 || !event.isPrimary) return;
      stopRotation(); drag = { id: event.pointerId, x: event.clientX, y: event.clientY, yaw: target.yaw, pitch: target.pitch, touch: event.pointerType === "touch" };
    });
    listen(canvas, "pointermove", function (event) {
      if (!drag || drag.id !== event.pointerId) return;
      var dx = event.clientX - drag.x, dy = event.clientY - drag.y;
      if (drag.touch && !drag.captured && Math.abs(dy) > Math.abs(dx)) { drag = null; return; }
      if (Math.abs(dx) + Math.abs(dy) < 5) return;
      if (!drag.captured) { canvas.setPointerCapture(event.pointerId); drag.captured = true; stage.classList.add("is-dragging"); }
      target.yaw = Math.max(-0.75, Math.min(0.75, drag.yaw + dx * 0.006));
      if (!drag.touch) target.pitch = Math.max(-0.35, Math.min(0.55, drag.pitch + dy * 0.004));
      kick();
    });
    function endDrag(event) {
      if (drag && drag.id === event.pointerId) {
        if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
        drag = null; stage.classList.remove("is-dragging");
      }
    }
    listen(canvas, "pointerup", endDrag); listen(canvas, "pointercancel", endDrag);
    listen(canvas, "lostpointercapture", function () { drag = null; stage.classList.remove("is-dragging"); });
    // No wheel handler: browser zoom and page scrolling remain native.
    listen(canvas, "keydown", function (event) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      var handled = true;
      if (event.key === "ArrowLeft") target.yaw = Math.max(-0.75, target.yaw - 0.12);
      else if (event.key === "ArrowRight") target.yaw = Math.min(0.75, target.yaw + 0.12);
      else if (event.key === "ArrowUp") target.pitch = Math.max(-0.35, target.pitch - 0.1);
      else if (event.key === "ArrowDown") target.pitch = Math.min(0.55, target.pitch + 0.1);
      else if (event.key === "+" || event.key === "=") zoom(1 / 1.15);
      else if (event.key === "-") zoom(1.15);
      else if (event.key === "Home") reset();
      else handled = false;
      if (handled) { event.preventDefault(); stopRotation(); kick(); }
    });
    function resize() {
      width = viewport.clientWidth; height = viewport.clientHeight; if (!width || !height) return;
      var previousFit = fit; camera.aspect = width / height;
      var tangent = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      fit = Math.max(1.82 / (tangent * camera.aspect), 1.65 / tangent) + 0.3;
      target.radius = fit * target.radius / previousFit; orbit.radius = target.radius;
      renderer.setSize(width, height, false); camera.updateProjectionMatrix(); kick();
    }
    function placeLabels() {
      camera.updateMatrixWorld();
      labels.forEach(function (entry) {
        var show = topic === "overview" || topic === "recovery" ? entry.kind === "anatomy" : entry.kind === topic;
        entry.el.hidden = !show; if (!show) return;
        projected.copy(entry.at).project(camera);
        if (projected.z > 1 || Math.abs(projected.x) > 0.95 || Math.abs(projected.y) > 0.88) { entry.el.hidden = true; return; }
        var half = entry.el.offsetWidth / 2;
        var x = Math.max(half + 8, Math.min(width - half - 8, (projected.x + 1) * width / 2));
        var y = Math.max(44, Math.min(height - 80, (1 - projected.y) * height / 2));
        entry.el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) translate(-50%,-100%)";
      });
    }
    function frame(time) {
      raf = 0; if (disposed || !visible || document.hidden || contextLost || !width) return;
      var dt = Math.min((time - (lastTime || time)) / 1000, 0.05); lastTime = time;
      if (rotating) { rotationTime += dt; target.yaw = Math.sin(rotationTime * 0.35) * 0.45; }
      var ease = motion.matches ? 1 : 1 - Math.exp(-Math.max(dt, 1 / 60) * 10);
      orbit.yaw += (target.yaw - orbit.yaw) * ease; orbit.pitch += (target.pitch - orbit.pitch) * ease; orbit.radius += (target.radius - orbit.radius) * ease;
      camera.position.set(Math.sin(orbit.yaw) * orbit.radius * Math.cos(orbit.pitch), Math.sin(orbit.pitch) * orbit.radius, Math.cos(orbit.yaw) * orbit.radius * Math.cos(orbit.pitch));
      camera.lookAt(viewCenter); renderer.render(scene, camera);
      if (firstFrame) {
        firstFrame = false; stage.classList.add("is-ready"); stage.querySelector(".upr-fig-tools").hidden = false; stage.querySelector("#upr-fig-help").hidden = false;
        status.textContent = "3D cell ready. Choose a pathway to explore.";
      }
      placeLabels();
      var settling = Math.abs(target.yaw - orbit.yaw) + Math.abs(target.pitch - orbit.pitch) + Math.abs(target.radius - orbit.radius) > 0.001;
      if (rotating || settling) kick();
    }
    function kick() { if (!raf && !disposed && !contextLost) raf = requestAnimationFrame(frame); }
    listen(canvas, "webglcontextlost", function (event) {
      event.preventDefault(); contextLost = true; stopRotation(); cancelAnimationFrame(raf); raf = 0; canvas.tabIndex = -1;
      fallback("3D rendering paused. The cell diagram and pathway explanations remain available.");
    });
    listen(canvas, "webglcontextrestored", function () { contextLost = false; firstFrame = true; canvas.tabIndex = 0; resize(); });
    listen(document, "visibilitychange", function () { lastTime = 0; if (!document.hidden) kick(); });
    if (motion.addEventListener) listen(motion, "change", function () { stopRotation(); kick(); });
    var observer = null, resizeObserver = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; lastTime = 0; if (visible) kick(); }, { rootMargin: "40px" }); observer.observe(viewport);
    }
    if ("ResizeObserver" in window) { resizeObserver = new ResizeObserver(resize); resizeObserver.observe(viewport); }
    else listen(window, "resize", resize);
    function dispose() {
      if (disposed) return;
      disposed = true; cancelAnimationFrame(raf);
      if (observer) observer.disconnect(); if (resizeObserver) resizeObserver.disconnect();
      listeners.forEach(function (remove) { remove(); }); anatomy.dispose();
      renderer.dispose(); canvas.remove(); labelsEl.replaceChildren();
    }
    listen(window, "pagehide", function (event) { if (!event.persisted) dispose(); });
    resize(); return { select: select, dispose: dispose };
  }
})();
