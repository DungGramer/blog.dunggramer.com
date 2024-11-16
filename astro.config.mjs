import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://code.dunggramer.com",
  output: "hybrid",
  integrations: [mdx(), sitemap()],
  buildOptions: { site: "https://code.dunggramer.com" },
  adapter: vercel(),
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
