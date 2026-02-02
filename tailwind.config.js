/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#050505",
          dark: "#0a0a0f",
          gray: "#12121a",
          cyan: "#00ffff",
          magenta: "#ff00ff",
          purple: "#bc13fe",
          green: "#0aff0a",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff",
        "neon-magenta":
          "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff",
        "neon-green": "0 0 5px #0aff0a, 0 0 10px #0aff0a, 0 0 20px #0aff0a",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glitch: "glitch 1s linear infinite",
        scanline: "scanline 8s linear infinite",
        blink: "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "float-slow": "floatSlow 4s ease-in-out infinite",
      },
      keyframes: {
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
