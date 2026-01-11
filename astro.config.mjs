import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: '/Portfolio1',
  site: 'https://jiachencui.github.io',
  output: 'static'
});
