import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://johanneswiebe.github.io',
  build: {
    assets: '_astro'
  },
  integrations: [tailwind(), mdx(), icon({
    include: {
      mdi: ["*"]
    }
  })]
});