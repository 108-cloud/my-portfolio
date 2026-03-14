/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        beige: {
          light: '#f4ece6', // Background secondary
          dark: '#e6dace'   // Background primary
        },
        accent: '#0050ff',    // Primary action color
        ink: '#1a1a1a'        // Softer black for better reading contrast
      }
    }
  },
  plugins: [],
}
