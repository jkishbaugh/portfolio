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
        background: "#F8FAFC",
        secondary: "#E0E7FF",
        accent: "#6366F1",
        "hover-accent": "#4F46E5",
        tertiary: "#F59E0B",

        "text-primary": "#1E293B",
        "text-secondary": "#334155",
        "text-accent": "#4338CA",
        "text-tertiary": "#BE185D",

        "dark-background": "#0F172A",
        "dark-secondary": "#1E293B",
        "dark-accent": "#14B8A6",
        "dark-hover-accent": "#06B6D4",
        "dark-tertiary": "#FBBF24",

        "text-primary-dark": "#F1F5F9",
        "text-secondary-dark": "#CBD5E1",
        "text-accent-dark": "#0D9488",
        "text-tertiary-dark": "#F472B6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
