import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import '@/styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Team', id: 'team' },
    { label: 'Projects', id: 'projects' },
    { label: 'Events', id: 'events' },
    { label: 'Notice', id: 'notice' },
  ];

  return (
    <div className="navbar sticky top-0 bg-gray-800 px-5 py-3 shadow-lg">
      <div className="navbar-start flex items-center justify-between w-full lg:w-auto">
        {/* Logo */}
        <Image src={Logo} alt="Logo" height={70} width={70} />

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="block lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Center (visible on large screens) */}
      <div className={`navbar-center lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="menu flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 text-white text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <button className="text-lg leading-6 text-gray-200 transition-colors duration-300 p-2 rounded font-extralight hover:text-orange-400">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End (Log In and Sign Up) */}
      <div className="navbar-end hidden lg:flex gap-5">
        <a className="btn bg-transparent px-7 text-orange-400 border-orange-400 rounded-3xl hover:bg-orange-400 hover:text-white hover:border-none">
          Log In
        </a>
        <a className="btn border-transparent bg-orange-400 px-7 text-white rounded-full hover:bg-transparent hover:text-orange-400 hover:border-orange-400">
          Sign Up
        </a>
      </div>

      {/* Mobile Menu (Log In and Sign Up - visible when menu is open) */}
      {isOpen && (
        <div className="navbar-end flex flex-col gap-3 lg:hidden mt-4">
          <a className="btn bg-transparent text-orange-400 border-orange-400 rounded-3xl hover:bg-orange-400 hover:text-white hover:border-none">
            Log In
          </a>
          <a className="btn border-transparent bg-orange-400 text-white rounded-full hover:bg-transparent hover:text-orange-400 hover:border-orange-400">
            Sign Up
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
