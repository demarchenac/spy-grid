/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        96.5: "24.125rem",
      },
      fontFamily: {
        "skyfall-done": ["SkyFall Done"],
      },
    },
  },
  plugins: [],
};
