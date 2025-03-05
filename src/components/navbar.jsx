import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 text-yellow-50 z-50 bg-transparent absolute w-full">
      {/* Logo on the left */}
      <img
        src="/src/assets/E-summit logo.png"
        alt="logo"
        className="h-[4vw] ml-6"
      />

      {/* Centered Navigation Links */}
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-xl font-opensanslight transition-colors duration-500">
        <li className="cursor-pointer hover:text-[#059196]">Home</li>
        <li className="cursor-pointer hover:text-[#059196]">About</li>
        <li className="cursor-pointer hover:text-[#059196]">Speakers</li>
        <li className="cursor-pointer hover:text-[#059196]">Events</li>
        <li className="cursor-pointer hover:text-[#059196]">Sponsors</li>
        <li className="cursor-pointer hover:text-[#059196]">Contact Us</li>
      </ul>

      {/* Magnetic Register Button (Faster Movement) */}
      <motion.button
        className="font-['Inter'] font-bold bg-[#AA1E0F] text-white px-6 py-2 rounded-md mr-6 hover:bg-[#fff] hover:text-black transition-all"
        onMouseMove={(e) => {
          const { left, top, width, height } = e.target.getBoundingClientRect();
          setButtonPos({
            x: (mousePos.x - (left + width / 2)) * 0.8, // More movement
            y: (mousePos.y - (top + height / 2)) * 0.8,
          });
        }}
        onMouseLeave={() => setButtonPos({ x: 0, y: 0 })}
        animate={{
          x: buttonPos.x,
          y: buttonPos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 800, // Faster reaction
          damping: 8, // Less resistance
        }}
      >
        Register
      </motion.button>
    </nav>
  );
}

export default Navbar;
