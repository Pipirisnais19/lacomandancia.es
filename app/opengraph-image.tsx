import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function Logo() {
  return (
    <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="lc-gold" x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#f0d878" />
          <stop offset="48%" stopColor="#e3c34f" />
          <stop offset="100%" stopColor="#9c7a1a" />
        </linearGradient>
      </defs>

      <path d="M50 4 A46 46 0 0 1 93.72 35.55 L84.26 38.63 A36 36 0 0 0 50 14 Z" fill="#e3c34f" />
      <path d="M93.72 35.55 A46 46 0 0 1 77.17 87.24 L71.12 78.88 A36 36 0 0 0 84.26 38.63 Z" fill="#4f8ffc" />
      <path d="M77.17 87.24 A46 46 0 0 1 22.83 87.24 L28.88 78.88 A36 36 0 0 0 71.12 78.88 Z" fill="#b34ff5" />
      <path d="M22.83 87.24 A46 46 0 0 1 6.28 35.55 L15.74 38.63 A36 36 0 0 0 28.88 78.88 Z" fill="#ff5757" />
      <path d="M6.28 35.55 A46 46 0 0 1 50 4 L50 14 A36 36 0 0 0 15.74 38.63 Z" fill="#2ed573" />
      <path d="M50 4 A46 46 0 1 1 49.999 4" fill="none" stroke="#e3c34f" strokeWidth="1.25" />
      <path d="M50 14 A36 36 0 1 1 49.999 14" fill="none" stroke="#e3c34f" strokeWidth="1.05" />

      <path d="M20 48 L50 22 L80 48 L76.2 52 L50 29.2 L23.8 52 Z" fill="url(#lc-gold)" />
      <path d="M27 48 L27 73 L33 73 L33 43 Z M73 48 L73 73 L67 73 L67 43 Z" fill="#e3c34f" />

      <path d="M35 39 Q50 33.5 65 39 L65 60 Q64 71 50 79 Q36 71 35 60 Z" fill="#0a0a12" stroke="#e3c34f" strokeWidth="2" />

      <path d="M40 51 L43 42 L50 49 L57 42 L60 51 L58.3 59 Q50 61.5 41.7 59 Z" fill="url(#lc-gold)" stroke="#e3c34f" strokeWidth="0.6" strokeLinejoin="round" />
      <path d="M42 59.5 Q50 61.8 58 59.5 L57.3 62.5 Q50 64.3 42.7 62.5 Z" fill="#e3c34f" />
    </svg>
  );
}

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
        <div style={{ display: "flex", marginBottom: 28 }}>
          <Logo />
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
