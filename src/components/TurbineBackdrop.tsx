import { useEffect, useRef } from "react";
import * as THREE from "three";

const RED = "#d11212";

type Stop = {
  at: number;
  x: number; // fração da meia-largura visível (-1 esquerda … 1 direita)
  y: number;
  s: number;
  rot: number;
  op: number;
  tint: number; // 0 = partículas brancas, 1 = avermelhadas (para fundo claro)
  pulse: number; // 1 = reage ao mouse (pulso + rotação extra)
};

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

export default function TurbineBackdrop() {
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    holder.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const CAM_DIST = 8;
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = CAM_DIST;

    const group = new THREE.Group();
    scene.add(group);

    // ---------- Geometria procedural: turbina de anéis dentados ----------
    const rings: THREE.Vector3[][] = [];
    const ringDefs = [
      { r: 1.9, teeth: 12, amp: 0.2, z: 0.35, n: isMobile ? 84 : 132 },
      { r: 1.9, teeth: 12, amp: 0.2, z: -0.35, n: isMobile ? 84 : 132 },
      { r: 1.15, teeth: 8, amp: 0.13, z: 0, n: isMobile ? 64 : 96 },
      { r: 0.45, teeth: 0, amp: 0, z: 0, n: 36 },
    ];
    for (const d of ringDefs) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < d.n; i++) {
        const a = (i / d.n) * Math.PI * 2;
        const tooth =
          d.teeth > 0 ? 0.5 + 0.5 * Math.tanh(Math.sin(a * d.teeth) * 3) : 0;
        const rr = d.r * (1 + d.amp * tooth);
        pts.push(new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, d.z));
      }
      rings.push(pts);
    }

    const allPts: THREE.Vector3[] = [];
    const colors: number[] = [];
    const red = new THREE.Color(RED);
    const white = new THREE.Color("#ffffff");
    const pushPoint = (p: THREE.Vector3, isRed: boolean) => {
      allPts.push(p);
      const c = isRed ? red : white;
      colors.push(c.r, c.g, c.b);
    };
    rings.forEach((pts, ri) =>
      pts.forEach((p, i) => pushPoint(p, (i + ri) % 4 === 0)),
    );
    // partículas soltas ao redor (poeira)
    const scatterCount = isMobile ? 70 : 120;
    for (let i = 0; i < scatterCount; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 2.4 + Math.random() * 1.1;
      const z = (Math.random() - 0.5) * 1.6;
      pushPoint(
        new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, z),
        Math.random() < 0.4,
      );
    }

    const pointsGeo = new THREE.BufferGeometry().setFromPoints(allPts);
    pointsGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      sizeAttenuation: true,
    });
    group.add(new THREE.Points(pointsGeo, pointsMat));

    // linhas: contorno dos anéis + raios entre eles (plexus)
    const linePts: THREE.Vector3[] = [];
    const link = (a: THREE.Vector3, b: THREE.Vector3) => {
      linePts.push(a, b);
    };
    rings.forEach((pts) => {
      for (let i = 0; i < pts.length; i++) link(pts[i], pts[(i + 1) % pts.length]);
    });
    const [outerA, outerB, mid, hub] = rings;
    for (let i = 0; i < outerA.length; i += 4) link(outerA[i], outerB[i]);
    for (let i = 0; i < outerA.length; i += 5) {
      const j = Math.round((i / outerA.length) * mid.length) % mid.length;
      link(outerA[i], mid[j]);
      link(outerB[(i + 2) % outerB.length], mid[j]);
    }
    for (let i = 0; i < mid.length; i += 4) {
      const j = Math.round((i / mid.length) * hub.length) % hub.length;
      link(mid[i], hub[j]);
    }
    const linesGeo = new THREE.BufferGeometry().setFromPoints(linePts);
    const linesMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(RED),
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    group.add(new THREE.LineSegments(linesGeo, linesMat));

    // ---------- Coreografia por scroll ----------
    let stops: Stop[] = [];
    let halfH = Math.tan(THREE.MathUtils.degToRad(25)) * CAM_DIST;
    let halfW = halfH * camera.aspect;

    const sectionTop = (sel: string) => {
      const el = document.querySelector<HTMLElement>(sel);
      return el ? el.getBoundingClientRect().top + window.scrollY : 0;
    };
    const measure = () => {
      const vh = window.innerHeight;
      const intro = sectionTop("#proxima-secao");
      const probs = sectionTop("#problemas");
      const sol = sectionTop("#solucao");
      stops = [
        { at: 0, x: 0.52, y: -0.08, s: 0.85, rot: 0.12, op: 0.55, tint: 0, pulse: 0 },
        { at: Math.max(1, intro - vh * 0.45), x: 0.55, y: 0, s: 1.8, rot: 0.22, op: 0.75, tint: 0, pulse: 0 },
        { at: Math.max(2, probs - vh * 0.45), x: -0.52, y: 0.04, s: 1.3, rot: 0.5, op: 0.9, tint: 1, pulse: 1 },
        { at: Math.max(3, sol - vh * 0.3), x: -0.75, y: -0.15, s: 0.7, rot: 0.15, op: 0, tint: 1, pulse: 0 },
      ];
    };

    const sample = (sy: number): Stop => {
      if (sy <= stops[0].at) return stops[0];
      if (sy >= stops[stops.length - 1].at) return stops[stops.length - 1];
      let a = stops[0];
      let b = stops[stops.length - 1];
      for (let i = 0; i < stops.length - 1; i++) {
        if (sy >= stops[i].at && sy < stops[i + 1].at) {
          a = stops[i];
          b = stops[i + 1];
          break;
        }
      }
      const t = smoothstep((sy - a.at) / (b.at - a.at));
      const mix = (ka: number, kb: number) => ka + (kb - ka) * t;
      return {
        at: sy,
        x: mix(a.x, b.x),
        y: mix(a.y, b.y),
        s: mix(a.s, b.s),
        rot: mix(a.rot, b.rot),
        op: mix(a.op, b.op),
        tint: mix(a.tint, b.tint),
        pulse: mix(a.pulse, b.pulse),
      };
    };

    // ---------- Interação: inércia de scroll e movimento do mouse ----------
    let lastScrollY = window.scrollY;
    let boost = 0; // acelera a rotação quando o scroll é rápido
    let mouseX = 0;
    let mouseY = 0;
    let mouseEnergy = 0; // acelera pulso/rotação ao mexer o mouse
    let smX = 0;
    let smY = 0;

    const onMouse = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseEnergy = Math.min(
        mouseEnergy + (Math.abs(nx - mouseX) + Math.abs(ny - mouseY)) * 2.5,
        1.6,
      );
      mouseX = nx;
      mouseY = ny;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      halfH = Math.tan(THREE.MathUtils.degToRad(25)) * CAM_DIST;
      halfW = halfH * camera.aspect;
      measure();
    };
    window.addEventListener("resize", onResize, { passive: true });

    // as posições das seções mudam quando imagens/fontes carregam
    const remeasure = () => measure();
    window.addEventListener("load", remeasure);
    const ro = new ResizeObserver(remeasure);
    ro.observe(document.body);

    measure();

    // estado atual (interpolado com lerp a cada frame para fluidez)
    const cur = { ...stops[0] };
    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!running) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;

      // inércia do scroll
      const sy = window.scrollY;
      boost = Math.min(boost + Math.abs(sy - lastScrollY) * 0.0035, 2.2);
      lastScrollY = sy;
      boost *= Math.exp(-dt * 2.4);
      mouseEnergy *= Math.exp(-dt * 2.0);

      // alvo da coreografia + lerp suave independente de framerate
      const target = sample(sy);
      const k = 1 - Math.exp(-dt * 4.5);
      cur.x += (target.x - cur.x) * k;
      cur.y += (target.y - cur.y) * k;
      cur.s += (target.s - cur.s) * k;
      cur.rot += (target.rot - cur.rot) * k;
      cur.op += (target.op - cur.op) * k;
      cur.tint += (target.tint - cur.tint) * k;
      cur.pulse += (target.pulse - cur.pulse) * k;

      smX += (mouseX - smX) * k;
      smY += (mouseY - smY) * k;

      group.position.x = cur.x * halfW + smX * 0.15;
      group.position.y = cur.y * halfH - smY * 0.15;

      const pulse =
        1 +
        cur.pulse * (0.04 * Math.sin(t * 4.2) + mouseEnergy * 0.05) ;
      const s = cur.s * pulse * (isMobile ? 0.82 : 1);
      group.scale.setScalar(s);

      const spin = cur.rot * (1 + boost) + cur.pulse * mouseEnergy * 1.4;
      group.rotation.y += dt * spin;
      group.rotation.z += dt * 0.12 * (1 + boost * 1.5);
      group.rotation.x = 0.45 + smY * 0.2;

      // partículas brancas ficam avermelhadas sobre fundo claro
      pointsMat.color.copy(white).lerp(red, cur.tint * 0.85);

      holder.style.opacity = String(cur.op);
      renderer.render(scene, camera);
    };
    tick();

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) clock.getDelta();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", remeasure);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
      pointsGeo.dispose();
      linesGeo.dispose();
      pointsMat.dispose();
      linesMat.dispose();
      renderer.dispose();
      holder.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={holderRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
    />
  );
}
