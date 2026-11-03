import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaLaptopCode,
  FaLock,
  FaQuestionCircle,
  FaTerminal,
  FaTimesCircle,
} from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { RABBITMQ_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TIMELINE (Frames 165 - 330)
  // Line 2 & 4:
  // - "tanpa harus mengakses setiap perangkat satu per satu." (Voice: F168 - F252)
  // - "Bagaimana caranya?" (Voice: F270 - F294)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F166 - F185)
  const spBadge = spring({
    frame: Math.max(0, frame - 166),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F170 - F195)
  const spHeadline = spring({
    frame: Math.max(0, frame - 170),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Interactive SSH Module Spring (F174 - F202)
  const spSshModule = spring({
    frame: Math.max(0, frame - 174),
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 105 },
  });

  // 4. Alert / Stamp "Manual Repeat" Spring (F240 - F265)
  const spAlert = spring({
    frame: Math.max(0, frame - 240),
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });

  // 5. Question Card Spring "Bagaimana caranya?" (F262 - F295)
  const spQuestion = spring({
    frame: Math.max(0, frame - 262),
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.85 },
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ⌨️ TYPEWRITER & SSH ANIMATION STATE
  // ─────────────────────────────────────────────────────────────────────────────
  const fullCommand = "ssh -p 22 admin@192.168.1.101";
  const typedCount = Math.floor(
    interpolate(frame, [176, 196], [0, fullCommand.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedSshCommand = fullCommand.slice(0, typedCount);
  const cursorBlink = Math.floor(frame / 6) % 2 === 0;

  const isCommandTyped = frame >= 196;
  const isHandshakeDone = frame >= 208;
  const isScpRunning = frame >= 212;
  const isBottleneckActive = frame >= 244;
  const isQuestionTime = frame >= 262;

  // Tunnel packet progress (Admin -> Edge PC)
  const tunnelPacketProgress = ((frame * 6) % 100) / 100;

  // SCP File Download Progress (0% -> 100% Full)
  const scpProgress = Math.floor(
    interpolate(frame, [214, 246], [0, 100], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );
  const isScpComplete = scpProgress >= 100;

  // Question Card Pulse Wave
  const qPulse = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  return (
    <SceneContainer accentColor="#ef4444">
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
            1. TOP CATEGORY BADGE & HEADLINE
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
            backgroundColor: "rgba(35, 12, 12, 0.94)",
            border: "1.5px solid rgba(239, 68, 68, 0.65)",
            boxShadow: "0 0 25px rgba(239, 68, 68, 0.35)",
            marginBottom: 14,
          }}
        >
          <FaExclamationTriangle size={15} color="#ef4444" />
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: "#ef4444",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            THE ANTI-PATTERN // MANUAL SSH ACCESS
          </span>
        </div>

        {/* Headline: "tanpa harus mengakses setiap perangkat satu per satu." */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 20,
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
            Tantangan Arsitektur:
          </div>
          <h1
            style={{
              fontSize: 46,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.22,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                color: "#f8fafc",
              }}
            >
              Tanpa Harus Mengakses{" "}
            </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #f43f5e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(239, 68, 68, 0.5))",
              }}
            >
              Setiap Perangkat Satu per Satu
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. ANIMASI SSH KE SUATU PERANGKAT (Width: 940px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spSshModule})`,
            opacity: spSshModule,
            width: 940,
            borderRadius: 24,
            backgroundColor: "rgba(10, 14, 26, 0.96)",
            border: isBottleneckActive
              ? "2px solid rgba(239, 68, 68, 0.7)"
              : "2px solid rgba(56, 189, 248, 0.4)",
            boxShadow: isBottleneckActive
              ? "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 45px rgba(239, 68, 68, 0.3)"
              : "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.2)",
            padding: "20px 24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* ─────────────────────────────────────────────────────────────
              2A. TOPOLOGY HEADER: ADMIN WORKSTATION <== SSH ==> TARGET PC
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              borderRadius: 16,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Left Node: Admin Laptop */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "rgba(56, 189, 248, 0.16)",
                  border: "1.2px solid rgba(56, 189, 248, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaLaptopCode size={20} color="#38bdf8" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                  }}
                >
                  Admin Workstation
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#38bdf8",
                    fontFamily: FONT_MONO,
                  }}
                >
                  192.168.1.50 (Dev / IT)
                </div>
              </div>
            </div>

            {/* Middle: Animated SSH Tunnel Conduit */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                width: 220,
              }}
            >
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 800,
                  fontFamily: FONT_MONO,
                  color: isHandshakeDone ? "#22c55e" : "#fbbf24",
                  letterSpacing: 1.2,
                }}
              >
                {isHandshakeDone ? "SSH ENCRYPTED (PORT 22)" : "OPENING SSH..."}
              </div>

              {/* Conduit Line with Traveling Data Packet */}
              <div
                style={{
                  width: "100%",
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: `${tunnelPacketProgress * 100}%`,
                    width: 24,
                    borderRadius: 2,
                    backgroundColor: isHandshakeDone ? "#22c55e" : "#fbbf24",
                    boxShadow: `0 0 10px ${
                      isHandshakeDone ? "#22c55e" : "#fbbf24"
                    }`,
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: 9.5,
                  color: "#64748b",
                  fontFamily: FONT_MONO,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <FaLock size={8} color="#94a3b8" />
                <span>AES-256-GCM Handshake</span>
              </div>
            </div>

            {/* Right Node: Target Edge PC */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 900,
                    color: "#f8fafc",
                    fontFamily: FONT_MONO,
                  }}
                >
                  Target PC-01
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#22c55e",
                    fontFamily: FONT_MONO,
                  }}
                >
                  192.168.1.101 (Linux Edge)
                </div>
              </div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: "rgba(34, 197, 94, 0.16)",
                  border: "1.2px solid rgba(34, 197, 94, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiLinux size={22} color="#22c55e" />
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              2B. INTERACTIVE TERMINAL WINDOW (SSH SESSION TYPING)
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              borderRadius: 16,
              backgroundColor: "rgba(4, 8, 18, 0.98)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              overflow: "hidden",
            }}
          >
            {/* Terminal Window Bar */}
            <div
              style={{
                height: 38,
                padding: "0 16px",
                backgroundColor: "rgba(15, 23, 42, 0.95)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#ef4444",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#f59e0b",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: 11.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <FaTerminal size={11} color="#38bdf8" />
                terminal // admin@workstation:~
              </div>

              {/* Status Pill */}
              <div
                style={{
                  fontSize: 10,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: isHandshakeDone ? "#22c55e" : "#fbbf24",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: isHandshakeDone ? "#22c55e" : "#fbbf24",
                    boxShadow: `0 0 6px ${
                      isHandshakeDone ? "#22c55e" : "#fbbf24"
                    }`,
                  }}
                />
                {isHandshakeDone ? "SESSION ESTABLISHED" : "HANDSHAKING..."}
              </div>
            </div>

            {/* Terminal Screen Body */}
            <div
              style={{
                padding: "18px 22px",
                fontFamily: FONT_MONO,
                fontSize: 13.5,
                lineHeight: 1.65,
                color: "#e2e8f0",
                boxSizing: "border-box",
                minHeight: 165,
              }}
            >
              {/* Line 1: Typing SSH Command */}
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ color: "#38bdf8", fontWeight: 700 }}>
                  admin@workstation:~$
                </span>
                <span style={{ color: "#f8fafc" }}>{typedSshCommand}</span>
                {!isCommandTyped && (
                  <span
                    style={{
                      opacity: cursorBlink ? 1 : 0,
                      color: "#38bdf8",
                      fontWeight: 900,
                    }}
                  >
                    █
                  </span>
                )}
              </div>

              {/* Line 2: SSH Handshake Messages */}
              {isCommandTyped && (
                <div style={{ color: "#64748b", marginTop: 4 }}>
                  Connecting to 192.168.1.101 (PC-01) on port 22...
                  <br />
                  <span style={{ color: "#22c55e" }}>
                    ✓ Authenticated using RSA public key.
                  </span>
                  <br />
                  <span style={{ color: "#94a3b8" }}>
                    Linux debian-pc01 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian 12 (bookworm)
                  </span>
                </div>
              )}

              {/* Line 3: Remote Prompt and Manual File Transfer */}
              {isHandshakeDone && (
                <div style={{ marginTop: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ color: "#22c55e", fontWeight: 700 }}>
                      admin@debian-pc01:~$
                    </span>
                    <span style={{ color: "#fbbf24" }}>
                      scp user@cloud:/storage/payload_bundle.tar.gz ./
                    </span>
                  </div>

                  {/* Transfer Progress Bar */}
                  {isScpRunning && (
                    <div style={{ marginTop: 6 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: 11,
                          color: isScpComplete ? "#22c55e" : "#94a3b8",
                          marginBottom: 4,
                          fontWeight: isScpComplete ? 800 : 600,
                        }}
                      >
                        <span>payload_bundle.tar.gz (1.25 GB)</span>
                        {isScpComplete ? (
                          <span
                            style={{
                              color: "#22c55e",
                              fontWeight: 900,
                              display: "flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            <FaCheckCircle size={11} color="#22c55e" />
                            100% SELESAI (PC-01 READY)
                          </span>
                        ) : (
                          <span style={{ color: "#38bdf8", fontWeight: 800 }}>
                            {scpProgress}% [
                            {(2.4 + scpProgress * 0.08).toFixed(1)} MB/s] • Mengunduh...
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: 7,
                          borderRadius: 3.5,
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${scpProgress}%`,
                            height: "100%",
                            background: isScpComplete
                              ? "#22c55e"
                              : "linear-gradient(90deg, #38bdf8 0%, #fbbf24 60%, #22c55e 100%)",
                            boxShadow: isScpComplete
                              ? "0 0 12px #22c55e"
                              : "0 0 8px #38bdf8",
                          }}
                        />
                      </div>
                      {isScpComplete && (
                        <div
                          style={{
                            fontSize: 10.5,
                            color: "#22c55e",
                            fontFamily: FONT_MONO,
                            marginTop: 4,
                          }}
                        >
                          ✓ File tersimpan di PC-01. (Waktu terpakai: ~5 menit untuk 1 perangkat!)
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              2C. THE BOTTLENECK: 53 PERANGKAT LAINNYA MASIH ANTRI
             ───────────────────────────────────────────────────────────── */}
          <div
            style={{
              padding: "12px 18px",
              borderRadius: 14,
              backgroundColor: isBottleneckActive
                ? "rgba(239, 68, 68, 0.12)"
                : "rgba(15, 23, 42, 0.7)",
              border: isBottleneckActive
                ? "1.5px solid rgba(239, 68, 68, 0.55)"
                : "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaClock
                size={16}
                color={isBottleneckActive ? "#ef4444" : "#94a3b8"}
              />
              <div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 800,
                    fontFamily: FONT_MONO,
                    color: isBottleneckActive ? "#f87171" : "#cbd5e1",
                  }}
                >
                  STATUS ANTRIAN DEPLOYMENT MANUAL:
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    fontFamily: FONT_MONO,
                  }}
                >
                  {isScpComplete
                    ? "Baru 1 perangkat selesai (PC-01). Masih ada "
                    : "Baru 1 perangkat di-SSH. Masih ada "}
                  <strong style={{ color: "#f87171" }}>53 perangkat</strong>{" "}
                  menunggu manual!
                </div>
              </div>
            </div>

            {/* Waiting chips */}
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: isScpComplete
                    ? "rgba(34, 197, 94, 0.2)"
                    : "rgba(56, 189, 248, 0.15)",
                  border: isScpComplete
                    ? "1px solid #22c55e"
                    : "1px solid #38bdf8",
                  color: isScpComplete ? "#22c55e" : "#38bdf8",
                  fontSize: 10,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                }}
              >
                PC-01: {isScpComplete ? "✓ SELESAI" : "ACTIVE"}
              </span>
              {["PC-02", "PC-03", "PC-04", "+50 MORE"].map((pcId) => (
                <span
                  key={pcId}
                  style={{
                    padding: "4px 8px",
                    borderRadius: 6,
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.4)",
                    color: "#f87171",
                    fontSize: 10,
                    fontFamily: FONT_MONO,
                    fontWeight: 700,
                  }}
                >
                  {pcId}: WAITING
                </span>
              ))}
            </div>
          </div>

          {/* Stamped INEFFICIENT Alert Badge */}
          {isBottleneckActive && (
            <div
              style={{
                position: "absolute",
                top: 80,
                right: 35,
                transform: `scale(${spAlert}) rotate(0deg)`,
                opacity: spAlert,
                padding: "10px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(220, 38, 38, 0.28)",
                border: "2.5px solid #ef4444",
                boxShadow: "0 0 35px rgba(239, 68, 68, 0.7)",
                color: "#f87171",
                fontFamily: FONT_MONO,
                fontSize: 16,
                fontWeight: 900,
                letterSpacing: 2,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 8,
                zIndex: 30,
              }}
            >
              <FaTimesCircle size={18} color="#ef4444" />
              <span>SANGAT LAMBAT &amp; TIDAK SCALABLE!</span>
            </div>
          )}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. BIG HOOK QUESTION: "BAGAIMANA CARANYA?" (F262 - F330)
           ═════════════════════════════════════════════════════════════════ */}
        {isQuestionTime && (
          <div
            style={{
              transform: `scale(${spQuestion}) translateY(${(1 - spQuestion) * 25}px)`,
              opacity: spQuestion,
              width: 940,
              padding: "22px 30px",
              borderRadius: 22,
              backgroundColor: "rgba(10, 20, 40, 0.96)",
              border: "2px solid rgba(56, 189, 248, 0.7)",
              boxShadow: `0 20px 50px rgba(0, 0, 0, 0.85), 0 0 ${
                30 + qPulse * 20
              }px rgba(56, 189, 248, 0.45)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  border: "1.5px solid rgba(56, 189, 248, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 25px rgba(56, 189, 248, 0.4)",
                }}
              >
                <FaQuestionCircle size={32} color={RABBITMQ_COLORS.cloudCyan} />
              </div>

              <div>
                <div
                  style={{
                    fontSize: 11.5,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    letterSpacing: 2,
                    color: RABBITMQ_COLORS.cloudCyan,
                    textTransform: "uppercase",
                    marginBottom: 2,
                  }}
                >
                  THE BIG QUESTION // NASKAH LINE 4
                </div>
                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: -0.5,
                  }}
                >
                  Bagaimana Caranya?
                </div>
              </div>
            </div>

            {/* Answer teaser pill */}
            <div
              style={{
                padding: "10px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(249, 115, 22, 0.18)",
                border: "1.5px solid rgba(249, 115, 22, 0.55)",
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 10.5,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#f97316",
                    letterSpacing: 1,
                  }}
                >
                  SOLUSI OTOMATIS
                </div>
                <div
                  style={{
                    fontSize: 15.5,
                    fontWeight: 900,
                    fontFamily: FONT_MONO,
                    color: "#f8fafc",
                  }}
                >
                  MESSAGE BROKER
                </div>
              </div>
              <FaArrowRight size={14} color="#f97316" />
            </div>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
