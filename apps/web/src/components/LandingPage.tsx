'use client';

import React from 'react';
import { HeroSection } from './sections/HeroSection.tsx';
import { ProblemSolutionSection } from './sections/ProblemSolutionSection.tsx';
import { HowItWorksSection } from './sections/HowItWorksSection.tsx';
import { AIAssistantSection } from './sections/AIAssistantSection.tsx';
import { CommunitySection } from './sections/CommunitySection.tsx';
import { GamificationSection } from './sections/GamificationSection.tsx';
import { TestimonialsSection } from './sections/TestimonialsSection.tsx';
import { FinalCTASection } from './sections/FinalCTASection.tsx';
import { Footer } from './sections/Footer.tsx';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-red-500">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <AIAssistantSection />
      <CommunitySection />
      <GamificationSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
