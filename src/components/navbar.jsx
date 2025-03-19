import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/E-summit logo.png";
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
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const scrollToSpeakers = () => {
    navigate("/speakers");
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const scrollToEvents = () => {
    navigate("/events");
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const scrollToFooter = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }, 100);
  };

  return (
    <nav className="logooo flex items-center justify-between p-4 text-yellow-50 z-50 absolute w-full bg-black fixed bg-black/70">
      {/* Logo on the left */}
      <Link to="/home">
        <img
          src={logo}
          alt={logo}
          className="h-10 sm:h-14 md:h-12 cursor-pointer"
        />
      </Link>

      {/* Centered Navlinks */}
      <div className="flex-1 flex justify-center ml-[15vw]">
        {isMenuOpen && (
          <ul
            style={{
              transition: "all 0.5s ease in-out",
              fontSize: "1.5rem",
            }}
            className={`${
              isHamburgerVisible
                ? "fixed inset-0 flex flex-col items-center justify-center space-y-4 bg-black text-white p-4 z-50"
                : "flex space-x-4 sm:space-x-6 md:space-x-10"
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
              Speakers
            </li>
            <li className="nav-bar cursor-pointer hover:text-[#059196]" onClick={scrollToFooter}>
              Contact Us
            </li>
            {/* Register Button in Hamburger Menu */}
            {isHamburgerVisible && (
              <li className="nav-bar">
                <a
                  href="https://unstop.com/college-fests/e-summit25-iiit-delhi-iiit-delhi-345569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] font-bold bg-[#AA1E0F] text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-md hover:bg-[#fff] hover:text-black transition-all"
                >
                  Register for Events
                </a>
              </li>
            )}
            {!isButtonVisible && (
              <div>
                <IoArrowBackOutline
                  style={{
                    color: "#059196",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            )}
          </ul>
        )}
      </div>

      {/* Silent DJ and Register Buttons */}
      <div className="flex items-center space-x-4 ">
        {/* Silent DJ Button */}
        <button
          className="font-['Inter'] mr-[10px] font-bold bg-[#059196] text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-md hover:bg-[#fff] hover:text-black transition-all"
        >
          <a href="https://forms.gle/yQhcL3da3gNLHLNy8" target="_blank" rel="noopener noreferrer">
            Silent DJ
          </a>
        </button>

        {/* Register Button */}
        {isButtonVisible && (
          <button
            className="font-['Inter'] font-bold bg-[#AA1E0F] text-white px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-md hover:bg-[#fff] hover:text-black transition-all"
          >
            <a href="https://unstop.com/college-fests/e-summit25-iiit-delhi-iiit-delhi-345569" target="_blank" rel="noopener noreferrer">
              Register for Events
            </a>
          </button>
        )}
      </div>

      {/* Hamburger Menu */}
      {isHamburgerVisible && (
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
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