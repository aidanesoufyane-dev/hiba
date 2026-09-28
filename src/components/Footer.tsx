import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09080D] border-t border-white/[0.06] py-12 relative z-10 text-[#A7A1B0] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.04]">
          {/* Brand */}
          <div className="flex items-center gap-2 text-white font-heading font-bold text-base">
            <span className="w-2 h-2 rounded-full bg-[#9B5CFF]" />
            <span>HIBA MOUNIR</span>
            <span className="text-[#A7A1B0] font-mono text-xs font-normal">
              — {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#A7A1B0]">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#toolkit" className="hover:text-white transition-colors">
              Toolkit
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#15131C] border border-white/[0.08] hover:border-[#9B5CFF]/40 text-[#F5F3F7] hover:text-[#C9A7FF] transition-all"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#A7A1B0]">
          <p>
            © {new Date().getFullYear()} Hiba Mounir. Built with modern web standards, inspired by creative editorial design.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <span>·</span>
            <span className="text-white/40">Agadir, Morocco</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
