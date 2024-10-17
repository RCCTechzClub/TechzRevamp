"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../app/components/Navbar";
import '../styles.css';
import FAQ from "@/components/Faq";
import Club from "@/components/Club";
import Footer from "@/components/Footer";
import TechzMagzine from "@/components/TechzMagzine";
import OurWork from "@/components/OurWork";
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import specific icon

const Home: React.FC = () => {
  const { theme } = useTheme(); 
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);

  const isDarkMode = theme === 'dark';

  const handleScroll = () => {
    setShowScrollBtn(window.scrollY > 200); // Show button when scrolled down 200 pixels
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  return (
    <>
      <Navbar />

      <div
        className={`flex flex-col items-center justify-center min-h-screen p-0 gap-4 sm:p-0 font-[family-name:var(--font-geist-sans)] ${
          isDarkMode 
            ? 'bg-[#121828] text-gray-100' 
            : 'bg-gradient-to-r from-gray-500 to-blue-500 text-gray-900' 
        }`}
      >
        <div className="mt-12 mb-1 text-center">
           <b>Welcome to RCCTechz Website Revamp</b>
        </div>
        <OurWork />
        <Club />
        <TechzMagzine />
        <FAQ />
      </div>

      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 w-14 h-14 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default Home;
