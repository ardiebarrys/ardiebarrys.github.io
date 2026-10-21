/*
 * "Thought experiment: follow one cell" on the YAP/TAZ page, rendered as a realistic 3D cell.
 * The existing step controls stay in charge: this view follows the stage's data-phase
 * (input, control, withdrawal, recovery, challenge). The original 2D SVG stays in the page
 * as the fallback and can be shown again with the 2D/3D toggle.
 * Isolated enhancement. Remove the include line in _pages/yap-taz-signal-resolution.md to roll back.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  var THREE_URL = (script && script.getAttribute("data-three")) || "/assets/js/lib/three-r170.module.min.js";

  var stage = document.getElementById("thought-cell-stage");
  var svg = stage && stage.querySelector("svg");
  if (!stage || !svg || !window.matchMedia || !("IntersectionObserver" in window)) return;

  try {
    var probe = document.createElement("canvas");
    if (!(window.WebGLRenderingContext && (probe.getContext("webgl2") || probe.getContext("webgl")))) return;
  } catch (e) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var small = window.matchMedia("(max-width: 720px), (pointer: coarse)");
  var STORE_KEY = "thoughtCell3d";

  // Phase targets. These are qualitative illustration settings, not measured values.
  var PHASES = {
    input: { force: 1, nuc: 0.78, memory: 0, retain: 0, speed: 1 },
    control: { force: 1, nuc: 0.5, memory: 0, retain: 0.28, speed: 0.8 },
    withdrawal: { force: 0, nuc: 0.46, memory: 0.25, retain: 0, speed: 0.3 },
    recovery: { force: 0, nuc: 0.1, memory: 0.35, retain: 0, speed: 0.6 },
    challenge: { force: 1, nuc: 0.7, memory: 0.35, retain: 0, speed: 1 }
  };

  // ---------- Markup ----------
  var host = document.createElement("div");
  host.className = "t3d";
  host.setAttribute("role", "img");
  host.setAttribute("aria-labelledby", "cell-visual-title");
  host.setAttribute("aria-describedby", "cell-visual-desc");
  host.innerHTML = '<span class="t3d-tag">Conceptual 3D illustration</span><div class="t3d-labels" aria-hidden="true"></div>';
  stage.insertBefore(host, stage.firstChild);

  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "t3d-toggle";
  stage.appendChild(toggle);

  var saved = null;
  try { saved = window.localStorage.getItem(STORE_KEY); } catch (e) { saved = null; }
  var want3d = saved !== "2d";
  var api = null;
  var loading = false;

  function apply() {
    var on = want3d && !!api;
    stage.classList.toggle("t3d-on", on);
    toggle.textContent = want3d ? "2D view" : "3D view";
    toggle.setAttribute("aria-pressed", want3d ? "true" : "false");
    toggle.setAttribute("aria-label", want3d ? "Show the original 2D figure" : "Show the 3D figure");
    toggle.hidden = !api;
    if (api) api.setActive(on);
  }
  toggle.addEventListener("click", function () {
    want3d = !want3d;
    try { window.localStorage.setItem(STORE_KEY, want3d ? "3d" : "2d"); } catch (e) { /* storage unavailable */ }
    apply();
  });

  function load() {
    if (api || loading) return;
    loading = true;
    import(THREE_URL).then(function (THREE) {
      api = build(THREE);
      apply();
    }).catch(function () {
      host.remove();
      toggle.remove();
    });
  }

  // Load when the figure approaches the viewport.
  var loadWatch = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      loadWatch.disconnect();
      load();
    }
  }, { rootMargin: "400px" });
  loadWatch.observe(stage);
  apply();

  // ---------- Noise ----------
  function hash3(i, j, k) {
    var h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(k, 1440662683);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
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
  function smooth(a, b, x) {
    var t = Math.max(0, Math.min(1, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }
  // Deterministic random so the cell looks the same on every visit.
  var seed = 7;
  function rand() {
    seed = (seed + 0x6d2b79f5) | 0;
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  // ======================================================================
  function build(THREE) {
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var lowPower = small.matches;

    var renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "t3d-canvas";
    host.insertBefore(renderer.domElement, host.firstChild);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(30, 2, 0.05, 60);

    // ---------- Studio environment for physically based reflections ----------
    (function () {
      var env = new THREE.Scene();
      var room = new THREE.Mesh(new THREE.BoxGeometry(20, 12, 20), new THREE.MeshBasicMaterial({ color: 0x0a1424, side: THREE.BackSide }));
      env.add(room);
      function panel(w, h, pos, look, rgb) {
        var m = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
        m.color.setRGB(rgb[0], rgb[1], rgb[2]);
        var p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
        p.position.copy(pos);
        p.lookAt(look);
        env.add(p);
      }
      panel(8, 4, V(-2, 5.5, 3), V(0, 0, 0), [5, 5.2, 5.6]);   // key softbox
      panel(4, 6, V(-9, 2, -2), V(0, 0, 0), [0.6, 1.1, 2.2]);  // cool side fill
      panel(10, 2, V(3, 3, -9), V(0, 0, 0), [1.6, 2.6, 3.4]);  // rim strip
      panel(3, 3, V(8, 1, 5), V(0, 0, 0), [1.2, 1.0, 0.9]);    // warm bounce
      var pm = new THREE.PMREMGenerator(renderer);
      scene.environment = pm.fromScene(env, 0.035).texture;
      pm.dispose();
    })();

    // ---------- Backdrop: gradient dome (opaque, so it shows through the cell) ----------
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(30, 32, 16),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: { uTop: { value: new THREE.Color(0x0d2446) }, uBottom: { value: new THREE.Color(0x02070f) } },
        vertexShader: "varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
        fragmentShader: "uniform vec3 uTop; uniform vec3 uBottom; varying vec3 vD; void main(){ float t = smoothstep(-0.35, 0.55, vD.y); gl_FragColor = vec4(mix(uBottom, uTop, t), 1.0); }"
      })
    ));

    // ---------- Lights ----------
    var key = new THREE.DirectionalLight(0xf2f6ff, 2.4);
    key.position.set(-2.2, 4.2, 2.6);
    key.castShadow = true;
    key.shadow.mapSize.set(lowPower ? 1024 : 2048, lowPower ? 1024 : 2048);
    key.shadow.camera.left = -2.2; key.shadow.camera.right = 2.2;
    key.shadow.camera.top = 2.2; key.shadow.camera.bottom = -2.2;
    key.shadow.camera.near = 0.5; key.shadow.camera.far = 10;
    key.shadow.radius = 4;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.01;
    scene.add(key);
    var rim = new THREE.DirectionalLight(0x7dd3fc, 1.3);
    rim.position.set(1.5, 1.2, -3.5);
    scene.add(rim);
    scene.add(new THREE.HemisphereLight(0xbcd4ff, 0x0a0f1a, 0.35));

    // ---------- Grid floor and wall, lit by the key light ----------
    (function () {
      function gridMaterial(normal, cell, strength) {
        return new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms: {
            uLight: { value: key.position.clone() },
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
            " float minor = grid(vP, uCell); float major = grid(vP, uCell * 4.0);" +
            " vec3 L = uLight - vW; float d = length(L);" +
            " float shade = clamp(max(dot(normalize(uNormal), L / d), 0.0) * clamp(1.0 - d / 9.0, 0.0, 1.0) * 2.2, 0.0, 1.0);" +
            " float edge = smoothstep(0.0, 0.2, 0.5 - max(abs(vP.x) / 12.0, abs(vP.y) / 8.0));" +
            " float a = max(minor * 0.55, major) * (0.15 + 0.75 * shade) * edge * uStrength;" +
            " gl_FragColor = vec4(mix(uGray, uWhite, shade), a); }"
        });
      }
      var floor = new THREE.Mesh(new THREE.PlaneGeometry(12, 8), gridMaterial(V(0, 1, 0), 0.25, 0.9));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -0.3;
      var wall = new THREE.Mesh(new THREE.PlaneGeometry(12, 8), gridMaterial(V(0, 0, 1), 0.25, 0.5));
      wall.position.set(0, 3.7, -2.6);
      scene.add(floor, wall);
    })();

    // ---------- Geometry helpers ----------
    function mergeGeometries(list) {
      var pos = [], nor = [], idx = [], off = 0;
      list.forEach(function (g) {
        pos.push(g.attributes.position.array);
        nor.push(g.attributes.normal.array);
        var ia = g.index.array;
        for (var i = 0; i < ia.length; i++) idx.push(ia[i] + off);
        off += g.attributes.position.count;
      });
      function cat(arrs) {
        var n = 0; arrs.forEach(function (a) { n += a.length; });
        var out = new Float32Array(n), o = 0;
        arrs.forEach(function (a) { out.set(a, o); o += a.length; });
        return out;
      }
      var m = new THREE.BufferGeometry();
      m.setAttribute("position", new THREE.BufferAttribute(cat(pos), 3));
      m.setAttribute("normal", new THREE.BufferAttribute(cat(nor), 3));
      m.setIndex(idx);
      return m;
    }
    // Tubes with a second, morph-target shape (for fibers that straighten under tension).
    function morphTubes(pairs, radius, segs, radial) {
      var a = [], b = [];
      pairs.forEach(function (p) {
        a.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(p[0]), segs, p[2] || radius, radial, false));
        b.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(p[1]), segs, p[2] || radius, radial, false));
      });
      var g = mergeGeometries(a), t = mergeGeometries(b);
      g.morphAttributes.position = [t.attributes.position];
      g.morphAttributes.normal = [t.attributes.normal];
      return g;
    }

    // ======================================================================
    // Substrate: a soft hydrogel slab coated with an ECM fiber mesh
    // ======================================================================
    var substrate = new THREE.Group();
    scene.add(substrate);
    var GEL_W = 3.1, GEL_D = 2.25, GEL_T = 0.2, GEL_TOP = -0.004;
    (function () {
      var r = 0.12, w = GEL_W / 2 - r, d = GEL_D / 2 - r;
      var shape = new THREE.Shape();
      shape.moveTo(-w, -d - r);
      shape.lineTo(w, -d - r);
      shape.quadraticCurveTo(w + r, -d - r, w + r, -d);
      shape.lineTo(w + r, d);
      shape.quadraticCurveTo(w + r, d + r, w, d + r);
      shape.lineTo(-w, d + r);
      shape.quadraticCurveTo(-w - r, d + r, -w - r, d);
      shape.lineTo(-w - r, -d);
      shape.quadraticCurveTo(-w - r, -d - r, -w, -d - r);
      var geo = new THREE.ExtrudeGeometry(shape, { depth: GEL_T - 0.06, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 5, curveSegments: 10 });
      geo.rotateX(-Math.PI / 2);
      geo.translate(0, GEL_TOP - (GEL_T - 0.06) - 0.03, 0);
      var gel = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({
        color: 0x0b1a2f,
        roughness: 0.42,
        metalness: 0,
        envMapIntensity: 0.55,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        sheen: 0.35,
        sheenRoughness: 0.6,
        sheenColor: new THREE.Color(0x60a5fa)
      }));
      gel.receiveShadow = true;
      substrate.add(gel);
    })();

    // Collagen-like ECM fibers on the gel surface: wavy at rest, straighter when stretched.
    var ecm = (function () {
      var pairs = [];
      for (var i = 0; i < 46; i++) {
        var ang = rand() * Math.PI, len = 0.5 + rand() * 0.9;
        var cx = (rand() - 0.5) * (GEL_W - 0.5), cz = (rand() - 0.5) * (GEL_D - 0.5);
        var dx = Math.cos(ang), dz = Math.sin(ang), wav = [], str = [];
        var amp = 0.03 + rand() * 0.04, freq = 2 + rand() * 3, ph = rand() * 6;
        for (var k = 0; k <= 8; k++) {
          var t = k / 8 - 0.5;
          var x = cx + dx * t * len, z = cz + dz * t * len;
          var o = Math.sin(t * freq * Math.PI * 2 + ph) * amp;
          x = Math.max(-GEL_W / 2 + 0.1, Math.min(GEL_W / 2 - 0.1, x));
          z = Math.max(-GEL_D / 2 + 0.1, Math.min(GEL_D / 2 - 0.1, z));
          var y = GEL_TOP + 0.004 + (rand() * 0.004);
          wav.push(V(x - dz * o, y, z + dx * o));
          str.push(V(x - dz * o * 0.15, y, z + dx * o * 0.15));
        }
        pairs.push([wav, str, 0.0022 + rand() * 0.0018]);
      }
      var m = new THREE.Mesh(morphTubes(pairs, 0.004, 40, 4), new THREE.MeshPhysicalMaterial({
        color: 0x4f6f94, roughness: 0.55, sheen: 0.5, sheenColor: new THREE.Color(0x93c5fd), clearcoat: 0.2
      }));
      m.receiveShadow = true;
      substrate.add(m);
      return m;
    })();

    // Force arrows pulling the substrate outward (stretch), matching the 2D legend's yellow.
    var arrows = new THREE.Group();
    substrate.add(arrows);
    var arrowMat = new THREE.MeshPhysicalMaterial({ color: 0xfbbf24, emissive: 0xb45309, emissiveIntensity: 0.55, roughness: 0.25, clearcoat: 1 });
    var arrowList = [];
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
      var g = new THREE.Group();
      var shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.34, 20), arrowMat);
      shaft.position.y = 0.17;
      var head = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.16, 28), arrowMat);
      head.position.y = 0.42;
      g.add(shaft, head);
      shaft.castShadow = head.castShadow = true;
      var dir = V(d[0], 0, d[1]);
      g.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
      g.userData = { dir: dir, edge: d[0] ? GEL_W / 2 + 0.02 : GEL_D / 2 + 0.02 };
      arrows.add(g);
      arrowList.push(g);
    });

    // ======================================================================
    // The cell
    // ======================================================================
    var cell = new THREE.Group();
    scene.add(cell);

    var AX = 1.15, AZ = 0.86;
    var NC = V(-0.12, 0.235, 0.02);     // nucleus center
    var NR = V(0.4, 0.18, 0.31);        // nucleus radii

    function angDiff(a, b) { var d = a - b; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return d; }
    // Polarized outline: a broad leading lamellipodium toward +x and a narrower trailing edge.
    function outline(th) {
      var c = Math.cos(th), s = Math.sin(th);
      return 1 +
        0.09 * Math.sin(3 * th + 0.6) + 0.05 * Math.sin(5 * th + 1.9) +
        0.17 * Math.exp(-Math.pow(angDiff(th, 0.1), 2) / 0.22) +
        0.07 * Math.exp(-Math.pow(angDiff(th, 2.5), 2) / 0.08) -
        0.1 * Math.exp(-Math.pow(angDiff(th, Math.PI), 2) / 0.1) +
        0.1 * (fbm(c * 2.2 + 3, s * 2.2 + 1, 0.5, 3) - 0.5) +
        0.03 * (fbm(c * 9 + 1, s * 9 + 4, 2.5, 2) - 0.5);
    }
    function normRadius(x, z) {
      var th = Math.atan2(z / AZ, x / AX);
      return Math.sqrt((x / AX) * (x / AX) + (z / AZ) * (z / AZ)) / outline(th);
    }
    function lamella(rho) { return 0.012 + 0.024 * (1 - Math.pow(Math.min(1, rho), 4)); }
    function dome(x, z) {
      var dx = (x - NC.x) / 0.56, dz = (z - NC.z) / 0.46;
      return 0.5 * Math.exp(-Math.pow(dx * dx + dz * dz, 1.15));
    }
    function topHeight(x, z) { var r = normRadius(x, z); return lamella(r) + dome(x, z); }
    function nucleusTop(x, z) {
      var q = 1 - Math.pow((x - NC.x) / NR.x, 2) - Math.pow((z - NC.z) / NR.z, 2);
      return q > 0 ? NC.y + NR.y * Math.sqrt(q) : -1;
    }
    function insideNucleus(p, margin) {
      var m = margin || 0;
      return Math.pow((p.x - NC.x) / (NR.x + m), 2) + Math.pow((p.y - NC.y) / (NR.y + m), 2) + Math.pow((p.z - NC.z) / (NR.z + m), 2) < 1;
    }
    function sampleCytoplasm(minY, maxFrac, rhoMax) {
      for (var tries = 0; tries < 200; tries++) {
        var x = (rand() * 2 - 1) * AX * 1.2, z = (rand() * 2 - 1) * AZ * 1.2;
        if (normRadius(x, z) > (rhoMax || 0.86)) continue;
        var h = topHeight(x, z);
        var y = minY + rand() * Math.max(0.002, h * (maxFrac || 0.8) - minY);
        var p = V(x, y, z);
        if (insideNucleus(p, 0.04)) continue;
        return p;
      }
      return V(0.5, 0.02, 0);
    }
    function edgePoint(th, rho) {
      var r = outline(th) * rho;
      return V(Math.cos(th) * AX * r, 0, Math.sin(th) * AZ * r);
    }

    // ---------- Plasma membrane ----------
    var membraneMat = new THREE.MeshPhysicalMaterial({
      color: 0xd6ecff,
      roughness: 0.07,
      metalness: 0,
      transmission: 1,
      thickness: 0.22,
      ior: 1.37,
      attenuationColor: new THREE.Color(0xb7d6f5),
      attenuationDistance: 1.8,
      sheen: 0.35,
      sheenRoughness: 0.4,
      sheenColor: new THREE.Color(0xbfe1ff),
      clearcoat: 0.3,
      clearcoatRoughness: 0.3,
      iridescence: 0.35,
      iridescenceIOR: 1.3,
      specularIntensity: 0.6,
      envMapIntensity: 0.75
    });
    (function () {
      var geo = new THREE.SphereGeometry(1, lowPower ? 128 : 192, lowPower ? 80 : 120);
      var p = geo.attributes.position;
      for (var i = 0; i < p.count; i++) {
        var x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        var rhoS = Math.sqrt(x * x + z * z);
        var th = Math.atan2(z, x);
        var R = outline(th);
        var X = AX * R * x, Z = AZ * R * z, Y;
        if (y >= 0) {
          var t = Math.sqrt(Math.min(1, y / 0.2));
          var c = Math.cos(th), s = Math.sin(th);
          var ruffle = 0.024 * (fbm(c * 7 + 2, s * 7 + 5, rhoS * 5, 3) - 0.42) * smooth(0.6, 0.9, rhoS) * (1 - smooth(0.97, 1, rhoS));
          var h = lamella(rhoS) + dome(X, Z) + ruffle;
          Y = 0.004 + (h - 0.004) * t;
          Y += 0.005 * (fbm(X * 16, Y * 16, Z * 16, 2) - 0.5) * t;
        } else {
          Y = 0.004 - 0.008 * Math.sqrt(Math.min(1, -y / 0.2));
        }
        p.setXYZ(i, X, Y, Z);
      }
      geo.computeVertexNormals();
      var mem = new THREE.Mesh(geo, membraneMat);
      mem.renderOrder = 2;
      cell.add(mem);

      // Filopodia: thin actin-filled protrusions from the edge.
      for (var f = 0; f < 22; f++) {
        var th2 = (f / 22) * Math.PI * 2 + rand() * 0.2;
        var base = edgePoint(th2, 0.97);
        var dir = V(Math.cos(th2) * AX, 0, Math.sin(th2) * AZ).normalize();
        var len = 0.08 + rand() * (Math.abs(angDiff(th2, 0.1)) < 0.9 ? 0.22 : 0.1);
        var tip = base.clone().add(dir.clone().multiplyScalar(len));
        var bend = base.clone().lerp(tip, 0.5).add(V(-dir.z, 0, dir.x).multiplyScalar((rand() - 0.5) * 0.05));
        base.y = 0.008; bend.y = 0.007; tip.y = 0.005;
        var tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([base, bend, tip]), 12, 0.0055, 6, false);
        // Taper toward the tip.
        var tp = tube.attributes.position, center = new THREE.Vector3();
        var curve = new THREE.CatmullRomCurve3([base, bend, tip]);
        for (var k = 0; k < tp.count; k++) {
          var ring = Math.floor(k / 7) / 12;
          curve.getPointAt(Math.min(1, ring), center);
          var sc = 1 - 0.65 * ring;
          tp.setXYZ(k, center.x + (tp.getX(k) - center.x) * sc, center.y + (tp.getY(k) - center.y) * sc, center.z + (tp.getZ(k) - center.z) * sc);
        }
        tube.computeVertexNormals();
        cell.add(new THREE.Mesh(tube, membraneMat));
      }
    })();

    // ---------- Nucleus with chromatin texture ----------
    function chromatinTextures() {
      var W = 512, H = 256;
      var c1 = document.createElement("canvas"), c2 = document.createElement("canvas");
      c1.width = c2.width = W; c1.height = c2.height = H;
      var g1 = c1.getContext("2d"), g2 = c2.getContext("2d");
      var d1 = g1.createImageData(W, H), d2 = g2.createImageData(W, H);
      var nucleoli = [[0.3, 0.42, 0.06], [0.62, 0.55, 0.045], [0.82, 0.38, 0.035]];
      for (var j = 0; j < H; j++) {
        var phi = (j / H) * Math.PI;
        for (var i = 0; i < W; i++) {
          var lam = (i / W) * Math.PI * 2;
          var x = Math.sin(phi) * Math.cos(lam), y = Math.cos(phi), z = Math.sin(phi) * Math.sin(lam);
          var n = fbm(x * 3 + 7, y * 3 + 2, z * 3 + 5, 5);
          var fine = fbm(x * 14, y * 14, z * 14, 2);
          var v = Math.max(0, Math.min(1, (n - 0.35) * 2.2 * 0.75 + fine * 0.35));
          var dark = 0;
          nucleoli.forEach(function (nu) {
            var du = Math.abs(i / W - nu[0]); du = Math.min(du, 1 - du);
            var dv = j / H - nu[1];
            dark = Math.max(dark, 1 - smooth(nu[2] * 0.6, nu[2], Math.sqrt(du * du * 4 + dv * dv)));
          });
          // Color: lavender euchromatin, deeper violet heterochromatin, dark nucleoli.
          var r = 52 + 95 * v, g = 40 + 78 * v, b = 118 + 92 * v;
          r *= 1 - 0.55 * dark; g *= 1 - 0.55 * dark; b *= 1 - 0.4 * dark;
          var o = (j * W + i) * 4;
          d1.data[o] = r; d1.data[o + 1] = g; d1.data[o + 2] = b; d1.data[o + 3] = 255;
          // Emission mask: YAP/TAZ signal shown in the nucleoplasm, not in nucleoli.
          var e = (0.35 + 0.65 * v) * (1 - dark);
          d2.data[o] = d2.data[o + 1] = d2.data[o + 2] = 255 * e; d2.data[o + 3] = 255;
        }
      }
      g1.putImageData(d1, 0, 0); g2.putImageData(d2, 0, 0);
      var t1 = new THREE.CanvasTexture(c1), t2 = new THREE.CanvasTexture(c2);
      t1.colorSpace = THREE.SRGBColorSpace;
      t1.anisotropy = t2.anisotropy = 4;
      return [t1, t2];
    }
    var chrom = chromatinTextures();
    var nucleusMat = new THREE.MeshPhysicalMaterial({
      map: chrom[0],
      bumpMap: chrom[1],
      bumpScale: 1.2,
      roughness: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.3,
      sheen: 0.6,
      sheenColor: new THREE.Color(0xc4b5fd),
      emissive: new THREE.Color(0x67e8f9),
      emissiveMap: chrom[1],
      emissiveIntensity: 0.1
    });
    var nucleus = new THREE.Group();
    nucleus.position.copy(NC);
    cell.add(nucleus);
    (function () {
      var geo = new THREE.SphereGeometry(1, 96, 64);
      var p = geo.attributes.position;
      for (var i = 0; i < p.count; i++) {
        var x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        var w = 1 + 0.045 * (fbm(x * 2 + 1, y * 2 + 3, z * 2 + 5, 3) - 0.5);
        p.setXYZ(i, x * w, y * w, z * w);
      }
      geo.computeVertexNormals();
      var m = new THREE.Mesh(geo, nucleusMat);
      m.castShadow = true;
      nucleus.add(m);
      // Nuclear pore complexes.
      var pores = new THREE.InstancedMesh(new THREE.TorusGeometry(0.0125, 0.0042, 5, 12), new THREE.MeshPhysicalMaterial({ color: 0xc9c1f5, roughness: 0.4, clearcoat: 0.4 }), 280);
      var dirs = [];
      for (var k = 0; k < 1200 && dirs.length < 280; k++) {
        var d = V(rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1);
        if (d.lengthSq() > 1 || d.lengthSq() < 0.05) continue;
        d.normalize();
        if (d.y < -0.35) continue;
        dirs.push(d);
      }
      pores.count = dirs.length;
      pores.userData.dirs = dirs;
      nucleus.add(pores);
      nucleus.userData.mesh = m;
      nucleus.userData.pores = pores;
    })();
    var lastFlatten = -1;
    var poreDummy = new THREE.Object3D();
    function setNucleusShape(flatten) {
      var sx = NR.x * (1 + 0.07 * flatten), sy = NR.y * (1 - 0.16 * flatten), sz = NR.z * (1 + 0.07 * flatten);
      nucleus.userData.mesh.scale.set(sx, sy, sz);
      nucleus.userData.radii = V(sx, sy, sz);
      if (Math.abs(flatten - lastFlatten) > 0.002) {
        lastFlatten = flatten;
        // Pore rings stay round and sit flush on the deformed envelope.
        var pores = nucleus.userData.pores;
        pores.userData.dirs.forEach(function (d, i) {
          poreDummy.position.set(d.x * sx * 1.005, d.y * sy * 1.005, d.z * sz * 1.005);
          var nrm = V(d.x / sx, d.y / sy, d.z / sz).normalize();
          poreDummy.lookAt(poreDummy.position.clone().add(nrm));
          poreDummy.updateMatrix();
          pores.setMatrixAt(i, poreDummy.matrix);
        });
        pores.instanceMatrix.needsUpdate = true;
      }
      return sy;
    }

    // ---------- Organelles ----------
    var dummy = new THREE.Object3D();
    (function mitochondria() {
      var count = lowPower ? 55 : 85;
      var inst = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.016, 0.07, 6, 12), new THREE.MeshPhysicalMaterial({
        color: 0xe2866a, roughness: 0.42, clearcoat: 0.6, clearcoatRoughness: 0.25, sheen: 0.4, sheenColor: new THREE.Color(0xffc2a8)
      }), count);
      for (var i = 0; i < count; i++) {
        var p = sampleCytoplasm(0.018, 0.55, 0.8);
        dummy.position.copy(p);
        // Mitochondria tend to align radially, along microtubule tracks.
        var yaw = Math.atan2(p.z - NC.z, p.x - NC.x) + (rand() - 0.5) * 0.9;
        var axis = V(Math.cos(yaw), (rand() - 0.5) * 0.25, Math.sin(yaw)).normalize();
        dummy.rotation.set(0, 0, 0);
        dummy.quaternion.setFromUnitVectors(V(0, 1, 0), axis);
        dummy.scale.set(1, 0.7 + rand() * 1.1, 1);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      }
      inst.castShadow = true;
      cell.add(inst);
    })();
    (function vesicles() {
      var count = lowPower ? 90 : 150;
      var inst = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 14, 10), new THREE.MeshPhysicalMaterial({
        color: 0xe8f1ff, roughness: 0.2, clearcoat: 1, transmission: 0, sheen: 0.5, sheenColor: new THREE.Color(0xbfdbfe)
      }), count);
      for (var i = 0; i < count; i++) {
        dummy.position.copy(sampleCytoplasm(0.02, 0.75, 0.84));
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(0.007 + rand() * 0.012);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      }
      cell.add(inst);
    })();

    // Golgi stack and centrosome on the leading side of the nucleus.
    var CENTRO = V(NC.x + 0.52, 0.075, NC.z - 0.06);
    (function golgi() {
      var mat = new THREE.MeshPhysicalMaterial({ color: 0xe8a2c8, roughness: 0.35, clearcoat: 0.8, sheen: 0.5, sheenColor: new THREE.Color(0xfbcfe8) });
      for (var i = 0; i < 5; i++) {
        var r = 0.13 - i * 0.012;
        var t = new THREE.Mesh(new THREE.TorusGeometry(r, 0.011, 8, 32, 1.9), mat);
        t.scale.set(1, 1, 0.5);
        t.rotation.set(Math.PI / 2, 0, Math.PI * 0.95 - 0.95);
        t.position.set(NC.x + 0.36 + i * 0.028, 0.06 + i * 0.006, NC.z + 0.03);
        t.castShadow = true;
        cell.add(t);
      }
      var cMat = new THREE.MeshPhysicalMaterial({ color: 0xf1f5f9, roughness: 0.3, clearcoat: 1 });
      var c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.045, 10), cMat);
      var c2 = c1.clone();
      c1.position.copy(CENTRO);
      c2.position.copy(CENTRO).add(V(0.02, 0, 0));
      c2.rotation.z = Math.PI / 2;
      cell.add(c1, c2);
    })();

    // Microtubules radiating from the centrosome, routed over the nucleus.
    (function microtubules() {
      var tubes = [];
      for (var i = 0; i < (lowPower ? 26 : 40); i++) {
        var ang = (i / 40) * Math.PI * 2 + rand() * 0.15;
        var dir = V(Math.cos(ang), 0, Math.sin(ang));
        var pts = [CENTRO.clone()], p = CENTRO.clone();
        for (var s = 1; s <= 7; s++) {
          var q = p.clone().add(dir.clone().multiplyScalar(0.16));
          dir.applyAxisAngle(V(0, 1, 0), (rand() - 0.5) * 0.35);
          if (normRadius(q.x, q.z) > 0.9) break;
          var h = topHeight(q.x, q.z);
          var y = Math.min(h - 0.015, Math.max(0.025, h * 0.45));
          var nt = nucleusTop(q.x, q.z);
          if (nt > 0) y = Math.min(h - 0.012, nt + 0.02);
          q.y = Math.max(0.012, y);
          pts.push(q);
          p = q;
        }
        if (pts.length > 2) tubes.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 8, 0.0032, 5, false));
      }
      var m = new THREE.Mesh(mergeGeometries(tubes), new THREE.MeshPhysicalMaterial({ color: 0xa7f3d0, emissive: 0x34d399, emissiveIntensity: 0.12, roughness: 0.4 }));
      cell.add(m);
    })();

    // ---------- Actin: ventral stress fibers and the perinuclear actin cap ----------
    function edgeAlong(z, sign) {
      for (var x = 0; Math.abs(x) < 2.5; x += 0.02 * sign) if (normRadius(x, z) > 0.86) return x;
      return sign * 1;
    }
    var adhesionSpots = [];
    var actinMat = new THREE.MeshPhysicalMaterial({ color: 0xc7e4ff, emissive: 0x60a5fa, emissiveIntensity: 0.15, roughness: 0.35, clearcoat: 0.5 });
    var capMat = new THREE.MeshPhysicalMaterial({ color: 0xc7f1ff, emissive: 0x22d3ee, emissiveIntensity: 0.15, roughness: 0.35, clearcoat: 0.5 });
    (function ventral() {
      var tubes = [];
      [-0.5, -0.36, -0.22, -0.08, 0.06, 0.2, 0.34, 0.48].forEach(function (z0, i) {
        var tilt = (rand() - 0.5) * 0.18;
        var xa = edgeAlong(z0 - tilt, -1), xb = edgeAlong(z0 + tilt, 1);
        var a = V(xa, 0.014, z0 - tilt), b = V(xb, 0.014, z0 + tilt);
        var mid = a.clone().lerp(b, 0.5); mid.y = 0.02; mid.z += (rand() - 0.5) * 0.05;
        tubes.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a, mid, b]), 40, 0.0075 + rand() * 0.003, 6, false));
        adhesionSpots.push([a, b.clone().sub(a).normalize()], [b, a.clone().sub(b).normalize()]);
        if (i % 2 === 0) {
          // Thin parallel filaments make each bundle read as fibrous.
          var o = V(0, 0.004, 0.012);
          tubes.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a.clone().add(o), mid.clone().add(o), b.clone().add(o)]), 40, 0.0035, 5, false));
        }
      });
      var m = new THREE.Mesh(mergeGeometries(tubes), actinMat);
      m.castShadow = true;
      cell.add(m);
    })();
    var cap = new THREE.Group();
    cell.add(cap);
    var CAP_TOP = NC.y + NR.y + 0.022;
    (function actinCap() {
      var tubes = [];
      [-0.17, -0.085, 0, 0.085, 0.17].forEach(function (z0) {
        var xa = edgeAlong(z0 * 1.6, -1) * 0.92, xb = edgeAlong(z0 * 1.6, 1) * 0.86;
        var a = V(xa, 0.012, z0 * 1.6), b = V(xb, 0.012, z0 * 1.6);
        var ztop = z0;
        var over = function (x) { return Math.max(0.02, nucleusTop(x, ztop) + 0.022); };
        var pts = [a,
          V(NC.x - NR.x * 1.15, 0.07, z0 * 1.25),
          V(NC.x - NR.x * 0.55, over(NC.x - NR.x * 0.55), ztop),
          V(NC.x, CAP_TOP, ztop),
          V(NC.x + NR.x * 0.55, over(NC.x + NR.x * 0.55), ztop),
          V(NC.x + NR.x * 1.15, 0.07, z0 * 1.25),
          b];
        tubes.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.0065, 6, false));
        adhesionSpots.push([a, V(1, 0, 0)], [b, V(-1, 0, 0)]);
      });
      var m = new THREE.Mesh(mergeGeometries(tubes), capMat);
      m.castShadow = true;
      cap.add(m);
    })();

    // Focal adhesions at fiber ends; they enlarge under tension.
    var adhesions = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 16, 10), new THREE.MeshPhysicalMaterial({
      color: 0xf6a04d, emissive: 0xc2410c, emissiveIntensity: 0.25, roughness: 0.35, clearcoat: 0.8
    }), adhesionSpots.length);
    cell.add(adhesions);
    function updateAdhesions(t) {
      adhesionSpots.forEach(function (s, i) {
        dummy.position.copy(s[0]).addScaledVector(s[1], 0.02);
        dummy.position.y = 0.006;
        dummy.rotation.set(0, -Math.atan2(s[1].z, s[1].x), 0);
        dummy.scale.set(0.038 * (1 + 0.7 * t), 0.006, 0.013 * (1 + 0.25 * t));
        dummy.updateMatrix();
        adhesions.setMatrixAt(i, dummy.matrix);
      });
      adhesions.instanceMatrix.needsUpdate = true;
    }

    // ---------- YAP/TAZ: shuttles between cytoplasm and nucleus ----------
    var N = lowPower ? 120 : 170;
    var yapGeo = new THREE.SphereGeometry(1, 12, 8);
    var yap = new THREE.InstancedMesh(yapGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), N);
    yap.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    cell.add(yap);
    var BRIGHT = new THREE.Color(0x67e8f9).multiplyScalar(1.25);
    var RETAINED = new THREE.Color(0x1d5f6c);
    var particles = [];
    for (var i = 0; i < N; i++) {
      var home = sampleCytoplasm(0.02, 0.7, 0.82);
      var pd = V(rand() * 2 - 1, rand() * 0.9, rand() * 2 - 1).normalize();
      particles.push({
        home: home,
        pore: pd,
        tau: (i + rand()) / N,
        p: 0,
        speed: 0.45 + rand() * 0.45,
        ph: rand() * 6.28,
        col: BRIGHT.clone(),
        size: 0.012 + rand() * 0.006
      });
      yap.setColorAt(i, BRIGHT);
    }
    var tmpA = V(0, 0, 0), tmpB = V(0, 0, 0), tmpC = V(0, 0, 0), tmpCol = new THREE.Color();
    function bez(a, b, c, t, out) {
      var u = 1 - t;
      return out.set(u * u * a.x + 2 * u * t * b.x + t * t * c.x, u * u * a.y + 2 * u * t * b.y + t * t * c.y, u * u * a.z + 2 * u * t * b.z + t * t * c.z);
    }

    // ---------- Labels (match the 2D figure) ----------
    var labelsEl = host.querySelector(".t3d-labels");
    var labelDefs = [
      { text: "Nucleus", at: function () { return V(NC.x, CAP_TOP + 0.12, NC.z); } },
      { text: "Cell edge", at: function () { return edgePoint(0.15, 1.02).setY(0.06); } },
      { text: "Cytoskeleton", at: function () { return edgePoint(2.05, 0.7).setY(0.02); } }
    ];
    labelDefs.forEach(function (d) {
      var el = document.createElement("span");
      el.className = "t3d-label";
      el.textContent = d.text;
      labelsEl.appendChild(el);
      d.el = el;
    });

    // Soft contact shadow just outside the cell edge.
    (function () {
      var c = document.createElement("canvas");
      c.width = c.height = 128;
      var g = c.getContext("2d");
      var grd = g.createRadialGradient(64, 64, 20, 64, 64, 64);
      grd.addColorStop(0, "rgba(0,0,0,0.55)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grd;
      g.fillRect(0, 0, 128, 128);
      var m = new THREE.Mesh(new THREE.PlaneGeometry(AX * 2.7, AZ * 2.7), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.position.y = GEL_TOP + 0.001;
      cell.add(m);
    })();

    // ======================================================================
    // State and animation
    // ======================================================================
    var state = { force: 0, tension: 0, flatten: 0, memory: 0, arrow: 0 };
    var target = PHASES[stage.getAttribute("data-phase")] || PHASES.input;
    var phaseChanged = true;
    new MutationObserver(function () {
      target = PHASES[stage.getAttribute("data-phase")] || PHASES.input;
      phaseChanged = true;
      kick();
    }).observe(stage, { attributes: true, attributeFilter: ["data-phase"] });

    function approach(cur, goal, rate, dt) { return cur + (goal - cur) * (1 - Math.exp(-rate * dt)); }

    function updateState(dt, still) {
      if (still) {
        state.arrow = state.force = target.force;
        state.tension = target.force;
        state.flatten = Math.max(target.force, target.memory * 0.6);
        state.memory = target.memory;
      } else {
        state.arrow = approach(state.arrow, target.force, 5, dt);
        state.tension = approach(state.tension, target.force, 1.3, dt);
        state.flatten = approach(state.flatten, Math.max(target.force, target.memory * 0.6), 0.8, dt);
        state.memory = approach(state.memory, target.memory, 0.6, dt);
      }
    }

    function updateScene(t, dt, still) {
      // Substrate stretch and fiber alignment.
      var stretch = 1 + 0.045 * state.tension;
      substrate.scale.set(stretch, 1, stretch);
      ecm.morphTargetInfluences[0] = state.tension;
      arrowList.forEach(function (g) {
        var a = state.arrow;
        g.visible = a > 0.02;
        g.scale.setScalar(0.4 + 0.6 * a);
        g.position.copy(g.userData.dir).multiplyScalar(g.userData.edge + 0.05 + 0.12 * a);
        g.position.y = -0.09;
      });

      // Cell spreads with the substrate; the nucleus flattens under the tense actin cap.
      var spread = 1 + 0.05 * state.tension;
      cell.scale.set(spread, 1 - 0.06 * state.tension, spread);
      var sy = setNucleusShape(state.flatten);
      cap.scale.y = (NC.y + sy + 0.022) / CAP_TOP;
      var capT = Math.max(state.tension, state.memory * 0.9);
      actinMat.emissiveIntensity = 0.12 + 0.9 * state.tension;
      capMat.emissiveIntensity = 0.12 + 0.9 * capT;
      updateAdhesions(state.tension);

      // YAP/TAZ shuttling.
      var inside = 0;
      var radii = nucleus.userData.radii;
      for (var i = 0; i < N; i++) {
        var q = particles[i];
        var goIn = q.tau < target.nuc;
        var retained = !goIn && q.tau < target.nuc + target.retain;
        if (still) q.p = goIn ? 1 : 0;
        else {
          var v = q.speed * target.speed * dt * 0.9;
          q.p = goIn ? Math.min(1, q.p + v) : Math.max(0, q.p - v);
        }
        var e = q.p * q.p * (3 - 2 * q.p);
        inside += smooth(0.82, 1, q.p);
        var jit = still ? 0 : 0.012;
        tmpA.copy(q.home).add(V(Math.sin(t * 0.9 + q.ph) * jit, Math.sin(t * 1.1 + q.ph * 2) * jit * 0.4, Math.cos(t * 0.8 + q.ph) * jit));
        tmpC.set(NC.x + q.pore.x * radii.x * 0.98, NC.y + q.pore.y * radii.y * 0.98, NC.z + q.pore.z * radii.z * 0.98);
        tmpB.copy(tmpA).lerp(tmpC, 0.5);
        tmpB.y += 0.05;
        bez(tmpA, tmpB, tmpC, e, tmpA);
        var s = q.size * (1 - smooth(0.82, 1, q.p));
        dummy.position.copy(tmpA);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(Math.max(s, 0.00001));
        dummy.updateMatrix();
        yap.setMatrixAt(i, dummy.matrix);
        tmpCol.copy(retained ? RETAINED : BRIGHT);
        if (still) q.col.copy(tmpCol); else q.col.lerp(tmpCol, 1 - Math.exp(-4 * dt));
        yap.setColorAt(i, q.col);
      }
      yap.instanceMatrix.needsUpdate = true;
      yap.instanceColor.needsUpdate = true;
      var frac = inside / N;
      nucleusMat.emissiveIntensity = 0.04 + 2.6 * frac + 0.35 * state.memory;
    }

    // ---------- Camera ----------
    var BASE = { yaw: -0.42, pitch: 0.66 };
    var user = { yaw: 0, pitch: 0 };
    var view = { yaw: BASE.yaw, pitch: BASE.pitch };
    var pointer = { x: 0, y: 0 };
    var fit = 3.4;
    var lookAt = V(0.05, -0.02, 0.0);
    var drag = null;
    var canvas = renderer.domElement;

    canvas.addEventListener("pointerdown", function (e) {
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, yaw: user.yaw, pitch: user.pitch, moved: 0 };
    });
    canvas.addEventListener("pointermove", function (e) {
      if (e.pointerType === "mouse") {
        var r = canvas.getBoundingClientRect();
        pointer.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        pointer.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      }
      if (!drag || drag.id !== e.pointerId) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
      if (drag.moved > 4) {
        if (!drag.captured) { try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } drag.captured = true; host.classList.add("is-dragging"); }
        user.yaw = Math.max(-1.2, Math.min(1.2, drag.yaw - dx * 0.006));
        if (e.pointerType === "mouse") user.pitch = Math.max(-0.4, Math.min(0.5, drag.pitch + dy * 0.004));
        kick();
      }
    });
    function endDrag(e) {
      if (!drag || drag.id !== e.pointerId) return;
      drag = null;
      host.classList.remove("is-dragging");
    }
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", function () { pointer.x = pointer.y = 0; });
    canvas.addEventListener("dblclick", function () { user.yaw = user.pitch = 0; kick(); });

    var width = 0, height = 0;
    function resize() {
      var w = host.clientWidth, h = host.clientHeight;
      if (!w || !h) return;
      width = w; height = h;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      var halfV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      var halfW = camera.aspect < 1.45 ? 1.5 : 2.2;
      fit = Math.max(3.3, halfW / (halfV * Math.min(camera.aspect, 1.9)) + 0.6);
      host.classList.toggle("is-narrow", w < 480);
      camera.updateProjectionMatrix();
      kick();
    }

    var projected = V(0, 0, 0);
    function placeLabels() {
      labelDefs.forEach(function (d) {
        projected.copy(d.at()).applyMatrix4(cell.matrixWorld).project(camera);
        var x = (projected.x * 0.5 + 0.5) * width, y = (-projected.y * 0.5 + 0.5) * height;
        var half = (d.el.offsetWidth || 0) / 2;
        x = Math.max(half + 6, Math.min(width - half - 6, x));
        y = Math.max(16, Math.min(height - 10, y));
        d.el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) translate(-50%,-100%)";
      });
    }

    var visible = false, active = false, raf = 0, lastT = 0;
    var clock = new THREE.Clock();
    function frame() {
      raf = 0;
      if (!visible || !active || document.hidden || !width) return;
      var still = reduceMotion.matches;
      var dt = Math.min(0.1, clock.getDelta());
      var t = still ? lastT : clock.elapsedTime;
      lastT = t;

      updateState(dt, still);
      updateScene(t, dt, still);

      var idle = still ? 0 : 0.2 * Math.sin(t * 0.11);
      var gy = BASE.yaw + user.yaw + idle + (still ? 0 : pointer.x * 0.08);
      var gp = BASE.pitch + user.pitch + (still ? 0 : pointer.y * 0.04);
      var k = still ? 1 : 1 - Math.exp(-dt * 4);
      view.yaw += (gy - view.yaw) * k;
      view.pitch += (gp - view.pitch) * k;
      camera.position.set(
        lookAt.x + fit * Math.sin(view.yaw) * Math.cos(view.pitch),
        lookAt.y + fit * Math.sin(view.pitch),
        lookAt.z + fit * Math.cos(view.yaw) * Math.cos(view.pitch)
      );
      camera.lookAt(lookAt);
      cell.updateMatrixWorld();
      renderer.render(scene, camera);
      placeLabels();
      phaseChanged = false;
      if (!still) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }

    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) { clock.getDelta(); kick(); }
    }, { rootMargin: "100px" }).observe(host);
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(host);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", kick);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", kick);

    updateState(0, true);
    resize();
    host.classList.add("is-ready");

    return { setActive: function (on) { active = on; if (on) { resize(); kick(); } } };
  }
})();
