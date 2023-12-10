// pages/pricing.js

import React from 'react';
import Head from 'next/head';

const PricingPage = () => {
  return (
    <div>
      <Head>
        <title>Pricing - Yeender</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Pricing</h2>

          {/* Pricing Table */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-lg md:text-xl font-bold mb-2">Standard Package</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit vel orci
              laoreet scelerisque.
            </p>
            <p className="text-2xl font-bold text-blue-600 mb-4">$99/month</p>
            <ul className="text-left text-gray-700">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              {/* Add more features as needed */}
            </ul>
          </div>

          {/* Request a Quote Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-4">Request a Quote</h3>
            {/* Add your request-a-quote form JSX code here */}
            <form>
              {/* Include form fields for name, email, project details, etc. */}
              {/* Customize the form according to your requirements */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
