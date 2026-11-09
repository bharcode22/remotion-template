import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { DATABASE_COLORS } from "../constants";
import { FaTerminal } from "react-icons/fa";

interface TypewriterPromptProps {
  text?: string;
  startFrame?: number;
  endFrame?: number;
}

export const TypewriterPrompt: React.FC<TypewriterPromptProps> = ({
  text = "Database adalah tempat menyimpan data?",
  startFrame = 6,
  endFrame = 70,
}) => {
  const frame = useCurrentFrame();

  const FONT_MONO =
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
  const FONT_SANS =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  // Smooth character progression synced with voiceover waveform
  const charCount = Math.floor(
    interpolate(frame, [startFrame, endFrame], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const isTypingDone = frame >= endFrame;
  const showCursor = Math.floor(frame / 7) % 2 === 0;

  // Entrance opacity
  const entranceOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Text breakdown segments for semantic syntax highlighting
  // "Database adalah tempat menyimpan data?"
  // "Database" (0-8) -> Cyan Glow
  // " adalah " (8-16) -> Muted Slate
  // "tempat menyimpan " (16-33) -> Pure White
  // "data" (33-37) -> Pure White
  // "?" (37-38) -> Amber/Gold Question Glow
  const segments = [
    {
      text: "Database",
      start: 0,
      end: 8,
      color: DATABASE_COLORS.dbCyan,
      weight: 900,
      glow: true,
    },
    {
      text: " adalah ",
      start: 8,
      end: 16,
      color: DATABASE_COLORS.textSecondary,
      weight: 700,
      glow: false,
    },
    {
      text: "tempat menyimpan ",
      start: 16,
      end: 33,
      color: "#ffffff",
      weight: 800,
      glow: false,
    },
    {
      text: "data",
      start: 33,
      end: 37,
      color: "#ffffff",
      weight: 800,
      glow: false,
    },
    {
      text: "?",
      start: 37,
      end: 38,
      color: DATABASE_COLORS.storageGold,
      weight: 900,
      glow: true,
    },
  ];

  return (
    <div
      style={{
        width: 980,
        borderRadius: 26,
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(6, 9, 19, 0.6) 100%)",
        border: "1.5px solid rgba(255, 255, 255, 0.22)",
        boxShadow:
          "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(56, 189, 248, 0.15), 0 0 40px rgba(56, 189, 248, 0.22)",
        backdropFilter: "blur(28px) saturate(190%)",
        overflow: "hidden",
        opacity: entranceOpacity,
      }}
    >
      {/* Terminal Title Bar (Frosted Glass Sheen) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#ef4444",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 0 10px rgba(239, 68, 68, 0.6)",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#f59e0b",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 0 10px rgba(245, 158, 11, 0.6)",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 0 10px rgba(16, 185, 129, 0.6)",
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              color: DATABASE_COLORS.textSecondary,
              marginLeft: 12,
              letterSpacing: "0.05em",
            }}
          >
            database_concept_query.sql
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: FONT_MONO,
            fontSize: 12,
            fontWeight: 700,
            color: DATABASE_COLORS.dbCyan,
            background: "rgba(56, 189, 248, 0.14)",
            padding: "5px 14px",
            borderRadius: 8,
            border: "1px solid rgba(56, 189, 248, 0.4)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3)",
          }}
        >
          <FaTerminal size={11} />
          <span>QUERY</span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div
        style={{
          padding: "32px 36px",
          display: "flex",
          alignItems: "flex-start",
          gap: 18,
          minHeight: 120,
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 32,
            fontWeight: 900,
            color: DATABASE_COLORS.dbCyan,
            lineHeight: 1.35,
            userSelect: "none",
          }}
        >
          ❯
        </span>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: FONT_SANS,
              fontSize: 36,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
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
                      ? `0 0 22px ${seg.color}80`
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
                  width: 12,
                  height: 36,
                  backgroundColor: DATABASE_COLORS.dbCyan,
                  marginLeft: 6,
                  verticalAlign: "middle",
                  opacity: showCursor ? 1 : 0,
                  boxShadow: `0 0 14px ${DATABASE_COLORS.dbCyan}`,
                  borderRadius: 2,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
