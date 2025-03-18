import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

// Custom hook to check if the screen is mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

const Timer = () => {
  const isMobile = useIsMobile(); // Use the custom hook

  const calculateTimeLeft = () => {
    const eventDate = dayjs('2025-03-21');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    if (difference <= 0) {
      return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
    }

    return {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((difference / (1000 * 60)) % 60), // Fixed calculation
      Seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center text-white mt-10 gap-4">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div
          key={index}
          className="text-center border-2 border-white py-3 w-[20vw] rounded-lg bg-black/40 backdrop-blur-md"
        >
          {/* Upper p element */}
          <p className={`text-2xl ${isMobile ? 'text-[6vw]' : 'text-[5vw]'}`}>{value}</p>
          {/* Bottom p element */}
          <p className={`text-[1.7vw] -mt-[0vw] font-light ${isMobile ? 'text-[4vw]' : 'text-[5vw]'}`}>
            {unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timer;