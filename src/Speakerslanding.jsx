import React from "react";
import herobg from "./assets/img/herobg.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import speaker from "./assets/img/speaker.png"; // Import the speaker image
import SpeakerCard from "./components/SpeakerCard.jsx"; // Import the reusable component
import '../src/styles/Speakerslanding.css';
import ayush from './assets/img/Ayush Sapra.jpg'
import bipin from './assets/img/Bipin Preet Singh.jpg'
import sandeep from './assets/img/sandeepjain.jpg'
import neerav from './assets/img/neerav.jpg'
import akshit from './assets/img/akshit.jpg'
import anugreh from './assets/img/anugreh.jpg'
import natwar from './assets/img/natwar.jpg'
import smit from './assets/img/smit.jpg'


function Speakerslanding() {
  // Define the useInView hook for the first element
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start hidden, slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to visible
  };

  return (
    <div
      className="w-full min-h-[100vh] flex flex-col items-center justify-center about-container"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Wrap the content in a motion.div and apply the animation */}
      <motion.div
        ref={ref1} // Attach the ref
        initial="hidden" // Initial animation state
        animate={inView1 ? "visible" : "hidden"} // Animate when in view
        variants={fadeInUp} // Apply the animation variants
        className="about justify-center items-center flex flex-col mt-0"
      >
        <h1 className="text-[4.5vw] font-bold text-[#FFEBA9] text-center font-fonseca mt-[5vh]">
          OUR <span className="text-[#059196]">SPEAKERS</span>
        </h1>
        <h3 className="w-5/6 text-[2.5vw] text-center text-[#FFEBA9] font-opensanslight leading-10 about-text">
        Learn from industry leaders, successful entrepreneurs, and innovators who are shaping the future of business and technology.
        </h3>
      </motion.div>

      <div className="marquee h-[55vh] w-full mt-[10vh] flex justify-center gap-[3vw] overflow-hidden">
  {/* First marquee-inner */}
  <div className="marquee-inner flex gap-[3vw]">
    <SpeakerCard
      backgroundImage={ayush}
      speakerName="AYUSH SAPRA"
      speakerDesignation="Food Content Creator"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={bipin}
      speakerName="BIPIN PREET SINGH"
      speakerDesignation="Founder of MobiKwik"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={sandeep}
      speakerName="SANDEEP JAIN"
      speakerDesignation="Founder of GeeksforGeeks"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={neerav}
      speakerName="NEERAV JAIN"
      speakerDesignation="Founder & CEO of CityFurnish"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={akshit}
      speakerName="AKSHIT BANSAL"
      speakerDesignation="Co-Founder of Statiq "
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={anugreh}
      speakerName="ANUGREH"
      speakerDesignation="Heading Serenico Labs"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={natwar}
      speakerName="NATWAR AGRAWAL"
      speakerDesignation="Founder, and Director of Bucca Bucci"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={smit}
      speakerName="SMIT GADA"
      speakerDesignation="Founder OF Bluer"
      className="mb-0"
    />
  </div>
  <div className="marquee-inner flex gap-[3vw]">
    <SpeakerCard
      backgroundImage={ayush}
      speakerName="AYUSH SAPRA"
      speakerDesignation="Food Content Creator"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={bipin}
      speakerName="BIPIN PREET SINGH"
      speakerDesignation="Founder of MobiKwik"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={sandeep}
      speakerName="SANDEEP JAIN"
      speakerDesignation="Founder of GeeksforGeeks"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={neerav}
      speakerName="NEERAV JAIN"
      speakerDesignation="Founder & CEO of CityFurnish"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={akshit}
      speakerName="AKSHIT BANSAL"
      speakerDesignation="Co-Founder of Statiq "
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={anugreh}
      speakerName="ANUGREH"
      speakerDesignation="Heading Serenico Labs"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={natwar}
      speakerName="NATWAR AGRAWAL"
      speakerDesignation="Founder, and Director of Bucca Bucci"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={smit}
      speakerName="SMIT GADA"
      speakerDesignation="Founder OF Bluer"
      className="mb-0"
    />
  </div>
  <div className="marquee-inner flex gap-[3vw]">
    <SpeakerCard
      backgroundImage={ayush}
      speakerName="AYUSH SAPRA"
      speakerDesignation="Food Content Creator"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={bipin}
      speakerName="BIPIN PREET SINGH"
      speakerDesignation="Founder of MobiKwik"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={sandeep}
      speakerName="SANDEEP JAIN"
      speakerDesignation="Founder of GeeksforGeeks"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={neerav}
      speakerName="NEERAV JAIN"
      speakerDesignation="Founder & CEO of CityFurnish"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={akshit}
      speakerName="AKSHIT BANSAL"
      speakerDesignation="Co-Founder of Statiq "
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={anugreh}
      speakerName="ANUGREH"
      speakerDesignation="Heading Serenico Labs"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={natwar}
      speakerName="NATWAR AGRAWAL"
      speakerDesignation="Founder, and Director of Bucca Bucci"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={smit}
      speakerName="SMIT GADA"
      speakerDesignation="Founder OF Bluer"
      className="mb-0"
    />
  </div>
  
  
</div>
    </div>
  );
}

export default Speakerslanding;