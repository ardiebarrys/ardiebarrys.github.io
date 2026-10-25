/* Shared illustrative cell anatomy for the homepage atlas and UPR research view.
 * Colors distinguish structures; sizes and shapes are not resolved molecular data. */
export function createUPRCell(THREE, options) {
  var lowPower = !!(options && options.lowPower);
  var cell = new THREE.Group();
    function V(x, y, z) { return new THREE.Vector3(x, y, z); }
    var geometries = new Set(), materials = new Set();
    function material(color, extra) {
      var mat = new THREE.MeshPhysicalMaterial(Object.assign({ color: color, roughness: 0.52, metalness: 0, clearcoat: 0.12, clearcoatRoughness: 0.5 }, extra));
      materials.add(mat); return mat;
    }
    function mesh(geometry, mat, parent) {
      geometries.add(geometry);
      var object = new THREE.Mesh(geometry, mat); object.castShadow = true; object.receiveShadow = true;
      (parent || cell).add(object); return object;
    }
    function tube(points, radius, mat, parent, closed) {
      return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points, !!closed), Math.max(24, points.length * 3), radius, 7, !!closed), mat, parent);
    }
    function uneven(geometry, amount) {
      var pos = geometry.attributes.position;
      for (var i = 0; i < pos.count; i++) {
        var x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
        var scale = 1 + Math.sin(x * 9 + y * 3) * Math.cos(y * 7 - z * 5) * Math.sin(z * 8 + x * 2) * amount;
        pos.setXYZ(i, x * scale, y * scale, z * scale);
      }
      geometry.computeVertexNormals(); return geometry;
    }
    // Open front hemisphere with a visible cutaway rim.
    var membraneMat = material(0x496f68, { side: THREE.DoubleSide, roughness: 0.67 });
    var membrane = mesh(uneven(new THREE.SphereGeometry(1, 64, 40, Math.PI, Math.PI), 0.025), membraneMat);
    membrane.scale.set(1.55, 1.26, 1.03);
    var rimPoints = [];
    for (var i = 0; i < 96; i++) { var a = i / 96 * Math.PI * 2; rimPoints.push(V(Math.cos(a) * 1.55, Math.sin(a) * 1.26, 0)); }
    tube(rimPoints, 0.025, material(0x8bada1, { roughness: 0.4 }), cell, true);
    var inner = mesh(new THREE.SphereGeometry(0.98, 48, 32, Math.PI, Math.PI), material(0x62877a, { side: THREE.BackSide, roughness: 0.78 }));
    inner.scale.copy(membrane.scale);
    var nucleusMat = material(0x857aab, { roughness: 0.48 });
    var nucleus = mesh(uneven(new THREE.SphereGeometry(0.49, 48, 32), 0.025), nucleusMat);
    nucleus.position.set(-0.29, 0.16, 0.21); nucleus.scale.set(1.04, 0.95, 1);
    // The intact nuclear envelope hides the nucleolus inside.
    var poreGeo = new THREE.TorusGeometry(0.017, 0.006, 5, 10); geometries.add(poreGeo);
    var pores = new THREE.InstancedMesh(poreGeo, material(0xb7a9ca), 62);
    var dummy = new THREE.Object3D();
    for (var p = 0; p < 62; p++) {
      var py = 1 - (p + 0.5) * 2 / 62, pr = Math.sqrt(1 - py * py), angle = p * 2.39996;
      var direction = V(Math.cos(angle) * pr, py, Math.sin(angle) * pr);
      dummy.position.copy(direction).multiplyScalar(0.495).add(nucleus.position);
      dummy.lookAt(dummy.position.clone().add(direction)); dummy.updateMatrix(); pores.setMatrixAt(p, dummy.matrix);
    }
    cell.add(pores);
    // Broad folded ER cisternae, with small ribosomes on the cytosolic surface.
    var erMat = material(0x7faaa3, { side: THREE.DoubleSide, roughness: 0.48 });
    var edgeMat = material(0xabc7b7, { roughness: 0.42 });
    var ribosomeGeo = new THREE.SphereGeometry(0.012, 6, 5); geometries.add(ribosomeGeo);
    var ribosomes = new THREE.InstancedMesh(ribosomeGeo, material(0xc9c8ae), 120), ri = 0;
    function erPoint(u, v, layer) {
      var a = -1.2 + u * 4.9;
      var r = 0.62 + layer * 0.13 + v * 0.10 + Math.sin(a * 3.3 + layer * 0.22) * 0.045 + Math.cos(a * 5.1) * 0.018;
      return V(-0.22 + Math.cos(a) * r, 0.10 + Math.sin(a) * r * 0.82, 0.10 + Math.sin(a * 5 + layer * 0.7) * 0.055 + v * 0.11);
    }
    for (var layer = 0; layer < 4; layer++) {
      var positions = [], indices = [], segments = lowPower ? 48 : 72, strips = 5;
      for (var u = 0; u <= segments; u++) {
        for (var v = 0; v <= strips; v++) {
          var point = erPoint(u / segments, v / strips, layer); positions.push(point.x, point.y, point.z);
          if (u < segments && v < strips) {
            var base = u * (strips + 1) + v;
            indices.push(base, base + 1, base + strips + 1, base + 1, base + strips + 2, base + strips + 1);
          }
        }
      }
      var sheet = new THREE.BufferGeometry(); sheet.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      sheet.setIndex(indices); sheet.computeVertexNormals(); mesh(sheet, erMat);
      var edge = []; for (var e = 0; e <= 50; e++) edge.push(erPoint(e / 50, 1, layer));
      tube(edge, 0.012, edgeMat);
      for (var r = 0; r < 30; r++) {
        dummy.position.copy(erPoint((r + 0.5) / 30, (r % 3) / 3, layer)); dummy.position.z += 0.024;
        dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); ribosomes.setMatrixAt(ri++, dummy.matrix);
      }
    }
    cell.add(ribosomes);
    // Mitochondrial cutaways expose folded inner membranes (cristae).
    var mitoMat = material(0xb76f55, { roughness: 0.56, side: THREE.DoubleSide });
    var cristaMat = material(0xe6aa7b, { roughness: 0.52 });
    [[-0.91, -0.55, 0.2, -0.7], [0.98, -0.49, 0.12, 0.55], [0.77, 0.66, -0.18, -0.5]].forEach(function (pos) {
      var group = new THREE.Group(); group.position.set(pos[0], pos[1], pos[2]); group.rotation.z = pos[3]; cell.add(group);
      var outer = mesh(new THREE.SphereGeometry(1, 28, 18, Math.PI, Math.PI), mitoMat, group); outer.scale.set(0.15, 0.29, 0.12);
      var outline = []; for (var i = 0; i < 40; i++) { var a = i / 40 * Math.PI * 2; outline.push(V(Math.cos(a) * 0.15, Math.sin(a) * 0.29, 0)); }
      tube(outline, 0.018, mitoMat, group, true);
      for (var c = 0; c < 6; c++) { var cy = -0.19 + c * 0.074; tube([V(-0.10, cy, 0), V(0.065, cy + 0.02, 0.015), V(-0.025, cy + 0.05, 0.025)], 0.015, cristaMat, group); }
    });
    var sensorDefs = [
      { id: "ire1", title: "IRE1α", color: 0xdca77e, at: V(0.56, 0.68, 0.22) },
      { id: "perk", title: "PERK", color: 0xaaa6d2, at: V(0.77, 0.22, 0.23) },
      { id: "atf6", title: "ATF6", color: 0xb9c980, at: V(0.67, -0.24, 0.23) }
    ], sensors = {};
    sensorDefs.forEach(function (def) {
      var group = new THREE.Group(); group.position.copy(def.at); cell.add(group);
      var mat = material(def.color, { emissive: def.color, emissiveIntensity: 0.04, roughness: 0.4 });
      var stem = mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.17, 12), mat, group); stem.rotation.x = Math.PI / 2;
      var head = mesh(new THREE.IcosahedronGeometry(0.065, 2), mat, group); head.position.z = 0.12;
      var base = mesh(new THREE.SphereGeometry(0.05, 16, 10), mat, group); base.position.z = -0.10;
      sensors[def.id] = { group: group, material: mat };
    });
  return { group: cell, sensors: sensors, sensorDefs: sensorDefs, erMaterial: erMat, nucleusMaterial: nucleusMat,
    dispose: function () { geometries.forEach(function (g) { g.dispose(); }); materials.forEach(function (m) { m.dispose(); }); }
  };
}
