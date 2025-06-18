import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          purple: "hsl(var(--neon-purple))",
          green: "hsl(var(--neon-green))",
          pink: "hsl(var(--neon-pink))",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "pulse-neon": {
          "0%, 100%": {
            opacity: "1",
            textShadow:
              "0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor",
          },
          "50%": {
            opacity: "0.8",
            textShadow:
              "0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor",
          },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px currentColor" },
          "50%": { boxShadow: "0 0 40px currentColor, 0 0 60px currentColor" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
