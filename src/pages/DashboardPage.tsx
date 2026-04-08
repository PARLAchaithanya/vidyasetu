import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Book, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Bell, 
  User, 
  LogOut, 
  Play, 
  ChevronRight, 
  Zap 
} from "lucide-react";
import { Logo } from "../components/Logo";
import { Page, UserProgress } from "../types";
import { COURSES } from "../constants";

interface DashboardPageProps {
  onNavigate: (page: Page, courseTitle?: string) => void;
  onLogout: () => void;
  userProgress: UserProgress;
}

export const DashboardPage = ({ onNavigate, onLogout, userProgress }: DashboardPageProps) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const totalCompleted = Object.values(userProgress.completedVideos).flat().length + 
                         Object.values(userProgress.completedPodcasts).flat().length;
  
  const totalLessons = COURSES.reduce((acc, course) => acc + course.videos.length + course.podcasts.length, 0);
  const progressPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;
  
  const hours = Math.floor(userProgress.learningTime / 3600);
  const minutes = Math.floor((userProgress.learningTime % 3600) / 60);

  const allScores = Object.values(userProgress.quizScores).flat();
  const averageAccuracy = allScores.length > 0 
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) 
    : 0;

  const stats = [
    { icon: Book, label: "Courses Enrolled", value: userProgress.enrolledCourses.length.toString(), color: "bg-orange-50 text-orange-600" },
    { icon: CheckCircle2, label: "Lessons Completed", value: totalCompleted.toString(), color: "bg-green-50 text-green-600" },
    { icon: TrendingUp, label: "Quiz Accuracy", value: `${averageAccuracy}%`, color: "bg-blue-50 text-blue-600" },
    { icon: Clock, label: "Total Learning Time", value: `${hours}h ${minutes}m`, color: "bg-orange-50 text-orange-600" },
  ];

  const recentActivity = userProgress.activity;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Dashboard Navbar */}
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo className="h-16 w-auto" />
          </div>
          <button onClick={() => onNavigate('video', userProgress.enrolledCourses[0])} className="text-gray-500 hover:text-[#1e3a8a] font-bold text-sm transition-colors">My Learning</button>
        </div>
        <div className="flex items-center gap-6">
          <button className="p-2 text-gray-400 hover:text-[#1e3a8a] relative">
            <Bell size={20} />
            <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-white" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#1e3a8a] hover:bg-blue-100 transition-all border-2 border-transparent hover:border-[#1e3a8a]/20"
            >
              <User size={20} />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowProfileMenu(false)} 
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-2 mb-2 border-b border-gray-50">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account</p>
                    </div>
                    <button 
                      onClick={() => {
                        onNavigate('dashboard');
                        setShowProfileMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-[#1e3a8a] transition-all text-left font-semibold"
                    >
                      <BarChart3 size={18} />
                      Dashboard
                    </button>
                    <button 
                      onClick={() => {
                        onLogout();
                        setShowProfileMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 transition-all text-left font-semibold"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <main className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full space-y-10">
        {/* Welcome Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-[#1e3a8a]">
            {totalCompleted > 0 ? "Welcome back!" : "Welcome to VidyaSetu!"}
          </h1>
          <p className="text-gray-500 text-lg">
            {totalCompleted > 0 
              ? "Continue your learning journey and reach your goals." 
              : "Your learning journey starts here. Explore our courses to get started."}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center shrink-0`}>
                <stat.icon size={28} />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                <div className="text-2xl font-bold text-[#1e3a8a]">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dynamic Learning Card */}
            {userProgress.enrolledCourses.length > 0 ? (
              <div className="bg-[#1e3a8a] p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10 space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                    Continue Learning
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">{userProgress.enrolledCourses[0]}</h2>
                    <p className="text-blue-200 text-lg">Pick up where you left off</p>
                  </div>
                  <div className="pt-4">
                    <button 
                      onClick={() => onNavigate('video', userProgress.enrolledCourses[0])}
                      className="bg-white text-[#1e3a8a] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl hover:scale-105 transition-all"
                    >
                      Resume Learning <Play size={20} fill="currentColor" />
                    </button>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              </div>
            ) : (
              <div className="bg-[#1e3a8a] p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10 space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                    Get Started
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Ready to start your first course?</h2>
                    <p className="text-blue-200 text-lg">Choose from Python, DBMS, or Data Structure to begin.</p>
                  </div>
                  <div className="pt-4">
                    <button 
                      onClick={() => onNavigate('home')}
                      className="bg-white text-[#1e3a8a] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl hover:scale-105 transition-all"
                    >
                      Browse Courses <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              </div>
            )}

            {/* Weekly Activity Chart */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#1e3a8a]">Weekly Activity</h2>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${totalCompleted > 0 ? 'bg-orange-500' : 'bg-gray-200'} rounded-full`} />
                  <span className="text-sm font-bold text-gray-400">
                    {totalCompleted > 0 ? 'Learning Hours' : 'No activity yet'}
                  </span>
                </div>
              </div>
              <div className={`flex items-end justify-between h-64 pt-4 ${totalCompleted > 0 ? '' : 'opacity-30'}`}>
                {[
                  { day: 'Mon', h: totalCompleted > 0 ? '40%' : '0%' },
                  { day: 'Tue', h: totalCompleted > 0 ? '60%' : '0%' },
                  { day: 'Wed', h: totalCompleted > 0 ? '90%' : '0%' },
                  { day: 'Thu', h: totalCompleted > 0 ? '30%' : '0%' },
                  { day: 'Fri', h: totalCompleted > 0 ? '75%' : '0%' },
                  { day: 'Sat', h: totalCompleted > 0 ? '50%' : '0%' },
                  { day: 'Sun', h: totalCompleted > 0 ? '25%' : '0%' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 flex-1">
                    <div className="w-full px-2 md:px-4 flex flex-col justify-end h-full">
                      <div className="w-full bg-gray-50 rounded-t-xl relative overflow-hidden h-full">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: item.h }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="absolute bottom-0 left-0 right-0 bg-orange-500 rounded-t-xl"
                        />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-400">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Courses Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#1e3a8a]">My Courses</h2>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-sm font-bold text-orange-500 hover:underline"
                >
                  Explore all
                </button>
              </div>
              {userProgress.enrolledCourses.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {userProgress.enrolledCourses.map((courseTitle, i) => {
                    const course = COURSES.find(c => c.title === courseTitle);
                    const completedInCourse = (userProgress.completedVideos[courseTitle]?.length || 0) + 
                                              (userProgress.completedPodcasts[courseTitle]?.length || 0);
                    const totalInCourse = (course?.videos.length || 0) + (course?.podcasts.length || 0);
                    const courseProgress = totalInCourse > 0 ? Math.round((completedInCourse / totalInCourse) * 100) : 0;

                    return (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => onNavigate('video', courseTitle)}>
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                          <img 
                            src={course?.image} 
                            alt={courseTitle} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-center">
                            <h3 className="font-bold text-[#1e3a8a]">{courseTitle}</h3>
                            <span className="text-xs font-bold text-gray-400">{courseProgress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${courseProgress}%` }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-[2.5rem] border border-dashed border-gray-200 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <Book size={40} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#1e3a8a]">No courses enrolled</h3>
                    <p className="text-gray-500">Pick a course and start learning today!</p>
                  </div>
                  <button 
                    onClick={() => onNavigate('home')}
                    className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition-all text-sm"
                  >
                    Browse Courses
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#1e3a8a]">Recent Activity</h2>
              </div>
              {recentActivity.length > 0 ? (
                <div className="space-y-6">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-10 h-10 ${activity.color} rounded-xl flex items-center justify-center shrink-0`}>
                        <activity.icon size={18} />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-[#1e3a8a]">{activity.title}</div>
                        <div className="text-[10px] font-bold text-gray-400">{activity.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mx-auto">
                    <Zap size={32} />
                  </div>
                  <p className="text-gray-400 text-sm font-medium">No activity yet. Your progress will appear here.</p>
                </div>
              )}
            </div>

            {/* Learning Goals */}
            <div className="bg-[#0f172a] p-10 rounded-[2.5rem] text-white space-y-10 shadow-xl relative overflow-hidden">
              <h2 className="text-xl font-bold">Learning Goals</h2>
              <div className="flex justify-center relative">
                <div className="w-48 h-48 relative flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="16"
                      fill="transparent"
                      className="text-white/5"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray={502.6}
                      initial={{ strokeDashoffset: 502.6 }}
                      animate={{ strokeDashoffset: 502.6 * (1 - (progressPercent / 100)) }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="text-orange-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{progressPercent}%</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Complete</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-400 leading-relaxed">
                {totalCompleted > 0 
                  ? `You've completed ${totalCompleted} lessons! Keep going to reach your goals.`
                  : "Set your first learning goal and start your journey!"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
