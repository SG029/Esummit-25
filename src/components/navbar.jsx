import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import logo from "../assets/E-summit logo.png"; // Import the logo image
import { IoArrowBackOutline } from "react-icons/io5";
import "../styles/navbar.css";

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

function Navbar({ heroRef, aboutRef, speakersRef, eventsRef, footerRef }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const getWidth = () => window.innerWidth;

  const isMobile = useIsMobile();


  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = getWidth();
      setIsButtonVisible(width >= 1000);
      setIsHamburgerVisible(width < 1000);
      setIsMenuOpen(width >= 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToHero = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile){
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const scrollToSpeakers = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (speakersRef.current) {
        speakersRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile){
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const scrollToEvents = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (eventsRef.current) {
        eventsRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile){
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const scrollToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile){
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const scrollToFooter = () => {
    isMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile){
        setIsMenuOpen(false);
      }
    }, 100);
  };

  return (
    <nav className="logooo flex items-center justify-between p-4 text-yellow-50 z-50 absolute w-full bg-black fixed opacity-70">
      {/* Logo on the left */}
      <Link to="/home">
        <img
          src={logo}
          alt={logo}
          className="h-10 sm:h-14 md:h-12 cursor-pointer"
            // Add cursor-pointer for better UX
          />
          </Link>
          {isMenuOpen && (
        <ul
          style={{
            transition: "all 0.5s ease in-out",
            fontSize: "1.5rem",
          }}
          className={`${
            isHamburgerVisible
              ? "fixed inset-0 flex flex-col items-center justify-center space-y-4 bg-black text-white p-4 z-50"
              : "fixed left-1/2 transform -translate-x-1/2 flex space-x-4 sm:space-x-6 md:space-x-10"
          } text-sm sm:text-lg md:text-[1.5vw] font-opensanslight transition-colors duration-500 whitespace-nowrap`}
        >
          <li className="nav-bar cursor-pointer hover:text-[#059196]" onClick={scrollToHero}>
            Home
          </li>
          <li className="nav-bar cursor-pointer hover:text-[#059196]" onClick={scrollToAbout}>
            About
          </li>
          <li className="nav-bar cursor-pointer hover:text-[#059196]" onClick={scrollToEvents}>
            Events
          </li>
          <li className="nav-bar cursor-pointer hover:text-[#059196]" onClick={scrollToSpeakers}>
            Speakers {/* Use Link for navigation */}
          </li>
          <li className="nav-bar cursor-pointer hover:text-[#059196]" onClick={scrollToFooter}>
          Contact Us
          </li>
          {!isButtonVisible && (

            <div>
            <IoArrowBackOutline style={{
              color: "#059196",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out"
            }} 
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.5)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
            </div>
          )}
        </ul>
        )}
                {/* Magnetic Register Button (Faster Movement) */}
      {isButtonVisible && (
        <motion.button
          className="font-['Inter'] font-bold bg-[#AA1E0F] text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-md mr-4 sm:mr-5 md:mr-6 hover:bg-[#fff] hover:text-black transition-all"
          onMouseMove={(e) => {
            const { left, top, width, height } = e.target.getBoundingClientRect();
            setButtonPos({
              x: (mousePos.x - (left + width / 2)) * 0.8,
              y: (mousePos.y - (top + height / 2)) * 0.8,
            });
          }}
          onMouseLeave={() => setButtonPos({ x: 0, y: 0 })}
          animate={{
            x: buttonPos.x,
            y: buttonPos.y,
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 8,
          }}
        >
          <a href="https://forms.gle/SNmEUkdba9jpv9fU6" target="_blank">
            Register
          </a>
        </motion.button>
      )}

      {/* Hamburger Menu */}
      {isHamburgerVisible && (
        <div 
          
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RxCross2 className="text-3xl sm:text-4xl mr-4 sm:mr-5 md:mr-6" />
          ) : (
            <RxHamburgerMenu className="text-3xl sm:text-4xl mr-4 sm:mr-5 md:mr-6" />
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;