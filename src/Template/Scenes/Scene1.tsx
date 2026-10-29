import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AlertCircle, CheckCircle2, Cpu, Sparkles } from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * TEMPLATE SCENE 1: HOOK & INTERACTIVE TERMINAL SUB-SCENE
 * ========================================================
 * Menggabungkan konsep visual dinamis dari Portfolio & DontTestMe:
 * - Spring entrance bertingkat (staggered entrance)
 * - Transisi mikro Sub-Scene (Frame 36+)
 * - Terminal macOS interaktif dengan live-typing, blinking cursor & live progress bar
 * - Konten placeholder: Lorem Ipsum profesional
 */
export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Staggered Spring Entrances (Frames 0 - 24)
  const sIntro = spring({ frame: frame - 2, fps, config: { damping: 13, mass: 0.5, stiffness: 110 } });
  const sCard = spring({ frame: frame - 10, fps, config: { damping: 14, mass: 0.55, stiffness: 95 } });

  // 2. Sub-Scene 1.1 Trigger (Frames 36+)
  // Kamera/Scene melakukan punch-in & memunculkan simulator eksekusi
  const isSubScene = frame >= 36;
  const sSub = spring({ frame: frame - 36, fps, config: { damping: 12, mass: 0.45, stiffness: 120 } });

  // 3. Live Letter-by-Letter Typing Effect
  const fullCommand = "lorem run --turbo-cluster --verify";
  const typedLength = Math.min(
    fullCommand.length,
    Math.floor(
      interpolate(frame, [38, 58], [0, fullCommand.length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );
  const commandDisplay = fullCommand.slice(0, typedLength);
  const cursorBlink = Math.sin(frame * 0.4) > 0;

  // 4. Dynamic Counting Progress (0% -> 100%)
  const progressPercent = Math.round(
    interpolate(frame, [46, 74], [0, 100], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Staggered output lines sliding in
  const sLine1 = spring({ frame: frame - 50, fps, config: { damping: 12, mass: 0.4 } });
  const sLine2 = spring({ frame: frame - 60, fps, config: { damping: 12, mass: 0.4 } });

  return (
    <div style={{ transform: `scale(${sIntro})`, opacity: sIntro, width: "100%" }}>
      <SceneContainer
        sceneNumber="01"
        tag="LOREM // HOOK & SIMULATOR"
        title="LOREM IPSUM DOLOR SIT AMET"
        subtitle="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
        accentColor="#10b981"
        icon={AlertCircle}
        footerNote="SCENE 1 // HOOK PHASE & LIVE SUB-SCENE 1.1"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
            transform: `scale(${sCard})`,
          }}
        >
          {/* Phase 1 (Frame < 36): Initial Hook Teaser Banner */}
          {!isSubScene ? (
            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1.5px dashed rgba(16, 185, 129, 0.45)",
                borderRadius: 20,
                padding: "26px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#10b981",
                  fontFamily: "monospace",
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                }}
              >
                <Sparkles size={20} />
                <span>[LOREM INTRO HOOK // WAITING FOR RUNNER]</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: TECH_COLORS.textPrimary,
                  lineHeight: 1.45,
                  maxWidth: 720,
                }}
              >
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?
              </p>
            </div>
          ) : (
            /* Phase 2 (Frame >= 36): SUB-SCENE 1.1 - macOS Interactive Terminal Simulator */
            <div
              style={{
                transform: `scale(${interpolate(sSub, [0, 1], [0.94, 1.0])})`,
                opacity: sSub,
                backgroundColor: "#030712",
                border: "1.5px solid rgba(16, 185, 129, 0.5)",
                borderRadius: 22,
                padding: "22px 26px",
                boxShadow: "0 18px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(16, 185, 129, 0.2)",
                fontFamily: "monospace",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#10b981" }} />
                  <span style={{ fontSize: 13, color: TECH_COLORS.textMuted, marginLeft: 8 }}>
                    subscene-1.1: lorem-runner.sh
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "3px 10px",
                    borderRadius: 12,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#10b981",
                  }}
                >
                  <Cpu size={14} />
                  <span>RUNNING</span>
                </div>
              </div>

              {/* Typing Line */}
              <div style={{ fontSize: 20, color: "#10b981", fontWeight: 700, display: "flex", alignItems: "center" }}>
                <span>$&nbsp;{commandDisplay}</span>
                {cursorBlink && <span style={{ color: "#ffffff", marginLeft: 2 }}>▋</span>}
              </div>

              {/* Staggered Output Rows */}
              {frame >= 50 && (
                <div
                  style={{
                    transform: `translateY(${interpolate(sLine1, [0, 1], [8, 0])}px)`,
                    opacity: sLine1,
                    fontSize: 15,
                    color: TECH_COLORS.textSecondary,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>[INIT] Cluster handshake verified across 12 nodes</span>
                </div>
              )}

              {/* Progress Bar Animation */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: TECH_COLORS.textMuted }}>
                  <span>OPTIMIZATION PROGRESS</span>
                  <span style={{ color: "#10b981", fontWeight: 800 }}>{progressPercent}%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${progressPercent}%`,
                      height: "100%",
                      borderRadius: 4,
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 12px #10b981",
                    }}
                  />
                </div>
              </div>

              {frame >= 60 && (
                <div
                  style={{
                    transform: `translateY(${interpolate(sLine2, [0, 1], [8, 0])}px)`,
                    opacity: sLine2,
                    fontSize: 15,
                    color: "#10b981",
                    fontWeight: 700,
                  }}
                >
                  ⚡ Status: 200 OK — Ready for Phase 2 Transition
                </div>
              )}
            </div>
          )}

          {/* Symmetrical Dual Metric Tiles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                borderRadius: 18,
                padding: "18px 22px",
                textAlign: "center",
              }}
            >
              <span style={{ fontFamily: "monospace", fontSize: 13, color: TECH_COLORS.textMuted }}>
                PARAMETRIC INDEX
              </span>
              <div
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#10b981",
                  marginTop: 4,
                }}
              >
                {Math.round(interpolate(frame, [0, 80], [100, 999]))} ops/s
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 18,
                padding: "18px 22px",
                textAlign: "center",
              }}
            >
              <span style={{ fontFamily: "monospace", fontSize: 13, color: TECH_COLORS.textMuted }}>
                LATENCY DRIFT
              </span>
              <div
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: 28,
                  fontWeight: 900,
                  color: TECH_COLORS.textPrimary,
                  marginTop: 4,
                }}
              >
                0.42 ms
              </div>
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};

export const Scene01 = Scene1;
