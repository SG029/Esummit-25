import React from 'react'
import herobg from "./assets/img/herobg.png"; 
import red from "./assets/img/red vector.png";
import EventsContainer from './components/events';
import banner2 from './assets/img/e1.png';
import "./styles/newevents.css"
import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";


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

function Events() {
  const isMobile = useIsMobile();

  return (
    <div
          className='w-full min-h-[110vh] flex flex-col items-center justify-center '
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: 'cover', // Ensures the image covers the entire container
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          }}
        >
            <div className= "event-container mt-[15vh] px-5 py-5" style={{
              backgroundImage: `url(${red})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
            }}>
              <EventsContainer
                  link={"https://unstop.com/college-fests/e-summit25-iiit-delhi-iiit-delhi-345569"}
                  image={banner2}
                  heading="PITCHCAFE 8.0"
                  date="START 6th March 2022"
                  mode="Virtual"
                />
                <EventsContainer
                link={"https://unstop.com/competitions/concept-marketing-challenge-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-del-1420328"}
                  image={banner2}
                  heading="CONCEPT MARKETING CHALLENGE"
                  date="START 6th March 2022"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/hackathons/hack-for-impact-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1419428"}
                  image={banner2}
                  heading="HACK FOR IMPACT"
                  date="START 7th March 2022"
                  mode="IIIT DELHI, INDIA"
                />
                <EventsContainer
                  link={"https://unstop.com/competitions/scale-up-1-to-100-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1419464"}
                  image={banner2}
                  heading="SCALE UP (1 to 100)"
                  date="START 6th March 2022"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/competitions/mix-matched-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1420155"}
                  image={banner2}
                  heading="MIX-MATCHED"
                  date="START 6th March 2022"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/hackathons/0-to-1-ideathon-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1420332"}
                  image={banner2}
                  heading="0 TO 1 IDEATHON"
                  date="START 6th March 2022"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/competitions/rnd-to-venture-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1425806"}
                  image={banner2}
                  heading="RnD TO VENTURE"
                  date="21st-22nd March 2022"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/workshops-webinars/drone-workshop-your-first-drone-venture-e-summit25-iiit-delhi-indraprastha-institute-of-information-t-1424650"}
                  image={banner2}
                  heading="DRONE WORKSHOP"
                  date="21st March 2022"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/conferences/sheeo-chronicles-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1425710"}
                  image={banner2}
                  heading="SHE.E.O CHRONICALS"
                  date="Releasing soon"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/conferences/the-y-combinator-effect-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1425697"}
                  image={banner2}
                  heading="THE Y COMBINATOR EFFECT"
                  date="Releasing soon"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/workshops-webinars/filter-copy-content-creation-workshop-e-summit25-iiit-delhi-indraprastha-institute-of-information-tec-1424579"}
                  image={banner2}
                  heading="FILTERCOPY CONTENT CREATION WORKSHOP"
                  date="Releasing soon"
                  mode="IIIT DELHI, INDIA"
                  />
                <EventsContainer
                  link={"https://unstop.com/conferences/beyond-the-screen-unseen-untold-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit--1425716"}
                  image={banner2}
                  heading="BEYOND THE SCREEN: UNSEEN & UNTOLD"
                  date="Releasing soon"
                  mode="IIIT DELHI, INDIA"
                  />
            </div>
          <div>
            <a href="https://unstop.com/college-fests/e-summit25-iiit-delhi-iiit-delhi-345569">
              <div className={`relative overflow-hidden group flex items-center gap-0 hover:gap-6 transition-all duration-1000 px-6 py-2 bg-[#AA1E0F] rounded-xl text-white cursor-pointer ${isMobile ? 'text-[6vw] mt-[6vw]' : 'text-[2vw] mt-[3vw]'} md:text-[1.7vw] sm:text-[4vw]`}>                  
                {/* Register Text & Icon */}
                <span className={`relative transition-all duration-1000 group-hover:text-[#AA1E0F] z-10`}>
                  <img className='w-20' src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/white/Unstop-Logo-White-Small.png" alt="unstop" />
                </span>
                <BiChevronRight className={`relative z-10 ${isMobile ? 'text-[8vw]' : 'text-[3vw]'} md:text-[3vw] sm:text-[5vw]`} />
              </div>
            </a>
          </div>
    </div>

  )
}

export default Events