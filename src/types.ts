export type Page = 'home' | 'login' | 'signup' | 'onboarding' | 'video' | 'podcast' | 'dashboard';

export interface UserProgress {
  enrolledCourses: string[];
  completedVideos: { [courseTitle: string]: number[] };
  completedPodcasts: { [courseTitle: string]: number[] };
  quizScores: { [courseTitle: string]: number[] };
  learningTime: number; // in seconds
  activity: { icon: any, title: string, subtitle: string, color: string }[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  courseTitle: string;
  lessonId: number;
  topic: string;
  questions: Question[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  status: string;
  youtubeUrl?: string;
  audioUrl?: string;
  notesUrl?: string;
}

export interface Course {
  title: string;
  category: string;
  image: string;
  videos: Lesson[];
  podcasts: Lesson[];
}
