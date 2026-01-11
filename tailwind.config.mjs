/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Projector theme tokens (to be refined by Content Strategist)
        stage: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
        },
        screen: {
          DEFAULT: '#1a1a1a',
          paper: '#f5f5f0',
        },
        text: {
          primary: '#f5f5f0',
          secondary: '#a0a0a0',
        },
      },
      fontFamily: {
        body: ['system-ui', 'sans-serif'],
        pixel: ['monospace'], // Pixel font for labels only
      },
    },
  },
  plugins: [],
};
