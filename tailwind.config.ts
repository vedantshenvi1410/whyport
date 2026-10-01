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
        brand: {
          bg: "var(--color-bg)",
          fg: "var(--color-fg)",
          accent: "var(--color-accent)",
          tech: "var(--color-accent-tech)",
          highlight: "var(--color-accent-highlight)",
          muted: "var(--color-muted)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderWidth: {
        brutal: "1px",
      },
    },
  },
  plugins: [],
};

export default config;
