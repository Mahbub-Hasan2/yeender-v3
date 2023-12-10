import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import AboutUsSection from '../components/AboutUsSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import PortfolioShowcase from '../components/PortfolioShowcase.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import CTASection from '../components/CTASection.jsx';
import BlogHighlightsSection from '../components/BlogHighlightsSection.jsx';
import ContactInformation from '../components/ContactInformation.jsx';
import SocialMediaIntegration from '../components/SocialMediaIntegration.jsx';
import BackgroundImg from '../components/BackgroundImg.jsx';

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
      <div>
        <HeroSection/>
        <AboutUsSection />
        <ServicesSection /> 
        <BackgroundImg />
        <PortfolioShowcase />
        <TestimonialsSection />
        <CTASection />
        <BlogHighlightsSection />
        <ContactInformation />
        <SocialMediaIntegration /> 
      </div>
    )
  }