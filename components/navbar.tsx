"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
       
    <nav className='flex w-full  items-center justify-between p-4 shadow-xl bg-gray-800'>

      <h1 className='text-white uppercase font-bold ml-6 italic text-xl'>
        My <span style={{ color: "#f4bb1e" }}>Portfolio</span>
      </h1>

      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        <ul className='flex gap-4 font-semibold text-white'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li className='mr-6'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          {isOpen ? (
            <svg width="30" height="25" fill="white">
              <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.41L12 13.41l-6.3 6.3-1.41-1.41L10.59 12 4.3 5.71 5.71 4.3 12 10.59l6.29-6.3z" />
            </svg>
          ) : (
            <svg width="30" height="25" fill="white">
              <rect width="30" height="3" rx="2" />
              <rect y="10" width="30" height="3" rx="2" />
              <rect y="20" width="30" height="3" rx="2" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-800 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden z-10`}>
        <div className="flex flex-col items-center justify-start h-full relative p-4">
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-white'>
            <svg width="30" height="30" fill="white">
              <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.41L12 13.41l-6.3 6.3-1.41-1.41L10.59 12 4.3 5.71 5.71 4.3 12 10.59l6.29-6.3z" />
            </svg>
          </button>
          <ul className='flex flex-col space-y-4 text-white mt-16'>
            <li>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
