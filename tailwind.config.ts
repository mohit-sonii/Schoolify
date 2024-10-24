import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#C3EBFA",
        lightSky: "#EDF9FD",
        purple: "#CFCEFF",
        lightPurple: "#F1F0FF",
        yellow: "#FAE27C",
        lightYellow: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
