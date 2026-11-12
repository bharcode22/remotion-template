import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Check, MoreHorizontal, Sparkles } from "lucide-react";
import { STUDIO_COLORS } from "../constants";
import { GlassMographStudioProps } from "../types";

interface Floating3DCardProps extends GlassMographStudioProps {
  onMotionState?: (elevation: number, tiltX: number, tiltY: number) => void;
}

export const Floating3DCard: React.FC<Floating3DCardProps> = ({
  handle = "motionthekx",
  name = "thekx",
  bio = "motion graphics showcased by @thekx_",
  primaryButtonText = "Follow",
  primaryButtonActiveText = "Following",
  secondaryButtonText = "Message",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Snappy Physics Entrance (0 - 45 frames) with overshoot bounce
  const entrance = spring({
    frame,
    fps,
    config: {
      damping: 12,     // lower damping = more lively overshoot bounce
      mass: 0.85,
      stiffness: 95,
      overshootClamping: false,
    },
  });

  const enterY = interpolate(entrance, [0, 1], [650, 0]);
  const enterRotateX = interpolate(entrance, [0, 1], [38, 0]);
  const enterRotateY = interpolate(entrance, [0, 1], [-22, 0]);
  const enterScale = interpolate(entrance, [0, 1], [0.65, 1.0]);

  // 2. Organic Idle 3D Gyro / Floating Levitation (Continuous sine/cosine)
  const idleY = Math.sin(frame * 0.045) * 16;
  const idleRotateX = Math.sin(frame * 0.038) * 5.5;
  const idleRotateY = Math.cos(frame * 0.032) * 7.5;

  // Composite 3D transformation
  const currentY = enterY + idleY;
  const currentRotateX = enterRotateX + idleRotateX;
  const currentRotateY = enterRotateY + idleRotateY;
  const currentScale = enterScale;

  // 3. Interactive Button Click State (Frames 78+)
  const isClicked = frame >= 80;
  const clickAnim = spring({
    frame: frame - 76,
    fps,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });

  const buttonScale = frame >= 76 && frame <= 92
    ? interpolate(clickAnim, [0, 0.5, 1], [1.0, 0.90, 1.0])
    : 1.0;

  // 4. Glossy Specular Light Sweep (Frame 95 - 135)
  const sweepProgress = interpolate(frame, [95, 135], [-120, 220], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 740,
        height: 430,
        marginLeft: -370,
        marginTop: -215,
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      {/* The 3D Rotating Slab Body */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 36,
          background: `linear-gradient(145deg, rgba(22, 27, 38, 0.96) 0%, rgba(12, 14, 20, 0.98) 100%)`,
          backdropFilter: "blur(40px)",
          border: `1.5px solid ${STUDIO_COLORS.cardBorder}`,
          boxShadow: `
            0 30px 60px -15px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(255, 255, 255, 0.08) inset,
            0 1px 2px rgba(255, 255, 255, 0.25) inset
          `,
          transform: `
            translateY(${currentY}px)
            rotateX(${currentRotateX}deg)
            rotateY(${currentRotateY}deg)
            scale(${currentScale})
          `,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          position: "relative",
          overflow: "hidden",
          padding: "36px 42px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Top Rim Specular Light Edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(90deg, transparent 5%, rgba(255, 255, 255, 0.45) 50%, transparent 95%)",
            pointerEvents: "none",
          }}
        />

        {/* Diagonal Glossy Light Reflection Sweep */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: `${sweepProgress}%`,
            width: 140,
            height: 800,
            background:
              "linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.18) 50%, transparent 80%)",
            transform: "rotate(25deg)",
            pointerEvents: "none",
          }}
        />

        {/* ================= CARD HEADER ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: "translateZ(25px)", // 3D Elevation
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: 26,
                fontWeight: 800,
                color: STUDIO_COLORS.textPrimary,
                letterSpacing: "-0.02em",
              }}
            >
              {handle}
            </span>
            {/* Verified Badge */}
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: STUDIO_COLORS.verifiedBlue,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check size={14} color="#0F172A" strokeWidth={3.5} />
            </div>
          </div>

          {/* More options 3 dots */}
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MoreHorizontal size={20} color="#94A3B8" />
          </div>
        </div>

        {/* ================= CARD MIDDLE (AVATAR + BIO) ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            transform: "translateZ(35px)", // Elevated higher for 3D depth
          }}
        >
          {/* 3D Elevated Avatar */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              padding: 3,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
              flexShrink: 0,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "#0F172A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Stylized Avatar Illustration */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  backgroundColor: "#FCD34D",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                }}
              >
                {/* Hair / Beard stylized */}
                <div
                  style={{
                    position: "absolute",
                    top: -6,
                    width: 62,
                    height: 28,
                    borderRadius: "16px 16px 0 0",
                    backgroundColor: "#1E293B",
                  }}
                />
                <Sparkles size={24} color="#0F172A" />
              </div>
            </div>
          </div>

          {/* Name & Bio Typography */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: STUDIO_COLORS.textPrimary,
              }}
            >
              {name}
            </span>
            <p
              style={{
                margin: 0,
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: 18,
                lineHeight: 1.45,
                fontWeight: 450,
                color: STUDIO_COLORS.textSecondary,
                maxWidth: 480,
              }}
            >
              {bio}
            </p>
          </div>
        </div>

        {/* ================= CARD BOTTOM (ACTION BUTTONS) ================= */}
        <div
          style={{
            display: "flex",
            gap: 16,
            transform: "translateZ(45px)", // Frontmost layer
          }}
        >
          {/* Primary Action Button (Follow / Following) */}
          <div
            style={{
              flex: 1,
              height: 58,
              borderRadius: 29,
              backgroundColor: isClicked
                ? STUDIO_COLORS.primaryBtnActive
                : STUDIO_COLORS.primaryBtn,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: 19,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              boxShadow: isClicked
                ? "0 6px 16px rgba(5, 150, 105, 0.4)"
                : "0 10px 24px rgba(37, 99, 235, 0.45)",
              transform: `scale(${buttonScale})`,
              transition: "background-color 0.25s ease",
              cursor: "pointer",
            }}
          >
            {isClicked ? (
              <>
                <Check size={20} strokeWidth={3} />
                <span>{primaryButtonActiveText}</span>
              </>
            ) : (
              <span>{primaryButtonText}</span>
            )}
          </div>

          {/* Secondary Action Button (Message) */}
          <div
            style={{
              flex: 1,
              height: 58,
              borderRadius: 29,
              backgroundColor: STUDIO_COLORS.secondaryBtnBg,
              border: `1px solid ${STUDIO_COLORS.secondaryBtnBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: 19,
              fontWeight: 600,
              color: STUDIO_COLORS.textPrimary,
              letterSpacing: "-0.01em",
              backdropFilter: "blur(12px)",
            }}
          >
            <span>{secondaryButtonText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
