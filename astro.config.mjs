// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  site: 'https://astro.timgreen.ws',
  trailingSlash: 'always',
  prefetch: true,
  build: {
    inlineStylesheets: "auto",
  }
});
