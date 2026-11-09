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

  // 🎬 SCENE 1: REACT SHOWCASE (F0 - F72)
  // "Mau pamerin website React kalian secara gratis?"
  if (frame < SCENE_RANGES.scene1_react_showcase.end) {
    zoom = interpolate(frame, [0, 40, 72], [1.0, 1.025, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 2: DEPLOY DILEMMA (F72 - F144)
  // "Tapi bingung mau deploy di mana?"
  else if (
    frame >= SCENE_RANGES.scene2_deploy_dilemma.start &&
    frame < SCENE_RANGES.scene2_deploy_dilemma.end
  ) {
    // Camera re-focuses with slight dramatic zoom on the dilemma question
    zoom = interpolate(frame, [72, 85, 120, 144], [1.02, 1.045, 1.05, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    // Subtle curious tilt on the question
    rotation = interpolate(frame, [72, 100, 144], [0, -0.4, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
  }
  // 🎬 SCENE 3: NETLIFY HERO (F144 - F186)
  // "Netlify aja!"
  else if (
    frame >= SCENE_RANGES.scene3_netlify_hero.start &&
    frame < SCENE_RANGES.scene3_netlify_hero.end
  ) {
    // Dynamic punch-in on "Netlify aja!"
    zoom = interpolate(frame, [144, 150, 186], [1.02, 1.075, 1.04], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 4: FREE & EASY (F186 - F290)
  // "Gratis untuk memulai dan gampang banget digunakan."
  else if (
    frame >= SCENE_RANGES.scene4_free_easy.start &&
    frame < SCENE_RANGES.scene4_free_easy.end
  ) {
    zoom = interpolate(frame, [186, 225, 290], [1.02, 1.04, 1.025], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 5: DRAG & DROP (F290 - F440)
  // "Cukup build project React kalian, lalu drag and drop folder hasil build ke Netlify."
  else if (
    frame >= SCENE_RANGES.scene5_drag_drop.start &&
    frame < SCENE_RANGES.scene5_drag_drop.end
  ) {
    zoom = interpolate(frame, [290, 350, 400, 440], [1.02, 1.035, 1.05, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 6: INSTANT ONLINE (F440 - F515)
  // "Website kalian langsung online!"
  else if (
    frame >= SCENE_RANGES.scene6_instant_online.start &&
    frame < SCENE_RANGES.scene6_instant_online.end
  ) {
    // Climax burst punch
    zoom = interpolate(frame, [440, 456, 515], [1.02, 1.08, 1.035], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 7: MORE PRACTICAL (F515 - F570)
  // "Atau mau lebih praktis?"
  else if (
    frame >= SCENE_RANGES.scene7_more_practical.start &&
    frame < SCENE_RANGES.scene7_more_practical.end
  ) {
    zoom = interpolate(frame, [515, 540, 570], [1.02, 1.04, 1.025], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 8: GITHUB CI/CD (F570 - F755)
  // "Bisa juga integrasikan project kalian dengan GitHub Actions untuk otomatisasi deployment menggunakan CI/CD."
  else if (
    frame >= SCENE_RANGES.scene8_github_cicd.start &&
    frame < SCENE_RANGES.scene8_github_cicd.end
  ) {
    zoom = interpolate(frame, [570, 630, 690, 755], [1.02, 1.035, 1.05, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 9: SUBDOMAIN NOTE (F755 - F985)
  // "Tapi, Kalau menggunakan subdomain gratis dari Netlify, alamat website kalian akan berakhiran .netlify.app."
  else if (
    frame >= SCENE_RANGES.scene9_subdomain_app.start &&
    frame < SCENE_RANGES.scene9_subdomain_app.end
  ) {
    zoom = interpolate(frame, [755, 789, 905, 985], [1.02, 1.035, 1.05, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 10: CUSTOM DOMAIN (F985 - F1115)
  // "Jadi, kalau mau pakai domain sendiri, kalian bisa menghubungkan custom domain."
  else if (
    frame >= SCENE_RANGES.scene10_custom_domain.start &&
    frame < SCENE_RANGES.scene10_custom_domain.end
  ) {
    zoom = interpolate(frame, [985, 1040, 1115], [1.02, 1.05, 1.03], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }
  // 🎬 SCENE 11: OUTRO CLIMAX (F1115 - F1143)
  // "Gampang, kan?"
  else {
    zoom = interpolate(frame, [1115, 1125, 1143], [1.03, 1.07, 1.05], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    x = breathX;
    y = breathY;
    rotation = 0;
  }

  return { x, y, zoom, rotation };
};

