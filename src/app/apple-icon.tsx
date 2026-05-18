import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0E14",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 6,
          }}
        >
          <div
            style={{
              width: 48,
              height: 28,
              background: "#22C55E",
              transform: "skewX(-12deg)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div
              style={{
                width: 42,
                height: 8,
                background: "#22C55E",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                width: 32,
                height: 8,
                background: "#22C55E",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                width: 22,
                height: 8,
                background: "#22C55E",
                borderRadius: 4,
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
