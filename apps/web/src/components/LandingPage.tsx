'use client';

import React from 'react';
import { HeroSection } from './sections/HeroSection.js';
import { ProblemSolutionSection } from './sections/ProblemSolutionSection.js';
import { HowItWorksSection } from './sections/HowItWorksSection.js';
import { AIAssistantSection } from './sections/AIAssistantSection.js';
import { CommunitySection } from './sections/CommunitySection.js';
import { GamificationSection } from './sections/GamificationSection.js';
import { TestimonialsSection } from './sections/TestimonialsSection.js';
import { FinalCTASection } from './sections/FinalCTASection.js';
import { Footer } from './sections/Footer.js';

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
