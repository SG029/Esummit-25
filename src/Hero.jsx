import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import herobg from "./assets/img/herobg.png";
import Timer from "./components/timer";
import Register from "./components/register";
import "./styles/hero.css";

// Custom hook to check if the screen is mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

// Typewriter effect component
function TypewriterText({ text, delay }) {
  return (
    <motion.span
      className="inline-block"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08, // Typing speed
            delayChildren: delay, // Start typing after a delay
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="sub-main inline-block mr-[0.3vw]" // Adds spacing between letters
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0 }}
        >
          {char === " " ? "\u00A0" : char} {/* Adds space properly */}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Hero component
function Hero() {
  const isMobile = useIsMobile();
  const [showButton, setShowButton] = useState(false); // State to control button visibility
  const [showNewRegister, setShowNewRegister] = useState(false); // State to control which register to show
  const [scrollProgress, setScrollProgress] = useState(0); // Track scroll progress

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down 100vh
      behavior: 'smooth', // Smooth scrolling
    });
  };

  // Show the button after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Swap to new register after 4 seconds
  useEffect(() => {
    const swapTimer = setTimeout(() => {
      setShowNewRegister(true);
    }, 4000); // 4 seconds delay

    return () => clearTimeout(swapTimer); // Cleanup on unmount
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      const windowHeight = window.innerHeight; // Height of the viewport
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document

      // Calculate scroll progress (0 to 1)
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {/* Main heading with rising animation */}
      <div >
      <motion.h1
        className={`main-text font-mermalede uppercase text-[#E6D7A5] drop-shadow-[5px_-5px_0px_rgba(0,0,0,1)] mt-[2vw] ${isMobile ? 'text-[100 vw]' : 'text-[12vw]'}`} // Increased mobile size to 24vw
        initial={{ y: "20vh", opacity: 1 }} // Start at the center of the screen
        animate={{ y: "00vh", opacity: 1 }} // Rise to the final position
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
        style={{
          y: `${scrollProgress * -50}vh`, // Move up based on scroll progress
        }}
      >
        E-SUMMIT 2025
      </motion.h1>
      </div>

      {/* Subheading with typewriter effect */}
      <motion.h2
        className={`font-fonseca uppercase text-[#E6D7A5] font-semibold drop-shadow-[5px_-5px_2px_rgba(0,0,0,0.5)] -mt-[2vw] ${isMobile ? 'text-[10vw]' : 'text-[3vw]'}`} // Increased mobile size to 10vw
        initial={{ opacity: 0 }} // Only fade-in effect
        animate={{ opacity: 1 }} // Fade in smoothly
        transition={{ duration: 1, ease: "easeOut", delay: 1.3 }} // Delay after H1
        style={{
          y: `${scrollProgress * -100}vh`, // Move up based on scroll progress
        }}
      >
        <TypewriterText text="SYMPHONY OF POSSIBILITIES" delay={1.8} />
      </motion.h2>

      {/* Timer component */}
      <motion.div
        style={{
          y: `${scrollProgress * -150}vh`, // Move up based on scroll progress
        }}
      >
        <Timer />
      </motion.div>

      {/* Register Button Animation */}
      <AnimatePresence mode="wait">
        {!showNewRegister ? (
          // Old Register - No scroll animation
          <motion.div
            key="oldregister"
            className="oldregister"
            initial={{ x: "0%", y: "0%", opacity: 0 }}
            animate={showButton ? { x: "0%", y: "0%", opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0 }}
          >
            <Register scrollProgress={0} /> {/* Pass 0 to prevent scroll animation */}
          </motion.div>
        ) : (
          // New Register - With scroll animation
          <motion.div
            key="newregister"
            className="newregister"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              y: `${scrollProgress * -200}vh`, // Move up as h1 and h2 (same speed as h2)
            }}
          >
            <Register scrollProgress={scrollProgress} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Down Button */}
      <div 
        onClick={handleScroll} // Attach the scroll handler
        className="cursor-pointerrr absolute left-[7vw] bottom-[5vh] flex items-center justify-center group"
      >
        {/* Circle scales and fills white on hover */}
        <div
          className="scrollclick cursor-pointer h-28 w-28 rounded-full border-2 border-white bg-transparent group-hover:bg-[#AA1E0F] group-hover:scale-50  transition-all duration-500 ease-in-out flex items-center justify-center"
        >
          {/* Down Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white group-hover:text-white transition-all duration-500 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;