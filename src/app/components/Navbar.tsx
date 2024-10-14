import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import '@/styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Team', id: 'team' },
    { label: 'Projects', id: 'projects' },
    { label: 'Events', id: 'events' },
    { label: 'Notice', id: 'notice' },
  ];

  return (
    <div className="navbar sticky top-0 bg-gray-800 flex justify-between items-center p-4">
      <div className="navbar-start">
        <Image src={Logo} alt="Logo" height={70} width={70} />
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu flex space-x-4 text-white text-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="text-lg leading-6 text-gray-200 transition-colors duration-300 p-2 rounded font-extralight hover:bg-gray-700"
                id={item.id}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-5 hidden md:flex">
        <a className="btn bg-transparent px-7 text-orange-400 border-orange-400 rounded-3xl hover:bg-orange-400 hover:text-white hover:border-none">
          Log In
        </a>
        <a className="btn border-transparent bg-orange-400 px-7 text-white rounded-full hover:bg-transparent hover:text-orange-400 hover:border-orange-400">
          Sign Up
        </a>
      </div>
      <div className="navbar-end md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-800 p-4 md:hidden">
          <ul className="flex flex-col space-y-2 text-white text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className="text-lg leading-6 text-gray-200 transition-colors duration-300 p-2 rounded font-extralight hover:bg-gray-700 w-full text-left"
                  id={item.id}
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col mt-4 space-y-2">
            <a className="btn bg-transparent px-7 text-orange-400 border-orange-400 rounded-3xl hover:bg-orange-400 hover:text-white hover:border-none">
              Log In
            </a>
            <a className="btn border-transparent bg-orange-400 px-7 text-white rounded-full hover:bg-transparent hover:text-orange-400 hover:border-orange-400">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
