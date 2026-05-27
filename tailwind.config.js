/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "var(--text-heading)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        "border-light": "var(--border-light)",
        surface: {
          DEFAULT: "var(--surface)",
          sheet: "var(--surface-sheet)",
          warm: "var(--surface-warm)",
          card: "var(--surface-card)",
          tint: "var(--surface-primary-tint)",
        },
      },
    },
  },
  plugins: [],
};
