import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
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
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["terminal.local"],
    },
  },
});
