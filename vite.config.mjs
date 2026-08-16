import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        company: resolve(import.meta.dirname, "company-information/index.html"),
        support: resolve(import.meta.dirname, "support/index.html"),
        privacy: resolve(import.meta.dirname, "privacy-policy/index.html"),
        terms: resolve(import.meta.dirname, "terms-of-use/index.html"),
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react()],
});
