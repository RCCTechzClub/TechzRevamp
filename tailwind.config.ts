import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to your file structure
  ],
  theme: {
    extend: {
      colors: { 
        bodyBg : "#121828",
        gradOne : "#F1DE7E",
        gradTwo :  "#FFCECE",
        gradThree : "#E4ED2E"
      },
      fontFamily: {
        sans: ["Inter",'Poppins', 'sans-serif'], // Example font family
      },
    },
  },
  plugins: [],
};

export default config;
