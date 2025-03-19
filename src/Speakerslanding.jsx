import React, { useState, useEffect } from "react";
import herobg from "./assets/img/herobg.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SpeakerCard from "./components/SpeakerCard.jsx";
import "../src/styles/Speakerslanding.css";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// Import images
import ayush from "./assets/img/Ayush Sapra.jpg";
import bipin from "./assets/img/Bipin Preet Singh.jpg";
import sandeep from "./assets/img/sandeepjain.jpg";
import neerav from "./assets/img/neerav.jpg";
import akshit from "./assets/img/akshit.jpg";
import anas from "./assets/img/anas.jpg";
import natwar from "./assets/img/natwar.jpg";
import chitra from "./assets/img/chitra.jpg";
import anup from "./assets/img/anup.png";
import dcpandey from "./assets/img/dcpandey.jpg";
import deepak from "./assets/img/deepak.jpg";
import himanshu from "./assets/img/himanshu.webp";
// import kartik from "./assets/img/kartik.jpg";

// Speaker data
const speakers = [
  { image: ayush, name: "AAYUSH SAPRA", designation: "Food Content Creator", className: "mt-[10vh]" },
  { image: bipin, name: "BIPIN PREET SINGH", designation: "Founder of MobiKwik", className: "mb-0" },
  { image: sandeep, name: "SANDEEP JAIN", designation: "Founder of GeeksforGeeks", className: "mt-[10vh]" },
  { image: neerav, name: "NEERAV JAIN", designation: "Founder & CEO of CityFurnish", className: "mb-0" },
  { image: akshit, name: "AKSHIT BANSAL", designation: "Co-Founder of Statiq", className: "mt-[10vh]" },
  { image: anas, name: "MUHAMMAD ANAS", designation: "Founder & CEO of Enord", className: "mb-0" },
  { image: natwar, name: "NATWAR AGRAWAL", designation: "Founder, and Director of Bucca Bucci", className: "mt-[10vh]" },
  { image: anup, name: "ANUP GUPTA", designation: "Founder OF MathonGO", className: "mb-0" },
  { image: chitra, name: "CHITRA GURNANI ", designation: "CEO at Thrillophilia.com", className: "mt-[10vh]" },
  { image: dcpandey, name: "DC PANDEY ", designation: "Renowned Physics Teacher", className: "mb-0" },
  { image: deepak, name: "DEEPAK SOLANKI ", designation: "CEO at Thrillophilia.com", className: "mt-[10vh]" },
  { image: himanshu, name: "HIMANSHU ", designation: "Founder and CEO of Cograd", className: "mb-0" },
  // { image: kartik, name: "KARTIK KRISHNAN ", designation: "Director at @filtercopy ", className: "mt-[10vh]" },

];

// useIsMobile Hook
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

function Speakerslanding() {
  const isMobile = useIsMobile();
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start hidden, slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to visible
  };

  const navigate = useNavigate(); // Hook for navigation

  return (
    <div
      className="w-full min-h-[100%] flex flex-col items-center justify-center about-container"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Wrap the content in a motion.div and apply the animation */}
      <motion.div
        ref={ref1} // Attach the ref
        initial="hidden" // Initial animation state
        animate={inView1 ? "visible" : "hidden"} // Animate when in view
        variants={fadeInUp} // Apply the animation variants
        className="justify-center items-center flex flex-col mt-0"
      >
        <h1 className="speak-head text-[4.5vw] font-bold text-[#FFEBA9] text-center font-fonseca mt-[5vh]">
          OUR <span className="text-[#059196]">SPEAKERS</span>
        </h1>
        <h3 className="w-5/6 text-[2.5vw] text-center text-[#FFEBA9] font-opensanslight leading-10 about-text">
          Learn from industry leaders, successful entrepreneurs, and innovators
          who are shaping the future of business and technology.
        </h3>
      </motion.div>

      {/* Marquee Section */}
      <div className="marquee h-[65vh] w-full mt-[10vh] flex justify-center gap-[3vw] overflow-hidden pb-20">
        {/* First marquee-inner */}
        <div className="marquee-inner flex gap-[3vw]">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              backgroundImage={speaker.image}
              speakerName={speaker.name}
              speakerDesignation={speaker.designation}
              className={speaker.className}
            />
          ))}
        </div>

        {/* Second marquee-inner (duplicate for seamless looping) */}
        <div className="marquee-inner flex gap-[3vw]">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={`duplicate-${index}`} // Unique key for duplicates
              backgroundImage={speaker.image}
              speakerName={speaker.name}
              speakerDesignation={speaker.designation}
              className={speaker.className}
            />
          ))}
        </div>
      </div>

      {/* Updated Button for Speakers */}
      <div className="mt-[5vh]">
        <div
          onClick={() => navigate("/speakers")} // Navigate to the speakers page
          className="no-underline cursor-pointer"
        >
          <div className={`relative overflow-hidden group flex items-center gap-0 hover:gap-6 transition-all duration-1000 px-4 py-2 bg-[#AA1E0F] rounded-xl text-white cursor-pointer ${isMobile ? 'text-[6vw] mt-[6vw]' : 'text-[2vw] mt-[3vw]'} md:text-[1.7vw] sm:text-[4vw]`}>
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-white rounded-full h-[30vw] w-[40vw] transform -translate-x-full translate-y-0 transition-all duration-[700ms] group-hover:translate-x-[-40%] group-hover:translate-y-[-40%]"></div>

            {/* Register Text & Icon */}
            <span className="relative transition-all duration-500 group-hover:text-[#AA1E0F] z-10">
              MORE SPEAKERS
            </span>
            <BiChevronRight
              className={`relative transition-all duration-500 group-hover:text-[#AA1E0F] z-10 ${
                isMobile ? "text-[8vw]" : "text-[3vw]"
              } md:text-[3vw] sm:text-[5vw]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakerslanding;