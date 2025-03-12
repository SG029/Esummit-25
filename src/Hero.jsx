import React from "react";
import { motion } from "framer-motion";
import herobg from "./assets/img/herobg.png";
import Timer from "./components/timer";
import Register from "./components/register";
import { useState, useEffect } from "react";

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
          className="inline-block mr-[0.3vw]" // Adds spacing between letters
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

  // Show the button after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000); // 2.5 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div
      className="w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {/* Main heading with rising animation */}
      <motion.h1
        className="text-[16vw] md:text-[12vw] sm:text-[8vw] font-mermalede uppercase text-[#E6D7A5] drop-shadow-[5px_-5px_0px_rgba(0,0,0,1)] mt-[2vw]"
        initial={{ y: "20vh", opacity: 1 }} // Start at the center of the screen
        animate={{ y: "00vh", opacity: 1 }} // Rise to the final position
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
      >
        E-SUMMIT 2025
      </motion.h1>

      {/* Subheading with typewriter effect */}
      <motion.h2
        className="font-fonseca uppercase text-[#E6D7A5] font-semibold drop-shadow-[5px_-5px_2px_rgba(0,0,0,0.5)] -mt-[2vw] text-[3vw]"
        initial={{ opacity: 0 }} // Only fade-in effect
        animate={{ opacity: 1 }} // Fade in smoothly
        transition={{ duration: 1, ease: "easeOut", delay: 1.3 }} // Delay after H1
      >
        <TypewriterText text="SYMPHONY OF POSSIBILITIES" delay={1.8} />
      </motion.h2>

      {/* Timer component */}
      <Timer />

      {/* Register button with animation */}
      <motion.div
        initial={{ x: "0%", y: "0%", opacity: 0 }} // Start from the center
        animate={showButton ? { x: "0%", y: "0%", opacity: 1 } : {}} // Slide to original position
        transition={{ duration: 1, ease: "easeOut", delay: 0 }} // Smooth animation
      >
        <Register />
      </motion.div>
    </div>
  );
}

export default Hero;