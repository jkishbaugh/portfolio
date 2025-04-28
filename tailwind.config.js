/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Use system preference
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        secondary: "#E0E7FF",
        accent: "#6366F1",
        "hover-accent": "#4F46E5",
        "dark-background": "#0F172A",
        "dark-secondary": "#1E293B",
        "dark-accent": "#14B8A6",
        "dark-hover-accent": "#06B6D4",
      },
    },
  },
  plugins: [],
}
