// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// export default defineConfig({
//    plugins: [react(), tailwindcss()],
//    base: "./",
//    build: {
//       outDir: "./../",
//    },
// });


import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    outDir: "dist", // Changed to standard output directory
    emptyOutDir: true, // Cleans the directory before build
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js"
      }
    }
  },
  server: {
    port: 3000
  }
});