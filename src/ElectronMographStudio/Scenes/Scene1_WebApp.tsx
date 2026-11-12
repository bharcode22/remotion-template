import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Globe, Layout, ShieldCheck } from "lucide-react";
import { STUDIO_THEME } from "../constants";

export const Scene1_WebApp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring with bounce
  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 95 },
  });

  const enterY = interpolate(entrance, [0, 1], [650, 0]);
  const enterRotateX = interpolate(entrance, [0, 1], [38, 0]);
  const enterRotateY = interpolate(entrance, [0, 1], [-22, 0]);
  const enterScale = interpolate(entrance, [0, 1], [0.65, 1.0]);

  // Organic idle float
  const idleY = Math.sin(frame * 0.05) * 12;
  const idleRotateX = Math.sin(frame * 0.04) * 4;
  const idleRotateY = Math.cos(frame * 0.035) * 6;

  // Exit drift towards Scene 2
  const exitProgress = spring({
    frame: frame - 55,
    fps,
    config: { damping: 15, mass: 0.8 },
  });
  const exitScale = interpolate(exitProgress, [0, 1], [1, 0.95]);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 740,
        height: 440,
        marginLeft: -370,
        marginTop: -220,
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 36,
          background: "linear-gradient(145deg, rgba(22, 27, 38, 0.96) 0%, rgba(12, 14, 20, 0.98) 100%)",
          backdropFilter: "blur(40px)",
          border: `1.5px solid ${STUDIO_THEME.cardBorder}`,
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.55), 0 1px 2px rgba(255, 255, 255, 0.25) inset",
          transform: `
            translateY(${enterY + idleY}px)
            rotateX(${enterRotateX + idleRotateX}deg)
            rotateY(${enterRotateY + idleRotateY}deg)
            scale(${enterScale * exitScale})
          `,
          transformStyle: "preserve-3d",
          padding: "36px 42px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Top Rim Specular */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, transparent 5%, rgba(255, 255, 255, 0.45) 50%, transparent 95%)",
          }}
        />

        {/* Browser Chrome Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", transform: "translateZ(25px)" }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#EF4444" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#10B981" }} />
          </div>
          <div
            style={{
              padding: "6px 18px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              fontFamily: "monospace",
              fontSize: 16,
              color: "#94A3B8",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            localhost:3000
          </div>
          <Globe size={22} color="#64748B" />
        </div>

        {/* Center UI Showcase */}
        <div style={{ display: "flex", alignItems: "center", gap: 26, transform: "translateZ(35px)" }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              background: "linear-gradient(135deg, #2563EB 0%, #00E5FF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 25px rgba(0, 229, 255, 0.35)",
            }}
          >
            <Layout size={48} color="#FFFFFF" />
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 32, fontWeight: 800, color: "#FFFFFF" }}>
                Web Application
              </span>
              <ShieldCheck size={24} color="#00E5FF" />
            </div>
            <p style={{ margin: "6px 0 0", fontFamily: "system-ui, sans-serif", fontSize: 19, color: "#94A3B8" }}>
              React • Vue • Next.js Frontend
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <div
          style={{
            height: 54,
            borderRadius: 27,
            backgroundColor: "rgba(0, 229, 255, 0.12)",
            border: "1px solid rgba(0, 229, 255, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "system-ui, sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#00E5FF",
            transform: "translateZ(45px)",
          }}
        >
          SUDAH TERLANJUR DIBIKIN
        </div>
      </div>
    </div>
  );
};
