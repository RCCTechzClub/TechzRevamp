
// src/pages/Home.js
import React from "react";
import Navbar from "../app/components/Navbar";
import '../styles.css';
=======
import FAQ from "@/components/Faq";
import Club from "@/components/Club";
import Footer from "@/components/Footer";
import TechzMagzine from "@/components/TechzMagzine";
import OurWork from "@/components/OurWork";
import Image from "next/image";



export default function Home() {
  return (
    <>

      <Navbar />
    </>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Welcome to RCCTechz Website Revamp
      </div>
      <OurWork/>
      <Club />
      <TechzMagzine />
      <FAQ />
      <Footer />
    </>

  );
}
