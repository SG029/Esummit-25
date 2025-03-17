import React from 'react';
import herobg from "./assets/img/herobg.png"; 
import banner2 from './assets/img/e1.png';
// import "@fontsource/open-sans-condensed"
import EventsContainer from './components/events';
import "./styles/newevents.css"
import redvector from "./assets/img/red vector.png";
import {useNavigate} from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import canva from './assets/img/canva.png'
import drone from './assets/img/drone .png'
import filtercopy from './assets/img/filtercopy.png'


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

const workshops = [{
  link: "https://unstop.com/workshops-webinars/drone-workshop-your-first-drone-venture-e-summit25-iiit-delhi-indraprastha-institute-of-information-t-1424650",
  image: drone,
  heading: "Drone Workshop",
  date: "21st March",
  mode: "IIIT DELHI, INDIA"
},
{
  link: "https://unstop.com/workshops-webinars/filter-copy-content-creation-workshop-e-summit25-iiit-delhi-indraprastha-institute-of-information-tec-1424579",
  image: filtercopy,
  heading: "FilterCopy Content Creation Workshop",
  date: "22nd March",
  mode: "IIIT DELHI, INDIA"
},
{
  link: "https://unstop.com/workshops-webinars/canva-ai-workshop-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1426139",
  image: canva,
  heading: "CANVA AI WORKSHOP",
  date: "21st March",
  mode: "IIIT DELHI, INDIA"
}]


function Workshops() {
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
            // backgroundImage: `url(${redvector})`,
            // backgroundSize: 'cover',
            // width: '100%',
            // height: '100%',
          }}>
            <div className='top-0 flex flex-col items-center justify-center mb-[10vh]' >
              <div>
                <h1 className='text-[4.5vw] font-bold text-center font-fonseca mt-[10vw]'>
                  <span className='text-amber-200'>PAID </span> 
                  <span className='e-text text-red-700'>WORKSHOPS</span>
                </h1>
              </div>
              <div className='w-[80%] text-center '>
                <p className='text-amber-200 text-[2.5vw] font-opensanslight leading-10'>Explore our lineup of exciting events designed to inspire, educate, and connect entrepreneurs at all stages.</p>
              </div>
            </div>
            
            <div className='event-container mt-10'>
            {workshops.map((event) => {
          return (
            <EventsContainer
              link={event.link}
              image={event.image}
              heading={event.heading}
              date={event.date}
              mode={event.mode}
            />
          );
        })}
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
                        transition-all duration-[700ms] group-hover:translate-x-[-40%] group-hover:translate-y-[-40%]">
                      </div>
              
                      {/* Register Text & Icon */}
                      <span className={`relative transition-all duration-500 group-hover:text-[#AA1E0F] z-10`}>
                        MORE WORKSHOPS
                      </span>
                      <BiChevronRight className={`relative transition-all duration-500 group-hover:text-[#AA1E0F] z-10 ${isMobile ? 'text-[8vw]' : 'text-[3vw]'} md:text-[3vw] sm:text-[5vw]`} />
                    </div>
                  </a>
            </div>
    </div>
  )
}

export default Workshops;