import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {},
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
