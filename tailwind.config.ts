import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#F5F5F0",
        accent: "#CAFF47",
      },
    },
  },
  plugins: [],
};

export default config;
