/*
 * Figure 1 of the UPR review, rebuilt as an interactive 3D diagram for the homepage
 * highlighted study. Faithful to the published schematic: conventional vs proposed
 * model, six toxicant classes on the left feeding a 3D endoplasmic reticulum whose
 * proteostasis-disturbance boxes sit inside it, the IRE1a / PERK / ATF6 branches with
 * their outputs on the right, and the immune-outcome boxes, all joined by solid and
 * dashed 3D arrows. Drag to rotate, scroll or use the buttons to zoom, including into
 * the ER to read the boxes inside. Conceptual illustration, not measured data.
 * Replaces the 6-stage home schematic. Remove the script line in depth3d/home.liquid to roll back.
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

  // ---------------- Figure data (world units: +x right, +y up) ----------------
  // Colors follow the published figure's palette.
  var C = {
    gray: "#94a3b8", teal: "#2dd4bf", gold: "#d4b53b", grn: "#6ee7b7", red: "#f87171",
    blue: "#60a5fa", purple: "#a78bfa", erbox: "#7dd3fc", eremph: "#93c5fd",
    ire: "#f87171", perk: "#a5b4fc", atf6: "#86efac", xbp1: "#c084fc", ridd: "#2dd4bf",
    inflam: "#ef4444", eif2: "#86efac", peif2: "#60a5fa", atf4: "#fb923c", chop: "#ec4899",
    natf6: "#d6b06a", outcome: "#c7d2fe", golgi: "#93c5fd"
  };

  // node: id -> {x,y,w,h,z,title,lines,color,emph}
  var N = {};
  function node(id, x, y, w, h, title, color, opt) {
    opt = opt || {};
    N[id] = { id: id, x: x, y: y, z: opt.z || 0, w: w, h: h, title: title, lines: opt.lines || null, color: color, emph: !!opt.emph, small: !!opt.small };
  }

  // Top: conventional vs proposed model
  node("conv_a", -8.2, 6.2, 2.7, 0.8, "Environmental toxicant", C.gray);
  node("conv_b", -1.3, 6.2, 4.4, 0.8, "Oxidative stress / receptor signaling / cytotoxicity", C.gray);
  node("conv_c", 6.6, 6.2, 3.6, 0.8, "Inflammation or immune dysfunction", C.gray);
  node("prop_a", -8.2, 4.9, 2.7, 0.8, "Environmental toxicant", C.teal);
  node("prop_b", -3.1, 4.9, 3.0, 0.8, "ER proteostasis disturbance", C.perk);
  node("prop_c", 2.2, 4.9, 3.4, 0.8, "UPR branch signaling and resolution", C.xbp1);
  node("prop_d", 7.1, 4.9, 3.0, 0.8, "Altered immune function", C.atf6);

  // Left: six toxicant classes
  node("t_pm", -8.7, 2.5, 3.1, 1.25, "PM2.5 / particulate matter", C.teal, { lines: ["oxidative stress", "lipid peroxidation", "inflammatory co-signaling"] });
  node("t_met", -8.7, 1.0, 3.1, 1.25, "Metals and metalloids", C.gold, { lines: ["redox disruption", "Ca²⁺ imbalance", "ER-mitochondria stress"] });
  node("t_edc", -8.7, -0.5, 3.1, 1.25, "Endocrine-disrupting compounds", C.grn, { lines: ["estrogen receptor α-linked ER stress", "altered signaling"] });
  node("t_pop", -8.7, -2.0, 3.1, 1.15, "Persistent organic pollutants", C.red, { lines: ["direct UPR branch engagement", "at human-relevant concentrations"] });
  node("t_mnp", -8.7, -3.4, 3.1, 1.25, "Microplastics, nanoplastics", C.blue, { lines: ["barrier stress", "chemical-vector effects", "inflammation"] });
  node("t_myc", -8.7, -4.9, 3.1, 1.25, "Mycotoxins / food contaminants", C.purple, { lines: ["ER stress", "cytokine disruption", "immune-cell imbalance"] });

  // ER cluster (inside the 3D ER): disturbance boxes with small z offsets
  node("d_mis", -2.7, 1.9, 1.9, 0.7, "Protein misfolding", C.erbox, { z: 0.35, small: true });
  node("d_ca", -4.5, 0.6, 1.9, 0.7, "ER Ca²⁺ depletion", C.erbox, { z: -0.2, small: true });
  node("d_redox", -0.9, 0.6, 1.8, 0.7, "Redox imbalance", C.erbox, { z: 0.45, small: true });
  node("d_lipid", -4.6, -0.8, 1.9, 0.7, "Lipid bilayer stress", C.erbox, { z: -0.35, small: true });
  node("d_sec", -0.8, -0.8, 1.9, 0.7, "Secretory overload", C.erbox, { z: 0.25, small: true });
  node("d_deg", -4.6, -2.2, 2.0, 0.8, "Impaired degradation capacity", C.erbox, { z: -0.15, small: true });
  node("d_ermito", -0.7, -2.2, 2.0, 0.8, "ER-mitochondria disruption", C.erbox, { z: 0.35, small: true });
  node("d_gen", -2.7, -3.1, 2.0, 0.8, "General ER stress", C.eremph, { z: 0.0, small: true, emph: true });

  // Right: membrane sensors
  node("ire1", 1.7, 2.3, 1.5, 0.7, "IRE1α", C.ire, { emph: true });
  node("perk", 1.7, -0.5, 1.5, 0.7, "PERK", C.perk, { emph: true });
  node("atf6", 1.7, -3.1, 1.5, 0.7, "ATF6", C.atf6, { emph: true });

  // IRE1a outputs
  node("xbp1_mrna", 3.3, 3.0, 1.9, 0.6, "XBP1 mRNA splicing", C.xbp1, { small: true });
  node("xbp1s", 5.1, 3.0, 1.4, 0.6, "XBP1s", C.xbp1, { emph: true });
  node("ridd", 3.4, 2.2, 1.5, 0.6, "RIDD", C.ridd, { small: true });
  node("inflam", 3.5, 1.4, 1.9, 0.6, "Inflammatory signaling", C.inflam, { small: true });
  // PERK outputs
  node("eif2", 3.3, -0.5, 1.4, 0.6, "eIF2α", C.eif2, { small: true });
  node("peif2", 5.0, -0.5, 1.5, 0.6, "p-eIF2α", C.peif2, { emph: true });
  node("transl", 3.2, -1.3, 1.5, 0.55, "Translation", C.gray, { small: true });
  node("atf4", 5.0, -1.4, 1.3, 0.6, "ATF4", C.atf4, { emph: true });
  node("chop", 5.0, -2.3, 1.3, 0.6, "CHOP", C.chop, { emph: true });
  // ATF6 outputs
  node("atf6_box", 3.3, -3.1, 1.3, 0.6, "ATF6", C.atf6, { small: true });
  node("golgi", 4.7, -2.8, 1.2, 0.55, "Golgi", C.golgi, { small: true });
  node("natf6", 5.1, -3.7, 1.4, 0.6, "N-ATF6", C.natf6, { emph: true });
  node("nucleus", 3.3, -4.0, 1.3, 0.6, "Nucleus", C.golgi, { small: true });
  node("restore", 4.6, -4.8, 3.3, 0.8, "ATF6 restoration outputs", C.atf6, { lines: ["Chaperones · ERAD · Folding-capacity restoration"], small: true });

  // Far right: immune outcomes
  node("o_cyto", 8.9, 3.0, 3.0, 0.75, "Altered cytokine production", C.outcome);
  node("o_antigen", 8.9, 2.0, 3.0, 0.75, "Impaired antigen presentation", C.outcome);
  node("o_macro", 8.9, 1.0, 3.0, 0.75, "Macrophage polarization", C.outcome);
  node("o_tcell", 8.9, 0.0, 3.0, 0.75, "T-cell dysfunction", C.outcome);
  node("o_apop", 8.9, -1.0, 3.0, 0.75, "Apoptosis", C.outcome);
  node("o_antibody", 8.9, -2.0, 3.0, 0.75, "Impaired antibody secretion", C.outcome);
  node("o_barrier", 8.9, -3.0, 3.0, 0.75, "Epithelial barrier inflammation", C.outcome);

  // arrows: {from,to,color,dashed,bow,inhibit}
  var A = [
    // top rows
    { f: "conv_a", t: "conv_b", c: C.gray }, { f: "conv_b", t: "conv_c", c: C.gray },
    { f: "prop_a", t: "prop_b", c: C.teal }, { f: "prop_b", t: "prop_c", c: C.perk }, { f: "prop_c", t: "prop_d", c: C.atf6 },
    // toxicants -> General ER stress (bowed)
    { f: "t_pm", t: "d_gen", c: C.teal, bow: 1.4 },
    { f: "t_met", t: "d_gen", c: C.gold, bow: 0.9 },
    { f: "t_edc", t: "d_gen", c: C.grn, bow: 0.4 },
    { f: "t_pop", t: "d_gen", c: C.red, bow: -0.3 },
    { f: "t_mnp", t: "d_gen", c: C.blue, bow: -0.8, dashed: true },
    { f: "t_myc", t: "d_gen", c: C.purple, bow: -1.3 },
    // inside ER -> General ER stress
    { f: "d_mis", t: "d_gen", c: C.erbox, thin: true }, { f: "d_ca", t: "d_gen", c: C.erbox, thin: true },
    { f: "d_redox", t: "d_gen", c: C.erbox, thin: true }, { f: "d_lipid", t: "d_gen", c: C.erbox, thin: true },
    { f: "d_sec", t: "d_gen", c: C.erbox, thin: true }, { f: "d_deg", t: "d_gen", c: C.erbox, thin: true },
    { f: "d_ermito", t: "d_gen", c: C.erbox, thin: true },
    { f: "d_ca", t: "d_mis", c: C.erbox, thin: true }, { f: "d_redox", t: "d_mis", c: C.erbox, thin: true },
    // ER stress engages the branches
    { f: "d_gen", t: "ire1", c: C.eremph, bow: 1.1, dashed: true },
    { f: "d_gen", t: "perk", c: C.eremph, bow: 0.1, dashed: true },
    { f: "d_gen", t: "atf6", c: C.eremph, bow: -0.9, dashed: true },
    // IRE1a branch
    { f: "ire1", t: "xbp1_mrna", c: C.xbp1 }, { f: "xbp1_mrna", t: "xbp1s", c: C.xbp1 },
    { f: "ire1", t: "ridd", c: C.ridd }, { f: "ire1", t: "inflam", c: C.inflam },
    // PERK branch
    { f: "perk", t: "eif2", c: C.eif2 }, { f: "eif2", t: "peif2", c: C.peif2 },
    { f: "peif2", t: "transl", c: C.peif2, inhibit: true }, { f: "peif2", t: "atf4", c: C.atf4 },
    { f: "atf4", t: "chop", c: C.chop },
    // ATF6 branch
    { f: "atf6", t: "atf6_box", c: C.atf6 }, { f: "atf6_box", t: "golgi", c: C.golgi },
    { f: "golgi", t: "natf6", c: C.natf6 }, { f: "natf6", t: "nucleus", c: C.natf6 },
    { f: "natf6", t: "restore", c: C.atf6 },
    // outputs -> immune outcomes
    { f: "xbp1s", t: "o_cyto", c: C.xbp1 }, { f: "xbp1s", t: "o_antibody", c: C.xbp1, dashed: true },
    { f: "ridd", t: "o_antigen", c: C.ridd }, { f: "ridd", t: "o_antigen", c: C.ridd, dashed: true },
    { f: "inflam", t: "o_cyto", c: C.inflam }, { f: "inflam", t: "o_barrier", c: C.inflam, dashed: true },
    { f: "peif2", t: "o_tcell", c: C.peif2 },
    { f: "atf4", t: "o_macro", c: C.atf4 },
    { f: "chop", t: "o_apop", c: C.chop }, { f: "chop", t: "o_antibody", c: C.natf6, dashed: true },
    { f: "natf6", t: "o_barrier", c: C.natf6, dashed: true }
  ];

  // Focus presets (target + radius factor)
  var FOCUS = {
    all: { x: -0.4, y: 0.3, r: 1.0 },
    er: { x: -2.7, y: -0.6, r: 0.42 },
    branches: { x: 3.4, y: -0.6, r: 0.5 },
    outcomes: { x: 7.2, y: 0.0, r: 0.6 }
  };

  // ---------------- UI shell ----------------
  var host = document.createElement("div");
  host.className = "upr-fig-inner";
  host.innerHTML =
    '<span class="upr-fig-tag">Conceptual 3D figure · drag to rotate, scroll to zoom</span>' +
    '<div class="upr-fig-tools">' +
      '<button type="button" data-foc="all" class="is-active">Whole figure</button>' +
      '<button type="button" data-foc="er">Zoom to ER</button>' +
      '<button type="button" data-foc="branches">Branches</button>' +
      '<button type="button" data-foc="outcomes">Outcomes</button>' +
      '<span class="upr-fig-zoom"><button type="button" data-z="out" aria-label="Zoom out">−</button><button type="button" data-z="in" aria-label="Zoom in">+</button></span>' +
    '</div>' +
    '<p class="upr-fig-status" aria-live="polite">Loading 3D figure…</p>';
  stage.appendChild(host);

  var api = null, loading = false;
  function load() {
    if (api || loading) return;
    loading = true;
    import(THREE_URL).then(function (THREE) {
      api = build(THREE);
      var s = host.querySelector(".upr-fig-status"); if (s) s.remove();
    }).catch(function () { host.remove(); stage.classList.add("upr-fig-failed"); });
  }
  var watch = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { watch.disconnect(); load(); } }, { rootMargin: "500px" });
  watch.observe(stage);

  // ---------------- Build ----------------
  function build(THREE) {
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var lowPower = small.matches;

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "upr-fig-canvas";
    host.insertBefore(renderer.domElement, host.firstChild);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(32, 2, 0.05, 300);
    scene.add(new THREE.HemisphereLight(0xdbeafe, 0x0b1220, 1.0));
    var key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(4, 8, 10); scene.add(key);
    var fill = new THREE.PointLight(0x60a5fa, 40, 80, 1.6); fill.position.set(-8, 4, 6); scene.add(fill);

    // Lit grid backdrop (matching the other 3D views)
    (function () {
      function gridMaterial(normal, cell, strength) {
        return new THREE.ShaderMaterial({
          transparent: true, depthWrite: false,
          uniforms: { uLight: { value: key.position.clone() }, uNormal: { value: normal }, uCell: { value: cell }, uStrength: { value: strength }, uWhite: { value: new THREE.Color(0xf8fafc) }, uGray: { value: new THREE.Color(0x64748b) } },
          vertexShader: "varying vec3 vW; varying vec2 vP; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; vP=position.xy; gl_Position=projectionMatrix*viewMatrix*w; }",
          fragmentShader:
            "uniform vec3 uLight;uniform vec3 uNormal;uniform float uCell;uniform float uStrength;uniform vec3 uWhite;uniform vec3 uGray;varying vec3 vW;varying vec2 vP;" +
            "float grid(vec2 p,float s){vec2 c=p/s;vec2 g=abs(fract(c-0.5)-0.5)/fwidth(c);return 1.0-min(min(g.x,g.y),1.0);}" +
            "void main(){float minor=grid(vP,uCell);float major=grid(vP,uCell*5.0);vec3 L=uLight-vW;float d=length(L);" +
            "float lambert=max(dot(normalize(uNormal),L/d),0.0);float pool=clamp(1.0-d/70.0,0.0,1.0);float shade=clamp(lambert*pool*2.0,0.0,1.0);" +
            "float edge=smoothstep(0.0,0.18,0.5-max(abs(vP.x)/90.0,abs(vP.y)/60.0));" +
            "float a=max(minor*0.55,major)*(0.16+0.84*shade)*edge*uStrength;gl_FragColor=vec4(mix(uGray,uWhite,shade),a);}"
        });
      }
      var floor = new THREE.Mesh(new THREE.PlaneGeometry(90, 60), gridMaterial(V(0, 1, 0), 1.5, 1));
      floor.rotation.x = -Math.PI / 2; floor.position.set(-0.4, -7.5, 0); floor.renderOrder = -2;
      var wall = new THREE.Mesh(new THREE.PlaneGeometry(90, 50), gridMaterial(V(0, 0, 1), 1.5, 0.5));
      wall.position.set(-0.4, 12, -9); wall.renderOrder = -2;
      scene.add(floor, wall);
    })();

    // ---------- Panel textures ----------
    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
    }
    function wrap(ctx, text, maxW) {
      var words = text.split(" "), lines = [], line = "";
      for (var i = 0; i < words.length; i++) {
        var test = line ? line + " " + words[i] : words[i];
        if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = words[i]; } else line = test;
      }
      if (line) lines.push(line);
      return lines;
    }
    function panelTexture(n) {
      var DPI = 150, pad = 14;
      var W = Math.round(n.w * DPI), H = Math.round(n.h * DPI);
      var c = document.createElement("canvas"); c.width = W; c.height = H;
      var g = c.getContext("2d");
      g.clearRect(0, 0, W, H);
      roundRect(g, 4, 4, W - 8, H - 8, 18);
      g.fillStyle = n.emph ? "rgba(20,30,52,0.98)" : "rgba(13,20,36,0.96)";
      g.fill();
      g.lineWidth = n.emph ? 7 : 5;
      g.strokeStyle = n.color; g.stroke();
      // accent bar on top
      g.save(); roundRect(g, 4, 4, W - 8, H - 8, 18); g.clip();
      g.fillStyle = n.color; g.globalAlpha = n.emph ? 0.22 : 0.14; g.fillRect(4, 4, W - 8, 10); g.restore();
      var titleSize = n.small ? 25 : 30;
      g.fillStyle = "#f1f6ff"; g.textBaseline = "top";
      g.font = "700 " + titleSize + "px system-ui, -apple-system, Segoe UI, Roboto, sans-serif";
      var tlines = wrap(g, n.title, W - pad * 2);
      var bulletSize = 20;
      var bl = [];
      if (n.lines) { g.font = "400 " + bulletSize + "px system-ui, sans-serif"; n.lines.forEach(function (L) { bl = bl.concat(wrap(g, "• " + L, W - pad * 2)); }); }
      var totalH = tlines.length * (titleSize + 5) + (bl.length ? 6 + bl.length * (bulletSize + 4) : 0);
      var y = Math.max(pad, (H - totalH) / 2);
      g.font = "700 " + titleSize + "px system-ui, sans-serif"; g.fillStyle = "#f1f6ff"; g.textAlign = n.lines ? "left" : "center";
      var tx = n.lines ? pad : W / 2;
      tlines.forEach(function (L) { g.fillText(L, tx, y); y += titleSize + 5; });
      if (bl.length) {
        y += 6; g.font = "400 " + bulletSize + "px system-ui, sans-serif"; g.fillStyle = "#aeb7c6"; g.textAlign = "left";
        bl.forEach(function (L) { g.fillText(L, pad, y); y += bulletSize + 4; });
      }
      var tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
      return tex;
    }

    var panelById = {};
    function addPanel(n) {
      var grp = new THREE.Group();
      grp.position.set(n.x, n.y, n.z);
      var face = new THREE.Mesh(new THREE.PlaneGeometry(n.w, n.h), new THREE.MeshBasicMaterial({ map: panelTexture(n), transparent: true, depthWrite: true }));
      var back = new THREE.Mesh(new THREE.PlaneGeometry(n.w * 0.99, n.h * 0.99), new THREE.MeshBasicMaterial({ color: 0x05080f, transparent: true, opacity: 0.85 }));
      back.position.z = -0.05;
      grp.add(back, face);
      scene.add(grp);
      panelById[n.id] = grp;
    }
    Object.keys(N).forEach(function (id) { addPanel(N[id]); });

    // ---------- ER shell (openwork reticular cage enclosing the disturbance boxes) ----------
    (function erShell() {
      var cx = -2.7, cy = -0.6, cz = 0, rx = 3.1, ry = 2.8, rz = 1.25;
      var mat = new THREE.MeshPhysicalMaterial({ color: 0x5fb4d6, emissive: 0x1d6f8c, emissiveIntensity: 0.3, roughness: 0.4, metalness: 0, transmission: 0.2, transparent: true, opacity: 0.85, sheen: 0.5, sheenColor: new THREE.Color(0x7dd3fc) });
      var tubes = [];
      function P(th, ph) { return V(cx + rx * Math.sin(ph) * Math.cos(th), cy + ry * Math.cos(ph), cz + rz * Math.sin(ph) * Math.sin(th)); }
      // meridians
      for (var m = 0; m < 7; m++) {
        var th = (m / 7) * Math.PI * 2, pts = [];
        for (var k = 0; k <= 24; k++) pts.push(P(th, (k / 24) * Math.PI));
        tubes.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, 0.03, 5, false));
      }
      // rings
      for (var r = 1; r < 5; r++) {
        var ph = (r / 5) * Math.PI, pts2 = [];
        for (var k2 = 0; k2 <= 40; k2++) pts2.push(P((k2 / 40) * Math.PI * 2, ph));
        tubes.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts2), 80, 0.025, 5, true));
      }
      // merge
      var pos = [], nor = [], idx = [], off = 0;
      tubes.forEach(function (g) { pos.push(g.attributes.position.array); nor.push(g.attributes.normal.array); var ia = g.index.array; for (var i = 0; i < ia.length; i++) idx.push(ia[i] + off); off += g.attributes.position.count; });
      function cat(a) { var n = 0; a.forEach(function (x) { n += x.length; }); var o = new Float32Array(n), q = 0; a.forEach(function (x) { o.set(x, q); q += x.length; }); return o; }
      var merged = new THREE.BufferGeometry();
      merged.setAttribute("position", new THREE.BufferAttribute(cat(pos), 3));
      merged.setAttribute("normal", new THREE.BufferAttribute(cat(nor), 3));
      merged.setIndex(idx);
      scene.add(new THREE.Mesh(merged, mat));
      // faint inner membrane
      var inner = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 28), new THREE.MeshPhysicalMaterial({ color: 0x3b82c4, transparent: true, opacity: 0.06, roughness: 0.5, side: THREE.BackSide, depthWrite: false }));
      inner.scale.set(rx * 0.98, ry * 0.98, rz * 0.98); inner.position.set(cx, cy, cz); scene.add(inner);
      // ER label chip
      var lab = N["d_mis"]; // reuse panel helper for a label
    })();

    // right ER membrane (double line at x ~ 0.9)
    (function membrane() {
      var mat = new THREE.MeshPhysicalMaterial({ color: 0xbcd7ee, roughness: 0.3, transmission: 0.3, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
      [0.78, 1.02].forEach(function (x) {
        var m = new THREE.Mesh(new THREE.BoxGeometry(0.05, 9.5, 0.9), mat);
        m.position.set(x, -0.7, 0); scene.add(m);
      });
      // phospholipid dots hint
      var dotMat = new THREE.MeshBasicMaterial({ color: 0x9cc3e6, transparent: true, opacity: 0.5 });
      var dots = new THREE.InstancedMesh(new THREE.SphereGeometry(0.05, 8, 6), dotMat, 60);
      var d = new THREE.Object3D();
      for (var i = 0; i < 60; i++) { d.position.set(i % 2 ? 0.78 : 1.02, -5 + i * 0.145, 0.3 * (Math.random() - 0.5)); d.scale.setScalar(0.8 + Math.random() * 0.5); d.updateMatrix(); dots.setMatrixAt(i, d.matrix); }
      scene.add(dots);
    })();

    // ---------- Arrows ----------
    function rectEdge(n, dir) {
      // point on node rectangle boundary in world, along dir from center
      var hw = n.w / 2 + 0.06, hh = n.h / 2 + 0.06;
      var tx = Math.abs(dir.x) < 1e-4 ? Infinity : hw / Math.abs(dir.x);
      var ty = Math.abs(dir.y) < 1e-4 ? Infinity : hh / Math.abs(dir.y);
      var t = Math.min(tx, ty);
      return V(n.x + dir.x * t, n.y + dir.y * t, n.z);
    }
    var arrowZ = 0.12;
    function buildArrow(a) {
      var nf = N[a.f], nt = N[a.t];
      var dir = V(nt.x - nf.x, nt.y - nf.y, 0); if (dir.lengthSq() < 1e-6) return; dir.normalize();
      var p0 = rectEdge(nf, dir); var p1 = rectEdge(nt, dir.clone().multiplyScalar(-1));
      p0.z = arrowZ; p1.z = arrowZ;
      var mid = p0.clone().lerp(p1, 0.5);
      if (a.bow) { var perp = V(-(p1.y - p0.y), p1.x - p0.x, 0).normalize(); mid.add(perp.multiplyScalar(a.bow)); mid.z = arrowZ + 0.1; }
      var curve = new THREE.CatmullRomCurve3(a.bow ? [p0, mid, p1] : [p0, p1]);
      var col = new THREE.Color(a.c);
      var headLen = a.thin ? 0.12 : 0.2, headR = a.thin ? 0.05 : 0.08, tubeR = a.thin ? 0.018 : 0.028;
      // shaft
      if (a.dashed) {
        var pts = curve.getSpacedPoints(Math.max(8, Math.round(p0.distanceTo(p1) * 3)));
        var dm = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.9 });
        var dash = new THREE.InstancedMesh(new THREE.SphereGeometry(tubeR * 1.1, 6, 5), dm, pts.length);
        var o = new THREE.Object3D();
        pts.forEach(function (pp, i) { if (i % 2) { o.scale.setScalar(0.0001); } else { o.position.copy(pp); o.scale.setScalar(1); } o.updateMatrix(); dash.setMatrixAt(i, o.matrix); });
        scene.add(dash);
      } else {
        scene.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, tubeR, 6, false), new THREE.MeshBasicMaterial({ color: col })));
      }
      // head or inhibition T-bar
      var end = curve.getPointAt(1), tan = curve.getTangentAt(1).normalize();
      if (a.inhibit) {
        var bar = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.34, 0.06), new THREE.MeshBasicMaterial({ color: col }));
        bar.position.copy(end); bar.quaternion.setFromUnitVectors(V(0, 1, 0), V(-tan.y, tan.x, 0).normalize()); scene.add(bar);
      } else {
        var cone = new THREE.Mesh(new THREE.ConeGeometry(headR, headLen, 12), new THREE.MeshBasicMaterial({ color: col }));
        cone.position.copy(end); cone.quaternion.setFromUnitVectors(V(0, 1, 0), tan); scene.add(cone);
      }
    }
    A.forEach(buildArrow);

    // side tags for the two model rows (auto-sized, right edge just left of the boxes)
    function tag(text, rightX, y, color) {
      var DPI = 150, fs = 34, pad = 10;
      var mc = document.createElement("canvas").getContext("2d");
      mc.font = "700 " + fs + "px system-ui, sans-serif";
      var tw = Math.ceil(mc.measureText(text).width) + pad * 2;
      var c = document.createElement("canvas"); c.width = tw; c.height = 64; var g = c.getContext("2d");
      g.fillStyle = color; g.font = "700 " + fs + "px system-ui, sans-serif"; g.textBaseline = "middle"; g.textAlign = "right";
      g.fillText(text, tw - pad, 34);
      var tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = 8;
      var pw = tw / DPI, ph = 64 / DPI;
      var m = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), new THREE.MeshBasicMaterial({ map: tx, transparent: true }));
      m.position.set(rightX - pw / 2, y, 0.05); scene.add(m);
    }
    tag("Conventional model", -9.9, 6.2, "#cbd5e1");
    tag("Proposed model", -9.9, 4.9, "#a5b4fc");

    // ---------- Camera + controls ----------
    var baseTarget = V(FOCUS.all.x, FOCUS.all.y, 0);
    var view = { yaw: -0.18, pitch: 0.16 };
    var user = { yaw: 0, pitch: 0 };
    var goal = { target: baseTarget.clone(), zoom: 1, yaw: 0, pitch: 0 };
    var cur = { target: baseTarget.clone(), radius: 26, yaw: view.yaw, pitch: view.pitch };
    var fitRadius = 26, pointer = { x: 0, y: 0 };

    function clamp() { goal.zoom = Math.max(0.28, Math.min(1.25, goal.zoom)); goal.yaw = Math.max(-0.9, Math.min(0.9, goal.yaw)); goal.pitch = Math.max(-0.55, Math.min(0.75, goal.pitch)); }
    function focus(key) {
      var f = FOCUS[key] || FOCUS.all;
      goal.target.set(f.x, f.y, 0); goal.zoom = f.r;
      host.querySelectorAll("[data-foc]").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-foc") === key); });
      kick();
    }

    var canvas = renderer.domElement, drag = null;
    canvas.addEventListener("pointerdown", function (e) { drag = { id: e.pointerId, x: e.clientX, y: e.clientY, yaw: goal.yaw, pitch: goal.pitch, moved: 0 }; });
    canvas.addEventListener("pointermove", function (e) {
      if (e.pointerType === "mouse") { var r = canvas.getBoundingClientRect(); pointer.x = ((e.clientX - r.left) / r.width - 0.5) * 2; pointer.y = ((e.clientY - r.top) / r.height - 0.5) * 2; }
      if (!drag || drag.id !== e.pointerId) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
      if (drag.moved > 4) {
        if (!drag.captured) { try { canvas.setPointerCapture(e.pointerId); } catch (err) {} drag.captured = true; stage.classList.add("is-dragging"); }
        goal.yaw = drag.yaw - dx * 0.005; if (e.pointerType === "mouse") goal.pitch = drag.pitch + dy * 0.004; clamp(); kick();
      }
    });
    function endDrag(e) { if (drag && drag.id === e.pointerId) { drag = null; stage.classList.remove("is-dragging"); } }
    canvas.addEventListener("pointerup", endDrag); canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", function () { pointer.x = pointer.y = 0; });
    canvas.addEventListener("dblclick", function () { goal.yaw = goal.pitch = 0; focus("all"); });
    canvas.addEventListener("wheel", function (e) { e.preventDefault(); goal.zoom *= Math.exp(e.deltaY * 0.0012); clamp(); kick(); }, { passive: false });
    host.querySelectorAll("[data-foc]").forEach(function (b) { b.addEventListener("click", function () { focus(b.getAttribute("data-foc")); }); });
    host.querySelector('[data-z="in"]').addEventListener("click", function () { goal.zoom /= 1.2; clamp(); kick(); });
    host.querySelector('[data-z="out"]').addEventListener("click", function () { goal.zoom *= 1.2; clamp(); kick(); });

    var width = 0, height = 0;
    function resize() {
      var w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
      width = w; height = h; renderer.setSize(w, h, false); camera.aspect = w / h;
      var halfV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      var needW = 12.5 / (halfV * camera.aspect), needH = 7.2 / halfV;
      fitRadius = Math.max(needW, needH) + 1.5;
      stage.classList.toggle("is-narrow", w < 620);
      camera.updateProjectionMatrix(); kick();
    }

    var visible = false, raf = 0;
    var clock = new THREE.Clock();
    function frame() {
      raf = 0;
      if (!visible || document.hidden || !width) return;
      var still = reduceMotion.matches;
      var dt = Math.min(0.1, clock.getDelta());
      var k = still ? 1 : 1 - Math.exp(-dt * 5);
      cur.target.lerp(goal.target, k);
      cur.radius += (fitRadius * goal.zoom - cur.radius) * k;
      var idle = still ? 0 : 0.05 * Math.sin(clock.elapsedTime * 0.12);
      var gy = view.yaw + goal.yaw + idle + (still ? 0 : pointer.x * 0.05);
      var gp = view.pitch + goal.pitch + (still ? 0 : pointer.y * 0.03);
      cur.yaw += (gy - cur.yaw) * k; cur.pitch += (gp - cur.pitch) * k;
      camera.position.set(
        cur.target.x + cur.radius * Math.sin(cur.yaw) * Math.cos(cur.pitch),
        cur.target.y + cur.radius * Math.sin(cur.pitch),
        cur.target.z + cur.radius * Math.cos(cur.yaw) * Math.cos(cur.pitch)
      );
      camera.lookAt(cur.target);
      renderer.render(scene, camera);
      var settling = cur.target.distanceTo(goal.target) + Math.abs(fitRadius * goal.zoom - cur.radius) > 0.01;
      if (!still || settling) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }

    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible) { clock.getDelta(); kick(); } }, { rootMargin: "150px" }).observe(stage);
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(stage);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", kick);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", kick);

    resize(); cur.radius = fitRadius; stage.classList.add("is-ready");
    return {};
  }
})();
