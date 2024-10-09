// src/pages/Home.tsx
"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react"; // Import hooks
import Navbar from "../app/components/Navbar";
import '../styles.css';
import FAQ from "@/components/Faq";
import Club from "@/components/Club";
import Footer from "@/components/Footer";
import TechzMagzine from "@/components/TechzMagzine";
import OurWork from "@/components/OurWork";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);

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
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Welcome to RCCTechz Website Revamp
      </div>
      <OurWork />
      <Club />
      <TechzMagzine />
      <FAQ />
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
