
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/Home";
import Partners from "../pages/Partners";
import Studio from "../pages/Studio";
import StartupDetails from "../pages/StartupDetails";
import Perks from "../pages/Perks";
import Resources from "../pages/Resources";
import ResourceDetails from "../pages/ResourceDetails";

function NotFound() {
  return (
    <main
      className="container"
      style={{
        minHeight: "65vh",
        paddingBlock: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "22px",
      }}
    >
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="home-btn home-btn-primary">
        Back to Home
      </Link>
    </main>
  );
}

export default function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />

        <Route path="/studio" element={<Studio />} />
        <Route
          path="/studio/:slug"
          element={<StartupDetails />}
        />

        <Route path="/perks" element={<Perks />} />

        <Route path="/resources" element={<Resources />} />
        <Route
          path="/resources/:slug"
          element={<ResourceDetails />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
