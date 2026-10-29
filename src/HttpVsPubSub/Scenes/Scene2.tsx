import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  Activity,
  ArrowLeftRight,
  GitFork,
  Laptop,
  Radio,
  Server,
  Users,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * SCENE 2: OVERVIEW (DUAL PARADIGM: HTTP VS PUB/SUB)
 * Naskah: "Secara umum, ada 2 cara, yaitu HTTP dan Pub/Sub."
 * ========================================================
 * - Staggered Internal Entrance:
 *   • relFrame 0  : Card HTTP meluncur masuk dari kiri-bawah
 *   • relFrame 5  : Card Pub/Sub meluncur masuk dari kanan-bawah (jeda ritmik)
 *   • relFrame 10 : Tag badges meluncur naik
 *   • relFrame 15 : Bottom HUD Telemetry meluncur naik dari bawah
 * - Spotlight Dinamis tersinkronisasi narasi voiceover:
 *   • relFrame 35-65 : Sorotan fokus ke HTTP
 *   • relFrame 65-90 : Sorotan fokus ke Pub/Sub
 */
export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset relatif Scene 2 (Global frame 120 - 210)
  const relFrame = Math.max(0, frame - 120);

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. STAGGERED CASCADING SPRINGS
  // ─────────────────────────────────────────────────────────────────────────────
  const springConfig = { damping: 16, mass: 0.6, stiffness: 110 };

  // A. Card HTTP (Kiri) — Mulai relFrame 0
  const sHttp = spring({ frame: relFrame, fps, config: springConfig });
  const httpTranslateX = interpolate(sHttp, [0, 1], [-45, 0]);
  const httpTranslateY = interpolate(sHttp, [0, 1], [25, 0]);
  const httpOpacity = sHttp;

  // B. Card Pub/Sub (Kanan) — Mulai relFrame 5 (Staggered Delay)
  const sPubSub = spring({ frame: Math.max(0, relFrame - 5), fps, config: springConfig });
  const pubSubTranslateX = interpolate(sPubSub, [0, 1], [45, 0]);
  const pubSubTranslateY = interpolate(sPubSub, [0, 1], [25, 0]);
  const pubSubOpacity = sPubSub;

  // C. Sub-tags inside cards — Mulai relFrame 10
  const sTags = spring({ frame: Math.max(0, relFrame - 10), fps, config: springConfig });
  const tagsTranslateY = interpolate(sTags, [0, 1], [15, 0]);
  const tagsOpacity = sTags;

  // D. Bottom Telemetry HUD — Mulai relFrame 15
  const sHud = spring({ frame: Math.max(0, relFrame - 15), fps, config: springConfig });
  const hudTranslateY = interpolate(sHud, [0, 1], [30, 0]);
  const hudOpacity = sHud;

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. SINKRONISASI FASE SOROTAN NARASI (VOICEOVER)
  // ─────────────────────────────────────────────────────────────────────────────
  const isHttpFocus = relFrame >= 35 && relFrame < 65;
  const isPubSubFocus = relFrame >= 65;

  const httpBorderOpacity = isHttpFocus ? 0.95 : 0.35;
  const httpGlowOpacity = isHttpFocus ? 0.35 : 0.12;

  const pubSubBorderOpacity = isPubSubFocus ? 0.95 : 0.35;
  const pubSubGlowOpacity = isPubSubFocus ? 0.35 : 0.12;

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. ANIMASI ELEMEN INTERNAL KARTU
  // ─────────────────────────────────────────────────────────────────────────────
  // Animasi Partikel HTTP (Request ➔ & ◄ Response bolak-balik)
  const httpBeamProgress = (relFrame * 0.05) % 1;
  const reqPacketX = interpolate(httpBeamProgress, [0, 1], [20, 140]);
  const resPacketX = interpolate(httpBeamProgress, [0, 1], [140, 20]);
  const httpDashOffset = -(relFrame * 6) % 36;

  // Animasi Gelombang Broadcast Pub/Sub (Concentric ripple waves)
  const wave1Scale = 1 + ((relFrame * 0.06) % 1) * 1.5;
  const wave1Opacity = interpolate((relFrame * 0.06) % 1, [0, 0.7, 1], [0.7, 0.25, 0]);

  const wave2Scale = 1 + (((relFrame + 10) * 0.06) % 1) * 1.5;
  const wave2Opacity = interpolate(((relFrame + 10) * 0.06) % 1, [0, 0.7, 1], [0.7, 0.25, 0]);

  // Dynamic Status Text sesuai voiceover
  let hudTitle = "DUAL PARADIGM OVERVIEW";
  let hudSubtitle = "Secara umum, komunikasi aplikasi terbagi menjadi 2 cara:";
  let hudBadge = "2 METODE";

  if (isPubSubFocus) {
    hudTitle = "PARADIGMA 2: PUB / SUB";
    hudSubtitle = "Metode 2: Model Publisher dan Subscriber (Event-Driven)";
    hudBadge = "PUB / SUB";
  } else if (isHttpFocus) {
    hudTitle = "PARADIGMA 1: HTTP";
    hudSubtitle = "Metode 1: Protokol Request & Response (Direct Client-Server)";
    hudBadge = "HTTP";
  }

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="02"
        tag="OVERVIEW // 2 METODE UTAMA"
        title="SECARA UMUM, ADA 2 CARA"
        subtitle="Yaitu protokol HTTP dan arsitektur Pub/Sub."
        accentColor="#06b6d4"
        icon={GitFork}
        hideParentCard={true}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            width: "100%",
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              DUAL COMPARISON GRID: HTTP (KIRI) VS PUB/SUB (KANAN)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
              width: "100%",
            }}
          >
            {/* ═══════════════════════════════════════════════════════════
                KARTU 1: PROTOKOL HTTP (Direct Request-Response)
                Meluncur masuk dari Kiri-Bawah
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.88)",
                border: `2px solid rgba(6, 182, 212, ${httpBorderOpacity})`,
                borderRadius: 22,
                padding: "26px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxShadow: `0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(6, 182, 212, ${httpGlowOpacity})`,
                position: "relative",
                overflow: "hidden",
                transform: `translate3d(${httpTranslateX}px, ${httpTranslateY}px, 0)`,
                opacity: httpOpacity,
              }}
            >
              {/* Card Header Pill */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(6, 182, 212, 0.15)",
                    border: "1px solid rgba(6, 182, 212, 0.4)",
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#38bdf8",
                  }}
                >
                  CARA 01
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#06b6d4",
                    letterSpacing: 1,
                  }}
                >
                  1-TO-1 DIRECT
                </div>
              </div>

              {/* Title & Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    backgroundColor: "rgba(6, 182, 212, 0.15)",
                    border: "1.5px solid #06b6d4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowLeftRight size={24} color="#06b6d4" />
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 22,
                      fontWeight: 950,
                      color: "#f8fafc",
                    }}
                  >
                    HTTP
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#38bdf8",
                    }}
                  >
                    Req & Response
                  </div>
                </div>
              </div>

              {/* Visual Simulation: Client <-> Server */}
              <div
                style={{
                  backgroundColor: "rgba(6, 182, 212, 0.05)",
                  border: "1px dashed rgba(6, 182, 212, 0.3)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  minHeight: 82,
                }}
              >
                {/* Client Mini Node */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
                  <Laptop size={24} color="#38bdf8" />
                  <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                    CLIENT
                  </span>
                </div>

                {/* Animated Beam Between Nodes */}
                <svg
                  width="160"
                  height="40"
                  viewBox="0 0 160 40"
                  style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
                >
                  <line
                    x1="20"
                    y1="20"
                    x2="140"
                    y2="20"
                    stroke="#06b6d4"
                    strokeWidth="2.5"
                    strokeDasharray="6 8"
                    strokeDashoffset={httpDashOffset}
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  {/* Request packet (blue) */}
                  <circle cx={reqPacketX} cy="14" r="3.5" fill="#38bdf8" />
                  {/* Response packet (cyan) */}
                  <circle cx={resPacketX} cy="26" r="3.5" fill="#22d3ee" />
                </svg>

                {/* Server Mini Node */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
                  <Server size={24} color="#06b6d4" />
                  <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                    SERVER
                  </span>
                </div>
              </div>

              {/* Tag Badges with Staggered Entrance */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  transform: `translate3d(0, ${tagsTranslateY}px, 0)`,
                  opacity: tagsOpacity,
                }}
              >
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#cbd5e1",
                  }}
                >
                  ⚡ Direct Synchronous
                </span>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#cbd5e1",
                  }}
                >
                  🔗 Request - Response
                </span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                KARTU 2: ARSITEKTUR PUB/SUB (1-to-Many Event Broadcast)
                Meluncur masuk dari Kanan-Bawah (Jeda 5 frame)
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.88)",
                border: `2px solid rgba(236, 72, 153, ${pubSubBorderOpacity})`,
                borderRadius: 22,
                padding: "26px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxShadow: `0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(236, 72, 153, ${pubSubGlowOpacity})`,
                position: "relative",
                overflow: "hidden",
                transform: `translate3d(${pubSubTranslateX}px, ${pubSubTranslateY}px, 0)`,
                opacity: pubSubOpacity,
              }}
            >
              {/* Card Header Pill */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(236, 72, 153, 0.15)",
                    border: "1px solid rgba(236, 72, 153, 0.4)",
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#f472b6",
                  }}
                >
                  CARA 02
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#ec4899",
                    letterSpacing: 1,
                  }}
                >
                  1-TO-MANY ASYNC
                </div>
              </div>

              {/* Title & Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    backgroundColor: "rgba(236, 72, 153, 0.15)",
                    border: "1.5px solid #ec4899",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Radio size={24} color="#ec4899" />
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 22,
                      fontWeight: 950,
                      color: "#f8fafc",
                    }}
                  >
                    PUB / SUB
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#f472b6",
                    }}
                  >
                    Publisher & Sub
                  </div>
                </div>
              </div>

              {/* Visual Simulation: Publisher -> Ripple Broadcast -> Subscribers */}
              <div
                style={{
                  backgroundColor: "rgba(236, 72, 153, 0.05)",
                  border: "1px dashed rgba(236, 72, 153, 0.3)",
                  borderRadius: 16,
                  padding: "16px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  minHeight: 82,
                }}
              >
                {/* Publisher Node with Ripple */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
                  {/* Ripple Wave 1 */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "50%",
                      transform: `translate(-50%, -50%) scale(${wave1Scale})`,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1.5px solid #ec4899",
                      opacity: wave1Opacity,
                      pointerEvents: "none",
                    }}
                  />
                  {/* Ripple Wave 2 */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "50%",
                      transform: `translate(-50%, -50%) scale(${wave2Scale})`,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1.5px solid #f472b6",
                      opacity: wave2Opacity,
                      pointerEvents: "none",
                    }}
                  />
                  <Radio size={24} color="#f472b6" />
                  <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                    PUB
                  </span>
                </div>

                {/* Broadcast Beam Indicator */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 2,
                      background: "linear-gradient(90deg, #ec4899, #f472b6, transparent)",
                    }}
                  />
                  <span style={{ fontFamily: "monospace", fontSize: 9, fontWeight: 800, color: "#f472b6" }}>
                    EVENT TOPIC
                  </span>
                </div>

                {/* Subscribers Cluster */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
                  <Users size={24} color="#ec4899" />
                  <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 800, color: "#94a3b8" }}>
                    SUBS (1..N)
                  </span>
                </div>
              </div>

              {/* Tag Badges with Staggered Entrance */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  transform: `translate3d(0, ${tagsTranslateY}px, 0)`,
                  opacity: tagsOpacity,
                }}
              >
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#cbd5e1",
                  }}
                >
                  📡 Event-Driven Stream
                </span>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#cbd5e1",
                  }}
                >
                  🔀 Decoupled Systems
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRY BANNER (SINKRON VOICE-OVER)
              Meluncur naik dari Bawah (Mulai relFrame 15)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: `1.5px solid ${isPubSubFocus ? "#ec489980" : "#06b6d480"}`,
              borderRadius: 18,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(16px)",
              transform: `translate3d(0, ${hudTranslateY}px, 0)`,
              opacity: hudOpacity,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: isPubSubFocus ? "rgba(236, 72, 153, 0.2)" : "rgba(6, 182, 212, 0.2)",
                  border: `1px solid ${isPubSubFocus ? "#ec4899" : "#06b6d4"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isPubSubFocus ? (
                  <Radio size={20} color="#f472b6" />
                ) : (
                  <Activity size={20} color="#38bdf8" />
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    color: TECH_COLORS.textMuted,
                    letterSpacing: 1,
                  }}
                >
                  {hudTitle}
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 15,
                    fontWeight: 800,
                    color: isPubSubFocus ? "#f472b6" : "#38bdf8",
                  }}
                >
                  {hudSubtitle}
                </span>
              </div>
            </div>

            {/* Pill Indicator */}
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontFamily: "monospace",
                fontSize: 12,
                fontWeight: 800,
                color: "#f8fafc",
                letterSpacing: 0.5,
              }}
            >
              {hudBadge}
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
