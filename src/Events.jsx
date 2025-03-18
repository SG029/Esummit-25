import React from 'react'
import herobg from "./assets/img/herobg.png";
import red from "./assets/img/red vector.png";
import { RiTimer2Line } from "react-icons/ri";
import EventsContainer from './components/events';
import banner2 from './assets/img/e1.png';
import "./styles/newevents.css"
import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import Footer from './Footer';
import conceptmarketing from './assets/img/CONCEPT MARKETING.png'
import hackforimpact from './assets/img/hack for impact.png'
import mixmatch from './assets/img/mix match.png'
import scaleup from './assets/img/scale up.png'
import rnd from './assets/img/rnd venture.png'
import drone from './assets/img/drone.png'
import filtercopy from './assets/img/filtercopy.png'
import networkinglounge from './assets/img/networkinglounge.png'
import quidditch from './assets/img/quidditch.png'
import ideathon from './assets/img/ideathon.png'
import bidbuzz from './assets/img/bidbuzz.png'
import canva from './assets/img/canva.png'
import canvaspainting from './assets/img/canvaspainting.png'
import networknurture from './assets/img/networknurture.png'
import techcrisis from './assets/img/techcrisis.png'
import echoesofchange from './assets/img/echoesofchange.png'
import entrevia from './assets/img/entrevia.png'
import empowerher from './assets/img/empowerher.png'
import ipl from './assets/img/ipl auction.png'


const workshops = [{
  link: "https://unstop.com/workshops-webinars/drone-workshop-your-first-drone-venture-e-summit25-iiit-delhi-indraprastha-institute-of-information-t-1424650",
  image: drone,
  heading: "Drone Workshop",
  date: "21st March",
  mode: "IIIT DELHI, INDIA",
  time:"TBD"
},
{
  link: "https://unstop.com/workshops-webinars/filter-copy-content-creation-workshop-e-summit25-iiit-delhi-indraprastha-institute-of-information-tec-1424579",
  image: filtercopy,
  heading: "FilterCopy Content Creation Workshop",
  date: "22nd March",
  mode: "IIIT DELHI, INDIA",
  time:"12:30-13:30"
},
{
  link: "https://unstop.com/workshops-webinars/canva-ai-workshop-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1426139",
  image: canva,
  heading: "CANVA AI WORKSHOP",
  date: "21st March",
  mode: "IIIT DELHI, INDIA",
  time: "11:30-14:30"
},
{
  link:"https://unstop.com/workshops-webinars/hdfc-mutual-fund-workshop-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-1433212",
  image:banner2,
  heading:"HDFC Mutual Fund Workshop",
  date:"22nd March",
  mode:"IIIT DELHI, INDIA",
  time:"TBD"
}]


const events = [{
  link: "https://unstop.com/hackathons/hack-for-impact-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1419428",
  image: hackforimpact,
  heading: "HACK FOR IMPACT",
  date: "21st-22nd March",
  mode: "IIIT DELHI, INDIA",
  time:"10:30-12:00"
},
{
  link: "https://unstop.com/competitions/mix-matched-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1420155",
  image: mixmatch,
  heading: "MIX-MATCHED",
  date: "21st March",
  mode: "IIIT DELHI, INDIA",
  time:"11:30-15:30"
},
{
  link: "https://unstop.com/competitions/scale-up-1-to-100-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1419464",
  image: scaleup,
  heading: "SCALE UP (1 to 100)",
  date: "22nd March",
  mode: "IIIT DELHI, INDIA",
  time:"11:30-14:30"
},
{
  link: "https://unstop.com/hackathons/0-to-1-ideathon-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1420332",
  image: ideathon,
  heading: "0 TO 1 IDEATHON",
  date: "22nd March",
  mode: "IIIT DELHI, INDIA",
  time: "9:00-17:00"
},
{
  link: "https://unstop.com/competitions/pitchcafe-80-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1420180",
  image: banner2,
  heading: "PITCHCAFE 8.0",
  date: "21st-22nd March",
  mode: "IIIT DELHI, INDIA",
  time:"11:30-15:00 & 10:00-15:00"
},
{
  link: "https://unstop.com/competitions/concept-marketing-challenge-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-del-1420328",
  image: conceptmarketing,
  heading: "CONCEPT MARKETING CHALLENGE",
  date: "21st March",
  mode: "IIIT DELHI, INDIA",
  time:"15:30-18:00"
},
{
  link: "https://unstop.com/conferences/networking-arena-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1425734",
  image: networkinglounge,
  heading: "NETWORKING LOUNGE",
  date: "21st-22nd March",
  mode: "IIIT DELHI, INDIA",
  time:"TBD"
},
{
  link: "https://unstop.com/competitions/rnd-to-venture-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1425806",
  image: rnd,
  heading: "RnD to Venture",
  date: "22nd March",
  mode: "IIIT DELHI, INDIA",
  time:"12:00-00:00"
},]


