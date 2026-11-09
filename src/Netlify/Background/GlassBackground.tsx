import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { NETLIFY_COLORS, SCENE_RANGES } from "../constants";
import { CameraPosition } from "../types";

interface GlassBackgroundProps {
  camera?: CameraPosition;
}

export const GlassBackground: React.FC<GlassBackgroundProps> = ({ camera }) => {
  const frame = useCurrentFrame();

  // Dynamic Scene Ambient Colors
  let primaryColor = NETLIFY_COLORS.reactCyan;
  let secondaryColor = NETLIFY_COLORS.netlifyTeal;
  let accentColor = NETLIFY_COLORS.freeMint;

  if (frame < SCENE_RANGES.scene1_react_showcase.end) {
    // Scene 1: React Showcase (React Cyan + Netlify Teal + Free Mint)
    primaryColor = NETLIFY_COLORS.reactCyan;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.freeMint;
  } else if (
    frame >= SCENE_RANGES.scene2_deploy_dilemma.start &&
    frame < SCENE_RANGES.scene2_deploy_dilemma.end
  ) {
    // Scene 2: Deploy Dilemma (Amber Gold + Rose Question Glow + Netlify Teal)
    primaryColor = NETLIFY_COLORS.questionGold;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = "#f43f5e";
  } else if (
    frame >= SCENE_RANGES.scene3_netlify_hero.start &&
    frame < SCENE_RANGES.scene3_netlify_hero.end
  ) {
    // Scene 3: Netlify Hero (Signature Netlify Teal & Diamond Aqua)
    primaryColor = NETLIFY_COLORS.netlifyTeal;
    secondaryColor = NETLIFY_COLORS.netlifyAqua;
    accentColor = NETLIFY_COLORS.reactCyan;
  } else if (
    frame >= SCENE_RANGES.scene4_free_easy.start &&
    frame < SCENE_RANGES.scene4_free_easy.end
  ) {
    // Scene 4: Free & Easy (Free Mint + Netlify Teal + Cyan)
    primaryColor = NETLIFY_COLORS.freeMint;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.netlifyAqua;
  } else if (
    frame >= SCENE_RANGES.scene5_drag_drop.start &&
    frame < SCENE_RANGES.scene5_drag_drop.end
  ) {
    // Scene 5: Drag and Drop (React Cyan -> Netlify Teal dropzone)
    primaryColor = NETLIFY_COLORS.netlifyAqua;
    secondaryColor = NETLIFY_COLORS.reactCyan;
    accentColor = NETLIFY_COLORS.freeMint;
  } else if (
    frame >= SCENE_RANGES.scene6_instant_online.start &&
    frame < SCENE_RANGES.scene6_instant_online.end
  ) {
    // Scene 6: Instant Online Live (Luminous Emerald + Electric Cyan)
    primaryColor = NETLIFY_COLORS.freeGreen;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = "#22c55e";
  } else if (
    frame >= SCENE_RANGES.scene7_more_practical.start &&
    frame < SCENE_RANGES.scene7_more_practical.end
  ) {
    // Scene 7: More Practical Question (Automation Purple + Netlify Teal)
    primaryColor = NETLIFY_COLORS.githubPurple;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.questionGold;
  } else if (
    frame >= SCENE_RANGES.scene8_github_cicd.start &&
    frame < SCENE_RANGES.scene8_github_cicd.end
  ) {
    // Scene 8: GitHub Actions CI/CD (GitHub Purple + CI/CD Blue + Netlify Teal)
    primaryColor = NETLIFY_COLORS.githubPurple;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = "#3b82f6";
  } else if (
    frame >= SCENE_RANGES.scene9_subdomain_app.start &&
    frame < SCENE_RANGES.scene9_subdomain_app.end
  ) {
    // Scene 9: Subdomain Note (Amber Caution + Netlify Aqua)
    primaryColor = NETLIFY_COLORS.questionAmber;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.warningRose;
  } else if (
    frame >= SCENE_RANGES.scene10_custom_domain.start &&
    frame < SCENE_RANGES.scene10_custom_domain.end
  ) {
    // Scene 10: Custom Domain (Electric Blue + Emerald Success)
    primaryColor = NETLIFY_COLORS.domainBlue;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.freeMint;
  } else {
    // Scene 11: Outro Climax (Celebratory Gold + Netlify Teal)
    primaryColor = NETLIFY_COLORS.questionGold;
    secondaryColor = NETLIFY_COLORS.netlifyTeal;
    accentColor = NETLIFY_COLORS.freeMint;
  }

  // Camera Parallax
  const camX = camera?.x ?? 0;
  const camY = camera?.y ?? 0;

  // Luminous Orb Pulses
  const orb1Pulse = interpolate(Math.sin((frame * Math.PI) / 45), [-1, 1], [0.85, 1.15]);
  const orb2Pulse = interpolate(Math.cos((frame * Math.PI) / 55), [-1, 1], [0.85, 1.15]);
  const orb3Pulse = interpolate(Math.sin((frame * Math.PI) / 65), [-1, 1], [0.8, 1.2]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NETLIFY_COLORS.bgDark,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* 1. Deep Midnight Cyber Gradient Base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 120% 90% at 50% -10%, #0c213d 0%, #071326 40%, ${NETLIFY_COLORS.bgDark} 100%)`,
        }}
      />

      {/* 2. Primary Luminous Ambient Orb (Top-Center / React Glow) */}
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

      {/* 4. Accent Mint / Question Glow Orb (Bottom-Left) */}
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

      {/* 6. High-Tech Hexagonal Netlify Honeycomb / Starfield Sparkles */}
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
              key={`star-${idx}`}
              style={{
                position: "absolute",
                left: pt.x + camX * 0.1 * (idx % 2 === 0 ? 1 : -1),
                top: pt.y + camY * 0.1 * (idx % 2 === 0 ? -1 : 1),
                width: pt.size,
                height: pt.size,
                borderRadius: "50%",
                background: pt.color,
                boxShadow: `0 0 12px ${pt.color}`,
                opacity: pt.opacity * sparkle,
              }}
            />
          );
        })}
      </div>

      {/* 7. Vignette Dark Borders */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 55%, rgba(2, 6, 14, 0.75) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

