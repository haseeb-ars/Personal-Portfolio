import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F5F0",
        surface: "#EFEFE9",
        "surface-border": "#DEDED8",
        card: "#F7F7F2",
        text: "#111111",
        "text-muted": "#666666",
        "text-subtle": "#888880",
        accent: {
          DEFAULT: "#111111",
          hover: "#222222",
          light: "#E8E8E2",
        },
        border: {
          DEFAULT: "#DEDED8",
          dark: "#CCCCCC",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.03em",
        mega: "-0.08em",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
