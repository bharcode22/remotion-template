import React from "react";
import {
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaBolt,
  FaBroadcastTower,
  FaCheckCircle,
  FaExchangeAlt,
  FaInbox,
  FaShieldAlt,
} from "react-icons/fa";
import { SiRabbitmq } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { RABBITMQ_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TIMELINE (Frames 610 - 800)
  // Line 9 & 10:
  // - "Untuk menyelesaikan masalah ini," (Voice: F615 - F680)
  // - "aku memanfaatkan RabbitMQ sebagai message broker." (Voice: F680 - F795)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F612 - F632)
  const spBadge = spring({
    frame: Math.max(0, frame - 612),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F618 - F648)
  const spHeadline = spring({
    frame: Math.max(0, frame - 618),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Hero RabbitMQ Card Spring (Voice F680: "aku memanfaatkan RabbitMQ...")
  const spHeroCard = spring({
    frame: Math.max(0, frame - 676),
    fps,
    config: { damping: 13, mass: 0.95, stiffness: 110 },
  });

  // 4. Hero RabbitMQ Logo Scale Pulse Spring
  const spLogo = spring({
    frame: Math.max(0, frame - 682),
    fps,
    config: { damping: 11, stiffness: 130, mass: 0.8 },
  });

  // 5. Three Architectural Pillars Spring (F715 - F755)
  const spPillars = spring({
    frame: Math.max(0, frame - 715),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 115 },
  });

  // 6. AMQP Event Pipeline Spring (F745 - F780)
  const spPipeline = spring({
    frame: Math.max(0, frame - 745),
    fps,
    config: { damping: 14, stiffness: 105 },
  });

  // Active States
  const isHeroActive = frame >= 676;
  const isPillarsActive = frame >= 715;
  const isPipelineActive = frame >= 745;

  // Ambient pulsing glow for RabbitMQ
  const orangePulse = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  // Pipeline moving packet animation
  const packetOffset = ((frame * 5) % 100) / 100;

  return (
    <SceneContainer accentColor={RABBITMQ_COLORS.rabbitOrange}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_SANS,
        }}
      >
        {/* ═════════════════════════════════════════════════════════════════
            1. TOP CATEGORY BADGE & HEADLINE (LINE 9 & 10)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(35, 18, 10, 0.94)",
            border: "1.5px solid rgba(249, 115, 22, 0.65)",
            boxShadow: "0 0 25px rgba(249, 115, 22, 0.35)",
            marginBottom: 14,
          }}
        >
          <SiRabbitmq size={16} color={RABBITMQ_COLORS.rabbitOrange} />
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: RABBITMQ_COLORS.rabbitOrange,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            THE ARCHITECTURAL SOLUTION // MESSAGE BROKER
          </span>
        </div>

        {/* Headline: "Untuk menyelesaikan masalah ini, aku memanfaatkan RabbitMQ sebagai message broker." */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 22,
          }}
        >
          <div
            style={{
              fontSize: 27,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.4,
            }}
          >
            Untuk menyelesaikan masalah ini,
          </div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.22,
              letterSpacing: -1,
            }}
          >
            <span style={{ color: "#f8fafc" }}>Aku Memanfaatkan </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #f43f5e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(249, 115, 22, 0.55))",
              }}
            >
              RabbitMQ
            </span>
            <br />
            <span
              style={{
                color: RABBITMQ_COLORS.cloudCyan,
                textShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
                fontSize: 38,
                fontWeight: 800,
              }}
            >
              Sebagai Message Broker
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. THE GRAND HERO CARD: RABBITMQ MESSAGE BROKER (Width: 940px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spHeroCard})`,
            opacity: isHeroActive ? Math.min(1, spHeroCard) : 0,
            width: 940,
            borderRadius: 24,
            backgroundColor: "rgba(18, 12, 10, 0.96)",
            border: "2px solid rgba(249, 115, 22, 0.65)",
            boxShadow: `0 22px 60px rgba(0, 0, 0, 0.9), 0 0 ${35 + orangePulse * 25
              }px rgba(249, 115, 22, 0.35)`,
            padding: "24px 28px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left: Animated RabbitMQ Bunny Logo + Identity */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Glowing Logo Pod */}
            <div
              style={{
                width: 78,
                height: 78,
                borderRadius: 22,
                backgroundColor: "rgba(249, 115, 22, 0.2)",
                border: "2px solid rgba(249, 115, 22, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 ${25 + orangePulse * 15}px rgba(249, 115, 22, 0.5)`,
                transform: `scale(${spLogo})`,
              }}
            >
              <SiRabbitmq size={46} color={RABBITMQ_COLORS.rabbitOrange} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                    letterSpacing: -0.5,
                  }}
                >
                  RabbitMQ
                </span>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: 6,
                    backgroundColor: "rgba(249, 115, 22, 0.25)",
                    border: "1px solid rgba(249, 115, 22, 0.55)",
                    color: "#fbbf24",
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                  }}
                >
                  v3.13 // AMQP 0-9-1
                </span>
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  color: "#cbd5e1",
                  fontFamily: FONT_SANS,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>Enterprise Open-Source Message Broker</span>
                <span style={{ color: "#64748b" }}>•</span>
                <span style={{ color: "#22c55e", fontWeight: 700 }}>
                  Event-Driven Spine
                </span>
              </div>
            </div>
          </div>

          {/* Right: AMQP Core Specs Badges */}
          <div
            style={{
              padding: "10px 18px",
              borderRadius: 14,
              backgroundColor: "rgba(56, 189, 248, 0.12)",
              border: "1.2px solid rgba(56, 189, 248, 0.45)",
              textAlign: "right",
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontFamily: FONT_MONO,
                color: "#38bdf8",
                fontWeight: 800,
                letterSpacing: 1.2,
                marginBottom: 2,
              }}
            >
              BROKER PATTERN
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#f8fafc",
                display: "flex",
                alignItems: "center",
                gap: 6,
                justifyContent: "flex-end",
              }}
            >
              <FaBroadcastTower size={13} color="#f97316" />
              <span>PUB / SUB HUB</span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. THREE CORE ARCHITECTURAL PILLARS (Width: 940px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spPillars})`,
            opacity: isPillarsActive ? Math.min(1, spPillars) : 0,
            width: 940,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            marginBottom: 18,
            boxSizing: "border-box",
          }}
        >
          {[
            {
              id: "01",
              title: "Sistem Ter-decouple",
              desc: "Publisher & Subscriber tidak perlu tahu alamat IP satu sama lain.",
              icon: <FaExchangeAlt size={22} color="#38bdf8" />,
              accent: "#38bdf8",
              delay: 718,
            },
            {
              id: "02",
              title: "Durable Message Queue",
              desc: "Pesan event tersimpan aman di broker, tidak hilang jika PC offline.",
              icon: <FaShieldAlt size={22} color="#22c55e" />,
              accent: "#22c55e",
              delay: 730,
            },
            {
              id: "03",
              title: "Broadcast Serentak",
              desc: "Sekali kirim event, puluhan perangkat menerima secara otomatis.",
              icon: <FaBolt size={22} color="#f97316" />,
              accent: "#f97316",
              delay: 742,
            },
          ].map((pillar) => {
            const spPillarCard = spring({
              frame: Math.max(0, frame - pillar.delay),
              fps,
              config: { damping: 13, stiffness: 120 },
            });
            return (
              <div
                key={pillar.id}
                style={{
                  transform: `scale(${spPillarCard}) translateY(${(1 - spPillarCard) * 18}px)`,
                  opacity: Math.min(1, spPillarCard),
                  borderRadius: 20,
                  backgroundColor: "rgba(10, 16, 30, 0.94)",
                  border: `1.5px solid ${pillar.accent}55`,
                  boxShadow: `0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px ${pillar.accent}20`,
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                }}
              >
                {/* Icon & ID */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: `${pillar.accent}18`,
                      border: `1.2px solid ${pillar.accent}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 15px ${pillar.accent}30`,
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: pillar.accent,
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: `${pillar.accent}15`,
                    }}
                  >
                    KEY #{pillar.id}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 16.5,
                    fontWeight: 900,
                    color: "#f8fafc",
                    marginBottom: 6,
                  }}
                >
                  {pillar.title}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: "#94a3b8",
                    lineHeight: 1.45,
                  }}
                >
                  {pillar.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. LIVE AMQP EVENT QUEUE PIPELINE (F745 - F800)
           ═════════════════════════════════════════════════════════════════ */}
        {isPipelineActive && (
          <div
            style={{
              transform: `scale(${spPipeline}) translateY(${(1 - spPipeline) * 16}px)`,
              opacity: spPipeline,
              width: 940,
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              border: "1.5px solid rgba(249, 115, 22, 0.5)",
              padding: "14px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
              marginBottom: 18,
            }}
          >
            {/* AMQP Queue Status */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FaInbox size={18} color="#f97316" />
              <div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#f8fafc",
                  }}
                >
                  EXCHANGE // &quot;media.events.fanout&quot;
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: "#94a3b8",
                    fontFamily: FONT_MONO,
                  }}
                >
                  Routing: Direct Broadcasting to All Bound Queues
                </div>
              </div>
            </div>

            {/* Traveling Event Packet in Conduit */}
            <div
              style={{
                width: 240,
                height: 24,
                borderRadius: 999,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: `${packetOffset * 100}%`,
                  padding: "2px 8px",
                  borderRadius: 999,
                  backgroundColor: "#f97316",
                  color: "#030712",
                  fontSize: 9.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                  boxShadow: "0 0 12px #f97316",
                  transform: "translateX(-50%)",
                }}
              >
                EVENT: SYNC_MEDIA
              </div>
            </div>

            {/* Broker Specs */}
            <div
              style={{
                fontSize: 11,
                fontFamily: FONT_MONO,
                color: "#22c55e",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <FaCheckCircle size={11} color="#22c55e" />
              <span>BROKER READY</span>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            5. BOTTOM ARCHITECTURAL SUMMARY PILL
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(15, 23, 42, 0.88)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: `0 0 ${16 + orangePulse * 10}px rgba(249, 115, 22, 0.3)`,
          }}
        >
          <SiRabbitmq size={14} color={RABBITMQ_COLORS.rabbitOrange} />
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              fontFamily: FONT_MONO,
              color: "#94a3b8",
              letterSpacing: 0.8,
            }}
          >
            SOLUSI UTAMA:{" "}
            <span style={{ color: "#f8fafc" }}>
              ASYNCHRONOUS EVENT-DRIVEN MESSAGE BROKER
            </span>
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
