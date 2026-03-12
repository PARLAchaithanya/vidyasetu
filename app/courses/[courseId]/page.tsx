'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { LessonSidebar } from '@/components/lesson-sidebar';
import { LessonViewer } from '@/components/lesson-viewer';
import { AuthGuard } from '@/components/auth-guard';
import { courses } from '@/lib/course-data';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = courses[courseId];

  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    course?.lessons[0]?.id || ''
  );

  useEffect(() => {
    if (course?.lessons && course.lessons.length > 0) {
      setSelectedLessonId(course.lessons[0].id);
    }
  }, [course]);

  if (!course) {
    return (
      <AuthGuard>
        <div className="min-h-screen bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#3d1860]">
          <Navbar />
          <div className="flex items-center justify-center py-20">
            <p className="text-xl text-white">Course not found</p>
          </div>
        </div>
      </AuthGuard>
    );
  }

  const selectedLesson = course.lessons.find(
    (lesson) => lesson.id === selectedLessonId
  );
  const currentLessonNumber =
    selectedLesson?.number || course.lessons[0]?.number || 1;

  const handlePrevious = () => {
    if (currentLessonNumber > 1) {
      const prevLesson = course.lessons.find(
        (l) => l.number === currentLessonNumber - 1
      );
      if (prevLesson) {
        setSelectedLessonId(prevLesson.id);
      }
    }
  };

  const handleNext = () => {
    if (currentLessonNumber < course.lessons.length) {
      const nextLesson = course.lessons.find(
        (l) => l.number === currentLessonNumber + 1
      );
      if (nextLesson) {
        setSelectedLessonId(nextLesson.id);
      }
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-b from-[#5a2e7c] via-[#6b2d8e] to-[#3d1860]">
        <Navbar />

        <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden w-80 lg:flex">
            <LessonSidebar
              lessons={course.lessons}
              selectedLessonId={selectedLessonId}
              onSelectLesson={setSelectedLessonId}
            />
          </div>

          {/* Main content */}
          {selectedLesson && (
            <LessonViewer
              lesson={selectedLesson}
              courseTitle={course.title}
              currentLessonNumber={currentLessonNumber}
              totalLessons={course.lessons.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>

        {/* Mobile lesson selector */}
        <div className="border-t border-white/10 bg-gradient-to-r from-[#5a2e7c] to-[#6b2d8e] px-4 py-3 lg:hidden">
          <select
            value={selectedLessonId}
            onChange={(e) => setSelectedLessonId(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white"
          >
            {course.lessons.map((lesson) => (
              <option key={lesson.id} value={lesson.id}>
                Lesson {lesson.number}: {lesson.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </AuthGuard>
  );
}
