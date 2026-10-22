/*
 * 3D views for the homepage highlighted study and the NRF2–KEAP1, CYP1A1 and
 * transcriptional-condensate pages.
 * One shared engine, one configuration per page. Each view sits above the page's
 * existing selector buttons and stays in sync with them: selecting in 3D clicks the
 * existing button, and the existing detail panel remains the source of truth.
 * Feedback loops from the existing figures are kept as closed loops in 3D.
 * Isolated enhancement. Remove the include line on each page to roll back.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  var THREE_URL = (script && script.getAttribute("data-three")) || "/assets/js/lib/three-r170.module.min.js";
  if (!window.matchMedia) return;

  // ======================================================================
  // Page configurations
  // ======================================================================
  var CONFIGS = [
    {
      key: "home",
      buttons: ".home .study .circuit-flow .circuit-node",
      insertBefore: ".home .study .circuit",
      className: "c3d-home",
      focusClass: "is-3d-focus",
      noteTail: "Figure 1 below shows the same six stages in 2D.",
      tag: "Conceptual 3D schematic · proteotoxic stress-resolution circuit",
      ariaLabel: "3D schematic of the six-stage UPR proteotoxic stress-resolution circuit",
      pitch: 0.3,
      lift: 0.4,
      pad: 1.75,
      stages: [
        { at: [-5.1, 0.0, 0.7], color: 0xf87171, shape: "toxinput" },
        { at: [-3.05, 0.2, -0.55], color: 0x67e8f9, shape: "ersensors" },
        { at: [-1.0, 0.0, 0.6], color: 0xa5b4fc, shape: "branchout" },
        { at: [1.05, 0.25, -0.6], color: 0xf472b6, shape: "immuneout" },
        { at: [3.1, 0.0, 0.55], color: 0x34d399, shape: "turnover" },
        { at: [5.1, 0.1, -0.45], color: 0x86efac, shape: "recovery" }
      ],
      paths: [
        { through: [0, 1, 2, 3, 4], kind: "forward", color: 0x67e8f9, speed: 0.04 },
        { through: [4, 5], kind: "forward", color: 0x86efac, speed: 0.02 },
        { through: [5, 0], kind: "return", color: 0xf87171, speed: 0.022, arc: 1.9 }
      ]
    },
    {
      key: "nrf2",
      buttons: "#nrf2-circuit-explorer .n2-arch-node",
      insertBefore: "#nrf2-circuit-explorer .nrf2-architecture",
      tag: "Conceptual 3D schematic · closed control loop",
      ariaLabel: "3D schematic of the redoxostat control loop",
      pitch: 0.5,
      scale: 1.35,
      lift: 0.45,
      input: { from: [-6.1, 0.8, 0.4], to: 0, label: "Redox stress", color: 0xf87171 },
      stages: [
        { at: [-4.4, 0, 0.35], color: 0xc4b5fd, shape: "keap1" },
        { at: [-1.6, 0.05, 1.65], color: 0x67e8f9, shape: "cul3" },
        { at: [1.6, 0.05, 1.65], color: 0x34d399, shape: "nrf2" },
        { at: [1.6, 0.15, -1.65], color: 0xa5b4fc, shape: "turnover" },
        { at: [-1.6, 0.15, -1.65], color: 0x93c5fd, shape: "redox" },
        { at: [4.4, 0, 0.35], color: 0xfbbf24, shape: "outcome" }
      ],
      paths: [
        { through: [0, 1, 2, 5], kind: "forward", color: 0x67e8f9, speed: 0.05 },
        { through: [5, 3, 4, 0], kind: "feedback", color: 0xc4b5fd, speed: 0.04 }
      ]
    },
    {
      key: "cyp1",
      buttons: ".cyp1-component-grid .cyp1-component",
      insertBefore: ".cyp1-components",
      tag: "Conceptual 3D schematic · delayed negative feedback",
      ariaLabel: "3D schematic of the AhR–CYP1A1 feedback loop",
      pitch: 0.5,
      scale: 1.35,
      lift: 0.45,
      stages: [
        { at: [-4.4, 0, 0.3], color: 0x67e8f9, shape: "ligands" },
        { at: [-1.5, 0.05, 1.6], color: 0xa5b4fc, shape: "ahr" },
        { at: [1.6, 0.05, 1.6], color: 0xfbbf24, shape: "induction" },
        { at: [4.4, 0, 0.3], color: 0xfb923c, shape: "cyp" },
        { at: [1.2, 0.15, -1.75], color: 0xc4b5fd, shape: "feedback" },
        { at: [-2.3, 0.15, -1.85], color: 0x86efac, shape: "tissue" }
      ],
      paths: [
        { through: [0, 1], kind: "forward", color: 0x67e8f9, speed: 0.06 },
        { through: [1, 2, 3], kind: "forward", color: 0xfbbf24, speed: 0.028, note: "slower: induction delay" },
        { through: [3, 4, 0], kind: "inhibit", color: 0xc4b5fd, speed: 0.04 },
        { through: [1, 5], kind: "branch", color: 0x86efac, speed: 0.035 }
      ]
    },
    {
      key: "tkf",
      buttons: ".tkf-filter-grid .tkf-filter-card",
      insertBefore: ".tkf-filter-grid",
      tag: "Conceptual 3D schematic · proposed kinetic filter",
      ariaLabel: "3D schematic of the proposed condensate kinetic filter",
      pitch: 0.34,
      // Stages 0 and 5 give context; the four filter cards select stages 1 to 4.
      stages: [
        { at: [-5.2, 0.0, 0.6], color: 0x60a5fa, shape: "pulse", name: "Signal input", button: -1 },
        { at: [-3.1, 0.1, -0.55], color: 0xa5b4fc, shape: "barrier", button: 0 },
        { at: [-1.0, 0.0, 0.55], color: 0x67e8f9, shape: "droplet", button: 1 },
        { at: [1.1, 0.15, -0.55], color: 0xc4b5fd, shape: "lifetime", button: 2 },
        { at: [3.2, 0.0, 0.55], color: 0x86efac, shape: "dissolve", button: 3 },
        { at: [5.25, 0.1, -0.4], color: 0xfbbf24, shape: "bursts", name: "Transcription", button: -1 }
      ],
      paths: [
        { through: [0, 1, 2, 3, 4, 5], kind: "forward", color: 0x67e8f9, speed: 0.035, filter: true },
        { through: [4, 1], kind: "return", color: 0x86efac, speed: 0.025, arc: 1.7 }
      ]
    }
  ];

  var config = null;
  var buttons = [];
  for (var c = 0; c < CONFIGS.length; c++) {
    var found = Array.prototype.slice.call(document.querySelectorAll(CONFIGS[c].buttons));
    if (found.length) { config = CONFIGS[c]; buttons = found; break; }
  }
  if (!config) return;
  var anchorEl = document.querySelector(config.insertBefore);
  if (!anchorEl) return;

  // Stage to button mapping (default: stage i drives button i).
  config.stages.forEach(function (s, i) {
    if (s.button === undefined) s.button = i;
    var b = s.button >= 0 ? buttons[s.button] : null;
    if (b && !s.name) {
      var t = b.querySelector("b, strong");
      s.name = t ? t.textContent.trim() : "Stage " + (i + 1);
    }
  });
  var selectable = config.stages.filter(function (s) { return s.button >= 0; }).length;
  if (selectable !== buttons.length) return;

  try {
    var probe = document.createElement("canvas");
    if (!(window.WebGLRenderingContext && (probe.getContext("webgl2") || probe.getContext("webgl")))) return;
  } catch (e) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var STORE_KEY = "circuit3d-" + config.key;
  var uid = "c3d-" + config.key;

  // ---------- Markup ----------
  var wrap = document.createElement("div");
  wrap.className = "y3d c3d" + (config.className ? " " + config.className : "");
  wrap.innerHTML =
    '<div class="y3d-bar">' +
      '<span class="y3d-tag"></span>' +
      '<button type="button" class="y3d-btn y3d-toggle" aria-controls="' + uid + '-stage" aria-expanded="true">Hide 3D view</button>' +
    "</div>" +
    '<div class="y3d-stage" id="' + uid + '-stage" tabindex="0" role="group" aria-roledescription="3D view" aria-describedby="' + uid + '-help">' +
      '<div class="y3d-labels" aria-hidden="true"></div>' +
      '<div class="y3d-tools">' +
        '<button type="button" class="y3d-btn y3d-icon" data-act="zoom-out" aria-label="Zoom out">−</button>' +
        '<button type="button" class="y3d-btn y3d-icon" data-act="zoom-in" aria-label="Zoom in">+</button>' +
        '<button type="button" class="y3d-btn" data-act="reset">Reset view</button>' +
      "</div>" +
      '<p class="y3d-status" aria-live="polite">Loading 3D view…</p>' +
    "</div>" +
    '<p class="y3d-note" id="' + uid + '-help"></p>';
  wrap.querySelector(".y3d-tag").textContent = config.tag;
  var stageEl = wrap.querySelector(".y3d-stage");
  stageEl.setAttribute("aria-label", config.ariaLabel);
  var maxKey = buttons.length;
  wrap.querySelector(".y3d-note").textContent =
    "Illustrative shapes, not molecular structures or measured dynamics. Drag or use arrow keys to rotate, + and − to zoom, 1 to " +
    maxKey + " to select, 0 to reset. " + (config.noteTail || "The buttons below show the same content in 2D.");
  anchorEl.parentNode.insertBefore(wrap, anchorEl);

  var toggle = wrap.querySelector(".y3d-toggle");
  var statusEl = wrap.querySelector(".y3d-status");
  var labelsEl = wrap.querySelector(".y3d-labels");
  var note = wrap.querySelector(".y3d-note");

  var saved = null;
  try { saved = window.localStorage.getItem(STORE_KEY); } catch (e) { saved = null; }
  var open = saved ? saved === "open" : window.matchMedia("(min-width: 720px)").matches;
  var api = null;
  var loading = false;

  function setOpen(next, remember) {
    open = next;
    stageEl.hidden = !open;
    note.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Hide 3D view" : "Show 3D view";
    if (remember) {
      try { window.localStorage.setItem(STORE_KEY, open ? "open" : "closed"); } catch (e) { /* storage unavailable */ }
    }
    if (open) load();
    if (api) api.setActive(open);
  }
  toggle.addEventListener("click", function () { setOpen(!open, true); });

  function load() {
    if (api || loading) return;
    loading = true;
    import(THREE_URL).then(function (THREE) {
      api = build(THREE);
      statusEl.textContent = "";
      statusEl.hidden = true;
      api.setActive(open);
    }).catch(function () {
      wrap.remove();
    });
  }

  function activeStage() {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].classList.contains("is-active")) {
        for (var s = 0; s < config.stages.length; s++) if (config.stages[s].button === i) return s;
      }
    }
    for (var k = 0; k < config.stages.length; k++) if (config.stages[k].button >= 0) return k;
    return 0;
  }

  setOpen(open, false);

  // ======================================================================
  function build(THREE) {
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = "y3d-canvas";
    stageEl.insertBefore(renderer.domElement, stageEl.firstChild);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(34, 2, 0.1, 100);
    scene.add(new THREE.HemisphereLight(0xdbeafe, 0x0b1220, 0.9));
    var key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(3, 6, 5);
    scene.add(key);
    var fill = new THREE.PointLight(0x60a5fa, 18, 30, 1.6);
    fill.position.set(-6, 3, -4);
    scene.add(fill);

    // ---------- 3D grid backdrop: a floor and back wall lit by the key light ----------
    // Lines shade from white where the light falls to gray in shadow, and fade with distance.
    function addGrid(lightPos) {
      function gridMaterial(normal, cell, strength) {
        return new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms: {
            uLight: { value: lightPos.clone() },
            uNormal: { value: normal },
            uCell: { value: cell },
            uStrength: { value: strength },
            uWhite: { value: new THREE.Color(0xf8fafc) },
            uGray: { value: new THREE.Color(0x64748b) }
          },
          vertexShader:
            "varying vec3 vW; varying vec2 vP;" +
            "void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vP = position.xy;" +
            "gl_Position = projectionMatrix * viewMatrix * w; }",
          fragmentShader:
            "uniform vec3 uLight; uniform vec3 uNormal; uniform float uCell; uniform float uStrength;" +
            "uniform vec3 uWhite; uniform vec3 uGray; varying vec3 vW; varying vec2 vP;" +
            "float grid(vec2 p, float s){ vec2 c = p / s; vec2 g = abs(fract(c - 0.5) - 0.5) / fwidth(c);" +
            "return 1.0 - min(min(g.x, g.y), 1.0); }" +
            "void main(){" +
            " float minor = grid(vP, uCell); float major = grid(vP, uCell * 5.0);" +
            " vec3 L = uLight - vW; float d = length(L);" +
            " float lambert = max(dot(normalize(uNormal), L / d), 0.0);" +
            " float pool = clamp(1.0 - d / 16.0, 0.0, 1.0);" +
            " float shade = clamp(lambert * pool * 2.0, 0.0, 1.0);" +
            " float edge = smoothstep(0.0, 0.18, 0.5 - max(abs(vP.x) / 30.0, abs(vP.y) / 18.0));" +
            " float a = max(minor * 0.6, major) * (0.2 + 0.8 * shade) * edge * uStrength;" +
            " gl_FragColor = vec4(mix(uGray, uWhite, shade), a); }"
        });
      }
      var floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 18, 1, 1), gridMaterial(new THREE.Vector3(0, 1, 0), 0.5, 1));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -0.85;
      floor.renderOrder = -2;
      var wall = new THREE.Mesh(new THREE.PlaneGeometry(30, 18, 1, 1), gridMaterial(new THREE.Vector3(0, 0, 1), 0.5, 0.6));
      wall.position.set(0, 8.15, -4.6);
      wall.renderOrder = -2;
      scene.add(floor, wall);
    }
    addGrid(new THREE.Vector3(2.5, 6.5, 4.5));

    // ---------- Shape helpers ----------
    function std(color, o) {
      o = o || {};
      return new THREE.MeshStandardMaterial({
        color: o.base !== undefined ? o.base : color,
        emissive: color,
        emissiveIntensity: o.glow !== undefined ? o.glow : 0.3,
        roughness: o.rough !== undefined ? o.rough : 0.42,
        metalness: 0.05,
        transparent: true,
        opacity: o.opacity !== undefined ? o.opacity : 1,
        depthWrite: o.depthWrite !== undefined ? o.depthWrite : true,
        side: o.side || THREE.FrontSide
      });
    }
    function fresnel(color, base, rim) {
      return new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uColor: { value: new THREE.Color(color) }, uBase: { value: base }, uRim: { value: rim }, uDim: { value: 1 } },
        vertexShader:
          "varying vec3 vN; varying vec3 vV;" +
          "void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);" +
          "vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",
        fragmentShader:
          "uniform vec3 uColor; uniform float uBase; uniform float uRim; uniform float uDim;" +
          "varying vec3 vN; varying vec3 vV;" +
          "void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);" +
          "gl_FragColor = vec4(uColor, (uBase + f * uRim) * uDim); }"
      });
    }
    function tube(points, r, mat) {
      return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), Math.max(24, points.length * 16), r, 6, false), mat);
    }
    function mesh(geo, mat, x, y, z) {
      var m = new THREE.Mesh(geo, mat);
      m.position.set(x || 0, y || 0, z || 0);
      return m;
    }
    function arrow(from, to, r, mat) {
      var g = new THREE.Group();
      var dir = to.clone().sub(from);
      var len = dir.length();
      var head = Math.min(0.2, len * 0.38);
      var shaft = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len - head, 10), mat);
      shaft.position.y = (len - head) / 2;
      var cone = new THREE.Mesh(new THREE.ConeGeometry(r * 2.8, head, 14), mat);
      cone.position.y = len - head / 2;
      g.add(shaft, cone);
      g.position.copy(from);
      g.quaternion.setFromUnitVectors(V(0, 1, 0), dir.normalize());
      return g;
    }
    function capsule(mat, r, len) {
      return new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 6, 14), mat);
    }
    function helix(radius, length, turns, phase, mat, r) {
      var pts = [];
      for (var i = 0; i <= 64; i++) {
        var t = i / 64;
        var a = t * turns * Math.PI * 2 + phase;
        pts.push(V(-length / 2 + t * length, Math.cos(a) * radius, Math.sin(a) * radius));
      }
      return tube(pts, r || 0.018, mat);
    }
    function dna(length, y, matA, matB) {
      var g = new THREE.Group();
      g.add(helix(0.085, length, 2, 0, matA), helix(0.085, length, 2, Math.PI, matB));
      g.position.y = y;
      return g;
    }
    function hexToken(mat, r) {
      var m = new THREE.Mesh(new THREE.TorusGeometry(r, r * 0.22, 6, 6), mat);
      m.rotation.x = Math.PI / 2;
      return m;
    }
    function circleArrow(r, arc, mat, thick) {
      var ring = new THREE.Mesh(new THREE.TorusGeometry(r, thick || 0.02, 8, 64, arc), mat);
      var head = new THREE.Mesh(new THREE.ConeGeometry((thick || 0.02) * 3, 0.14, 14), mat);
      head.position.set(Math.cos(arc) * r, Math.sin(arc) * r, 0);
      head.rotation.z = arc;
      ring.add(head);
      return ring;
    }
    function waveTube(mat, len, amp, waves) {
      var pts = [];
      for (var i = 0; i <= 40; i++) {
        var t = i / 40;
        pts.push(V(-len / 2 + t * len, Math.sin(t * waves * Math.PI * 2) * amp, 0));
      }
      return tube(pts, 0.013, mat);
    }

    // ---------- Stage shapes ----------
    var SHAPES = {
      // YAP/TAZ signal-resolution circuit (homepage highlighted study)
      mech: function (g, c) {
        var slab = mesh(new THREE.BoxGeometry(1.5, 0.14, 1.05), std(c, { base: 0x1e3a8a, glow: 0.22 }), 0, -0.45, 0);
        var grid = mesh(new THREE.BoxGeometry(1.5, 0.002, 1.05, 6, 1, 4), new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.35 }), 0, -0.375, 0);
        var f = std(c, { glow: 0.55 });
        g.add(slab, grid,
          arrow(V(-0.35, 0.55, 0.1), V(-0.35, -0.33, 0.1), 0.028, f),
          arrow(V(0, 0.7, -0.15), V(0, -0.33, -0.15), 0.028, f),
          arrow(V(0.35, 0.55, 0.1), V(0.35, -0.33, 0.1), 0.028, f),
          arrow(V(-0.78, -0.45, 0), V(-1.1, -0.45, 0), 0.024, f),
          arrow(V(0.78, -0.45, 0), V(1.1, -0.45, 0), 0.024, f));
      },
      sensing: function (g, c) {
        var geo = new THREE.PlaneGeometry(1.5, 1.1, 30, 20);
        var p = geo.attributes.position;
        for (var i = 0; i < p.count; i++) p.setZ(i, 0.12 * Math.cos(p.getX(i) * 2.0) * Math.cos(p.getY(i) * 2.4));
        geo.computeVertexNormals();
        var membrane = new THREE.Mesh(geo, std(c, { base: 0x0e7490, glow: 0.18, opacity: 0.38, depthWrite: false, side: THREE.DoubleSide }));
        membrane.rotation.x = -Math.PI / 2;
        membrane.position.y = -0.38;
        g.add(membrane);
        var plaque = std(c, { glow: 0.6 });
        var actin = std(c, { glow: 0.45, opacity: 0.9 });
        var hub = V(0.05, 0.42, 0);
        [[-0.5, 0.25], [0.05, -0.32], [0.5, 0.22]].forEach(function (e) {
          g.add(mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 20), plaque, e[0], -0.42, e[1]));
          g.add(tube([V(e[0], -0.4, e[1]), V(e[0] * 0.6, 0.05, e[1] * 0.6), hub], 0.016, actin));
        });
        var env = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 10, 40, Math.PI * 0.7), std(0xc4b5fd, { glow: 0.35 }));
        env.position.set(0.05, 0.66, 0);
        env.rotation.z = Math.PI * 1.15;
        g.add(env, tube([hub, V(0.05, 0.56, 0)], 0.012, std(c, { glow: 0.8 })));
      },
      hippo: function (g, c) {
        var mst = mesh(new THREE.OctahedronGeometry(0.22), std(c, { glow: 0.35, rough: 0.3 }), -0.42, 0.42, -0.1);
        var lats = mesh(new THREE.DodecahedronGeometry(0.25), std(c, { glow: 0.35, rough: 0.3 }), 0, 0, 0.05);
        var yap = capsule(std(0x67e8f9, { glow: 0.5 }), 0.1, 0.26);
        yap.position.set(0.42, -0.38, 0.1);
        yap.rotation.z = Math.PI / 2.6;
        var ph = std(0xf8fafc, { glow: 0.3 });
        var link = std(c, { glow: 0.5, opacity: 0.85 });
        g.add(mst, lats, yap,
          mesh(new THREE.SphereGeometry(0.045, 12, 8), ph, 0.34, -0.25, 0.2),
          mesh(new THREE.SphereGeometry(0.045, 12, 8), ph, 0.53, -0.47, 0.2),
          arrow(V(-0.3, 0.3, -0.06), V(-0.13, 0.13, 0), 0.016, link),
          arrow(V(0.14, -0.14, 0.07), V(0.3, -0.27, 0.09), 0.016, link));
      },
      nucleus: function (g, c) {
        g.add(mesh(new THREE.SphereGeometry(0.62, 48, 32), fresnel(c, 0.06, 0.55)));
        var pore = std(c, { glow: 0.5 });
        [[0.3, 0.5], [1.4, 0.2], [2.5, 0.9], [3.6, 0.4], [4.8, 0.7], [5.6, 1.2]].forEach(function (a) {
          var dir = V(Math.cos(a[0]) * Math.sin(a[1] + 0.6), Math.cos(a[1] + 0.6), Math.sin(a[0]) * Math.sin(a[1] + 0.6)).normalize();
          var m = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.018, 8, 20), pore);
          m.position.copy(dir.clone().multiplyScalar(0.62));
          m.quaternion.setFromUnitVectors(V(0, 0, 1), dir);
          g.add(m);
        });
        g.add(dna(0.95, -0.12, std(0x93c5fd, { glow: 0.4 }), std(0xc4b5fd, { glow: 0.4 })));
        g.add(mesh(new THREE.BoxGeometry(0.2, 0.13, 0.17), std(0xa5b4fc, { glow: 0.45 }), 0.05, 0.02, 0));
        var yap = capsule(std(0x67e8f9, { glow: 0.55 }), 0.075, 0.2);
        yap.position.set(0.05, 0.2, 0);
        yap.rotation.z = Math.PI / 2;
        g.add(yap);
      },
      termination: function (g, c) {
        var ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.05, 14, 48), std(0xc4b5fd, { glow: 0.3 }));
        ring.rotation.y = Math.PI / 2;
        ring.position.x = -0.3;
        var yap = capsule(std(0x67e8f9, { glow: 0.4, opacity: 0.9 }), 0.085, 0.22);
        yap.rotation.z = Math.PI / 2;
        yap.position.set(0.12, 0.05, 0);
        g.add(ring, yap, mesh(new THREE.SphereGeometry(0.045, 12, 8), std(0xf8fafc, { glow: 0.3 }), 0.2, 0.17, 0.04),
          arrow(V(-0.55, 0.05, 0), V(-0.05, 0.05, 0), 0.02, std(c, { glow: 0.6 })));
        var frag = std(c, { glow: 0.45, opacity: 0.75 });
        [[0.5, -0.2, 0.2, 0.07], [0.62, -0.35, -0.1, 0.055], [0.75, -0.5, 0.12, 0.045]].forEach(function (f) {
          g.add(mesh(new THREE.TetrahedronGeometry(f[3]), frag, f[0], f[1], f[2]));
        });
      },
      baseline: function (g, c) {
        g.add(mesh(new THREE.BoxGeometry(1.5, 0.14, 1.05), std(c, { base: 0x14532d, glow: 0.2 }), 0, -0.45, 0));
        var dome = mesh(new THREE.SphereGeometry(0.5, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), std(c, { base: 0x166534, glow: 0.25, opacity: 0.45, depthWrite: false }), 0, -0.38, 0);
        dome.scale.set(1.25, 0.55, 0.95);
        var nuc = mesh(new THREE.SphereGeometry(0.17, 24, 16), std(0xc4b5fd, { glow: 0.3 }), 0, -0.27, 0);
        nuc.scale.set(1.2, 0.6, 1);
        var cyc = circleArrow(0.42, Math.PI * 1.6, std(c, { glow: 0.6 }), 0.02);
        cyc.position.y = 0.42;
        cyc.rotation.x = -Math.PI / 2.3;
        g.add(dome, nuc, cyc);
      },

      // UPR proteotoxic stress-resolution circuit (homepage highlighted study)
      toxinput: function (g, c) {
        // An ER membrane strip with incoming toxicant particles perturbing proteostasis.
        g.add(mesh(new THREE.BoxGeometry(1.4, 0.08, 1.0), std(0x0e7490, { base: 0x0e7490, glow: 0.2, opacity: 0.5, depthWrite: false }), 0, -0.4, 0));
        var tox = std(c, { glow: 0.5, rough: 0.5 });
        [[-0.3, 0.35, 0.1], [0.1, 0.55, -0.15], [0.35, 0.3, 0.2], [-0.1, 0.2, -0.25], [0.2, 0.1, 0.05], [-0.35, 0.15, -0.1]].forEach(function (p, i) {
          var m = mesh(new THREE.IcosahedronGeometry(0.07, 0), tox, p[0], p[1], p[2]);
          m.rotation.set(i, i * 0.7, 0); g.add(m);
        });
        var f = std(c, { glow: 0.6 });
        g.add(arrow(V(0, 0.65, 0.3), V(0, -0.28, 0.3), 0.024, f), arrow(V(-0.4, 0.5, -0.1), V(-0.4, -0.28, -0.1), 0.02, f));
      },
      ersensors: function (g, c) {
        // ER membrane with the three transmembrane sensors: IRE1a, PERK and ATF6.
        var geo = new THREE.PlaneGeometry(1.5, 1.0, 20, 14);
        var p = geo.attributes.position;
        for (var i = 0; i < p.count; i++) p.setZ(i, 0.08 * Math.cos(p.getX(i) * 2.2));
        geo.computeVertexNormals();
        var membrane = new THREE.Mesh(geo, std(c, { base: 0x0e7490, glow: 0.16, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide }));
        membrane.rotation.x = -Math.PI / 2; membrane.position.y = -0.1; g.add(membrane);
        [[-0.45, 0xf87171], [0.0, 0xa5b4fc], [0.45, 0x86efac]].forEach(function (s) {
          var bar = capsule(std(s[1], { glow: 0.5 }), 0.08, 0.34);
          bar.position.set(s[0], -0.1, 0); g.add(bar);
          g.add(mesh(new THREE.IcosahedronGeometry(0.1, 0), std(s[1], { glow: 0.45 }), s[0], -0.36, 0));
        });
      },
      branchout: function (g, c) {
        // Three diverging branch outputs: XBP1 RNA, the PERK-eIF2a chain and an ATF6 vesicle.
        var rna = waveTube(std(0xf87171, { glow: 0.5 }), 0.55, 0.05, 2.5); rna.position.set(-0.4, 0.28, 0); rna.rotation.z = 0.3; g.add(rna);
        var chain = std(0xa5b4fc, { glow: 0.5 });
        for (var i = 0; i < 3; i++) g.add(mesh(new THREE.SphereGeometry(0.06, 12, 8), chain, -0.05, 0.28 - i * 0.18, 0));
        g.add(mesh(new THREE.SphereGeometry(0.03, 8, 6), std(0xfacc15, { glow: 0.6 }), 0.02, 0.28, 0));
        g.add(mesh(new THREE.SphereGeometry(0.08, 14, 10), std(0x86efac, { glow: 0.5 }), 0.4, -0.08, 0.1));
        for (var k = 0; k < 3; k++) { var tr = new THREE.Mesh(new THREE.TorusGeometry(0.12 - k * 0.02, 0.016, 8, 24, 1.8), std(0x86efac, { glow: 0.3 })); tr.scale.set(1, 1, 0.5); tr.rotation.set(Math.PI / 2, 0, 0.5); tr.position.set(0.52 + k * 0.04, 0.16, 0); g.add(tr); }
      },
      immuneout: function (g, c) {
        // An immune cell releasing mixed cytokines: the decoded immune output.
        g.add(mesh(new THREE.SphereGeometry(0.34, 32, 22), fresnel(c, 0.06, 0.5)));
        g.add(mesh(new THREE.SphereGeometry(0.14, 20, 14), std(0xa5b4fc, { glow: 0.3 }), 0.02, 0, 0));
        var cols = [0x67e8f9, 0xf87171, 0xfbbf24, 0x86efac, 0xc4b5fd, 0xf472b6];
        for (var i = 0; i < 10; i++) { var a = i * 2.39996, r = 0.5 + 0.12 * (i % 3); g.add(mesh(new THREE.SphereGeometry(0.035, 10, 8), std(cols[i % cols.length], { glow: 0.55 }), Math.cos(a) * r, Math.sin(a) * r * 0.7, Math.sin(a * 1.3) * 0.25)); }
      },
      recovery: function (g, c) {
        // Baseline restoration: ER proteostasis and immune function return, ready for the next exposure.
        var dome = mesh(new THREE.SphereGeometry(0.42, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), std(c, { base: 0x166534, glow: 0.25, opacity: 0.5, depthWrite: false }), 0, -0.3, 0);
        dome.scale.set(1.2, 0.7, 1);
        var cyc = circleArrow(0.44, Math.PI * 1.6, std(c, { glow: 0.6 }), 0.022); cyc.position.y = 0.38; cyc.rotation.x = -Math.PI / 2.3;
        g.add(dome, mesh(new THREE.SphereGeometry(0.16, 24, 16), std(0xa5b4fc, { glow: 0.3 }), 0, -0.18, 0), cyc);
      },

      // NRF2–KEAP1
      keap1: function (g, c) {
        // KEAP1 acts as a homodimer; reactive cysteines sit on its surface.
        var body = std(c, { glow: 0.32, rough: 0.35 });
        var a = mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.16, 7), body, -0.26, 0.05, 0);
        var b = mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.16, 7), body, 0.26, 0.05, 0);
        a.rotation.z = 0.35; b.rotation.z = -0.35;
        var bridge = mesh(new THREE.BoxGeometry(0.34, 0.1, 0.12), body, 0, 0.32, 0);
        g.add(a, b, bridge);
        var cys = std(0xfde047, { glow: 0.55 });
        [[-0.4, 0.24, 0.12], [-0.12, 0.27, -0.14], [0.14, 0.27, 0.14], [0.42, 0.22, -0.1]].forEach(function (p) {
          g.add(mesh(new THREE.SphereGeometry(0.045, 12, 8), cys, p[0], p[1], p[2]));
        });
      },
      cul3: function (g, c) {
        // Elongated cullin scaffold, RING partner and a ubiquitin chain.
        var scaffold = capsule(std(c, { glow: 0.32 }), 0.09, 0.85);
        scaffold.rotation.z = Math.PI / 2.4;
        g.add(scaffold);
        g.add(mesh(new THREE.SphereGeometry(0.13, 20, 14), std(0x93c5fd, { glow: 0.35 }), 0.36, -0.33, 0));
        var ub = std(0xe2e8f0, { glow: 0.25 });
        for (var i = 0; i < 4; i++) g.add(mesh(new THREE.SphereGeometry(0.06, 12, 8), ub, 0.5 + i * 0.09, -0.12 + i * 0.1, 0.05));
      },
      nrf2: function (g, c) {
        var gA = std(0x93c5fd, { glow: 0.4 });
        var gB = std(0xc4b5fd, { glow: 0.4 });
        g.add(dna(1.0, -0.22, gA, gB));
        var tf = capsule(std(c, { glow: 0.5 }), 0.08, 0.24);
        tf.rotation.z = Math.PI / 2;
        tf.position.set(-0.05, -0.02, 0);
        g.add(tf);
        var rna = waveTube(std(c, { glow: 0.55, opacity: 0.9 }), 0.6, 0.05, 2.5);
        rna.rotation.z = 0.9;
        rna.position.set(0.32, 0.3, 0);
        g.add(rna);
      },
      turnover: function (g, c) {
        // Proteasome-like barrel and an autophagic double membrane.
        var ring = std(c, { glow: 0.3, rough: 0.35 });
        for (var i = 0; i < 4; i++) {
          var r = mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.09, 14), ring, -0.25, -0.2 + i * 0.11, 0);
          g.add(r);
        }
        var outer = mesh(new THREE.SphereGeometry(0.3, 28, 18, 0, Math.PI * 1.6), std(0xc4b5fd, { glow: 0.25, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide }), 0.35, 0.05, 0);
        var inner = mesh(new THREE.SphereGeometry(0.24, 24, 16, 0, Math.PI * 1.6), std(0xc4b5fd, { glow: 0.2, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide }), 0.35, 0.05, 0);
        g.add(outer, inner);
        g.add(mesh(new THREE.TetrahedronGeometry(0.07), std(0x34d399, { glow: 0.4 }), 0.35, 0.05, 0));
      },
      redox: function (g, c) {
        // Reducing-capacity cycle: NADPH-dependent thiol systems.
        var ring = circleArrow(0.36, Math.PI * 1.65, std(c, { glow: 0.55 }), 0.022);
        ring.rotation.x = -Math.PI / 2.4;
        g.add(ring);
        var tok = std(0x67e8f9, { glow: 0.45 });
        for (var i = 0; i < 5; i++) {
          var a = i / 5 * Math.PI * 2;
          var h = hexToken(tok, 0.07);
          h.position.set(Math.cos(a) * 0.36, Math.sin(a) * 0.36 * Math.cos(Math.PI / 2.4) - 0.05, -Math.sin(a) * 0.36 * Math.sin(Math.PI / 2.4) * 0.3);
          g.add(h);
        }
      },
      outcome: function (g, c) {
        // Two possible trajectories: adaptation or persistence, decided by context and time.
        var base = mesh(new THREE.SphereGeometry(0.12, 18, 12), std(c, { glow: 0.45 }), -0.35, -0.1, 0);
        g.add(base);
        g.add(tube([V(-0.25, -0.08, 0), V(0.05, 0.2, 0.05), V(0.45, 0.35, 0)], 0.022, std(0x86efac, { glow: 0.55 })));
        g.add(tube([V(-0.25, -0.12, 0), V(0.05, -0.3, -0.05), V(0.45, -0.36, 0)], 0.022, std(0xfb923c, { glow: 0.55 })));
        g.add(mesh(new THREE.ConeGeometry(0.06, 0.14, 12), std(0x86efac, { glow: 0.55 }), 0.48, 0.36, 0));
        g.add(mesh(new THREE.ConeGeometry(0.06, 0.14, 12), std(0xfb923c, { glow: 0.55 }), 0.48, -0.37, 0));
        g.children[g.children.length - 2].rotation.z = -Math.PI / 2;
        g.children[g.children.length - 1].rotation.z = -Math.PI / 2;
      },

      // AhR–CYP1A1
      ligands: function (g, c) {
        // A pool of small planar ligands (schematic hexagons).
        var mat = std(c, { glow: 0.5 });
        var spots = [[-0.3, 0.1, 0.2], [0.05, 0.3, -0.1], [0.32, 0.05, 0.18], [-0.12, -0.15, -0.2], [0.2, -0.22, 0.05], [-0.38, -0.2, 0.05], [0.0, 0.0, 0.32]];
        spots.forEach(function (p, i) {
          var h = hexToken(mat, 0.09);
          h.position.set(p[0], p[1], p[2]);
          h.rotation.set(Math.PI / 2 + i * 0.4, i * 0.6, 0);
          g.add(h);
        });
        var cloud = mesh(new THREE.SphereGeometry(0.55, 28, 18), fresnel(c, 0.02, 0.35), 0, 0, 0);
        g.add(cloud);
      },
      ahr: function (g, c) {
        // Ligand-bound AhR partners with ARNT on DNA.
        g.add(dna(1.0, -0.24, std(0x93c5fd, { glow: 0.4 }), std(0xc4b5fd, { glow: 0.4 })));
        var ahr = capsule(std(c, { glow: 0.45 }), 0.1, 0.22);
        ahr.position.set(-0.12, 0.02, 0);
        ahr.rotation.z = 0.3;
        var arnt = capsule(std(0x67e8f9, { glow: 0.4 }), 0.09, 0.2);
        arnt.position.set(0.12, 0.0, 0);
        arnt.rotation.z = -0.3;
        var lig = hexToken(std(0x67e8f9, { glow: 0.6 }), 0.06);
        lig.position.set(-0.2, 0.25, 0.05);
        g.add(ahr, arnt, lig);
      },
      induction: function (g, c) {
        // Delay: transcript to protein, with a timer ring.
        var rna = waveTube(std(c, { glow: 0.5 }), 0.7, 0.05, 2.5);
        rna.position.set(-0.15, -0.15, 0);
        g.add(rna);
        g.add(mesh(new THREE.IcosahedronGeometry(0.17, 0), std(0xfb923c, { glow: 0.35, rough: 0.35 }), 0.32, 0.18, 0));
        var timer = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.018, 8, 64, Math.PI * 1.3), std(c, { glow: 0.6 }));
        timer.position.set(-0.05, 0.25, -0.15);
        timer.rotation.z = Math.PI / 2;
        g.add(timer);
      },
      cyp: function (g, c) {
        // CYP1A1 enzyme with a heme disc acting on a susceptible ligand.
        g.add(mesh(new THREE.IcosahedronGeometry(0.3, 1), std(c, { glow: 0.3, rough: 0.35 }), 0, 0, 0));
        var heme = mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.03, 20), std(0xef4444, { glow: 0.5 }), 0, 0.31, 0);
        g.add(heme);
        var lig = hexToken(std(0x67e8f9, { glow: 0.6 }), 0.07);
        lig.position.set(-0.42, 0.25, 0.05);
        g.add(lig);
        var frag = std(0x67e8f9, { glow: 0.35, opacity: 0.6 });
        [[0.42, 0.28, 0.05, 0.05], [0.55, 0.15, -0.05, 0.04], [0.62, 0.32, 0.1, 0.03]].forEach(function (f) {
          g.add(mesh(new THREE.TetrahedronGeometry(f[3]), frag, f[0], f[1], f[2]));
        });
      },
      feedback: function (g, c) {
        var loop = circleArrow(0.34, Math.PI * 1.6, std(c, { glow: 0.6 }), 0.024);
        loop.rotation.y = Math.PI;
        g.add(loop);
        g.add(mesh(new THREE.TorusGeometry(0.12, 0.02, 8, 24), std(c, { glow: 0.4, opacity: 0.6 }), 0, 0, 0));
      },
      tissue: function (g, c) {
        // Barrier epithelium with a nearby immune cell.
        var cell = std(c, { base: 0x14532d, glow: 0.25, opacity: 0.9 });
        for (var i = 0; i < 5; i++) g.add(mesh(new THREE.BoxGeometry(0.2, 0.32, 0.5), cell, -0.44 + i * 0.22, -0.3, 0));
        g.add(mesh(new THREE.SphereGeometry(0.15, 20, 14), std(0xa5b4fc, { glow: 0.35 }), 0.1, 0.12, 0.15));
      },

      // Condensate kinetic filter
      pulse: function (g, c) {
        var pts = [V(-0.55, -0.2, 0), V(-0.35, -0.2, 0), V(-0.34, 0.25, 0), V(-0.15, 0.25, 0), V(-0.14, -0.2, 0), V(0.1, -0.2, 0), V(0.11, 0.25, 0), V(0.45, 0.25, 0), V(0.46, -0.2, 0), V(0.6, -0.2, 0)];
        var path = new THREE.CurvePath();
        for (var i = 0; i < pts.length - 1; i++) path.add(new THREE.LineCurve3(pts[i], pts[i + 1]));
        g.add(new THREE.Mesh(new THREE.TubeGeometry(path, 120, 0.02, 6, false), std(c, { glow: 0.6 })));
        g.add(mesh(new THREE.BoxGeometry(1.25, 0.012, 0.012), std(0x64748b, { glow: 0.2 }), 0.02, -0.23, 0));
      },
      barrier: function (g, c) {
        // Nucleation barrier: an input must cross a threshold before assembly.
        var geo = new THREE.PlaneGeometry(1.4, 0.9, 40, 20);
        var p = geo.attributes.position;
        for (var i = 0; i < p.count; i++) {
          var x = p.getX(i);
          p.setZ(i, 0.42 * Math.exp(-(x * x) / 0.06));
        }
        geo.computeVertexNormals();
        var hill = new THREE.Mesh(geo, std(c, { glow: 0.3, opacity: 0.7, depthWrite: false, side: THREE.DoubleSide }));
        hill.rotation.x = -Math.PI / 2;
        hill.position.y = -0.35;
        g.add(hill);
        g.add(mesh(new THREE.SphereGeometry(0.07, 14, 10), std(0x67e8f9, { glow: 0.6 }), -0.45, -0.28, 0));
        g.add(mesh(new THREE.SphereGeometry(0.11, 16, 12), std(0x67e8f9, { glow: 0.5 }), 0.45, -0.24, 0));
      },
      droplet: function (g, c) {
        // A condensate exchanging molecules with its surroundings.
        g.add(mesh(new THREE.SphereGeometry(0.45, 40, 28), fresnel(c, 0.07, 0.6), 0, 0, 0));
        var inside = std(c, { glow: 0.55 });
        for (var i = 0; i < 16; i++) {
          var a = i * 2.39996, r = 0.32 * Math.sqrt((i + 0.5) / 16), y = ((i * 37) % 10) / 10 - 0.5;
          g.add(mesh(new THREE.SphereGeometry(0.035, 10, 8), inside, Math.cos(a) * r, y * 0.5, Math.sin(a) * r));
        }
      },
      lifetime: function (g, c) {
        g.add(mesh(new THREE.SphereGeometry(0.36, 32, 24), fresnel(c, 0.07, 0.55), 0, 0, 0));
        var clock = circleArrow(0.52, Math.PI * 1.5, std(c, { glow: 0.55 }), 0.02);
        clock.rotation.x = -Math.PI / 2.5;
        g.add(clock);
      },
      dissolve: function (g, c) {
        var mat = fresnel(c, 0.08, 0.6);
        [[-0.2, 0.05, 0, 0.22], [0.18, 0.2, 0.1, 0.13], [0.3, -0.15, -0.1, 0.1], [0.45, 0.32, 0.05, 0.06], [0.55, 0.0, 0.12, 0.05]].forEach(function (d) {
          g.add(mesh(new THREE.SphereGeometry(d[3], 24, 16), mat, d[0], d[1], d[2]));
        });
      },
      bursts: function (g, c) {
        g.add(dna(1.0, -0.25, std(0x93c5fd, { glow: 0.4 }), std(0xc4b5fd, { glow: 0.4 })));
        var rna = std(c, { glow: 0.55, opacity: 0.9 });
        [-0.25, -0.15, 0.25].forEach(function (x, i) {
          var w = waveTube(rna, 0.45, 0.035, 2);
          w.rotation.z = Math.PI / 2;
          w.position.set(x, 0.05 + i * 0.03, 0);
          g.add(w);
        });
      }
    };

    // ---------- Build stages ----------
    var STAGE_SCALE = config.scale || 1.2;
    var anchors = config.stages.map(function (s) { return V(s.at[0], s.at[1], s.at[2]); });
    var groups = [];
    var pickers = [];
    config.stages.forEach(function (s, i) {
      var g = new THREE.Group();
      g.position.copy(anchors[i]);
      SHAPES[s.shape](g, s.color);
      var halo = new THREE.Mesh(
        new THREE.RingGeometry(0.72, 0.8, 64),
        new THREE.MeshBasicMaterial({ color: s.color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      );
      halo.rotation.x = -Math.PI / 2;
      halo.position.y = -0.55;
      halo.userData.halo = true;
      g.add(halo);
      if (s.button >= 0) {
        var hit = new THREE.Mesh(new THREE.SphereGeometry(0.85, 12, 8), new THREE.MeshBasicMaterial({ visible: false }));
        hit.userData.stage = i;
        g.add(hit);
        pickers.push(hit);
      }
      var mats = [];
      g.traverse(function (o) {
        if (o.material && !o.userData.halo && o.material.visible !== false && mats.indexOf(o.material) === -1) {
          mats.push(o.material);
          o.material.userData.baseOpacity = o.material.uniforms ? 1 : o.material.opacity;
          o.material.userData.baseGlow = o.material.emissiveIntensity;
        }
      });
      g.userData = { mats: mats, halo: halo, focus: 0 };
      scene.add(g);
      groups.push(g);
    });

    // ---------- Paths: forward flow, feedback, inhibition, branches ----------
    var curves = [];
    config.paths.forEach(function (p) {
      var pts = [];
      p.through.forEach(function (idx, k) {
        var a = anchors[idx].clone();
        pts.push(a);
        if (k < p.through.length - 1) {
          var b = anchors[p.through[k + 1]];
          var m = a.clone().lerp(b, 0.5);
          if (p.arc) { m.y += p.arc; m.z -= 1.6; } else m.y += 0.08;
          pts.push(m);
        }
      });
      var curve = new THREE.CatmullRomCurve3(pts, false, "centripetal");
      var kindColor = new THREE.Color(p.color);
      if (p.kind === "return") {
        var dots = curve.getSpacedPoints(70);
        scene.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(dots), new THREE.PointsMaterial({ color: p.color, size: 0.045, transparent: true, opacity: 0.5, depthWrite: false })));
      } else {
        var r = p.kind === "forward" ? 0.016 : 0.013;
        scene.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 220, r, 6, false), new THREE.MeshBasicMaterial({ color: p.color, transparent: true, opacity: p.kind === "forward" ? 0.32 : 0.4, depthWrite: false })));
      }
      // Direction marker near the end of feedback and branch paths; a T-bar for inhibition.
      var end = curve.getPointAt(0.97);
      var tangent = curve.getTangentAt(0.97);
      if (p.kind === "inhibit") {
        var bar = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.05, 0.05), std(p.color, { glow: 0.7 }));
        bar.position.copy(end);
        bar.quaternion.setFromUnitVectors(V(1, 0, 0), tangent.clone().cross(V(0, 1, 0)).normalize());
        scene.add(bar);
      } else if (p.kind !== "forward") {
        var cone = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 14), std(p.color, { glow: 0.7 }));
        cone.position.copy(end);
        cone.quaternion.setFromUnitVectors(V(0, 1, 0), tangent);
        scene.add(cone);
      }
      curves.push({ curve: curve, cfg: p, color: kindColor, count: p.kind === "return" ? 6 : (p.kind === "forward" ? 14 : 9) });
    });

    // External input marker (for example, redox stress entering the sensor).
    var inputLabelAnchor = null;
    if (config.input) {
      var from = V(config.input.from[0], config.input.from[1], config.input.from[2]);
      var to = anchors[config.input.to].clone().add(V(-0.75, 0.25, 0));
      scene.add(arrow(from, to, 0.025, std(config.input.color, { glow: 0.7 })));
      inputLabelAnchor = from.clone().add(V(0, 0.45, 0));
    }

    // ---------- Particles ----------
    var total = 0;
    curves.forEach(function (c) { total += c.count; });
    var pGeo = new THREE.BufferGeometry();
    var pPos = new Float32Array(total * 3);
    var pAlpha = new Float32Array(total);
    var pCol = new Float32Array(total * 3);
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("alpha", new THREE.BufferAttribute(pAlpha, 1));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
    scene.add(new THREE.Points(pGeo, new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uSize: { value: 60.0 * renderer.getPixelRatio() } },
      vertexShader:
        "attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float uSize;" +
        "void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0);" +
        "gl_PointSize = uSize / -mv.z; gl_Position = projectionMatrix * mv; }",
      fragmentShader:
        "varying float vA; varying vec3 vC;" +
        "void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d);" +
        "gl_FragColor = vec4(vC, a * a * vA); }"
    })));
    var tmp = V(0, 0, 0);
    function updateParticles(t) {
      var n = 0;
      curves.forEach(function (c) {
        for (var i = 0; i < c.count; i++, n++) {
          var u = (t * c.cfg.speed + i / c.count) % 1;
          c.curve.getPointAt(u, tmp);
          var a = Math.min(1, u * 8) * Math.min(1, (1 - u) * 8);
          if (c.cfg.kind === "return") a *= 0.4;
          // Kinetic filter: fast fluctuations thin out after the barrier stage.
          if (c.cfg.filter && u > 0.22 && i % 3 === 0) a *= 0.15;
          pPos[n * 3] = tmp.x; pPos[n * 3 + 1] = tmp.y; pPos[n * 3 + 2] = tmp.z;
          pCol[n * 3] = c.color.r; pCol[n * 3 + 1] = c.color.g; pCol[n * 3 + 2] = c.color.b;
          pAlpha[n] = a * 0.9;
        }
      });
      pGeo.attributes.position.needsUpdate = true;
      pGeo.attributes.alpha.needsUpdate = true;
      pGeo.attributes.color.needsUpdate = true;
    }

    // ---------- Labels ----------
    function hex(c) { return "#" + ("000000" + c.toString(16)).slice(-6); }
    var labels = config.stages.map(function (s, i) {
      var el = document.createElement("div");
      el.className = "y3d-label" + (s.button < 0 ? " is-context" : "");
      el.style.setProperty("--y3d-color", hex(s.color));
      var num = s.button >= 0 ? String(s.button + 1).padStart(2, "0") : "•";
      el.innerHTML = "<b></b><span></span>";
      el.querySelector("b").textContent = num;
      el.querySelector("span").textContent = s.name;
      if (s.button >= 0) el.addEventListener("click", function () { buttons[s.button].click(); });
      labelsEl.appendChild(el);
      return el;
    });
    var inputLabel = null;
    if (inputLabelAnchor) {
      inputLabel = document.createElement("div");
      inputLabel.className = "y3d-label is-context";
      inputLabel.style.setProperty("--y3d-color", hex(config.input.color));
      inputLabel.innerHTML = "<b>!</b><span></span>";
      inputLabel.querySelector("span").textContent = config.input.label;
      labelsEl.appendChild(inputLabel);
    }
    var labelAbove = V(0, 1.12 * STAGE_SCALE / 1.2, 0);
    var labelBelow = V(0, -0.95 * STAGE_SCALE / 1.2, 0);
    // In loop layouts, front-row labels sit under their shape so they never cover the back row.
    var below = config.stages.map(function (s) { return s.at[2] > 1; });

    // ---------- Camera ----------
    var bounds = 0;
    anchors.forEach(function (a) { bounds = Math.max(bounds, Math.abs(a.x)); });
    if (config.input) bounds = Math.max(bounds, Math.abs(config.input.from[0]) - 0.6);
    var lift = config.lift !== undefined ? config.lift : 0.7;
    var HOME = { yaw: 0, pitch: config.pitch, target: V(0, lift, 0) };
    var view = { yaw: HOME.yaw, pitch: HOME.pitch, radius: 10, target: HOME.target.clone() };
    var goal = { yaw: HOME.yaw, pitch: HOME.pitch, zoom: 1, target: HOME.target.clone() };
    var fitRadius = 10;

    function clampGoal() {
      goal.yaw = Math.max(-1.05, Math.min(1.05, goal.yaw));
      goal.pitch = Math.max(0.06, Math.min(1.0, goal.pitch));
      goal.zoom = Math.max(0.62, Math.min(1.25, goal.zoom));
    }
    function placeCamera() {
      var r = view.radius;
      camera.position.set(
        view.target.x + r * Math.sin(view.yaw) * Math.cos(view.pitch),
        view.target.y + r * Math.sin(view.pitch),
        view.target.z + r * Math.cos(view.yaw) * Math.cos(view.pitch)
      );
      camera.lookAt(view.target);
    }

    var selected = activeStage();
    var hovered = -1;
    function focusStage(i) {
      selected = i;
      goal.target.copy(anchors[i]).multiplyScalar(0.18).add(V(0, lift, 0));
      labels.forEach(function (l, k) { l.classList.toggle("is-active", k === i); });
      if (config.focusClass) {
        buttons.forEach(function (b, bi) { b.classList.toggle(config.focusClass, bi === config.stages[i].button); });
      }
      kick();
    }
    function resetView() {
      goal.yaw = HOME.yaw;
      goal.pitch = HOME.pitch;
      goal.zoom = 1;
      goal.target.copy(HOME.target);
      kick();
    }
    buttons.forEach(function (b, bi) {
      b.addEventListener("click", function () {
        for (var s = 0; s < config.stages.length; s++) if (config.stages[s].button === bi) focusStage(s);
      });
    });

    // ---------- Controls ----------
    var raycaster = new THREE.Raycaster();
    var ndc = new THREE.Vector2();
    var drag = null;
    var canvas = renderer.domElement;
    function pick(e) {
      var rect = canvas.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      var hit = raycaster.intersectObjects(pickers, false)[0];
      return hit ? hit.object.userData.stage : -1;
    }
    canvas.addEventListener("pointerdown", function (e) {
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0, yaw: goal.yaw, pitch: goal.pitch };
    });
    canvas.addEventListener("pointermove", function (e) {
      if (drag && drag.id === e.pointerId) {
        var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
        if (drag.moved > 4) {
          if (!drag.captured) {
            try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
            drag.captured = true;
            stageEl.classList.add("is-dragging");
          }
          goal.yaw = drag.yaw - dx * 0.006;
          if (e.pointerType === "mouse") goal.pitch = drag.pitch + dy * 0.004;
          clampGoal();
          kick();
        }
        return;
      }
      if (e.pointerType === "mouse") {
        var h = pick(e);
        if (h !== hovered) { hovered = h; canvas.style.cursor = h >= 0 ? "pointer" : ""; kick(); }
      }
    });
    function endDrag(e) {
      if (!drag || drag.id !== e.pointerId) return;
      var click = drag.moved <= 4 && e.type === "pointerup";
      drag = null;
      stageEl.classList.remove("is-dragging");
      if (click) {
        var i = pick(e);
        if (i >= 0) buttons[config.stages[i].button].click();
      }
    }
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", function () {
      if (hovered !== -1) { hovered = -1; canvas.style.cursor = ""; kick(); }
    });
    canvas.addEventListener("wheel", function (e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      goal.zoom *= Math.exp(e.deltaY * 0.0025);
      clampGoal();
      kick();
    }, { passive: false });
    wrap.querySelector('[data-act="zoom-in"]').addEventListener("click", function () { goal.zoom /= 1.15; clampGoal(); kick(); });
    wrap.querySelector('[data-act="zoom-out"]').addEventListener("click", function () { goal.zoom *= 1.15; clampGoal(); kick(); });
    wrap.querySelector('[data-act="reset"]').addEventListener("click", resetView);
    stageEl.addEventListener("keydown", function (e) {
      if (e.target !== stageEl) return;
      var handled = true;
      switch (e.key) {
        case "ArrowLeft": goal.yaw += 0.12; break;
        case "ArrowRight": goal.yaw -= 0.12; break;
        case "ArrowUp": goal.pitch += 0.08; break;
        case "ArrowDown": goal.pitch -= 0.08; break;
        case "+": case "=": goal.zoom /= 1.15; break;
        case "-": case "_": goal.zoom *= 1.15; break;
        case "0": case "Home": resetView(); break;
        default:
          var n = parseInt(e.key, 10);
          if (n >= 1 && n <= buttons.length) buttons[n - 1].click();
          else handled = false;
      }
      if (handled) { e.preventDefault(); clampGoal(); kick(); }
    });

    // ---------- Sizing ----------
    var width = 0, height = 0;
    function resize() {
      var w = stageEl.clientWidth, h = stageEl.clientHeight;
      if (!w || !h) return;
      width = w; height = h;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      var halfV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      fitRadius = Math.max(8, (bounds + (config.pad || 1.3)) / (halfV * camera.aspect) + 0.8);
      camera.updateProjectionMatrix();
      stageEl.classList.toggle("is-compact", w < 600);
      kick();
    }

    // ---------- Render loop ----------
    var visible = false, active = false, raf = 0, lastT = 0;
    var clock = new THREE.Clock();
    var projected = V(0, 0, 0);
    function place(el, point, under) {
      projected.copy(point).project(camera);
      var half = (el.offsetWidth || 0) / 2;
      var x = Math.max(half + 8, Math.min(width - half - 8, (projected.x * 0.5 + 0.5) * width));
      var lh = el.offsetHeight || 0;
      var y = (-projected.y * 0.5 + 0.5) * height;
      y = under ? Math.min(y, height - lh - 8) : Math.max(y, lh + 8);
      el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) translate(-50%," + (under ? "0" : "-100%") + ")";
      el.hidden = projected.z > 1;
    }
    function step() {
      raf = 0;
      if (!visible || !active || document.hidden || !width) return;
      var still = reduceMotion.matches;
      var dt = Math.min(0.1, clock.getDelta());
      var t = still ? lastT : clock.elapsedTime;
      lastT = t;
      var k = still ? 1 : 1 - Math.exp(-dt * 5.5);
      var kf = still ? 1 : 1 - Math.exp(-dt * 7.5);
      view.yaw += (goal.yaw - view.yaw) * k;
      view.pitch += (goal.pitch - view.pitch) * k;
      view.radius += (fitRadius * goal.zoom - view.radius) * k;
      view.target.lerp(goal.target, k);
      placeCamera();
      var settling = Math.abs(goal.yaw - view.yaw) + Math.abs(goal.pitch - view.pitch) +
        Math.abs(fitRadius * goal.zoom - view.radius) + view.target.distanceTo(goal.target) > 0.002;

      groups.forEach(function (g, i) {
        var target = i === selected ? 1 : (i === hovered ? 0.55 : 0);
        var d = g.userData;
        d.focus += (target - d.focus) * kf;
        if (Math.abs(target - d.focus) > 0.003) settling = true;
        var dim = 0.42 + 0.58 * (i === selected ? 1 : d.focus);
        d.mats.forEach(function (m) {
          if (m.uniforms && m.uniforms.uDim) m.uniforms.uDim.value = dim;
          else {
            m.opacity = m.userData.baseOpacity * dim;
            if (m.emissiveIntensity !== undefined) m.emissiveIntensity = m.userData.baseGlow * (0.7 + 0.9 * d.focus);
          }
        });
        d.halo.material.opacity = 0.55 * d.focus;
        g.scale.setScalar(STAGE_SCALE * (1 + 0.08 * d.focus));
        g.position.y = anchors[i].y + (still ? 0 : Math.sin(t * 0.6 + i) * 0.03);
      });

      updateParticles(still ? 0.4 : t);
      renderer.render(scene, camera);
      labels.forEach(function (el, i) { place(el, anchors[i].clone().add(below[i] ? labelBelow : labelAbove), below[i]); });
      if (inputLabel) place(inputLabel, inputLabelAnchor);
      if (!still || settling) raf = requestAnimationFrame(step);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(step); }

    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) kick();
    }, { rootMargin: "120px" }).observe(stageEl);
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(stageEl);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", kick);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", kick);

    focusStage(selected);
    resize();
    view.radius = fitRadius;
    stageEl.classList.add("is-ready");

    return { setActive: function (on) { active = on; if (on) { resize(); kick(); } } };
  }
})();
