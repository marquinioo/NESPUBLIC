import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const BRAND_ORANGE = "#F97316";

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
              width: 52,
              height: 30,
              background: BRAND_ORANGE,
              transform: "skewX(-14deg)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div
              style={{
                width: 46,
                height: 8,
                background: BRAND_ORANGE,
                borderRadius: 4,
              }}
            />
            <div
              style={{
                width: 34,
                height: 8,
                background: BRAND_ORANGE,
                borderRadius: 4,
              }}
            />
            <div
              style={{
                width: 24,
                height: 8,
                background: BRAND_ORANGE,
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
