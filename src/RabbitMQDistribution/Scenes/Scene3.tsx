import React from "react";
import {
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaCheckCircle,
  FaDesktop,
  FaFolderOpen,
  FaHdd,
  FaServer,
  FaTerminal,
  FaTv,
} from "react-icons/fa";
import { SiDebian } from "react-icons/si";
import { SceneContainer } from "../Components/SceneContainer";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING SPRINGS & TIMELINE (Frames 328 - 615)
  // Line 6 & 7:
  // - "Di kantor, aku memiliki beberapa produk yang masing-masing dilengkapi PC berbasis Linux." (F333 - F498)
  // - "Di dalamnya, terdapat aplikasi aku yang berjalan secara lokal." (F510 - F597)
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Top Category Badge Spring (F330 - F350)
  const spBadge = spring({
    frame: Math.max(0, frame - 330),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // 2. Headline Spring (F335 - F365)
  const spHeadline = spring({
    frame: Math.max(0, frame - 335),
    fps,
    config: { damping: 14, stiffness: 95 },
  });

  // 3. Hardware Products Grid Spring (F360 - F395)
  const spProducts = spring({
    frame: Math.max(0, frame - 360),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 105 },
  });

  // 4. Line 7 Inspection Banner Spring (F496 - F520)
  const spInspectBanner = spring({
    frame: Math.max(0, frame - 496),
    fps,
    config: { damping: 13, stiffness: 120 },
  });

  // 5. Local App Terminal Spring (Line 7: F505 - F540)
  const spAppWindow = spring({
    frame: Math.max(0, frame - 505),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // Active States
  const isProductsActive = frame >= 360;
  const isLine7Active = frame >= 496;

  // Pulse wave for status lights & ambient glow
  const pulseWave = Math.sin((frame * Math.PI) / 12) * 0.5 + 0.5;

  return (
    <SceneContainer accentColor="#e11d48">
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
            1. TOP CATEGORY BADGE & HEADLINE (LINE 6)
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
            backgroundColor: "rgba(28, 8, 18, 0.94)",
            border: "1.5px solid rgba(225, 29, 72, 0.65)",
            boxShadow: "0 0 25px rgba(225, 29, 72, 0.35)",
            marginBottom: 14,
          }}
        >
          <SiDebian size={17} color="#e11d48" />
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: "#f43f5e",
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            REAL-WORLD ARCHITECTURE // HARDWARE PC DEBIAN
          </span>
        </div>

        {/* Headline: "Di kantor, aku memiliki beberapa produk yang masing-masing dilengkapi PC berbasis Debian." */}
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
            Di kantor, aku memiliki beberapa produk
          </div>
          <h1
            style={{
              fontSize: 47,
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
              Masing-Masing Dilengkapi{" "}
            </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #e11d48 0%, #f43f5e 40%, #fb7185 75%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(225, 29, 72, 0.5))",
              }}
            >
              PC Berbasis Debian
            </span>
          </h1>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            2. PRODUCT HARDWARE SHOWCASE (3 DEDICATED DEBIAN PRODUCTS) - Width: 940px
           ═════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            transform: `scale(${spProducts})`,
            opacity: isProductsActive ? Math.min(1, spProducts) : 0,
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
              id: "PRODUK #1",
              title: "Smart Kiosk Display",
              role: "Interactive Touchscreen",
              hardware: "Intel Core i3 // Mini PC",
              os: "Debian 12 Bookworm",
              icon: <FaDesktop size={26} color="#38bdf8" />,
              osIcon: <SiDebian size={14} color="#e11d48" />,
              accent: "#38bdf8",
              delay: 362,
              previewTag: "DEBIAN 12 • 1080p",
            },
            {
              id: "PRODUK #2",
              title: "Digital Signage Totem",
              role: "Autonomous Media Player",
              hardware: "Industrial ARM64 Box",
              os: "Debian 12 Bookworm",
              icon: <FaTv size={26} color="#f43f5e" />,
              osIcon: <SiDebian size={14} color="#e11d48" />,
              accent: "#f43f5e",
              delay: 376,
              previewTag: "DEBIAN 12 • 4K LOOP",
            },
            {
              id: "PRODUK #3",
              title: "Interactive Retail Box",
              role: "Promo & POS Terminal",
              hardware: "Edge IPC Fanless",
              os: "Debian 12 Minimal",
              icon: <FaServer size={26} color="#a855f7" />,
              osIcon: <SiDebian size={14} color="#e11d48" />,
              accent: "#a855f7",
              delay: 390,
              previewTag: "DEBIAN 12 • STANDALONE",
            },
          ].map((prod) => {
            const spCard = spring({
              frame: Math.max(0, frame - prod.delay),
              fps,
              config: { damping: 13, stiffness: 120 },
            });
            return (
              <div
                key={prod.id}
                style={{
                  transform: `scale(${spCard}) translateY(${(1 - spCard) * 20}px)`,
                  opacity: Math.min(1, spCard),
                  borderRadius: 20,
                  backgroundColor: "rgba(10, 18, 32, 0.94)",
                  border: `1.8px solid ${prod.accent}55`,
                  boxShadow: `0 16px 40px rgba(0, 0, 0, 0.8), 0 0 25px ${prod.accent}20`,
                  padding: "18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
              >
                {/* Product Badge Tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: 6,
                      backgroundColor: `${prod.accent}18`,
                      border: `1px solid ${prod.accent}50`,
                      fontSize: 10.5,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: prod.accent,
                      letterSpacing: 1.2,
                    }}
                  >
                    {prod.id}
                  </span>
                  <span
                    style={{
                      fontSize: 9.5,
                      fontFamily: FONT_MONO,
                      color: "#94a3b8",
                      fontWeight: 700,
                    }}
                  >
                    {prod.previewTag}
                  </span>
                </div>

                {/* Big Product Icon with Glow */}
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 16,
                    backgroundColor: `${prod.accent}15`,
                    border: `1.5px solid ${prod.accent}45`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 20px ${prod.accent}30`,
                    marginBottom: 10,
                  }}
                >
                  {prod.icon}
                </div>

                <div
                  style={{
                    fontSize: 15.5,
                    fontWeight: 900,
                    color: "#f8fafc",
                    marginBottom: 2,
                  }}
                >
                  {prod.title}
                </div>

                <div
                  style={{
                    fontSize: 11.5,
                    color: "#94a3b8",
                    marginBottom: 10,
                  }}
                >
                  {prod.role}
                </div>

                {/* Embedded Linux Hardware Spec Chip */}
                <div
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      fontSize: 10.5,
                      fontFamily: FONT_MONO,
                      color: "#cbd5e1",
                      fontWeight: 700,
                    }}
                  >
                    {prod.osIcon}
                    <span>{prod.os}</span>
                  </div>
                  <div
                    style={{
                      fontSize: 9.5,
                      color: "#64748b",
                      fontFamily: FONT_MONO,
                    }}
                  >
                    {prod.hardware}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            3. LINE 7 INSPECTION TITLE (F496 - F615)
            "Di dalamnya, terdapat aplikasi aku yang berjalan secara lokal."
           ═════════════════════════════════════════════════════════════════ */}
        {isLine7Active && (
          <div
            style={{
              transform: `scale(${spInspectBanner})`,
              opacity: spInspectBanner,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              borderRadius: 999,
              backgroundColor: "rgba(225, 29, 72, 0.16)",
              border: "1.2px solid rgba(225, 29, 72, 0.6)",
              marginBottom: 12,
            }}
          >
            <SiDebian size={13} color="#f43f5e" />
            <span
              style={{
                fontSize: 12,
                fontFamily: FONT_MONO,
                fontWeight: 800,
                color: "#f43f5e",
                letterSpacing: 1.2,
                textTransform: "uppercase",
              }}
            >
              NASIKAH LINE 7 // DAEMON SERVICE PADA DEBIAN
            </span>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            4. LOCAL APP RUNNING WINDOW (LINE 7: F505 - F615)
           ═════════════════════════════════════════════════════════════════ */}
        {frame >= 505 && (
          <div
            style={{
              transform: `scale(${spAppWindow}) translateY(${(1 - spAppWindow) * 20}px)`,
              opacity: spAppWindow,
              width: 940,
              borderRadius: 22,
              backgroundColor: "rgba(6, 12, 24, 0.96)",
              border: "2px solid rgba(225, 29, 72, 0.5)",
              boxShadow:
                "0 22px 55px rgba(0, 0, 0, 0.9), 0 0 35px rgba(225, 29, 72, 0.25)",
              overflow: "hidden",
              marginBottom: 18,
              boxSizing: "border-box",
            }}
          >
            {/* Window Header */}
            <div
              style={{
                height: 42,
                padding: "0 20px",
                backgroundColor: "rgba(12, 22, 38, 0.98)",
                borderBottom: "1px solid rgba(225, 29, 72, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 7 }}>
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
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <FaTerminal size={11} color="#f43f5e" />
                systemctl status local-client-app.service
              </div>

              {/* Active Status Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 10.5,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: "#22c55e",
                  padding: "3px 10px",
                  borderRadius: 999,
                  backgroundColor: "rgba(34, 197, 94, 0.16)",
                  border: "1px solid #22c55e",
                  boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#22c55e",
                    boxShadow: "0 0 6px #22c55e",
                  }}
                />
                active (running)
              </div>
            </div>

            {/* Window Content */}
            <div
              style={{
                padding: "18px 22px",
                fontFamily: FONT_MONO,
                fontSize: 13,
                lineHeight: 1.6,
                color: "#e2e8f0",
                boxSizing: "border-box",
              }}
            >
              <div style={{ color: "#94a3b8", marginBottom: 6 }}>
                ● local-client-app.service - Native Debian Application Daemon
              </div>
              <div style={{ display: "flex", gap: 10, marginBottom: 3 }}>
                <span style={{ color: "#64748b" }}>&nbsp;&nbsp;Loaded:</span>
                <span style={{ color: "#f8fafc" }}>
                  /etc/systemd/system/local-client-app.service (enabled)
                </span>
              </div>
              <div style={{ display: "flex", gap: 10, marginBottom: 3 }}>
                <span style={{ color: "#64748b" }}>&nbsp;&nbsp;Distro:</span>
                <span
                  style={{
                    color: "#fb7185",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontWeight: 700,
                  }}
                >
                  <SiDebian size={13} color="#e11d48" />
                  Debian GNU/Linux 12 (bookworm) • Kernel 6.1 LTS
                </span>
              </div>
              <div style={{ display: "flex", gap: 10, marginBottom: 3 }}>
                <span style={{ color: "#64748b" }}>&nbsp;&nbsp;Status:</span>
                <span style={{ color: "#22c55e", fontWeight: 800 }}>
                  &quot;Berjalan secara lokal di runtime Debian masing-masing produk&quot;
                </span>
              </div>
              <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
                <span style={{ color: "#64748b" }}>&nbsp;&nbsp;Storage:</span>
                <span style={{ color: "#38bdf8" }}>
                  <FaFolderOpen size={10} style={{ marginRight: 4 }} />
                  /var/local/storage/media_cache/ [14.2 GB Local NVMe SSD]
                </span>
              </div>

              {/* 3 Architectural Badges */}
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 14,
                  paddingTop: 12,
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(34, 197, 94, 0.12)",
                    border: "1px solid rgba(34, 197, 94, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 10.5,
                    color: "#22c55e",
                    fontWeight: 800,
                  }}
                >
                  <FaCheckCircle size={11} color="#22c55e" />
                  <span>BERJALAN LOKAL</span>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(225, 29, 72, 0.12)",
                    border: "1px solid rgba(225, 29, 72, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 10.5,
                    color: "#fb7185",
                    fontWeight: 800,
                  }}
                >
                  <SiDebian size={12} color="#e11d48" />
                  <span>DEBIAN RUNTIME</span>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: 10,
                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 10.5,
                    color: "#38bdf8",
                    fontWeight: 800,
                  }}
                >
                  <FaHdd size={11} color="#38bdf8" />
                  <span>LOCAL STORAGE READY</span>
                </div>
              </div>
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
            border: "1px solid rgba(225, 29, 72, 0.35)",
            boxShadow: `0 0 ${16 + pulseWave * 10}px rgba(225, 29, 72, 0.25)`,
          }}
        >
          <SiDebian size={14} color="#e11d48" />
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 800,
              fontFamily: FONT_MONO,
              color: "#94a3b8",
              letterSpacing: 0.8,
            }}
          >
            ARSITEKTUR DASAR:{" "}
            <span style={{ color: "#f8fafc" }}>
              APLIKASI LOKAL PADA PC DEBIAN STANDALONE
            </span>
          </span>
        </div>
      </div>
    </SceneContainer>
  );
};
