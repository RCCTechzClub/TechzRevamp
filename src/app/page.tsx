"use client";
import React from "react";
import Navbar from "../app/components/Navbar";
import '../styles.css';
import FAQ from "@/components/Faq";
import Club from "@/components/Club";
import Footer from "@/components/Footer";
import TechzMagzine from "@/components/TechzMagzine";
import OurWork from "@/components/OurWork";
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme(); 


  const isDarkMode = theme === 'dark';

  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center justify-center min-h-screen p-0 gap-4 sm:p-0 font-[family-name:var(--font-geist-sans)] ${
          isDarkMode 
            ? 'bg-[#121828] text-gray-100' 
            : 'bg-gradient-to-r from-gray-500 to-blue-200to-blue-500 text-gray-900' 
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
    </>
  );
}
