import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yiyangd.github.io',
  base: '/ap-micro',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
