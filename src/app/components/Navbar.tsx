'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import '@/styles.css';
import { ModeToggle } from './button-mode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const darkMode = savedTheme === 'dark';
      setIsDarkMode(darkMode);
      document.body.classList.toggle('dark-mode', darkMode);
    }
  }, []);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  const navItems = [
    { label: 'Home', id: '/' },
    { label: 'Team', id: '#' },
    { label: 'Projects', id: 'projects' },
    { label: 'Events', id: '#' },
    { label: 'Notice', id: '#' },
  ];

  return (
    <div className={`navbar sticky top-0 w-full bg-opacity-90 backdrop-blur-md transition duration-300 ease-in-out ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} text-white`}>
      <div className="navbar-start flex items-center justify-between w-full p-4 bg-slate-950">
        <Image src={Logo} alt='Logo' height={50} width={50} className="cursor-pointer" />

        <div className="navbar-center hidden lg:flex space-x-8">
          <ul className="menu menu-horizontal flex text-sm">
            {navItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.id}
                  className="block text-lg leading-5 text-gray-200 hover:text-orange-400 transition-colors duration-300 p-2 rounded font-extralight"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4 ">
          <a className="btn bg-transparent px-5 text-orange-400 border-orange-400 rounded-3xl hover:bg-orange-400 hover:text-white transition-colors duration-300">Log In</a>
          <a className="btn border-transparent bg-orange-400 px-5 text-white rounded-full hover:bg-transparent hover:text-orange-400 hover:border-orange-400 transition-colors duration-300">Sign Up</a>
          <ModeToggle />
        </div>

        <div className="navbar-center lg:hidden">
          <button className="btn btn-ghost" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {isOpen && (
            <ul className="menu dropdown-content mt-3 p-2 pt-2 shadow bg-gray-800 rounded-box w-52">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.id}
                    className="block text-lg leading-6 text-gray-200 hover:text-orange-400 transition-colors duration-300 p-2 rounded font-extralight"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
