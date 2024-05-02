import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://anti-fatigue.github.io',
  base: 'https://github.com/Anti-Fatigue/anti-fatigue.github.io',
  integrations: [starlight({
    title: 'Anti Fatigue Mission',
    social: {
      github: 'https://github.com/Anti-Fatigue'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind()]
});
