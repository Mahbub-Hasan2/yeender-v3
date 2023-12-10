import React from 'react';
import Link from 'next/link';

const ContactInformation = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-gray-700">info@example.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Office Address</h3>
            <p className="text-gray-700">
              123 Main Street,
              <br />
              Cityville, State, Zip
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact">
            <span className="text-blue-700 hover:underline">Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
