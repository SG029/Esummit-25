import React from "react";
import "../styles/speaker.css"

const SpeakerCard = ({
  backgroundImage,
  speakerName,
  speakerDesignation,
  className = "", // Default to empty string if no additional classes are passed
}) => {
  return (
    <div
      className={`speaker-div w-[15vw] h-[80%] rounded-3xl shadow-xl shadow-[#000]/70 bg-cover bg-center bg-no-repeat ${className}`} // Add dynamic className
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamic background image
    >
      {/* Overlay with gradient */}
      <div
        className="overlayyy w-full h-full flex flex-col justify-end rounded-3xl"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 70%)", // Gradient from black to transparent
        }}
      >
        <h3 className="text-3xl font-fonseca text-[#FFEBA9] ml-[1vw] mb-0">
          {speakerName} {/* Dynamic speaker name */}
        </h3>
        <h3 className="text-md font-opensanslight text-[#FFEBA9] ml-[1vw] mb-3 -mt-2">
          {speakerDesignation} {/* Dynamic speaker designation */}
        </h3>
      </div>
    </div>
  );
};

export default SpeakerCard;