/*
 * "A cell under proteotoxic stress" on the UPR page, rendered as a detailed, realistic
 * 3D scene. Two framings share one scene: a whole immune cell with its ER network, and an
 * ER close-up showing the IRE1alpha, PERK and ATF6 sensors at the membrane. A toxicant input,
 * branch signaling, and adaptive vs failed resolution are driven by the page's view/phase
 * controls through data-view and data-phase on #upr-scene-stage. Conceptual illustration,
 * not measured dynamics. Remove the include line in the page to roll back.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  var THREE_URL = (script && script.getAttribute("data-three")) || "/assets/js/lib/three-r170.module.min.js";

  var anatomyURL = new URL("upr-cell-anatomy.js?v=20261025", script.src).href;

  var stage = document.getElementById("upr-scene-stage");
  if (!stage || !window.matchMedia || !("IntersectionObserver" in window)) return;

  try {
    var probe = document.createElement("canvas");
    if (!(window.WebGLRenderingContext && (probe.getContext("webgl2") || probe.getContext("webgl")))) return;
  } catch (e) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var small = window.matchMedia("(max-width: 720px), (pointer: coarse)");

  // Qualitative illustration settings per phase, not measured values.
  var PHASES = {
    toxicant:  { tox: 1.0, load: 0.5,  sig: 0.25, adapt: 0.0,  fail: 0.1 },
    signaling: { tox: 0.35, load: 0.8, sig: 1.0,  adapt: 0.1,  fail: 0.25 },
    adaptive:  { tox: 0.0, load: 0.12, sig: 0.3,  adapt: 1.0,  fail: 0.0 },
    failed:    { tox: 0.15, load: 1.0, sig: 0.85, adapt: 0.0,  fail: 1.0 }
  };

  var host = document.createElement("div");
  host.className = "upr-scene-inner";
  host.style.cssText = "position:absolute;inset:0;";
  host.innerHTML = '<span class="upr-scene-tag">Conceptual 3D illustration</span><div class="upr-scene-labels" aria-hidden="true"></div>';
  stage.appendChild(host);

  var api = null, loading = false;
  function load() {
    if (api || loading) return;
    loading = true;
    Promise.all([import(THREE_URL), import(anatomyURL)]).then(function (modules) { api = build(modules[0], modules[1].createUPRCell); }).catch(function () { host.remove(); });
  }
  var loadWatch = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) { loadWatch.disconnect(); load(); }
  }, { rootMargin: "400px" });
  loadWatch.observe(stage);

  // ---------- Noise + deterministic random ----------
  function hash3(i, j, k) {
    var h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(k, 1440662683);
    h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16;
    return (h >>> 0) / 4294967295;
  }
  function vnoise(x, y, z) {
    var xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    var xf = x - xi, yf = y - yi, zf = z - zi;
    var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
    function L(a, b, t) { return a + (b - a) * t; }
    return L(
      L(L(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), u), L(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), u), v),
      L(L(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), u), L(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), u), v),
      w
    );
  }
  function fbm(x, y, z, oct) {
    var s = 0, a = 0.5, f = 1, n = 0;
    for (var o = 0; o < (oct || 4); o++) { s += a * vnoise(x * f, y * f, z * f); n += a; a *= 0.5; f *= 2.03; }
    return s / n;
  }
  var seed = 11;
  function rand() {
    seed = (seed + 0x6d2b79f5) | 0;
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  // ======================================================================
  function build(THREE, createUPRCell) {
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var lowPower = small.matches;

    var renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.04;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "upr-scene-canvas";
    host.insertBefore(renderer.domElement, host.firstChild);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(32, 2, 0.05, 120);

    // ---------- Studio environment for PBR reflections ----------
    (function () {
      var env = new THREE.Scene();
      env.add(new THREE.Mesh(new THREE.BoxGeometry(40, 20, 40), new THREE.MeshBasicMaterial({ color: 0x0a1424, side: THREE.BackSide })));
      function panel(w, h, pos, rgb) {
        var m = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
        m.color.setRGB(rgb[0], rgb[1], rgb[2]);
        var p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
        p.position.copy(pos); p.lookAt(0, 0, 0); env.add(p);
      }
      panel(12, 6, V(-3, 7, 4), [5, 5.2, 5.6]);
      panel(6, 9, V(-12, 3, -3), [0.6, 1.1, 2.2]);
      panel(14, 3, V(4, 4, -12), [1.6, 2.6, 3.4]);
      panel(5, 5, V(11, 1.5, 6), [1.3, 1.1, 0.95]);
      var pm = new THREE.PMREMGenerator(renderer);
      scene.environment = pm.fromScene(env, 0.04).texture;
      pm.dispose();
    })();

    // ---------- Gradient dome ----------
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(45, 32, 16),
      new THREE.ShaderMaterial({
        side: THREE.BackSide, depthWrite: false,
        uniforms: { uTop: { value: new THREE.Color(0x0d2446) }, uBottom: { value: new THREE.Color(0x02070f) } },
        vertexShader: "varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
        fragmentShader: "uniform vec3 uTop; uniform vec3 uBottom; varying vec3 vD; void main(){ float t = smoothstep(-0.35,0.55,vD.y); gl_FragColor = vec4(mix(uBottom,uTop,t),1.0); }"
      })
    ));

    // ---------- Lights ----------
    var key = new THREE.DirectionalLight(0xf2f6ff, 2.5);
    key.position.set(-3, 7, 4.5);
    key.castShadow = true;
    key.shadow.mapSize.set(lowPower ? 1024 : 2048, lowPower ? 1024 : 2048);
    key.shadow.camera.left = -9; key.shadow.camera.right = 9;
    key.shadow.camera.top = 9; key.shadow.camera.bottom = -9;
    key.shadow.camera.near = 0.5; key.shadow.camera.far = 30;
    key.shadow.radius = 4; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02;
    scene.add(key);
    var rim = new THREE.DirectionalLight(0x7dd3fc, 1.3);
    rim.position.set(3, 2, -6); scene.add(rim);
    scene.add(new THREE.HemisphereLight(0xbcd4ff, 0x0a0f1a, 0.4));

    // ---------- Lit grid backdrop (floor + wall), matching the other 3D views ----------
    (function () {
      function gridMaterial(normal, cell, strength) {
        return new THREE.ShaderMaterial({
          transparent: true, depthWrite: false,
          uniforms: {
            uLight: { value: key.position.clone() }, uNormal: { value: normal },
            uCell: { value: cell }, uStrength: { value: strength },
            uWhite: { value: new THREE.Color(0xf8fafc) }, uGray: { value: new THREE.Color(0x64748b) }
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
            "void main(){ float minor = grid(vP, uCell); float major = grid(vP, uCell * 5.0);" +
            " vec3 L = uLight - vW; float d = length(L);" +
            " float lambert = max(dot(normalize(uNormal), L / d), 0.0);" +
            " float pool = clamp(1.0 - d / 26.0, 0.0, 1.0);" +
            " float shade = clamp(lambert * pool * 2.0, 0.0, 1.0);" +
            " float edge = smoothstep(0.0, 0.18, 0.5 - max(abs(vP.x)/44.0, abs(vP.y)/26.0));" +
            " float a = max(minor * 0.6, major) * (0.18 + 0.82 * shade) * edge * uStrength;" +
            " gl_FragColor = vec4(mix(uGray, uWhite, shade), a); }"
        });
      }
      var floor = new THREE.Mesh(new THREE.PlaneGeometry(44, 26), gridMaterial(V(0, 1, 0), 0.6, 0.18));
      floor.rotation.x = -Math.PI / 2; floor.position.y = -1.7; floor.renderOrder = -2;
      var wall = new THREE.Mesh(new THREE.PlaneGeometry(44, 26), gridMaterial(V(0, 0, 1), 0.6, 0.12));
      wall.position.set(0, 11, -7); wall.renderOrder = -2;
      scene.add(floor, wall);
    })();

    // ---------- Geometry helpers ----------
    function tube(points, r, seg) { return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), seg || Math.max(20, points.length * 10), r, 6, false); }

    // ======================================================================
    // WHOLE CELL  (immune cell with ER network)
    // ======================================================================
    var anatomy = createUPRCell(THREE, { lowPower: lowPower });
    var cellGroup = anatomy.group; scene.add(cellGroup);
    var NUC_R = 0.49, erMat = anatomy.erMaterial;
    var dummy = new THREE.Object3D();

    // Toxicant particles streaming inward toward the ER
    var toxN = lowPower ? 26 : 40;
    var toxInst = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshPhysicalMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.2, emissive: 0x0f172a, emissiveIntensity: 0.4, flatShading: true }), toxN);
    cellGroup.add(toxInst);
    var toxP = [];
    for (var ti = 0; ti < toxN; ti++) {
      var dir = V(rand() * 2 - 1, (rand() - 0.5) * 1.2, rand() * 2 - 1).normalize();
      toxP.push({ dir: dir, start: 1.9 + rand() * 0.8, end: NUC_R + 0.2 + rand() * 0.5, t: rand(), speed: 0.1 + rand() * 0.14, sz: 0.022 + rand() * 0.02, spin: V(rand(), rand(), rand()).normalize() });
    }

    // Inflammatory output specks (failed resolution) escaping the membrane
    var flareN = lowPower ? 20 : 34;
    var flareInst = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshBasicMaterial({ color: 0xf87171, toneMapped: false, transparent: true, opacity: 0.9 }), flareN);
    cellGroup.add(flareInst);
    var flareP = [];
    for (var fi = 0; fi < flareN; fi++) flareP.push({ dir: V(rand() * 2 - 1, (rand() - 0.5) * 1.3, rand() * 2 - 1).normalize(), t: rand(), speed: 0.12 + rand() * 0.16, sz: 0.018 + rand() * 0.016 });

    // ======================================================================
    // ER CLOSE-UP  (membrane patch with IRE1alpha, PERK, ATF6)
    // ======================================================================
    var erGroup = new THREE.Group();
    erGroup.position.set(5.6, 0.15, 0);
    scene.add(erGroup);
    var MEMBRANE_Y = 0.0;

    // ER membrane patch: a gently curved bilayer slab, lumen side below (+y is cytosol)
    (function () {
      var geo = new THREE.PlaneGeometry(3.4, 2.2, 48, 32);
      var p = geo.attributes.position;
      for (var i = 0; i < p.count; i++) {
        var x = p.getX(i), y = p.getY(i);
        p.setZ(i, 0.12 * Math.cos(x * 1.1) * Math.cos(y * 1.3) + 0.04 * (fbm(x * 2 + 1, y * 2 + 2, 0.5, 2) - 0.5));
      }
      geo.computeVertexNormals();
      var mat = new THREE.MeshPhysicalMaterial({ color: 0x9fdbea, roughness: 0.3, transmission: 0.4, thickness: 0.3, emissive: new THREE.Color(0x22d3ee), emissiveIntensity: 0.1, clearcoat: 0.4, sheen: 0.4, sheenColor: new THREE.Color(0x7dd3fc), transparent: true, opacity: 0.85, side: THREE.DoubleSide, envMapIntensity: 0.7 });
      erGroup.userData.patchMat = mat;
      var patch = new THREE.Mesh(geo, mat);
      patch.rotation.x = -Math.PI / 2; patch.position.y = MEMBRANE_Y; patch.receiveShadow = true;
      erGroup.add(patch);
      // Lumen floor hint
      var floorMat = new THREE.MeshPhysicalMaterial({ color: 0x0b2a3a, roughness: 0.6, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      var lumenFloor = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 2.2), floorMat);
      lumenFloor.rotation.x = -Math.PI / 2; lumenFloor.position.y = MEMBRANE_Y - 0.7; erGroup.add(lumenFloor);
    })();

    // A reusable transmembrane sensor builder
    function sensor(color, pos, opts) {
      opts = opts || {};
      var g = new THREE.Group(); g.position.copy(pos);
      var mat = new THREE.MeshPhysicalMaterial({ color: color, roughness: 0.3, metalness: 0.05, clearcoat: 0.7, emissive: new THREE.Color(color), emissiveIntensity: 0.3, sheen: 0.5 });
      // transmembrane helix barrel
      var tm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.5, 18), mat); tm.position.y = MEMBRANE_Y; tm.castShadow = true; g.add(tm);
      // luminal sensor domain (below)
      var lum = new THREE.Mesh(new THREE.IcosahedronGeometry(0.17, 1), mat); lum.position.y = MEMBRANE_Y - 0.42; lum.castShadow = true; g.add(lum);
      // cytosolic effector domain (above)
      var cyto = new THREE.Mesh(new THREE.DodecahedronGeometry(0.14), mat); cyto.position.y = MEMBRANE_Y + 0.42; cyto.castShadow = true; g.add(cyto);
      g.userData = { mat: mat, base: 0.3, cyto: cyto, lum: lum };
      return g;
    }

    // IRE1a: a dimer (two sensors side by side) -> XBP1 mRNA splicing
    var ire = new THREE.Group(); ire.position.set(-1.05, 0, 0.1); erGroup.add(ire);
    var ireA = sensor(0xf87171, V(-0.14, 0, 0)), ireB = sensor(0xf87171, V(0.14, 0, 0));
    ire.add(ireA, ireB);
    // XBP1 mRNA ribbon above the dimer (a wavy tube that "splices" = a gap opens)
    var xbp1Mat = new THREE.MeshBasicMaterial({ color: 0xfca5a5, toneMapped: false, transparent: true, opacity: 0.9 });
    var xbp1 = (function () {
      var pts = []; for (var i = 0; i <= 30; i++) { var t = i / 30; pts.push(V(-0.55 + t * 1.1, MEMBRANE_Y + 0.72 + Math.sin(t * 7) * 0.05, 0.0)); }
      var m = new THREE.Mesh(tube(pts, 0.016, 40), xbp1Mat); ire.add(m); return m;
    })();
    var ireMats = [ireA.userData.mat, ireB.userData.mat];

    // PERK -> p-eIF2a -> ATF4/CHOP (a descending chain of tokens above)
    var perk = new THREE.Group(); perk.position.set(0.1, 0, -0.1); erGroup.add(perk);
    var perkS = sensor(0xa5b4fc, V(0, 0, 0)); perk.add(perkS);
    var perkChainMat = new THREE.MeshStandardMaterial({ color: 0xc7d2fe, emissive: 0x6366f1, emissiveIntensity: 0.4, roughness: 0.4 });
    var phosMat = new THREE.MeshBasicMaterial({ color: 0xfacc15, toneMapped: false });
    var perkTokens = [];
    [["eIF2a", 0.7], ["ATF4", 0.95], ["CHOP", 1.2]].forEach(function (d, i) {
      var tk = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 12), perkChainMat.clone());
      tk.position.set(0.0, MEMBRANE_Y + d[1], 0.0); perk.add(tk); perkTokens.push(tk);
      if (i === 0) { var ph = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), phosMat); ph.position.set(0.06, MEMBRANE_Y + d[1] + 0.05, 0); perk.add(ph); }
    });

    // ATF6 -> buds a vesicle that travels to a small Golgi (restoration branch)
    var atf6 = new THREE.Group(); atf6.position.set(1.15, 0, 0.1); erGroup.add(atf6);
    var atf6S = sensor(0x86efac, V(0, 0, 0)); atf6.add(atf6S);
    var golgiMat = new THREE.MeshPhysicalMaterial({ color: 0x86efac, roughness: 0.4, clearcoat: 0.5, emissive: 0x16a34a, emissiveIntensity: 0.2 });
    (function () { for (var i = 0; i < 3; i++) { var t = new THREE.Mesh(new THREE.TorusGeometry(0.16 - i * 0.02, 0.02, 8, 28, 1.8), golgiMat); t.scale.set(1, 1, 0.5); t.rotation.set(Math.PI / 2, 0, 0.5); t.position.set(0.55 + i * 0.05, MEMBRANE_Y + 0.5, -0.1); atf6.add(t); } })();
    var atf6Vesicle = new THREE.Mesh(new THREE.SphereGeometry(0.06, 14, 10), new THREE.MeshBasicMaterial({ color: 0x86efac, toneMapped: false }));
    atf6.add(atf6Vesicle);

    // Misfolded proteins in the ER lumen (tangled blobs), count/opacity driven by load
    var misN = lowPower ? 22 : 36;
    var misMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xb45309, emissiveIntensity: 0.4, roughness: 0.6, flatShading: true, transparent: true, opacity: 1 });
    var misInst = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), misMat, misN);
    erGroup.add(misInst);
    var misP = [];
    for (var mi = 0; mi < misN; mi++) misP.push({ pos: V((rand() - 0.5) * 2.8, MEMBRANE_Y - 0.25 - rand() * 0.4, (rand() - 0.5) * 1.7), sz: 0.05 + rand() * 0.055, spin: V(rand(), rand(), rand()).normalize(), ph: rand() * 6.28 });

    // Chaperones (adaptive): small glowing spheres that appear to clear misfolded load
    var chapN = lowPower ? 16 : 26;
    var chapMat = new THREE.MeshStandardMaterial({ color: 0xa7f3d0, emissive: 0x34d399, emissiveIntensity: 0.5, roughness: 0.4, transparent: true, opacity: 0 });
    var chapInst = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 10), chapMat, chapN);
    erGroup.add(chapInst);
    var chapP = [];
    for (var ci = 0; ci < chapN; ci++) chapP.push({ pos: V((rand() - 0.5) * 2.8, MEMBRANE_Y - 0.2 - rand() * 0.4, (rand() - 0.5) * 1.6), sz: 0.04 + rand() * 0.03, ph: rand() * 6.28 });

    // ---------- HTML labels ----------
    var labelsEl = host.querySelector(".upr-scene-labels");
    function mkLabel(text, color) {
      var el = document.createElement("span"); el.className = "upr-scene-label"; el.textContent = text;
      if (color) el.style.setProperty("--lc", color); labelsEl.appendChild(el); return el;
    }
    var cellLabels = [
      { el: mkLabel("Nucleus", "rgba(196,181,253,.6)"), at: function () { return V(-0.48, 0.65, 0.4); } },
      { el: mkLabel("ER network", "rgba(125,211,252,.6)"), at: function () { return V(0.25, -0.85, 0.25); } },
      { el: mkLabel("Mitochondria", "rgba(226,134,106,.6)"), at: function () { return V(-1.08, -0.40, 0.20); } },
      { el: mkLabel("Toxicant", "rgba(203,213,225,.6)"), at: function () { return V(1.15, 1.0, 0.6); } }
    ];
    var erLabels = [
      { el: mkLabel("IRE1α", "rgba(248,113,113,.7)"), at: function () { return erGroup.position.clone().add(ire.position).add(V(0, MEMBRANE_Y + 0.95, 0)); } },
      { el: mkLabel("PERK", "rgba(165,180,252,.7)"), at: function () { return erGroup.position.clone().add(perk.position).add(V(0, MEMBRANE_Y + 1.42, 0)); } },
      { el: mkLabel("ATF6", "rgba(134,239,172,.7)"), at: function () { return erGroup.position.clone().add(atf6.position).add(V(0.3, MEMBRANE_Y + 0.72, 0)); } },
      { el: mkLabel("ER lumen · misfolded proteins", "rgba(251,191,36,.6)"), at: function () { return erGroup.position.clone().add(V(0, MEMBRANE_Y - 0.6, 0.9)); } }
    ];

    // ======================================================================
    // State + animation
    // ======================================================================
    var state = { tox: 0, load: 0, sig: 0, adapt: 0, fail: 0 };
    var target = PHASES[stage.getAttribute("data-phase")] || PHASES.toxicant;
    var viewTarget = (stage.getAttribute("data-view") === "er") ? 1 : 0;
    var viewBlend = viewTarget;
    new MutationObserver(function () {
      target = PHASES[stage.getAttribute("data-phase")] || PHASES.toxicant;
      viewTarget = (stage.getAttribute("data-view") === "er") ? 1 : 0;
      kick();
    }).observe(stage, { attributes: true, attributeFilter: ["data-phase", "data-view"] });

    function approach(cur, goal, rate, dt) { return cur + (goal - cur) * (1 - Math.exp(-rate * dt)); }

    var erTeal = new THREE.Color(0x496f68), erAngry = new THREE.Color(0xad7059), erCalm = new THREE.Color(0x7caa92), tmpCol = new THREE.Color();

    function updateScene(t, dt, still) {
      ["tox", "load", "sig", "adapt", "fail"].forEach(function (k) {
        state[k] = still ? target[k] : approach(state[k], target[k], 2.2, dt);
      });

      // ER emissive: teal at rest, shifts to orange under fail, to green under adaptive
      tmpCol.copy(erTeal).lerp(erAngry, state.fail * 0.8).lerp(erCalm, state.adapt * 0.6);
      erMat.emissive.copy(tmpCol); erMat.emissiveIntensity = 0.04 + 0.18 * state.sig + 0.15 * state.fail;
      if (erGroup.userData.patchMat) { erGroup.userData.patchMat.emissive.copy(tmpCol); erGroup.userData.patchMat.emissiveIntensity = 0.08 + 0.5 * state.sig + 0.4 * state.fail; }

      // Toxicant particles
      for (var i = 0; i < toxN; i++) {
        var q = toxP[i];
        if (!still) q.t = (q.t + dt * q.speed * (0.4 + state.tox)) % 1;
        var r = q.start + (q.end - q.start) * q.t;
        var pos = q.dir.clone().multiplyScalar(r);
        dummy.position.copy(pos);
        dummy.quaternion.setFromAxisAngle(q.spin, t * 1.5 + i);
        var sc = q.sz * (0.2 + 0.8 * state.tox);
        dummy.scale.setScalar(Math.max(sc, 0.0001)); dummy.updateMatrix(); toxInst.setMatrixAt(i, dummy.matrix);
      }
      toxInst.instanceMatrix.needsUpdate = true;
      toxInst.visible = state.tox > 0.03;

      // Inflammatory flares (failed)
      for (var fi2 = 0; fi2 < flareN; fi2++) {
        var fp = flareP[fi2];
        if (!still) fp.t = (fp.t + dt * fp.speed) % 1;
        var fr = 1.3 + fp.t * 0.9;
        dummy.position.copy(fp.dir.clone().multiplyScalar(fr));
        var fs = fp.sz * state.fail * (1 - fp.t);
        dummy.scale.setScalar(Math.max(fs, 0.0001)); dummy.quaternion.identity(); dummy.updateMatrix();
        flareInst.setMatrixAt(fi2, dummy.matrix);
      }
      flareInst.instanceMatrix.needsUpdate = true;
      flareInst.visible = state.fail > 0.05;

      // ER close-up: sensor glows (IRE1a + PERK stay high in fail; ATF6 brighter in adaptive)
      var ireGlow = 0.3 + 1.6 * Math.max(state.sig, state.fail * 0.9);
      ireMats.forEach(function (m) { m.emissiveIntensity = ireGlow; });
      // IRE1a dimer closes together under signaling
      var close = 0.14 - 0.05 * state.sig;
      ireA.position.x = -close; ireB.position.x = close;
      // XBP1 splicing: ribbon opens a gap (scale down) and brightens with signaling
      xbp1Mat.opacity = 0.3 + 0.7 * state.sig; xbp1.scale.x = 1 - 0.25 * state.sig;
      perkS.userData.mat.emissiveIntensity = 0.3 + 1.5 * Math.max(state.sig, state.fail * 0.85);
      // Each token owns a cloned material; update that material, not the prototype.
      perkTokens.forEach(function (tk, i) {
        var on = Math.max(state.sig, state.fail * 0.8);
        tk.material.emissiveIntensity = 0.2 + 0.9 * on;
        tk.scale.setScalar(0.5 + 0.9 * on);
        tk.position.y = MEMBRANE_Y + [0.7, 0.95, 1.2][i] + (still ? 0 : Math.sin(t * 1.2 + i) * 0.02);
      });
      atf6S.userData.mat.emissiveIntensity = 0.3 + 1.3 * (state.sig * (1 - 0.4 * state.fail) + state.adapt * 0.7);
      // ATF6 vesicle travels toward the Golgi, driven by sig+adapt
      var av = ((still ? 0.5 : (t * 0.35)) % 1);
      var atOn = Math.max(0.0, state.sig * (1 - 0.4 * state.fail), state.adapt);
      atf6Vesicle.visible = atOn > 0.1;
      atf6Vesicle.position.set(0.05 + av * 0.5, MEMBRANE_Y + 0.42 + av * 0.1, 0.05);
      atf6Vesicle.scale.setScalar(0.6 + 0.6 * atOn);

      // Misfolded load
      var nMis = Math.round(misN * state.load);
      for (var mi2 = 0; mi2 < misN; mi2++) {
        var mp = misP[mi2];
        if (mi2 < nMis) {
          dummy.position.copy(mp.pos);
          if (!still) dummy.position.y += Math.sin(t * 0.8 + mp.ph) * 0.02;
          dummy.quaternion.setFromAxisAngle(mp.spin, t * 0.6 + mp.ph);
          dummy.scale.setScalar(mp.sz); dummy.updateMatrix(); misInst.setMatrixAt(mi2, dummy.matrix);
        } else { dummy.scale.setScalar(0.0001); dummy.updateMatrix(); misInst.setMatrixAt(mi2, dummy.matrix); }
      }
      misInst.instanceMatrix.needsUpdate = true;
      misMat.emissive.copy(new THREE.Color(0xb45309).lerp(new THREE.Color(0xdc2626), state.fail));

      // Chaperones appear during adaptive resolution
      chapMat.opacity = 0.9 * state.adapt;
      chapInst.visible = state.adapt > 0.05;
      var nChap = Math.round(chapN * state.adapt);
      for (var ci2 = 0; ci2 < chapN; ci2++) {
        var cp = chapP[ci2];
        if (ci2 < nChap) {
          dummy.position.copy(cp.pos);
          if (!still) dummy.position.y += Math.sin(t * 1.1 + cp.ph) * 0.03;
          dummy.quaternion.identity(); dummy.scale.setScalar(cp.sz * (0.6 + 0.4 * Math.sin(t * 2 + cp.ph))); dummy.updateMatrix();
          chapInst.setMatrixAt(ci2, dummy.matrix);
        } else { dummy.scale.setScalar(0.0001); dummy.updateMatrix(); chapInst.setMatrixAt(ci2, dummy.matrix); }
      }
      chapInst.instanceMatrix.needsUpdate = true;
    }

    // ---------- Camera ----------
    var CELL = { target: V(0, 0.05, 0), yaw: -0.08, pitch: 0.18, radius: 5.4 };
    var ER = { target: erGroup.position.clone().add(V(0, 0.35, 0)), yaw: -0.12, pitch: 0.3, radius: 3.4 };
    var user = { yaw: 0, pitch: 0 };
    var view = { yaw: CELL.yaw, pitch: CELL.pitch };
    var pointer = { x: 0, y: 0 };
    var curTarget = CELL.target.clone(), curRadius = CELL.radius;
    var drag = null;
    var canvas = renderer.domElement;
    var paused = reduceMotion.matches, contextLost = false, firstFrame = true;
    canvas.tabIndex = 0;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", "Interactive conceptual cell and ER sensor model");
    canvas.setAttribute("aria-describedby", "upr-scene-help upr-scene-explanation");
    var tools = document.createElement("div"); tools.className = "upr-scene-tools";
    tools.innerHTML = '<button type="button" data-motion aria-pressed="false">Pause motion</button><button type="button" data-reset>Reset view</button>';
    tools.hidden = true; stage.appendChild(tools);
    var pauseButton = tools.querySelector("[data-motion]");
    function syncMotion() {
      pauseButton.setAttribute("aria-pressed", String(paused || reduceMotion.matches));
      pauseButton.textContent = reduceMotion.matches ? "Motion reduced" : paused ? "Resume motion" : "Pause motion";
      pauseButton.disabled = reduceMotion.matches;
    }
    pauseButton.addEventListener("click", function () { paused = !paused; syncMotion(); kick(); });
    function resetView() { user.yaw = user.pitch = 0; pointer.x = pointer.y = 0; kick(); }
    tools.querySelector("[data-reset]").addEventListener("click", resetView);
    canvas.addEventListener("keydown", function (event) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.key === "ArrowLeft") user.yaw = Math.max(-1.3, user.yaw - 0.12);
      else if (event.key === "ArrowRight") user.yaw = Math.min(1.3, user.yaw + 0.12);
      else if (event.key === "ArrowUp") user.pitch = Math.max(-0.35, user.pitch - 0.1);
      else if (event.key === "ArrowDown") user.pitch = Math.min(0.7, user.pitch + 0.1);
      else if (event.key === "Home") resetView();
      else return;
      event.preventDefault(); kick();
    });
    canvas.addEventListener("webglcontextlost", function (event) {
      event.preventDefault(); contextLost = true; cancelAnimationFrame(raf); raf = 0;
      stage.classList.remove("is-ready"); tools.hidden = true; canvas.tabIndex = -1;
      stage.querySelector(".upr-scene-fallback").textContent = "3D rendering paused. Use the view and stage controls below to read each explanation.";
    });
    canvas.addEventListener("webglcontextrestored", function () { contextLost = false; firstFrame = true; canvas.tabIndex = 0; resize(); });
    syncMotion();

    canvas.addEventListener("pointerdown", function (e) { drag = { id: e.pointerId, x: e.clientX, y: e.clientY, yaw: user.yaw, pitch: user.pitch, moved: 0 }; });
    canvas.addEventListener("pointermove", function (e) {
      if (e.pointerType === "mouse") {
        var r = canvas.getBoundingClientRect();
        pointer.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        pointer.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      }
      if (!drag || drag.id !== e.pointerId) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (e.pointerType === "touch" && !drag.captured && Math.abs(dy) > Math.abs(dx)) { drag = null; return; }
      drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
      if (drag.moved > 4) {
        if (!drag.captured) { try { canvas.setPointerCapture(e.pointerId); } catch (err) {} drag.captured = true; stage.classList.add("is-dragging"); }
        user.yaw = Math.max(-1.3, Math.min(1.3, drag.yaw - dx * 0.006));
        if (e.pointerType === "mouse") user.pitch = Math.max(-0.35, Math.min(0.7, drag.pitch + dy * 0.004));
        kick();
      }
    });
    function endDrag(e) { if (!drag || drag.id !== e.pointerId) return; drag = null; stage.classList.remove("is-dragging"); }
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", function () { pointer.x = pointer.y = 0; });
    canvas.addEventListener("dblclick", function () { user.yaw = user.pitch = 0; kick(); });

    var width = 0, height = 0;
    function resize() {
      var w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
      width = w; height = h; renderer.setSize(w, h, false); camera.aspect = w / h;
      stage.classList.toggle("is-narrow", w < 480);
      var tangent = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      CELL.radius = Math.max(5.4, 2.0 / (tangent * camera.aspect) + 1.0, 1.5 / tangent + 0.7);
      ER.radius = Math.max(3.4, 1.8 / (tangent * camera.aspect) + 0.8, 1.25 / tangent + 0.7);
      camera.updateProjectionMatrix(); kick();
    }

    var projected = V(0, 0, 0);
    function placeLabels() {
      cellLabels.forEach(function (d) { placeLabel(d, 1 - viewBlend); });
      erLabels.forEach(function (d) { placeLabel(d, viewBlend); });
    }
    function placeLabel(d, vis) {
      if (vis < 0.4) { d.el.hidden = true; return; }
      projected.copy(d.at()).project(camera);
      if (projected.z > 1) { d.el.hidden = true; return; }
      d.el.hidden = false;
      var x = (projected.x * 0.5 + 0.5) * width, y = (-projected.y * 0.5 + 0.5) * height;
      var half = (d.el.offsetWidth || 0) / 2;
      x = Math.max(half + 6, Math.min(width - half - 6, x)); y = Math.max(16, Math.min(height - 10, y));
      d.el.style.opacity = Math.min(1, (vis - 0.4) / 0.4);
      d.el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) translate(-50%,-100%)";
    }

    var visible = false, raf = 0, lastT = 0;
    var clock = new THREE.Clock();
    function frame() {
      raf = 0;
      if (!visible || document.hidden || contextLost || !width) return;
      var still = reduceMotion.matches || paused;
      var dt = Math.min(0.1, clock.getDelta());
      var t = still ? lastT : lastT + dt; lastT = t;

      viewBlend += (viewTarget - viewBlend) * (still ? 1 : (1 - Math.exp(-dt * 3.5)));
      updateScene(t, dt, still);
      // Show the cell in the cell view and the ER patch in the close-up; both only mid-transition.
      cellGroup.visible = viewBlend < 0.85;
      erGroup.visible = viewBlend > 0.15;

      // Blend camera framing between the whole cell and the ER close-up
      var tg = CELL.target.clone().lerp(ER.target, viewBlend);
      curTarget.lerp(tg, still ? 1 : (1 - Math.exp(-dt * 4)));
      var rad = CELL.radius + (ER.radius - CELL.radius) * viewBlend;
      curRadius += (rad - curRadius) * (still ? 1 : (1 - Math.exp(-dt * 4)));
      var baseYaw = CELL.yaw + (ER.yaw - CELL.yaw) * viewBlend;
      var basePitch = CELL.pitch + (ER.pitch - CELL.pitch) * viewBlend;

      var idle = still ? 0 : 0.16 * Math.sin(t * 0.1);
      var gy = baseYaw + user.yaw + idle + (still ? 0 : pointer.x * 0.07);
      var gp = basePitch + user.pitch + (still ? 0 : pointer.y * 0.035);
      var k = still ? 1 : 1 - Math.exp(-dt * 4);
      view.yaw += (gy - view.yaw) * k; view.pitch += (gp - view.pitch) * k;

      camera.position.set(
        curTarget.x + curRadius * Math.sin(view.yaw) * Math.cos(view.pitch),
        curTarget.y + curRadius * Math.sin(view.pitch),
        curTarget.z + curRadius * Math.cos(view.yaw) * Math.cos(view.pitch)
      );
      camera.lookAt(curTarget);
      renderer.render(scene, camera);
      if (firstFrame) { firstFrame = false; stage.classList.add("is-ready"); tools.hidden = false; }
      placeLabels();
      if (!still) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }

    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) { clock.getDelta(); kick(); }
    }, { rootMargin: "120px" }).observe(stage);
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(stage);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", kick);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", function () { syncMotion(); kick(); });

    updateScene(0, 0, true);
    resize();
    return { };
  }
})();
