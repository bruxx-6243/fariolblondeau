import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://fariolblondeau.vercel.app/",
  base: "/",
  integrations: [react(), tailwind(), sitemap(), robotsTxt()],
});
