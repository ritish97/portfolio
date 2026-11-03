import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#0070F3",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#0070F3",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        obsidian: {
          bg: "#090A0F",
          card: "#111218",
          border: "#1F222E",
          hover: "#181A24",
          subtle: "#2A2E3D",
        },
        cream: {
          bg: "#F8F9FA",
          card: "#FFFFFF",
          border: "#E9ECEF",
          hover: "#F1F3F5",
          subtle: "#DEE2E6",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Plus Jakarta Sans",
          "Inter",
          "sans-serif",
        ],
      },
      boxShadow: {
        "apple-dark": "0 8px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "apple-light": "0 8px 30px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        "accent-glow": "0 0 25px rgba(0, 112, 243, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
