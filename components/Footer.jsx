// components/Footer.js

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Essential Navigation Links */}
        <nav className="mb-6">
          <Link href="/">
            <span className="text-gray-300 hover:text-white mr-4">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-300 hover:text-white mr-4">About Us</span>
          </Link>
          <Link href="/services">
            <span className="text-gray-300 hover:text-white mr-4">Services</span>
          </Link>
          <Link href="/portfolio">
            <span className="text-gray-300 hover:text-white mr-4">Portfolio</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-300 hover:text-white">Contact</span>
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-6">
          {/* Replace the links and icons with your actual social media profiles */}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          {/* Add more social media icons as needed */}
        </div>

        {/* Quick Links */}
        <div className="flex">
          <Link href="/privacy-policy">
            <span className="text-gray-300 hover:text-white mr-4">Privacy Policy</span>
          </Link>
          <Link href="/terms-of-service">
            <span className="text-gray-300 hover:text-white">Terms of Service</span>
          </Link>
        </div>

        {/* Copyright and Credits */}
        <div className="mt-8 text-gray-300">
          © 2023 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
