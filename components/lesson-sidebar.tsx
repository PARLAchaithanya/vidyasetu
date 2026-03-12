'use client';

import { Lesson } from '@/lib/course-data';

interface LessonSidebarProps {
  lessons: Lesson[];
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
}

export function LessonSidebar({
  lessons,
  selectedLessonId,
  onSelectLesson,
}: LessonSidebarProps) {
  return (
    <div className="flex h-full flex-col border-r border-white/10 bg-gradient-to-b from-[#4a1f6b] to-[#3d1860] overflow-hidden">
      <div className="border-b border-white/10 p-4">
        <h2 className="text-lg font-bold text-white">Lessons</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson.id)}
            className={`w-full border-b border-white/5 px-4 py-4 text-left transition-colors ${
              selectedLessonId === lesson.id
                ? 'bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white'
                : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="text-sm font-semibold">Lesson {lesson.number}</div>
            <div className="mt-1 text-sm line-clamp-2">{lesson.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
