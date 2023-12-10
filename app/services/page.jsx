import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <div>
      <Head>
        <title>Services - Your Company</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      {/* Web Development Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Web Development Services</h2>
          <p className="text-lg md:text-xl text-gray-700">
            We offer a wide range of web development services to bring your ideas to life
            and enhance your online presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Service 1: Front-end Development */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Front-end Development</h3>
              <p className="text-gray-700">
                Craft visually appealing and user-friendly interfaces using modern
                front-end technologies.
              </p>
            </div>

            {/* Service 2: Back-end Development */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Back-end Development</h3>
              <p className="text-gray-700">
                Develop robust server-side logic and databases to power dynamic web
                applications.
              </p>
            </div>

            {/* Service 3: Full-stack Development */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Full-stack Development</h3>
              <p className="text-gray-700">
                Combine front-end and back-end development expertise to deliver
                end-to-end solutions.
              </p>
            </div>

            {/* Add more services as needed */}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Technologies We Specialize In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technology 1: React */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/react-logo.png" // Replace with actual image URL
                alt="React"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">React</h3>
              <p className="text-gray-700">Build dynamic and interactive user interfaces.</p>
            </div>

            {/* Technology 2: Node.js */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/nodejs-logo.png" // Replace with actual image URL
                alt="Node.js"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Node.js</h3>
              <p className="text-gray-700">Create scalable and efficient server-side applications.</p>
            </div>

            {/* Technology 3: MongoDB */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/mongodb-logo.png" // Replace with actual image URL
                alt="MongoDB"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">MongoDB</h3>
              <p className="text-gray-700">Store and retrieve data using a NoSQL database.</p>
            </div>

            {/* Add more technologies as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
