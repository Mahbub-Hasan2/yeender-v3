"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="bg-[#F7F7F7] p-4">
      <div className="container mx-auto ">
        <div className="flex  justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <span className="text-primary text-2xl font-bold border-b-4 border-light">Yeender</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="relative flex gap-5">
            <nav className=" flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/">
                <span className="text-dark font-semibold font-poppins hover:underline">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-dark font-semibold font-poppins hover:underline">About Us</span>
              </Link>
              <Link href="/services">
                <span className="text-dark font-semibold font-poppins hover:underline">Services</span>
              </Link>
              <Link href="/portfolio">
                <span className="text-dark font-semibold font-poppins hover:underline">Portfolio</span>
              </Link>
              <Link href="/contact">
                <span className="text-dark font-semibold font-poppins hover:underline">Contact</span>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="">
              <button className="md:block hidden rounded-full bg-primary text-light py-2 px-5 font-roboto font-semibold">
                Get Started
              </button>

              {/* Hamburger Menu */}
              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
                    className="w-6 h-6 text-primary hover:text-primary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"></path>
                  </svg>
                </button>
              </div>
            </div>

          </div>



        </div>
      </div>
    </header>
  );
};

export default Header;
