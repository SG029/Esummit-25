import React from 'react';
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

function Register() {
  const isMobile = useIsMobile();
  return (
    <a 
      href="https://forms.gle/SNmEUkdba9jpv9fU6" 
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
          Register Now
        </span>
        <BiChevronRight className={`relative transition-all duration-1000 group-hover:text-[#AA1E0F] z-10 ${isMobile ? 'text-[8vw]' : 'text-[3vw]'} md:text-[3vw] sm:text-[5vw]`} />
      </div>
    </a>
  );
}

export default Register;
