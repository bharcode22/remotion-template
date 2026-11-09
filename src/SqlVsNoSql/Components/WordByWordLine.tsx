import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SQL_NOSQL_COLORS } from "../constants";

interface WordTiming {
  word: string;
  start: number;
  end: number;
  line: 1 | 2;
}

const LINE2_WORDS: WordTiming[] = [
  { word: "Berpikir", start: 129, end: 147, line: 1 },
  { word: "positif", start: 148, end: 158, line: 1 },
  { word: "saja,", start: 159, end: 168, line: 1 },
  { word: "mungkin", start: 176, end: 192, line: 2 },
  { word: "dia", start: 193, end: 208, line: 2 },
  { word: "hmmm", start: 219, end: 242, line: 2 },
  { word: "anu.", start: 251, end: 265, line: 2 },
];

export const WordByWordLine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const FONT_SANS =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  const line1Words = LINE2_WORDS.filter((w) => w.line === 1);
  const line2Words = LINE2_WORDS.filter((w) => w.line === 2);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        width: 980,
        textAlign: "center",
        padding: "36px 44px",
        borderRadius: 28,
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(15, 23, 42, 0.40) 50%, rgba(6, 9, 19, 0.55) 100%)",
        border: "1.5px solid rgba(255, 255, 255, 0.20)",
        boxShadow:
          "0 24px 60px rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(245, 158, 11, 0.1), 0 0 40px rgba(245, 158, 11, 0.18)",
        backdropFilter: "blur(28px) saturate(190%)",
      }}
    >
      {/* Line 1: "Berpikir positif saja," */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {line1Words.map((item) => {
          const isSpoken = frame >= item.start;
          const isActive = frame >= item.start && frame < item.end;

          // Elastic pop-in animation
          const wordSpring = spring({
            frame: frame - item.start,
            fps,
            config: { damping: 12, stiffness: 160 },
          });

          if (!isSpoken) {
            return (
              <span
                key={item.word}
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: 58,
                  fontWeight: 900,
                  color: "rgba(255, 255, 255, 0.12)",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.word}
              </span>
            );
          }

          return (
            <span
              key={item.word}
              style={{
                fontFamily: FONT_SANS,
                fontSize: 58,
                fontWeight: 900,
                color: isActive
                  ? SQL_NOSQL_COLORS.seniorGold
                  : SQL_NOSQL_COLORS.textPrimary,
                textShadow: isActive
                  ? `0 0 35px ${SQL_NOSQL_COLORS.seniorGold}90, 0 0 15px ${SQL_NOSQL_COLORS.seniorAmber}`
                  : "0 4px 16px rgba(0, 0, 0, 0.5)",
                transform: `scale(${
                  isActive ? 1.08 * wordSpring : 1.0 * wordSpring
                })`,
                letterSpacing: "-0.02em",
                display: "inline-block",
                transition: "color 0.15s ease, text-shadow 0.15s ease",
              }}
            >
              {item.word}
            </span>
          );
        })}
      </div>

      {/* Line 2: "mungkin dia hmmm anu." */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {line2Words.map((item) => {
          const isSpoken = frame >= item.start;
          const isActive = frame >= item.start && frame < item.end;

          const wordSpring = spring({
            frame: frame - item.start,
            fps,
            config: { damping: 12, stiffness: 160 },
          });

          if (!isSpoken) {
            return (
              <span
                key={item.word}
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: 58,
                  fontWeight: 900,
                  color: "rgba(255, 255, 255, 0.12)",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.word}
              </span>
            );
          }

          return (
            <span
              key={item.word}
              style={{
                fontFamily: FONT_SANS,
                fontSize: 58,
                fontWeight: 900,
                color: isActive
                  ? item.word.includes("anu") || item.word.includes("hmmm")
                    ? SQL_NOSQL_COLORS.errorRose
                    : SQL_NOSQL_COLORS.seniorGold
                  : SQL_NOSQL_COLORS.textPrimary,
                textShadow: isActive
                  ? `0 0 35px ${
                      item.word.includes("anu")
                        ? SQL_NOSQL_COLORS.errorRose
                        : SQL_NOSQL_COLORS.seniorGold
                    }90`
                  : "0 4px 16px rgba(0, 0, 0, 0.5)",
                transform: `scale(${
                  isActive ? 1.08 * wordSpring : 1.0 * wordSpring
                })`,
                letterSpacing: "-0.02em",
                display: "inline-block",
                transition: "color 0.15s ease, text-shadow 0.15s ease",
              }}
            >
              {item.word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
