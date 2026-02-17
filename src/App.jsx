import { HashRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NoiseOverlay } from "./components/UI";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function ScrollToTop() {
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <NoiseOverlay />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
