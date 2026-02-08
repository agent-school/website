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
        navy: {
          900: "#0F1B33",
          800: "#1B2951",
          700: "#253A6A",
          600: "#2F4B83",
          500: "#3A5C9E",
          400: "#5A7AB8",
          300: "#8AA2D0",
          200: "#B5C4E3",
          100: "#DCE3F2",
          50: "#EEF1F8",
        },
        amber: {
          600: "#E88A38",
          500: "#FE9F4D",
          400: "#FFB876",
          300: "#FFD0A0",
          200: "#FFE4C7",
          100: "#FFF3E8",
          50: "#FFF9F2",
        },
        cream: {
          300: "#E0DCD4",
          200: "#EBE7DF",
          100: "#F5F3EF",
          50: "#FAF9F7",
        },
        charcoal: {
          900: "#1A1A1A",
          800: "#2D2D2D",
          700: "#404040",
          600: "#525252",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
          100: "#F3F4F6",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Consolas", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "soft": "0 2px 20px rgba(15, 27, 51, 0.06)",
        "medium": "0 4px 30px rgba(15, 27, 51, 0.1)",
        "strong": "0 8px 40px rgba(15, 27, 51, 0.15)",
        "glow-amber": "0 0 40px rgba(254, 159, 77, 0.2)",
        "glow-navy": "0 0 40px rgba(27, 41, 81, 0.15)",
        "inner-soft": "inset 0 2px 4px rgba(15, 27, 51, 0.05)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "draw-line": "draw-line 1.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 40% 20%, var(--tw-gradient-from) 0px, transparent 50%), radial-gradient(at 80% 60%, var(--tw-gradient-to) 0px, transparent 50%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
