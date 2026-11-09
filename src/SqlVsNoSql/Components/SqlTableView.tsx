import React from "react";
import { SiPostgresql } from "react-icons/si";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { SQL_NOSQL_COLORS } from "../constants";

interface SqlTableViewProps {
  mode: "senior_logs" | "employee_data";
  highlightColIndex?: number;
}

export const SqlTableView: React.FC<SqlTableViewProps> = ({
  mode,
  highlightColIndex = -1,
}) => {
  const isSenior = mode === "senior_logs";

  const FONT_MONO =
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
  const FONT_SANS =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  return (
    <div
      style={{
        width: 960,
        borderRadius: 26,
        background: isSenior
          ? SQL_NOSQL_COLORS.seniorGlassBg
          : SQL_NOSQL_COLORS.sqlGlassBg,
        border: isSenior
          ? SQL_NOSQL_COLORS.seniorGlassBorder
          : SQL_NOSQL_COLORS.sqlGlassBorder,
        boxShadow: isSenior
          ? SQL_NOSQL_COLORS.seniorGlassShadow
          : SQL_NOSQL_COLORS.sqlGlassShadow,
        backdropFilter: "blur(28px) saturate(190%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Table Header Bar (Frosted Glass Sheen) */}
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
              background: isSenior
                ? "rgba(245, 158, 11, 0.18)"
                : "rgba(56, 189, 248, 0.18)",
              border: isSenior
                ? "1px solid rgba(245, 158, 11, 0.45)"
                : "1px solid rgba(56, 189, 248, 0.45)",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isSenior
                ? SQL_NOSQL_COLORS.seniorAmber
                : SQL_NOSQL_COLORS.sqlCyan,
              fontSize: 24,
            }}
          >
            {isSenior ? <FaExclamationTriangle /> : <SiPostgresql />}
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
              {isSenior ? "TABLE: app_logs" : "TABLE: employees (karyawan)"}
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: isSenior
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(56, 189, 248, 0.2)",
                  color: isSenior
                    ? SQL_NOSQL_COLORS.seniorAmber
                    : SQL_NOSQL_COLORS.sqlCyan,
                  border: `1px solid ${
                    isSenior
                      ? SQL_NOSQL_COLORS.seniorAmber
                      : SQL_NOSQL_COLORS.sqlCyan
                  }60`,
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                }}
              >
                {isSenior ? "RELATIONAL SQL" : "POSTGRESQL (RELATIONAL)"}
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
              {isSenior
                ? "Skema kaku dipaksa menyimpan data log dinamis"
                : "Skema terstruktur: atribut & tipe data wajib terdefinisi"}
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
            background: isSenior
              ? "rgba(244, 63, 94, 0.18)"
              : "rgba(16, 185, 129, 0.18)",
            border: `1.5px solid ${
              isSenior
                ? SQL_NOSQL_COLORS.errorRose
                : SQL_NOSQL_COLORS.nosqlEmerald
            }60`,
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          {isSenior ? (
            <>
              <FaExclamationTriangle
                color={SQL_NOSQL_COLORS.errorRose}
                size={14}
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  fontWeight: 800,
                  color: SQL_NOSQL_COLORS.errorRose,
                }}
              >
                BANYAK NULL & BOTTLENECK
              </span>
            </>
          ) : (
            <>
              <FaCheckCircle
                color={SQL_NOSQL_COLORS.nosqlEmerald}
                size={14}
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  fontWeight: 800,
                  color: SQL_NOSQL_COLORS.nosqlEmerald,
                }}
              >
                STRICT SCHEMA VALID
              </span>
            </>
          )}
        </div>
      </div>

      {/* Table Data View */}
      <div style={{ padding: 24, overflowX: "auto" }}>
        {isSenior ? (
          /* Chaotic Senior Log Table */
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0 8px",
              fontFamily: FONT_MONO,
            }}
          >
            <thead>
              <tr style={{ color: SQL_NOSQL_COLORS.textSecondary, fontSize: 14 }}>
                <th style={{ textAlign: "left", padding: "10px 14px" }}>id (INT)</th>
                <th style={{ textAlign: "left", padding: "10px 14px" }}>type (VARCHAR)</th>
                <th style={{ textAlign: "left", padding: "10px 14px" }}>user_id (INT)</th>
                <th style={{ textAlign: "left", padding: "10px 14px" }}>ip_addr (VARCHAR)</th>
                <th style={{ textAlign: "left", padding: "10px 14px" }}>err_msg (TEXT)</th>
                <th style={{ textAlign: "left", padding: "10px 14px" }}>amount (NUMERIC)</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Login Log */}
              <tr
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))",
                  borderRadius: 10,
                  fontSize: 16,
                  color: SQL_NOSQL_COLORS.textPrimary,
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
              >
                <td style={{ padding: "14px", fontWeight: 700 }}>1</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.sqlCyan }}>'LOGIN'</td>
                <td style={{ padding: "14px" }}>1042</td>
                <td style={{ padding: "14px" }}>'192.168.1.5'</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose, fontWeight: 700 }}>NULL</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose, fontWeight: 700 }}>NULL</td>
              </tr>
              {/* Row 2: Error Log */}
              <tr
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))",
                  borderRadius: 10,
                  fontSize: 16,
                  color: SQL_NOSQL_COLORS.textPrimary,
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
              >
                <td style={{ padding: "14px", fontWeight: 700 }}>2</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose }}>'ERROR'</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose, fontWeight: 700 }}>NULL</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose, fontWeight: 700 }}>NULL</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose }}>'Timeout 504'</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose, fontWeight: 700 }}>NULL</td>
              </tr>
              {/* Row 3: Transaction Log */}
              <tr
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))",
                  borderRadius: 10,
                  fontSize: 16,
                  color: SQL_NOSQL_COLORS.textPrimary,
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
              >
                <td style={{ padding: "14px", fontWeight: 700 }}>3</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.nosqlEmerald }}>'PAYMENT'</td>
                <td style={{ padding: "14px" }}>1042</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose, fontWeight: 700 }}>NULL</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.errorRose, fontWeight: 700 }}>NULL</td>
                <td style={{ padding: "14px", color: SQL_NOSQL_COLORS.seniorGold }}>150000.00</td>
              </tr>
            </tbody>
          </table>
        ) : (
          /* Clean Employee Data Table */
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0 10px",
              fontFamily: FONT_MONO,
            }}
          >
            <thead>
              <tr style={{ color: SQL_NOSQL_COLORS.textSecondary, fontSize: 15 }}>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>id</th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 16px",
                    background:
                      highlightColIndex === 1
                        ? "rgba(56, 189, 248, 0.15)"
                        : "transparent",
                    borderRadius: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>nama</span>
                    <span
                      style={{
                        fontSize: 12,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(56, 189, 248, 0.25)",
                        color: SQL_NOSQL_COLORS.sqlCyan,
                        fontWeight: 800,
                      }}
                    >
                      STRING
                    </span>
                  </div>
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 16px",
                    background:
                      highlightColIndex === 2
                        ? "rgba(245, 158, 11, 0.15)"
                        : "transparent",
                    borderRadius: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>nomor_hp</span>
                    <span
                      style={{
                        fontSize: 12,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(245, 158, 11, 0.25)",
                        color: SQL_NOSQL_COLORS.seniorGold,
                        fontWeight: 800,
                      }}
                    >
                      INTEGER
                    </span>
                  </div>
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 16px",
                    background:
                      highlightColIndex === 3
                        ? "rgba(16, 185, 129, 0.15)"
                        : "transparent",
                    borderRadius: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>berat_badan</span>
                    <span
                      style={{
                        fontSize: 12,
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "rgba(16, 185, 129, 0.25)",
                        color: SQL_NOSQL_COLORS.nosqlEmerald,
                        fontWeight: 800,
                      }}
                    >
                      FLOAT
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02))",
                  borderRadius: 12,
                  fontSize: 17,
                  color: SQL_NOSQL_COLORS.textPrimary,
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                }}
              >
                <td style={{ padding: "16px", fontWeight: 700, color: SQL_NOSQL_COLORS.textSecondary }}>1</td>
                <td
                  style={{
                    padding: "16px",
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.sqlCyan,
                    background:
                      highlightColIndex === 1
                        ? "rgba(56, 189, 248, 0.16)"
                        : "transparent",
                  }}
                >
                  'Budi Santoso'
                </td>
                <td
                  style={{
                    padding: "16px",
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.seniorGold,
                    background:
                      highlightColIndex === 2
                        ? "rgba(245, 158, 11, 0.16)"
                        : "transparent",
                  }}
                >
                  08123456789
                </td>
                <td
                  style={{
                    padding: "16px",
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.nosqlEmerald,
                    background:
                      highlightColIndex === 3
                        ? "rgba(16, 185, 129, 0.16)"
                        : "transparent",
                  }}
                >
                  68.5 kg
                </td>
              </tr>
              {/* Row 2 */}
              <tr
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015))",
                  borderRadius: 12,
                  fontSize: 17,
                  color: SQL_NOSQL_COLORS.textPrimary,
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                }}
              >
                <td style={{ padding: "16px", fontWeight: 700, color: SQL_NOSQL_COLORS.textSecondary }}>2</td>
                <td
                  style={{
                    padding: "16px",
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.sqlCyan,
                    background:
                      highlightColIndex === 1
                        ? "rgba(56, 189, 248, 0.16)"
                        : "transparent",
                  }}
                >
                  'Siti Aminah'
                </td>
                <td
                  style={{
                    padding: "16px",
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.seniorGold,
                    background:
                      highlightColIndex === 2
                        ? "rgba(245, 158, 11, 0.16)"
                        : "transparent",
                  }}
                >
                  08579876543
                </td>
                <td
                  style={{
                    padding: "16px",
                    fontWeight: 700,
                    color: SQL_NOSQL_COLORS.nosqlEmerald,
                    background:
                      highlightColIndex === 3
                        ? "rgba(16, 185, 129, 0.16)"
                        : "transparent",
                  }}
                >
                  54.2 kg
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Footer Banner */}
      <div
        style={{
          padding: "14px 28px",
          background: isSenior
            ? "rgba(244, 63, 94, 0.08)"
            : "rgba(56, 189, 248, 0.08)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: FONT_SANS,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: isSenior
              ? SQL_NOSQL_COLORS.seniorAmber
              : SQL_NOSQL_COLORS.sqlCyan,
            letterSpacing: "0.05em",
          }}
        >
          {isSenior ? "NOT SUITABLE FOR DYNAMIC LOGS" : "ACID RELATIONAL INTEGRITY"}
        </div>
      </div>
    </div>
  );
};
