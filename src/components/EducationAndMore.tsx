import React from 'react';
import {
  GraduationCap,
  Languages,
  BookOpen,
  Compass,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  Award,
  Users,
  Heart,
  Check,
} from 'lucide-react';
import { EDUCATION, ACTIVITIES, LANGUAGES, SOFT_SKILLS, HOBBIES } from '../data/portfolioData';

export const EducationAndMore: React.FC = () => {
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-[#B77CFF]" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-[#9B5CFF]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-4 h-4 text-[#C9A7FF]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-4 h-4 text-[#B77CFF]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-4 h-4 text-[#C9A7FF]" />;
    }
  };

  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#0B0A0F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B77CFF] tracking-wider mb-2">
            <span>Academic & Personal</span>
            <span>✦</span>
          </div>
          <h2 className="font-display uppercase text-[clamp(2.75rem,13vw,4.5rem)] text-white tracking-tight leading-[0.9] break-words">
            EDUCATION <br />
            <span className="bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
              & PROFILE
            </span>
          </h2>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (7 cols): Education & Activities */}
          <div className="lg:col-span-7 space-y-8">
            {/* Education Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13111C]/80 border border-white/[0.08]">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#B77CFF]" />
                  <span>Education & Diplomas</span>
                </h3>
                <span className="text-xs font-mono text-[#A7A1B0]">ACADEMIC</span>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#181524]/60 border border-white/[0.04] hover:border-[#9B5CFF]/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#1F1B2C] text-[#C9A7FF] border border-white/10">
                        {edu.period}
                      </span>
                      <span className="text-xs text-[#A7A1B0]">{edu.location}</span>
                    </div>

                    <h4 className="text-base font-bold font-heading text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-[#B77CFF] mt-1">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-[#A7A1B0] leading-relaxed mt-2.5 pt-2 border-t border-white/[0.04]">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Community Volunteering */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13111C]/80 border border-white/[0.08]">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#9B5CFF]" />
                  <span>Activities & Volunteering</span>
                </h3>
                <span className="text-xs font-mono text-[#A7A1B0]">COMMUNITY</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ACTIVITIES.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#181524]/50 border border-white/[0.04] flex flex-col justify-between"
                  >
                    <div>
                      <span className="block text-[11px] font-mono text-[#B77CFF] uppercase mb-1">
                        {act.organization}
                      </span>
                      <h4 className="text-sm font-semibold text-white mb-2 font-heading">
                        {act.title}
                      </h4>
                      <p className="text-xs text-[#A7A1B0] leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Languages, Soft Skills & Hobbies */}
          <div className="lg:col-span-5 space-y-8">
            {/* Languages Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13111C]/80 border border-white/[0.08]">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-white flex items-center gap-2">
                  <Languages className="w-5 h-5 text-[#C9A7FF]" />
                  <span>Languages</span>
                </h3>
                <span className="text-xs font-mono text-[#A7A1B0]">COMMUNICATION</span>
              </div>

              <div className="space-y-3.5">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3.5 rounded-xl bg-[#181524]/60 border border-white/[0.04] flex flex-wrap items-center justify-between gap-2"
                  >
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {lang.language}
                      </span>
                      <span className="text-xs text-[#A7A1B0]">
                        {lang.note}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-[#221D32] border border-[#9B5CFF]/30 text-xs font-mono font-medium text-[#C9A7FF]">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13111C]/80 border border-white/[0.08]">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B77CFF]" />
                <span>Core Professional Attributes</span>
              </h3>

              <div className="flex flex-col gap-2.5">
                {SOFT_SKILLS.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-[#F5F3F7] p-2.5 rounded-lg bg-[#181524]/40 border border-white/[0.04]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B5CFF] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Passions / Hobbies */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13111C]/80 border border-white/[0.08]">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#B77CFF]" />
                <span>Interests & Hobbies</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HOBBIES.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="p-3 rounded-xl bg-[#181524]/60 border border-white/[0.04] flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[#120F1D] border border-white/[0.06] shrink-0">
                      {getHobbyIcon(hobby.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {hobby.name}
                      </span>
                      <span className="text-[11px] text-[#A7A1B0] line-clamp-1">
                        {hobby.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
