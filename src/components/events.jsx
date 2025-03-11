import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import "../styles/events.css";

function EventsContainer({ image, heading, date, mode,link }) {
    return (
        <div className="e-container w-[40vh] h-[40vh] cursor-pointer relative" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            zIndex: 10,
            backgroundPosition: 'center',
            borderRadius: '10px',
            boxShadow: '2px 6px 6px rgba(0, 0, 0, 0.25)',
        }}>
            <a href={link} target="_blank" rel="noreferrer" className="absolute bottom-0 w-full">
                <div className="text-amber-200 bg-black ml-2">
                    <h2>{heading}</h2>
                    <div className="date flex items-center gap-2">
                        <SlCalender className="c-amber-200" />
                        <h3 className="c-amber-200">{date}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoLocationOutline className="c-amber-200" />
                        <h3 className="c-amber-200">{mode}</h3>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default EventsContainer;