import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductTransition from '../components/home/ProductTransition';
import ProductOverview from '../components/home/ProductOverview';
import CombinedProducts from '../components/home/CombinedProducts';
import TestimonialSlider from '../components/home/TestimonialSlider';
import StatsSection from '../components/home/StatsSection';

export default function Home() {
  return (
    <div className="w-full" style={{ backgroundColor: '#FDE8F0' }}>
      <HeroSection />
      <ProductTransition />
      <ProductOverview />
      <CombinedProducts />
      <TestimonialSlider />
      <StatsSection />
    </div>
  );
}
