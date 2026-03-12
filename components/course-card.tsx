'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CourseCardProps {
  courseId: string;
  image: string;
  title: string;
  description: string;
}

export function CourseCard({ courseId, image, title, description }: CourseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#a855f7]/20 p-6 backdrop-blur-sm transition-all duration-300 hover:from-[#7c3aed]/30 hover:to-[#a855f7]/30 hover:shadow-xl">
      {/* Border glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20 transition-all group-hover:border-white/40" />

      {/* Course image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-sm text-white/70">{description}</p>

        {/* Button */}
        <Link
          href={`/courses/${courseId}`}
          className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/50 active:scale-95"
        >
          <span>View Course</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
