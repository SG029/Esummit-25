import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Timer = () => {

  const calculateTimeLeft = () => {
    const eventDate = dayjs('2025-03-21');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60), // Fixed calculation
      seconds: Math.floor((difference / 1000) % 60),
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
          className="text-center border-2 border-white py-3 w-[11vw] rounded-lg bg-black/40 backdrop-blur-md"
        >
          <p className="text-2xl">{value}</p>
          <p className="text-[1.7vw] -mt-[0vw] font-light">{unit}</p>
        </div>
      ))}
    </div>
  );
};

export default Timer;
