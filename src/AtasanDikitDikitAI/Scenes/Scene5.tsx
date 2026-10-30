import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  FaBrain,
  FaClock,
  FaCode,
  FaDatabase,
  FaExclamationTriangle,
  FaFire,
  FaNetworkWired,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { CameraPosition } from "../types";
import { SceneContainer } from "../Components/SceneContainer";
import { DepthOfFieldWrapper } from "../Components/DepthOfFieldWrapper";
import { TECH_COLORS } from "../constants";

const FONT_SANS = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

interface Scene5Props {
  camera: CameraPosition;
}

export const Scene5: React.FC<Scene5Props> = ({ camera }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset frame relative to Scene 5 entrance (Global Frame 810 - 1145)
  const relFrame = Math.max(0, frame - 810);

  // =========================================================================
  // ⏱️ SUB-BEAT SPRINGS FOR THE 3 STATIONS (Like Scene 2):
  // - Station 5A (relFrame 0 - 115)  : Line 17 - "Maksud informasi AI"
  // - Station 5B (relFrame 115 - 225): Line 18 - "Dampak ke sistem lain"
  // - Station 5C (relFrame 225 - 335): Line 19 - "Dampak ke karyawan"
  // =========================================================================

  // Station 5A Springs (Line 17)
  const sp5ATag = spring({ frame: relFrame, fps, config: { damping: 14, stiffness: 90 } });
  const sp5ALeadIn = spring({ frame: Math.max(0, relFrame - 6), fps, config: { damping: 14, stiffness: 85 } });
  const sp5ATitle = spring({ frame: Math.max(0, relFrame - 12), fps, config: { damping: 13, stiffness: 95 } });
  const sp5ACard = spring({ frame: Math.max(0, relFrame - 20), fps, config: { damping: 15, stiffness: 80, mass: 1 } });

  // Station 5B Springs (Line 18)
  const sp5BTag = spring({ frame: Math.max(0, relFrame - 118), fps, config: { damping: 14, stiffness: 90 } });
  const sp5BLeadIn = spring({ frame: Math.max(0, relFrame - 124), fps, config: { damping: 14, stiffness: 85 } });
  const sp5BTitle = spring({ frame: Math.max(0, relFrame - 130), fps, config: { damping: 13, stiffness: 95 } });
  const sp5BCard = spring({ frame: Math.max(0, relFrame - 138), fps, config: { damping: 15, stiffness: 80, mass: 1 } });

  // Station 5C Springs (Line 19)
  const sp5CTag = spring({ frame: Math.max(0, relFrame - 228), fps, config: { damping: 14, stiffness: 90 } });
  const sp5CLeadIn = spring({ frame: Math.max(0, relFrame - 234), fps, config: { damping: 14, stiffness: 85 } });
  const sp5CTitle = spring({ frame: Math.max(0, relFrame - 240), fps, config: { damping: 13, stiffness: 95 } });
  const sp5CHud = spring({ frame: Math.max(0, relFrame - 248), fps, config: { damping: 16, stiffness: 80, mass: 1 } });
  const sp5CBadge1 = spring({ frame: Math.max(0, relFrame - 262), fps, config: { damping: 12, stiffness: 110 } });
  const sp5CBadge2 = spring({ frame: Math.max(0, relFrame - 274), fps, config: { damping: 12, stiffness: 110 } });
  const sp5CBadge3 = spring({ frame: Math.max(0, relFrame - 286), fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", fontFamily: FONT_SANS }}>
      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 5A: "MINIMAL HARUS TAHU, APA MAKSUD DARI INFORMASI AI..?"
          (Line 17) - Position: X = 0, Y = 0
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={0} stationY={0} camera={camera}>
        <SceneContainer accentColor="#06b6d4">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
            }}
          >
            {/* Pill Badge */}
            <div
              style={{
                transform: `scale(${sp5ATag})`,
                opacity: sp5ATag,
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 22px",
                borderRadius: 24,
                backgroundColor: "rgba(6, 182, 212, 0.14)",
                border: "1.5px solid rgba(6, 182, 212, 0.5)",
                color: "#06b6d4",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: 1.5,
              }}
            >
              <FaBrain size={15} color="#06b6d4" />
              <span>PILAR 01 // MAKSUD & KONTEKS AI</span>
            </div>

            {/* Kinetic Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  transform: `scale(${sp5ALeadIn}) translateY(${interpolate(sp5ALeadIn, [0, 1], [18, 0])}px)`,
                  opacity: sp5ALeadIn,
                  fontSize: 24,
                  fontWeight: 800,
                  color: TECH_COLORS.textSecondary,
                  letterSpacing: 2,
                }}
              >
                MINIMAL HARUS TAHU...
              </div>
              <div
                style={{
                  transform: `scale(${sp5ATitle}) translateY(${interpolate(sp5ATitle, [0, 1], [22, 0])}px)`,
                  opacity: sp5ATitle,
                  fontSize: 54,
                  fontWeight: 950,
                  color: "#06b6d4",
                  letterSpacing: -0.5,
                  textShadow: "0 0 45px rgba(6, 182, 212, 0.65)",
                }}
              >
                APA MAKSUD INFORMASI AI?
              </div>
            </div>

            {/* AI Context Comprehension Console Card */}
            <div
              style={{
                transform: `scale(${sp5ACard}) translateY(${interpolate(sp5ACard, [0, 1], [30, 0])}px)`,
                opacity: sp5ACard,
                width: "100%",
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: "1.5px solid rgba(6, 182, 212, 0.45)",
                borderRadius: 22,
                padding: "26px 32px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(6, 182, 212, 0.18)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaBrain size={20} color="#06b6d4" />
                  <span style={{ fontSize: 16, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    AI Context Comprehension
                  </span>
                </div>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 12,
                    backgroundColor: "rgba(6, 182, 212, 0.15)",
                    color: "#06b6d4",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  ENGINEERING LOGIC
                </span>
              </div>

              {/* Comprehension Item 1 */}
              <div
                style={{
                  backgroundColor: "rgba(3, 7, 18, 0.7)",
                  borderLeft: "3.5px solid #06b6d4",
                  borderRadius: "0 14px 14px 0",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <FaSearch size={20} color="#06b6d4" />
                <span style={{ fontSize: 15, fontWeight: 700, color: TECH_COLORS.textPrimary }}>
                  Bukan sekadar membaca teks, tapi paham logika sistem dibaliknya
                </span>
              </div>

              {/* Comprehension Item 2 */}
              <div
                style={{
                  backgroundColor: "rgba(3, 7, 18, 0.7)",
                  borderLeft: "3.5px solid #10b981",
                  borderRadius: "0 14px 14px 0",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <FaCode size={20} color="#10b981" />
                <span style={{ fontSize: 15, fontWeight: 700, color: TECH_COLORS.textPrimary }}>
                  Mengetahui batasan, trade-off, dan asumsi yang dipakai AI
                </span>
              </div>

              <div style={{ fontSize: 13, color: TECH_COLORS.textMuted, textAlign: "center" }}>
                Jangan asal approve tanpa paham apa yang sebenarnya diperintahkan chatbot
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ─── CONNECTIVE DATA RAIL 1 (Station 5A -> 5B) ────────────────────── */}
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
            background: "linear-gradient(90deg, #06b6d4 0%, #f59e0b 100%)",
            boxShadow: "0 0 16px rgba(6, 182, 212, 0.6)",
          }}
        />
        <div
          style={{
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 2,
            color: "#f59e0b",
            backgroundColor: "rgba(10, 15, 29, 0.85)",
            padding: "4px 12px",
            borderRadius: 10,
            border: "1px solid rgba(245, 158, 11, 0.35)",
          }}
        >
          CAMERA SLIDE &gt;&gt; DAMPAK SISTEMIK
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 5B: "APA DAMPAK KE SISTEM YANG LAIN KETIKA KITA TERAPKAN..?"
          (Line 18) - Position: X = 1400, Y = 0
      ═══════════════════════════════════════════════════════════════════════ */}
      <DepthOfFieldWrapper stationX={1400} stationY={0} camera={camera}>
        <SceneContainer accentColor="#f59e0b">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
            }}
          >
            {/* Pill Badge */}
            <div
              style={{
                transform: `scale(${sp5BTag})`,
                opacity: sp5BTag,
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 22px",
                borderRadius: 24,
                backgroundColor: "rgba(245, 158, 11, 0.14)",
                border: "1.5px solid rgba(245, 158, 11, 0.5)",
                color: "#f59e0b",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: 1.5,
              }}
            >
              <FaNetworkWired size={15} color="#f59e0b" />
              <span>PILAR 02 // DAMPAK SISTEMIK & ARSITEKTUR</span>
            </div>

            {/* Kinetic Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  transform: `scale(${sp5BLeadIn}) translateY(${interpolate(sp5BLeadIn, [0, 1], [18, 0])}px)`,
                  opacity: sp5BLeadIn,
                  fontSize: 24,
                  fontWeight: 800,
                  color: TECH_COLORS.textSecondary,
                  letterSpacing: 2,
                }}
              >
                PERTANYAAN KEDUA...
              </div>
              <div
                style={{
                  transform: `scale(${sp5BTitle}) translateY(${interpolate(sp5BTitle, [0, 1], [22, 0])}px)`,
                  opacity: sp5BTitle,
                  fontSize: 54,
                  fontWeight: 950,
                  color: "#f59e0b",
                  letterSpacing: -0.5,
                  textShadow: "0 0 45px rgba(245, 158, 11, 0.65)",
                }}
              >
                APA DAMPAK KE SISTEM LAIN?
              </div>
            </div>

            {/* Multi-Service Architecture Dependency HUD Card */}
            <div
              style={{
                transform: `scale(${sp5BCard}) translateY(${interpolate(sp5BCard, [0, 1], [30, 0])}px)`,
                opacity: sp5BCard,
                width: "100%",
                backgroundColor: "rgba(10, 15, 29, 0.94)",
                border: "1.5px solid rgba(245, 158, 11, 0.45)",
                borderRadius: 22,
                padding: "26px 30px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(245, 158, 11, 0.18)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {/* 3 Connected Symmetrical Nodes */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  width: "100%",
                }}
              >
                {/* Node 1: Database */}
                <div
                  style={{
                    backgroundColor: "rgba(3, 7, 18, 0.75)",
                    border: "1.5px solid rgba(56, 189, 248, 0.4)",
                    borderRadius: 18,
                    padding: "18px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 8,
                  }}
                >
                  <FaDatabase size={24} color="#38bdf8" />
                  <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    Core Database
                  </span>
                  <span style={{ fontSize: 12, color: "#38bdf8" }}>
                    Schema Breaking
                  </span>
                </div>

                {/* Node 2: Microservices API */}
                <div
                  style={{
                    backgroundColor: "rgba(3, 7, 18, 0.75)",
                    border: "1.5px solid rgba(245, 158, 11, 0.4)",
                    borderRadius: 18,
                    padding: "18px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 8,
                  }}
                >
                  <FaServer size={24} color="#f59e0b" />
                  <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    Microservices API
                  </span>
                  <span style={{ fontSize: 12, color: "#f59e0b" }}>
                    Contract Failure
                  </span>
                </div>

                {/* Node 3: Auth & Security */}
                <div
                  style={{
                    backgroundColor: "rgba(3, 7, 18, 0.75)",
                    border: "1.5px solid rgba(16, 185, 129, 0.4)",
                    borderRadius: 18,
                    padding: "18px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 8,
                  }}
                >
                  <FaShieldAlt size={24} color="#10b981" />
                  <span style={{ fontSize: 15, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    Auth & Security
                  </span>
                  <span style={{ fontSize: 12, color: "#10b981" }}>
                    Vulnerability Risk
                  </span>
                </div>
              </div>

              {/* Warning Cascade Banner */}
              <div
                style={{
                  backgroundColor: "rgba(245, 158, 11, 0.12)",
                  borderLeft: "4px solid #f59e0b",
                  borderRadius: "0 14px 14px 0",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaExclamationTriangle size={18} color="#f59e0b" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    RISIKO SISTEM: CASCADE BREAKING CHANGES
                  </span>
                </div>
                <span style={{ fontSize: 12, color: "#f59e0b", fontWeight: 900 }}>
                  HIGH RISK
                </span>
              </div>

              <div style={{ fontSize: 13, color: TECH_COLORS.textMuted, textAlign: "center" }}>
                Satu baris saran AI bisa merusak puluhan service yang saling bergantung
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>

      {/* ─── CONNECTIVE DATA RAIL 2 (Station 5B -> 5C) ────────────────────── */}
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
            background: "linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)",
            boxShadow: "0 0 16px rgba(239, 68, 68, 0.7)",
          }}
        />
        <div
          style={{
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 2,
            color: "#ef4444",
            backgroundColor: "rgba(10, 15, 29, 0.85)",
            padding: "4px 12px",
            borderRadius: 10,
            border: "1px solid rgba(239, 68, 68, 0.35)",
          }}
        >
          CAMERA SLIDE &gt;&gt; BEBAN KARYAWAN
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATION 5C: "APA DAMPAK KE SETIAP KARYAWAN YANG MENGERJAKANNYA.?"
          (Line 19) - Position: X = 2800, Y = 0
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
              gap: 24,
            }}
          >
            {/* Pill Badge */}
            <div
              style={{
                transform: `scale(${sp5CTag})`,
                opacity: sp5CTag,
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
              <FaUsers size={15} color="#ef4444" />
              <span>PILAR 03 // BEBAN & DAMPAK KARYAWAN</span>
            </div>

            {/* Kinetic Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  transform: `scale(${sp5CLeadIn}) translateY(${interpolate(sp5CLeadIn, [0, 1], [18, 0])}px)`,
                  opacity: sp5CLeadIn,
                  fontSize: 24,
                  fontWeight: 800,
                  color: TECH_COLORS.textSecondary,
                  letterSpacing: 2,
                }}
              >
                PERTANYAAN PALING KRUSIAL...
              </div>
              <div
                style={{
                  transform: `scale(${sp5CTitle}) translateY(${interpolate(sp5CTitle, [0, 1], [22, 0])}px)`,
                  opacity: sp5CTitle,
                  fontSize: 54,
                  fontWeight: 950,
                  color: "#ef4444",
                  letterSpacing: -0.5,
                  textShadow: "0 0 45px rgba(239, 68, 68, 0.7)",
                }}
              >
                APA DAMPAK KE KARYAWAN?
              </div>
            </div>

            {/* Engineering Team Impact HUD Card */}
            <div
              style={{
                transform: `scale(${sp5CHud}) translateY(${interpolate(sp5CHud, [0, 1], [30, 0])}px)`,
                opacity: sp5CHud,
                width: "100%",
                backgroundColor: "rgba(10, 15, 29, 0.96)",
                border: "1.5px solid rgba(239, 68, 68, 0.5)",
                borderRadius: 24,
                padding: "26px 30px",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {/* Header with Team Status */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FaUsers size={22} color="#ef4444" />
                  <span style={{ fontSize: 16, fontWeight: 800, color: TECH_COLORS.textPrimary }}>
                    Human Developer Team Impact
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
                  BURNOUT ALERT
                </span>
              </div>

              {/* 3 Staggered Impact Indicators (3 Columns) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  width: "100%",
                }}
              >
                {/* Impact 1: Lembur Dadakan */}
                <div
                  style={{
                    transform: `scale(${sp5CBadge1})`,
                    opacity: sp5CBadge1,
                    backgroundColor: "rgba(239, 68, 68, 0.12)",
                    border: "1.5px solid rgba(239, 68, 68, 0.5)",
                    borderRadius: 18,
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 8,
                  }}
                >
                  <FaClock size={22} color="#ef4444" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Lembur Dadakan
                  </span>
                  <span style={{ fontSize: 11, color: TECH_COLORS.textSecondary }}>
                    Rombak arsitektur sia-sia
                  </span>
                </div>

                {/* Impact 2: Frustrasi Tim */}
                <div
                  style={{
                    transform: `scale(${sp5CBadge2})`,
                    opacity: sp5CBadge2,
                    backgroundColor: "rgba(245, 158, 11, 0.12)",
                    border: "1.5px solid rgba(245, 158, 11, 0.5)",
                    borderRadius: 18,
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 8,
                  }}
                >
                  <FaExclamationTriangle size={22} color="#f59e0b" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Stres & Frustrasi
                  </span>
                  <span style={{ fontSize: 11, color: TECH_COLORS.textSecondary }}>
                    Instruksi tidak masuk akal
                  </span>
                </div>

                {/* Impact 3: Technical Debt */}
                <div
                  style={{
                    transform: `scale(${sp5CBadge3})`,
                    opacity: sp5CBadge3,
                    backgroundColor: "rgba(168, 85, 247, 0.12)",
                    border: "1.5px solid rgba(168, 85, 247, 0.5)",
                    borderRadius: 18,
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 8,
                  }}
                >
                  <FaFire size={22} color="#a855f7" />
                  <span style={{ fontSize: 14, fontWeight: 900, color: TECH_COLORS.textPrimary }}>
                    Tech Debt Tinggi
                  </span>
                  <span style={{ fontSize: 11, color: TECH_COLORS.textSecondary }}>
                    Bug & sistem rapuh
                  </span>
                </div>
              </div>

              <div style={{ fontSize: 13, color: TECH_COLORS.textMuted, textAlign: "center" }}>
                Atasan yang asal copas AI, karyawan yang harus menanggung beban eksekusinya
              </div>
            </div>
          </div>
        </SceneContainer>
      </DepthOfFieldWrapper>
    </div>
  );
};

