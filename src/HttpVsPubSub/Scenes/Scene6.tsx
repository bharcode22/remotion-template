import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import {
  ArrowRight,
  Database,
  Layers,
  Radio,
  Share2,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { SceneContainer } from "../Components/SceneContainer";

/**
 * ========================================================
 * SCENE 6: INTRO PUB/SUB (PUBLISHER & SUBSCRIBER)
 * Naskah: "Lalu ada pub sub. Atau publisher dan subscriber"
 * ========================================================
 * - Pengenalan Paradigma Event-Driven (Decoupled Messaging)
 * - 3 Komponen Utama: Publisher (Pengirim) ➔ Broker / Topic Hub ➔ Subscribers (Penerima)
 * - Gelombang denyut neon pink memancar mengantisipasi Scene 7
 */
export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();

  // Offset relatif Scene 6 (Global frame 990 s/d 1140, durasi 150 frame)
  const relFrame = Math.max(0, frame - 990);

  // Denyut aura radar tengah
  const brokerPulse = 1 + Math.sin(relFrame * 0.15) * 0.06;
  const brokerGlow = 0.4 + Math.sin(relFrame * 0.2) * 0.25;

  // Animasi partikel mengalir dari Publisher ke Topic (relFrame 20 - 75)
  const pubFlowProgress = interpolate(relFrame, [20, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Animasi partikel dari Topic ke Subscribers (relFrame 70 - 135)
  const subFlowProgress = interpolate(relFrame, [70, 135], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ width: "100%" }}>
      <SceneContainer
        sceneNumber="06"
        tag="MODUL 2 // PARADIGMA KEDUA"
        title="PUBLISHER & SUBSCRIBER"
        subtitle="Lalu ada Pub/Sub — model komunikasi berbasis penerbitan dan langganan event."
        accentColor="#ec4899"
        icon={Radio}
        hideParentCard={true}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              MAIN ARCHITECTURE CARD: PUBLISHER ➔ BROKER ➔ SUBSCRIBERS
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.94)",
              border: "2px solid rgba(236, 72, 153, 0.5)",
              borderRadius: 24,
              padding: "26px 24px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(236, 72, 153, 0.25)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Header Stage */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Share2 size={16} color="#f472b6" />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#f8fafc",
                    letterSpacing: 1,
                  }}
                >
                  EVENT-DRIVEN PUB/SUB ARCHITECTURE
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  borderRadius: 12,
                  backgroundColor: "rgba(236, 72, 153, 0.15)",
                  border: "1px solid #ec4899",
                }}
              >
                <Zap size={14} color="#f472b6" />
                <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 900, color: "#f472b6" }}>
                  1 SINYAL ➔ BANYAK PENERIMA
                </span>
              </div>
            </div>

            {/* 3 Pillars Visual: PUBLISHER ⟷ BROKER TOPIC ⟷ SUBSCRIBERS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "250px 1fr 270px",
                gap: 16,
                alignItems: "center",
              }}
            >
              {/* 1. PUBLISHER PILLAR */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: "1.5px solid rgba(244, 114, 182, 0.4)",
                  borderRadius: 18,
                  padding: "20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    backgroundColor: "rgba(236, 72, 153, 0.2)",
                    border: "1.5px solid #ec4899",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Database size={26} color="#f472b6" />
                </div>

                <div>
                  <div style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 950, color: "#f8fafc" }}>
                    PUBLISHER
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#f472b6", fontWeight: 700 }}>
                    Penerbit Event
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderRadius: 8,
                    padding: "6px 10px",
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#cbd5e1",
                    lineHeight: 1.5,
                  }}
                >
                  Backend Service yang memancarkan kabar / event tanpa perlu tahu siapa penerimanya.
                </div>
              </div>

              {/* 2. CENTRAL TOPIC BROKER (RADAR HUB) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  position: "relative",
                  padding: "10px",
                }}
              >
                {/* Radar Antenna Icon with Pulse */}
                <div
                  style={{
                    transform: `scale(${brokerPulse})`,
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    backgroundColor: "rgba(236, 72, 153, 0.22)",
                    border: "2px solid #ec4899",
                    boxShadow: `0 0 30px rgba(236, 72, 153, ${brokerGlow})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Radio size={36} color="#f472b6" />
                </div>

                {/* Topic Hub Label */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 950, color: "#f8fafc" }}>
                    TOPIC BROKER
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 10, color: "#fda4af" }}>
                    Pusat Distribusi Pesan
                  </div>
                </div>

                {/* Indicator Dots Stream */}
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: pubFlowProgress > 0.5 ? "#f472b6" : "#475569" }} />
                  <ArrowRight size={14} color="#f472b6" />
                  <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: subFlowProgress > 0.5 ? "#10b981" : "#475569" }} />
                </div>
              </div>

              {/* 3. SUBSCRIBERS PILLAR */}
              <div
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.85)",
                  border: "1.5px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: 18,
                  padding: "20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    border: "1.5px solid #10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Users size={26} color="#34d399" />
                </div>

                <div>
                  <div style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 950, color: "#f8fafc" }}>
                    SUBSCRIBERS
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#34d399", fontWeight: 700 }}>
                    Pelanggan (1..N)
                  </div>
                </div>

                {/* 3 Mini Device Badges */}
                <div style={{ display: "flex", gap: 6 }}>
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      style={{
                        padding: "4px 8px",
                        borderRadius: 6,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Smartphone size={11} color="#34d399" />
                      <span style={{ fontFamily: "monospace", fontSize: 9, color: "#cbd5e1" }}>
                        Client {num}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderRadius: 8,
                    padding: "6px 10px",
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#cbd5e1",
                    lineHeight: 1.5,
                  }}
                >
                  Semua client yang berlangganan topik akan menerima pesan serentak.
                </div>
              </div>
            </div>

            {/* Bottom Insight Pill */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: 12,
                padding: "10px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Layers size={14} color="#f472b6" />
                <span style={{ fontFamily: "monospace", fontSize: 11, color: "#cbd5e1" }}>
                  Sistem Decoupled: Publisher & Subscriber tidak saling terhubung langsung
                </span>
              </div>
              <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 900, color: "#34d399" }}>
                BEBAS DEPENDENSI
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STATUS HUD TELEMETRY BANNER
          ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: "1.5px solid rgba(236, 72, 153, 0.4)",
              borderRadius: 18,
              padding: "16px 22px",
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
                  backgroundColor: "rgba(236, 72, 153, 0.2)",
                  border: "1px solid #ec4899",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={20} color="#f472b6" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94a3b8",
                    letterSpacing: 1,
                  }}
                >
                  MODUL 2 // PENGENALAN PUB/SUB
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#f472b6",
                  }}
                >
                  ➔ LALU ADA PUB/SUB: PUBLISHER DAN SUBSCRIBER.
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
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
              <span>MEKANISME ➔</span>
            </div>
          </div>
        </div>
      </SceneContainer>
    </div>
  );
};
