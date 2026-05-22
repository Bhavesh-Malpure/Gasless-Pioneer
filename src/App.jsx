import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FooterEnhanced } from "./components/FooterEnhanced";
import { LandingPage } from "./pages/LandingPage";
import { ClaimPage } from "./pages/ClaimPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AboutPage } from "./pages/AboutPage";
import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/claim" element={<ClaimPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <FooterEnhanced />
      </div>
    </BrowserRouter>
  );
}

export default App;