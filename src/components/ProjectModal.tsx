import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Layers, CheckCircle2, Smartphone, Download } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) return null;

  const currentImage = project.images[activeImageIndex] || project.thumbnail;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-stretch lg:items-center justify-center p-0 lg:p-6 overflow-hidden bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full lg:max-w-5xl h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-3rem)] bg-[#13111C] border-0 lg:border border-white/[0.12] rounded-none lg:rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="relative z-20 flex shrink-0 items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.08] bg-[#0E0C14]">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="shrink-0 font-mono text-[10px] sm:text-xs text-[#B77CFF] bg-[#1E192E] px-2 sm:px-2.5 py-1 rounded-md border border-white/10">
              PROJECT {project.number}
            </span>
            <h3 className="truncate font-heading font-bold text-sm sm:text-xl text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 text-[#A7A1B0] hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B5CFF]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-3 sm:p-6 lg:p-8 min-h-0 overflow-y-auto overscroll-contain space-y-5 sm:space-y-8">
          {/* Main Visual Showcase / Carousel */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#08070B] border border-white/[0.08] flex items-center justify-center h-[42dvh] min-h-[260px] max-h-[520px] sm:h-[52dvh] lg:h-[420px]">
            <img
              src={currentImage}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = project.thumbnail;
              }}
            />

            {/* Navigation Arrows (if multiple images) */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + project.images.length) % project.images.length
                    )
                  }
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 active:scale-95"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % project.images.length)
                  }
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 active:scale-95"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image counter indicator */}
                <div className="absolute bottom-3 right-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-sm text-xs font-mono text-white/90 border border-white/10">
                  {activeImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails Row */}
          {project.images.length > 1 && (
            <div className="flex snap-x items-center gap-2 overflow-x-auto px-1 pb-2 scrollbar-none">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative snap-start flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#B77CFF] scale-105 shadow-md shadow-[#9B5CFF]/30'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-5 border-t border-white/[0.08]">
            {/* Left Column: Description & Features */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#B77CFF] tracking-wider mb-1">
                  {project.subtitle}
                </h4>
                <h2 className="text-xl sm:text-3xl font-bold font-heading text-white">
                  {project.title}
                </h2>
              </div>

              <div className="text-sm sm:text-base text-[#A7A1B0] leading-6 sm:leading-relaxed space-y-3 whitespace-pre-line">
                <p>{project.longDesc}</p>
              </div>

              {/* Key Features Checklist */}
              {project.features && project.features.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B77CFF]" />
                    <span>Key Features & Functional Highlights</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7A1B0]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9B5CFF] mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Metadata & Action Links */}
            <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
              {/* Category & Status */}
              <div className="space-y-3 p-4 rounded-xl bg-[#0E0C14] border border-white/[0.06]">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#A7A1B0] block mb-1">
                    Category
                  </span>
                  <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#B77CFF]" />
                    {project.category}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase text-[#A7A1B0] block mb-1">
                    Primary Stack
                  </span>
                  <span className="text-xs font-mono text-[#C9A7FF]">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Technologies List */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#A7A1B0] tracking-wider mb-2.5">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-[#F5F3F7] bg-[#1C1828] border border-white/[0.08] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#9B5CFF] to-[#7B39EC] hover:from-[#B77CFF] hover:to-[#9B5CFF] rounded-xl transition-all shadow-md shadow-[#9B5CFF]/20"
                  >
                    <span>Launch Web Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F3F7] bg-[#181524] hover:bg-[#201C30] border border-white/[0.12] hover:border-[#9B5CFF]/50 rounded-xl transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}

                {!project.githubUrl && !project.liveUrl && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-[#A7A1B0]">
                    Enterprise / Internship Codebase (Confidential)
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
