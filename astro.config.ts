import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://halland.tech",
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
