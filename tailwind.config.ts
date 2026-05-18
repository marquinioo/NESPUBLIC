import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0E14",
          surface: "#111827",
          subtle: "#1F2937",
        },
        accent: {
          green: "#22C55E",
          "green-dark": "#16A34A",
          blue: "#38BDF8",
        },
        text: {
          primary: "#F9FAFB",
          muted: "#9CA3AF",
        },
        border: "#374151",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        "sans-sc": ["var(--font-noto-sc)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
