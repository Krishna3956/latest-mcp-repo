import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Optimize for production
      minify: "terser",
      // Generate source maps for error tracking (optional)
      sourcemap: !isProduction,
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
      // Rollup options for better code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunks for better caching
            "react-vendor": ["react", "react-dom"],
            "ui-vendor": ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
            "supabase-vendor": ["@supabase/supabase-js"],
            "utils-vendor": ["react-router-dom", "@tanstack/react-query"],
          },
        },
      },
    },
    // Environment variable prefix for Vite
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  };
});
