'use client';

import { CourseCard } from './course-card';

const courses = [
  {
    id: 'data-structure',
    image: '/dsa-course.jpg',
    title: 'Data Structure',
    description: 'Master Data Structures & Algorithms',
  },
  {
    id: 'python',
    image: '/python-course.jpg',
    title: 'Python',
    description: '10 video lessons with course PDF and lesson-by-lesson links',
  },
  {
    id: 'dbms',
    image: '/os-course.jpg',
    title: 'DBMS',
    description: 'Database Management Systems Fundamentals',
  },
];

export function CoursesSection() {
  return (
    <section className="bg-gradient-to-b from-[#4a1f6b] via-[#5a2e7c] to-[#3d1860] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              courseId={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
