/*
 * Homepage 3D accent: a small, decorative adherent cell drawn with Three.js.
 * Isolated enhancement. Remove the include line in _pages/about.md to roll back.
 * The page renders normally if this script, WebGL or Three.js is unavailable.
 */
(function () {
  "use strict";

  var script = document.currentScript;
  var THREE_URL = (script && script.getAttribute("data-three")) || "/assets/js/lib/three-r170.module.min.js";

  var card = document.querySelector(".home .home-intro");
  if (!card || !window.matchMedia || !("IntersectionObserver" in window)) return;

  var desktop = window.matchMedia("(min-width: 1100px) and (hover: hover) and (pointer: fine)");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var started = false;

  function webglAvailable() {
    try {
      var c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
    } catch (e) {
      return false;
    }
  }

  function maybeStart() {
    if (started || !desktop.matches || !webglAvailable()) return;
    started = true;
    import(THREE_URL).then(build).catch(function () {
      var host = card.querySelector(".depth3d-cell");
      if (host) host.remove();
    });
  }

  if (desktop.addEventListener) desktop.addEventListener("change", maybeStart);
  maybeStart();

  function build(THREE) {
    var host = document.createElement("div");
    host.className = "depth3d-cell";
    host.setAttribute("aria-hidden", "true");
    card.classList.add("depth3d-host");
    card.appendChild(host);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    camera.position.set(0, 1.9, 3.95);
    camera.lookAt(0, -0.02, 0);

    scene.add(new THREE.AmbientLight(0xbfd4ff, 0.55));
    var key = new THREE.DirectionalLight(0xe0ecff, 1.6);
    key.position.set(2.2, 3.4, 2.4);
    scene.add(key);
    var rim = new THREE.PointLight(0x60a5fa, 7, 12, 1.6);
    rim.position.set(-2.4, 1.2, -2.2);
    scene.add(rim);

    var cell = new THREE.Group();
    scene.add(cell);

    // ---------- Membrane: translucent, lobed and flattened like an adherent cell ----------
    function fresnelMaterial(inner, rimColor, base, rimAlpha, side) {
      return new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: side,
        uniforms: {
          uInner: { value: new THREE.Color(inner) },
          uRim: { value: new THREE.Color(rimColor) },
          uBase: { value: base },
          uRimAlpha: { value: rimAlpha }
        },
        vertexShader:
          "varying vec3 vN; varying vec3 vV;" +
          "void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);" +
          "vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);" +
          "gl_Position = projectionMatrix * mv; }",
        fragmentShader:
          "uniform vec3 uInner; uniform vec3 uRim; uniform float uBase; uniform float uRimAlpha;" +
          "varying vec3 vN; varying vec3 vV;" +
          "void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.4);" +
          "gl_FragColor = vec4(mix(uInner, uRim, f), uBase + f * uRimAlpha); }"
      });
    }

    var membraneGeo = new THREE.SphereGeometry(1, 96, 64);
    var pos = membraneGeo.attributes.position;
    var v = new THREE.Vector3();
    for (var i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).normalize();
      var lobes = 0.07 * Math.sin(v.x * 3.1 + 1.2) * Math.cos(v.z * 2.7) + 0.05 * Math.sin(v.z * 4.3 + v.x * 1.7);
      var r = 1 + lobes;
      var y = v.y < 0 ? v.y * 0.55 : v.y;
      pos.setXYZ(i, v.x * r * 1.32, y * r * 0.6, v.z * r * 1.05);
    }
    membraneGeo.computeVertexNormals();
    cell.add(new THREE.Mesh(membraneGeo, fresnelMaterial(0x0f1b33, 0x3b82f6, 0.06, 0.26, THREE.BackSide)));
    cell.add(new THREE.Mesh(membraneGeo, fresnelMaterial(0x1a2b4d, 0xbfdbfe, 0.04, 0.6, THREE.FrontSide)));

    // ---------- Nucleus ----------
    var nucleusCenter = new THREE.Vector3(0.06, 0.04, -0.02);
    var nucleusGeo = new THREE.SphereGeometry(1, 64, 40);
    var np = nucleusGeo.attributes.position;
    for (var j = 0; j < np.count; j++) {
      v.fromBufferAttribute(np, j).normalize();
      var nr = 1 + 0.035 * Math.sin(v.x * 5.0 + v.z * 3.0);
      np.setXYZ(j, v.x * nr * 0.44, v.y * nr * 0.27, v.z * nr * 0.34);
    }
    nucleusGeo.computeVertexNormals();
    var nucleus = new THREE.Mesh(
      nucleusGeo,
      new THREE.MeshStandardMaterial({ color: 0x6366c9, emissive: 0x1e1b4b, emissiveIntensity: 0.7, roughness: 0.55, metalness: 0.0, transparent: true, opacity: 0.82 })
    );
    nucleus.position.copy(nucleusCenter);
    cell.add(nucleus);
    var nucleusRim = new THREE.Mesh(nucleusGeo, fresnelMaterial(0x1e1b4b, 0xc4b5fd, 0.0, 0.65, THREE.FrontSide));
    nucleusRim.position.copy(nucleusCenter);
    nucleusRim.scale.setScalar(1.035);
    cell.add(nucleusRim);

    // ---------- Actin: basal stress fibers and a perinuclear cap, ending in focal adhesions ----------
    var fiberMat = new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
    var capMat = new THREE.MeshBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false });
    var adhesionMat = new THREE.MeshStandardMaterial({ color: 0xfcd34d, emissive: 0x92400e, emissiveIntensity: 0.35, roughness: 0.6, transparent: true, opacity: 0.85 });
    var adhesionGeo = new THREE.SphereGeometry(1, 16, 10);
    var signalRoutes = [];

    function addAdhesion(p, toward) {
      var m = new THREE.Mesh(adhesionGeo, adhesionMat);
      m.position.copy(p);
      m.scale.set(0.055, 0.012, 0.024);
      m.rotation.y = -Math.atan2(toward.z - p.z, toward.x - p.x);
      cell.add(m);
    }

    // Ventral stress fibers run roughly parallel to the long axis, as in a polarized adherent cell.
    var rows = [-0.62, -0.4, -0.16, 0.1, 0.34, 0.58];
    rows.forEach(function (z, k) {
      var span = 1.2 * Math.sqrt(Math.max(0.05, 1 - Math.pow(z / 0.95, 2))) * 0.78;
      var skew = 0.09 * Math.sin(k * 1.7);
      var a = new THREE.Vector3(-span, -0.21, z - skew);
      var b = new THREE.Vector3(span, -0.21, z + skew);
      var mid = new THREE.Vector3(0, -0.24, z + 0.04 * Math.cos(k));
      var curve = new THREE.CatmullRomCurve3([a, mid, b]);
      cell.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.0055, 5, false), fiberMat));
      addAdhesion(a, b);
      addAdhesion(b, a);
    });

    // A perinuclear actin cap arches over the nucleus between peripheral adhesions.
    var top = nucleusCenter.clone().add(new THREE.Vector3(0, 0.3, 0));
    var dock = nucleusCenter.clone().add(new THREE.Vector3(0, 0.12, 0));
    [-0.22, 0.0, 0.2].forEach(function (z) {
      var span = 1.2 * Math.sqrt(1 - Math.pow(z / 0.95, 2)) * 0.8;
      var a = new THREE.Vector3(-span, -0.17, z * 1.4);
      var b = new THREE.Vector3(span, -0.17, z * 1.2);
      var capTop = top.clone().setZ(top.z + z * 0.6);
      var la = new THREE.Vector3(-span * 0.5, 0.17, z * 1.1);
      var lb = new THREE.Vector3(span * 0.5, 0.17, z * 0.9);
      cell.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([a, la, capTop, lb, b]), 64, 0.005, 5, false), capMat));
      addAdhesion(a, b);
      addAdhesion(b, a);
      // A restrained cue: signals travel from adhesions toward the nucleus.
      signalRoutes.push(new THREE.CatmullRomCurve3([a, la, dock]));
      signalRoutes.push(new THREE.CatmullRomCurve3([b, lb, dock]));
    });

    // ---------- Signal particles ----------
    var PARTICLES = 14;
    var pGeo = new THREE.BufferGeometry();
    var pPos = new Float32Array(PARTICLES * 3);
    var pAlpha = new Float32Array(PARTICLES);
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("alpha", new THREE.BufferAttribute(pAlpha, 1));
    var pMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uColor: { value: new THREE.Color(0x67e8f9) }, uSize: { value: 26.0 * renderer.getPixelRatio() } },
      vertexShader:
        "attribute float alpha; varying float vA; uniform float uSize;" +
        "void main(){ vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0);" +
        "gl_PointSize = uSize / -mv.z; gl_Position = projectionMatrix * mv; }",
      fragmentShader:
        "uniform vec3 uColor; varying float vA;" +
        "void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d);" +
        "gl_FragColor = vec4(uColor, a * a * vA); }"
    });
    cell.add(new THREE.Points(pGeo, pMat));
    var seeds = [];
    for (var s = 0; s < PARTICLES; s++) seeds.push({ route: s % signalRoutes.length, phase: s / PARTICLES + (s % 3) * 0.17 });

    function updateParticles(t) {
      var tmp = new THREE.Vector3();
      for (var q = 0; q < PARTICLES; q++) {
        var u = (t * 0.045 + seeds[q].phase) % 1;
        signalRoutes[seeds[q].route].getPointAt(u, tmp);
        pPos[q * 3] = tmp.x;
        pPos[q * 3 + 1] = tmp.y;
        pPos[q * 3 + 2] = tmp.z;
        pAlpha[q] = Math.min(1, u * 6) * Math.min(1, (1 - u) * 5) * 0.85;
      }
      pGeo.attributes.position.needsUpdate = true;
      pGeo.attributes.alpha.needsUpdate = true;
    }

    // ---------- Layout: use only the free strip to the right of the intro text ----------
    var label = card.querySelector(".home-label");
    var heading = card.querySelector("h2");
    var para = card.querySelector("p");
    var chips = card.querySelector(".focus-list");

    function textRight(el) {
      if (!el) return 0;
      var range = document.createRange();
      range.selectNodeContents(el);
      var right = 0;
      Array.prototype.forEach.call(range.getClientRects(), function (rect) { right = Math.max(right, rect.right); });
      return right;
    }

    var visible = false;
    var sized = false;

    function layout() {
      var c = card.getBoundingClientRect();
      var right = Math.max(textRight(label), textRight(heading), textRight(para));
      var bottom = chips ? chips.getBoundingClientRect().top : c.bottom;
      var w = Math.min(330, c.right - 22 - (right + 32));
      var h = Math.min(250, bottom - c.top - 26);
      if (!desktop.matches || w < 170 || h < 140) {
        host.hidden = true;
        sized = false;
        return;
      }
      host.hidden = false;
      w = Math.round(w);
      h = Math.round(h);
      host.style.width = w + "px";
      host.style.height = h + "px";
      host.style.top = Math.round(14 + (bottom - c.top - 20 - h) / 2) + "px";
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      sized = true;
      if (reduceMotion.matches) renderFrame(0);
    }

    // ---------- Motion: slow drift, pointer perspective and scroll depth ----------
    var pointer = { x: 0, y: 0 };
    var current = { yaw: 0, pitch: 0, lift: 0 };
    window.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      var c = host.getBoundingClientRect();
      pointer.x = Math.max(-1, Math.min(1, (e.clientX - (c.left + c.width / 2)) / 700));
      pointer.y = Math.max(-1, Math.min(1, (e.clientY - (c.top + c.height / 2)) / 500));
    }, { passive: true });

    function renderFrame(t, dt) {
      dt = dt || 0;
      var still = reduceMotion.matches;
      var c = card.getBoundingClientRect();
      var scroll = Math.max(-1, Math.min(1, (c.top + c.height / 2 - window.innerHeight / 2) / window.innerHeight));
      var targetYaw = -0.55 + (still ? 0 : 0.2 * Math.sin(t * 0.21) + pointer.x * 0.2);
      var targetPitch = (still ? 0 : pointer.y * 0.08) + scroll * 0.12;
      var targetLift = scroll * -0.05;
      var k = still ? 1 : 1 - Math.exp(-dt * 3);
      current.yaw += (targetYaw - current.yaw) * k;
      current.pitch += (targetPitch - current.pitch) * k;
      current.lift += (targetLift - current.lift) * k;
      cell.rotation.set(current.pitch, current.yaw, 0);
      cell.position.y = current.lift;
      updateParticles(still ? 0.35 : t);
      renderer.render(scene, camera);
    }

    var raf = 0;
    var clock = new THREE.Clock();
    function loop() {
      raf = 0;
      if (!visible || !sized || document.hidden) return;
      var dt = Math.min(0.1, clock.getDelta());
      renderFrame(clock.elapsedTime, dt);
      if (!reduceMotion.matches) raf = requestAnimationFrame(loop);
    }
    function kick() {
      if (!raf) raf = requestAnimationFrame(loop);
    }

    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) kick();
    }, { rootMargin: "80px" }).observe(card);

    if ("ResizeObserver" in window) new ResizeObserver(function () { layout(); kick(); }).observe(card);
    window.addEventListener("resize", function () { layout(); kick(); });
    document.addEventListener("visibilitychange", kick);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", kick);
    if (desktop.addEventListener) desktop.addEventListener("change", function () { layout(); kick(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { layout(); kick(); });

    layout();
    current.yaw = -0.55;
    renderFrame(0);
    requestAnimationFrame(function () { host.classList.add("is-ready"); });
    kick();
  }
})();
