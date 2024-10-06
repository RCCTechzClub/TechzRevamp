
import OurWork from "@/components/OurWork";

export default function Home() {
  return (
    <div>
      <OurWork/>
    </div>
// import Image from "next/image";
import Footer from "./components/Footer";
import TechzMagzine from "./components/TechzMagzine";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Welcome to RCCTechz Website Revamp
      </div>
      <TechzMagzine />
      <Footer />
    </>

  );
}
