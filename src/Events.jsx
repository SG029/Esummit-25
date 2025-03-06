import React from 'react'
import herobg from "./assets/img/herobg.png"; 

function Events() {
  return (
    <div
          className='w-full min-h-[110vh] flex flex-col items-center justify-center '
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: 'cover', // Ensures the image covers the entire container
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          }}
        >
        <h1 className='text-[16vw] md:text-[10vw] sm:text-[8vw] font-mermalede uppercase text-[#E6D7A5] drop-shadow-[5px_-5px_0px_rgba(0,0,0,1)] mt-[2vw]'>COMING SOON</h1>
    </div>
  )
}

export default Events