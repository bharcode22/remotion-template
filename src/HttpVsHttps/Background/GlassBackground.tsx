import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { HTTP_HTTPS_COLORS } from "../constants";

export const GlassBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🌐 SCENE-AWARE DYNAMIC ATMOSPHERE ENGINE (Clean & Line-Free)
  // Background actively transforms its color palette, lighting, and ambient glow
  // depending on the active narrative scene, WITHOUT any running lines or grids.
  // ─────────────────────────────────────────────────────────────────────────────

  // Scene 7 Threat Alert Level (Frame 774 to 990, drops at F886)
  const isScene7 = frame >= 774 && frame < 990;
  const isScene7Phase2 = frame >= 886 && frame < 990;
  const threatProgress = interpolate(frame, [886, 898], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Strobe Alarm Flash in Scene 7 Phase 2
  const strobeFlash =
    isScene7Phase2 ? Math.sin((frame - 886) * 0.45) * 0.5 + 0.5 : 0;

  // Slow ambient breathing pulses
  const pulse1 = Math.sin((frame * Math.PI) / 90) * 0.12 + 0.88;
  const pulse2 = Math.cos((frame * Math.PI) / 75) * 0.1 + 0.9;
  const pulse3 = Math.sin((frame * Math.PI) / 110 + 1) * 0.08 + 0.92;

  // Drifts
  const drift1X = Math.sin((frame * Math.PI) / 180) * 40;
  const drift1Y = Math.cos((frame * Math.PI) / 160) * 30;
  const drift2X = Math.cos((frame * Math.PI) / 200) * 45;
  const drift2Y = Math.sin((frame * Math.PI) / 170) * 35;
  const drift3X = Math.sin((frame * Math.PI) / 150 + 2) * 30;
  const drift3Y = Math.cos((frame * Math.PI) / 190 + 1) * 35;

  // Dynamic Scene Color Tinting
  let primaryGlowColor = "rgba(16, 185, 129, 0.18)"; // Default emerald
  let secondaryGlowColor = "rgba(56, 189, 248, 0.14)"; // Default cyan
  let centerAtmosphere = "rgba(167, 139, 250, 0.1)"; // Violet

  if (frame < 86) {
    // Scene 1: Electric Cyan & Mint
    primaryGlowColor = "rgba(56, 189, 248, 0.22)";
    secondaryGlowColor = "rgba(16, 185, 129, 0.16)";
  } else if (frame >= 86 && frame < 147) {
    // Scene 2: Caution Amber Alert
    primaryGlowColor = "rgba(251, 191, 36, 0.24)";
    secondaryGlowColor = "rgba(249, 115, 22, 0.18)";
    centerAtmosphere = "rgba(239, 68, 68, 0.12)";
  } else if (frame >= 147 && frame < 206) {
    // Scene 3: Perspective Question Violet
    primaryGlowColor = "rgba(167, 139, 250, 0.25)";
    secondaryGlowColor = "rgba(99, 102, 241, 0.2)";
    centerAtmosphere = "rgba(192, 132, 252, 0.15)";
  } else if (frame >= 206 && frame < 370) {
    // Scene 4: Dual Split (User Cyan Left, Dev Purple Right)
    primaryGlowColor = "rgba(167, 139, 250, 0.2)";
    secondaryGlowColor = "rgba(56, 189, 248, 0.22)";
  } else if (frame >= 370 && frame < 604) {
    // Scene 5: Developer TLS Encryption Vault (Matrix Emerald)
    primaryGlowColor = "rgba(16, 185, 129, 0.28)";
    secondaryGlowColor = "rgba(52, 211, 153, 0.2)";
    centerAtmosphere = "rgba(6, 78, 59, 0.25)";
  } else if (frame >= 604 && frame < 774) {
    // Scene 6: Shield Tamper Protection
    primaryGlowColor = "rgba(56, 189, 248, 0.25)";
    secondaryGlowColor = "rgba(16, 185, 129, 0.2)";
    centerAtmosphere = "rgba(14, 165, 233, 0.15)";
  } else if (isScene7) {
    // Scene 7: Transition from User Cyan to Crimson Phishing Alert!
    if (isScene7Phase2) {
      primaryGlowColor = `rgba(251, 113, 133, ${0.28 + strobeFlash * 0.15})`;
      secondaryGlowColor = `rgba(225, 29, 72, ${0.22 + strobeFlash * 0.12})`;
      centerAtmosphere = `rgba(244, 63, 94, ${0.25 + strobeFlash * 0.2})`;
    } else {
      primaryGlowColor = "rgba(56, 189, 248, 0.22)";
      secondaryGlowColor = "rgba(16, 185, 129, 0.16)";
      centerAtmosphere = "rgba(14, 165, 233, 0.12)";
    }
  } else if (frame >= 990 && frame < 1230) {
    // Scene 8: Padlock Caution & Web Surfing Horizon (Amber & Cyan)
    primaryGlowColor = "rgba(251, 191, 36, 0.22)";
    secondaryGlowColor = "rgba(56, 189, 248, 0.2)";
    centerAtmosphere = "rgba(245, 158, 11, 0.14)";
  } else if (frame >= 1230) {
    // Scene 9: Grand Finale - Golden Shield of Trust & Verification (Gold & Emerald)
    primaryGlowColor = "rgba(245, 158, 11, 0.28)";
    secondaryGlowColor = "rgba(16, 185, 129, 0.25)";
    centerAtmosphere = "rgba(251, 191, 36, 0.18)";
  }

  return (
    <AbsoluteFill
      style={{
        background: isScene7Phase2
          ? `linear-gradient(155deg, #090306 0%, #17070b 40%, #1f0810 70%, #070204 100%)`
          : `linear-gradient(155deg, ${HTTP_HTTPS_COLORS.bgDark} 0%, #0c0e25 40%, #14102d 70%, #080916 100%)`,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* ─── 1. Primary Dynamic Ambient Spotlight (Top-Right) ─── */}
      <div
        style={{
          position: "absolute",
          top: -120 + drift1Y,
          right: -100 + drift1X,
          width: 820,
          height: 820,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryGlowColor} 0%, transparent 72%)`,
          filter: "blur(75px)",
          transform: `scale(${pulse1})`,
          pointerEvents: "none",
        }}
      />

      {/* ─── 2. Secondary Dynamic Ambient Spotlight (Bottom-Left) ─── */}
      <div
        style={{
          position: "absolute",
          bottom: -180 + drift2Y,
          left: -100 + drift2X,
          width: 860,
          height: 860,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryGlowColor} 0%, transparent 72%)`,
          filter: "blur(85px)",
          transform: `scale(${pulse2})`,
          pointerEvents: "none",
        }}
      />

      {/* ─── 3. Center Atmospheric Flare ─── */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          width: 720,
          height: 720,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${centerAtmosphere} 0%, transparent 70%)`,
          filter: "blur(85px)",
          transform: `translate(-50%, -50%) translate(${drift3X}px, ${drift3Y}px) scale(${pulse3})`,
          pointerEvents: "none",
        }}
      />

      {/* ─── 4. Threat Alert Red Radial Shockwave Flash (Scene 7 Phase 2 Slam) ─── */}
      {isScene7Phase2 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 50%, rgba(251, 113, 133, ${0.2 * threatProgress + strobeFlash * 0.12}) 0%, rgba(225, 29, 72, 0.08) 60%, rgba(0, 0, 0, 0.55) 100%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* ─── 5. Frosted Glass Micro-Dot Texture (Stationary, Non-Linear) ─── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      {/* ─── 6. Floating Ambient Bokeh Glows ─── */}
      {[
        { x: 140, y: 320, r: 4, o: 0.45 },
        { x: 920, y: 460, r: 5, o: 0.4 },
        { x: 220, y: 1250, r: 5, o: 0.45 },
        { x: 860, y: 1380, r: 4, o: 0.5 },
        { x: 540, y: 1650, r: 6, o: 0.35 },
        { x: 100, y: 880, r: 3, o: 0.35 },
        { x: 960, y: 920, r: 4, o: 0.4 },
        { x: 420, y: 220, r: 3, o: 0.3 },
      ].map((p, idx) => {
        const pColor = isScene7Phase2
          ? "rgba(251, 113, 133, 0.85)"
          : "rgba(56, 189, 248, 0.75)";
        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: p.r * 2,
              height: p.r * 2,
              borderRadius: "50%",
              backgroundColor: pColor,
              opacity: p.o,
              boxShadow: `0 0 14px ${pColor}`,
              transform: `translateY(${Math.sin((frame * Math.PI) / 45 + idx) * 20}px)`,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
