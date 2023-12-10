import React from 'react';
import Image from 'next/image'
import heroimg from "../public/Assets/images/undraw_designer_re_5v95.svg";

const HeroSection = () => {
  return (
    <section className="bg-[#F7F7F7] text-white py-16 hero-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center md:text-start text-center">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-dark font-poppins mb-1 md:mb-3 text-3xl xl:text-7xl lg:text-5xl md:text-4xl font-bold">We Build</h3>
            <h3 className="text-dark font-poppins mb-1 md:mb-3 text-3xl xl:text-7xl lg:text-5xl md:text-4xl font-bold">Web Applications</h3>
            <p className="text-gray-600 font-roboto md:pt-5 pt-2 font-medium md:font-semibold">
              Yeender is dedicated to delivering top-notch web development services with a passion for innovation and excellence. Our mission is to empower businesses through digital solutions and provide exceptional value to our clients.
            </p>
            <div className="mt-5">
              <button className="py-2 px-5 rounded-full font-roboto font-semibold text-light bg-[#6271C0] uppercase mb-2 md:mr-2">Learn More</button>
              <button className="py-2 px-5 rounded-full font-roboto font-semibold text-light bg-[#F4B94F] uppercase mb-2">Contact Us</button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <Image
              src={heroimg}
              alt="Picture of the author"
              width={500}
              height={500}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
