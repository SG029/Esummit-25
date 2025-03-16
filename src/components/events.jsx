import React, { useRef, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import "../styles/newevents.css";

function EventsContainer({ image, heading, date, mode, link }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Increased effect strength for more movement
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // Changed from 0.1 to 0.3
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: "transform 0.2s ease-out",
            }}
            className="e-container w-[60vh] h-[40vh] cursor-pointer relative overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="bg-image absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            ></div>

            {/* Link Wrapper */}
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 w-full h-full"
            >
                {/* Hover Overlay */}
                <div className="hover-overlay absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300">
                    <div className="text-amber-200 text-[1.8vw] font-opensanslight opacity-0 transition-opacity duration-300 text-center">
                        <p className="mb-1 font-fonseca">{heading}</p>
                        <div className="date flex items-center gap-2 mb-1 justify-center">
                            <SlCalender className="c-amber-200" />
                            <h3 className="c-amber-200">{date}</h3>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <IoLocationOutline className="c-amber-200" />
                            <h3 className="c-amber-200">{mode}</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default EventsContainer;