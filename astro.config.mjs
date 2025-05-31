// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // Use Netlify adapter for deployment
  adapter: netlify(),
  // Base path if your site is deployed to a subdirectory
  base: '/'
});
