import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import herobg from "./assets/img/herobg.png"; 
import aboutleft from "./assets/img/aboutleft.png"; // Ensure this path is correct
import "./styles/mission.css";
import "./styles/about.css";

function About() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className='w-full min-h-[100vh] flex flex-col items-center justify-center about-container'
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeInUp}
        className='about justify-center items-center flex flex-col mt-0'
      >
        <h1 className='text-[4.5vw] font-bold text-black text-center font-fonseca mt-[5vh]'>
          ABOUT E-SUMMIT
        </h1>
        <h3 className='w-5/6 text-[2.5vw] text-center text-black font-opensanslight leading-10 about-text'>
          E-Summit is the flagship entrepreneurship summit organized to promote innovation, entrepreneurship, and leadership among students and professionals.
        </h3>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeInUp}
        className='flex justify-between w-5/6 mt-8 gap-[6vw] mission-container mb-[5vh]'
      >
        <div className='mic-image w-1/2'>
          <img src={aboutleft} alt="About Left" className='w-full h-auto' />
        </div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeInUp}
          className='container-div w-1/2 px-10 py-14 rounded-lg gap-10 flex flex-col justify-center border-3 border-[#046C70] text-white'
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #24170C, #0D0D0D)',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '3px solid #046C70',
          }}
        >
          <div className='flex justify-between items-center gap-3 discription-container'>
            <div className='flex justify-between flex-col items-center bg-[#482B00] bg-opacity-50 rounded-xl p-4 gap-1'>
              <h2 className='font-fonseca text-[2.5vw]'>PITCH</h2>
              <h3 className='width-5/6 text-center font-opensanslight text-[1.5vw]'>
                Compete for funding and recognition in our pitch competitions.
              </h3>
            </div>
            <div className='flex justify-between flex-col items-center bg-[#482B00] bg-opacity-50 rounded-xl p-4 gap-1'>
              <h2 className='font-fonseca text-[2.5vw]'>WORKSHOPS</h2>
              <h3 className='width-5/6 text-center font-opensanslight text-[1.5vw]'>
                Learn from experts in interactive workshops and masterclasses.
              </h3>
            </div>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <h2 className='font-fonseca text-[2.5vw]'>OUR MISSION</h2>
            <h4 className='width-5/6 text-center font-opensanslight text-[1.5vw]'>
              To foster entrepreneurship and innovation by providing a platform for students, startups, and industry leaders to connect, collaborate, and create impact.
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;