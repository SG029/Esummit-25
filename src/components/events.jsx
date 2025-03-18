import React, { useRef, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import "../styles/newevents.css";
import { RiTimer2Line } from "react-icons/ri";

function EventsContainer({ image, heading, date, mode, link,time }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

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
            onMouseLeave={() => {
                reset();
                setIsHovered(false);
            }}
            onMouseEnter={() => setIsHovered(true)}
            style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: "transform 0.2s ease-out",
            }}
            className="e-container w-[60vh] h-[75vh] cursor-pointer relative overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="bg-image absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{
                    backgroundImage: `url(${image})`,
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
            ></div>

            {/* Gradient Overlay */}
            <div
    className="absolute inset-0"
    style={{
        background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0) 80%)",
    }}
></div>


            {/* Link Wrapper */}
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 w-full h-full"
            >
                {/* Text Container at Bottom */}
                <div className="text-container absolute bottom-0 left-0 right-0 p-4 text-amber-200 text-[1.8vw] font-opensanslight text-center">
                    <p className="mb-1 font-fonseca">{heading}</p>
                    <div className="date flex items-center gap-2 mb-1 justify-center">
                        <SlCalender className="c-amber-200" />
                        <h3 className="c-amber-200">{date}</h3>
                        <RiTimer2Line/>
                        <h3 className="c-amber-200">{time}</h3>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                        <IoLocationOutline className="c-amber-200" />
                        <h3 className="c-amber-200">{mode}</h3>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default EventsContainer;