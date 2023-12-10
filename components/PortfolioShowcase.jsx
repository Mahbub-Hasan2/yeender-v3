// components/PortfolioShowcase.js

import React from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: 'E-commerce Website',
    description: 'A modern online store with secure payment processing.',
    image: '/project1.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'A personal portfolio showcasing skills and projects.',
    image: '/project2.jpg', // Replace with actual image URL
  },
  // Add more projects as needed
];

const PortfolioShowcase = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Portfolio Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />

              {/* Project Name */}
              <h3 className="text-lg font-bold mb-2">{project.name}</h3>

              {/* Project Description */}
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Link to Project Details */}
              <Link href={`/portfolio/${project.id}`}>
                <span className="text-blue-600 hover:underline">Learn More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
