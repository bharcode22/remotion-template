import React from "react";
import { FaFileCode, FaCheckCircle, FaBolt, FaLayerGroup } from "react-icons/fa";
import { SQL_NOSQL_COLORS } from "../constants";

interface NoSqlJsonViewProps {
  activeDocIndex?: number;
}

export const NoSqlJsonView: React.FC<NoSqlJsonViewProps> = ({
  activeDocIndex = -1,
}) => {
  const FONT_MONO =
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
  const FONT_SANS =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  const documents = [
    {
      type: "LOG LOGIN",
      tag: "AUTH",
      color: SQL_NOSQL_COLORS.sqlCyan,
      json: {
        _id: "log_67a1b",
        event: "USER_LOGIN",
        user_id: 1042,
        ip_address: "192.168.1.42",
      },
    },
    {
      type: "LOG ERROR",
      tag: "INCIDENT",
      color: SQL_NOSQL_COLORS.errorRose,
      json: {
        _id: "log_99c3d",
        event: "APP_ERROR",
        message: "Gateway Timeout 504",
        stack_trace: "at api.connect():42",
      },
    },
  ];

  return (
    <div
      style={{
        width: 960,
        borderRadius: 26,
        background: SQL_NOSQL_COLORS.nosqlGlassBg,
        border: SQL_NOSQL_COLORS.nosqlGlassBorder,
        boxShadow: SQL_NOSQL_COLORS.nosqlGlassShadow,
        backdropFilter: "blur(28px) saturate(190%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Bar (Frosted Glass Sheen) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 28px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(16, 185, 129, 0.18)",
              border: "1px solid rgba(16, 185, 129, 0.45)",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: SQL_NOSQL_COLORS.nosqlEmerald,
              fontSize: 24,
            }}
          >
            <FaLayerGroup />
          </div>
          <div>
            <div
              style={{
                fontFamily: FONT_SANS,
                fontSize: 22,
                fontWeight: 800,
                color: SQL_NOSQL_COLORS.textPrimary,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              COLLECTION: app_logs
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "rgba(16, 185, 129, 0.2)",
                  color: SQL_NOSQL_COLORS.nosqlEmerald,
                  border: `1px solid ${SQL_NOSQL_COLORS.nosqlEmerald}60`,
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                }}
              >
                NoSQL (DOCUMENT STORE)
              </span>
            </div>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 14,
                color: SQL_NOSQL_COLORS.textSecondary,
                marginTop: 2,
              }}
            >
              Setiap dokumen JSON bebas memiliki struktur dan atribut yang berbeda!
            </div>
          </div>
        </div>

        {/* Status Pill (Glass Pill) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: 999,
            background: "rgba(16, 185, 129, 0.18)",
            border: `1.5px solid ${SQL_NOSQL_COLORS.nosqlEmerald}60`,
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          <FaBolt color={SQL_NOSQL_COLORS.nosqlMint} size={14} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 13,
              fontWeight: 800,
              color: SQL_NOSQL_COLORS.nosqlMint,
            }}
          >
            SCHEMA-LESS & FLEKSIBEL
          </span>
        </div>
      </div>

      {/* 2 JSON Document Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
          padding: 24,
        }}
      >
        {documents.map((doc, idx) => {
          const isHighlighted =
            activeDocIndex === -1 || activeDocIndex === idx;

          return (
            <div
              key={doc.type}
              style={{
                borderRadius: 18,
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(15, 23, 42, 0.38) 100%)",
                border: isHighlighted
                  ? `1.5px solid ${doc.color}`
                  : "1px solid rgba(255, 255, 255, 0.14)",
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: isHighlighted
                  ? `0 16px 36px ${doc.color}30, inset 0 1px 1px rgba(255, 255, 255, 0.35)`
                  : "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 8px 24px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Document Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaFileCode color={doc.color} size={16} />
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 16,
                      fontWeight: 800,
                      color: SQL_NOSQL_COLORS.textPrimary,
                    }}
                  >
                    {doc.type}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: `${doc.color}20`,
                    color: doc.color,
                    border: `1px solid ${doc.color}50`,
                  }}
                >
                  {doc.tag}
                </span>
              </div>

              {/* JSON Code Snippet */}
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  lineHeight: 1.5,
                  background: "rgba(0, 0, 0, 0.4)",
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div style={{ color: SQL_NOSQL_COLORS.textMuted }}>{"{"}</div>
                {Object.entries(doc.json).map(([key, value]) => (
                  <div key={key} style={{ paddingLeft: 12 }}>
                    <span style={{ color: SQL_NOSQL_COLORS.sqlCyan }}>"{key}"</span>
                    <span style={{ color: SQL_NOSQL_COLORS.textMuted }}>: </span>
                    <span
                      style={{
                        color:
                          typeof value === "number"
                            ? SQL_NOSQL_COLORS.seniorGold
                            : doc.color,
                        fontWeight: 600,
                      }}
                    >
                      {typeof value === "string" ? `"${value}"` : value}
                    </span>
                    <span style={{ color: SQL_NOSQL_COLORS.textMuted }}>,</span>
                  </div>
                ))}
                <div style={{ color: SQL_NOSQL_COLORS.textMuted }}>{"}"}</div>
              </div>

              {/* Unique Schema Note */}
              <div
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: 12,
                  color: SQL_NOSQL_COLORS.textSecondary,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <FaCheckCircle color={SQL_NOSQL_COLORS.nosqlMint} size={12} />
                <span>
                  {idx === 0 && "Berisi User ID & IP Address"}
                  {idx === 1 && "Berisi Error Message & Stack Trace"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner (Frosted Glass Sheen) */}
      <div
        style={{
          padding: "16px 28px",
          background:
            "linear-gradient(90deg, rgba(16, 185, 129, 0.12), rgba(56, 189, 248, 0.08))",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: FONT_SANS,
        }}
      >
        <div style={{ fontSize: 15, color: SQL_NOSQL_COLORS.textSecondary }}>
          <span style={{ color: SQL_NOSQL_COLORS.nosqlMint, fontWeight: 700 }}>
            ✓ Tanpa migrasi tabel & tanpa kolom NULL yang sia-sia!
          </span>
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: SQL_NOSQL_COLORS.nosqlMint,
            letterSpacing: "0.05em",
          }}
        >
          PERFECT FOR APPLICATION LOGS & BIG DATA
        </div>
      </div>
    </div>
  );
};

