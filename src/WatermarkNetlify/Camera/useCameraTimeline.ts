import { interpolate, useCurrentFrame } from "remotion";
import { CameraPosition } from "../types";
import { SCENE_RANGES } from "../constants";

export const useCameraTimeline = (): CameraPosition => {
  const frame = useCurrentFrame();

  // Subtle natural camera sway
  const idleX = Math.sin((frame * Math.PI) / 90) * 4;
  const idleY = Math.cos((frame * Math.PI) / 80) * 3;

  // Keyframed camera parameters per scene
  let x = idleX;
  const y = idleY;
  let zoom = 1.0;
  const rotation = 0;

  if (frame < SCENE_RANGES.scene1_intro_watermark.end) {
    // Scene 1: Focus on Watermark
    zoom = interpolate(frame, [0, 80], [1.0, 1.03], { extrapolateRight: "clamp" });
    x += interpolate(frame, [40, 90], [0, 8], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene2_solution_easy.end) {
    // Scene 2: Easy Solution
    const sf = frame - SCENE_RANGES.scene2_solution_easy.start;
    zoom = interpolate(sf, [0, 50], [1.03, 1.0], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene3_login_dashboard.end) {
    // Scene 3: Login Dashboard
    const sf = frame - SCENE_RANGES.scene3_login_dashboard.start;
    zoom = interpolate(sf, [0, 60], [1.0, 1.02], { extrapolateRight: "clamp" });
    x += interpolate(sf, [0, 60], [0, -6], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene4_select_project.end) {
    // Scene 4: Select Project
    const sf = frame - SCENE_RANGES.scene4_select_project.start;
    zoom = interpolate(sf, [0, 60], [1.02, 1.01], { extrapolateRight: "clamp" });
    x += interpolate(sf, [0, 60], [-6, 6], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene5_project_config.end) {
    // Scene 5: Project Configuration
    const sf = frame - SCENE_RANGES.scene5_project_config.start;
    zoom = interpolate(sf, [0, 60], [1.01, 1.03], { extrapolateRight: "clamp" });
    x += interpolate(sf, [0, 60], [6, -4], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene6_enter_general.end) {
    // Scene 6: Enter General
    const sf = frame - SCENE_RANGES.scene6_enter_general.start;
    zoom = interpolate(sf, [0, 50], [1.03, 1.02], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene7_find_badge.end) {
    // Scene 7: Find Badge Section
    const sf = frame - SCENE_RANGES.scene7_find_badge.start;
    zoom = interpolate(sf, [0, 60], [1.02, 1.04], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene8_uncheck_badge.end) {
    // Scene 8: Macro Zoom to Checkbox Uncheck
    const sf = frame - SCENE_RANGES.scene8_uncheck_badge.start;
    zoom = interpolate(sf, [0, 30], [1.04, 1.06], { extrapolateRight: "clamp" });
  } else if (frame < SCENE_RANGES.scene9_save_setting.end) {
    // Scene 9: Save Setting
    const sf = frame - SCENE_RANGES.scene9_save_setting.start;
    zoom = interpolate(sf, [0, 30], [1.06, 1.02], { extrapolateRight: "clamp" });
  } else {
    // Scene 10: Clean Outro
    const sf = frame - SCENE_RANGES.scene10_outro_clean.start;
    zoom = interpolate(sf, [0, 30], [1.02, 1.0], { extrapolateRight: "clamp" });
  }

  return { x, y, zoom, rotation };
};

