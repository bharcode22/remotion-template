import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  Bot,
  Sparkles,
} from "lucide-react";
import {
  FaBrain,
  FaClipboardList,
  FaCode,
  FaHandPaper,
  FaLaptopCode,
  FaPaperPlane,
  FaRobot,
  FaSignal,
  FaTerminal,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { TECH_COLORS } from "../constants";

const FONT_SANS = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SUB-BEATS:
  // - Sub-beat 1A (Frame 0 - 50)  : "Semenjak AI booming,"
  // - Sub-beat 1B (Frame 50 - 110): "Ada gak diantaranya kalian yang"
  // - Sub-beat 1C (Frame 110 - 220): "memiliki atasan dikit dikit make AI."
  // ─────────────────────────────────────────────────────────────────────────────

  // =========================================================================
  // SUB-BEAT 1A SPRINGS (Frames 0 - 50)
  // =========================================================================
  const sp1ATag = spring({ frame: Math.max(0, frame - 3), fps, config: { damping: 14, stiffness: 90 } });
  const sp1AW1 = spring({ frame: Math.max(0, frame - 8), fps, config: { damping: 14, stiffness: 85 } });
  const sp1AW2 = spring({ frame: Math.max(0, frame - 16), fps, config: { damping: 12, stiffness: 95 } });
  const sp1AW3 = spring({ frame: Math.max(0, frame - 24), fps, config: { damping: 12, stiffness: 105 } });
  const sp1AMesh = spring({ frame: Math.max(0, frame - 12), fps, config: { damping: 16, stiffness: 75 } });

  // Neural mesh line drawing progress (Frame 10 -> 35)
  const lineProgress = interpolate(frame, [10, 35], [180, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Data packet pulse along line
  const packetPos = (frame * 5) % 180;

  // Sub-beat 1A Exit (Frames 45 - 54)
  const exit1A = interpolate(frame, [46, 54], [1, 0], { extrapolateRight: "clamp" });
  const exit1AY = interpolate(frame, [46, 54], [0, -35], { extrapolateRight: "clamp" });

  // =========================================================================
  // SUB-BEAT 1B SPRINGS (Frames 50 - 110) — MINIMALIST, HIGH-IMPACT, ZERO CLUTTER
  // =========================================================================
  const sp1BTag = spring({ frame: Math.max(0, frame - 50), fps, config: { damping: 14, stiffness: 90 } });
  const sp1BText1 = spring({ frame: Math.max(0, frame - 54), fps, config: { damping: 14, stiffness: 85 } });
  const sp1BText2 = spring({ frame: Math.max(0, frame - 64), fps, config: { damping: 13, stiffness: 90 } });
  const sp1BAvatars = spring({ frame: Math.max(0, frame - 72), fps, config: { damping: 15, stiffness: 80, mass: 1 } });
  const sp1BPill = spring({ frame: Math.max(0, frame - 82), fps, config: { damping: 14, stiffness: 85 } });

  // Sub-beat 1B Exit (Frames 104 - 112)
  const exit1B = interpolate(frame, [104, 112], [1, 0], { extrapolateRight: "clamp" });
  const exit1BY = interpolate(frame, [104, 112], [0, -40], { extrapolateRight: "clamp" });

  // =========================================================================
  // SUB-BEAT 1C SPRINGS & PROMPT ANIMATION (Frames 110 - 220)
  // =========================================================================
  const sp1CTitle1 = spring({ frame: Math.max(0, frame - 112), fps, config: { damping: 14, stiffness: 90 } });
  const sp1CTitle2 = spring({ frame: Math.max(0, frame - 120), fps, config: { damping: 13, stiffness: 95 } });
  const sp1CTitle3 = spring({ frame: Math.max(0, frame - 128), fps, config: { damping: 12, stiffness: 100 } });
  const sp1CConsole = spring({ frame: Math.max(0, frame - 124), fps, config: { damping: 16, stiffness: 80, mass: 1 } });

  // 1. Boss Prompt Typewriter (Frames 128 - 160)
  const bossPromptFull = "AI, tolong buatin arsitektur sistem ini sekarang, tinggal copas prompt doang kan?";
  const bossCharsCount = Math.floor(
    interpolate(frame, [128, 160], [0, bossPromptFull.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedBossPrompt = bossPromptFull.slice(0, bossCharsCount);
  const isBossPromptSent = frame >= 162;
  const sendBtnScale = interpolate(frame, [160, 162, 166], [1, 0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. AI Thinking & Streaming Response (Frames 162 - 215)
  const isAiThinking = frame >= 162 && frame < 174;
  const isAiStreaming = frame >= 174;
  const aiResponseFull = "Tentu! Ini 1.000 baris kode generic tanpa peduli database, security, dan arsitektur sistem nyata kamu...";
  const aiCharsCount = Math.floor(
    interpolate(frame, [174, 206], [0, aiResponseFull.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedAiResponse = aiResponseFull.slice(0, aiCharsCount);

  // 3. Staggered Reaction Stamps
  const sp1CStamp1 = spring({ frame: Math.max(0, frame - 170), fps, config: { damping: 12, stiffness: 110 } });
  const sp1CStamp2 = spring({ frame: Math.max(0, frame - 182), fps, config: { damping: 12, stiffness: 110 } });
  const sp1CStamp3 = spring({ frame: Math.max(0, frame - 194), fps, config: { damping: 12, stiffness: 110 } });

  const cursorBlink = frame % 16 < 8;
  const activeAccent = frame >= 110 ? TECH_COLORS.alertAmber : TECH_COLORS.aiEmerald;

  return (
    <div style={{ width: "100%", fontFamily: FONT_SANS }}>
      <SceneContainer accentColor={activeAccent}>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 960,
            minHeight: 960,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT_SANS,
          }}
        >
          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 1A: KINETIC TYPOGRAPHY + NEURAL MESH (Frames 0 - 50)
              100% SIMETRIS & TEGAK (TANPA MIRING)
          ═══════════════════════════════════════════════════════════════════════ */}
          {frame < 55 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 32,
                opacity: exit1A,
                transform: `translateY(${exit1AY}px)`,
              }}
            >
              {/* Top Tech Pill */}
              <div
                style={{
                  transform: `scale(${sp1ATag})`,
                  opacity: sp1ATag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 24px",
                  borderRadius: 24,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  border: "1.5px solid rgba(16, 185, 129, 0.4)",
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.2)",
                }}
              >
                <FaSignal size={15} color={TECH_COLORS.aiEmerald} />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: TECH_COLORS.aiEmerald,
                    letterSpacing: 2,
                  }}
                >
                  GLOBAL TECH TREND // 2023 - 2026
                </span>
              </div>

              {/* Giant Kinetic Headline: SEMENJAK AI BOOMING (Simetris di Tengah) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 18,
                  textAlign: "center",
                }}
              >
                {/* Word 1: SEMENJAK */}
                <span
                  style={{
                    transform: `translateY(${interpolate(sp1AW1, [0, 1], [30, 0])}px)`,
                    opacity: sp1AW1,
                    fontSize: 52,
                    fontWeight: 900,
                    color: TECH_COLORS.textPrimary,
                    letterSpacing: -0.5,
                  }}
                >
                  SEMENJAK
                </span>

                {/* Word 2: AI (Glowing Pill Badge) */}
                <div
                  style={{
                    transform: `scale(${sp1AW2}) translateY(${interpolate(sp1AW2, [0, 1], [25, 0])}px)`,
                    opacity: sp1AW2,
                    padding: "8px 28px",
                    borderRadius: 20,
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    boxShadow: "0 0 40px rgba(16, 185, 129, 0.65)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Sparkles size={30} color="#030712" />
                  <span
                    style={{
                      fontSize: 52,
                      fontWeight: 950,
                      color: "#030712",
                      letterSpacing: 1,
                    }}
                  >
                    AI
                  </span>
                </div>

                {/* Word 3: BOOMING */}
                <span
                  style={{
                    transform: `scale(${interpolate(sp1AW3, [0, 1], [0.85, 1])}) translateY(${interpolate(sp1AW3, [0, 1], [30, 0])}px)`,
                    opacity: sp1AW3,
                    fontSize: 58,
                    fontWeight: 950,
                    color: "#38bdf8",
                    textShadow: "0 0 35px rgba(56, 189, 248, 0.5)",
                    letterSpacing: -0.5,
                  }}
                >
                  BOOMING,
                </span>
              </div>

              {/* Dynamic Neural Mesh Graph (Simetris Sempurna, 720px) */}
              <div
                style={{
                  transform: `scale(${sp1AMesh})`,
                  opacity: sp1AMesh,
                  width: "100%",
                  height: 400,
                  backgroundColor: "rgba(10, 15, 29, 0.85)",
                  border: "1.5px solid rgba(56, 189, 248, 0.28)",
                  borderRadius: 24,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.65), inset 0 0 40px rgba(16, 185, 129, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Tech Scanline Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px)",
                    backgroundSize: "100% 8px",
                    pointerEvents: "none",
                  }}
                />

                {/* Corner Tech Brackets (Simetris Kiri & Kanan) */}
                <div style={{ position: "absolute", top: 18, left: 24, fontSize: 13, color: "#06b6d4", fontWeight: 800 }}>
                  [ NEURAL_GRAPH // ACTIVE ]
                </div>
                <div style={{ position: "absolute", top: 18, right: 24, fontSize: 13, color: TECH_COLORS.aiEmerald, fontWeight: 800 }}>
                  PARAMS: 1.8T
                </div>

                {/* SVG Animated Connected Nodes (Bilateral Horizontal Symmetry) */}
                <svg width="100%" height="100%" viewBox="0 0 720 340" style={{ position: "relative", zIndex: 2 }}>
                  <defs>
                    <linearGradient id="neuralLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Neural Laser Paths */}
                  <line x1="130" y1="170" x2="360" y2="100" stroke="url(#neuralLineGrad)" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={lineProgress} />
                  <line x1="130" y1="170" x2="360" y2="240" stroke="url(#neuralLineGrad)" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={lineProgress} />
                  <line x1="360" y1="100" x2="590" y2="170" stroke="url(#neuralLineGrad)" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={lineProgress} />
                  <line x1="360" y1="240" x2="590" y2="170" stroke="url(#neuralLineGrad)" strokeWidth="2.5" strokeDasharray="180" strokeDashoffset={lineProgress} />
                  <line x1="360" y1="100" x2="360" y2="240" stroke="url(#neuralLineGrad)" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.5" />

                  {/* Laser Packet Traveler */}
                  <circle cx={130 + (packetPos / 180) * 230} cy={170 - (packetPos / 180) * 70} r="5" fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" />

                  {/* Node 1: Left Input Node */}
                  <g transform="translate(130, 170)">
                    <circle r="28" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" />
                    <circle r="11" fill="#10b981" />
                    <text y="46" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="700">INPUT DATA</text>
                  </g>

                  {/* Node 2: Center Top Node */}
                  <g transform="translate(360, 100)">
                    <circle r="30" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="2" />
                    <circle r="13" fill="#06b6d4" />
                    <text y="48" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="800">LLM MODEL</text>
                  </g>

                  {/* Node 3: Center Bottom Node */}
                  <g transform="translate(360, 240)">
                    <circle r="26" fill="rgba(139, 92, 246, 0.15)" stroke="#8b5cf6" strokeWidth="2" />
                    <circle r="10" fill="#8b5cf6" />
                    <text y="44" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="700">GENERATION</text>
                  </g>

                  {/* Node 4: Right Output Node */}
                  <g transform="translate(590, 170)">
                    <circle r="32" fill="rgba(245, 158, 11, 0.18)" stroke="#f59e0b" strokeWidth="2" />
                    <circle r="15" fill="#f59e0b" />
                    <text y="50" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="900">OUTPUT REVOLUTION</text>
                  </g>
                </svg>

                {/* Bottom telemetry footer */}
                <div style={{ position: "absolute", bottom: 18, display: "flex", gap: 20, fontSize: 13, color: "#64748b", fontWeight: 600 }}>
                  <span>STATUS: ADOPTION ACCELERATING</span>
                  <span>•</span>
                  <span>NETWORK: GLOBAL INTEGRATION</span>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 1B: KINETIC CALLOUT & COMMUNITY RELATABLE CHECK (Frames 50 - 110)
              MINIMALIS, BERSIH, NYAMAN DITONTON, ZERO CLUTTER
          ═══════════════════════════════════════════════════════════════════════ */}
          {frame >= 48 && frame < 114 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
                opacity: exit1B,
                transform: `translateY(${exit1BY}px)`,
              }}
            >
              {/* Top Tech Pill */}
              <div
                style={{
                  transform: `scale(${sp1BTag})`,
                  opacity: sp1BTag,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 22px",
                  borderRadius: 24,
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1.5px solid rgba(56, 189, 248, 0.4)",
                  color: "#38bdf8",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                }}
              >
                <FaUsers size={16} color="#38bdf8" />
                <span>SURVEY DEVELOPER // RELATABLE CHECK</span>
              </div>

              {/* Bold Symmetrical Kinetic Typography */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  textAlign: "center",
                }}
              >
                {/* Word 1: ADA GAK */}
                <div
                  style={{
                    transform: `translateY(${interpolate(sp1BText1, [0, 1], [30, 0])}px)`,
                    opacity: sp1BText1,
                    fontSize: 66,
                    fontWeight: 950,
                    color: "#38bdf8",
                    letterSpacing: -1,
                    textShadow: "0 0 45px rgba(56, 189, 248, 0.5)",
                  }}
                >
                  ADA GAK
                </div>

                {/* Word 2: DI ANTARA KALIAN... */}
                <div
                  style={{
                    transform: `translateY(${interpolate(sp1BText2, [0, 1], [30, 0])}px)`,
                    opacity: sp1BText2,
                    fontSize: 54,
                    fontWeight: 950,
                    color: TECH_COLORS.textPrimary,
                    letterSpacing: -0.5,
                  }}
                >
                  DI ANTARA KALIAN
                </div>
              </div>

              {/* Clean Symmetrical Audience Constellation (Simetris & Bernapas) */}
              <div
                style={{
                  transform: `scale(${sp1BAvatars}) translateY(${interpolate(sp1BAvatars, [0, 1], [35, 0])}px)`,
                  opacity: sp1BAvatars,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 22,
                  marginTop: 6,
                }}
              >
                {/* Left Orbit: Engineer */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 22,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1.5px solid rgba(16, 185, 129, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.25)",
                  }}
                >
                  <FaCode size={26} color="#10b981" />
                </div>

                {/* Center Main Focus: Developer Station (Hero Avatar) */}
                <div
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: 30,
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    border: "2px solid #38bdf8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 50px rgba(56, 189, 248, 0.55)",
                  }}
                >
                  <FaLaptopCode size={46} color="#38bdf8" />
                </div>

                {/* Right Orbit: Team Member */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 22,
                    backgroundColor: "rgba(139, 92, 246, 0.15)",
                    border: "1.5px solid rgba(139, 92, 246, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 25px rgba(139, 92, 246, 0.25)",
                  }}
                >
                  <FaUserTie size={26} color="#a78bfa" />
                </div>
              </div>

              {/* Single Clear Relatable Check Pill (Mudah Diserap dalam 0.5 Detik) */}
              <div
                style={{
                  transform: `scale(${sp1BPill})`,
                  opacity: sp1BPill,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 28px",
                  borderRadius: 24,
                  backgroundColor: "rgba(10, 15, 29, 0.92)",
                  border: "1.5px solid rgba(56, 189, 248, 0.35)",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.65), 0 0 25px rgba(56, 189, 248, 0.15)",
                }}
              >
                <FaHandPaper size={18} color="#10b981" />
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 12,
                    backgroundColor: "rgba(16, 185, 129, 0.18)",
                    color: "#10b981",
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: 0.5,
                  }}
                >
                  98% RELATE
                </span>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════════════
              SUB-BEAT 1C: KINETIC HOOK + LIVE AI CHAT PROMPTING CONSOLE (Frames 110 - 220)
              100% SIMETRIS & TEGAK DENGAN ANIMASI NGEPROMPT NYATA
          ═══════════════════════════════════════════════════════════════════════ */}
          {frame >= 108 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 22,
              }}
            >
              {/* Massive 3-Tier Kinetic Title (Simetris di Tengah) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  textAlign: "center",
                }}
              >
                {/* Line 1: MEMILIKI ATASAN */}
                <div
                  style={{
                    transform: `translateY(${interpolate(sp1CTitle1, [0, 1], [30, 0])}px)`,
                    opacity: sp1CTitle1,
                    fontSize: 34,
                    fontWeight: 800,
                    color: TECH_COLORS.textSecondary,
                    letterSpacing: 2,
                  }}
                >
                  MEMILIKI ATASAN
                </div>

                {/* Line 2 & 3: DIKIT-DIKIT MAKE AI */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  {/* DIKIT-DIKIT Highlight Pill */}
                  <div
                    style={{
                      transform: `scale(${sp1CTitle2}) translateY(${interpolate(sp1CTitle2, [0, 1], [25, 0])}px)`,
                      opacity: sp1CTitle2,
                      padding: "10px 26px",
                      borderRadius: 18,
                      backgroundColor: "rgba(245, 158, 11, 0.18)",
                      border: "2px solid #f59e0b",
                      boxShadow: "0 0 35px rgba(245, 158, 11, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FaRobot size={24} color="#f59e0b" />
                    <span style={{ fontSize: 36, fontWeight: 950, color: "#f59e0b", letterSpacing: -0.5 }}>
                      DIKIT-DIKIT
                    </span>
                  </div>

                  {/* MAKE AI! Bold Title */}
                  <span
                    style={{
                      transform: `scale(${sp1CTitle3}) translateY(${interpolate(sp1CTitle3, [0, 1], [25, 0])}px)`,
                      opacity: sp1CTitle3,
                      fontSize: 48,
                      fontWeight: 950,
                      color: "#ef4444",
                      textShadow: "0 0 35px rgba(239, 68, 68, 0.55)",
                      letterSpacing: -0.5,
                    }}
                  >
                    MAKE AI!
                  </span>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════════════════
                  ANIMASI NGEPROMPT AI CHAT CONSOLE (Simetris, Otentik & Realistis)
              ═══════════════════════════════════════════════════════════════════ */}
              <div
                style={{
                  transform: `scale(${sp1CConsole}) translateY(${interpolate(sp1CConsole, [0, 1], [30, 0])}px)`,
                  opacity: sp1CConsole,
                  width: "100%",
                  backgroundColor: "rgba(10, 15, 29, 0.96)",
                  border: isBossPromptSent ? "1.5px solid rgba(16, 185, 129, 0.5)" : "1.5px solid rgba(245, 158, 11, 0.45)",
                  borderRadius: 24,
                  boxShadow: isBossPromptSent
                    ? "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(16, 185, 129, 0.2)"
                    : "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(245, 158, 11, 0.2)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Titlebar: ChatGPT / AI Workspace */}
                <div
                  style={{
                    backgroundColor: "rgba(3, 7, 18, 0.85)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "14px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                    <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                    <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#10b981" }} />
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#94a3b8", marginLeft: 8 }}>
                      ChatGPT-4o // Atasan Workspace Session
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 800,
                      color: isBossPromptSent ? "#10b981" : "#f59e0b",
                    }}
                  >
                    <Sparkles size={14} />
                    <span>{isBossPromptSent ? "AI INFERENCE ACTIVE" : "AWAITING PROMPT"}</span>
                  </div>
                </div>

                {/* Console Body: Live Chat Prompting Stream */}
                <div
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {/* Row 1: The Boss Prompt Input / Sent Bubble */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      backgroundColor: "rgba(245, 158, 11, 0.08)",
                      border: "1.5px solid rgba(245, 158, 11, 0.35)",
                      borderRadius: 18,
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 8,
                            backgroundColor: "rgba(245, 158, 11, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FaUserTie size={14} color="#f59e0b" />
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 800, color: "#f59e0b" }}>
                          Atasan (Prompting AI):
                        </span>
                      </div>

                      <div
                        style={{
                          transform: `scale(${sendBtnScale})`,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "4px 12px",
                          borderRadius: 10,
                          backgroundColor: isBossPromptSent ? "#10b981" : "#f59e0b",
                          color: "#030712",
                          fontSize: 12,
                          fontWeight: 900,
                        }}
                      >
                        <FaPaperPlane size={11} />
                        <span>{isBossPromptSent ? "SENT" : "TYPING..."}</span>
                      </div>
                    </div>

                    {/* Live Typewriter Prompt Content */}
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#f8fafc",
                        lineHeight: 1.5,
                        minHeight: 52,
                      }}
                    >
                      &ldquo;{typedBossPrompt}
                      {!isBossPromptSent && (
                        <span style={{ opacity: cursorBlink ? 1 : 0, color: "#f59e0b", marginLeft: 2 }}>
                          |
                        </span>
                      )}
                      &rdquo;
                    </div>
                  </div>

                  {/* Row 2: AI Response / Generating Output (After Send) */}
                  {isBossPromptSent && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        border: "1.5px solid rgba(16, 185, 129, 0.35)",
                        borderRadius: 18,
                        padding: "16px 20px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: 8,
                              backgroundColor: "rgba(16, 185, 129, 0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Bot size={16} color="#10b981" />
                          </div>
                          <span style={{ fontSize: 14, fontWeight: 800, color: "#10b981" }}>
                            ChatGPT Assistant Output:
                          </span>
                        </div>

                        <span style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8" }}>
                          {isAiThinking ? "Generating tokens..." : "Completed (Hallucinated)"}
                        </span>
                      </div>

                      {/* AI Response Stream */}
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#38bdf8",
                          lineHeight: 1.5,
                        }}
                      >
                        {isAiThinking ? (
                          <span style={{ color: "#94a3b8", fontStyle: "italic" }}>
                            Sedang merumuskan jawaban instan...
                          </span>
                        ) : (
                          <span>
                            {typedAiResponse}
                            {isAiStreaming && (
                              <span style={{ opacity: cursorBlink ? 1 : 0, color: "#10b981", marginLeft: 2 }}>
                                █
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Red Alert Footer: Realita Developer */}
                  {frame >= 180 && (
                    <div
                      style={{
                        backgroundColor: "rgba(239, 68, 68, 0.12)",
                        border: "1px solid rgba(239, 68, 68, 0.45)",
                        borderRadius: 14,
                        padding: "12px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <FaTerminal size={16} color="#ef4444" />
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#ef4444" }}>
                        REALITA: Arsitektur generic AI tidak cocok dengan sistem database nyata tim Anda!
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 3 Staggered Reaction Stamps (100% Simetris & Tegak, 0deg Rotation) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  width: "100%",
                }}
              >
                {/* Stamp 1: Dikit-Dikit AI */}
                <div
                  style={{
                    transform: `scale(${sp1CStamp1})`,
                    opacity: sp1CStamp1,
                    backgroundColor: "rgba(245, 158, 11, 0.14)",
                    border: "1.5px solid rgba(245, 158, 11, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(245, 158, 11, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaRobot size={19} color="#f59e0b" />
                  <span style={{ fontSize: 15, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Dikit-Dikit AI
                  </span>
                </div>

                {/* Stamp 2: Copas Prompt */}
                <div
                  style={{
                    transform: `scale(${sp1CStamp2})`,
                    opacity: sp1CStamp2,
                    backgroundColor: "rgba(239, 68, 68, 0.14)",
                    border: "1.5px solid rgba(239, 68, 68, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(239, 68, 68, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaClipboardList size={19} color="#ef4444" />
                  <span style={{ fontSize: 15, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Prompt Spammer
                  </span>
                </div>

                {/* Stamp 3: Padahal Non-Tech */}
                <div
                  style={{
                    transform: `scale(${sp1CStamp3})`,
                    opacity: sp1CStamp3,
                    backgroundColor: "rgba(139, 92, 246, 0.14)",
                    border: "1.5px solid rgba(139, 92, 246, 0.6)",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <FaBrain size={19} color="#8b5cf6" />
                  <span style={{ fontSize: 15, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Padahal Non-Tech
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </SceneContainer>
    </div>
  );
};
