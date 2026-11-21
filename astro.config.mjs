// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static site. The Cloudflare Worker serves ./dist (see wrangler.jsonc).
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
