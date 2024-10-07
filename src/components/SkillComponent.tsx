'use client'
import React, { useRef } from 'react'; // Ensure correct path
import gsap from 'gsap';
import Image from 'next/image';

function SkillComponent({data}:any) {
  const skillComp = useRef(null);
  const tooltip = useRef(null);

  const handleMouseOver = (e:any) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 1,
    });
    gsap.to(tooltip.current, {
      opacity: 1,
      duration: 0.2,
    });
  };

  const handleMouseLeave = (e:any) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 1,
    });
    gsap.to(tooltip.current, {
      opacity: 0,
      duration: 0.2,
    });
  };

  return (
    <div
      ref={skillComp}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      id={data.id}
      className="relative w-40 h-40 flex items-center justify-center border-opacity-20 border border-gray-100 bg-gradient-to-br from-[rgb(24,24,37)] via-transparent to-transparent z-0 bg-opacity-10 backdrop-blur-2xl rounded-3xl shadow-xl shadow-inherit"
    >
      <Image src={data.image} alt="Skill" className="w-20 h-20 rounded-md" />
      <div
        ref={tooltip}
        className=" opacity-0 absolute text-white -top-2 left-[50%] -translate-x-[50%] -translate-y-[50%] border w-28 h-10 rounded-md border-opacity-30 font-semibold border-white bg-gradient-to-br from-[rgb(24,24,37)] via-[rgb(12,12,46)] flex items-center justify-center text-md text-wrap"
      >
        {data.name}
      </div>
    </div>
    
  );
}

export default SkillComponent;
// 