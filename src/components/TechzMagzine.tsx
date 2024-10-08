import Image from "next/image";
import React from "react";
import magazing from '@/app/assest/magazing.svg';
import { useTheme } from "next-themes";

const TechzMagazine = () => {
    const { theme } = useTheme(); 

    const isDarkMode = theme === 'dark';
    return (
        <div className={`flex flex-col lg:flex-row pt-10 items-center justify-center h-screen ${  isDarkMode 
            ? 'bg-[#121828]  text-gray-100' 
            : 'bg-opacity-100 text-gray-900' 
    } p-4`}>

            <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 h-full order-1 lg:order-1">
                <Image
                    src={magazing.src}
                    alt="Techz Magazine"
                    className="rounded-lg shadow-lg"
                    width={500}
                    height={500}
                    layout="intrinsic"
                />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-between h-full items-baseline py-10 lg:py-20 order-2 lg:order-1">
                <h1 className="text-5xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E9E] to-[#E4ED2E] py-2 text-center">
                    Techz Magazine
                </h1>
                <ul className={`text-4xl lg:text-6xl space-y-2 mb-6 font-semibold text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}`}>
                    <li>• Webinars</li>
                    <li>• Tech and Non-Tech</li>
                    <li>• Upcoming Events</li>
                </ul>
                <button className={`px-6 py-3 border rounded-full text-2xl lg:text-3xl font-semibold w-[70%] mx-auto transition ${isDarkMode ? 'bg-transparent border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-transparent border-gray-400 text-gray-300 hover:bg-gray-700'}`}>
                    Click on the Magazine to view
                </button>
            </div>
        </div>
    );
};

export default TechzMagazine;
