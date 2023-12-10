// pages/faqs.js

import React from 'react';
import Head from 'next/head';

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We offer a range of web development services, including front-end development, back-end development, full-stack development, and more. Explore our Services page for a detailed overview.',
  },
  {
    id: 2,
    question: 'How does your pricing work?',
    answer:
      'Our pricing varies based on the scope of the project and specific client requirements. Check out our Pricing page for more details on our standard packages, or contact us for a personalized quote.',
  },
  {
    id: 3,
    question: 'What is your development process?',
    answer:
      'Our development process involves understanding client needs, project planning, design, development, testing, and deployment. We follow industry best practices to ensure high-quality results and client satisfaction.',
  },
  {
    id: 4,
    question: 'How can I get started with your services?',
    answer:
      "To get started, simply visit our Contact Us page and reach out to us. We'll discuss your project requirements, provide information on our services, and guide you through the next steps.",
  },
  // Add more FAQs as needed
];

const FAQsPage = () => {
  return (
    <div>
      <Head>
        <title>FAQs - Yeender</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
