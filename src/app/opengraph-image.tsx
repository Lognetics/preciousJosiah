import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0B0F",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(600px circle at 15% 10%, rgba(43,89,255,0.35), transparent 55%), radial-gradient(500px circle at 90% 90%, rgba(16,185,129,0.22), transparent 55%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#2B59FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            PJ
          </div>
          <div style={{ fontSize: 24, opacity: 0.8 }}>{site.role}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            Building at the intersection
          </div>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            of Africa and
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#5B7CFF",
            }}
          >
            the future of money.
          </div>
        </div>
        <div style={{ fontSize: 30, opacity: 0.85 }}>{site.name}</div>
      </div>
    ),
    { ...size }
  );
}
