/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Book, PlayCircle, Headphones, Award } from "lucide-react";
import { Page, UserProgress } from "./types";
import { COURSES } from "./constants";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { VideoPage } from "./pages/VideoPage";
import { DashboardPage } from "./pages/DashboardPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { supabase } from "./lib/supabase";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCourse, setSelectedCourse] = useState<string>(COURSES[0].title);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    enrolledCourses: [],
    completedVideos: {},
    completedPodcasts: {},
    quizScores: {},
    learningTime: 0,
    activity: []
  });

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleNavigate = (page: Page, courseTitle?: string) => {
    if (courseTitle) {
      setSelectedCourse(courseTitle);
    }
    setCurrentPage(page);
  };

  const enrollCourse = (courseTitle: string) => {
    setUserProgress(prev => {
      if (prev.enrolledCourses.includes(courseTitle)) return prev;
      return {
        ...prev,
        enrolledCourses: [...prev.enrolledCourses, courseTitle],
        activity: [
          { 
            icon: Book, 
            title: `Enrolled in ${courseTitle}`, 
            subtitle: `New course started • Just now`, 
            color: "bg-orange-50 text-orange-500" 
          },
          ...prev.activity
        ].slice(0, 10)
      };
    });
  };

  const updateProgress = (courseTitle: string, type: 'Video' | 'Podcast', id: number) => {
    setUserProgress(prev => {
      const isEnrolled = prev.enrolledCourses.includes(courseTitle);
      const newEnrolled = isEnrolled ? prev.enrolledCourses : [...prev.enrolledCourses, courseTitle];
      
      const completedKey = type === 'Video' ? 'completedVideos' : 'completedPodcasts';
      const currentCompleted = prev[completedKey][courseTitle] || [];
      
      if (currentCompleted.includes(id)) return prev;

      const newCompleted = [...currentCompleted, id];
      const course = COURSES.find(c => c.title === courseTitle);
      const item = (type === 'Video' ? course?.videos : course?.podcasts)?.find(v => v.id === id);

      const newActivity = [
        { 
          icon: type === 'Video' ? PlayCircle : Headphones, 
          title: `Completed ${type.toLowerCase()}: ${item?.title || 'Lesson'}`, 
          subtitle: `${courseTitle} • Just now`, 
          color: type === 'Video' ? "bg-blue-50 text-blue-500" : "bg-orange-50 text-orange-500" 
        },
        ...prev.activity
      ].slice(0, 10);

      return {
        ...prev,
        enrolledCourses: newEnrolled,
        [completedKey]: {
          ...prev[completedKey],
          [courseTitle]: newCompleted
        },
        activity: newActivity,
        learningTime: prev.learningTime + 600 // Assume 10 mins per completion for simplicity
      };
    });
  };

  const handleQuizComplete = (courseTitle: string, lessonId: number, score: number, total: number) => {
    setUserProgress(prev => {
      const currentScores = prev.quizScores[courseTitle] || [];
      
      const newActivity = [
        { 
          icon: Award, 
          title: `Completed Quiz: ${courseTitle}`, 
          subtitle: `Scored ${score}/${total} points • Just now`, 
          color: "bg-purple-50 text-purple-500" 
        },
        ...prev.activity
      ].slice(0, 10);

      return {
        ...prev,
        activity: newActivity,
        quizScores: {
          ...prev.quizScores,
          [courseTitle]: [...currentScores, (score / total) * 100]
        }
      };
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HomePage 
              onNavigate={handleNavigate} 
              isLoggedIn={isLoggedIn} 
              onLogout={() => setIsLoggedIn(false)} 
              onEnroll={enrollCourse}
            />
          </motion.div>
        )}

        {currentPage === 'login' && (
          <motion.div 
            key="login"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen"
          >
            <LoginPage onNavigate={handleNavigate} onLogin={() => setIsLoggedIn(true)} />
          </motion.div>
        )}

        {currentPage === 'signup' && (
          <motion.div 
            key="signup"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen"
          >
            <SignUpPage onNavigate={handleNavigate} onLogin={() => setIsLoggedIn(true)} />
          </motion.div>
        )}

        {currentPage === 'onboarding' && (
          <motion.div 
            key="onboarding"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="min-h-screen"
          >
            <OnboardingPage onComplete={() => setCurrentPage('home')} />
          </motion.div>
        )}

        {currentPage === 'video' && (
          <motion.div 
            key="video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen"
          >
            <VideoPage 
              onNavigate={handleNavigate} 
              isLoggedIn={isLoggedIn} 
              onLogout={() => {
                setIsLoggedIn(false);
                setCurrentPage('home');
              }} 
              initialContentType="Video"
              selectedCourseTitle={selectedCourse}
              userProgress={userProgress}
              onProgressUpdate={updateProgress}
              onQuizComplete={handleQuizComplete}
            />
          </motion.div>
        )}

        {currentPage === 'podcast' && (
          <motion.div 
            key="podcast"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen"
          >
            <VideoPage 
              onNavigate={handleNavigate} 
              isLoggedIn={isLoggedIn} 
              onLogout={() => {
                setIsLoggedIn(false);
                setCurrentPage('home');
              }} 
              initialContentType="Podcast"
              selectedCourseTitle={selectedCourse}
              userProgress={userProgress}
              onProgressUpdate={updateProgress}
              onQuizComplete={handleQuizComplete}
            />
          </motion.div>
        )}

        {currentPage === 'dashboard' && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen"
          >
            <DashboardPage 
              onNavigate={handleNavigate} 
              onLogout={() => {
                setIsLoggedIn(false);
                setCurrentPage('home');
              }} 
              userProgress={userProgress}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
