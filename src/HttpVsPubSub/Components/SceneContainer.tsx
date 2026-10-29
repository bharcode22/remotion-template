import React from "react";
import { useCurrentFrame } from "remotion";
import { LucideIcon } from "lucide-react";
import { TECH_COLORS } from "../constants";

export interface SceneContainerProps {
  sceneNumber: string; // e.g. "01", "02", "03", "04"
  tag: string; // e.g. "HOOK & INTRO"
  title: string;
  subtitle: string;
  accentColor: string;
  icon: LucideIcon;
  hideParentCard?: boolean;
  children: React.ReactNode;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
  sceneNumber,
  tag,
  title,
  subtitle,
  accentColor,
  icon: Icon,
  hideParentCard = false,
  children,
}) => {
  const frame = useCurrentFrame();

  // Subtle Keynote levitation and breathing aura
  const floatY = Math.sin(frame * 0.08) * 6;
  const auraScale = 1 + Math.sin(frame * 0.12) * 0.08;
  const auraOpacity = 0.14 + Math.sin(frame * 0.15) * 0.04;

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        overflow: "hidden",
        padding: "160px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 42,
        boxSizing: "border-box",
        transform: `translateY(${floatY}px)`,
      }}
    >
      {/* 0. Keynote Frosted Breathing Aura */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${auraScale})`,
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(139, 92, 246, 0.12) 40%, transparent 70%)`,
          opacity: auraOpacity,
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 1. Large Subtle Watermark Numeral in the Background */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 480,
          fontWeight: 950,
          color: accentColor,
          opacity: 0.045,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
          zIndex: 1,
          letterSpacing: -10,
        }}
      >
        {sceneNumber}
      </div>

      {/* 2. Symmetrical Centered Header with Scene Number Badge */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 18,
          maxWidth: 920,
          width: "100%",
        }}
      >
        {/* Prominent Scene Pill Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 24px",
            borderRadius: 30,
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: `1.5px solid ${accentColor}`,
            boxShadow: `0 0 25px ${accentColor}35`,
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Glowing Scene Number Chip */}
          <div
            style={{
              padding: "4px 10px",
              borderRadius: 14,
              backgroundColor: accentColor,
              color: "#050914",
              fontFamily: "monospace",
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            SCENE {sceneNumber}
          </div>

          <Icon size={20} color={accentColor} />

          <span
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 2,
              color: accentColor,
            }}
          >
            {tag}
          </span>
        </div>

        {/* Big Bold Headline */}
        <h1
          style={{
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 54,
            fontWeight: 950,
            lineHeight: 1.15,
            letterSpacing: -1.5,
            color: TECH_COLORS.textPrimary,
            textShadow: `0 0 40px ${accentColor}40`,
            textAlign: "center",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 25,
            fontWeight: 600,
            color: TECH_COLORS.textSecondary,
            lineHeight: 1.4,
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* 3. Main Glassmorphic Hero Card (Where User Content Renders) */}
      {hideParentCard ? (
        <div style={{ position: "relative", zIndex: 5, maxWidth: 920, width: "100%" }}>
          {children}
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: 920,
            width: "100%",
            backgroundColor: "rgba(10, 15, 29, 0.94)",
            border: `1.5px solid ${accentColor}60`,
            borderRadius: 28,
            padding: "36px 40px",
            boxShadow: `0 24px 60px rgba(0, 0, 0, 0.65), 0 0 35px ${accentColor}25`,
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            boxSizing: "border-box",
          }}
        >
          {/* Card Header Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: accentColor,
                  boxShadow: `0 0 12px ${accentColor}`,
                  transform: `scale(${1 + Math.sin(frame * 0.4) * 0.25})`,
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 17,
                  fontWeight: 800,
                  color: TECH_COLORS.textPrimary,
                  letterSpacing: 1.5,
                }}
              >
                STAGE {sceneNumber} CONTENT
              </span>
            </div>

            <div
              style={{
                padding: "6px 14px",
                borderRadius: 16,
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontFamily: "monospace",
                fontSize: 13,
                fontWeight: 700,
                color: TECH_COLORS.textSecondary,
              }}
            >
              ACTIVE TIMELINE
            </div>
          </div>

          {/* User Content Slot */}
          <div style={{ width: "100%" }}>{children}</div>
        </div>
      )}
    </div>
  );
};

