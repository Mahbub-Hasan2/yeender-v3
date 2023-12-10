import React from 'react';
import Head from 'next/head';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Developed a fully functional e-commerce platform with seamless checkout.',
    imageUrl: '/portfolio-project1.jpg', // Replace with actual image URL
    projectLink: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Social Media App',
    description: 'Built a social media app with user profiles, posts, and comments functionality.',
    imageUrl: '/portfolio-project2.jpg', // Replace with actual image URL
    projectLink: 'https://example.com/project2',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'Created a blog platform with content management and user authentication features.',
    imageUrl: '/portfolio-project3.jpg', // Replace with actual image URL
    projectLink: 'https://example.com/project3',
  },
  // Add more projects as needed
];

const Page = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Your Company</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
