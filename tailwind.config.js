/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "rgba(231, 191, 184, 0.8)",
      },
      textColor: {
        btn: "rgba(213, 57, 30, 0.8)",
        badge: "rgba(213, 57, 30, 0.5)",
      },
    },
  },
  plugins: [],
};
