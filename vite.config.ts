// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Modern Vite + React setup (SPA mode)
export default defineConfig({
  plugins: [react()],
  appType: "spa", // <-- This automatically enables HTML5 History API fallback
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
});
