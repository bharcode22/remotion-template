import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { NETLIFY_COLORS, SCENE_RANGES } from "../constants";
import { CameraPosition } from "../types";

interface GlassBackgroundProps {
  camera?: CameraPosition;
}

export const GlassBackground: React.FC<GlassBackgroundProps> = ({ camera }) => {
  const frame = useCurrentFrame();

  // Dynamic Scene Ambient Colors matching the story progression
  let primaryColor = NETLIFY_COLORS.netlifyAqua;
  let secondaryColor = NETLIFY_COLORS.netlifyTeal;
  let accentColor = NETLIFY_COLORS.reactCyan;

  if (frame < SCENE_RANGES.scene1_deploy_intro.end) {
    // Scene 1: Netlify Deploy Intro
    primaryColor = NETLIFY_COLORS.netlifyAqua;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.reactCyan;
  } else if (frame < SCENE_RANGES.scene2_reload_404.end) {
    // Scene 2: 404 Reload Shock (Warning Crimson & Sunset Amber)
    primaryColor = NETLIFY_COLORS.warningRose;
    secondaryColor = NETLIFY_COLORS.warningCrimson;
    accentColor = NETLIFY_COLORS.questionAmber;
  } else if (frame < SCENE_RANGES.scene3_why_question.end) {
    // Scene 3: Why Question (Amber Gold & Netlify Teal)
    primaryColor = NETLIFY_COLORS.questionGold;
    secondaryColor = NETLIFY_COLORS.questionAmber;
    accentColor = NETLIFY_COLORS.netlifyTeal;
  } else if (frame < SCENE_RANGES.scene4_spa_explanation.end) {
    // Scene 4: SPA Architecture (React Cyan & Electric Purple)
    primaryColor = NETLIFY_COLORS.reactCyan;
    secondaryColor = NETLIFY_COLORS.purpleAccent;
    accentColor = NETLIFY_COLORS.netlifyTeal;
  } else if (frame < SCENE_RANGES.scene5_routing_frontend.end) {
    // Scene 5: Frontend Client Routing (Cyan & Netlify Aqua)
    primaryColor = NETLIFY_COLORS.reactCyan;
    secondaryColor = NETLIFY_COLORS.netlifyAqua;
    accentColor = NETLIFY_COLORS.freeMint;
  } else if (frame < SCENE_RANGES.scene6_reload_request.end) {
    // Scene 6: Reload Request to Server (Netlify Cyan & Deep Slate)
    primaryColor = NETLIFY_COLORS.netlifyCyan;
    secondaryColor = NETLIFY_COLORS.reactBlue;
    accentColor = NETLIFY_COLORS.warningRose;
  } else if (frame < SCENE_RANGES.scene7_server_not_found.end) {
    // Scene 7: Server Route Miss 404 (Warning Crimson)
    primaryColor = NETLIFY_COLORS.warningCrimson;
    secondaryColor = NETLIFY_COLORS.warningRose;
    accentColor = NETLIFY_COLORS.questionAmber;
  } else if (frame < SCENE_RANGES.scene8_solution_intro.end) {
    // Scene 8: Solution! (Mint Sparkle & Golden Hope)
    primaryColor = NETLIFY_COLORS.freeMint;
    secondaryColor = NETLIFY_COLORS.questionGold;
    accentColor = NETLIFY_COLORS.freeGreen;
  } else if (frame < SCENE_RANGES.scene9_create_redirects.end) {
    // Scene 9: Create _redirects File (Netlify Teal & Mint)
    primaryColor = NETLIFY_COLORS.netlifyTeal;
    secondaryColor = NETLIFY_COLORS.freeMint;
    accentColor = NETLIFY_COLORS.netlifyAqua;
  } else if (frame < SCENE_RANGES.scene10_redirect_rule.end) {
    // Scene 10: Rule /* /index.html 200 (Mint, Cyan, Netlify Aqua)
    primaryColor = NETLIFY_COLORS.freeMint;
    secondaryColor = NETLIFY_COLORS.reactCyan;
    accentColor = NETLIFY_COLORS.netlifyAqua;
  } else {
    // Scene 11: Final Resolution & Outro (Full Netlify + React Emerald Harmony)
    primaryColor = NETLIFY_COLORS.freeGreen;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.reactCyan;
  }

  // Camera parallax offsets
  const camX = camera?.x ?? 0;
  const camY = camera?.y ?? 0;

  // Luminous breathing pulses
  const orb1Pulse = interpolate(
    Math.sin((frame * Math.PI) / 45),
    [-1, 1],
    [0.92, 1.08]
  );
  const orb2Pulse = interpolate(
    Math.cos((frame * Math.PI) / 55),
    [-1, 1],
    [0.9, 1.1]
  );
  const orb3Pulse = interpolate(
    Math.sin((frame * Math.PI) / 50 + 1),
    [-1, 1],
    [0.93, 1.07]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NETLIFY_COLORS.bgDark,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* 1. Deep Midnight Cosmic Base Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 120% 90% at 50% -10%, #07152e 0%, transparent 65%),
            radial-gradient(ellipse 100% 80% at 50% 110%, #030814 0%, transparent 70%),
            linear-gradient(180deg, #050d1e 0%, #030713 50%, #02040a 100%)
          `,
        }}
      />

      {/* 2. Top Primary Luminous Orb */}
      <div
        style={{
          position: "absolute",
          top: -140 - camY * 0.15,
          left: `calc(50% - 360px + ${camX * 0.15}px)`,
          width: 720,
          height: 720,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryColor}40 0%, ${primaryColor}00 70%)`,
          filter: "blur(75px)",
          transform: `scale(${orb1Pulse})`,
          opacity: 0.85,
          transition: "background 0.4s ease",
        }}
      />

      {/* 3. Secondary Netlify Teal Ambient Orb (Mid-Right) */}
      <div
        style={{
          position: "absolute",
          top: 680 - camY * 0.25,
          right: -160 + camX * 0.2,
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryColor}35 0%, ${secondaryColor}00 70%)`,
          filter: "blur(85px)",
          transform: `scale(${orb2Pulse})`,
          opacity: 0.75,
          transition: "background 0.4s ease",
        }}
      />

      {/* 4. Accent Glow Orb (Bottom-Left) */}
      <div
        style={{
          position: "absolute",
          bottom: 120 + camY * 0.2,
          left: -140 - camX * 0.2,
          width: 580,
          height: 580,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}30 0%, ${accentColor}00 70%)`,
          filter: "blur(80px)",
          transform: `scale(${orb3Pulse})`,
          opacity: 0.7,
          transition: "background 0.4s ease",
        }}
      />

      {/* 5. Isometric Cyber Grid with Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          backgroundPosition: `${camX * 0.3}px ${camY * 0.3}px`,
          opacity: 0.6,
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 30%, transparent 85%)",
        }}
      />

      {/* 6. Starfield Sparkles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {[
          { x: 120, y: 320, size: 4, opacity: 0.6, color: primaryColor },
          { x: 920, y: 280, size: 3, opacity: 0.5, color: secondaryColor },
          { x: 240, y: 840, size: 4, opacity: 0.5, color: accentColor },
          { x: 860, y: 1120, size: 5, opacity: 0.7, color: primaryColor },
          { x: 180, y: 1480, size: 3, opacity: 0.4, color: secondaryColor },
          { x: 900, y: 1640, size: 4, opacity: 0.6, color: accentColor },
        ].map((pt, idx) => {
          const sparkle = interpolate(
            Math.sin((frame * Math.PI) / (30 + idx * 8)),
            [-1, 1],
            [0.3, 1]
          );
          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                left: pt.x,
                top: pt.y,
                width: pt.size,
                height: pt.size,
                borderRadius: "50%",
                backgroundColor: pt.color,
                boxShadow: `0 0 12px ${pt.color}`,
                opacity: pt.opacity * sparkle,
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
