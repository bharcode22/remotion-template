import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCheck,
  FaDatabase,
  FaDesktop,
  FaLayerGroup,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { GLASS_COLORS } from "../constants";

const FONT_DISPLAY =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMELINE & PHASES (Scene 6: Frames 1080 - 1205 / Duration: 125 frames)
  //
  // Line 15 (Voiceover: 36.0s - 40.16s / F1080 - F1205):
  // "Dengan workflow seperti ini, kita punya fondasi aplikasi yang lebih terstruktur."
  //
  // ➔ Phase 1 (localFrame 0 - 42 / F1080 - F1122):
  //    "Dengan workflow seperti ini,"
  //    Sequential magnetic lock-in of the 3 modular architectural tiers (Data -> API -> UI)
  //
  // ➔ Phase 2 (localFrame 42 - 125 / F1122 - F1205):
  //    "kita punya fondasi aplikasi yang lebih terstruktur."
  //    Heavy-duty structural foundation anchor locks in beneath the stack with
  //    emerald energy pulse, conduit connections, and architectural stability verification.
  // ─────────────────────────────────────────────────────────────────────────────

  // Relative frame inside Scene 6 (0 to 125)
  const localFrame = Math.max(0, frame - 1080);

  // Scene Entrance & Exit Dissolve
  const sceneEntrance = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const sceneExit = interpolate(localFrame, [118, 125], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const sceneOpacity = sceneEntrance * sceneExit;
  const sceneScale = interpolate(localFrame, [118, 125], [1, 0.97], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 1. Spoken Headline Springs
  const spHeadlinePart1 = spring({
    frame: Math.max(0, localFrame - 2),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 130 },
  });

  const spHeadlinePart2 = spring({
    frame: Math.max(0, localFrame - 38),
    fps,
    config: { damping: 12, mass: 0.85, stiffness: 135 },
  });

  // 2. 3-Tier Layer Assembly Springs (Stacking upward from Database -> Backend -> Frontend)
  const spTier1 = spring({
    frame: Math.max(0, localFrame - 4),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 140 },
  });

  const spTier2 = spring({
    frame: Math.max(0, localFrame - 12),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 140 },
  });

  const spTier3 = spring({
    frame: Math.max(0, localFrame - 20),
    fps,
    config: { damping: 13, mass: 0.85, stiffness: 140 },
  });

  // 3. Heavy-Duty Foundation Anchor Snap (Locks at localFrame 42)
  const spFoundation = spring({
    frame: Math.max(0, localFrame - 42),
    fps,
    config: { damping: 11, mass: 0.8, stiffness: 150 },
  });

  // 4. Verification Checkmark Badge Pop (localFrame 52)
  const spVerified = spring({
    frame: Math.max(0, localFrame - 52),
    fps,
    config: { damping: 11, mass: 0.7, stiffness: 160 },
  });

  // Animated continuous pulses & circuit particle flow
  const conduitParticle1 = (localFrame * 4.5) % 100;
  const conduitParticle2 = ((localFrame * 4.5) + 50) % 100;
  const pulseAura = Math.sin((localFrame * Math.PI) / 12) * 0.15 + 0.85;

  return (
    <SceneContainer
      padding="0 50px"
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
        transform: `scale(${sceneScale})`,
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          UNIFIED VERTICALLY-CENTERED WRAPPER (DEAD CENTER AT Y = 960PX)
         ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          width: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          boxSizing: "border-box",
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            1. SPOKEN HEADLINE (STRICTLY SCRIPT LINE 15)
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 960,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            minHeight: 140,
            justifyContent: "center",
            gap: 6,
          }}
        >
          {/* Top Eyebrow Stepper Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: 20,
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: `1px solid ${GLASS_COLORS.structureGreen}`,
              boxShadow: `0 0 15px ${GLASS_COLORS.mintGlow}`,
              marginBottom: 4,
              opacity: spHeadlinePart1,
              transform: `scale(${spHeadlinePart1})`,
            }}
          >
            <FaLayerGroup size={12} color={GLASS_COLORS.structureGreen} />
            <span
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 12,
                fontWeight: 800,
                color: GLASS_COLORS.structureGreen,
                letterSpacing: 1.2,
              }}
            >
              STRUCTURED APPLICATION BLUEPRINT
            </span>
          </div>

          {/* Line 15 Part 1: "Dengan workflow seperti ini," */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#94a3b8",
              fontFamily: FONT_DISPLAY,
              letterSpacing: 0.5,
              opacity: spHeadlinePart1,
              transform: `translateY(${(1 - spHeadlinePart1) * 10}px)`,
            }}
          >
            Dengan workflow seperti ini,
          </div>

          {/* Line 15 Part 2: "kita punya fondasi aplikasi yang lebih terstruktur." */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              opacity: spHeadlinePart2,
              transform: `translateY(${(1 - spHeadlinePart2) * 12}px)`,
            }}
          >
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#e2e8f0",
                fontFamily: FONT_DISPLAY,
                letterSpacing: 0.5,
              }}
            >
              kita punya
            </span>
            <span
              style={{
                fontSize: 48,
                fontWeight: 900,
                background: `linear-gradient(135deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.skyBlue})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: FONT_DISPLAY,
                letterSpacing: "-0.5px",
              }}
            >
              fondasi aplikasi
            </span>
            <span
              style={{
                fontSize: 48,
                fontWeight: 900,
                background: `linear-gradient(135deg, ${GLASS_COLORS.structureGreen}, #34d399)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: FONT_DISPLAY,
                letterSpacing: "-0.5px",
              }}
            >
              yang lebih terstruktur.
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. VISUAL ASSET STAGE: 3-TIER MODULAR ARCHITECTURE STACK
           ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            width: 940,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          {/* ═════════════════════════════════════════════════════════════
              TIER 3 (TOP): PRESENTATION & CLIENT LAYER (Cyan)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 900,
              height: 104,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(103, 232, 249, 0.35)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `translateY(${(1 - spTier3) * -20}px) scale(${0.85 + 0.15 * spTier3})`,
              opacity: spTier3,
              boxSizing: "border-box",
              zIndex: 3,
            }}
          >
            {/* Left: Layer Badge & Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(6, 182, 212, 0.18)",
                  border: "1px solid rgba(103, 232, 249, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <FaDesktop size={24} color={GLASS_COLORS.cyberCyan} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 11,
                    fontWeight: 700,
                    color: GLASS_COLORS.cyberCyan,
                    letterSpacing: 1.2,
                    marginBottom: 3,
                  }}
                >
                  03. CLIENT & PRESENTATION
                </div>
                <div
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Frontend Application
                </div>
              </div>
            </div>

            {/* Middle: Brand Icons + Modular Tech Chips */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiNextdotjs size={18} color="#ffffff" />
                </div>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiReact size={18} color="#38bdf8" />
                </div>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(6, 182, 212, 0.12)",
                    border: "1px solid rgba(6, 182, 212, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiTailwindcss size={18} color="#06b6d4" />
                </div>
              </div>

              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                SSR + Hydrated State
              </span>
            </div>

            {/* Right: Architecture Quality Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(6, 182, 212, 0.12)",
                border: "1px solid rgba(6, 182, 212, 0.4)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: GLASS_COLORS.cyberCyan,
                  boxShadow: `0 0 10px ${GLASS_COLORS.cyberCyan}`,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  fontWeight: 800,
                  color: GLASS_COLORS.cyberCyan,
                  letterSpacing: 0.8,
                }}
              >
                ISOLATED UI
              </span>
            </div>
          </div>

          {/* Dual Vertical Conduits (Tier 3 ➔ Tier 2) */}
          <div
            style={{
              width: 720,
              height: 24,
              display: "flex",
              justifyContent: "space-between",
              padding: "0 80px",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 1,
            }}
          >
            {[1, 2].map((c) => (
              <div
                key={c}
                style={{
                  width: 2,
                  height: "100%",
                  background: `linear-gradient(180deg, ${GLASS_COLORS.cyberCyan}, ${GLASS_COLORS.valueAmber})`,
                  position: "relative",
                  opacity: spTier2 * 0.5,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: `${c === 1 ? conduitParticle1 : conduitParticle2}%`,
                    left: -3,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: GLASS_COLORS.cyberCyan,
                    boxShadow: `0 0 10px ${GLASS_COLORS.cyberCyan}`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* ═════════════════════════════════════════════════════════════
              TIER 2 (MIDDLE): BUSINESS LOGIC & API LAYER (Amber)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 920,
              height: 104,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(251, 191, 36, 0.35)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `translateY(${(1 - spTier2) * -15}px) scale(${0.85 + 0.15 * spTier2})`,
              opacity: spTier2 * 0.5,
              boxSizing: "border-box",
              zIndex: 2,
            }}
          >
            {/* Left: Layer Badge & Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(245, 158, 11, 0.18)",
                  border: "1px solid rgba(251, 191, 36, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <FaServer size={24} color={GLASS_COLORS.valueAmber} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 11,
                    fontWeight: 700,
                    color: GLASS_COLORS.valueAmber,
                    letterSpacing: 1.2,
                    marginBottom: 3,
                  }}
                >
                  02. BUSINESS LOGIC & SERVICES
                </div>
                <div
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Backend API Engine
                </div>
              </div>
            </div>

            {/* Middle: Brand Icons + Service Chips */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(34, 197, 94, 0.12)",
                    border: "1px solid rgba(34, 197, 94, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiNodedotjs size={18} color="#22c55e" />
                </div>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(168, 85, 247, 0.12)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiPrisma size={18} color="#c084fc" />
                </div>
              </div>

              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                REST Endpoints • ORM
              </span>
            </div>

            {/* Right: Architecture Quality Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(245, 158, 11, 0.12)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: GLASS_COLORS.valueAmber,
                  boxShadow: `0 0 10px ${GLASS_COLORS.valueAmber}`,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  fontWeight: 800,
                  color: GLASS_COLORS.valueAmber,
                  letterSpacing: 0.8,
                }}
              >
                HIGH COHESION
              </span>
            </div>
          </div>

          {/* Dual Vertical Conduits (Tier 2 ➔ Tier 1) */}
          <div
            style={{
              width: 720,
              height: 24,
              display: "flex",
              justifyContent: "space-between",
              padding: "0 80px",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 1,
            }}
          >
            {[1, 2].map((c) => (
              <div
                key={c}
                style={{
                  width: 2,
                  height: "100%",
                  background: `linear-gradient(180deg, ${GLASS_COLORS.valueAmber}, ${GLASS_COLORS.structureGreen})`,
                  position: "relative",
                  opacity: spTier1 * 0.5,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: `${c === 1 ? conduitParticle2 : conduitParticle1}%`,
                    left: -3,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: GLASS_COLORS.structureGreen,
                    boxShadow: `0 0 10px ${GLASS_COLORS.structureGreen}`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* ═════════════════════════════════════════════════════════════
              TIER 1 (BASE): DATA & SCHEMA LAYER (Emerald Green)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 940,
              height: 104,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(110, 231, 183, 0.35)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transform: `translateY(${(1 - spTier1) * -10}px) scale(${0.85 + 0.15 * spTier1})`,
              opacity: spTier1 * 0.5,
              boxSizing: "border-box",
              zIndex: 2,
            }}
          >
            {/* Left: Layer Badge & Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "rgba(16, 185, 129, 0.18)",
                  border: "1px solid rgba(110, 231, 183, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <FaDatabase size={24} color={GLASS_COLORS.structureGreen} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 11,
                    fontWeight: 700,
                    color: GLASS_COLORS.structureGreen,
                    letterSpacing: 1.2,
                    marginBottom: 3,
                  }}
                >
                  01. DATA & RELATIONAL SCHEMA
                </div>
                <div
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Database Core Foundation
                </div>
              </div>
            </div>

            {/* Middle: Brand Icons + Relational Schema Chips */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiPostgresql size={18} color="#38bdf8" />
                </div>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: "rgba(244, 63, 94, 0.12)",
                    border: "1px solid rgba(244, 63, 94, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiRedis size={18} color="#f43f5e" />
                </div>
              </div>

              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                1 : N Relations • Foreign Keys
              </span>
            </div>

            {/* Right: Architecture Quality Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: GLASS_COLORS.structureGreen,
                  boxShadow: `0 0 10px ${GLASS_COLORS.structureGreen}`,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  fontWeight: 800,
                  color: GLASS_COLORS.structureGreen,
                  letterSpacing: 0.8,
                }}
              >
                ACID RELIABLE
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              ROCK-SOLID FOUNDATION ANCHOR (Locks In At Part 2)
             ═════════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: 940,
              marginTop: 18,
              height: 58,
              borderRadius: 16,
              backgroundColor: "rgba(255, 255, 255, 0.09)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(110, 231, 183, 0.45)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
              boxSizing: "border-box",
              transform: `scale(${spFoundation}) translateY(${(1 - spFoundation) * 20}px)`,
              opacity: spFoundation,
            }}
          >
            {/* Left: Foundation Shield Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaShieldAlt size={18} color={GLASS_COLORS.structureGreen} />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 13,
                  fontWeight: 900,
                  color: "#f8fafc",
                  letterSpacing: 1.2,
                }}
              >
                SOLID ARCHITECTURE FOUNDATION
              </span>
            </div>

            {/* Middle: Architectural Metrics */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#94a3b8",
                  letterSpacing: 0.5,
                }}
              >
                MODULAR • SCALABLE • MAINTAINABLE
              </span>
            </div>

            {/* Right: Architecture Verified Seal */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(16, 185, 129, 0.25)",
                border: "1px solid rgba(110, 231, 183, 0.35)",
                padding: "6px 14px",
                borderRadius: 20,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                transform: `scale(${spVerified})`,
                opacity: spVerified,
              }}
            >
              <FaCheck size={13} color={GLASS_COLORS.structureGreen} />
              <span
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 12,
                  fontWeight: 900,
                  color: GLASS_COLORS.structureGreen,
                  letterSpacing: 0.8,
                }}
              >
                FONDASI TERSTRUKTUR
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Stability Beam */}
        <div
          style={{
            width: 720,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${GLASS_COLORS.structureGreen}, transparent)`,
            opacity: spFoundation * pulseAura,
            boxShadow: `0 0 15px ${GLASS_COLORS.mintGlow}`,
          }}
        />
      </div>
    </SceneContainer>
  );
};
