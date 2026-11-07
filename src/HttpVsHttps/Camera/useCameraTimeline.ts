import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraPosition } from "../types";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 CINEMATIC CAMERA TIMELINE: SPATIAL STATIONS & DYNAMIC STORYTELLING
  //
  // - Scene 1 (Frames 0 - 86):
  //   * Entrance dynamic push (1.05 -> 1.00)
  //   * Dynamic dual-card focus pan: HTTPS (left) -> HTTP (right) -> center
  //
  // - Scene 2 (Frames 86 - 147):
  //   * Tension push-in on "Jangan"
  //   * Explosive impact stamp punch + screen shake on "salah"
  //   * Focus settle on "persepsi."
  //
  // - Scene 3 (Frames 147 - 206):
  //   * Searchlight sweep pan across viewpoints (-20px -> +16px -> 0px)
  //   * Dramatic question punch on "siapa.?"
  //
  // - Scene 4 (Frames 206 - 370):
  //   * Dual-viewpoint interrogation pan: User Side (-36px) -> Developer Side (+36px)
  //   * Dynamic optical zoom punch during viewpoint switch
  //
  // - Scene 5 (Frames 370 - 604):
  //   * Phase 1 (F370 - F418): Dev IDE Overview
  //   * Phase 2 (F418 - F498): HTTPS Security Vault Slam (Zoom punch 1.05)
  //   * Phase 3 (F498 - F604): Browser -> Server -> Lock Center pipeline tracking
  //
  // - Scene 6 (Frames 604 - 774):
  //   * Attack probe context recoil (zoom: 0.985)
  //   * Shield deflection slam punch (zoom: 1.05 + micro-shake)
  //
  // - Scene 7 (Frames 774 - 990):
  //   * Station 7A: Sisi Orang yang Mengakses (X: 0)
  //   * TRANSITION 7A -> 7B (F880 - F905): Lateral spring flight X: 0 -> 1400px + zoom dip
  //   * Station 7B: Phishing / Scam HTTPS Paradox arrival impact!
  //
  // - Scene 8 (Frames 990 - 1230):
  //   * Surfing overview -> Padlock zoom warning punch (F1136, zoom: 1.04, X: -16px)
  //
  // - Scene 9 (Frames 1230 - 1375):
  //   * Domain scanner tracking (-22px -> 0px)
  //   * Grand Finale Citadel Crest Stamp (zoom: 1.06)
  // ─────────────────────────────────────────────────────────────────────────────

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 1 CAMERA MOTION: HOOK COMPARISON (Frames 0 - 86)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame < 86) {
    const entranceZoom = interpolate(frame, [0, 16], [1.05, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    let panX = 0;
    if (frame >= 18 && frame < 46) {
      panX = interpolate(frame, [18, 28, 46], [0, -20, -10], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else if (frame >= 46 && frame < 86) {
      panX = interpolate(frame, [46, 56, 76, 86], [-10, 20, 10, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }

    const spHttpsPunch = spring({
      frame: Math.max(0, frame - 18),
      fps,
      config: { damping: 12, stiffness: 200, mass: 0.6 },
    });
    const zoomPunch = interpolate(spHttpsPunch, [0, 0.4, 1], [0, 0.03, 0]);

    return {
      x: panX,
      y: 0,
      zoom: entranceZoom + zoomPunch,
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 2 CAMERA MOTION: CAUTION PIVOT (Frames 86 - 147)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame >= 86 && frame < 147) {
    const s2Local = frame - 86;
    const tensionZoom = interpolate(s2Local, [0, 15], [1.0, 1.02], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    const spSalah = spring({
      frame: Math.max(0, s2Local - 15),
      fps,
      config: { damping: 10, stiffness: 260, mass: 0.6 },
    });
    const salahZoom = interpolate(spSalah, [0, 0.3, 1], [0, 0.05, 0.015]);

    const salahDecay = Math.max(0, 1 - Math.max(0, s2Local - 15) / 12);
    const shakeY =
      s2Local >= 15 && s2Local <= 27
        ? Math.sin((s2Local - 15) * 1.2) * salahDecay * 8
        : 0;

    return {
      x: 0,
      y: shakeY,
      zoom: tensionZoom + salahZoom,
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 3 CAMERA MOTION: DUAL PERSPECTIVES HOOK (Frames 147 - 206)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame >= 147 && frame < 206) {
    const s3Local = frame - 147;

    const spPan = spring({
      frame: Math.max(0, s3Local - 10),
      fps,
      config: { damping: 14, stiffness: 120, mass: 0.9 },
    });
    const panX = interpolate(spPan, [0, 0.5, 1], [-20, 16, 0]);

    const spSiapa = spring({
      frame: Math.max(0, s3Local - 22),
      fps,
      config: { damping: 11, stiffness: 220, mass: 0.65 },
    });
    const zoomSiapa = interpolate(spSiapa, [0, 0.35, 1], [0, 0.04, 0.015]);

    return {
      x: panX,
      y: 0,
      zoom: 1.0 + zoomSiapa,
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 4 CAMERA MOTION: DUAL-VIEWPOINT INTERROGATION (Frames 206 - 370)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame >= 206 && frame < 370) {
    const s4Local = frame - 206;
    // Phase 1 (0 - 56): Spotlight on User Side (pan left: -36px)
    // Phase 2 (56 - 158): Spotlight on Developer Side (pan right: +36px)
    const spPhaseSwitch = spring({
      frame: Math.max(0, s4Local - 56),
      fps,
      config: { damping: 16, stiffness: 75, mass: 1.05 },
    });

    const s4PanX = interpolate(spPhaseSwitch, [0, 1], [-36, 36]);
    // Dynamic optical zoom punch during viewpoint switch
    const spPunch = spring({
      frame: Math.max(0, s4Local - 56),
      fps,
      config: { damping: 13, stiffness: 180, mass: 0.7 },
    });
    const zoomPunch = interpolate(spPunch, [0, 0.4, 1], [0, 0.03, 0]);
    const s4Zoom = 1.0 + zoomPunch;

    return {
      x: s4PanX,
      y: 0,
      zoom: s4Zoom,
    };
  }
  if (frame >= 370 && frame < 604) {
    const s5Local = frame - 370;

    // Phase 2 HTTPS Slam Punch (F418 / localFrame 48)
    const spPunchP2 = spring({
      frame: Math.max(0, s5Local - 48),
      fps,
      config: { damping: 12, mass: 0.6, stiffness: 220 },
    });
    const zoomP2 = interpolate(spPunchP2, [0, 0.4, 1], [0, 0.05, 0.02]);

    // Phase 3 Line 11: Data pipeline camera tracking (Browser -> Server -> Lock Center)
    // localFrame 128 = F498
    let panX3 = 0;
    let zoomP3 = 0;

    if (s5Local >= 128) {
      const p3Progress = Math.max(0, s5Local - 128);

      // Pan left to browser (-22px) -> pan right to server (+22px) -> center (0px)
      panX3 = interpolate(
        p3Progress,
        [0, 20, 50, 75, 95],
        [0, -22, 22, 0, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      );

      // Punch in on "dienkripsi." (around localFrame 170 / F540)
      const spLockPunch = spring({
        frame: Math.max(0, s5Local - 168),
        fps,
        config: { damping: 11, mass: 0.65, stiffness: 240 },
      });
      zoomP3 = interpolate(spLockPunch, [0, 0.3, 1], [0, 0.06, 0.03]);
    }

    return {
      x: panX3,
      y: 0,
      zoom: 1.0 + zoomP2 + zoomP3,
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 6 CAMERA MOTION: INTEGRITY SHIELD DEFLECTION (Frames 604 - 774)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame >= 604 && frame < 774) {
    const s6Local = frame - 604;

    const spShieldSlam = spring({
      frame: Math.max(0, s6Local - 40),
      fps,
      config: { damping: 12, stiffness: 220, mass: 0.65 },
    });
    const shieldPunch = interpolate(spShieldSlam, [0, 0.3, 1], [0, 0.05, 0.02]);

    const attackPull = interpolate(s6Local, [0, 36, 44], [0, -0.015, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    const s6Decay = Math.max(0, 1 - Math.max(0, s6Local - 40) / 14);
    const impactY =
      s6Local >= 40 && s6Local <= 54
        ? Math.sin((s6Local - 40) * 1.1) * s6Decay * 6
        : 0;

    return {
      x: 0,
      y: impactY,
      zoom: 1.0 + attackPull + shieldPunch,
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 7 CAMERA MOTION (Frames 774 - 990)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame >= 774 && frame < 990) {
    const springSlideConfig = { damping: 17, stiffness: 76, mass: 1.05 };
    const spSlide7 = spring({
      frame: Math.max(0, frame - 880),
      fps,
      config: springSlideConfig,
    });

    const scene7X = interpolate(spSlide7, [0, 1], [0, 1400]);

    const slideProgress = interpolate(spSlide7, [0, 1], [0, 1]);
    const flightDip = Math.sin(slideProgress * Math.PI) * -0.06;
    const arrivalPunch =
      frame >= 886 && frame <= 910
        ? Math.sin(((frame - 886) / 24) * Math.PI) * 0.04
        : 0;

    const entranceZoom =
      frame >= 774 && frame < 800
        ? interpolate(frame, [774, 800], [1.04, 1.0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        : 1.0;

    const currentZoom = entranceZoom + flightDip + arrivalPunch;

    const impactDecay = Math.max(0, 1 - Math.max(0, frame - 886) / 16);
    const impactY =
      frame >= 886 && frame <= 902
        ? Math.sin((frame - 886) * 0.8) * impactDecay * 12
        : 0;

    return {
      x: scene7X,
      y: impactY,
      zoom: currentZoom,
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 8 CAMERA MOTION: PADLOCK CAUTION (Frames 990 - 1230)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame >= 990 && frame < 1230) {
    const s8Local = frame - 990;

    // Phase 3 Padlock Zoom & Warning Punch (F1136 / localFrame 146)
    const spLockWarning = spring({
      frame: Math.max(0, s8Local - 146),
      fps,
      config: { damping: 14, stiffness: 170, mass: 0.75 },
    });

    const zoomP3 = interpolate(spLockWarning, [0, 0.4, 1], [0, 0.06, 0.03]);
    const panP3 = interpolate(spLockWarning, [0, 1], [0, -16]);

    return {
      x: panP3,
      y: 0,
      zoom: 1.0 + zoomP3,
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 9 CAMERA MOTION: GRAND FINALE TRUST CREST (Frames 1230 - 1375)
  // ═══════════════════════════════════════════════════════════════════════════
  if (frame >= 1230) {
    const s9Local = frame - 1230;

    // Sub-phase 1: Domain Scanner Tracking (-22px -> 0px)
    const scanPanX = interpolate(s9Local, [0, 60], [-22, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    // Sub-phase 2: Grand Finale Crest Punch on "siapa yang sedang kamu percaya." (F1305 / localFrame 75)
    const spFinale = spring({
      frame: Math.max(0, s9Local - 75),
      fps,
      config: { damping: 14, stiffness: 160, mass: 0.8 },
    });

    const finaleZoom = interpolate(spFinale, [0, 0.4, 1], [1.02, 1.07, 1.04]);

    return {
      x: s9Local < 75 ? scanPanX : 0,
      y: 0,
      zoom: finaleZoom,
    };
  }

  return {
    x: 0,
    y: 0,
    zoom: 1.0,
  };
};
