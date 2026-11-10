import { interpolate, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";
import { SCENE_RANGES } from "../constants";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();

  // Natural organic breathing
  const breathX = Math.sin((frame * Math.PI) / 80) * 1.5;
  const breathY = Math.cos((frame * Math.PI) / 90) * 1.5;

  let zoom = 1.0;
  let x = 0;
  let y = 0;
  let rotation = 0;

  // 🎬 SCENE 1: DEPLOY INTRO (F0 - F80)
  // "Kamu deploy web app di Netlify?"
  if (frame < SCENE_RANGES.scene1_deploy_intro.end) {
    zoom = interpolate(frame, [0, 40, 80], [1.0, 1.025, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 2: RELOAD 404 (F80 - F235)
  // "Tapi ketika halaman di-reload, malah muncul pesan 404 Page Not Found?"
  else if (
    frame >= SCENE_RANGES.scene2_reload_404.start &&
    frame < SCENE_RANGES.scene2_reload_404.end
  ) {
    // Camera zooms dramatically on 404 alert pop (around F140)
    zoom = interpolate(frame, [80, 110, 145, 235], [1.02, 1.04, 1.075, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    rotation = interpolate(frame, [80, 120, 235], [0, -0.4, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 3: WHY QUESTION (F235 - F285)
  // "Kenapa ini bisa terjadi?"
  else if (
    frame >= SCENE_RANGES.scene3_why_question.start &&
    frame < SCENE_RANGES.scene3_why_question.end
  ) {
    zoom = interpolate(frame, [235, 255, 285], [1.02, 1.065, 1.035], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 4: SPA EXPLANATION (F285 - F495)
  // "Karena kebanyakan Single Page Application atau SPA hanya menggunakan satu file HTML sebagai entry point."
  else if (
    frame >= SCENE_RANGES.scene4_spa_explanation.start &&
    frame < SCENE_RANGES.scene4_spa_explanation.end
  ) {
    zoom = interpolate(frame, [285, 360, 430, 495], [1.02, 1.04, 1.055, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 5: ROUTING FRONTEND (F495 - F640)
  // "Ketika kamu berpindah halaman, routing ditangani oleh frontend, bukan server."
  else if (
    frame >= SCENE_RANGES.scene5_routing_frontend.start &&
    frame < SCENE_RANGES.scene5_routing_frontend.end
  ) {
    zoom = interpolate(frame, [495, 550, 640], [1.02, 1.045, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 6: RELOAD REQUEST (F640 - F795)
  // "Nah, ketika halaman di-reload, browser akan meminta URL tersebut langsung ke server."
  else if (
    frame >= SCENE_RANGES.scene6_reload_request.start &&
    frame < SCENE_RANGES.scene6_reload_request.end
  ) {
    zoom = interpolate(frame, [640, 700, 795], [1.02, 1.055, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 7: SERVER NOT FOUND (F795 - F955)
  // "Karena server tidak menemukan file atau route yang sesuai, akhirnya muncul 404."
  else if (
    frame >= SCENE_RANGES.scene7_server_not_found.start &&
    frame < SCENE_RANGES.scene7_server_not_found.end
  ) {
    zoom = interpolate(frame, [795, 860, 955], [1.02, 1.06, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 8: SOLUTION INTRO (F955 - F1000)
  // "Solusinya?"
  else if (
    frame >= SCENE_RANGES.scene8_solution_intro.start &&
    frame < SCENE_RANGES.scene8_solution_intro.end
  ) {
    zoom = interpolate(frame, [955, 975, 1000], [1.02, 1.08, 1.04], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 9: CREATE REDIRECTS (F1000 - F1120)
  // "Buat file bernama _redirects di folder public, lalu tambahkan konfigurasi berikut:"
  else if (
    frame >= SCENE_RANGES.scene9_create_redirects.start &&
    frame < SCENE_RANGES.scene9_create_redirects.end
  ) {
    zoom = interpolate(frame, [1000, 1050, 1120], [1.02, 1.045, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 10: REDIRECT RULE (F1120 - F1205)
  // "/* /index.html 200"
  else if (
    frame >= SCENE_RANGES.scene10_redirect_rule.start &&
    frame < SCENE_RANGES.scene10_redirect_rule.end
  ) {
    zoom = interpolate(frame, [1120, 1160, 1205], [1.02, 1.07, 1.035], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 11: RESOLUTION & OUTRO (F1205 - F1530)
  // "Dengan begitu, setiap request akan diarahkan ke index.html, dan routing kembali ditangani oleh frontend."
  else {
    zoom = interpolate(frame, [1205, 1300, 1420, 1530], [1.03, 1.055, 1.03, 1.01], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }

  return {
    x,
    y,
    zoom,
    rotation,
  };
};
