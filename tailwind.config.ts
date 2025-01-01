import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
          DEFAULT: "#fb041c",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1c1b1c",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#fb041c",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        malachite: "#04c41c",
        "electric-violet": "#8b04e4",
        sun: "#fab014",
        monarch: "#830c14",
        "my-sin": "#fcb41c",
        hopbush: "#cc648c",
        "auth-background": "#ffffff",
        "auth-foreground": "#1c1b1c",
        "auth-muted": "#f3f4f6",
        "auth-border": "#e5e7eb",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
} satisfies Config;