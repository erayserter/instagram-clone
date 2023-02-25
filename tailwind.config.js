/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ig-primary-button": "#0095F6",
        "ig-primary-button-hover": "#1877F2",
        "ig-link": "#00376B",
        "ig-secondary-text": "#8E8E8E",
      },
    },
  },
  plugins: [],
};
