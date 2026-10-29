import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Award, CheckCircle2, Flame, Layers, Sparkles } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * TEMPLATE SCENE 4: CLIMAX SUMMARY & CALL-TO-ACTION
 * ========================================================
 * Menggabungkan konsep visual dinamis dari Portfolio & DontTestMe:
 * - Camera pull-back macro view transition
 * - Dual comparative Bento Grid dengan staggered entrance
 * - Breathing celebratory pill badge (sine scale & glowing aura)
 * - Animated rotating border shimmer
 * - Konten placeholder: Lorem Ipsum profesional
 */
export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frame offset for Scene 4 (Global frames 280 - 300)
  const relFrame = Math.max(0, frame - 280);

  // 1. Entrance spring
  const sEntrance = spring({ frame: relFrame - 1, fps, config: { damping: 12, mass: 0.45, stiffness: 120 } });

  // 2. Dual Column Staggered Springs
  const sCol1 = spring({ frame: relFrame - 4, fps, config: { damping: 13, mass: 0.45 } });
  const sCol2 = spring({ frame: relFrame - 8, fps, config: { damping: 13, mass: 0.45 } });

  // 3. CTA Breathing Pulse
  const pulseScale = 1 + Math.sin(frame * 0.25) * 0.04;
  const pulseGlow = 0.4 + Math.sin(frame * 0.25) * 0.15;

  return (
    <div
      style={{
        transform: `scale(${sEntrance})`,
        opacity: sEntrance,
        width: "100%",
      }}
    >
      <SceneContainer
        sceneNumber="04"
        tag="LOREM // FINAL SUMMARY"
        title="EXCEPTEUR SINT OCCAECAT"
        subtitle="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        accentColor="#f59e0b"
        icon={Sparkles}
        footerNote="SCENE 4 // SUMMARY CLIMAX & CTA"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
          }}
        >
          {/* Symmetrical Dual Bento Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {/* Left Bento: Primary Takeaways */}
            <div
              style={{
                transform: `scale(${sCol1})`,
                opacity: sCol1,
                backgroundColor: "rgba(245, 158, 11, 0.08)",
                border: "1.5px solid rgba(245, 158, 11, 0.35)",
                borderRadius: 20,
                padding: "22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 900, color: "#f59e0b", letterSpacing: 1, display: "flex", alignItems: "center", gap: 8 }}>
                <Flame size={18} />
                <span>LOREM PILLAR A:</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: TECH_COLORS.textPrimary }}>
                <CheckCircle2 size={18} color="#f59e0b" />
                <span>Adipiscing elit sed do eiusmod</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: TECH_COLORS.textPrimary }}>
                <CheckCircle2 size={18} color="#f59e0b" />
                <span>Tempor incididunt ut labore</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: TECH_COLORS.textPrimary }}>
                <CheckCircle2 size={18} color="#f59e0b" />
                <span>Dolore magna aliqua ut enim</span>
              </div>
            </div>

            {/* Right Bento: Secondary Takeaways */}
            <div
              style={{
                transform: `scale(${sCol2})`,
                opacity: sCol2,
                backgroundColor: "rgba(6, 182, 212, 0.08)",
                border: "1.5px solid rgba(6, 182, 212, 0.35)",
                borderRadius: 20,
                padding: "22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 900, color: "#06b6d4", letterSpacing: 1, display: "flex", alignItems: "center", gap: 8 }}>
                <Layers size={18} />
                <span>IPSUM PILLAR B:</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: TECH_COLORS.textPrimary }}>
                <CheckCircle2 size={18} color="#06b6d4" />
                <span>Minim veniam quis nostrud</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: TECH_COLORS.textPrimary }}>
                <CheckCircle2 size={18} color="#06b6d4" />
                <span>Exercitation ullamco laboris</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: TECH_COLORS.textPrimary }}>
                <CheckCircle2 size={18} color="#06b6d4" />
                <span>Aliquip ex ea commodo consequat</span>
              </div>
            </div>
          </div>

          {/* Final Callout Banner with Breathing Animation */}
          <div
            style={{
              transform: `scale(${pulseScale})`,
              backgroundColor: "rgba(245, 158, 11, 0.12)",
              border: "1.5px solid rgba(245, 158, 11, 0.5)",
              boxShadow: `0 0 35px rgba(245, 158, 11, ${pulseGlow})`,
              borderRadius: 20,
              padding: "18px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Award size={24} color="#f59e0b" />
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                  Lorem Ipsum Showcase Concluded
                </div>
                <div style={{ fontSize: 13, color: TECH_COLORS.textSecondary }}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "8px 18px",
                borderRadius: 16,
                backgroundColor: "#f59e0b",
                color: "#030712",
                fontFamily: "monospace",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              FINISH ✨
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};

export const Scene04 = Scene4;
