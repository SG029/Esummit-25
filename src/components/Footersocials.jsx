import React from "react";

function Footersocials({ text, icon: Icon ,onClick}) {
  return (
    <div className="h-7 overflow-hidden font-opensanslight" onClick={onClick}>
      <div className="hover:translate-y-[-50%] transition-all duration-300 ease-out hover:text-[#8B8B8B] flex flex-col">
        <a href="#" className="text-[1.5vw] pb-1 flex items-center gap-2">
          {Icon && <Icon className="text-2xl" />} {/* Display the icon */}
          {text}
        </a>
        <a href="#" className="text-[1.5vw] pb-1 flex items-center gap-2">
          {Icon && <Icon className="text-2xl" />} {/* Display the icon */}
          {text}
        </a>
      </div>
    </div>
  );
}

export default Footersocials;
