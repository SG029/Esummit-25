import React from 'react';
import herobg from "./assets/img/herobg.png"; 
import Projectbar from './components/Projectbar';
import banner from './assets/img/banner.png';
<<<<<<< HEAD
// import "./styles/events.css"
=======
>>>>>>> d2cefcb61e22bbce3b9e1bca4b8faf9328c5f8ac
import { BiChevronRight } from "react-icons/bi";
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

function Eventslanding() {
  const isMobile = useIsMobile();

  return (
    <div
          className='backShader w-full min-h-[110vh] flex flex-col items-center justify-center '
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: 'cover', // Ensures the image covers the entire container
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          }}
        >
            <h1 className='text-[4vw] font-bold text-white text-center font-fonseca mt-[10vw]'>EVENTS</h1>
            <div className='w-full flex flex-col items-center justify-center mt-10'>
              <Projectbar
              image={banner}
              heading="PITCHCAFE 8.0"
              description="E-Summit's flagship event connecting innovators, startups, and investors for mentorship, funding, and networking opportunities."
              githubLink="https://unstop.com/competitions/pitchcafe-80-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1420180"
              number=""
            />
              <Projectbar
              image={banner}
              heading="HACK FOR IMPACT"
              description="Hack for Impact is a 24-hour hackathon where teams utilize emerging technologies (IoT, AI/ML) to build solutions addressing real-world social challenges (based on SDGs)."
              githubLink="https://unstop.com/hackathons/hack-for-impact-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1419428"
              number=""
            />
              <Projectbar
              image={banner}
              heading="SCALE UP (1 to 100)"
              description="Scale Up (1 to 100) is a case study competition where participants analyze a real-world company's revenue, goals, and market position."
              githubLink="https://unstop.com/competitions/scale-up-1-to-100-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1419464"
              number=""
            />
              <Projectbar
              image={banner}
              heading="MIX-MATCHED"
              description="Mix-Matched is an exciting E-Summit event where participants randomly draw two chits from a jar, each representing vastly different fields, such as medical and fashion."
              githubLink="https://unstop.com/competitions/mix-matched-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1420155"
              number=""
            />
            </div>

            <div>
              <a 
                    href="https://unstop.com/college-fests/e-summit25-iiit-delhi-iiit-delhi-345569" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <div className={`relative overflow-hidden group flex items-center gap-0 hover:gap-6 transition-all duration-1000 px-6 py-2 bg-[#AA1E0F] rounded-xl text-white cursor-pointer ${isMobile ? 'text-[6vw] mt-[6vw]' : 'text-[2vw] mt-[3vw]'} md:text-[1.7vw] sm:text-[4vw]`}>
                      {/* Animated Overlay */}
                      <div className="absolute inset-0 bg-white rounded-full h-[30vw] w-[40vw] 
                        transform -translate-x-full translate-y-0 
                        transition-all duration-[800ms] group-hover:translate-x-[-40%] group-hover:translate-y-[-40%]">
                      </div>
              
                      {/* Register Text & Icon */}
                      <span className={`relative transition-all duration-1000 group-hover:text-[#AA1E0F] z-10`}>
                        MORE EVENTS
                      </span>
                      <BiChevronRight className={`relative transition-all duration-1000 group-hover:text-[#AA1E0F] z-10 ${isMobile ? 'text-[8vw]' : 'text-[3vw]'} md:text-[3vw] sm:text-[5vw]`} />
                    </div>
                  </a>
            </div>
    </div>
  )
}

export default Eventslanding