import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "custom-blue": "#266DF0",
        "custom-gray": "#2A2A2A",
        "custom-gray2": "#4D4D4D",
        "custom-gray3": "#EBEBEB",
        "custom-gray4": "#4F4D55",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
