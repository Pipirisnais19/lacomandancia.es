import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function loadAsset(relativePath: string) {
  return readFile(fileURLToPath(new URL(relativePath, import.meta.url)));
}

export default async function OpengraphImage() {
  const [cinzelBlack, geistRegular, geistSemiBold, logoBuffer] = await Promise.all([
    loadAsset("./og-assets/Cinzel-Black.ttf"),
    loadAsset("./og-assets/Geist-Regular.ttf"),
    loadAsset("./og-assets/Geist-SemiBold.ttf"),
    loadAsset("./og-assets/logo-mark.png"),
  ]);

  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a12",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(227,195,79,0.22), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 6,
            backgroundImage:
              "linear-gradient(90deg, #e3c34f, #4f8ffc, #b34ff5, #ff5757, #2ed573)",
          }}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={240} height={240} style={{ marginBottom: 14 }} />

          <div
            style={{
              display: "flex",
              fontFamily: "Cinzel",
              fontWeight: 900,
              fontSize: 50,
              color: "#f5f4fa",
              letterSpacing: 3,
            }}
          >
            LA COMANDANCIA
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: 22,
              color: "#a5a3b5",
            }}
          >
            El hogar del Commander Budget en España
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontFamily: "Geist",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#e3c34f",
              padding: "9px 22px",
              borderRadius: 999,
              border: "1px solid rgba(227,195,79,0.3)",
              background: "rgba(227,195,79,0.1)",
            }}
          >
            Liga de 100€ · 100% carta real
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cinzel", data: cinzelBlack, weight: 900, style: "normal" },
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistSemiBold, weight: 600, style: "normal" },
      ],
    }
  );
}
