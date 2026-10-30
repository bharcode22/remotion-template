import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaExclamationTriangle,
  FaLightbulb,
  FaMoneyBillWave,
  FaRobot,
  FaSearch,
  FaTasks,
  FaTerminal,
  FaUserTie,
} from "react-icons/fa";
import { CameraPosition } from "../types";
import { SceneContainer } from "../Components/SceneContainer";
import { DepthOfFieldWrapper } from "../Components/DepthOfFieldWrapper";
import { TECH_COLORS } from "../constants";

const FONT_SANS = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

interface Scene2Props {
  camera: CameraPosition;
}

export const Scene2: React.FC<Scene2Props> = ({ camera }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset frame relative to Scene 2 entrance (Global Frame 220 - 425)
  const relFrame = Math.max(0, frame - 220);

  // =========================================================================
  // ⏱️ SUB-BEAT SPRINGS:
  // - Station 2A (relFrame 0 - 55)   : Line 5 - "Mulai dari membuat plan,"
  // - Station 2B (relFrame 55 - 105) : Line 6 - "Mencari ide,"
  // - Station 2C (relFrame 105 - 205): Lines 7 & 8 - "bahkan sampai membuat keputusan keputusan besar."
  // =========================================================================

  // Station 2A Springs (Membuat Plan)
  const sp2ATag = spring({ frame: relFrame, fps, config: { damping: 14, stiffness: 90 } });
  const sp2ATitle = spring({ frame: Math.max(0, relFrame - 6), fps, config: { damping: 14, stiffness: 85 } });
  const sp2ACard = spring({ frame: Math.max(0, relFrame - 12), fps, config: { damping: 15, stiffness: 80, mass: 1 } });

  // Station 2B Springs (Mencari Ide)
  const sp2BTag = spring({ frame: Math.max(0, relFrame - 58), fps, config: { damping: 14, stiffness: 90 } });
  const sp2BTitle = spring({ frame: Math.max(0, relFrame - 64), fps, config: { damping: 14, stiffness: 85 } });
  const sp2BHub = spring({ frame: Math.max(0, relFrame - 70), fps, config: { damping: 15, stiffness: 80, mass: 1 } });

  // Station 2C Springs (Lines 7-8 Combined: Bahkan Sampai Membuat Keputusan Besar)
  const sp2CTag = spring({ frame: Math.max(0, relFrame - 106), fps, config: { damping: 14, stiffness: 90 } });
  const sp2CLeadIn = spring({ frame: Math.max(0, relFrame - 110), fps, config: { damping: 14, stiffness: 85 } });
  const sp2CTitle = spring({ frame: Math.max(0, relFrame - 124), fps, config: { damping: 13, stiffness: 95 } });
  const sp2CConsole = spring({ frame: Math.max(0, relFrame - 138), fps, config: { damping: 16, stiffness: 80, mass: 1 } });
  const sp2CBadge1 = spring({ frame: Math.max(0, relFrame - 152), fps, config: { damping: 12, stiffness: 110 } });
  const sp2CBadge2 = spring({ frame: Math.max(0, relFrame - 164), fps, config: { damping: 12, stiffness: 110 } });
  const sp2CBadge3 = spring({ frame: Math.max(0, relFrame - 176), fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", fontFamily: FONT_SANS }}>
      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 2A: "MULAI DARI MEMBUAT PLAN," (Line 5)
          Position: X = 0, Y = 0
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={0} stationY={0} camera={camera}>
        <SceneContainer accentColor="#38bdf8">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 28,
            }}
          >
            {/* Pill Badge */}
            <div
              style={{
                transform: `scale(${sp2ATag})`,
                opacity: sp2ATag,
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
              <FaTasks size={15} color="#38bdf8" />
              <span>LEVEL 01 // SPRINT & ROADMAP</span>
            </div>

            {/* Kinetic Headline: MEMBUAT PLAN */}
            <div
              style={{
                transform: `scale(${sp2ATitle}) translateY(${interpolate(sp2ATitle, [0, 1], [25, 0])}px)`,
                opacity: sp2ATitle,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: TECH_COLORS.textSecondary, letterSpacing: 2 }}>
                MULAI DARI...
              </div>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 950,
                  color: "#38bdf8",
                  letterSpacing: -1,
                  textShadow: "0 0 45px rgba(56, 189, 248, 0.5)",
                }}
              >
                MEMBUAT PLAN
              </div>
            </div>

            {/* Symmetrical Architecture Planner Card */}
            <div
              style={{
                transform: `scale(${sp2ACard}) translateY(${interpolate(sp2ACard, [0, 1], [30, 0])}px)`,
                opacity: sp2ACard,
                width: "100%",
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 22,
                padding: "24px 30px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaTasks size={20} color="#38bdf8" />
                  <span style={{ fontSize: 17, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    Automated Task Planner
                  </span>
                </div>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 12,
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: TECH_COLORS.aiEmerald,
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  100% PROMPT-BASED
                </span>
              </div>

              {/* Checklist Item 1 */}
              <div
                style={{
                  backgroundColor: "rgba(3, 7, 18, 0.65)",
                  borderLeft: "3.5px solid #38bdf8",
                  borderRadius: "0 14px 14px 0",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaCheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: 16, fontWeight: 700, color: TECH_COLORS.textPrimary }}>
                    Sprint Planning 2 Minggu
                  </span>
                </div>
                <span style={{ fontSize: 13, color: "#38bdf8", fontWeight: 700 }}>
                  Generated by AI
                </span>
              </div>

              {/* Checklist Item 2 */}
              <div
                style={{
                  backgroundColor: "rgba(3, 7, 18, 0.65)",
                  borderLeft: "3.5px solid #10b981",
                  borderRadius: "0 14px 14px 0",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaCheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: 16, fontWeight: 700, color: TECH_COLORS.textPrimary }}>
                    Product Milestone Roadmap
                  </span>
                </div>
                <span style={{ fontSize: 13, color: "#10b981", fontWeight: 700 }}>
                  Copas dari Chatbot
                </span>
              </div>

              {/* Subtext note */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: TECH_COLORS.textMuted }}>
                <FaCode size={13} />
                <span>Dibuat instan tanpa memahami kompleksitas codebase nyata</span>
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ─── CONNECTIVE DATA RAIL 1 (Station 2A -> 2B) ────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: 1080,
          top: "50%",
          transform: "translateY(-50%)",
          width: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          zIndex: 8,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 3,
            background: "linear-gradient(90deg, #38bdf8 0%, #10b981 100%)",
            boxShadow: "0 0 16px rgba(56, 189, 248, 0.6)",
          }}
        />
        <div
          style={{
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 2,
            color: "#38bdf8",
            backgroundColor: "rgba(10, 15, 29, 0.8)",
            padding: "4px 12px",
            borderRadius: 10,
            border: "1px solid rgba(56, 189, 248, 0.3)",
          }}
        >
          CAMERA SLIDE &gt;&gt; IDE
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 2B: "MENCARI IDE," (Line 6)
          Position: X = 1400, Y = 0
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={1400} stationY={0} camera={camera}>
        <SceneContainer accentColor="#10b981">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 28,
            }}
          >
            {/* Pill Badge */}
            <div
              style={{
                transform: `scale(${sp2BTag})`,
                opacity: sp2BTag,
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 22px",
                borderRadius: 24,
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1.5px solid rgba(16, 185, 129, 0.4)",
                color: "#10b981",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 1.5,
              }}
            >
              <FaLightbulb size={15} color="#10b981" />
              <span>LEVEL 02 // BRAINSTORMING</span>
            </div>

            {/* Kinetic Headline: MENCARI IDE */}
            <div
              style={{
                transform: `scale(${sp2BTitle}) translateY(${interpolate(sp2BTitle, [0, 1], [25, 0])}px)`,
                opacity: sp2BTitle,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: TECH_COLORS.textSecondary, letterSpacing: 2 }}>
                BERLANJUT KE...
              </div>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 950,
                  color: "#10b981",
                  letterSpacing: -1,
                  textShadow: "0 0 45px rgba(16, 185, 129, 0.5)",
                }}
              >
                MENCARI IDE
              </div>
            </div>

            {/* Symmetrical AI Idea Hub */}
            <div
              style={{
                transform: `scale(${sp2BHub}) translateY(${interpolate(sp2BHub, [0, 1], [30, 0])}px)`,
                opacity: sp2BHub,
                width: "100%",
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: "1.5px solid rgba(16, 185, 129, 0.4)",
                borderRadius: 22,
                padding: "26px 30px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              {/* Center Glowing Idea Orb */}
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 24,
                  backgroundColor: "rgba(16, 185, 129, 0.18)",
                  border: "2px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 35px rgba(16, 185, 129, 0.45)",
                }}
              >
                <FaLightbulb size={36} color="#10b981" />
              </div>

              {/* 3 Symmetrical Idea Chips */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 14,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.12)",
                    border: "1.5px solid rgba(139, 92, 246, 0.45)",
                    borderRadius: 16,
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <FaBrain size={16} color="#8b5cf6" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    &ldquo;Fitur Viral&rdquo;
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: "1.5px solid rgba(16, 185, 129, 0.45)",
                    borderRadius: 16,
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <FaRobot size={16} color="#10b981" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    &ldquo;50 Ide Instan&rdquo;
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1.5px solid rgba(56, 189, 248, 0.45)",
                    borderRadius: 16,
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <FaSearch size={16} color="#38bdf8" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    &ldquo;Auto-Prompt&rdquo;
                  </span>
                </div>
              </div>

              {/* Subtext note */}
              <div style={{ fontSize: 13, color: TECH_COLORS.textMuted, textAlign: "center" }}>
                Semua ide dicari via prompt tanpa riset kebutuhan pengguna nyata
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ─── CONNECTIVE DATA RAIL 2 (Station 2B -> 2C) ────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: 2480,
          top: "50%",
          transform: "translateY(-50%)",
          width: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          zIndex: 8,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 3,
            background: "linear-gradient(90deg, #10b981 0%, #ef4444 100%)",
            boxShadow: "0 0 16px rgba(239, 68, 68, 0.7)",
          }}
        />
        <div
          style={{
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 2,
            color: "#ef4444",
            backgroundColor: "rgba(10, 15, 29, 0.8)",
            padding: "4px 12px",
            borderRadius: 10,
            border: "1px solid rgba(239, 68, 68, 0.4)",
          }}
        >
          CAMERA SLIDE &gt;&gt; KLIMAKS
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 2C: "BAHKAN SAMPAI MEMBUAT KEPUTUSAN KEPUTUSAN BESAR."
          (Lines 7-8 Combined into 1 Dynamic Slide)
          Position: X = 2800, Y = 0
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={2800} stationY={0} camera={camera}>
        <SceneContainer accentColor="#ef4444">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 22,
            }}
          >
            {/* Pill Badge */}
            <div
              style={{
                transform: `scale(${sp2CTag})`,
                opacity: sp2CTag,
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 22px",
                borderRadius: 24,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1.5px solid rgba(239, 68, 68, 0.6)",
                color: "#ef4444",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: 1.5,
              }}
            >
              <FaExclamationTriangle size={15} color="#ef4444" />
              <span>LEVEL 03 // CRITICAL IMPACT</span>
            </div>

            {/* Kinetic Headline: Combined "BAHKAN SAMPAI..." + "KEPUTUSAN KEPUTUSAN BESAR!" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 4,
              }}
            >
              {/* Line 7: Bahkan Sampai... */}
              <div
                style={{
                  transform: `scale(${sp2CLeadIn}) translateY(${interpolate(sp2CLeadIn, [0, 1], [18, 0])}px)`,
                  opacity: sp2CLeadIn,
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#f59e0b",
                  letterSpacing: 2,
                  textShadow: "0 0 25px rgba(245, 158, 11, 0.5)",
                }}
              >
                BAHKAN SAMPAI...
              </div>

              {/* Line 8: Keputusan Keputusan Besar! */}
              <div
                style={{
                  transform: `scale(${sp2CTitle}) translateY(${interpolate(sp2CTitle, [0, 1], [22, 0])}px)`,
                  opacity: sp2CTitle,
                  fontSize: 56,
                  fontWeight: 950,
                  color: "#ef4444",
                  letterSpacing: -0.5,
                  textShadow: "0 0 45px rgba(239, 68, 68, 0.7)",
                }}
              >
                KEPUTUSAN KEPUTUSAN BESAR!
              </div>
            </div>

            {/* Executive High-Stakes Decision Console */}
            <div
              style={{
                transform: `scale(${sp2CConsole}) translateY(${interpolate(sp2CConsole, [0, 1], [28, 0])}px)`,
                opacity: sp2CConsole,
                width: "100%",
                backgroundColor: "rgba(10, 15, 29, 0.96)",
                border: "1.5px solid rgba(239, 68, 68, 0.5)",
                borderRadius: 24,
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Console Bar */}
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
                  <FaExclamationTriangle size={16} color="#ef4444" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    EXECUTIVE DECISION CONSOLE
                  </span>
                </div>

                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 10,
                    backgroundColor: "rgba(239, 68, 68, 0.18)",
                    border: "1px solid #ef4444",
                    color: "#ef4444",
                    fontSize: 12,
                    fontWeight: 900,
                  }}
                >
                  CRITICAL RISK
                </span>
              </div>

              {/* Console Body */}
              <div
                style={{
                  padding: "22px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                    borderLeft: "4px solid #ef4444",
                    borderRadius: "0 14px 14px 0",
                    padding: "16px 20px",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#ef4444", letterSpacing: 1 }}>
                    KEPUTUSAN EKSEKUTIF VIA CHATBOT:
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#f8fafc", lineHeight: 1.45, marginTop: 4 }}>
                    &ldquo;Rombak Total Arsitektur & Core Database Berdasarkan Rekomendasi Chatbot&rdquo;
                  </div>
                </div>

                {/* Warning Strip */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#ef4444",
                  }}
                >
                  <FaTerminal size={14} color="#ef4444" />
                  <span>SEMUA DISETUJUI HANYA BERMODALKAN JAWABAN PROMPT AI!</span>
                </div>
              </div>
            </div>

            {/* 3 Staggered Impact Badges (Simetris 3 Kolom, Tegak 0deg) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
                width: "100%",
              }}
            >
              {/* Badge 1: Rombak Tim */}
              <div
                style={{
                  transform: `scale(${sp2CBadge1})`,
                  opacity: sp2CBadge1,
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
                <FaUserTie size={19} color="#f59e0b" />
                <span style={{ fontSize: 15, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                  Rombak Tim
                </span>
              </div>

              {/* Badge 2: Migrasi Sistem */}
              <div
                style={{
                  transform: `scale(${sp2CBadge2})`,
                  opacity: sp2CBadge2,
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
                <FaDatabase size={19} color="#ef4444" />
                <span style={{ fontSize: 15, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                  Migrasi Sistem
                </span>
              </div>

              {/* Badge 3: Budget Proyek */}
              <div
                style={{
                  transform: `scale(${sp2CBadge3})`,
                  opacity: sp2CBadge3,
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
                <FaMoneyBillWave size={19} color="#8b5cf6" />
                <span style={{ fontSize: 15, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                  Budget Proyek
                </span>
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>
    </div>
  );
};
