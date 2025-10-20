// ===============================================================
// ✅ App.tsx — Scalable, Accessible, Mobile-Optimized (2025)
// ===============================================================

import { Suspense, lazy, useEffect } from "react";
import type { FC } from "react"; // ✅ FIX: type-only import
import { Routes, Route, useLocation } from "react-router-dom";

// ===============================================================
// 🧩 Core Layout Components
// ===============================================================
import Topbar from "./components/header/Topbar";
import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import Footer from "./components/footer/Footer";

// ===============================================================
// 🛍️ Content Sections
// ===============================================================
import AboutStats from "./components/AboutStats";
import Shop from "./components/Shop";
import ShopByCategory from "./pages/ShopByCategory";

// ===============================================================
// 💊 Category & Dropdown Pages
// ===============================================================
import DM from "./dropdowns/Diabetes";
import CVS from "./categories/Cadiovascular";
import WomenHealthShop from "./dropdowns/Women";
import PrescriptionUpload from "./dropdowns/PrescriptionUpload";
import RequestPrescription from "./dropdowns/RequestPrescription";
import TalkToExpert from "./dropdowns/TalkToExpert";
import Vitamins from "./dropdowns/Vitamins";
import Equipment from "./dropdowns/Equipment";
import MensHealth from "./dropdowns/Men";
import AboutUs from "./pages/AboutUs";

// ===============================================================
// 🧠 Lazy-loaded Routes for Performance Optimization
// ===============================================================
const ProductsWrapper = lazy(() => import("./components/ProductsWrapper"));
const OTC = lazy(() => import("./dropdowns/OTC"));
const ContactUs = lazy(() => import("./outer/ContactUs"));
const Offers = lazy(() => import("./pages/Offers"));

// ===============================================================
// 🧭 Smooth Scroll Restoration — Enhances UX Consistency
// ===============================================================
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// ===============================================================
// 🏥 Root Application Component
// ===============================================================
const App: FC = () => (
  <>
    {/* === Persistent Layout Components === */}
    <Topbar />
    <Navbar />
    <ScrollToTop />

    {/* === Main Content === */}
    <main role="main" aria-live="polite">
      <Suspense
        fallback={
          <div
            role="status"
            aria-busy="true"
            style={{
              textAlign: "center",
              padding: "3rem",
              fontSize: "1rem",
            }}
          >
            <p>Loading content, please wait...</p>
          </div>
        }
      >
        <Routes>
          {/* === Home === */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ShopByCategory />
                <Offers />
                <AboutStats />
              </>
            }
          />

          {/* === Product Routes === */}
          <Route path="/products/prescription" element={<ProductsWrapper />} />
          <Route path="/products/otc" element={<OTC />} />
          <Route path="/products/supplements" element={<Vitamins />} />
          <Route path="/products/equipment" element={<Equipment />} />

          {/* === Condition Routes === */}
          <Route path="/condition/heart" element={<CVS />} />
          <Route path="/condition/diabetes" element={<DM />} />
          <Route path="/condition/women" element={<WomenHealthShop />} />
          <Route path="/condition/men" element={<MensHealth />} />

          {/* === Prescription Workflow === */}
          <Route path="/prescription/upload" element={<PrescriptionUpload />} />
          <Route path="/prescription/refill" element={<RequestPrescription />} />
          <Route path="/prescription/support" element={<TalkToExpert />} />

          {/* === About Section === */}
          <Route path="/about-us" element={<AboutUs/>} />
   
          {/* === Contact Page === */}
          <Route path="/contact-us" element={<ContactUs />} />

          {/* === Optional Shop Page === */}
          <Route path="/shop" element={<Shop />} />

          {/* === 404 — Not Found === */}
          <Route
            path="*"
            element={
              <section
                aria-labelledby="not-found-title"
                style={{
                  textAlign: "center",
                  padding: "4rem 1rem",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                <h2
                  id="not-found-title"
                  style={{ marginBottom: "1rem", color: "#7a0c2e" }}
                >
                  404 — Page Not Found
                </h2>
                <p style={{ color: "#6b7280" }}>
                  The page you’re looking for doesn’t exist or may have been moved.
                </p>
              </section>
            }
          />
        </Routes>
      </Suspense>
    </main>

    {/* === Global Footer === */}
    <Footer />
  </>
);

export default App;
