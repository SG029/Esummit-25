import React, { useState, useEffect } from 'react';
import herobg from "./assets/img/herobg.png";
import SpeakerCard from './components/SpeakerCard.jsx'; 
import Footer from './Footer';

// Import images
import ayush from "./assets/img/Ayush Sapra.jpg";
import bipin from "./assets/img/Bipin Preet Singh.jpg";
import sandeep from "./assets/img/sandeepjain.jpg";
import neerav from "./assets/img/neerav.jpg";
import akshit from "./assets/img/akshit.jpg";
import anas from "./assets/img/anas.jpg";
import natwar from "./assets/img/natwar.jpg";
import anup from "./assets/img/anup.png";
import chitra from "./assets/img/chitra.jpg";
import dcpandey from "./assets/img/dcpandey.jpg";
import deepak from "./assets/img/deepak.jpg";
import himanshu from "./assets/img/himanshu.webp";

// Speaker data
const speakers = [
  { image: ayush, name: "AAYUSH SAPRA", designation: "Food Content Creator" },
  { image: bipin, name: "BIPIN PREET SINGH", designation: "Founder of MobiKwik" },
  { image: sandeep, name: "SANDEEP JAIN", designation: "Founder of GeeksforGeeks" },
  { image: neerav, name: "NEERAV JAIN", designation: "Founder & CEO of CityFurnish" },
  { image: akshit, name: "AKSHIT BANSAL", designation: "Co-Founder of Statiq" },
  { image: anas, name: "MUHAMMAD ANAS", designation: "Founder & CEO of Enord" },
  { image: natwar, name: "NATWAR AGRAWAL", designation: "Founder, and Director of Bucca Bucci" },
  { image: anup, name: "ANUP GUPTA", designation: "Founder OF MathonGO" },
  { image: chitra, name: "CHITRA GURNANI", designation: "CEO at Thrillophilia.com" },
  { image: dcpandey, name: "DC PANDEY", designation: "Renowned Physics Teacher" },
  { image: deepak, name: "DEEPAK SOLANKI", designation: "CEO at Thrillophilia.com" },
  { image: himanshu, name: "HIMANSHU", designation: "Founder and CEO of Cograd" },
];

// useIsMobile Hook
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

function Speaker() {
  const isMobile = useIsMobile();

  return (
    <div
      className='w-full min-h-[110vh] flex flex-col items-center justify-center'
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className={`speak-head ${isMobile ? 'text-[10vw]' : 'text-[6vw]'} font-fonseca text-[#FFEBA9] mt-[15vh] font-bold mb-[0vh]`}>
        <span>OUR SPEAKERS</span>
      </h1>
      <div className='speakers-wrapper w-[90vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center'>
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            backgroundImage={speaker.image}
            speakerName={speaker.name}
            speakerDesignation={speaker.designation}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Speaker;