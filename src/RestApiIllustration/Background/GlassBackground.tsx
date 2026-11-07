import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { REST_API_COLORS } from "../constants";

const FONT_MONO =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';

export const GlassBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle breathing pulse
  const pulse = Math.sin(frame / 35) * 0.08;

  // Crossfade between GET (Cyan), POST (Emerald), PUT (Amber), and DELETE (Rose)
  // Transition GET -> POST around F260 - F285
  // Transition POST -> PUT around F550 - F575
  // Transition PUT -> DELETE around F840 - F865
  const getAtmosphereWeight = interpolate(frame, [260, 285], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const postAtmosphereWeight = interpolate(
    frame,
    [265, 290, 550, 575],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const putAtmosphereWeight = interpolate(
    frame,
    [550, 575, 840, 865],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const deleteAtmosphereWeight = interpolate(frame, [840, 865], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: REST_API_COLORS.bgDark,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          ATMOSPHERE 1: GET METHOD (DEEP COSMIC NAVY & CYAN GLOW)
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: getAtmosphereWeight,
          pointerEvents: "none",
        }}
      >
        {/* Navy/Cyan Deep Gradient Base */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120% 90% at 50% 12%, #082444 0%, #041224 50%, #02060e 100%)",
          }}
        />

        {/* Cyan Cyber Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            opacity: 0.85,
          }}
        />

        {/* Giant Stylized Typographic Watermark: "GET" */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: FONT_MONO,
            fontSize: 480,
            fontWeight: 900,
            letterSpacing: -15,
            color: "rgba(56, 189, 248, 0.035)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          GET
        </div>

        {/* Top Cyan Ambient Orb */}
        <div
          style={{
            position: "absolute",
            width: 1000,
            height: 700,
            left: "50%",
            top: "16%",
            transform: `translateX(-50%) scale(${1 + pulse})`,
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.12) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Center Cyan Pulse Orb */}
        <div
          style={{
            position: "absolute",
            width: 750,
            height: 500,
            left: "50%",
            top: "50%",
            transform: `translateX(-50%) scale(${1 - pulse})`,
            background:
              "radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, transparent 70%)",
            filter: "blur(85px)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          ATMOSPHERE 2: POST METHOD (DEEP FOREST MATRIX & EMERALD GLOW)
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: postAtmosphereWeight,
          pointerEvents: "none",
        }}
      >
        {/* Forest/Emerald Deep Gradient Base */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120% 90% at 50% 12%, #063521 0%, #031c12 50%, #010a06 100%)",
          }}
        />

        {/* Emerald Cyber Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            opacity: 0.85,
          }}
        />

        {/* Giant Stylized Typographic Watermark: "POST" */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: FONT_MONO,
            fontSize: 420,
            fontWeight: 900,
            letterSpacing: -12,
            color: "rgba(16, 185, 129, 0.04)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          POST
        </div>

        {/* Top Emerald Ambient Orb */}
        <div
          style={{
            position: "absolute",
            width: 1000,
            height: 700,
            left: "50%",
            top: "16%",
            transform: `translateX(-50%) scale(${1 + pulse})`,
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(5, 150, 105, 0.12) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Center Emerald Pulse Orb */}
        <div
          style={{
            position: "absolute",
            width: 750,
            height: 500,
            left: "50%",
            top: "50%",
            transform: `translateX(-50%) scale(${1 - pulse})`,
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, transparent 70%)",
            filter: "blur(85px)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          ATMOSPHERE 3: PUT METHOD (DEEP COGNAC / WARM AMBER & ORANGE GLOW)
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: putAtmosphereWeight,
          pointerEvents: "none",
        }}
      >
        {/* Cognac / Amber Deep Gradient Base */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120% 90% at 50% 12%, #3d1c02 0%, #210d01 50%, #0a0400 100%)",
          }}
        />

        {/* Amber Cyber Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(245, 158, 11, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245, 158, 11, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            opacity: 0.85,
          }}
        />

        {/* Giant Stylized Typographic Watermark: "PUT" */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: FONT_MONO,
            fontSize: 440,
            fontWeight: 900,
            letterSpacing: -12,
            color: "rgba(245, 158, 11, 0.045)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          PUT
        </div>

        {/* Top Amber Ambient Orb */}
        <div
          style={{
            position: "absolute",
            width: 1000,
            height: 700,
            left: "50%",
            top: "16%",
            transform: `translateX(-50%) scale(${1 + pulse})`,
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.12) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Center Amber/Orange Pulse Orb */}
        <div
          style={{
            position: "absolute",
            width: 750,
            height: 500,
            left: "50%",
            top: "50%",
            transform: `translateX(-50%) scale(${1 - pulse})`,
            background:
              "radial-gradient(circle, rgba(234, 88, 12, 0.16) 0%, transparent 70%)",
            filter: "blur(85px)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          ATMOSPHERE 4: DELETE METHOD (DEEP CRIMSON / OBSIDIAN & ROSE GLOW)
          ═══════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: deleteAtmosphereWeight,
          pointerEvents: "none",
        }}
      >
        {/* Deep Crimson Gradient Base */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120% 90% at 50% 12%, #420814 0%, #200409 50%, #0a0103 100%)",
          }}
        />

        {/* Rose Cyber Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(244, 63, 94, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(244, 63, 94, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 85% at 50% 45%, black 40%, transparent 85%)",
            opacity: 0.85,
          }}
        />

        {/* Giant Stylized Typographic Watermark: "DELETE" */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: FONT_MONO,
            fontSize: 340,
            fontWeight: 900,
            letterSpacing: -10,
            color: "rgba(244, 63, 94, 0.045)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          DELETE
        </div>

        {/* Top Rose Ambient Orb */}
        <div
          style={{
            position: "absolute",
            width: 1000,
            height: 700,
            left: "50%",
            top: "16%",
            transform: `translateX(-50%) scale(${1 + pulse})`,
            background:
              "radial-gradient(circle, rgba(244, 63, 94, 0.28) 0%, rgba(225, 29, 72, 0.12) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Center Rose/Red Pulse Orb */}
        <div
          style={{
            position: "absolute",
            width: 750,
            height: 500,
            left: "50%",
            top: "50%",
            transform: `translateX(-50%) scale(${1 - pulse})`,
            background:
              "radial-gradient(circle, rgba(239, 68, 68, 0.16) 0%, transparent 70%)",
            filter: "blur(85px)",
          }}
        />
      </div>

      {/* Middle Backend Shared Violet Ambiance */}
      <div
        style={{
          position: "absolute",
          width: 750,
          height: 480,
          left: "50%",
          top: "47%",
          transform: `translateX(-50%) scale(${1 - pulse * 0.5})`,
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.13) 0%, transparent 70%)",
          filter: "blur(85px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom Database Shared Amber Ambiance */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 500,
          left: "50%",
          top: "80%",
          transform: `translateX(-50%) scale(${1 + pulse * 0.5})`,
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle scanline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.012), rgba(255,255,255,0.012) 2px, transparent 2px, transparent 4px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
