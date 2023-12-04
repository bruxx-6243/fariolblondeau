import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://fariolblondeau.vercel.app/",
  integrations: [react(), tailwind(), compress({
    imgAttributes: {
      decoding: "async",
      loading: "lazy"
    }
  }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  output: "server",
  adapter: vercel()
});