import React from "react";
import herobg from "./assets/img/herobg.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import speaker from "./assets/img/speaker.png"; // Import the speaker image
import SpeakerCard from "./components/SpeakerCard.jsx"; // Import the reusable component
import '../src/styles/Speakerslanding.css';

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
        <h1 className="text-[4.5vw] font-bold text-white text-center font-fonseca mt-[5vh]">
          OUR <span className="text-[#059196]">SPEAKERS</span>
        </h1>
        <h3 className="w-5/6 text-[2.5vw] text-center text-white font-opensanslight leading-10 about-text">
        Learn from industry leaders, successful entrepreneurs, and innovators who are shaping the future of business and technology.
        </h3>
      </motion.div>

      <div className="marquee h-[55vh] w-full mt-[10vh] flex justify-center gap-[3vw] overflow-hidden">
  {/* First marquee-inner */}
  <div className="marquee-inner flex gap-[3vw]">
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
  </div>
  <div className="marquee-inner flex gap-[3vw]">
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
  </div>
  <div className="marquee-inner flex gap-[3vw]">
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
  </div>

  {/* Second marquee-inner (duplicate of the first) */}
  <div className="marquee-inner flex gap-[3vw]">
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mt-[10vh]"
    />
    <SpeakerCard
      backgroundImage={speaker}
      speakerName="SPEAKER"
      speakerDesignation="Designation"
      className="mb-0"
    />
  </div>
</div>
    </div>
  );
}

export default Speakerslanding;