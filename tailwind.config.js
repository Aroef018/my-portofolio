// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // PASTIKAN BARIS INI ADA!
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FF8C00",
        "dark-background": "#1A1A1A",
        "text-light": "#F0F0F0",
        "text-muted": "#A0A0A0",
      },
    },
  },
  plugins: [],
};
