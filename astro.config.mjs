import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
    webAnalytics: {
      enabled: true,
      plausibleDataDomain: "fariolblondeau.dev",
    },
    imageService: true,
    devImageService: "sharp",
  }),
  site: "https://www.fariolblondeau.dev/",
  base: "/",
  integrations: [react(), tailwind(), sitemap(), robotsTxt()],
});