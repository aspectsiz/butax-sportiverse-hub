import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Tekrar eden satırı kaldırdım
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
      boxShadow: {
        '3xl': '0 20px 25px -5px rgb(0 0 0 / .1), 0 10px 50px 15px rgb(0 0 0 / .1)',
      },
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
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1c1b1c",
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
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: '400',
              fontStyle: 'italic',
              borderLeftColor: '#cbd5e0',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              margin: '1.5em 0',
              paddingLeft: '1em',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui(),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;

export default config;