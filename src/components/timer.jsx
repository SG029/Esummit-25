import React, { useState, useEffect } from 'react';

const Timer = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('March 22, 2024 00:00:00');
        const currentTime = new Date();
        const difference = eventDate - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center gap-5 text-white mt-25 ml-25">
            <div className="text-center border-2 border-white py-3 px-15 rounded-lg">
                <h1 className="text-4xl">{timeLeft.days || '0'}</h1>
                <p>Days</p>
            </div>
            <div className="text-center border-2 border-white py-3 px-15 rounded-lg">
                <h1 className="text-4xl">{timeLeft.hours || '0'}</h1>
                <p>Hours</p>
            </div>
            <div className="text-center border-2 border-white py-3 px-15 rounded-lg">
                <h1 className="text-4xl">{timeLeft.minutes || '0'}</h1>
                <p>Minutes</p>
            </div>
            <div className="text-center border-2 border-white py-3 px-15 rounded-lg">
                <h1 className="text-4xl">{timeLeft.seconds || '0'}</h1>
                <p>Seconds</p>
            </div>
        </div>
    );
};

export default Timer;