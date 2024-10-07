'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons'; // Updated icon
import Link from 'next/link';
// import { fa0 } from '@fortawesome/free-solid-svg-icons';
import rftechlogo from '@/app/assest/rctechlogo.png'
gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ data, image }: any) => {
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      {
        y: '10vh',
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 80%', // Adjust start as needed
          end: 'top 40%',   // Adjust end as needed
          scrub: true,
          markers: false,   // Set to true to debug the scroll trigger
        },
      }
    );
  }, []);

  return (
    <div
      ref={itemRef}
      id={data.id}
      className="w-full h-auto md:h-[400px] overflow-hidden border-opacity-30 border border-white bg-gradient-to-br from-[rgb(24,24,37)] via-transparent to-transparent z-0 bg-opacity-30 backdrop-blur-2xl rounded-3xl shadow-xl shadow-inherit"
    >
      <div className="w-full h-full grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2">
        <div className="p-8 text-white flex flex-col justify-center w-full h-full items-start">
          <Image
            src={data?.favicon || rftechlogo} // Default favicon if none provided
            alt="Project favicon"
            className="w-10 h-10 mb-4"
            width={40}
            height={40} // Providing width and height for better image loading
          />
          <h3 className="text-2xl font-bold mb-2">{data?.name || 'Project Name'}</h3>
          <span className="text-lg mb-4 text-start">
            {data?.desc || 'Project description goes here...'}
          </span>
          <div className="flex gap-4">
            {data?.githubRepo && (
              <Link
                href={data.githubRepo || "https://rcctechz.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors duration-300"
              >
               {/* <FontAwesomeIcon icon={faGithub} /> */}
                <span>GitHub</span>
              </Link>
            )}
              <Link
                href={data?.weblink || "https://rcctechz.vercel.app/"
                } 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <span>Live View</span>
              </Link>
          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 -right-[25%] sm:-right-[25%] lg:-right-[15%] h-full sm:h-[80%] w-[120%] rounded-t-xl overflow-hidden">
            <Image
              src={image || '/default-image.png'} // Fallback image
              alt="Project Preview"
              className="h-full w-full object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
