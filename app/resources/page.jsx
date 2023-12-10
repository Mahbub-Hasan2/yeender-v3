// pages/resources.js

import React from 'react';
import Head from 'next/head';

const resources = [
  {
    id: 1,
    title: 'Web Development Guide for Beginners',
    description: 'A comprehensive guide covering the basics of web development for beginners.',
    fileUrl: '/resources/web-development-guide.pdf',
  },
  {
    id: 2,
    title: 'Responsive Design Best Practices',
    description: 'Learn the best practices for creating responsive and mobile-friendly web designs.',
    fileUrl: '/resources/responsive-design-best-practices.pdf',
  },
  {
    id: 3,
    title: 'JavaScript Framework Comparison',
    description: 'An in-depth comparison of popular JavaScript frameworks for web development.',
    fileUrl: '/resources/js-framework-comparison.pdf',
  },
  // Add more resources as needed
];

const ResourcesPage = () => {
  return (
    <div>
      <Head>
        <title>Resources - Yeender</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Web Development Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                <a
                  href={resource.fileUrl}
                  download
                  className="text-blue-600 font-bold hover:underline"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
