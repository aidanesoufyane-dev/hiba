import React, { useState, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Copy,
  Check,
  Terminal,
  Camera,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePortrait } from '../hooks/useProfilePortrait';

export const ContactSection: React.FC = () => {
  const { photoUrl, handleFileUpload } = useProfilePortrait();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#0B0A0F] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[48rem] h-96 bg-[#9B5CFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#B77CFF] tracking-wider mb-2">
            <span>Direct Outreach</span>
            <span>✦</span>
          </div>
          <h2 className="font-display uppercase text-[clamp(2.6rem,13vw,4.5rem)] text-white tracking-tight leading-[0.9] break-words">
            START A <br />
            <span className="bg-gradient-to-r from-white via-[#F5F3F7] to-[#B77CFF] bg-clip-text text-transparent">
              CONVERSATION
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A7A1B0] mt-4">
            Whether you have a junior developer opportunity, a collaborative Flutter/Android project, or an inquiry, feel free to reach out.
          </p>
        </div>

        {/* 3-Column Footer Grid matching reference aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Column 1: Contact Details & Quick Copy */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-white mb-6">
              CONTACT DETAILS
            </h3>

            {/* Email card */}
            <div className="min-w-0 p-3 sm:p-4 rounded-xl bg-[#13111C]/90 border border-white/[0.08] hover:border-[#9B5CFF]/40 transition-colors flex items-center justify-between gap-2 group">
              <div className="flex min-w-0 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1D192C] flex items-center justify-center text-[#B77CFF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono text-[#A7A1B0]">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-[#C9A7FF] truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2 text-[#A7A1B0] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone card */}
            <div className="min-w-0 p-3 sm:p-4 rounded-xl bg-[#13111C]/90 border border-white/[0.08] hover:border-[#9B5CFF]/40 transition-colors flex items-center justify-between gap-2 group">
              <div className="flex min-w-0 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1D192C] flex items-center justify-center text-[#9B5CFF]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono text-[#A7A1B0]">Phone / WhatsApp</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-[#C9A7FF] truncate block"
                  >
                    {PERSONAL_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2 text-[#A7A1B0] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location card */}
            <div className="p-4 rounded-xl bg-[#13111C]/90 border border-white/[0.08] flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1D192C] flex items-center justify-center text-[#C9A7FF]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-[#A7A1B0]">Based In</span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Center Arch Portrait with Halo & Star */}
          <div className="lg:col-span-4 flex justify-center py-6">
            <div className="relative w-48 sm:w-56">
              {/* Purple Glow aura */}
              <div className="absolute inset-0 bg-[#9B5CFF]/30 rounded-full blur-2xl transform scale-110 pointer-events-none" />

              {/* Arch Card */}
              <div 
                className="relative rounded-t-full rounded-b-2xl overflow-hidden border-2 border-white/[0.14] bg-[#15131C] p-1.5 shadow-2xl group cursor-pointer"
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
                <div className="relative rounded-t-full rounded-b-xl overflow-hidden aspect-[3/4] bg-[#0E0C14]">
                  <img
                    src={photoUrl}
                    alt="Hiba Mounir Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/profile.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F] via-transparent to-transparent opacity-50" />

                  {/* Hover upload badge */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 text-white">
                    <div className="w-9 h-9 rounded-full bg-[#9B5CFF]/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20">
                      <Camera className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10">
                      Select Photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Star accent */}
              <div className="absolute -bottom-2 -right-2 text-[#B77CFF] text-xl font-bold animate-pulse">
                ✦
              </div>
            </div>
          </div>

          {/* Column 3: Let's Connect & Code Philosophy */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-white">
              LET&apos;S CONNECT
            </h3>

            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#15131C] border border-white/[0.08] hover:border-[#9B5CFF] hover:bg-[#1E192D] flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-12 h-12 rounded-xl bg-[#15131C] border border-white/[0.08] hover:border-[#9B5CFF] hover:bg-[#1E192D] flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
                title="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Signature Slogan from reference image */}
            <div className="p-5 rounded-2xl bg-[#13111C]/80 border border-white/[0.08] relative overflow-hidden">
              <div className="font-mono text-xs text-[#9B5CFF] flex items-center gap-1.5 mb-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>&lt;/ CREATIVE PHILOSOPHY /&gt;</span>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#F5F3F7] uppercase tracking-wider font-semibold">
                CODE IS MY CRAFT <br />
                <span className="text-[#C9A7FF]">DESIGN IS MY VOICE /&gt;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
