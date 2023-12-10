// pages/about.js

import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <div>
      <Head>
        <title>About Us - Your Company</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      {/* Company Background Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum
            malesuada odio, nec aliquet tortor gravida sit amet. Morbi feugiat neque
            eget elit rhoncus, vel tristique nunc posuere.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/team-member1.jpg" // Replace with actual image URL
                alt="Team Member 1"
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-bold mb-2">John Doe</h3>
              <p className="text-gray-500">Co-founder & CEO</p>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
                quam vitae mi vestibulum, at laoreet lectus ultricies.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/team-member2.jpg" // Replace with actual image URL
                alt="Team Member 2"
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-500">Lead Developer</p>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
                quam vitae mi vestibulum, at laoreet lectus ultricies.
              </p>
            </div>

            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Achievements</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum
            malesuada odio, nec aliquet tortor gravida sit amet. Morbi feugiat neque
            eget elit rhoncus, vel tristique nunc posuere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
