import React from 'react';
import {
  Layers,
  Code2,
  Smartphone,
  Cpu,
  FileCode,
  Palette,
  Terminal,
  LayoutGrid,
  Database,
  HardDrive,
  GitBranch,
  Workflow,
  GitFork,
  CheckCircle2,
  Laptop,
  Code,
  Sparkles,
} from 'lucide-react';
import { TOOLKIT_GROUPS } from '../data/portfolioData';

export const Toolkit: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#B77CFF]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#9B5CFF]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#C9A7FF]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#B77CFF]" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-[#9B5CFF]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#C9A7FF]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#B77CFF]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-[#9B5CFF]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#C9A7FF]" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-[#B77CFF]" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-[#9B5CFF]" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-[#C9A7FF]" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-[#B77CFF]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#9B5CFF]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#C9A7FF]" />;
      case 'Code':
      default:
        return <Code className="w-5 h-5 text-[#B77CFF]" />;
    }
  };

  return (
    <section id="toolkit" className="py-20 sm:py-28 relative bg-[#0B0A0F] border-t border-white/[0.06]">
      {/* Background glow disc */}
      <div className="absolute top-1/2 left-1/3 w-[36rem] h-80 bg-[#9B5CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B77CFF] tracking-wider mb-2">
              <span>Technical Stack</span>
              <span>✦</span>
            </div>
            <h2 className="font-display uppercase text-[clamp(2.75rem,13vw,4.5rem)] text-white tracking-tight leading-[0.9]">
              MY <br />
              <span className="bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
                TOOLKIT
              </span>
            </h2>
          </div>

          <p className="text-sm text-[#A7A1B0] max-w-md">
            Technologies and engineering tools mastered through academic projects at CMC and production mobile development during my internship at iKenas.
          </p>
        </div>

        {/* 4 Category Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {TOOLKIT_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-5 sm:p-8 rounded-2xl bg-[#13111C]/80 border border-white/[0.08] hover:border-[#9B5CFF]/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6 pb-4 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wide">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[#A7A1B0] mt-0.5">
                    {group.description}
                  </p>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#9B5CFF]" />
              </div>

              {/* Skills in 2-column grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-start gap-3 p-3.5 rounded-xl bg-[#181524]/60 border border-white/[0.04] hover:border-[#9B5CFF]/40 hover:bg-[#1E192D] transition-all duration-200"
                  >
                    <div className="p-2 rounded-lg bg-[#110F1A] border border-white/[0.06] shrink-0 group-hover:scale-105 group-hover:border-[#9B5CFF]/30 transition-all">
                      {getIcon(skill.iconName)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm font-semibold text-white truncate group-hover:text-[#C9A7FF] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="block text-[11px] font-mono text-[#B77CFF] truncate">
                        {skill.level}
                      </span>
                      <p className="text-[11px] text-[#A7A1B0] line-clamp-1 mt-0.5">
                        {skill.context}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
