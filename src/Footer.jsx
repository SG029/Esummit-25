import React, { useRef } from "react";
import herobg from "./assets/img/herobg.png"; 
import esummit from "./assets/img/E-summit logo.png"; // Ensure this path is correct
import ecell from "./assets/img/ecell.png"; // Ensure this path is correct
import Footerlinks from "../src/components/Footerlinks";
import Footersocials from '../src/components/Footersocials';
import { FaInstagram } from "react-icons/fa"; // Instagram icon
import { FaLinkedinIn } from "react-icons/fa"; // LinkedIn icon
import mail from "./assets/img/mail.png"; // Ensure this path is correct
import "./styles/footer.css";
import {useNavigate} from "react-router-dom";


function Footer({aboutRef, eventsRef, speakersRef, sponsorsRef}) {
  const mailboxRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to About section
  const scrollToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home route if not already there
    }
    setTimeout(() => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to allow the route change to take effect
  };

  const scrollToEvent = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home route if not already there
    }
    setTimeout(() => {
      if (eventsRef.current) {
        eventsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to allow the route change to take effect
  };

  const scrollToSpeaker = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home route if not already there
    }
    setTimeout(() => {
      if (speakersRef.current) {
        speakersRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to allow the route change to take effect
  };

  const scrollToSponser = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home route if not already there
    }
    setTimeout(() => {
      if (sponsorsRef.current) {
        sponsorsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to allow the route change to take effect
  };

  // Mailbox animation on mouse move
  const handleMouseMove = (e) => {
    const mailbox = mailboxRef.current;

    if (mailbox) {
      const rect = mailbox.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      const x = offsetX * 0.3;
      const y = offsetY * 0.5;

      requestAnimationFrame(() => {
        mailbox.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  };

  // Reset mailbox position on mouse leave
  const handleMouseLeave = () => {
    if (mailboxRef.current) {
      mailboxRef.current.style.transform = "translate(0, 0)";
    }
  };

  // Scroll to section on link click
  const handleClick = (page) => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className='w-full min-h-[50vh] flex flex-col items-center justify-center'
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      <div
        className='footer-main w-[95vw] h-[52vh] flex items-center justify-between mt-10 rounded-xl mb-5 p-10'
        style={{
          backgroundColor: "rgba(4, 108, 112, 0.3)", // Semi-transparent background
          backdropFilter: "blur(10px)", // Frosted glass effect
          border: "2px solid rgba(4, 108, 112, 0.3)", // Semi-transparent border
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        {/* Left Section: Logo and Description */}
        <div className='img-main flex flex-col items-start justify-center w-1/3'>
        <div>
          <div className='img-div flex justify-start items-center'>
            <div>
              <img src={esummit} alt="E-Summit Logo" className='w-[6vw] h-[6vw]' />
            </div>
            <div>
              <img src={ecell} alt="E-Cell Logo" className='w-[8.3vw]' />
            </div>
          </div>
          <div>
            <h3 className='w-6/6 font-opensanslight text-[1.3vw] mt-2 leading-7 text-white'>
              E-Summit IIIT Delhi is North India's one of the largest entrepreneurial fest, organized by the Entrepreneurship Cell to inspire and empower future leaders.
            </h3>
          </div>
          {/* Mailbox */}
          {/* <h3 className='text-[2vw] font-bold text-white text-center font-fonseca ml-3 mt-2'>Contact Us</h3> */}
          <a href="mailto:ecell@iiitd.ac.in">
            <div
              ref={mailboxRef}
              className="mailbox inline-flex items-center bg-[#AA1E0F] text-white hover:cursor-pointer justify-center my-3 p-3 rounded-md
                      transition-colors duration-500 ease-in-out group hover:bg-white hover:text-black"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={mail}
                alt="Mail Icon"
                className="mail-icon w-7 transition-all duration-300 group-hover:filter group-hover:brightness-0"
              />
              <h2 className="text-xl pl-2">esummit@iiitd.ac.in</h2>
            </div>
          </a>
        </div>
        <hr  className="line bg-white"/>
        <h3 className="w-6/6 font-opensanslight text-[1.3vw] mt-2 leading-7 text-white">Made with ❣️ by WebDev Team </h3>

        </div>

        {/* Middle Section: Explore and Socials */}
        <div className='social-links flex gap-[4vw]'>
          {/* Explore Links */}
          <div className="Explore">
            <h3 className='text-[2vw] font-bold text-white text-center font-fonseca mb-3'>Explore</h3>
            <div className="navlinks flex flex-col gap-2">
              <Footerlinks text="About" onClick={scrollToAbout} />
              <Footerlinks text="Events" onClick={scrollToEvent} />
              <Footerlinks text="Speakers" onClick={scrollToSpeaker} />
              <Footerlinks text="Sponsors" onClick={scrollToSponser} />
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className='text-[2vw] font-bold text-white text-center font-fonseca mb-3'>Socials</h3>
            <div className='flex flex-col gap-2 text-white'>
              <Footersocials text="LinkedIn" icon={FaLinkedinIn} onClick={() => window.open("https://www.linkedin.com/company/iiitdecell/?originalSubdomain=in", "_blank")} />
              <Footersocials text="Instagram" icon={FaInstagram} onClick={() => window.open("https://www.instagram.com/esummit_iiitd/?hl=en", "_blank")} />
            </div>
          </div>
        </div>

        {/* Right Section: Location Map */}
        <div className='locationnn w-1/3 flex flex-col items-center justify-center'>
          <h3 className='text-[2vw] font-bold text-white text-center font-fonseca mb-3'>Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7932547740966!2d77.26986337495357!3d28.545933338009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1741289692201!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;