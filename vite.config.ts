import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/bilal_qureshi_portfolio/",
//   plugins: [react()],
// });

// vite.config.js
export default defineConfig({
  base: "/bilal_qureshi_portfolio/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // optional: to silence warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
