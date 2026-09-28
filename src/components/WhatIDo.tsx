import React from 'react';
import { Smartphone, Globe, Layout, Cpu, Sparkles } from 'lucide-react';
import { WHAT_I_DO } from '../data/portfolioData';

export const WhatIDo: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Smartphone className="w-6 h-6 text-[#B77CFF]" />;
      case 1:
        return <Globe className="w-6 h-6 text-[#9B5CFF]" />;
      case 2:
        return <Layout className="w-6 h-6 text-[#C9A7FF]" />;
      case 3:
      default:
        return <Cpu className="w-6 h-6 text-[#B77CFF]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-[#0B0A0F] border-t border-white/[0.06]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-80 bg-[#9B5CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B77CFF] tracking-wider mb-2">
              <span>Capabilities</span>
              <span>✦</span>
            </div>
            <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.9]">
              WHAT <br />
              <span className="bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
                I DO ✦
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#A7A1B0] leading-relaxed max-w-xl">
              I design, build, and ship modern mobile and web applications with clean architecture, responsive layouts, and user-focused engineering. Every line of code is structured for maintainability and real-world performance.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_DO.map((item, idx) => (
            <div
              key={item.number}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#13111C]/90 border border-white/[0.08] hover:border-[#9B5CFF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9B5CFF]/10 overflow-hidden"
            >
              {/* Subtle top glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9B5CFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Icon and Index badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#1C1828] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-[#9B5CFF]/40 transition-all duration-300">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-[#A7A1B0] group-hover:text-[#B77CFF] transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-1 font-heading group-hover:text-[#C9A7FF] transition-colors">
                  {item.title}
                </h3>
                <span className="block text-xs font-mono text-[#B77CFF] mb-3">
                  {item.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A7A1B0] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Technologies list at bottom */}
              <div className="pt-4 border-t border-white/[0.04] flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-[#A7A1B0]">
                {item.technologies.map((tech, tIdx) => (
                  <span key={tech} className="inline-flex items-center">
                    <span className="text-[#F5F3F7]">{tech}</span>
                    {tIdx < item.technologies.length - 1 && (
                      <span className="mx-1 text-[#9B5CFF]/60">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
