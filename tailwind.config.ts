import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-blue": "#06BFFD",
      },
      transformOrigin: {
        "bottom-center": "bottom center",
      },
    },
  },
  plugins: [],
} satisfies Config;
