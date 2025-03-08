// components/Loader.jsx
import React from "react";
import loader from "../assets/loader.mp4"; // Correct import path

const Loader = ({ onVideoEnd }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <video
        autoPlay
        muted
        className="w-full h-full object-cover"
        onEnded={onVideoEnd} // Trigger onVideoEnd when the video ends
      >
        <source src={loader} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;