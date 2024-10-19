
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="text-white mt-10 body-font bg-gray-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href='/'  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
          <span className="ml-3 text-xl text-white">Muhammad Talha</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Protfolio —
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link  href='https://www.facebook.com/talha.gp.3?mibextid=ZbWKwL' target='blank' className="text-gray-500 text-xl">
            <FaFacebookF/>
          </Link>
          <Link href='https://github.com/Muhammad-Talha103'  className="ml-6  text-gray-500 text-xl" target='blank'>
            <FaGithub/>
          </Link>
          <Link href='https://www.linkedin.com/in/muhammad-talha-aa1429240/'  className="ml-6 text-gray-500 text-xl" target='blank'>
           <FaLinkedinIn/>

          </Link>
         
        </span>
      </div>
    </footer>

  );
};

export default Footer;
