/*
 * Homepage highlighted-study 3D scene: a literal immune cell for the UPR review.
 * Each element looks like what it is: a nucleus, an ER network, the IRE1a / PERK / ATF6
 * sensors in the ER membrane, mitochondria, and toxicant particles entering the cell,
 * with small name tags, over the lit 3D grid backdrop used on the other 3D views.
 * Controls (as requested): drag the empty background to move the cell while the camera
 * stays put; drag the cell itself to orbit the camera 360 degrees; scroll to zoom.
 * Remove the script line in depth3d/home.liquid to roll back.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  var THREE_URL = (script && script.getAttribute("data-three")) || "/assets/js/lib/three-r170.module.min.js";

  var stage = document.getElementById("upr-figure-stage");
  if (!stage || !window.matchMedia || !("IntersectionObserver" in window)) return;
  try {
    var probe = document.createElement("canvas");
    if (!(window.WebGLRenderingContext && (probe.getContext("webgl2") || probe.getContext("webgl")))) return;
  } catch (e) { return; }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var small = window.matchMedia("(max-width: 720px), (pointer: coarse)");

  var host = document.createElement("div");
  host.className = "upr-fig-inner";
  host.innerHTML =
    '<span class="upr-fig-tag">Conceptual 3D cell · drag background to move · drag the cell to orbit · scroll to zoom</span>' +
    '<div class="upr-fig-labels" aria-hidden="true"></div>' +
    '<div class="upr-fig-tools">' +
      '<button type="button" data-z="out" aria-label="Zoom out">−</button>' +
      '<button type="button" data-z="in" aria-label="Zoom in">+</button>' +
      '<button type="button" data-act="reset">Reset view</button>' +
    "</div>" +
    '<p class="upr-fig-status" aria-live="polite">Loading 3D cell…</p>';
  stage.appendChild(host);

  var api = null, loading = false;
  function load() {
    if (api || loading) return;
    loading = true;
    import(THREE_URL).then(function (THREE) { api = build(THREE); var s = host.querySelector(".upr-fig-status"); if (s) s.remove(); })
      .catch(function () { host.remove(); stage.classList.add("upr-fig-failed"); });
  }
  var watch = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { watch.disconnect(); load(); } }, { rootMargin: "500px" });
  watch.observe(stage);

  // ---------- noise + deterministic random ----------
  function hash3(i, j, k) { var h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(k, 1440662683); h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967295; }
  function vnoise(x, y, z) {
    var xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
    var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
    function L(a, b, t) { return a + (b - a) * t; }
    return L(L(L(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), u), L(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), u), v),
      L(L(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), u), L(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), u), v), w);
  }
  function fbm(x, y, z, oct) { var s = 0, a = 0.5, f = 1, n = 0; for (var o = 0; o < (oct || 4); o++) { s += a * vnoise(x * f, y * f, z * f); n += a; a *= 0.5; f *= 2.03; } return s / n; }
  var seed = 9;
  function rand() { seed = (seed + 0x6d2b79f5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }

  // ======================================================================
  function build(THREE) {
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var lowPower = small.matches;

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.04;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "upr-fig-canvas";
    host.insertBefore(renderer.domElement, host.firstChild);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(32, 2, 0.05, 120);

    // studio env for PBR reflections
    (function () {
      var env = new THREE.Scene();
      env.add(new THREE.Mesh(new THREE.BoxGeometry(40, 20, 40), new THREE.MeshBasicMaterial({ color: 0x0a1424, side: THREE.BackSide })));
      function panel(w, h, pos, rgb) { var m = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }); m.color.setRGB(rgb[0], rgb[1], rgb[2]); var p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); p.position.copy(pos); p.lookAt(0, 0, 0); env.add(p); }
      panel(12, 6, V(-3, 7, 4), [5, 5.2, 5.6]); panel(6, 9, V(-12, 3, -3), [0.6, 1.1, 2.2]); panel(14, 3, V(4, 4, -12), [1.6, 2.6, 3.4]); panel(5, 5, V(11, 1.5, 6), [1.3, 1.1, 0.95]);
      var pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(env, 0.04).texture; pm.dispose();
    })();

    // lights
    var key = new THREE.DirectionalLight(0xf2f6ff, 2.5); key.position.set(-3, 7, 4.5);
    key.castShadow = true; key.shadow.mapSize.set(lowPower ? 1024 : 2048, lowPower ? 1024 : 2048);
    key.shadow.camera.left = -4; key.shadow.camera.right = 4; key.shadow.camera.top = 4; key.shadow.camera.bottom = -4;
    key.shadow.camera.near = 0.5; key.shadow.camera.far = 20; key.shadow.radius = 4; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02;
    scene.add(key);
    var rim = new THREE.DirectionalLight(0x7dd3fc, 1.3); rim.position.set(3, 2, -6); scene.add(rim);
    scene.add(new THREE.HemisphereLight(0xbcd4ff, 0x0a0f1a, 0.4));

    // lit grid backdrop (fixed; the cell moves over it when you pan)
    (function () {
      function gridMaterial(normal, cell, strength) {
        return new THREE.ShaderMaterial({ transparent: true, depthWrite: false,
          uniforms: { uLight: { value: key.position.clone() }, uNormal: { value: normal }, uCell: { value: cell }, uStrength: { value: strength }, uWhite: { value: new THREE.Color(0xf8fafc) }, uGray: { value: new THREE.Color(0x64748b) } },
          vertexShader: "varying vec3 vW; varying vec2 vP; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; vP=position.xy; gl_Position=projectionMatrix*viewMatrix*w; }",
          fragmentShader: "uniform vec3 uLight;uniform vec3 uNormal;uniform float uCell;uniform float uStrength;uniform vec3 uWhite;uniform vec3 uGray;varying vec3 vW;varying vec2 vP;" +
            "float grid(vec2 p,float s){vec2 c=p/s;vec2 g=abs(fract(c-0.5)-0.5)/fwidth(c);return 1.0-min(min(g.x,g.y),1.0);}" +
            "void main(){float minor=grid(vP,uCell);float major=grid(vP,uCell*5.0);vec3 L=uLight-vW;float d=length(L);" +
            "float lambert=max(dot(normalize(uNormal),L/d),0.0);float pool=clamp(1.0-d/26.0,0.0,1.0);float shade=clamp(lambert*pool*2.0,0.0,1.0);" +
            "float edge=smoothstep(0.0,0.18,0.5-max(abs(vP.x)/44.0,abs(vP.y)/26.0));" +
            "float a=max(minor*0.6,major)*(0.18+0.82*shade)*edge*uStrength;gl_FragColor=vec4(mix(uGray,uWhite,shade),a);}" });
      }
      var floor = new THREE.Mesh(new THREE.PlaneGeometry(44, 26), gridMaterial(V(0, 1, 0), 0.6, 1));
      floor.rotation.x = -Math.PI / 2; floor.position.y = -1.7; floor.renderOrder = -2;
      var wall = new THREE.Mesh(new THREE.PlaneGeometry(44, 26), gridMaterial(V(0, 0, 1), 0.6, 0.55));
      wall.position.set(0, 11, -7); wall.renderOrder = -2;
      scene.add(floor, wall);
    })();

    // merge helper
    function mergeGeometries(list) {
      var pos = [], nor = [], idx = [], off = 0;
      list.forEach(function (g) { pos.push(g.attributes.position.array); nor.push(g.attributes.normal.array); var ia = g.index.array; for (var i = 0; i < ia.length; i++) idx.push(ia[i] + off); off += g.attributes.position.count; });
      function cat(a) { var n = 0; a.forEach(function (x) { n += x.length; }); var o = new Float32Array(n), q = 0; a.forEach(function (x) { o.set(x, q); q += x.length; }); return o; }
      var m = new THREE.BufferGeometry(); m.setAttribute("position", new THREE.BufferAttribute(cat(pos), 3)); m.setAttribute("normal", new THREE.BufferAttribute(cat(nor), 3)); m.setIndex(idx); return m;
    }
    function tube(points, r, seg) { return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), seg || Math.max(20, points.length * 10), r, 6, false); }

    // ======================================================================
    // THE CELL (everything that pans lives in cellRoot)
    // ======================================================================
    var cellRoot = new THREE.Group();
    scene.add(cellRoot);
    var pickable = [];            // meshes that count as "the cell" for the drag test
    function addCell(m) { cellRoot.add(m); m.traverse(function (o) { if (o.isMesh) pickable.push(o); }); return m; }
    var NUC_R = 0.62;

    // contact shadow
    (function () {
      var c = document.createElement("canvas"); c.width = c.height = 128; var g = c.getContext("2d");
      var grd = g.createRadialGradient(64, 64, 18, 64, 64, 64); grd.addColorStop(0, "rgba(0,0,0,0.5)"); grd.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
      var m = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 4.4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
      m.rotation.x = -Math.PI / 2; m.position.y = -1.68; cellRoot.add(m);
    })();

    // plasma membrane
    var membraneMat = new THREE.MeshPhysicalMaterial({ color: 0xd6ecff, roughness: 0.08, metalness: 0, transmission: 1, thickness: 0.4, ior: 1.37, attenuationColor: new THREE.Color(0xb7d6f5), attenuationDistance: 2.2, sheen: 0.4, sheenRoughness: 0.4, sheenColor: new THREE.Color(0xbfe1ff), clearcoat: 0.3, clearcoatRoughness: 0.3, iridescence: 0.3, iridescenceIOR: 1.3, specularIntensity: 0.6, envMapIntensity: 0.8 });
    (function () {
      var geo = new THREE.SphereGeometry(1.3, lowPower ? 96 : 160, lowPower ? 64 : 100);
      var p = geo.attributes.position;
      for (var i = 0; i < p.count; i++) { var x = p.getX(i), y = p.getY(i), z = p.getZ(i); var n = fbm(x * 1.6 + 3, y * 1.6 + 1, z * 1.6 + 5, 4) - 0.5; var fine = fbm(x * 6 + 2, y * 6 + 4, z * 6 + 1, 2) - 0.5; var s = 1 + 0.07 * n + 0.02 * fine; p.setXYZ(i, x * s, y * s, z * s); }
      geo.computeVertexNormals();
      var mem = new THREE.Mesh(geo, membraneMat); mem.renderOrder = 3; addCell(mem);
      for (var f = 0; f < 16; f++) { var th = rand() * Math.PI * 2, ph = (rand() - 0.5) * 1.2; var dir = V(Math.cos(th) * Math.cos(ph), Math.sin(ph) * 0.7, Math.sin(th) * Math.cos(ph)).normalize(); var base = dir.clone().multiplyScalar(1.28), tip = dir.clone().multiplyScalar(1.28 + 0.12 + rand() * 0.22); addCell(new THREE.Mesh(tube([base, base.clone().lerp(tip, 0.5), tip], 0.012, 10), membraneMat)); }
    })();

    // nucleus with chromatin texture
    var nucTop;
    (function () {
      var W = 384, H = 192, c1 = document.createElement("canvas"); c1.width = W; c1.height = H; var g1 = c1.getContext("2d"), d1 = g1.createImageData(W, H);
      for (var j = 0; j < H; j++) { var phi = (j / H) * Math.PI; for (var i = 0; i < W; i++) { var lam = (i / W) * Math.PI * 2; var x = Math.sin(phi) * Math.cos(lam), y = Math.cos(phi), z = Math.sin(phi) * Math.sin(lam); var nv = fbm(x * 3 + 7, y * 3 + 2, z * 3 + 5, 4); var v = Math.max(0, Math.min(1, (nv - 0.35) * 2.0)); var r = 54 + 92 * v, gg = 42 + 74 * v, b = 118 + 90 * v; var o = (j * W + i) * 4; d1.data[o] = r; d1.data[o + 1] = gg; d1.data[o + 2] = b; d1.data[o + 3] = 255; } }
      g1.putImageData(d1, 0, 0); var tex = new THREE.CanvasTexture(c1); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
      var mat = new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.5, clearcoat: 0.5, clearcoatRoughness: 0.3, sheen: 0.6, sheenColor: new THREE.Color(0xc4b5fd), emissive: new THREE.Color(0x67e8f9), emissiveIntensity: 0.08 });
      var geo = new THREE.SphereGeometry(NUC_R, 80, 56); var p = geo.attributes.position;
      for (var k = 0; k < p.count; k++) { var vx = p.getX(k), vy = p.getY(k), vz = p.getZ(k); var w = 1 + 0.04 * (fbm(vx * 2 + 1, vy * 2 + 3, vz * 2 + 5, 3) - 0.5); p.setXYZ(k, vx * w, vy * w, vz * w); }
      geo.computeVertexNormals(); var nuc = new THREE.Mesh(geo, mat); nuc.castShadow = true; addCell(nuc);
      nucTop = V(0, NUC_R + 0.08, 0);
      // nuclear envelope pores hint
      var pores = new THREE.InstancedMesh(new THREE.TorusGeometry(0.03, 0.01, 5, 10), new THREE.MeshPhysicalMaterial({ color: 0xc9c1f5, roughness: 0.4 }), 60);
      var d = new THREE.Object3D();
      for (var pi = 0; pi < 60; pi++) { var a = rand() * Math.PI * 2, b2 = Math.acos(2 * rand() - 1); var nn = V(Math.sin(b2) * Math.cos(a), Math.cos(b2), Math.sin(b2) * Math.sin(a)); d.position.copy(nn.clone().multiplyScalar(NUC_R * 1.01)); d.lookAt(d.position.clone().add(nn)); d.updateMatrix(); pores.setMatrixAt(pi, d.matrix); }
      cellRoot.add(pores); pickable.push(pores);
    })();

    // ER network: perinuclear sheets + branching peripheral tubules (looks like ER)
    var erMat = new THREE.MeshPhysicalMaterial({ color: 0x8fd4e6, roughness: 0.34, metalness: 0, transmission: 0.35, thickness: 0.3, emissive: new THREE.Color(0x22d3ee), emissiveIntensity: 0.14, sheen: 0.4, sheenColor: new THREE.Color(0x7dd3fc), clearcoat: 0.3, envMapIntensity: 0.7, transparent: true, opacity: 0.96, side: THREE.DoubleSide });
    var erLabelAnchor = V(0.7, 0.55, 0.6);
    (function () {
      var tubes = [], nodes = [], count = lowPower ? 34 : 50;
      for (var i = 0; i < count; i++) { var u = rand(), v = rand(), th = u * Math.PI * 2, ph = Math.acos(2 * v - 1), rr = NUC_R + 0.14 + rand() * 0.42; var n = V(Math.sin(ph) * Math.cos(th), Math.cos(ph) * 0.8, Math.sin(ph) * Math.sin(th)).multiplyScalar(rr); n.y *= 0.9; nodes.push(n); }
      for (var a = 0; a < nodes.length; a++) { var dists = []; for (var b = 0; b < nodes.length; b++) if (b !== a) dists.push([b, nodes[a].distanceTo(nodes[b])]); dists.sort(function (p, q) { return p[1] - q[1]; }); for (var kk = 0; kk < 2; kk++) { var j = dists[kk][0]; if (j < a) continue; var mid = nodes[a].clone().lerp(nodes[j], 0.5); mid.multiplyScalar(1 + 0.08 + rand() * 0.06); tubes.push(tube([nodes[a], mid, nodes[j]], 0.016 + rand() * 0.01, 22)); } }
      var net = new THREE.Mesh(mergeGeometries(tubes), erMat); net.castShadow = true; addCell(net);
      for (var s = 0; s < 2; s++) { var sg = new THREE.SphereGeometry(NUC_R + 0.1 + s * 0.08, 48, 32, 0, Math.PI * 2, Math.PI * (0.18 + s * 0.08), Math.PI * 0.5); var sp = sg.attributes.position; for (var m2 = 0; m2 < sp.count; m2++) { var px = sp.getX(m2), py = sp.getY(m2), pz = sp.getZ(m2); var bump = 1 + 0.03 * (fbm(px * 5, py * 5, pz * 5, 2) - 0.5); sp.setXYZ(m2, px * bump, py * bump, pz * bump); } sg.computeVertexNormals(); var sheet = new THREE.Mesh(sg, erMat.clone()); sheet.material.opacity = 0.5; sheet.rotation.y = s * 1.3; addCell(sheet); }
    })();

    // mitochondria
    var dummy = new THREE.Object3D();
    var mitoAnchor = V(0.95, 0.75, -0.4);
    (function () {
      var c = lowPower ? 22 : 36;
      var inst = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.03, 0.12, 6, 12), new THREE.MeshPhysicalMaterial({ color: 0xe2866a, roughness: 0.42, clearcoat: 0.6, sheen: 0.4, sheenColor: new THREE.Color(0xffc2a8) }), c);
      for (var i = 0; i < c; i++) { var th = rand() * Math.PI * 2, ph = Math.acos(2 * rand() - 1), rr = NUC_R + 0.25 + rand() * 0.55; var p = V(Math.sin(ph) * Math.cos(th), Math.cos(ph) * 0.75, Math.sin(ph) * Math.sin(th)).multiplyScalar(rr); dummy.position.copy(p); dummy.quaternion.setFromUnitVectors(V(0, 1, 0), V(rand() - 0.5, rand() - 0.5, rand() - 0.5).normalize()); dummy.scale.set(1, 0.7 + rand() * 0.9, 1); dummy.updateMatrix(); inst.setMatrixAt(i, dummy.matrix); }
      inst.castShadow = true; cellRoot.add(inst); pickable.push(inst);
    })();

    // Golgi
    (function () { var mat = new THREE.MeshPhysicalMaterial({ color: 0xe8a2c8, roughness: 0.35, clearcoat: 0.8, sheen: 0.5, sheenColor: new THREE.Color(0xfbcfe8) }); for (var i = 0; i < 4; i++) { var t = new THREE.Mesh(new THREE.TorusGeometry(0.2 - i * 0.02, 0.016, 8, 32, 2.0), mat); t.scale.set(1, 1, 0.5); t.rotation.set(Math.PI / 2, 0, 0.6); t.position.set(0.5 + i * 0.04, -0.25, 0.55); t.castShadow = true; addCell(t); } })();

    // the three UPR sensors, embedded in the ER membrane (IRE1a / PERK / ATF6)
    function sensor(color, dir) {
      var g = new THREE.Group();
      var base = dir.clone().multiplyScalar(NUC_R + 0.4); g.position.copy(base);
      g.quaternion.setFromUnitVectors(V(0, 1, 0), dir.clone().normalize());
      var mat = new THREE.MeshPhysicalMaterial({ color: color, roughness: 0.3, metalness: 0.05, clearcoat: 0.7, emissive: new THREE.Color(color), emissiveIntensity: 0.55, sheen: 0.5 });
      var tm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.26, 16), mat); tm.castShadow = true;
      var lum = new THREE.Mesh(new THREE.IcosahedronGeometry(0.085, 1), mat); lum.position.y = -0.2;
      var cyto = new THREE.Mesh(new THREE.DodecahedronGeometry(0.07), mat); cyto.position.y = 0.2;
      g.add(tm, lum, cyto); cellRoot.add(g); g.traverse(function (o) { if (o.isMesh) pickable.push(o); });
      return base.clone();
    }
    var ireDir = V(0.55, 0.45, 0.7).normalize();
    var perkDir = V(-0.75, 0.15, 0.55).normalize();
    var atf6Dir = V(0.1, 0.35, -0.9).normalize();
    var ireAnchor = sensor(0xf87171, ireDir);
    var perkAnchor = sensor(0xa5b4fc, perkDir);
    var atf6Anchor = sensor(0x86efac, atf6Dir);

    // misfolded proteins inside the ER (the proteotoxic stress), subtle
    (function () {
      var c = lowPower ? 16 : 26;
      var inst = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xb45309, emissiveIntensity: 0.4, roughness: 0.6, flatShading: true }), c);
      for (var i = 0; i < c; i++) { var th = rand() * Math.PI * 2, ph = Math.acos(2 * rand() - 1), rr = NUC_R + 0.2 + rand() * 0.35; dummy.position.copy(V(Math.sin(ph) * Math.cos(th), Math.cos(ph) * 0.8, Math.sin(ph) * Math.sin(th)).multiplyScalar(rr)); dummy.quaternion.setFromAxisAngle(V(rand(), rand(), rand()).normalize(), rand() * 6); dummy.scale.setScalar(0.04 + rand() * 0.03); dummy.updateMatrix(); inst.setMatrixAt(i, dummy.matrix); }
      cellRoot.add(inst); pickable.push(inst);
    })();

    // toxicant particles entering the cell from outside
    var toxN = lowPower ? 22 : 34;
    var toxInst = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshPhysicalMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.2, emissive: 0x0f172a, emissiveIntensity: 0.4, flatShading: true }), toxN);
    cellRoot.add(toxInst); pickable.push(toxInst);
    var toxP = [], toxAnchor = V(1.7, 1.1, 0.7);
    for (var ti = 0; ti < toxN; ti++) { var dir = V(rand() * 2 - 1, (rand() - 0.5) * 1.1, rand() * 2 - 1).normalize(); toxP.push({ dir: dir, start: 1.9 + rand() * 0.9, end: NUC_R + 0.25 + rand() * 0.5, t: rand(), speed: 0.08 + rand() * 0.12, sz: 0.024 + rand() * 0.02, spin: V(rand(), rand(), rand()).normalize() }); }

    // ---------- name labels ----------
    var labelsEl = host.querySelector(".upr-fig-labels");
    function mkLabel(text, color) { var el = document.createElement("span"); el.className = "upr-fig-label"; el.textContent = text; if (color) el.style.setProperty("--lc", color); labelsEl.appendChild(el); return el; }
    var labels = [
      { el: mkLabel("Nucleus", "rgba(196,181,253,.7)"), at: nucTop.clone().add(V(0, 0.12, 0)) },
      { el: mkLabel("Endoplasmic reticulum", "rgba(125,211,252,.7)"), at: erLabelAnchor },
      { el: mkLabel("Mitochondria", "rgba(226,134,106,.7)"), at: mitoAnchor },
      { el: mkLabel("Toxicant", "rgba(203,213,225,.7)"), at: toxAnchor },
      { el: mkLabel("IRE1α", "rgba(248,113,113,.8)"), at: ireAnchor.clone().multiplyScalar(1.08) },
      { el: mkLabel("PERK", "rgba(165,180,252,.8)"), at: perkAnchor.clone().multiplyScalar(1.08) },
      { el: mkLabel("ATF6", "rgba(134,239,172,.8)"), at: atf6Anchor.clone().multiplyScalar(1.08) }
    ];

    // ======================================================================
    // Controls: background-drag pans the cell (camera fixed); object-drag orbits 360.
    // ======================================================================
    var orbit = { yaw: -0.5, pitch: 0.42, radius: 5.0 };     // camera orbits origin
    var goal = { yaw: -0.5, pitch: 0.42, radius: 5.0 };
    var offset = new THREE.Vector3(0, 0, 0);                  // cell pan offset (world)
    var goalOffset = new THREE.Vector3(0, 0, 0);
    var canvas = renderer.domElement;
    var raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
    var drag = null;

    function hitsCell(e) {
      var r = canvas.getBoundingClientRect();
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      return raycaster.intersectObjects(pickable, false).length > 0;
    }
    canvas.addEventListener("pointerdown", function (e) {
      var mode = hitsCell(e) ? "orbit" : "pan";
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, mode: mode, yaw: goal.yaw, pitch: goal.pitch, ox: goalOffset.x, oy: goalOffset.y, oz: goalOffset.z, moved: 0 };
    });
    canvas.addEventListener("pointermove", function (e) {
      if (!drag || drag.id !== e.pointerId) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
      if (drag.moved <= 3) return;
      if (!drag.captured) { try { canvas.setPointerCapture(e.pointerId); } catch (err) {} drag.captured = true; stage.classList.add("is-dragging"); }
      if (drag.mode === "orbit") {
        goal.yaw = drag.yaw - dx * 0.007;                 // full 360, no clamp
        goal.pitch = Math.max(-1.3, Math.min(1.3, drag.pitch + dy * 0.006));
      } else {
        // pan: translate the cell in the camera's screen plane so it follows the mouse
        var wpp = (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * orbit.radius) / Math.max(1, canvas.clientHeight);
        var right = V(1, 0, 0).applyQuaternion(camera.quaternion);
        var up = V(0, 1, 0).applyQuaternion(camera.quaternion);
        goalOffset.set(drag.ox, drag.oy, drag.oz).addScaledVector(right, dx * wpp).addScaledVector(up, -dy * wpp);
      }
      kick();
    });
    function endDrag(e) { if (drag && drag.id === e.pointerId) { drag = null; stage.classList.remove("is-dragging"); } }
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("wheel", function (e) { e.preventDefault(); goal.radius = Math.max(2.4, Math.min(9, goal.radius * Math.exp(e.deltaY * 0.0012))); kick(); }, { passive: false });
    canvas.addEventListener("dblclick", reset);
    host.querySelector('[data-z="in"]').addEventListener("click", function () { goal.radius = Math.max(2.4, goal.radius / 1.2); kick(); });
    host.querySelector('[data-z="out"]').addEventListener("click", function () { goal.radius = Math.min(9, goal.radius * 1.2); kick(); });
    host.querySelector('[data-act="reset"]').addEventListener("click", reset);
    function reset() { goal.yaw = -0.5; goal.pitch = 0.42; goal.radius = 5.0; goalOffset.set(0, 0, 0); kick(); }

    var width = 0, height = 0;
    function resize() { var w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return; width = w; height = h; renderer.setSize(w, h, false); camera.aspect = w / h; stage.classList.toggle("is-narrow", w < 520); camera.updateProjectionMatrix(); kick(); }

    var projected = V(0, 0, 0);
    function placeLabels() {
      cellRoot.updateMatrixWorld();
      labels.forEach(function (d) {
        projected.copy(d.at).applyMatrix4(cellRoot.matrixWorld).project(camera);
        if (projected.z > 1) { d.el.hidden = true; return; }
        d.el.hidden = false;
        var x = (projected.x * 0.5 + 0.5) * width, y = (-projected.y * 0.5 + 0.5) * height;
        var half = (d.el.offsetWidth || 0) / 2;
        x = Math.max(half + 6, Math.min(width - half - 6, x)); y = Math.max(14, Math.min(height - 8, y));
        d.el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) translate(-50%,-120%)";
      });
    }

    var visible = false, raf = 0, lastT = 0;
    var clock = new THREE.Clock();
    function frame() {
      raf = 0;
      if (!visible || document.hidden || !width) return;
      var still = reduceMotion.matches;
      var dt = Math.min(0.1, clock.getDelta());
      var t = still ? lastT : clock.elapsedTime; lastT = t;
      var k = still ? 1 : 1 - Math.exp(-dt * 6);
      orbit.yaw += (goal.yaw - orbit.yaw) * k; orbit.pitch += (goal.pitch - orbit.pitch) * k; orbit.radius += (goal.radius - orbit.radius) * k;
      offset.lerp(goalOffset, k); cellRoot.position.copy(offset);

      // toxicant animation
      for (var i = 0; i < toxN; i++) { var q = toxP[i]; if (!still) q.t = (q.t + dt * q.speed) % 1; var r = q.start + (q.end - q.start) * q.t; var pos = q.dir.clone().multiplyScalar(r); dummy.position.copy(pos); dummy.quaternion.setFromAxisAngle(q.spin, t * 1.2 + i); dummy.scale.setScalar(q.sz); dummy.updateMatrix(); toxInst.setMatrixAt(i, dummy.matrix); }
      toxInst.instanceMatrix.needsUpdate = true;

      camera.position.set(
        orbit.radius * Math.sin(orbit.yaw) * Math.cos(orbit.pitch),
        orbit.radius * Math.sin(orbit.pitch),
        orbit.radius * Math.cos(orbit.yaw) * Math.cos(orbit.pitch)
      );
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      placeLabels();
      var settling = Math.abs(goal.yaw - orbit.yaw) + Math.abs(goal.pitch - orbit.pitch) + Math.abs(goal.radius - orbit.radius) + offset.distanceTo(goalOffset) > 0.001;
      if (!still || settling) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }

    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible) { clock.getDelta(); kick(); } }, { rootMargin: "150px" }).observe(stage);
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(stage);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", kick);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", kick);

    resize(); stage.classList.add("is-ready");
    return {};
  }
})();
