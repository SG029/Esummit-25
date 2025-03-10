import React from "react";
import { motion } from "framer-motion";
import herobg from "./assets/img/herobg.png";
import Timer from "./components/timer";
import Register from "./components/register";
import bluevector from "./assets/img/Vector 2.png";
import { useState, useEffect } from "react";

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

function getwidth() {
  return window.innerWidth;
}

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

function Hero() {
  return (
    <div
              className='w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden'
              style={{
                backgroundImage: `url(${herobg})`,
                backgroundSize: 'cover', // Ensures the image covers the entire container
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              }}
            >
              {getwidth() <2000 && getwidth() > 1130 &&
                
                  <motion.img
                    src={bluevector}
                    alt=""
                    className="absolute top-0 -right-[20vw] w-[100vw] mt-[20vh] -z-1"
                    initial={{ x: "-40vw", y: "-40vh", opacity: 0 }} // Start position (Top-left)
                    animate={{ x: 0, y: 0, opacity: 1 }} // Move to final position
                    transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation
                    style={{ height: "calc(100vh + 10vh)", width: "calc(100vw + 10vw)" }} // Adjust height and width based on viewport size
                  />
              }
              {getwidth() <1130  &&
               <motion.img
               src={bluevector}
               alt=""
               className="absolute top-0 -right-[20vw] w-[100vw] mt-[20vh] -z-1"
               initial={{ x: "-100vw", y: "-100vh", opacity: 0 }} // Start position (Top-left)
               animate={{ x: 0, y: 0, opacity: 1 }} // Move to final position
               transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation
               style={{ height: "calc(100vh + 5vh)", width: "calc(100vw + 10vw)" }} // Adjust height and width based on viewport size
             />}
      <motion.h1
        className="text-[16vw] md:text-[10vw] sm:text-[8vw] font-mermalede uppercase text-[#E6D7A5] drop-shadow-[5px_-5px_0px_rgba(0,0,0,1)] mt-[2vw]"
        initial={{ opacity: 0, y: useIsMobile() ? 50 : 100 }} // Start lower, less distance on mobile
        animate={{ opacity: 1, y: 0 }} // Move up to normal position
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
      >
        E-SUMMIT 2025
      </motion.h1>

      <motion.h2
        className="font-fonseca uppercase text-[#E6D7A5] font-semibold drop-shadow-[5px_-5px_2px_rgba(0,0,0,0.5)] -mt-[2vw] text-[2vw]"
        initial={{ opacity: 0 }} // Only fade-in effect
        animate={{ opacity: 1 }} // Fade in smoothly
        transition={{ duration: 1, ease: "easeOut", delay: 1.3 }} // Delay after H1
      >
        <TypewriterText text="SYMPHONY OF POSSIBILITIES" delay={1.8} />
      </motion.h2>

      <Timer />
      <Register />
    </div>
  );
}

export default Hero;
