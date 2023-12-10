// pages/terms.js

import React from 'react';
import Head from 'next/head';

const TermsPage = () => {
  return (
    <div>
      <Head>
        <title>Terms of Service - Yeender</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
            <p>
              By using the Yeender website, you agree to comply with and be bound by the following terms
              and conditions. If you disagree with any part of these terms, please do not use our website.
            </p>
            <p>
              You must be at least 18 years old to use our services. You are responsible for maintaining
              the confidentiality of your account and password and for restricting access to your computer.
            </p>
            <p>
              Yeender reserves the right to modify or terminate the services at any time, for any reason,
              without notice.
            </p>
            {/* Add more terms of service content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
