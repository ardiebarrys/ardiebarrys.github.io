/*
 * YAP/TAZ six-stage circuit: an optional 3D view above the existing stage buttons.
 * The existing 2D buttons and the detail panel stay the source of truth: selecting a
 * stage in 3D clicks the matching existing button, and clicking a button updates 3D.
 * Isolated enhancement. Remove the include line in _pages/yap-taz-signal-resolution.md
 * to roll back. The page works unchanged if WebGL or Three.js is unavailable.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  var THREE_URL = (script && script.getAttribute("data-three")) || "/assets/js/lib/three-r170.module.min.js";

  var section = document.getElementById("circuit-explorer");
  var flow = section && section.querySelector(".circuit-flow");
  if (!section || !flow || !window.matchMedia) return;
  var stageButtons = Array.prototype.slice.call(flow.querySelectorAll(".circuit-node"));
  if (stageButtons.length !== 6) return;

  function webglAvailable() {
    try {
      var c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
    } catch (e) {
      return false;
    }
  }
  if (!webglAvailable()) return;

  var STAGES = [
    { name: "Mechanical inputs", color: 0x60a5fa },
    { name: "Distributed sensing", color: 0x67e8f9 },
    { name: "State control", color: 0xa5b4fc },
    { name: "Nuclear decoding", color: 0xc4b5fd },
    { name: "Active termination", color: 0xfbbf24 },
    { name: "Baseline restoration", color: 0x86efac }
  ];
  stageButtons.forEach(function (b, i) {
    var strong = b.querySelector("strong");
    if (strong) STAGES[i].name = strong.textContent.trim();
  });

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var STORE_KEY = "yapCircuit3d";

  // ---------- Markup (inserted above the existing stage buttons) ----------
  var wrap = document.createElement("div");
  wrap.className = "y3d";
  wrap.innerHTML =
    '<div class="y3d-bar">' +
      '<span class="y3d-tag">Conceptual 3D schematic</span>' +
      '<button type="button" class="y3d-btn y3d-toggle" aria-controls="y3d-stage" aria-expanded="true">Hide 3D view</button>' +
    "</div>" +
    '<div class="y3d-stage" id="y3d-stage" tabindex="0" role="group" aria-roledescription="3D view" aria-label="3D schematic of the six circuit stages" aria-describedby="y3d-help">' +
      '<div class="y3d-labels" aria-hidden="true"></div>' +
      '<div class="y3d-tools">' +
        '<button type="button" class="y3d-btn y3d-icon" data-act="zoom-out" aria-label="Zoom out">−</button>' +
        '<button type="button" class="y3d-btn y3d-icon" data-act="zoom-in" aria-label="Zoom in">+</button>' +
        '<button type="button" class="y3d-btn" data-act="reset">Reset view</button>' +
      "</div>" +
      '<p class="y3d-status" aria-live="polite">Loading 3D view…</p>' +
    "</div>" +
    '<p class="y3d-note" id="y3d-help">Illustrative shapes, not molecular structures or measured dynamics. Drag or use arrow keys to rotate, + and − to zoom, 1 to 6 to select a stage, 0 to reset. The stage buttons below show the same content in 2D.</p>';
  flow.parentNode.insertBefore(wrap, flow);

  var stageEl = wrap.querySelector(".y3d-stage");
  var toggle = wrap.querySelector(".y3d-toggle");
  var statusEl = wrap.querySelector(".y3d-status");
  var labelsEl = wrap.querySelector(".y3d-labels");
  var note = wrap.querySelector(".y3d-note");

  var saved = null;
  try { saved = window.localStorage.getItem(STORE_KEY); } catch (e) { saved = null; }
  var open = saved ? saved === "open" : window.matchMedia("(min-width: 720px)").matches;

  var api = null; // set once the scene is built
  var loading = false;

  function setOpen(next, remember) {
    open = next;
    stageEl.hidden = !open;
    note.hidden = !open;
    wrap.classList.toggle("is-collapsed", !open);
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

  function currentStage() {
    for (var i = 0; i < stageButtons.length; i++) {
      if (stageButtons[i].classList.contains("is-active")) return i;
    }
    return 0;
  }

  setOpen(open, false);

  // ======================================================================
  function build(THREE) {
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

    // ---------- Shared helpers ----------
    function std(color, opts) {
      opts = opts || {};
      return new THREE.MeshStandardMaterial({
        color: opts.base !== undefined ? opts.base : color,
        emissive: color,
        emissiveIntensity: opts.glow !== undefined ? opts.glow : 0.28,
        roughness: opts.rough !== undefined ? opts.rough : 0.42,
        metalness: 0.05,
        transparent: true,
        opacity: opts.opacity !== undefined ? opts.opacity : 1,
        depthWrite: opts.depthWrite !== undefined ? opts.depthWrite : true,
        side: opts.side || THREE.FrontSide
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

    function tube(points, radius, material, closed) {
      var curve = new THREE.CatmullRomCurve3(points, !!closed);
      return new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(24, points.length * 16), radius, 6, !!closed), material);
    }

    function arrow(from, to, radius, material) {
      var g = new THREE.Group();
      var dir = to.clone().sub(from);
      var len = dir.length();
      var head = Math.min(0.2, len * 0.38);
      var shaft = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len - head, 10), material);
      shaft.position.y = (len - head) / 2;
      var cone = new THREE.Mesh(new THREE.ConeGeometry(radius * 2.8, head, 14), material);
      cone.position.y = len - head / 2;
      g.add(shaft, cone);
      g.position.copy(from);
      g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      return g;
    }

    function capsule(material, r, len) {
      return new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 6, 14), material);
    }

    function helix(radius, length, turns, phase, material) {
      var pts = [];
      for (var i = 0; i <= 64; i++) {
        var t = i / 64;
        var a = t * turns * Math.PI * 2 + phase;
        pts.push(new THREE.Vector3(-length / 2 + t * length, Math.cos(a) * radius, Math.sin(a) * radius));
      }
      return tube(pts, 0.018, material);
    }

    // ---------- Layout: a flowing S-shaped pathway with depth separation ----------
    var anchors = [
      new THREE.Vector3(-5.1, 0.0, 0.7),
      new THREE.Vector3(-3.05, 0.2, -0.55),
      new THREE.Vector3(-1.0, 0.0, 0.6),
      new THREE.Vector3(1.05, 0.25, -0.6),
      new THREE.Vector3(3.1, 0.0, 0.55),
      new THREE.Vector3(5.1, 0.1, -0.45)
    ];

    var STAGE_SCALE = 1.2;
    var stageGroups = [];
    var pickers = [];

    function makeStage(index, fill) {
      var g = new THREE.Group();
      g.position.copy(anchors[index]);
      var color = STAGES[index].color;
      fill(g, color);
      // Selection halo on the floor plane under the stage.
      var halo = new THREE.Mesh(
        new THREE.RingGeometry(0.86, 0.96, 64),
        new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      );
      halo.rotation.x = -Math.PI / 2;
      halo.position.y = -0.62;
      halo.userData.halo = true;
      g.add(halo);
      // Invisible hit area for pointer selection.
      var hit = new THREE.Mesh(new THREE.SphereGeometry(0.95, 12, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.userData.stage = index;
      g.add(hit);
      pickers.push(hit);

      var mats = [];
      g.traverse(function (o) {
        if (o.material && !o.userData.halo && o.material.visible !== false) {
          var m = o.material;
          if (mats.indexOf(m) === -1) {
            mats.push(m);
            m.userData.baseOpacity = m.uniforms ? 1 : m.opacity;
            m.userData.baseGlow = m.emissiveIntensity;
          }
        }
      });
      g.userData = { mats: mats, halo: halo, focus: 0 };
      scene.add(g);
      stageGroups.push(g);
    }

    // 01 Mechanical inputs: a matrix slab under compressive, tensile and shear cues.
    makeStage(0, function (g, c) {
      var slab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.14, 1.05), std(c, { base: 0x1e3a8a, glow: 0.22 }));
      slab.position.y = -0.45;
      var grid = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.002, 1.05, 6, 1, 4), new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.35 }));
      grid.position.y = -0.375;
      var force = std(c, { glow: 0.55 });
      g.add(slab, grid,
        arrow(new THREE.Vector3(-0.35, 0.55, 0.1), new THREE.Vector3(-0.35, -0.33, 0.1), 0.028, force),
        arrow(new THREE.Vector3(0.0, 0.7, -0.15), new THREE.Vector3(0.0, -0.33, -0.15), 0.028, force),
        arrow(new THREE.Vector3(0.35, 0.55, 0.1), new THREE.Vector3(0.35, -0.33, 0.1), 0.028, force),
        arrow(new THREE.Vector3(-0.78, -0.45, 0), new THREE.Vector3(-1.12, -0.45, 0), 0.024, force),
        arrow(new THREE.Vector3(0.78, -0.45, 0), new THREE.Vector3(1.12, -0.45, 0), 0.024, force),
        arrow(new THREE.Vector3(-0.55, -0.24, 0.42), new THREE.Vector3(0.55, -0.24, 0.42), 0.016, force));
    });

    // 02 Distributed sensing: membrane with adhesions, actin and a LINC tether to the nuclear envelope.
    makeStage(1, function (g, c) {
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
      var ends = [[-0.5, 0.25], [0.05, -0.32], [0.5, 0.22]];
      var hub = new THREE.Vector3(0.05, 0.42, 0);
      ends.forEach(function (e) {
        var d = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 20), plaque);
        d.position.set(e[0], -0.42, e[1]);
        g.add(d);
        g.add(tube([new THREE.Vector3(e[0], -0.4, e[1]), new THREE.Vector3(e[0] * 0.6, 0.05, e[1] * 0.6), hub], 0.016, actin));
      });
      var envelope = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 10, 40, Math.PI * 0.7), std(0xc4b5fd, { glow: 0.35 }));
      envelope.position.set(0.05, 0.66, 0);
      envelope.rotation.z = Math.PI * 1.15;
      g.add(envelope, tube([hub, new THREE.Vector3(0.05, 0.56, 0)], 0.012, std(c, { glow: 0.8 })));
    });

    // 03 State control: a Hippo kinase module and parallel inputs regulating YAP/TAZ.
    makeStage(2, function (g, c) {
      var mst = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), std(c, { glow: 0.35, rough: 0.3 }));
      mst.position.set(-0.42, 0.42, -0.1);
      var lats = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25), std(c, { glow: 0.35, rough: 0.3 }));
      lats.position.set(0.0, 0.0, 0.05);
      var yap = capsule(std(0x67e8f9, { glow: 0.5 }), 0.1, 0.26);
      yap.position.set(0.42, -0.38, 0.1);
      yap.rotation.z = Math.PI / 2.6;
      var phos = std(0xf8fafc, { glow: 0.3 });
      var p1 = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), phos);
      p1.position.set(0.34, -0.25, 0.2);
      var p2 = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), phos);
      p2.position.set(0.53, -0.47, 0.2);
      var link = std(c, { glow: 0.5, opacity: 0.85 });
      g.add(mst, lats, yap, p1, p2,
        arrow(new THREE.Vector3(-0.3, 0.3, -0.06), new THREE.Vector3(-0.13, 0.13, 0.0), 0.016, link),
        arrow(new THREE.Vector3(0.14, -0.14, 0.07), new THREE.Vector3(0.3, -0.27, 0.09), 0.016, link));
      var side = std(0x94a3b8, { glow: 0.2, opacity: 0.9 });
      [[0.55, 0.38, -0.2], [-0.55, -0.32, 0.25]].forEach(function (q) {
        var t = new THREE.Mesh(new THREE.TetrahedronGeometry(0.11), side);
        t.position.set(q[0], q[1], q[2]);
        g.add(t, tube([t.position.clone(), t.position.clone().lerp(yap.position, 0.5).setZ(0.3), yap.position.clone()], 0.008, side));
      });
    });

    // 04 Nuclear decoding: nuclear envelope with pores, YAP/TAZ bound to TEAD on DNA.
    makeStage(3, function (g, c) {
      var shell = new THREE.Mesh(new THREE.SphereGeometry(0.66, 48, 32), fresnel(c, 0.06, 0.55));
      g.add(shell);
      var inner = new THREE.Mesh(new THREE.SphereGeometry(0.64, 32, 24), std(0x312e81, { glow: 0.25, opacity: 0.22, depthWrite: false, side: THREE.BackSide }));
      g.add(inner);
      var poreMat = std(c, { glow: 0.5 });
      [[0.3, 0.5], [1.4, 0.2], [2.5, 0.9], [3.6, 0.4], [4.8, 0.7], [5.6, 1.2]].forEach(function (a) {
        var dir = new THREE.Vector3(Math.cos(a[0]) * Math.sin(a[1] + 0.6), Math.cos(a[1] + 0.6), Math.sin(a[0]) * Math.sin(a[1] + 0.6)).normalize();
        var pore = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.018, 8, 20), poreMat);
        pore.position.copy(dir.clone().multiplyScalar(0.66));
        pore.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
        g.add(pore);
      });
      var dnaA = std(0x93c5fd, { glow: 0.4 });
      var dnaB = std(0xc4b5fd, { glow: 0.4 });
      var d1 = helix(0.09, 0.95, 2.2, 0, dnaA);
      var d2 = helix(0.09, 0.95, 2.2, Math.PI, dnaB);
      d1.position.y = d2.position.y = -0.12;
      var tead = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.13, 0.17), std(0xa5b4fc, { glow: 0.45, rough: 0.35 }));
      tead.position.set(0.05, 0.02, 0);
      var yap = capsule(std(0x67e8f9, { glow: 0.55 }), 0.075, 0.2);
      yap.position.set(0.05, 0.2, 0);
      yap.rotation.z = Math.PI / 2;
      g.add(d1, d2, tead, yap);
    });

    // 05 Active termination: export through a pore, phosphorylation and turnover.
    makeStage(4, function (g, c) {
      var pore = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.05, 14, 48), std(0xc4b5fd, { glow: 0.3 }));
      pore.rotation.y = Math.PI / 2;
      pore.position.x = -0.3;
      var yap = capsule(std(0x67e8f9, { glow: 0.4, opacity: 0.9 }), 0.085, 0.22);
      yap.rotation.z = Math.PI / 2;
      yap.position.set(0.12, 0.05, 0);
      var tag = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), std(0xf8fafc, { glow: 0.3 }));
      tag.position.set(0.2, 0.17, 0.04);
      var exitArrow = arrow(new THREE.Vector3(-0.55, 0.05, 0), new THREE.Vector3(-0.05, 0.05, 0), 0.02, std(c, { glow: 0.6 }));
      g.add(pore, yap, tag, exitArrow);
      var frag = std(c, { glow: 0.45, opacity: 0.75 });
      [[0.5, -0.2, 0.2, 0.07], [0.62, -0.35, -0.1, 0.055], [0.75, -0.5, 0.12, 0.045], [0.86, -0.62, -0.05, 0.035]].forEach(function (f, i) {
        var t = new THREE.Mesh(new THREE.TetrahedronGeometry(f[3]), frag);
        t.position.set(f[0], f[1], f[2]);
        t.rotation.set(i, i * 0.7, i * 1.3);
        g.add(t);
      });
    });

    // 06 Baseline restoration: relaxed matrix and cell, ready to respond to a second cue.
    makeStage(5, function (g, c) {
      var slab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.14, 1.05), std(c, { base: 0x14532d, glow: 0.2 }));
      slab.position.y = -0.45;
      var dome = new THREE.Mesh(new THREE.SphereGeometry(0.5, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), std(c, { base: 0x166534, glow: 0.25, opacity: 0.45, depthWrite: false }));
      dome.scale.set(1.25, 0.55, 0.95);
      dome.position.y = -0.38;
      var nuc = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 16), std(0xc4b5fd, { glow: 0.3 }));
      nuc.scale.set(1.2, 0.6, 1);
      nuc.position.y = -0.27;
      var cycle = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.02, 8, 64, Math.PI * 1.6), std(c, { glow: 0.6 }));
      cycle.position.y = 0.42;
      cycle.rotation.x = -Math.PI / 2.3;
      var head = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 14), std(c, { glow: 0.6 }));
      var endA = Math.PI * 1.6;
      head.position.set(Math.cos(endA) * 0.42, Math.sin(endA) * 0.42, 0);
      head.rotation.z = endA;
      cycle.add(head);
      g.add(slab, dome, nuc, cycle);
    });

    // ---------- Pathway and the return loop from the existing figure ----------
    var pathPoints = [];
    anchors.forEach(function (a, i) {
      pathPoints.push(a.clone());
      if (i < anchors.length - 1) {
        var m = a.clone().lerp(anchors[i + 1], 0.5);
        m.y += 0.08;
        pathPoints.push(m);
      }
    });
    var mainCurve = new THREE.CatmullRomCurve3(pathPoints, false, "centripetal");
    var pathMat = new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.32, depthWrite: false });
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(mainCurve, 220, 0.016, 6, false), pathMat));

    var returnCurve = new THREE.CatmullRomCurve3([
      anchors[5].clone(),
      new THREE.Vector3(4.0, 1.3, -1.9),
      new THREE.Vector3(0, 1.85, -2.7),
      new THREE.Vector3(-4.0, 1.3, -1.9),
      anchors[0].clone()
    ], false, "centripetal");
    var dots = returnCurve.getSpacedPoints(70);
    var dotGeo = new THREE.BufferGeometry().setFromPoints(dots);
    scene.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: 0x86efac, size: 0.045, transparent: true, opacity: 0.45, depthWrite: false })));

    // ---------- Signal particles: flow, then decline after termination ----------
    var COUNT = 26;
    var RETURN = 6;
    var total = COUNT + RETURN;
    var sGeo = new THREE.BufferGeometry();
    var sPos = new Float32Array(total * 3);
    var sAlpha = new Float32Array(total);
    var sCol = new Float32Array(total * 3);
    sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    sGeo.setAttribute("alpha", new THREE.BufferAttribute(sAlpha, 1));
    sGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
    var sMat = new THREE.ShaderMaterial({
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
    });
    scene.add(new THREE.Points(sGeo, sMat));
    var cA = new THREE.Color(0x67e8f9);
    var cB = new THREE.Color(0x86efac);
    var tmpV = new THREE.Vector3();
    var tmpC = new THREE.Color();
    var termU = 0.79; // position of stage 05 along the pathway

    function updateSignals(t) {
      for (var i = 0; i < total; i++) {
        var a;
        if (i < COUNT) {
          var u = (t * 0.035 + i / COUNT) % 1;
          mainCurve.getPointAt(u, tmpV);
          a = Math.min(1, u * 8);
          if (u > termU) a *= Math.max(0, 1 - (u - termU) / 0.12);
          tmpC.copy(cA);
        } else {
          var r = (t * 0.022 + (i - COUNT) / RETURN) % 1;
          returnCurve.getPointAt(r, tmpV);
          a = 0.35 * Math.min(1, r * 6) * Math.min(1, (1 - r) * 6);
          tmpC.copy(cB);
        }
        sPos[i * 3] = tmpV.x; sPos[i * 3 + 1] = tmpV.y; sPos[i * 3 + 2] = tmpV.z;
        sCol[i * 3] = tmpC.r; sCol[i * 3 + 1] = tmpC.g; sCol[i * 3 + 2] = tmpC.b;
        sAlpha[i] = a;
      }
      sGeo.attributes.position.needsUpdate = true;
      sGeo.attributes.alpha.needsUpdate = true;
      sGeo.attributes.color.needsUpdate = true;
    }

    // ---------- HTML labels: crisp text projected from 3D anchors ----------
    var labels = STAGES.map(function (s, i) {
      var el = document.createElement("div");
      el.className = "y3d-label";
      el.style.setProperty("--y3d-color", "#" + ("000000" + s.color.toString(16)).slice(-6));
      el.innerHTML = '<b>' + String(i + 1).padStart(2, "0") + '</b><span>' + s.name + "</span>";
      el.addEventListener("click", function () { selectFrom3d(i); });
      labelsEl.appendChild(el);
      return el;
    });
    var labelOffset = new THREE.Vector3(0, 1.25, 0);

    // ---------- Camera rig ----------
    var HOME = { yaw: 0, pitch: 0.3, radius: 10, target: new THREE.Vector3(0, 0.4, 0) };
    var view = { yaw: HOME.yaw, pitch: HOME.pitch, radius: HOME.radius, target: HOME.target.clone() };
    var goal = { yaw: HOME.yaw, pitch: HOME.pitch, zoom: 1, target: HOME.target.clone() };
    var fitRadius = HOME.radius;

    function clampGoal() {
      goal.yaw = Math.max(-1.05, Math.min(1.05, goal.yaw));
      goal.pitch = Math.max(0.06, Math.min(0.95, goal.pitch));
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

    var selected = currentStage();

    function focusStage(i) {
      selected = i;
      goal.target.copy(anchors[i]).multiplyScalar(0.18).add(new THREE.Vector3(0, 0.4, 0));
      labels.forEach(function (l, k) { l.classList.toggle("is-active", k === i); });
      kick();
    }

    function resetView() {
      goal.yaw = HOME.yaw;
      goal.pitch = HOME.pitch;
      goal.zoom = 1;
      goal.target.copy(HOME.target);
      kick();
    }

    function selectFrom3d(i) {
      // Drive the existing control so its detail panel and state stay authoritative.
      stageButtons[i].click();
    }
    stageButtons.forEach(function (b, i) {
      b.addEventListener("click", function () { focusStage(i); });
    });

    // ---------- Pointer and keyboard controls ----------
    var raycaster = new THREE.Raycaster();
    var ndc = new THREE.Vector2();
    var drag = null;
    var hovered = -1;

    function pick(e) {
      var rect = renderer.domElement.getBoundingClientRect();
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      var hit = raycaster.intersectObjects(pickers, false)[0];
      return hit ? hit.object.userData.stage : -1;
    }

    var canvas = renderer.domElement;
    canvas.addEventListener("pointerdown", function (e) {
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0, yaw: goal.yaw, pitch: goal.pitch };
    });
    canvas.addEventListener("pointermove", function (e) {
      if (drag && drag.id === e.pointerId) {
        var dx = e.clientX - drag.x;
        var dy = e.clientY - drag.y;
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
        if (h !== hovered) {
          hovered = h;
          canvas.style.cursor = h >= 0 ? "pointer" : "";
          kick();
        }
      }
    });
    function endDrag(e) {
      if (!drag || drag.id !== e.pointerId) return;
      var wasClick = drag.moved <= 4 && e.type === "pointerup";
      drag = null;
      stageEl.classList.remove("is-dragging");
      if (wasClick) {
        var i = pick(e);
        if (i >= 0) selectFrom3d(i);
      }
    }
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", function () {
      if (hovered !== -1) { hovered = -1; canvas.style.cursor = ""; kick(); }
    });
    // Zoom only on pinch or Ctrl/Cmd + wheel, so ordinary scrolling never gets trapped.
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
          if (/^[1-6]$/.test(e.key)) selectFrom3d(+e.key - 1);
          else handled = false;
      }
      if (handled) { e.preventDefault(); clampGoal(); kick(); }
    });

    // ---------- Sizing ----------
    var width = 0;
    var height = 0;
    function resize() {
      var w = stageEl.clientWidth;
      var h = stageEl.clientHeight;
      if (!w || !h) return;
      width = w;
      height = h;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Fit the full pathway width (about 12.8 units) inside the frame.
      var halfV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      fitRadius = Math.max(8, 6.4 / (halfV * camera.aspect) + 0.8);
      camera.updateProjectionMatrix();
      stageEl.classList.toggle("is-compact", w < 600);
      kick();
    }

    // ---------- Render loop (only while visible and open) ----------
    var visible = false;
    var active = false;
    var raf = 0;
    var clock = new THREE.Clock();
    var lastT = 0;
    var projected = new THREE.Vector3();

    function step() {
      raf = 0;
      if (!visible || !active || document.hidden || !width) return;
      var still = reduceMotion.matches;
      var dt = Math.min(0.1, clock.getDelta());
      var t = still ? lastT : clock.elapsedTime;
      lastT = t;
      // Frame-rate independent easing: the same feel at 30 or 120 fps.
      var k = still ? 1 : 1 - Math.exp(-dt * 5.5);
      var kf = still ? 1 : 1 - Math.exp(-dt * 7.5);

      view.yaw += (goal.yaw - view.yaw) * k;
      view.pitch += (goal.pitch - view.pitch) * k;
      view.radius += (fitRadius * goal.zoom - view.radius) * k;
      view.target.lerp(goal.target, k);
      placeCamera();

      var settling = Math.abs(goal.yaw - view.yaw) + Math.abs(goal.pitch - view.pitch) +
        Math.abs(fitRadius * goal.zoom - view.radius) + view.target.distanceTo(goal.target) > 0.002;

      stageGroups.forEach(function (g, i) {
        var target = i === selected ? 1 : (i === hovered ? 0.55 : 0);
        var d = g.userData;
        d.focus += (target - d.focus) * kf;
        if (Math.abs(target - d.focus) > 0.003) settling = true;
        var dim = 0.42 + 0.58 * Math.max(d.focus, i === selected ? 1 : 0.0);
        d.mats.forEach(function (m) {
          if (m.uniforms && m.uniforms.uDim) m.uniforms.uDim.value = dim;
          else {
            m.opacity = m.userData.baseOpacity * dim;
            if (m.emissiveIntensity !== undefined) m.emissiveIntensity = m.userData.baseGlow * (0.7 + 0.9 * d.focus);
          }
        });
        d.halo.material.opacity = 0.55 * d.focus;
        var s = STAGE_SCALE * (1 + 0.08 * d.focus);
        g.scale.setScalar(s);
        g.position.y = anchors[i].y + (still ? 0 : Math.sin(t * 0.6 + i) * 0.03);
      });

      updateSignals(still ? 0.4 : t);
      renderer.render(scene, camera);

      labels.forEach(function (el, i) {
        projected.copy(anchors[i]).add(labelOffset).project(camera);
        var x = (projected.x * 0.5 + 0.5) * width;
        var y = (-projected.y * 0.5 + 0.5) * height;
        el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) translate(-50%,-100%)";
        el.hidden = projected.z > 1;
      });

      if (!still || settling) raf = requestAnimationFrame(step);
    }

    function kick() {
      if (!raf) raf = requestAnimationFrame(step);
    }

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

    return {
      setActive: function (on) {
        active = on;
        if (on) { resize(); kick(); }
      }
    };
  }
})();
