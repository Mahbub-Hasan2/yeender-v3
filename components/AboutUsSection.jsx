// components/AboutUsSection.js

import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-[#F8FAFF] text-gray-800 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-poppins font-semibold text-gray-800">
              What it is about?
            </h3>
            <p className="text-lg pt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-poppins font-semibold text-gray-800">
              What it is about?
            </h3>
            <p className="text-lg pt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
