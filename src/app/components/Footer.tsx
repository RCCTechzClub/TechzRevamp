import React from "react";
import Image from "next/image";

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
        >            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full px-10">

                {/* Logo Section */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0  w-[35%] justify-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={80}
                        height={80}
                        className="w-80 h-80"  // Adjusted size for proper scaling
                    />
                </div>

                {/* Quick Links and Social Icons */}
                <div className="flex flex-col justify-between w-[65%] items-start pb-28 ">


                    {/* Social Media Icons Section */}
                    <div className="flex justify-between w-[40%] py-5">
                        <div>
                            <h3 className="text-3xl font-semibold]">Quick Links</h3>
                        </div>

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
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
