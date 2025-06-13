/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media", // Use system preference
  theme: {
    extend: {
      colors: {
        "bg-surface": "#F8FAFC",
        "bg-subtle": "#E0E7FF",
        "bg-surface-dark": "#0F172A",
        "bg-subtle-dark": "#1E293B",

        accent: "#6366F1",
        "hover-accent": "#4F46E5",
        tertiary: "#F59E0B",

        "text-primary": "#42516C",
        // "text-tertiary": "#9D174D",

         // 🔤 Text Colors - Light Mode
         "text-base": "#1E293B",
         "text-muted": "#334155",
         "text-link": "#4338CA",
         "text-warning": "#BE185D",
         
        // 🔤 Text Colors - Dark Mode
        "text-base-dark": "#F1F5F9",
        "text-muted-dark": "#CBD5E1",
        "text-link-dark": "#0D9488",
        "text-warning-dark": "#F472B6",

         // 🔵 Primary Action (e.g., buttons, links)
         primary: "#6366F1",
         "primary-hover": "#4F46E5",
         "primary-dark": "#14B8A6",
         "primary-hover-dark": "#06B6D4",
 
         // 🟡 Status / Accents / Warnings
         warning: "#F59E0B",
         "warning-dark": "#FBBF24",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
