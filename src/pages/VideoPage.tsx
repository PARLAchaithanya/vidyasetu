import { AIWidget } from "../components/AIWidget";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  User, 
  BarChart3, 
  LogOut, 
  PlayCircle, 
  Headphones, 
  CheckCircle2, 
  Play, 
  Pause,
  ChevronRight, 
  ArrowLeft, 
  SkipBack, 
  SkipForward,
  Volume2,
  FileText,
  ExternalLink
} from "lucide-react";
import { Logo } from "../components/Logo";
import { QuizSection } from "../components/QuizSection";
import { Page, UserProgress } from "../types";
import { COURSES } from "../constants";
import { QUIZZES } from "../quizzes";

interface VideoPageProps {
  onNavigate: (page: Page, courseTitle?: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  initialContentType?: 'Video' | 'Podcast';
  selectedCourseTitle?: string;
  userProgress: UserProgress;
  onProgressUpdate: (courseTitle: string, type: 'Video' | 'Podcast', id: number) => void;
  onQuizComplete: (courseTitle: string, lessonId: number, score: number, total: number) => void;
}

export const VideoPage = ({ 
  onNavigate, 
  isLoggedIn, 
  onLogout, 
  initialContentType = 'Video',
  selectedCourseTitle: initialCourseTitle,
  userProgress,
  onProgressUpdate,
  onQuizComplete
}: VideoPageProps) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState(initialCourseTitle || COURSES[0].title);
  const [contentType, setContentType] = useState<'Video' | 'Podcast'>(initialContentType);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  useEffect(() => {
    if (initialCourseTitle) {
      setSelectedCourseTitle(initialCourseTitle);
    }
  }, [initialCourseTitle]);

