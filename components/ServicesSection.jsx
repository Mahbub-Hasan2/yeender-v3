import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Crafting visually appealing and user-friendly website designs.',
      icon: '🎨', // Use actual icons or images
      color: 'bg-[#6271BF]', 
    },
    {
      title: 'Front-end Development',
      description: 'Building interactive and responsive user interfaces.',
      icon: '🚀',
      color: 'bg-[#F4B94F]',
    },
    {
      title: 'Back-end Development',
      description: 'Creating robust server-side logic and databases.',
      icon: '🔧',
      color: 'bg-[#F4B94F]',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Developing secure and scalable online shopping platforms.',
      icon: '💳',
      color: 'bg-[#6271BF]',
    },
    // Add more services as needed
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="">
            <h3 className="text-dark font-poppins mb-1 text-xl xl:text-4xl lg:text-3xl md:text-2xl font-bold">What We Do</h3>
            <p className="py-10 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="py-3 px-8 rounded-full bg-[#6271BF] text-light font-semibold uppercase">
              Read More
            </button>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 border border-gray-100 hover:shadow-xl ease-in-out duration-300">
                  <div className={`text-2xl mb-4 w-12 h-12 flex justify-center items-center rounded-full ${service.color}`}>{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
