import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {
  FaCheckCircle,
  FaDatabase,
  FaHashtag,
  FaLaptopCode,
  FaPaperPlane,
  FaServer,
} from "react-icons/fa";
import { SceneContainer } from "../Components/SceneContainer";
import { SAMPAH_DIGITAL_COLORS } from "../constants";

const FONT_SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const FONT_MONO =
  'SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  // ─────────────────────────────────────────────────────────────────────────────
  // ⏱️ TIMING & KINETIC TIMELINES (Frames 144 - 255)
  // Line 4 (F156 - F188): "#tinggalproptaja"
  // Theme: Real Character Typewriter + Live Token Cascade + Liquid Synthesis
  // Paradigm: No Scale Pop-ups! Pure Interactive Generation Physics
  // ─────────────────────────────────────────────────────────────────────────────

  // 1. Category Badge Slide Down (F144 - F155)
  const badgeSlideY = interpolate(frame, [144, 155], [-30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const badgeOpacity = interpolate(frame, [144, 152], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Headline Masked Slide (F145 - F160)
  const titleSlideY = interpolate(frame, [145, 160], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleOpacity = interpolate(frame, [145, 156], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Gemini Studio Window Slide (F146 - F164)
  const windowSlideY = interpolate(frame, [146, 164], [70, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const windowOpacity = interpolate(frame, [146, 158], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 4. Real Character Typewriter Prompt (F150 - F180)
  const promptText =
    "Gemini, buatkan software fullstack siap deploy dengan web app, backend REST API, dan database PostgreSQL...";
  const charsCount = Math.floor(
    interpolate(frame, [150, 178], [0, promptText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.linear,
    })
  );
  const currentTypedPrompt = promptText.slice(0, charsCount);
  const isTyping = frame >= 150 && frame <= 180;

  // Send Button Trigger (F178 - F184)
  const sendButtonScale =
    frame >= 178 && frame <= 186
      ? interpolate(frame, [178, 182, 186], [1.0, 1.25, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
      : 1.0;

  // 5. Neural Synaptic Scanning Wave (F180 - F245)
  const waveScanX = interpolate(frame, [180, 245], [-100, 200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 6. Progressive Liquid Compilation Meters (No Pop-ups!)
  // Layer 1: React UI (F182 - F206)
  const progressLayer1 = interpolate(frame, [182, 206], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Layer 2: Express REST API (F202 - F226)
  const progressLayer2 = interpolate(frame, [202, 226], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Layer 3: Database Schema (F222 - F242)
  const progressLayer3 = interpolate(frame, [222, 242], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // 7. Streaming Code Tokens (F182 - F254)
  const streamedTokens = [
    "const app = express(); app.use(cors());",
    "router.post('/auth/session', authenticate);",
    "export const View = ({ data }) => <Card />;",
    "const pool = new Pool({ connectionString });",
    "await pool.query('CREATE TABLE users...');",
  ];
  const visibleTokenCount = Math.min(
    streamedTokens.length,
    Math.floor(Math.max(0, frame - 182) / 12)
  );

  // 8. #tinggalpromptaja Sticker (F156+) - Lurus & Bersih
  const stickerOpacity = interpolate(frame, [156, 162], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Sparkle rotation
  const sparkleRot = (frame * 3) % 360;

  return (
    <SceneContainer accentColor={SAMPAH_DIGITAL_COLORS.aiCyan}>
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
        {/* ─────────────────────────────────────────────────────────────────
            1. TOP CATEGORY BADGE (Glides Down)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${badgeSlideY}px)`,
            opacity: badgeOpacity,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 24px",
            borderRadius: 9999,
            backgroundColor: "rgba(11, 19, 38, 0.92)",
            border: "1.5px solid rgba(56, 189, 248, 0.45)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25)",
            marginBottom: 18,
          }}
        >
          {/* Gemini 4-Point Sparkle Icon */}
          <div
            style={{
              transform: `rotate(${sparkleRot}deg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
                fill="url(#geminiSparkle2)"
              />
              <defs>
                <linearGradient
                  id="geminiSparkle2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2.2,
              color: SAMPAH_DIGITAL_COLORS.aiCyan,
              textTransform: "uppercase",
              fontFamily: FONT_MONO,
            }}
          >
            PROSES PROMPT // GOOGLE GEMINI AI
          </span>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            2. HEADLINE WITH MASKED SLIDE
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            overflow: "hidden",
            paddingBottom: 4,
          }}
        >
          <div style={{ transform: `translateY(${titleSlideY}px)`, opacity: titleOpacity }}>
            <p
              style={{
                fontSize: 28,
                color: SAMPAH_DIGITAL_COLORS.textSecondary,
                fontWeight: 700,
                margin: "0 0 6px 0",
                letterSpacing: -0.2,
              }}
            >
              Cukup Satu Baris Perintah,
            </p>

            <h2
              style={{
                fontSize: 54,
                fontWeight: 900,
                margin: 0,
                letterSpacing: -0.8,
                lineHeight: 1.2,
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #38bdf8 0%, #a855f7 50%, #f43f5e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(56, 189, 248, 0.35))",
                }}
              >
                Tinggal Prompt Aja ke Gemini
              </span>
            </h2>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            3. GOOGLE GEMINI REALTIME PROMPT & TOKEN STUDIO (Width: 880px)
           ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            transform: `translateY(${windowSlideY}px)`,
            opacity: windowOpacity,
            width: 880,
            borderRadius: 24,
            backgroundColor: "rgba(10, 16, 32, 0.96)",
            border: "1.8px solid rgba(56, 189, 248, 0.45)",
            boxShadow:
              "0 20px 45px rgba(0, 0, 0, 0.85), 0 0 45px rgba(56, 189, 248, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxSizing: "border-box",
            position: "relative",
            marginBottom: 18,
          }}
        >
          {/* Window Header */}
          <div
            style={{
              padding: "14px 22px",
              backgroundColor: "rgba(6, 10, 22, 0.96)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#ef4444",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#f59e0b",
                  }}
                />
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                  }}
                />
              </div>

              <div
                style={{
                  marginLeft: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24">
                  <path
                    d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
                    fill="#38bdf8"
                  />
                </svg>
                <span
                  style={{
                    fontSize: 13,
                    fontFamily: FONT_MONO,
                    fontWeight: 800,
                    color: SAMPAH_DIGITAL_COLORS.textPrimary,
                    letterSpacing: 0.5,
                  }}
                >
                  Google Gemini // Prompt-to-Code Studio
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "3px 12px",
                borderRadius: 9999,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: SAMPAH_DIGITAL_COLORS.aiCyan,
                  boxShadow: `0 0 6px ${SAMPAH_DIGITAL_COLORS.aiCyan}`,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: SAMPAH_DIGITAL_COLORS.aiCyan,
                }}
              >
                GEMINI 2.0 FLASH • STREAMING
              </span>
            </div>
          </div>

          {/* Window Body: Prompt Terminal + Liquid Generation Flow */}
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* 1. INTERACTIVE USER PROMPT BAR (Live Typewriter Effect) */}
            <div
              style={{
                borderRadius: 16,
                backgroundColor: "rgba(20, 28, 48, 0.95)",
                border: "1.5px solid rgba(56, 189, 248, 0.5)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
              }}
            >
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    color: "#38bdf8",
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    fontSize: 14,
                  }}
                >
                  &gt;
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: FONT_MONO,
                    color: "#f8fafc",
                    lineHeight: 1.4,
                  }}
                >
                  {currentTypedPrompt}
                  {/* Blinking Prompt Cursor */}
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 15,
                      backgroundColor: "#38bdf8",
                      marginLeft: 4,
                      verticalAlign: "middle",
                      boxShadow: "0 0 8px #38bdf8",
                      opacity: isTyping ? 1 : Math.sin(frame * 0.4) > 0 ? 1 : 0.2,
                    }}
                  />
                </span>
              </div>

              {/* Send Button with Pulsing Click Animation */}
              <div
                style={{
                  transform: `scale(${sendButtonScale})`,
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  backgroundColor:
                    frame >= 178 ? "#38bdf8" : "rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    frame >= 178 ? "0 0 15px rgba(56, 189, 248, 0.6)" : "none",
                  flexShrink: 0,
                }}
              >
                <FaPaperPlane
                  size={14}
                  color={frame >= 178 ? "#030712" : "#38bdf8"}
                />
              </div>
            </div>

            {/* 2. LIQUID CODE SYNTHESIS PIPELINE (3 Progressive Liquid Bars) */}
            <div
              style={{
                borderRadius: 16,
                backgroundColor: "rgba(14, 18, 36, 0.9)",
                border: "1px solid rgba(168, 85, 247, 0.35)",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Synaptic Light Wave Sweep */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: `${waveScanX}%`,
                  width: 120,
                  background:
                    "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.15), transparent)",
                  transform: "skewX(-30deg)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                    fontWeight: 900,
                    color: "#a855f7",
                  }}
                >
                  ✦ AUTONOMOUS CODE SYNTHESIS
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: FONT_MONO,
                    color: "#10b981",
                    fontWeight: 800,
                  }}
                >
                  {frame >= 242 ? "✓ ALL ASSETS READY" : "● STREAMING TOKENS"}
                </span>
              </div>

              {/* Layer 1: React UI Progress Bar */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 5,
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <FaLaptopCode size={13} color="#38bdf8" />
                    <span style={{ color: "#f8fafc", fontWeight: 700 }}>
                      1. Frontend &amp; Responsive UI (React 19 + Tailwind)
                    </span>
                  </div>
                  <span style={{ color: "#38bdf8", fontWeight: 800 }}>
                    {Math.round(progressLayer1)}%
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${progressLayer1}%`,
                      background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                      boxShadow: "0 0 10px #38bdf8",
                    }}
                  />
                </div>
              </div>

              {/* Layer 2: Backend REST API Progress Bar */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 5,
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <FaServer size={13} color="#a855f7" />
                    <span style={{ color: "#f8fafc", fontWeight: 700 }}>
                      2. REST API &amp; Auth (Node.js + JWT Engine)
                    </span>
                  </div>
                  <span style={{ color: "#a855f7", fontWeight: 800 }}>
                    {Math.round(progressLayer2)}%
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${progressLayer2}%`,
                      background: "linear-gradient(90deg, #a855f7, #c084fc)",
                      boxShadow: "0 0 10px #a855f7",
                    }}
                  />
                </div>
              </div>

              {/* Layer 3: Database Schema Progress Bar */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 5,
                    fontSize: 12,
                    fontFamily: FONT_MONO,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <FaDatabase size={13} color="#10b981" />
                    <span style={{ color: "#f8fafc", fontWeight: 700 }}>
                      3. Database Schema &amp; ORM (PostgreSQL)
                    </span>
                  </div>
                  <span style={{ color: "#10b981", fontWeight: 800 }}>
                    {Math.round(progressLayer3)}%
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${progressLayer3}%`,
                      background: "linear-gradient(90deg, #10b981, #34d399)",
                      boxShadow: "0 0 10px #10b981",
                    }}
                  />
                </div>
              </div>

              {/* 3. Live Cascading Token Stream Output */}
              <div
                style={{
                  marginTop: 6,
                  padding: "10px 14px",
                  borderRadius: 8,
                  backgroundColor: "rgba(4, 8, 20, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minHeight: 46,
                }}
              >
                {streamedTokens.slice(0, visibleTokenCount).map((tok, i) => (
                  <div
                    key={i}
                    style={{
                      color:
                        i === visibleTokenCount - 1
                          ? "#38bdf8"
                          : "rgba(148, 163, 184, 0.8)",
                    }}
                  >
                    &gt; {tok}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            4. #tinggalpromptaja HOLOGRAPHIC MAGNETIC STICKER (No Pop-up!)
               Magnetic Slide & Laser Sheen Sweep
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 156 && (
          <div
            style={{
              opacity: stickerOpacity,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 30px",
              borderRadius: 9999,
              background:
                "linear-gradient(90deg, rgba(56, 189, 248, 0.25) 0%, rgba(168, 85, 247, 0.25) 100%)",
              border: "2px solid rgba(56, 189, 248, 0.7)",
              boxShadow:
                "0 0 35px rgba(56, 189, 248, 0.45), 0 10px 25px rgba(0, 0, 0, 0.6)",
              marginBottom: 16,
            }}
          >
            <FaHashtag size={20} color={SAMPAH_DIGITAL_COLORS.aiCyan} />
            <span
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: SAMPAH_DIGITAL_COLORS.textPrimary,
                fontFamily: FONT_MONO,
                letterSpacing: 1.5,
              }}
            >
              tinggalpromptaja
            </span>
            <span style={{ fontSize: 18 }}>✨</span>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────────
            5. BOTTOM CONTEXT PILL (Slide from Below)
           ───────────────────────────────────────────────────────────────── */}
        {frame >= 166 && (
          <div
            style={{
              transform: `translateY(${interpolate(frame, [166, 178], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
              opacity: interpolate(frame, [166, 175], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              padding: "12px 28px",
              borderRadius: 9999,
              backgroundColor: "rgba(11, 19, 38, 0.92)",
              border: "1.5px solid rgba(56, 189, 248, 0.4)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <FaCheckCircle size={15} color={SAMPAH_DIGITAL_COLORS.aiCyan} />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: SAMPAH_DIGITAL_COLORS.textPrimary,
                fontFamily: FONT_MONO,
                letterSpacing: 1.2,
              }}
            >
              SIMPLISITAS AI // KETIK PROMPT, KODE LANGSUNG TERBENTUK
            </span>
          </div>
        )}
      </div>
    </SceneContainer>
  );
};