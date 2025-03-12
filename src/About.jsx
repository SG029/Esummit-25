import React from 'react';
import herobg from "./assets/img/herobg.png"; 
import aboutleft from "./assets/img/aboutleft.png"; // Ensure this path is correct
import "./styles/mission.css";
import "./styles/about.css";

function About() {
  return (
    <div
      className='w-full min-h-[100vh] flex flex-col items-center justify-center about-container'
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      <div className='about justify-center items-center flex flex-col mt-0'>
        <h1 className='text-[4vw] font-bold text-black text-center font-fonseca mt-[10vw]'>
          ABOUT E-SUMMIT
        </h1>
        <h3 className='w-4/6 text-[2vw] text-center text-black font-opensanslight leading-10 about-text'>
          E-Summit is the flagship entrepreneurship summit organized to promote innovation, entrepreneurship, and leadership among students and professionals.
        </h3>
      </div>
      <div className='flex justify-between w-5/6 mt-8 gap-[6vw] mission-container'>
        <div className='mic-image w-1/2'>
          <img src={aboutleft} alt="About Left" className='w-full h-auto' />
        </div>
        <div
  className='container-div w-1/2 px-10 py-14 rounded-lg gap-10 flex flex-col justify-center border-3 border-[#046C70] text-white'
  style={{
    backgroundImage: 'linear-gradient(to bottom right, #24170C, #0D0D0D)', // Gradient
    backdropFilter: 'blur(10px)', // Glassify effect
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background for glass effect
    border: '3px solid #046C70', // Border
  }}
>
  <div className=' flex justify-between items-center gap-3 discription-container'>
    <div className=' flex justify-between flex-col items-center bg-[#482B00] bg-opacity-50 rounded-xl p-4 gap-1'>
      <h2 className='font-fonseca text-[1.7vw]'>PITCH</h2>
      <h3 className='width-5/6 text-center font-opensanslight text-[1.5vw]  '>
        Compete for funding and recognition in our pitch competitions.
      </h3>
    </div>
    <div className='flex justify-between flex-col items-center bg-[#482B00] bg-opacity-50 rounded-xl p-4 gap-1'>
      <h2 className='font-fonseca text-[1.7vw]'>WORKSHOPS</h2>
      <h3 className='width-5/6 text-center font-opensanslight text-[1.5vw]'>
        Learn from experts in interactive workshops and masterclasses.
      </h3>
    </div>
  </div>
  <div className='flex justify-center flex-col items-center'>
    <h2 className='font-fonseca text-[2vw]'>OUR MISSION</h2>
    <h4 className='width-5/6 text-center font-opensanslight text-[1.5vw]'>
      To foster entrepreneurship and innovation by providing a platform for students, startups, and industry leaders to connect, collaborate, and create impact.
    </h4>
  </div>
</div>
      </div>
    </div>
  );
}

export default About;