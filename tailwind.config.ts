import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0E0E0E",
        "surface-border": "#1A1A1A",
        card: "#111111",
        text: "#F2F0EB",
        "text-muted": "#8A8880",
        accent: {
          DEFAULT: "#C6FF3D",
          hover: "#D4FF66",
          glow: "rgba(198, 255, 61, 0.2)",
        },
        cyan: {
          DEFAULT: "#00D4FF",
          glow: "rgba(0, 212, 255, 0.2)",
        },
        magenta: {
          DEFAULT: "#FF2D6F",
          glow: "rgba(255, 45, 111, 0.2)",
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
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
