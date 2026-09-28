import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { WORK_PROCESS, EXPERIENCE } from '../data/portfolioData';

export const ProcessAndExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-[#0B0A0F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B77CFF] tracking-wider mb-2">
            <span>Methodology & Career</span>
            <span>✦</span>
          </div>
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.9]">
            WORK PROCESS <br />
            <span className="bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
              & EXPERIENCE
            </span>
          </h2>
        </div>

        {/* 3-Column / Bento Layout matching reference composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1 (4 cols): Work Process Vertical Timeline */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#13111C]/90 border border-white/[0.08]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
              <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-white">
                WORK PROCESS
              </h3>
              <span className="text-xs font-mono text-[#B77CFF]">4 STEPS</span>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-[#9B5CFF] before:via-[#7B39EC] before:to-transparent">
              {WORK_PROCESS.map((item) => (
                <div key={item.step} className="relative flex items-start gap-4">
                  {/* Step Node */}
                  <div className="relative z-10 w-7 h-7 rounded-full bg-[#1F1B2C] border-2 border-[#9B5CFF] flex items-center justify-center text-[10px] font-mono font-bold text-[#F5F3F7] shrink-0 purple-glow-sm">
                    {item.step}
                  </div>

                  {/* Step Description */}
                  <div className="pt-0.5">
                    <h4 className="text-sm font-bold font-heading uppercase tracking-wide text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A7A1B0] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 (4 cols): Professional Experience (IKENAS) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#13111C]/90 border border-white/[0.08]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
              <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-white">
                EXPERIENCE
              </h3>
              <span className="text-xs font-mono text-[#B77CFF]">AGADIR</span>
            </div>

            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#1C1828] border border-white/10 text-[#C9A7FF]">
                    {exp.period}
                  </span>
                  <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {exp.type}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold font-heading text-white">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B77CFF] mt-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                    <span>·</span>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <h5 className="text-xs font-mono uppercase text-[#A7A1B0] tracking-wider mb-2">
                    Key Contributions
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-[#A7A1B0] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9B5CFF] mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono text-[#F5F3F7] bg-[#1A1626] border border-white/[0.06] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 (4 cols): Reference-inspired CTA Card ("LET'S BUILD SOMETHING USEFUL TOGETHER") */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-[#9B5CFF] via-[#8545EA] to-[#6823CE] text-white shadow-2xl shadow-[#9B5CFF]/30 flex flex-col justify-between min-h-[380px] relative overflow-hidden group">
            {/* Background decorative star */}
            <div className="absolute top-4 right-4 text-white/30 text-3xl font-light select-none group-hover:rotate-45 transition-transform duration-500">
              ✦
            </div>

            <div>
              <span className="inline-block px-2.5 py-1 rounded-md bg-black/20 text-xs font-mono tracking-wider uppercase mb-4 backdrop-blur-sm">
                Open for Junior Roles
              </span>

              <h3 className="font-display uppercase text-4xl sm:text-5xl tracking-tight leading-[0.9] mb-4 text-white">
                LET&apos;S BUILD <br />
                SOMETHING <br />
                USEFUL <br />
                TOGETHER.
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xs">
                I am eager to contribute to innovative mobile & web applications, join a high-performing engineering team, and tackle real-world digital challenges.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl bg-[#0E0C14] hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl group-hover:scale-[1.02] active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A7FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
