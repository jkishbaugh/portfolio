/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        secondary: "#E0E7FF",
        accent: "#6366F1",
        dark: {
          background: "#0F172A",
          secondary: "#1E293B",
          accent: "#14B8A6",
        }
      },
      fontFamily: {
        // You can add custom fonts here
      },
    },
  },
  plugins: [],
}