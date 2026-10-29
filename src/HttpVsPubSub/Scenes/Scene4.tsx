import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import {
  Activity,
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  FileCode,
  Laptop,
  Repeat,
  Send,
  Server,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

/**
 * ========================================================
 * SCENE 4: REQUEST & RESPONSE CONCEPT
 * Naskah: "Di http ada istilah Request dan Response"
 * ========================================================
 * - Desain solid tanpa pop-up entrance
 * - Dual Pillars: Request (Indigo) & Response (Emerald)
 * - Animasi partikel panah siklus bolak-balik
 * - Sorotan dinamis tersinkronisasi narasi voiceover:
 *   • relFrame 0-30  : Penjelasan kedua istilah
 *   • relFrame 30-60 : Sorotan fokus ke REQUEST (Client)
 *   • relFrame 60-90 : Sorotan fokus ke RESPONSE (Server)
 */
export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  // Offset relatif Scene 4 (Global frame 350 - 440)
  const relFrame = Math.max(0, frame - 350);

  // 1. Sinkronisasi Fase Sorotan Narasi
  const isRequestFocus = relFrame >= 28 && relFrame < 58;
  const isResponseFocus = relFrame >= 58;

  const reqBorderOpacity = isRequestFocus ? 0.95 : 0.35;
  const reqGlowOpacity = isRequestFocus ? 0.4 : 0.12;

  const resBorderOpacity = isResponseFocus ? 0.95 : 0.35;
  const resGlowOpacity = isResponseFocus ? 0.4 : 0.12;

  // 2. Animasi Partikel Pulsa Siklus Data (Looping Request -> Response)
  const reqPulseY = interpolate((relFrame * 0.05) % 1, [0, 1], [-6, 6]);
  const resPulseY = interpolate(((relFrame + 10) * 0.05) % 1, [0, 1], [6, -6]);

  // Dynamic HUD Status Text
  let hudTitle = "HTTP TWO CORE PILLARS";
  let hudSubtitle = "Di protokol HTTP, komunikasi selalu melibatkan 2 istilah inti:";
  let hudBadge = "DUA PILAR";

  if (isResponseFocus) {
    hudTitle = "PILAR 2: RESPONSE (BALASAN)";
    hudSubtitle = "Server memproses data dan mengembalikan jawaban berupa HTTP Response.";
    hudBadge = "2. RESPONSE";
  } else if (isRequestFocus) {
    hudTitle = "PILAR 1: REQUEST (PERMINTAAN)";
    hudSubtitle = "Client mengambil inisiatif mengirimkan permintaan berupa HTTP Request.";
    hudBadge = "1. REQUEST";
  }

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="04"
        tag="KONSEP HTTP // DUA PILAR"
        title="REQUEST & RESPONSE"
        subtitle="Di HTTP selalu ada dua istilah kunci yang berpasangan dalam satu siklus."
        accentColor="#6366f1"
        icon={Repeat}
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
              DUAL PILLARS BENTO GRID: REQUEST (KIRI) VS RESPONSE (KANAN)
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
                PILAR 1: REQUEST (Client Outbound)
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.88)",
                border: `2px solid rgba(99, 102, 241, ${reqBorderOpacity})`,
                borderRadius: 22,
                padding: "26px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxShadow: `0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, ${reqGlowOpacity})`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Pillar Header */}
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
                    backgroundColor: "rgba(99, 102, 241, 0.15)",
                    border: "1px solid rgba(99, 102, 241, 0.4)",
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#a5b4fc",
                  }}
                >
                  PILAR 01
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#818cf8",
                    letterSpacing: 1,
                  }}
                >
                  OUTBOUND // CLIENT
                </div>
              </div>

              {/* Title & Icon */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 16,
                    backgroundColor: "rgba(99, 102, 241, 0.16)",
                    border: "1.5px solid #818cf8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `translateY(${reqPulseY}px)`,
                  }}
                >
                  <Send size={24} color="#818cf8" />
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
                    REQUEST
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#a5b4fc",
                    }}
                  >
                    Permintaan Data
                  </div>
                </div>
              </div>

              {/* Interactive Payload Box */}
              <div
                style={{
                  backgroundColor: "rgba(99, 102, 241, 0.05)",
                  border: "1px dashed rgba(99, 102, 241, 0.35)",
                  borderRadius: 16,
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#818cf8" }}>
                  <Laptop size={14} />
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800 }}>
                    ASAL: CLIENT / BROWSER
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#e2e8f0",
                    lineHeight: 1.5,
                  }}
                >
                  <div>• <span style={{ color: "#38bdf8" }}>Action:</span> GET /users</div>
                  <div>• <span style={{ color: "#38bdf8" }}>Auth:</span> Bearer Token</div>
                </div>
              </div>

              {/* Feature Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#cbd5e1",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <ArrowUpRight size={12} color="#818cf8" /> Langkah 1: Meminta
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
                  Inisiator: Client
                </span>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                PILAR 2: RESPONSE (Server Inbound)
            ════════════════════════════════════════════════════════════ */}
            <div
              style={{
                backgroundColor: "rgba(10, 15, 29, 0.88)",
                border: `2px solid rgba(16, 185, 129, ${resBorderOpacity})`,
                borderRadius: 22,
                padding: "26px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxShadow: `0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, ${resGlowOpacity})`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Pillar Header */}
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
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    fontFamily: "monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#6ee7b7",
                  }}
                >
                  PILAR 02
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#10b981",
                    letterSpacing: 1,
                  }}
                >
                  INBOUND // SERVER
                </div>
              </div>

              {/* Title & Icon */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 185, 129, 0.16)",
                    border: "1.5px solid #10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `translateY(${resPulseY}px)`,
                  }}
                >
                  <CheckCircle2 size={24} color="#10b981" />
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
                    RESPONSE
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#6ee7b7",
                    }}
                  >
                    Balasan Jawaban
                  </div>
                </div>
              </div>

              {/* Interactive Payload Box */}
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.05)",
                  border: "1px dashed rgba(16, 185, 129, 0.35)",
                  borderRadius: 16,
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#34d399" }}>
                  <Server size={14} />
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800 }}>
                    SUMBER: SERVER / CLOUD
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#e2e8f0",
                    lineHeight: 1.5,
                  }}
                >
                  <div>• <span style={{ color: "#34d399" }}>Status:</span> 200 OK</div>
                  <div>• <span style={{ color: "#34d399" }}>Data:</span> JSON Body Payload</div>
                </div>
              </div>

              {/* Feature Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#cbd5e1",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <ArrowDownLeft size={12} color="#10b981" /> Langkah 2: Membalas
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
                  Pembalas: Server
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRI BANNER (SINKRON VOICE-OVER)
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: `1.5px solid ${isResponseFocus ? "#10b98180" : "#6366f180"}`,
              borderRadius: 18,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: isResponseFocus ? "rgba(16, 185, 129, 0.2)" : "rgba(99, 102, 241, 0.2)",
                  border: `1px solid ${isResponseFocus ? "#10b981" : "#6366f1"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isResponseFocus ? (
                  <FileCode size={20} color="#6ee7b7" />
                ) : (
                  <Activity size={20} color="#a5b4fc" />
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
                    color: isResponseFocus ? "#6ee7b7" : "#a5b4fc",
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
