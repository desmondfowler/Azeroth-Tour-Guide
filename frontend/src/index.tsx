import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/tailwind.css";

// Import components
import HomePage from "./pages/HomePage";
import AzerothPage from "./pages/AzerothPage";
import Contact from "./pages/Contact";
import RegionPage from "./pages/RegionPage";
import DirectoryPage from "./pages/DirectoryPage";

const rootElement = document.getElementById("root") as HTMLElement; // Type assertion for TS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/azeroth" element={<AzerothPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/region/:name" element={<RegionPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
      </Routes>
    </Router>
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
