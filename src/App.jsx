import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useSmoothTransition } from "./hooks/useSmoothTransition";
import { useDarkMode } from "./hooks/useDarkMode";
import { AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {
  useSmoothTransition();
  useSmoothScroll();
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="container mx-auto mt-6 flex-grow">
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
