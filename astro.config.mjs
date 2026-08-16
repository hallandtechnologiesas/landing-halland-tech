import node from "@astrojs/node";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://halland.tech",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
  },
  vite: {
    server: {
      allowedHosts: ["terminal.local"],
    },
  },
});
