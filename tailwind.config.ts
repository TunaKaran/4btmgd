import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#0f172a", 800: "#1e293b" },
        brand: { DEFAULT: "#0f766e", light: "#2dd4bf" },
        action: { DEFAULT: "#f97316", hover: "#ea580c" },
      },
      animation: {
        // Reduced to 40s for better visibility, 'linear' is crucial for smoothness
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
