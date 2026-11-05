import React from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  FaArrowDown,
  FaArrowUp,
  FaBolt,
  FaBoxes,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaCodeBranch,
  FaCog,
  FaCube,
  FaDatabase,
  FaGlobeAmericas,
  FaLayerGroup,
  FaLock,
  FaRocket,
  FaServer,
  FaSpinner,
} from "react-icons/fa";
import { SiDocker, SiGitlab } from "react-icons/si";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const SERVERS_DATA = [
  { id: "01", name: "SRV-01", region: "Tokyo", finishF: 1014 },
  { id: "02", name: "SRV-02", region: "Singapore", finishF: 1017 },
  { id: "03", name: "SRV-03", region: "Frankfurt", finishF: 1020 },
  { id: "04", name: "SRV-04", region: "Virginia", finishF: 1023 },
  { id: "05", name: "SRV-05", region: "London", finishF: 1026 },
  { id: "06", name: "SRV-06", region: "Sydney", finishF: 1029 },
  { id: "07", name: "SRV-07", region: "São Paulo", finishF: 1032 },
  { id: "264", name: "SRV-264+", region: "Global Fleet", finishF: 1036 },
];

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─────────────────────────────────────────────────────────────────────────────
  // 🎥 CAMERA SLIDING MATH (4 Stages, 1080px each = 4320px panoramic canvas)
  // Stage 0: Line 10 (GitLab Pipeline, F534 - F660)
  // Stage 1: Line 11 (Build Artifact, F660 - F780)
  // Stage 2: Line 12 (Cloud Storage Registry, F780 - F970)
  // Stage 3: Line 13 (Distribution to All Products/Servers, F970 - F1065)
  // ─────────────────────────────────────────────────────────────────────────────

  // Slide 0 -> 1: Camera slides from Stage 0 to Stage 1 (F650 - F685)
  const slide0to1 = interpolate(frame, [650, 685], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Slide 1 -> 2: Camera slides from Stage 1 to Stage 2 (F770 - F805)
  const slide1to2 = interpolate(frame, [770, 805], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Slide 2 -> 3: Camera slides from Stage 2 to Stage 3 (F955 - F990)
  const slide2to3 = interpolate(frame, [955, 990], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Combined horizontal camera position (0 -> 1080 -> 2160 -> 3240)
  const cameraX = slide0to1 * 1080 + slide1to2 * 1080 + slide2to3 * 1080;

  // Dynamic Camera Zoom (Pulls back slightly during slides for weightlessness)
  const slideDip =
    Math.sin(slide0to1 * Math.PI) * 0.05 +
    Math.sin(slide1to2 * Math.PI) * 0.05 +
    Math.sin(slide2to3 * Math.PI) * 0.05;
  const cameraZoom = 1.0 - slideDip;

  // Ambient oscillation
  const pulseWave = Math.sin((frame * Math.PI) / 10) * 0.5 + 0.5;

  // ─────────────────────────────────────────────────────────────────────────────
  // 🌈 DYNAMIC MORPHING BACKGROUND LIGHTING & ATMOSPHERE
  // Smoothly shifts atmosphere color as camera pans across stages:
  // Stage 0: GitLab Orange (#fc6d26) & Purple (#6b4fbb)
  // Stage 1: Docker Cyan (#38bdf8) & Deep Cobalt (#0284c7)
  // Stage 2: Cloud Turquoise (#06b6d4) & Sky Blue (#38bdf8)
  // Stage 3: Emerald Success (#10b981) & Mint (#059669)
  // ─────────────────────────────────────────────────────────────────────────────

  // Primary Glow RGB
  const glowR = Math.round(
    interpolate(cameraX, [0, 1080, 2160, 3240], [252, 56, 6, 16], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const glowG = Math.round(
    interpolate(cameraX, [0, 1080, 2160, 3240], [109, 189, 182, 185], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const glowB = Math.round(
    interpolate(cameraX, [0, 1080, 2160, 3240], [38, 248, 212, 129], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Secondary Glow RGB
  const secR = Math.round(
    interpolate(cameraX, [0, 1080, 2160, 3240], [107, 2, 14, 5], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const secG = Math.round(
    interpolate(cameraX, [0, 1080, 2160, 3240], [79, 132, 165, 150], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const secB = Math.round(
    interpolate(cameraX, [0, 1080, 2160, 3240], [187, 199, 233, 105], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Deep Parallax Offset (moves at 0.35x speed for multi-plane depth)
  const parallaxX = cameraX * 0.35;

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ STAGE-SPECIFIC SPRINGS & DYNAMICS
  // ─────────────────────────────────────────────────────────────────────────────

  // Stage 0 (Line 10, F534 - F660): GitLab Pipeline & Active Build Animation
  const spStage0 = spring({
    frame: Math.max(0, frame - 534),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // Step 1: Automated Lint & Test (F536 - F562)
  const testCounter = Math.min(
    142,
    Math.round(
      interpolate(frame, [538, 558], [0, 142], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );
  const isTestPassed = frame >= 560;

  // Energy pulse conduit from Test -> Build (F560 - F570)
  const pipe1to2Laser = interpolate(frame, [560, 570], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Step 2: Active Build & Compilation Process (F568 - F626)
  const isBuilding = frame >= 568 && frame < 626;
  const isBuildDone = frame >= 626;

  // 0% -> 100% Build Progress
  const buildProgress = interpolate(frame, [568, 624], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  // Spinning Gear (revolves actively during build)
  const cogRotation = Math.round(((frame - 568) * 9) % 360);

  // Dynamic compilation metrics
  const compiledModules = Math.min(
    184,
    Math.round(
      interpolate(frame, [568, 616], [12, 184], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );
  const compiledMb = interpolate(frame, [568, 624], [1.2, 34.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  }).toFixed(1);

  // Energy pulse conduit from Build -> Artifact Ready (F624 - F636)
  const pipe2to3Laser = interpolate(frame, [624, 636], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isDispatchReady = frame >= 626;

  // Stage 1 (Line 11, F660+)
  const spStage1 = spring({
    frame: Math.max(0, frame - 680),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });
  const buildCubeScale = spring({
    frame: Math.max(0, frame - 700),
    fps,
    config: { damping: 11, mass: 0.8, stiffness: 130 },
  });

  // Stage 2 (Line 12, F780 - F970): Upload to Central Cloud Storage Vault
  const spStage2 = spring({
    frame: Math.max(0, frame - 785),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });
  const cloudBob = Math.sin((frame * Math.PI) / 14) * 6;

  // Artifact Package Spring entrance (F792+)
  const spArtifactPkg = spring({
    frame: Math.max(0, frame - 792),
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 120 },
  });

  // Upload States: Preparing (F780 - F810), Active Upload (F810 - F875), Stored (F875+)
  const isUploading = frame >= 810 && frame < 876;
  const isUploaded = frame >= 876;

  // Dynamic Upload Progress 0% -> 100%
  const uploadProgress = interpolate(frame, [810, 875], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  // Uploaded Megabytes: 0 MB -> 34.2 MB
  const uploadedMb = interpolate(frame, [810, 875], [0, 34.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  }).toFixed(1);

  // Dynamic Upload Speed (MB/s)
  const uploadSpeed = Math.round(
    interpolate(
      frame,
      [810, 825, 855, 875],
      [18, 96, 124, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );

  // Vault Lock Scale Spring upon upload completion (F876+)
  const vaultLockSpring = spring({
    frame: Math.max(0, frame - 876),
    fps,
    config: { damping: 10, mass: 0.6, stiffness: 140 },
  });

  // Shockwave radial pulse ring on upload lock (F876 - F915)
  const vaultShockwave = interpolate(frame, [876, 915], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stage 3 (Line 13, F970 - F1065): Download / Pull from Storage to All Server Fleet Nodes
  const spStage3 = spring({
    frame: Math.max(0, frame - 970),
    fps,
    config: { damping: 13, mass: 0.9, stiffness: 110 },
  });

  // Download States: Active Download (F985 - F1038), Synced (F1038+)
  const isDownloading = frame >= 985 && frame < 1038;
  const isDownloadDone = frame >= 1038;

  // Dynamic Download Progress 0% -> 100%
  const downloadProgress = interpolate(frame, [985, 1036], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  // Downloaded Megabytes: 0 MB -> 34.2 MB
  const downloadedMb = interpolate(frame, [985, 1036], [0, 34.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  }).toFixed(1);

  // Dynamic Download Speed (MB/s) - very fast parallel pull
  const downloadSpeed = Math.round(
    interpolate(
      frame,
      [985, 998, 1022, 1036],
      [42, 165, 230, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );

  // Dynamic counter of fully synced servers (0 -> 264+)
  const syncedServersCount = Math.min(
    264,
    frame < 1014
      ? 0
      : Math.round(
          interpolate(frame, [1014, 1036], [18, 264], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        )
  );

  // Final Synchronized Stamp spring (F1040+)
  const spSyncStamp = spring({
    frame: Math.max(0, frame - 1040),
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 130 },
  });

  // Breadcrumb current stage indicator (1, 2, 3, or 4)
  const currentStage =
    frame < 665 ? 1 : frame < 785 ? 2 : frame < 970 ? 3 : 4;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#030712",
        fontFamily: FONT_SANS,
      }}
    >
      {/* ═════════════════════════════════════════════════════════════════
          LAYER A: DYNAMIC MORPHING AMBIENT LIGHTING (SHIFTS WITH CAMERAX)
         ═════════════════════════════════════════════════════════════════ */}
      {/* Top Left Main Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: 850,
          height: 850,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${glowR}, ${glowG}, ${glowB}, ${0.16 + pulseWave * 0.05}) 0%, transparent 70%)`,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom Right Secondary Accent Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${secR}, ${secG}, ${secB}, ${0.14 + pulseWave * 0.04}) 0%, transparent 70%)`,
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      {/* Center Depth Glow */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 950,
          height: 950,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${glowR}, ${glowG}, ${glowB}, 0.08) 0%, transparent 75%)`,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* ═════════════════════════════════════════════════════════════════
          LAYER B: DEEP PARALLAX TECH GRID (SLIDES AT 0.35x SPEED)
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 2500,
          height: 1920,
          transform: `translateX(-${parallaxX}px)`,
          backgroundImage: `
            linear-gradient(rgba(${glowR}, ${glowG}, ${glowB}, 0.06) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(${glowR}, ${glowG}, ${glowB}, 0.06) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 50%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 50%, transparent 95%)",
          pointerEvents: "none",
        }}
      />

      {/* ═════════════════════════════════════════════════════════════════
          LAYER C: PERSISTENT FLOATING PIPELINE BREADCRUMB HUD
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 24px",
          borderRadius: 9999,
          backgroundColor: "rgba(10, 18, 36, 0.94)",
          border: `1.5px solid rgba(${glowR}, ${glowG}, ${glowB}, 0.6)`,
          boxShadow: `0 15px 35px rgba(0, 0, 0, 0.85), 0 0 25px rgba(${glowR}, ${glowG}, ${glowB}, 0.3)`,
        }}
      >
        {/* Step 1: GitLab */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            opacity: currentStage === 1 ? 1 : 0.45,
            color: currentStage === 1 ? "#fc6d26" : "#94a3b8",
            fontWeight: 900,
            fontSize: 13,
            fontFamily: FONT_MONO,
          }}
        >
          <SiGitlab size={15} color={currentStage === 1 ? "#fc6d26" : "#64748b"} />
          <span>1. GITLAB</span>
        </div>

        <span style={{ color: "rgba(255, 255, 255, 0.25)", fontSize: 14 }}>➔</span>

        {/* Step 2: Build */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            opacity: currentStage === 2 ? 1 : 0.45,
            color: currentStage === 2 ? "#38bdf8" : "#94a3b8",
            fontWeight: 900,
            fontSize: 13,
            fontFamily: FONT_MONO,
          }}
        >
          <SiDocker size={15} color={currentStage === 2 ? "#38bdf8" : "#64748b"} />
          <span>2. BUILD</span>
        </div>

        <span style={{ color: "rgba(255, 255, 255, 0.25)", fontSize: 14 }}>➔</span>

        {/* Step 3: Cloud Storage */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            opacity: currentStage === 3 ? 1 : 0.45,
            color: currentStage === 3 ? "#06b6d4" : "#94a3b8",
            fontWeight: 900,
            fontSize: 13,
            fontFamily: FONT_MONO,
          }}
        >
          <FaCloudUploadAlt size={16} color={currentStage === 3 ? "#06b6d4" : "#64748b"} />
          <span>3. CLOUD</span>
        </div>

        <span style={{ color: "rgba(255, 255, 255, 0.25)", fontSize: 14 }}>➔</span>

        {/* Step 4: Distribusi */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            opacity: currentStage === 4 ? 1 : 0.45,
            color: currentStage === 4 ? "#10b981" : "#94a3b8",
            fontWeight: 900,
            fontSize: 13,
            fontFamily: FONT_MONO,
          }}
        >
          <FaRocket size={15} color={currentStage === 4 ? "#10b981" : "#64748b"} />
          <span>4. DISTRIBUSI</span>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          LAYER D: THE 4320px SLIDING PANORAMA CANVAS (SLIDES WITH CAMERAX)
         ═════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          width: 4320,
          height: 1920,
          display: "flex",
          transformOrigin: "center center",
          transform: `translateX(-${cameraX}px) scale(${cameraZoom})`,
          willChange: "transform",
          position: "relative",
        }}
      >
        {/* Continuous Highway Laser Rail spanning all 4320px */}
        <div
          style={{
            position: "absolute",
            bottom: 250,
            left: 0,
            width: 4320,
            height: 4,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, #fc6d26 0%, #38bdf8 33%, #06b6d4 66%, #10b981 100%)",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
            }}
          />
          {/* Animated Traveling Packet on Rail */}
          <div
            style={{
              position: "absolute",
              top: -6,
              left: `${cameraX + 540}px`,
              transform: "translateX(-50%)",
              width: 36,
              height: 16,
              borderRadius: 8,
              backgroundColor: `rgb(${glowR}, ${glowG}, ${glowB})`,
              boxShadow: `0 0 20px rgb(${glowR}, ${glowG}, ${glowB})`,
            }}
          />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STAGE 0: LINE 10 (GITLAB PIPELINE, X: 0 - 1080px)
            "Pertama, setiap perubahan kode akan diproses melalui GitLab Pipeline."
           ═══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 1080,
            height: 1920,
            padding: "200px 60px 100px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${spStage0})`,
            opacity: spStage0,
            position: "relative",
          }}
        >
          {/* Stage 0 Specific Background Watermark: Git Branch Network & GitLab Glow */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(252, 109, 38, 0.18) 0%, transparent 70%)",
              filter: "blur(70px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: 0.15,
              zIndex: 0,
            }}
          >
            <path
              d="M 160,350 L 160,1600"
              stroke="#fc6d26"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            <path
              d="M 160,700 C 160,850 320,850 320,1000 L 320,1600"
              stroke="#c084fc"
              strokeWidth="4"
            />
            <circle cx="160" cy="700" r="10" fill="#fc6d26" />
            <circle cx="320" cy="1000" r="10" fill="#c084fc" />
          </svg>

          {/* Top Category Badge */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(30, 16, 12, 0.95)",
              border: "1.5px solid rgba(252, 109, 38, 0.7)",
              boxShadow: "0 0 25px rgba(252, 109, 38, 0.35)",
              marginBottom: 24,
            }}
          >
            <SiGitlab size={15} color="#fc6d26" />
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#fc6d26",
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              TAHAP 01 // KODE &amp; PIPELINE
            </span>
            <FaCodeBranch size={14} color="#fc6d26" />
          </div>

          {/* Spoken Headline (Line 10) */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginBottom: 32, minHeight: 120 }}>
            <h1
              style={{
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: -1.5,
              }}
            >
              <span style={{ color: "#f8fafc" }}>Perubahan Kode Diproses </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #fc6d26 0%, #f97316 50%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(252, 109, 38, 0.65))",
                }}
              >
                Melalui GitLab Pipeline!
              </span>
            </h1>
          </div>

          {/* Hero Visual Card: GitLab Pipeline Simulator */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(10, 18, 36, 0.96)",
              border: "2px solid rgba(252, 109, 38, 0.65)",
              boxShadow:
                "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(252, 109, 38, 0.3)",
              padding: "36px 32px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Git Commit Capsule */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderRadius: 16,
                backgroundColor: "rgba(252, 109, 38, 0.12)",
                border: "1.5px solid rgba(252, 109, 38, 0.45)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "rgba(252, 109, 38, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiGitlab size={26} color="#fc6d26" />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                    commit #a8f9d4c (main)
                  </div>
                  <div style={{ fontSize: 13, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                    $ git push origin main ➔ triggered pipeline
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#10b981",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  padding: "6px 14px",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                  }}
                />
                PUSH DETECTED
              </span>
            </div>

            {/* 3-Stage Pipeline Tracker with Connected Conduits */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1.3fr auto 1fr",
                alignItems: "center",
                gap: 8,
              }}
            >
              {/* Step 1: Automated Test */}
              <div
                style={{
                  padding: "12px 14px",
                  borderRadius: 14,
                  backgroundColor: isTestPassed
                    ? "rgba(16, 185, 129, 0.15)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: `1.5px solid ${isTestPassed ? "#10b981" : "rgba(255, 255, 255, 0.2)"}`,
                  boxShadow: isTestPassed
                    ? "0 0 16px rgba(16, 185, 129, 0.3)"
                    : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {isTestPassed ? (
                    <FaCheckCircle size={16} color="#10b981" />
                  ) : (
                    <FaSpinner
                      size={16}
                      color="#f59e0b"
                      style={{
                        transform: `rotate(${((frame - 534) * 12) % 360}deg)`,
                      }}
                    />
                  )}
                  <span style={{ fontSize: 13, fontWeight: 900, color: "#f8fafc" }}>
                    1. TEST
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    color: isTestPassed ? "#34d399" : "#f59e0b",
                    fontWeight: 800,
                  }}
                >
                  {isTestPassed ? "142/142 PASSED" : `${testCounter}/142 RUNNING`}
                </span>
              </div>

              {/* Conduit 1 -> 2 */}
              <div
                style={{
                  width: 32,
                  height: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  position: "relative",
                  borderRadius: 2,
                }}
              >
                {pipe1to2Laser > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      left: `${pipe1to2Laser * 100}%`,
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 10px #10b981, 0 0 4px #fff",
                    }}
                  />
                )}
              </div>

              {/* Step 2: BUILD & COMPILE (Highlighted) */}
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: 14,
                  backgroundColor: isBuildDone
                    ? "rgba(16, 185, 129, 0.16)"
                    : isBuilding
                    ? "rgba(252, 109, 38, 0.18)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: `2px solid ${
                    isBuildDone
                      ? "#10b981"
                      : isBuilding
                      ? "#fc6d26"
                      : "rgba(255, 255, 255, 0.2)"
                  }`,
                  boxShadow: isBuilding
                    ? `0 0 ${16 + pulseWave * 12}px rgba(252, 109, 38, 0.45)`
                    : isBuildDone
                    ? "0 0 18px rgba(16, 185, 129, 0.35)"
                    : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaCog
                    size={16}
                    color={isBuildDone ? "#10b981" : "#fc6d26"}
                    style={{
                      transform: isBuilding
                        ? `rotate(${cogRotation}deg)`
                        : isBuildDone
                        ? "none"
                        : "none",
                    }}
                  />
                  <span style={{ fontSize: 14, fontWeight: 900, color: "#f8fafc" }}>
                    2. BUILD &amp; COMPILE
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: FONT_MONO,
                      color: isBuildDone ? "#34d399" : "#fb923c",
                      fontWeight: 900,
                    }}
                  >
                    {isBuildDone
                      ? "100% COMPLETE"
                      : isBuilding
                      ? `COMPILING ${Math.round(buildProgress)}%`
                      : "QUEUED"}
                  </span>
                </div>
              </div>

              {/* Conduit 2 -> 3 */}
              <div
                style={{
                  width: 32,
                  height: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  position: "relative",
                  borderRadius: 2,
                }}
              >
                {pipe2to3Laser > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      left: `${pipe2to3Laser * 100}%`,
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#38bdf8",
                      boxShadow: "0 0 10px #38bdf8, 0 0 4px #fff",
                    }}
                  />
                )}
              </div>

              {/* Step 3: PACKAGE / DISPATCH */}
              <div
                style={{
                  padding: "12px 14px",
                  borderRadius: 14,
                  backgroundColor: isDispatchReady
                    ? "rgba(56, 189, 248, 0.16)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: `1.5px solid ${isDispatchReady ? "#38bdf8" : "rgba(255, 255, 255, 0.2)"}`,
                  boxShadow: isDispatchReady
                    ? "0 0 16px rgba(56, 189, 248, 0.35)"
                    : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaBoxes
                    size={16}
                    color={isDispatchReady ? "#38bdf8" : "#64748b"}
                  />
                  <span style={{ fontSize: 13, fontWeight: 900, color: "#f8fafc" }}>
                    3. ARTEFAK
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    color: isDispatchReady ? "#38bdf8" : "#64748b",
                    fontWeight: 800,
                  }}
                >
                  {isDispatchReady ? "READY (.tar.gz)" : "WAITING..."}
                </span>
              </div>
            </div>

            {/* HERO ACTIVE BUILD COMPILER ENGINE BOX */}
            <div
              style={{
                borderRadius: 18,
                backgroundColor: "rgba(7, 12, 26, 0.9)",
                border: `2px solid ${
                  isBuildDone
                    ? "rgba(16, 185, 129, 0.6)"
                    : isBuilding
                    ? "rgba(252, 109, 38, 0.6)"
                    : "rgba(255, 255, 255, 0.1)"
                }`,
                boxShadow: isBuilding
                  ? "0 8px 30px rgba(252, 109, 38, 0.25)"
                  : isBuildDone
                  ? "0 8px 30px rgba(16, 185, 129, 0.25)"
                  : "none",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Build Engine Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  paddingBottom: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: FONT_MONO,
                      fontWeight: 800,
                      color: "#cbd5e1",
                    }}
                  >
                    runner: docker-build-runner-01
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: isBuildDone
                      ? "#10b981"
                      : isBuilding
                      ? "#fc6d26"
                      : "#64748b",
                    backgroundColor: isBuildDone
                      ? "rgba(16, 185, 129, 0.15)"
                      : isBuilding
                      ? "rgba(252, 109, 38, 0.15)"
                      : "rgba(255, 255, 255, 0.05)",
                    padding: "4px 12px",
                    borderRadius: 6,
                    border: `1px solid ${
                      isBuildDone
                        ? "rgba(16, 185, 129, 0.4)"
                        : isBuilding
                        ? "rgba(252, 109, 38, 0.4)"
                        : "rgba(255, 255, 255, 0.1)"
                    }`,
                  }}
                >
                  {isBuildDone
                    ? "✓ COMPILED SUCCESS"
                    : isBuilding
                    ? "⚡ COMPILING IN PROGRESS"
                    : "IDLE"}
                </div>
              </div>

              {/* Gauge Row: Rotating Gear + Large Progress + Metrics */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "4px 8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 16,
                      backgroundColor: isBuildDone
                        ? "rgba(16, 185, 129, 0.18)"
                        : "rgba(252, 109, 38, 0.2)",
                      border: `2px solid ${isBuildDone ? "#10b981" : "#fc6d26"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 20px ${isBuildDone ? "rgba(16, 185, 129, 0.4)" : "rgba(252, 109, 38, 0.4)"}`,
                    }}
                  >
                    <FaCog
                      size={32}
                      color={isBuildDone ? "#10b981" : "#fc6d26"}
                      style={{
                        transform: `rotate(${isBuildDone ? 0 : cogRotation}deg)`,
                      }}
                    />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 38,
                        fontWeight: 900,
                        fontFamily: FONT_MONO,
                        color: "#f8fafc",
                        lineHeight: 1,
                      }}
                    >
                      {Math.round(buildProgress)}%
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 800,
                        color: isBuildDone ? "#10b981" : "#fb923c",
                        marginTop: 4,
                        letterSpacing: 1,
                      }}
                    >
                      {isBuildDone
                        ? "COMPILATION COMPLETE"
                        : "PROCESSING DOCKER IMAGE"}
                    </div>
                  </div>
                </div>

                {/* Compilation Stat Badges */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      padding: "6px 12px",
                      borderRadius: 8,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <FaLayerGroup size={12} color="#38bdf8" />
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 800,
                        color: "#f8fafc",
                      }}
                    >
                      {compiledModules} / 184 Modules
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      padding: "6px 12px",
                      borderRadius: 8,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <FaBolt size={12} color="#f59e0b" />
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        fontWeight: 800,
                        color: "#f8fafc",
                      }}
                    >
                      {compiledMb} MB Output
                    </span>
                  </div>
                </div>
              </div>

              {/* High-Tech Glowing Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: 14,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderRadius: 7,
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div
                  style={{
                    width: `${buildProgress}%`,
                    height: "100%",
                    background: isBuildDone
                      ? "linear-gradient(90deg, #10b981 0%, #34d399 100%)"
                      : "linear-gradient(90deg, #fc6d26 0%, #f97316 60%, #f59e0b 100%)",
                    boxShadow: isBuildDone
                      ? "0 0 14px rgba(16, 185, 129, 0.8)"
                      : "0 0 14px rgba(252, 109, 38, 0.8)",
                    position: "relative",
                  }}
                >
                  {/* Glowing Leading Head */}
                  {buildProgress > 0 && buildProgress < 100 && (
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 8,
                        backgroundColor: "#fff",
                        boxShadow: "0 0 10px #fff, 0 0 20px #fc6d26",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Live Build Terminal Console */}
              <div
                style={{
                  backgroundColor: "#020617",
                  border: "1.5px solid rgba(252, 109, 38, 0.35)",
                  borderRadius: 12,
                  padding: "12px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  fontFamily: FONT_MONO,
                  fontSize: 12,
                  color: "#e2e8f0",
                }}
              >
                <div style={{ color: "#38bdf8", fontWeight: 800 }}>
                  $ gitlab-runner exec docker-build --pull
                </div>

                <div
                  style={{
                    color: frame < 588 ? "#f59e0b" : "#10b981",
                    fontWeight: 700,
                  }}
                >
                  {frame < 588
                    ? `> [1/3] Compiling ${compiledModules}/184 TS modules...`
                    : "✓ [1/3] TS modules compiled (0 errors)"}
                </div>

                <div
                  style={{
                    color:
                      frame < 588
                        ? "rgba(255, 255, 255, 0.3)"
                        : frame < 610
                        ? "#f59e0b"
                        : "#10b981",
                    fontWeight: 700,
                  }}
                >
                  {frame < 588
                    ? "  ...waiting for bundler..."
                    : frame < 610
                    ? `> [2/3] Tree-shaking & minifying (${compiledMb} MB)...`
                    : "✓ [2/3] Bundled chunks verified (gzip)"}
                </div>

                <div
                  style={{
                    color:
                      frame < 610
                        ? "rgba(255, 255, 255, 0.3)"
                        : frame < 626
                        ? "#f59e0b"
                        : "#10b981",
                    fontWeight: 900,
                  }}
                >
                  {frame < 610
                    ? "  ...waiting for container layers..."
                    : frame < 626
                    ? "> [3/3] Generating Docker layers (sha256:7b29a...)"
                    : "✨ SUCCESS: Artifact packaged in 1.82s"}
                </div>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div
              style={{
                alignSelf: "center",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(252, 109, 38, 0.15)",
                border: "1px solid rgba(252, 109, 38, 0.4)",
                fontSize: 13,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#fc6d26",
              }}
            >
              <span>⚡ PIPELINE OTOMATIS: DARI PUSH KODE LANGSUNG JADI BUILD SIAP PAKAI</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STAGE 1: LINE 11 (BUILD ARTIFACT, X: 1080 - 2160px)
            "Aplikasi kemudian di-build menjadi artefak."
           ═══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 1080,
            height: 1920,
            padding: "200px 60px 100px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${spStage1})`,
            opacity: spStage1,
            position: "relative",
          }}
        >
          {/* Stage 1 Specific Background: Electric Cyan Build Matrix & Wireframe Cubes */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 650,
              height: 650,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)",
              filter: "blur(80px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: 0.15,
              zIndex: 0,
            }}
          >
            {/* Isometric Hex Grid Patterns */}
            <polygon
              points="140,500 240,440 340,500 340,620 240,680 140,620"
              stroke="#38bdf8"
              strokeWidth="2"
              fill="none"
            />
            <polygon
              points="740,1300 840,1240 940,1300 940,1420 840,1480 740,1420"
              stroke="#0284c7"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Top Category Badge */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(10, 20, 42, 0.95)",
              border: "1.5px solid rgba(56, 189, 248, 0.7)",
              boxShadow: "0 0 25px rgba(56, 189, 248, 0.35)",
              marginBottom: 24,
            }}
          >
            <SiDocker size={16} color="#38bdf8" />
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
              TAHAP 02 // BUILD SATU ARTEFAK
            </span>
            <FaCube size={14} color="#38bdf8" />
          </div>

          {/* Spoken Headline (Line 11) */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginBottom: 32, minHeight: 120 }}>
            <h1
              style={{
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: -1.5,
              }}
            >
              <span style={{ color: "#f8fafc" }}>Aplikasi Di-Build </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #38bdf8 0%, #06b6d4 50%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.65))",
                }}
              >
                Menjadi Satu Artefak!
              </span>
            </h1>
          </div>

          {/* Hero Visual Card: Build Compiler & Single Artifact Box */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(10, 18, 36, 0.96)",
              border: "2px solid rgba(56, 189, 248, 0.65)",
              boxShadow:
                "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(56, 189, 248, 0.3)",
              padding: "44px 36px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 30,
            }}
          >
            {/* Glowing Golden Artifact Container Box */}
            <div
              style={{
                transform: `scale(${buildCubeScale})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                padding: "30px 48px",
                borderRadius: 20,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "2.5px solid #38bdf8",
                boxShadow: `0 0 ${25 + pulseWave * 20}px rgba(56, 189, 248, 0.5)`,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 18,
                  backgroundColor: "rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiDocker size={42} color="#38bdf8" />
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
                  app-release-v3.0.0.tar.gz
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontFamily: FONT_MONO,
                    color: "#38bdf8",
                    marginTop: 6,
                    fontWeight: 800,
                  }}
                >
                  OCI CONTAINER IMAGE // STANDALONE BUNDLE
                </div>
              </div>

              <span
                style={{
                  fontSize: 13,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: "#10b981",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid #10b981",
                  padding: "6px 16px",
                  borderRadius: 8,
                }}
              >
                ✅ COMPILED &amp; TESTED SUCCESSFULLY
              </span>
            </div>

            {/* Core Principle Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 28px",
                borderRadius: 9999,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1.5px solid #10b981",
                fontSize: 15,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#a7f3d0",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
              }}
            >
              <FaCheckCircle size={16} color="#10b981" />
              <span>PRINSIP UTAMA: CUKUP BUILD SATU KALI!</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STAGE 2: LINE 12 (CLOUD STORAGE REGISTRY, X: 2160 - 3240px)
            "Artefak ini disimpan di cloud storage sebagai satu paket aplikasi yang siap didistribusikan."
           ═══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 1080,
            height: 1920,
            padding: "200px 60px 100px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${spStage2})`,
            opacity: spStage2,
            position: "relative",
          }}
        >
          {/* Stage 2 Specific Background: Cloud Aurora & Concentric Orbit Rings */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, transparent 70%)",
              filter: "blur(90px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: 0.18,
              zIndex: 0,
            }}
          >
            {/* Concentric Orbital Radar Rings */}
            <circle
              cx="540"
              cy="960"
              r="300"
              stroke="#06b6d4"
              strokeWidth="2"
              strokeDasharray="6 8"
              fill="none"
            />
            <circle
              cx="540"
              cy="960"
              r="480"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeDasharray="12 12"
              fill="none"
            />
          </svg>

          {/* Top Category Badge */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(8, 24, 36, 0.95)",
              border: "1.5px solid rgba(6, 182, 212, 0.7)",
              boxShadow: "0 0 25px rgba(6, 182, 212, 0.35)",
              marginBottom: 24,
            }}
          >
            <FaCloudUploadAlt size={16} color="#06b6d4" />
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#06b6d4",
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              TAHAP 03 // CLOUD STORAGE REGISTRY
            </span>
            <FaBoxes size={14} color="#06b6d4" />
          </div>

          {/* Spoken Headline (Line 12) */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginBottom: 32, minHeight: 120 }}>
            <h1
              style={{
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: -1.5,
              }}
            >
              <span style={{ color: "#f8fafc" }}>Disimpan di Cloud Storage, </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #06b6d4 0%, #38bdf8 50%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.65))",
                }}
              >
                Sebagai Satu Paket Siap Kirim!
              </span>
            </h1>
          </div>

          {/* Hero Visual Card: Central Cloud Storage Vault with Upload Animation */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(10, 18, 36, 0.96)",
              border: `2px solid ${
                isUploaded
                  ? "rgba(16, 185, 129, 0.65)"
                  : "rgba(6, 182, 212, 0.65)"
              }`,
              boxShadow: isUploaded
                ? "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 45px rgba(16, 185, 129, 0.35)"
                : "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(6, 182, 212, 0.3)",
              padding: "28px 32px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* 1. Storage Bucket Telemetry Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderRadius: 14,
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                border: "1.5px solid rgba(6, 182, 212, 0.35)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FaDatabase size={20} color="#06b6d4" />
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#f8fafc",
                  }}
                >
                  s3://central-registry/packages/v3.0.0/
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: isUploaded ? "#10b981" : isUploading ? "#06b6d4" : "#94a3b8",
                  backgroundColor: isUploaded
                    ? "rgba(16, 185, 129, 0.2)"
                    : isUploading
                    ? "rgba(6, 182, 212, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                  padding: "6px 14px",
                  borderRadius: 8,
                  border: `1px solid ${
                    isUploaded
                      ? "#10b981"
                      : isUploading
                      ? "#06b6d4"
                      : "rgba(255, 255, 255, 0.15)"
                  }`,
                }}
              >
                {isUploaded ? (
                  <>
                    <FaLock size={12} color="#10b981" />
                    <span>LOCKED &amp; VERIFIED</span>
                  </>
                ) : isUploading ? (
                  <>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#06b6d4",
                        boxShadow: "0 0 8px #06b6d4",
                      }}
                    />
                    <span>UPLOADING STREAM ({uploadSpeed} MB/s)</span>
                  </>
                ) : (
                  <span>STANDBY</span>
                )}
              </div>
            </div>

            {/* 2. Top Destination: The Floating Cloud Vault */}
            <div
              style={{
                position: "relative",
                transform: `translateY(${cloudBob}px) scale(${isUploaded ? 1 + (vaultLockSpring - 1) * 0.05 : 1})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 28px",
                borderRadius: 18,
                backgroundColor: isUploaded
                  ? "rgba(16, 185, 129, 0.14)"
                  : "rgba(6, 182, 212, 0.14)",
                border: `2px solid ${isUploaded ? "#10b981" : "#06b6d4"}`,
                boxShadow: isUploaded
                  ? `0 0 ${25 + pulseWave * 15}px rgba(16, 185, 129, 0.45)`
                  : `0 0 ${20 + pulseWave * 15}px rgba(6, 182, 212, 0.35)`,
              }}
            >
              {/* Expanding Shockwave ring upon upload complete */}
              {isUploaded && vaultShockwave < 1 && (
                <div
                  style={{
                    position: "absolute",
                    inset: -15 * vaultShockwave,
                    borderRadius: 24,
                    border: "2px solid #10b981",
                    opacity: 1 - vaultShockwave,
                    pointerEvents: "none",
                  }}
                />
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    backgroundColor: isUploaded
                      ? "rgba(16, 185, 129, 0.25)"
                      : "rgba(6, 182, 212, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1.5px solid ${isUploaded ? "#10b981" : "#06b6d4"}`,
                  }}
                >
                  <FaCloudUploadAlt
                    size={38}
                    color={isUploaded ? "#10b981" : "#06b6d4"}
                  />
                </div>

                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc" }}>
                    Central Cloud Storage Vault
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontFamily: FONT_MONO,
                      color: isUploaded ? "#34d399" : "#38bdf8",
                      marginTop: 2,
                      fontWeight: 800,
                    }}
                  >
                    {isUploaded
                      ? "SHA-256: 9e7b4a20f... MATCHED &amp; SECURED"
                      : "PRIMARY OCI REPOSITORY // S3 / GCS"}
                  </div>
                </div>
              </div>

              {/* Status pill right */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: isUploaded ? "#10b981" : "#06b6d4",
                    backgroundColor: isUploaded
                      ? "rgba(16, 185, 129, 0.2)"
                      : "rgba(6, 182, 212, 0.2)",
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: `1px solid ${isUploaded ? "#10b981" : "#06b6d4"}`,
                  }}
                >
                  {isUploaded ? "✓ 1 SINGLE SOURCE" : "SYNCING PAYLOAD..."}
                </span>
                <span style={{ fontSize: 11, fontFamily: FONT_MONO, color: "#94a3b8" }}>
                  MULTI-REGION REPLICATION
                </span>
              </div>
            </div>

            {/* 3. Center: Active Laser Upload Conduit & Traveling Stream */}
            <div
              style={{
                height: 95,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left & Right Glowing Conduit Rails */}
              <div
                style={{
                  position: "absolute",
                  left: "35%",
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background:
                    "linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.1) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "35%",
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background:
                    "linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.1) 100%)",
                }}
              />

              {/* Traveling Upward Laser Energy Packets (Bottom -> Top) */}
              {isUploading && (
                <>
                  {[0, 25, 50, 75].map((offset, idx) => {
                    const packetY = ((frame - 810) * 4.5 + offset) % 100;
                    return (
                      <div
                        key={idx}
                        style={{
                          position: "absolute",
                          bottom: `${packetY}%`,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          backgroundColor: "#fff",
                          boxShadow:
                            "0 0 12px #06b6d4, 0 0 24px #38bdf8, 0 0 35px #fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 1 - Math.abs(packetY - 50) / 60,
                        }}
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#06b6d4",
                          }}
                        />
                      </div>
                    );
                  })}
                </>
              )}

              {/* Central Speed / Direction Pill */}
              <div
                style={{
                  zIndex: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 20px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(8, 20, 36, 0.95)",
                  border: `1.5px solid ${isUploaded ? "#10b981" : "#06b6d4"}`,
                  boxShadow: `0 0 20px ${
                    isUploaded
                      ? "rgba(16, 185, 129, 0.35)"
                      : "rgba(6, 182, 212, 0.35)"
                  }`,
                }}
              >
                <FaArrowUp
                  size={14}
                  color={isUploaded ? "#10b981" : "#06b6d4"}
                  style={{
                    transform: isUploading
                      ? `translateY(${Math.sin((frame * Math.PI) / 6) * 3}px)`
                      : "none",
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: isUploaded ? "#a7f3d0" : "#38bdf8",
                  }}
                >
                  {isUploaded
                    ? "UPLOAD SELESAI (100% INGESTED)"
                    : isUploading
                    ? `HIGH SPEED UPLOAD // ${uploadSpeed} MB/s`
                    : "MEMPERSIAPKAN KONEKSI STORAGE..."}
                </span>
              </div>
            </div>

            {/* 4. Bottom Source: The Artifact Box & Live Upload Progress */}
            <div
              style={{
                transform: `scale(${spArtifactPkg})`,
                borderRadius: 18,
                backgroundColor: "rgba(7, 12, 26, 0.92)",
                border: `2px solid ${
                  isUploaded
                    ? "rgba(16, 185, 129, 0.5)"
                    : isUploading
                    ? "rgba(6, 182, 212, 0.6)"
                    : "rgba(255, 255, 255, 0.15)"
                }`,
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {/* Artifact details row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(56, 189, 248, 0.18)",
                      border: "1.5px solid #38bdf8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaCube size={22} color="#38bdf8" />
                  </div>

                  <div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#f8fafc" }}>
                      app-release-v3.0.0.tar.gz
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontFamily: FONT_MONO,
                        color: "#94a3b8",
                      }}
                    >
                      Payload OCI Container: 34.2 MB
                    </div>
                  </div>
                </div>

                {/* Progress Number */}
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      fontFamily: FONT_MONO,
                      color: isUploaded ? "#10b981" : "#38bdf8",
                      lineHeight: 1,
                    }}
                  >
                    {Math.round(uploadProgress)}%
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontFamily: FONT_MONO,
                      color: "#94a3b8",
                      marginTop: 3,
                    }}
                  >
                    {uploadedMb} MB / 34.2 MB
                  </div>
                </div>
              </div>

              {/* Glowing Upload Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: 12,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderRadius: 6,
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div
                  style={{
                    width: `${uploadProgress}%`,
                    height: "100%",
                    background: isUploaded
                      ? "linear-gradient(90deg, #10b981 0%, #34d399 100%)"
                      : "linear-gradient(90deg, #06b6d4 0%, #38bdf8 60%, #10b981 100%)",
                    boxShadow: isUploaded
                      ? "0 0 14px rgba(16, 185, 129, 0.8)"
                      : "0 0 14px rgba(6, 182, 212, 0.8)",
                    position: "relative",
                  }}
                >
                  {/* Glowing Leading Head */}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 8,
                        backgroundColor: "#fff",
                        boxShadow: "0 0 10px #fff, 0 0 20px #06b6d4",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Upload console footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                }}
              >
                <span style={{ color: "#38bdf8", fontWeight: 700 }}>
                  $ aws s3 cp ./app-release-v3.0.0.tar.gz s3://central-registry/
                </span>
                <span
                  style={{
                    color: isUploaded ? "#10b981" : "#f59e0b",
                    fontWeight: 800,
                  }}
                >
                  {isUploaded
                    ? "✓ HTTP 200 OK (SAVED)"
                    : isUploading
                    ? "STREAMING CHUNKS..."
                    : "QUEUED"}
                </span>
              </div>
            </div>

            {/* 5. Bottom Core Principle Banner */}
            <div
              style={{
                alignSelf: "center",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1.5px solid rgba(16, 185, 129, 0.5)",
                fontSize: 13,
                fontFamily: FONT_MONO,
                fontWeight: 900,
                color: "#a7f3d0",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.25)",
              }}
            >
              <FaCheckCircle size={14} color="#10b981" />
              <span>SATU PAKET UTUH // SIAP DIDISTRIBUSIKAN SECARA SERENTAK</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STAGE 3: LINE 13 (DISTRIBUTION TO PRODUCTS & SERVERS, X: 3240 - 4320px)
            "Ke produk atau server yang tersedia"
           ═══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: 1080,
            height: 1920,
            padding: "200px 60px 100px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${spStage3})`,
            opacity: spStage3,
            position: "relative",
          }}
        >
          {/* Stage 3 Specific Background: Radiating Distribution Rays & World Mesh */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 750,
              height: 750,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)",
              filter: "blur(90px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            {/* Radiating Laser Distribution Beams */}
            <line
              x1="540"
              y1="960"
              x2="100"
              y2="400"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="10 10"
            />
            <line
              x1="540"
              y1="960"
              x2="980"
              y2="400"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="10 10"
            />
            <line
              x1="540"
              y1="960"
              x2="150"
              y2="1500"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="10 10"
            />
            <line
              x1="540"
              y1="960"
              x2="930"
              y2="1500"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="10 10"
            />
          </svg>

          {/* Top Category Badge */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 24px",
              borderRadius: 9999,
              backgroundColor: "rgba(12, 32, 24, 0.95)",
              border: "1.5px solid rgba(16, 185, 129, 0.7)",
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.35)",
              marginBottom: 24,
            }}
          >
            <FaServer size={15} color="#10b981" />
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#10b981",
                textTransform: "uppercase",
                fontFamily: FONT_MONO,
              }}
            >
              TAHAP 04 // MULTI-SERVER FLEET
            </span>
            <FaGlobeAmericas size={14} color="#10b981" />
          </div>

          {/* Spoken Headline (Line 13) */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginBottom: 32, minHeight: 120 }}>
            <h1
              style={{
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: -1.5,
              }}
            >
              <span style={{ color: "#f8fafc" }}>Didistribusikan Serentak </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #10b981 0%, #38bdf8 50%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.65))",
                }}
              >
                Ke Ratusan Server!
              </span>
            </h1>
          </div>

          {/* Hero Visual Card: Download from Cloud Storage to All Products & Servers */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: 960,
              borderRadius: 24,
              backgroundColor: "rgba(10, 18, 36, 0.96)",
              border: `2px solid ${
                isDownloadDone
                  ? "rgba(16, 185, 129, 0.65)"
                  : "rgba(56, 189, 248, 0.65)"
              }`,
              boxShadow: isDownloadDone
                ? "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 45px rgba(16, 185, 129, 0.35)"
                : "0 22px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(56, 189, 248, 0.3)",
              padding: "28px 30px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
            }}
          >
            {/* 1. Storage Broadcast Source Header */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderRadius: 14,
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                border: "1.5px solid rgba(56, 189, 248, 0.35)",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FaDatabase size={18} color="#38bdf8" />
                <span
                  style={{
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: "#f8fafc",
                  }}
                >
                  SOURCE: s3://central-registry/packages/v3.0.0/
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                  fontWeight: 900,
                  color: isDownloadDone
                    ? "#10b981"
                    : isDownloading
                    ? "#38bdf8"
                    : "#94a3b8",
                  backgroundColor: isDownloadDone
                    ? "rgba(16, 185, 129, 0.2)"
                    : isDownloading
                    ? "rgba(56, 189, 248, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                  padding: "5px 12px",
                  borderRadius: 8,
                  border: `1px solid ${
                    isDownloadDone
                      ? "#10b981"
                      : isDownloading
                      ? "#38bdf8"
                      : "rgba(255, 255, 255, 0.15)"
                  }`,
                }}
              >
                {isDownloadDone ? (
                  <span>✓ 4 ENDPOINTS SYNCED</span>
                ) : isDownloading ? (
                  <>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#38bdf8",
                        boxShadow: "0 0 8px #38bdf8",
                      }}
                    />
                    <span>PARALLEL DOWNLOAD ({downloadSpeed} MB/s)</span>
                  </>
                ) : (
                  <span>READY TO PULL</span>
                )}
              </div>
            </div>

            {/* 2. Downward Laser Pull Conduit & Traveling Stream */}
            <div
              style={{
                width: "100%",
                height: 70,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* 4 Downward Stream Lines Aligned with the 4 Target Cards */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: 12,
                  pointerEvents: "none",
                }}
              >
                {[0, 1, 2, 3].map((colIdx) => (
                  <div
                    key={colIdx}
                    style={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* Vertical Rail */}
                    <div
                      style={{
                        width: 2,
                        height: "100%",
                        background:
                          "linear-gradient(180deg, #38bdf8 0%, rgba(16, 185, 129, 0.8) 100%)",
                        opacity: isDownloading || isDownloadDone ? 0.7 : 0.2,
                      }}
                    />

                    {/* Downward Traveling Light Packet */}
                    {isDownloading && (
                      <div
                        style={{
                          position: "absolute",
                          top: `${((frame - 985) * 5 + colIdx * 25) % 100}%`,
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: "#fff",
                          boxShadow:
                            "0 0 10px #38bdf8, 0 0 18px #10b981, 0 0 25px #fff",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Central Floating Direction Pill */}
              <div
                style={{
                  zIndex: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 18px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(8, 20, 36, 0.95)",
                  border: `1.5px solid ${isDownloadDone ? "#10b981" : "#38bdf8"}`,
                  boxShadow: `0 0 18px ${
                    isDownloadDone
                      ? "rgba(16, 185, 129, 0.35)"
                      : "rgba(56, 189, 248, 0.35)"
                  }`,
                }}
              >
                <FaArrowDown
                  size={13}
                  color={isDownloadDone ? "#10b981" : "#38bdf8"}
                  style={{
                    transform: isDownloading
                      ? `translateY(${Math.sin((frame * Math.PI) / 6) * 3}px)`
                      : "none",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: isDownloadDone ? "#a7f3d0" : "#38bdf8",
                  }}
                >
                  {isDownloadDone
                    ? "DOWNLOAD DARI STORAGE SELESAI (100% IDENTIK)"
                    : isDownloading
                    ? `DOWNLOADING FROM STORAGE // ${downloadSpeed} MB/s`
                    : "STANDBY FOR DOWNLOAD"}
                </span>
              </div>
            </div>

            {/* 3. High-Density Multi-Server Fleet Matrix (8 Nodes + 264 Global Fleet) */}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: 10,
              }}
            >
              {SERVERS_DATA.map((srv, idx) => {
                const isSrvDone = frame >= srv.finishF;
                const srvProgress = isSrvDone
                  ? 100
                  : Math.min(
                      98,
                      Math.round(
                        interpolate(frame, [985, srv.finishF], [0, 100], {
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                          easing: Easing.out(Easing.cubic),
                        })
                      )
                    );
                return (
                  <div
                    key={srv.id}
                    style={{
                      backgroundColor: isSrvDone
                        ? "rgba(16, 185, 129, 0.16)"
                        : "rgba(56, 189, 248, 0.08)",
                      border: `1.5px solid ${
                        isSrvDone ? "#10b981" : "rgba(56, 189, 248, 0.4)"
                      }`,
                      boxShadow: isSrvDone
                        ? "0 0 16px rgba(16, 185, 129, 0.35)"
                        : isDownloading
                        ? "0 0 12px rgba(56, 189, 248, 0.2)"
                        : "none",
                      borderRadius: 14,
                      padding: "12px 10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                      textAlign: "center",
                    }}
                  >
                    {/* Server Rack Header with Dual Activity LEDs */}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 2px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <FaServer size={14} color={isSrvDone ? "#10b981" : "#38bdf8"} />
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 900,
                            fontFamily: FONT_MONO,
                            color: "#f8fafc",
                          }}
                        >
                          {srv.name}
                        </span>
                      </div>

                      {/* Dual activity LEDs */}
                      <div style={{ display: "flex", gap: 3 }}>
                        <div
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            backgroundColor: isSrvDone ? "#10b981" : "#38bdf8",
                            boxShadow: `0 0 6px ${isSrvDone ? "#10b981" : "#38bdf8"}`,
                          }}
                        />
                        <div
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            backgroundColor: isSrvDone
                              ? "#10b981"
                              : (frame + idx * 3) % 8 < 4
                              ? "#f59e0b"
                              : "rgba(255, 255, 255, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Region */}
                    <div
                      style={{
                        fontSize: 10,
                        fontFamily: FONT_MONO,
                        color: "#94a3b8",
                      }}
                    >
                      {srv.region}
                    </div>

                    {/* Version Tag */}
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 900,
                        fontFamily: FONT_MONO,
                        color: isSrvDone ? "#10b981" : "#38bdf8",
                        lineHeight: 1,
                      }}
                    >
                      {isSrvDone ? "v3.0.0" : "PULLING..."}
                    </span>

                    {/* Mini Download Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: 4,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${srvProgress}%`,
                          height: "100%",
                          backgroundColor: isSrvDone ? "#10b981" : "#38bdf8",
                        }}
                      />
                    </div>

                    {/* Status Pill */}
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: FONT_MONO,
                        fontWeight: 900,
                        color: isSrvDone ? "#a7f3d0" : "#38bdf8",
                        backgroundColor: isSrvDone
                          ? "rgba(16, 185, 129, 0.2)"
                          : "rgba(56, 189, 248, 0.15)",
                        padding: "2px 8px",
                        borderRadius: 4,
                      }}
                    >
                      {isSrvDone ? "✓ SYNCED" : `${srvProgress}%`}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 4. Consolidated Download / Pull Console */}
            <div
              style={{
                width: "100%",
                borderRadius: 16,
                backgroundColor: "rgba(7, 12, 26, 0.9)",
                border: "1.5px solid rgba(16, 185, 129, 0.35)",
                padding: "14px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 12,
                  fontFamily: FONT_MONO,
                }}
              >
                <span style={{ color: "#38bdf8", fontWeight: 800 }}>
                  $ docker compose pull --parallel --nodes=264
                </span>
                <span
                  style={{
                    color: isDownloadDone ? "#10b981" : "#38bdf8",
                    fontWeight: 900,
                  }}
                >
                  {syncedServersCount}/264 Servers Synced ({downloadedMb} MB)
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  width: "100%",
                  height: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderRadius: 5,
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <div
                  style={{
                    width: `${downloadProgress}%`,
                    height: "100%",
                    background: isDownloadDone
                      ? "linear-gradient(90deg, #10b981 0%, #34d399 100%)"
                      : "linear-gradient(90deg, #38bdf8 0%, #06b6d4 50%, #10b981 100%)",
                    boxShadow: isDownloadDone
                      ? "0 0 14px rgba(16, 185, 129, 0.8)"
                      : "0 0 14px rgba(56, 189, 248, 0.8)",
                    position: "relative",
                  }}
                >
                  {downloadProgress > 0 && downloadProgress < 100 && (
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 8,
                        backgroundColor: "#fff",
                        boxShadow: "0 0 10px #fff, 0 0 20px #38bdf8",
                      }}
                    />
                  )}
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  color: isDownloadDone ? "#a7f3d0" : "#94a3b8",
                  fontWeight: 700,
                }}
              >
                {isDownloadDone
                  ? "✓ 264+ server nodes running v3.0.0 simultaneously (0 drift & 0 manual bottleneck)"
                  : "> Pulling identical 34.2 MB artifact payload to 264+ distributed server nodes in parallel..."}
              </div>
            </div>

            {/* 5. Giant Final Synchronization Stamp */}
            <div
              style={{
                transform: `scale(${spSyncStamp})`,
                opacity: spSyncStamp,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 32px",
                borderRadius: 14,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                border: "2px solid #10b981",
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.45)",
              }}
            >
              <FaCheckCircle size={20} color="#10b981" />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 900,
                  fontFamily: FONT_MONO,
                  color: "#a7f3d0",
                  letterSpacing: 1,
                }}
              >
                ✅ 264+ SERVER SINKRON 100% SERENTAK DARI SATU STORAGE!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
