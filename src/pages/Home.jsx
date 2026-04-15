import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductTransition from '../components/home/ProductTransition';
import ProductOverview from '../components/home/ProductOverview';
import CombinedProducts from '../components/home/CombinedProducts';
import TestimonialSlider from '../components/home/TestimonialSlider';
import StatsSection from '../components/home/StatsSection';
import ServicesHighlights from '../components/home/ServicesHighlights';
import PartnerHospitalsPreview from '../components/home/PartnerHospitalsPreview';
import AboutPreview from '../components/home/AboutPreview';
import ContactPreview from '../components/home/ContactPreview';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />

      {/* PRODUCT SECTIONS — Primary Focus */}
      <ProductTransition />
      <ProductOverview />
      <CombinedProducts />
      <TestimonialSlider />

      {/* MEDICAL SECTIONS — Secondary / Supporting */}
      <StatsSection />
      <ServicesHighlights />
      <PartnerHospitalsPreview />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
}
