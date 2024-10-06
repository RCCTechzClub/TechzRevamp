import React from 'react';
import bg2 from '@/app/assest/card3bg.jpg'
import bg3 from '@/app/assest/card2bg.jpg'
import bg4 from '@/app/assest/card4bg.svg'
import code from '@/app/assest/code.svg'
import Image from 'next/image';
const Club = () => {
    return (
        <div className="min-h-screen bg-[#121828] flex flex-col justify-center items-center px-4">
            {/* Title */}
            <h2 className="text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFCECE] via-[#7AC3FF] to-[#E4ED2E] mb-12"  >
                Club Features
            </h2>

            {/* Feature Cards */}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6 w-[75%]">

                {/* Card 1 */}
                <div
                    className="bg-[#6D75E7] cursor-pointer bg-cover bg-center hover:scale-105 transform transition-all duration-300 hover:shadow-lg p-6 rounded-[10px] flex flex-col items-center justify-center h-72 w-60"
                >
                    <Image src={code.src} alt="bg2" className='relative -top-8 -left-[90px]' width={40} height={40} />

                    <h3 className="text-white font-normal text-2xl">Work on cool projects and showcase your skills on our website</h3>
                </div>

                {/* Card 2 */}
                <div
                    className="bg-indigo-400 cursor-pointer hover:scale-105 transform transition-all duration-300 hover:shadow-lg p-6 rounded-lg flex flex-col items-center justify-center h-72 w-60 relative" // Added 'relative' for positioning
                >
                    <div
                        style={{
                            backgroundImage: `url(${bg2.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 0,
                            borderRadius: '10px',
                        }}
                    ></div>

                    <div
                        style={{
                            backgroundColor: 'rgba(0, 78, 103, 0.61)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1,
                            borderRadius: '10px'
                        }}
                    ></div>

                    <h3 className="text-white font-normal text-2xl z-10">Get access to unlimited resources</h3>
                </div>


                {/* Card 3 */}
                <div
                    className="bg-blue-300 cursor-pointer hover:scale-105 transform transition-all duration-300 hover:shadow-lg p-6 rounded-lg flex flex-col items-center justify-center h-72 w-60 relative" // Added 'relative' for positioning
                >
                    <div
                        style={{
                            backgroundImage: `url(${bg3.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 0,
                            borderRadius: '10px',
                        }}
                    ></div>

                    <div
                        style={{
                            backgroundColor: 'rgba(29, 122, 255, 0.68)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1,
                            borderRadius: '10px',
                        }}
                    ></div>

                    <h3 className="text-white font-normal text-2xl z-10">Optimize our website, with better performance and UI</h3>
                </div>


                {/* Card 4 */}
                <div
                    className="bg-[#3B474D] cursor-pointer hover:scale-105 transform transition-all duration-300 hover:shadow-lg p-6 rounded-lg flex flex-col items-center justify-center h-72 w-60 relative" // Added 'relative'
                >
                    <div
                        style={{
                            backgroundImage: `url(${bg4.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#3B474D',
                            position: 'absolute', // Make this div absolute
                            top: '90px',
                            left: '102px',
                            right: 0,
                            bottom: 0,
                            zIndex: 0, // Ensure this is below the text
                            width: '57%',
                            height: '68%',
                        }}
                    ></div>
                    <h3
                        className="text-white font-normal text-2xl z-10" // Added 'z-10' to bring the text above the background
                    >
                        Enhance your problem-solving skills with our monthly coding challenge
                    </h3>
                </div>

            </div>
        </div>
    );
};

export default Club;
