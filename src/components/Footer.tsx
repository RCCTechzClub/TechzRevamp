import React from "react";
import Image from "next/image";

import Link from "next/link";

// Importing the SVG assets


import Logo from '@/app/assest/logo.svg';
import IconXing from '@/app/assest/xing.svg';
import IconInstagram from '@/app/assest/instagram.svg';
import IconYouTube from '@/app/assest/youtube.svg';
import IconLinkedIn from '@/app/assest/linkedin.svg';
import bg from '@/app/assest/footerbg.png';

const Footer = () => {
    return (
        <footer
            className="bg-cover bg-center text-white py-8 w-full"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundColor: '#121828',
            }}
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-10">
                
                <div className="flex items-center space-x-4 mb-4 md:mb-0 w-full md:w-1/3 justify-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={80}
                        height={80}
                        className="w-20 h-20"  
                    />
                </div>

              
                <div className="flex flex-col justify-between items-center w-full md:w-2/3 pb-8 md:pb-0">

                    
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mb-4 justify-center text-lg font-normal">
                        <a href="#" className="hover:text-[#39ff14]">Projects</a>
                        <a href="#" className="hover:text-[#39ff14]">Team Page</a>
                        <a href="#" className="hover:text-[#39ff14]">Event Page</a>
                        <a href="#" className="hover:text-[#39ff14]">RCCIIT Website</a>
                        <a href="#" className="hover:text-[#39ff14]">RCCIIT Github Repos</a>
                    </div>

                    
                    <div className="flex flex-col items-center w-full py-2 text-center">
                        <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="hover:text-[#39ff14]">
                                <Image
                                    src={IconXing}
                                    alt="Xing"
                                    width={24}
                                    height={24}
                                    className="w-5 h-5"
                                />
                            </a>
                            <a href="#" className="hover:text-[#39ff14]">
                                <Image
                                    src={IconInstagram}
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                    className="w-5 h-5"
                                />
                            </a>
                            <a href="#" className="hover:text-[#39ff14]">
                                <Image
                                    src={IconYouTube}
                                    alt="YouTube"
                                    width={24}
                                    height={24}
                                    className="w-5 h-5"
                                />
                            </a>
                            <a href="#" className="hover:text-[#39ff14]">
                                <Image
                                    src={IconLinkedIn}
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                    className="w-5 h-5"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Section */}

                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0 justify-between w-full py-5 text-xl font-normal">
                        <a href="#" className="hover:text-[#39ff14]">Projects</a>
                        <a href="#" className="hover:text-[#39ff14]">Team Page</a>
                        <a href="#" className="hover:text-[#39ff14]">Event Page</a>
                        <a href="#" className="hover:text-[#39ff14]">RCCIIT website</a>
                        <a href="#" className="hover:text-[#39ff14]">RCCIIT Github Repos</a>
                        <Link href="/about-us" className="hover:text-[#39ff14]">About Us </Link>
                        
                    </div>



                </div>
            </div>
        </footer>
    );
};

export default Footer;
