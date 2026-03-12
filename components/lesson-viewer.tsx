'use client';

import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Lesson } from '@/lib/course-data';

interface LessonViewerProps {
  lesson: Lesson;
  courseTitle: string;
  currentLessonNumber: number;
  totalLessons: number;
  onPrevious: () => void;
  onNext: () => void;
}

const directVideoPattern = /\.(mp4|webm|ogg)(\?.*)?$/i;

export function LessonViewer({
  lesson,
  courseTitle,
  currentLessonNumber,
  totalLessons,
  onPrevious,
  onNext,
}: LessonViewerProps) {
  const isPreviousDisabled = currentLessonNumber === 1;
  const isNextDisabled = currentLessonNumber === totalLessons;
  const isDirectVideo = Boolean(lesson.videoUrl && directVideoPattern.test(lesson.videoUrl));

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#5a2e7c] to-[#6b2d8e] px-8 py-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
          {courseTitle} course
        </p>
        <h1 className="text-3xl font-bold text-white">
          Lesson {lesson.number}: {lesson.title}
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        {/* Video Player */}
        {lesson.videoUrl ? (
          <div className="mb-8">
            <div className="relative w-full overflow-hidden rounded-xl bg-black">
              {isDirectVideo ? (
                <video
                  controls
                  preload="metadata"
                  className="h-auto max-h-[70vh] w-full"
                  src={lesson.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  width="100%"
                  height="500"
                  src={lesson.videoUrl}
                  title={lesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-8 flex h-96 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#a855f7]/20">
            <p className="text-white/50">Video not available</p>
          </div>
        )}

        {/* Description */}
        {lesson.description && (
          <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">About this lesson</h3>
            <p className="mt-3 text-white/70">{lesson.description}</p>
          </div>
        )}

        {/* Lesson Navigation */}
        <div className="flex gap-4">
          <button
            onClick={onPrevious}
            disabled={isPreviousDisabled}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Lesson
          </button>

          {isNextDisabled ? (
            <button
              disabled
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white"
            >
              <Check className="h-4 w-4" />
              Course Completed
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
            >
              Next Lesson
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
