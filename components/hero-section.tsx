'use client';

import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#4a1f6b] px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* Title with decorative stars */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="text-4xl">✨</span>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            VidyaSetu
          </h1>
          <span className="text-4xl">✨</span>
        </div>

        {/* Subtitle */}
        <p className="mb-12 text-lg text-white/80 md:text-xl">
          Elevate Your Learning Experience
        </p>

        {/* Search bar */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ec4899]/30 to-[#a855f7]/30 blur-2xl" />
          <div className="relative flex items-center gap-4 rounded-full border border-white/30 bg-white/10 px-6 py-4 backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/15">
            <Search className="h-5 w-5 text-white/70" />
            <input
              type="text"
              placeholder="Search courses..."
              className="flex-1 bg-transparent text-lg text-white placeholder-white/50 outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
