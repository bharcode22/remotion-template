import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion";
import {
  FaTimesCircle,
  FaDatabase,
  FaHdd,
  FaLayerGroup,
  FaCogs,
  FaSitemap,
  FaCheckCircle,
  FaServer,
  FaFolder,
  FaQuestionCircle,
  FaStream,
  FaBoxes,
  FaLightbulb,
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa";
import { TypewriterPrompt } from "../Components/TypewriterPrompt";
import { DATABASE_COLORS, TOTAL_FRAMES } from "../constants";

export const UnifiedDatabaseConcept: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 1 TRANSITION (F0 - F88)
  // Line 1: "Database adalah tempat menyimpan data?" (Audio F6 - F70)
  // ═══════════════════════════════════════════════════════════════════════════
  const s1ExitProgress = interpolate(frame, [80, 88], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s1Opacity = 1 - s1ExitProgress;
  const s1Y = -s1ExitProgress * 60;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 2 TRANSITION & SPRINGS (F88 - F188)
  // Line 2: "Menurut saya, definisi itu kurang tepat."
  // Audio: F90 - F118 ("Menurut saya,"), F125 - F142 ("definisi itu"), F143 - F162 ("kurang tepat.")
  // ═══════════════════════════════════════════════════════════════════════════
  const s2Frame = frame - 88;
  const s2Entrance = spring({
    frame: s2Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });

  const s2ExitProgress = interpolate(frame, [180, 188], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s2Opacity = (1 - s2ExitProgress) * Math.min(1, s2Entrance);
  const s2Y = (1 - s2Entrance) * 35 - s2ExitProgress * 45;

  const isDefinisi = frame >= 115;
  const definisiSpring = spring({
    frame: frame - 115,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 160 },
  });

  const isRefuted = frame >= 138;
  const redPunchSpring = spring({
    frame: frame - 138,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 180 },
  });

  const strikeProgress = interpolate(frame, [138, 148], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const redScale = isRefuted
    ? 1 + (1 - Math.min(1, redPunchSpring)) * 0.22
    : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 3 TRANSITION & SPRINGS (F188 - F252)
  // Line 4: "Database bukanlah tempat menyimpan data,"
  // Audio: F188 - F204 ("Database"), F206 - F218 ("bukanlah"), F220 - F245 ("tempat menyimpan data,")
  // ═══════════════════════════════════════════════════════════════════════════
  const s3Frame = frame - 188;
  const s3Entrance = spring({
    frame: s3Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  const s3ExitProgress = interpolate(frame, [246, 252], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s3Opacity = (1 - s3ExitProgress) * Math.min(1, s3Entrance);
  const s3Y = (1 - s3Entrance) * 30 - s3ExitProgress * 40;

  const isBukanlah = frame >= 204;
  const bukanlahSpring = spring({
    frame: frame - 204,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 160 },
  });

  const isStorageMentioned = frame >= 218;
  const storageTextSpring = spring({
    frame: frame - 218,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 160 },
  });
  const storageStrikeProgress = interpolate(frame, [222, 238], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 4 TRANSITION & SPRINGS (F252 - F368)
  // Line 5: "tetapi bagaimana data diorganisasi dan dikelola."
  // Audio: F258 - F293 ("tetapi bagaimana data"), F296 - F320 ("diorganisasi"), F321 - F329 ("dan"), F330 - F345 ("dikelola.")
  // ═══════════════════════════════════════════════════════════════════════════
  const s4Frame = frame - 252;
  const s4Entrance = spring({
    frame: s4Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });

  const s4ExitProgress = interpolate(frame, [360, 368], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s4Opacity = (1 - s4ExitProgress) * Math.min(1, s4Entrance);
  const s4Y = (1 - s4Entrance) * 35 - s4ExitProgress * 45;

  const isOrganized = frame >= 290;
  const organizedSpring = spring({
    frame: frame - 290,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 170 },
  });
  const organizedScale = isOrganized
    ? 1 + (1 - Math.min(1, organizedSpring)) * 0.2
    : 0.95;

  const isDan4 = frame >= 318;

  const isManaged = frame >= 328;
  const managedSpring = spring({
    frame: frame - 328,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 170 },
  });
  const managedScale = isManaged
    ? 1 + (1 - Math.min(1, managedSpring)) * 0.2
    : 0.95;

  const tier1Spring = spring({
    frame: frame - 290,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const tier2Spring = spring({
    frame: frame - 314,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const tier3Spring = spring({
    frame: frame - 328,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 5 TRANSITION & SPRINGS (F368 - F480)
  // Line 7: "Kalau tempat penyimpanannya,"
  // Line 8: "kita sebut storage."
  // Audio: F373 - F412 ("Kalau tempat penyimpanannya,"), F420 - F442 ("kita sebut"), F444 - F460 ("storage.")
  // ═══════════════════════════════════════════════════════════════════════════
  const s5Frame = frame - 368;
  const s5Entrance = spring({
    frame: s5Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });

  const s5ExitProgress = interpolate(frame, [472, 480], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s5Opacity = (1 - s5ExitProgress) * Math.min(1, s5Entrance);
  const s5Y = (1 - s5Entrance) * 35 - s5ExitProgress * 45;

  const isLine8 = frame >= 418;
  const line8Spring = spring({
    frame: frame - 418,
    fps: 30,
    config: { damping: 12, mass: 0.6, stiffness: 160 },
  });

  const isDriveVisible = frame >= 428;
  const driveSpring = spring({
    frame: frame - 428,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 150 },
  });

  const isStorage = frame >= 436;
  const storageSpring = spring({
    frame: frame - 436,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 170 },
  });
  const storageScale = isStorage
    ? 1 + (1 - Math.min(1, storageSpring)) * 0.22
    : 0.95;

  const sector1Progress = interpolate(frame, [428, 438], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sector2Progress = interpolate(frame, [434, 444], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sector3Progress = interpolate(frame, [440, 450], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sector4Progress = interpolate(frame, [446, 458], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 6 TRANSITION & SPRINGS (F480 - F775)
  // Line 10: "Bayangkan sebuah lemari pakaian." (Audio F485 - F525)
  // Line 11: "Lemari tersebut adalah storage-nya." (Audio F550 - F600)
  // Line 12: "Sedangkan rak-rak di dalamnya bisa kita ibaratkan sebagai database." (Audio F625 - F745)
  // ═══════════════════════════════════════════════════════════════════════════
  const s6Frame = frame - 480;
  const s6Entrance = spring({
    frame: s6Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });

  const s6ExitProgress = interpolate(frame, [768, 775], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s6Opacity = (1 - s6ExitProgress) * Math.min(1, s6Entrance);
  const s6Y = (1 - s6Entrance) * 35 - s6ExitProgress * 45;

  const isPhase1 = frame < 545;
  const isPhase2 = frame >= 545 && frame < 620;
  const isPhase3 = frame >= 620;

  const isStorageNya = frame >= 584;
  const storageNyaSpring = spring({
    frame: frame - 584,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 170 },
  });
  const storageNyaScale = isStorageNya
    ? 1 + (1 - Math.min(1, storageNyaSpring)) * 0.2
    : 0.95;

  const isRakRak = frame >= 636;
  const shelf1Spring = spring({
    frame: frame - 636,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const shelf2Spring = spring({
    frame: frame - 655,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const shelf3Spring = spring({
    frame: frame - 675,
    fps: 30,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });

  const isDbClimax = frame >= 725;
  const dbClimaxSpring = spring({
    frame: frame - 725,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 180 },
  });
  const dbClimaxScale = isDbClimax
    ? 1 + (1 - Math.min(1, dbClimaxSpring)) * 0.24
    : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 7 TRANSITION & SPRINGS (F775 - F1005)
  // Line 14: "Lalu, bagaimana pakaian itu disusun?" (Audio F780 - F845)
  // Line 15: "Apakah dilipat, digantung, atau dikelompokkan berdasarkan jenisnya?" (Audio F860 - F985)
  // ═══════════════════════════════════════════════════════════════════════════
  const s7Frame = frame - 775;
  const s7Entrance = spring({
    frame: s7Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });

  const s7ExitProgress = interpolate(frame, [995, 1005], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s7Opacity = (1 - s7ExitProgress) * Math.min(1, s7Entrance);
  const s7Y = (1 - s7Entrance) * 35 - s7ExitProgress * 45;

  const isLine15 = frame >= 850;

  const isDilipat = frame >= 861;
  const dilipatSpring = spring({
    frame: frame - 861,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });
  const dilipatScale = isDilipat
    ? 1 + (1 - Math.min(1, dilipatSpring)) * 0.2
    : 0.95;

  const isDigantung = frame >= 900;
  const digantungSpring = spring({
    frame: frame - 900,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });
  const digantungScale = isDigantung
    ? 1 + (1 - Math.min(1, digantungSpring)) * 0.2
    : 0.95;

  const isDikelompokkan = frame >= 935;
  const kelompokSpring = spring({
    frame: frame - 935,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });
  const kelompokScale = isDikelompokkan
    ? 1 + (1 - Math.min(1, kelompokSpring)) * 0.2
    : 0.95;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 8 TRANSITION & SPRINGS (F1005 - F1150)
  // Line 17: "Nah, itu bisa kita analogikan sebagai struktur dan cara data diorganisasi."
  // Audio: F1012 - F1135
  // ═══════════════════════════════════════════════════════════════════════════
  const s8Frame = frame - 1005;
  const s8Entrance = spring({
    frame: s8Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });

  const s8ExitProgress = interpolate(frame, [1140, 1150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s8Opacity = (1 - s8ExitProgress) * Math.min(1, s8Entrance);
  const s8Y = (1 - s8Entrance) * 35 - s8ExitProgress * 45;

  const isStruktur = frame >= 1060;
  const strukturSpring = spring({
    frame: frame - 1060,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isCaraData = frame >= 1080;
  const caraDataSpring = spring({
    frame: frame - 1080,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  const isCaraDiorganisasi = frame >= 1092;
  const caraSpring = spring({
    frame: frame - 1092,
    fps: 30,
    config: { damping: 11, mass: 0.6, stiffness: 170 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 9 TRANSITION & SPRINGS (F1150 - F1440)
  // Line 18: "Jadi, database bukan cuma soal menyimpan data," (F1168 - F1234)
  // Line 19: "tetapi juga bagaimana data tersebut disusun agar mudah dicari, dikelola, dan digunakan kembali." (F1251 - F1418)
  // ═══════════════════════════════════════════════════════════════════════════
  const s9Frame = frame - 1150;
  const s9Entrance = spring({
    frame: s9Frame,
    fps: 30,
    config: { damping: 14, mass: 0.8, stiffness: 110 },
  });

  const isLine19 = frame >= 1245;

  const s18Strike = interpolate(frame, [1210, 1228], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isDisusun = frame >= 1305;
  const disusunSpring = spring({
    frame: frame - 1305,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 180 },
  });

  const isDicari = frame >= 1315;
  const dicariSpring = spring({
    frame: frame - 1315,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 170 },
  });
  const dicariScale = isDicari
    ? 1 + (1 - Math.min(1, dicariSpring)) * 0.2
    : 0.95;

  const isDikelolaTriad = frame >= 1365;
  const dikelolaTriadSpring = spring({
    frame: frame - 1365,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 170 },
  });
  const dikelolaScale = isDikelolaTriad
    ? 1 + (1 - Math.min(1, dikelolaTriadSpring)) * 0.2
    : 0.95;

  const isDanConnector = frame >= 1378;
  const danConnectorSpring = spring({
    frame: frame - 1378,
    fps: 30,
    config: { damping: 10, mass: 0.5, stiffness: 190 },
  });
  const danScale = isDanConnector
    ? 1 + (1 - Math.min(1, danConnectorSpring)) * 0.16
    : 0.95;

  const isDigunakan = frame >= 1389;
  const digunakanSpring = spring({
    frame: frame - 1389,
    fps: 30,
    config: { damping: 10, mass: 0.6, stiffness: 180 },
  });
  const digunakanScale = isDigunakan
    ? 1 + (1 - Math.min(1, digunakanSpring)) * 0.24
    : 0.95;

  // Master Fade-out for peaceful outro (F1418 - F1440)
  const masterFadeOut = interpolate(
    frame,
    [TOTAL_FRAMES - 22, TOTAL_FRAMES],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: masterFadeOut,
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 1: TYPEWRITER HOOK QUESTION (F0 - F88)
          Line 1: "Database adalah tempat menyimpan data?"
         ═══════════════════════════════════════════════════════════════════ */}
      {frame < 88 && (
        <div
          style={{
            position: "absolute",
            top: 740,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s1Opacity,
            transform: `translateY(${s1Y}px)`,
          }}
        >
          <TypewriterPrompt
            text="Database adalah tempat menyimpan data?"
            startFrame={6}
            endFrame={70}
          />
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 2: REFUTATION "KURANG TEPAT" (F88 - F188)
          Line 2: "Menurut saya, definisi itu kurang tepat."
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 88 && frame < 188 && (
        <div
          style={{
            position: "absolute",
            top: 680,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s2Opacity,
            transform: `translateY(${s2Y}px)`,
            padding: "0 54px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: isRefuted
                ? "linear-gradient(135deg, rgba(244, 63, 94, 0.16) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.82) 100%)"
                : DATABASE_COLORS.glassBg,
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: isRefuted
                ? "1.5px solid rgba(244, 63, 94, 0.55)"
                : DATABASE_COLORS.glassBorder,
              borderRadius: 32,
              padding: "48px 44px",
              boxShadow: isRefuted
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 35px rgba(244, 63, 94, 0.2), 0 0 45px rgba(244, 63, 94, 0.3)"
                : DATABASE_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Premise Quote with animated red strikethrough (F143) */}
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 26px",
                borderRadius: 9999,
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                marginBottom: 36,
              }}
            >
              <span
                style={{
                  color: isRefuted ? "#94a3b8" : "#e2e8f0",
                  fontSize: 26,
                  fontWeight: 500,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: "-0.01em",
                  position: "relative",
                  transition: "color 0.25s ease",
                }}
              >
                “Database adalah tempat menyimpan data?”
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: 3,
                    width: `${strikeProgress}%`,
                    background: "#f43f5e",
                    boxShadow: "0 0 14px #f43f5e",
                    borderRadius: 2,
                  }}
                />
              </span>

              {isRefuted && (
                <div
                  style={{
                    transform: `scale(${redPunchSpring})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaTimesCircle
                    size={26}
                    color="#f43f5e"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(244, 63, 94, 0.8))",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Line 2 Main Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 18,
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 44,
                  fontWeight: 600,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                }}
              >
                Menurut saya,
              </span>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  minHeight: 64,
                }}
              >
                {isDefinisi && (
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 46,
                      fontWeight: 700,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: "-0.02em",
                      opacity: Math.min(1, definisiSpring),
                      transform: `translateY(${(1 - Math.min(1, definisiSpring)) * 10}px)`,
                    }}
                  >
                    definisi itu
                  </span>
                )}

                {isRefuted && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 24px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, rgba(244, 63, 94, 0.28) 0%, rgba(225, 29, 72, 0.16) 100%)",
                      border: "1.5px solid rgba(244, 63, 94, 0.75)",
                      boxShadow:
                        "0 0 35px rgba(244, 63, 94, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                      transform: `scale(${redScale})`,
                      opacity: Math.min(1, redPunchSpring),
                    }}
                  >
                    <span
                      style={{
                        color: "#f43f5e",
                        fontSize: 48,
                        fontWeight: 900,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: "-0.02em",
                        textShadow:
                          "0 0 28px rgba(244, 63, 94, 0.95), 0 0 50px rgba(244, 63, 94, 0.5)",
                      }}
                    >
                      kurang tepat.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 3: DISSOCIATION "BUKANLAH TEMPAT MENYIMPAN DATA" (F188 - F252)
          Line 4: "Database bukanlah tempat menyimpan data,"
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 188 && frame < 252 && (
        <div
          style={{
            position: "absolute",
            top: 700,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s3Opacity,
            transform: `translateY(${s3Y}px)`,
            padding: "0 54px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.8) 100%)",
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: isBukanlah
                ? "1.5px solid rgba(244, 63, 94, 0.45)"
                : DATABASE_COLORS.glassBorder,
              borderRadius: 32,
              padding: "48px 44px",
              boxShadow: isBukanlah
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 35px rgba(244, 63, 94, 0.2)"
                : DATABASE_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "border 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            {/* Visual Icon Contrast Pill: Database vs Storage */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "10px 24px",
                borderRadius: 9999,
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                marginBottom: 32,
              }}
            >
              <FaDatabase size={24} color="#38bdf8" />
              {isBukanlah && (
                <span
                  style={{
                    color: "#64748b",
                    fontSize: 20,
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  ≠
                </span>
              )}
              {isStorageMentioned && (
                <>
                  <FaHdd
                    size={24}
                    color="#f43f5e"
                    style={{ transition: "color 0.2s ease" }}
                  />
                  <FaTimesCircle size={20} color="#f43f5e" />
                </>
              )}
            </div>

            {/* Line 4 Main Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 50,
                    fontWeight: 800,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
                  }}
                >
                  Database
                </span>

                {isBukanlah && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "6px 20px",
                      borderRadius: 16,
                      background: "rgba(244, 63, 94, 0.2)",
                      border: "1.5px solid rgba(244, 63, 94, 0.65)",
                      boxShadow: "0 0 25px rgba(244, 63, 94, 0.35)",
                      transform: `scale(${1 + (1 - Math.min(1, bukanlahSpring)) * 0.18})`,
                      opacity: Math.min(1, bukanlahSpring),
                      transition:
                        "background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        color: "#f43f5e",
                        fontSize: 44,
                        fontWeight: 800,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: "-0.02em",
                        textShadow: "0 0 20px rgba(244, 63, 94, 0.85)",
                      }}
                    >
                      bukanlah
                    </span>
                  </div>
                )}
              </div>

              {isStorageMentioned && (
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginTop: 6,
                    opacity: Math.min(1, storageTextSpring),
                    transform: `translateY(${(1 - Math.min(1, storageTextSpring)) * 8}px)`,
                  }}
                >
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: 44,
                      fontWeight: 600,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: "-0.01em",
                      transition: "color 0.25s ease",
                    }}
                  >
                    tempat menyimpan data,
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "52%",
                      transform: "translateY(-50%)",
                      height: 3,
                      width: `${storageStrikeProgress}%`,
                      background: "#f43f5e",
                      boxShadow: "0 0 12px #f43f5e",
                      borderRadius: 2,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 4: CORE ARCHITECTURE "DIORGANISASI & DIKELOLA" (F252 - F368)
          Line 5: "tetapi bagaimana data diorganisasi dan dikelola."
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 252 && frame < 368 && (
        <div
          style={{
            position: "absolute",
            top: 610,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s4Opacity,
            transform: `translateY(${s4Y}px)`,
            padding: "0 50px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 980,
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.82) 100%)",
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: isOrganized
                ? "1.5px solid rgba(52, 211, 153, 0.5)"
                : DATABASE_COLORS.glassBorder,
              borderRadius: 32,
              padding: "44px 38px",
              boxShadow: isOrganized
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 40px rgba(16, 185, 129, 0.25)"
                : DATABASE_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Header Text: "tetapi bagaimana data" */}
            <span
              style={{
                color: "#ffffff",
                fontSize: 40,
                fontWeight: 600,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
                marginBottom: 20,
              }}
            >
              tetapi bagaimana data
            </span>

            {/* Focal Highlights: "diorganisasi" dan "dikelola." */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                marginBottom: 36,
                minHeight: 64,
              }}
            >
              {/* Badge 1: "diorganisasi" */}
              {isOrganized && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 22px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(16, 185, 129, 0.26) 0%, rgba(5, 150, 105, 0.18) 100%)",
                    border: "1.5px solid rgba(52, 211, 153, 0.75)",
                    boxShadow:
                      "0 0 32px rgba(16, 185, 129, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                    transform: `scale(${organizedScale})`,
                    opacity: Math.min(1, organizedSpring),
                    transition: "all 0.2s ease",
                  }}
                >
                  <FaLayerGroup size={24} color="#34d399" />
                  <span
                    style={{
                      color: "#34d399",
                      fontSize: 44,
                      fontWeight: 800,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 25px rgba(52, 211, 153, 0.85)",
                    }}
                  >
                    diorganisasi
                  </span>
                </div>
              )}

              {/* Separator: "dan" */}
              {isDan4 && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 34,
                    fontWeight: 600,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  dan
                </span>
              )}

              {/* Badge 2: "dikelola." */}
              {isManaged && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 22px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(56, 189, 248, 0.26) 0%, rgba(37, 99, 235, 0.18) 100%)",
                    border: "1.5px solid rgba(56, 189, 248, 0.75)",
                    boxShadow:
                      "0 0 32px rgba(56, 189, 248, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                    transform: `scale(${managedScale})`,
                    opacity: Math.min(1, managedSpring),
                    transition: "all 0.2s ease",
                  }}
                >
                  <FaCogs size={26} color="#38bdf8" />
                  <span
                    style={{
                      color: "#38bdf8",
                      fontSize: 44,
                      fontWeight: 800,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 25px rgba(56, 189, 248, 0.85)",
                    }}
                  >
                    dikelola.
                  </span>
                </div>
              )}
            </div>

            {/* Visual Graphic: 3 Structured Architecture Tier Cells */}
            <div
              style={{
                display: "flex",
                gap: 16,
                width: "100%",
                justifyContent: "center",
              }}
            >
              {/* Module 1: Structure / Organization (Emerald) */}
              {isOrganized && (
                <div
                  style={{
                    flex: 1,
                    maxWidth: 270,
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    borderRadius: 18,
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    transform: `scale(${Math.min(1, Math.max(0, tier1Spring))})`,
                    opacity: Math.min(1, Math.max(0, tier1Spring)),
                    boxShadow:
                      "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 24px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <FaLayerGroup size={22} color="#34d399" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      width: "100%",
                      padding: "0 8px",
                    }}
                  >
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(52, 211, 153, 0.7)",
                        width: "85%",
                      }}
                    />
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(52, 211, 153, 0.45)",
                        width: "100%",
                      }}
                    />
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(52, 211, 153, 0.3)",
                        width: "65%",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Module 2: Schema & Indexing (Cyan) */}
              {isDan4 && (
                <div
                  style={{
                    flex: 1,
                    maxWidth: 270,
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    borderRadius: 18,
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    transform: `scale(${Math.min(1, Math.max(0, tier2Spring))})`,
                    opacity: Math.min(1, Math.max(0, tier2Spring)),
                    boxShadow:
                      "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 24px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <FaSitemap size={22} color="#38bdf8" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      width: "100%",
                      padding: "0 8px",
                    }}
                  >
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(56, 189, 248, 0.7)",
                        width: "90%",
                      }}
                    />
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(56, 189, 248, 0.45)",
                        width: "70%",
                      }}
                    />
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(56, 189, 248, 0.3)",
                        width: "95%",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Module 3: Active Governance & Control (Blue/Emerald) */}
              {isManaged && (
                <div
                  style={{
                    flex: 1,
                    maxWidth: 270,
                    background: "rgba(96, 165, 250, 0.08)",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                    borderRadius: 18,
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    transform: `scale(${Math.min(1, Math.max(0, tier3Spring))})`,
                    opacity: Math.min(1, Math.max(0, tier3Spring)),
                    boxShadow:
                      "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 24px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <FaCogs size={20} color="#60a5fa" />
                    <FaCheckCircle size={15} color="#34d399" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      width: "100%",
                      padding: "0 8px",
                    }}
                  >
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(96, 165, 250, 0.7)",
                        width: "100%",
                      }}
                    />
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(52, 211, 153, 0.6)",
                        width: "80%",
                      }}
                    />
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "rgba(96, 165, 250, 0.35)",
                        width: "60%",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 5: PHYSICAL STORAGE DEFINITION (F368 - F480)
          Line 7: "Kalau tempat penyimpanannya,"
          Line 8: "kita sebut storage."
          Audio:
          - F373 - F412: "Kalau tempat penyimpanannya,"
          - F420 - F442: "kita sebut"
          - F444 - F460: "storage."
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 368 && frame < 480 && (
        <div
          style={{
            position: "absolute",
            top: 610,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s5Opacity,
            transform: `translateY(${s5Y}px)`,
            padding: "0 50px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              background: isStorage
                ? "linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.82) 100%)"
                : DATABASE_COLORS.glassBg,
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: isStorage
                ? "1.5px solid rgba(245, 158, 11, 0.6)"
                : DATABASE_COLORS.glassBorder,
              borderRadius: 32,
              padding: "44px 38px",
              boxShadow: isStorage
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(245, 158, 11, 0.3)"
                : DATABASE_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Line 7: "Kalau tempat penyimpanannya," */}
            <span
              style={{
                color: "#ffffff",
                fontSize: 40,
                fontWeight: 600,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
                marginBottom: 20,
              }}
            >
              Kalau tempat penyimpanannya,
            </span>

            {/* Line 8: "kita sebut storage." */}
            {isLine8 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  marginBottom: 36,
                  opacity: Math.min(1, line8Spring),
                  transform: `translateY(${(1 - Math.min(1, line8Spring)) * 10}px)`,
                }}
              >
                <span
                  style={{
                    color: "#cbd5e1",
                    fontSize: 44,
                    fontWeight: 600,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: "-0.02em",
                  }}
                >
                  kita sebut
                </span>

                {/* Golden Amber "storage." Highlight Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "8px 26px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.18) 100%)",
                    border: "1.5px solid rgba(245, 158, 11, 0.8)",
                    boxShadow:
                      "0 0 35px rgba(245, 158, 11, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
                    transform: `scale(${storageScale})`,
                    transition: "all 0.2s ease",
                  }}
                >
                  <FaHdd size={28} color="#fbbf24" />
                  <span
                    style={{
                      color: "#fbbf24",
                      fontSize: 46,
                      fontWeight: 900,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: "-0.02em",
                      textShadow:
                        "0 0 28px rgba(245, 158, 11, 0.95), 0 0 55px rgba(245, 158, 11, 0.5)",
                    }}
                  >
                    storage.
                  </span>
                </div>
              </div>
            )}

            {/* Visual Hardware Storage Drive Graphic (Pure visual, zero filler text) */}
            {isDriveVisible && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 820,
                  background: "rgba(245, 158, 11, 0.06)",
                  border: "1px solid rgba(245, 158, 11, 0.32)",
                  borderRadius: 22,
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  opacity: Math.min(1, driveSpring),
                  transform: `scale(${0.92 + Math.min(1, driveSpring) * 0.08}) translateY(${(1 - Math.min(1, driveSpring)) * 14}px)`,
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 12px 30px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Drive Header / Activity Icon */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <FaHdd
                    size={36}
                    color={isStorage ? "#fbbf24" : "#f59e0b"}
                    style={{
                      filter: isStorage
                        ? "drop-shadow(0 0 14px rgba(251, 191, 36, 0.8))"
                        : "drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))",
                      transition: "all 0.25s ease",
                    }}
                  />
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: isStorage ? "#10b981" : "#f59e0b",
                      boxShadow: isStorage
                        ? "0 0 12px #10b981"
                        : "0 0 8px #f59e0b",
                      transition: "all 0.2s ease",
                    }}
                  />
                </div>

                {/* 4 Hardware Memory / Platter Sector Blocks */}
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    gap: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {[
                    { prog: sector1Progress, width: "100%" },
                    { prog: sector2Progress, width: "85%" },
                    { prog: sector3Progress, width: "95%" },
                    { prog: sector4Progress, width: "100%" },
                  ].map((sec, idx) => (
                    <div
                      key={`sec-${idx}`}
                      style={{
                        flex: 1,
                        height: 38,
                        borderRadius: 10,
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 8px",
                      }}
                    >
                      <div
                        style={{
                          height: 6,
                          borderRadius: 3,
                          width: sec.width,
                          background: isStorage
                            ? "linear-gradient(90deg, #f59e0b, #fbbf24)"
                            : "rgba(245, 158, 11, 0.4)",
                          opacity: sec.prog,
                          transform: `scaleX(${sec.prog})`,
                          transformOrigin: "left",
                          boxShadow: isStorage
                            ? "0 0 10px rgba(251, 191, 36, 0.8)"
                            : "none",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Hardware Server Rack & Validation Status */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaServer
                    size={28}
                    color={isStorage ? "#fbbf24" : "#94a3b8"}
                    style={{
                      filter: isStorage
                        ? "drop-shadow(0 0 10px rgba(251, 191, 36, 0.6))"
                        : "none",
                    }}
                  />
                  {isStorage && (
                    <FaCheckCircle
                      size={20}
                      color="#10b981"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))",
                      }}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 6: WARDROBE ANALOGY (F480 - F775)
          Line 10: "Bayangkan sebuah lemari pakaian." (F485 - F525)
          Line 11: "Lemari tersebut adalah storage-nya." (F550 - F600)
          Line 12: "Sedangkan rak-rak di dalamnya bisa kita ibaratkan sebagai database." (F625 - F745)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 480 && frame < 775 && (
        <div
          style={{
            position: "absolute",
            top: 490,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s6Opacity,
            transform: `translateY(${s6Y}px)`,
            padding: "0 46px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 980,
              background: isPhase3
                ? "linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.82) 100%)"
                : isPhase2
                  ? "linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.82) 100%)"
                  : DATABASE_COLORS.glassBg,
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: isPhase3
                ? "1.5px solid rgba(56, 189, 248, 0.55)"
                : isPhase2
                  ? "1.5px solid rgba(245, 158, 11, 0.6)"
                  : DATABASE_COLORS.glassBorder,
              borderRadius: 32,
              padding: "40px 36px",
              boxShadow: isPhase3
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(56, 189, 248, 0.25)"
                : isPhase2
                  ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(245, 158, 11, 0.25)"
                  : DATABASE_COLORS.glassShadow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Top Text Area: Dynamically transitions Line 10 -> Line 11 -> Line 12 */}
            <div
              style={{
                minHeight: 110,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              {/* Line 10: Bayangkan sebuah lemari pakaian. */}
              {isPhase1 && (
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 42,
                    fontWeight: 700,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  Bayangkan sebuah lemari pakaian.
                </span>
              )}

              {/* Line 11: Lemari tersebut adalah storage-nya. */}
              {isPhase2 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: 42,
                      fontWeight: 600,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Lemari tersebut adalah
                  </span>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "6px 22px",
                      borderRadius: 16,
                      background: isStorageNya
                        ? "linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.2) 100%)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: isStorageNya
                        ? "1.5px solid rgba(245, 158, 11, 0.85)"
                        : "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: isStorageNya
                        ? "0 0 32px rgba(245, 158, 11, 0.45)"
                        : "none",
                      transform: `scale(${storageNyaScale})`,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <FaHdd
                      size={24}
                      color={isStorageNya ? "#fbbf24" : "#64748b"}
                    />
                    <span
                      style={{
                        color: isStorageNya ? "#fbbf24" : "#64748b",
                        fontSize: 44,
                        fontWeight: 900,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: "-0.02em",
                        textShadow: isStorageNya
                          ? "0 0 25px rgba(245, 158, 11, 0.95)"
                          : "none",
                      }}
                    >
                      storage-nya.
                    </span>
                  </div>
                </div>
              )}

              {/* Line 12: Sedangkan rak-rak di dalamnya bisa kita ibaratkan sebagai database. */}
              {isPhase3 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "#94a3b8",
                        fontSize: 36,
                        fontWeight: 500,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      Sedangkan
                    </span>
                    <span
                      style={{
                        color: isRakRak ? "#38bdf8" : "#ffffff",
                        fontSize: 40,
                        fontWeight: 800,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        textShadow: isRakRak
                          ? "0 0 20px rgba(56, 189, 248, 0.7)"
                          : "none",
                        transition: "color 0.2s ease",
                      }}
                    >
                      rak-rak di dalamnya
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        color:
                          frame >= 689
                            ? "#cbd5e1"
                            : "rgba(255, 255, 255, 0.4)",
                        fontSize: 38,
                        fontWeight: 600,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        transition: "color 0.2s ease",
                      }}
                    >
                      bisa kita ibaratkan sebagai
                    </span>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "6px 24px",
                        borderRadius: 16,
                        background: isDbClimax
                          ? "linear-gradient(135deg, rgba(56, 189, 248, 0.32) 0%, rgba(37, 99, 235, 0.22) 100%)"
                          : "rgba(255, 255, 255, 0.05)",
                        border: isDbClimax
                          ? "1.5px solid rgba(56, 189, 248, 0.85)"
                          : "1px solid rgba(255, 255, 255, 0.12)",
                        boxShadow: isDbClimax
                          ? "0 0 35px rgba(56, 189, 248, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.35)"
                          : "none",
                        transform: `scale(${dbClimaxScale})`,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaDatabase
                        size={24}
                        color={isDbClimax ? "#38bdf8" : "#64748b"}
                      />
                      <span
                        style={{
                          color: isDbClimax ? "#38bdf8" : "#64748b",
                          fontSize: 42,
                          fontWeight: 900,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: "-0.02em",
                          textShadow: isDbClimax
                            ? "0 0 28px rgba(56, 189, 248, 0.95), 0 0 50px rgba(56, 189, 248, 0.5)"
                            : "none",
                        }}
                      >
                        database.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Frosted Glass Wardrobe (Lemari) & Shelves Graphic */}
            <div
              style={{
                width: "100%",
                maxWidth: 860,
                background: "rgba(15, 23, 42, 0.5)",
                border: isPhase2
                  ? "2px solid rgba(245, 158, 11, 0.85)"
                  : isPhase3
                    ? "2px solid rgba(245, 158, 11, 0.65)"
                    : "1.5px solid rgba(255, 255, 255, 0.18)",
                borderRadius: 24,
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: isPhase2
                  ? "0 0 40px rgba(245, 158, 11, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.3)"
                  : isPhase3
                    ? "0 0 40px rgba(56, 189, 248, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)"
                    : "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 12px 30px rgba(0, 0, 0, 0.3)",
                transition: "border 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Top Wardrobe Beam with hardware amber indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaHdd
                    size={20}
                    color={isPhase2 || isPhase3 ? "#fbbf24" : "#94a3b8"}
                    style={{
                      filter:
                        isPhase2 || isPhase3
                          ? "drop-shadow(0 0 8px rgba(251, 191, 36, 0.7))"
                          : "none",
                    }}
                  />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: isPhase2 || isPhase3 ? "#fbbf24" : "#64748b",
                      boxShadow:
                        isPhase2 || isPhase3
                          ? "0 0 8px #fbbf24"
                          : "none",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: 2,
                    flex: 1,
                    margin: "0 16px",
                    background:
                      isPhase2 || isPhase3
                        ? "linear-gradient(90deg, rgba(245, 158, 11, 0.6), transparent)"
                        : "rgba(255, 255, 255, 0.1)",
                  }}
                />
                {isPhase3 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <FaDatabase size={18} color="#38bdf8" />
                    <FaCheckCircle size={14} color="#34d399" />
                  </div>
                )}
              </div>

              {/* Interior: Wardrobe Chamber when frame < 636, then Shelves (Rak-rak) when frame >= 636 */}
              {!isRakRak ? (
                <div
                  style={{
                    height: 140,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    borderRadius: 16,
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px dashed rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <div
                    style={{
                      height: 4,
                      width: "80%",
                      borderRadius: 2,
                      background: isPhase2
                        ? "linear-gradient(90deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.7), rgba(245, 158, 11, 0.2))"
                        : "rgba(255, 255, 255, 0.15)",
                      boxShadow: isPhase2
                        ? "0 0 10px rgba(245, 158, 11, 0.5)"
                        : "none",
                    }}
                  />
                  <div style={{ display: "flex", gap: 24, opacity: 0.4 }}>
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={`hanger-rail-${i}`}
                        style={{
                          width: 2,
                          height: 36,
                          background: isPhase2 ? "#fbbf24" : "#64748b",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                /* 3 Interior Frosted Glass Shelves (Rak-rak) */
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    width: "100%",
                  }}
                >
                  {/* Shelf 1 (Top Rack: Stacked Structured Layers) */}
                  {frame >= 636 && (
                    <div
                      style={{
                        background: "rgba(56, 189, 248, 0.12)",
                        border: "1.5px solid rgba(56, 189, 248, 0.65)",
                        borderRadius: 14,
                        padding: "12px 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transform: `scale(${Math.min(1, Math.max(0, shelf1Spring))})`,
                        opacity: Math.min(1, Math.max(0, shelf1Spring)),
                        boxShadow: "0 0 20px rgba(56, 189, 248, 0.35)",
                        transition: "background 0.25s ease, border 0.25s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <FaLayerGroup
                          size={20}
                          color="#38bdf8"
                        />
                        <div style={{ display: "flex", gap: 8 }}>
                          {[80, 110, 95].map((w, idx) => (
                            <div
                              key={`s1-item-${idx}`}
                              style={{
                                height: 18,
                                width: w,
                                borderRadius: 6,
                                background: "rgba(56, 189, 248, 0.25)",
                                border: "1px solid rgba(56, 189, 248, 0.5)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div
                        style={{
                          width: 32,
                          height: 6,
                          borderRadius: 3,
                          background: "#38bdf8",
                        }}
                      />
                    </div>
                  )}

                  {/* Shelf 2 (Middle Rack: Categorized Folders) */}
                  {frame >= 655 && (
                    <div
                      style={{
                        background: "rgba(52, 211, 153, 0.10)",
                        border: "1.5px solid rgba(52, 211, 153, 0.65)",
                        borderRadius: 14,
                        padding: "12px 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transform: `scale(${Math.min(1, Math.max(0, shelf2Spring))})`,
                        opacity: Math.min(1, Math.max(0, shelf2Spring)),
                        boxShadow: "0 0 20px rgba(52, 211, 153, 0.35)",
                        transition: "background 0.25s ease, border 0.25s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <FaFolder
                          size={20}
                          color="#34d399"
                        />
                        <div style={{ display: "flex", gap: 8 }}>
                          {[100, 75, 120, 85].map((w, idx) => (
                            <div
                              key={`s2-item-${idx}`}
                              style={{
                                height: 18,
                                width: w,
                                borderRadius: 6,
                                background: "rgba(52, 211, 153, 0.25)",
                                border: "1px solid rgba(52, 211, 153, 0.5)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div
                        style={{
                          width: 32,
                          height: 6,
                          borderRadius: 3,
                          background: "#34d399",
                        }}
                      />
                    </div>
                  )}

                  {/* Shelf 3 (Bottom Rack: Indexed Storage / Database Matrix) */}
                  {frame >= 675 && (
                    <div
                      style={{
                        background: "rgba(56, 189, 248, 0.12)",
                        border: "1.5px solid rgba(56, 189, 248, 0.65)",
                        borderRadius: 14,
                        padding: "12px 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transform: `scale(${Math.min(1, Math.max(0, shelf3Spring))})`,
                        opacity: Math.min(1, Math.max(0, shelf3Spring)),
                        boxShadow: "0 0 20px rgba(56, 189, 248, 0.35)",
                        transition: "background 0.25s ease, border 0.25s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <FaSitemap
                          size={20}
                          color="#38bdf8"
                        />
                        <div style={{ display: "flex", gap: 8 }}>
                          {[90, 110, 105].map((w, idx) => (
                            <div
                              key={`s3-item-${idx}`}
                              style={{
                                height: 18,
                                width: w,
                                borderRadius: 6,
                                background: "rgba(56, 189, 248, 0.25)",
                                border: "1px solid rgba(56, 189, 248, 0.5)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div
                        style={{
                          width: 32,
                          height: 6,
                          borderRadius: 3,
                          background: "#38bdf8",
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 7: DATA ORGANIZATION METHODS (F775 - F1005)
          Line 14: "Lalu, bagaimana pakaian itu disusun?" (F780 - F845)
          Line 15: "Apakah dilipat, digantung, atau dikelompokkan berdasarkan jenisnya?" (F860 - F985)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 775 && frame < 1005 && (
        <div
          style={{
            position: "absolute",
            top: 500,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s7Opacity,
            transform: `translateY(${s7Y}px)`,
            padding: "0 46px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 980,
              background: isLine15
                ? "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.82) 100%)"
                : DATABASE_COLORS.glassBg,
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: isLine15
                ? "1.5px solid rgba(52, 211, 153, 0.55)"
                : "1.5px solid rgba(56, 189, 248, 0.5)",
              borderRadius: 32,
              padding: "40px 36px",
              boxShadow: isLine15
                ? "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(16, 185, 129, 0.25)"
                : "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(56, 189, 248, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Top Section: Line 14 Question */}
            {!isLine15 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 22px",
                    borderRadius: 9999,
                    background: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                  }}
                >
                  <FaQuestionCircle size={20} color="#38bdf8" />
                </div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 44,
                    fontWeight: 700,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  Lalu, bagaimana pakaian itu disusun?
                </span>
              </div>
            ) : (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 20px",
                  borderRadius: 9999,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    color: "#94a3b8",
                    fontSize: 24,
                    fontWeight: 500,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  Lalu, bagaimana pakaian itu disusun?
                </span>
              </div>
            )}

            {/* Middle Section: Line 15 (Dilipat, Digantung, atau Dikelompokkan berdasarkan jenisnya?) */}
            {isLine15 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 34,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: 38,
                      fontWeight: 600,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Apakah
                  </span>

                  {/* Highlight 1: "dilipat," */}
                  {isDilipat && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 20px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.18) 100%)",
                        border: "1.5px solid rgba(56, 189, 248, 0.75)",
                        boxShadow: "0 0 25px rgba(56, 189, 248, 0.4)",
                        transform: `scale(${dilipatScale})`,
                        opacity: Math.min(1, dilipatSpring),
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaLayerGroup
                        size={20}
                        color="#38bdf8"
                      />
                      <span
                        style={{
                          color: "#38bdf8",
                          fontSize: 40,
                          fontWeight: 800,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: "-0.01em",
                          textShadow: "0 0 20px rgba(56, 189, 248, 0.85)",
                        }}
                      >
                        dilipat,
                      </span>
                    </div>
                  )}

                  {/* Highlight 2: "digantung," */}
                  {isDigantung && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 20px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(96, 165, 250, 0.28) 0%, rgba(37, 99, 235, 0.18) 100%)",
                        border: "1.5px solid rgba(96, 165, 250, 0.75)",
                        boxShadow: "0 0 25px rgba(96, 165, 250, 0.4)",
                        transform: `scale(${digantungScale})`,
                        opacity: Math.min(1, digantungSpring),
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaStream
                        size={20}
                        color="#60a5fa"
                      />
                      <span
                        style={{
                          color: "#60a5fa",
                          fontSize: 40,
                          fontWeight: 800,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: "-0.01em",
                          textShadow: "0 0 20px rgba(96, 165, 250, 0.85)",
                        }}
                      >
                        digantung,
                      </span>
                    </div>
                  )}
                </div>

                {/* Highlight 3: "atau dikelompokkan berdasarkan jenisnya?" */}
                {isDikelompokkan && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      opacity: Math.min(1, kelompokSpring),
                    }}
                  >
                    <span
                      style={{
                        color: "#94a3b8",
                        fontSize: 34,
                        fontWeight: 500,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      atau
                    </span>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 22px",
                        borderRadius: 18,
                        background:
                          "linear-gradient(135deg, rgba(52, 211, 153, 0.28) 0%, rgba(5, 150, 105, 0.18) 100%)",
                        border: "1.5px solid rgba(52, 211, 153, 0.75)",
                        boxShadow: "0 0 32px rgba(52, 211, 153, 0.45)",
                        transform: `scale(${kelompokScale})`,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaBoxes
                        size={22}
                        color="#34d399"
                      />
                      <span
                        style={{
                          color: "#34d399",
                          fontSize: 40,
                          fontWeight: 900,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: "-0.01em",
                          textShadow: "0 0 25px rgba(52, 211, 153, 0.9)",
                        }}
                      >
                        dikelompokkan berdasarkan jenisnya?
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Visual: 3 Frosted Glass Organization Modules (Zero filler text) */}
            {isLine15 && (
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  width: "100%",
                  maxWidth: 880,
                  justifyContent: "center",
                }}
              >
                {/* Module 1: Dilipat (Stacking / Tabular Slabs) */}
                {isDilipat && (
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(56, 189, 248, 0.12)",
                      border: "1.5px solid rgba(56, 189, 248, 0.6)",
                      borderRadius: 18,
                      padding: "18px 14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                      boxShadow:
                        "0 8px 24px rgba(56, 189, 248, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                      transform: `scale(${dilipatScale})`,
                      opacity: Math.min(1, dilipatSpring),
                      transition: "all 0.25s ease",
                    }}
                  >
                    <FaLayerGroup
                      size={26}
                      color="#38bdf8"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      {[90, 80, 100].map((w, idx) => (
                        <div
                          key={`fold-${idx}`}
                          style={{
                            height: 7,
                            width: `${w}%`,
                            borderRadius: 4,
                            background: "rgba(56, 189, 248, 0.75)",
                            boxShadow: "0 0 8px rgba(56, 189, 248, 0.5)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Module 2: Digantung (Hanging Rod / Relational Links) */}
                {isDigantung && (
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(96, 165, 250, 0.12)",
                      border: "1.5px solid rgba(96, 165, 250, 0.6)",
                      borderRadius: 18,
                      padding: "18px 14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                      boxShadow:
                        "0 8px 24px rgba(96, 165, 250, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                      transform: `scale(${digantungScale})`,
                      opacity: Math.min(1, digantungSpring),
                      transition: "all 0.25s ease",
                    }}
                  >
                    <FaStream
                      size={26}
                      color="#60a5fa"
                    />
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        height: 33,
                        alignItems: "flex-end",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      {[24, 32, 28].map((h, idx) => (
                        <div
                          key={`hang-${idx}`}
                          style={{
                            width: 14,
                            height: h,
                            borderRadius: 3,
                            background: "rgba(96, 165, 250, 0.75)",
                            boxShadow: "0 0 8px rgba(96, 165, 250, 0.5)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Module 3: Dikelompokkan (Partitioned Cluster Pods) */}
                {isDikelompokkan && (
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(52, 211, 153, 0.12)",
                      border: "1.5px solid rgba(52, 211, 153, 0.6)",
                      borderRadius: 18,
                      padding: "18px 14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                      boxShadow:
                        "0 8px 24px rgba(52, 211, 153, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                      transform: `scale(${kelompokScale})`,
                      opacity: Math.min(1, kelompokSpring),
                      transition: "all 0.25s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaBoxes
                        size={26}
                        color="#34d399"
                      />
                      <FaCheckCircle size={14} color="#34d399" />
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 6,
                        width: "80%",
                      }}
                    >
                      {[0, 1, 2, 3].map((idx) => (
                        <div
                          key={`grp-${idx}`}
                          style={{
                            height: 12,
                            borderRadius: 3,
                            background: "rgba(52, 211, 153, 0.75)",
                            boxShadow: "0 0 8px rgba(52, 211, 153, 0.5)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 8: ANALOGY BRIDGE (F1005 - F1150)
          Line 17: "Nah, itu bisa kita analogikan sebagai struktur dan cara data diorganisasi."
          Audio: F1012 - F1135
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 1005 && frame < 1150 && (
        <div
          style={{
            position: "absolute",
            top: 520,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: s8Opacity,
            transform: `translateY(${s8Y}px)`,
            padding: "0 46px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 980,
              background:
                "linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(6, 9, 19, 0.82) 100%)",
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: "1.5px solid rgba(56, 189, 248, 0.5)",
              borderRadius: 32,
              padding: "44px 38px",
              boxShadow:
                "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(56, 189, 248, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Top Lightbulb Insight Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 22px",
                borderRadius: 9999,
                background: "rgba(251, 191, 36, 0.12)",
                border: "1px solid rgba(251, 191, 36, 0.35)",
                marginBottom: 24,
              }}
            >
              <FaLightbulb size={20} color="#fbbf24" />
            </div>

            {/* Line 17 Main Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                marginBottom: 36,
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 42,
                  fontWeight: 600,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                Nah, itu bisa kita analogikan sebagai
              </span>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  minHeight: 64,
                }}
              >
                {/* "struktur" */}
                {isStruktur && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 20px",
                      borderRadius: 16,
                      background:
                        "linear-gradient(135deg, rgba(52, 211, 153, 0.28) 0%, rgba(5, 150, 105, 0.18) 100%)",
                      border: "1.5px solid rgba(52, 211, 153, 0.75)",
                      boxShadow: "0 0 25px rgba(52, 211, 153, 0.4)",
                      transform: `scale(${1 + (1 - Math.min(1, strukturSpring)) * 0.18})`,
                      opacity: Math.min(1, strukturSpring),
                      transition: "all 0.2s ease",
                    }}
                  >
                    <FaSitemap
                      size={20}
                      color="#34d399"
                    />
                    <span
                      style={{
                        color: "#34d399",
                        fontSize: 42,
                        fontWeight: 800,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: "-0.01em",
                        textShadow: "0 0 22px rgba(52, 211, 153, 0.85)",
                      }}
                    >
                      struktur
                    </span>
                  </div>
                )}

                {isCaraData && (
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: 36,
                      fontWeight: 500,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      opacity: Math.min(1, caraDataSpring),
                    }}
                  >
                    dan
                  </span>
                )}

                {/* "cara data diorganisasi." */}
                {isCaraDiorganisasi && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "6px 22px",
                      borderRadius: 16,
                      background:
                        "linear-gradient(135deg, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.18) 100%)",
                      border: "1.5px solid rgba(56, 189, 248, 0.75)",
                      boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
                      transform: `scale(${1 + (1 - Math.min(1, caraSpring)) * 0.18})`,
                      opacity: Math.min(1, caraSpring),
                      transition: "all 0.2s ease",
                    }}
                  >
                    <FaLayerGroup
                      size={20}
                      color="#38bdf8"
                    />
                    <span
                      style={{
                        color: "#38bdf8",
                        fontSize: 42,
                        fontWeight: 800,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: "-0.01em",
                        textShadow: "0 0 25px rgba(56, 189, 248, 0.85)",
                      }}
                    >
                      cara data diorganisasi.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Visual Architecture Pipeline (Zero filler text) */}
            {isStruktur && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 820,
                  background: "rgba(15, 23, 42, 0.55)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: 20,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 12px 30px rgba(0, 0, 0, 0.3)",
                  opacity: Math.min(1, strukturSpring),
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <FaSitemap size={28} color="#34d399" />
                  <div
                    style={{
                      height: 4,
                      width: 70,
                      borderRadius: 2,
                      background: "linear-gradient(90deg, #34d399, #38bdf8)",
                    }}
                  />
                </div>

                {isCaraDiorganisasi && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        gap: 12,
                        flex: 1,
                        justifyContent: "center",
                        opacity: Math.min(1, caraSpring),
                      }}
                    >
                      {[0, 1, 2, 3].map((idx) => (
                        <div
                          key={`pipeline-${idx}`}
                          style={{
                            flex: 1,
                            height: 44,
                            borderRadius: 12,
                            background: "rgba(56, 189, 248, 0.08)",
                            border: "1px solid rgba(56, 189, 248, 0.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                          }}
                        >
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: idx % 2 === 0 ? "#38bdf8" : "#34d399",
                              boxShadow:
                                idx % 2 === 0
                                  ? "0 0 8px #38bdf8"
                                  : "0 0 8px #34d399",
                            }}
                          />
                          <div
                            style={{
                              height: 4,
                              width: "45%",
                              borderRadius: 2,
                              background: "rgba(255, 255, 255, 0.25)",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        opacity: Math.min(1, caraSpring),
                      }}
                    >
                      <div
                        style={{
                          height: 4,
                          width: 70,
                          borderRadius: 2,
                          background: "linear-gradient(90deg, #38bdf8, #34d399)",
                        }}
                      />
                      <FaDatabase size={28} color="#38bdf8" />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 9: GRAND FINALE "TRIAD OF PURPOSE" (F1150 - F1440)
          Line 18: "Jadi, database bukan cuma soal menyimpan data," (F1168 - F1234)
          Line 19: "tetapi juga bagaimana data tersebut disusun agar mudah dicari, dikelola, dan digunakan kembali." (F1251 - F1418)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 1150 && (
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: Math.min(1, s9Entrance),
            padding: "0 46px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 980,
              background: isLine19
                ? "linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(6, 9, 19, 0.85) 100%)"
                : DATABASE_COLORS.glassBg,
              backdropFilter: DATABASE_COLORS.glassBlur,
              WebkitBackdropFilter: DATABASE_COLORS.glassBlur,
              border: isLine19
                ? "1.5px solid rgba(52, 211, 153, 0.65)"
                : "1.5px solid rgba(56, 189, 248, 0.55)",
              borderRadius: 32,
              padding: "44px 38px",
              boxShadow: isLine19
                ? "0 30px 80px rgba(0, 0, 0, 0.65), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 50px rgba(16, 185, 129, 0.3)"
                : "0 28px 70px rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 0 45px rgba(56, 189, 248, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "border 0.35s ease, box-shadow 0.35s ease",
            }}
          >
            {/* Phase 1: Line 18 (F1150 - F1245) */}
            {!isLine19 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 0",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "8px 24px",
                    borderRadius: 9999,
                    background: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    marginBottom: 10,
                  }}
                >
                  <FaDatabase size={22} color="#38bdf8" />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: "#38bdf8",
                      fontSize: 48,
                      fontWeight: 800,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 30px rgba(56, 189, 248, 0.5)",
                    }}
                  >
                    Jadi, database
                  </span>

                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <span
                      style={{
                        color: "#e2e8f0",
                        fontSize: 44,
                        fontWeight: 600,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        letterSpacing: "-0.01em",
                      }}
                    >
                      bukan cuma soal menyimpan data,
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "52%",
                        transform: "translateY(-50%)",
                        height: 3,
                        width: `${s18Strike}%`,
                        background: "#f43f5e",
                        boxShadow: "0 0 12px #f43f5e",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Phase 2: Line 19 (F1245 - F1440) The Grand Triad of Database Value */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/* Concluding Header Text with Frame 1305 Highlight */}
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 38,
                    fontWeight: 600,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    marginBottom: 24,
                  }}
                >
                  tetapi juga bagaimana data tersebut{" "}
                  <span
                    style={{
                      color: isDisusun ? "#38bdf8" : "inherit",
                      fontWeight: isDisusun ? 800 : 600,
                      textShadow: isDisusun
                        ? "0 0 24px rgba(56, 189, 248, 0.9), 0 0 45px rgba(56, 189, 248, 0.45)"
                        : "none",
                      padding: "2px 10px",
                      borderRadius: 10,
                      background: isDisusun
                        ? "rgba(56, 189, 248, 0.16)"
                        : "transparent",
                      border: isDisusun
                        ? "1px solid rgba(56, 189, 248, 0.45)"
                        : "1px solid transparent",
                      display: "inline-block",
                      transform: isDisusun
                        ? `scale(${1 + (1 - Math.min(1, disusunSpring)) * 0.12})`
                        : "scale(1)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    disusun agar
                  </span>
                </span>

                {/* The Triad Badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    marginBottom: 36,
                    minHeight: 64,
                  }}
                >
                  {/* Triad 1: mudah dicari, */}
                  {isDicari && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 20px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.18) 100%)",
                        border: "1.5px solid rgba(56, 189, 248, 0.8)",
                        boxShadow: "0 0 28px rgba(56, 189, 248, 0.45)",
                        transform: `scale(${dicariScale})`,
                        opacity: Math.min(1, dicariSpring),
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaSearch
                        size={18}
                        color="#38bdf8"
                      />
                      <span
                        style={{
                          color: "#38bdf8",
                          fontSize: 38,
                          fontWeight: 800,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: "-0.01em",
                          textShadow: "0 0 22px rgba(56, 189, 248, 0.9)",
                        }}
                      >
                        mudah dicari,
                      </span>
                    </div>
                  )}

                  {/* Triad 2: dikelola, */}
                  {isDikelolaTriad && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 20px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(96, 165, 250, 0.28) 0%, rgba(37, 99, 235, 0.18) 100%)",
                        border: "1.5px solid rgba(96, 165, 250, 0.8)",
                        boxShadow: "0 0 28px rgba(96, 165, 250, 0.45)",
                        transform: `scale(${dikelolaScale})`,
                        opacity: Math.min(1, dikelolaTriadSpring),
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaCogs
                        size={20}
                        color="#60a5fa"
                      />
                      <span
                        style={{
                          color: "#60a5fa",
                          fontSize: 38,
                          fontWeight: 800,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: "-0.01em",
                          textShadow: "0 0 22px rgba(96, 165, 250, 0.9)",
                        }}
                      >
                        dikelola,
                      </span>
                    </div>
                  )}

                  {/* Conjunction Connector: dan */}
                  {isDanConnector && (
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: 34,
                        fontWeight: 700,
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        padding: "0 6px",
                        opacity: Math.min(1, danConnectorSpring),
                        transform: `scale(${danScale})`,
                        transition: "all 0.2s ease",
                        textShadow: "0 0 16px rgba(255, 255, 255, 0.75)",
                      }}
                    >
                      dan
                    </span>
                  )}

                  {/* Triad 3: digunakan kembali. */}
                  {isDigunakan && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 22px",
                        borderRadius: 16,
                        background:
                          "linear-gradient(135deg, rgba(52, 211, 153, 0.32) 0%, rgba(5, 150, 105, 0.22) 100%)",
                        border: "1.5px solid rgba(52, 211, 153, 0.85)",
                        boxShadow:
                          "0 0 35px rgba(52, 211, 153, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                        transform: `scale(${digunakanScale})`,
                        opacity: Math.min(1, digunakanSpring),
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FaSyncAlt
                        size={20}
                        color="#34d399"
                      />
                      <span
                        style={{
                          color: "#34d399",
                          fontSize: 40,
                          fontWeight: 900,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: "-0.01em",
                          textShadow: "0 0 28px rgba(52, 211, 153, 0.95)",
                        }}
                      >
                        digunakan kembali.
                      </span>
                    </div>
                  )}
                </div>

                {/* Grand Finale 3-Column Glass Matrix */}
                {isDicari && (
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      width: "100%",
                      maxWidth: 880,
                      justifyContent: "center",
                    }}
                  >
                    {/* Column 1: Search / Indexing Matrix */}
                    <div
                      style={{
                        flex: 1,
                        background: "rgba(56, 189, 248, 0.12)",
                        border: "1.5px solid rgba(56, 189, 248, 0.6)",
                        borderRadius: 18,
                        padding: "16px 14px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        boxShadow:
                          "0 8px 24px rgba(56, 189, 248, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                        transform: `scale(${dicariScale})`,
                        opacity: Math.min(1, dicariSpring),
                        transition: "all 0.25s ease",
                      }}
                    >
                      <FaSearch
                        size={24}
                        color="#38bdf8"
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            height: 5,
                            width: "85%",
                            borderRadius: 3,
                            background: "rgba(56, 189, 248, 0.8)",
                          }}
                        />
                        <div
                          style={{
                            height: 5,
                            width: "65%",
                            borderRadius: 3,
                            background: "rgba(56, 189, 248, 0.5)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Column 2: Governance / Management */}
                    {isDikelolaTriad && (
                      <div
                        style={{
                          flex: 1,
                          background: "rgba(96, 165, 250, 0.12)",
                          border: "1.5px solid rgba(96, 165, 250, 0.6)",
                          borderRadius: 18,
                          padding: "16px 14px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 10,
                          boxShadow:
                            "0 8px 24px rgba(96, 165, 250, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                          transform: `scale(${dikelolaScale})`,
                          opacity: Math.min(1, dikelolaTriadSpring),
                          transition: "all 0.25s ease",
                        }}
                      >
                        <FaCogs
                          size={24}
                          color="#60a5fa"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              height: 5,
                              width: "90%",
                              borderRadius: 3,
                              background: "rgba(96, 165, 250, 0.8)",
                            }}
                          />
                          <div
                            style={{
                              height: 5,
                              width: "70%",
                              borderRadius: 3,
                              background: "rgba(96, 165, 250, 0.5)",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Column 3: Reusable Data Pipeline */}
                    {isDigunakan && (
                      <div
                        style={{
                          flex: 1,
                          background: "rgba(52, 211, 153, 0.14)",
                          border: "1.5px solid rgba(52, 211, 153, 0.75)",
                          borderRadius: 18,
                          padding: "16px 14px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 10,
                          boxShadow:
                            "0 8px 24px rgba(52, 211, 153, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                          transform: `scale(${digunakanScale})`,
                          opacity: Math.min(1, digunakanSpring),
                          transition: "all 0.25s ease",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <FaSyncAlt
                            size={22}
                            color="#34d399"
                          />
                          <FaCheckCircle size={15} color="#34d399" />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              height: 5,
                              width: "100%",
                              borderRadius: 3,
                              background: "rgba(52, 211, 153, 0.85)",
                            }}
                          />
                          <div
                            style={{
                              height: 5,
                              width: "80%",
                              borderRadius: 3,
                              background: "rgba(52, 211, 153, 0.55)",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
