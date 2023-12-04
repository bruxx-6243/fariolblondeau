import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      imgAttributes: {
        decoding: "async",
        loading: "lazy",
      },
      icons: false,
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    imageService: true,
  }),
});
