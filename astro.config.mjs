import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://fariolblondeau.vercel.app/",
  base: "/",
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    // partytown({
    //   config: {
    //     forward: ["dataLayer.push"],
    //   },
    // }),
    robotsTxt(),
  ],
});
