//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "barberPole": "barberPole 6s linear infinite",
      },
      keyframes: {
        "barberPole": {
          "0%": { transform: "rotate3d(0,1,0, 5deg)"},
          "13%": { transform: "rotate3d(0,1,0, 90deg)"},
          "25%": { transform: "rotate3d(0,1,0, 180deg)"},
          "38%": { transform: "rotate3d(0,1,0, 270deg)"},
          "50%": { transform: "rotate3d(0,1,0, 355deg)"},
          "63%": { transform: "rotate3d(0,1,0, 270deg)"},
          "75%": { transform: "rotate3d(0,1,0, 180deg)"},
          "88%": { transform: "rotate3d(0,1,0, 90deg)"},
          "100%": { transform: "rotate3d(0,1,0, 0deg)"}
        },
      }
    },
  },
  plugins: [],
}