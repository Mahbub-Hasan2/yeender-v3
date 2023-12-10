// pages/privacy.js

import React from 'react';
import Head from 'next/head';

const PrivacyPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Yeender</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
            <p>
              At Yeender, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our website or services.
            </p>
            <p>
              We collect personal information such as your name, email address, and phone number when
              you fill out a contact form. This information is used to respond to your inquiries and
              provide you with our services.
            </p>
            <p>
              We may also collect non-personal information, such as your IP address and browser type,
              to analyze trends and improve our website's performance.
            </p>
            {/* Add more privacy policy content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
