import React from "react";

function Footerlinks({ text, onClick }) {
  return (
    <div
      className="h-7 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className=" hover:translate-y-[-50%] font-opensanslight transition-all duration-300 ease-out text-white hover:text-[#fff] flex flex-col">
        <p className="text-[1.5vw] pb-1">{text}</p>
        <p className="text-[1.5vw] pb-1">{text}</p>
      </div>
    </div>
  );
}

export default Footerlinks;
