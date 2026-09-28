import React from 'react';
import { Sparkles, Terminal, Smartphone, Award, Target, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 relative bg-[#0B0A0F] border-t border-white/[0.06]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#9B5CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B77CFF] tracking-wider">
              <span>Developer Profile</span>
              <span>✦</span>
            </div>

            <h2 className="font-display uppercase text-[clamp(2.75rem,13vw,4.5rem)] text-white tracking-tight leading-[0.9] break-words">
              ENGINEERING FOR <br />
              <span className="bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
                REAL UTILITY
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A7A1B0] leading-relaxed max-w-2xl">
              <p>
                I am a motivated <span className="text-white font-medium">Mobile and Web Application Developer</span> based in Agadir, Morocco. My work bridges intuitive user interfaces with dependable application logic, leveraging modern frameworks like Flutter and native Android with Kotlin.
              </p>
              <p>
                During my professional internship at <span className="text-[#C9A7FF] font-medium">IKENAS</span>, I contributed directly to the development of the <strong className="text-white font-semibold">SchoolLine</strong> educational mobile application. I collaborated within an Agile engineering team, participated in sprint planning, and implemented production feature modules with offline caching and Firebase notifications.
              </p>
              <p>
                Currently completing my Diploma in Digital Development at <span className="text-white font-medium">CMC Souss-Massa</span>, I am continuously refining my craft—building applications that prioritize speed, responsiveness, and clear user journeys.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#15131C] border border-white/[0.08] text-white">
                <Target className="w-4 h-4 text-[#B77CFF]" />
                <span>Agile & Sprint Sprints</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#15131C] border border-white/[0.08] text-white">
                <Code2 className="w-4 h-4 text-[#9B5CFF]" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#15131C] border border-white/[0.08] text-white">
                <Smartphone className="w-4 h-4 text-[#C9A7FF]" />
                <span>Offline-First Mobile</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars / Stats Card */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#13111C]/90 border border-white/[0.08] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9B5CFF]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-heading font-bold text-base sm:text-lg uppercase tracking-wide text-white flex flex-wrap items-center justify-between gap-2">
                <span>Core Engineering Principles</span>
                <span className="text-xs font-mono text-[#B77CFF]">PILLARS</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#181524]/70 border border-white/[0.04]">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    01. Analytical Precision
                  </h4>
                  <p className="text-xs text-[#A7A1B0] leading-relaxed">
                    Grounding each project in solid requirement analysis, schema structuring, and well-defined state boundaries.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181524]/70 border border-white/[0.04]">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    02. Offline-First Resilience
                  </h4>
                  <p className="text-xs text-[#A7A1B0] leading-relaxed">
                    Implementing local SQLite databases and SharedPreferences caches so mobile apps stay responsive regardless of network status.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181524]/70 border border-white/[0.04]">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    03. Team Spirit & Collaboration
                  </h4>
                  <p className="text-xs text-[#A7A1B0] leading-relaxed">
                    Active communication, structured Git workflows, and collaborative problem solving developed through team projects and internship experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
