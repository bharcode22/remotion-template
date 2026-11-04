import React from "react";
import {
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowRight,
  FaAward,
  FaBolt,
  FaCheckCircle,
  FaCheckDouble,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { SiDocker, SiGit, SiGithubactions, SiKubernetes } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";
import { CICD_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & SPRINGS (Frames 1245 - 1450)
  // Line 16: "Jadi, CI/CD membuat proses pengembangan dan deployment lebih cepat, konsisten, dan minim kesalahan."
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Badge Spring (F1248 - F1270)
  const spBadge = spring({
    frame: Math.max(0, frame - 1248),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F1254 - F1280)
  const spHeadline = spring({
    frame: Math.max(0, frame - 1254),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Benefit Cards Springs
  const spBenefit1 = spring({
    frame: Math.max(0, frame - 1266),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  const spBenefit2 = spring({
    frame: Math.max(0, frame - 1284),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  const spBenefit3 = spring({
    frame: Math.max(0, frame - 1302),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 4. DevOps Ecosystem Unified Loop Spring (F1324 - F1355)
  const spEcosystem = spring({
    frame: Math.max(0, frame - 1324),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 100 },
  });

  // 5. Outro Call-To-Action Celebration Banner (F1350 - F1380)
  const spOutroPill = spring({
    frame: Math.max(0, frame - 1350),
    fps,
    config: { damping: 12, stiffness: 110 },
  });

  // Ambient Loop Wave
  const pulseWave = Math.sin((frame * Math.PI) / 12) * 0.5 + 0.5;

  return (
    <SceneContainer accentColor={CICD_COLORS.pipelineCyan}>
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
            1. TOP CATEGORY BADGE & GRAND FINALE HEADLINE (LINE 16)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spBadge}) translateY(${(1 - spBadge) * -20}px)`,
            opacity: spBadge,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(10, 24, 46, 0.94)",
            border: "1.5px solid rgba(6, 182, 212, 0.7)",
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.35)",
            marginBottom: 12,
          }}
        >
          <FaAward size={16} color="#06b6d4" />
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#38bdf8",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            KESIMPULAN CI/CD
          </span>
          <FaStar size={14} color="#f59e0b" />
        </div>

        {/* Spoken Headline (Line 16) */}
        <div
          style={{
            transform: `scale(${spHeadline}) translateY(${(1 - spHeadline) * -15}px)`,
            opacity: spHeadline,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#94a3b8",
              marginBottom: 4,
              letterSpacing: -0.3,
            }}
          >
            Jadi, CI/CD membuat proses pengembangan &amp; deployment...
          </div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: -1,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #06b6d4 0%, #10b981 40%, #c084fc 75%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 35px rgba(6, 182, 212, 0.6))",
              }}
            >
              Lebih Cepat, Konsisten, &amp; Minim Kesalahan!
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. THE 3 GOLDEN BENEFIT CARDS (Width: 960px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 960,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 22,
          }}
        >
          {/* BENEFIT 1: LEBIH CEPAT */}
          <div
            style={{
              transform: `scale(${spBenefit1}) translateY(${(1 - spBenefit1) * 20}px)`,
              opacity: spBenefit1,
              borderRadius: 22,
              backgroundColor: "rgba(8, 22, 38, 0.95)",
              border: "2px solid rgba(6, 182, 212, 0.65)",
              boxShadow:
                "0 14px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(6, 182, 212, 0.2)",
              padding: "20px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: "rgba(6, 182, 212, 0.18)",
                  border: "1.5px solid #06b6d4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 ${12 + pulseWave * 8}px rgba(6, 182, 212, 0.5)`,
                }}
              >
                <FaBolt size={28} color="#38bdf8" />
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
                  1. Lebih Cepat
                </div>
                <div style={{ fontSize: 15, color: "#94a3b8" }}>
                  Siklus rilis dari kode hingga live hanya dalam hitungan menit
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(6, 182, 212, 0.15)",
                border: "1.5px solid #06b6d4",
                fontSize: 18,
                fontWeight: 900,
                color: "#38bdf8",
                fontFamily: FONT_MONO,
              }}
            >
              ⚡ 30X LEBIH CEPAT
            </div>
          </div>

          {/* BENEFIT 2: KONSISTEN */}
          <div
            style={{
              transform: `scale(${spBenefit2}) translateY(${(1 - spBenefit2) * 20}px)`,
              opacity: spBenefit2,
              borderRadius: 22,
              backgroundColor: "rgba(6, 26, 20, 0.95)",
              border: "2px solid rgba(16, 185, 129, 0.65)",
              boxShadow:
                "0 14px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(16, 185, 129, 0.2)",
              padding: "20px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: "rgba(16, 185, 129, 0.18)",
                  border: "1.5px solid #10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 ${12 + pulseWave * 8}px rgba(16, 185, 129, 0.5)`,
                }}
              >
                <FaCogs size={28} color="#34d399" />
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
                  2. Konsisten
                </div>
                <div style={{ fontSize: 15, color: "#94a3b8" }}>
                  Standar build dan konfigurasi identik di setiap server
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1.5px solid #10b981",
                fontSize: 18,
                fontWeight: 900,
                color: "#34d399",
                fontFamily: FONT_MONO,
              }}
            >
              🔄 100% KONSISTEN
            </div>
          </div>

          {/* BENEFIT 3: MINIM KESALAHAN */}
          <div
            style={{
              transform: `scale(${spBenefit3}) translateY(${(1 - spBenefit3) * 20}px)`,
              opacity: spBenefit3,
              borderRadius: 22,
              backgroundColor: "rgba(22, 10, 36, 0.95)",
              border: "2px solid rgba(168, 85, 247, 0.65)",
              boxShadow:
                "0 14px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(168, 85, 247, 0.2)",
              padding: "20px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: "rgba(168, 85, 247, 0.18)",
                  border: "1.5px solid #a855f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 ${12 + pulseWave * 8}px rgba(168, 85, 247, 0.5)`,
                }}
              >
                <FaShieldAlt size={28} color="#c084fc" />
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
                  3. Minim Kesalahan
                </div>
                <div style={{ fontSize: 15, color: "#94a3b8" }}>
                  Testing otomatis mencegah bug dan human error sebelum rilis
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                border: "1.5px solid #a855f7",
                fontSize: 18,
                fontWeight: 900,
                color: "#c084fc",
                fontFamily: FONT_MONO,
              }}
            >
              🛡️ ZERO HUMAN ERROR
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. DEVOPS ECOSYSTEM UNIFIED PIPELINE RIBBON (Width: 960px)
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spEcosystem})`,
            opacity: spEcosystem,
            width: 960,
            borderRadius: 20,
            backgroundColor: "rgba(8, 16, 28, 0.94)",
            border: "1.5px solid rgba(6, 182, 212, 0.45)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            boxSizing: "border-box",
          }}
        >
          {/* Step 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SiGit size={24} color="#f97316" />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>Code</span>
          </div>

          <FaArrowRight size={14} color="rgba(255, 255, 255, 0.3)" />

          {/* Step 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SiGithubactions size={24} color="#06b6d4" />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>CI Build &amp; Test</span>
          </div>

          <FaArrowRight size={14} color="rgba(255, 255, 255, 0.3)" />

          {/* Step 3 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SiDocker size={24} color="#38bdf8" />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>Package Image</span>
          </div>

          <FaArrowRight size={14} color="rgba(255, 255, 255, 0.3)" />

          {/* Step 4 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SiKubernetes size={24} color="#a855f7" />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>CD Deploy</span>
          </div>

          <FaArrowRight size={14} color="rgba(255, 255, 255, 0.3)" />

          {/* Step 5 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                border: "1.5px solid #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaRocket size={14} color="#10b981" />
            </div>
            <span style={{ fontSize: 14, fontWeight: 800, color: "#10b981" }}>Live di User</span>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            4. OUTRO CALL-TO-ACTION CELEBRATION BANNER (F1350+)
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 1350 && (
          <div
            style={{
              transform: `scale(${spOutroPill}) translateY(${(1 - spOutroPill) * 15}px)`,
              opacity: spOutroPill,
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 36px",
              borderRadius: 9999,
              backgroundColor: "rgba(8, 24, 42, 0.98)",
              border: "2px solid #06b6d4",
              boxShadow: `0 0 ${25 + pulseWave * 20}px rgba(6, 182, 212, 0.6), 0 0 50px rgba(16, 185, 129, 0.3)`,
            }}
          >
            <FaCheckCircle size={16} color="#10b981" />
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                fontFamily: FONT_MONO,
                color: "#f8fafc",
                letterSpacing: 0.6,
              }}
            >
              DEVOPS EXCELLENCE:{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #38bdf8 0%, #34d399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                OTOMATISASIKAN PIPELINE, TINGKATKAN KUALITAS SOFTWARE
              </span>
            </span>
            <FaCheckDouble size={16} color="#38bdf8" />
          </div>
        )}
      </div>
    </SceneContainer>
  );
};
