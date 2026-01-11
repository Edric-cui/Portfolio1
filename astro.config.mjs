import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    tailwind({
      applyBaseStyles: false, // We'll handle base styles in our CSS
    }),
  ],
  output: 'static',
  site: 'https://yourusername.github.io', // Update with your GitHub username
  base: '/ftv', // Update if your repo name is different
});
