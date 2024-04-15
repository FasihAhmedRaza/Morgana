"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export const FloatingNav = () => {
  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-400 border-gray-200 py-2.5 dark:bg-black sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="courses/logo.png"
            className="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span />
          </div>
        
          {/* --------------LOGIN BUTTON ---- */}

          <div className="place-self-end px-2">
          <Link href="/login">
            <button     
              className='bg-blue-500 px-4 py-2 text-center rounded-lg 
              transition duration-300 ease-in-out hover:bg-gray-600 text-white text-sm'>
                Login</button>
               </Link>
          </div>

          {/*----------------- Signup BUTTON ---- */}
          <div className="place-self-end">
          <Link href="/signup">
            <button
              className='bg-blue-500 px-2 py-2 text-center rounded-lg 
              transition duration-300 ease-in-out hover:bg-gray-600
               text-white text-sm'>Sign up</button>
           </Link>
          </div>

          <button
            onClick={toggleMobileMenu} // Add onClick handler to toggle the mobile menu
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen ? "true" : "false"} // Set aria-expanded based on menu state
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`} // Hide the open menu icon if menu is open
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`} // Hide the closed menu icon if menu is closed
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? '' : 'hidden'}`} // Hide the menu items if menu is closed
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="services"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
