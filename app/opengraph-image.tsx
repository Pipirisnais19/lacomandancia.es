import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = ["#e3c34f", "#4f8ffc", "#b34ff5", "#ff5757", "#2ed573"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a12",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(227,195,79,0.22), transparent)",
        }}
      >
        <div style={{ display: "flex", gap: 14, marginBottom: 36 }}>
          {COLORS.map((c) => (
            <div
              key={c}
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                background: c,
              }}
            />
          ))}
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#f5f4fa",
            letterSpacing: 2,
          }}
        >
          LA COMANDANCIA
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            color: "#a5a3b5",
          }}
        >
          El hogar del Commander Budget en España
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            fontWeight: 700,
            color: "#e3c34f",
            padding: "10px 28px",
            borderRadius: 999,
            border: "2px solid rgba(227,195,79,0.5)",
          }}
        >
          Liga de 100€ · 100% carta real
        </div>
      </div>
    ),
    { ...size }
  );
}
