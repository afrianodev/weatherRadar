/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDarkPurple: '#262262',
        customPurple: '#662d91',
        customOrange: '#f15a29',
      },
    },
  },
  plugins: [],
}

