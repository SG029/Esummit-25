import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Hero";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import About from "./About";
import Events from "./Events";
import Footer from "./Footer";
import Eventslanding from "./Eventslanding";
import Speaker from "./Speaker";
import Sponsors from "./Sponsors";
import Loader from "./components/Loader";
import bluevector from "./assets/img/Vector 2.png"; // Import the bluevector image
import bluevector2 from "./assets/img/Vector 2.png"; // Import the bluevector2 image
import yellowvector from "./assets/img/yellow vector.png"; // Import the yellowvector image
import redvector from "./assets/img/red vector.png"; // Import the redvector image
import redvector2 from "./assets/img/red vector.png"; // Import the redvector image
import Speakerslanding from "./Speakerslanding";
import Workshops from './Workshops';
import blue2 from './assets/img/blue2.png'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(25);
  const [isLoading, setIsLoading] = useState(window.innerWidth < 2000 && window.innerWidth > 1130);
  const [scrollProgress, setScrollProgress] = useState(0); // Track scroll progress
  const [isBlueVectorFinal, setIsBlueVectorFinal] = useState(false); // Track if bluevector has reached its final destination
  const [scrollVh, setScrollVh] = useState(0); // Track scroll position in vh

  // Create refs for Hero, About, Events, and Footer sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const speakersRef = useRef(null);
  const eventsRef = useRef(null);
  const footerRef = useRef(null);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      const windowHeight = window.innerHeight; // Height of the viewport
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document

      // Calculate scroll progress (0 to 1)
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollProgress(progress);

      // Calculate scroll position in vh
      const scrollVh = scrollY / windowHeight;
      setScrollVh(scrollVh);

      // Trigger the transition to bluevector2 when bluevector reaches its final position
      if (progress >= 0.99) {
        setIsBlueVectorFinal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse move for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle cursor size change on hover over <h1> elements
  useEffect(() => {
    const handleMouseEnter = () => setCursorSize(100); // Increase cursor size on hover
    const handleMouseLeave = () => setCursorSize(25); // Reset cursor size on leave

    // Select all <h1> elements
    const h1Elements = document.querySelectorAll("h1");

    // Add event listeners to each <h1> element
    h1Elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      h1Elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Function to handle video end
  const handleVideoEnd = () => {
    setIsLoading(false); // Hide loader and show the rest of the app

    // Delay the transition to bluevector2 by 1.5 seconds
    setTimeout(() => {
      setIsBlueVectorFinal(true);
    }, 1500);
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
              {/* Bluevector */}
              {!isBlueVectorFinal && (
                <motion.img
                  src={bluevector}
                  alt=""
                  className="fixed top-0 -right-[20vw] w-[100vw] mt-[10vh] -z-1"
                  style={{
                    height: "calc(130vh + 10vh)",
                    width: "calc(100vw + 10vw)",
                    transform: `translate(${scrollProgress * -100}vw, ${scrollProgress * -100}vh) rotate(${scrollProgress * -30}deg)`, // Move to the top-left and rotate anticlockwise
                    opacity: 1 - scrollProgress * 5, // Fade out bluevector
                  }}
                  initial={{ x: "-40vw", y: "-40vh", opacity: 0 }} // Start position (top-left)
                  animate={{ x: "0vw", y: "0vh", opacity: 1 }} // Move to final position
                  transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation
                />
              )}

              {/* Bluevector2 */}
              {isBlueVectorFinal && (
                <motion.img
                  src={bluevector2}
                  alt=""
                  className="fixed top-0 -right-[20vw] w-[100vw] mt-[10vh] -z-1"
                  style={{
                    height: "calc(130vh + 10vh)",
                    width: "calc(100vw + 10vw)",
                    transform: `translate(${scrollProgress * -100}vw, ${scrollProgress * -100}vh) rotate(${scrollProgress * -30}deg)`, // Move to the top-left and rotate anticlockwise
                    opacity: 1 - scrollProgress * 5, // Fade out bluevector2
                  }}
                />
              )}

              {/* Yellowvector */}
<motion.img
  src={yellowvector}
  alt=""
  className="fixed top-0 -right-[20vw] w-[100vw] mt-[10vh] -z-1"
  style={{
    height: "calc(130vh + 10vh)",
    width: "calc(100vw + 10vw)",
    transform: `translate(${scrollProgress * -100}vw, ${scrollProgress * -100}vh) rotate(${scrollProgress * -30}deg)`, // Move to the top-left and rotate anticlockwise
    opacity: scrollVh < 1.8 ? scrollProgress * 7 : Math.max(0, 1 - (scrollVh - 1.8) * 5), // Fade out yellowvector when redvector appears
  }}
/>

{/* Redvector (appears between 200vh and 400vh) */}
{/* Redvector (appears between 200vh and 400vh) */}
{scrollVh >= 2.1 && scrollVh <= 4 && (
  <motion.img
    src={redvector}
    alt=""
    className="fixed top-0 -left-[20vw] w-[100vw] mt-[10vh] -z-1"
    style={{
      height: "calc(130vh + 10vh)",
      width: "calc(100vw + 10vw)",
      transform: `translate(${Math.pow((scrollVh - 2.1), 0.3) * 30}vw, ${scrollProgress * -100}vh) rotate(${(scrollVh - 2.2) * 10}deg)`, // Slower movement from left to right
      opacity: Math.min(1, (scrollVh - 2.1) * 6), // Fade in redvector more slowly
    }}
  />
)}

{scrollVh >= 4 && scrollVh <= 5 && (
  <motion.img
    src={blue2}
    alt=""
    className="fixed bottom-0 -right-[35vw] w-[100vw] -z-1"
    style={{
      height: "60vh", // Fixed height of 60vh
      width: "200vw", // Fixed width of 200vw
      transform: `translate(${Math.pow((scrollVh - 4), 0.3) * -50}vw, 0)`, // Move from right to left
      opacity: Math.min(1, (scrollVh - 4) * 5), // Fade in slowly
    }}
  />
)}

{scrollVh >= 5.3 && (
  <motion.img
    src={redvector2}
    alt=""
    className="fixed top-[30vh] -left-[20vw] w-[100vw] mt-[10vh] -z-1"
    style={{
      height: "calc(130vh + 10vh)",
      width: "calc(100vw + 10vw)",
      transform: `translate(${Math.pow((scrollVh - 5.3), 0.3) * 30}vw, ${scrollProgress * -100}vh) rotate(${(scrollVh - 5.1) * 10}deg)`, // Slower movement from left to right
      opacity: Math.min(1, Math.max(0, (scrollVh - 5.3) * 3)), // Fade in redvector more slowly, ensuring opacity is between 0 and 1
    }}
  />
)}

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
              <Navbar heroRef={heroRef} aboutRef={aboutRef} speakersRef={speakersRef} eventsRef={eventsRef} footerRef={footerRef} />

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
                      <div ref={eventsRef}>
                        <Eventslanding />
                      </div>
                      <div ref={speakersRef}>
                        <Speakerslanding />
                      </div>
                      <div >
                        <Workshops />
                      </div>
                      <div ref={footerRef}>
                        <Footer aboutRef={aboutRef} eventsRef={eventsRef} speakersRef={speakersRef} sponsorsRef={null} />
                      </div>
                    </>
                  }
                />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/events" element={<Events />} />
                <Route path="/speakers" element={<Speaker />} /> {/* Add this route */}
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;