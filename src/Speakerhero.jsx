import React from 'react'
import herobg from "./assets/img/herobg.png"; 

function Speakerhero() {
  return (
    <div
              className='backShader w-full min-h-[60vh] flex flex-col items-center justify-center text-white'
              style={{
                backgroundImage: `url(${herobg})`,
                backgroundSize: 'cover', // Ensures the image covers the entire container
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              }}
            >
        <h1 className='text-[4vw] font-bold text-white text-center font-fonseca mt-[10vw]'>KEYNOTE <span className='text-[#059196]'>SPEAKERS</span></h1>
        <h3 className='w-4/6 text-[2vw] text-center text-white font-opensanslight leading-10 about-text'>Learn from industry leaders, successful entrepreneurs, and innovators who are shaping the future of business and technology.</h3>
    </div>
  )
}

export default Speakerhero