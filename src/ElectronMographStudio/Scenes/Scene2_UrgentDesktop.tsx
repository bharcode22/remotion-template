import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AlertCircle, Clock, Monitor, Zap } from "lucide-react";

export const Scene2_UrgentDesktop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy transition entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 11, mass: 0.8, stiffness: 110 },
  });

  // Sudden urgency camera shake / pulse around frame 15 - 35
  const shake = frame >= 12 && frame <= 36
    ? Math.sin(frame * 1.5) * interpolate(frame, [12, 24, 36], [0, 5, 0])
    : 0;

  const tiltX = Math.sin(frame * 0.05) * 6;
  const tiltY = Math.cos(frame * 0.04) * 8 + shake;

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
          background: "linear-gradient(145deg, rgba(28, 22, 18, 0.96) 0%, rgba(14, 11, 10, 0.98) 100%)",
          backdropFilter: "blur(40px)",
          border: "1.5px solid rgba(245, 158, 11, 0.3)",
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.55), 0 0 40px rgba(245, 158, 11, 0.15) inset",
          transform: `
            scale(${interpolate(entrance, [0, 1], [0.85, 1.0])})
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
          `,
          transformStyle: "preserve-3d",
          padding: "36px 42px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Header Alert */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", transform: "translateZ(25px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: "rgba(245, 158, 11, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AlertCircle size={20} color="#F59E0B" />
            </div>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 20, fontWeight: 800, color: "#F59E0B" }}>
              URGENT REQUIREMENT
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#94A3B8", fontSize: 16 }}>
            <Clock size={16} />
            <span>Mendadak!</span>
          </div>
        </div>

        {/* Center Prompt */}
        <div style={{ display: "flex", alignItems: "center", gap: 26, transform: "translateZ(40px)" }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 25px rgba(245, 158, 11, 0.4)",
            }}
          >
            <Monitor size={48} color="#FFFFFF" />
          </div>

          <div>
            <h2 style={{ margin: 0, fontFamily: "system-ui, sans-serif", fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
              Butuh Desktop App?
            </h2>
            <p style={{ margin: "6px 0 0", fontFamily: "system-ui, sans-serif", fontSize: 20, color: "#FBBF24" }}>
              Klien minta installer .exe & .dmg!
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div
          style={{
            height: 56,
            borderRadius: 28,
            backgroundColor: "#F59E0B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            fontFamily: "system-ui, sans-serif",
            fontSize: 20,
            fontWeight: 800,
            color: "#0F172A",
            boxShadow: "0 8px 24px rgba(245, 158, 11, 0.4)",
            transform: "translateZ(50px)",
          }}
        >
          <Zap size={22} fill="#0F172A" />
          <span>HARUS RILIS SEKARANG</span>
        </div>
      </div>
    </div>
  );
};
