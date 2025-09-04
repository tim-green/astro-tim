/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        scaleAnim: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      fontSize: {
        'fluid-heading': 'clamp(5rem, 5vw, 12rem)', // Min, Preferred, Max
      },
      animation: {
        scale: 'scaleAnim 300ms ease-in-out',
      },
    },
  },
  plugins: [],
};