  useEffect(() => {
    setContentType(initialContentType);
  }, [initialContentType]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Reset lesson index when course or content type changes
  useEffect(() => {
    setCurrentLessonIndex(0);
    setActiveTab('Overview');
    setIsPlaying(false);
    setCurrentTime(0);
  }, [selectedCourseTitle, contentType]);

  const selectedCourse = COURSES.find(c => c.title === selectedCourseTitle) || COURSES[0];
  const lessons = contentType === 'Video' ? selectedCourse.videos : selectedCourse.podcasts;
  const currentLesson = lessons[currentLessonIndex] || lessons[0];

  const isCurrentLessonCompleted = (contentType === 'Video' 
    ? userProgress.completedVideos[selectedCourseTitle] 
    : userProgress.completedPodcasts[selectedCourseTitle])?.includes(currentLesson.id);

  const currentQuiz = QUIZZES.find(q => q.courseTitle === selectedCourseTitle && q.lessonId === currentLesson.id);

  const handleNext = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
      setActiveTab('Overview');
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
      setActiveTab('Overview');
      setIsPlaying(false);
    }
  };

  const handleQuizComplete = (score: number) => {
    if (currentQuiz) {
      onQuizComplete(selectedCourseTitle, currentLesson.id, score, currentQuiz.questions.length);
      // Also mark lesson as completed when quiz is finished
      onProgressUpdate(selectedCourseTitle, contentType, currentLesson.id);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      audioRef.current.currentTime = percentage * duration;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Video Navbar */}
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo className="h-16 w-auto" />
          </div>
          {isLoggedIn && (
            <button onClick={() => onNavigate('video')} className="text-gray-500 hover:text-[#1e3a8a] font-bold text-sm transition-colors">My Learning</button>
          )}
        </div>
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
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
          ) : (
            <button 
              onClick={() => onNavigate('login')}
              className="bg-[#1e3a8a] text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-md text-sm"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r border-gray-100 overflow-y-auto hidden lg:block">
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Course</div>
              <div className="relative group">
                <select 
                  value={selectedCourseTitle}
                  onChange={(e) => setSelectedCourseTitle(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-[#1e3a8a] appearance-none cursor-pointer focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  {COURSES.map(course => (
                    <option key={course.title} value={course.title}>{course.title}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <ChevronRight size={16} className="rotate-90" />
                </div>
              </div>

              {/* Content Type Toggle */}
              <div className="flex bg-gray-100 p-1 rounded-full">
                {(['Video', 'Podcast'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setContentType(type)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                      contentType === type 
                        ? 'bg-white text-[#1e3a8a] shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {type === 'Video' ? <PlayCircle size={12} /> : <Headphones size={12} />}
                    {type}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-gray-400">
                  <span>PROGRESS</span>
                  <span>
                    {(() => {
                      const course = COURSES.find(c => c.title === selectedCourseTitle);
                      const completed = (userProgress.completedVideos[selectedCourseTitle]?.length || 0) + 
                                        (userProgress.completedPodcasts[selectedCourseTitle]?.length || 0);
                      const total = (course?.videos.length || 0) + (course?.podcasts.length || 0);
                      return total > 0 ? Math.round((completed / total) * 100) : 0;
                    })()}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#f97316] rounded-full transition-all duration-500" 
                    style={{ 
                      width: `${(() => {
                        const course = COURSES.find(c => c.title === selectedCourseTitle);
                        const completed = (userProgress.completedVideos[selectedCourseTitle]?.length || 0) + 
                                          (userProgress.completedPodcasts[selectedCourseTitle]?.length || 0);
                        const total = (course?.videos.length || 0) + (course?.podcasts.length || 0);
                        return total > 0 ? Math.round((completed / total) * 100) : 0;
                      })()}%` 
                    }} 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {lessons.map((lesson, index) => {
                const isCompleted = (contentType === 'Video' 
                  ? userProgress.completedVideos[selectedCourseTitle] 
                  : userProgress.completedPodcasts[selectedCourseTitle])?.includes(lesson.id);

                return (
                  <div 
                    key={lesson.id}
                    onClick={() => {
                      setCurrentLessonIndex(index);
                      setActiveTab('Overview');
                    }}
                    className={`p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all duration-200 ${
                      index === currentLessonIndex 
                        ? 'bg-[#1e3a8a] text-white shadow-lg' 
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-100 text-green-600' :
                      index === currentLessonIndex ? 'bg-white/20 text-white' :
                      'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 size={16} /> :
                       index === currentLessonIndex ? <Play size={14} fill="currentColor" /> :
                       null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold truncate">{lesson.id}. {lesson.title}</div>
                      <div className={`text-[10px] ${index === currentLessonIndex ? 'text-blue-200' : 'text-gray-400'}`}>
                        {lesson.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-5xl mx-auto p-8 space-y-8">
            {contentType === 'Video' ? (
              <div className="aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                {(currentLesson as any).youtubeUrl ? (
                  (currentLesson as any).youtubeUrl.includes('.mp4') ? (
                    <video
                      src={(currentLesson as any).youtubeUrl}
                      controls
                      className="w-full h-full object-contain"
                      poster={selectedCourse.image}
                    />
                  ) : (
                    <iframe
                      className="w-full h-full pointer-events-auto"
                      width="100%"
                      height="100%"
                      src={(currentLesson as any).youtubeUrl}
                      title={currentLesson.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )
                ) : (
                  <>
                    <img 
                      src={selectedCourse.image} 
                      alt="Video Thumbnail" 
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group-hover:bg-white/30">
                        <Play size={40} fill="currentColor" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#1e3a8a] to-blue-900 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative flex flex-col md:flex-row items-center gap-12">
                  <div className="w-64 h-64 bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={selectedCourse.image} 
                      alt="Podcast Cover" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 space-y-8 text-center md:text-left">
                    <div className="space-y-2">
                      <div className="text-blue-300 text-xs font-bold uppercase tracking-widest">Now Playing</div>
                      <h2 className="text-4xl font-bold">{currentLesson.title}</h2>
                      <p className="text-blue-200 font-medium">{selectedCourseTitle} • Episode {currentLessonIndex + 1}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div 
                        className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden cursor-pointer"
                        onClick={handleProgressClick}
                      >
                        <div 
                          className="h-full bg-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300" 
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs font-bold text-blue-200">
                        <span>{formatTime(currentTime)}</span>
                        <span>{currentLesson.duration || '00:00'}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-8">
                      <button 
                        onClick={handlePrev}
                        disabled={currentLessonIndex === 0}
                        className={`text-blue-300 hover:text-white transition-colors ${currentLessonIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <SkipBack size={24} />
                      </button>
                      <button 
                        onClick={togglePlay}
                        className="w-16 h-16 bg-white text-[#1e3a8a] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl"
                      >
                        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
                      </button>
                      <button 
                        onClick={handleNext}
                        disabled={currentLessonIndex === lessons.length - 1}
                        className={`text-blue-300 hover:text-white transition-colors ${currentLessonIndex === lessons.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <SkipForward size={24} />
                      </button>
                      <div className="hidden md:flex items-center gap-2 text-blue-200">
                        <Volume2 size={20} />
                        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-white w-3/4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {currentLesson.audioUrl && (
                  <audio
                    ref={audioRef}
                    src={currentLesson.audioUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    className="hidden"
                  />
                )}
                {currentLesson.youtubeUrl && (
                  <div className="mt-8 aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src={currentLesson.youtubeUrl}
                      title={currentLesson.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                )}
              </div>
            )}

            <div className="relative z-[9999] space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold text-[#1e3a8a]">
                    {currentLesson.title}
                  </h1>
                  <p className="text-gray-500 font-medium">Course: {selectedCourseTitle}</p>
                </div>
    
              </div>

              <div className="flex gap-8 border-b border-gray-100">
                {['Overview', 'Notes', 'Quiz'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold transition-all relative ${
                      activeTab === tab ? 'text-[#1e3a8a]' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#1e3a8a] rounded-full" 
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 min-h-[300px]">
                {activeTab === 'Overview' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">Lesson Overview</h3>
                      {!isCurrentLessonCompleted && (
                        <button 
                          onClick={() => onProgressUpdate(selectedCourseTitle, contentType, currentLesson.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-xl text-xs font-bold hover:bg-green-100 transition-all"
                        >
                          <CheckCircle2 size={14} /> Mark as Completed
                        </button>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {currentLesson.title} is a comprehensive lesson designed to help you master the core concepts of {selectedCourseTitle}. 
                      In this session, we will explore the practical applications and theoretical foundations necessary for a deep understanding of the subject matter.
                    </p>
                  </div>
                )}
                {activeTab === 'Notes' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">Lesson Notes</h3>
                      {currentLesson.notesUrl && (
                        <a 
                          href={currentLesson.notesUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-xl text-xs font-bold hover:bg-orange-100 transition-all border border-orange-100"
                        >
                          <FileText size={14} /> View PDF Notes <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>In this lesson, we cover the fundamental concepts of {selectedCourseTitle}.</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Key concept 1: Understanding the basics</li>
                        <li>Key concept 2: Practical applications</li>
                        <li>Key concept 3: Best practices and common pitfalls</li>
                      </ul>
                      
                      {currentLesson.notesUrl ? (
                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm mt-8 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                              <FileText size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-[#1e3a8a]">Study Material Available</h4>
                              <p className="text-sm text-blue-600">Download the PDF for detailed notes and diagrams.</p>
                            </div>
                          </div>
                          <a 
                            href={currentLesson.notesUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold text-sm hover:bg-blue-900 transition-all shadow-md"
                          >
                            Download PDF
                          </a>
                        </div>
                      ) : (
                        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm mt-8">
                          <h4 className="font-bold text-[#1e3a8a] mb-2">Pro Tip</h4>
                          <p className="text-sm">Always practice what you learn immediately to reinforce your understanding.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {activeTab === 'Quiz' && (
                  <QuizSection 
                    quiz={currentQuiz} 
                    onComplete={handleQuizComplete}
                  />
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8">
              <button 
                onClick={handlePrev}
                disabled={currentLessonIndex === 0}
                className={`flex items-center gap-3 px-8 py-4 border border-gray-200 rounded-2xl font-bold text-gray-500 hover:bg-gray-50 transition-all ${currentLessonIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ArrowLeft size={20} /> Previous
              </button>
              <button 
                onClick={handleNext}
                disabled={currentLessonIndex === lessons.length - 1}
                className={`flex items-center gap-3 px-8 py-4 bg-[#1e3a8a] text-white rounded-2xl font-bold shadow-xl hover:bg-blue-900 transition-all ${currentLessonIndex === lessons.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next <ChevronRight size={20} />
              </button>
            </div>
          </div>
            <AIWidget />
        </main>
      </div>
    </div>
  );
};
