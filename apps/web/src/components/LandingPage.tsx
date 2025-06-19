'use client';

import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { ProblemSolutionSection } from './sections/ProblemSolutionSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { AIAssistantSection } from './sections/AIAssistantSection';
import { CommunitySection } from './sections/CommunitySection';
import { GamificationSection } from './sections/GamificationSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './sections/Footer';

export function LandingPage() {
  return (
    <main className="min-h-screen">
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
