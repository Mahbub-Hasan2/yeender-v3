import React from 'react';
import Head from 'next/head';

const testimonials = [
  {
    id: 1,
    clientName: 'John Smith',
    company: 'ABC Corp',
    feedback:
      'Working with Your Company was a fantastic experience. Their team is highly skilled, and communication was top-notch. They delivered our project on time and exceeded our expectations.',
  },
  {
    id: 2,
    clientName: 'Jane Doe',
    company: 'XYZ Ltd',
    feedback:
      'Your Company is the go-to team for web development. They have a deep understanding of modern technologies and were able to bring our vision to life. The level of professionalism is commendable.',
  },
  {
    id: 3,
    clientName: 'Bob Johnson',
    company: '123 Innovations',
    feedback:
      'We were impressed with the expertise and dedication of Your Company. They demonstrated strong problem-solving skills and were proactive in suggesting improvements. A pleasure to work with!',
  },
  // Add more testimonials as needed
];

const Page = () => {
  return (
    <div>
      <Head>
        <title>Testimonials - Your Company</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
                <p className="text-blue-600 font-bold">{testimonial.clientName}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
