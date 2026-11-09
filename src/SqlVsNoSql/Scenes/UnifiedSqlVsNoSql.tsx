import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TypewriterPrompt } from "../Components/TypewriterPrompt";
import { WordByWordLine } from "../Components/WordByWordLine";
import { SqlTableView } from "../Components/SqlTableView";
import { NoSqlJsonView } from "../Components/NoSqlJsonView";
import { SQL_NOSQL_COLORS, TOTAL_FRAMES } from "../constants";
import {
  FaQuestionCircle,
  FaDatabase,
  FaLayerGroup,
  FaLock,
  FaCheckCircle,
  FaColumns,
  FaTerminal,
  FaSignInAlt,
  FaBug,
  FaRandom,
  FaExchangeAlt,
} from "react-icons/fa";

export const UnifiedSqlVsNoSql: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const FONT_MONO =
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
  const FONT_SANS =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 1 TRANSITION (F0 - F128)
  // ═══════════════════════════════════════════════════════════════════════════
  const s1ExitProgress = interpolate(frame, [122, 128], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s1Opacity = 1 - s1ExitProgress;
  const s1Y = -s1ExitProgress * 100;

  // Table spring popup at F83
  const tablePopupSpring = spring({
    frame: frame - 83,
    fps,
    config: { damping: 11, stiffness: 140 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 2 TRANSITION (F128 - F294) - Kata per kata naskah L2 (128 - 272)
  // ═══════════════════════════════════════════════════════════════════════════
  const s2EnterProgress = spring({
    frame: frame - 128,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const s2ExitProgress = interpolate(frame, [272, 288], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s2Opacity = Math.min(1, s2EnterProgress) * (1 - s2ExitProgress);
  const s2Y = (1 - s2EnterProgress) * 40 - s2ExitProgress * 60;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 3 TRANSITION (F294 - F556) - Line 7 masuk di 525!
  // ═══════════════════════════════════════════════════════════════════════════
  const s3EnterProgress = spring({
    frame: frame - 294,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const s3ExitProgress = interpolate(frame, [550, 556], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s3Opacity = Math.min(1, s3EnterProgress) * (1 - s3ExitProgress);
  const s3X = -s3ExitProgress * 140;
  const s3Y = (1 - s3EnterProgress) * 70;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 4 TRANSITION (F535 - F995)
  // ═══════════════════════════════════════════════════════════════════════════
  const s4EnterProgress = spring({
    frame: frame - 535,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const s4ExitProgress = interpolate(frame, [985, 995], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s4Opacity = Math.min(1, s4EnterProgress) * (1 - s4ExitProgress);
  const s4X = (1 - s4EnterProgress) * 120 - s4ExitProgress * 140;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 5 TRANSITION (F995 - F1719)
  // ═══════════════════════════════════════════════════════════════════════════
  const s5EnterProgress = spring({
    frame: frame - 995,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const s5ExitProgress = interpolate(frame, [1708, 1719], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s5Opacity = Math.min(1, s5EnterProgress) * (1 - s5ExitProgress);
  const s5X = (1 - s5EnterProgress) * 140;
  const s5Y = s5ExitProgress * 80;

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 6A TRANSITION: LINE 23 (F1719 - F1822)
  // "Jadi, gunakan SQL ketika data kamu terstruktur"
  // ═══════════════════════════════════════════════════════════════════════════
  const s6aEnterProgress = spring({
    frame: frame - 1719,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const s6aExitProgress = interpolate(frame, [1814, 1822], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const s6aOpacity = Math.min(1, s6aEnterProgress) * (1 - s6aExitProgress);
  const s6aY = (1 - s6aEnterProgress) * 40 - s6aExitProgress * 40;
  const s6aScale = interpolate(s6aEnterProgress, [0, 1], [0.92, 1]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 🎬 SCENE 6B TRANSITION: LINE 25 (F1820 - F1940)
  // "dan gunakan NOSQL ketika data kamu fleksibel."
  // ═══════════════════════════════════════════════════════════════════════════
  const s6bEnterProgress = spring({
    frame: frame - 1820,
    fps,
    config: { damping: 14, stiffness: 110 },
  });
  const s6bOpacity = Math.min(1, s6bEnterProgress);
  const s6bY = (1 - s6bEnterProgress) * 40;
  const s6bScale = interpolate(s6bEnterProgress, [0, 1], [0.92, 1]);

  // Master Fade-out for peaceful outro (F1918 - F1940)
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
        paddingBottom: 40,
        opacity: masterFadeOut,
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 1: TYPEWRITER HOOK (F0 - F128)
          Line 1: "Jika ada senior kamu menyimpan data log aplikasi di SQL,"
          Tabel popup masuk di Frame 83!
         ═══════════════════════════════════════════════════════════════════ */}
      {frame < 128 && (
        <div
          style={{
            position: "absolute",
            top: 700,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            opacity: s1Opacity,
            transform: `translateY(${s1Y}px)`,
          }}
        >
          {/* Typewriter Prompt for Line 1 - Eye-level center, posisi statis 100% tanpa melompat ke atas */}
          <TypewriterPrompt
            text="Jika ada senior kamu menyimpan data log aplikasi di SQL,"
            startFrame={6}
            endFrame={83}
          />

          {/* Popup Table enters at Frame 83 tepat di bawah teks */}
          {frame >= 83 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: `scale(${tablePopupSpring})`,
                transformOrigin: "center top",
              }}
            >
              {/* Table View of Senior's Chaotic Logs */}
              <SqlTableView mode="senior_logs" />
            </div>
          )}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 2: THINKER "BERPIKIR POSITIF SAJA" (F128 - F294)
          Line 2: "Berpikir positif saja, mungkin dia hmmm anu."
          Runs until Frame 294 per user instruction!
         ═══════════════════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 2: KATA PER KATA NASKAH L2 (F128 - F294)
          "Berpikir positif saja, mungkin dia hmmm anu."
          Aktif kata per kata 128 sampai 272, persis naskah tanpa hal tambahan!
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 128 && frame < 294 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: s2Opacity,
            transform: `translateY(${s2Y}px)`,
          }}
        >
          <WordByWordLine />
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 3: NASKAH L4 & L5 (F295 - F535)
          Line 4: "SQL adalah Structured Query Language," (F295)
          Line 5: "sedangkan NoSQL adalah Not Only SQL." (F375)
          Line 7: "Gitu doang? Tentu tidak." (F525)
          Sederhana, murni naskah tanpa teks tambahan apapun, hanya montion & aset!
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 295 && frame < 556 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
            opacity: s3Opacity,
            transform: `translate3d(${s3X}px, ${s3Y}px, 0)`,
            transformOrigin: "center center",
          }}
        >
          {/* Card 1: SQL (Line 4) - Masuk di 295 */}
          {(() => {
            const isSpeakingSql = frame >= 295 && frame < 375;
            const sqlProgress = spring({
              frame: frame - 295,
              fps,
              config: { damping: 13, stiffness: 140 },
            });
            const sqlScale = interpolate(sqlProgress, [0, 1], [0.88, 1]);
            const sqlOpacity = interpolate(frame, [295, 298], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const sqlShiftY = interpolate(
              frame,
              [365, 375],
              [40, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            return (
              <div
                style={{
                  width: 940,
                  borderRadius: 26,
                  background: SQL_NOSQL_COLORS.sqlGlassBg,
                  border: isSpeakingSql
                    ? "1.5px solid #38bdf8"
                    : "1.5px solid rgba(56, 189, 248, 0.4)",
                  boxShadow: isSpeakingSql
                    ? SQL_NOSQL_COLORS.sqlGlassShadow
                    : "0 18px 45px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 0 25px rgba(56, 189, 248, 0.15)",
                  padding: "28px 38px",
                  display: "flex",
                  alignItems: "center",
                  gap: 26,
                  backdropFilter: "blur(28px) saturate(190%)",
                  transform: `translateY(${sqlShiftY}px) scale(${sqlScale})`,
                  opacity: sqlOpacity,
                }}
              >
                {/* Visual Asset: Cyber Database */}
                <div
                  style={{
                    width: 76,
                    height: 76,
                    minWidth: 76,
                    borderRadius: 20,
                    background: "rgba(56, 189, 248, 0.18)",
                    border: "1px solid rgba(56, 189, 248, 0.45)",
                    boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 25px rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: SQL_NOSQL_COLORS.sqlCyan,
                    fontSize: 38,
                  }}
                >
                  <FaDatabase />
                </div>

                {/* Text Line 4 verbatim */}
                <div
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 34,
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.textPrimary,
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span
                    style={{
                      color: SQL_NOSQL_COLORS.sqlCyan,
                      fontWeight: 900,
                      textShadow: `0 0 16px ${SQL_NOSQL_COLORS.sqlCyan}70`,
                    }}
                  >
                    SQL
                  </span>{" "}
                  adalah{" "}
                  <span
                    style={{
                      color: "#ffffff",
                      fontWeight: 800,
                    }}
                  >
                    Structured Query Language
                  </span>
                  ,
                </div>
              </div>
            );
          })()}

          {/* Card 2: NoSQL (Line 5) - Masuk di 375 */}
          {frame >= 375 &&
            (() => {
              const isSpeakingNoSql = frame >= 375 && frame < 485;
              const nosqlProgress = spring({
                frame: frame - 375,
                fps,
                config: { damping: 13, stiffness: 140 },
              });
              const nosqlScale = interpolate(nosqlProgress, [0, 1], [0.88, 1]);
              const nosqlOpacity = interpolate(frame, [375, 378], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  style={{
                    width: 940,
                    borderRadius: 26,
                    background: SQL_NOSQL_COLORS.nosqlGlassBg,
                    border: isSpeakingNoSql
                      ? "1.5px solid #10b981"
                      : "1.5px solid rgba(16, 185, 129, 0.4)",
                    boxShadow: isSpeakingNoSql
                      ? SQL_NOSQL_COLORS.nosqlGlassShadow
                      : "0 18px 45px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 0 25px rgba(16, 185, 129, 0.15)",
                    padding: "28px 38px",
                    display: "flex",
                    alignItems: "center",
                    gap: 26,
                    backdropFilter: "blur(28px) saturate(190%)",
                    transform: `scale(${nosqlScale})`,
                    opacity: nosqlOpacity,
                  }}
                >
                  {/* Visual Asset: Flexible Layer Group */}
                  <div
                    style={{
                      width: 76,
                      height: 76,
                      minWidth: 76,
                      borderRadius: 20,
                      background: "rgba(16, 185, 129, 0.18)",
                      border: "1px solid rgba(16, 185, 129, 0.45)",
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 25px rgba(16, 185, 129, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: SQL_NOSQL_COLORS.nosqlEmerald,
                      fontSize: 38,
                    }}
                  >
                    <FaLayerGroup />
                  </div>

                  {/* Text Line 5 verbatim */}
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 34,
                      fontWeight: 700,
                      color: SQL_NOSQL_COLORS.textPrimary,
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    sedangkan{" "}
                    <span
                      style={{
                        color: SQL_NOSQL_COLORS.nosqlEmerald,
                        fontWeight: 900,
                        textShadow: `0 0 16px ${SQL_NOSQL_COLORS.nosqlEmerald}70`,
                      }}
                    >
                      NoSQL
                    </span>{" "}
                    adalah{" "}
                    <span
                      style={{
                        color: "#ffffff",
                        fontWeight: 800,
                      }}
                    >
                      Not Only SQL
                    </span>
                    .
                  </div>
                </div>
              );
            })()}

          {/* Line 7: "Gitu doang?" (F488) & Line 8: "Tentu tidak." (F525) */}
          {frame >= 488 &&
            (() => {
              const cardSpring = spring({
                frame: frame - 488,
                fps,
                config: { damping: 12, stiffness: 170 },
              });
              const cardScale = interpolate(cardSpring, [0, 1], [0.88, 1]);
              const cardOpacity = interpolate(frame, [488, 492], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              const isL8Active = frame >= 525;
              const l8Spring = spring({
                frame: frame - 525,
                fps,
                config: { damping: 10, stiffness: 200 },
              });
              const l8Scale = isL8Active ? interpolate(l8Spring, [0, 1], [0.8, 1]) : 0;
              const l8Opacity = isL8Active
                ? interpolate(frame, [525, 528], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })
                : 0;

              return (
                <div
                  style={{
                    width: 940,
                    borderRadius: 24,
                    background: isL8Active
                      ? "linear-gradient(135deg, rgba(239, 68, 68, 0.20) 0%, rgba(245, 158, 11, 0.15) 50%, rgba(15, 23, 42, 0.5) 100%)"
                      : "linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(15, 23, 42, 0.45) 100%)",
                    border: isL8Active
                      ? "1.5px solid rgba(244, 63, 94, 0.6)"
                      : "1.5px solid rgba(245, 158, 11, 0.45)",
                    padding: "22px 34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 18,
                    boxShadow: isL8Active
                      ? "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 0 35px rgba(239, 68, 68, 0.35)"
                      : "0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 25px rgba(245, 158, 11, 0.25)",
                    backdropFilter: "blur(28px) saturate(190%)",
                    transform: `scale(${cardScale})`,
                    opacity: cardOpacity,
                    transition:
                      "border 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <FaQuestionCircle
                    color={
                      isL8Active
                        ? SQL_NOSQL_COLORS.errorRose
                        : SQL_NOSQL_COLORS.seniorGold
                    }
                    size={32}
                  />
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 32,
                      fontWeight: 800,
                      color: SQL_NOSQL_COLORS.textPrimary,
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <span>Gitu doang?</span>
                    {isL8Active && (
                      <span
                        style={{
                          color: SQL_NOSQL_COLORS.errorRose,
                          textShadow: "0 0 20px rgba(244, 63, 94, 0.9)",
                          fontWeight: 900,
                          transform: `scale(${l8Scale})`,
                          opacity: l8Opacity,
                          display: "inline-block",
                        }}
                      >
                        Tentu tidak.
                      </span>
                    )}
                  </div>
                </div>
              );
            })()}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 4A: KINETIC STRUCTURED & DEFINED DATA (F556 - F750)
          Line 9: "SQL digunakan untuk menyimpan data yang terstruktur," (F556)
          Line 10: "dengan atribut dan tipe data yang sudah jelas terdefinisikan." (F640)
          Dinamis, penuh montion & aset visual, persis teks naskah!
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 556 && frame < 750 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            opacity: interpolate(frame, [556, 566, 738, 750], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transformOrigin: "center center",
          }}
        >
          {/* Card 1: Line 9 (SQL digunakan untuk menyimpan data yang terstruktur) */}
          {(() => {
            const isSpeakingLine9 = frame >= 556 && frame < 640;
            const line9Spring = spring({
              frame: frame - 556,
              fps,
              config: { damping: 13, stiffness: 130 },
            });
            const line9Scale = interpolate(line9Spring, [0, 1], [0.88, 1]);
            const line9ShiftY = interpolate(
              frame,
              [635, 645],
              [35, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            return (
              <div
                style={{
                  width: 940,
                  borderRadius: 26,
                  background: SQL_NOSQL_COLORS.sqlGlassBg,
                  border: isSpeakingLine9
                    ? "1.5px solid #38bdf8"
                    : "1.5px solid rgba(56, 189, 248, 0.4)",
                  boxShadow: isSpeakingLine9
                    ? SQL_NOSQL_COLORS.sqlGlassShadow
                    : "0 18px 45px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 0 25px rgba(56, 189, 248, 0.15)",
                  padding: "28px 38px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  backdropFilter: "blur(28px) saturate(190%)",
                  transform: `translateY(${line9ShiftY}px) scale(${line9Scale})`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  {/* Visual Asset: Cyber Database */}
                  <div
                    style={{
                      width: 76,
                      height: 76,
                      minWidth: 76,
                      borderRadius: 20,
                      background: "rgba(56, 189, 248, 0.18)",
                      border: "1px solid rgba(56, 189, 248, 0.45)",
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 25px rgba(56, 189, 248, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: SQL_NOSQL_COLORS.sqlCyan,
                      fontSize: 38,
                    }}
                  >
                    <FaDatabase />
                  </div>

                  {/* Text Line 9 verbatim */}
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 34,
                      fontWeight: 700,
                      color: SQL_NOSQL_COLORS.textPrimary,
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span
                      style={{
                        color: SQL_NOSQL_COLORS.sqlCyan,
                        fontWeight: 900,
                        textShadow: `0 0 16px ${SQL_NOSQL_COLORS.sqlCyan}70`,
                      }}
                    >
                      SQL
                    </span>{" "}
                    digunakan untuk menyimpan{" "}
                    <span
                      style={{
                        color: "#ffffff",
                        fontWeight: 800,
                      }}
                    >
                      data yang terstruktur
                    </span>
                    ,
                  </div>
                </div>

                {/* Motion Asset: Structured Grid Blueprint Animation */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 14,
                    paddingTop: 8,
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {[
                    { label: "KOLOM 1", sample: "id (INT)" },
                    { label: "KOLOM 2", sample: "nama (VARCHAR)" },
                    { label: "KOLOM 3", sample: "created_at (TIMESTAMP)" },
                  ].map((cell, idx) => {
                    const cellSpring = spring({
                      frame: frame - 570 - idx * 7,
                      fps,
                      config: { damping: 12, stiffness: 140 },
                    });
                    const cellScale = interpolate(cellSpring, [0, 1], [0.8, 1]);
                    const cellOpacity = interpolate(cellSpring, [0, 1], [0, 1]);

                    return (
                      <div
                        key={idx}
                        style={{
                          borderRadius: 14,
                          background: "rgba(56, 189, 248, 0.08)",
                          border: "1.5px solid rgba(56, 189, 248, 0.35)",
                          padding: "10px 14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                          transform: `scale(${cellScale})`,
                          opacity: cellOpacity,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 11,
                            fontWeight: 800,
                            color: SQL_NOSQL_COLORS.sqlCyan,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {cell.label}
                        </div>
                        <div
                          style={{
                            fontFamily: FONT_MONO,
                            fontSize: 13,
                            color: "#ffffff",
                            fontWeight: 600,
                          }}
                        >
                          {cell.sample}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Card 2: Line 10 (dengan atribut dan tipe data yang sudah jelas terdefinisikan.) */}
          {frame >= 640 &&
            (() => {
              const isSpeakingLine10 = frame >= 640 && frame < 735;
              const line10Spring = spring({
                frame: frame - 640,
                fps,
                config: { damping: 13, stiffness: 130 },
              });
              const line10Scale = interpolate(line10Spring, [0, 1], [0.88, 1]);
              const line10Opacity = interpolate(frame, [640, 644], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  style={{
                    width: 940,
                    borderRadius: 26,
                    background: SQL_NOSQL_COLORS.nosqlGlassBg,
                    border: isSpeakingLine10
                      ? "1.5px solid #10b981"
                      : "1.5px solid rgba(16, 185, 129, 0.4)",
                    boxShadow: isSpeakingLine10
                      ? SQL_NOSQL_COLORS.nosqlGlassShadow
                      : "0 18px 45px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 0 25px rgba(16, 185, 129, 0.15)",
                    padding: "28px 38px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    backdropFilter: "blur(28px) saturate(190%)",
                    transform: `scale(${line10Scale})`,
                    opacity: line10Opacity,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    {/* Visual Asset: Strict Schema Lock */}
                    <div
                      style={{
                        width: 76,
                        height: 76,
                        minWidth: 76,
                        borderRadius: 20,
                        background: "rgba(16, 185, 129, 0.18)",
                        border: "1px solid rgba(16, 185, 129, 0.45)",
                        boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 25px rgba(16, 185, 129, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: SQL_NOSQL_COLORS.nosqlEmerald,
                        fontSize: 36,
                      }}
                    >
                      <FaLock />
                    </div>

                    {/* Text Line 10 verbatim */}
                    <div
                      style={{
                        fontFamily: FONT_SANS,
                        fontSize: 34,
                        fontWeight: 700,
                        color: SQL_NOSQL_COLORS.textPrimary,
                        lineHeight: 1.35,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      dengan{" "}
                      <span
                        style={{
                          color: "#ffffff",
                          fontWeight: 800,
                        }}
                      >
                        atribut dan tipe data
                      </span>{" "}
                      yang sudah jelas{" "}
                      <span
                        style={{
                          color: SQL_NOSQL_COLORS.nosqlEmerald,
                          fontWeight: 900,
                          textShadow: `0 0 16px ${SQL_NOSQL_COLORS.nosqlEmerald}70`,
                        }}
                      >
                        terdefinisikan
                      </span>
                      .
                    </div>
                  </div>

                  {/* Motion Asset: Schema Type Lock Badges */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 18,
                      paddingTop: 8,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "rgba(56, 189, 248, 0.14)",
                        padding: "8px 18px",
                        borderRadius: 12,
                        border: "1px solid rgba(56, 189, 248, 0.4)",
                      }}
                    >
                      <FaColumns color={SQL_NOSQL_COLORS.sqlCyan} size={16} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 14,
                          fontWeight: 800,
                          color: SQL_NOSQL_COLORS.sqlCyan,
                        }}
                      >
                        ATRIBUT PASTI
                      </span>
                    </div>

                    <div
                      style={{
                        color: SQL_NOSQL_COLORS.nosqlMint,
                        fontSize: 18,
                        fontWeight: 900,
                      }}
                    >
                      ⚡
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "rgba(16, 185, 129, 0.14)",
                        padding: "8px 18px",
                        borderRadius: 12,
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <FaCheckCircle color={SQL_NOSQL_COLORS.nosqlEmerald} size={16} />
                      <span
                        style={{
                          fontFamily: FONT_MONO,
                          fontSize: 14,
                          fontWeight: 800,
                          color: SQL_NOSQL_COLORS.nosqlEmerald,
                        }}
                      >
                        TIPE DATA VALID
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 4B: DEEP DIVE SQL - DATA KARYAWAN (F750 - F995)
          "750 biarkan seperti sekarang" per instruksi pengguna!
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 750 && frame < 995 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
            opacity: s4Opacity,
            transform: `translate3d(${s4X}px, 0, 0)`,
            transformOrigin: "center center",
          }}
        >
          {/* Table View dengan highlight sinkron suara user */}
          {(() => {
            let activeCol = -1;
            // nama: string (F822 - F873)
            if (frame >= 822 && frame < 873) activeCol = 1;
            // nomor_hp: integer (F873 - F933)
            else if (frame >= 873 && frame < 933) activeCol = 2;
            // berat_badan: float (F933 - F995)
            else if (frame >= 933) activeCol = 3;

            return <SqlTableView mode="employee_data" highlightColIndex={activeCol} />;
          })()}

          {/* Highlight Badge Bar */}
          <div
            style={{
              width: 980,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            {[
              {
                label: "nama",
                type: "STRING (VARCHAR)",
                color: SQL_NOSQL_COLORS.sqlCyan,
                desc: "Wajib teks huruf",
                isActive: frame >= 822 && frame < 873,
              },
              {
                label: "nomor_hp",
                type: "INTEGER (BIGINT)",
                color: SQL_NOSQL_COLORS.seniorGold,
                desc: "Wajib angka bilangan bulat",
                isActive: frame >= 873 && frame < 933,
              },
              {
                label: "berat_badan",
                type: "FLOAT (DECIMAL)",
                color: SQL_NOSQL_COLORS.nosqlEmerald,
                desc: "Wajib angka desimal presisi",
                isActive: frame >= 933 && frame < 995,
              },
            ].map((col) => (
              <div
                key={col.label}
                style={{
                  borderRadius: 18,
                  background: col.isActive
                    ? "rgba(255, 255, 255, 0.14)"
                    : "rgba(15, 23, 42, 0.78)",
                  border: `2px solid ${col.isActive ? col.color : `${col.color}40`}`,
                  boxShadow: col.isActive ? `0 10px 28px ${col.color}45` : "none",
                  padding: "18px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  transform: col.isActive ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.25s ease",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 17,
                      fontWeight: 800,
                      color: SQL_NOSQL_COLORS.textPrimary,
                    }}
                  >
                    {col.label}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: 12,
                      fontWeight: 800,
                      padding: "3px 9px",
                      borderRadius: 6,
                      background: `${col.color}25`,
                      color: col.color,
                      border: `1px solid ${col.color}60`,
                    }}
                  >
                    {col.type}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 13,
                    color: SQL_NOSQL_COLORS.textSecondary,
                  }}
                >
                  {col.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 5A: KINETIC NoSQL HOOK & LOG TYPES (F1013 - F1320)
          Line 15: "Nah, bagaimana dengan NoSQL?" (F1013)
          Line 16: "Bayangkan kita ingin menyimpan log aplikasi." (F1065)
          Line 17: "Ada log login, transaksi, hingga error." (F1140)
          Line 18: "Setiap log punya informasi yang berbeda-beda." (F1245)
          Dinamis, penuh montion & aset visual, persis naskah!
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 1013 && frame < 1320 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
            opacity: interpolate(frame, [1013, 1022, 1310, 1320], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transformOrigin: "center center",
          }}
        >
          {/* Card 1: Line 15 (Nah, bagaimana dengan NoSQL?) - Masuk di 1013 */}
          {(() => {
            const line15Spring = spring({
              frame: frame - 1013,
              fps,
              config: { damping: 13, stiffness: 130 },
            });
            const line15Scale = interpolate(line15Spring, [0, 1], [0.88, 1]);

            return (
              <div
                style={{
                  width: 940,
                  borderRadius: 26,
                  background: SQL_NOSQL_COLORS.nosqlGlassBg,
                  border: "1.5px solid rgba(16, 185, 129, 0.45)",
                  boxShadow: SQL_NOSQL_COLORS.nosqlGlassShadow,
                  padding: "24px 36px",
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  backdropFilter: "blur(28px) saturate(190%)",
                  transform: `scale(${line15Scale})`,
                }}
              >
                <div
                  style={{
                    width: 70,
                    height: 70,
                    minWidth: 70,
                    borderRadius: 18,
                    background: "rgba(16, 185, 129, 0.18)",
                    border: "1px solid rgba(16, 185, 129, 0.45)",
                    boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 24px rgba(16, 185, 129, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: SQL_NOSQL_COLORS.nosqlEmerald,
                    fontSize: 34,
                  }}
                >
                  <FaLayerGroup />
                </div>

                <div
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 34,
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.textPrimary,
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Nah, bagaimana dengan{" "}
                  <span
                    style={{
                      color: SQL_NOSQL_COLORS.nosqlEmerald,
                      fontWeight: 900,
                      textShadow: `0 0 18px ${SQL_NOSQL_COLORS.nosqlEmerald}80`,
                    }}
                  >
                    NoSQL
                  </span>
                  ?
                </div>
              </div>
            );
          })()}

          {/* Card 2: Line 16 (Bayangkan kita ingin menyimpan log aplikasi.) - Masuk di 1065 */}
          {frame >= 1065 &&
            (() => {
              const line16Spring = spring({
                frame: frame - 1065,
                fps,
                config: { damping: 13, stiffness: 130 },
              });
              const line16Scale = interpolate(line16Spring, [0, 1], [0.88, 1]);
              const line16Opacity = interpolate(frame, [1065, 1070], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  style={{
                    width: 940,
                    borderRadius: 26,
                    background: SQL_NOSQL_COLORS.sqlGlassBg,
                    border: "1.5px solid rgba(56, 189, 248, 0.45)",
                    boxShadow: SQL_NOSQL_COLORS.sqlGlassShadow,
                    padding: "24px 36px",
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    backdropFilter: "blur(28px) saturate(190%)",
                    transform: `scale(${line16Scale})`,
                    opacity: line16Opacity,
                  }}
                >
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      minWidth: 70,
                      borderRadius: 18,
                      background: "rgba(56, 189, 248, 0.18)",
                      border: "1px solid rgba(56, 189, 248, 0.45)",
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 20px rgba(56, 189, 248, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: SQL_NOSQL_COLORS.sqlCyan,
                      fontSize: 34,
                    }}
                  >
                    <FaTerminal />
                  </div>

                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 32,
                      fontWeight: 700,
                      color: SQL_NOSQL_COLORS.textPrimary,
                      lineHeight: 1.35,
                    }}
                  >
                    Bayangkan kita ingin menyimpan{" "}
                    <span
                      style={{
                        color: "#38bdf8",
                        fontWeight: 800,
                      }}
                    >
                      log aplikasi
                    </span>
                    .
                  </div>
                </div>
              );
            })()}

          {/* Cluster 3: Line 17 (Ada log login, transaksi, hingga error.) - Masuk di 1140 */}
          {frame >= 1140 &&
            (() => {
              const clusterSpring = spring({
                frame: frame - 1140,
                fps,
                config: { damping: 13, stiffness: 130 },
              });
              const clusterScale = interpolate(clusterSpring, [0, 1], [0.88, 1]);
              const clusterOpacity = interpolate(frame, [1140, 1145], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  style={{
                    width: 940,
                    borderRadius: 26,
                    background: SQL_NOSQL_COLORS.glassBg,
                    border: SQL_NOSQL_COLORS.glassBorder,
                    boxShadow: SQL_NOSQL_COLORS.glassShadow,
                    padding: "26px 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    backdropFilter: "blur(28px) saturate(190%)",
                    transform: `scale(${clusterScale})`,
                    opacity: clusterOpacity,
                  }}
                >
                  {/* Line 17 Text */}
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 28,
                      fontWeight: 700,
                      color: SQL_NOSQL_COLORS.textPrimary,
                      textAlign: "center",
                    }}
                  >
                    Ada{" "}
                    <span
                      style={{
                        color: "#38bdf8",
                        fontWeight: 800,
                        textShadow: "0 0 14px rgba(56, 189, 248, 0.6)",
                      }}
                    >
                      log login
                    </span>
                    ,{" "}
                    <span
                      style={{
                        color: "#f59e0b",
                        fontWeight: 800,
                        textShadow: "0 0 14px rgba(245, 158, 11, 0.6)",
                      }}
                    >
                      transaksi
                    </span>
                    , hingga{" "}
                    <span
                      style={{
                        color: "#f43f5e",
                        fontWeight: 800,
                        textShadow: "0 0 14px rgba(244, 63, 94, 0.6)",
                      }}
                    >
                      error
                    </span>
                    .
                  </div>

                  {/* 3 Kinetic Badges for Log Types */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 14,
                    }}
                  >
                    {/* Badge 1: Log Login */}
                    {(() => {
                      const b1Spring = spring({
                        frame: frame - 1145,
                        fps,
                        config: { damping: 12, stiffness: 140 },
                      });
                      const isRevealingShape = frame >= 1245;

                      return (
                        <div
                          style={{
                            borderRadius: 16,
                            background: "rgba(56, 189, 248, 0.12)",
                            border: "1.5px solid rgba(56, 189, 248, 0.5)",
                            boxShadow: "0 8px 24px rgba(56, 189, 248, 0.2)",
                            padding: "16px 14px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 8,
                            transform: `scale(${interpolate(b1Spring, [0, 1], [0.8, 1])})`,
                          }}
                        >
                          <FaSignInAlt color="#38bdf8" size={26} />
                          <div
                            style={{
                              fontFamily: FONT_MONO,
                              fontSize: 14,
                              fontWeight: 800,
                              color: "#38bdf8",
                            }}
                          >
                            LOG LOGIN
                          </div>
                          {isRevealingShape && (
                            <div
                              style={{
                                fontFamily: FONT_MONO,
                                fontSize: 11,
                                color: "#cbd5e1",
                                background: "rgba(0, 0, 0, 0.3)",
                                padding: "3px 8px",
                                borderRadius: 6,
                              }}
                            >
                              user_id, ip_address
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {/* Badge 2: Log Transaksi */}
                    {(() => {
                      const b2Spring = spring({
                        frame: frame - 1175,
                        fps,
                        config: { damping: 12, stiffness: 140 },
                      });
                      const isRevealingShape = frame >= 1245;

                      return (
                        <div
                          style={{
                            borderRadius: 16,
                            background: "rgba(245, 158, 11, 0.12)",
                            border: "1.5px solid rgba(245, 158, 11, 0.5)",
                            boxShadow: "0 8px 24px rgba(245, 158, 11, 0.2)",
                            padding: "16px 14px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 8,
                            transform: `scale(${interpolate(b2Spring, [0, 1], [0.8, 1])})`,
                          }}
                        >
                          <FaExchangeAlt color="#f59e0b" size={26} />
                          <div
                            style={{
                              fontFamily: FONT_MONO,
                              fontSize: 14,
                              fontWeight: 800,
                              color: "#f59e0b",
                            }}
                          >
                            LOG TRANSAKSI
                          </div>
                          {isRevealingShape && (
                            <div
                              style={{
                                fontFamily: FONT_MONO,
                                fontSize: 11,
                                color: "#cbd5e1",
                                background: "rgba(0, 0, 0, 0.3)",
                                padding: "3px 8px",
                                borderRadius: 6,
                              }}
                            >
                              order_id, amount, items
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {/* Badge 3: Log Error */}
                    {(() => {
                      const b3Spring = spring({
                        frame: frame - 1210,
                        fps,
                        config: { damping: 12, stiffness: 140 },
                      });
                      const isRevealingShape = frame >= 1245;

                      return (
                        <div
                          style={{
                            borderRadius: 16,
                            background: "rgba(244, 63, 94, 0.12)",
                            border: "1.5px solid rgba(244, 63, 94, 0.5)",
                            boxShadow: "0 8px 24px rgba(244, 63, 94, 0.2)",
                            padding: "16px 14px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 8,
                            transform: `scale(${interpolate(b3Spring, [0, 1], [0.8, 1])})`,
                          }}
                        >
                          <FaBug color="#f43f5e" size={26} />
                          <div
                            style={{
                              fontFamily: FONT_MONO,
                              fontSize: 14,
                              fontWeight: 800,
                              color: "#f43f5e",
                            }}
                          >
                            LOG ERROR
                          </div>
                          {isRevealingShape && (
                            <div
                              style={{
                                fontFamily: FONT_MONO,
                                fontSize: 11,
                                color: "#cbd5e1",
                                background: "rgba(0, 0, 0, 0.3)",
                                padding: "3px 8px",
                                borderRadius: 6,
                              }}
                            >
                              error_msg, stack_trace
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Line 18: Setiap log punya informasi yang berbeda-beda. (Masuk di 1245) */}
                  {frame >= 1245 &&
                    (() => {
                      const line18Spring = spring({
                        frame: frame - 1245,
                        fps,
                        config: { damping: 11, stiffness: 160 },
                      });

                      return (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 12,
                            paddingTop: 12,
                            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                            transform: `scale(${interpolate(line18Spring, [0, 1], [0.9, 1])})`,
                          }}
                        >
                          <FaRandom color="#34d399" size={20} />
                          <div
                            style={{
                              fontFamily: FONT_SANS,
                              fontSize: 22,
                              fontWeight: 800,
                              color: SQL_NOSQL_COLORS.textPrimary,
                            }}
                          >
                            Setiap log punya{" "}
                            <span
                              style={{
                                color: SQL_NOSQL_COLORS.nosqlMint,
                                fontWeight: 900,
                                textShadow: "0 0 16px rgba(16, 185, 129, 0.7)",
                              }}
                            >
                              informasi yang berbeda-beda
                            </span>
                            .
                          </div>
                        </div>
                      );
                    })()}
                </div>
              );
            })()}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 5B: NoSQL CONCRETE JSON DOCUMENTS (F1320 - F1719)
          Line 19: Log login (F1324)
          Line 20: Log error (F1429)
          Line 21: Struktur bervariasi lebih fleksibel di NoSQL (F1547)
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 1320 && frame < 1719 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
            opacity: s5Opacity,
            transform: `translate3d(${s5X}px, ${s5Y}px, 0)`,
            transformOrigin: "center center",
          }}
        >
          {/* NoSQL View sinkron dengan narasi suara user */}
          {(() => {
            let activeDoc = -1;
            // log login: user id & ip address (F1324 - F1429)
            if (frame >= 1324 && frame < 1429) activeDoc = 0;
            // log error: pesan error & stack trace (F1429 - F1547)
            else if (frame >= 1429 && frame < 1547) activeDoc = 1;
            // F1547 - F1719: Semua dokumen aktif bersamaan merayakan fleksibilitas NoSQL!
            else if (frame >= 1547) activeDoc = -1;

            return <NoSqlJsonView activeDocIndex={activeDoc} />;
          })()}

          {/* Line 21 Hero Banner dengan Efek Ketikan (F1550 - F1690) */}
          {frame >= 1547 &&
            (() => {
              const line21Spring = spring({
                frame: frame - 1550,
                fps,
                config: { damping: 12, stiffness: 140 },
              });
              const line21Scale = interpolate(line21Spring, [0, 1], [0.88, 1]);
              const line21Opacity = interpolate(frame, [1547, 1553], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const glowPulse = Math.sin((frame - 1550) * 0.15) * 8;

              // Typewriter progression sinkron dengan suara user
              const fullText =
                "Nah, struktur data yang bervariasi seperti ini bisa lebih fleksibel disimpan menggunakan NoSQL.";
              const charCount = Math.floor(
                interpolate(frame, [1550, 1690], [0, fullText.length], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })
              );
              const showCursor = Math.floor(frame / 6) % 2 === 0;
              const isTypingDone = frame >= 1690;

              const segments = [
                { text: "Nah, ", start: 0, end: 5, color: "#ffffff", weight: 700 },
                {
                  text: "struktur data yang bervariasi",
                  start: 5,
                  end: 34,
                  color: "#ffffff",
                  weight: 800,
                },
                {
                  text: " seperti ini bisa ",
                  start: 34,
                  end: 52,
                  color: "#cbd5e1",
                  weight: 600,
                },
                {
                  text: "lebih fleksibel",
                  start: 52,
                  end: 67,
                  color: SQL_NOSQL_COLORS.nosqlMint,
                  weight: 900,
                  glow: true,
                },
                {
                  text: " disimpan menggunakan ",
                  start: 67,
                  end: 89,
                  color: "#cbd5e1",
                  weight: 600,
                },
                {
                  text: "NoSQL.",
                  start: 89,
                  end: 95,
                  color: SQL_NOSQL_COLORS.nosqlEmerald,
                  weight: 900,
                  glow: true,
                },
              ];

              return (
                <div
                  style={{
                    width: 980,
                    minHeight: 112,
                    borderRadius: 26,
                    background:
                      "linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(6, 9, 19, 0.6) 100%)",
                    border: "1.5px solid rgba(16, 185, 129, 0.5)",
                    padding: "24px 34px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    boxShadow: `0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(52, 211, 153, 0.2), 0 0 ${
                      35 + glowPulse
                    }px rgba(16, 185, 129, 0.4)`,
                    backdropFilter: "blur(28px) saturate(190%)",
                    transform: `scale(${line21Scale})`,
                    opacity: line21Opacity,
                  }}
                >
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      minWidth: 54,
                      borderRadius: 14,
                      background: "rgba(16, 185, 129, 0.22)",
                      border: "1px solid rgba(16, 185, 129, 0.55)",
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 20px rgba(52, 211, 153, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: SQL_NOSQL_COLORS.nosqlMint,
                      fontSize: 26,
                    }}
                  >
                    <FaLayerGroup />
                  </div>

                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 27,
                      fontWeight: 700,
                      color: SQL_NOSQL_COLORS.textPrimary,
                      lineHeight: 1.42,
                      letterSpacing: "-0.01em",
                      flex: 1,
                    }}
                  >
                    {segments.map((seg, idx) => {
                      if (charCount <= seg.start) return null;
                      const chunk = seg.text.slice(
                        0,
                        Math.min(seg.text.length, charCount - seg.start)
                      );
                      return (
                        <span
                          key={idx}
                          style={{
                            color: seg.color,
                            fontWeight: seg.weight,
                            textShadow: seg.glow
                              ? `0 0 18px ${seg.color}90`
                              : "none",
                          }}
                        >
                          {chunk}
                        </span>
                      );
                    })}
                    {(!isTypingDone || showCursor) && (
                      <span
                        style={{
                          display: "inline-block",
                          width: 10,
                          height: 26,
                          backgroundColor: SQL_NOSQL_COLORS.nosqlMint,
                          marginLeft: 4,
                          verticalAlign: "middle",
                          opacity: showCursor ? 1 : 0,
                          boxShadow: "0 0 12px rgba(52, 211, 153, 0.9)",
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })()}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 6A: LINE 23 (F1719 - F1822)
          "Jadi, gunakan SQL ketika data kamu terstruktur"
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 1719 && frame < 1822 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            opacity: s6aOpacity,
            transform: `translate3d(0, ${s6aY}px, 0) scale(${s6aScale})`,
            transformOrigin: "center center",
          }}
        >
          {/* Main Card (Pristine Cyan Glass) */}
          <div
            style={{
              width: 920,
              borderRadius: 28,
              background: SQL_NOSQL_COLORS.sqlGlassBg,
              border: "1.5px solid rgba(56, 189, 248, 0.5)",
              boxShadow: SQL_NOSQL_COLORS.sqlGlassShadow,
              backdropFilter: "blur(28px) saturate(190%)",
              padding: "44px 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
            }}
          >
            {/* Glowing SQL Icon */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(56, 189, 248, 0.5)",
                  transform: `rotate(${frame * 1.5}deg)`,
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 22,
                  background: "rgba(56, 189, 248, 0.18)",
                  border: "1px solid rgba(56, 189, 248, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: SQL_NOSQL_COLORS.sqlCyan,
                  fontSize: 40,
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 0 30px rgba(56, 189, 248, 0.5)",
                }}
              >
                <FaDatabase />
              </div>
            </div>

            {/* Line 23 Voiceover Text */}
            <div
              style={{
                fontFamily: FONT_SANS,
                fontSize: 38,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.35,
                textAlign: "center",
                letterSpacing: "-0.02em",
                maxWidth: 820,
              }}
            >
              Jadi, gunakan{" "}
              <span
                style={{
                  color: SQL_NOSQL_COLORS.sqlCyan,
                  fontWeight: 900,
                  textShadow: "0 0 24px rgba(56, 189, 248, 0.8)",
                }}
              >
                SQL
              </span>{" "}
              ketika data kamu{" "}
              <span
                style={{
                  color: SQL_NOSQL_COLORS.sqlCyan,
                  fontWeight: 900,
                  textShadow: "0 0 24px rgba(56, 189, 248, 0.8)",
                }}
              >
                terstruktur
              </span>
            </div>

            {/* Visual Schema Badge: Terstruktur & Skema Pasti */}
            {frame >= 1735 &&
              (() => {
                const badgeSpring = spring({
                  frame: frame - 1735,
                  fps,
                  config: { damping: 12, stiffness: 150 },
                });

                return (
                  <div
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      padding: "18px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transform: `scale(${interpolate(badgeSpring, [0, 1], [0.92, 1])})`,
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 8px 24px rgba(0, 0, 0, 0.3)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontFamily: FONT_MONO,
                        fontSize: 16,
                        fontWeight: 700,
                        color: SQL_NOSQL_COLORS.sqlCyan,
                      }}
                    >
                      <FaColumns />
                      <span>TABEL RELASIONAL</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(56, 189, 248, 0.15)",
                        padding: "6px 14px",
                        borderRadius: 10,
                        fontFamily: FONT_MONO,
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#ffffff",
                        border: "1px solid rgba(56, 189, 248, 0.4)",
                      }}
                    >
                      <FaCheckCircle color="#38bdf8" />
                      <span>SKEMA KONSISTEN & TERDEFINISI</span>
                    </div>
                  </div>
                );
              })()}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          🎬 SCENE 6B: LINE 25 (F1820 - F1940)
          "dan gunakan NOSQL ketika data kamu fleksibel."
         ═══════════════════════════════════════════════════════════════════ */}
      {frame >= 1820 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            opacity: s6bOpacity,
            transform: `translate3d(0, ${s6bY}px, 0) scale(${s6bScale})`,
            transformOrigin: "center center",
          }}
        >
          {/* Main Card (Pristine Emerald Glass) */}
          <div
            style={{
              width: 920,
              borderRadius: 28,
              background: SQL_NOSQL_COLORS.nosqlGlassBg,
              border: "1.5px solid rgba(16, 185, 129, 0.5)",
              boxShadow: SQL_NOSQL_COLORS.nosqlGlassShadow,
              backdropFilter: "blur(28px) saturate(190%)",
              padding: "44px 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
            }}
          >
            {/* Glowing NoSQL Icon */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(16, 185, 129, 0.5)",
                  transform: `rotate(${-(frame - 1820) * 1.5}deg)`,
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 22,
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: SQL_NOSQL_COLORS.nosqlEmerald,
                  fontSize: 40,
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 0 30px rgba(16, 185, 129, 0.5)",
                }}
              >
                <FaLayerGroup />
              </div>
            </div>

            {/* Line 25 Voiceover Text */}
            <div
              style={{
                fontFamily: FONT_SANS,
                fontSize: 38,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.35,
                textAlign: "center",
                letterSpacing: "-0.02em",
                maxWidth: 820,
              }}
            >
              dan gunakan{" "}
              <span
                style={{
                  color: SQL_NOSQL_COLORS.nosqlEmerald,
                  fontWeight: 900,
                  textShadow: "0 0 24px rgba(16, 185, 129, 0.8)",
                }}
              >
                NOSQL
              </span>{" "}
              ketika data kamu{" "}
              <span
                style={{
                  color: SQL_NOSQL_COLORS.nosqlMint,
                  fontWeight: 900,
                  textShadow: "0 0 24px rgba(52, 211, 153, 0.8)",
                }}
              >
                fleksibel
              </span>
              .
            </div>

            {/* Visual Dynamic Document Badge: Fleksibel & Dokumen Bebas */}
            {frame >= 1835 &&
              (() => {
                const badgeSpring = spring({
                  frame: frame - 1835,
                  fps,
                  config: { damping: 12, stiffness: 150 },
                });

                return (
                  <div
                    style={{
                      width: "100%",
                      borderRadius: 18,
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      padding: "18px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transform: `scale(${interpolate(badgeSpring, [0, 1], [0.92, 1])})`,
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 8px 24px rgba(0, 0, 0, 0.3)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontFamily: FONT_MONO,
                        fontSize: 16,
                        fontWeight: 700,
                        color: SQL_NOSQL_COLORS.nosqlEmerald,
                      }}
                    >
                      <FaRandom />
                      <span>DOKUMEN JSON DINAMIS</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(16, 185, 129, 0.15)",
                        padding: "6px 14px",
                        borderRadius: 10,
                        fontFamily: FONT_MONO,
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#ffffff",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                      }}
                    >
                      <FaCheckCircle color="#10b981" />
                      <span>STRUKTUR BEBAS & ADAPTIF</span>
                    </div>
                  </div>
                );
              })()}
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
