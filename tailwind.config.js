/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "green-1": "#20C533FF",
        "blue-1": "#2852D6",
        "blue-1-op": "#2852D600",
        "blue-2": "#2953D600",
        "blue-3": "#2953D6",
        "blue-4": "#6A85D8",
        "blue-5": "#405597",
        "blue-6": "#2B53D4",
        "grey-1": "#ebebeb",
        "grey-2": "#7e7e7e",
        "white-op": "#FFFFFFAB",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    }
  },
  plugins: [],
};
