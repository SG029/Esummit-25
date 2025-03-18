import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import herobg from "./assets/img/herobg.png";
import "./styles/mission.css";
import "./styles/about.css";
import iiit from "./assets/img/iiit.jpg";

// Custom hook to detect mobile view
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

function About() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isMobile = useIsMobile();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center about-container"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* About E-Summit Section */}
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="about justify-center items-center flex flex-col mt-0 mb-10"
      >
        <h1 className={`text-[4.5vw] font-bold text-center font-fonseca mt-[5vh] ${isMobile ? 'text-amber-200' : 'text-black'}`}>
          <span>ABOUT </span>  
          <span className={`${isMobile ? 'text-[#059196]' : 'text-black'}`}>E-SUMMIT</span>
        </h1>
        <h3 className={`w-5/6 text-[2.5vw] text-center font-opensanslight leading-10 about-text ${isMobile ? 'text-amber-200' : 'text-black'}`}>
          E-Summit is the flagship entrepreneurship summit organized to promote innovation, entrepreneurship, and leadership among students and professionals.
        </h3>
      </motion.div>

      {/* Mission and Image Section */}
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex flex-col md:flex-row justify-between items-center w-5/6 mt-8 gap-6 mission-container mb-[5vh]"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={iiit}
            alt="IIIT Campus"
            className="w-full h-auto rounded-lg border-3 border-[#046C70] shadow-lg"
          />
        </div>

        {/* Mission and Workshops Section */}
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeInUp}
          className="w-full md:w-1/2 px-6 py-8 md:px-10 md:py-14 rounded-lg gap-6 flex flex-col justify-center border-3 border-[#046C70] text-white"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #24170C, #0D0D0D)',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Pitch and Workshops */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 description-container">
            <div className="w-full md:w-1/2 flex flex-col items-center bg-[#482B00] bg-opacity-50 rounded-xl p-4 gap-2">
              <h2 className="font-fonseca text-[2.5vw] md:text-[1.8vw]">PITCH</h2>
              <h3 className="w-full text-center font-opensanslight text-[1.5vw] md:text-[1.2vw]">
                Compete for funding and recognition in our pitch competitions.
              </h3>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center bg-[#482B00] bg-opacity-50 rounded-xl p-4 gap-2">
              <h2 className="font-fonseca text-[2.5vw] md:text-[1.8vw]">WORKSHOPS</h2>
              <h3 className="w-full text-center font-opensanslight text-[1.5vw] md:text-[1.2vw]">
                Learn from experts in interactive workshops and masterclasses.
              </h3>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex flex-col items-center mt-6">
            <h2 className="font-fonseca text-[2.5vw] md:text-[1.8vw]">OUR MISSION</h2>
            <h4 className="w-full text-center font-opensanslight text-[1.5vw] md:text-[1.2vw]">
              To foster entrepreneurship and innovation by providing a platform for students, startups, and industry leaders to connect, collaborate, and create impact.
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;