import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://fariolblondeau.vercel.app/",
  base: "/",
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt(),
  ],
});
