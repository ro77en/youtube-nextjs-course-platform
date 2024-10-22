import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text-color)",
        error: "var(--error-color)",
        paper: "var(--paper-color)",
        primary: "var(--primary-color)",
        background: "var(--background-color)",
        "primary-contrast": "var(--primary-contrast-color)",
      },
    },
  },
  plugins: [],
};
export default config;
