import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Filter, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Flutter' | 'Android'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Flutter') return proj.techStack.includes('Flutter');
    if (selectedFilter === 'Android') return proj.techStack.includes('Kotlin') || proj.category === 'Android';
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden bg-[#0B0A0F] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#9B5CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B77CFF] tracking-wider mb-2">
              <span>Selected Works</span>
              <span>✦</span>
            </div>
            <h2 className="font-display uppercase text-[clamp(2.75rem,13vw,4.5rem)] text-white tracking-tight leading-[0.9]">
              FEATURED <br />
              <span className="bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>
          </div>

          {/* Interactive Filter Tabs & Link */}
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <div className="grid w-full grid-cols-3 min-[440px]:flex min-[440px]:w-auto items-center p-1 bg-[#15131C] border border-white/[0.08] rounded-xl">
              {(['All', 'Flutter', 'Android'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-2 min-[380px]:px-3.5 py-1.5 text-[11px] min-[380px]:text-xs font-medium rounded-lg transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-[#9B5CFF] text-white shadow-md shadow-[#9B5CFF]/30'
                      : 'text-[#A7A1B0] hover:text-white'
                  }`}
                >
                  {filter === 'All' ? 'All Works' : filter}
                </button>
              ))}
            </div>

            <a
              href="https://github.com/Hiba13434085"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-2 text-xs font-mono text-[#A7A1B0] hover:text-[#C9A7FF] transition-colors"
            >
              <span>GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group w-full min-w-0 cursor-pointer flex flex-col justify-between rounded-2xl bg-[#13111C]/90 border border-white/[0.08] hover:border-[#9B5CFF]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#9B5CFF]/15 overflow-hidden"
            >
              <div>
                {/* Project Image Container with Top Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A090E] p-4 flex items-center justify-center border-b border-white/[0.06]">
                  {/* Subtle hover zoom */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/schoolline_logo.png';
                    }}
                  />

                  {/* Corner Index Number Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B0A0F]/80 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#C9A7FF]">
                    {project.number}
                  </div>

                  {/* Top-Right Arrow Action */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1C1828]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#9B5CFF] group-hover:border-[#9B5CFF] transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  {/* Title & Category */}
                  <h3 className="text-xl font-bold font-heading text-white uppercase tracking-tight group-hover:text-[#C9A7FF] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <span className="block text-xs font-mono text-[#9B5CFF] mb-3">
                    {project.subtitle}
                  </span>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#A7A1B0] line-clamp-2 leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata & Stack tags */}
              <div className="px-6 pb-6 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#A7A1B0]">
                  <span className="text-[#F5F3F7] font-medium">{project.category}</span>
                  <span aria-hidden="true" className="text-white/30">·</span>
                  <span className="font-mono text-[#C9A7FF]">{project.tag}</span>
                </div>

                <span className="text-xs font-semibold text-[#B77CFF] group-hover:underline flex items-center gap-1">
                  <span>Details</span>
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
