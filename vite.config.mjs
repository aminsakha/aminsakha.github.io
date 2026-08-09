import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: "site-src",
  publicDir: "../public",
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "site-src/index.html"),
        fa: resolve(import.meta.dirname, "site-src/fa/index.html"),
        ai: resolve(import.meta.dirname, "site-src/ai/index.html"),
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom/client", "@phosphor-icons/react"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./site-src/src/main.jsx"],
    },
  },
  plugins: [react()],
});
