import React, { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Smartphone, ShieldCheck, Camera } from 'lucide-react';
import { PERSONAL_INFO, HERO_STATS } from '../data/portfolioData';
import { useProfilePortrait } from '../hooks/useProfilePortrait';

export const Hero: React.FC = () => {
  const { photoUrl, handleFileUpload } = useProfilePortrait();
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-radial-hero">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#9B5CFF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-[#B77CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative stars and dots */}
      <div className="absolute top-28 left-[12%] text-[#B77CFF]/40 animate-pulse text-xs select-none pointer-events-none">
        ✦
      </div>
      <div className="absolute top-44 right-[15%] text-[#9B5CFF]/50 text-sm select-none pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-20 left-[8%] text-[#C9A7FF]/30 text-base select-none pointer-events-none">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 sm:pb-8 text-[10px] min-[380px]:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#A7A1B0] border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#9B5CFF]" />
            <span className="text-[#C9A7FF]">MOBILE & WEB DEVELOPER</span>
          </div>
          <div className="flex items-center gap-2 text-[#F5F3F7]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B5CFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B5CFF]" />
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
            <span className="text-[#B77CFF]">✦</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 sm:pt-12">
          {/* Left Column: Massive Condensed Typography & Pitch */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Giant Title with Script Accent */}
            <div className="relative mb-6">
              <h1 className="font-display uppercase text-[clamp(3.5rem,20vw,6rem)] sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.88] tracking-tight text-white font-black select-none">
                <span className="block text-white hover:text-[#C9A7FF] transition-colors duration-300">
                  HIBA
                </span>
                <span className="block bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
                  MOUNIR
                </span>
              </h1>

              {/* Script Accent "Portfolio" overlay */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-2 sm:right-16 lg:right-8 font-script text-3xl sm:text-5xl md:text-6xl text-[#C9A7FF] tracking-normal purple-glow-text -rotate-6 pointer-events-none">
                Portfolio
              </div>
            </div>

            {/* Role Statement & Clean Monospace Kicker */}
            <div className="max-w-xl space-y-4 mb-8">
              <p className="text-base sm:text-lg text-[#F5F3F7] font-medium leading-relaxed">
                Mobile & Web Application Developer
              </p>
              <p className="text-sm sm:text-base text-[#A7A1B0] leading-relaxed">
                Building modern digital experiences with <span className="text-white font-medium">Flutter</span>, <span className="text-white font-medium">Android (Kotlin)</span>, and responsive web technologies. Focused on analytical rigor, clean MVVM architectures, and intuitive touch UX.
              </p>

              {/* Terminal Code Pill Kicker */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#9B5CFF] pt-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>&lt;/ CODE · DESIGN · DEPLOY /&gt;</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col min-[440px]:flex-row flex-wrap items-stretch min-[440px]:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#9B5CFF] to-[#7B39EC] hover:from-[#B77CFF] hover:to-[#9B5CFF] rounded-xl transition-all duration-200 shadow-lg shadow-[#9B5CFF]/25 hover:shadow-[#9B5CFF]/40 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5F3F7] bg-[#15131C] hover:bg-[#1B1826] border border-white/[0.12] hover:border-[#9B5CFF]/50 rounded-xl transition-all duration-200 active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#B77CFF]" />
              </a>

              <a
                href="https://github.com/Hiba13434085"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-0 items-center justify-center px-3 sm:px-4 py-3.5 text-[11px] sm:text-xs font-mono text-[#A7A1B0] hover:text-white border border-white/[0.08] hover:border-white/20 rounded-xl transition-colors break-all"
                title="View GitHub Profile"
              >
                github.com/Hiba13434085
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end px-2 sm:px-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Backlight Glow Disc */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9B5CFF]/40 via-[#B77CFF]/20 to-transparent rounded-[2.5rem] blur-2xl transform scale-105 pointer-events-none" />

              {/* Arch Card Frame */}
              <div 
                className="relative rounded-[2.5rem] rounded-tl-[6rem] overflow-hidden border border-white/[0.14] bg-[#15131C] p-2 shadow-2xl shadow-black/80 group cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
                title="Click to use your exact photo (me.jpeg)"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0]);
                    }
                  }}
                />
                <div className="relative rounded-[2rem] rounded-tl-[5.5rem] overflow-hidden aspect-[3/4] bg-[#0E0C14]">
                  <img
                    src={photoUrl}
                    alt="Hiba Mounir - Mobile & Web Application Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/profile.jpeg';
                    }}
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F] via-transparent to-transparent opacity-60" />

                  {/* Hover upload badge */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                    <div className="w-10 h-10 rounded-full bg-[#9B5CFF]/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium tracking-wide bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      Select Your Photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Status Pill */}
              <div className="absolute -bottom-3 left-4 sm:left-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#15131C]/95 backdrop-blur-md border border-white/[0.12] shadow-xl text-xs font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wide text-xs">AVAILABLE FOR PROJECTS</span>
              </div>

              {/* Circular Rotating Badge Stamp */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-8 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#13111C]/95 backdrop-blur-md border border-white/[0.16] shadow-2xl flex items-center justify-center p-1 group">
                {/* Rotating SVG Ring */}
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 120 120"
                >
                  <path
                    id="heroBadgePath"
                    d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                    fill="none"
                  />
                  <text
                    fontSize="9.2"
                    fill="#C9A7FF"
                    letterSpacing="2.2"
                    className="font-mono uppercase font-semibold"
                  >
                    <textPath href="#heroBadgePath" startOffset="0%">
                      ✦ MOBILE & WEB DEV • CODE • DEPLOY •
                    </textPath>
                  </text>
                </svg>

                {/* Center Monogram Initials */}
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#1F1B2C] border border-[#9B5CFF]/40 flex items-center justify-center text-white font-display text-xl tracking-wider purple-glow-sm">
                  HM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Statistics & Factual Highlights Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-1 p-4 rounded-xl bg-[#13111C]/40 border border-white/[0.04] hover:border-[#9B5CFF]/30 transition-colors"
            >
              <span className="text-xs font-mono uppercase text-[#B77CFF] tracking-wider">
                {stat.label}
              </span>
              <span className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white font-bold">
                {stat.value}
              </span>
              <span className="text-xs text-[#A7A1B0]">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
