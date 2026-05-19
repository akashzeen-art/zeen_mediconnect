import React from 'react';
import HeroSection from '../components/home/HeroSection';
import NutraZeenSection from '../components/home/NutraZeenSection';
import PlayTonightSection from '../components/home/PlayTonightSection';
import AmeoraSection from '../components/home/AmeoraSection';
import TestimonialSlider from '../components/home/TestimonialSlider';
import StatsSection from '../components/home/StatsSection';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <NutraZeenSection />
      <PlayTonightSection />
      <AmeoraSection />
      <TestimonialSlider />
      <StatsSection />
    </div>
  );
}
