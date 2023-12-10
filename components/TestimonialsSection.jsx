import React from 'react';

const testimonials = [
  {
    id: 1,
    clientName: 'John Doe',
    position: 'CEO, Company ABC',
    quote:
      'Yeender exceeded our expectations in delivering a high-quality website within the tight deadline. Their attention to detail and dedication to client satisfaction are truly commendable.',
  },
  {
    id: 2,
    clientName: 'Jane Smith',
    position: 'Marketing Manager, XYZ Inc.',
    quote:
      'Working with Yeender was a pleasure. Their expertise in web development and prompt communication made the entire process seamless. We highly recommend their services.',
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              {/* Client Quote */}
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>

              {/* Client Information */}
              <div>
                <p className="font-bold">{testimonial.clientName}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
