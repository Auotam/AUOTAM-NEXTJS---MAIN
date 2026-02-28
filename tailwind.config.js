/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b91c1c",      // AUOTAM Red
        background: "#faf6f6",   // Soft Claude-style tint
        muted: "#6b7280"
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
}
