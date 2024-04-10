import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: '#e1ff26',
        score_primary: '#e1ff26',
        score_secondary: '#343a40',
      },
    },
  },
  plugins: [],
};
export default config;
