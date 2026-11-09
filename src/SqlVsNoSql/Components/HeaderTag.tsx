import React from "react";
import { SQL_NOSQL_COLORS } from "../constants";

interface HeaderTagProps {
  category?: string;
  title: string;
  color?: string;
}

export const HeaderTag: React.FC<HeaderTagProps> = ({
  category = "DATABASE ARCHITECTURE",
  title,
  color = SQL_NOSQL_COLORS.sqlCyan,
}) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 22px",
        borderRadius: 999,
        background: "rgba(15, 23, 42, 0.75)",
        border: `1.5px solid ${color}55`,
        boxShadow: `0 8px 24px ${color}20`,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />
      <span
        style={{
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "0.12em",
          color,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          textTransform: "uppercase",
        }}
      >
        {category}
      </span>
      <span style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: 16 }}>•</span>
      <span
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: SQL_NOSQL_COLORS.textPrimary,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </span>
    </div>
  );
};

