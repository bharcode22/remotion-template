import React from "react";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import { FaCheck, FaGem } from "react-icons/fa";
import { SQL_NOSQL_COLORS } from "../constants";

interface DecisionMatrixProps {
  activeSide?: "sql" | "nosql" | "both";
}

export const DecisionMatrix: React.FC<DecisionMatrixProps> = ({
  activeSide = "both",
}) => {
  const FONT_MONO =
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
  const FONT_SANS =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  const isSqlActive = activeSide === "both" || activeSide === "sql";
  const isNoSqlActive = activeSide === "both" || activeSide === "nosql";

  return (
    <div
      style={{
        width: 980,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Side-by-Side Dual Comparison Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* SQL Card */}
        <div
          style={{
            borderRadius: 24,
            background: SQL_NOSQL_COLORS.bgCard,
            border: `2px solid ${
              isSqlActive ? SQL_NOSQL_COLORS.sqlCyan : `${SQL_NOSQL_COLORS.sqlCyan}40`
            }`,
            boxShadow: isSqlActive
              ? `0 18px 45px rgba(0, 0, 0, 0.45), 0 0 35px ${SQL_NOSQL_COLORS.sqlCyan}35`
              : "none",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            backdropFilter: "blur(16px)",
            transform: isSqlActive ? "scale(1.02)" : "scale(0.98)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "rgba(56, 189, 248, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: SQL_NOSQL_COLORS.sqlCyan,
                fontSize: 26,
              }}
            >
              <SiPostgresql />
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: 24,
                  fontWeight: 900,
                  color: SQL_NOSQL_COLORS.sqlCyan,
                  letterSpacing: "0.02em",
                }}
              >
                GUNAKAN SQL
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  color: SQL_NOSQL_COLORS.textSecondary,
                }}
              >
                Structured Query Language
              </div>
            </div>
          </div>

          {/* Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { title: "Data Terstruktur & Pasti", desc: "Tipe data (String, Int, Float) jelas" },
              { title: "Skema Ketat (Strict Schema)", desc: "Mencegah data anomali atau rusak" },
              { title: "Relasi Kuat & ACID Integrity", desc: "Transaksi finansial & e-commerce" },
              { title: "Contoh Nyata", desc: "Data Karyawan, Perbankan, Inventori" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                }}
              >
                <div
                  style={{
                    color: SQL_NOSQL_COLORS.sqlCyan,
                    marginTop: 2,
                    fontSize: 14,
                  }}
                >
                  <FaCheck />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 15,
                      fontWeight: 800,
                      color: SQL_NOSQL_COLORS.textPrimary,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 13,
                      color: SQL_NOSQL_COLORS.textSecondary,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NoSQL Card */}
        <div
          style={{
            borderRadius: 24,
            background: SQL_NOSQL_COLORS.bgCard,
            border: `2px solid ${
              isNoSqlActive ? SQL_NOSQL_COLORS.nosqlEmerald : `${SQL_NOSQL_COLORS.nosqlEmerald}40`
            }`,
            boxShadow: isNoSqlActive
              ? `0 18px 45px rgba(0, 0, 0, 0.45), 0 0 35px ${SQL_NOSQL_COLORS.nosqlEmerald}35`
              : "none",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            backdropFilter: "blur(16px)",
            transform: isNoSqlActive ? "scale(1.02)" : "scale(0.98)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "rgba(16, 185, 129, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: SQL_NOSQL_COLORS.nosqlEmerald,
                fontSize: 26,
              }}
            >
              <SiMongodb />
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: 24,
                  fontWeight: 900,
                  color: SQL_NOSQL_COLORS.nosqlEmerald,
                  letterSpacing: "0.02em",
                }}
              >
                GUNAKAN NoSQL
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 13,
                  color: SQL_NOSQL_COLORS.textSecondary,
                }}
              >
                Not Only SQL (Document Store)
              </div>
            </div>
          </div>

          {/* Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { title: "Data Fleksibel & Dinamis", desc: "Bentuk data berubah-ubah tanpa error" },
              { title: "Schema-less JSON Documents", desc: "Tanpa alter table / migrasi rumit" },
              { title: "High-Throughput Ingestion", desc: "Sangat cepat mencatat jutaan event" },
              { title: "Contoh Nyata", desc: "Log Aplikasi, Real-time Sensor, Feeds" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                <div
                  style={{
                    color: SQL_NOSQL_COLORS.nosqlEmerald,
                    marginTop: 2,
                    fontSize: 14,
                  }}
                >
                  <FaCheck />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 15,
                      fontWeight: 800,
                      color: SQL_NOSQL_COLORS.textPrimary,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_SANS,
                      fontSize: 13,
                      color: SQL_NOSQL_COLORS.textSecondary,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Golden Rule Summary Banner */}
      <div
        style={{
          borderRadius: 20,
          background: "linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(16, 185, 129, 0.15))",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <FaGem color={SQL_NOSQL_COLORS.seniorGold} size={28} />
          <div>
            <div
              style={{
                fontFamily: FONT_SANS,
                fontSize: 18,
                fontWeight: 900,
                color: SQL_NOSQL_COLORS.textPrimary,
              }}
            >
              KESIMPULAN:
            </div>
            <div
              style={{
                fontFamily: FONT_SANS,
                fontSize: 20,
                fontWeight: 800,
                color: SQL_NOSQL_COLORS.textSecondary,
                marginTop: 2,
              }}
            >
              Gunakan <span style={{ color: SQL_NOSQL_COLORS.sqlCyan }}>SQL</span> saat data terstruktur,{" "}
              gunakan <span style={{ color: SQL_NOSQL_COLORS.nosqlEmerald }}>NoSQL</span> saat data fleksibel!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
