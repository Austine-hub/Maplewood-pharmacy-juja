// ===============================================================
// MAIN ENTRY — Modern React 18+ with TypeScript (2025 Best Practices)
// ===============================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css"; // ✅ Global reset + base styles

// === Root Element Check (Type-Safe) ===
const container = document.getElementById("root") as HTMLElement | null;

if (!container) {
  throw new Error("❌ Root container not found. Ensure #root exists in index.html");
}

// === Create React Root ===
const root = createRoot(container);

// === Render Application ===
root.render(
  <StrictMode>
    {/*
      BrowserRouter manages routing using the HTML5 History API.
      - Add `basename="/your-subpath"` if deploying under a nested route.
      - Handles route refreshes gracefully (when appType: "spa" in vite.config.ts).
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// ===============================================================
// Notes:
// ✅ Uses React.StrictMode for runtime + accessibility warnings
// ✅ Ensures root element exists before rendering (prevents silent crashes)
// ✅ Compatible with Vite’s SPA history fallback via appType: "spa"
// ✅ Future-ready for PWA / SSR / Hydration upgrades
// ✅ Passes TypeScript strict checks (no implicit any / unsafe DOM access)
// ===============================================================
