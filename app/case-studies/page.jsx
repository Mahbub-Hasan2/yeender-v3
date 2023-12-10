// pages/case-studies.js

import React from 'react';
import Head from 'next/head';

const caseStudies = [
  {
    id: 1,
    title: 'Revolutionizing E-commerce',
    description:
      'Learn how we transformed a traditional e-commerce platform into a modern, user-friendly experience, resulting in a significant increase in sales.',
    challenges: [
      'Outdated User Interface',
      'Poor Performance',
      'Limited Payment Options',
    ],
    solutions: [
      'Redesigned UI for a more intuitive experience',
      'Optimized performance through code refactoring',
      'Integrated additional payment gateways',
    ],
  },
  {
    id: 2,
    title: 'Streamlining Workflow with Automation',
    description:
      'Discover how we automated complex business processes, reducing manual work and improving efficiency for our client in the logistics industry.',
    challenges: [
      'Manual Data Entry',
      'Communication Bottlenecks',
      'Workflow Inefficiencies',
    ],
    solutions: [
      'Implemented automated data entry systems',
      'Introduced collaboration tools for improved communication',
      'Restructured workflows for increased efficiency',
    ],
  },
  {
    id: 3,
    title: 'Enhancing User Engagement',
    description:
      'Explore how we enhanced user engagement for a social media platform by implementing personalized content recommendations and a seamless user interface.',
    challenges: [
      'Low User Retention',
      'Lack of Personalization',
      'Complex Navigation',
    ],
    solutions: [
      'Developed algorithms for personalized content recommendations',
      'Redesigned UI for a more user-friendly experience',
      'Implemented intuitive navigation features',
    ],
  },
  // Add more case studies as needed
];

const Page = () => {
  return (
    <div>
      <Head>
        <title>Case Studies - Your Company</title>
        {/* Add any additional meta tags, styles, or scripts as needed */}
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Case Studies</h2>
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-2">{caseStudy.title}</h3>
              <p className="text-gray-700 mb-4">{caseStudy.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-2">Challenges</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {caseStudy.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Solutions</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {caseStudy.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
