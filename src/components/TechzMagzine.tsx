import Image from "next/image";
import React from "react";
import magazing from '@/app/assest/magazing.svg'

const TechzMagazine = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-[#121828] p-6">
            <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 h-full ">
                <Image
                    src={magazing.src}
                    alt="Techz Magazine"
                    className="rounded-lg shadow-lg"
                    width={500}
                    height={500}
                    layout="intrinsic"
                />
            </div>

            <div className="w-full lg:w-1/2 text-white flex flex-col justify-between h-full items-baseline py-20">
                <h1 className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E9E] to-[#E4ED2E] py-2">
                    Techz Magazine
                </h1>
                <ul className="text-6xl space-y-2 mb-6 font-semibold">
                    <li>• Webinars</li>
                    <li>• Tech and Non-Tech</li>
                    <li>• Upcoming Events</li>
                </ul>
                <button className="px-6 py-3 bg-transparent border border-gray-400 text-gray-300 rounded-full hover:bg-gray-700 transition text-3xl font-semibold w-[70%] mx-auto">
                    Click on the Magazine to view
                </button>
            </div>

        </div>


    );
};

export default TechzMagazine;