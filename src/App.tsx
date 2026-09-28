import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { Toolkit } from './components/Toolkit';
import { ProcessAndExperience } from './components/ProcessAndExperience';
import { EducationAndMore } from './components/EducationAndMore';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0A0F] text-[#F5F3F7] selection:bg-[#9B5CFF]/30 selection:text-white flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <WhatIDo />
        <Projects />
        <Toolkit />
        <ProcessAndExperience />
        <EducationAndMore />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
