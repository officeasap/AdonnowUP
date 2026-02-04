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
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'eb': ['EB Garamond', 'serif'],
        heading: ["system-ui", "-apple-system", "'Helvetica Neue'", "Arial", "sans-serif"],
        body: ["system-ui", "-apple-system", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
      colors: {
        'ritual-black': '#121212',
        'mineral-gold': '#d4c8ae',
        'mineral-gold-dark': '#b8a98a',
        canvas: "hsl(var(--canvas))",
        "canvas-dark": "#0a0a0a",
        "depth-engraved": "hsl(var(--depth-engraved))",
        "depth-raised": "hsl(var(--depth-raised))",
        "depth-pressed": "hsl(var(--depth-pressed))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "text-primary": "#d4ccb5",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        "text-highlight": "hsl(var(--text-highlight))",
        primary: {
          DEFAULT: "#d4ccb5",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'cathedral': '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 200, 174, 0.1)',
        'mineral': '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(212, 200, 174, 0.2), 0 0 30px rgba(212, 200, 174, 0.1)',
        'deep-glow': '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 200, 174, 0.1)',
        'emboss': 'inset 0 2px 20px rgba(212, 200, 174, 0.1)',
        'glow': '0 0 20px rgba(212, 200, 174, 0.3)',
        engraved: "inset 2px 2px 6px hsl(0 0% 3%), inset -1px -1px 4px hsl(0 0% 12%)",
        raised: "3px 3px 8px hsl(0 0% 3%), -2px -2px 6px hsl(0 0% 14%)",
        pressed: "inset 3px 3px 8px hsl(0 0% 2%), inset -1px -1px 4px hsl(0 0% 10%)",
        'permanent-button': '4px 4px 0 0 rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        "bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "mineral-ripple": {
          "0%": { transform: "scale(0)", opacity: "0.5" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "kinetic-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.98)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 200, 174, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 200, 174, 0.5)" },
        },
        "seal-appear": {
          "0%": { opacity: "0", transform: "translate(-50%, -50%) scale(0.5)" },
          "50%": { opacity: "0.7", transform: "translate(-50%, -50%) scale(1.2)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) scale(1.5)" },
        },
        "slide-in-from-bottom-full": {
          "from": { transform: "translateY(100%)" },
          "to": { transform: "translateY(0)" },
        },
        "lift-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
        "press-down": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.98)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "shake": "shake 0.5s ease-in-out infinite",
        "bounce": "bounce 1s infinite",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "mineral-ripple": "mineral-ripple 1s ease-out",
        "kinetic-pulse": "kinetic-pulse 0.3s ease",
        "glow-pulse": "glow-pulse 2s infinite",
        "seal-appear": "seal-appear 1.5s ease-out",
        "rise-ceremonial": "slide-in-from-bottom-full 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "message-rise": "fade-in 0.3s ease-out",
        "lift-up": "lift-up 0.3s ease forwards",
        "press-down": "press-down 0.2s ease",
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      brightness: {
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;