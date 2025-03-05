
import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Hero";
import { motion } from "framer-motion";
import { nav } from "framer-motion/client";
import Navbar from "./components/navbar";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(25);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  return (

    <div className="relative">
      {/* Magnetic Cursor */}
      <motion.div
        className="fixed pointer-events-none rounded-full bg-[#059196] z-50"
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

      {/* Page Content */}
      <Navbar />
      <Hero />
    </div>
  );

}

export default App;
