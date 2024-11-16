import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1b2230",
        accent: "#39b26c",
        alert: "#005eb8",
        white: "#fff",
      },
    },
  },
  plugins: [],
} satisfies Config;
