import React from "react";
import arrow from "../assets/img/tilted-arrow.png";
import './Projectbar.css'

function Projectbar({ image, heading, description, githubLink, number }) {
  return (
    <div
  className="mainn flex items-center justify-between text-white p-6 border-b-2 border-white pt-10 
             transition-all duration-300 ease-in-out group gap-[10vw] mb-5"
  style={{
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
    backdropFilter: "blur(5px)", // Frosted glass effect
    borderColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent border
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#FFFFFF"; // White background on hover
    e.currentTarget.style.backdropFilter = "none"; // Remove blur on hover
    e.currentTarget.style.color = "#000000"; // Black text on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // Restore semi-transparent background
    e.currentTarget.style.backdropFilter = "blur(5px)"; // Restore blur
    e.currentTarget.style.color = "#FFFFFF"; // Restore white text
  }}
>
      <div className="leftside font-fonseca w-[30rem]">
        <div className="probar-head-cont h-[4rem] overflow-hidden">
          <div className="group-hover:translate-y-[-50%] transition-all duration-300 ease-out">
          <h2 className="probar-head text-[3rem] pb-5">
            {heading} 
            {/* <span className="pl-[5rem] text-[2rem]">({number})</span> */}
          </h2>
          <h2 className="probar-head text-[3rem] pb-5">
            {heading}
            {/* <span className="pl-[5rem] text-[2rem]">({number})</span> */}
          </h2>
          </div>
          
        </div>
        
        <p className=" mt-5 probar-desc text-[#8B8B8B] text-[1.4vw] font-light pb-4 transition-colors font-opensanslight duration-300 ease-in-out group-hover:text-black">
          {description}
        </p>
      </div>
      <div className="middle">
        <img src={image} alt="" className="probar-img w-[15rem] h-auto" />
      </div>
      <div
        className="rightside hover:cursor-pointer h-7 overflow-hidden"
        onClick={() => window.open(githubLink, "_blank")}
      >
        <div className="read-cont hover:translate-y-[-50%] transition-all duration-300 ease-out">
          <div className="read-probar-more font-opensanslight text-[1.1rem] font-light flex items-center justify-center group relative overflow-hidden group-hover:text-black">
            Register Now
            <img
              src={arrow}
              alt=""
              className="w-7 h-7 ml transition-transform duration-300 ease-in-out group-hover:filter group-hover:brightness-0"
            />
          </div>
          {/* Duplicate for the second "Read more" */}
          <div className="read-probar-more font-opensanslight text-[1.1rem] font-light flex items-center justify-center group relative overflow-hidden group-hover:text-black">
            Register Now
            <img
              src={arrow}
              alt=""
              className="w-7 h-7 ml transition-transform duration-300 ease-in-out group-hover:filter group-hover:brightness-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectbar;
