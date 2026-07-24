import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: "#0A0B0F",
        charcoal: "#15171E",
        slatecard: "#1C1F27",
        softgrey: "#9AA0AE",
        mist: "#E7E9EE",
        royal: {
          DEFAULT: "#2B59FF",
          soft: "#5B7CFF",
          deep: "#1E3AAF",
        },
        emerald: {
          DEFAULT: "#10B981",
          soft: "#34D399",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "hero": ["clamp(3.25rem, 8vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
      },
      maxWidth: {
        content: "1200px",
        reading: "720px",
      },
      boxShadow: {
        soft: "0 2px 40px -12px rgba(10, 11, 15, 0.14)",
        card: "0 24px 60px -30px rgba(10, 11, 15, 0.35)",
        glow: "0 0 80px -20px rgba(43, 89, 255, 0.35)",
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(circle at center, rgba(43,89,255,0.08), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
