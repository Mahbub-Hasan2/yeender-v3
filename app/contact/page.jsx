// pages/contact.js

import React from 'react';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - Yeender</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-lg md:text-xl font-bold mb-2">Send us a Message</h3>
            {/* Add your contact form JSX code here */}
            <form>
              {/* Include form fields for name, email, message, etc. */}
              {/* Customize the form according to your requirements */}
            </form>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Details */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-700">info@yeender.com</p>
            </div>

            {/* Phone Details */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-700">+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-lg md:text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-700">123 Main Street, Cityville, Country</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
