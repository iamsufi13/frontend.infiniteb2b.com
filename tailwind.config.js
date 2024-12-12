/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          700: "#1a1b4b",
          800: "#151537",
          900: "#0d0d2b",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        flip: "flip 4s infinite linear", // Continuous flip animation
        pulseFade: "pulseFade 3s ease-in-out infinite", // Continuous pulsing fade effect
        scroll: "scroll 20s linear infinite", // Added scrolling animation for images
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" }, // Initial position
          "50%": { transform: "rotateY(180deg)" }, // Halfway
          "100%": { transform: "rotateY(360deg)" }, // Full rotation
        },
        pulseFade: {
          "0%, 100%": { opacity: "0.7" }, // Starting and ending with 70% opacity
          "50%": { opacity: "1" }, // Midpoint at 100% opacity
        },
        scroll: {
          "0%": { transform: "translateX(0)" }, // Start from the left
          "100%": { transform: "translateX(-100%)" }, // Move all the way to the left
        },
      },
    },
  },
  plugins: [],
};
