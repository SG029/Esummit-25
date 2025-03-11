import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Hero";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import Navbar from "./components/navbar";
import About from "./About";
import Events from "./Events";
import Footer from "./Footer";
import Eventslanding from "./Eventslanding";
import Speaker from "./Speaker";
import Sponsors from "./Sponsors";
import Loader from "./components/Loader"; // Import the Loader component

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(25);
  const [isLoading, setIsLoading] = useState(window.innerWidth < 2000 && window.innerWidth > 1130); // State to manage loading

  // Create refs for Hero, About, Events, and Footer sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const footerRef = useRef(null);

  // Handle mouse move for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle cursor size change on hover
  useEffect(() => {
    const handleMouseEnter = () => setCursorSize(100);
    const handleMouseLeave = () => setCursorSize(25);

    // Select elements that should trigger cursor expansion
    const interactiveElements = document.querySelectorAll("h1");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Function to handle video end
  const handleVideoEnd = () => {
    setIsLoading(false); // Hide loader and show the rest of the app
  };

  return (
    <BrowserRouter>
      <div className="relative overflow-x-hidden scroll-smooth">
        {/* Loader */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Loader onVideoEnd={handleVideoEnd} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show the rest of the app only when isLoading is false */}
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Magnetic Cursor */}
              <motion.div
                className="cursorrr fixed pointer-events-none rounded-full bg-[#059196] z-50"
                style={{
                  mixBlendMode: "difference",
                }}
                animate={{
                  x: cursorPosition.x - cursorSize / 2,
                  y: cursorPosition.y - cursorSize / 2,
                  width: `${cursorSize}px`,
                  height: `${cursorSize}px`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5,
                }}
              />

              {/* Navbar */}
              <Navbar heroRef={heroRef} aboutRef={aboutRef} eventsRef={eventsRef} footerRef={footerRef} />

              {/* Page Content */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <div ref={heroRef}>
                        <Hero />
                      </div>
                      <div ref={aboutRef}>
                        <About />
                      </div>
                      <Eventslanding />
                      <div ref={footerRef}>
                        <Footer />
                      </div>
                    </>
                  }
                />
                <Route path="/speakers" element={<Speaker />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsors" element={<Sponsors />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;