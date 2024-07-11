/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-light-bg": "#F9F8FB",
        "secondary-light-bg": "#FFFFFF",
        coffee: {
          50: "#faf7f0",
          100: "#efe7d6",
          200: "#decea9",
          300: "#cdb27c",
          400: "#c19c5e",
          500: "#b6834a",
          600: "#a0693f",
          700: "#865137",
          800: "#704332",
          900: "#5c382b",
          950: "#331c15",
        },
      },
    },
  },
  plugins: [],
};
