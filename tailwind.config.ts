import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const plugin = require('tailwindcss/plugin');

// Rotate X utilities
const rotateY = plugin(({ addUtilities }: { addUtilities: Function }) => { // Explicitly typing addUtilities
  addUtilities({
    '.rotate-y-6': {
      transform: 'rotateY(6deg)',
    },
    '.rotate-y-20': {
      transform: 'rotateY(20deg)',
    },
    '.rotate-y-40': {
      transform: 'rotateY(40deg)',
    },
    '.rotate-y-60': {
      transform: 'rotateY(60deg)',
    },
    '.rotate-y-120': {
      transform: 'rotateY(120deg)',
    },
  })
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
    darkMode: "class",
  },
  plugins: [nextui(), rotateY],
};

export default config;
