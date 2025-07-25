// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Only if you're using the App Router
  ],
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [], // Add Tailwind plugins here (like typography/forms/etc)
};