import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Web Design',
    date: 'June 15, 2023',
    excerpt: 'Explore the principles and aesthetics behind effective web design.',
    slug: 'the-art-of-web-design',
  },
  {
    id: 2,
    title: 'Mastering CSS Grid Layout',
    date: 'June 8, 2023',
    excerpt: 'Learn how to harness the power of CSS Grid for layout design.',
    slug: 'mastering-css-grid-layout',
  },
  // Add more blog posts as needed
];

const BlogHighlightsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest Blog Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <span className="text-blue-600 hover:underline">Read More</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog">
            <span className="text-blue-700 hover:underline">View All Blog Posts</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlightsSection;
