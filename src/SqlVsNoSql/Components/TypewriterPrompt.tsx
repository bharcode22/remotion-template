import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { SQL_NOSQL_COLORS } from "../constants";
import { FaTerminal } from "react-icons/fa";

interface TypewriterPromptProps {
  text: string;
  startFrame?: number;
  endFrame?: number;
}

export const TypewriterPrompt: React.FC<TypewriterPromptProps> = ({
  text,
  startFrame = 6,
  endFrame = 83,
}) => {
  const frame = useCurrentFrame();

  const FONT_MONO =
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

  // Smooth character progression synced with voiceover
  const charCount = Math.floor(
    interpolate(frame, [startFrame, endFrame], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const displayedText = text.slice(0, charCount);
  const isTypingDone = frame >= endFrame;
  const showCursor = Math.floor(frame / 7) % 2 === 0;

  // Smooth crisp entrance without any scale distortion
  const entranceOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 980,
        borderRadius: 24,
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
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 0 10px rgba(239, 68, 68, 0.6)",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#f59e0b",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 0 10px rgba(245, 158, 11, 0.6)",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 0 10px rgba(16, 185, 129, 0.6)",
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              color: SQL_NOSQL_COLORS.textSecondary,
              marginLeft: 12,
              letterSpacing: "0.05em",
            }}
          >
            backend_architect_confession.sh
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
            color: SQL_NOSQL_COLORS.sqlCyan,
            background: "rgba(56, 189, 248, 0.14)",
            padding: "5px 14px",
            borderRadius: 8,
            border: "1px solid rgba(56, 189, 248, 0.4)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3)",
          }}
        >
          <FaTerminal size={11} />
          <span>BASH</span>
        </div>
      </div>

      {/* Terminal Content Body - Ukuran TETAP 100% konsisten, tidak pernah berubah */}
      <div
        style={{
          padding: "26px 32px",
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
          minHeight: 110,
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 30,
            fontWeight: 900,
            color: SQL_NOSQL_COLORS.sqlCyan,
            lineHeight: 1.35,
            userSelect: "none",
          }}
        >
          ❯
        </span>

        <div style={{ flex: 1 }}>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 28,
              fontWeight: 800,
              color: SQL_NOSQL_COLORS.textPrimary,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            {displayedText}
            {(!isTypingDone || showCursor) && (
              <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 30,
                  backgroundColor: SQL_NOSQL_COLORS.sqlCyan,
                  marginLeft: 6,
                  verticalAlign: "middle",
                  opacity: showCursor ? 1 : 0,
                  boxShadow: `0 0 12px ${SQL_NOSQL_COLORS.sqlCyan}`,
                  borderRadius: 2,
                }}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
