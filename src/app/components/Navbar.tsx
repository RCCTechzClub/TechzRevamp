import React from 'react'
import Image from 'next/image';
import Logo from '../public/Logo.png'
import '@/styles.css'
const Navbar = () => {
    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Team', id: 'team' },
        { label: 'Projects', id: 'projects' },
        { label: 'Events', id: 'events' },
        { label: 'Notice', id: 'notice' },
      ];
  return (
    <div className="navbar sticky top-0">
  <div className="navbar-start">
    <Image src ={Logo} alt='Logo' height={70} width={70}/>    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-sm ">
    {navItems.map((item) => (
              <button
                key={item.label}
                className="block text-lg  leading-6 text-gray-200 transition-colors duration-300 p-2 rounded font-extralight"
                id='NavItems'
              >
                {item.label}
              </button>
            ))}
    </ul>
  </div>
  <div className="navbar-end gap-5 ">
    <a className="btn bg-transparent px-7 text-orange-400 border-orange-400 rounded-3xl hover:bg-orange-400 hover:text-white hover:border-none">Log In</a>
    <a className="btn border-transparent bg-orange-400 px-7 text-white rounded-full hover:bg-transparent hover:text-orange-400 hover:border-orange-400">Sign Up</a>
  </div>
</div>
  )
}

export default Navbar