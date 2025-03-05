<<<<<<< HEAD
import React from 'react';
import { BiChevronRight } from "react-icons/bi";

function Register() {
  return (
    <a 
      href="https://forms.gle/SNmEUkdba9jpv9fU6" 
      target="_blank" 
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div className="relative overflow-hidden group flex items-center gap-0 hover:gap-4 transition-all duration-500 px-8 py-2 bg-[#AA1E0F] rounded-xl text-[2vw] mt-[3vw] text-white cursor-pointer">
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-white rounded-full h-[30vw] w-[40vw] 
          transform -translate-x-full translate-y-0 
          transition-all duration-[800ms] group-hover:translate-x-[-40%] group-hover:translate-y-[-40%]">
        </div>

        {/* Register Text & Icon */}
        <span className="relative transition-all duration-[1200ms] group-hover:text-[#AA1E0F] z-10">
          Register Now
        </span>
        <BiChevronRight className="text-[3vw] relative transition-all duration-[1200ms] group-hover:text-[#AA1E0F] z-10" />
      </div>
    </a>
  );
}

export default Register;
=======
function Register() {
    return (
        <div className="bg-red">
            <button className = " text-white font-bold py-2 px-4 rounded-full">
                Register
            </button>
        </div>
    )
}

export default Register
>>>>>>> a9adcf86c683abb7d139f50968504ab3fc50494e
