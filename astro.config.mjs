// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://grenouillere.nahhk.workers.dev',
  trailingSlash: 'never',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile',
  }),
});
