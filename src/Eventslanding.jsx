import React from 'react';
import herobg from "./assets/img/herobg.png"; 
import banner2 from './assets/img/e1.png';
// import "@fontsource/open-sans-condensed"
import EventsContainer from './components/events';
import "./styles/newevents.css"
import back from "./assets/img/red vector.png";
import {useNavigate} from "react-router-dom";

import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from "react";

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

function Eventslanding() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div
          className='e-back backShader w-full min-h-[110vh] flex flex-col items-center justify-center '
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: 'cover', // Ensures the image covers the entire container
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          }}
        >
          <div style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
          }}>
            <div className='top-0' >
              <div>
                <h1 className='text-[4vw] font-bold text-center font-fonseca mt-[10vw]'>
                  <span className='text-amber-200'>FEATURED </span> 
                  <span className='e-text text-red-700'>EVENTS</span>
                </h1>
              </div>
              <div className='w-[100%] text-center '>
                <p className='text-amber-200 text-[2.5vw] font-opensanslight'>Explore our lineup of exciting events designed to inspire, educate and connect entrepreneurs at all stages</p>
              </div>
            </div>
            
            <div className='event-container mt-10'>
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
            </div>
          </div>
            <div>
              <a 
                    onClick={() => navigate('/events')}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <div className={`relative overflow-hidden group flex items-center gap-0 hover:gap-6 transition-all duration-1000 px-6 py-2 bg-[#AA1E0F] rounded-xl text-white cursor-pointer ${isMobile ? 'text-[6vw] mt-[6vw]' : 'text-[2vw] mt-[3vw]'} md:text-[1.7vw] sm:text-[4vw]`}>
                      {/* Animated Overlay */}
                      <div className="absolute inset-0 bg-white rounded-full h-[30vw] w-[40vw] 
                        transform -translate-x-full translate-y-0 
                        transition-all duration-[800ms] group-hover:translate-x-[-40%] group-hover:translate-y-[-40%]">
                      </div>
              
                      {/* Register Text & Icon */}
                      <span className={`relative transition-all duration-1000 group-hover:text-[#AA1E0F] z-10`}>
                        MORE EVENTS
                      </span>
                      <BiChevronRight className={`relative transition-all duration-1000 group-hover:text-[#AA1E0F] z-10 ${isMobile ? 'text-[8vw]' : 'text-[3vw]'} md:text-[3vw] sm:text-[5vw]`} />
                    </div>
                  </a>
            </div>
    </div>
  )
}

export default Eventslanding