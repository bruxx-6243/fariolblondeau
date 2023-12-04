/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        "playpen-sans": ["'Playpen Sans'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "rotate-hand": {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-r": {
          from: {
            opacity: 0,
            transform: "translateX(100%)",
          },
          to: {
            opacity: 1,
            transform: "none",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rotate-hand": "rotate-hand  2.5s infinite",
        fade: "appear 0.5s ease-out",
        "slide-r": "slide-r 0.35s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
