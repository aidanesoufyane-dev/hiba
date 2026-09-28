import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0A0F]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex min-w-0 items-center gap-2 group text-white tracking-tight font-heading font-bold text-base min-[380px]:text-lg sm:text-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#9B5CFF] group-hover:scale-125 transition-transform duration-200" />
            <span className="truncate tracking-wide">HIBA MOUNIR</span>
            <span className="hidden sm:inline text-xs font-mono text-[#A7A1B0] font-normal tracking-normal border border-white/10 px-2 py-0.5 rounded-md ml-1">
              DEV
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A7A1B0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B77CFF] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button + Mobile toggle */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#9B5CFF] to-[#7B39EC] hover:from-[#B77CFF] hover:to-[#9B5CFF] rounded-lg transition-all duration-200 shadow-md shadow-[#9B5CFF]/20 hover:shadow-[#9B5CFF]/40 active:scale-95 whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#A7A1B0] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B5CFF] rounded-lg border border-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-[#0E0C14]/98 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-[#A7A1B0]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B77CFF]" />
                {PERSONAL_INFO.title}
              </span>
              <span className="text-[#9B5CFF] font-semibold">Morocco</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#F5F3F7] hover:text-[#B77CFF] transition-colors py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#9B5CFF] to-[#7B39EC] rounded-lg shadow-lg shadow-[#9B5CFF]/20"
              >
                Let&apos;s Build Together
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 text-xs font-mono text-[#A7A1B0] hover:text-white border border-white/10 rounded-lg hover:border-white/20 transition-colors"
              >
                GitHub: {PERSONAL_INFO.githubUser}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
