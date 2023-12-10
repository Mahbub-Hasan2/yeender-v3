// pages/blog.js

import React from 'react';
import Head from 'next/head';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Effective Front-End Development',
    date: 'December 1, 2023',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit vel orci laoreet scelerisque. Nunc eget ullamcorper ex. Proin euismod nisl sit amet dui cursus, et ullamcorper est luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: 2,
    title: 'The Importance of Mobile-First Design',
    date: 'November 15, 2023',
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ac elit vel nisi sollicitudin aliquam. Sed id justo eu velit pellentesque imperdiet vel eu arcu. Integer sit amet metus in felis congue fermentum. Ut eleifend sapien et elit scelerisque, non vestibulum nisl congue.',
  },
  {
    id: 3,
    title: 'Latest Trends in Web Development',
    date: 'November 5, 2023',
    content:
      'Phasellus quis nulla vitae libero accumsan consectetur eu ut velit. Integer et lacus a lacus pellentesque imperdiet. Ut ullamcorper risus non justo venenatis bibendum. Sed finibus velit vel odio feugiat bibendum.',
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Your Company</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest Blog Posts</h2>
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