const panel = [{
  link: "https://unstop.com/conferences/sheeo-chronicles-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1425710",
  image: banner2,
  heading: "SHE.E.O CHRONICALS",
  date: "21st March",
  mode: "IIIT DELHI, INDIA",
  time:"TBD"
},
{
  link: "https://unstop.com/conferences/beyond-the-screen-unseen-untold-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit--1425716",
  image: banner2,
  heading: "Beyond the Screen: Unseen & Untold",
  date: "21st March",
  mode: "IIIT DELHI, INDIA",
  time:"TBD"
},
{
  link: "https://unstop.com/conferences/vision-to-venture-founders-blueprints-of-success-indraprastha-institute-of-information-technology-iiit-delhi-1425719",
  image: banner2,
  heading: "VISION TO VENTURE: FOUNDERS' BLUEPRINTS OF SUCCESS",
  date: "21st March",
  mode: "IIIT DELHI, INDIA",
  time:"TBD"
},
{
  link: "https://unstop.com/conferences/the-y-combinator-effect-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1425697",
  image: banner2,
  heading: "The Y Combinator Effect",
  date: "22nd March",
  mode: "IIIT DELHI, INDIA",
  time:"TBD"
},]


const allEvents = [
  {
    link: "https://unstop.com/competitions/robosoccer-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1430627",
    image: banner2,
    heading: "ROBOSOCCER",
    date: "22nd March",
    mode: "IIIT DELHI, INDIA",
    time:"14:00-16:00"
  }, {
    link: "https://unstop.com/competitions/line-follower-challenge-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1431258",
    image: banner2,
    heading: "LINE FOLLOWER CHALLENGE",
    date: "22nd March",
    mode: "IIIT DELHI, INDIA",
    time: "12:00-14:00"
  },
  {
    link: "https://unstop.com/p/roborace-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1431269",
    image: banner2,
    heading: "ROBORACE",
    date: "22nd March",
    mode: "IIIT DELHI, INDIA",
    time:"16:00-18:00"
  },
  {
    link: "https://unstop.com/competitions/line-follower-challenge-for-school-students-e-summit25-iiit-delhi-indraprastha-institute-of-information-tec-1431264",
    image: banner2,
    heading: "LINE FOLLOWER CHALLENGE FOR SCHOOL STUDENTS",
    date: "22nd March",
    mode: "IIIT DELHI, INDIA",
    time: "12:00-14:00"
  },
  {
    link: "https://unstop.com/competitions/electroholics-quidditch-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1429180",
    image: quidditch,
    heading: "ELECTROHOLICS QUIDDITCH",
    date: "21st March",
    mode: "IIIT DELHI, INDIA",
    time:"8:30-20:30"
  },

  {
    link: "https://unstop.com/conferences/startup-fair-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1426958",
    image: banner2,
    heading: "STARTUP FAIR",
    date: "21st-22nd March",
    mode: "IIIT DELHI, INDIA",
    time: "both days"
  },
  {
    link: "https://unstop.com/competitions/bidbuzz-60-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1426884",
    image: bidbuzz,
    heading: "BIDBUZZ 6.0",
    date: "21st-22nd March",
    mode: "IIIT DELHI, INDIA",
    time:"TBD"
  },
  {
    link: "https://unstop.com/events/canvas-painting-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1426978",
    image: canvaspainting,
    heading: "CANVAS PAINTING",
    date: "21st March",
    mode: "IIIT DELHI, INDIA",
    time:"12:00-16:00"
  },
  {
    link: "https://unstop.com/conferences/girl-up-network-nurture-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1428487",
    image: networknurture,
    heading: "Girl Up: Network & Nurture",
    date: "21st March",
    mode: "IIIT DELHI, INDIA",
    time:"TBD"
  },
  {
    link: "https://unstop.com/competitions/tech-crisis-challenge-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1428494",
    image: techcrisis,
    heading: "Tech Crisis Challenge",
    date: "22nd March",
    mode: "IIIT DELHI, INDIA",
    time:"TBD"
  },

  {
    link: "https://unstop.com/events/echoes-of-change-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1426954",
    image: echoesofchange,
    heading: "Echoes of Change",
    date: "22nd March",
    mode: "IIIT DELHI, INDIA",
    time:"TBD"
  },
  {
    link: "https://unstop.com/quiz/entrevia-family-feud-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1428008",
    image: entrevia,
    heading: "Entrevia: Family Feud",
    date: "21st March",
    mode: "IIIT DELHI, INDIA",
    time:"TBD"
  },
  {
    link: "https://unstop.com/conferences/empowerher-workshop-achieve-inspire-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-i-1428489",
    image: empowerher,
    heading: "EmpowerHer Workshop: Achieve & Inspire",
    date: "22nd March",
    mode: "IIIT DELHI, INDIA",
    time:"TBD"
  },
  {
    link: "https://unstop.com/events/ipl-auction-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1426893",
    image: ipl,
    heading: "IPL Auction",
    date: "21st-22nd March",
    mode: "IIIT DELHI, INDIA",
    time:"TBD"
  },
  {
    link:"https://unstop.com/events/pitch-or-perish-e-summit25-iiit-delhi-indraprastha-institute-of-information-technology-iiit-delhi-1433465",
    image:banner2,
    heading:"PITCH OR PERISH",
    date:"22nd March",
    mode:"IIIT DELHI, INDIA",
    time:"13:00-14:00"
  }
]


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
      <div className=' mt-[20vh]'>
        <h1 className='events-head text-[6vw] font-fonseca text-[#FFEBA9] font-bold mb-[0vh]'>WORKSHOPS</h1>
      </div>
      <div className="event-container mt-[15vh] width-[90%] px-5 py-5 flex flex-col" style={{
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}>

        {workshops.map((event) => {
          return (
            <EventsContainer
              link={event.link}
              image={event.image}
              heading={event.heading}
              date={event.date}
              mode={event.mode}
              time={event.time}
            />
          );
        })}
      </div>
      <div className=' mt-[10vh]'>
        <h1 className='events-head text-[6vw] font-fonseca text-[#FFEBA9] font-bold mb-[0vh]'>EVENTS</h1>
      </div>
      <div className="event-container mt-[15vh] width-[90%] px-5 py-5 flex flex-col" style={{
        
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}>

        {events.map((event) => {
          return (
            <EventsContainer
              link={event.link}
              image={event.image}
              heading={event.heading}
              date={event.date}
              mode={event.mode}
              time={event.time}
            />
          );
        })}
      </div>
      <div className=' mt-[10vh]'>
        <h1 className='events-head text-[6vw] font-fonseca text-[#FFEBA9] font-bold mb-[0vh]'>PANEL</h1>
      </div>
      <div className="event-container mt-[15vh] width-[90%] px-5 py-5 flex flex-col" style={{
        
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}>

        {panel.map((event) => {
          return (
            <EventsContainer
              link={event.link}
              image={event.image}
              heading={event.heading}
              date={event.date}
              mode={event.mode}
              time={event.time}
            />
          );
        })}
      </div>
      <div className=' mt-[10vh]'>
        <h1 className='events-head text-[6vw] font-fonseca text-[#FFEBA9] font-bold mb-[0vh]'>CLUB EVENTS</h1>
      </div>
      <div className="event-container mt-[15vh] width-[90%] px-5 py-5 flex flex-col" style={{
        
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}>

        {allEvents.map((event) => {
          return (
            <EventsContainer
              link={event.link}
              image={event.image}
              heading={event.heading}
              date={event.date}
              mode={event.mode}
              time={event.time}
            />
          );
        })}
      </div>
      <div>
        <a href="https://unstop.com/college-fests/e-summit25-iiit-delhi-iiit-delhi-345569" target='_blank'>
          <div className={`mb-10 relative overflow-hidden group flex items-center gap-0 hover:gap-6 transition-all duration-500 px-6 py-2 bg-[#AA1E0F] rounded-xl text-white cursor-pointer ${isMobile ? 'text-[6vw] mt-[6vw]' : 'text-[2vw] mt-[3vw]'} md:text-[1.7vw] sm:text-[4vw]`}>
            {/* Register Text & Icon */}
            <span className={`relative transition-all duration-1000 group-hover:text-[#AA1E0F] z-10`}>
              <img className='w-20' src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/white/Unstop-Logo-White-Small.png" alt="unstop" />
            </span>
            <BiChevronRight className={`relative z-10 ${isMobile ? 'text-[8vw]' : 'text-[3vw]'} md:text-[3vw] sm:text-[5vw]`} />
          </div>
        </a>
      </div>
      <Footer />
    </div>

  )
}

export default Events