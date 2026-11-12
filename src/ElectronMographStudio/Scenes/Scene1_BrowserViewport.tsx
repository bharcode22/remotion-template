import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Globe, Lock } from "lucide-react";
import { MAIN_FONT_FAMILY, STUDIO_GLASS, STUDIO_THEME } from "../constants";
import { KineticText } from "../Components/KineticText";

export const Scene1_BrowserViewport: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90, mass: 0.9 },
  });

  const enterY = interpolate(enterSpring, [0, 1], [260, 0]);
  const enterScale = interpolate(enterSpring, [0, 1], [0.88, 1]);

  // Gentle level vertical float (zero rotation!)
  const idleY = Math.sin(frame * 0.06) * 5;

  // Typing effect in URL
  const fullUrl = "https://app.dashboard.io";
  const charsShown = Math.min(
    fullUrl.length,
    Math.floor(
      interpolate(frame, [10, 45], [0, fullUrl.length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );
  const currentUrl = fullUrl.slice(0, charsShown);

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: 1920,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: MAIN_FONT_FAMILY,
      }}
    >
      {/* 1. KINETIC TITLE ABOVE (Apple Frosted Glass Pill & Clean Typography) */}
      <div
        style={{
          position: "absolute",
          top: 340,
          width: 860,
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 22px",
            borderRadius: 999,
            background: STUDIO_GLASS.surfaceElevated,
            border: STUDIO_GLASS.borderElevated,
            backdropFilter: STUDIO_GLASS.backdropFilterLight,
            boxShadow: STUDIO_GLASS.glassShadow,
            color: STUDIO_THEME.appleBlue,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          <Globe size={20} />
          <span>Stage 01 • Web Native</span>
        </div>

        <KineticText
          text="TERLANJUR BIKIN WEB APP?"
          fontSize={72}
          fontWeight={900}
          color={STUDIO_THEME.textPrimary}
          highlightWords={["WEB", "APP?"]}
          highlightColor={STUDIO_THEME.appleBlue}
          delay={6}
          glow={false}
        />
      </div>

      {/* 2. APPLE PRO FROSTED GLASS BROWSER VIEWPORT */}
      <div
        style={{
          position: "absolute",
          top: 680,
          width: 860,
          height: 640,
          transform: `translateY(${enterY + idleY}px) scale(${enterScale})`,
        }}
      >
        {/* Browser Shell (Frosted Glass with Specular Edge Bevel) */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 32,
            background: STUDIO_GLASS.glassGradientCard,
            backdropFilter: STUDIO_GLASS.backdropFilter,
            border: STUDIO_GLASS.borderElevated,
            boxShadow: STUDIO_GLASS.glassShadowElevated,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Safari Frosted Header Bar */}
          <div
            style={{
              height: 68,
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              padding: "0 28px",
              gap: 20,
            }}
          >
            {/* macOS Window Controls */}
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#FF5F56", boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4)" }} />
              <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#FFBD2E", boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4)" }} />
              <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#27C93F", boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4)" }} />
            </div>

            {/* Address Bar (Translucent Glass Pill) */}
            <div
              style={{
                flex: 1,
                height: 42,
                borderRadius: 14,
                background: "rgba(255, 255, 255, 0.07)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                display: "flex",
                alignItems: "center",
                padding: "0 18px",
                gap: 12,
                color: "#86868B",
                fontSize: 17,
                fontFamily: "monospace",
              }}
            >
              <Lock size={15} color={STUDIO_THEME.appleBlue} />
              <span style={{ color: "#F5F5F7", fontWeight: 600 }}>{currentUrl}</span>
              <span
                style={{
                  width: 2,
                  height: 18,
                  background: STUDIO_THEME.appleBlue,
                  opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0,
                }}
              />
            </div>
          </div>

          {/* Browser Interior Canvas (Frosted Acrylic Substrate) */}
          <div
            style={{
              flex: 1,
              padding: 32,
              display: "flex",
              gap: 24,
              backgroundColor: "rgba(10, 10, 14, 0.60)",
            }}
          >
            {/* Sidebar Mock (Frosted Glass Panel) */}
            <div
              style={{
                width: 180,
                borderRadius: 18,
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: 18,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[80, 110, 95, 120].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 14,
                    width: `${w}%`,
                    borderRadius: 6,
                    background: i === 0 ? "rgba(41, 151, 255, 0.35)" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              ))}
            </div>

            {/* Content Area Mock */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* Stat Row (Frosted Glass Mini Cards) */}
              <div style={{ display: "flex", gap: 16 }}>
                {[1, 2].map((k) => (
                  <div
                    key={k}
                    style={{
                      flex: 1,
                      height: 100,
                      borderRadius: 18,
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                      padding: "16px 20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        height: 10,
                        width: "50%",
                        background: "rgba(255, 255, 255, 0.15)",
                        borderRadius: 4,
                      }}
                    />
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#F5F5F7" }}>
                      {k === 1 ? "+84.2k" : "99.98%"}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Bars */}
              <div
                style={{
                  flex: 1,
                  borderRadius: 20,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 14,
                  padding: "24px 28px",
                }}
              >
                {[40, 65, 45, 80, 60, 95, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h * 0.75}%`,
                      borderRadius: "6px 6px 0 0",
                      background:
                        i >= 5
                          ? "linear-gradient(180deg, #2997FF 0%, #0064D2 100%)"
                          : "rgba(255, 255, 255, 0.12)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
